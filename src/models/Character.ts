import {Dice} from '@models/Dice';
import {CharClass, baseClass} from '@models/CharClass';

type AblilityScore = number;

export interface Stats {
  strenght: AblilityScore;
  dexterity: AblilityScore;
  constitution: AblilityScore;
  intelligence: AblilityScore;
  wisdom: AblilityScore;
  charisma: AblilityScore;
}

type CharConfig = {
  name?: string;
  class?: CharClass;
  stats?: Stats;
  level?: number;
  hitDice?: Dice;
  baseAC?: number;
};

export default class Character {
  private name: string;
  private class: CharClass;
  private stats: Stats;
  private level: number;
  private hitDice: Dice;
  private maxHealth: number;
  private health: number;
  private baseAC: number;

  constructor(config: CharConfig) {
    this.name = config.name || 'Unnamed';
    this.class = config.class || baseClass;
    this.stats = config.stats || this.class.stats;
    this.level = config.level || 1;
    this.hitDice = config.hitDice || new Dice(10);

    this.maxHealth = this.calculateHealth();
    this.health = this.maxHealth;
    this.baseAC = config.baseAC || 10;
  }

  /** Calculate current max health */
  private calculateHealth() {
    const lv1Health = this.hitDice.sides + this.getModifier(this.stats.constitution);
    return (
      lv1Health +
      (this.level - 1) * (lv1Health / 2 + this.getModifier(this.stats.constitution))
    );
  }

  /** Get ablility score modifier */
  private getModifier(score: AblilityScore) {
    // Ability modifier = (Ability score / 2) – 5, rounded down
    return Math.floor(score / 2 - 5);
  }

  /** Calculate characters current armor class */
  private getArmorClass() {
    // TODO - for unarmored feat etc.
    //const acBonus = this.getModifier(this.stats.dexterity);
    const acBonus = 0;
    return this.baseAC + acBonus + this.getModifier(this.stats.constitution);
  }

  /** Roll dice and return if the ability check is passed or not */
  private rollCheck(dice: Dice, DC: number, modifier: number, advantage = false) {
    let roll: undefined | number;
    if (advantage) {
      const roll1 = dice.roll();
      const roll2 = dice.roll();

      roll = roll1 > roll2 ? roll1 : roll2;
    } else roll = dice.roll();

    const result = roll + modifier;
    return result >= DC;
  }

  /** Get current character information, including stats */
  GetCharInfo() {
    return {
      name: this.name,
      stats: this.stats,
      level: this.level,
      maxHealth: this.maxHealth,
      health: this.health,
      armorClass: this.getArmorClass(),
    };
  }

  /** Level up this character */
  LevelUp(num = 1) {
    this.level += num;
    // TODO - STAT upgrades
    this.maxHealth = this.calculateHealth();
  }

  WisdomCheck(dice: Dice, DC: number, advantage = false) {
    return this.rollCheck(dice, DC, this.getModifier(this.stats.wisdom), advantage);
  }
}

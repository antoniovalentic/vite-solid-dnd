import {Stats} from '@models/Character';

type PcClass = 'mage' | 'ranger' | 'rogue';
type NpcClass = 'wildlife' | 'monster';
type ClassName = PcClass | NpcClass | 'noClass';

export interface ICharClass {
  name: ClassName;
  stats: Stats;
}

export const baseClass: CharClass = {
  name: 'noClass',
  stats: {
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    intelligence: 10,
    charisma: 10,
  },
};

type ClassConfig = {
  name?: ClassName;
  stats?: Stats;
};

export class CharClass implements ICharClass {
  public name: ClassName;
  public stats: Stats;

  constructor(config: ClassConfig) {
    this.name = config.name || baseClass.name;
    this.stats = config.stats || baseClass.stats;
  }
}

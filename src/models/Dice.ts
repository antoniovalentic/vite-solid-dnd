export class Dice {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  roll(minVal?: number) {
    const min = minVal || 1;
    const max = this.sides;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

import { Lightness } from '../index';

import { Color } from './color';

export class Palette {
  protected hue!: number;
  protected saturation!: number;
  protected lightness!: Lightness;

  constructor({ props }: Color) {
    Object.assign(this, props);
  }

  public create() {
    let colors: string[] = [];

    for (let i = 1; 9 >= i; i++) {
      const lightness = this.lightness.base + this.lightness.step * (9 - i);

      colors.push(`hsl(${this.hue}, ${this.saturation}%, ${lightness}%)`);
    }

    return colors;
  }
}

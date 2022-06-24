import { Lightness } from '../index';

import { Color } from './color';

export class Shades {
  protected hue!: number;
  protected saturation!: number;
  protected lightness!: Lightness;

  constructor({ props }: Color) {
    Object.assign(this, props);
  }

  public create() {
    let colors: string[] = [];

    colors.push(
      `hsl(${this.hue}, ${this.saturation}%, ${60 - this.lightness.step}%)`
    );
    colors.push(`hsl(${this.hue}, ${this.saturation}%, ${60}%)`);
    colors.push(
      `hsl(${this.hue}, ${this.saturation}%, ${60 + this.lightness.step}%)`
    );

    return colors;
  }
}

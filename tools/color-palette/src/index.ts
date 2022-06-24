export type Lightness = {
  base: number;
  step: number;
};

export type ColorProps = {
  hue: number;
  saturation: number;
  lightness: Lightness;
};

export { Color } from './lib/color';
export { Palette } from './lib/palette';
export { Shades } from './lib/shades';

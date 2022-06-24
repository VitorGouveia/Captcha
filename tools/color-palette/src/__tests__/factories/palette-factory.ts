import { ColorProps } from '../../index';

export function PaletteFactory(): ColorProps {
  return {
    hue: 0,
    saturation: 0,
    lightness: {
      base: 10,
      step: 10,
    },
  };
}

import { ColorProps } from '../../index';

export function ColorFactory(): ColorProps {
  return {
    hue: 0,
    saturation: 0,
    lightness: {
      base: 0,
      step: 0,
    },
  };
}

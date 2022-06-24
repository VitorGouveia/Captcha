import { ColorProps } from '../index';

import { Color } from './color';
import { ColorFactory } from '../__tests__/factories/color-factory';

describe('Color', () => {
  it('should initialize a color object', () => {
    const { hue, lightness, saturation } = ColorFactory();

    const sut = new Color({
      hue,
      saturation,
      lightness,
    });

    expect(sut.props).toEqual<ColorProps>({
      hue,
      saturation,
      lightness,
    });
  });

  it('should create a color object', () => {
    const { hue, lightness, saturation } = ColorFactory();

    const [sut] = Color.create(
      new Color({
        hue,
        saturation,
        lightness,
      })
    );

    expect(sut.props).toEqual<ColorProps>({
      hue,
      saturation,
      lightness,
    });
  });
});

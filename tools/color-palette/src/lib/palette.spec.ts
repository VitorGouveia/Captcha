import { Palette } from './palette';
import { PaletteFactory } from '../__tests__/factories/palette-factory';

describe('Palette', () => {
  it('should initialize a palette object', () => {
    const { hue, lightness, saturation } = PaletteFactory();

    const sut = new Palette({
      props: {
        hue,
        lightness,
        saturation,
      },
    }).create();

    expect(sut.length).toBe(9);
    expect(sut[0]).toBe('hsl(0, 0%, 90%)');
  });
});

import { ColorProps } from '../index';

export class Color {
  props: ColorProps;

  constructor(_props: ColorProps) {
    this.props = _props;
  }

  public static create(...colors: Color[]) {
    return colors;
  }
}

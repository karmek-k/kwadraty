import BrickColor from '../BrickColor';
import AbstractPiece from './AbstractPiece';
import PieceDimesions from './PieceDimesions';

export default class ZPiece extends AbstractPiece {
  color(): BrickColor {
    return BrickColor.Red;
  }

  dimensions(): PieceDimesions {
    return {
      length: 3,
      height: 2
    };
  }

  shape(): (' ' | '*')[] {
    // prettier-ignore
    return [
      '*', '*', ' ',
      ' ', '*', '*'
    ];
  }
}

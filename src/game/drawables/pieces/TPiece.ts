import BrickColor from '../BrickColor';
import AbstractPiece from './AbstractPiece';
import PieceDimesions from './PieceDimesions';

export default class TPiece extends AbstractPiece {
  color(): BrickColor {
    return BrickColor.Purple;
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
      ' ', '*', ' ',
      '*', '*', '*'
    ];
  }
}

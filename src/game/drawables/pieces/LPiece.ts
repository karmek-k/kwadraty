import BrickColor from '../BrickColor';
import AbstractPiece from './AbstractPiece';
import PieceDimesions from './PieceDimesions';

export default class LPiece extends AbstractPiece {
  color(): BrickColor {
    return BrickColor.Orange;
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
      ' ', ' ', '*',
      '*', '*', '*'
    ];
  }
}

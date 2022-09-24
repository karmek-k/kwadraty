import BrickColor from '../BrickColor';
import AbstractPiece from './AbstractPiece';
import PieceDimesions from './PieceDimesions';

export default class IPiece extends AbstractPiece {
  color(): BrickColor {
    return BrickColor.Turquoise;
  }

  dimensions(): PieceDimesions {
    return {
      length: 4,
      height: 1
    };
  }

  shape(): (' ' | '*')[] {
    // prettier-ignore
    return [
      '*', '*', '*', '*'
    ];
  }
}

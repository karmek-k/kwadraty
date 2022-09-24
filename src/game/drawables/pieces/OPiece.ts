import BrickColor from '../BrickColor';
import AbstractPiece from './AbstractPiece';
import PieceDimesions from './PieceDimesions';

export default class OPiece extends AbstractPiece {
  color(): BrickColor {
    return BrickColor.Yellow;
  }

  dimensions(): PieceDimesions {
    return {
      length: 2,
      height: 2
    };
  }

  shape(): (' ' | '*')[] {
    // prettier-ignore
    return [
      '*', '*',
      '*', '*' 
    ];
  }
}

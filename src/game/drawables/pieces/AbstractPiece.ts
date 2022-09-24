import BrickColor from '../BrickColor';
import Drawable from '../Drawable';
import PieceDimensions from './PieceDimesions';

export default abstract class AbstractPiece implements Drawable {
  draw(ctx: CanvasRenderingContext2D): void {
    // TODO: implement
  }

  abstract dimensions(): PieceDimensions;
  abstract color(): BrickColor;
  abstract shape(): Array<' ' | '*'>;
}

import Brick from '../Brick';
import BrickColor from '../BrickColor';
import PieceDimensions from './PieceDimesions';

export default abstract class AbstractPiece {
  bricks(originX: number, originY: number): Brick[] {
    const result = [];
    const { length, height } = this.dimensions();

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < height; ++j) {
        if (this.shouldIgnore(i, j)) {
          continue;
        }

        const brick = new Brick(this.color());

        const side = brick.getSide();
        const x = originX + i * side;
        const y = originY + j * side;
        brick.setPosition(x, y);

        result.push(brick);
      }
    }

    return result;
  }

  private shouldIgnore(x: number, y: number): boolean {
    const { length } = this.dimensions();
    const shape = this.shape();

    return shape[length * y + x] === ' ';
  }

  abstract dimensions(): PieceDimensions;
  abstract color(): BrickColor;
  abstract shape(): Array<' ' | '*'>;
}

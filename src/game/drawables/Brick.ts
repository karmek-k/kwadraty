import BrickColor from './BrickColor';
import Drawable from './Drawable';

export default class Brick implements Drawable {
  static defaultSide = 30;

  private x: number;
  private y: number;
  private side: number;
  private color: BrickColor;

  constructor(color: BrickColor) {
    this.x = 0;
    this.y = 0;
    this.side = Brick.defaultSide;

    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  setSide(side: number): void {
    if (side <= 0) {
      throw new Error(`Invalid brick side: ${side}`);
    }

    this.side = side;
  }

  getSide(): number {
    return this.side;
  }
}

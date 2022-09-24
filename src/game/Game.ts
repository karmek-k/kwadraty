import Brick from './drawables/Brick';
import BrickColor from './drawables/bricks/BrickColor';
import Renderer from './Renderer';

export default class Game {
  constructor(private canvas: HTMLCanvasElement) {}

  start(): void {
    const renderer = new Renderer(this.assertCtx());

    renderer.setDrawables(
      [
        new Brick(BrickColor.Orange),
        new Brick(BrickColor.Blue),
        new Brick(BrickColor.Green),
        new Brick(BrickColor.Purple),
        new Brick(BrickColor.Red),
        new Brick(BrickColor.Turquoise),
        new Brick(BrickColor.Yellow)
      ].map((brick, i) => {
        const side = 30;
        brick.setSide(side);
        brick.setPosition(i * side, 0);
        return brick;
      })
    );

    renderer.render();
  }

  private assertCtx(): CanvasRenderingContext2D {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Creating a 2D canvas context failed');
    }

    return ctx;
  }
}

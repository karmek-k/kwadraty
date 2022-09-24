import Drawable from './Drawable';

export default class TestObject implements Drawable {
  /**
   * From https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#rectangular_shape_example
   */
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

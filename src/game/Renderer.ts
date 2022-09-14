export default class Renderer {
  constructor(private ctx: CanvasRenderingContext2D) {}

  /**
   * From https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#rectangular_shape_example
   */
  testRendering() {
    this.ctx.fillRect(25, 25, 100, 100);
    this.ctx.clearRect(45, 45, 60, 60);
    this.ctx.strokeRect(50, 50, 50, 50);
  }
}

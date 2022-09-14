export default class Renderer {
  constructor(private ctx: CanvasRenderingContext2D) {}

  testRendering() {
    this.ctx.fillRect(25, 25, 100, 100);
    this.ctx.clearRect(45, 45, 60, 60);
    this.ctx.strokeRect(50, 50, 50, 50);
  }
}

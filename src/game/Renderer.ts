import Drawable from './drawables/Drawable';

export default class Renderer {
  private drawables: Drawable[];

  constructor(private ctx: CanvasRenderingContext2D) {
    this.drawables = [];
  }

  render(): void {
    // weird `this` behavior
    this.drawables.forEach(item => this.draw(item));
  }

  setDrawables(drawables: Drawable[]): void {
    this.drawables = drawables;
  }

  private draw(drawable: Drawable): void {
    drawable.draw(this.ctx);
  }
}

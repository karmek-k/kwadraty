import TestObject from './drawables/TestObject';
import Renderer from './Renderer';

export default class Game {
  constructor(private canvas: HTMLCanvasElement) {}

  start(): void {
    const renderer = new Renderer(this.assertCtx());

    renderer.setDrawables([new TestObject()]);

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

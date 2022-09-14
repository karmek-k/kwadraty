import Renderer from './Renderer';

export default class Game {
  constructor(private canvas: HTMLCanvasElement) {}

  start() {
    const renderer = new Renderer(this.assertCtx());
    renderer.testRendering();
  }

  private assertCtx() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Creating a 2D canvas context failed');
    }

    return ctx;
  }
}

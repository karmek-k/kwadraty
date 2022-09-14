import Game from './game/Game';

const appId = 'app';
const app = document.getElementById(appId);

if (!app) {
  throw new Error(`No elements that fulfill the #${appId} selector found`);
}

const canvas = document.createElement('canvas');
app.appendChild(canvas);

const game = new Game(canvas);
game.start();

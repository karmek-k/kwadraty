import Game from './game/Game';

const appId = 'app';
const app = document.getElementById(appId);

if (!app) {
  throw new Error(`No elements that fulfill the #${appId} selector found`);
}

// Make canvas
const width = 800;
const height = 600;

const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

app.appendChild(canvas);

// Create and start the game
const game = new Game(canvas);
game.start();

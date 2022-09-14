import Game from './game/Game';

const appId = 'app';
const app = document.getElementById(appId);

if (!app) {
  throw new Error(`No elements that fulfill the #${appId} selector found`);
}

// Make canvas
const canvas = document.createElement('canvas');
app.appendChild(canvas);

// Create and start the game
const game = new Game(canvas);
game.setSize(800, 600);
game.start();

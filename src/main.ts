import Phaser from 'phaser';
import { MainScene } from './game/scenes/MainScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 1280,
  height: 720,
  backgroundColor: '#10151f',
  scene: [MainScene]
};

void new Phaser.Game(gameConfig);

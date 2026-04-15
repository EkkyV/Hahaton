import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  public constructor() {
    super('MainScene');
  }

  public create(): void {
    const gridSpacing: number = 32;
    const gridColor: number = 0x2a3342;
    const gridAlpha: number = 0.35;
    const width: number = this.scale.width;
    const height: number = this.scale.height;

    const graphics: Phaser.GameObjects.Graphics = this.add.graphics();
    graphics.lineStyle(1, gridColor, gridAlpha);

    for (let x: number = 0; x <= width; x += gridSpacing) {
      graphics.beginPath();
      graphics.moveTo(x, 0);
      graphics.lineTo(x, height);
      graphics.strokePath();
    }

    for (let y: number = 0; y <= height; y += gridSpacing) {
      graphics.beginPath();
      graphics.moveTo(0, y);
      graphics.lineTo(width, y);
      graphics.strokePath();
    }

    this.add.text(width / 2, height / 2, 'Factory of Numbers MVP', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '42px',
      color: '#e8eef9'
    }).setOrigin(0.5);
  }
}

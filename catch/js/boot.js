import Preloader from './preloader.js';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#333333',
    scene: [Preloader],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'catch',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 768
    },
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    }
};

let game = new Phaser.Game(config);

import Preloader from './preloader.js';
import Menu from './menu.js';
import Game from './game.js';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#EEEEEE',
    scene: [Preloader, Menu, Game],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'canvas',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 768
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);
import Player from './player.js';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }

    create() {
        var player = new Player(this,512,600,"ihangry");
    }
}

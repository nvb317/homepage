import Player from './player.js';
import Items from './items.js';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
        this.player;
        this.cursor;
        this.score = 0;
        this.scoretext;
    }

    create() {
        this.player = new Player(this,512,670,"ihangry");
        var item = new Items(this,512,0,"spacey");
        item.setScale(0.1)
        this.player.setGravityY(-200);
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.player.velocity = 0;
        this.cursor = this.input.keyboard.createCursorKeys();
        this.scoretext = this.add.text(20, 20, 'Score: ' + this.score, { fontFamily: 'Arial', fontSize: 40, color: '#e3f2ed' });
    }
    update (){
        if (this.cursor.left.isDown)
        {
            this.player.velocity -= 30;
        }
        if (this.cursor.right.isDown)
        {
            this.player.velocity += 30;
        }
        this.player.setVelocityX(this.player.velocity);
        this.player.velocity *= 0.95;
    }
}

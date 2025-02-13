import Player from './player.js';
import Items from './items.js';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
        this.player;
        this.item;
        this.cursor;
        this.score = 0;
        this.scoretext;
    }

    create() {
        this.player = new Player(this,512,670,"ihangry");
        this.player.setScale(0.6);
        this.item = new Items(this,512,0,"spacey");
        this.item.setScale(0.06)
        this.player.setGravityY(-200);
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.player.velocity = 0;
        this.cursor = this.input.keyboard.createCursorKeys();
        this.scoretext = this.add.text(20, 20, 'Score: 0', { fontFamily: 'Arial', fontSize: 40, color: '#e3f2ed' });
        this.physics.add.overlap(this.player, this.item, (player, item) => this.collect());
    }
    update (){
        if (this.cursor.left.isDown)
        {
            this.player.velocity -= 20;
        }
        if (this.cursor.right.isDown)
        {
            this.player.velocity += 20;
        }
        this.player.setVelocityX(this.player.velocity);
        this.player.velocity *= 0.95;

        if(this.item.y > 700) {
            this.item.y = -10;
            this.item.x = Math.random() * 1000;
            this.item.setVelocityY(0);
        }
    }
    collect() {
        this.score += 1;
        this.item.y = -10;
        this.item.x = Math.random() * 1000;
        this.item.setVelocityY(0);
        this.scoretext.setText('Score: ' + this.score);
    }
}

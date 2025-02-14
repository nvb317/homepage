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
        this.player.setGravityY(-200);
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.player.velocity = 0;
        
        this.item = this.physics.add.group({
            key: 'spacey',
            repeat: 3,
        });
        this.item.setScaleXY(0.06,0.06);
        
        this.cursor = this.input.keyboard.createCursorKeys();
        this.scoretext = this.add.text(20, 20, 'Score: 0', { fontFamily: 'Arial', fontSize: 40, color: '#e3f2ed' });
        this.physics.add.overlap(this.player, this.item, this.collect,null, this);
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
        
        this.item.children.iterate(child =>
        {
            if(child.y > 700) {
                child.y = -10;
                child.x = Math.random() * 1000;
                child.setVelocityY(0);
            }
        });

    }
    collect(player, item) {
        this.score += 1;
        this.scoretext.setText('Score: ' + this.score);
        
        item.y = -10;
        item.x = Math.random() * 1000;
        item.setVelocityY(0);
    }
}

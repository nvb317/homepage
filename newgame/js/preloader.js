export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
        this.loadText;
    }

    preload()
    {
        this.loadText = this.add.text(512, 360, 'Loading...', { fontFamily: 'Covered By Your Grace', fontSize: 74, color: '#1889b2' });
        this.loadText.setOrigin(0.5);
        this.load.setPath('./assets');
        this.load.spritesheet('player', 'player.png', { frameWidth: 75, frameHeight: 200 });
        this.load.tilemapTiledJSON('map', 'lvl1.json');
        this.load.image('platforms', 'platforms.png');
        this.load.image('portalimg', 'portal.png')
    }
    create() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 9 }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { start: 10, end: 19 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 20, end: 29 }),
            frameRate: 20,
            repeat: -1
        });
        if (this.sound.locked) {
            this.loadText.setText('Click to Start');
    
            this.input.once('pointerdown', () => {
                this.scene.start("Menu");
            
            });
        }
        else
        {
            this.scene.start("Menu");
        }
    }
}
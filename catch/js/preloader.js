export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
        this.loadText;
    }

    preload()
    {
        this.loadText = this.add.text(512, 360, 'Loading ...', { fontFamily: 'Arial', fontSize: 74, color: '#e3f2ed' });
        this.loadText.setOrigin(0.5);
        this.load.setPath('./assets');
        this.load.image(['spacey','ihangry']);
    }
    create() {
        if (this.sound.locked) {
            this.loadText.setText('Click to Start');
    
            this.input.once('pointerdown', () => {
    
            this.scene.start('Game');
    
            });
        }
        else
        {
            this.scene.start('Game');
        }
    }
}

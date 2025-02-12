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
        this.loadText.setStroke('#203c5b', 6);
        this.loadText.setShadow(2, 2, '#2d2d2d', 4, true, false);
        this.load.setPath('../assets');
        this.load('ashwanth.png');
    }
}

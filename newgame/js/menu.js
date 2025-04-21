export default class Menu extends Phaser.Scene {
    constructor () {
        super("Menu");
        this.title;
        this.playbutton;
        this.stickman;
    }
    create() {
        this.title = this.add.text(20, -70, 'Stickman Jump', { fontFamily: 'Covered By Your Grace', fontSize: 100, color: '#555555' });
        this.playbutton = this.add.text(20, 700, 'Play', { fontFamily: 'Covered By Your Grace', fontSize: 60, color: '#555555' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("Game"))
        .on('pointerover', () => this.playbutton.setColor("#1889b2"))
        .on('pointerout', () => this.playbutton.setColor("#555555"));
        this.stickman = this.add.sprite(800,400,"player")
        .anims.play('left')
        .setScale(2);

        var titletween = this.tweens.add({
            targets: this.title,
            y: 250,
            ease: 'Power2',
            duration: 1000,
        });
        var buttontween = this.tweens.add({
            targets: this.playbutton,
            y: 400,
            ease: 'Power2',
            duration: 1000,
        });
    }
}

export default class Game extends Phaser.Scene {
    constructor() {
        super("Game");
        this.player;
        this.cursors;
        this.layer;
        this.tiles;
    }
    create() {
        this.map = this.make.tilemap({ key: 'map'});
        this.tiles = this.map.addTilesetImage('platforms', 'platforms');
        this.portal = this.map.addTilesetImage('portal', 'portalimg');
        this.layer = this.map.createLayer('level', [this.tiles, this.portal], 0, 0);
        this.map.setCollision([ 1,2,3,4,5,6,7 ]);

        const caption1 = this.add.text(2048, 360, 'Leap of Faith', { fontFamily: 'Covered By Your Grace', fontSize: 74, color: '#1889b2' });

        this.player = this.physics.add.sprite(300,3000,"player",1)
        .anims.play('idle')
        .setMaxVelocity(999,1200)
        .setScale(1.5);
        this.player.VelocityX = 0;

        this.physics.add.collider(this.player, this.layer);
        this.cameras.main.startFollow(this.player, true);
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
        if (this.cursors.left.isDown) {
            this.player.VelocityX -= 50;
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.VelocityX += 50;
            this.player.anims.play('right', true);
        }
        else{
            this.player.anims.play('idle', true);
        }
        if (this.cursors.up.isDown && this.player.body.blocked.down) {
            this.player.setVelocityY(-850);
        }
        if(this.player.y > 4500) {
            this.player.setPosition(300,3000);
        }
        this.player.VelocityX *= 0.9;
        this.player.setVelocityX(this.player.VelocityX);
    }
}
export default class Player extends Phaser.Physics.Arcade.Image
{
    constructor(scene,x,y,texture) {
        super(scene,x,y,texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}
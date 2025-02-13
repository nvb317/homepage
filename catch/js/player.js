export default class Player extends Phaser.Physics.Arcade.Image
{
    constructor(scene,x,y,texture) {
        super(scene,x,y,texture);
        self.setGravity(0,0);
    }
}
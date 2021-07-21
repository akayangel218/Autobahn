// car goes here
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 15;
        this.setDepth(1);
        this.body.setAllowGravity(true);
        this.body.enable = true;
        this.body.immovable = true;
        this.body.setSize(30, 40);
    }

    update() {
        // left/right movement
        if (keyLEFT.isDown) {
            //this.x -= this.moveSpeed;
            //this.car.body.setVelocityX(30);
            //this.y += this.moveSpeed;

        } else if (keyRIGHT.isDown) {
            //this.x += this.moveSpeed;
            //this.car.body.setVelocityX(-30);
            //this.y -= this.moveSpeed;
        }

    }

    reset() {

    }
}
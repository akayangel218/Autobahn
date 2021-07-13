// car goes here
class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        super.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 2;
    }

    update() {
        // left/right movement
        if (keyLEFT.isDown) {
            this.x -= this.moveSpeed;
            this.y += this.moveSpeed;
        }
        else if (keyRIGHT.isDown) {
            this.x += this.moveSpeed;
            this.y -= this.moveSpeed;
        }
    }

    reset() {
        
    }
}
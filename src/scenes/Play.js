class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('background', './assets/Placeholder_BG2.png');
    }

    create() {
        //place tile sprite
        //this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.background = this.physics.add.sprite(0, 0, 'background').setScale(1, 1).setOrigin(0);

        //this.background.setAllowGravity(true);
    }

    update() {
        this.background.setVelocityY(30);
        this.background.setVelocityX(-10);
        if (this.background.y > 100) {
            this.background.body.reset();

        }
        //this.background.tilePositionY -= 1.5;
        //this.background.tilePositionX += 1;


    }

    // helper functions go here
}
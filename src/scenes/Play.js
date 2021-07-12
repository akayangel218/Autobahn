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
        //this.background = this.add.sprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.background = this.physics.add.sprite(0, 0, 'background').setOrigin(0);
        //this.background.setAllowGravity(true);
    }

    update() {
        this.background.setVelocityY(10);
        this.background.setVelocityX(-10);
        //this.background.setDragX(-6);

    }

    // helper functions go here
}
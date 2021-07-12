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
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
    }

    update() {
        //this.background.tilePositionY -= 6;
        //this.background.tilePositionx -= 2;
    }

    // helper functions go here
}
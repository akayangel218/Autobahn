class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('background', './assets/Placeholder_BG.png');
    }

    create() {
        //place tile sprite
        this.track = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
    }

    update() {

    }

    // helper functions go here
}
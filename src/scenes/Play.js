class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('grass', './assets/green_bg.png');
        this.load.image('road', './assets/road_bg.png');
    }

    create() {
        //place tile sprite
        this.grass = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass').setOrigin(0, 0);
        this.road = this.physics.add.sprite(0, 0, 'road').setScale(1, 1).setOrigin(0);

        //this.background.setAllowGravity(true);
    }

    update() {
        this.road.setVelocityY(30);
        this.road.setVelocityX(-10);
        if (this.road.y > 50) {
            this.road.body.reset();

        }
        //this.background.tilePositionY -= 1.5;
        //this.background.tilePositionX += 1;


    }

    // helper functions go here
}
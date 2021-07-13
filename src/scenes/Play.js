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
        this.road = this.physics.add.sprite(-10, -600, 'road').setOrigin(0);
        //this.road.scaleY = 2;

        //this.background.setAllowGravity(true);
    }

    update() {
        this.road.scaleY = 2.5;
        this.road.setVelocityY(100);
        this.road.setVelocityX(-10);
        //this.road.setScale(1, 2);
        if (this.road.y > -500) {
            //this.road.body.reset(0, -200);
            this.road = this.physics.add.sprite(110, -1400, 'road').setOrigin(0);


        }
        //this.background.tilePositionY -= 1.5;
        //this.background.tilePositionX += 1;


    }

    // helper functions go here
}
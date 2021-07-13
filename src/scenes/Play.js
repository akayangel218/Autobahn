class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('grass', './assets/green_bg.png');
        this.load.image('road', './assets/road_bg.png');
        this.load.image('car', './assets/Placeholder_PC.png');
    }

    create() {
        //this.physics.world.gravity.y = 450;

        //place tile sprite
        this.grass = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass').setOrigin(0, 0);
        this.road = this.physics.add.sprite(40, -200, 'road').setOrigin(0);
        this.road.setAllowGravity = false;
        this.car = new Player(this, 200, 300, 'car').setOrigin(0, 0);
        //this.car.setAngle(-30);
        //this.road.body.enable = false;
        //this.road.scaleY = 2;
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        //this.background.setAllowGravity(true);
    }

    update() {

        this.road.setDepth(0);
        this.road.setAllowGravity = false;
        this.road.scaleY = 1.5;
        this.road.scaleX = 0.7;
        this.road.setVelocityY(100);
        this.road.setVelocityX(-15);

        //this.road.setScale(1, 2);
        if (this.road.y > -100) {
            //this.road.body.reset(0, -200);
            this.road = this.physics.add.sprite(150, -800, 'road').setOrigin(0);


        }
        this.grass.tilePositionY -= 4;


        // car left/right movement
        if (keyLEFT.isDown) {
            //this.x -= this.moveSpeed;
            this.car.body.setVelocityX(-70);
            //this.y += this.moveSpeed;

        } else if (keyRIGHT.isDown) {
            //this.x += this.moveSpeed;
            this.car.body.setVelocityX(70);
            //this.y -= this.moveSpeed;
        } else {
            this.car.body.setVelocityX(0);
        }
        // random obstacle right lane
        if (1 == Phaser.Math.RND.integerInRange(1, 300)) {
            let obs = this.physics.add.sprite(250, 10, 'car').setSize(30, 40, 20, 60).setVelocityX(-15).setVelocityY(100).setOrigin(0);
            //this.obs.setVelocityY(-100);
            //this.obs.body.setDepth(1);
            //obsArr.push(obs);



        }

    }

    // helper functions go here
}
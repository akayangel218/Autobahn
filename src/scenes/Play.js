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

        // score UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize * 2, 0x0000FF).setOrigin(0, 0);

        // GAME OVER flag
        this.gameOver = false;
        // initialize score
        this.p1Score = 0;

        //place tile sprite
        this.grass = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass').setOrigin(0, 0);
        this.road = this.physics.add.sprite(40, -200, 'road').setOrigin(0);
        this.road.setAllowGravity = false;

        // place player car
        this.car = new Player(this, 200, 300, 'car').setOrigin(0, 0);
        //this.car.setAngle(-30);
        //this.road.body.enable = false;
        //this.road.scaleY = 2;
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        //this.background.setAllowGravity(true);

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(20, 15, this.p1Score, scoreConfig);
    }

    update() {

        // game over
        if (this.gameOver) {
            //music.stop();
            this.scene.start("menuScene");
        }

        if (!this.gameOver) {
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
            } else if (keyUP.isDown) {
                this.car.body.setVelocityY(-25);
            } else if (keyDOWN.isDown) {
                this.car.body.setVelocityY(40);
            } else {
                this.car.body.setVelocityX(0);
                this.car.body.setVelocityY(0);
            }
            // random obstacle left lane
            if (1 == Phaser.Math.RND.integerInRange(1, 700)) {
                let obs = this.physics.add.sprite(225, 10, 'car').setSize(30, 40, 20, 60).setVelocityX(-15).setVelocityY(100).setOrigin(0);
                //this.obs.setVelocityY(-100);
                //this.obs.body.setDepth(1);
                obsArr.push(obs);
                this.p1Score += 10;
                this.scoreLeft.text = this.p1Score;


            }


            // random obstacle right lane
            if (1 == Phaser.Math.RND.integerInRange(1, 700)) {
                let obs = this.physics.add.sprite(325, 10, 'car').setSize(30, 40, 20, 60).setVelocityX(-15).setVelocityY(100).setOrigin(0);
                //this.obs.setVelocityY(-100);
                //this.obs.body.setDepth(1);
                obsArr.push(obs);
                this.p1Score += 10;
                this.scoreLeft.text = this.p1Score;


            }
            // check for collisions

            this.physics.add.collider(this.car, obsArr, (p, e) => {
                //console.log('collided ', e);
                this.gameOver = true;
            });
        }

    }

    // helper functions go here
}
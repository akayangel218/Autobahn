class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('grass', './assets/green_bg.png');
        this.load.image('road', './assets/newBG.png');
        this.load.image('car', './assets/playerCar.png');
        this.load.image('yellowCar', './assets/carYellow.png');
        this.load.image('redCar', './assets/carRed.png');
        this.load.image('girl1', './assets/girl1.png');
        this.load.image('girl2', './assets/girl2.png');
        this.load.image('dmon', './assets/dmon.png');
        this.load.image('dmon2', './assets/dmon2.png');

        // load audio
        this.load.audio('motorway', './assets/Motorway_sound_effects.wav');
        this.load.audio('gametrack', './assets/ingame_track.wav');
    }


    create() {
        // stop menu music
        menuMusic.stop();

        // set up in game music
        music = this.sound.add('gametrack');
        music.loop = true;
        music.play();
        music.setVolume(.9);

        // set up car sounds
        carSounds = this.sound.add('motorway');
        carSounds.loop = true;
        carSounds.play();
        carSounds.setVolume(.9);

        // reset globalScore
        globalScore = 0;

        // set up timer for child spawn
        timer = this.time.delayedCall(15000, this.setChild(), this);
        this.childSpawn = false;
        // timer for when child spawns
        spawnTimer = this.time.delayedCall(6000, this.setChild(), this);

        // score UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize * 2, 0x0000FF).setOrigin(0, 0);

        // GAME OVER flag
        this.gameOver = false;
        // initialize score
        this.p1Score = 0;


        //place tile sprite
        this.grass = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass').setOrigin(0, 0);
        this.road = this.physics.add.sprite(0, -200, 'road').setOrigin(0);
        this.road.setAllowGravity = false;

        // place player car
        this.car = new Player(this, 375, 400, 'car').setOrigin(0, 0);
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
        this.scoreLeft.setDepth(2);

        // empty arrays before starting
        Phaser.Utils.Array.RemoveBetween(chiArr, 0, chiArr.length);
        Phaser.Utils.Array.RemoveBetween(obsArr, 0, obsArr.length);
        Phaser.Utils.Array.RemoveBetween(demArr, 0, demArr.length);

    }

    update() {
        // pause spawn timer until child spawned
        if (chiArr.length == 0) {
            spawnTimer.paused = true;
        }
        //console.log(timer.getElapsedSeconds());

        //check timer 
        if (timer.getElapsedSeconds() == 15) {
            this.childSpawn = true;
        } else {
            this.childSpawn = false;
        }

        // game over
        if (this.gameOver) {
            this.sound.stopByKey('motorway');
            this.scene.start("menuScene");
        }

        // set out of bounds
        if (this.car.x < 110 || this.car.x > 480) {
            globalScore = this.p1Score / 10;
            music.stop();
            carSounds.stop();
            this.scene.start("outScene");
            //this.gameOver = true;
        }

        // road regeneration
        if (!this.gameOver) {
            this.road.setDepth(0);
            this.road.setAllowGravity = false;
            this.road.scaleY = 2;
            //this.road.scaleX = 0.7;
            this.road.setVelocityY(100);
            //this.road.setVelocityX(-15);

            //this.road.setScale(1, 2);
            if (this.road.y > 0) {
                //this.road.body.reset(0, -200);
                this.road = this.physics.add.sprite(0, -950, 'road').setOrigin(0);


            }
            //this.grass.tilePositionY -= 4;


            // car left/right movement
            if (keyLEFT.isDown) {
                //this.x -= this.moveSpeed;
                this.car.body.setVelocityX(-200);
                //this.y += this.moveSpeed;

            } else if (keyRIGHT.isDown) {
                //this.x += this.moveSpeed;
                this.car.body.setVelocityX(200);
                //this.y -= this.moveSpeed;
            } else if (keyUP.isDown) {
                //this.car.body.setVelocityY(-50);
            } else if (keyDOWN.isDown) {
                //this.car.body.setVelocityY(100);
            } else {
                this.car.body.setVelocityX(0);
                this.car.body.setVelocityY(0);
            }

            // random car spawns
            if (1 == Phaser.Math.RND.integerInRange(1, 150)) {
                let obs = this.physics.add.sprite(Phaser.Math.RND.integerInRange(140, 420), -100, obstacles[Phaser.Math.RND.integerInRange(0, 1)]).setDepth(1).setSize(30, 40, 20, 60).setVelocityY(200).setOrigin(0);
                //this.obs.setVelocityY(-100);
                //this.obs.body.setDepth(1);
                obsArr.push(obs);
                this.p1Score += 10;
                this.scoreLeft.text = this.p1Score;


            }

            /*
                        // random obstacle right lane
                        if (1 == Phaser.Math.RND.integerInRange(1, 500)) {
                            let obs = this.physics.add.sprite(325, -100, obstacles[Phaser.Math.RND.integerInRange(0, 1)]).setDepth(1).setSize(30, 40, 20, 60).setVelocityY(200).setOrigin(0);
                            //this.obs.setVelocityY(-100);
                            //this.obs.body.setDepth(1);
                            obsArr.push(obs);
                            this.p1Score += 10;
                            this.scoreLeft.text = this.p1Score;


                        }*/

            // demon/child spawning
            if (1 == Phaser.Math.RND.integerInRange(1, 5000) && this.childSpawn && chiArr.length == 0) {
                let temp = this.physics.add.sprite(480, -10, children[Phaser.Math.RND.integerInRange(0, 1)]).setDepth(1).setSize(30, 40, 20, 60).setVelocityY(100).setOrigin(0);
                chiArr.push(temp);
            } else if (1 == Phaser.Math.RND.integerInRange(1, 1500)) {
                let temp = this.physics.add.sprite(480, -10, demons[Phaser.Math.RND.integerInRange(0, 1)]).setDepth(1).setSize(30, 40, 20, 60).setVelocityY(100).setOrigin(0);
                demArr.push(temp);
                //console.log(demArr.length);
            } else if (1 == Phaser.Math.RND.integerInRange(1, 1500)) {
                let temp = this.physics.add.sprite(100, -10, demons[Phaser.Math.RND.integerInRange(0, 1)]).setDepth(1).setSize(30, 40, 20, 60).setVelocityY(100).setOrigin(0);
                demArr.push(temp);
            }

            // start timer once child has spawned
            if (chiArr.length > 0) {
                spawnTimer.paused = false;
            }

            // check if child has left screen
            if (spawnTimer.getElapsedSeconds() == 6) {
                //this.gameOver = true;
                globalScore = this.p1Score / 10;
                music.stop();
                carSounds.stop();
                this.scene.start("lostScene");
            }

            // check for collisions with cars
            this.physics.add.collider(this.car, obsArr, (p, e) => {
                //console.log('collided with car', e);
                globalScore = this.p1Score / 10;
                music.stop();
                carSounds.stop();
                this.scene.start("crashScene");
                //this.gameOver = true;
            });

            // check for collisions with demon 
            this.physics.add.collider(this.car, demArr, (p, e) => {
                //console.log('collided with demon', e);
                globalScore = this.p1Score / 10;
                music.stop();
                carSounds.stop();
                this.scene.start("demonScene");
                //this.gameOver = true;
            });

            // check collision for child
            this.physics.add.collider(this.car, chiArr, (p, e) => {
                globalScore = this.p1Score / 10;
                music.stop();
                carSounds.stop();
                this.scene.start("winScene");
                //this.gameOver = true;
            });


            // clear arrays for memory conservation
            if (this.p1Score == 300) {
                Phaser.Utils.Array.RemoveBetween(obsArr, 0, obsArr.length);
                //console.log(obsArr.length);
                //this.check += 1;
            } else if (this.p1Score == 600) {
                Phaser.Utils.Array.RemoveBetween(obsArr, 0, obsArr.length);
            } else if (this.p1Score == 900) {
                Phaser.Utils.Array.RemoveBetween(obsArr, 0, obsArr.length);
            } else if (demArr.length > 50) {
                Phaser.Utils.Array.RemoveBetween(demArr, 5, demArr.length);
            }

        }

    }

    // helper functions go here
    setChild() {
        this.childSpawn = true;
    }
}
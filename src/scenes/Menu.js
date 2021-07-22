// Base for menu (to be modified)
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('autobahn', './assets/autobahn_menu.png');

        // load audio
        this.load.audio('msong', './assets/menu_screen_track.wav');
    }


    create() {
        // menu text configuration
        let menuConfig = {
                fontFamily: 'Courier',
                fontSize: '28px',
                backgroundColor: 'blue',
                color: 'white',
                align: 'right',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                fixedWidth: 0
            }
            // Add image
        this.autobahn = this.physics.add.sprite(game.config.width / 2, game.config.height / 2.75 - borderUISize - borderPadding, 'autobahn').setOrigin(0.5);
        this.autobahn.setScale(.2);

        // Add audio
        // set up in game music
        menuMusic = this.sound.add('msong');
        menuMusic.loop = true;
        menuMusic.play();
        menuMusic.setVolume(.2);

        // show menu text
        this.add.text(game.config.width / 2, game.config.height / 1.8 - borderUISize - borderPadding, ' Autobahn ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.7, 'Press I to view the game instructions', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.5, 'Press S to start', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.2, 'Press C to view credits', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';

        // define keys
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            //this.sound.stopByKey('msong');
            this.scene.start("playScene");
        } else if (Phaser.Input.Keyboard.JustDown(keyI)) {
            // stop menu music
            //menuMusic.stop();
            this.scene.start("instructScene");
        } else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            // stop menu music
            //menuMusic.stop();
            this.scene.start("creditsScene");
        }
    }
}
// Base for menu (to be modified)
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('autobahn', './assets/autobahn_menu.png');

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

        // show menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, ' Autobahn (working title)', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.5, 'Move the Car with <- and -> to move thru traffic, pull over to find the child', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1, 'Be careful not to pick up any demons or hit any cars', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 0.5, 'Press S to start', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';

        // define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("playScene");
        }
    }
}
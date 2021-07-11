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
            fontSize: '35px',
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
        this.add.text(game.config.width / 1.5, game.config.height / 1.5 - borderUISize - borderPadding, ' Autobahn (working title)', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 1.5, game.config.height / 1.5, 'Press S to start', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';
    }

    update() {
    }
}
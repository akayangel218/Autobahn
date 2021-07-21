// Base for demon
class Demon extends Phaser.Scene {
    constructor() {
        super("demonScene");
    }

    preload() {


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
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'OH NO! You picked up a demon!', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.5 - borderUISize - borderPadding, 'You survived:' + globalScore + ' cars', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.2 - borderUISize - borderPadding, 'Press S to return to Menu', menuConfig).setOrigin(0.5);
        // define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("menuScene");
        }
        //console.log('test');
    }
}
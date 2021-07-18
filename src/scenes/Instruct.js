// Instruction window
class Instruct extends Phaser.Scene {
    constructor() {
        super("instructScene");
    }


    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: 'blue',
            color: 'white',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show instruction text
        this.add.text(game.config.width / 2, game.config.height / 5, 'A little girl has gone missing and ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 3.8, 'has been reported to have been seen on the Autobahn.', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 3, 'You must take your car on the autobahn to find', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2.5, ' the lost girl.', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width / 2, game.config.height / 2, 'Use all the arrow keys (<- and ->) to move through traffic,', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.8, ' pull over to find the child', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.5, 'Be careful not to pick up any demons or hit any cars', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.2, 'Press S to start, Good Luck', menuConfig).setOrigin(0.5);
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
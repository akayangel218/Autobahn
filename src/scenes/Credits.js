// Base for Credits
class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    preload() {


    }


    create() {

        // menu text configuration
        let menuConfig = {
                fontFamily: 'Courier',
                fontSize: '25px',
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
        this.add.text(game.config.width / 2, game.config.height / 4 - borderUISize - borderPadding, 'Team Name: The Fellowship', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2.5 - borderUISize - borderPadding, 'Mateen Aminian - Programming', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'Kidüs Michael - Programming', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.7 - borderUISize - borderPadding, 'Ethan Case - Art & Design', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1.46 - borderUISize - borderPadding, 'Ashwin Gupta - Sound Engineering', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 1 - borderUISize - borderPadding, 'Press S to return to Menu', menuConfig).setOrigin(0.5);
        // define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            // stop menu music
            menuMusic.stop();
            this.scene.start("menuScene");
        }
        //console.log('test');
    }
}
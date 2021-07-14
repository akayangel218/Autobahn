/* 
Team Name: The Fellowship
Kidüs Michael & Mateen Aminian: Programming
Ethan Case & Ashwin Gupta: Art & Design
Title: AutoBahn
Date Completed: tbd
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    backgroundColor: 'green',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play, Win]
}

let game = new Phaser.Game(config);

let keyLEFT, keyRIGHT, keyP, keyS, keyUP, keyDOWN;
let obsArr = [];
let demArr = [];
let chiArr = [];
let check = 0;

// set UI sizes (for now)
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
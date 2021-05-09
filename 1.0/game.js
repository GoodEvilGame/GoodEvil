var gameSettings = {
    playerSpeed:200,
    playerStay:0,
}

var config = {
    width: 1920,
    height: 1080,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2, Scene3, Scene4],
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade:{
            debug: true
        }
    }
}

window.onload = function(){
    var game = new Phaser.Game(config);
}


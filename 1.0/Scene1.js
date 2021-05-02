class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }    
    
    preload(){
        this.load.image("background", "assets/images/exemplo-background.png");
        this.load.image("background2", "assets/images/background2.png");
        this.load.image("background3", "assets/images/background3.png");
        this.load.spritesheet("player", "assets/images/pesonagem-exemplo.png",{ 
        frameWidth: 16,
        frameHeight: 32
    });
    this.load.spritesheet("beam", "assets/images/teste-de-ataque.png",{ 
        frameWidth: 16,
        frameHeight: 16
    });
    }

   create(){
    
    this.add.text(20,20, "Loading game...");
    this.scene.start("playGame");


    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.background2 = this.add.image(320,0,"background2");
    this.background2.setOrigin(0,0);

    this.background3 = this.add.image(640,0,"background3");
    this.background3.setOrigin(0,0);
    
    this.anims.create({
        key: "thrust",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "beam-anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate: 5,
        repeat: -1
    })
    

   }
}

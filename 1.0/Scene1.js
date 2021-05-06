class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }    
    
    preload(){
        this.load.image("background", "assets/images/cenario/Cenário_corredor.png");
        this.load.spritesheet("player", "assets/images/damakos/damakos_frente_idle.png",{ 
        frameWidth: 32,
        frameHeight: 32
    });
    this.load.spritesheet("beam", "assets/images/damakos/ataque.png",{ 
        frameWidth: 32,
        frameHeight: 32
    });
    this.load.spritesheet("beam_esq", "assets/images/damakos/ataque_esq.png",{ 
        frameWidth: 32,
        frameHeight: 32
    });
    this.load.spritesheet("beam_dir", "assets/images/damakos/ataque_dir.png",{ 
        frameWidth: 32,
        frameHeight: 32
    });
    this.load.spritesheet("beam_baixo", "assets/images/damakos/ataque_baixo.png",{ 
        frameWidth: 32,
        frameHeight: 32
    });

    this.load.bitmapFont("pixelFont", "assets/images/font/font.png", "assets/images/font/font.xml");
    }

   create(){
    
    this.add.text(20,20, "Loading game...");
    this.scene.start("playGame");


    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
    
    this.anims.create({
        key: "thrust",
        frames: this.anims.generateFrameNames("player",{start: 1, end:2}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "beam-anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "beam_baixo",
        frames: this.anims.generateFrameNumbers("beam_baixo"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "beam_esq",
        frames: this.anims.generateFrameNumbers("beam_esq"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "beam_dir",
        frames: this.anims.generateFrameNumbers("beam_dir"),
        frameRate: 5,
        repeat: -1
    })

   }
}

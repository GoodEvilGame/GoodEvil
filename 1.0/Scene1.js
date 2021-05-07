class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }    
    
    preload(){
        this.load.image("background", "assets/images/cenario/Cenário_corredor.png");
        this.load.image("background", "assets/images/cenario/Cenário_corredor.png");
        
        this.load.audio("shoot", "assets/SFX/shoot.mp3");
        this.load.audio("bossfight", "assets/SFX/bossfight.mp3");
        this.load.audio("hit", "assets/SFX/hit.mp3");
        this.load.audio("music", "assets/SFX/stage1_music.mp3");

        //Sprites do damakos
        //"...-a-..." = andando
        //"...-p-..." = parado
        this.load.spritesheet("player-p-cima", "assets/images/damakos/damakos_costas_idle.png",{ 
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("player-a-cima", "assets/images/damakos/damakos_costas.png",{ 
            frameWidth: 34,
            frameHeight: 32
        });

        this.load.spritesheet("player-a-baixo", "assets/images/damakos/damakos_frente.png",{ 
            frameWidth: 33.6,
            frameHeight: 32
        });
        this.load.spritesheet("player-p-baixo", "assets/images/damakos/damakos_frente_idle.png",{ 
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("player-a-direita", "assets/images/damakos/damakos_andando_dir.png",{ 
            frameWidth: 28.3333,
            frameHeight: 32
        });
        this.load.spritesheet("player-p-direita", "assets/images/damakos/damakos_idle_dir.png",{ 
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("player-a-esquerda", "assets/images/damakos/damakos_andando_esq.png",{ 
            frameWidth: 28.3,
            frameHeight: 32
        });
        this.load.spritesheet("player-p-esquerda", "assets/images/damakos/damakos_idle_esq.png",{ 
            frameWidth: 32,
            frameHeight: 32
        });

        //Sprites skill damakos
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

        //Sprites do not
        //"...-a-..." = andando
        //"...-p-..." = parado
        this.load.spritesheet("not-a-baixo", "assets/images/not/Not_frente.png", {
            frameWidth: 34,
            frameHeight: 32
        });
        this.load.spritesheet("not-a-cima", "assets/images/not/Not_costas.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("not-a-esq", "assets/images/not/Not_esquerda.png", {
            frameWidth: 29,
            frameHeight: 32
        });
        this.load.spritesheet("not-a-dir", "assets/images/not/Not_direita.png", {
            frameWidth: 32,
            frameHeight: 32
        });

        //Fonte de letras utilizada
        this.load.bitmapFont("pixelFont", "assets/images/font/font.png", "assets/images/font/font.xml");
    }

   create(){
    
    this.add.text(20,20, "Loading game...");
    this.scene.start("playGame");


    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
    

    //Animações do Damakos
    this.anims.create({
        key: "player-p-cima",
        frames: this.anims.generateFrameNames("player-p-cima",{start: 0, end:1}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-a-cima",
        frames: this.anims.generateFrameNames("player-a-cima",{start: 0, end:2}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-a-baixo",
        frames: this.anims.generateFrameNames("player-a-baixo",{start: 0, end:2}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-p-baixo",
        frames: this.anims.generateFrameNames("player-p-baixo",{start: 0, end:1}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-a-direita",
        frames: this.anims.generateFrameNames("player-a-direita",{start: 0, end:2}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-p-direita",
        frames: this.anims.generateFrameNames("player-p-direita",{start: 0, end:1}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-a-esquerda",
        frames: this.anims.generateFrameNames("player-a-esquerda",{start: 0, end:2}),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "player-p-esquerda",
        frames: this.anims.generateFrameNames("player-p-esquerda",{start: 0, end:1}),
        frameRate: 5,
        repeat: -1
    })


    //Animaçoes skill do Damakos
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

    //Animações not
    this.anims.create({
        key: "not-a-baixo",
        frames: this.anims.generateFrameNumbers("not-a-baixo"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "not-a-cima",
        frames: this.anims.generateFrameNumbers("not-a-cima"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "not-a-esq",
        frames: this.anims.generateFrameNumbers("not-a-esq"),
        frameRate: 5,
        repeat: -1
    })
    this.anims.create({
        key: "not-a-dir",
        frames: this.anims.generateFrameNumbers("not-a-dir"),
        frameRate: 5,
        repeat: -1
    })

   }
}

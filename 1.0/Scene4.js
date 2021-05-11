var vida = 3
var vd = 5;
class Scene4 extends Phaser.Scene {
  constructor() {
    super("Luta");
    this.not; 
    this.tempo2;
  }

  create() {
    this.direcao = 3;
    this.posicao;
    this.tempo = 0;
    this.mana = 5;
    this.reputacao = 10;
    this.naoestouraorelha=0;
    
  
    this.background = this.add.image(0, 0, "background_luta");
    this.background.setOrigin(0, 0);
    this.background.setInteractive();

    this.player = this.physics.add.sprite(
      config.width / 2 - 8,
      config.height - 64,
      "player"
    );
    this.player.play("player-p-baixo");

    this.teclaW = this.input.keyboard.addKey("W");
    this.teclaS = this.input.keyboard.addKey("S");
    this.teclaD = this.input.keyboard.addKey("D");
    this.teclaA = this.input.keyboard.addKey("A");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.player.setScale(5);

    this.input.on("gameobjectdown", this.shootBeam, this);

    //Instanciando not
    this.not = new Inimigo(this);
    //Instanciando sons e música de fundo
    this.shootSound = this.sound.add("shoot");
    this.hitSound = this.sound.add("hit");
    this.bossSong = this.sound.add("bossfight");
    this.victorySong = this.sound.add("victory");
    this.loseSong = this.sound.add("lose");


    var bossConfig = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.sound.stopByKey('arena');
    this.bossSong.play(bossConfig)
    
    //

    this.projectiles = this.add.group();
    this.projectilesI = this.add.group();


    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(config.width, 0);
    graphics.lineTo(config.width, 40);
    graphics.lineTo(0, 40);
    graphics.lineTo(0, 0);
    graphics.closePath();
    graphics.fillPath();

    this.vidadisplay = this.add.sprite(
      420,
      15,
      "vida3"
    );
    this.vidadisplay.play("vida3");
    this.manadisplay = this.add.sprite(
      195,
      15,
      "mana5"
    );
    this.manadisplay.play("mana5");

    this.scoreLabelmana = this.add.bitmapText(
      10,
      5,
      "pixelFont",
      "mana: " + this.mana,
      32
    );
    this.scoreLabelVida = this.add.bitmapText(
      300,
      5,
      "pixelFont",
      "VIDA: " + vida,
      32
    );
    this.Labelreputacao = this.add.bitmapText(
      500,
      5,
      "pixelFont",
      "reputacao: " +this.reputacao, 
      32
    );

    
    //this.player.body.setSize(this.player.width, this.player.height, true);
    //this.not.body.setSize(this.not.width, this.not.height, true);
    this.physics.add.collider(this.projectiles, this.not, function(projectiles, not){
      projectiles.destroy();
      not.damage();
      vd--;
      
    });
    this.physics.add.collider(this.player, this.projectilesI, function(player, projectilesI){
    vida--
      projectilesI.destroy();
    });

    this.physics.add.collider(this.projectiles, this.projectilesI, function(projectiles, projectilesI){
      projectiles.destroy();
      projectilesI.destroy();
    });

  }
  alive(){
    this.lose = this.add.bitmapText( config.width/2-300,config.height/2-100, "pixelFont", "lose!", 500);
    this.aperte_f5 = this.add.bitmapText( config.width/2-100,config.height/2+250, "pixelFont", "aperte f5", 100);
  }
  
  update() {
    if(vd==0 && this.reputacao==10){
      this.reputacao = this.reputacao+10;
  this.Labelreputacao.text= "reputacao:" +this.reputacao 
    }
    if(vida>0){
      this.not.update(this.player);
      this.movePlayermanager();
      if (this.mana < 5) {
        this.tempo++;
        
        if (this.tempo >= 90) {
          this.tempo = 0;
          this.mana++;
          this.updateHud();
          
        }
      }

      for (var i = 0; i < this.projectiles.getChildren().lenght; i++) {
        var beamUP = this.projectiles.getChildren()[i];
        beamUP.update();
        var beamDown = this.projectiles.getChildren()[i];
        beamDown.update();
        var beamLeft = this.projectiles.getChildren()[i];
        beamLeft.update();
        var BeamRight = this.projectiles.getChildren()[i];
        BeamRight.update();
      }
      
    }
    else if (vida<=0){
      this.alive();
    }
    this.updateHudVida();
  }

  movePlayermanager() {
    this.player.setVelocity(0);
    
    if (this.teclaA.isDown) {
        gameSettings.playerSpeed = 200;
        this.player.setVelocityX(-gameSettings.playerSpeed);
        if (this.posicao != 4) {
          this.posicao = 4;
          this.player.play("player-a-esquerda");
          this.direcao = 1;
        }
      }
  
      else if (this.teclaD.isDown) {
        gameSettings.playerSpeed = 200;
        this.player.setVelocityX(gameSettings.playerSpeed);
        if (this.posicao != 3) {
          this.posicao = 3;
          this.player.play("player-a-direita");
          this.direcao = 2;
        }
      }

    if (this.teclaS.isDown) {
        gameSettings.playerSpeed = 200;
        this.player.setVelocityY(gameSettings.playerSpeed);
        if (this.posicao != 2) {
          this.posicao = 2;
          this.player.play("player-a-baixo");
          this.direcao = 3;
        }
      }
    
     else if (this.teclaW.isDown && this.player.y > 132) {
        gameSettings.playerSpeed = 200;
        this.player.setVelocityY(-gameSettings.playerSpeed);
        if (this.posicao != 1) {
          this.posicao = 1;
          this.player.play("player-a-cima");
          this.direcao = 4;
        }
      }
     else if (
      this.teclaW.isUp &&
      this.teclaS.isUp &&
      this.teclaA.isUp &&
      this.teclaD.isUp
    ) {
      if (this.posicao == 4) {
        this.player.play("player-p-esquerda");
        this.posicao = 9;
      }
      if (this.posicao == 3) {
        this.posicao = 9;
        this.player.play("player-p-direita");
      }
      if (this.posicao == 2) {
        this.posicao = 9;
        this.player.play("player-p-baixo");
      }
      if (this.posicao == 1) {
        this.posicao = 9;
        this.player.play("player-p-cima");
      }
    }
  }
  //Instancia skill damakos
  shootBeam() {
    if (this.mana > 0) {
      if (this.direcao == 1) {
        var beam = new BeamLeft(this);
        this.mana -= 1;
        this.shootSound.play();
      } else if (this.direcao == 2) {
        var beam = new BeamRight(this);
        this.mana -= 1;
        this.shootSound.play();
      } else if (this.direcao == 3) {
        var beam = new BeamDown(this);
        this.mana -= 1;
        this.shootSound.play();
      } else if (this.direcao == 4) {
        var beam = new BeamUp(this);
        this.mana -= 1;
        this.shootSound.play();
      }
      this.updateHud();
    }
  }

  updateHud() {
    this.scoreLabelmana.text = "mana: " + this.mana;
    if(this.mana==5){
      this.manadisplay.play("mana5");
    }
    else if(this.mana==4){
      this.manadisplay.play("mana4");
    }
    else if(this.mana==3){
      this.manadisplay.play("mana3");
    }
    else if(this.mana==2){
      this.manadisplay.play("mana2");
    }
    else if(this.mana==1){
      this.manadisplay.play("mana1");
    }
    else if(this.mana==0){
      this.manadisplay.play("nada");
    }
  }
  updateHudVida() {
    this.scoreLabelVida.text = "VIDA: " + vida;
   if(vida==2){
     if(this.naoestouraorelha!=1){
      this.hitDamakos();
    this.naoestouraorelha=1;
    }
     this.vidadisplay.play("vida2");
   }
   else if(vida==1){
     this.vidadisplay.play("vida1");
     if(this.naoestouraorelha!=2){
      this.hitDamakos();
      this.naoestouraorelha=2;
    }
   }
   else if(vida==0){
    this.vidadisplay.play("nada")
    if(this.naoestouraorelha!=3){
      this.hitDamakos();
      this.player.play("damakos_morrendo_anim");
      this.naoestouraorelha=3;
      this.loseS();
      this.sound.stopByKey('bossfight');
    }
  }
  }
  hitDamakos(){
    this.hitSound.play();
  }

  victoryS(){
   
    var victoryConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.victorySong.play(victoryConfig);
  }

  loseS(){
   
    var loseConfig = {
      mute: false,
      volume: 0.4,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.loseSong.play(loseConfig);
  }
}

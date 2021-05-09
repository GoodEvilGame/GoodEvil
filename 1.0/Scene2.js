class Scene2 extends Phaser.Scene {
  constructor(){
      super("playGame");
  }    

  create(){
  
      this.background = this.add.image(0,0,"background");
      this.background.setOrigin(0,0);
      this.background.setInteractive();
  
      this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64 , "player");
      this.player.play("player-p-baixo");
      this.teclaW = this.input.keyboard.addKey('W');
      this.teclaS = this.input.keyboard.addKey('S');
      this.teclaD = this.input.keyboard.addKey('D');
      this.teclaA = this.input.keyboard.addKey('A');
    
      this.player.setCollideWorldBounds(true);
      this.player.setScale(5);

      
      //Instanciando sons e música de fundo

      this.music = this.sound.add("music");

      var musicConfig = {
          mute: false,
          volume: 0.4,
          rate: 0.5,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0
      }
      this.music.play(musicConfig);
    
     
  }
      

  update(){
      this.movePlayerManager();
  }

  movePlayerManager(){
      this.player.setVelocity(0);
  if(this.player.y<500 && this.player.x>1620 && this.player.x<1820){
      this.scene.start("conversa");
  }
      if(this.teclaA.isDown){
          if((this.player.x>830 && this.player.y<580)&&(this.player.x<1340 && this.player.y<580)){

          }
          else{
              gameSettings.playerSpeed = 200;
              this.player.setVelocityX(-gameSettings.playerSpeed);
              if(posicao!=4){
                  posicao = 4;
                  this.player.play("player-a-esquerda");
                  direcao = 1;
              }
          }
      }
      else if(this.teclaD.isDown){
          if((this.player.x>800 && this.player.y<580)&&(this.player.x<1300 && this.player.y<580)){

          }
          else{
              gameSettings.playerSpeed = 200;
              this.player.setVelocityX(gameSettings.playerSpeed);
              if(posicao!=3){
                  posicao = 3;
                  this.player.play("player-a-direita");
                  direcao = 2;
              }
          }
      }
      
      if(this.teclaS.isDown){
          if(this.player.y>890){

          }
          else{
          gameSettings.playerSpeed = 200;
          this.player.setVelocityY(gameSettings.playerSpeed);
          if(posicao!=2){
              posicao = 2;
              this.player.play("player-a-baixo");
              direcao = 3;
          }
          }
      }
      else if(this.teclaW.isDown &&this.player.y>500){
          if((this.player.x>830 && this.player.y<600)&&(this.player.x<1300 && this.player.y<600)){

          }
          else{
          gameSettings.playerSpeed = 200;
          this.player.setVelocityY(-gameSettings.playerSpeed);
          if(posicao!=1){
              posicao = 1;
              this.player.play("player-a-cima");
              direcao = 4;
          }
      }
       }
       else if(this.teclaW.isUp && this.teclaS.isUp && this.teclaA.isUp && this.teclaD.isUp){
          if(posicao==4){
              this.player.play("player-p-esquerda");
              posicao = 9;
          }
          if(posicao==3){
              posicao = 9;
              this.player.play("player-p-direita");
          }
          if(posicao==2){
              posicao = 9;
              this.player.play("player-p-baixo");
          }
          if(posicao==1){
              posicao = 9;
              this.player.play("player-p-cima");
          }
       }

  }

}
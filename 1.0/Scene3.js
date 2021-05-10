class Scene3 extends Phaser.Scene {
    constructor(){
        super("conversa");
    }    

    create(){
    
        this.background = this.add.image(0,0,"background_luta");
        this.background.setOrigin(0,0);
        this.background.setInteractive();
    
        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64 , "player");
        this.player.play("player-p-baixo");
        
        this.not= this.physics.add.sprite(config.width / 2 - 16, config.height/2 - 16 , "not");
        this.not.play("not-a-baixo");
        this.teclaW = this.input.keyboard.addKey('W');
        this.teclaS = this.input.keyboard.addKey('S');
        this.teclaD = this.input.keyboard.addKey('D');
        this.teclaA = this.input.keyboard.addKey('A');
        this.cursorKeys = this.input.keyboard.createCursorKeys(); 
        this.player.setCollideWorldBounds(true);
        this.player.setScale(5);
        this.not.setScale(5);
        this.conversas = 0;


       

        this.input.on("gameobjectdown", this.conversa, this);

        
        //Instanciando sons e música de fundo
        this.arenaSong = this.sound.add("arena");
        this.music = this.sound.add("music");

        this.music.stop();

        var arenaConfig = {
            mute: false,
            volume: 0.4,
            rate: 0.5,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.arenaSong.play(arenaConfig);
        this.sound.stopByKey('music');

    }
       conversa(){
        if(this.player.y>400&&this.player.y<700 && this.player.x>840  && this.player.x<1100){
           this.conversas++;
          
           }
           this.direcao;
       }
        

    update(){
            this.movePlayermanager();
            this.falap();
            

    }

    falap(){
        if (this.conversas==1){
            var graphics = this.add.graphics();
            graphics.fillStyle(0x000000, 1);
            graphics.beginPath();
            graphics.moveTo(0, 0);
            graphics.lineTo(config.width, 0);
            graphics.lineTo(config.width, 270);
            graphics.lineTo(0, 270);
            graphics.lineTo(0, 0);
            graphics.closePath();
            graphics.fillPath();
            this.fala = this.add.bitmapText( 240, 64, "pixelFont", "é", 64);
            this.fala2 = this.add.bitmapText( 240, 128, "pixelFont", "é", 64);
            this.fala.text =  "O que eh isso?";
            this.notfalando = this.add.sprite(120,119,"fala");
            this.notfalando.play("not_falando");
            this.notfalando.setScale(5);

        }
        else if (this.conversas==2){
            this.notfalando.play("damakos_falando");
            this.fala.text = "Desculpe, eu estava distraido!";
            
        }
        else if (this.conversas==3){
            this.notfalando.play("not_falando");
            this.fala.text = "Voce eh um tiefling?";
            this.notfalando.setScale(5);
        }
        else if (this.conversas==4){
            this.notfalando.play("damakos_falando");
            this.fala.text = "...";
        }
        else if (this.conversas==5){
            this.notfalando.play("not_falando");
            this.fala.text = "O que alguem da sua raca faz nessa escola? Nao posso estudar no mesmo";
            this.fala2.text = "lugar que alguem repugnante como voce. E ja que eu cheguei primeiro..."; 
            this.notfalando.setScale(5);
        }
        else if (this.conversas==6){
            this.notfalando.play("damakos_falando");
            this.fala.text = "Eu nao pretendo ir a lugar algum. E nao vou deixar que voce me ofenda ";
            this.fala2.text = "desse jeito";
            
        }
        else if (this.conversas==7){
            this.notfalando.play("not_rindo");
            this.notfalando.setScale(5);
            this.fala.text = "E o que voce vai fazer para me impedir, Lutar?";
            this.fala2.text = "";
            
        }
        else if (this.conversas==8){
            this.notfalando.play("damakos_falando");
            this.fala.text = "...";
            this.fala2.text = "";
            
        }
        else if (this.conversas==9){
            this.notfalando.play("not_rindo");
            this.notfalando.setScale(5);
            this.fala.text = "Hahaha, entao se eh assim que voce quer, mas saiba, seus poderes de";
            this.fala2.text = "fogo nao chegam nem perto dos meus, e devo dizer que vou gostar de te";
            this.fala3 = this.add.bitmapText( 240, 192, "pixelFont", "dar uma surra.", 64);
            
        }
        else if (this.conversas==10){
            this.scene.start("Luta");
        }
    }

    movePlayermanager(){
        this.player.setVelocity(0);

        if(this.teclaA.isDown){

            gameSettings.playerSpeed = 200;
            this.player.setVelocityX(-gameSettings.playerSpeed);
            if(this.posicao!=4){
               this.posicao = 4;
               this.player.play("player-a-esquerda");
               this.direcao = 1;
            }

        }
        else if(this.teclaD.isDown){

            gameSettings.playerSpeed = 200;
            this.player.setVelocityX(gameSettings.playerSpeed);
            if(this.posicao!=3){
                this.posicao = 3;
                this.player.play("player-a-direita");
                this.direcao = 2;
            }
            
        }
        
        if(this.teclaS.isDown){

            gameSettings.playerSpeed = 200;
            this.player.setVelocityY(gameSettings.playerSpeed);
            if(this.posicao!=2){
                this.posicao = 2;
                this.player.play("player-a-baixo");
                this.direcao = 3;
            }

        }
        else if(this.teclaW.isDown && this.player.y>120){

            gameSettings.playerSpeed = 200;
            this.player.setVelocityY(-gameSettings.playerSpeed);
            if(this.posicao!=1){
                this.posicao = 1;
                this.player.play("player-a-cima");
                this.direcao = 4;
            }
        }
    
         else if(this.teclaW.isUp && this.teclaS.isUp && this.teclaA.isUp && this.teclaD.isUp){
            if(this.posicao==4){
                this.player.play("player-p-esquerda");
                this.posicao = 9;
            }
            if(this.posicao==3){
                this.posicao = 9;
                this.player.play("player-p-direita");
            }
            if(this.posicao==2){
                this.posicao = 9;
                this.player.play("player-p-baixo");
            }
            if(this.posicao==1){
                this.posicao = 9;
                this.player.play("player-p-cima");
            }
         }
    
    }


    

}
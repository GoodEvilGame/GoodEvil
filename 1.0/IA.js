class Inimigo extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = config.width/2 + 200;
        var y = config.height/2 + 200;
        super(scene, x, y, "inimigo");
        scene.add.existing(this);
        this.speed;
        this.direction = 1;
        this.vida = 5;
        this.tempo2 = 0;
        this.manaNot = 5;
        this.beam;  
        scene.physics.world.enableBody(this);
        this.body.setCollideWorldBounds(true);
        this.setScale(5);
    }

    
    findPlayer(player){
        //Verifica se está no mesmo range x e depois se esta em cima ou embaixo

            //Se distancia do player X
            if(this.x >= player.x+720){
                this.speedX = -200;
            }
            else if(this.x > player.x + 700 && this.x < player.x + 720){
                this.speedX = 0;
            }
            else if(this.x <= player.x +700){
                this.speedX = 200;
            }
            //Verifica se está no mesmo range y e depois se esta na esquerda ou direita
            if(this.y > (player.y - player.body.height) && (this.y - this.body.height) < player.y) {
                if(this.x < player.x){
                    
                }
                else{
                    if(this.manaNot > 0){
                        this.beam = new BeamNot(this.scene, this);
                        this.manaNot--;
                        this.shootSound = this.scene.sound.add("shoot");
                        this.shootSound.play();
                    }
                }
            }
            //Se distancia do player Y
            else if(this.y > player.y){
                this.speedY = -200;
            }
            else if(this.y < player.y){
                this.speedY = 200;
            }

    }
    animNot(){
        if(this.speedX>0){
            if(this.direction != 0){
                    this.direction = 0;
                    this.play("not-a-dir");
                   
            }
        }
        else if(this.speedX < 0){
            if(this.direction != 1){
                    this.direction = 1;
                    this.play("not-a-esq");
                   
            }
        }

        else{
            if(this.speedY > 0){
                if(this.direction != 2){
                    this.direction = 2;
                    this.play("not-a-baixo");
                   
                }
            }
            else if(this.speedY < 0){
                if(this.direction != 3){
                    this.direction = 3;
                    this.play("not-a-cima");
                   
                }
            }
        }
    }

    

    damage(){        
        this.vida -= 1;
        this.scene.hitDamakos();
       
        if(this.vida == 0){
            this.play("not_morrendo");
            this.win = this.scene.add.bitmapText( config.width/2-300,config.height/2-100, "pixelFont", "win!", 500);
            this.aperte_f5 = this.scene.add.bitmapText( config.width/2-100,config.height/2+250, "pixelFont", "aperte f5", 100);
            this.scene.victoryS();
            this.scene.sound.stopByKey('bossfight')
        }
    }

    update(player){
        if(this.vida > 0 ){
            this.findPlayer(player);
            this.animNot();
            this.body.setVelocityX(this.speedX);
            this.body.setVelocityY(this.speedY);
            if (this.manaNot < 5) {
                this.tempo2++;
                
                if (this.tempo2 >= 90) {
                  this.tempo2 = 0;
                  this.manaNot++;
                }
            }  
        }
    }

}

class BeamNot extends Phaser.GameObjects.Sprite{
    constructor(scene, not){
        var x = not.x - 100;
        var middleNot = not.body.height/2;
        var y = not.y;
        super(scene, x, y, "beamNot");
        scene.add.existing(this);
        this.play("beam_esq_inimigo");
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -900;
        scene.projectilesI.add(this);
        this.setScale(3);
      }
    update(){   
        
      
    }    
}
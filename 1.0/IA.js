class Inimigo extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = config.width/2 + 200;
        var y = config.height/2 + 200;
        super(scene, x, y, "inimigo");
        scene.add.existing(this);
        this.speed;
        this.direction = 1;
        this.vida = 2;
        this.tempo2 = 0;
        this.manaNot = 5;
        this.beam;  
        scene.physics.world.enableBody(this);
        this.body.setCollideWorldBounds(true);
        this.setScale(5);
        this.create();
    }

    create(){
        console.log(this)
    }

    
    findPlayer(player){
        //Verifica se está no mesmo range x e depois se esta em cima ou embaixo
            if(this.x > (player.x - player.body.width) && (this.x - this.body.width) < player.x ){
                if(this.y < player.y){
                    console.log("ataque baixo");
                }
                else{
                    console.log("ataque cima");
                }
            }
            //Se distancia do player X
            else if(this.x >= player.x+720){
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
                    console.log("ataque direita");
                }
                else{
                    if(this.manaNot > 0){
                        this.beam = new BeamNot(this.scene, this);
                        this.manaNot--;
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
                    console.log("dir")
            }
        }
        else if(this.speedX < 0){
            if(this.direction != 1){
                    this.direction = 1;
                    this.play("not-a-esq");
                    console.log("dir")
            }
        }

        else{
            if(this.speedY > 0){
                if(this.direction != 2){
                    this.direction = 2;
                    this.play("not-a-baixo");
                    console.log("c")
                }
            }
            else if(this.speedY < 0){
                if(this.direction != 3){
                    this.direction = 3;
                    this.play("not-a-cima");
                    console.log("b")
                }
            }
        }
    }

    damage(){
        this.vida -= 1;
        if(this.vida == 0){
            this.destroy();
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
        this.body.velocity.x = -500;
        scene.projectilesI.add(this);
        this.setScale(3);
      }
    update(){   
        
      
    }    
}
var mana = 5;
var tempo = 0;
class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }    

    create(){
    
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
    
    this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64 , "player");
    this.player.play("thrust");
    this.keyObjw = this.input.keyboard.addKey('W');
    this.keyObjs = this.input.keyboard.addKey('S');
    this.keyObjd = this.input.keyboard.addKey('D');
    this.keyObja = this.input.keyboard.addKey('A');
    this.cursorKeys = this.input.keyboard.createCursorKeys(); 
    this.player.setCollideWorldBounds(true);
    this.player.setScale(5);

    this.projectiles = this.add.group();
    }

      update(){
        this.movePlayerManager();
        if (mana<5){
              tempo = tempo + 1;
              if (tempo>=90){
                  tempo=0;
                  mana=mana+1;
              }
        }
        if (mana>0){
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.up)) {
            this.attackUp();
            mana=mana-1;
        }
        else if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.down)) {
            this.attackDown();
            mana=mana-1;
        }
        else if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.left)) {
            this.attackLeft();
            mana=mana-1;
        }
        else if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.right)) {
            this.attackRight();
            mana=mana-1;
        }
    }

        for(var i = 0; i < this.projectiles.getChildren().lenght; i++){
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

    movePlayerManager(){
        this.player.setVelocity(0);
    
        if(this.keyObja.isDown){
            gameSettings.playerSpeed = 200;
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }
        else if(this.keyObjd.isDown){
            gameSettings.playerSpeed = 200;
            this.player.setVelocityX(gameSettings.playerSpeed);
        }
        
        if(this.keyObjs.isDown){
            gameSettings.playerSpeed = 200;
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
        else if(this.keyObjw.isDown){
            gameSettings.playerSpeed = 200;
            this.player.setVelocityY(-gameSettings.playerSpeed);
         }

    }
        attackUp(){
            var beamUp = new BeamUp(this);
        }
        attackDown(){
            var beamDown = new BeamDown(this);
        }
        attackLeft(){
            var beamLeft = new BeamLeft(this);
        }
        attackRight(){
            var beamRight = new BeamRight(this);
        }
}
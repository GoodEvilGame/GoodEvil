class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }    

    create(){
    
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.background2 = this.add.image(320,0,"background2");
    this.background2.setOrigin(0,0);
    
    this.background3 = this.add.image(640,0,"background3");
    this.background3.setOrigin(0,0);

    this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64 , "player");
    this.player.play("thrust");
    this.keyObjw = this.input.keyboard.addKey('W');
    this.keyObjs = this.input.keyboard.addKey('S');
    this.keyObjd = this.input.keyboard.addKey('D');
    this.keyObja = this.input.keyboard.addKey('A');
    this.keyObji = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I) 
    this.player.setCollideWorldBounds(true);

    this.projectiles = this.add.group();
    }

      update(){
        this.movePlayerManager();

        if (Phaser.Input.Keyboard.JustDown(this.keyObji)) {
            this.attack1();
        }

        for(var i = 0; i < this.projectiles.getChildren().lenght; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
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
        attack1(){
            var beam = new Beam(this);
        }
}
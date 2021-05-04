class BeamUp extends Phaser.GameObjects.Sprite{
    constructor(scene){
  
  
      var x = scene.player.x;
      var y = scene.player.y - 16;
      super(scene, x, y, "beam");
      scene.add.existing(this);
    
      this.play("beam-anim");
      scene.physics.world.enableBody(this);
      this.body.velocity.y = -250;
      scene.projectiles.add(this);
      
    }
    update(){ 
    if(this.y < 32 ){
      this.destroy();
    }
    }    

}

class BeamDown extends Phaser.GameObjects.Sprite{
  constructor(scene){


    var x = scene.player.x;
    var y = scene.player.y - 16;
    super(scene, x, y, "beam");
    scene.add.existing(this);
  
    this.play("beam_baixo");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = +250;
    scene.projectiles.add(this);
    
  }
  update(){ 
  if(this.y > config.height ){
    this.destroy();
  }
  }    

}

class BeamLeft extends Phaser.GameObjects.Sprite{
  constructor(scene){


    var x = scene.player.x;
    var y = scene.player.y - 16;
    super(scene, x, y, "beam");
    scene.add.existing(this);
  
    this.play("beam_esq");
    scene.physics.world.enableBody(this);
    this.body.velocity.x = -250;
    scene.projectiles.add(this);

  }
  update(){ 
  if(this.x < 32 ){
    this.destroy();
  }
  }    

}
    
class BeamRight extends Phaser.GameObjects.Sprite{
  constructor(scene){


    var x = scene.player.x;
    var y = scene.player.y - 16;
    super(scene, x, y, "beam");
    scene.add.existing(this);
  
    this.play("beam_dir");
    scene.physics.world.enableBody(this);
    this.body.velocity.x = +250;
    scene.projectiles.add(this);
  
  }
  update(){ 
  if(this.x < config.width){
    this.destroy();
  }
  }    

}


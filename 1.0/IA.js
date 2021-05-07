class Inimigo extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = config.width -200;
        var y = config.height/2 + 200;
        super(scene, x, y, "inimigo");
        scene.add.existing(this);

        this.play("not-a-esq");
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -25;
        this.setScale(5);

    }
}
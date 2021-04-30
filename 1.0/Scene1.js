class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }    

    create(){
        this.add.text(20, 20, "Etapa 1: preparando terreno");
        this.add.text(20, 40, "Concluida");
    }
}

var second_scene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "second_scene" });
    },
    init: function() {},
    preload: function() {
        console.log("Second_Scene : Preload");
        scene_preloader('SECOND',this);
         game.load.image('PNB_Hindi_BG', './assets/images/common/product/hin/PNB_Hindi_BG.jpg');

        // langAssets();
        // this.load.start();
    },
    create: function() {
         console.log("Second_Scene : Create");
         scene_creator(2,this);

         //game.scene.start("start");
    },
    update: function() {
        scene_updater();
    }
});

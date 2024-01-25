var start_scene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "start_scene" });
    },
    init: function() {},
    preload: function() {
        console.log("Start_Scene : Preload");
        scene_preloader('START',this);
    },
    create: function() {
         console.log("Start_Scene : Create");
         scene_creator(0,this);

         //game.scene.start("start");
    },
    update: function() {
        scene_updater();
        $("#loading_div").hide();
    }
});
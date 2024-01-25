/*
 Custom Assets
 */

// Define Paths
var CUSTOM_IMG_PATH = './assets/images/custom/';
var PRODUCT_PATH = './assets/product_assets/'+window.flow_slug+'/';
var PRODUCT_IMG_PATH = PRODUCT_PATH+'images/';
var COMMON_PRODUCT_IMG_PATH = './assets/images/common/product/';
var COMMON_PRODUCT_LANG_IMG_PATH = COMMON_PRODUCT_IMG_PATH+'eng/';
var PRODUCT_SCENE_AUDIO_PATH = PRODUCT_PATH+'audio/eng/scenes/';

var COMMON_JS_PATH = './assets/js/common/';

var TYPE_SCENE_AUDIO_PATH= './assets/audio/product/eng/scenes/';

var TYPE_COMMON_AUDIO_PATH = './assets/audio/product/eng/common/';


var COMMON_IMG_PATH = './assets/images/common/product/';
var COMMON_LANG_IMG_PATH = COMMON_IMG_PATH+'eng/';
var COMMON_AUDIO_LANG_PATH =  './assets/audio/product/eng/currency/';
var COMMON_AUDIO_LANG_PATH_NO =  './assets/audio/product/eng/number/';
//var COMMON_IMG_PATH = './assets/images/common/product/';

var COMMON_LANG_IMG_PATH_HI = COMMON_IMG_PATH+'hin/';
var COMMON_AUDIO_LANG_PATH_HIN =  './assets/audio/product/hin/currency/';
var COMMON_AUDIO_LANG_PATH_NO_HIN =  './assets/audio/product/hin/number/';

//BENGALI CHOSEN PATH
var COMMON_LANG_IMG_PATH_BEN = COMMON_IMG_PATH+'ben/';

//PUNJABI CHOSEN PATH
var COMMON_LANG_IMG_PATH_PUN = COMMON_IMG_PATH+'pun/'; 

var IMG_COM_PATH = './assets/images/common/';

function customAssets()
{
      //Loading Images
    load_assets_init_images();

    //Loading Sprites
    load_assets_init_sprites();

    //Loading Audios
    load_assets_init_audios();

}

function load_assets_init_images()
{
   //Start_Screen

    game.load.image('bg', IMG_COM_PATH+'bg.png');
    game.load.image('bg_1', IMG_COM_PATH+'bg_1.jpg');
    game.load.image('bg_2', IMG_COM_PATH+'bg_2.jpg');
    game.load.image('bg_3', IMG_COM_PATH+'bg_3.jpg');
    game.load.image('next_btn', IMG_COM_PATH+'next_btn.png');
    game.load.image('photo-camera 1', IMG_COM_PATH+'photo-camera 1.png');
  
    game.load.image('Start', IMG_COM_PATH+'Start.png');
    game.load.image('thank_you', IMG_COM_PATH+'thank_you.png');
    game.load.image('video_err', IMG_COM_PATH+'video_err.png');
    game.load.image('allow_access_btn', IMG_COM_PATH+'allow_access_btn.png'); 
    game.load.image('access', IMG_COM_PATH+'access.png');  
    game.load.image('tick_1', IMG_COM_PATH+'tick_1.png');   


    game.load.image('Start Recording', IMG_COM_PATH+'Start Recording.png');   
    game.load.image('Stop Recording', IMG_COM_PATH+'Stop Recording.png');   

   
    

  // load_eng_images();
  // load_hin_images();
  // load_ben_images();
  // load_pun_images();
}

function load_assets_init_sprites()
{
  //game.load.spritesheet('manu_otp', IMG_COM_PATH + 'manu_otp.png',  { frameWidth: 1080, frameHeight: 1920 });
  // game.load.spritesheet('Khusi_Welcome', IMG_COM_PATH + 'Khusi_Welcome.png',  { frameWidth: 402, frameHeight: 552 });
  // game.load.spritesheet('Khusi-full', IMG_COM_PATH + 'Khusi-full.png',  { frameWidth: 402, frameHeight: 552 });
  // game.load.spritesheet('loading_img1', IMG_COM_PATH + 'loading_img1.png',  { frameWidth: 920, frameHeight: 736 });

}

function load_assets_init_audios()
{
  // console.log("loading audios");
  game.load.audio('Languages', TYPE_SCENE_AUDIO_PATH + 'Languages.mp3');

  // game.load.audio('video_consent','./assets/audio/product/eng/scenes/video_consent.mp3');
  // game.load.audio('video_consent_ios', './assets/audio/product/eng/scenes/video_consent_ios.mp3');
  // game.load.audio('thank_you', './assets/audio/product/eng/scenes/thank_you.mp3');
  // game.load.audio('tap_proceed', './assets/audio/product/eng/scenes/tap_proceed.mp3');

}

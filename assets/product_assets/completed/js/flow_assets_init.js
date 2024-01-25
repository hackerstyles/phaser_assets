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

var TYPE_SCENE_AUDIO_PATH = './assets/audio/product/eng/scenes/';
var TYPE_COMMON_AUDIO_PATH = './assets/audio/product/eng/common/';



var COMMON_IMG_PATH = './assets/images/common/product/';
var COMMON_LANG_IMG_PATH = COMMON_IMG_PATH+'eng/';

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

	//game.load.image('blank_bg', IMG_COM_PATH+'blank_bg.jpg');

	//game.load.image('language_bg', IMG_COM_PATH+'language_bg.jpg');


	//game.load.image('languageicon', IMG_COM_PATH+'languageicon.png');




	//PNB
	game.load.image('Page 0.PNB-Start', IMG_COM_PATH+'Page 0.PNB-Start.jpg');
  game.load.image('PNB_Start_error', IMG_COM_PATH+'Page 0.PNB-Start_error.jpg');
	game.load.image('Page 2-PNB_Welcome', IMG_COM_PATH+'Page 2-PNB_Welcome.jpg');



	game.load.image('Language_screen', IMG_COM_PATH+'Language_screen.jpg');
	game.load.image('english', IMG_COM_PATH+'english.jpg');
	game.load.image('hindi', IMG_COM_PATH+'hindi.jpg');
	game.load.image('Page 2-PNB_Welcome', IMG_COM_PATH+'Page 2-PNB_Welcome.jpg');





  game.load.image('PNB_PlainBG', IMG_COM_PATH+'PNB_PlainBG.jpg');

	game.load.image('PNB_Hindi_BG_error', IMG_COM_PATH+'PNB_Hindi_BG.jpg');




}

function load_assets_init_sprites()
{

  game.load.spritesheet('Khusi_Welcome', IMG_COM_PATH + 'Khusi_Welcome.png',  { frameWidth: 402, frameHeight: 552 });
  game.load.spritesheet('Khusi-full', IMG_COM_PATH + 'Khusi-full.png',  { frameWidth: 402, frameHeight: 552 });
}

function load_assets_init_audios()
{

  game.load.audio('welcome', TYPE_SCENE_AUDIO_PATH + 'welcome.mp3');
  game.load.audio('language', TYPE_SCENE_AUDIO_PATH + 'language.mp3');

  game.load.audio('personal_details', TYPE_SCENE_AUDIO_PATH + 'personal details.mp3');
  game.load.audio('policy_details', TYPE_SCENE_AUDIO_PATH + 'policy details.mp3');

  game.load.audio('video_consent', TYPE_SCENE_AUDIO_PATH + 'video_consent.mp3');
  game.load.audio('video_consent_ios', TYPE_SCENE_AUDIO_PATH + 'video_consent_ios.mp3');
  game.load.audio('lang', TYPE_SCENE_AUDIO_PATH + 'lang.mp3');

  game.load.audio('thank_you', TYPE_SCENE_AUDIO_PATH + 'thank_you.mp3');
  game.load.audio('terms', TYPE_SCENE_AUDIO_PATH + 'terms.mp3');
  game.load.audio('product_bt', TYPE_SCENE_AUDIO_PATH + 'audio_pnb_product_benefit.mp3');

  game.load.audio('rider_details', TYPE_SCENE_AUDIO_PATH + 'rider details.mp3');
  game.load.audio('tap_proceed', TYPE_SCENE_AUDIO_PATH + 'tap_proceed.mp3');

  game.load.audio('bene_illus', TYPE_SCENE_AUDIO_PATH + 'bene_illus.mp3');


}

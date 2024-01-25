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

	game.load.image('blank_bg', IMG_COM_PATH+'blank_bg.jpg');
	game.load.image('nlg_form', IMG_COM_PATH+'nlg_form.jpg');
	game.load.image('disabled_bg', IMG_COM_PATH+'disabled_bg.png');
	game.load.image('upload_bg', IMG_COM_PATH+'upload_bg.jpg');
	game.load.image('upload_rc_bg', IMG_COM_PATH+'upload_rc_bg.jpg');
	game.load.image('terms_bg', IMG_COM_PATH+'terms_bg.jpg');
	game.load.image('consent_bg', IMG_COM_PATH+'consent_bg.jpg');
	game.load.image('summary_bg', IMG_COM_PATH+'summary_bg.jpg');
	game.load.image('language_bg', IMG_COM_PATH+'language_bg.jpg');
	game.load.image('form_bg', IMG_COM_PATH+'form_bg.jpg');

	game.load.image('languageicon', IMG_COM_PATH+'languageicon.png');

	//game.load.image('proceed', IMG_COM_PATH+'proceed.jpg');
	game.load.image('proceed_disabled', IMG_COM_PATH+'proceed_disabled.jpg');
	game.load.image('bar_08', IMG_COM_PATH+'bar_08.png');

	game.load.image('tick1', IMG_COM_PATH+'tick.png');
	game.load.image('tick2', IMG_COM_PATH+'tick.png');

	game.load.image('power', IMG_COM_PATH+'power.jpg');

	game.load.image('face_detect', IMG_COM_PATH+'face_detect.png');
	game.load.image('liveness_detect', IMG_COM_PATH+'liveness_detect.png');

	game.load.image('photo', IMG_COM_PATH+'photo.png');
	game.load.image('photo1', IMG_COM_PATH+'photo.png');
	game.load.image('photo2', IMG_COM_PATH+'photo.png');
	game.load.image('rc_front', IMG_COM_PATH+'photo.png');
	game.load.image('rc_back', IMG_COM_PATH+'photo.png');

	game.load.image('pencil', IMG_COM_PATH+'pencil.png');
	game.load.image('id_photo', IMG_COM_PATH+'id_photo.jpg');
	game.load.image('rec', IMG_COM_PATH+'rec.png');
	//game.load.image('start_screen_icon', IMG_COM_PATH+'start_screen_icon.png');
	game.load.image('play', IMG_COM_PATH+'play.png');
	game.load.image('thankyou', IMG_COM_PATH+'thankyou.png');
	game.load.image('logo', IMG_COM_PATH+'logo.png');

	game.load.image('tab_sel_age', IMG_COM_PATH+'tab_sel.png');
	game.load.image('tab_sel_add', IMG_COM_PATH+'tab_sel.png');
	game.load.image('tab_unsel_age', IMG_COM_PATH+'tab_unsel.png');
	game.load.image('tab_unsel_add', IMG_COM_PATH+'tab_unsel.png');


	//PNB
	game.load.image('Page 0.PNB-Start', IMG_COM_PATH+'Page 0.PNB-Start.jpg');
  game.load.image('PNB_Start_error', IMG_COM_PATH+'Page 0.PNB-Start_error.jpg');
	game.load.image('Page 2-PNB_Welcome', IMG_COM_PATH+'Page 2-PNB_Welcome.jpg');



	game.load.image('Language_screen', IMG_COM_PATH+'Language_screen.jpg');
	game.load.image('english', IMG_COM_PATH+'english.jpg');
	game.load.image('hindi', IMG_COM_PATH+'hindi.jpg');
	game.load.image('Page 2-PNB_Welcome', IMG_COM_PATH+'Page 2-PNB_Welcome.jpg');






	game.load.image('PNB_PlainBG', IMG_COM_PATH+'PNB_PlainBG.jpg');
  game.load.image('Hello_text', IMG_COM_PATH+'Hello_text.png');
  game.load.image('Greeting_english', IMG_COM_PATH+'Greeting_english.jpg');
  game.load.image('proceed_button', IMG_COM_PATH+'proceed_button.jpg');


  game.load.image('Page-4_PNB_Personal', IMG_COM_PATH+'Page-4_PNB_Personal.jpg');
  game.load.image('agree', IMG_COM_PATH+'agree.jpg');
  game.load.image('disagree', IMG_COM_PATH+'disagree.jpg');
  game.load.image('personal-details-blank', IMG_COM_PATH+'personal-details-blank.jpg');
  game.load.image('with-nominee', IMG_COM_PATH+'with-nominee.jpg');
  game.load.image('without-nominee', IMG_COM_PATH+'without-nominee.jpg');

  game.load.image('tick1', IMG_COM_PATH+'tick.jpg');
   game.load.image('tick2', IMG_COM_PATH+'tick.jpg');


  game.load.image('Page-5_PNB_Policy', IMG_COM_PATH+'Page-5_PNB_Policy.jpg');

  game.load.image('Page-6_PNB_Rider', IMG_COM_PATH+'Page-6_PNB_Rider.jpg');
  game.load.image('Accident_Death_Benefit_Rider', IMG_COM_PATH+'Accident_Death_Benefit_Rider.jpg');
  game.load.image('Accident_Diability_Benefit_Rider', IMG_COM_PATH+'Accident_Diability_Benefit_Rider.jpg');
  game.load.image('Critical_illness_Rider', IMG_COM_PATH+'Critical_illness_Rider.jpg');
  game.load.image('Serious_illness_rider', IMG_COM_PATH+'Serious_illness_rider.jpg');

  game.load.image('Page-7-PNB_Customer_Consent_bg', IMG_COM_PATH+'Page-7-PNB_Customer_Consent_bg.jpg');
  game.load.image('Customerconsent', IMG_COM_PATH+'Customerconsent.jpg');


  game.load.image('video-consent-BG', IMG_COM_PATH+'video-consent-BG.jpg');
  game.load.image('proceed', IMG_COM_PATH+'proceed.jpg');
  game.load.image('record', IMG_COM_PATH+'record.jpg');

  game.load.image('Page-10-PNB_Thank-you', IMG_COM_PATH+'Page-10-PNB_Thank-you.jpg');
  game.load.image('Thankyou_text', IMG_COM_PATH+'Thankyou_text.png');

//products
  game.load.image('AjeevanSuraksha', IMG_COM_PATH+'AjeevanSuraksha.jpg');
  game.load.image('bachat-yojana', IMG_COM_PATH+'bachat-yojana.jpg');
  game.load.image('Immediate-Annuity', IMG_COM_PATH+'Immediate-Annuity.jpg');
  game.load.image('smart-platinum-plus', IMG_COM_PATH+'smart-platinum-plus.jpg');
  game.load.image('Supersaverplan', IMG_COM_PATH+'Supersaverplan.jpg');




}

function load_assets_init_sprites()
{
	//game.load.spritesheet('manu_otp', IMG_COM_PATH + 'manu_otp.png',  { frameWidth: 1080, frameHeight: 1920 });
  game.load.spritesheet('Khusi_Welcome', IMG_COM_PATH + 'Khusi_Welcome.png',  { frameWidth: 402, frameHeight: 552 });
  game.load.spritesheet('Khusi-full', IMG_COM_PATH + 'Khusi-full.png',  { frameWidth: 402, frameHeight: 552 });
}

function load_assets_init_audios()
{
	//game.load.audio('manu_1', TYPE_SCENE_AUDIO_PATH+'manu_1.mp3');
	// game.load.audio('0', TYPE_SCENE_AUDIO_PATH+'0.mp3');
	// game.load.audio('1', TYPE_SCENE_AUDIO_PATH+'1.mp3');
	// game.load.audio('2', TYPE_SCENE_AUDIO_PATH+'2.mp3');
	// game.load.audio('3', TYPE_SCENE_AUDIO_PATH+'3.mp3');
	// game.load.audio('4', TYPE_SCENE_AUDIO_PATH+'4.mp3');
	// game.load.audio('5', TYPE_SCENE_AUDIO_PATH+'5.mp3');
	// game.load.audio('6', TYPE_SCENE_AUDIO_PATH+'6.mp3');
	// game.load.audio('7', TYPE_SCENE_AUDIO_PATH+'7.mp3');
	// game.load.audio('8', TYPE_SCENE_AUDIO_PATH+'8.mp3');
	// game.load.audio('9', TYPE_SCENE_AUDIO_PATH+'9.mp3');
	// game.load.audio('10', TYPE_SCENE_AUDIO_PATH+'10.mp3');
	// game.load.audio('11', TYPE_SCENE_AUDIO_PATH+'11.mp3');
	// game.load.audio('12', TYPE_SCENE_AUDIO_PATH+'12.mp3');

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

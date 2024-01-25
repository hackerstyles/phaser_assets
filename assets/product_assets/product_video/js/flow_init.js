/*
 Animation Flow
 PageByPage
 */

var l_green = '#92d050';
var d_green ='#50af31';
var white = '#FFFFFF';
var black = '#000000';
var blue='#0070c0';

var dBLUE = "#005590";

var instruct_text_eng = "I'm aware about the policy terms and conditions I'm also aware this is a life insurance policy not a bank loan or fixed deposit.";
//"Please position your face within the box to ensure face detection. Smile for Liveness Check";

var position_text_eng = 'Please position your face within the box that appears on your screen';
var come_closer_eng = 'Please come closer to the screen';
var video_upload_text_eng = 'Please Wait Your Video is uploading';
var tap_on_pro_eng = 'Tap on proceed button to continue';
var liveness_close_text_eng = 'You seem to be holding up a photograph. Please check.';




window.stage = {
  "screens": []
};


       window.common_screens = [

  {
    "sprite_animations": [




    //  {
    //     "sprite": "Start",
    //     "x": 550,
    //     "y": 1050,
    //     "loop": false,
    //     "timing": 0,
    //     "delay": 0,
    //     "toTopObj": 2,
    //     "anchor": [0.5, 0.5],
    //     "scale": 1.2,
    //     // "onClickFn":"location_address()",

    // },

    


    ],

     "text_animations": [



    ],

     "sound_list": [{
      "sound": ['Languages']
    }],

    "functions": [
      
              // {"fn": "check_browser()", "delay": 0 },
          {  "fn": "SetBGTile('bg')","delay": 0 },
          {  "fn": "getGeoLocation()","delay": 0 },
          // {  "fn": "location_address()","delay": 0 },




    ],

    "name": "Language Selection",
    "timing": -1,
    "index": 0
  },




];



for (var i = 0; i < window.common_screens.length; i++) {
  window.stage.screens.push(window.common_screens[i]);
}

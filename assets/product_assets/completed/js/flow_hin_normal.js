window.stage.screens = [];

var dBLUE = "#005590";
var white = "#FFFFFF";

for (var i = 0; i < window.common_screens.length; i++) {
  window.stage.screens.push(window.common_screens[i]);
}


var screens_hin = [{

    "functions": [{"fn": "SetBGTile('blank_bg')", "delay": 0 },
    {"fn": "langAssetsRest()", "delay": 0 },
	  {"fn":"webCamCreate()", "delay":0 },
       {"fn":"getGeoLocation()", "delay":0 },

    ],
    "name": "Assets Loading",
    "timing": -1,
    "index": 2
  },


  {
    "sprite_animations": [

     ],

    "text_animations": [
  // {"text": [{"content":"\nलिंक की अवधि समाप्त हो"}], "sx": 250,"sy": 520,"x": 250 ,"y": 520,"size": 70,"weight":"normal","lineSpacing":-3,"color":"red","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },



        ],

    //    "sound_list": [{
    //   "sound": ['lang']
    // }],

    "functions": [

      {"fn": "SetBGTile('PNB_Hindi_BG_error')", "delay": 0 },


    ],
    "name": "completed screen",
    "timing": -1,
    "index": 3

  },



];



for (var i = 0; i < screens_hin.length; i++) {
  if (i == 5) {
    if (window.pa_PREMIUM_POLICY_TYPE !== false) {
      if (window.pa_PREMIUM_POLICY_TYPE === 'regular') {
        console.log("Enter : regular");
        screens_hin[i]['sound_list'] = [{
          "sound": ["au_5_1", "$var.window.pa_product", "au_5_2", "$var.window.pa_category", "au_5_3", "$var.window.pa_PREMIUM_POLICY_TYPE", "au_5_4", "$var.currency_window.p_PREMIUM_AMOUNT", "$var.window.pa_FREQUENCY", "au_5_5", "$var.number_window.pa_PAYMENT_TERM", "years", "au_5_6", "$var.number_window.pa_BENEFIT_TERM", "au_5_7", "$var.currency_window.p_SUM_ASSURED", "au_5_8"]
        }];
      } else if (window.pa_PREMIUM_POLICY_TYPE === 'single') {
        console.log("Enter : single");
        screens_hin[i]['sound_list'] = [{
          "sound": ["au_5_1", "$var.window.pa_product", "au_5_2", "$var.window.pa_category", "au_5_3", "$var.window.pa_PREMIUM_POLICY_TYPE", "au_5_4_1", "$var.currency_window.p_PREMIUM_AMOUNT", "au_5_6", "$var.number_window.pa_BENEFIT_TERM", "au_5_7", "$var.currency_window.p_SUM_ASSURED", "au_5_8"]
        }];
      }
    }
  }
  window.stage.screens.push(screens_hin[i]);
}

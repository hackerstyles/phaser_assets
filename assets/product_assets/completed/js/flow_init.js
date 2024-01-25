/*
 Animation Flow
 PageByPage
 */

var l_green = '#92d050';
var d_green ='#50af31';
var white = '#FFFFFF';
var black = '#000000';
var blue='#0070c0';

window.stage = {
  "screens": []
};


window.common_screens = [

{
    "sprite_animations": [

     ],

    "text_animations": [
  {"text": [{"content":"Seems like you have already completed the Pre Issuance verification for your policy"}], "sx": 150,"sy": 800,"x": 150 ,"y": 800,"size": 70,"weight":"normal","lineSpacing":-3,"color":"red","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },



        ],

    //    "sound_list": [{
    //   "sound": ['lang']
    // }],

    "functions": [

      {"fn": "SetBGTile('PNB_PlainBG')", "delay": 0 },


    ],
    "name": "completed screen",
    "timing": -1,
    "index": 0

  },


  {
    "sprite_animations": [

{
        "sprite": "Language_screen",
        "x": 0,
        "y": 0,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 0,
        "anchor": [0, 0],
        "scale": 1.,

        "alpha":0
    },

     {
        "sprite": "Page 0.PNB-Start",
        "x": 0,
        "y": 0,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 0,
        "anchor": [0, 0],
        "scale": 1.,
        "onClickFn": "loadLangFlow(\"eng\",\"normal\",2)",//"actionOnClick(1)",
        "alpha":0
    },
      {
        "sprite": "PNB_Start_error",
        "x": 0,
        "y": 0,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 0,
        "anchor": [0, 0],
        "scale": 1.,

         "alpha":0
    },



    ],

	 "text_animations": [

  // {"text": [{"content":"Seems like you have already completed the Pre Issuance verification for your policy"}], "sx": 150,"sy": 800,"x": 150 ,"y": 800,"size": 70,"weight":"normal","lineSpacing":-3,"color":"red","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },


	],

    "functions": [
    {
        "fn": "init()",
        "delay": 0
      },
//       {
//             "fn": "imag_check()",
//             "delay": 1
// },

        // {
        //     "fn": "check_browser()",
        //     "delay": 1
        // },
 {"fn": "SetBGTile('PNB_PlainBG')", "delay": 0 },

    ],

    "name": "Start",
    "timing": -1,
    "index": 1
  },


/*
  {
    "sprite_animations": [


	 {
        "sprite": "english",
        "x": 300,
        "y": 1400,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 2,
        "anchor": [0.5, 0.5],
        "scale": 1.2,
        "onClickFn": "loadLangFlow(\"eng\",\"normal\",2)"
    },

	 {
        "sprite": "hindi",
        "x": 780,
        "y": 1400,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 2,
        "anchor": [0.5, 0.5],
        "scale": 1.2,
        "onClickFn": "loadLangFlow(\"hin\",\"normal\",2)"
    },

	// {
 //        "sprite": "languageicon",
 //        "x": 540,
 //        "y": 800,
 //        "loop": false,
 //        "timing": 0,
 //        "delay": 0,
 //        "toTopObj": 2,
 //        "anchor": [0.5, 0],
 //        "scale": 0.8,
 //        //"onClickFn": "loadLangFlow(\"eng\",\"normal\",2)"
 //    },


    ],

	 "text_animations": [



	// {
 //        "text": [{
 //          "content": "Choose a Language"
 //        }],
 //        "sx": 540,
 //        "sy": 400,
 //        "x": 540,
 //        "y": 400,
 //        "size": 100,
 //        "weight": "normal",
 //        "color": white,
 //        "tween_type": "Elastic.easeOut",
 //        "timing": 500,
 //        "delay": 0,
 //        "anchor": [0.5, 0],
 //        "align": "center",
 //    },

	// {
 //        "text": [{
 //          "content": "اختر لغة"
 //        }],
 //        "sx": 540,
 //        "sy": 600,
 //        "x": 540,
 //        "y": 600,
 //        "size": 100,
 //        "weight": "normal",
 //        "color": white,
 //        "tween_type": "Elastic.easeOut",
 //        "timing": 500,
 //        "delay": 0,
 //        "anchor": [0.5, 0],
 //        "align": "center",
 //    },

	// {
 //        "text": [{
 //          "content": "English"
 //        }],
 //        "sx": 300,
 //        "sy": 1400,
 //        "x": 300,
 //        "y": 1400,
 //        "size": 80,
 //        "weight": "normal",
 //        "color": white,
 //        "tween_type": "Elastic.easeOut",
 //        "timing": 500,
 //        "delay": 0,
 //        "anchor": [0.5, 0.5],
 //        "align": "center",
 //    },

	// {
 //        "text": [{
 //          "content": "عربى"
 //        }],
 //        "sx": 780,
 //        "sy": 1400,
 //        "x": 780,
 //        "y": 1400,
 //        "size": 80,
 //        "weight": "normal",
 //        "color": white,
 //        "tween_type": "Elastic.easeOut",
 //        "timing": 500,
 //        "delay": 0,
 //        "anchor": [0.5, 0.5],
 //        "align": "center",
 //    },



	],

     "sound_list": [{
      "sound": ['language']
    }],

    "functions": [
      {
        "fn": "SetBGTile('Language_screen')",
        "delay": 0
      },




    ],

    "name": "Language Selection",
    "timing": -1,
    "index": 1
  },

*/

];



for (var i = 0; i < window.common_screens.length; i++) {
  window.stage.screens.push(window.common_screens[i]);
}

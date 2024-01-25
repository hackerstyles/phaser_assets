window.stage.screens = [];

var dBLUE = "#005590";
var white = "#FFFFFF";

var personal_instruct_hin = "\nचेहरे की पहचान के लिए कृपया अपने चेहरे को बॉक्स के भीतर रखें।";
var instruct_text_hin = "\nचेहरे की पहचान के लिए कृपया अपने चेहरे को बॉक्स के भीतर रखें। जीवंतता की जांच के लिए मुस्‍कुराएं\n";

// var liveness_checked_text_hin ='';
// if(window.gender.toLowerCase() == 'male')
// {
//    liveness_checked_text_hin = "\nमैं जानकरी रखता हूं की यह एक जीवन बीमा पॉलिसी है, न कि एफडी या कोई अन्य वित्तीय उत्पाद। मुझे पॉलिसी शर्तों में उल्लिखित के अलावा किसी अन्य अतिरिक्त लाभ का वादा नहीं किया गया है\n"
// }
// else if(window.gender.toLowerCase() == 'female')
// {
//    liveness_checked_text_hin = "\nमैं जानकरी रख़्ति हूं की यह एक जीवन बीमा पॉलिसी है, न कि एफडी या कोई अन्य वित्तीय उत्पाद। मुझे पॉलिसी शर्तों में उल्लिखित के अलावा किसी अन्य अतिरिक्त लाभ का वादा नहीं किया गया है\n"
// }


for (var i = 0; i < window.common_screens.length; i++) {
  window.stage.screens.push(window.common_screens[i]);
}


var screens_hin = [{

    "functions": [{
        "fn": "SetBGTile('blank_bg')",
        "delay": 0
      }, {
        "fn": "langAssetsRest()",
        "delay": 0
      }, {
        "fn": "webCamCreate()",
        "delay": 0
      },
      // {"fn":"getGeoLocation()", "delay":0 },

    ],
    "name": "Assets Loading",
    "timing": -1,
    "index": 2
  },

  {
    "sprite_animations": [

      {
        "sprite": "welcome_khusi",
        "x": 550,
        "y": 620,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 2,
        "anchor": [0.5, 0.5],
        "scale": 1.50,
        "alpha": 1
      },

      // {"sprite": "proceed", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8, "alpha":1, "onClickFn":"proceedToConsent()"},
      {
        "sprite": "Hello_text_hin",
        "x": 540,
        "y": 780,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 3,
        "anchor": [0.5, 0.5],
        "scale": 1.06,
        "alpha": 1
      },


      {
        "sprite": "Greetings_Hindi",
        "x": 550,
        "y": 1300,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 1,
        "alpha": 1
      },

      {
        "sprite": "proceed_hindi",
        "x": 550,
        "y": 1750,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 1,
        "alpha": 0,
        "onClickFn": "goToPage(4)"
      }, //proceedToConsent()


    ],

    "text_animations": [


      // {"text": [{"content":"window.proposal_no"}], "sx": 320,"sy": 453,"x": 320 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      //  {"text": [{"content": "window.product_name"}], "sx": 80,"sy": 600,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },


      // {"text": [{"content":"WELCOME"}], "sx": 600,"sy": 90,"x": 600 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //              {"text": [{"content":"Greetings from PNB MetLife!"}], "sx": 150,"sy": 780,"x": 150 ,"y": 780,"size": 55,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //           {"text": [{"content":"This is a Pre Issuance verification of your insurance proposal to ensure you have understood all the policy benefits, terms and conditions as applicable. "}], "sx": 150,"sy": 940,"x": 150 ,"y": 940,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //             {"text": [{"content":"Please provide your consent by selecting Agree / Disagree on every screen during the journey."}], "sx": 150,"sy": 1210,"x": 150 ,"y": 1210,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },
      //             {"text": [{"content":"Hope you have enabled your Front Camera and you are able to view yourself within the square box above at right side of the screen "}], "sx": 150,"sy": 1430,"x": 150 ,"y": 1430,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //  {"text": [{"content":'Please Wait'}], "sx": 570,"sy": 1783,"x": 570 ,"y": 1783,"size": 50,"weight":"bold","color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":1,"anchor":[0.5,0],"alpha":0 },

    ],

    "sound_list": [{
      "sound": ['welcome_hin']
    }],

    "functions": [

      {
        "fn": "SetBGTile('PNB_Hindi_BG')",
        "delay": 0
      },
      //     //{"fn":"miniCam()", "delay":0.1 } ,
      // {
      //  "fn":"animateSprite(550,620,\'Khusi-full\',1.50,1,40,10,0)",
      //  "delay":0
      // },
      // {
      //   "fn":"animateSprite()",
      //   "delay":0
      // },
      // {"fn": "buttonEnable_proceed_hin()", "delay": 0 },

    ],
    "name": "Welcome screen",
    "timing": -1,
    "index": 3

  },

  {
    "sprite_animations": [


      // {
      // "sprite": "rec",
      // "x": 540,
      // "y": 1800,
      // "loop": false,
      // "timing": 0,
      // "delay": 0,
      // "toTopObj": 1,
      // "anchor": [0.5, 0.5],
      // "scale": 0.5,
      // "alpha":0,
      // "onClickFn":"BeginRecording()"
      // },


      {
        "sprite": "tick1",
        "x": 995, //790
        "y": 630, //640
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.8,
        "alpha": 0,
      },

      // {
      // "sprite": "tick2",
      // "x": 1005,
      // "y": 640,
      // "loop": false,
      // "timing": 0,
      // "delay": 0,
      // "toTopObj": 1,
      // "anchor": [0.5, 0.5],
      // "scale": 0.8,
      // "alpha":0,
      // },

      //  {"sprite": "record", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8,"alpha":0},
      {
        "sprite": "with-nominee_hin",
        "x": 550,
        "y": 740,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0
      }, //goToPage_personal_without_input(250,1810,5,\'y\',4)
      {
        "sprite": "without-nominee_hin",
        "x": 550,
        "y": 740,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0
      }, //goToPage_personal_without_input(250,1810,5,\'y\',4)


      {
        "sprite": "agree_hin",
        "x": 872,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "trytail_hin_yes()"
      }, //goToPage_personal_without_input(250,1810,5,\'y\',4)
      {
        "sprite": "disagree_hin",
        "x": 222,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "trytail_hin_no()"
      }, //goToPage_personal_without_input(810,1810,5,\'n\',4)


    ],

    "text_animations": [

      {
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 550,
        "x": 18,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },


      {
        "text": [{
          "content": personal_instruct_hin
        }],
        "sx": 637,
        "sy": 510,
        "x": 637,
        "y": 510,
        "size": 30,
        "weight": "bold",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center",
        "wordWrap": true,
        "wordWrapWidth": 380,
        "lineSpacing": 5
      },



      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 150,
        "sy": 550,
        "x": 150,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 18,
        "sy": 632,
        "x": 18,
        "y": 632,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#000000",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0],
        "alpha": 1
      },


      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 632,"x": 18,"y": 632,"size": 35,"weight":"normal","lineSpacing":-3,"color":"#000000","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520,"alpha":0},


      //  {"text": [{"content":"Policy Insured Name"}], "sx": 80,"sy": 770,"x": 80 ,"y": 770,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content":toTitleCase(window.policy_insured_name)}], "sx": 460,"sy": 770,"x": 460 ,"y": 770,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Policy Owner Name"}], "sx": 80,"sy": 850,"x": 80 ,"y": 850,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content":toTitleCase(window.name)}], "sx": 460,"sy": 850,"x": 460 ,"y": 850,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Policy Owner DOB"}], "sx": 80,"sy": 935,"x": 80 ,"y": 935,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
      //  {"text": [{"content": formatDate(window.dob)}], "sx": 460,"sy": 935,"x": 460 ,"y": 935,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

      //  {"text": [{"content":"Policy Owner Gender"}], "sx": 80,"sy": 1015,"x": 80 ,"y": 1015,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":400 },
      //  {"text": [{"content": window.gender}], "sx": 460,"sy": 1015,"x": 460 ,"y": 1015,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":400 },

      //  {"text": [{"content":"Occupation"}], "sx": 80,"sy":  1095,"x": 80 ,"y": 1095,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content": window.occupation}], "sx": 460,"sy":  1095,"x": 460 ,"y": 1095,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Qualification"}], "sx": 80,"sy": 1180,"x": 80 ,"y": 1180,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content": window.education}], "sx": 460,"sy": 1180,"x": 460 ,"y": 1180,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Nominee Name"}], "sx": 80,"sy": 1260,"x": 80 ,"y": 1260,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content":toTitleCase(window.nominee_name)}], "sx": 460,"sy": 1260,"x": 460 ,"y": 1260,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Address"}], "sx": 80,"sy": 1420,"x": 80 ,"y": 1420,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content":toTitleCase(window.address)}], "sx": 460,"sy": 1470,"x": 460 ,"y": 1470,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Mobile Number"}], "sx": 80,"sy": 1665,"x":80,"y": 1665,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content": window.mobile}], "sx": 460,"sy": 1665,"x":460,"y": 1665,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      //  {"text": [{"content":"Email"}], "sx": 80,"sy": 1750,"x":80,"y": 1750,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
      //  {"text": [{"content": window.email}], "sx": 460,"sy": 1750,"x":460,"y": 1750,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

      {
        "text": [{
          "content": '\nकृपया प्रतीक्षा कीजिये'
        }],
        "sx": 545,
        "sy": 1750,
        "x": 545,
        "y": 1750,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0.5, 0],
        "alpha": 0
      }, {
        "text": [{
          "content": "\nचेहरे की पहचान प्रदान करें"
        }],
        "sx": 395,
        "sy": 1781,
        "x": 395,
        "y": 1781,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center",
        "wordWrap": true,
        "alpha": 0
      },

      // {"text": [{"content":"WELCOME"}], "sx": 600,"sy": 90,"x": 600 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //              {"text": [{"content":"Greetings from PNB MetLife!"}], "sx": 150,"sy": 780,"x": 150 ,"y": 780,"size": 55,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //           {"text": [{"content":"This is a Pre Issuance verification of your insurance proposal to ensure you have understood all the policy benefits, terms and conditions as applicable. "}], "sx": 150,"sy": 940,"x": 150 ,"y": 940,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //             {"text": [{"content":"Please provide your consent by selecting Agree / Disagree on every screen during the journey."}], "sx": 150,"sy": 1210,"x": 150 ,"y": 1210,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },
      //             {"text": [{"content":"Hope you have enabled your Front Camera and you are able to view yourself within the square box above at right side of the screen "}], "sx": 150,"sy": 1430,"x": 150 ,"y": 1430,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //             {"text": [{"content":'Proceed'}], "sx": 570,"sy": 1783,"x": 570 ,"y": 1783,"size": 50,"weight":"bold","color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":1,"anchor":[0.5,0] },

    ],

    // //
    //          "input_animations": [

    //         {"text": [{"content":window.p_CUSTOMER_NAME}],"placeHolder": " ","key": "in_name","sx": 410,"sy": 765,  "x": 137,"y": 765,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_address}],"placeHolder": " ","key": "in_address","sx": 410,"sy": 845,  "x": 137,"y": 845,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_MOBILE_NUMBER}],"placeHolder": " ","key": "in_phone","sx": 410,"sy": 930,  "x": 137,"y": 930,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_EMAIL}],"placeHolder": " ","key": "in_email","sx": 410,"sy": 1010,  "x": 137,"y": 1010,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae ","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_CUSTOMER_NAME}],"placeHolder": " ","key": "in_name","sx": 410,"sy": 1090,  "x": 137,"y": 1090,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_address}],"placeHolder": " ","key": "in_address","sx": 410,"sy": 1175,  "x": 137,"y": 1175,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_MOBILE_NUMBER}],"placeHolder": " ","key": "in_phone","sx": 410,"sy": 1260,  "x": 137,"y": 1260,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_EMAIL}],"placeHolder": " ","key": "in_email","sx": 410,"sy": 1420,  "x": 137,"y": 1420,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae ","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_MOBILE_NUMBER}],"placeHolder": " ","key": "in_phone","sx": 410,"sy": 1660,  "x": 137,"y": 1660,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //         {"text": [{"content":window.p_EMAIL}],"placeHolder": " ","key": "in_email","sx": 410,"sy": 1745,  "x": 137,"y": 1745,"size": 46,"weight": "normal","width": 730,"backgroundColor": "#c2ffae ","fill": "#000000","tween_type": "Elastic.easeOut","timing": 200,"delay": 0,"anchor": [0, 0],"padding":10},

    //          ],

    "sound_list": [{
      "sound": ['personal_details_hin']
    }],

    "functions": [

      {
        "fn": "SetBGTile('personal-details-blank_hin')",
        "delay": 0
      }, {
        "fn": "miniCam(417,414,816,388)",
        "delay": 0.1
      }, {
        "fn": "face_detect_start()",
        "delay": 1
      }, {
        "fn": "product_image_appear_hin()",
        "delay": 0
      }, {
        "fn": "display_nominee_personal_hin()",
        "delay": 1
      },
      // {"fn": "buttonEnable_personal_hin()", "delay": 0 },
      {
        "fn": "errorDetection()",
        "delay": 0
      },
       {
    "fn": "hideOut()",
    "delay": 0
  },
  {
    "fn": "prev_combocheck()",
    "delay": 0
  },
   {
    "fn": "prevnext_screens(4,9)",
    "delay": 0
  },
    ],
    "name": "sample_personal details",
    "timing": -1,
    "index": 4

  },


  {
    "sprite_animations": [

      // {"sprite": "proceed", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8, "alpha":1, "onClickFn":"proceedToConsent()"},


      {
        "sprite": "agree_hin",
        "x": 872,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_polDet_policy('y','policy_details')"
      }, //goToPage_personal_without_input(250,1810,5,\'y\',4)
      {
        "sprite": "disagree_hin",
        "x": 212,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_polDet_policy('n','policy_details')"
      },
    ],

    "text_animations": [{
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 555,
        "x": 18,
        "y": 555,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },


      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 140,
        "sy": 555,
        "x": 140,
        "y": 555,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 18,
        "sy": 632,
        "x": 18,
        "y": 632,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#000000",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0],
        "alpha": 1
      },


      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 634,"x": 18,"y": 634,"size": 35,"weight":"normal","lineSpacing":-3,"color":"#000000","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520,"alpha":0},

      // {"text": [{"content":"window.proposal_no"}], "sx": 80,"sy": 453,"x": 80 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      //    {"text": [{"content": "window.product_name"}], "sx": 80,"sy": 600,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

      //{"text": [{"content":"POLICY DETAILS"}], "sx": 815 ,"sy": 85,"x": 815 ,"y": 85,"size": 35,"weight":"bold","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },


      {
        "text": [{
          "content": "\nप्लान का नाम\n"
        }],
        "sx": 80,
        "sy": 885,
        "x": 80,
        "y": 885,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center",
        "wordWrap": true,
        "wordWrapWidth": 420
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 450,
        "sy": 883,
        "x": 450,
        "y": 883,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left",
        "wordWrap": true,
        "wordWrapWidth": 540
      },

      {
        "text": [{
          "content": "\nप्लान का  प्रकार"
        }],
        "sx": 80,
        "sy": 990,
        "x": 80,
        "y": 990,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center",
        "wordWrap": true,
        "wordWrapWidth": 420
      }, {
        "text": [{
          "content": window.policy_type
        }],
        "sx": 450,
        "sy": 1003,
        "x": 450,
        "y": 1003,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left",
        "wordWrap": true,
        "wordWrapWidth": 420
      },

      {
        "text": [{
          "content": "\nबीमित राशि"
        }],
        "sx": 80,
        "sy": 1115,
        "x": 80,
        "y": 1115,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center"
      }, {
        "text": [{
          "content": "Rs." + window.sum_assured
        }],
        "sx": 450,
        "sy": 1128,
        "x": 450,
        "y": 1128,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left"
      },

      {
        "text": [{
          "content": "\nप्रीमियम राशि\n"
        }],
        "sx": 80,
        "sy": 1255,
        "x": 80,
        "y": 1255,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center"
      }, {
        "text": [{
          "content": "Rs." + window.premium_amount
        }],
        "sx": 450,
        "sy": 1253,
        "x": 450,
        "y": 1253,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left"
      },
      //1360
      {
        "text": [{
          "content": "\nभुगतान की आवृत्ति/प्रकार"
        }],
        "sx": 65,
        "sy": 1358,
        "x": 65,
        "y": 1358,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left",
        "padding": 15
      }, {
        "text": [{
          "content": window.payment_frequency
        }],
        "sx": 450,
        "sy": 1373,
        "x": 450,
        "y": 1373,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left"
      },

      {
        "text": [{
          "content": "\nपॉलिसी अवधि"
        }],
        "sx": 80,
        "sy": 1485,
        "x": 80,
        "y": 1485,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center"
      }, {
        "text": [{
          "content": window.policy_term
        }],
        "sx": 450,
        "sy": 1498,
        "x": 450,
        "y": 1498,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left"
      },

      {
        "text": [{
          "content": "\nप्रीमियम भुगतान अवधि"
        }],
        "sx": 65,
        "sy": 1605,
        "x": 65,
        "y": 1603,
        "size": 33,
        "weight": "normal",
        "color": "#FFFFFF",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "center",
        "padding": 15
      }, {
        "text": [{
          "content": window.premium_payment_term
        }],
        "sx": 450,
        "sy": 1618,
        "x": 450,
        "y": 1618,
        "size": 33,
        "weight": "normal",
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0, 0.5],
        "align": "left"
      },

      {
        "text": [{
          "content": '\nकृपया प्रतीक्षा कीजिये'
        }],
        "sx": 530,
        "sy": 1750,
        "x": 530,
        "y": 1750,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0.5, 0],
        "alpha": 0
      },
      //{"text": [{"content":"Please Provide Face Detection and Liveness Check"}], "sx": 140,"sy": 1795,"x": 140,"y": 1795,"size": 35,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center","wordWrap": true,"alpha":0 },

      // {"text": [{"content":"WELCOME"}], "sx": 600,"sy": 90,"x": 600 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //              {"text": [{"content":"Greetings from PNB MetLife!"}], "sx": 150,"sy": 780,"x": 150 ,"y": 780,"size": 55,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //           {"text": [{"content":"This is a Pre Issuance verification of your insurance proposal to ensure you have understood all the policy benefits, terms and conditions as applicable. "}], "sx": 150,"sy": 940,"x": 150 ,"y": 940,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //             {"text": [{"content":"Please provide your consent by selecting Agree / Disagree on every screen during the journey."}], "sx": 150,"sy": 1210,"x": 150 ,"y": 1210,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },
      //             {"text": [{"content":"Hope you have enabled your Front Camera and you are able to view yourself within the square box above at right side of the screen "}], "sx": 150,"sy": 1430,"x": 150 ,"y": 1430,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

      //             {"text": [{"content":'Proceed'}], "sx": 570,"sy": 1783,"x": 570 ,"y": 1783,"size": 50,"weight":"bold","color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":1,"anchor":[0.5,0] },

    ],

    "sound_list": [{
      "sound": ['proposal_no_hin', '$var.alphanumeric_window.proposal_no', 'proposal_hin_con', window.product_name, 'au_hin_02', 'silent', 'au_hin_03', window.policy_type, 'au_hin_04', 'silent', 'au_hin_05', '$var.currency_window.sum_assured', 'silent', 'au_hin_06', '$var.currency_window.premium_amount', 'au_hin_07', window.payment_frequency, 'silent', 'au_hin_08', '$var.number_window.pa_policy_term', 'au_hin_09', 'silent', 'au_hin_10', '$var.number_window.pa_premium_payment_term', 'au_hin_11', 'consent_hin']
    }],

    "functions": [

      {
        "fn": "SetBGTile('Policy_BG_hindi')",
        "delay": 0
      },
      //{"fn": "initWebCamPos(818,385,1)", "delay" : 1  },
      {
        "fn": "miniCam(417,416,812,422)",
        "delay": 0.1
      }, {
        "fn": "product_image_appear_hin2()",
        "delay": 0
      },
       {
    "fn": "hideOut()",
    "delay": 0
  },
  {
    "fn": "prevnext_screens(5,9)",
    "delay": 0
  },
      // {"fn": "buttonEnable_policy_hin()", "delay": 0 },

      //{"fn":"display_product_image(270,430,'product_img')","delay": 0 },

    ],
    "name": "sample_policy page",
    "timing": -1,
    "index": 5

  },

  {
    "sprite_animations": [

      {
        "sprite": "agree_hin",
        "x": 872,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_riDet('y','rider_details')"
      }, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {
        "sprite": "disagree_hin",
        "x": 208,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_riDet('n','rider_details')"
      }, //goToPage_overall_rider(810,1810,8,\'n\',17)


    ],

    "text_animations": [{
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 550,
        "x": 18,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },

      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 140,
        "sy": 550,
        "x": 140,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 18,
        "sy": 632,
        "x": 18,
        "y": 632,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#000000",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0],
        "alpha": 1
      },


      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 632,"x": 18,"y": 632,"size": 35,"weight":"normal","lineSpacing":-3,"color":"#000000","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520,"alpha":0},

      //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 455,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      // {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

      //{"text": [{"content":"RIDER DETAILS"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },
      {
        "text": [{
          "content": '\nकृपया प्रतीक्षा कीजिये'
        }],
        "sx": 530,
        "sy": 1750,
        "x": 530,
        "y": 1750,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0.5, 0],
        "alpha": 0
      },

    ],


    // "sound_list": [
    //     {
    //         "sound": []
    //         }
    //     ],
    "functions": [


      //{"fn": "initWebCamPos(770,265,1.25)", "delay" : 1  },
      {
        "fn": "SetBGTile('Rider_Blank_hin')",
        "delay": 0
      }, {
        "fn": "miniCam(417,416,812,416)",
        "delay": 0.1
      },
      //{"fn": "check_rider()", "delay": 0 },
      //{"fn": "StartScreenRecord()", "delay": 1 },
      {
        "fn": "product_image_appear_hin()",
        "delay": 0
      }, {
        "fn": "addScroller()",
        "delay": 0
      }, {
        "fn": "riderSound(sysLang)",
        "delay": 0
      },
      {
    "fn": "hideOut()",
    "delay": 0
  },
  {
    "fn": "prevnext_screens(6,9)",
    "delay": 0
  },

    ],
    "name": "overall rider screen",
    "timing": -1,
    "index": 6
  },

  {
    "sprite_animations": [

      {
        "sprite": "bg-screen",
        "x": 540,
        "y": 1260,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 1,
        "alpha": 1
      },

      // {"sprite": "customer", "x": 540, "y": 1260, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 1, "alpha":1},


      {
        "sprite": "agree_hin",
        "x": 870,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_cusDet('y','terms_and_conditions1')"
      }, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {
        "sprite": "disagree_hin",
        "x": 212,
        "y": 1810,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "alpha": 0,
        "onClickFn": "next_cusDet('n','terms_and_conditions1')"
      }, //goToPage_overall_rider(810,1810,8,\'n\',17)


    ],

    "text_animations": [{
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 550,
        "x": 18,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },

      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 140,
        "sy": 550,
        "x": 140,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 18,
        "sy": 632,
        "x": 18,
        "y": 632,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#000000",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0],
        "alpha": 1
      },

      // {"text": [{"content": window.name}], "sx": 190,"sy": 805,"x": 190 ,"y": 805,"size": 30,"weight":"bold","lineSpacing":-3,"color":dBLUE, "toTopObj": 1,"tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "alpha" : 1 },

      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 632,"x": 18,"y": 632,"size": 35,"weight":"normal","lineSpacing":-3,"color":"#000000","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520, "alpha": 0},
      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 642,"x": 18 ,"y": 642,"size": 35,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520, "alpha" : 0 },


      {
        "text": [{
          "content": '\nकृपया प्रतीक्षा कीजिये'
        }],
        "sx": 530,
        "sy": 1750,
        "x": 530,
        "y": 1750,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0.5, 0],
        "alpha": 0
      },

      //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 455,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      // {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

      // {"text": [{"content":"RIDER DETAILS"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

    ],


    "sound_list": [{
      "sound": ["terms_hindi"]
    }],
    "functions": [


      //{"fn": "initWebCamPos(770,265,1.25)", "delay" : 1  },
      {
        "fn": "SetBGTile('customerconsent_bg_hin')",
        "delay": 0
      }, {
        "fn": "miniCam(417,416,812,416)",
        "delay": 0.1
      },
      //{"fn": "check_rider()", "delay": 0 },
      //{"fn": "StartScreenRecord()", "delay": 1 },
      {
        "fn": "product_image_appear_hin()",
        "delay": 0
      },

      {
        "fn": "customerText_hin()",
        "delay": 0
      },
 {
    "fn": "hideOut()",
    "delay": 0
  },
{
    "fn": "prevnext_screens(7,9)",
    "delay": 0
  },

    ],
    "name": "customer consent",
    "timing": -1,
    "index": 7
  },

  {
    "sprite_animations": [

      {
        "sprite": "tick1",
        "x": 980,
        "y": 350,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.9,
        "alpha": 0,
      },

      {
        "sprite": "tick2",
        "x": 980,
        "y": 490,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.9,
        "alpha": 0,
      },


      {
        "sprite": "recordbutton_hin",
        "x": 534,
        "y": 1684,
        "loop": false,
        "timing": 0,
        "delay": 1,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "onClickFn": "BeginRecording_beforelivenesscheck()",
        "alpha": 0
      }, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {
        "sprite": "proceed_video_hin",
        "x": 534 /*894*/ ,
        "y": 1800,
        "loop": false,
        "timing": 0,
        "delay": 1,
        "toTopObj": 1,
        "anchor": [0.5, 0],
        "onClickFn": "goToPage(9)",
        "alpha": 0
      }, //goToPage_overall_rider(250,1810,8,\'y\',17)


      // {"sprite": "agree","x": 212,"y": 1814,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "goToPage(9)"}, //goToPage_overall_rider(250,1810,8,\'y\',17)
      // {"sprite": "disagree","x": 864,"y": 1812,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "goToPage(9)"}, //goToPage_overall_rider(810,1810,8,\'n\',17)


    ],

    "text_animations": [{
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 550,
        "x": 18,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },

      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 140,
        "sy": 550,
        "x": 140,
        "y": 550,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "black",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      }, {
        "text": [{
          "content": window.product_name
        }],
        "sx": 18,
        "sy": 632,
        "x": 18,
        "y": 632,
        "size": 30,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#000000",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0],
        "alpha": 1
      },


      //Combo-UI

     {"text": [{"content":"Solution ID No :"}], "sx": 18,"sy": 552,"x": 18 ,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0],"alpha":0 },


      {"text": [{"content":window.solution_id}], "sx": 230,"sy": 552,"x": 230,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0],"alpha":0 },
       {"text": [{"content":  window.combo_name}], "sx": 18,"sy": 632,"x": 18 ,"y": 632,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520,"alpha":0},


      // {"text": [{"content": window.product_name}], "sx": 18,"sy": 632,"x": 18,"y": 632,"size": 35,"weight":"normal","lineSpacing":-3,"color":"#000000","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520, "alpha": 0},


      // {"text": [{"content":"\nचेहरे की पहचान के लिए कृपया अपने चेहरे को बॉक्स के भीतर रखें। जीवंतता की जांच के लिए मुस्‍कुराएं"}], "sx": 74,"sy": 825,"x": 74 ,"y": 825,"size": 35,"weight":"bold","lineSpacing":0,"color":"#0060a5","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":950,"align":"center", "anchor":[0,0],"padding": 15,"alpha":1 },
      // {"text": [{"content":"\nकृपया सुनिश्चित करें कि आप खुद को बॉक्‍स के अंदर देख पा रहे हैं और जब तक आपका चेहरा पहचाना जाए, थोड़ी देर इंतजार करें। रिकॉर्डिंग के दौरान जब हम आपके चेहरे को रिकॉर्ड करें, मुस्कुराना या अपनी प्लके झपकाना न भूलें, रिकॉर्ड बटन पर क्लिक कर वीडियो रिकॉर्डिंग शुरू करें जो 10 सेकंड के बाद बंद हो जाए"}], "sx": 74,"sy": 658,"x": 74 ,"y": 658,"size": 25,"weight":"bold","color":"#0060a5","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":950,"align":"center", "anchor":[0,0],"alpha":1 },
      {
        "text": [{
          "content": instruct_text_hin
        }],
        "sx": 84,
        "sy": 697,
        "x": 84,
        "y": 697,
        "size": 35,
        "weight": "bold",
        "lineSpacing": 5,
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "wordWrap": true,
        "wordWrapWidth": 950,
        "align": "center",
        "anchor": [0, 0],
        "alpha": 1
      },

      // {
      //   "text": [{
      //     "content": liveness_checked_text_hin
      //   }],
      //   "sx": 74,
      //   "sy": 677,
      //   "x": 74,
      //   "y": 677,
      //   "size": 35,
      //   "weight": "bold",
      //   "lineSpacing": 5,
      //   "color": "#0060a5",
      //   "tween_type": "Elastic.easeOut",
      //   "timing": 200,
      //   "delay": 0.5,
      //   "wordWrap": true,
      //   "wordWrapWidth": 970,
      //   "align": "center",
      //   "anchor": [0, 0],
      //   "alpha": 0
      // },



      {
        "text": [{
          "content": position_text_hin
        }],
        "sx": 78,
        "sy": 1620,
        "x": 78,
        "y": 1620,
        "size": 45,
        "weight": "bold",
        "lineSpacing": 0,
        "color": "#1261a8",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "wordWrap": true,
        "wordWrapWidth": 950,
        "align": "center",
        "anchor": [0, 0],
        "padding": 15,
        "lineSpacing": 5,
        "alpha": 0
      },

      {
        "text": [{
          "content": "\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n"
        }],
        "sx": 540,
        "sy": 1760,
        "x": 540,
        "y": 1760,
        "size": 40,
        "weight": "bold",
        "lineSpacing": 0,
        "color": "red",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "wordWrap": true,
        "wordWrapWidth": 950,
        "align": "center",
        "anchor": [0.5, 0],
        "alpha": 0
      },

{
        "text": [{
          "content": "\nकृपया सुनिश्चित करें कि आपका चेहरा बॉक्स में दिखाई दे रहा है\n"
        }],
        "sx": 540,
        "sy": 1760,
        "x": 540,
        "y": 1760,
        "size": 40,
        "weight": "bold",
        "lineSpacing": 0,
        "color": "red",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "wordWrap": true,
        "wordWrapWidth": 950,
        "align": "center",
        "anchor": [0.5, 0],
        "alpha": 0
      },

      //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      //{"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

      //{"text": [{"content":"VIDEO CONSENT"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },
{
    "text": [{
      "content": liveness_close_text_hin
    }],
    "sx": 90,
    "sy": 1750,
    "x": 90,
    "y": 1750,
    "size": 45,
    "weight": "bold",
    "lineSpacing": 0,
    "color": "#1261a8",
    "tween_type": "Elastic.easeOut",
    "timing": 200,
    "delay": 0.5,
    "wordWrap": true,
    "wordWrapWidth": 950,
    "align": "center",
    "anchor": [0, 0],
    "alpha": 0
  },
      {
        "text": [{
          "content": come_closer_hin
        }],
        "sx": 540,
        "sy": 1620,
        "x": 540,
        "y": 1620,
        "size": 45,
        "weight": "bold",
        "lineSpacing": 0,
        "color": "red",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "wordWrap": true,
        "wordWrapWidth": 950,
        "align": "center",
        "anchor": [0.5, 0],
        "padding": 15,
        "lineSpacing": 5,
        "alpha": 0
      },

      {
        "text": [{
          "content": video_upload_text_hin
        }],
        "sx": 120,
        "sy": 1760,
        "x": 120,
        "y": 1760,
        "size": 45,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "wordWrap": true,
        "wordWrapWidth": 920,
        "align": "center",
        "anchor": [0, 0],
        "alpha": 0
      }, {
        "text": [{
          "content": tap_on_pro_hin
        }],
        "sx": 250,
        "sy": 1667,
        "x": 250,
        "y": 1667,
        "size": 50,
        "weight": "normal",
        "lineSpacing": -3,
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "wordWrap": true,
        "wordWrapWidth": 920,
        "align": "center",
        "padding": 15,
        "anchor": [0, 0],
        "alpha": 0
      },


      {
        "text": [{
          "content": "\nरिकॉर्डिंग शुरू\n"
        }],
        "sx": 534,
        "sy": 1700,
        "x": 534,
        "y": 1700,
        "size": 50,
        "weight": "normal",
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0.5, 0.5],
        "align": "center",
        "padding": 15,
        "alpha": 0
      }, {
        "text": [{
          "content": "रिकॉर्डिंग पूर्ण"
        }],
        "sx": 534,
        "sy": 1700,
        "x": 534,
        "y": 1700,
        "size": 50,
        "weight": "normal",
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0.5, 0.5],
        "align": "center",
        "padding": 15,
        "alpha": 0
      }, {
        "text": [{
          "content": "Rec_count"
        }],
        "sx": 534,
        "sy": 1700,
        "x": 534,
        "y": 1700,
        "size": 50,
        "weight": "normal",
        "color": "#0060a5",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0.5, 0.5],
        "align": "center",
        "alpha": 0
      }, {
        "text": [{
          "content": "कृपया रिकॉर्डिंग करते समय बोलें"
        }],
        "sx": 534,
        "sy": 1840,
        "x": 534,
        "y": 1840,
        "size": 35,
        "weight": "bold",
        "color": "red",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0.5, 0.5],
        "align": "center",
        "alpha": 0
      },


    ],

    // "sound_list": [
    //     {
    //         "sound": ["vi"]
    //         }
    //     ],
    "functions": [

      {
        "fn": "SetBGTile('video-consent-bg_hin')",
        "delay": 0
      },
      // {"fn": "play_video_consent_audio_hin()","delay": 0},



      {
        "fn": "initCamOnly()",
        "delay": 0.5
      },
      // {"fn": "beginFaceDetect()", "delay": 2 },
      //{"fn": "initWebCamPos_videoconsent()", "delay" : 1  },
      //{"fn": "faceDetectStart()", "delay" : 2  }
      //   {"fn": "check_ios()", "delay" : 0  },
      {
        "fn": "product_image_appear_hin_video()",
        "delay": 0
      },
       {"fn": "id_appear_hin()", "delay": 0 },
      {
        "fn": "customerDestroy()",
        "delay": 0
      },


    ],
    "name": "video consent",
    "timing": -1,
    "index": 8
  },

  {
    "sprite_animations": [

      {
        "sprite": "Thank_You_msg_hin",
        "x": 540,
        "y": 920,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 3,
        "anchor": [0.5, 0.5],
        "scale": 1.2,
        "alpha": 1
      },

      {
        "sprite": "link_pnb_hin",
        "x": 540,
        "y": 1790,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 3,
        "anchor": [0.5, 0.5],
        "onClickFn": "open_url_tab('https://www.pnbmetlife.com/')",
        "alpha": 1
      },

      // {"sprite": "continue_hin", "x": 540, "y": 1260, "loop": false, "timing": 0, "delay": 0, "toTopObj": 3, "anchor": [0.5, 0.5],"onClickFn":"open_url_tab('http://10.168.50.176/Dashboard.aspx')","scale": 0.8,"alpha":1},

      // {"sprite": "tq_handshake","x": 790,"y": 200,"loop": false,"timing": 40,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"scale":1.5},
      // {"sprite": "girl1","x": 550,"y": 720,"loop": false,"timing": 5,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"scale":1},//
      //    {"sprite": "pdf","x": 800,"y": 150,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "download_pdf_url_pnb('https://dev.anoorcloud.in/pnb-metlife-new/portal-new/api/DownloadPdf/202','PNB')","scale":1},
    ],

    "text_animations": [

      {
        "text": [{
          "content": "प्रस्ताव सं :"
        }],
        "sx": 18,
        "sy": 215,
        "x": 18,
        "y": 215,
        "size": 35,
        "weight": "normal",
        "lineSpacing": -3,
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },


      {
        "text": [{
          "content": window.proposal_no
        }],
        "sx": 157,
        "sy": 215,
        "x": 157,
        "y": 215,
        "size": 35,
        "weight": "normal",
        "lineSpacing": -3,
        "color": dBLUE,
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0.5,
        "align": "left",
        "anchor": [0, 0]
      },
      //  {"text": [{"content": "\nहमें उम्मीद है कि आप पॉलिसी के विवरण से संतुष्ट हैं।."}],  "sx": 550,"sy": 1680,"x": 550,"y": 1680,"size": 35,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"align":"center"  },

      // {"text": [{"content": "\nअधिक जानकारी के लिए आप हमारी वेबसाइट पर जा सकते हैं"}],  "sx": 550,"sy": 1740,"x": 550,"y": 1740,"size": 35,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000, "align":"center" },
      //      {"text": [{"content": "www.pnbmetlife.com"}],  "sx": 550,"sy": 1830,"x": 550,"y": 1830,"size": 35,"weight": "normal","color": "#A52C36","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"onClickFn": "open_url('https://www.pnbmetlife.com/')","align":"center"  },
      // {"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
      //        {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

      //        {"text": [{"content":"THANK YOU"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

      //      {"text": [{"content": "We hope you are satisfied with the details of the policy."}],  "sx": -1000,"sy": 1150,"x": 550,"y": 1520,"size": 50,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"align":"center"  },

      //    {"text": [{"content": "For more details you may visit our website"}],  "sx": -1000,"sy": 1000,"x": 550,"y": 1690,"size": 50,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000, "align":"center" },
      //    {"text": [{"content": "www.pnbmetlife.com"}],  "sx": -1000,"sy": 1000,"x": 550,"y": 1810,"size": 50,"weight": "normal","color": "#A52C36","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"onClickFn": "open_url1('https://www.pnbmetlife.com/')","align":"center"  },


      //   {"text": [{"content": "Click to Download"}],  "sx": 800,"sy": 640,"x": 800,"y": 640,"size": 40,"weight": "bold","color": "black","tween_type": "fadein","timing": 1000,"delay": 4,"wordWrap":true,"wordWrapWidth":1000,"align":"center"  },

    ],
    "sound_list": [{
      "sound": ["thank_you_hin"]
    }],


    "functions": [{
        "fn": "SetBGTile('Page-10-PNB_Thank-you_hin')",
        "delay": 0
      },
      //{"fn": "complete_status_api()","delay": 0}
      {
        "fn": "open_url()",
        "delay": 0
      },

      {
        "fn": "animateSprite(550,760,\'Khusi-full\',1.70,1,40,10,0)",
        "delay": 0
      },
      {
    "fn": "hideOut()",
    "delay": 0
  },

    ],
    "name": "thank u page",
    "timing": -1,
    "index": 9
  }, {
    "sprite_animations": [

    ],

    "text_animations": [
      //  {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 540,"x": 260 ,"y": 540,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

      {
        "text": [{
          "content": "कैमरा सुलभ नहीं है। कृपया कैमरा सक्षम करें और पुनः प्रयास करें!"
        }],
        "sx": 200,
        "sy": 1000,
        "x": 200,
        "y": 1000,
        "size": 50,
        "weight": "normal",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0, 0],
        "wordWrap": true,
        "wordWrapWidth": 800,
        "align": "center"
      }
    ],


    "functions": [

      {
        "fn": "SetBGTile('PNB_Hindi_BG')",
        "delay": 0
      },
      //{"fn": "product_image_appear()", "delay": 0 },


    ],
    "name": "for cam access error",
    "timing": -1,
    "index": 10
  },

  {
    "sprite_animations": [

    ],

    "text_animations": [
      //  {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 540,"x": 260 ,"y": 540,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

      {
        "text": [{
          "content": "\nकृपया अपने नेटवर्क कनेक्शन की जाँच करें फिर तब फिर कोशिश करें!"
        }],
        "sx": 150,
        "sy": 800,
        "x": 150,
        "y": 800,
        "size": 52,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0, 0],
        "wordWrap": true,
        "wordWrapWidth": 800,
        "align": "center",
        "lineSpacing": 5
      }
    ],


    "functions": [

      {
        "fn": "SetBGTile('PNB_Hindi_BG')",
        "delay": 0
      },
      //{"fn": "product_image_appear()", "delay": 0 },


    ],
    "name": "for api call error",
    "timing": -1,
    "index": 11
  },




  {
    "sprite_animations": [

    ],

    "text_animations": [
      //  {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 540,"x": 260 ,"y": 540,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

      {
        "text": [{
          "content": "\nवीडियो अपलोडिंग विफल"
        }],
        "sx": 200,
        "sy": 800,
        "x": 200,
        "y": 800,
        "size": 52,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0, 0],
        "wordWrap": true,
        "wordWrapWidth": 800,
        "align": "center",
        "lineSpacing": 5
      }
    ],

    "functions": [

      {
        "fn": "SetBGTile('PNB_Hindi_BG')",
        "delay": 0
      },
      //{"fn": "product_image_appear()", "delay": 0 },

    ],
    "name": "for video upload error",
    "timing": -1,
    "index": 12
  },

  {
      "sprite_animations": [

        // {"sprite": "proceed", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8, "alpha":1, "onClickFn":"proceedToConsent()"},

       {"sprite": "combo_bar", "x": 540, "y": 800, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 900, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1000, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1100, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1200, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1300, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1400, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1500, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},
       {"sprite": "combo_bar", "x": 540, "y": 1600, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "alpha":1},


           {"sprite": "agree_hin","x": 872,"y": 1810,"loop": false,"timing": 0,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"alpha": 0,"onClickFn": "next_polDet('y','policy_details_combo')"},//goToPage_personal_without_input(250,1810,5,\'y\',4)
       {"sprite": "disagree_hin","x": 212,"y": 1810,"loop": false,"timing": 0,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"alpha": 0,"onClickFn": "next_polDet('n','policy_details_combo')"},
       ],

      "text_animations": [

       {"text": [{"content":"Solution ID No :"}], "sx": 18,"sy": 552,"x": 18 ,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },


        {"text": [{"content":window.solution_id}], "sx": 230,"sy": 552,"x": 230,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
         {"text": [{"content":  window.combo_name}], "sx": 18,"sy": 632,"x": 18 ,"y": 632,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520},


    {"text": [{"content":"\nप्लान का नाम\n"}], "sx": 70,"sy": 805,"x": 70 ,"y": 805,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center","stroke":"#FFFFFF", "strokeThickness": 1 },
     {"text": [{"content":window.product_name}], "sx": 450,"sy": 800,"x": 450 ,"y": 800,"size": 30,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left","wordWrap": true, "wordWrapWidth":300 },
    {"text": [{"content":window.combo_product_name}], "sx": 750,"sy": 800,"x": 750 ,"y": 800,"size": 28,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left","wordWrap": true, "wordWrapWidth":300  },


       {"text": [{"content":"\nप्लान का  प्रकार"}], "sx": 70,"sy": 885,"x": 70 ,"y": 885,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
       {"text": [{"content":window.policy_type}], "sx": 440,"sy": 900,"x": 440 ,"y": 900,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
       {"text": [{"content":window.combo_policy_type}], "sx": 750,"sy": 900,"x": 750 ,"y": 900,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },


      {"text": [{"content":"\nबीमित राशि\n"}], "sx": 70,"sy": 1000,"x": 70 ,"y": 1000,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
      {"text": [{"content":window.sum_assured}], "sx": 440,"sy": 1000,"x": 440 ,"y": 1000,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
      {"text": [{"content":window.combo_sum_assured}], "sx": 750,"sy": 1000,"x": 750 ,"y": 1000,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

      {"text": [{"content":"\nउत्तरजीविता/आय लाभ\n"}], "sx": 70,"sy": 1100,"x": 70 ,"y": 1100,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
      {"text": [{"content":window.income_benefit}], "sx": 440,"sy": 1100,"x": 440 ,"y": 1100,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
      {"text": [{"content":"Rs." + window.combo_income_benefit}], "sx": 750,"sy": 1100,"x": 750 ,"y": 1100,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

      {"text": [{"content":"\nपरिपक्वता लाभ"}], "sx": 70,"sy": 1185,"x": 70 ,"y": 1185,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
      {"text": [{"content":"Rs." + window.maturity_benefit}], "sx": 440,"sy": 1200,"x": 440 ,"y": 1200,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
      {"text": [{"content":window.combo_maturity_benefit}], "sx": 750,"sy": 1200,"x": 750 ,"y": 1200,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

     {"text": [{"content":"\nभुगतान की आवृत्ति/प्रकार\n"}], "sx": 70,"sy": 1305,"x": 70 ,"y": 1305,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"center" },
     {"text": [{"content":window.payment_frequency}], "sx": 440,"sy": 1300,"x": 440 ,"y": 1300,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },
     {"text": [{"content":window.combo_payment_frequency}], "sx": 750,"sy": 1300,"x": 750 ,"y": 1300,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },

      {"text": [{"content":"\nपॉलिसी अवधि"}], "sx": 70,"sy": 1390,"x": 70 ,"y": 1390,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
      {"text": [{"content":window.policy_term}], "sx": 440,"sy": 1400,"x": 440 ,"y": 1400,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
      {"text": [{"content":window.combo_policy_term}], "sx": 750,"sy": 1400,"x": 750 ,"y": 1400,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

     {"text": [{"content":"\nप्रीमियम भुगतान अवधि\n"}], "sx": 70,"sy": 1500,"x": 70 ,"y": 1500,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
     {"text": [{"content": window.premium_payment_term}], "sx": 440,"sy": 1500,"x": 440 ,"y": 1500,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
     {"text": [{"content": window.combo_premium_payment_term}], "sx": 750,"sy": 1500,"x": 750 ,"y": 1500,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

      {"text": [{"content":"\nप्रीमियम राशि\n"}], "sx": 70,"sy": 1605,"x": 70 ,"y": 1605,"size": 33,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"center" },
      {"text": [{"content":"Rs." + window.premium_amount}], "sx": 440,"sy": 1600,"x": 440 ,"y": 1600,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },
      {"text": [{"content":window.combo_premium_amount}], "sx": 750,"sy": 1600,"x": 750 ,"y": 1600,"size": 33,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },


  {"text": [{"content":'\nकृपया प्रतीक्षा कीजिये'}], "sx": 530,"sy": 1750,"x": 530,"y": 1750,"size": 30,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"anchor":[0.5,0],"alpha":0 },

          ],

         "sound_list": [{
        "sound": ['solution_id_hin','$var.alphanumeric_window.solution_id','silent','au_combo_hin_01',window.combo_name,'au_combo_hin_02','silent','au_combo_hin_03',window.product_name,'au_hin_02', 'silent','au_hin_03',window.policy_type,'au_hin_04', 'silent','au_hin_05','$var.currency_window.sum_assured', 'silent','au_combo_hin_04','$var.currency_window.maturity_benefit', 'silent', 'au_hin_06', '$var.currency_window.premium_amount','au_hin_07', window.payment_frequency, 'silent', 'au_hin_08', '$var.number_window.pa_policy_term','au_hin_09', 'silent', 'au_hin_10', '$var.number_window.pa_premium_payment_term','au_hin_11',
                   'silent','au_combo_hin_05',window.combo_product_name,'au_combo_hin_06','silent','au_hin_03',window.combo_policy_type,'au_hin_04', 'silent','au_hin_05','$var.currency_window.combo_sum_assured','au_combo_hin_07','$var.currency_window.combo_income_benefit','silent','au_hin_06','$var.currency_window.combo_premium_amount','au_hin_07',window.combo_payment_frequency,'silent','au_hin_08','$var.number_window.ca_combo_policy_term','au_hin_09', 'silent','au_hin_10','$var.number_window.ca_combo_premium_payment_term','au_hin_11','consent_hin'
        ]
      }],

      "functions": [

        {"fn": "SetBGTile('pnb_policy_hin')", "delay": 0 },
        //{"fn": "initWebCamPos(818,385,1)", "delay" : 1  },
        {"fn":"miniCam(417,418,812,422)", "delay":0.1 } ,
         {"fn": "product_image_combo_hin2()", "delay": 0 },
  //{"fn": "buttonEnable_policy_hin()", "delay": 0 },

          {"fn": "Sizecheck()", "delay": 0 },
{
    "fn": "hideOut()",
    "delay": 0
  },
{
    "fn": "prevnext_screens(13,9)",
    "delay": 0
  },

      ],
      "name": "sample_policy page2",
      "timing": -1,
      "index": 13

    },
{
"sprite_animations": [

  {
    "sprite": "popup_box_hin",
    "x": 540,
    "y": 1220,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 1
  },
  {
    "sprite": "popup_box_customer_hin",
    "x": 540,
    "y": 1220,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 0
  },

  {
    "sprite": "mesage_box_hin",
    "x": 540,
    "y": 1630,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 1
  },

  {
    "sprite": "cancel_btn_hin",
    "x": 430,
    "y": 1680,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 0,
    "onClickFn": "cancel_btn()"
  },
 {
    "sprite": "ok_btn_hin",
    "x": 680,
    "y": 1680,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 0,
    "onClickFn": "sample_disagree_status()"
  },
   {
    "sprite": "close",
    "x": 950,
    "y": 980,
    "loop": false,
    "timing": 0,
    "delay": 0,
    "toTopObj": 3,
    "anchor": [0.5, 0.5],
    "scale": 1,
    "alpha": 0,
    "onClickFn": "cancel_btn()"
  },


        ],

"text_animations": [
       {"text": [{"content":"Solution ID No :"}], "sx": 18,"sy": 552,"x": 18 ,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0],"alpha":0 },


        {"text": [{"content":window.solution_id}], "sx": 230,"sy": 552,"x": 230,"y": 552,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0],"alpha":0 },
         {"text": [{"content":  window.combo_name}], "sx": 18,"sy": 632,"x": 18 ,"y": 632,"size": 30,"weight":"normal","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520,"alpha":0},


  {
    "text": [{
      "content": "प्रस्ताव सं :"
    }],
    "sx": 18,
    "sy": 552,
    "x": 18,
    "y": 552,
    "size": 30,
    "weight": "normal",
    "lineSpacing": -3,
    "color": "black",
    "tween_type": "Elastic.easeOut",
    "timing": 200,
    "delay": 0.5,
    "align": "left",
    "anchor": [0, 0],
    "alpha":0
  },


  {
    "text": [{
      "content": window.proposal_no
    }],
    "sx": 190,
    "sy": 552,
    "x": 190,
    "y": 552,
    "size": 30,
    "weight": "normal",
    "lineSpacing": -3,
    "color": "black",
    "tween_type": "Elastic.easeOut",
    "timing": 200,
    "delay": 0.5,
    "align": "left",
    "anchor": [0, 0],
    "alpha":0
  },

  {
    "text": [{
      "content": window.product_name
    }],
    "sx": 18,
    "sy": 632,
    "x": 18,
    "y": 632,
    "size": 30,
    "weight": "normal",
    "lineSpacing": -3,
    "color": "black",
    "tween_type": "Elastic.easeOut",
    "timing": 200,
    "delay": 0.5,
    "align": "left",
    "anchor": [0, 0],
    "alpha": 0
  },
  {
    "text": [{
      "content": '\nकृपया विवरण भरें'
    }],
    "sx": 540,
    "sy": 1780,
    "x": 540,
    "y": 1780,
    "size": 40,
    "weight": "bold",
    "color": "#D8000C",
    "tween_type": "Elastic.easeOut",
    "timing": 200,
    "delay": 0,
    "anchor": [0.5, 0],
    "alpha": 0
  },
  {
        "text": [{
          "content": '\nकृपया प्रतीक्षा कीजिये'
        }],
        "sx": 545,
        "sy": 1750,
        "x": 545,
        "y": 1750,
        "size": 30,
        "weight": "bold",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 200,
        "delay": 0,
        "anchor": [0.5, 0],
        "alpha": 0
      },
   //  {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 540,"x": 260 ,"y": 540,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

          // {"text": [
          //           {"content":"Please Check Your Network Connection then Try Again!"}
          //       ], "sx": 250,"sy": 800,"x": 250 ,"y": 800,"size": 52,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0, "anchor":[0,0], "wordWrap": true, "wordWrapWidth":800,"align":"center" }
        ],

  "input_animations": [

   { "text": [{ "content":  "" }], "placeHolder": "यदि कोई अन्य, कृपया निर्दिष्ट करें...", "key": "disagree_text", "sx": 210, "sy": 1400, "x": 210, "y": 1400, "size": 40, "weight": "normal", "width": 655, "height":125, "backgroundColor": "#e5eef6", "fill": "#000000", "tween_type": "Elastic.easeOut", "timing": 200, "delay": 0, "anchor": [0, 0.5], "padding": 0, "align":"center", "type":"textarea","maxLength":75  },

],
"sound_list": [{
      "sound": ['requestaudio_hin']
    }],


"functions": [

          // {"fn": "SetBGTile('pnb_policy_details1_eng')","delay": 0},

{
    "fn": "SetBGTileDisagree()",
    "delay": 0
    },
       {
        "fn": "miniCam(417,416,812,419)",
        "delay": 0.1
      },
      {
    "fn": "disagree_productimage()",
    "delay": 0
  },
// {
//     "fn": "product_image_combo_hin2()",
//     "delay": 0
//   },
  // {
  //   "fn": "set_language_json_value()",
  //   "delay": 0
  // },
  {
    "fn": "dropvalue()",
    "delay": 0
  },
  // {
  //   "fn": "hideOut()",
  //   "delay": 0
  // },
 {
    "fn": "disagree_dd(sysLang,prev_scr)",
    "delay": 0
  },

    ],
"name": "disagree status screen",
"timing": -1,
"index": 14
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

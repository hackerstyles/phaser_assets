window.stage.screens = [];

var dBLUE = "#005590";
var white = "#FFFFFF";

for (var i = 0; i < window.common_screens.length; i++) {
  window.stage.screens.push(window.common_screens[i]);
}


var screens_eng = [{

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

     // {"sprite": "proceed", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8, "alpha":1, "onClickFn":"proceedToConsent()"},
      {"sprite": "Hello_text", "x": 540, "y": 750, "loop": false, "timing": 0, "delay": 0, "toTopObj": 3, "anchor": [0.5, 0.5], "scale": 3.60, "alpha":1},


      {"sprite": "Greeting_english", "x": 550, "y": 1300, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 1, "alpha":1},

      {"sprite": "proceed_button", "x": 550, "y": 1750, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 1, "alpha":1, "onClickFn":"goToPage(4)"},//proceedToConsent()


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
      "sound": ['lang']
    }],

    "functions": [

      {"fn": "SetBGTile('PNB_PlainBG')", "delay": 0 },
  //     //{"fn":"miniCam()", "delay":0.1 } ,
   {
    "fn":"animateSprite(550,650,\'Khusi-full\',1.50,1,40,10,0)",
    "delay":0
   },
  // {
  //   "fn":"animateSprite()",
  //   "delay":0
  // },


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
        "x": 780,
        "y": 620,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.8,
        "alpha":0,
        },

        {
        "sprite": "tick2",
        "x": 980,
        "y": 620,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.8,
        "alpha":0,
        },

     //  {"sprite": "record", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8,"alpha":0},
     {"sprite": "with-nominee","x": 550,"y": 740,"loop": false,"timing": 0,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"alpha":0},//goToPage_personal_without_input(250,1810,5,\'y\',4)
     {"sprite": "without-nominee","x": 550,"y": 740,"loop": false,"timing": 0,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"alpha":0},//goToPage_personal_without_input(250,1810,5,\'y\',4)


     {"sprite": "agree","x": 250,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_perDet('y','personal_details')"},//goToPage_personal_without_input(250,1810,5,\'y\',4)
     {"sprite": "disagree","x": 810,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_perDet('n','personal_details')"},//goToPage_personal_without_input(810,1810,5,\'n\',4)


     ],

    "text_animations": [

  {"text": [{"content":"Please Position your face within the box to ensure face detection"}], "sx": 630,"sy": 555,"x": 630 ,"y": 555,"size": 28,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center","wordWrap": true, "wordWrapWidth":410 },


      {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 542,"x": 260 ,"y": 542,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
        // {"text": [{"content": window.product_name}], "sx": 80,"sy": 600,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },


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

   {"text": [{"content":'Please Wait'}], "sx": 535,"sy": 1780,"x": 535,"y": 1780,"size": 40,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"anchor":[0.5,0],"alpha":0 },
  {"text": [{"content":"Please Provide Face Detection and Liveness Check"}], "sx": 150,"sy": 1795,"x": 150,"y": 1795,"size": 35,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center","wordWrap": true,"alpha":0 },

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
      "sound": ['personal_details']
    }],

    "functions": [

      {"fn": "SetBGTile('personal-details-blank')", "delay": 0 },
      {"fn":"miniCam(417,414,818,386)", "delay":0.1 } ,
      {"fn": "beginFaceDetect()", "delay": 1 },
       {"fn": "product_image_appear()", "delay": 0 },
{"fn": "display_nominee_personal()", "delay": 1 },

    ],
    "name": "sample_personal details",
    "timing": -1,
    "index": 4

  },


{
    "sprite_animations": [

      // {"sprite": "proceed", "x": 800, "y": 1850, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 0.8, "alpha":1, "onClickFn":"proceedToConsent()"},


         {"sprite": "agree","x": 250,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_polDet('y','policy_details')"},//goToPage_personal_without_input(250,1810,5,\'y\',4)
     {"sprite": "disagree","x": 810,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_polDet('n','policy_details')"},
     ],

    "text_animations": [

      {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 542,"x": 260 ,"y": 542,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

     // {"text": [{"content":"window.proposal_no"}], "sx": 80,"sy": 453,"x": 80 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
     //    {"text": [{"content": "window.product_name"}], "sx": 80,"sy": 600,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

         //{"text": [{"content":"POLICY DETAILS"}], "sx": 815 ,"sy": 85,"x": 815 ,"y": 85,"size": 35,"weight":"bold","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },


  {"text": [{"content":"Product Name"}], "sx": 80,"sy": 880,"x": 80 ,"y": 880,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
  {"text": [{"content":window.product_name}], "sx": 460,"sy": 880,"x": 460 ,"y": 880,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

  {"text": [{"content":"Product Type"}], "sx": 80,"sy": 1000,"x": 80 ,"y": 1000,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center", "wordWrap": true, "wordWrapWidth":420 },
  {"text": [{"content":window.policy_type}], "sx": 460,"sy": 1000,"x": 460 ,"y": 1000,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left", "wordWrap": true, "wordWrapWidth":420 },

  {"text": [{"content":"Sum Assured"}], "sx": 80,"sy": 1125,"x": 80 ,"y": 1125,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
  {"text": [{"content":"Rs." + window.sum_assured}], "sx": 460,"sy": 1125,"x": 460 ,"y": 1125,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

  {"text": [{"content":"Premium Amount"}], "sx": 80,"sy": 1250,"x": 80 ,"y": 1250,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"center" },
  {"text": [{"content":"Rs." + window.premium_amount}], "sx": 460,"sy": 1250,"x": 460 ,"y": 1250,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },

  {"text": [{"content":"Frequency"}], "sx": 80,"sy": 1370,"x": 80 ,"y": 1370,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"center" },
  {"text": [{"content":window.payment_frequency}], "sx": 460,"sy": 1370,"x": 460 ,"y": 1370,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5] ,"align":"left" },

  {"text": [{"content":"Policy Term"}], "sx": 80,"sy": 1495,"x": 80 ,"y": 1495,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center" },
  {"text": [{"content":window.policy_term}], "sx": 460,"sy": 1495,"x": 460 ,"y": 1495,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

  {"text": [{"content":"Premium Paying Term"}], "sx": 80,"sy": 1615,"x": 80 ,"y": 1615,"size": 35,"weight":"normal","color":"#FFFFFF","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },
  {"text": [{"content": window.premium_payment_term}], "sx": 460,"sy": 1615,"x": 460 ,"y": 1615,"size": 35,"weight":"normal","color":dBLUE,"tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"left" },

{"text": [{"content":'Please Wait'}], "sx": 535,"sy": 1780,"x": 535,"y": 1780,"size": 40,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"anchor":[0.5,0],"alpha":0 },
 //{"text": [{"content":"Please Provide Face Detection and Liveness Check"}], "sx": 140,"sy": 1795,"x": 140,"y": 1795,"size": 35,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 500,"delay":0, "anchor":[0,0.5],"align":"center","wordWrap": true,"alpha":0 },

  // {"text": [{"content":"WELCOME"}], "sx": 600,"sy": 90,"x": 600 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

  //              {"text": [{"content":"Greetings from PNB MetLife!"}], "sx": 150,"sy": 780,"x": 150 ,"y": 780,"size": 55,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

  //           {"text": [{"content":"This is a Pre Issuance verification of your insurance proposal to ensure you have understood all the policy benefits, terms and conditions as applicable. "}], "sx": 150,"sy": 940,"x": 150 ,"y": 940,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

  //             {"text": [{"content":"Please provide your consent by selecting Agree / Disagree on every screen during the journey."}], "sx": 150,"sy": 1210,"x": 150 ,"y": 1210,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },
  //             {"text": [{"content":"Hope you have enabled your Front Camera and you are able to view yourself within the square box above at right side of the screen "}], "sx": 150,"sy": 1430,"x": 150 ,"y": 1430,"lineSpacing":-3,"size": 45,"weight":"normal","color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":3,"wordWrap": true, "wordWrapWidth":850,"align":"justify", "anchor":[0,0] },

  //             {"text": [{"content":'Proceed'}], "sx": 570,"sy": 1783,"x": 570 ,"y": 1783,"size": 50,"weight":"bold","color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":1,"anchor":[0.5,0] },

        ],

       "sound_list": [{
      "sound": ['policy_details']
    }],

    "functions": [

      {"fn": "SetBGTile('Page-5_PNB_Policy')", "delay": 0 },
      //{"fn": "initWebCamPos(818,385,1)", "delay" : 1  },
      {"fn":"miniCam(417,416,812,416)", "delay":0.1 } ,
       {"fn": "product_image_appear()", "delay": 0 },

    ],
    "name": "sample_policy page",
    "timing": -1,
    "index": 5

  },

{
    "sprite_animations": [

      {"sprite": "agree","x": 250,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_riDet('y','rider_details')"}, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {"sprite": "disagree","x": 810,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_riDet('n','rider_details')"}, //goToPage_overall_rider(810,1810,8,\'n\',17)


                     ],

    "text_animations": [
      {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 542,"x": 260 ,"y": 542,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

 //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 455,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
        // {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

         //{"text": [{"content":"RIDER DETAILS"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },
{"text": [{"content":'Please Wait'}], "sx": 535,"sy": 1780,"x": 535,"y": 1780,"size": 40,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"anchor":[0.5,0],"alpha":0 },

        ],


    "sound_list": [
        {
            "sound": ["rider_details"]
            }
        ],
    "functions": [


  //{"fn": "initWebCamPos(770,265,1.25)", "delay" : 1  },
    {
        "fn": "SetBGTile('Page-6_PNB_Rider')",
        "delay": 0
    },
      {"fn":"miniCam(417,416,812,416)", "delay":0.1 } ,
    //{"fn": "check_rider()", "delay": 0 },
  //{"fn": "StartScreenRecord()", "delay": 1 },
       {"fn": "product_image_appear()", "delay": 0 },
       {"fn":"addScroller()","delay":0}



        ],
    "name": "overall rider screen",
    "timing": -1,
    "index": 6
  },

{
    "sprite_animations": [

      {"sprite": "Customerconsent", "x": 540, "y": 1260, "loop": false, "timing": 0, "delay": 0, "toTopObj": 1, "anchor": [0.5, 0.5], "scale": 1, "alpha":1},


      {"sprite": "agree","x": 250,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_cusDet('y','customer_consent')"}, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {"sprite": "disagree","x": 810,"y": 1810,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "next_cusDet('n','customer_consent')"}, //goToPage_overall_rider(810,1810,8,\'n\',17)


                     ],

    "text_animations": [
      {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 542,"x": 260 ,"y": 542,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

{"text": [{"content":'Please Wait'}], "sx": 535,"sy": 1780,"x": 535,"y": 1780,"size": 40,"weight":"bold","color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0,"anchor":[0.5,0],"alpha":0 },

 //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 455,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
        // {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

        // {"text": [{"content":"RIDER DETAILS"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

        ],


    "sound_list": [
        {
            "sound": ["terms"]
            }
        ],
    "functions": [


  //{"fn": "initWebCamPos(770,265,1.25)", "delay" : 1  },
    {
        "fn": "SetBGTile('Page-7-PNB_Customer_Consent_bg')",
        "delay": 0
    },
     {"fn":"miniCam(417,416,812,416)", "delay":0.1 } ,
    //{"fn": "check_rider()", "delay": 0 },
  //{"fn": "StartScreenRecord()", "delay": 1 },
       {"fn": "product_image_appear()", "delay": 0 },



        ],
    "name": "customer consent",
    "timing": -1,
    "index": 7
  },

{
"sprite_animations": [

{
        "sprite": "tick1",
        "x": 960,
        "y": 350,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.9,
        "alpha":0,
        },

        {
        "sprite": "tick2",
        "x": 960,
        "y": 490,
        "loop": false,
        "timing": 0,
        "delay": 0,
        "toTopObj": 1,
        "anchor": [0.5, 0.5],
        "scale": 0.9,
        "alpha":0,
        },


      {"sprite": "record","x": 212,"y": 1664,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "BeginRecording()","alpha":0}, //goToPage_overall_rider(250,1810,8,\'y\',17)
      {"sprite": "proceed","x": 864,"y": 1664,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "goToPage(9)","alpha":0}, //goToPage_overall_rider(250,1810,8,\'y\',17)


      // {"sprite": "agree","x": 212,"y": 1814,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "goToPage(9)"}, //goToPage_overall_rider(250,1810,8,\'y\',17)
      // {"sprite": "disagree","x": 864,"y": 1812,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "goToPage(9)"}, //goToPage_overall_rider(810,1810,8,\'n\',17)


        ],

"text_animations": [
      {"text": [{"content":window.proposal_no}], "sx": 260,"sy": 542,"x": 260 ,"y": 542,"size": 35,"weight":"bold","lineSpacing":-3,"color":"black","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },

  //{"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
         //{"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

         //{"text": [{"content":"VIDEO CONSENT"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },
 {"text": [{"content":"Please Wait Your Video is uploading"}], "sx": 200,"sy": 1800,"x": 200 ,"y": 1800,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0],"alpha":0 },
 {"text": [{"content":"Tap on proceed button to continue"}], "sx": 200,"sy": 1800,"x": 200 ,"y": 1800,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#D8000C","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0],"alpha":0 },


       {
        "text": [{
          "content": "Recording Start"
        }],
        "sx": 242,
        "sy": 1720,
        "x": 242,
        "y": 1720,
        "size": 50,
        "weight": "normal",
        "color": "#D8000C",
        "tween_type": "Elastic.easeOut",
        "timing": 500,
        "delay": 0,
        "anchor": [0.5, 0.5],
        "align": "center",
        "alpha":0
      },


        ],

// "sound_list": [
//     {
//         "sound": ["vi"]
//         }
//     ],
"functions": [

          {"fn": "SetBGTile('video-consent-BG')","delay": 0},
        {"fn": "play_video_consent_audio()","delay": 0},



          {"fn": "initCamOnly()", "delay": 0.5 },
 {"fn": "beginFaceDetect()", "delay": 2 },
          //{"fn": "initWebCamPos_videoconsent()", "delay" : 1  },
          //{"fn": "faceDetectStart()", "delay" : 2  }
       //   {"fn": "check_ios()", "delay" : 0  },
       {"fn": "product_image_appear()", "delay": 0 },


    ],
"name": "video consent",
"timing": -1,
"index": 8
},

{
"sprite_animations": [

      {"sprite": "Thankyou_text", "x": 540, "y": 920, "loop": false, "timing": 0, "delay": 0, "toTopObj": 3, "anchor": [0.5, 0.5], "scale": 2, "alpha":1},

 // {"sprite": "tq_handshake","x": 790,"y": 200,"loop": false,"timing": 40,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"scale":1.5},
   // {"sprite": "girl1","x": 550,"y": 720,"loop": false,"timing": 5,"delay": 0, "toTopObj":1, "anchor":[0.5,0],"scale":1},//
  //    {"sprite": "pdf","x": 800,"y": 150,"loop": false,"timing": 0,"delay": 1, "toTopObj":1, "anchor":[0.5,0],"onClickFn": "download_pdf_url_pnb('https://dev.anoorcloud.in/pnb-metlife-new/portal-new/api/DownloadPdf/202','PNB')","scale":1},
        ],

"text_animations": [
  // {"text": [{"content":window.proposal_no}], "sx": 320,"sy": -70,"x": 320 ,"y": 453,"size": 35,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0] },
  //        {"text": [{"content": window.product_name}], "sx": 320,"sy": -70,"x": 80 ,"y": 600,"size": 30,"weight":"normal","lineSpacing":-3,"color":"white","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"align":"left", "anchor":[0,0], "wordWrap": true, "wordWrapWidth":520 },

  //        {"text": [{"content":"THANK YOU"}], "sx": -1000,"sy": 245,"x": 570 ,"y": 90,"size": 45,"weight":"normal","lineSpacing":-3,"color":"#013781","tween_type": "Elastic.easeOut","timing": 200,"delay":0.5,"wordWrap": true, "wordWrapWidth":920,"align":"center", "anchor":[0,0] },

  //      {"text": [{"content": "We hope you are satisfied with the details of the policy."}],  "sx": -1000,"sy": 1150,"x": 550,"y": 1520,"size": 50,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"align":"center"  },

  //    {"text": [{"content": "For more details you may visit our website"}],  "sx": -1000,"sy": 1000,"x": 550,"y": 1690,"size": 50,"weight": "normal","color": "#013781","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000, "align":"center" },
  //    {"text": [{"content": "www.pnbmetlife.com"}],  "sx": -1000,"sy": 1000,"x": 550,"y": 1810,"size": 50,"weight": "normal","color": "#A52C36","tween_type": "Elastic.easeOut","timing": 1000,"delay": 0,"wordWrap":true,"wordWrapWidth":1000,"onClickFn": "open_url1('https://www.pnbmetlife.com/')","align":"center"  },


     //   {"text": [{"content": "Click to Download"}],  "sx": 800,"sy": 640,"x": 800,"y": 640,"size": 40,"weight": "bold","color": "black","tween_type": "fadein","timing": 1000,"delay": 4,"wordWrap":true,"wordWrapWidth":1000,"align":"center"  },

      ],
"sound_list": [
    {
        "sound": ["thank_you"]
        }
    ],


"functions": [
    {"fn": "SetBGTile('Page-10-PNB_Thank-you')","delay": 0},
     //{"fn": "complete_status_api()","delay": 0}
{
    "fn":"animateSprite(550,760,\'Khusi-full\',1.70,1,40,10,0)",
    "delay":0
   },

    ],
"name": "thank u page",
"timing": -1,
"index": 9
},




  // {
  //   "sprite_animations": [



  //   {
  //       "sprite": "proceed",
  //       "x": 900,
  //       "y": 1800,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 0.8,
  //       "alpha":0,
  //       "onClickFn":"goToPage(6)"
  //       },

  //       {
  //       "sprite": "rec",
  //       "x": 540,
  //       "y": 1800,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 0.5,
  //       "alpha":0,
  //       "onClickFn":"BeginRecording()"
  //       },

  //       {
  //       "sprite": "tick1",
  //       "x": 350,
  //       "y": 600,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 0.6,
  //       "alpha":0,
  //       },

  //       {
  //       "sprite": "tick2",
  //       "x": 880,
  //       "y": 600,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 0.6,
  //       "alpha":0,
  //       },


  //   ],

  //   "text_animations": [

  //     {
  //       "text": [{
  //         "content": "Proceed"
  //       }],
  //       "sx": 900,
  //       "sy": 1800,
  //       "x": 900,
  //       "y": 1800,
  //       "size": 55,
  //       "weight": "normal",
  //       "color": white,
  //       "tween_type": "Elastic.easeOut",
  //       "timing": 500,
  //       "delay": 0,
  //       "anchor": [0.5, 0.5],
  //       "align": "center",
  //       "alpha":0
  //     },

  //      {
  //       "text": [{
  //         "content": "user_name"
  //       }],
  //       "sx": 80,
  //       "sy": 450,
  //       "x": 80,
  //       "y": 450,
  //       "size": 50,
  //       "weight": "normal",
  //       "color": "#585858",
  //       "tween_type": "Elastic.easeOut",
  //       "timing": 500,
  //       "delay": 0,
  //       "anchor": [0, 0.5],
  //       "align": "center",
  //       "alpha":0.2
  //     },

  //      {
  //       "text": [{
  //         "content": "Recording Start"
  //       }],
  //       "sx": 540,
  //       "sy": 1650,
  //       "x": 540,
  //       "y": 1650,
  //       "size": 50,
  //       "weight": "normal",
  //       "color": white,
  //       "tween_type": "Elastic.easeOut",
  //       "timing": 500,
  //       "delay": 0,
  //       "anchor": [0.5, 0.5],
  //       "align": "center",
  //       "alpha":0
  //     },
  //     ],

  //      "sound_list": [{
  //     "sound": ['9']
  //   }],

  //   "functions": [

  //     {
  //       "fn": "SetBGTile('consent_bg')",
  //       "delay": 0
  //     },

  //    {"fn": "initCamOnly()", "delay": 0.5 },

  //   {"fn": "beginFaceDetect()", "delay": 2 },

  //    {
  //       "fn":"setUserName()",
  //       "delay":0
  //     }


  //   ],
  //   "name": "Photo and Video Consent",
  //   "timing": -1,
  //   "index": 4

  // },

  // {
  //   "sprite_animations": [

  //       {
  //       "sprite": "thankyou",
  //       "x": 540,
  //       "y": 600,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 1.7,
  //       "alpha":1,
  //       },

  //       {
  //       "sprite": "proceed_disabled",
  //       "x": 540,
  //       "y": 1500,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 1,
  //       "anchor": [0.5, 0.5],
  //       "scale": 1.5,
  //       "alpha":1,
  //       "onClickFn":"open_url(\'https://www.nlg.om/\')"
  //       },

  //        {
  //       "sprite": "logo",
  //       "x": 400,
  //       "y": 1500,
  //       "loop": false,
  //       "timing": 0,
  //       "delay": 0,
  //       "toTopObj": 2,
  //       "anchor": [0.5, 0.5],
  //       "scale": 1,
  //       "alpha":1,
  //       "onClickFn":"open_url(\'https://www.nlg.om/\')"
  //       },

  //   ],

  //   "text_animations": [

  //       {
  //       "text": [{
  //         "content": "Please tap on the below link to continue your journey on our Web Portal"
  //       }],
  //       "sx": 540,
  //       "sy": 1200,
  //       "x": 540,
  //       "y": 1200,
  //       "size": 60,
  //       "weight": "normal",
  //       "color": white,
  //       "tween_type": "Elastic.easeOut",
  //       "timing": 500,
  //       "delay": 0,
  //       "anchor": [0.5, 0.5],
  //       "align": "center",
  //       "alpha":1
  //     },

  //     {
  //       "text": [{
  //         "content": "Web Portal"
  //       }],
  //       "sx": 600,
  //       "sy": 1500,
  //       "x": 600,
  //       "y": 1500,
  //       "size": 60,
  //       "weight": "normal",
  //       "color": white,
  //       "tween_type": "Elastic.easeOut",
  //       "timing": 500,
  //       "delay": 0,
  //       "anchor": [0.5, 0.5],
  //       "align": "center",
  //       "alpha":1
  //     },



  //   ],


  //   "sound_list": [{
  //     "sound": ['10']
  //   }],

  //   "functions": [

  //     {
  //       "fn": "SetBGTile('blank_bg')",
  //       "delay": 0
  //     },


  //   ],
  //   "name": "Thank You",
  //   "timing": -1,
  //   "index": 5
  // },


];



for (var i = 0; i < screens_eng.length; i++) {
  if (i == 5) {
    if (window.pa_PREMIUM_POLICY_TYPE !== false) {
      if (window.pa_PREMIUM_POLICY_TYPE === 'regular') {
        console.log("Enter : regular");
        screens_eng[i]['sound_list'] = [{
          "sound": ["au_5_1", "$var.window.pa_product", "au_5_2", "$var.window.pa_category", "au_5_3", "$var.window.pa_PREMIUM_POLICY_TYPE", "au_5_4", "$var.currency_window.p_PREMIUM_AMOUNT", "$var.window.pa_FREQUENCY", "au_5_5", "$var.number_window.pa_PAYMENT_TERM", "years", "au_5_6", "$var.number_window.pa_BENEFIT_TERM", "au_5_7", "$var.currency_window.p_SUM_ASSURED", "au_5_8"]
        }];
      } else if (window.pa_PREMIUM_POLICY_TYPE === 'single') {
        console.log("Enter : single");
        screens_eng[i]['sound_list'] = [{
          "sound": ["au_5_1", "$var.window.pa_product", "au_5_2", "$var.window.pa_category", "au_5_3", "$var.window.pa_PREMIUM_POLICY_TYPE", "au_5_4_1", "$var.currency_window.p_PREMIUM_AMOUNT", "au_5_6", "$var.number_window.pa_BENEFIT_TERM", "au_5_7", "$var.currency_window.p_SUM_ASSURED", "au_5_8"]
        }];
      }
    }
  }
  window.stage.screens.push(screens_eng[i]);
}

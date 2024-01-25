/*
 Main KFD Controller
 */

// Environment

//LABEL FOR LIVENESS


var LIVE_RES1, LIVE_RES2, LIVE_RES3;
var LIVE_IMG1, LIVE_IMG2, LIVE_IMG3;

var PROD_ENV = true;
var LOADER_SCREEN = true;

var record_count, text_set, speech_text; 

var w1, w2, w3, w4, w5, s1, a1;
var divId = "outer_div";

// Phaser Initialize
var XRes = 1080,
    YRes = 1920;
var game_canvas_id = "manulife-canvas";
var StartX = -1000,
    count = 0,
    countTemp = 0,
    SfxIndex = 0,
    offset = 0,
    sfx_offset = 0,
    cur_scr = 0,
    currentTween, currentSound, currentTimer, loaderText;


var config = {
    parent: divId,
    dom: {
        createContainer: true
    },
    type: Phaser.CANVAS,
    width: XRes,
    height: YRes,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [start_scene, second_scene],
    audio: {
        disableWebAudio: false
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    // backgroundColor: 0xFFFFFF
};

var game = new Phaser.Game(config);
var version = game.device.os.iOSVersion;
//var version_ipad=game.sys.game.device.os.macOS;
var version_ipad = game.device.os.macOS;
var android_version = game.device.os.android; // Is running on android?
var chrome_version = game.device.os.chromeOS;
var window_version = game.device.os.windows;
var desktop_version = game.device.os.desktop;

var obj_list = new Array();
var obj_but_list = new Array();
var obj_text_list = new Array();
var obj_input_list = new Array();
var text_group, input_group, cust_group, top_group1, top_group2, top_group3, top_group4, top_group5, red_dot_group;
var screen_list = [];
var cur_sfx_list = new Array();
var events_list = [];
var lang = 'eng';
var sysLang = "eng";
var sysFlow = "normal";
var START_SCREEN = 0;
var load_scrn = START_SCREEN;
var livness_det =false;
//SCREEN-8
var position_text_eng = 'Please position your face within the box that appears on your screen';
var position_text_hin = '\nकृपया अपना चेहरा अपनी स्क्रीन पर दिखाई देने वाले बॉक्स में रखें';
var position_text_ben = '\nআপনার স্ক্রিনে প্রদর্শিত বাক্সের মধ্যে আপনার মুখ রাখুন\n';
var position_text_pun = "\nਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਸਕ੍ਰੀਨ 'ਤੇ ਦਿਖਾਈ ਦੇਣ ਵਾਲੇ ਬਾਕਸ ਦੇ ਅੰਦਰ ਆਪਣਾ ਚਿਹਰਾ ਰੱਖੋ";

var come_closer_eng = 'Please come closer to the screen';
var come_closer_hin = '\nकृपया स्क्रीन के करीब आएं';
var come_closer_ben = '\nদয়া করে পর্দার কাছাকাছি আসুন';
var come_closer_pun = '\nਕਿਰਪਾ ਕਰਕੇ ਸਕ੍ਰੀਨ ਦੇ ਨੇੜੇ ਆਓ';

var video_upload_text_eng = 'Please Wait Your Video is uploading';
var video_upload_text_hin = '\nकृपया प्रतीक्षा करें, आपका वीडियो अपलोड हो रहा है\n';
var video_upload_text_ben = '\nআপনার ভিডিও আপলোড হচ্ছে অনুগ্রহ করে অপেক্ষা করুন';
var video_upload_text_pun = '\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ ਤੁਹਾਡੀ ਵੀਡੀਓ ਅੱਪਲੋਡ ਹੋ ਰਹੀ ਹੈ';

var tap_on_pro_eng = 'Tap on proceed button to continue';
var tap_on_pro_hin = '\nकृपया आगे बढ़ें पर क्लिक करें';
var tap_on_pro_ben = '\nঅনুগ্রহ করে, এগিয়ে যান বিকল্পে ট্যাপ করুন';
var tap_on_pro_pun = "\nਜਾਰੀ ਰੱਖਣ ਲਈ ਅੱਗੇ ਵਧੋ ਬਟਨ 'ਤੇ ਟੈਪ ਕਰੋ";


var liveness_close_text_eng = 'You seem to be holding up a photograph. Please check.';
var liveness_close_text_hin = '\nऐसा लगता है कि आप एक तस्वीर पकड़े हुए हैं। कृपया जांचें।\n';
var liveness_close_text_ben = '\nআপনি একটি ছবি ধরে আছে বলে মনে হচ্ছে. চেক করুন.';
var liveness_close_text_pun = '\nਤੁਸੀਂ ਇੱਕ ਫੋਟੋ ਫੜੀ ਹੋਈ ਜਾਪਦੀ ਹੈ। ਕ੍ਰਿਪਾ ਜਾਂਚ ਕਰੋ.';



var translitLangArr = {
    "eng": "english",
    "tam": "tamil",
    "hin": "Hind rr",
    "tel": "telugu",
    "mal": "malayalam",
    "kan": "kannada",
    "ben": "bengali",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "punjabi",
    "ori": "oriya",
    "maw": "marwari",
    "ass": "assamese",
    "miz": "mizo"
};
var fontFamilyLangArr = {
    "eng": "Calibri-Normal",
    "tam": "Tamil",
    "hin": "Calibri-Normal",
    "tel": "Telugu",
    "mal": "malayalam",
    "kan": "kannada",
    "ben": "Calibri-Normal",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "Calibri-Normal",
    "ori": "oriya",
    "maw": "marwari",
    "ass": "assamese",
    "miz": "Calibri",
    "ind": "Glacial Indifference"
};
var numberSystemLangArr = {
    "eng": "common",
    "tam": "common",
    "hin": "Hind",
    "tel": "common",
    "mal": "Hind",
    "kan": "common",
    "ben": "Beng", //"common",
    "mar": "common",
    "guj": "common",
    "pun": "Punj", //"common",
    "ori": "common",
    "maw": "common",
    "ass": "common",
    "miz": "common"
};
var choosenLangArr = {
    "eng": "English",
    "tam": "Tamil",
    "hin": "Hind rr",
    "tel": "Telugu",
    "mal": "Malayalam",
    "kan": "Kannada",
    "ben": "bengali",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "punjabi",
    "oriya": "ori",
    "marwari": "maw",
    "assamese": "ass",
    "mizo": "miz"
};


// Default for camera
var webcamtext;
var camera_record_status = false;

// Default for SMS OTP
var smsOTPText;
var smsOTP_btn_status = false;
var smsOTPCur = 'M@yjo$';
var smsOTPOk = false;
var smsOTPValidTxt;
var smsOTPValid_btn_status = false;

// Default for rest load
var restLoadText;
var restLoadStatus = false;
var restLoadString;

// Default Face Detect
var intervalFaceDetectCam;
var faceDetectStatus = false;
var faceDetectText;
var faceDStr = '',
    faceDNStr = '';
var camera_btn_status = false;

// Input Null Check
var inputNullStr = '';
var inputNullTxt;
var inputNullTxt1;

var edit_btn_status = false;

// Default Light Sensor
var lightcamtext;

// Personal Details - Check Box
var check_status = {
    'name': true,
    'email_id': true,
    'address': true,
    'dob': true,
    'phone_no': true
};

// Repeatedly Captured Photo Image
var cap_photo_img_append = false;
var cap_consent_img_append = false;
var cap_captured_img_append = false;
var cap_screen_img_append = false;

// Screen Name
var cur_screen_name;

// AutoLoad Screen
var auto_load_enable = true;
var auto_load_scrn_no = 3;

// Camera Error
var cameraErrorPageStatus = true;
var cameraErrorPageNo = 7;
var videoLoadPageNo = 20;

// Photo Load
var imgLoadPageNo = 0;
var imgLoadEnable = false;
var imgRequest = 0;
var intervalImgRequest;
var intervalImgCount = 0;

// Disagreement Variables
var disagreement_status = false;
var thankDisPageNo = 0;
var thankNorPageNo = 0;



// Default Font Values
var dbg_color = '#ffffff';
var df_color = '#000000';
var df_size = 27;
var df_weight = 'normal';
var df_align = 'center';
var df_family = 'Glacial Indifference';
var df_boundsAlignH = 'left';
var df_wordWrap = false;
var df_wordWrapWidth = 1000;

// Default Input Field Values
var di_size = 14;
var di_fill = '#3b3a3a';
var di_weight = 'normal';
var di_width = 150;
var di_height = 90;
var di_padding = 0;
var di_placeHolder = 'Enter value ...';
var di_backgroundColor = '#ffffff';
var di_placeHolderColor = '#3b3a3a';
var di_cursorColor = '#3b3a3a';
var di_lineSpacing = 0;

////alert(window.res_params.flow_data.Application_Number);
// var facedetect_1, facedetect_2, facedetect_3, ques_text, y, n;

var connection;
var type, nettype, netrtt, netdown;

window.q1 = "";
window.q2 = "";
window.q3 = "";
window.q4 = "";
window.q5 = "";
window.q6 = "";
window.q7 = "";
window.q8 = "";
window.q9 = "";


// Initially Pre-load All Assets
function loadAssets() {
    (typeof commonAssets === 'function') ? commonAssets(): '';
    (typeof customAssets === 'function') ? customAssets(): '';
}


/*
	Loader Module
 */

function loaderScreenInit() {
    game.cameras.main.backgroundColor = dbg_color;

    loaderText = game.add.text(game.cameras.main.centerX, game.cameras.main.centerY, '', {
        fill: df_color
    });

    //console.log(loaderText);
    loaderText.setOrigin(0.5, 0.5);
    text_group.add(loaderText);

    loadAssets();
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();


    game.load.on('progress', loadStart);

    game.load.on('fileprogress', fileComplete);

    game.load.on('complete', loadComplete);

    game.load.start();
}

/*
Load Rest Assets
 */

function loadRestAssetStart() {
    restLoadStatus = true;
    if (sysLang == "eng") {
        restLoadString = "Loading..."
    } else if (sysLang == "hin") {
        restLoadString = "Loading..."
    }

    restLoadString = transliterateText(restLoadString, translitLangArr[sysLang]);

    restLoadText = addTextToGame(restLoadString, XRes / 2, YRes / 2, fontFamilyLangArr[sysLang], "70px", "#FFFFFF", "center", 1080, 0.5, 0.5, false);
    //console.log(restLoadText);

    restLoadText.alpha = 0;
    game.add.tween(restLoadText).to({
        alpha: 1
    }, 500, Phaser.Easing.Linear.None, true, 0, 250, true);

    obj_list.push(restLoadText);
    obj_text_list.push(restLoadText);
}

function loadRestAssetProgress(lprec) {
    if (lprec === undefined) {
        lprec = 0;
    }
    var restLoadProgressString = restLoadString + " " + lprec + " % ";
    restLoadText.setText(restLoadProgressString);
}

function loadRestAssetComplete() {
    //restLoadStatus = false;
    //restLoadText.setText("");

    if (auto_load_enable) {
        goToPage(auto_load_scrn_no);
    }
}

function resetValues() {
    cap_photo_img_append = false;
    cap_screen_img_append = false;
    cap_consent_img_append = false;
    smsOTPCur = 'M@yjo$';
    smsOTPOk = false;
    cap_captured_img_append = false;
    disagreement_status = false;
    imgLoadEnable = false;
    imgRequest = 0;
    intervalImgCount = 0;
}

function checkIOS()
{
 var agent = window.navigator.userAgent;
 start = agent.indexOf('OS');
 if( ( agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1
) && start > -1 ){
 return agent.substr( start + 3, 4 ).replace('_','.');
 }
 return 0;
}



function loadStart() {
    $('#' + game_canvas_id).css('pointer-events', 'none');
    loaderText.text = "Loading...";

    //console.log("LOAD START");

    if (cur_scr == 2) {
        loadRestAssetStart();
    }
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    loaderText.text = "Loading... " + progress + "%";
    if (cur_scr == 2) {
        loadRestAssetProgress(progress);
    }
}

function loadComplete() {
    $('#' + game_canvas_id).css('pointer-events', 'auto');
    /*loaderText.visible = false;

    if (cur_scr == 0) {
    	resetValues();
    }
    if (cur_scr == 2) {
    	loadRestAssetComplete();
    }

    if ((load_scrn == 0) || (load_scrn == 2) && ((cur_scr == 0) || (cur_scr == 1))) {
    	goScreen(load_scrn);
    }*/
   
    goScreen(3);

}

function scene_preloader(scene_type, scene) {


    console.log('SCENE_PRELOADER :' + scene_type);
    // Groups
    game = scene;
    text_group = game.add.group();
    input_group = game.add.group();
    top_group1 = game.add.group();
    top_group2 = game.add.group();
    top_group3 = game.add.group();
    top_group4 = game.add.group();
    top_group5 = game.add.group();
    red_dot_group = game.add.group();
    //game.children.bringToTop(text_group);
    //addPlugins();

    // game.load.audio('backmusic', ['./assets/audio/product/eng/scenes/backmusic.mp3']);

    if (scene_type == 'START') {
        game.load.plugin('rexinputtextplugin', './assets/js/common/plugins/rex/rexinputtextplugin.min.js', true);
        game.load.plugin('rexcanvasplugin', './assets/js/common/plugins/rex/rexcanvasplugin.min.js', true);
        game.load.plugin('rexfilechooserplugin', './assets/js/common/plugins/rex/rexfilechooserplugin.min.js', true);
        game.load.scenePlugin('rexuiplugin', './assets/js/common/plugins/rex/rexuiplugin.min.js', 'rexUI', 'rexUI');
    }
    game.load.scenePlugin('rexuiplugin', './assets/js/common/plugins/rex/rexuiplugin.min.js', 'rexUI', 'rexUI');

    game.load.plugin('rexbbcodetextplugin', './assets/js/common/plugins/rex/rexbbcodetextplugin.min.js', true);

    if (scene_type == 'START')
        loadAssets();



} 


var text = game.add.text(200, 800, 'Hello, Phaser!', { fontSize: 24, fill: '#ffffff' });

// Function to zoom in
function zoomIn() {
    text.setScale(text.scaleX + 0.1, text.scaleY + 0.1);
}

function zoomOut() {
    text.setScale(text.scaleX - 0.1, text.scaleY - 0.1);
}


function pagecomplete(){
    zoomIn(); // Call this to zoom in
    zoomOut();

}

// Example of calling the zoom functions
// You can call these functions in response to user input or events






function scene_creator(SCREEN_NUMBER, scene) {

    game = scene;

    game.game.canvas.id = game_canvas_id;
    game.cameras.main.backgroundColor = dbg_color;

    game.events.on('pause', onGamePause);
    game.events.on('resume', onGameResume);
    this.game.scale.refresh();

    goScreen(SCREEN_NUMBER);
}

function scene_updater() {
    setDepth(top_group1, 1);
    setDepth(top_group2, 2);
    setDepth(top_group3, 4);
    setDepth(top_group4, 4);
    setDepth(top_group5, 5);
    setDepth(text_group, 6);

    updateVideoFrame();
}


function onGamePause() {
    if (currentTween != null) currentTween.pause();
    if (currentSound != null) currentSound.pause();
    if (currentTimer != null) currentTimer.pause();
}

function onGameResume() {
    if (currentTween != null) currentTween.resume();
    if (currentSound != null) currentSound.resume();
    if (currentTimer != null) currentTimer.resume();
}

// Disable canvas inputs
function canvasInputDisable() {
    //  //console.log("Fn : canvasInputDisable ");
    $('#' + game_canvas_id).css('pointer-events', 'none');
}

// Enable canvas inputs
function canvasInputEnable() {
    //  //console.log("Fn : canvasInputEnable ");
    $('#' + game_canvas_id).css('pointer-events', 'auto');
}


// Text styling
function SetupText(obj, txt) {
    var font_family = (obj.fontFamily) ? obj.fontFamily : fontFamilyLangArr[sysLang];
    var font_size = obj.size || df_size;
    var align = obj.align || df_align;
    var weight = obj.weight || df_weight;
    var color = obj.color || df_color;
    var boundsAlign = obj.boundsAlignH || df_boundsAlignH;
    var wordWrap = obj.wordWrap || df_wordWrap;
    var wordWrapWidth = obj.wordWrapWidth || df_wordWrapWidth;
    var padding = obj.padding || di_padding;
    var lineSpacing = obj.lineSpacing || di_lineSpacing;

    var strokeThickness = 0;
    if (weight == 'bold')
        strokeThickness = 1;

    var font_obj = game.add.text(obj.sx, obj.sy, txt, {
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        align: align,
        stroke: color,
        strokeThickness: strokeThickness,
        padding: padding,
        lineSpacing: lineSpacing,
        // padding: {
        //       left :15,
        //       right :15,
        //       top :15,
        //       bottom :15,
        // },

        wordWrap: {
            width: wordWrapWidth,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        },
    });

    //console.log("FONT OBJ = ", font_obj);

    // if(sysLang == 'hin')
    // {

    //   padding: 15;

    // }

    // if(sysLang == 'hin')
    // {

    //   lineSpacing: 0;

    // }
    // if (obj.lineSpacing) {
    //     font_obj.lineSpacing = obj.lineSpacing;
    // }
    // if (obj.padding) {
    //     font_obj.padding.set(obj.padding[0], obj.padding[1]);
    // }



    // font_obj.setTextBounds(0, 0, XRes,YRes);
    //font_obj.setTextBounds(0,0,game.width, game.height);
    font_obj.setOrigin(0.5, 0.5);
    font_obj.inputEnabled = false;

    if (obj.alpha == 0) {
        font_obj.alpha = 0;
    }

    text_group.add(font_obj);

    return font_obj;
} 


function pagecomplete() { 

    

        var demoText = "welcome [zoom]ZoomableText[/zoom] contain here"
        var demo = demoText.split(' ');  

      

        // var word = demo.join('+')
        
        

        console.log("dhhehhee", demo)
        // var raju = demo.join(",") 

        // console.log("text dmeo " , raju )

        // for (let i = 0; i < raju.length; i++) {
        //     var word = raju[i];
        //     console.log("hellllo kir" ,word);
        // }

        // console.log("hariharna raju bai " ,demo);
        addTextToGameH(demo,540,570,fontFamilyLangArr[sysLang], "45px", "#00000", "left",950, 0.5, 0, false)
    

    // Enable input for zooming
    // this.input.on('pointerdown', handlePointerDown, this);
}

// function loopHo(){  
//     var demoText = "welcome [zoom]Zoomable Text[/zoom] contain here"
//     var demo = demoText.split(' '); 


    
//     for (let i = 0; i < demo.length; i++) { 

//         var word = demo[i];
//         console.log("hello kum" ,word)
        
//         }

// }

function update() {
    // Update logic if needed
}

function handlePointerDown(pointer) {
    const wordIndex = paragraph.getWordIndexAt(pointer.x, pointer.y);

    if (wordIndex !== -1) {
        const wordBounds = paragraph.getWordBounds(wordIndex);
        const word = paragraph.text.substr(wordBounds.start, wordBounds.end - wordBounds.start);

        // Apply zoom effect to the clicked word
        zoomWord(word);
    }
}

function zoomWord(word) {
    const scaleFactor = 1.5; // Increase font size by 1.5x

    paragraph.setText(paragraph.text.replace(word, `<span style="font-size:${scaleFactor}em">${word}</span>`));
}


function addTextToGame(txt, xPos, yPos, font_family, font_size, color, align, wordWrapWidth, anchorX, anchorY, inputEnabled) {

    var font_obj = game.add.text(xPos, yPos, txt, {
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        align: align,
        stroke: color,
        strokeThickness: 0,
        wordWrap: {
            width: wordWrapWidth,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        },
    });

    //console.log("ADDING FONT OBJ = ", font_obj);

    font_obj.setOrigin(anchorX, anchorY);
    font_obj.inputEnabled = false;

    text_group.add(font_obj);
    obj_list.push(font_obj);
    obj_text_list.push(font_obj);

    return font_obj;
} 


function addTextToGameH(txt, xPos, yPos, font_family, font_size, color, align,wordWrapWidth,anchorX, anchorY, inputEnabled) {

    var font_obj = game.add.rexBBCodeText(xPos, yPos, txt,{
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        align: align, 
        stroke: color,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },
        
    });

    // game.add.rexBBCodeText(70, 1530, '\nਅਸੀਂ ਤੁਹਾਨੂੰ ਇਹ ਵੀ ਬੇਨਤੀ ਕਰਾਂਗੇ ਕਿ ਤੁਹਾਡੀ PNB MetLife ਪਾਲਿਸੀ ਨੂੰ ਸਮਰਪਣ ਕਰਨ ਜਾਂ ਪਾਲਿਸੀ ਬੋਨਸ ਜਾਰੀ ਕਰਨ ਲਈ KYC ਦਸਤਾਵੇਜ਼ ਜਮ੍ਹਾ ਕਰਨ ਲਈ IRDAI ਜਾਂ ਸਰਕਾਰੀ ਅਧਿਕਾਰੀਆਂ ਵਜੋਂ ਦਾਅਵਾ ਕਰਨ ਵਾਲੇ ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਦੀ ਕਾਲ ਦਾ ਜਵਾਬ ਨਾ ਦਿਓ।\n', {
    //     fontFamily: fontFamilyLangArr[sysLang],
    //     fontSize: '38px',
    //     color: dBLUE,
    //     align: 'left',
    //     stroke: dBLUE,
    //     strokeThickness: 0,
    //     wrap: {
    //         mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
    //         width: 950
    //     },

    //     lineSpacing: 8,
    // });

    //console.log("ADDING FONT OBJ = ", font_obj);

    font_obj.setOrigin(anchorX, anchorY);
    font_obj.inputEnabled = false;

    text_group.add(font_obj);
    obj_list.push(font_obj);
    obj_text_list.push(font_obj);

    return font_obj; 

} 





// Input Field styling // Modified for Phaser 3
function SetupInputField(obj, txt) {
    var font_family = (obj.fontFamily) ? obj.fontFamily : fontFamilyLangArr[sysLang];
    var font_size = obj.size + "px";
    var font = font_size + "px " + font_family;
    var fill = obj.fill || di_fill;
    var fontWeight = obj.fontWeight || di_weight;
    var width = obj.width || di_width;
    var height = obj.height || di_height;
    var padding = obj.padding || di_padding;
    var placeHolder = obj.placeHolder || di_placeHolder;
    var backgroundColor = obj.backgroundColor || di_backgroundColor;
    var placeHolderColor = obj.placeHolderColor || di_placeHolderColor;
    var cursorColor = obj.cursorColor || di_cursorColor;
    var lineSpacing = obj.lineSpacing || di_lineSpacing;

    var input_obj = addInputField(obj.key, obj.x, obj.y, width, height, obj.type, txt, placeHolder, font_size, backgroundColor, font_family, fill, obj.align, obj.maxLength);

    if (txt) {
        input_obj.setText(txt);
    } else {
        input_obj.setText('');
    }
    if (obj.key) {
        input_obj.key = obj.key;
    }
    input_obj.setOrigin(0.5, 0.5);


    if (obj.onBlur != '') {
        input_obj.on('blur',
            function(inputText, e) {

                var nextInput = getInputObject(obj.onBlur);

                if (nextInput != null) {
                    nextInput.setFocus();
                }

            });
    }

    if (obj.alpha == 0) {
        input_obj.alpha = 0;
    }

    input_group.add(input_obj);
    return input_obj;
}

function addInputField(ip_id, x, y, width, height, ip_type, ip_text, ip_placeholder, ip_fontsize, ip_bgcolor, ip_fontfamily, ip_fontcolor, ip_align, ip_maxLength) {


    var inputText = game.add.rexInputText(x, y, width, height, {
        id: ip_id,
        type: ip_type, //text | textarea | password | number | color
        text: ip_text,
        placeholder: ip_placeholder,
        fontSize: ip_fontsize,
        backgroundColor: ip_bgcolor,
        borderColor: 'transparent',
        fontFamily: ip_fontfamily,
        color: ip_fontcolor,
        align: ip_align
    });

    //console.log(inputText);

    obj_list.push(inputText);
    obj_input_list.push(inputText);

    inputText.on('textchange',
        function(inputText, e) {


            if (inputText.text.length >= ip_maxLength) {
                inputText.setText(inputText.text.substring(0, ip_maxLength));
                inputText.setBlur();
            }

        });

    return inputText;

}

function getInputObject(key) {
    for (var i = 0; i < input_group.children.entries.length; i++) {
        if (input_group.children.entries[i].key == key) {
            return input_group.children.entries[i];
        }
    }

    return null;
}

function getTextObject(text) {
    for (var i = 0; i < text_group.children.entries.length; i++) {
        if (text_group.children.entries[i].text == text) {
            return text_group.children.entries[i];
        }
    }

    return null;
}

function getSpriteObject(key) {

    //console.log(obj_list);
    for (var i = 0; i < obj_list.length; i++) {
        if (obj_list[i].type == "Sprite") {
            if (obj_list[i].texture.key == key) {
                return obj_list[i];
            }
        }
    }

    return null;
}



function LoadAnimation(obj, params) {
    var anim_name = "default";
    var sprite_name = params.sprite;
    var x = params.x;
    var y = params.y;
    if (!obj) {
        obj = game.add.sprite(0, 0, sprite_name);
        obj.setOrigin(0.5);

        ////console.log('OBJ ',obj);

        /* game.anims.create({
        	key: 'default',
        	frames: [ { key: sprite_name} ]
        }); */
        //var anim = obj.animations.add(anim_name);

    }
    obj.x = x;
    obj.y = y;
    obj.inputEnabled = true;

    if (params.toTopObj) {
        groupToTop(obj, params.toTopObj);
    }

    return obj;
}


function AddEvent(ev) {
    events_list[events_list.length] = ev;
}


function PlaySpriteAnim(anim) {
    //console.log('SPRITE = ', anim);
    var timer = game.time.addEvent({
        delay: 1000 * anim.delay, // ms
        callback: function() {

            var temp = LoadAnimation(temp, anim); //.x, anim.y, anim.sprite);

            temp.id = anim.id;
            temp.fn_type = anim.fn_type;
            temp.fn_param = anim.fn_param;

            if (anim.fn_type)
                temp.setInteractive({
                    useHandCursor: true
                });

            //temp.play('default', anim.timing, anim.loop);
            if (anim.scale)
                temp.scale = anim.scale;

            if (anim.alpha == 0)
                temp.alpha = 0;

            if (anim.anchor != null) {
                temp.setOrigin(anim.anchor[0], anim.anchor[1]);
            } else {
                temp.setOrigin(0.5);
            }

            var params = anim.params;


            if (params) {
                var type = anim.anim_type;
                var x1 = anim.x,
                    y1 = anim.y,
                    x2 = params[0],
                    y2 = params[1];

                //     //console.log(type," ",x1," ",y1," ",x2," ",y2);

                // Move Type
                temp.setOrigin(0.5, 0.5);
                if (anim.anim_type == "move") {
                    game.add.tween(temp).to({
                        x: x2,
                        y: y2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.delay);
                    if (anim.disappear) {
                        AddEvent(game.time.events.add(Phaser.Timer.SECOND * anim.disappear, function() {
                            game.add.tween(temp.scale).to({
                                x: 0,
                                y: 0
                            }, 200, anim.tween_type, true, Phaser.Timer.SECOND * anim.disappear);
                        }, this));
                    }
                } else if (anim.anim_type == "ms0xy") // Scale & Move to a specific position & scale value from 0 - x.
                {
                    var scale_params = anim.scale_params;
                    var scale_x = scale_params[0] ? scale_params[0] : 1;
                    var scale_y = scale_params[1] ? scale_params[1] : 1;

                    temp.scale = 0;
                    game.add.tween(temp.scale).to({
                        x: scale_x,
                        y: scale_y
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true, Phaser.Timer.SECOND * anim.delay);

                    // Move event
                    AddEvent(game.time.events.add(Phaser.Timer.SECOND, function() {

                        game.add.tween(temp).to({
                            x: x2,
                            y: y2
                        }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true, Phaser.Timer.SECOND * anim.delay);

                    }, this));

                } else if (anim.anim_type == "scale") {
                    //   //console.log("In Scale");
                    temp.scale = x2;
                    game.add.tween(temp.scale).to({
                        x: y2,
                        y: y2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);
                } else if (anim.anim_type == "alpha") {
                    temp.alpha = x2;
                    game.add.tween(temp).to({
                        alpha: y2
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true);

                } else if (anim.anim_type == "spin") {
                    var tween = game.add.tween(temp).to({
                        angle: x2
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true);
                    if (anim.loop) {
                        tween.loop(true);
                        tween.yoyo(true, Phaser.Timer.SECOND * y2);
                    }
                } else if (anim.anim_type == "zoominout") {
                    //     //console.log("In Zoom In Out");
                    temp.scale = 1;

                    game.add.tween(temp.scale).to({
                        x: 1.2,
                        y: 1.2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);

                    game.add.tween(temp.scale).to({
                        x: 1,
                        y: 1
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);
                }
            }
            if (anim.fade) {
                //     //console.log("Inside Fade "+anim.fade);
                game.add.tween(temp).to({
                    alpha: 0
                }, 145, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.fade);
            } else if (anim.disappear)
                game.add.tween(temp.scale).to({
                    x: 0,
                    y: 0
                }, 200, anim.tween_type, true, Phaser.Timer.SECOND * anim.disappear);
            else if (anim.fade)
                game.add.tween(temp).to({
                    alpha: 0
                }, 145, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.fade);


            if (anim.onClickFn) {
                temp.inputEnabled = true;

                temp.setInteractive({
                    useHandCursor: true
                });


                temp.on('pointerdown', function(pointer) {
                    eval(anim.onClickFn);
                });

                //temp.events.onInputDown.add(function () { eval(anim.onClickFn) }, this);
            }

            obj_list.push(temp);
            schedule_tween(temp);

        },
        callbackScope: this,
        loop: false
    });

    AddEvent(timer);


}

function checkObjList(name) {
    for (var i = 0; i < obj_list.length; i++) {
        if (obj_list[i].key == name) {
            //console.log('Found ', name);
            obj_list[i].destroy();
        }

    }
}

function schedule_tween(obj) {
    if (!window.stage.screens[cur_scr].tweens) return;
    for (var i = 0; i < window.stage.screens[cur_scr].tweens.length; i++) {
        var tween = window.stage.screens[cur_scr].tweens[i];
        if (tween.obj.startsWith(obj.key)) {
            game.add.tween(obj).to({
                x: tween.x,
                y: tween.y
            }, tween.timing, tween.tween_type, true, Phaser.Timer.SECOND * tween.delay);
            break;
        }
    }
}

function PlayTextAnim(anim) {
    //console.log('TEXT = ', anim);

    var text_toDisplay = "";

    var orgStr = anim.text[0].content;
    text_toDisplay = orgStr;

    var tween_type = anim.tween_type.toLowerCase();
    var txt = SetupText(anim, text_toDisplay);

    //console.log('INDEX = ', game.children);

    txt.id = anim.id;

    if (anim.anchor != null) {
        if (typeof anim.anchor[1] !== undefined) {
            txt.setOrigin(anim.anchor[0], anim.anchor[1]);
        } else {
            txt.setOrigin(anim.anchor[0], 0);
        }

    }

    //Has to Be Modified for Phaser 3
    if (tween_type.startsWith("typewrite")) {
        txt.text = "";
        AddEvent(game.time.events.add(Phaser.Timer.SECOND * anim.delay, function() {
            txt = typeWriter(txt, text_toDisplay, anim.timing);
            obj_list.push(txt);
            obj_text_list.push(txt);
        }, this));
    }
    //Has to Be Modified for Phaser 3
    else if (tween_type.startsWith("fadein")) {
        txt.alpha = 0;
        //     //console.log("Inside Fade "+anim.fade);

        game.add.tween(txt).to({
            alpha: 1
        }, anim.timing, "Linear", true, Phaser.Timer.SECOND * anim.delay);

        obj_list.push(txt);
        obj_text_list.push(txt);

        if (anim.disappear)
            game.add.tween(txt).to({
                alpha: 0
            }, anim.timing * 2, "Linear", true, Phaser.Timer.SECOND * anim.disappear);

        obj_list.push(txt);
        obj_text_list.push(txt);


    } else {

        var timer = game.time.addEvent({
            delay: 1000 * anim.delay,
            callback: function() {


                //game.add.tween(txt).to({x:anim.x, y: anim.y}, anim.timing, anim.tween_type, true);

                var tween = game.tweens.add({
                    targets: txt,
                    ease: 'Elastic', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: anim.timing,
                    repeat: 0, // -1: infinity
                    yoyo: false,
                });

                //console.log(tween);


                txt.fn_type = anim.fn_type;
                txt.fn_param = anim.fn_param;

                if (anim.onClickFn) {
                    txt.inputEnabled = true;
                    txt.setInteractive({
                        useHandCursor: true
                    });


                    txt.on('pointerdown', function(pointer) {
                        eval(anim.onClickFn);
                    });
                }
                if (anim.fn_type) {
                    txt.inputEnabled = true;
                    txt.input.useHandCursor = true;
                }

                if (anim.disappear)
                    game.add.tween(txt.scale).to({
                        x: 0,
                        y: 0
                    }, 0.1, anim.tween_type, true, Phaser.Timer.SECOND * anim.disappear);


                obj_list.push(txt);
                obj_text_list.push(txt);
            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);
    }



    return txt;
}


function PlayInputAnim(anim) {
    var text_toDisplay = "";
    for (var i = 0; i < anim.text.length; i++) {
        if (anim.text[i].content.startsWith("$var.")) {
            var str1 = anim.text[i].content.slice(5);

            if (str1.startsWith("number_")) {
                var orgStr = eval(str1.slice(7));
                if (anim.text[i].enableNumericType) {
                    orgStr = formatNumber(orgStr);
                }

                if (anim.text[i].defaultDecimalPart) {
                    orgStr = validateDecimalPart(orgStr);
                }

                var str_in_words = numberInWords(orgStr, numberSystemLangArr[sysLang]);
                sfx_offset += str_in_words.length * 0.5;

                text_toDisplay += orgStr;
            } else if (str1.startsWith("alphanumeric_")) {
                var orgStr = eval(str1.slice(13));
                var str_in_words = strInLetter(orgStr);

                sfx_offset += str_in_words.length * 0.5;
                text_toDisplay += orgStr;
            } else {
                var orgStr = eval(str1);
                if (anim.text[i].transliterate) {
                    if (['hindi', 'tamil', 'telugu'].indexOf(anim.text[i].transliterate) >= 0) {
                        var text_arr = orgStr.split(" ");
                        var transliterate = anim.text[i].transliterate;

                        if (text_arr.length > 0) {
                            var transliterate_result = "";
                            for (var j = 0; j < text_arr.length; j++) {
                                if (isNaN(text_arr[j])) {
                                    transliterate_result += transliterateText(text_arr[j], transliterate);
                                } else {
                                    transliterate_result += text_arr[j];
                                }

                                transliterate_result += " ";
                            }
                            text_toDisplay += transliterate_result;
                        }
                    }
                } else {
                    text_toDisplay += orgStr;
                }
            }
        } else {
            var orgStr = anim.text[i].content;
            if (anim.text[i].transliterate) {
                if (['hindi', 'tamil', 'telugu'].indexOf(anim.text[i].transliterate) >= 0) {
                    var text_arr = orgStr.split(" ");
                    var transliterate = anim.text[i].transliterate;

                    if (text_arr.length > 0) {
                        var transliterate_result = "";
                        for (var j = 0; j < text_arr.length; j++) {
                            if (isNaN(text_arr[j])) {
                                transliterate_result += transliterateText(text_arr[j], transliterate);
                            } else {
                                transliterate_result += text_arr[j];
                            }

                            transliterate_result += " ";
                        }
                        text_toDisplay += transliterate_result;
                    }
                }
            } else {
                text_toDisplay += orgStr;
            }
        }
    }

    var tween_type = anim.tween_type.toLowerCase();
    var inputField = SetupInputField(anim, text_toDisplay);
    inputField.id = anim.id;

    if (anim.anchor != null) {
        if (typeof anim.anchor[1] !== undefined) {
            inputField.setOrigin(anim.anchor[0], anim.anchor[1]);
        } else {
            inputField.setOrigin(anim.anchor[0], 0);
        }

    }

    return inputField;
}



function OnStopCB(v) {

    return function() {
        if (cur_sfx_list[v + 1]) {
            console.log('OnStopCB:true');
            currentSound = cur_sfx_list[v + 1].play();
        } else if (cur_sfx_list[v + 1] == null) {
            console.log('OnStopCB:false');

         //ENGLISH
            if (sysLang == 'eng' && cur_scr == 3) {
                getSpriteObject('proceed_button_eng').alpha = 1;

            } else if ((sysLang == 'eng') && (cur_scr == 14)) {
               console.log('cur_scr:true');
                     getSpriteObject('ok_btn').alpha = 1;

                getSpriteObject('cancel_btn').alpha = 1;
                getSpriteObject('close').alpha = 1;

            }
            else if ((sysLang == 'hin' ) && (cur_scr == 14)) {
                // setTimeout(function() {
                    console.log('cur_scr:true');
                     getSpriteObject('ok_btn_hin').alpha = 1;

                getSpriteObject('cancel_btn_hin').alpha = 1;
                getSpriteObject('close').alpha = 1;

            }
            else if ((sysLang == 'ben' ) && (cur_scr == 14)) {
                // setTimeout(function() {
                    console.log('cur_scr:true');
                     getSpriteObject('ok_btn_ben').alpha = 1;

                getSpriteObject('cancel_btn_ben').alpha = 1;
                getSpriteObject('close').alpha = 1;

            }
            else if ((sysLang == 'pun' ) && (cur_scr == 14)) {
                // setTimeout(function() {
                    console.log('cur_scr:true');
                     getSpriteObject('ok_btn_pun').alpha = 1;

                getSpriteObject('cancel_btn_pun').alpha = 1;
                getSpriteObject('close').alpha = 1;

            }

            else if (sysLang == 'eng') {
               /*if(cur_scr != 14)
                {
                getSpriteObject('agree_eng').alpha = 1;

                getSpriteObject('disagree_eng').alpha = 1;
                 }*/
             }

//Hindi
            if (sysLang == 'hin' && cur_scr == 3) {
                getSpriteObject('proceed_hindi').alpha = 1;


            }

             else if (sysLang == 'hin') {
                /* if(cur_scr != 14)
                {
                getSpriteObject('agree_hin').alpha = 1;
                getSpriteObject('disagree_hin').alpha = 1;
                }*/
            }

//BENGALI
     if (sysLang == 'ben' && cur_scr == 3) {
                getSpriteObject('proceed_ben_wel').alpha = 1;
}
else if ((sysLang == 'ben') && (cur_scr == 13)) {
                setTimeout(function() {
                    console.log('cur_scr:true');
                    getSpriteObject('agree_ben').alpha = 1;

                    getSpriteObject('disagree_ben').alpha = 1;

                }, 5000);

            }
             else if (sysLang == 'ben') {
               /*if(cur_scr != 14)
                {
                getSpriteObject('agree_ben').alpha = 1;

                getSpriteObject('disagree_ben').alpha = 1;
                 }*/
             }

//PUNJABI
            if (sysLang == 'pun' && cur_scr == 3) 
            {
                getSpriteObject('proceed_pun_wel').alpha = 1;
            }
            else if ((sysLang == 'pun') && (cur_scr == 13)) 
            {
                setTimeout(function() {
                    console.log('cur_scr:true');
                    getSpriteObject('agree_pun').alpha = 1;

                    getSpriteObject('disagree_pun').alpha = 1;

                }, 5000);

            }
            else if (sysLang == 'pun') 
            {
               /*if(cur_scr != 14)
                {
                    getSpriteObject('agree_pun').alpha = 1;

                    getSpriteObject('disagree_pun').alpha = 1;
                }*/
             }

         }
     };
}


function onSoundStop() {
    alert("onSoundStop");
    console.log("Fn : onSoundStop");




    // canvasInputEnable();

}


function onSoundPlay() {
    console.log("Fn : onSoundPlay");

    // canvasInputDisable();
}


function PlaySound(anim) {
    cur_sfx_list.length = 0;
    for (var i = 0; i < anim.sound.length; i++) {
        if (anim.sound[i].startsWith("$var.")) {
            var str1 = anim.sound[i].slice(5);

            if (str1.startsWith("number_")) {
                var str2 = str1.slice(7);
                 console.log("str2"+str2);
                var res = numberInWords(eval(str2), numberSystemLangArr[sysLang]);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
                }
            } else if (str1.startsWith("currency_")) {
                console.log("Str Sound : currency_");
                var str2 = str1.slice(9);
                 console.log("str2"+str2);
                var res = currencyInWords(eval(str2), numberSystemLangArr[sysLang]);

                console.log("resdddd"+res);
                for (var j = 0; j < res.length; j++) {
                     console.log("res.length"+res.length);
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
                }
            } else if (str1.startsWith("alphanumeric_")) {
                //console.log("Str Sound : alphanumeric_");
                var str2 = str1.slice(13);
                var strValue = (str2.startsWith("window.")) ? eval(str2) : str2;
                var res = strInLetter(strValue);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
                }
            } else if (str1.startsWith("dateStr_")) {
                var str2 = str1.slice(8);
                var res = strInDate(eval(str2));
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.add.audio(res[j])): '';
                }
            } else if (str1.startsWith("dateMonthStr_")) {
                var str2 = str1.slice(13);
                var res = strInDateMonth(eval(str2));
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.add.audio(res[j])): '';
                }
            } else {
                    try {
                        var audioName = eval(str1);
                  console.log("audioName"+audioName);
                cur_sfx_list.push(game.add.audio(audioName));
                } catch (e) {
                    console.log(e);
                }

            }
        } else {
             try {
              console.log("anim.sound[i]"+anim.sound[i]);
            cur_sfx_list.push(game.sound.add(anim.sound[i]));
               } catch (e) {
                    console.log(e);
                }
        }
    }

    console.log("cur_sfx_list.length ",cur_sfx_list.length);
    if (cur_sfx_list.length == 0) return;
    var v = 0;

    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
    console.log("cur_sfx_list for : ",i);
        v = i;

        if (cur_scr > 0) {
              console.log("cur_sfx_list for : new",cur_sfx_list[i].key);
            cur_sfx_list[i].on("play", onSoundPlay);
           cur_sfx_list[i].on("complete", OnStopCB(i));

        }
       // cur_sfx_list[i].on("stop", OnStopCB(i));
    }
    if (cur_sfx_list.length > 0) {

        console.log("CURRENT AUDIO = ", cur_sfx_list.length);
        currentSound = cur_sfx_list[0].play();

    }
}

//For Audio Number Split - Policy Screen

function find_string(data) {
    if (typeof data === "undefined" || data == null) {
        return 0;
    }
    var result = data.replace(/[^0-9]/g, '');
    return result;
}


//Rider Details PlaySound

function riderSound(sysLang) {
    if (sysLang == 'eng') {
        console.log("sysLang" + sysLang);
        cur_sfx_list.push(game.sound.add('detail_ri'));
        for (var i = 0; i < Object.keys(window.params.rider_details).length; i++) {
            cur_sfx_list.push(game.sound.add('au_ri_01'));

            if (rider_details[i].rider_name == 'PNB MetLife Serious Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Death Benefit Rider Plus') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));

            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Disability Benefit Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Critical Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            }
            cur_sfx_list.push(game.sound.add('au_ri_02'));
            var res = currencyInWords(eval(rider_details[i].rider_sum_assured), numberSystemLangArr[sysLang]);

            console.log("CURRENCY IN WORDS " + res);
            for (var j = 0; j < res.length; j++) {
                console.log("res.length" + res.length);
                (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
            }

        }
    }   else if (sysLang == 'hin') {
        console.log("sysLang" + sysLang);
        cur_sfx_list.push(game.sound.add('detail_ri_hin'));
        for (var i = 0; i < Object.keys(window.params.rider_details).length; i++) {
            cur_sfx_list.push(game.sound.add('au_ri_hin_01'));

            if (rider_details[i].rider_name == 'PNB MetLife Serious Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Death Benefit Rider Plus') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));

            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Disability Benefit Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Critical Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            }
            cur_sfx_list.push(game.sound.add('au_ri_hin_02'));
            var res = currencyInWords(eval(rider_details[i].rider_sum_assured), numberSystemLangArr[sysLang]);

            console.log("CURRENCY IN WORDS " + res);
            for (var j = 0; j < res.length; j++) {
                console.log("res.length" + res.length);
                (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
            }


        }
    }   else if (sysLang == 'ben') {
        console.log("sysLang" + sysLang);
        cur_sfx_list.push(game.sound.add('au_ben_ri_01'));
        for (var i = 0; i < Object.keys(window.params.rider_details).length; i++) {
            cur_sfx_list.push(game.sound.add('au_ben_ri_02'));

            if (rider_details[i].rider_name == 'PNB MetLife Serious Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Death Benefit Rider Plus') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));

            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Disability Benefit Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Critical Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            }
            cur_sfx_list.push(game.sound.add('au_ben_ri_03'));
            var res = currencyInWords(eval(rider_details[i].rider_sum_assured), numberSystemLangArr[sysLang]);

            console.log("CURRENCY IN WORDS " + res);
            for (var j = 0; j < res.length; j++) {
                console.log("res.length" + res.length);
                (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
            }


        }
    }
    else if (sysLang == 'pun') {
        console.log("sysLang" + sysLang);
        cur_sfx_list.push(game.sound.add('au_ri_pun_01'));
        for (var i = 0; i < Object.keys(window.params.rider_details).length; i++) {
            cur_sfx_list.push(game.sound.add('au_ri_pun_02'));

            if (rider_details[i].rider_name == 'PNB MetLife Serious Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Death Benefit Rider Plus') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));

            } else if (rider_details[i].rider_name == 'PNB MetLife Accidental Disability Benefit Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            } else if (rider_details[i].rider_name == 'PNB MetLife Critical Illness Rider') {

                cur_sfx_list.push(game.sound.add(rider_details[i].rider_name));



            }
            cur_sfx_list.push(game.sound.add('au_ri_pun_03'));
            var res = currencyInWords(eval(rider_details[i].rider_sum_assured), numberSystemLangArr[sysLang]);

            console.log("CURRENCY IN WORDS " + res);
            for (var j = 0; j < res.length; j++) {
                console.log("res.length" + res.length);
                (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])): '';
            }


        }
    }
    console.log("cur_sfx_list.length ", cur_sfx_list.length);
    if (cur_sfx_list.length == 0) return;


    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
        console.log("cur_sfx_list for : ", i);


        if (cur_scr > 0) {
            console.log("cur_sfx_list for : new", cur_sfx_list[i].key);
            cur_sfx_list[i].on("play", onSoundPlay);
            cur_sfx_list[i].on("complete", OnStopCB(i));

        }

    }
    if (cur_sfx_list.length > 0) {

        console.log("CURRENT AUDIO = ", cur_sfx_list.length);
        currentSound = cur_sfx_list[0].play();

    }


}


// If need to play a specific screen directly
function actionOnClick(scr_no) {
    CleanUp();
    StartPage(scr_no);
    ShowScreen();
}

function actionOnClickDelay(scr_no, delay) {
    checkObjList('Button_Agree');
    game.add.sprite(280, 1810, 'Agree_New_selected');
    canvasInputDisable();
    if (cur_scr === 0) {
        cur_sfx_list[0].play();
    }
    setTimeout(function() {
        canvasInputEnable();
        goToPage(scr_no);
    }, 1000 * delay);
}

function goToPage(scr_no) {

    //console.log('go to page');
    CleanUp();
    StartPage(scr_no);
    //console.log('Cur Scr = ', cur_scr);
    ShowScreen();
}


function nullify(obj) {
    if (obj != null)
        obj.destroy();
}



function goToPageBack(scr_no) {
    CleanUp();
    StartPage(scr_no);
    ShowScreen();
    screenBackBtn = true;
}

function ShowScreen() {
    //console.log('Show Screen Begun');

    sfx_offset = 0;
    game.sound.stopAll();
    if (window.stage.screens.count <= 0)
        return;
    if (window.stage.screens[cur_scr].condition != null) {
        var cond = eval(window.stage.screens[cur_scr].condition);
        if (eval(window.stage.screens[cur_scr].condition) == false) {
            TransitScreen();
            return;
        }
    }

    // Videos
    if (window.stage.screens[cur_scr].video != null)
        for (var i = 0; i < window.stage.screens[cur_scr].video.length; i++)
            PlayVideo(window.stage.screens[cur_scr].video[i]);

    // Buttons
    if (window.stage.screens[cur_scr].buttons != null)
        for (var i = 0; i < window.stage.screens[cur_scr].buttons.length; i++)
            ShowButton(window.stage.screens[cur_scr].buttons[i]);

    // Sprite Animations
    if (window.stage.screens[cur_scr].sprite_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].sprite_animations.length; i++)
            PlaySpriteAnim(window.stage.screens[cur_scr].sprite_animations[i]);

    // Text Animations
    if (window.stage.screens[cur_scr].text_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].text_animations.length; i++)
            PlayTextAnim(window.stage.screens[cur_scr].text_animations[i]);

    // Input Field Animations
    if (window.stage.screens[cur_scr].input_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].input_animations.length; i++)
            PlayInputAnim(window.stage.screens[cur_scr].input_animations[i]);

    // Sound
    if (window.stage.screens[cur_scr].sound_list != null)
        for (var i = 0; i < window.stage.screens[cur_scr].sound_list.length; i++)
            PlaySound(window.stage.screens[cur_scr].sound_list[i]);

    // Functions
    if (window.stage.screens[cur_scr].functions != null)
        for (var i = 0; i < window.stage.screens[cur_scr].functions.length; i++)
            call_fn(window.stage.screens[cur_scr].functions[i]);

    // Screen Names
    if (window.stage.screens[cur_scr].name != null)
        cur_screen_name = window.stage.screens[cur_scr].name;

    if (window.stage.screens[cur_scr].timing >= 0)
        game.time.events.add(Phaser.Timer.SECOND * (window.stage.screens[cur_scr].timing + sfx_offset), TransitScreen, this);

    //console.log('Show Screen Complete');
}

function CleanUp() {
    //console.log('Clean Up Started ', text_group);

    stopCameraFeed();

    for (var i = 0; i < obj_but_list.length; i++) {
        obj_but_list[i].x = -game.width * 2;
        obj_but_list[i] = null;
    }
    for (var i = 0; i < obj_text_list.length; i++) {
        obj_text_list[i].x = -game.width * 2;
        obj_text_list[i].destroy();
        obj_text_list[i] = null;
    }
    for (var i = 0; i < obj_input_list.length; i++) {
        obj_input_list[i].x = -game.width * 2;
        obj_input_list[i] = null;
    }
    for (var i = 0; i < obj_list.length; i++) {
        obj_list[i].x = -game.width * 2;
        obj_list[i].destroy();
        obj_list[i] = null;
    }
    for (var i = 0; i < text_group.children.size; i++) {
        //console.log('Text Group');
        text_group.children.entries[i].destroy();

    }
    for (var i = 0; i < events_list.length; i++) {
        game.time.removeAllEvents();
    }

    obj_but_list = obj_but_list.filter(function(el) {
        return el != null;
    });

    obj_text_list = obj_text_list.filter(function(el) {
        return el != null;
    });

    obj_input_list = obj_input_list.filter(function(el) {
        return el != null;
    });

    obj_list = obj_list.filter(function(el) {
        return el != null;
    });

    cur_sfx_list.length = 0;

    screenBackBtn = false;

    //console.log('Clean Up Done');
}

function TransitScreen() {
    CleanUp();
    cur_scr = ++cur_scr % window.stage.screens.length;
    ShowScreen();
}

function ReloadScreen() {
    CleanUp();
    ShowScreen();
}

function prevScreen() {
    CleanUp();
    cur_scr = cur_scr - 1;
    if (cur_scr < 0) {
        cur_scr = 0;
        return;
    }
    ShowScreen();
}

function goScreen(scr_no) {
    CleanUp();

    if (scr_no > 0) {
        if ((scr_no + 1) <= window.stage.screens.length) {
            cur_scr = scr_no;
            ShowScreen();
        } else {
            cur_scr = 0;
            ShowScreen();
        }
    } else {
        cur_scr = 0;
        ShowScreen();
    }
}

function nextScreen() {
    CleanUp();
    cur_scr = ++cur_scr % window.stage.screens.length;
    ShowScreen();
}



/*
	Show Full Screen
 */

function goFull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen(false);
    }
}


// Custom group to Top
function groupToTop(obj, i) {
    ////console.log('GROUP TO TOP = ',obj,',DEPTH = ',i);
    if (i == 1) {
        top_group1.add(obj);
        //game.children.bringToTop(top_group1);

        setDepth(top_group1, 1);

    } else if (i == 2) {
        top_group2.add(obj);
        //game.children.bringToTop(top_group2);

        setDepth(top_group2, 2);

    } else if (i == 3) {
        top_group3.add(obj);
        //game.children.bringToTop(top_group3);

        setDepth(top_group3, 3);

    } else if (i == 4) {
        top_group4.add(obj);
        //game.children.bringToTop(top_group4);

        setDepth(top_group4, 4);

    } else if (i == 5) {
        top_group5.add(obj);
        //game.children.bringToTop(top_group5);

        setDepth(top_group5, 5);

    } else if (i == 6) {
        text_group.add(obj);
        //game.children.bringToTop(top_group5);

        setDepth(text_group, 6);

    }
}

function setDepth(group, depth) {
    ////console.log("GROUP = ",group);

    var list = group.children.entries;

    for (var i = 0; i < list.length; i++) {
        list[i].setDepth(depth);
    }
}

function buttonVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_but_list.length; i++) {
            obj_but_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_but_list.length; i++) {
            obj_but_list[i].alpha = 0;
        }
    }

}

function textVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_text_list.length; i++) {
            obj_text_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_text_list.length; i++) {
            obj_text_list[i].alpha = 0;
        }
    }

}

function inputFieldVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_input_list.length; i++) {
            obj_input_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_input_list.length; i++) {
            obj_input_list[i].alpha = 0;
        }
    }

}


function transliterateText(str, transLang) {
    var transLangStatus = true;
    var transStrResult = '';
    if (transLang == 'hindi') {
        pramukhIME.addKeyboard(PramukhIndic, 'hindi');
    } else if (transLang == 'tamil') {
        pramukhIME.addKeyboard(PramukhIndic, 'tamil');
    } else if (transLang == 'telugu') {
        pramukhIME.addKeyboard(PramukhIndic, 'telugu');
    } else if (transLang == 'malayalam') {
        pramukhIME.addKeyboard(PramukhIndic, 'malayalam');
    } else if (transLang == 'kannada') {
        pramukhIME.addKeyboard(PramukhIndic, 'kannada');
    } else if (transLang == 'bengali') {
        pramukhIME.addKeyboard(PramukhIndic, 'bengali');
    } else if (transLang == 'marathi') {
        pramukhIME.addKeyboard(PramukhIndic, 'marathi');
    } else if (transLang == 'gujarati') {
        pramukhIME.addKeyboard(PramukhIndic, 'gujarati');
    } else if (transLang == 'punjabi') {
        pramukhIME.addKeyboard(PramukhIndic, 'punjabi');
    }
    // else if(transLang=='marwari')
    // {
    //     pramukhIME.addKeyboard(PramukhIndic, 'marwari');
    // }
    else {
        transLangStatus = false;
    }


    if (transLangStatus) {
        str = (str) ? str.toLowerCase() : '';
        transStrResult = pramukhIME.convert(str);
    } else {
        transStrResult = str;
    }

    //   //console.log("transStrResult - fn -: ",transStrResult," == ",transLang);

    return transStrResult;
}

function init() {
    setProductParams();
}

function call_fn(func) {

    var timer = game.time.addEvent({
        delay: 1000 * func.delay, // ms
        callback: function() {
            eval(func.fn)
        },
        callbackScope: this,
        loop: false
    });

    AddEvent(timer);

    console.log("FUNCTION TIMER ", timer);

}


function SetBGColor(color) {
    game.stage.backgroundColor = color;
}

function SetBGTile(bg_sprite) {
    var bg_tile = game.add.tileSprite(XRes / 2, YRes / 2, XRes, YRes, bg_sprite);
    obj_list.push(bg_tile);
    //bg_tile.setOrigin(0.5,0.5);
}


function StartPage(num) {
    cur_scr = num;
}
String.prototype.startsWith = function(str) {
    return this.indexOf(str) == 0;
};

function find(str, sub) {
    if (str.indexOf(sub) == -1) {
        return false;
    } else {
        return true;
    }
}

/*
 Debug Modules
 */

function render() {
    if (!PROD_ENV) {
        // Input debug info
        game.debug.inputInfo(32, 32);
        //game.debug.spriteInputInfo(sprite, 32, 130);
        game.debug.pointer(game.input.activePointer);

    }

}


// function open_url_tab(url_link) {
//     if ((url_link !== undefined) && (url_link !== '')) {
//         window.open(url_link, '_blank');
//     } else {
//         return false;
//     }
// }

//REDIRECT A PAGE

// function open_url_tab(url_link){
//     var ua = navigator.userAgent;
// var isMobile =ua.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
//     // if((version) || (version_ipad) || (android_version))
//     // {
//     if((ua.match(/iPhone|iPad|iPod/i)) && (ua.search("Safari") >= 0))
//     {
//  if ((url_link !== undefined) && (url_link !== '')) {
//     // console.log(version);
//     // console.log(version_ipad);
//     // console.log(android_version);
// console.log(isMobile);

//      window.open(url_link, '_blank');
//     }
//     else if((url_link !== undefined) && (url_link !== '') && (android_version)) {
// // //alert('other');
//     window.open(url_link, '_blank');
//      }
// }
//  }

// function open_url_tab(url_link){

//     if((version) || (version_ipad))
//     {
//  if ((url_link !== undefined) && (url_link !== '')) {
//     console.log(version);
//     console.log(version_ipad);
//      window.open(url_link, '_self');
//     } else if((url_link !== undefined) && (url_link !== '') && (android_version))
//     {
//         console.log(android_version);
//        window.open(url_link, '_blank');
//      }
// }
// }


function open_url_tab(url_link) {
    if ((url_link !== undefined) && (url_link !== '')) {
        console.log(url_link);
        window.open(url_link, '_blank');
    } else {
        return false;
    }

}




function open_url() {
    if (sysLang == 'eng') {
        if (pos == 1 && pos_type == "screen") {

            // getSpriteObject('continue_eng').alpha = 1;
            // window.open('http://10.168.50.176/Dashboard.aspx', '_self');
            setTimeout(function() {
                // //alert("enter");
                window.location.href = pos_url;
            }, 5000);

        } else {

            // getSpriteObject('continue_eng').alpha = 0;
            // getSpriteObject('continue_hin').alpha = 0;

        }
    }
    if (sysLang == 'hin') {
        if (pos == 1 && pos_type == "screen") {
            // getSpriteObject('continue_hin').alpha = 1;
            setTimeout(function() {
                // //alert("enter");
                window.location.href = pos_url;
            }, 5000);

        } else {

            // getSpriteObject('continue_eng').alpha = 0;
            // getSpriteObject('continue_hin').alpha = 0;

        }
    }
} 


function init_onscreen_permission_messages()
{
    if(sysLang=='eng')
 {
   cam_permission_error='Please Open your Browser Settings and Allow Access to Camera/Microphone';
   location_permission_error='Please Open your Browser Settings and Allow Access to Location';   
 }


}  

function canvasInputDisable()
{
  game.input.enabled=false;
  console.log("fn call : canvasInputDisable()");
}

function canvasInputEnable()
{
  game.input.enabled=true;
  console.log("fn call : canvasInputEnable()");
}


function gameCanvasDisable()
{
  game.input.enabled=false;
  console.log("fn call : gameCanvasDisable()");
}

function gameCanvasEnable()
{
  game.input.enabled=true;
  console.log("fn call : gameCanvasEnable()");
}



// function getPermission()
// {
//   gameCanvasDisable();
//    //cur_sfx_list[0].pause();

//   navigator.getUserMedia({
//     video: {
//             minWidth: pri_video_width,
//             minHeight: pri_video_height,
//       //maxAspectRatio:1,
//     },
//     audio: true
//   },camera_access_success.bind(this), camera_access_failed.bind(this));

// } 

function getLocationPermission() {

	// clear_all_permission_errors();
	connectionType();
    if (navigator.geolocation) {
	
        navigator.geolocation.getCurrentPosition(function(position){
        	console.log("position");
			
        	latitude_value =  position.coords.latitude;
        	longitude_value =  position.coords.longitude;
			location_permission_granted = true;

        	show_location_permission_success_indicator();
        	call_GEO_LOCATION_API(latitude_value,longitude_value);
		
        },function(error){

        	console.log(error);
        	location_permission_granted = false;
        	show_location_permission_error();
        });

       
    }
    else {

    }
 }


function access_check()
{
    
   
   
    var accessError = "Please Open your Browser Settings and\nAllow Access to Camera/Microphone and Location";
    
    if ((getSpriteObject('tick_1').alpha == 1))
    {
        
        getTextObject(accessError).alpha=0;

        goToPage(2)
        // captureImage('proceed','Welcome Screen',4);
    }
    else{
        getTextObject(accessError).alpha=1;
        console.log('please allow your browser access');
    }
        }


        function clear_all_permission_errors()
{
	hide_camera_permission_error();
	hide_location_permission_error();
}
function show_camera_permission_error()
{
	getTextObject(cam_permission_error).alpha = 1;
}

function hide_camera_permission_error()
{
	getTextObject(cam_permission_error).alpha = 0;
}

function show_location_permission_error()
{
	getTextObject(location_permission_error).alpha = 1;
}

function hide_location_permission_error()
{
	getTextObject(location_permission_error).alpha = 0;
}

 // function show_camera_permission_success_indicator()
// {
// 	getSpriteObject('tick1').alpha = 1;
// }

// function show_location_permission_success_indicator()
// {
// 	getSpriteObject('tick2').alpha = 1;
// }



function validate_permissions()
{
	if(cam_permission_granted==true )
		return true;
	else if(cam_permission_granted==false)
	{
		show_camera_permission_error();
		return false;
	}
	
}

function permissions_proceed()
{
	clear_all_permission_errors();
	var status = validate_permissions();
	
	if(status)

		goToPage(2);
}


// function open_url_hin()
// {
// if(sysLang == 'hin'){
//     if(pos == 1 && pos_type == "screen")
//     {
//         //alert('true');
//         getSpriteObject('left-arrow-green').alpha = 1;
//     window.open('http://10.168.50.176/Dashboard.aspx', '_self');
// }
// }
// else
// {
//     //alert('false');
//  getSpriteObject('left-arrow-green').alpha = 0;
// }
// }

/*
	Lang Related functions
 */

var FACE_MODELS_LOADED = false;
var lang_assets_fpath, lang_flow_fpath;

async function checkIfFaceModelsLoaded() {
    console.log("CHECK IF FACE MODELS LOADED = ", FACE_MODELS_LOADED);
    if (FACE_MODELS_LOADED == true) {
        console.log("All Scripts Loaded");

        // $.getScript(lang_assets_fpath, function() {
        //     $.getScript(lang_flow_fpath, function() {
                /*$.when(langAssets()).then(function() {
                	game.load.start();
                });*/
                console.log('Starting Scene 2');
                // game.scene.start("second_scene");
        //     });
        // });
    } else {
        setTimeout(checkIfFaceModelsLoaded, 1000);
    }
}

async function loadLangFlow(setLang, setFlow, setScreen) {


    init();

    sysLang = (setLang) ? setLang : sysLang;
    sysFlow = (setFlow) ? setFlow : sysFlow;

    load_scrn = (setScreen) ? setScreen : 2;

    // if(sysLang=='eng' && setScreen==2)
    // {
    // 	// addTextToGame('Loading...',540,1300,fontFamilyLangArr[sysLang],"70px","#0060a0","center","bold",0,0,0.5,false);
    // 	getTextObject('Please touch the screen to start!').alpha=0;
    // 	 getTextObject('Loading...').alpha=1;

    // }
    // else if(sysLang=='hin' && setScreen==2)
    // {
    // 	 getTextObject('Please touch the screen to start!').alpha=0;
    // 	getTextObject('Loading...').alpha=1;
    // }

    lang_assets_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_assets_' + sysLang + '_' + sysFlow + '.js';

    lang_flow_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_' + sysLang + '_' + sysFlow + '.js';

    //scripts_loader.js
    const scripts_loader_fpath =
        './assets/js/common/anoor/scripts_loader.js';


    $.getScript(scripts_loader_fpath, function() {
        loadScripts();
        checkIfFaceModelsLoaded();
    });

}

/*
Product Related Custom functions
 */
// let fdata;
// function setProductParams() {

//     if (window.flow_slug === "abhi_pivc") {

//         window.p_POLICY_NAME = "Active Health";
// 		window.p_POLICY_NUMBER = "ABHI1234567";
//         window.p_CUSTOMER_NAME = "Ramkumar G";
//         window.p_MOBILE_NUMBER = '944414428';
//         window.p_EMAIL = 'ramkumar.g@gmail.com';
//         window.p_DOB = '06-05-1991';
//         window.p_GENDER = 'Male';
//         window.p_OCCUPATION = 'Salaried';
// 		window.p_ANNUAL_INCOME = 'Rs. 6,00,000';
// 		window.p_CITY_RESIDENCE='Bangalore';
// 		window.p_HEIGHT= '180';
// 		window.p_WEIGHT='80';

//     }

// }

function setProductParams() {
    console.log("inside product_video");
    if (window.flow_slug == "product_video") {
        console.log("inside product_video after if");
        let pms = window.params;
        //let pms=window.params;


        window.rider_details = pms.rider_details;
        //  window.rider_name=window.rider_details.rider_name;
        //  window.params.proposal_no
        window.proposal_no = pms.proposal_no;
        window.product_name = pms.product_name;
        window.policy_insured_name = pms.policy_insured;
        window.policy_type = pms.policy_type;
        window.name = pms.name;
        window.occupation = pms.occupation;
        window.dob = pms.dob;
        window.nominee_name = pms.nominee;
        window.education = pms.education;
        window.address = pms.address;
        window.bi_value = pms.bi;
        window.mobile = pms.mobile;

        window.pincode = pms.pincode;
        window.gender = pms.gender;
        window.declare_income = pms.declare_income;

        if (pms.email == "" || pms.email == "null" || pms.email == "NULL") {
            window.email = "Not Provided";
        } else {
            window.email = (pms.email).toLowerCase();
        }
        window.changed_mobile = "";
        window.changed_email = "";

        window.sum_assured = pms.sum_assured;
        window.premium_amount = pms.premium_amount;
        window.payment_frequency = pms.payment_frequency;
        window.policy_term = pms.policy_term;
        window.premium_payment_term = pms.premium_payment_term;

        //Screen-12
        window.solution_id = pms.solution_id;
        window.combo_name = pms.combo_name;

        window.combo_product_name = pms.combo_product_name;

        window.combo_policy_type = pms.combo_policy_type;
        window.combo_sum_assured = pms.combo_sum_assured;
        window.combo_income_benefit = pms.combo_income_benefit;
        window.combo_maturity_benefit = pms.combo_maturity_benefit;
        window.combo_payment_frequency = pms.combo_payment_frequency;
        window.combo_policy_term = pms.combo_policy_term;
        window.combo_premium_payment_term = pms.combo_premium_payment_term;
        window.combo_premium_amount = pms.combo_premium_amount;
        window.income_benefit = pms.income_benefit;
        window.maturity_benefit = pms.maturity_benefit;

        window.combo = pms.combo;

        window.pos = pms.pos;
        window.pos_type = pms.pos_type;

        window.currency = 'rupees';

        window.pa_premium_payment_term = find_string(window.premium_payment_term);
        window.ca_combo_premium_payment_term = find_string(window.combo_premium_payment_term);
        window.pa_policy_term = find_string(window.policy_term);
        window.ca_combo_policy_term = find_string(window.combo_policy_term);
    }
}


function getGeoLocation() {

    //canvasInputDisable();

    if (navigator.geolocation) {

        var lat = navigator.geolocation.getCurrentPosition(function(pos) {

            console.log("Location Finished true : geolocation ");

           

            latitude_value  = pos.coords.latitude;
            longitude_value =  pos.coords.longitude;

            window.geo_latitude = latitude_value;
            window.geo_longitude = longitude_value;

window.geo_location = latitude_value+","+longitude_value
            // getSpriteObject('tick_2').alpha=1;

           
            location_address();
            
            // location_active=true;
            // canvasInputEnable();
            
           
        },

        function(error) {
     
          // location_active=false;
          // canvasInputEnable();
          // goToPage(ERROR_SHOW_PAGE);

          console.log("Location Finished false : geolocation ");
      

 });
   
    }

}


async function response_send(){
    const data_log = {

        lat: window.geo_latitude,
lon: window.geo_longitude,
    geo: window.geo_location,
    address: window.address,
    ip:window.ipAddress,
  country: window.country,
    city: window.city,
  postal: window.postal,
  region: window.region,
  

    
       }

       const apiUrl = 'http://localhost:3005/sendEmail'; ;

       const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data_log), 
      };

     await fetch(apiUrl , requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
       
        console.log('Response from the server hari:', responseData);

        window.responseData = responseData
      })
      .catch(error => {
        console.log('Fetch error:', error);
      });

       console.log("data format",data_log) ;
       

}


async function ip_api(){


  var IP_response = await  fetch('https://ipinfo.io/json?token=c23cfb5fd64c93')
    .then(response => response.json())
    .then(data => {
        // Extract and display the IP address
        var ipAddress = data.ip || 'N/A';
        var city = data.city;
      var postal = data.postal;
        var region = data.region;
        var country = data.country;
        window.city = city;
        window.postal = postal;
        window.region = region;
        window.country = country;
     window.ipAddress = ipAddress;
     console.log("response", IP_response)
     console.log("ip_data", data)
     response_send();
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
        // document.getElementById('ipAddress').innerText = 'N/A';
    });

}
// 13.125874, 80.118952

async function location_address(){
   var api_response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${window.geo_latitude}&lon=${window.geo_longitude}&zoom=${18}`)
    .then(response => response.json())
    .then(data => {
        var address_identify = data.display_name || 'Address not found';
      console.log("response",data);
      console.log("address",address_identify)
      window.address = address_identify;
      ip_api();
      
    })
    .catch(error => {
        console.error('Error:', error);
      
    });

   
} 




function toTitleCase(txt) {
    return txt.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function formatDate(dateString) {
    var p = dateString.split(/\D/g);
    return [p[2], p[1], p[0]].join("-")
}


//var x1;
var latitude_value, longitude_value;

function getLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

        console.log(latitude_value, longitude_value);
    } else {

    }
}

function showPosition(position) {
    latitude_value = position.coords.latitude + "";
    longitude_value = position.coords.longitude + "";
    //return position.coords.latitude+","+position.coords.longitude;
    ////console.log("POSITION = ",position.coords.latitude,position.coords.longitude);
    //console.log("POSITION = ", latitude_value, longitude_value);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:

            console.log("User denied the request for Geolocation.");
            // alert("You have blocked access to your location. You can reset your permissions in the Site Settings and refresh your browser.");
            break;
        case error.POSITION_UNAVAILABLE:

            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:

            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:

            console.log("An unknown error occurred.");
            break;
    }
}

function productInit() {
    getGeoLocation();
}




function open_video(file_name) {

    window.open(file_name, '_blank');
}

function open_screenshot(file_name) {

    window.open(file_name, '_blank');
}

function getScreenImgDataURL() {
    var phaserCanvas = document.getElementById(game_canvas_id);
    return (phaserCanvas.toDataURL('image/jpeg', 0.95)) ? phaserCanvas.toDataURL('image/jpeg', 0.95) : null;
}



/*
Video Record Functions
 */
function onVideoRecord(skip_btn, nxt_scrn, hide_txt, xVRtxt = 220, yVRtxt = 470, vLoadScrn = videoLoadPageNo) {

    //console.log("Video Record : onVideoRecord");
    if (!faceDetectStatus) {
        //console.log("Face detect status is false");
        return;
    }

    if (camera_record_status) {
        return;
    }
    camera_record_status = true;

    faceDetectDisable();
    EmptyOverlay();

    for (var i = 0; i < obj_but_list.length; i++) {
        var data = obj_but_list[i];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (key == 'key' && value == skip_btn) {
                    data.visible = false;
                }
            }
        }
    }

    // Spcl code
    /* if(hide_txt)
    {
    	//console.log("but_test ",obj_text_list[hide_txt]);
    	obj_text_list[hide_txt].setText("");
    } */

    var rTime = 1;
    if (sysLang == "eng") {
        var record_text = "Recording.... ";
        var sec_text = "seconds";
    } else if (sysLang == "ind") {
        var record_text = "Rekaman... ";
        var sec_text = "detik";
    }

    //record_text = transliterateText(record_text,translitLangArr[sysLang]);
    // sec_text = transliterateText(sec_text,translitLangArr[sysLang]);


    webcamtext = game.add.text(game.world.centerX, yVRtxt, record_text, {
        font: fontFamilyLangArr[sysLang],
        fontSize: "40px",
        fontWeight: "bold",
        fill: "#FFFFFF",
        align: "center"
    });

    text_group.add(webcamtext);

    webcamtext.setOrigin(0.5, 0);
    webcamtext.alpha = 0;
    game.add.tween(webcamtext).to({
        alpha: 1
    }, 500, Phaser.Easing.Linear.None, true, 0, 250, true);

    var timesRun = 0;
    var intervalVideoCam = setInterval(function() {
        timesRun += 1;
        if (timesRun === 20) {
            clearInterval(intervalVideoCam);
            if (sysLang == "eng") {
                webcamtext.setText("Recording Complete");
            } else if (sysLang == "ind") {
                webcamtext.setText("Rekaman Selesai");
            }

            OnRecordComplete();
        } else {
            webcamtext.setText(record_text + " " + rTime + " " + sec_text);
            rTime += 1;
        }
    }, 1000);


    obj_list.push(webcamtext);
    obj_text_list.push(webcamtext);


    //videoRecordAutoStop(nxt_scrn,vLoadScrn);

    //console.log("videoRecordAutoStop : called");

}




// Custom Text Type
function typeCustomText(txt_anim_str) {
    let anim = JSON.parse(txt_anim_str);
    PlayTextAnim(anim);
}



// Reload Page
function reloadPage() {
    window.location.reload(true);
}

// Camera Error
function cameraAccessError() {
    let cameraStatus = camAccessStatus();
    //alert(cameraStatus);
    if (!cameraStatus) {
        if (cameraErrorPageStatus) {
            setTimeout(function() {
                CleanUp();
                StartPage(cameraErrorPageNo);
                ShowScreen();
            }, 0);

        }
    }
}




// var latitude_value, longitude_value;

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//         //console.log(latitude_value, longitude_value);
//     } else {

//     }
// }

function showPosition(position) {
    latitude_value = position.coords.latitude + "";
    longitude_value = position.coords.longitude + "";

    //console.log("POSITION = ", latitude_value, longitude_value);
}


function imgLoaderEnable() {
    //console.log("fn : imgLoaderEnable");
    imgLoadEnable = true;
    imgRequest++;
}

function imgLoaderDisable() {
    //console.log("fn : imgLoaderDisable");
    imgLoadEnable = false;
    imgRequest--;
}



function click(x, y) {
    var ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });

    var el = document.elementFromPoint(x, y);

    el.dispatchEvent(ev);
}

function soundInit() {
    //console.log("fn : soundInit");
}

function audioReplay() {
    //console.log("fn : audioReplay");
    if (cur_sfx_list.length > 0) {
        currentSound = cur_sfx_list[0].play();
    }
}




//network type


function connectionType() {
    //console.log('CONNECTION TYPE');

    try

    {
        connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        //console.log(connection);

        type = connection.effectiveType;
        nettype = connection.effectiveType;
        netrtt = connection.rtt;
        netdown = connection.downlink;

        connection.addEventListener('change', updateConnectionStatus);
    } catch (e) {
        //console.log('Exception in connection type ', e);
    }
}


function faceDetection(cur_scr, sysLang, isFaceDetected, type) {
    if (cur_scr == 0) {

        if (sysLang == 'eng') {
            if (isFaceDetected == true) {
                console.log(sysLang + "True");
                isFaceDetected = true;
                getSpriteObject('tick1').alpha = 1;
                getTextObject(position_text_eng).alpha = 0;
                getTextObject(come_closer_eng).alpha = 0;
                 getTextObject(liveness_close_text_eng).alpha=0;

            } else {
                console.log(sysLang + "false");
                isFaceDetected = false;
                getSpriteObject('tick1').alpha = 0;
                getTextObject(come_closer_eng).alpha = 0;
                 getTextObject(liveness_close_text_eng).alpha=0;

                if (type == 'NO_FACE') {

                    getTextObject(come_closer_eng).alpha = 0;
                    getSpriteObject('tick1').alpha = 0;
                     getTextObject(liveness_close_text_eng).alpha=0;
                       getTextObject(position_text_eng).alpha = 0; //1;

                } else if (type == 'LOW_FACE') {
                    getTextObject(position_text_eng).alpha = 0;
                    getTextObject(come_closer_eng).alpha = 1;
                    getSpriteObject('tick1').alpha = 1;
                    getTextObject(liveness_close_text_eng).alpha=0;
                }
            }
        }
        if (sysLang == 'hin') {
            if (isFaceDetected == true) {
                console.log(sysLang + "True");
                isFaceDetected = true;
                getSpriteObject('tick1').alpha = 1;
                getTextObject(position_text_hin).alpha = 0;
                getTextObject(come_closer_hin).alpha = 0;
                 getTextObject(liveness_close_text_hin).alpha=0;
            } else {
                console.log(sysLang + "false");
                isFaceDetected = false;
                getSpriteObject('tick1').alpha = 0;
                getTextObject(come_closer_hin).alpha = 0;
                 getTextObject(liveness_close_text_hin).alpha=0;

                if (type == 'NO_FACE') {

                    getTextObject(come_closer_hin).alpha = 0;
                    getSpriteObject('tick1').alpha = 0;
                     getTextObject(liveness_close_text_hin).alpha=0;
                      getTextObject(position_text_hin).alpha = 1;
                } else if (type == 'LOW_FACE') {
                    getTextObject(position_text_hin).alpha = 0;
                       getTextObject(come_closer_hin).alpha = 1;
                    getSpriteObject('tick1').alpha = 1;
                    getTextObject(liveness_close_text_hin).alpha=0;
                }
            }
        }
        if (sysLang == 'ben') {
            if (isFaceDetected == true) {
                console.log(sysLang + "True");
                isFaceDetected = true;
                getSpriteObject('tick1').alpha = 1;
                getTextObject(position_text_ben).alpha = 0;
                getTextObject(come_closer_ben).alpha = 0;
                 getTextObject(liveness_close_text_ben).alpha=0;

            } else {
                console.log(sysLang + "false");
                isFaceDetected = false;
                getSpriteObject('tick1').alpha = 0;
                getTextObject(come_closer_ben).alpha = 0;
                 getTextObject(liveness_close_text_ben).alpha=0;

                if (type == 'NO_FACE') {

                    getTextObject(come_closer_ben).alpha = 0;
                    getSpriteObject('tick1').alpha = 0;
                     getTextObject(liveness_close_text_ben).alpha=0;
                       getTextObject(position_text_ben).alpha = 1;

                } else if (type == 'LOW_FACE') {
                    getTextObject(position_text_ben).alpha = 0;
                    getTextObject(come_closer_ben).alpha = 1;
                    getSpriteObject('tick1').alpha = 1;
                    getTextObject(liveness_close_text_ben).alpha=0;
                }
            }
        }
        if (sysLang == 'pun') {
            if (isFaceDetected == true) {
                console.log(sysLang + "True");
                isFaceDetected = true;
                getSpriteObject('tick1').alpha = 1;
                getTextObject(position_text_pun).alpha = 0;
                getTextObject(come_closer_pun).alpha = 0;
                 getTextObject(liveness_close_text_pun).alpha=0;

            } else {
                console.log(sysLang + "false");
                isFaceDetected = false;
                getSpriteObject('tick1').alpha = 0;
                getTextObject(come_closer_pun).alpha = 0;
                 getTextObject(liveness_close_text_pun).alpha=0;

                if (type == 'NO_FACE') {

                    getTextObject(come_closer_pun).alpha = 0;
                    getSpriteObject('tick1').alpha = 0;
                     getTextObject(liveness_close_text_pun).alpha=0;
                       getTextObject(position_text_pun).alpha = 1;

                } else if (type == 'LOW_FACE') {
                    getTextObject(position_text_pun).alpha = 0;
                    getTextObject(come_closer_pun).alpha = 1;
                    getSpriteObject('tick1').alpha = 1;
                    getTextObject(liveness_close_text_pun).alpha=0;
                }
            }
        }
    }
}

// function faceDetection(cur_scr,sysLang,isFaceDetected)
// {
// if(cur_scr==8)
// {
//   if(sysLang=='eng')
//   {
//     if(isFaceDetected==true || isFaceDetected_ios==true)
//     {
//         console.log(sysLang+"True");
//         isFaceDetected=true;
//         isFaceDetected_ios==true;
//         getSpriteObject('tick1').alpha = 1;
//      getTextObject('Please position your face within the box that appears on your screen').alpha=0;

//     }
//   else
//   {
//     console.log(sysLang+"false");
//      isFaceDetected=false;
//      isFaceDetected_ios==false;
//      getSpriteObject('tick1').alpha = 0;
//      getTextObject('Please position your face within the box that appears on your screen').alpha=1;
//   }
// }
// if(sysLang=='hin')
// {
//     if(isFaceDetected==true || isFaceDetected_ios==true)
//     {
//          console.log(sysLang+"True");
//         isFaceDetected=true;
//         isFaceDetected_ios==true;
//         getSpriteObject('tick1').alpha = 1;
//      getTextObject('\nकृपया अपना चेहरा अपनी स्क्रीन पर दिखाई देने वाले बॉक्स में रखें').alpha=0;

//     }
//     else
//     {
//          console.log(sysLang+"false");
//          isFaceDetected=false;
//          isFaceDetected_ios==false;
//          getSpriteObject('tick1').alpha = 0;
//      getTextObject('\nकृपया अपना चेहरा अपनी स्क्रीन पर दिखाई देने वाले बॉक्स में रखें').alpha=0;
//     }
// }
// }
// }
// var count = 0;

// async function showButtonApi(sysLang) {
//     count = 1;
//     if (android_version || window_version || (parseFloat(checkIOS()) > 14.5)) {
//         // if (consent_img_flag == 0) {
//         //     consent_img_flag = 1;
//         //     await photo_consent_image();

//         // }

//         console.log("android_version");
//         if (sysLang == 'eng' && cur_scr == 8) {
//             getTextObject(come_closer_eng).alpha = 0;
//              // getTextObject(liveness_close_text_eng).alpha=0;
//             getSpriteObject('record_eng').alpha = 1;

//         } else if (sysLang == 'hin' && cur_scr == 8) {
//             getTextObject(come_closer_hin).alpha = 0;
//             if (count == 1) {

//                 getSpriteObject('recordbutton_hin').alpha = 1;
//             }
//         }
//         if (sysLang == 'eng' && consent_img_flag == 0) {
//             consent_img_flag = 1;
//             await photo_consent_image();

//         } else if (sysLang == 'hin' && consent_img_flag == 0) {
//             consent_img_flag = 1;
//             await photo_consent_image();

//         }
//     } else if (version || version_ipad) {
//         //IOS
//         console.log("ios");

//         if (consent_img_flag == 0) {
//             consent_img_flag = 1;
//             await photo_consent_image();

//         }
//         console.log("Detected");
//         inputfile('block');



//         if (sysLang == 'eng') {
//             getTextObject(come_closer_eng).alpha = 0;

//             var el = document.getElementById('video_id');

//             var domElement = game.add.dom(425, 1770, el); //y=880
//             var dom_style = domElement.node.style;


//             domElement.setDepth(5);
//             domElement.setOrigin(0, 0.5);
//             var x = document.getElementById('file-input');
//         } else {
//             //hindi
//             getTextObject(come_closer_hin).alpha = 0;
//             var el = document.getElementById('video_id_ios');

//             var domElement = game.add.dom(425, 1770, el); //y=880
//             var dom_style = domElement.node.style;


//             domElement.setDepth(5);
//             domElement.setOrigin(0, 0.5);
//             var x = document.getElementById('file-input_ios');
//         }

//         x.addEventListener('change', function() {

//             console.log("Name = ", x.files[0].name);

//             console.log("File = ", x.files[0]);
//             inputfile('none');
//             if (sysLang == 'eng') {
//                 getTextObject(video_upload_text_eng).alpha = 1;
//                 getTextObject(tap_on_pro_eng).alpha = 0;

//             } else {
//                 //hindi
//                 getTextObject(video_upload_text_hin).alpha = 1;
//                 getTextObject(tap_on_pro_hin).alpha = 0;
//             }
//             var file = x.files[0];

//             var fd = new FormData();

//             fd.append('proposal', window.proposal_no);
//             fd.append('name', 'consent');
//             fd.append('type', 'consent');
//             fd.append('latitude', window.latitude_value);
//             fd.append('longitude', window.longitude_value);
//             fd.append('file', file);

//             ajaxCallForApi(sysLang, fd);
//             console.log(file);



//         });

//     }

// }
 var count_button=0;
async function showButtonApi_2(sysLang,base) {
// count=1;
    if (android_version || window_version || version_ipad || (parseFloat(checkIOS()) > 14.5)) {
        // if (consent_img_flag == 0) {
        //     consent_img_flag = 1;
        //     await photo_consent_image();

        // }
 console.log("version_ipad"+version_ipad);
        console.log("android_version");
        if (sysLang == 'eng' && cur_scr == 0) {
            getTextObject(come_closer_eng).alpha = 0;
              getTextObject(liveness_close_text_eng).alpha=0;
               if (count_button == 0) {
                 // alert("button",count_button);
              getTextObject(liveness_close_text_eng).alpha=0;
            getSpriteObject('record_eng').alpha = 1;
            count_button++;
             }


        } else if (sysLang == 'hin' && cur_scr == 0) {
            getTextObject(come_closer_hin).alpha = 0;
            getTextObject(liveness_close_text_hin).alpha=0;
            if (count_button == 0) {
                getTextObject(liveness_close_text_hin).alpha=0;
                getSpriteObject('record_eng').alpha = 1;
                count_button++;
            }
        }
        else if (sysLang == 'ben' && cur_scr == 0) {
            getTextObject(come_closer_ben).alpha = 0;
            getTextObject(liveness_close_text_ben).alpha=0;
            if (count_button == 0) {
                getTextObject(liveness_close_text_ben).alpha=0;
                getSpriteObject('record_ben').alpha = 1;
                count_button++;
            }
        }
        else if (sysLang == 'pun' && cur_scr == 0) {
            getTextObject(come_closer_pun).alpha = 0;
            getTextObject(liveness_close_text_pun).alpha=0;
            if (count_button == 0) {
                getTextObject(liveness_close_text_pun).alpha=0;
                getSpriteObject('record_pun').alpha = 1;
                count_button++;
            }
        }
        if (sysLang == 'eng' && consent_img_flag == 0) {
            consent_img_flag = 1;
            await photo_consent_image_2(base);

        } else if (sysLang == 'hin' && consent_img_flag == 0) {
            consent_img_flag = 1;
            await photo_consent_image_2(base);

        }
        else if (sysLang == 'ben' && consent_img_flag == 0) {
            consent_img_flag = 1;
            await photo_consent_image_2(base);

        }
        else if (sysLang == 'pun' && consent_img_flag == 0) {
            consent_img_flag = 1;
            await photo_consent_image_2(base);

        }

    } else if (version) {
        //IOS
        console.log("ios");

        if (consent_img_flag == 0) {
            consent_img_flag = 1;
            await photo_consent_image_2(base);

        }
        console.log("Detected");
        inputfile('block');



        if (sysLang == 'eng') {
            getTextObject(come_closer_eng).alpha = 0;
            getTextObject(liveness_close_text_eng).alpha=0;
            var el = document.getElementById('video_id');

            var domElement = game.add.dom(425, 1770, el); //y=880
            var dom_style = domElement.node.style;


            domElement.setDepth(5);
            domElement.setOrigin(0, 0.5);
            var x = document.getElementById('file-input');
        } else if (sysLang == 'hin') {
            //hindi
            getTextObject(come_closer_hin).alpha = 0;
            getTextObject(liveness_close_text_hin).alpha=0;
            var el = document.getElementById('video_id_ios');

            var domElement = game.add.dom(425, 1770, el); //y=880
            var dom_style = domElement.node.style;


            domElement.setDepth(5);
            domElement.setOrigin(0, 0.5);
            var x = document.getElementById('file-input_ios');
        }
        else if (sysLang == 'ben') {
            //hindi
            getTextObject(come_closer_ben).alpha = 0;
            getTextObject(liveness_close_text_ben).alpha=0;
            var el = document.getElementById('video_id_ios');

            var domElement = game.add.dom(425, 1770, el); //y=880
            var dom_style = domElement.node.style;


            domElement.setDepth(5);
            domElement.setOrigin(0, 0.5);
            var x = document.getElementById('file-input_ios');
        }
        else if (sysLang == 'pun') {
            //Punjabi
            getTextObject(come_closer_pun).alpha = 0;
            getTextObject(liveness_close_text_pun).alpha=0;
            var el = document.getElementById('video_id_ios');

            var domElement = game.add.dom(425, 1770, el); //y=880
            var dom_style = domElement.node.style;


            domElement.setDepth(5);
            domElement.setOrigin(0, 0.5);
            var x = document.getElementById('file-input_ios');
        }

        x.addEventListener('change', function() {

            console.log("Name = ", x.files[0].name);

            console.log("File = ", x.files[0]);
            inputfile('none');
            if (sysLang == 'eng') {
                getTextObject(video_upload_text_eng).alpha = 1;
                getTextObject(tap_on_pro_eng).alpha = 0;

            } else if (sysLang == 'hin') {
                //hindi
                getTextObject(video_upload_text_hin).alpha = 1;
                getTextObject(tap_on_pro_hin).alpha = 0;
            }
            else if (sysLang == 'ben') {
                //hindi
                getTextObject(video_upload_text_ben).alpha = 1;
                getTextObject(tap_on_pro_ben).alpha = 0;
            }
            else if (sysLang == 'pun') {
                //Punjabi
                getTextObject(video_upload_text_pun).alpha = 1;
                getTextObject(tap_on_pro_pun).alpha = 0;
            }


            var file = x.files[0];

            var fd = new FormData();

            fd.append('proposal', window.proposal_no);
            fd.append('name', 'consent');
            fd.append('type', 'consent');
            fd.append('latitude', window.latitude_value);
            fd.append('longitude', window.longitude_value);
            fd.append('file', file);

            ajaxCallForApi(sysLang, fd);
            console.log(file);



        });

    }

}

function ajaxCallForApi(sysLang, fd) {
    $.ajax({
        url: IOS_VIDEO_SAVE_URL_API,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        statusCode: {
            500: function(responseObject, textStatus, jqXHR) {
                console.log("Uploading Failed");
                goToPage(5); //12
            }
        },
        success: function(response) {

            response = JSON.parse(response);
            if ((sysLang == 'eng') && response.status == 'Success') {
                console.log("Uploading Success");
                sample_complete_status();
                setTimeout(function() {
                    inputfile('none');
                    playAudio('tap_proceed');

                    getTextObject(video_upload_text_eng).alpha = 0;
                    getTextObject(tap_on_pro_eng).alpha = 1;

                    getSpriteObject('proceed_eng').alpha = 1;
                }, 2000 * 2);

            } else if (sysLang == 'hin' && response.status == 'Success') {
                console.log("Uploading Success");
                sample_complete_status();
                setTimeout(function() {
                    inputfile('none');


                    playAudio('proceed_hin');

                    getTextObject(video_upload_text_hin).alpha = 0;
                    getTextObject(tap_on_pro_hin).alpha = 1;

                    getSpriteObject('proceed_video_hin').alpha = 1;

                }, 2000 * 2);
            } else if (sysLang == 'ben' && response.status == 'Success') {
                console.log("Uploading Success");
                sample_complete_status();
                setTimeout(function() {
                    inputfile('none');


                    playAudio('proceed_hin');

                    getTextObject(video_upload_text_ben).alpha = 0;
                    getTextObject(tap_on_pro_ben).alpha = 1;

                    getSpriteObject('proceed_ben').alpha = 1;

                }, 2000 * 2);
            } else if (sysLang == 'pun' && response.status == 'Success') {
                console.log("Uploading Success");
                sample_complete_status();
                setTimeout(function() {
                    inputfile('none');
console.log("Proceed Punjabi");

                    playAudio('proceed_hin');

                    getTextObject(video_upload_text_pun).alpha = 0;
                    getTextObject(tap_on_pro_pun).alpha = 1;

                    getSpriteObject('proceed_pun').alpha = 1;

                }, 2000 * 2);
            }
             else {
                console.log("Uploading Failed");
                goToPage(5); //12

            }

        },

    });
}

function livenessDetection(type, sysLang, isFaceDetected,base) {
    faceDetection(cur_scr, sysLang, true, '');
    getSpriteObject('tick2').alpha = 1;

    if (cur_scr == 0) 
    {
        if (sysLang == 'eng')
            getTextObject(position_text_eng).alpha = 0;
        else if (sysLang == 'hin')
            getTextObject(position_text_hin).alpha = 0;
        else if (sysLang == 'ben')
            getTextObject(position_text_ben).alpha = 0;
        else if (sysLang == 'pun')
            getTextObject(position_text_pun).alpha = 0;
    }
    
    livness_det =true;
     // liveness_checked_Display(sysLang);
    StopBlinkDetection();
     stopfaceDetect();
    showButtonApi_2(sysLang,base);
    console.log('stopped');




}


//  function liveness_checked_Display(sysLang)
// {
//     if(sysLang=='eng')
//     {
//      getTextObject(instruct_text_eng).alpha = 0;
//      getTextObject(liveness_checked_text_eng).alpha = 1;
//     }
//     else if(sysLang=='hin')
//     {
//      getTextObject(instruct_text_hin).alpha = 0;
//      getTextObject(liveness_checked_text_hin).alpha = 1;
//     }
// }

function updateConnectionStatus() {
    //console.log("Connection type changed to");
    //console.log(connection);


    type = connection.effectiveType;
    nettype = connection.effectiveType;
    netrtt = connection.rtt;
    netdown = connection.downlink;
}


async function LoadFaceModels(path) {
    
    // await langAssets();
    // await game.load.start();

    await faceapi.loadTinyFaceDetectorModel(path + '/tiny_face_detector_model-weights_manifest');
    await faceapi.loadFaceLandmarkTinyModel(path + '/face_landmark_68_tiny_model-weights_manifest');
    await faceapi.loadFaceExpressionModel(path + '/face_expression_model-weights_manifest');
    await faceapi.loadSsdMobilenetv1Model(path + '/ssd_mobilenetv1_model-weights_manifest');

}


var intervalFaceDetectCam;

function beginFaceDetect() {
    isFaceDetected = false;
    isSmileDetected = false;
    isFaceDetected_ios = false;
    isSmileDetected_ios = false;

    if (cur_scr == 4) {

        createOverlayCanvas();

    } else if (cur_scr == 0) {
        // alert();
        createOverlayCanvas1();

    }

    intervalFaceDetectCam = setInterval(function() {

        if (cur_scr == 0) {
            // console.log('here');
            faceDetectEnable1();

        } else if (cur_scr == 4) {
            console.log('personal screen');
            faceDetectEnable();
        } else {
            console.log('stopped detection');
            stopfaceDetect();
        }


        // faceDetectEnable();
    }, 300);
}

function face_detect_start() {
    isFaceDetected = false;

    createOverlayCanvas();

    intervalFaceDetectCam = setInterval(function() {
        if(getSpriteObject('tick1').alpha == 1)
            stopfaceDetect();
        faceDetectEnable();
        console.log("face_detect_start");
    }, 100);
}


var isFaceDetected = false;
var isSmileDetected = false;
var consent_img_flag = 0;
var flag = 0;
// var isFaceDetected_ios=false;
// var isSmileDetected_ios=false;
async function faceDetectEnable() {

if(window.recallstate=="true")
{
  isFaceDetected = true;
  getSpriteObject('tick1').alpha = 1;

    if (sysLang == 'eng') {
        getTextObject('Provide Face Detection').alpha = 0;
    } else if (sysLang == 'hin') {
        getTextObject('\nचेहरे की पहचान प्रदान करें').alpha = 0;
    }
     else if (sysLang == 'ben') {
        getTextObject('\nমুখ সনাক্তকরণ প্রদান').alpha = 0;
    }
    else if (sysLang == 'pun') {
        getTextObject('\nਚਿਹਰੇ ਦੀ ਪਛਾਣ ਪ੍ਰਦਾਨ ਕਰੋ').alpha = 0;
    }

}
else
{
    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })
        var result = await faceapi.detectSingleFace(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

        if (result) {

            //Make isFaceDetected true - Android
            //Make isFaceDetected_ios true - ios
            // isFaceDetected=true;
            // getSpriteObject('tick1').alpha = 1;
            //

            isFaceDetected = true;
            getSpriteObject('tick1').alpha = 1;
            stopfaceDetect();
            console.log("detection stopped");
            // getSpriteObject('tick1').alpha = 1;
            // stopfaceDetect();
            // 			if(isFaceDetected==true)
            // 			{
            // stopfaceDetect();
            // console.log("detection stopped");
            // }


            if (sysLang == 'eng') {
                getTextObject('Provide Face Detection').alpha = 0;
            } else if (sysLang == 'hin') {
                getTextObject('\nचेहरे की पहचान प्रदान करें').alpha = 0;
            }
            else if (sysLang == 'ben') {
                getTextObject('\nমুখ সনাক্তকরণ প্রদান').alpha = 0;
            }
            else if (sysLang == 'pun') {
                getTextObject('\nਚਿਹਰੇ ਦੀ ਪਛਾਣ ਪ੍ਰਦਾਨ ਕਰੋ').alpha = 0;
            }



            try {
                faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                faceapi.draw.drawDetections(overlay_canvas.canvas, result);
                faceapi.draw.drawFaceLandmarks(overlay_canvas.canvas, result);
            } catch (e) {
                console.log(e);
            }
        } else {
            // //alert("7");
            isFaceDetected = false;
            // isFaceDetected_ios = false;
        }
    }
}
}

var blinkCount = 0;
var isFaceDetected = false;
var isSmileDetected = false;
var consent_img_flag = 0;
window.facescore = '';

var low_score_count = 0;

var data_compact;
async function faceDetectEnable1() {

    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })

        var result = await faceapi.detectSingleFace(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

        window.facescore = 0;

        if (result) {

            window.facedetails = result;
            window.facescore = window.facedetails.detection._score * 100;

            faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
            faceapi.draw.drawDetections(overlay_canvas.canvas, result);
            faceapi.draw.drawFaceLandmarks(overlay_canvas.canvas, result);


            if (android_version || version || version_ipad || parseFloat(checkIOS()) > 14.5) {
                data_compact = 70;
                console.log("Mobile call" + android_version + " " + version + " " + version_ipad);
            } else if (window_version) {
                data_compact = 70;
                console.log("window call");
            }
            if (window.facescore >= data_compact) {
                // alert();
                console.log("Face is detected true" + window.facescore);
                isFaceDetected = true;
                // getSpriteObject('tick1').alpha = 1;
                faceDetection(cur_scr, sysLang, true, 'LOW_FACE');
                if (result.expressions.happy > 0.98) {

                    console.log("Smile is detected true");
                    isSmileDetected = true;

                    //blinkCount = 3;
                }

    console.log("isFaceDetected" + isFaceDetected);
                if (isSmileDetected == true || blinkCount == 2) {
                    //isFaceDetected = true;
                    console.log("isSmileDetected" + isSmileDetected);
                     console.log("blinkCount" + blinkCount);

                    if(livness_det==false){
                         console.log("Liveness Detected");
                        liveness_api_call();
                    }

                     // stopfaceDetect();
                     // livenessDetection('smile', sysLang);
                    //Call function liveness_detected (type,syslang)
                    /*  stopfaceDetect();
                     showText(sysLang);
                     getSpriteObject('tick2').alpha = 1;
                     showButton(sysLang); */
                }

                try {
                    faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                    faceapi.draw.drawDetections(overlay_canvas.canvas, result);
                    faceapi.draw.drawFaceLandmarks(overlay_canvas.canvas, result);
                } catch (e) {
                    console.log(e);
                }


            } else {
                isFaceDetected = false;
                //Face Detected But Score is Low
                low_score_count = low_score_count + 1;

                if (low_score_count > 5) {
                    faceDetection(cur_scr, sysLang, false, 'LOW_FACE');
                    low_score_count = 0;
                }

            }

        } else {
            //Face Not Detected At All
            faceDetection(cur_scr, sysLang, false, 'NO_FACE');

        }
    }
}

//Screen - 8

function liveness_api_call()
{

    var base64_image = webcam_canvas.canvas.toDataURL();
    window.mean_image = base64_image;
    base64_image = base64_image.replace("data:image/png;base64,", "");

    console.log(base64_image);



    var form = new FormData();
    form.append("proposal_no",window.proposal_no);
    form.append("image",base64_image);
   // form.append("proposal_no",window.posv_reference);

  var settings = {
  "url": "./assets/scripts/liveness.php",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "async":false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);

  var response_data = JSON.parse(response);


  try
  {
    if(response_data.comparision==true)
  {
    console.log("RESPONSE TRUE",response_data.comparision);

                //your code
                 // isSmileDetected=true;

                 console.log("Liveness detection true");
	             livenessDetection(type, sysLang,isFaceDetected,window.mean_image);
 stopfaceDetect();

  }
  else if(response_data.comparision==false)
  {
    console.log("RESPONSE FALSE",response_data.comparision);
     // isSmileDetected=false;
     getSpriteObject('tick2').alpha = 0;

  if(sysLang=='eng')
{

  getTextObject(liveness_close_text_eng).alpha=1;
 }
  if(sysLang=='hin')
 {
 	getTextObject(liveness_close_text_hin).alpha=1;
 }
  if(sysLang=='ben')
 {
    getTextObject(liveness_close_text_ben).alpha=1;
 }

 if(sysLang=='pun')
 {
    getTextObject(liveness_close_text_pun).alpha=1;
 }

  console.log("Liveness detection false");


  }
  }
  catch(e)
  {

    console.log("liveness error");

  }


});
}


function before_record_liveness_api_call()
{

    var base64_image = webcam_canvas.canvas.toDataURL();
    window.mean_image = base64_image;
    base64_image = base64_image.replace("data:image/png;base64,", "");

    console.log(base64_image);



    var form = new FormData();
    form.append("proposal_no",window.proposal_no);
    form.append("image",base64_image);
   // form.append("proposal_no",window.posv_reference);

    var settings = {
      "url": "./assets/scripts/liveness.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "async":false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      var response_data = JSON.parse(response);
       if(response_data.comparision==true || response_data.comparision=="none"){
            livnesscheckstatus = true;
       }else{
            livnesscheckstatus = false;
       }

    });

   return livnesscheckstatus;
}


async function after_record_liveness_api_call(base64_image)
{

    // var base64_image = webcam_canvas.canvas.toDataURL();
    window.mean_image = base64_image;
    base64_image = base64_image.replace("data:image/png;base64,", "");

    console.log(base64_image);

    var form = new FormData();
    form.append("proposal_no",window.proposal_no);
    form.append("image",base64_image);
   // form.append("proposal_no",window.posv_reference);

    var settings = {
      "url": "./assets/scripts/liveness.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "async":false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      var response_data = JSON.parse(response);
       if(response_data.comparision==true || response_data.comparision=="none"){
            livnesscheckstatus = true;
       }else{
            livnesscheckstatus = false;
       }

    });

   return livnesscheckstatus;
}

// var flag = 0;
// var isFaceDetected_ios=false;
// var isSmileDetected_ios=false;

// var blinkCount=0;
// window.facescore='';
// async function faceDetectEnable_ios()
// {
//     if(webcam_canvas!=null)
//     {
//         const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold : 0.3 })
//         var result = await faceapi.detectSingleFace(webcam_canvas.canvas).withFaceLandmarks(true).withFaceExpressions();


// if(result)
// {
//     if(cur_scr==4){
//     if((isFaceDetected = true) && (sysLang == 'eng') && (cur_scr == 4))
//             {
//             getTextObject('Provide Face Detection').alpha=0;

//         }
//         getSpriteObject('tick1').alpha = 1;


//          if((isFaceDetected = true) && (sysLang == 'hin') && (cur_scr == 4)){
// getTextObject('\nचेहरे की पहचान प्रदान करें').alpha=0;
// }
//             getSpriteObject('tick1').alpha = 1;

//  if(cur_scr == 4){
//             stopfaceDetect();
//            }
//        }

//      window.facedetails= result;
//  window.facescore = window.facedetails.detection._score*100;

// if(window.facescore>=85)
// {
// // alert();
// console.log("Face is detected true");
//  isFaceDetected_ios=true;
// faceDetection(cur_scr,sysLang,isFaceDetected);

// if(result.expressions.happy > 0.98)
// {
//       if(flag==0)
//                 {
//                   flag = 1;
//                 }
//     console.log("Smile is detected true");
//  isSmileDetected_ios=true;
//  // blinkCount=3;
// }
// if(isSmileDetected_ios==true || blinkCount==3)
// {
//     console.log("isSmileDetected_ios"+isSmileDetected_ios);
//     console.log("blinkCount"+blinkCount);
//     console.log("Liveness Detected");

//   // stopfaceDetect();
//   //   showText(sysLang);

//   //   getSpriteObject('tick2').alpha = 1;

// livenessDetection('smile',sysLang);

// }

// showButton(sysLang);
// // else if(blinkCount==3)
// // {
// //     console.log("isSmileDetected_ios"+isSmileDetected_ios);
// //     console.log("blinkCount"+blinkCount);
// //     console.log("Liveness Detected");
// //   stopfaceDetect();
// //     showText(sysLang);

// //     getSpriteObject('tick2').alpha = 1;
// //           if(flag==0)
// //                 {
// //                   flag = 1;
// //                 }
// //                 // if(consent_img_flag==0)
// //                 //       {
// //                 //          consent_img_flag=1;
// //                 //         await photo_consent_image();

// //                 //       }

// // }


// // showButton_ios(sysLang);

// }

// else
// {
//     isFaceDetected_ios=false;
// }



//             faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
//             faceapi.draw.drawDetections(overlay_canvas.canvas, result);
//             faceapi.draw.drawFaceLandmarks(overlay_canvas.canvas, result);
//         }
//         else
//         {
//              isSmileDetected_ios = false;
//         }
//     }
// }


async function sample_complete_status() {

    var result = await call_COMPLETE_STATUS_URL_API(window.proposal_no, 1);
    //console.log("ressssss is",result);

}

function inputfile(data) {
    if (sysLang == 'eng') {

        if (data == 'block') {
            console.log('inside');
            document.getElementById("video_id").style.display = 'block';
            document.getElementById("record_image").style.display = 'block';
            //          document.getElementById("record_image_eng").style.display = 'block';
        } else {
            console.log('outside');
            document.getElementById("record_image").style.display = 'none';
            document.getElementById("video_id").style.display = 'none';
        }
    } else if (sysLang == 'hin') {

        if (data == 'block') {

            document.getElementById("video_id_ios").style.display = 'block';
        } else {

            document.getElementById("record_image_ios").style.display = 'none';
            document.getElementById("video_id_ios").style.display = 'none';
        }
    }


}

function stopfaceDetect() {
    clearInterval(intervalFaceDetectCam);
    clearOverlayCanvas();

    faceDetection(cur_scr, sysLang, true, '');
}


//Take Photo
function takeConsentPhoto() {
    var key = "Take Photo after Face and Liveness are Detected";

    if (isSmileDetected == true) {
        goToPage(13);
        getTextObject(key).alpha = 0;
    } else {
        getTextObject(key).alpha = 1;
    }
}

//Consent Video
var recordingInterval;

function takeConsentVideo(withID) {
    if (withID == false) {
        var key = "Record Video after Face and Liveness are Detected";


        if (isSmileDetected == true) {
            //goToPage(14);
            BeginRecording();
            var count = 0;
            var disp = "Recording Video. " + count + " seconds";

            var counter_text = addTextToGame(disp, 540, 1740, 'Calibri-Regular', 50, "#000000", "center", 900, 0.5, 0.5, false);
            recordingInterval = setInterval(function() {

                if (count == 20) {
                    disp = "Recording Complete";
                    counter_text.setText(disp);

                    clearInterval(recordingInterval);

                    goToPage(3); //10
                } else {
                    count = count + 1;

                    disp = "Recording Video. " + count + " seconds";
                    counter_text.setText(disp);
                }

            }, 1000);
            //getTextObject(key).alpha = 0;
        } else {
            //getTextObject(key).alpha = 1;
        }
    } else {
        var count = 0;
        var disp = "Recording Video. " + count + " seconds";

        var counter_text = addTextToGame(disp, 540, 1740, 'Calibri-Regular', 50, "#000000", "center", 900, 0.5, 0.5, false);
        recordingInterval = setInterval(function() {

            if (count == 20) {
                disp = "Recording Complete";
                counter_text.setText(disp);

                clearInterval(recordingInterval);

                goToPage(2); //9
            } else {
                count = count + 1;

                disp = "Recording Video. " + count + " seconds";
                counter_text.setText(disp);
            }

        }, 1000);

    }
}



async function isFacePresent() {
    //console.log("Is Face Present ? : ",this);


    var result = await faceapi.detectSingleFace(this);

    //console.log("Face ? ",result);

    if (result == null) {
        kyc_instruction_text.setText('Sorry! Face is not Detected. You may retry or proceed further');
    } else {
        kyc_face_detected = true;

        if (result._score > 0.8) {
            kyc_instruction_text.setText('Face Deteced. Please proceed.');
        } else {
            kyc_instruction_text.setText('Face Detected but not clear. You may retry or proceed further');
        }
    }

    getSpriteObject('proceed_eng').alpha = 1;
    getTextObject('Proceed_eng').alpha = 1;
}
// var record_count;
// var speechEvents;
// var recordingInterval;
// var consent_photo_url = null;
// var speak_count = 0;
// var user_speaking = false;
// var count = 0;
// var counterset = 0;
// var x_timer;

// function BeginRecording() {
//     counterset = 0;
//     if (recordingInterval) {
//         clearInterval(recordingInterval);
//     }
//     user_speaking = false;
//     cur_sfx_list[0].stop();
//     count = 0;


//     if (sysLang == 'eng') {

//         getSpriteObject('record_eng').alpha = 0;
//         // getTextObject("You have not spoken during Recording. Please Try Again.").alpha = 0;
//         record_count = getTextObject('Recording Start');
//         record_count.alpha = 1;

//     } else if (sysLang == 'hin') {
//         getSpriteObject('recordbutton_hin').alpha = 0;
//         // getTextObject("कृपया रिकॉर्डिंग करते समय बोलें").alpha = 0;
//         record_count = getTextObject('\nरिकॉर्डिंग शुरू');
//         record_count.alpha = 1;
//     }


//     var r_count = getTextObject('Rec_count');




//     VideoRecord_Start();
//     startdetect(sysLang);



//     speechEvents = hark(videoStream);
//     speechEvents.setThreshold('-40');

//     speechEvents.on('speaking', function() {

//         x_timer = setInterval(function() {
//             counterset++;
//             console.log("Inner count", counterset);
//         }, 100);


//         console.log('x', x_timer);

//         speak_count++;
//         if (count >= 30) {
//             user_speaking = false;
//         } else {
//             user_speaking = true;
//             // speechEvents.stop();
//         }

//         console.log('speaking');
//         // user_speaking = true;
//         if (sysLang == 'eng') {
//             getTextObject("Please make sure you are speaking while recording").alpha = 0;
//         } else if (sysLang == 'hin') {
//             getTextObject("\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n").alpha = 0;
//         }
//     });


//     speechEvents.on('stopped_speaking', function() {

//         console.log("STOPPED SPEAKING ", counterset);

//         //if(counterset>1)
//         clearInterval(x_timer);

//         console.log('stopped_speaking');

//         //user_speaking = false;
//         if (sysLang == 'eng' && speak_count == 0) {

//             getTextObject("Please make sure you are speaking while recording").alpha = 1;


//         } else if (sysLang == 'hin' && speak_count == 0) {

//             getTextObject("\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n").alpha = 1;
//         }

//         speak_count++;

//     });



//     recordingInterval = setInterval(function() {


//         if (count == 30) {

//             r_count.setText('Rec_count');
//             r_count.alpha = 0;
//             clearInterval(recordingInterval);
//             console.log(counterset);
//             clearInterval(x_timer);
//             speechEvents.stop();
//             if (counterset <= 35) {
//                 counterset = 0;

//                 console.log("COUNTERSET is false" + counterset);

//                 //show_recbutton
//                 if (sysLang == 'eng') {
//                     console.log("count" + count);
//                     playAudio('speak_eng');
//                     setTimeout(function() {
//  // alert("beginrecording");
//                         getSpriteObject('record_eng').alpha = 1;

//                     }, 5000);

//                     // getTextObject("You have not spoken during Recording. Please Try Again.").alpha = 1;
//                     record_count.alpha = 0;
//                     getTextObject("Please make sure you are speaking while recording").alpha = 0;


//                 } else {
//                     playAudio('speak_hin');
//                     setTimeout(function() {

//                         getSpriteObject('recordbutton_hin').alpha = 1;

//                     }, 6000);

//                     // getTextObject("कृपया रिकॉर्डिंग करते समय बोलें").alpha = 1;
//                     getTextObject("\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n").alpha = 0;
//                     record_count.alpha = 0;
//                 }



//             } else {

//                 console.log("user_speaking", user_speaking);
//                 clearInterval(recordingInterval);
//                 VideoRecord_Stop();
//                 // console.log("video recording true",VideoRecord_Stop());

//                 if (sysLang == 'eng') {

//                     getTextObject("Please make sure you are speaking while recording").alpha = 0;
//                     record_count = getTextObject('Recording Complete');
//                     record_count.alpha = 1;
//                 }

//                 if (sysLang == 'hin') {

//                     getTextObject("\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n").alpha = 0;
//                     record_count = getTextObject('रिकॉर्डिंग पूर्ण');
//                     record_count.alpha = 1;

//                 }

//             }




//         } else {
//             if (sysLang == 'eng') {
//                 getSpriteObject('record_eng').alpha = 0;
//             }
//             if (sysLang == 'hin') {
//                 getSpriteObject('recordbutton_hin').alpha = 0;
//             }

//             record_count.alpha = 0;

//             count = count + 1;
//             countTemp = count;
//             if (sysLang == 'eng') {


//                 r_count.setText('Recording.. ' + count + ' seconds');
//                 r_count.alpha = 1;


//             }

//             if (sysLang == 'hin') {
//                 r_count.setText('\nरिकॉर्डिंग.. ' + count + ' सेकंड');
//                 r_count.alpha = 1;

//             }

//         }

//     }, 1000);

// }


var recordingInterval;
var consent_photo_url=null;
var livnesscheckstatus = false;
    async function BeginRecording_beforelivenesscheck()
    {
        //Commented by Kumaran
        /*var rec_text_begin = 'Please wait while your photo gets captured';
        var text_set = 'Please ensure your face is visible in the box';
        if(sysLang=='hin'){
            text_set = '\nकृपया सुनिश्चित करें कि आपका चेहरा बॉक्स में दिखाई दे रहा है\n';
            rec_text_begin = '\nकृपया प्रतीक्षा करें जब तक आपकी फ़ोटो कैप्चर न हो जाए\n';
        }
        else if(sysLang=='ben'){
            text_set = '\nঅনুগ্রহ করে নিশ্চিত করুন যে আপনার মুখটি বাক্সে দৃশ্যমান\n';
            rec_text_begin = '\nআপনার ফটো ক্যাপচার করা হয় অপেক্ষা করুন\n';
        }
        else if(sysLang=='pun'){
            text_set = '\nਕਿਰਪਾ ਕਰਕੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ ਚਿਹਰਾ ਬਾਕਸ ਵਿੱਚ ਦਿਖਾਈ ਦੇ ਰਿਹਾ ਹੈ\n';
            rec_text_begin = '\nਕਿਰਪਾ ਕਰਕੇ ਤੁਹਾਡੀ ਫੋਟੋ ਕੈਪਚਰ ਹੋਣ ਤੱਕ ਉਡੀਕ ਕਰੋ\n';
        }*/

        // disable record button and show message
        if(sysLang == 'eng')
            getSpriteObject('record_eng').alpha = 0;
        if(sysLang == 'hin')
            getSpriteObject('record_eng').alpha = 0;
        if(sysLang == 'ben')
            getSpriteObject('record_ben').alpha = 0;
        if(sysLang == 'pun')
            getSpriteObject('record_pun').alpha = 0;

        //Commented by Kumaran
        /*getTextObject(text_set).alpha=0;
        getTextObject(rec_text_begin).alpha=1;*/

    livnesscheckstatus = false;
    var check_image = before_record_liveness_api_call();
    console.log(check_image);
    if(livnesscheckstatus == true)
    {
        //commented by Kumaran on 14072022
        /*var base64_image = webcam_canvas.canvas.toDataURL();
         window.mean_image = base64_image;
        base64_image = base64_image.replace("data:image/png;base64,", "");

        if (sysLang == 'eng') {
            // consent_img_flag = 1;
            await photo_consent_image_2(window.mean_image);

        } else if (sysLang == 'hin') {
            // consent_img_flag = 1;
            await photo_consent_image_2(window.mean_image);

        }
        else if (sysLang == 'ben') {
            // consent_img_flag = 1;
            await photo_consent_image_2(window.mean_image);

        }
        else if (sysLang == 'pun') {
            // consent_img_flag = 1;
            await photo_consent_image_2(window.mean_image);

        }*/
    //Commented by Kumaran
    /*getTextObject(rec_text_begin).alpha=0;
    getTextObject(text_set).alpha = 0;*/
    console.log("Getting Image Success");
    BeginRecording();
    }
    else
    {
         if(sysLang == 'eng')
            getSpriteObject('record_eng').alpha = 1;
         if(sysLang == 'hin')
            getSpriteObject('record_eng').alpha = 1;
         if(sysLang == 'ben')
            getSpriteObject('record_ben').alpha = 1;
         if(sysLang == 'pun')
            getSpriteObject('record_pun').alpha = 1;

        //Commented by Kumaran
        /*getTextObject(rec_text_begin).alpha=0;
        getTextObject(text_set).alpha = 1;*/
        console.log("Getting Image Error");
    }
    }  



    function onVideoRecord(skip_btn,nxt_scrn,hide_txt,xVRtxt=220,yVRtxt=470,vLoadScrn=videoLoadPageNo){

        current_date_check(window.p_PROPOSAL_NUMBER,'start');
        // getSpriteObject('stop').inputEnabled=false;
            console.log("Video Record : onVideoRecord");
            if(!faceDetectStatus) {
                console.log("Face detect status is false");
                return;
            }
        
            if(camera_record_status) {
                return;
            }
          //captureImage();
            camera_record_status = true;
           // captureImage();
            faceDetectDisable();
            EmptyOverlay();
        
            for(var i=0; i<obj_but_list.length; i++)
            {
                var data = obj_but_list[i];
                for(var key in data) {
                    if(data.hasOwnProperty(key)) {
                        var value = data[key];
                        if(key=='key' && value==skip_btn)
                        {
                            data.visible = false;
                        }
                    }
                }
            }
        
            // Spcl code
            /* if(hide_txt)
            {
                console.log("but_test ",obj_text_list[hide_txt]);
                obj_text_list[hide_txt].setText("");
            } */
        
            // rTime = 1;
            if(sysLang=="eng")
            {
              var record_text = "Recording.... ";
              var sec_text = "seconds";
            }
           else if(sysLang=="hin")
            {
              var record_text = "रिकॉर्डिंग... ";
              var sec_text = "सेकंड";
            }
        else if(sysLang=="pun")
            {
              var record_text = "ਰਿਕਾਰਡਿੰਗ... ";
              var sec_text = "ਸਕਿੰਟ";
            }
            else if(sysLang=="tam")
            {
              var record_text = "பதிவு செய்கிறது...";
              var sec_text = "நொடிகள்";
            }
            else if(sysLang=="mar")
            {
              var record_text = "रेकॉर्डिंग...";
              var sec_text = "सेकंद";
            }
        
            else if(sysLang=="tel")
            {
              var record_text = "రికార్డింగ్...";
              var sec_text = "సెకన్లు";
            }
            //record_text = transliterateText(record_text,translitLangArr[sysLang]);
           // sec_text = transliterateText(sec_text,translitLangArr[sysLang]);
        
        
            webcamtext = game.add.text(800, 700, record_text, {
                font: fontFamilyLangArr[sysLang],
                fontSize: "25px",
                fontWeight: "bold",
                fill: "#ec1c24",
                align: "center"
            });
        
            text_group.add(webcamtext);
        
            webcamtext.anchor.setTo(0.5, 0);
            webcamtext.alpha = 0;
            game.add.tween(webcamtext).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 250, true);
        videoRecordStart();
            var timesRun = 0;
             intervalVideoCam = setInterval(function(){
                timesRun += 1;
                if(timesRun === 150 ){
                    clearInterval(intervalVideoCam);
              onVideoRecordStop();
                    if(sysLang=="eng")
                    {
        
        
                         webcamtext.setText("uploading");
                 getSpriteObject('Stop Recording').inputEnabled=false;
                         getSpriteObject('Start Recording').inputEnabled=false;
        
                       }
        
        
                      else if(sysLang=="hin")
                    {
        
                           webcamtext.setText("अपलोडिंग");
                   getSpriteObject('stop_record').inputEnabled=false;
                         getSpriteObject('start_record').inputEnabled=false;
        
        
                    }
        
        
                }
                else
                {
                    webcamtext.setText(record_text+" "+timesRun+" "+sec_text);
        
        
                }
            }, 1000);
        
        
            obj_list.push(webcamtext);
            obj_text_list.push(webcamtext);
        
        
            // videoRecordAutoStop(nxt_scrn,vLoadScrn);
        
            console.log("videoRecordAutoStop : called");
        
        }
        
        function onVideoRecordStop(nxt_scrn){
        
          current_date_check(window.p_PROPOSAL_NUMBER,'end');
        
            videoRecordStop();
        
             getSpriteObject('Stop Recording').inputEnabled=false;
             getSpriteObject('Start Recording').inputEnabled=false;
        
        
            camera_record_status = false;
            if(typeof webcamtext !== 'undefined'){
                webcamtext.setText("");
        
        }
        
        }


function BeginRecording()
{
    var count = 0;
     LIVE_RES1 = false, LIVE_RES2 = false, LIVE_RES3 = false;

    text_set = 'Please ensure your face is visible in the box. \nPlease record again';
    speech_text = 'Please read the above declaration statement correctly.';

    if(sysLang=='eng')
    {
        getSpriteObject('Start Recording').alpha = 0;

        record_count =  getTextObject('Recording Start');
        record_count.alpha = 1;
    }
    else if(sysLang=='hin'){
        text_set = 'Please ensure your face is visible in the box. \nPlease record again';

        getSpriteObject('record_eng').alpha = 0;

        record_count =  getTextObject('Recording Start');
        record_count.alpha = 1;
    }
    else if(sysLang=='ben'){
        text_set = '\nঅনুগ্রহ করে নিশ্চিত করুন যে আপনার মুখটি বাক্সে দৃশ্যমান. আবার রেকর্ড করুন.';

        getSpriteObject('record_ben').alpha = 0;

        record_count =  getTextObject('\nরেকর্ডিং শুরু\n');
        record_count.alpha = 1;
    }
    else if(sysLang=='pun'){
        text_set = '\nਕਿਰਪਾ ਕਰਕੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ ਚਿਹਰਾ ਬਾਕਸ ਵਿੱਚ ਦਿਖਾਈ ਦੇ ਰਿਹਾ ਹੈ. ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਰਿਕਾਰਡ ਕਰੋ.';

        getSpriteObject('record_pun').alpha = 0;

        record_count =  getTextObject('\nਰਿਕਾਰਡਿੰਗ ਸ਼ੁਰੂ\n');
        record_count.alpha = 1;
    } 



    // consent_photo_url = capturePhoto();
    // uploadPhoto(consent_photo_url,'consentPhoto');


    VideoRecord_Start();

    recordingInterval = setInterval(async function(){

        /*if (count == 1)
        {
            // LIVE_RES1 = before_record_liveness_api_call();
            LIVE_IMG1 = webcam_canvas.canvas.toDataURL();
        }

        if (count == 5)
        {
            // LIVE_RES2 = before_record_liveness_api_call();
            LIVE_IMG2 = webcam_canvas.canvas.toDataURL();
        }
        
        if (count == 9)
        {
            // LIVE_RES3 = before_record_liveness_api_call();
            LIVE_IMG3 = webcam_canvas.canvas.toDataURL();
        }
        if (count == 9)
        {
            if (sysLang == 'eng') {
                console.log("Please wait in Count 10");
                getTextObject('Please Wait').alpha = 1;
            } else if (sysLang == 'hin') {
                getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
            }
             else if (sysLang == 'ben') {
                getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
            }
             else if (sysLang == 'pun') {
                getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 1;
            }
        }*/

        /*if (count == 10)
        {
            LIVE_RES1 = await after_record_liveness_api_call(LIVE_IMG1);
            LIVE_RES2 = await after_record_liveness_api_call(LIVE_IMG2);
            LIVE_RES3 = await after_record_liveness_api_call(LIVE_IMG3);
        }*/


        
        /*if ((count == 10) && ((LIVE_RES1 == false) || (LIVE_RES2 == false) || (LIVE_RES3 == false)))
        {
            console.log("Live Response: ", LIVE_RES1, LIVE_RES2, LIVE_RES3);
             clearInterval(recordingInterval);

             // VideoRecord_Stop();
             
             record_count.alpha = 0;
             count = 0;

             if(sysLang == 'eng')
             {
                getTextObject('Please Wait').alpha = 0;
                getSpriteObject('record_eng').alpha = 1;
                record_count.setText('Recording Start');
             }
             if(sysLang == 'hin')
             {
                getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 0;
                getSpriteObject('recordbutton_hin').alpha = 1;
                record_count.setText('\nरिकॉर्डिंग शुरू\n');
             }
                
             if(sysLang == 'ben')
             {
                getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 0;
                getSpriteObject('record_ben').alpha = 1;
                record_count.setText('\nরেকর্ডিং শুরু\n');
             }
                
             if(sysLang == 'pun')
             {
                getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 0;
                getSpriteObject('record_pun').alpha = 1;
                record_count.setText('\nਰਿਕਾਰਡਿੰਗ ਸ਼ੁਰੂ\n');
             }

            getTextObject(text_set).alpha = 1;
        }*/
        // else
        if(count == 20)
        {
            console.log("Count 20", LIVE_RES1, LIVE_RES2, LIVE_RES3);
            clearInterval(recordingInterval);

            VideoRecord_Stop();

            /*if (window.videoImageURL != '')
            {
                if(game.sys.game.device.os.android ==true || game.sys.game.device.os.iOS ==true || game.sys.game.device.os.macOS == true)
                {
                    addImageToSummary(window.videoImageURL, 542, 1250, 750, 802);
                }
                else if( game.sys.game.device.os.windows == true)
                {
                    addImageToSummary(window.videoImageURL, 542, 1250, 960, 802);
                }
                
            }
            getTextObject(text_set).alpha = 0;
            getTextObject(speech_text).alpha = 0;
            if(sysLang=='eng'){
                getTextObject('Please Wait').alpha = 0;
                record_count.setText('Recording Complete');
            }

            if(sysLang=='hin'){
                getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 0;
                record_count.setText('रिकॉर्डिंग पूर्ण');
            }
            if(sysLang=='ben'){
                getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 0;
                record_count.setText('\nরেকর্ডিং সম্পূর্ণ\n');
            }

            if(sysLang=='pun'){
                getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 0;
                record_count.setText('\nਰਿਕਾਰਡਿੰਗ ਪੂਰੀ ਹੋਈ\n');
            }*/
        }

// else if((sysLang=='hin') && (count == 10))
//         {
//             clearInterval(recordingInterval);

//             VideoRecord_Stop();



//             record_count.setText('रिकॉर्डिंग पूर्ण');





//         }

        else
        {
           // //alert();
            //getSpriteObject('record_eng').alpha = 0;

            // getTextObject(text_set).alpha = 0;
            // getTextObject(speech_text).alpha = 0;
            count = count +1;

            if(sysLang=='eng')
            {

                record_count.setText('Recording.. '+count+' seconds');
            }

            if(sysLang=='hin')
            {
                 record_count.setText('Recording.. '+count+' seconds');
            }
             if(sysLang=='ben')
            {
                 record_count.setText('\nরেকর্ডিং.. '+count+' সেকেন্ডস');
            }
             if(sysLang=='pun')
            {
                 record_count.setText('\nਰਿਕਾਰਡਿੰਗ.. '+count+' ਸਕਿੰਟ');
            }

        }

    }, 1000);
}


var face_instructions_sprite = null;
var face_instructions_text = null;

function changeInstructions(sprite, text) {
    if (face_instructions_sprite == null) {
        face_instructions_sprite = getSpriteObject('unlock');
    }

    face_instructions_sprite.setTexture(sprite);


    if (face_instructions_text == null) {
        face_instructions_text = getTextObject('Please give permission to access your Camera and Microphone');
    }

    face_instructions_text.setText(text);

    if (sprite == 'speak' && text.includes('understood')) {
        face_instructions_text.setFontSize(40);
        face_instructions_text.y = 325;
    } else {
        face_instructions_text.setFontSize(55);
        face_instructions_text.y = 300;
    }

}


function startdetect(sysLang) {
    if (sysLang == 'eng') {

        getTextObject("Please make sure you are speaking while recording").alpha = 1;
    } else if (sysLang == 'hin') {
        getTextObject("\nकृपया सुनिश्चित करें कि आप रिकॉर्डिंग करते समय बोल रहे हैं\n").alpha = 1;
    }
}



function playAudio(audio) {

    if (cur_sfx_list.length > 0) {
        cur_sfx_list[0].stop();
        cur_sfx_list.length = 0;
    }
    cur_sfx_list.push(game.sound.add(audio));
    cur_sfx_list[0].play();
    //  if (cur_sfx_list.length > 0)
    //     cur_sfx_list[0].stop();

    // cur_sfx_list.length = 0;
    // cur_sfx_list.push(game.add.audio(audio));
    // currentSound = cur_sfx_list[0].play();
}


function add_type_and_select_dropdown_area() {
    console.log(document.getElementById(game_canvas_id));
    var el = document.getElementById('area-div');

    console.log(el);

    var domElement = game.add.dom(100, 1450, el);

    var child = domElement.getChildByID('area-input');
    console.log(child);
    var style = child.style;
    style.width = '880px';
    style.height = '100px';
    style.fontSize = '45px';
    console.log(child.style);
    domElement.updateSize();

    domElement.setDepth(3);
    domElement.setOrigin(0, 0.5);

    obj_list.push(domElement);

    console.log(domElement);
}

function showInputField(ip_id) {
    getInputObject(ip_id).alpha = 1;
}

function proceedToConsent() {
    uploadPhoto(getScreenImgDataURL(), 'terms_screenshot');

    goToPage(5);
}


/*function addImageToSummary(url, xpos, ypos, width, height) {
    var img_canvas = game.add.rexCanvas(xpos, ypos, width, height);

    img_canvas.fill("#FFFFFF");

    var context = img_canvas.getContext();

    var img = new Image();
    img.addEventListener('load', function() {

        context.drawImage(img, 0, 0, width, height);

    }, false);
    img.src = url; // Set source path
}*/

var img_canvas;
function addImageToSummary(url, xpos, ypos, width, height,depth) {

    img_canvas = game.add.rexCanvas(xpos, ypos, width, height);
    img_canvas.fill("#FFFFFF");
    img_canvas.setDepth(depth);
    var context = img_canvas.getContext();
    var img = new Image();
    img.addEventListener('load', function() {
        context.drawImage(img, 0, 0, width, height);
    }, false);
    img.src = url;
   console.log("image created successfully");
    obj_list.push(img_canvas);
   // img.setDepth(depth); // Set source path
   img_canvas.setDepth(5);

}


function setUserName() {
    user_name.setText("Name Not Available");

}


var cropImage;

function cropFace(url, type) {
    const options_tiny = new faceapi.SsdMobilenetv1Options({
        inputSize: 128,
        scoreThreshold: 0.3
    })

    cropImage = new Image();

    var pos_padding = 50;
    var dim_padding = 100;

    cropImage.onload = function() {

        faceapi.detectSingleFace(cropImage, options_tiny).then(
            function(faces) {

                try {
                    console.log(faces.box);

                    var img_canvas = game.add.rexCanvas(540, 700, faces.box.width + dim_padding, faces.box.height + dim_padding);
                    img_canvas.alpha = 0;

                    img_canvas.fill("#FFFFFF");

                    var context = img_canvas.getContext();

                    context.drawImage(
                        cropImage,
                        faces.box.x - pos_padding,
                        faces.box.y - pos_padding,
                        faces.box.width + dim_padding,
                        faces.box.height + dim_padding,
                        0,
                        0,
                        img_canvas.width,
                        img_canvas.height
                    );

                    uploadCropped(img_canvas, type);
                } catch (e) {
                    uploadCroppedError(type);
                }
            },
            function(err) {
                console.error(err);
                ////alert('could not detectAllFaces');
                uploadCroppedError(type);
            }
        );

    };
    cropImage.src = url;
}


function uploadCropped(croppedCanvas, type) {
    var filename = '';

    console.log(croppedCanvas);

    if (type == 'age')
        filename = 'age_proof_cropped';
    else if (type == 'address')
        filename = 'address_proof_cropped';

    uploadPhoto(croppedCanvas.getDataURL('image/jpeg'), filename);
}

function uploadCroppedError(type) {
    var filename = '';

    if (type == 'age')
        filename = 'age_proof_cropped';
    else if (type == 'address')
        filename = 'address_proof_cropped';

    uploadPhoto(face_not_detected, filename);
}



function validateForm() {
    goToPage(5);
}




function product_image_appear_eng() {
    var p1 = window.product_name;
    // getSpriteObject('Supersaverplanimg').alpha=1;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 425, 'AjeevanSurakshaimg');

    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 425, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 425, 'Immediate-Annuityimg');
    }  else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if (p1 == "PNB MetLife Guaranteed Future Plan") {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 425, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 425, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 425, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 425, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 425, 'retirementimg');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 425, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 425, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 425, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 425, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 425, 'Century-Plan');

    }
    else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
   else {

        display_product_image(270, 425, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;
    }

}


//DISAGREE IMAGE

function product_image_appear_eng1() {
    var p1 = window.product_name;
    // getSpriteObject('Supersaverplanimg').alpha=1;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 427, 'AjeevanSurakshaimg');

    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 427, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 427, 'Immediate-Annuityimg');
    }  else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 427, 'smart-platinum-plusimg');

    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 427, 'smart-platinum-plusimg');

    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 427, 'Supersaverplanimg');
    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {

        display_product_image(270, 427, 'PNB MetLife Guaranteed Future Plan');
    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 427, 'Supersaverplanimg');
    } else if (p1 == "PNB MetLife Guaranteed Future Plan") {

        display_product_image(270, 427, 'PNB MetLife Guaranteed Future Plan');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 427, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 427, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 427, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 427, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 427, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 427, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 427, 'retirementimg');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 427, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 427, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 427, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 427, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 427, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 427, 'Century-Plan');

    }
    else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 427, 'PNB MetLife Guaranteed Goal Plan');

    }
   else {

        display_product_image(270, 427, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;
    }

}



//SCREEN NO:8 (for combo and non-combo)

function product_image_appear_eng_video()
{
    var p1=window.product_name;
 // getSpriteObject('Supersaverplanimg').alpha=1;

if(cur_scr==0)
{
    if ((p1=="PNB MetLife Aajeevan Suraksha Plan") || (p1=="PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan"))
{
   display_product_image(270,425,'AjeevanSurakshaimg');

}

else if ((p1=="PNB MetLife Bachat Yojana") || (p1=="Met Bachat Yojana"))
  {

    display_product_image(270,425,'bachat-yojanaimg');
}

else if ((p1=="PNB Metlife Immediate Annuity Plan") || (p1=="Metlife Immediate Annuity New")) {

    display_product_image(270,425,'Immediate-Annuityimg');
}

else if ((p1=="PNB MetLife Smart Platinum Plus") || (p1=="MSPP Wealth Plan") || (p1=="MSPP Wealth + Care Plan") || (p1=="Metlife Mera Wealth Plan"))
{

    display_product_image(270,425,'smart-platinum-plusimg');

 }
else if(p1=="PNB Metlife Smart Platinum Plus Wealth Plan") {

 getTextObject(window.product_name).alpha=0;

 addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

 display_product_image(270,425,'smart-platinum-plusimg');

}
 else if ((combo==0) && (p1=="PNB MetLife Super Saver Plan"))
  {

    display_product_image(270,425,'Supersaverplanimg');
}

else if ((combo==0) && (p1=="PNB MetLife Guaranteed Future Plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}

else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+Booster"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu.Endow plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLifeGuar.Futu. Income plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if((combo==1) && (p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{

    display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

// else if ((combo==1) && (p1=="PNB MetLife Super Saver Plan"))
//   {

//     display_product_image(270,425,'Supersaverplanimg');
// }

// else if ((combo==1) && (p1=="PNB MetLife Guaranteed Future Plan"))
//   {

//     display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu. Inc+Booster"))
//   {

//     display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu.Endow plan"))
//   {

//     display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLifeGuar.Futu. Income plan"))
//   {

//     display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
//   {

//     display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
// }
else if((p1=="PNB Metlife Income Protect Pln") || (p1=="PNB Metlife Income Protection Plan"))
{
    display_product_image(270,425,'income_protection');

}
else if(p1=="PNB Metlife Family Income Protector Plus")
{
    getTextObject(window.product_name).alpha=0;

    addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

    display_product_image(270,425,'PNB-MetLife-Family-Income-Protector-Plus');

}
else if(p1=="Met Family Income Protect Plus")
{
    display_product_image(270,425,'PNB-MetLife-Family-Income-Protector-Plus');

}
else if(p1=="Mera Mediclaim Plan")
{
    display_product_image(270,425,'MMP_img');

}
else if(p1=="PNB MetLife Saral Jeevan Bima")
{
    display_product_image(270,425,'saral_jeevanimg');

}
else if((p1=="Life Plus Plan -WROP") || (p1=="Life Plus Plan-ROP") || (p1=="Life Plus Health Plan-WROP") || (p1=="Life Plus Health Plan-ROP") || (p1=="Life Plan - WROP") || (p1=="Life Plan - ROP"))
{
    display_product_image(270,425,"mmtp_img");
}

else if((p1=="PNB MetLife Retirement Savings Plan") && (p1="MetLife Retirement Plan"))
{
    display_product_image(270,425,'retirementimg');

}
else if((p1=="Met Smart Platinum") || (p1=="PNB MetLife Smart Platinum"))
{
    display_product_image(270,425,'Met Smart Platinum');

}
else if((p1=="PNB MetLife Endowment Savings+") || (p1=="PNB Metlife Endowment Savings Plan Plus") || (p1=="PNB Metlife Endowment Saving Plan Plus") || (p1=="Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan"))
{
    display_product_image(270,425,'PNB MetLife Endowment Savings+');

}
else if((p1=="PNBM Guaranteed IncrIncomePlan") || (p1=="Metlife Guaranteed Income Plan") || (p1=="PNB MetLife Guaranteed Income Plan"))
{
    display_product_image(270,425,'Metlife Guaranteed Income Plan');

}
else if(p1=="MetLife Mera Term Plan")
{
    display_product_image(270,425,'MetLife Mera Term Plan');

}
else if((p1=="Metlife Guaranteed Savings") || (p1=="PNB MetLife Guaranteed Savings Plan"))
{
    display_product_image(270,425,'PNB MetLife Guaranteed Savings Plan');

}
else if((p1=="PNB MetLife Century Plan") || (p1 == "MetLife Century Plan"))
{
    display_product_image(270,425,'Century-Plan');

}
else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
}
else
{

    display_product_image(270,425,'pnb_plain_img');
    getTextObject(window.product_name).alpha=1;
}

}




function product_image_appear_hin_video()
{
    var p1=window.product_name;
 // getSpriteObject('Supersaverplanimg').alpha=1;

if(cur_scr==0)
{
    if ((p1=="PNB MetLife Aajeevan Suraksha Plan") || (p1=="PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan"))
{
   display_product_image(270,430,'AjeevanSurakshaimg');

}

else if ((p1=="PNB MetLife Bachat Yojana") || (p1=="Met Bachat Yojana"))
  {

    display_product_image(270,430,'bachat-yojanaimg');
}

else if ((p1=="PNB Metlife Immediate Annuity Plan") || (p1=="Metlife Immediate Annuity New")) {

    display_product_image(270,430,'Immediate-Annuityimg');
}

else if ((p1=="PNB MetLife Smart Platinum Plus") || (p1=="MSPP Wealth Plan") || (p1=="MSPP Wealth + Care Plan") || (p1=="Metlife Mera Wealth Plan"))
{

    display_product_image(270,430,'smart-platinum-plusimg');

 }
else if(p1=="PNB Metlife Smart Platinum Plus Wealth Plan") {

 getTextObject(window.product_name).alpha=0;

 addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

 display_product_image(270,430,'smart-platinum-plusimg');

}
 else if ((combo==0) && (p1=="PNB MetLife Super Saver Plan"))
  {

    display_product_image(270,430,'Supersaverplanimg');
}

else if ((combo==0) && (p1=="PNB MetLife Guaranteed Future Plan"))
  {

    display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+Booster"))
  {

    display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu.Endow plan"))
  {

    display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLifeGuar.Futu. Income plan"))
  {

    display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
  {

    display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
}
else if((combo==1) && (p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{

    display_product_image(270,430,'Wealth Plus Income Solution Combo');
}

// else if ((combo==1) && (p1=="PNB MetLife Super Saver Plan"))
//   {

//     display_product_image(270,430,'Supersaverplanimg');
// }

// else if ((combo==1) || (p1=="PNB MetLife Guaranteed Future Plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) || (p1=="MetLife Guar.Futu. Inc+Booster"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu.Endow plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLifeGuar.Futu. Income plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
else if((p1=="PNB Metlife Income Protect Pln") || (p1=="PNB Metlife Income Protection Plan"))
{
    display_product_image(270,430,'income_protection');

}
else if(p1=="PNB Metlife Family Income Protector Plus")
{
    getTextObject(window.product_name).alpha=0;

    addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

    display_product_image(270,430,'PNB-MetLife-Family-Income-Protector-Plus');

}
else if(p1=="Met Family Income Protect Plus")
{
    display_product_image(270,430,'MMP_img');

}
else if(p1=="PNB MetLife Saral Jeevan Bima")
{
    display_product_image(270,430,'saral_jeevanimg');

}
else if((p1=="Life Plus Plan -WROP") || (p1=="Life Plus Plan-ROP") || (p1=="Life Plus Health Plan-WROP") || (p1=="Life Plus Health Plan-ROP") || (p1=="Life Plan - WROP") || (p1=="Life Plan - ROP"))
{
    display_product_image(270,430,"mmtp_img");
}

else if((p1=="PNB MetLife Retirement Savings Plan") && (p1="MetLife Retirement Plan"))
{
    display_product_image(270,430,'retirementimg');

}
else if((p1=="Met Smart Platinum") || (p1=="PNB MetLife Smart Platinum"))
{
    display_product_image(270,430,'Met Smart Platinum');

}
else if((p1=="PNB MetLife Endowment Savings+") || (p1=="PNB Metlife Endowment Savings Plan Plus") || (p1=="PNB Metlife Endowment Saving Plan Plus") || (p1=="Met Endowment Saving Plan")  || (p1 == "PNB Metlife Endowment Savings Plus Plan"))
{
    display_product_image(270,430,'PNB MetLife Endowment Savings+');

}
else if((p1=="PNBM Guaranteed IncrIncomePlan") || (p1=="Metlife Guaranteed Income Plan") || (p1=="PNB MetLife Guaranteed Income Plan"))
{
    display_product_image(270,430,'Metlife Guaranteed Income Plan');

}
else if(p1=="MetLife Mera Term Plan")
{
    display_product_image(270,430,'MetLife Mera Term Plan');

}
else if((p1=="Metlife Guaranteed Savings") || (p1=="PNB MetLife Guaranteed Savings Plan"))
{
    display_product_image(270,430,'PNB MetLife Guaranteed Savings Plan');

}
else if((p1=="PNB MetLife Century Plan") || (p1 == "MetLife Century Plan"))
{
    display_product_image(270,430,'Century-Plan');

}
else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
}
else
{

    display_product_image(270,430,'pnb_plain_img');
    getTextObject(window.product_name).alpha=1;
}

}


//Bengali Product image - video screen



function product_image_appear_ben_video()
{
    var p1=window.product_name;
 // getSpriteObject('Supersaverplanimg').alpha=1;

if(cur_scr==0)
{
    if ((p1=="PNB MetLife Aajeevan Suraksha Plan") || (p1=="PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan"))
{
   display_product_image(270,425,'AjeevanSurakshaimg');

}

else if ((p1=="PNB MetLife Bachat Yojana") || (p1=="Met Bachat Yojana"))
  {

    display_product_image(270,425,'bachat-yojanaimg');
}

else if ((p1=="PNB Metlife Immediate Annuity Plan") || (p1=="Metlife Immediate Annuity New")) {

    display_product_image(270,425,'Immediate-Annuityimg');
}

else if ((p1=="PNB MetLife Smart Platinum Plus") || (p1=="MSPP Wealth Plan") || (p1=="MSPP Wealth + Care Plan") || (p1=="Metlife Mera Wealth Plan"))
{

    display_product_image(270,425,'smart-platinum-plusimg');

 }
else if(p1=="PNB Metlife Smart Platinum Plus Wealth Plan") {

 getTextObject(window.product_name).alpha=0;

 addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

 display_product_image(270,425,'smart-platinum-plusimg');

}
 else if ((combo==0) && (p1=="PNB MetLife Super Saver Plan"))
  {

    display_product_image(270,425,'Supersaverplanimg');
}

else if ((combo==0) && (p1=="PNB MetLife Guaranteed Future Plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+Booster"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu.Endow plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLifeGuar.Futu. Income plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if((combo==1) && (p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{

    display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

// else if ((combo==1) && (p1=="PNB MetLife Super Saver Plan"))
//   {

//     display_product_image(270,430,'Supersaverplanimg');
// }

// else if ((combo==1) || (p1=="PNB MetLife Guaranteed Future Plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) || (p1=="MetLife Guar.Futu. Inc+Booster"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu.Endow plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLifeGuar.Futu. Income plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
else if((p1=="PNB Metlife Income Protect Pln") || (p1=="PNB Metlife Income Protection Plan"))
{
    display_product_image(270,425,'income_protection');

}
else if(p1=="PNB Metlife Family Income Protector Plus")
{
    getTextObject(window.product_name).alpha=0;

    addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

    display_product_image(270,425,'PNB-MetLife-Family-Income-Protector-Plus');

}
else if(p1=="Met Family Income Protect Plus")
{
    display_product_image(270,425,'MMP_img');

}
else if(p1=="PNB MetLife Saral Jeevan Bima")
{
    display_product_image(270,425,'saral_jeevanimg');

}
else if((p1=="Life Plus Plan -WROP") || (p1=="Life Plus Plan-ROP") || (p1=="Life Plus Health Plan-WROP") || (p1=="Life Plus Health Plan-ROP") || (p1=="Life Plan - WROP") || (p1=="Life Plan - ROP"))
{
    display_product_image(270,425,"mmtp_img");
}

else if((p1=="PNB MetLife Retirement Savings Plan") && (p1="MetLife Retirement Plan"))
{
    display_product_image(270,425,'retirementimg');

}
else if((p1=="Met Smart Platinum") || (p1=="PNB MetLife Smart Platinum"))
{
    display_product_image(270,425,'Met Smart Platinum');

}
else if((p1=="PNB MetLife Endowment Savings+") || (p1=="PNB Metlife Endowment Savings Plan Plus") || (p1=="PNB Metlife Endowment Saving Plan Plus") || (p1=="Met Endowment Saving Plan")  || (p1 == "PNB Metlife Endowment Savings Plus Plan"))
{
    display_product_image(270,425,'PNB MetLife Endowment Savings+');

}
else if((p1=="PNBM Guaranteed IncrIncomePlan") || (p1=="Metlife Guaranteed Income Plan") || (p1=="PNB MetLife Guaranteed Income Plan"))
{
    display_product_image(270,425,'Metlife Guaranteed Income Plan');

}
else if(p1=="MetLife Mera Term Plan")
{
    display_product_image(270,425,'MetLife Mera Term Plan');

}
else if((p1=="Metlife Guaranteed Savings") || (p1=="PNB MetLife Guaranteed Savings Plan"))
{
    display_product_image(270,425,'PNB MetLife Guaranteed Savings Plan');

}
else if((p1=="PNB MetLife Century Plan") || (p1 == "MetLife Century Plan"))
{
    display_product_image(270,425,'Century-Plan');

}
else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
}
else
{

    display_product_image(270,430,'pnb_plain_img');
    getTextObject(window.product_name).alpha=1;
}

}


//Punjabi Product image - video screen
function product_image_appear_pun_video()
{
    var p1=window.product_name;
 // getSpriteObject('Supersaverplanimg').alpha=1;

if(cur_scr==0)
{
    if ((p1=="PNB MetLife Aajeevan Suraksha Plan") || (p1=="PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan"))
{
   display_product_image(270,425,'AjeevanSurakshaimg');

}

else if ((p1=="PNB MetLife Bachat Yojana") || (p1=="Met Bachat Yojana"))
  {

    display_product_image(270,425,'bachat-yojanaimg');
}

else if ((p1=="PNB Metlife Immediate Annuity Plan") || (p1=="Metlife Immediate Annuity New")) {

    display_product_image(270,425,'Immediate-Annuityimg');
}

else if ((p1=="PNB MetLife Smart Platinum Plus") || (p1=="MSPP Wealth Plan") || (p1=="MSPP Wealth + Care Plan") || (p1=="Metlife Mera Wealth Plan"))
{

    display_product_image(270,425,'smart-platinum-plusimg');

 }
else if(p1=="PNB Metlife Smart Platinum Plus Wealth Plan") {

 getTextObject(window.product_name).alpha=0;

 addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

 display_product_image(270,425,'smart-platinum-plusimg');

}
 else if ((combo==0) && (p1=="PNB MetLife Super Saver Plan"))
  {

    display_product_image(270,425,'Supersaverplanimg');
}

else if ((combo==0) && (p1=="PNB MetLife Guaranteed Future Plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+Booster"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu.Endow plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLifeGuar.Futu. Income plan"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if ((combo==0) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
  {

    display_product_image(270,425,'PNB MetLife Guaranteed Future Plan');
}
else if((combo==1) && (p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{

    display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

// else if ((combo==1) && (p1=="PNB MetLife Super Saver Plan"))
//   {

//     display_product_image(270,430,'Supersaverplanimg');
// }

// else if ((combo==1) || (p1=="PNB MetLife Guaranteed Future Plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) || (p1=="MetLife Guar.Futu. Inc+Booster"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu.Endow plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLifeGuar.Futu. Income plan"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
// else if ((combo==1) && (p1=="MetLife Guar.Futu. Inc+lumpsum"))
//   {

//     display_product_image(270,430,'PNB MetLife Guaranteed Future Plan');
// }
else if((p1=="PNB Metlife Income Protect Pln") || (p1=="PNB Metlife Income Protection Plan"))
{
    display_product_image(270,425,'income_protection');

}
else if(p1=="PNB Metlife Family Income Protector Plus")
{
    getTextObject(window.product_name).alpha=0;

    addTextToGame(window.product_name,18,648,fontFamilyLangArr[sysLang],"30px","black","left",450,0,0.5,false);

    display_product_image(270,425,'PNB-MetLife-Family-Income-Protector-Plus');

}
else if(p1=="Met Family Income Protect Plus")
{
    display_product_image(270,425,'MMP_img');

}
else if(p1=="PNB MetLife Saral Jeevan Bima")
{
    display_product_image(270,425,'saral_jeevanimg');

}
else if((p1=="Life Plus Plan -WROP") || (p1=="Life Plus Plan-ROP") || (p1=="Life Plus Health Plan-WROP") || (p1=="Life Plus Health Plan-ROP") || (p1=="Life Plan - WROP") || (p1=="Life Plan - ROP"))
{
    display_product_image(270,425,"mmtp_img");
}

else if((p1=="PNB MetLife Retirement Savings Plan") && (p1="MetLife Retirement Plan"))
{
    display_product_image(270,425,'retirementimg');

}
else if((p1=="Met Smart Platinum") || (p1=="PNB MetLife Smart Platinum"))
{
    display_product_image(270,425,'Met Smart Platinum');

}
else if((p1=="PNB MetLife Endowment Savings+") || (p1=="PNB Metlife Endowment Savings Plan Plus") || (p1=="PNB Metlife Endowment Saving Plan Plus") || (p1=="Met Endowment Saving Plan")  || (p1 == "PNB Metlife Endowment Savings Plus Plan"))
{
    display_product_image(270,425,'PNB MetLife Endowment Savings+');

}
else if((p1=="PNBM Guaranteed IncrIncomePlan") || (p1=="Metlife Guaranteed Income Plan") || (p1=="PNB MetLife Guaranteed Income Plan"))
{
    display_product_image(270,425,'Metlife Guaranteed Income Plan');

}
else if(p1=="MetLife Mera Term Plan")
{
    display_product_image(270,425,'MetLife Mera Term Plan');

}
else if((p1=="Metlife Guaranteed Savings") || (p1=="PNB MetLife Guaranteed Savings Plan"))
{
    display_product_image(270,425,'PNB MetLife Guaranteed Savings Plan');

}
else if((p1=="PNB MetLife Century Plan") || (p1 == "MetLife Century Plan"))
{
    display_product_image(270,425,'Century-Plan');

}
else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
}
else
{

    display_product_image(270,430,'pnb_plain_img');
    getTextObject(window.product_name).alpha=1;
}

}


function product_image_appear_ben() {
    var p1 = window.product_name;
    // getSpriteObject('Supersaverplanimg').alpha=1;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 425, 'AjeevanSurakshaimg');

    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 425, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 425, 'Immediate-Annuityimg');
    }  else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if (p1 == "PNB MetLife Guaranteed Future Plan") {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 425, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 425, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 425, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 425, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 425, 'retirementimg');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 425, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 425, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 425, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 425, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 425, 'Century-Plan');

    }
    else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
   else {

        display_product_image(270, 425, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;
    }

}

//Punjabi Product image
function product_image_appear_pun() {
    var p1 = window.product_name;
    // getSpriteObject('Supersaverplanimg').alpha=1;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 425, 'AjeevanSurakshaimg');

    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 425, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 425, 'Immediate-Annuityimg');
    }  else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if (p1 == "PNB MetLife Guaranteed Future Plan") {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 425, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 425, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 425, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 425, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 425, 'retirementimg');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 425, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 425, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 425, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 425, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 425, 'Century-Plan');

    }
    else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
   else {

        display_product_image(270, 425, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;
    }

}



function id_appear_eng()
{


if((combo==0) && (cur_scr==0))
{


	 getTextObject("Proposal No :").alpha=1;

	 getTextObject(window.proposal_no);
	 getTextObject(window.product_name);

}

else if ((combo==1) && (cur_scr==0))
{

	  getTextObject(window.proposal_no).alpha=0;
	 getTextObject(window.product_name).alpha=0;
	 getTextObject("Proposal No :").alpha=0;
	 getTextObject("Solution ID No :").alpha=1;
	 getTextObject(window.solution_id).alpha=1;
	 getTextObject(window.combo_name).alpha=1;
}
else
{

	getTextObject(window.solution_id).alpha=0;
	 getTextObject(window.combo_name).alpha=0;
}
}



function id_appear_hin()
{
	// var p3 = window.proposal_no;
	// var p4 = window.product_name;
	// var p5 = window.solution_id;
	// var p6 = window.combo_name;

if((combo==0) && (cur_scr==0))
{
// //alert(combo);
	 getTextObject("प्रस्ताव सं :").alpha=1;

	 getTextObject(window.proposal_no);
	 getTextObject(window.product_name);
	 // addTextToGame('Proposal No :',80,770,fontFamilyLangArr[sysLang],"34px","#FFFFFF","center",900,0,0.5,false);
	 // addTextToGame(window.proposal_no,460,770,fontFamilyLangArr[sysLang],"34px",dBLUE,"left",900,0,0.5,false);
}

else if ((combo==1) && (cur_scr==0))
{
	// //alert(combo);
	  getTextObject(window.proposal_no).alpha=0;
	 getTextObject(window.product_name).alpha=0;
	 getTextObject("प्रस्ताव सं :").alpha=0;
	 getTextObject("Solution ID No :").alpha=1;
	 getTextObject(window.solution_id).alpha=1;
	 getTextObject(window.combo_name).alpha=1;
}
else
{

	getTextObject(window.solution_id).alpha=0;
	 getTextObject(window.combo_name).alpha=0;

}
}

//Bengali

function id_appear_ben()
{
    // var p3 = window.proposal_no;
    // var p4 = window.product_name;
    // var p5 = window.solution_id;
    // var p6 = window.combo_name;

    if((combo==0) && (cur_scr==0))
    {
    // //alert(combo);
         getTextObject("প্রোপোজাল নং :").alpha=1;

         getTextObject(window.proposal_no);
         getTextObject(window.product_name);
         // addTextToGame('Proposal No :',80,770,fontFamilyLangArr[sysLang],"34px","#FFFFFF","center",900,0,0.5,false);
         // addTextToGame(window.proposal_no,460,770,fontFamilyLangArr[sysLang],"34px",dBLUE,"left",900,0,0.5,false);
    }

    else if ((combo==1) && (cur_scr==0))
    {
        // //alert(combo);
        getTextObject(window.proposal_no).alpha=0;
        getTextObject(window.product_name).alpha=0;
        getTextObject("প্রোপোজাল নং :").alpha=0;
        getTextObject("Solution ID No :").alpha=1;
        getTextObject(window.solution_id).alpha=1;
        getTextObject(window.combo_name).alpha=1;
    }
    else
    {

        getTextObject(window.solution_id).alpha=0;
        getTextObject(window.combo_name).alpha=0;

    }
}


function id_appear_pun()
{
    // var p3 = window.proposal_no;
    // var p4 = window.product_name;
    // var p5 = window.solution_id;
    // var p6 = window.combo_name;

    if((combo==0) && (cur_scr==0))
    {
    // //alert(combo);
         getTextObject("ਪ੍ਰਸਤਾਵ ਸੰਖਿਆ :").alpha=1;

         getTextObject(window.proposal_no);
         getTextObject(window.product_name);
         // addTextToGame('Proposal No :',80,770,fontFamilyLangArr[sysLang],"34px","#FFFFFF","center",900,0,0.5,false);
         // addTextToGame(window.proposal_no,460,770,fontFamilyLangArr[sysLang],"34px",dBLUE,"left",900,0,0.5,false);
    }

    else if ((combo==1) && (cur_scr==0))
    {
        // //alert(combo);
        getTextObject(window.proposal_no).alpha=0;
        getTextObject(window.product_name).alpha=0;
        getTextObject("ਪ੍ਰਸਤਾਵ ਸੰਖਿਆ :").alpha=0;
        getTextObject("Solution ID No :").alpha=1;
        getTextObject(window.solution_id).alpha=1;
        getTextObject(window.combo_name).alpha=1;
    }
    else
    {

        getTextObject(window.solution_id).alpha=0;
        getTextObject(window.combo_name).alpha=0;

    }
}




function product_image_appear_hin() {
    var p1 = window.product_name;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 425, 'AjeevanSurakshaimg');


    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 425, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 425, 'Immediate-Annuityimg');
    } else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 425, 'smart-platinum-plusimg');
    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'smart-platinum-plusimg');

    } else if (p1 == "PNB MetLife Super Saver Plan") {

        display_product_image(270, 425, 'Supersaverplanimg');
    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {

        display_product_image(270, 425, 'PNB MetLife Guaranteed Future Plan');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 425, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 425, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 425, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 425, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 425, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 425, 'retirementimg');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 425, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 425, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 425, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 425, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 425, 'Century-Plan');

    }
     else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 425, 'PNB MetLife Guaranteed Goal Plan');

    }
    // else if((combo==1) && (p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster"))
    // {
    //     display_product_image(270,425,'pnb_plain_img');
    // }
    else {
        display_product_image(270, 425, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;

    }

}



function product_image_appear_hin2() {
    var p1 = window.product_name;

    if ((p1 == "PNB MetLife Aajeevan Suraksha Plan") || (p1 == "PNB MetLife Aajevan Suraksha-F") || (p1 == "PNB MetLife Ajeevan Suraksha Plan")) {
        display_product_image(270, 429, 'AjeevanSurakshaimg');

    } else if ((p1 == "PNB MetLife Bachat Yojana") || (p1 == "Met Bachat Yojana")) {

        display_product_image(270, 429, 'bachat-yojanaimg');
    } else if ((p1 == "PNB Metlife Immediate Annuity Plan") || (p1 == "Metlife Immediate Annuity New")) {

        display_product_image(270, 429, 'Immediate-Annuityimg');
    } else if ((p1 == "PNB MetLife Smart Platinum Plus") || (p1 == "MSPP Wealth Plan") || (p1 == "MSPP Wealth + Care Plan") || (p1 == "Metlife Mera Wealth Plan")) {

        display_product_image(270, 429, 'smart-platinum-plusimg');
    } else if (p1 == "PNB Metlife Smart Platinum Plus Wealth Plan") {

        getTextObject(window.product_name).alpha = 0;
        display_product_image(270, 429, 'smart-platinum-plusimg');
        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);



    } else if (p1 == "PNB MetLife Super Saver Plan") {
        display_product_image(270, 429, 'Supersaverplanimg');
    } else if ((p1 == "PNB Metlife Income Protect Pln") || (p1 == "PNB Metlife Income Protection Plan")) {
        display_product_image(270, 429, 'income_protection');

    } else if (p1 == "PNB Metlife Family Income Protector Plus") {
        getTextObject(window.product_name).alpha = 0;

        addTextToGame(window.product_name, 18, 648, fontFamilyLangArr[sysLang], "30px", "black", "left", 450, 0, 0.5, false);

        display_product_image(270, 429, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Met Family Income Protect Plus") {
        display_product_image(270, 429, 'PNB-MetLife-Family-Income-Protector-Plus');

    } else if (p1 == "Mera Mediclaim Plan") {
        display_product_image(270, 429, 'MMP_img');

    } else if (p1 == "PNB MetLife Saral Jeevan Bima") {
        display_product_image(270, 429, 'saral_jeevanimg');

    } else if ((p1 == "Life Plus Plan -WROP") || (p1 == "Life Plus Plan-ROP") || (p1 == "Life Plus Health Plan-WROP") || (p1 == "Life Plus Health Plan-ROP") || (p1 == "Life Plan - WROP") || (p1 == "Life Plan - ROP")) {
        display_product_image(270, 429, "mmtp_img");
    } else if ((p1 == "PNB MetLife Retirement Savings Plan") && (p1 = "MetLife Retirement Plan")) {
        display_product_image(270, 429, 'retirementimg');

    } else if ((p1 == "PNB MetLife Guaranteed Future Plan") || (p1 == "MetLife Guar.Futu. Inc+Booster") || (p1 == "MetLife Guar.Futu.Endow plan") || (p1 == "MetLifeGuar.Futu. Income plan") || (p1 == "MetLife Guar.Futu. Inc+lumpsum")) {
        display_product_image(270, 429, 'PNB MetLife Guaranteed Future Plan');

    } else if ((p1 == "Met Smart Platinum") || (p1 == "PNB MetLife Smart Platinum")) {
        display_product_image(270, 429, 'Met Smart Platinum');

    } else if ((p1 == "PNB MetLife Endowment Savings+") || (p1 == "PNB Metlife Endowment Savings Plan Plus") || (p1 == "PNB Metlife Endowment Saving Plan Plus") || (p1 == "Met Endowment Saving Plan") || (p1 == "PNB Metlife Endowment Savings Plus Plan")) {
        display_product_image(270, 429, 'PNB MetLife Endowment Savings+');

    } else if ((p1 == "PNBM Guaranteed IncrIncomePlan") || (p1 == "Metlife Guaranteed Income Plan") || (p1 == "PNB MetLife Guaranteed Income Plan")) {
        display_product_image(270, 429, 'Metlife Guaranteed Income Plan');

    } else if (p1 == "MetLife Mera Term Plan") {
        display_product_image(270, 429, 'MetLife Mera Term Plan');

    } else if ((p1 == "Metlife Guaranteed Savings") || (p1 == "PNB MetLife Guaranteed Savings Plan")) {
        display_product_image(270, 429, 'PNB MetLife Guaranteed Savings Plan');

    } else if ((p1 == "PNB MetLife Century Plan") || (p1 == "MetLife Century Plan")) {
        display_product_image(270, 429, 'Century-Plan');

    }
     else if (p1 == "PNB MetLife Guaranteed Goal Plan") {
        display_product_image(270, 429, 'PNB MetLife Guaranteed Goal Plan');

    } else {
        display_product_image(270, 429, 'pnb_plain_img');
        getTextObject(window.product_name).alpha = 1;

    }
}


//Combo Details Function




function product_image_combo_eng()
{
 var p1=window.product_name;
 var p2 = window.combo_product_name;

if(cur_scr==13 || cur_scr == 14)
{

if((p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{
 display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

else
{
 display_product_image(270,425,'pnb_plain_img');
 getTextObject(window.product_name).alpha=1;
}
}
}




function product_image_combo_hin2()
{
 var p1=window.product_name;

if(cur_scr==13 || cur_scr == 14)
{
 if((p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{
 display_product_image(270,429,'Wealth Plus Income Solution Combo');
}

else
{
 display_product_image(270,429,'pnb_plain_img');
 getTextObject(window.product_name).alpha=1;

}
}
}

//Bengali Combo Product image fn


function product_image_combo_ben()
{
 var p1=window.product_name;
 var p2 = window.combo_product_name;

if(cur_scr==13 || cur_scr == 14)
{

if((p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{
 display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

else
{
 display_product_image(270,425,'pnb_plain_img');
 getTextObject(window.product_name).alpha=1;
}
}
}


//Punjabi Combo Product image fn
function product_image_combo_pun()
{
 var p1=window.product_name;
 var p2 = window.combo_product_name;

if(cur_scr==13 || cur_scr == 14)
{

if((p1=="PNB MetLife Super Saver Plan") || (p1=="PNB MetLife Guaranteed Future Plan") || (p1=="MetLife Guar.Futu. Inc+Booster") || (p1=="MetLife Guar.Futu.Endow plan") || (p1=="MetLifeGuar.Futu. Income plan") || (p1=="MetLife Guar.Futu. Inc+lumpsum"))
{
 display_product_image(270,425,'Wealth Plus Income Solution Combo');
}

else
{
 display_product_image(270,425,'pnb_plain_img');
 getTextObject(window.product_name).alpha=1;
}
}
}



var product_img;

function display_product_image(x, y, product_img) {

    product_img = game.add.sprite(x, y, product_img);
    groupToTop(product_img, 2);

    obj_list.push(product_img);
    obj_but_list.push(product_img);

}

//for text appear


var disp_text;

function display_text(x, y, disp_text, size, color, align, font_weight) {


    disp_text = addTextToGame(disp_text, x, y, fontFamilyLangArr[sysLang], size, color, align, font_weight, 10000, 0.5, 0.5, false);

    // var timer = game.time.addEvent({
    //         delay: 1000 * 3,
    //         callback: function() {
    //         disp_text.alpha=0;
    //         }
    //     });
    //     AddEvent(timer);

}



function errorDetection() {

    if (sysLang == 'eng') {

        if (isFaceDetected == true) {
            console.log("true");

            getTextObject('Provide Face Detection').alpha = 0;

            // return true;

        } else {
            console.log("false");

            getTextObject('Provide Face Detection').alpha = 1;

            // return false;

        }
    } else if (sysLang == 'hin') {
        if (isFaceDetected == true) {
            getTextObject('\nचेहरे की पहचान प्रदान करें').alpha = 0;

            return true;
        } else {
            getTextObject('\nचेहरे की पहचान प्रदान करें').alpha = 1;
            return false;
        }
    }
        else if (sysLang == 'ben')
        {
        if (isFaceDetected == true)
         {
            getTextObject('\nমুখ সনাক্তকরণ প্রদান').alpha = 0;

            return true;
        }
        else {
            getTextObject('\nমুখ সনাক্তকরণ প্রদান').alpha = 1;
            return false;
        }
    }
    else if (sysLang == 'pun') 
    {
        if (isFaceDetected == true) 
        {
            getTextObject('\nਚਿਹਰੇ ਦੀ ਪਛਾਣ ਪ੍ਰਦਾਨ ਕਰੋ').alpha = 0;

            return true;
        }
        else 
        {
            getTextObject('\nਚਿਹਰੇ ਦੀ ਪਛਾਣ ਪ੍ਰਦਾਨ ਕਰੋ').alpha = 1;
            return false;
        }
    }
}


function Sizecheck() {
    // var p1 = window.product_name;

    if (window.product_name == "PNB MetLife Guaranteed Future Plan") {

        // //alert(window.product_name);
        getTextObject(window.product_name).alpha = 0;
        addTextToGame(window.product_name, 435, 800, fontFamilyLangArr[sysLang], "28px", dBLUE, "left", 300, 0, 0.5, false);

    } else {
        getTextObject(window.product_name).alpha = 1;
    }
}




// function animateSprite(x,y,sprite_name,scale,frame_start,frame_end,frame_rate,repeat)
// {
//     console.log('Khusi_Welcome');

//     var animation = game.physics.add.sprite(550, 650, 'Khusi_Welcome');
//     animation.setScale(1.50 );

//     console.log(animation);

//     game.anims.create({
//         key: 'normal',
//         frames: game.anims.generateFrameNumbers('Khusi_Welcome', { start: 1, end: 12 }),
//         frameRate: 7,
//         repeat:-1,

//     });

//     animation.anims.play('normal', true);
//   groupToTop(animation, 2);

//     obj_list.push(animation);
// }

function animateSprite(x, y, sprite_name, scale, frame_start, frame_end, frame_rate, repeat) {
    console.log(sprite_name)
    var animation = game.physics.add.sprite(x, y, sprite_name);
    animation.setScale(scale);

    console.log(animation);

    game.anims.create({
        key: sprite_name,
        frames: game.anims.generateFrameNumbers(sprite_name, {
            start: frame_start,
            end: frame_end
        }),
        frameRate: frame_rate,
        repeat: repeat
    });

    animation.anims.play(sprite_name, true);
    groupToTop(animation, 2);

    obj_list.push(animation);
}



// await function play_audio_personal()
// {
//     if(sysLang=='eng')
//     {
//  playAudio('personal_details');
//     }
// }


//AUDIO
function play_video_consent_audio() {
    if ((version || version_ipad) && (sysLang == 'eng')) {

        playAudio('video_consent_ios');
        console.log('ios');
    } else {
        playAudio('video_consent');
        console.log('android');
    }
}


function play_video_consent_audio_hin() {
    if ((version || version_ipad) && (sysLang == 'hin')) {

        playAudio('video_ios');
        console.log("ios");

    } else {
        playAudio('video');
        console.log("Android");

    }
}

//BENGALI
function play_video_consent_audio_ben() {
    if ((version || version_ipad) && (sysLang == 'ben')) {

        playAudio('video_consent_ten_ios_ben');
        console.log('ios');
    } else {
        playAudio('video_consent_ten_ios_ben');
        console.log('android');
    }
}

//PUNJABI
function play_video_consent_audio_pun() {
    if ((version || version_ipad) && (sysLang == 'pun')) {

        playAudio('video_ios_10sec_pun');
        console.log('ios');
    } else {
        playAudio('video_consent_10sec');
        console.log('android');
    }
}

function addScroller() {
    console.log(window.rider_details);
    //540 //1250
    addRidersScroller(545, 1250, 1000, 1000, 0xFFFFFF, 0x015fa5, 0x015fa5, window.rider_details);

}

// function textappear()
// {
//     if(android_version==true)
//     {
//         console.log("android_version"+android_version);
//  disp_text = addTextToGame('\nकृपया सुनिश्चित करें कि आप खुद को बॉक्‍स के अंदर देख पा रहे हैं और जब तक आपका चेहरा पहचाना जाए, थोड़ी देर इंतजार करें। रिकॉर्डिंग के दौरान जब हम आपके चेहरे को रिकॉर्ड करें, मुस्कुराना या अपनी प्लके झपकाना न भूलें, रिकॉर्ड बटन पर क्लिक कर वीडियो रिकॉर्डिंग शुरू करें जो 10 सेकंड के बाद बंद हो जाए',74,505,fontFamilyLangArr[sysLang],"25px",dBLUE,"center","bold",950,0,0,false);

//     }

//       else if(window_version==true)
//     {
//         console.log("window_version"+window_version);
// disp_text = addTextToGame('\nकृपया सुनिश्चित करें कि आप खुद को बॉक्‍स के अंदर देख पा रहे हैं और जब तक आपका चेहरा पहचाना जाए, थोड़ी देर इंतजार करें। रिकॉर्डिंग के दौरान जब हम आपके चेहरे को रिकॉर्ड करें, मुस्कुराना या अपनी प्लके झपकाना न भूलें, रिकॉर्ड बटन पर क्लिक कर वीडियो रिकॉर्डिंग शुरू करें जो 10 सेकंड के बाद बंद हो जाए',74,665,fontFamilyLangArr[sysLang],"25px",dBLUE,"center","bold",950,0,0,false);

//     }
// }


/////////////////////////ENGLISH LANG///////////////////////////////////////

// function buttonEnable_proceed()
// {
// if(sysLang=='eng'){
//      getSpriteObject('proceed_button_eng').input.enabled = false;


//  setTimeout( function(){

// getSpriteObject('proceed_button_eng').input.enabled = true;
//  console.log('press');
//  },7000);
// }
// }


//  function buttonEnable()
// {

//     if(sysLang=='eng'){
//          // errorDetection();
//          getTextObject('Provide Face Detection').alpha=1;
//   getSpriteObject('agree_eng').input.enabled  = false;
//   getSpriteObject('disagree_eng').input.enabled = false;

//   setTimeout( function(){

//        // errorDetection();

//  getSpriteObject('agree_eng').input.enabled = true;
//   getSpriteObject('disagree_eng').input.enabled = true;
//  },11*1000);

// }
// }



// function buttonEnable_policy()
// {
//     getSpriteObject('agree_eng').alpha=0;
//   getSpriteObject('disagree_eng').alpha=0;
//  setTimeout( function(){
// console.log('press');
//  getSpriteObject('agree_eng').alpha=1;
//   getSpriteObject('disagree_eng').alpha=1
//  },7*1000);
// }


// function buttonEnable_rider()
// {
//      getSpriteObject('agree_eng').input.enabled  = false;
//   getSpriteObject('disagree_eng').input.enabled = false;

//  setTimeout( function(){
// console.log('press');
//  getSpriteObject('agree_eng').input.enabled = true;
//   getSpriteObject('disagree_eng').input.enabled = true;
//  },7*1000);
// }


// function buttonEnable_terms()
// {
//      getSpriteObject('agree_eng').input.enabled  = false;
//   getSpriteObject('disagree_eng').input.enabled = false;

//  setTimeout( function(){

//  getSpriteObject('agree_eng').input.enabled = true;
//   getSpriteObject('disagree_eng').input.enabled = true;
//  },21*1000);
// }

// ////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////HINDI LANG///////////////////////////

// function buttonEnable_proceed_hin()
// {
// if(sysLang=='hin'){
//      getSpriteObject('proceed_hindi').input.enabled = false;


//  setTimeout( function(){

// getSpriteObject('proceed_hindi').input.enabled = true;
//  console.log('press');
//  },20*1000);
// }
// }


//  function buttonEnable_personal_hin()
// {
//     if(sysLang=='hin'){
// // errorDetection();
//   getSpriteObject('agree_hin').input.enabled  = false;
//   getSpriteObject('disagree_hin').input.enabled = false;

//   setTimeout( function(){
// // errorDetection();
//  getSpriteObject('agree_hin').input.enabled = true;
//   getSpriteObject('disagree_hin').input.enabled = true;
//  },14*1000);
// }
// }


// function buttonEnable_policy_hin()
// {
//      if(sysLang=='hin'){
//      getSpriteObject('agree_hin').input.enabled  = false;
//   getSpriteObject('disagree_hin').input.enabled = false;

//  setTimeout( function(){

//  getSpriteObject('agree_hin').input.enabled = true;
//   getSpriteObject('disagree_hin').input.enabled = true;
//  },7*1000);
// }
// }

// function buttonEnable_rider_hin()
// {
//      if(sysLang=='hin'){
//      getSpriteObject('agree_hin').input.enabled  = false;
//   getSpriteObject('disagree_hin').input.enabled = false;

//  setTimeout( function(){

//  getSpriteObject('agree_hin').input.enabled = true;
//   getSpriteObject('disagree_hin').input.enabled = true;
//  },7*1000);
// }
// }


// function buttonEnable_terms_hin()
// {
//      if(sysLang=='hin'){
//      getSpriteObject('agree_hin').input.enabled  = false;
//   getSpriteObject('disagree_hin').input.enabled = false;

//  setTimeout( function(){

//  getSpriteObject('agree_hin').input.enabled = true;
//   getSpriteObject('disagree_hin').input.enabled = true;
//  },22*1000);
// }
// }

/////////////////////////////////////////////////////////////////////////////////

function display_nominee_personal() {
    var dBLUE = "#005590";

    if (window.params.nominee != "") {
        getSpriteObject('with-nominee_eng').alpha = 1;
        getSpriteObject('without-nominee_eng').alpha = 0;
        //display related image
        //display related text
        addTextToGame('Policy Insured Name', 80, 770, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner Name', 80, 845, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner DOB', 80, 915, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner Gender', 80, 985, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Occupation', 80, 1055, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Qualification', 80, 1125, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);


        addTextToGame('Nominee Name', 80, 1200, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.nominee_name, 460, 1180, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('Declared Income', 80, 1350, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.declare_income, 460, 1335, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0, false);

        addTextToGame('Address', 80, 1500, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.address, 460, 1430, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('Mobile Number', 80, 1660, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1660, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Email', 80, 1725, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.email, 460, 1725, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

    } else {
        getSpriteObject('with-nominee_eng').alpha = 0;
        getSpriteObject('without-nominee_eng').alpha = 1;
        addTextToGame('Policy Insured Name', 80, 770, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner Name', 80, 845, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner DOB', 80, 915, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Policy Owner Gender', 80, 985, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Occupation', 80, 1055, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Qualification', 80, 1130, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.education, 460, 1130, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Declared Income', 80, 1195, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.declare_income, 460, 1180, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0, false);

        addTextToGame('Address', 80, 1340, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.address, 460, 1270, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('Mobile Number', 80, 1505, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1505, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('Email', 80, 1575, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.email, 460, 1575, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);


        //display related image
        //display related text
    }
}


function display_nominee_personal_hin() {
    var dBLUE = "#005590";

    if (window.params.nominee != "") {
        getSpriteObject('with-nominee_hin').alpha = 1;
        getSpriteObject('without-nominee_hin').alpha = 0;
        //display related image
        //display related text
        addTextToGame('\nपॉलिसी बीमाकर्ता का नाम', 80, 760, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक नाम', 80, 830, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक की जन्‍मतिथि', 80, 900, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक का लिंग', 80, 970, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('व्यवसाय', 80, 1060, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nयोग्यता/शिक्षा\n', 80, 1130, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);


        addTextToGame('\nनामांकित व्यक्ति (नोमिनी) का नाम', 80, 1200, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 350, 0, 0.5, false);
        addTextToGame(window.nominee_name, 460, 1190, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nघोषित वेतन/आय\n', 80, 1355, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1355, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('पता', 80, 1420, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.address, 460, 1410, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nमोबाइल नंबर', 80, 1645, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1660, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nईमेल', 80, 1715, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.email, 460, 1730, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);


    } else {
        getSpriteObject('with-nominee_hin').alpha = 0;
        getSpriteObject('without-nominee_hin').alpha = 1;
        addTextToGame('\nपॉलिसी बीमाकर्ता का नाम', 80, 760, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक नाम', 80, 830, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.name, 460, 840, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक की जन्‍मतिथि', 80, 900, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nपॉलिसी धारक का लिंग', 80, 970, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('व्यवसाय', 80, 1060, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nयोग्यता/शिक्षा\n', 80, 1130, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nघोषित वेतन/आय\n', 80, 1205, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1200, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('पता', 80, 1290, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.address, 460, 1280, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nमोबाइल नंबर', 80, 1485, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1505, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nईमेल', 80, 1560, fontFamilyLangArr[sysLang], "34px", "#FFFFFF", "center", 900, 0, 0.5, false);
        addTextToGame(window.email, 460, 1570, fontFamilyLangArr[sysLang], "34px", dBLUE, "left", 900, 0, 0.5, false);


        //display related image
        //display related text
    }
}

//BENGALI
function display_nominee_personal_ben() {
    var dBLUE = "#005590";

    if (window.params.nominee != "") {
        getSpriteObject('with-nominee_ben').alpha = 1;
        getSpriteObject('without-nominee_ben').alpha = 0;
        //display related image
        //display related text
        addTextToGame('\nপলিসিতে ইনশিওর করা ব্যক্তির নাম', 78, 722, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের নাম', 78, 805, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "29px", dBLUE, "29px", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের জন্ম তারিখ', 78, 875, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের লিঙ্গ', 78, 945, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('পেশা', 78, 1045, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('যোগ্যতা', 78, 1115, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false); //1160
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


        addTextToGame('\nনমিনির নাম', 78, 1200, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 350, 0, 0, false);
        addTextToGame(window.nominee_name, 460, 1240, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0.5, false);

        addTextToGame('\nঘোষিত আয়\n', 80, 1355, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1355, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nঠিকানা\n', 78, 1410, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.address, 460, 1470, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0.5, false);

        addTextToGame('\nমোবাইল নম্বর\n', 78, 1620, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.mobile, 460, 1660, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nইমেল\n', 78, 1690, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.email, 460, 1730, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


    } else  {
        // alert();
        getSpriteObject('with-nominee_ben').alpha = 0;
        getSpriteObject('without-nominee_ben').alpha = 1;
        addTextToGame('\nপলিসিতে ইনশিওর করা ব্যক্তির নাম', 78, 722, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের নাম', 78, 800, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.name, 460, 840, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের জন্ম তারিখ', 78, 875, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nপলিসির মালিকের লিঙ্গ', 78, 945, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('পেশা', 78, 1045, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('যোগ্যতা', 78, 1115, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nঘোষিত আয়\n', 80, 1205, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1200, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


        addTextToGame('\nঠিকানা', 78, 1270, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.address, 460, 1270, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nমোবাইল নম্বর\n', 78, 1465, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.mobile, 460, 1505, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nইমেল\n', 78, 1535, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0, false);
        addTextToGame(window.email, 460, 1570, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

    }

}


//Punjabi
function display_nominee_personal_pun() {
    var dBLUE = "#005590";

    if (window.params.nominee != "") {
        getSpriteObject('with-nominee_pun').alpha = 1;
        getSpriteObject('without-nominee_pun').alpha = 0;
        //display related image
        //display related text
        addTextToGame('\nਪਾਲਿਸੀ ਲਈ ਬੀਮਤ ਵਿਅਕਤੀ ਦਾ ਨਾਮ', 75, 760, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦਾ ਨਾਮ', 75, 830, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦੀ ਜਨਮ ਮਿਤੀ\n', 75, 915, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦਾ ਲਿੰਗ', 75, 975, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਕਿੱਤਾ', 75, 1045, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਯੋਗਤਾ', 75, 1115, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


        addTextToGame('\nਨਾਮਜ਼ਦ ਵਿਅਕਤੀ (ਨਾਮਿਨੀ) ਦਾ ਨਾਮ', 75, 1210, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 350, 0, 0.5, false);
        addTextToGame(window.nominee_name, 460, 1190, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nਘੋਸ਼ਿਤ ਆਮਦਨ\n', 80, 1355, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1355, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਤਾ', 75, 1430, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.address, 460, 1430, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nਮੋਬਾਇਲ ਨੰਬਰ', 75, 1650, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1660, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਈਮੇਲ', 75, 1720, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.email, 460, 1730, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


    } else {
        getSpriteObject('with-nominee_pun').alpha = 0;
        getSpriteObject('without-nominee_pun').alpha = 1;
        addTextToGame('\nਪਾਲਿਸੀ ਲਈ ਬੀਮਤ ਵਿਅਕਤੀ ਦਾ ਨਾਮ', 75, 760, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.policy_insured_name, 460, 770, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦਾ ਨਾਮ', 75, 830, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.name, 460, 845, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦੀ ਜਨਮ ਮਿਤੀ', 75, 905, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.dob, 460, 915, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਾਲਿਸੀ ਦੇ ਮਾਲਕ ਦਾ ਲਿੰਗ', 75, 975, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.gender, 460, 985, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਕਿੱਤਾ', 75, 1045, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.occupation, 460, 1055, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਯੋਗਤਾ', 75, 1115, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.education, 460, 1125, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਘੋਸ਼ਿਤ ਆਮਦਨ\n', 80, 1200, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 900, 0, 0.5, false); //1160
        addTextToGame(window.declare_income, 460, 1200, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਪਤਾ', 75, 1290, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.address, 460, 1290, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 420, 0, 0, false);

        addTextToGame('\nਮੋਬਾਇਲ ਨੰਬਰ', 75, 1495, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.mobile, 460, 1505, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);

        addTextToGame('\nਈਮੇਲ', 75, 1565, fontFamilyLangArr[sysLang], "29px", "#FFFFFF", "center", 380, 0, 0.5, false);
        addTextToGame(window.email, 460, 1575, fontFamilyLangArr[sysLang], "29px", dBLUE, "left", 900, 0, 0.5, false);


        //display related image
        //display related text
    }
}


//var OS = require('./OS');
function check_browser() {
    // //alert(version_ipad);
    var ua = navigator.userAgent;
    // //alert(game.sys.game.device.os.macOS);
    // //alert(game.sys.game.device.os.iPad);
    var isMobile = ua.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)


    if (ua.indexOf("Vivo Browser") > -1 || ua.indexOf("Browser") > -1 || ua.indexOf("Mobile DuckDuckGo") > -1 || ua.indexOf("MiuiBrowser") > -1 || (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) || ua.indexOf("Edg") > -1 || ua.indexOf("SamsungBrowser") > -1 || ua.indexOf('UCBrowser/') >= 0 || ua.match('CriOS') || (ua.indexOf("Firefox") > -1))

    {
        getSpriteObject('Language_screen').alpha = 0;
        getSpriteObject('english').alpha = 0;
        getSpriteObject('hindi').alpha = 0;
        getSpriteObject('bengali').alpha = 0;
        getSpriteObject('punjabi').alpha = 0;

        getSpriteObject('PNB_Start_error').alpha = 1;
        cur_sfx_list[0].stop();

    } else if (!isMobile && (ua.indexOf("Chrome") > -1))

    {
        // //alert('desktop');
        getSpriteObject('PNB_Start_error').alpha = 0;
        getSpriteObject('Language_screen').alpha = 1;
    } else if (((ua.match(/Android/i)) && (ua.indexOf("Chrome") > -1))) {

        ////alert('android and chrome');
        getSpriteObject('Language_screen').alpha = 1;
        getSpriteObject('PNB_Start_error').alpha = 0;
    } else if (((ua.match(/iPhone|iPad|iPod/i)) && (ua.search("Safari") >= 0))) {
        ////alert('ios  and safari');
        getSpriteObject('Language_screen').alpha = 1;
        getSpriteObject('PNB_Start_error').alpha = 0;
    } else if (navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform)) {
        getSpriteObject('Language_screen').alpha = 1;
        getSpriteObject('PNB_Start_error').alpha = 0;
    }
}



function imag_check() {

    if (sysLang == "eng") {

        // getSpriteObject('Page 0.PNB-Start_hin').alpha=0;
        getSpriteObject('hand_sign_eng').alpha = 1;
    } else if (sysLang == 'hin') {

        // getSpriteObject('Page 0.PNB-Start_eng').alpha=0;
        getSpriteObject('hand_sign_hin').alpha = 1;
    }
    else if (sysLang == 'ben') {

        // getSpriteObject('Page 0.PNB-Start_eng').alpha=0;
        getSpriteObject('hand_sign_ben').alpha = 1;
    }
    else if (sysLang == 'pun') {

        // getSpriteObject('Page 0.PNB-Start_eng').alpha=0;
        getSpriteObject('hand_sign_pun').alpha = 1;
    }

}



function hand_sprite() {
    if (sysLang == 'eng') {
        getSpriteObject('hand_sign_eng').alpha = 0;
        getTextObject('Please touch the screen to start!').alpha = 0;
        animateSprite(535, 625, 'loading_img1', 0.9, 1, 5, 10, 80);
        getTextObject('Loading...').alpha = 1;
        getSpriteObject('hand_only').alpha = 1;
    } else if (sysLang == 'hin') {
        getSpriteObject('hand_sign_hin').alpha = 0;
        getTextObject('Please touch the screen to start!').alpha = 0;
        animateSprite(535, 625, 'loading_img1', 0.9, 1, 5, 10, 80);
        getTextObject('Loading...').alpha = 1;
        getSpriteObject('hand_only').alpha = 1;
    }
    else if (sysLang == 'ben') {
        getSpriteObject('hand_sign_ben').alpha = 0;
        getTextObject('Please touch the screen to start!').alpha = 0;
        animateSprite(535, 625, 'loading_img1', 0.9, 1, 5, 10, 80);
        getTextObject('Loading...').alpha = 1;
        getSpriteObject('hand_only').alpha = 1;
    }
    else if (sysLang == 'pun') {
        getSpriteObject('hand_sign_pun').alpha = 0;
        getTextObject('Please touch the screen to start!').alpha = 0;
        animateSprite(535, 625, 'loading_img1', 0.9, 1, 5, 10, 80);
        getTextObject('Loading...').alpha = 1;
        getSpriteObject('hand_only').alpha = 1;
    }

}

function syslang(sys) {
    sysLang = sys;
    // loader_sys();

    if (sysLang == "eng")
    {
        instruct_text_eng = "Read the below statement correctly.\n\nI'm aware about the policy terms and conditions I'm also aware this is a life insurance policy not a bank loan or fixed deposit.";
    }
    else if (sysLang == "hin")
    {
        instruct_text_eng = "\nनीचे दिए गए कथन को ठीक से पढ़िए।\n\nचेहरे की पहचान के लिए कृपया अपने चेहरे को बॉक्स के भीतर रखें। जीवंतता की जांच के लिए मुस्‍कुराएं\n";
    }

    goToPage(1);
}

function changeText()
{
    addTextToGame(instruct_text_eng, 74, 600, fontFamilyLangArr[sysLang], "45px", "#0060a5", "center", 950, 0, 0, false);

}

// var txt;
// var txt1;
// var txt2;
// var txt3;
// var txt4;
// var txt5;
// function customerText()
// {


//  txt = game.add.rexBBCodeText(400,750,'[b]Customer Consent[/b]', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '35px',
// 		color: dBLUE,
// 		align: 'center',
// 		lineSpacing: 0,});


// txt.setDepth(3);


//  txt1 = game.add.rexBBCodeText(70,830,'I/We [b]'+window.name+'[/b] hereby acknowledge that all my/our [b]personal information[/b] as mentioned herein in the previous slides are true and correct to the best of my/our knowledge. I/We further acknowledge and understand that product details including premium payment term, policy term, premium amount, sum assured, nature of the policy as mentioned herein in the previous screens are true and correct to the best of my/our knowledge and the same had been explained by the sales person/insurance agent/Corporate Agent/Broker/ or any authorized and licensed sales person/intermediary of PNB MetLife while solicitation of this insurance policy.', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '30px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt1.setDepth(3);




//  txt2 = game.add.rexBBCodeText(70,1180,'I / We also hereby agree that I/We have read and understood all [b]product features/terms and conditions[/b] including benefits and exclusions as applicable under this policy before proposing the same.', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '30px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt2.setDepth(3);



//  txt3 = game.add.rexBBCodeText(70,1310,'I / We hereby confirm that I / We have [b]disclosed all information[/b] related to my/our health, occupations, habits, existing insurance policies in the proposal form in true and correct manner and understand that any material non-disclosure or misrepresentation of facts in the proposal form may impact the payment of policy benefits under this policy.', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '30px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt3.setDepth(3);


//  txt4 = game.add.rexBBCodeText(70,1510,'I / We am/are fully aware that this is a [b]life insurance product[/b] and is not linked to any fixed deposit or any other banking product whatsoever', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '30px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt4.setDepth(3);



//  txt5 = game.add.rexBBCodeText(70,1630,'I/We understand that issuance of this policy is [b]subject to Underwriting Guidelines[/b] of PNB MetLife and other applicable processes.', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '30px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt5.setDepth(3);


// }

var txt;
var txt1;
var txt2;
var txt3;
var txt4;

// function customerText()
// {


//  txt = game.add.rexBBCodeText(400,780,'[b]Customer Consent[/b]', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '40px',
// 		color: dBLUE,
// 		align: 'center',
// 		lineSpacing: 0,});


// txt.setDepth(3);


//  txt1 = game.add.rexBBCodeText(70,950,'I/We [b]'+window.name+'[/b] hereby acknowledge that features of [b]'+window.product_name+'[/b], benefits, exclusions, terms and conditions, premium payment term, policy term, premium amount, sum assured, etc are explained to me by the sales person and understood by me. I/We have truthfully disclosed all the material information to the Company through proposal number [b]'+window.proposal_no+'[/b] and that any material non-disclosure or misrepresentation by me/us may render the policy null and void and may impact the payment of benefits thereof. I/We am/are aware that this policy is not linked to any fixed deposit/banking product whatsoever. I understand that the policy will be issued subject to the Underwriting guidelines of the Company.', {fontFamily: fontFamilyLangArr[sysLang],
// 		fontSize: '40px',
// 		color: dBLUE,
// 		align: 'left',
// 		stroke: dBLUE,
// 		strokeThickness: 0,
// 		wrap: {
// 		mode: 'word',     // 0|'none'|1|'word'|2|'char'|'character'
// 		width: 950
// 	},

// 		lineSpacing: 0,});


// txt1.setDepth(3);

// }

//ENGLISH
function customerText() {


    txt = game.add.rexBBCodeText(400, 770, '[b]Customer Consent[/b]', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'center',
        lineSpacing: 0,
    });


    txt.setDepth(3);


    txt1 = game.add.rexBBCodeText(70, 870, 'I/We [b]' + window.name + '[/b] hereby acknowledge that features of [b]' + window.product_name + '[/b], benefits, exclusions, terms and conditions, premium payment term, policy term, premium amount, sum assured, etc are explained to me by the sales person and understood by me.', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 0,
    });


    txt1.setDepth(3);




    txt2 = game.add.rexBBCodeText(70, 1120, 'I/We have truthfully disclosed all the material information to the Company through proposal number [b]' + window.proposal_no + '[/b] and that any material non-disclosure or misrepresentation by me/us may render the policy null and void and may impact the payment of benefits thereof.', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 980
        },

        lineSpacing: 0,
    });


    txt2.setDepth(3);



    txt3 = game.add.rexBBCodeText(70, 1380, 'I/We am/are aware that this policy is not linked to any fixed deposit/banking product whatsoever. I understand that the policy will be issued subject to the Underwriting guidelines of the Company.', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 0,
    });


    txt3.setDepth(3);

 txt4 = game.add.rexBBCodeText(70, 1580, 'We would also request you to not respond to any call from anyone posing as IRDAI/Govt. officials to surrender PNB MetLife policy/submit KYC docs for releasing policy bonus', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 0,
    });


    txt4.setDepth(3);


}


function customerDestroy() {

    txt.destroy();
    txt1.destroy();
    txt2.destroy();
    txt3.destroy();
    txt4.destroy();
}


//HINDI
function customerText_hin() {


    txt = game.add.rexBBCodeText(400, 770, '[b]\nग्राहक की सहमति[/b]', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'center',
        stroke: dBLUE,
        strokeThickness: 2,
        toTopObj: 2,

        lineSpacing: 0,
    });


    txt.setDepth(3);



    txt1 = game.add.rexBBCodeText(70, 840, '\nमैं / हम [b]' + window.name + '[/b] स्वीकार करते हैं [b]' + window.product_name + '[/b] लाभ, बहिष्करण, नियम और शर्तें, प्रीमियम भुगतान अवधि, पॉलिसी अवधि, प्रीमियम राशि, बीमा राशि, आदि की विशेषताएं मुझे विक्रेता द्वारा बताई गई हैं और मेरे द्वारा समझा गया।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 2,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },
        lineSpacing: 5,
    });


    txt1.setDepth(3);



    txt2 = game.add.rexBBCodeText(70, 1090, '\nमैंने/हमने प्रस्ताव संख्या [b]' + window.proposal_no + '[/b] के माध्यम से कंपनी को सभी महत्वपूर्ण जानकारी का सत्यता से खुलासा किया है और यह कि मेरे/हमारे द्वारा कोई भी सामग्री गैर-प्रकटीकरण या गलत बयानी पॉलिसी को अमान्य बना सकती है और इसके लाभों के भुगतान को प्रभावित कर सकती है।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 2,
        toTopObj: 2,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 3,
    });


    txt2.setDepth(3);




    txt3 = game.add.rexBBCodeText(70, 1340, '\nमैं/हम जानते हैं कि यह नीति किसी भी एफडी /बैंकिंग उत्पाद से जुड़ी नहीं है। मैं समझता हूं कि पॉलिसी कंपनी के अंडरराइटिंग दिशानिर्देशों के अधीन जारी की जाएगी।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 2,
        toTopObj: 2,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 3,
    });


    txt3.setDepth(3);

txt4 = game.add.rexBBCodeText(70, 1500, '\nहम आपसे यह भी अनुरोध करेंगे कि आईआरडीएआई या सरकार के रूप से प्रस्तुत होने वाले किसी भी व्यक्ति के किसी भी कॉल का जवाब न दें जो पीएनबी मेटलाइफ पॉलिसी को सरेंडर करने के लिए या पॉलिसी बोनस जारी करने के लिए केवाईसी दस्तावेज जमा करने की मांग करे\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 2,
        toTopObj: 2,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 3,
    });


    txt4.setDepth(3);

}

//BENGALI
function customerText_ben() {


    txt = game.add.rexBBCodeText(400, 740, '[b]\nগ্রাহকের সম্মতি[/b]', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'center',
        lineSpacing: 0,
    });


    txt.setDepth(3);


    txt1 = game.add.rexBBCodeText(70, 810, '\nআমি / আমরা [b]' + window.name + '[/b] এতদ্বারা স্বীকার করছি যে [b]' + window.product_name + '[/b], সুবিধা, বর্জন, শর্তাবলী, প্রিমিয়াম পেমেন্টের মেয়াদ, পলিসির মেয়াদ, প্রিমিয়ামের পরিমাণ, বিমাকৃত অর্থ ইত্যাদির বৈশিষ্ট্য বিক্রয় ব্যক্তি আমাকে ব্যাখ্যা করেছেন এবং আমার দ্বারা বোঝা যায়।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 10,
    });


    txt1.setDepth(3);




    txt2 = game.add.rexBBCodeText(70, 1060, '\nআমি/আমরা প্রোপোজাল নম্বর  [b]' + window.proposal_no + '[/b] এর মাধ্যমে কোম্পানির কাছে সমস্ত বস্তুগত তথ্য সত্যতার সাথে প্রকাশ করেছি এবং আমার/আমাদের দ্বারা কোনো উপাদান-প্রকাশ না করা বা ভুল উপস্থাপনা নীতিটিকে বাতিল এবং অকার্যকর করে দিতে পারে এবং এর সুবিধা প্রদানকে প্রভাবিত করতে পারে।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 980
        },

        lineSpacing: 8,
    });


    txt2.setDepth(3);



    txt3 = game.add.rexBBCodeText(70, 1300, '\nআমি/আমরা সচেতন/সচেতন যে এই পলিসি কোনো ফিক্সড ডিপোজিট/ব্যাঙ্কিং পণ্যের সাথে যুক্ত নয়। আমি বুঝি যে কোম্পানির আন্ডাররাইটিং নির্দেশিকা অনুসারে পলিসিটি জারি করা হবে৷\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 8,
    });


    txt3.setDepth(3);

txt4 = game.add.rexBBCodeText(70, 1500, '\nআমরা আরো আপনাকে অনুরোধ করব IRDAI / সরকারি কর্মকর্তারা হিসাবে পরিচয় দেওয়া কারও কোনও কলে সাড়া না দেওয়ার জন্য যেখানে পিএনবি মেটেলিফের পলিসি সারেন্ডার করার / পলিসির বোনাস প্রকাশের জন্য kyc ডক্স জমা দেবার জন্য বলা হচ্ছে ।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 8,
    });


    txt4.setDepth(3);



}


//PUNJABI
function customerText_pun() {


    txt = game.add.rexBBCodeText(400, 760, '\n[b]ਗਾਹਕ ਦੀ ਸਹਿਮਤੀ[/b]\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '40px',
        color: dBLUE,
        align: 'center',
        lineSpacing: 0,
    });


    txt.setDepth(3);


    txt1 = game.add.rexBBCodeText(70, 840, '\nਮੈਂ/ਅਸੀਂ [b]' + window.name + '[/b] ਇਸ ਤਰ੍ਹਾਂ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ ਕਿ [b]' + window.product_name + '[/b], ਲਾਭ, ਬੇਦਖਲੀ, ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ, ਪ੍ਰੀਮੀਅਮ ਭੁਗਤਾਨ ਦੀ ਤਾਰੀਖ਼,ਕਿਸ਼ਤ ਦੇ ਭੁਗਤਾਨ ਦੀ ਮਿਆਦ, ਪਾਲਿਸੀ ਦੀ ਮਿਆਦ, ਪ੍ਰੀਮੀਅਮ ਦੀ ਰਕਮ, ਬੀਮੇ ਦੀ ਰਕਮ, ਆਦਿ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਮੈਨੂੰ ਸੇਲਜ਼ ਵਿਅਕਤੀ ਦੁਆਰਾ ਸਮਝਾਈਆਂ ਗਈਆਂ ਹਨ। ਅਤੇ ਮੇਰੇ ਦੁਆਰਾ ਸਮਝਿਆ.\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 970
        },

        lineSpacing: 8,
    });


    txt1.setDepth(3);




    txt2 = game.add.rexBBCodeText(70, 1130, '\nਮੈਂ/ਅਸੀਂ ਪ੍ਰਸਤਾਵ ਨੰਬਰ [b]' + window.proposal_no + '[/b] ਰਾਹੀਂ ਕੰਪਨੀ ਨੂੰ ਸਾਰੀ ਸਮੱਗਰੀ ਦੀ ਜਾਣਕਾਰੀ ਦਾ ਸੱਚਾਈ ਨਾਲ ਖੁਲਾਸਾ ਕੀਤਾ ਹੈ ਅਤੇ ਇਹ ਕਿ ਮੇਰੇ/ਸਾਡੇ ਦੁਆਰਾ ਕੋਈ ਵੀ ਸਮੱਗਰੀ ਗੈਰ-ਖੁਲਾਸਾ ਜਾਂ ਗਲਤ ਪੇਸ਼ਕਾਰੀ ਨੀਤੀ ਨੂੰ ਰੱਦ ਕਰ ਸਕਦੀ ਹੈ ਅਤੇ ਇਸਦੇ ਲਾਭਾਂ ਦੇ ਭੁਗਤਾਨ ਨੂੰ ਪ੍ਰਭਾਵਤ ਕਰ ਸਕਦੀ ਹੈ।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 8,
    });


    txt2.setDepth(3);



    txt3 = game.add.rexBBCodeText(70, 1340, '\nਮੈਂ/ਅਸੀਂ ਜਾਣਦੇ ਹਾਂ/ਕਿ ਇਹ ਨੀਤੀ ਕਿਸੇ ਵੀ ਫਿਕਸਡ ਡਿਪਾਜ਼ਿਟ/ਬੈਂਕਿੰਗ ਉਤਪਾਦ ਨਾਲ ਜੁੜੀ ਨਹੀਂ ਹੈ। ਮੈਂ ਸਮਝਦਾ/ਸਮਝਦੀ ਹਾਂ ਕਿ ਪਾਲਿਸੀ ਕੰਪਨੀ ਦੇ ਅੰਡਰਰਾਈਟਿੰਗ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੇ ਅਧੀਨ ਜਾਰੀ ਕੀਤੀ ਜਾਵੇਗੀ।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 8,
    });


    txt3.setDepth(3);

 txt4 = game.add.rexBBCodeText(70, 1530, '\nਅਸੀਂ ਤੁਹਾਨੂੰ ਇਹ ਵੀ ਬੇਨਤੀ ਕਰਾਂਗੇ ਕਿ ਤੁਹਾਡੀ PNB MetLife ਪਾਲਿਸੀ ਨੂੰ ਸਮਰਪਣ ਕਰਨ ਜਾਂ ਪਾਲਿਸੀ ਬੋਨਸ ਜਾਰੀ ਕਰਨ ਲਈ KYC ਦਸਤਾਵੇਜ਼ ਜਮ੍ਹਾ ਕਰਨ ਲਈ IRDAI ਜਾਂ ਸਰਕਾਰੀ ਅਧਿਕਾਰੀਆਂ ਵਜੋਂ ਦਾਅਵਾ ਕਰਨ ਵਾਲੇ ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਦੀ ਕਾਲ ਦਾ ਜਵਾਬ ਨਾ ਦਿਓ।\n', {
        fontFamily: fontFamilyLangArr[sysLang],
        fontSize: '38px',
        color: dBLUE,
        align: 'left',
        stroke: dBLUE,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

        lineSpacing: 8,
    });


    txt4.setDepth(3);


}



async function sample_complete_status() {

    var result = await call_COMPLETE_STATUS_URL_API(window.proposal_no, 1);
    //console.log("ressssss is",result);

}

//Disagree API
//
var per_disagree, sel_disagree;
async function sample_disagree_status() 
{
    var scr_no = prev_scr;
    sel_disagree = document.getElementById('gen-input_personal').value;
    per_disagree = getInputObject('disagree_text').text;
    var screen_text = '';

    if (scr_no == 7) // && (per_disagree != '')) 
    {
        screen_text = 'customer';
        
        if (sysLang == 'eng') {
            getTextObject('please fill the details').alpha = 0;
            getTextObject('Please Wait').alpha = 1;
        } else if (sysLang == 'hin') {
            getTextObject('\nकृपया विवरण भरें').alpha = 0;
            getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
        }
         else if (sysLang == 'ben') {
            getTextObject('\nবিস্তারিত পূরণ করুন\n').alpha = 0;
            getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
        }
         else if (sysLang == 'pun') {
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਵੇਰਵੇ ਭਰੋ\n').alpha = 0;
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 1;
        }

        var result = await call_DISAGREE_STATUS_URL_API(window.proposal_no, screen_text, '', per_disagree);
        if (window.result == 'success') 
        {
            goToPage(next_scr);

        } 
        else 
        {
            goToPage(4); //11
        }
    }

    else if ((sel_disagree != '') || (per_disagree != ''))  //else if (per_disagree != '') //
    {
        console.log("disagree success");
        if (sysLang == 'eng') {
            getTextObject('please fill the details').alpha = 0;
            getTextObject('Please Wait').alpha = 1;
        } else if (sysLang == 'hin') {
            getTextObject('\nकृपया विवरण भरें').alpha = 0;
            getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
        }
         else if (sysLang == 'ben') {
            getTextObject('\nবিস্তারিত পূরণ করুন\n').alpha = 0;
            getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
        }
         else if (sysLang == 'pun') {
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਵੇਰਵੇ ਭਰੋ\n').alpha = 0;
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 1;
        }
        if (scr_no == 4) {
            screen_text = 'personal';
        }
        if (scr_no == 5 || scr_no == 13) {
            screen_text = 'policy';
        }
        if (scr_no == 6) {
            screen_text = 'rider';
        }

        var result = await call_DISAGREE_STATUS_URL_API(window.proposal_no, screen_text, sel_disagree, per_disagree);

        if (window.result == 'success') 
        {
            // if(combo == 1 && screen_text == 'policy')
            // {
            //      goToPage(13);
            // }
            // else
            // {
                goToPage(next_scr);
            // }
        } 
        else 
        {
            goToPage(4); //11
        }
    } 
    else 
    {
        console.log("disagree failed");
        if (sysLang == 'eng')
            getTextObject('please fill the details').alpha = 1;
        else if (sysLang == 'hin')
            getTextObject('\nकृपया विवरण भरें').alpha = 1;
          else if (sysLang == 'ben')
            getTextObject('\nবিস্তারিত পূরণ করুন\n').alpha = 1;
         else if (sysLang == 'pun')
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਵੇਰਵੇ ਭਰੋ\n').alpha = 1;
    }
}




function dropvalue()
{
 if((sysLang == 'eng') && (prev_scr == 7))
    {


        customerDestroy();
        document.getElementById('gen-input_personal').style.display = 'none';
        getSpriteObject('popup_box').alpha=0;
        getSpriteObject('popup_box_consent').alpha=1;

}
else if((sysLang == 'hin') && (prev_scr == 7))
    {

        customerDestroy();
        document.getElementById('gen-input_personal').style.display = 'none';
        getSpriteObject('popup_box_hin').alpha=0;
        getSpriteObject('popup_box_customer_hin').alpha=1;
}
else if((sysLang == 'ben') && (prev_scr == 7))
    {

        customerDestroy();
        document.getElementById('gen-input_personal').style.display = 'none';
        getSpriteObject('popup_box_ben').alpha=0;
        getSpriteObject('popup_box_consent_ben').alpha=1;
}
else if((sysLang == 'pun') && (prev_scr == 7))
    {

        customerDestroy();
        document.getElementById('gen-input_personal').style.display = 'none';
        getSpriteObject('popup_box_pun').alpha=0;
        getSpriteObject('popup_box_consent_pun').alpha=1;
}
else
{
    console.log("SUCCESS ON PERSONAL");

      document.getElementById('gen-input_personal').style.display = 'block';

     if(document.getElementById('divOuter_salary'))
    {
      var el = document.getElementById('divOuter_salary');


      var domElement = game.add.dom(210, 1270, el);
      var dom_style = domElement.node.style;


      domElement.setDepth(5);
      domElement.setOrigin(0,0.5);


      var child = domElement.getChildByID('gen-input_personal');
      console.log(child);
      var style = child.style;
      style.fontWeight = '130px';
      style.width ='651px';
      style.height = '67px';
      style.fontSize = '30px';
      style.fontFamily = 'calibri-normal';
      style.backgroundColor = ' #e5eef6';

      console.log(child.style);
      domElement.updateSize();
    }


// if(cur_scr == 4)
// {
//     hideOut();
// }

}
}

function hideOut()
{
    // if(cur_scr == 4)
    // {
        console.log("success");
        document.getElementById('gen-input_personal').style.display = 'none';
    // }
}

var prev_scr;
var next_scr ;
function prevnext_screens(prev, next)
{
    prev_scr = '';
    next_scr = '';
    console.log("prevnext_screens", prev, next);
    prev_scr = prev;
    next_scr = next;

    console.log("prevnext_screens after", prev_scr, next_scr);
}

function cancel_btn()
{
    goToPage(prev_scr);
}


function SetBGTileDisagree() {
    var bg_sprite = "";
    if (sysLang == 'eng')
    {
        if (prev_scr == 4)
            bg_sprite="Page-4_PNB_personal_disagree_eng";
        else if (prev_scr == 5 || prev_scr == 13)
            bg_sprite="Page-5_PNB_Policy_disagree_eng";
        else if (prev_scr == 6)
            bg_sprite="Page-6_PNB_Rider_eng";
        else if (prev_scr == 7)
            bg_sprite="Page-7-PNB_Customer_Consent_bg_eng";
    }
    else if (sysLang == 'hin')
    {
        if (prev_scr == 4)
            bg_sprite="pnb_personal_disagree_hin";
        else if (prev_scr == 5 || prev_scr == 13)
            bg_sprite="pnb_policy_hin";
        else if (prev_scr == 6)
            bg_sprite="Rider_Blank_hin";
         else if (prev_scr == 7)
            bg_sprite="customerconsent_bg_hin";

    }
    else if (sysLang == 'ben')
    {
        if (prev_scr == 4)
            bg_sprite="personal-details-blank_bg";
        else if (prev_scr == 5 || prev_scr == 13)
            bg_sprite="policy_details_ben_blank_BG";
        else if (prev_scr == 6)
            bg_sprite="rider_screen_BG";
         else if (prev_scr == 7)
            bg_sprite="Customer_Consent_BG";
    }
    else if (sysLang == 'pun')
    {
        if (prev_scr == 4)
            bg_sprite="personaldetails_disagree_BG";
        else if (prev_scr == 5 || prev_scr == 13)
            bg_sprite="policy-details";
        else if (prev_scr == 6)
            bg_sprite="riderdetails_pun_BG";
         else if (prev_scr == 7)
            bg_sprite="Customerconsent_BG";
    }

    var bg_tile = game.add.tileSprite(XRes / 2, YRes / 2, XRes, YRes, bg_sprite);
    obj_list.push(bg_tile);
    //bg_tile.setOrigin(0.5,0.5);
}

function prev_combocheck()
{
    if(combo == 0)
    {
        console.log("combo prev next",combo);
        prevnext_screens(4,5);

    }
    else if(combo == 1)
    {
         console.log("combo",combo);
         prevnext_screens(4,13);
    }
}

function disagree_productimage()
{

    if(combo == 0 || prev_scr == 4 || prev_scr == 6 || prev_scr == 7)
    {

        if(sysLang == 'eng')
        {
            getTextObject("Proposal No :").alpha=1;
            getTextObject(window.proposal_no).alpha=1;
            getTextObject(window.product_name).alpha=1;
            product_image_appear_eng();
        }
        else if(sysLang == 'hin')
        {
            getTextObject("प्रस्ताव सं :").alpha=1;
            getTextObject(window.proposal_no).alpha=1;
            getTextObject(window.product_name).alpha=1;
            product_image_appear_hin2();
        }
        else if(sysLang == 'ben')
        {
            getTextObject("প্রোপোজাল নং :").alpha=1;
            getTextObject(window.proposal_no).alpha=1;
            getTextObject(window.product_name).alpha=1;
            product_image_appear_ben();
        }
        else if(sysLang == 'pun')
        {
            getTextObject("ਪ੍ਰਸਤਾਵ ਸੰਖਿਆ :").alpha=1;
            getTextObject(window.proposal_no).alpha=1;
            getTextObject(window.product_name).alpha=1;
            product_image_appear_pun();
        }
    }
     if(combo == 1 && prev_scr == 13)
    {
         if(sysLang == 'eng')
         {
            getTextObject(window.proposal_no).alpha=0;
            getTextObject(window.product_name).alpha=0;
            getTextObject("Proposal No :").alpha=0;
            getTextObject("Solution ID No :").alpha=1;
            getTextObject(window.solution_id).alpha=1;
            getTextObject(window.combo_name).alpha=1;
            product_image_combo_eng();
        }
        else if(sysLang == 'hin')
        {
            getTextObject(window.proposal_no).alpha=0;
            getTextObject(window.product_name).alpha=0;
            getTextObject("प्रस्ताव सं :").alpha=0;
            getTextObject("Solution ID No :").alpha=1;
            getTextObject(window.solution_id).alpha=1;
            getTextObject(window.combo_name).alpha=1;
            product_image_combo_hin2();
        }
         else if(sysLang == 'ben')
        {
            getTextObject(window.proposal_no).alpha=0;
            getTextObject(window.product_name).alpha=0;
            getTextObject("প্রোপোজাল নং :").alpha=0;
            getTextObject("Solution ID No :").alpha=1;
            getTextObject(window.solution_id).alpha=1;
            getTextObject(window.combo_name).alpha=1;
            product_image_combo_ben();
        }
         else if(sysLang == 'pun')
        {
            getTextObject(window.proposal_no).alpha=0;
            getTextObject(window.product_name).alpha=0;
            getTextObject("ਪ੍ਰਸਤਾਵ ਸੰਖਿਆ :").alpha=0;
            getTextObject("Solution ID No :").alpha=1;
            getTextObject(window.solution_id).alpha=1;
            getTextObject(window.combo_name).alpha=0;
            product_image_combo_pun();
        }
    }
}

function loader_sys(){
    console.log("checjk d");
      lang_assets_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_assets_' + sysLang + '_' + sysFlow + '.js';

    lang_flow_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_' + sysLang + '_' + sysFlow + '.js';

         // $.getScript(lang_assets_fpath, function() {
         //    $.getScript(lang_flow_fpath, function() {

                   $.when(langAssets()).then(function() {
                    game.load.start();
                });
               
        //     });
        // });

}



// Orientation Exp
const orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {});

////console.log("orientation : ",orientation);
//orientation.lock('portrait').catch(function(error) {
////console.log("Orientation Error : ", error);
//}
//);

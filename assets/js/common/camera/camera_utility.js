
var video;
var videoStream=null;
var pri_video_width = 400;
var pri_video_height = 400;

var pri_canvas_x = 840;  //840 //screen-4
var pri_canvas_y = 360;  //360

var prii_canvas_x=542;  //540   //screen-8
var prii_canvas_y=1300;  //1296

var pri_canvas_width = 760;//760
var pri_canvas_height = 540; //540

// var prii_canvas_width = 760;
// var prii_canvas_height = 540;

var webcam_canvas;
var overlay_canvas;
var context;

var videoRecorder;
var audioRecorder;
var audioblob;



function webCamCreate() {

    //Checks for compatibility
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||  navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;



    //Creates Video element
    video = document.createElement('video');
    video.setAttribute("id", "vid1");
    video.playsInline = true;
    video.autoplay = true;
     video.muted = true;
    video.volume = 0.00000000001;

}  


function getPermission()
{
  gameCanvasDisable();
   //cur_sfx_list[0].pause();

  navigator.getUserMedia({
    video: {
            minWidth: pri_video_width,
            minHeight: pri_video_height,
      //maxAspectRatio:1,
    },
    audio: true
  },camera_access_success.bind(this), camera_access_failed.bind(this));

}



function camera_access_success(stream)
{ 
  gameCanvasEnable();
  console.log("stream stared");
 // videoStream = stream;

  if(video==null)
  {
    video = document.createElement('video');
    video.setAttribute("id", "vid1");
    video.playsInline = true;
    video.autoplay = true;
    video.volume = 0.00000000001;
    //video.volume = 1;
    video.muted = true;    //new added
  }
 getSpriteObject('tick_1').alpha = 1;

  cam_permission_granted = true;
 
 }

function camera_access_failed(stream)
{
  gameCanvasEnable();
  cam_permission_granted = false;
  console.log("camera access failed");
  errorCallback(stream);
}


function initCamOnly()
{
  console.log("Init Cam Only");


    // var width = 960; //970
    // var height = 802; //615

    if(game.sys.game.device.os.android ==true || game.sys.game.device.os.iOS ==true || game.sys.game.device.os.macOS == true)
    {
        width = 750;
        height = 802;
        // alert('device');
    //   display_product_image(542,1250,'video_box_device');
//       if(sysLang=='eng'){
//       getTextObject('Please position your face within the box that appears on your screen').alpha=0;//1;
// }
// else if(sysLang=='hin')
// {
//      getTextObject('\nकृपया अपना चेहरा अपनी स्क्रीन पर दिखाई देने वाले बॉक्स में रखें').alpha=1;
// }
    }
    else if( game.sys.game.device.os.windows == true)
    {
        // width = 960; //970
        // height = 802; //615
        //
         width = 960; //960
         height = 802; //802
      // alert('windows');
// display_product_image(542,1250,'Video_box_windows');
//  if(sysLang=='eng'){
//       getTextObject('Please position your face within the box that appears on your screen').alpha=0;//1;
// }
// else if(sysLang=='hin')
// {
//      getTextObject('\nकृपया अपना चेहरा अपनी स्क्रीन पर दिखाई देने वाले बॉक्स में रखें').alpha=1;
// }

}
    pri_canvas_height=height;
    pri_canvas_width=width;


    navigator.getUserMedia({
    video: {
        //mandatory: {
            minWidth: pri_video_width,
            minHeight: pri_video_height,
            minAspectRatio:1.33,
        //}
    },
    audio: true
    }, connectCallback.bind(this), errorCallback.bind(this));

}

function connectCallback(stream)
{
    /*if(sysLang=='hin'){
    play_video_consent_audio_hin();
}
else if(sysLang=='eng')
{
    play_video_consent_audio();
}
else if(sysLang=='ben')
{
    play_video_consent_audio_ben();
}
else if(sysLang=='pun')
{
    play_video_consent_audio_pun();
}*/
 // alert("hello");
    console.log(stream);
    videoStream = stream;


    if(video==null)
    {
        video = document.createElement('video');
        video.setAttribute("id", "vid1");
        video.playsInline = true;
        video.autoplay = true;
        video.muted = true;
        video.volume = 0.00000000001;

    }


    video.srcObject = stream;

    init_OnScreenFeed();
    // playAudio();

    //Added for Authentisure - Must remove for others
    //changeInstructions('face','Please ensure that your face is in the box till your face is detected');
}

function errorCallback(stream)
{
  console.log("Init Cam");

if(getTextObject(window.proposal_no)!=null)
{
     getTextObject(window.proposal_no).alpha=0;
}
if(getTextObject(window.solution_id)!=null)
{
    {
     getTextObject(window.solution_id).alpha=0;
}
}

  goToPage(2); //10

}

function init_OnScreenFeed()
{
//cameraAccessError();
    webcam_canvas = game.add.rexCanvas(prii_canvas_x, prii_canvas_y, pri_canvas_width, pri_canvas_height);
     webcam_canvas.fill("#FFFFFF");
     webcam_canvas.setDepth(3);

    console.log(webcam_canvas);

    context = webcam_canvas.getContext();
obj_list.push(webcam_canvas);
    video.play();


     if (videoStream)
    {
        //alert();
        console.log(videoStream);
        console.log(video);
context.translate(pri_canvas_width, 0);
context.scale(-1, 1);
        context.drawImage(video, 0, 0,pri_canvas_width, pri_canvas_height);
    }

    //else{goToPage(5);}

    // beginFaceDetect();
    //  recordBlinks();

}

//This is called in Update
function updateVideoFrame()
{
    if (videoStream)
    {
        context.drawImage(video, 0, 0,pri_canvas_width, pri_canvas_height);
    }
}

function stopCameraFeed()
{
    if (videoStream)
    {
        videoStream.getTracks().forEach(function (track) { track.stop(); });
        videoStream = null;
        console.log("Camera is stopped!");
    }
}

function createOverlayCanvas()
{

    overlay_canvas = game.add.rexCanvas(pri_canvas_x, pri_canvas_y, pri_canvas_width, pri_canvas_height);
    overlay_canvas.depth=2;
}


function createOverlayCanvas1()
{

  overlay_canvas = game.add.rexCanvas(prii_canvas_x, prii_canvas_y, pri_canvas_width, pri_canvas_height);
  overlay_canvas.depth=4;
}

function clearOverlayCanvas()
{
    overlay_canvas.alpha=0;
    // overlay_canvas.clear();
    overlay_canvas.destroy();
}

function miniCam(w,h,x_pos,y_pos)
{

  //webCamCreate();

    var width = w;
    var height = h;

    pri_canvas_height=height;
    pri_canvas_width=width;



    navigator.getUserMedia({
    video: {
        // mandatory: {
            minWidth: pri_canvas_width,
            minHeight: pri_canvas_height,
            maxAspectRatio:1,
         // }
    },
    audio: false
    }, function(stream){

        videoStream = stream;
        video.srcObject = stream;

        var x = x_pos;
        var y = y_pos;

        webcam_canvas = game.add.rexCanvas(x, y, width, height);
        webcam_canvas.fill("#FFFFFF");

        console.log(webcam_canvas);

        context = webcam_canvas.getContext();
        context.translate(pri_canvas_width, 0);
context.scale(-1, 1);
        video.play();

    }, errorCallback.bind(this));

}




function capturePhoto()
{
    console.log('CAMERA UTIL : Capture Photo');


    // var imgCanvas = document.createElement("canvas");
 //    imgCanvas.width = video.videoWidth;
 //    imgCanvas.height = video.videoHeight;
 //    imgCanvas.getContext('2d')

    //  .drawImage(video, 0, 0, imgCanvas.width, imgCanvas.height);



 //    return (imgCanvas.toDataURL('image/jpeg',0.80))? imgCanvas.toDataURL('image/jpeg',0.80) : null;
  var imgCanvas = document.createElement("canvas");
    imgCanvas.width = video.videoWidth;
    imgCanvas.height = video.videoHeight;
    var context=imgCanvas.getContext('2d');
    context.translate( imgCanvas.width , 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, imgCanvas.width, imgCanvas.height);

    return (imgCanvas.toDataURL('image/jpeg',0.95))? imgCanvas.toDataURL('image/jpeg',0.95) : null;
}

var speechEvents;
// var speakTriger;
// var speakTriger1;
// var speak_count=0;
function VideoRecord_Start()
{

   if(parseFloat(checkIOS()) > 14.5)
{
videoRecorder = RecordRTC(videoStream, {
mimeType: 'video/mp4',
type: 'video',
recorderType: MediaStreamRecorder,
});
}
else
{
    videoRecorder = RecordRTC(videoStream, {
        type: 'video'
    });
}
    videoRecorder.startRecording();
    videoRecorder.camera = videoStream;


 }


function VideoRecord_Stop() {

    blob = videoRecorder.stopRecording(
        async function() {
            var blob = videoRecorder.getBlob();
            // videoRecorder.camera.stop();

            console.log("camera utility is here", blob);
            var  trimmedVideo_1 = URL.createObjectURL(blob);
          console.log("old video", trimmedVideo_1)
            const startTime = 0; // Start time in seconds
            const endTime = 5; // End time in seconds
            const trimmedBlob = new Blob([blob.slice(startTime * 1000, endTime * 1000)], { type: 'video/webm' });
    console.log("trimed video",trimmedBlob)
          var  trimmedVideo = URL.createObjectURL(trimmedBlob);
console.log("new video",trimmedVideo )

            if (sysLang == 'eng') {

                // getTextObject(video_upload_text_eng).alpha = 1;
            } else if (sysLang == 'hin') {
                getTextObject(video_upload_text_eng).alpha = 1;
            }
            else if (sysLang == 'ben') {
                getTextObject(video_upload_text_ben).alpha = 1;
            }
            else if (sysLang == 'pun') {
                getTextObject(video_upload_text_pun).alpha = 1;
            }

            // console.log("Blob: ", blob);
            var speechVal = await call_ANDROID_VIDEO_SAVE_URL_API('consent', blob, 'consent', window.proposal_no, window.latitude_value, window.longitude_value, sysLang);


            if (sysLang == 'eng') {
                getTextObject(video_upload_text_eng).alpha = 0;
            }
            if (sysLang == 'hin') {
                getTextObject(video_upload_text_eng).alpha = 0;
            }
            if (sysLang == 'ben') {
                getTextObject(video_upload_text_ben).alpha = 0;
            }
            if (sysLang == 'pun') {
                getTextObject(video_upload_text_pun).alpha = 0;
            }

            
            // if(speechVal == "match failed")
            // {
            //     // initCamOnly();
            //      record_count.alpha = 0;
            //      count = 0;

            //      if(sysLang == 'eng')
            //      {
            //         getSpriteObject('record_eng').alpha = 1;
            //         record_count.setText('Recording Start');
            //      }
            //      if(sysLang == 'hin')
            //      {
            //         getSpriteObject('record_eng').alpha = 1;
            //         record_count.setText('Recording Start');
            //      }
            //      if(sysLang == 'ben')
            //      {
            //         getSpriteObject('record_ben').alpha = 1;
            //         record_count.setText('\nরেকর্ডিং শুরু\n');
            //      } 
            //      if(sysLang == 'pun')
            //      {
            //         getSpriteObject('record_pun').alpha = 1;
            //         record_count.setText('\nਰਿਕਾਰਡਿੰਗ ਸ਼ੁਰੂ\n');
            //      }
            //      getTextObject(speech_text).alpha = 1;
            // }
            else
            {
                videoRecorder.camera.stop();
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
                    
                }*/
                if (sysLang == "eng")
                    addTextToGame("Sentence you read:\n\n" + window.speech_words, 540, 250, fontFamilyLangArr[sysLang], "45px", "#1261a8", "center", 950, 0.5, 0, false);
                else if (sysLang == "hin")
                    addTextToGame("\nवाक्य आपने पढ़ा:\n\n" + window.speech_words, 440, 250, fontFamilyLangArr[sysLang], "45px", "#1261a8", "center", 950, 0.5, 0, false);

                getTextObject(text_set).alpha = 0;
                getTextObject(speech_text).alpha = 0;
                if(sysLang=='eng'){
                    getTextObject('Please Wait').alpha = 0;
                    record_count.setText('Recording Complete');
                }

                if(sysLang=='hin'){
                    getTextObject('Please Wait').alpha = 0;
                    record_count.setText('Recording Complete');
                }
                if(sysLang=='ben'){
                    getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 0;
                    record_count.setText('\nরেকর্ডিং সম্পূর্ণ\n');
                }
                if(sysLang=='pun'){
                    getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ\n').alpha = 0;
                    record_count.setText('\nਰਿਕਾਰਡਿੰਗ ਪੂਰੀ ਹੋਈ\n');
                }
                
                // await call_COMPLETE_STATUS_URL_API(window.proposal_no, 1);
                // if (sysLang == 'eng') {
                //     playAudio('tap_proceed');
                //     getSpriteObject("proceed_eng").alpha = 1;
                //     getTextObject(tap_on_pro_eng).alpha = 1;
                // } else if (sysLang == 'hin') {
                //     playAudio('proceed_hin');
                //     getSpriteObject("proceed_video_hin").alpha = 1;
                //     getTextObject(tap_on_pro_hin).alpha = 1;
                // }
                // else if (sysLang == 'ben') {
                //     playAudio('proceed_video_ben');
                //     getSpriteObject("proceed_ben").alpha = 1;
                //     getTextObject(tap_on_pro_ben).alpha = 1;
                // }
                // else if (sysLang == 'pun') {
                //     playAudio('proceed_video_pun');
                //     getSpriteObject("proceed_pun").alpha = 1;
                //     getTextObject(tap_on_pro_pun).alpha = 1;
                // }
            }
        });

}


function AudioRecord_Start()
{
    audioRecorder = RecordRTC(videoStream, {
        type: 'audio',
        mimeType: 'audio/wav',
        audio: true,
        recorderType: RecordRTC.StereoAudioRecorder
    });

    audioRecorder.startRecording();
    audioRecorder.camera = videoStream;
}

function AudioRecord_Stop()
{
    audioblob = audioRecorder.stopRecording(
        function(){
            audioblob = audioRecorder.getBlob();
            audioRecorder.camera.stop();
            console.log(audioblob);

            uploadConsentAudio(audioblob);
            //init_quantics(audioblob);
            //uploadConsentVideo(audioblob);
    });
}




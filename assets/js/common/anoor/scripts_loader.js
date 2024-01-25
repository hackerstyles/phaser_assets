var camera_utility_fpath = './assets/js/common/camera/camera_utility.js';
var faceApi_path = './assets/js/common/camera/faceapi/face-api.js';
var upload_path = './assets/js/common/uploads/uploads.js';
var api_helper_path = './assets/js/common/anoor/api_helper.js'
var fedo_path = './assets/js/common/plugins/fedo/fedo.js';
var gnani_path = './assets/js/common/plugins/gnani/gnani.js';
var quan_path = './assets/js/common/plugins/quan/quantics.js';
var webcam_path = '';
var video_path = './assets/js/common/camera/RecordRTC.js';
var screens_perDet = './assets/js/common/screens/personal_details.js'
var screens_polDet = './assets/js/common/screens/policy_details.js'
var screens_combo_PolDet = './assets/js/common/screens/policy_details_combo.js'
var screens_cusDet = './assets/js/common/screens/customer_consent.js'
var screens_riDet = './assets/js/common/screens/rider_details.js'
var eyeblink_path = './assets/js/common/blink/blink.js'
// var clmtracker='./assets/js/common/blink/js/clmtrackr.min.js';
var blink_model = './assets/js/common/blink/js/model/model_pca_20_svm.js';
var scroller_fpath = './assets/js/common/plugins/scroller/riderScroller.js'
var number_system_path =  './assets/js/common/currency/number_system.js'
var currency_path = './assets/js/common/currency/currency_json.js'
var alphanumeric_path = './assets/js/common/alphanumeric/alphanumeric_system.js'
var speech_detect_path = './assets/js/common/voice/hark.bundle.js'

function loadScripts() {
    console.log('Loading Scripts');
    $.getScript(camera_utility_fpath, function() {
        $.getScript(upload_path, function() {
            $.getScript(video_path, function() {
                $.getScript(screens_perDet, function() {
                    $.getScript(screens_polDet, function() {
                          $.getScript(screens_combo_PolDet, function() {
                        $.getScript(screens_cusDet, function() {
                            $.getScript(screens_riDet, function() {
                                    $.getScript(api_helper_path, function() {
                                        $.getScript(scroller_fpath, function() {
                                              $.getScript(number_system_path, function() {
                                                  console.log('number sysytem JS is Loaded');
                                                  $.getScript(currency_path, function() {
                                                      console.log('currency JS is Loaded');
                                                       $.getScript(alphanumeric_path, function() {
                                                      console.log('alphanumeric JS is Loaded');
                                                       $.getScript(speech_detect_path, function() {
                                                        console.log('Speech JS is Loaded');
                                            $.getScript(eyeblink_path, function() {
                                                console.log('blink JS is Loaded');
                                                // $.getScript(clmtracker,function(){
                                                // 	  console.log('clmtracker JS is Loaded');
                                                $.getScript(blink_model, function() {
                                                    console.log('blink_model JS is Loaded');
                                                    $.getScript(faceApi_path, function() {
                                                        console.log("FACE API LOADIng");
                                                        LoadFaceModels('./assets/js/common/camera/faceapi').then(() => {

                                                            console.log("FACE API Models LOADIng Complete");
                                                          //  langAssetsRest();

                                                             FACE_MODELS_LOADED = true;
                                                            return;
                                                        });
                                                    });
                                                      });
                                                    });
                                                });
                                            });
                                                   });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    // });
}

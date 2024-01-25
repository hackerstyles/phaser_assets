const BASE_PATH = 'https://dev.anurcloud.com/pnb-metlife-new/portal-withoutenc/api/'; //portal-new
 // const BASE_PATH = 'https://uat-online.pnbmetlife.com/pivc/portal/api/';
// const BASE_PATH = 'https://facenet.pnbmetlife.com/pivc/portal/api/';

//const pos_url = 'https://ebranchnxt.pnbmetlife.com/POS/Dashboard.aspx'; //Production
const pos_url =  'http://10.168.50.176/Dashboard.aspx';
const IMAGE_SAVE_URL_API = BASE_PATH + 'addImage';
const NORMAL_IMAGE_URL_API = BASE_PATH + 'addImage';
const AGREE_STATUS_URL_API = BASE_PATH + 'addUserAgree';
const ANDROID_VIDEO_SAVE_URL_API = BASE_PATH + 'speechToTextDemo';
const COMPLETE_STATUS_URL_API = BASE_PATH + 'updateCompletedStatusBuyOnline'; // 'updateCompletedStatus';
const SPEECH_TO_TEXT_API = BASE_PATH + 'speechToTextDemo'; // 'updateCompletedStatus';

//disagree status
const DISAGREE_STATUS_URL_API = BASE_PATH + 'disagreeScreen';


//for ios
const IOS_VIDEO_SAVE_URL_API = BASE_PATH + 'addiPhoneVideo';





const API_1 = '';

async function callAPI(api, data) {
    var result = await api_call(api, data);

    console.log('Returning Result ', result);

    return result;
}

function api_call(api, data) {
    return new Promise(function(resolve, reject) {


        var settings = {
            "async": true,
            "crossDomain": true,
            "url": api,
            "method": "POST",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "a6490f6b-13ac-3b94-1f10-e175a93d299a"
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": data
        }

        $.ajax(settings).done(function(response) {

            if (response != null) {
                var response_data = JSON.parse(response);

                console.log('API Response = ', response_data);

                resolve(response_data);
            } else {
                reject(null);
            }

        }).fail(function(response){
           // alert();
           goToPage(3);//error network screen
        });

    });
}

async function call_IMAGE_SAVE_URL_API(image, name, proposal, type, longitude, latitude, lang) {
    var form = new FormData();
    form.append("image", image);
    form.append("name", name);
    form.append("proposal", proposal);
    form.append("type", type);
    form.append("longitude", longitude);
    form.append("latitude", latitude);
     form.append("lang", lang);

    var result = await callAPI(IMAGE_SAVE_URL_API, form);

    if(sysLang == 'eng' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'hin' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'ben' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'pun' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else
    {
          window.result = "success";

    }
}

async function call_AGREE_STATUS_URL_API(proposal, choice, screen) {
    var form = new FormData();
    form.append("proposal", proposal);
    form.append("choice", choice);
    form.append("screen", screen);


    var result = await callAPI(AGREE_STATUS_URL_API, form);

}

//android video save
async function call_ANDROID_VIDEO_SAVE_URL_API(name, blob, type,proposal,latitude,longitude, speechLang) {
    var form = new FormData();
    form.append('name', 'consent');
    form.append('link_video', blob);
    form.append('type', 'consent');
    form.append('proposal', window.proposal_no);
    form.append('latitude', window.latitude_value);
    form.append('longitude', window.longitude_value);
    form.append('speechLang', speechLang);
    form.append('plan_type', 'ULIP'); 

    var result = await callAPI(ANDROID_VIDEO_SAVE_URL_API, form);

    if(sysLang == 'eng' && result.status=="Failed")
    {
        window.result = "failed";
      console.log("Uploading Failed"+sysLang);
      goToPage(4);

    }
    else if(sysLang == 'hin' && result.status=="Failed")
    {
        window.result = "failed";
      console.log("Uploading Failed"+sysLang);
      goToPage(4);

    }
    else if(sysLang == 'ben' && result.status=="Failed")
    {
        window.result = "failed";
      console.log("Uploading Failed"+sysLang);
      goToPage(4);

    }
    else if(sysLang == 'pun' && result.status=="Failed")
    {
        window.result = "failed";
      console.log("Uploading Failed"+sysLang);
      goToPage(4);

    }
    
    else
    {
        if (result.speech_res.match == true)
        {
            console.log("Uploading Success");
          window.result = "success";   
        }
        else{
            console.log("Uploading Success");
          window.result = "match failed";
        }
        window.speech_words = result.speech_res.stt;
    }
    return window.result;

}

//DISAGREE STATUS
async function call_DISAGREE_STATUS_URL_API(proposal, screen, disagree_select, disagree_text) {
    var form = new FormData();
    form.append("proposal_no", proposal);
    form.append("screen", screen);
    form.append("disagree_select", disagree_select);
    form.append("disagree_text", disagree_text);

    var result = await callAPI(DISAGREE_STATUS_URL_API, form);

    if(sysLang == 'eng' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'hin' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'ben' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else if(sysLang == 'pun' && result.status=="Failed")
    {
        window.result = "failed";
        // alert("Image uploading failed");
        goToPage(3);

    }
    else
    {
          window.result = "success";

    }
}



async function call_COMPLETE_STATUS_URL_API(proposal, completed_status) {
    var form = new FormData();
    form.append('proposal', window.proposal_no);
    form.append('completed_status', 1);

    var result = await callAPI(COMPLETE_STATUS_URL_API, form);

    console.log("complete status is ",result);

    if(result.status=="Failed")
    {
       //  window.completed_failed_api_status=true;
       // goToPage(11);

    }

}

async function call__NORMAL_IMAGE_SAVE_URL_API(image, name, proposal,type, latitude, longitude)
{
    var form = new FormData();
    form.append("image", image);
    form.append("name", name);
    form.append("proposal", proposal);
    form.append("type", type);
    form.append("latitude", latitude);
    form.append("longitude", longitude);

    var result = await callAPI(NORMAL_IMAGE_URL_API, form);

    return result;

}
async function photo_consent_image()
{
    var result = await call__NORMAL_IMAGE_SAVE_URL_API(capturePhoto(),'consent_photo',window.proposal_no,'consent',window.latitude_value,window.longitude_value);
}



async function photo_consent_image_2(base)
{
    var result = await call__NORMAL_IMAGE_SAVE_URL_API(base,'consent_photo',window.proposal_no,'consent',window.latitude_value,window.longitude_value);
    console.log('Photo result', result);
    if ((result.status == "Success") && (cur_scr == 0) && (result.url != ''))
    {
        window.videoImageURL = result.url;
    }

}

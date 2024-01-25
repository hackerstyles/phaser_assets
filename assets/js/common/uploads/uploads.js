
var scripts_path = './assets/scripts/';


function uploadPhoto(dataURL,filename)
{
	var api = scripts_path+'addImage.php';

	var form = new FormData();
	form.append("screen", filename);
	form.append("image", dataURL);

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": api,
	  "method": "POST",
	  "headers": {
		"cache-control": "no-cache",
		"postman-token": "a4641762-56c0-dd14-59e0-55289fdb8a40"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);

	  if(filename=='consentPhoto')
	  {
	  	getFaceScore('https://dev.anoorcloud.in/united-india/uploads/consentPhoto.jpeg','https://dev.anoorcloud.in/united-india/uploads/age_proof.jpeg','age');
	  	getFaceScore('https://dev.anoorcloud.in/united-india/uploads/consentPhoto.jpeg','https://dev.anoorcloud.in/united-india/uploads/address_proof.jpeg','address');



	  }
	  else if(filename == 'age_proof')
	  {
	  	cropFace('https://dev.anoorcloud.in/united-india/uploads/age_proof.jpeg','age');
	  }
	   else if(filename == 'address_proof')
	  {
	  	cropFace('https://dev.anoorcloud.in/united-india/uploads/address_proof.jpeg','address');
	  }

	});

}

function uploadConsentVideo(blob)
{
	console.log('Upload Consent Video = ',blob);

	var url = scripts_path+'addVideo.php';

	var fd = new FormData();
	fd.append('fname', 'consent.webm');
	fd.append('data', blob);

	$.ajax({
		type: 'POST',
		url: url,
		data: fd,
		processData: false,
		contentType: false
	}).done(function(data) {
		   console.log(data);
		   consent_video_uploaded = true;
	});
}

function uploadConsentAudio(blob)
{
	console.log('Upload Consent Audio = ',blob);

	var url = scripts_path+'addVideo.php';

	var fd = new FormData();
	fd.append('fname', 'recording.wav');
	fd.append('data', blob);

	$.ajax({
		type: 'POST',
		url: url,
		data: fd,
		processData: false,
		contentType: false
	}).done(function(data) {
		   console.log(data);
		   consent_audio_uploaded = true;
		   analyzeAudio_getStatusId();
	});
}

function getFaceScore(img1,img2,type)
{
	var api = 'https://uat.anoorcloud.in/node';

	var image_save_script_params = {
       	"policyno": "POL1234",
		"img1": img1,
		"img2": img2
    };

    var jq_image_save_data = $.post(api, image_save_script_params, function(data) { }, 'json');

    jq_image_save_data.done(function(data){
       console.log(JSON.stringify(data));
       if(data.success==true)
       {
		  console.log("CONF = ",data.confidence);

		  setFacialScore(data.confidence,type);
       }
	   else
	   {
	   		setFacialScore(0,type);
	   }

    });

}

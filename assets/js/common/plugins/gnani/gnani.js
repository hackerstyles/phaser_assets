
function analyzeAudio_getStatusId()
{
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://dev.anoorcloud.in/authentisure/assets/scripts/gnani.php",
	  "method": "POST",
	  "headers": {
		"cache-control": "no-cache",
		"postman-token": "428ab88d-e3d1-2971-825b-553169984073"
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);//{"requestid":"c5785d4b9ffa5439be3af683e6c4473f668d179753d6b761af925113c594f792_anoorcloud_20200824082905102650","status":"success"}

	  var data = JSON.parse(response);
	  
	  console.log('GNANI REQ ID = ',data.requestid);
	  
	  if(data.status=='success')
	  {
		  checkStatus_gnani(data.requestid);
	  }
	});
}

var gnani_status_interval;
var requestID;
function checkStatus_gnani(requestID_ip)
{
	requestID = requestID_ip;
	gnani_status_interval = setInterval(call_gnani_status_api,1000);
}

function call_gnani_status_api()
{
	var form = new FormData();
	form.append("requestid", requestID);

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://dev.anoorcloud.in/authentisure/assets/scripts/gnani_status.php",
	  "method": "POST",
	  "headers": {
		"cache-control": "no-cache",
		"postman-token": "91f4dcb6-14bc-e03f-86ca-38418e56e8cc"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	  
	  var response_json = JSON.parse(response);
	  
	  if(response_json.status=='in-progress')
	  {
		  //Do Nothing
	  }
	  else if(response_json.status=='success')
	  {
		  clearInterval(gnani_status_interval);
		  
		  setTranscribedText(response_json.total_transcript);
		  gnani_transcription_complete = true;
	  }
	  
	});
}
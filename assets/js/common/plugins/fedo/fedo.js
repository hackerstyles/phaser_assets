var fedo_api  = 'https://fedo-uw-prod.azurewebsites.net/image_processing';
var consentPhoto='https://dev.anoorcloud.in/authentisure/uploads/consentPhoto.jpeg';

function analyzeFace()
{
	console.log('FEDO START');
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://dev.anoorcloud.in/authentisure/assets/scripts/fedo.php",
	  "method": "GET",
	  "headers": {
		"cache-control": "no-cache",
		"postman-token": "31b83d75-d42b-2d8d-9d1f-168100f82e6f"
	  }
	}

	//{"error":0,"message":"success","bmi":22.518107086999997,"body_fat":19.952728504399996,"smoker":1,"sleep_hours":6}
	$.ajax(settings).done(function (response) {
	  console.log(response);
	  
	  response = JSON.parse(response);
	  if(response.error==0)
	  {
		  console.log("BMI = ",response.bmi);
		  setFacialAnalytics(response.bmi,response.body_fat,response.smoker,response.sleep_hours);
	  }
	  else if(response.error==1)
	  {
		  setFacialAnalytics('fail','fail','fail','fail');
	  }
	  
	  //After Facial Analysis is Done
	  //goToPage(5);
	  facial_markers_complete = true;
	  console.log('FEDO - ANALYSIS DONE');
	});
}
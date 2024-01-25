const session_url = 'https://dev.kwantics.ai/speech_v1.1/session/session.php/';
const upload_url = 'https://dev.kwantics.ai/speech_v1.1/upload-audio/upload-audio.php/';
const check_status_url = 'https://dev.kwantics.ai/speech_v1.1/session/checkStatus.php';
const get_transcript_url ='https://dev.kwantics.ai/speech_v1.1/trascription/trascription.php';
const save_transcription_url='https://dev.anoorcloud.in/tata_aia/file.php';

const kwantics_api_token = '55e96019521ca9269bfabb552c9b98b85f31a7b501a248f1a59d80ec369f5b15';

const anoor_uuid = 'AnoorConsulting5eff089eb1f6c6';

var audioFile=null;

var transcribedText = '';

function init_quantics(blob)
{
	console.log('S2T: Beginning ');
	
	audioFile = new File([blob], "audiofile.wav", { type: "audio/wav", lastModified: Date.now() });
	
	console.log('S2T FILE : ',audioFile);
	
	getAppSessionId();
	//saveTranscribedText(transcribedText);
}

function getAppSessionId()
{
						
	$.ajax({
		url: session_url,
		type: 'post',
		data: "uuid=" + encodeURIComponent(anoor_uuid),
		headers: {'Content-Type': 'application/x-www-form-urlencoded','Kwantics-API-Token':'55e96019521ca9269bfabb552c9b98b85f31a7b501a248f1a59d80ec369f5b15'},		
		processData: false,
		success: function(response) {
									
		console.log('S2T GET APP SESSION : ',response);		
		
		if(response!=null)
		{
			if(response.status=='success')
			{
				var appSessionId=response.appSessionId;
				
				console.log('S2T App Session ID  : ',appSessionId);
				
				uploadAudio(appSessionId);
			}
			else
			{
				transcribedText = 'Unable to Transcribe Text - Get Session Response is Not Success';
				saveTranscribedText(transcribedText);
			}
		}
		else
		{
				transcribedText = 'Unable to Transcribe Text - Get Session Response is Null';
				saveTranscribedText(transcribedText);
		}				
							
	}});	
	
	
}

function uploadAudio(appSessionId)
{
	var languageCode = 'HI';
	var audioIndex = '1';
	var isLast = '1';
	var transcribe = '6';
	
	var fd = new FormData();  
			
	fd.append('languageCode', languageCode); 			
	fd.append('audioIndex',audioIndex); 	
	fd.append('isLast',isLast); 	
	fd.append('transcribe',transcribe); 	
	fd.append('appSessionId',appSessionId); 	
	fd.append('audioFile',audioFile); 	
						
	$.ajax({
		url: upload_url,
		type: 'post',
		data: fd,
		headers: {'Kwantics-API-Token':'55e96019521ca9269bfabb552c9b98b85f31a7b501a248f1a59d80ec369f5b15'},	
		contentType: false,
		processData: false,
		success: function(response) {
									
			console.log(response);	
			
			if(response!=null)
			{
				if(response.status=='success')
				{
					var appSessionId=response.sessionId;
					checkStatus(appSessionId);
				}
				else
				{
					transcribedText = 'Unable to Transcribe Text - Upload Audio Response is Not Success';
					saveTranscribedText(transcribedText);
				}	
			}
			else
			{
				transcribedText = 'Unable to Transcribe Text - Upload Audio Response is Null';
				saveTranscribedText(transcribedText);
			}	
			
							
	}});
	
}

function checkStatus(appSessionId)
{
	//var fd = new FormData();  
			
	//fd.append('appSessionId',appSessionId); 	
						
	$.ajax({
		url: check_status_url,
		type: 'get',
		data: "appSessionId=" + appSessionId,
		headers: {'Kwantics-API-Token':'55e96019521ca9269bfabb552c9b98b85f31a7b501a248f1a59d80ec369f5b15'},	
		contentType: false,
		processData: false,
		success: function(response) {
									
			console.log(response);	
			
			if(response!=null)
			{
				if(response.status=='success')
				{
					var appSessionId=response.appSessionId;
					
					var sessionStatus = response.sessionStatus;
					
					//Wait 1, 11, 12, 21
					//Failed 15, 25
					//Success 22
					
					if(sessionStatus=='1' || sessionStatus=='11' || sessionStatus=='12' || sessionStatus=='21')
					{
						setTimeout(function() {
							checkStatus(appSessionId);
						},3000);
					}
					else if (sessionStatus=='15' || sessionStatus=='25')
					{
						transcribedText = 'Unable to Transcribe Text - File Upload Failed / Transcription Failed';
						saveTranscribedText(transcribedText);
					}
					else if(sessionStatus=='22')
					{
						//Get Transciption
						console.log('S2T Transcription Complete');
						getTranscript(appSessionId);
					}
				}
				else
				{
					transcribedText = 'Unable to Transcribe Text - Check Status response is not success';
					saveTranscribedText(transcribedText);
				}	 
			}
			else
			{
				transcribedText = 'Unable to Transcribe Text - Check Status Response is null';
				saveTranscribedText(transcribedText);
			}	
			
							
	}});
}


function getTranscript(appSessionId)
{
	$.ajax({
		url: get_transcript_url,
		type: 'get',
		data: "appSessionId=" + appSessionId,
		headers: {'Kwantics-API-Token':'55e96019521ca9269bfabb552c9b98b85f31a7b501a248f1a59d80ec369f5b15'},	
		contentType: false,
		processData: false,
		success: function(response) {
									
			console.log(response);	
			
			
			if(response!=null)
			{
				if(response.status=='success')
				{							
					if(response.files[0]!=null)
					{
						if(response.files[0].transcription!=null)
						{
							transcribedText = '';
							
							for(var i=0;i<response.files[0].transcription.length;i++)
							{
								if(response.files[0].transcription[i].sentence!=null)
								{
									transcribedText = transcribedText + ' ' + response.files[0].transcription[i].sentence;
								}
							}
							
							saveTranscribedText(transcribedText);
							
						}
						else
						{
							transcribedText = 'Unable to Transcribe Text - Transcription is null';
							saveTranscribedText(transcribedText);
						}
					}
					else
					{
						transcribedText = 'Unable to Transcribe Text - File is Null';
						saveTranscribedText(transcribedText);
					}
				}
				else
				{
					transcribedText = 'Unable to Transcribe Text - Get Transcript Status is Not Success';
					saveTranscribedText(transcribedText);
				}	 
			}
			else
			{
				transcribedText = 'Unable to Transcribe Text - Get Transcript Response is Null';
				saveTranscribedText(transcribedText);
			}	
			
							
	}});
}




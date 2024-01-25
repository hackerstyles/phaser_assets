const perDet_SCREENSHOT_NAME = 'personal_details_ss';
const perDet_NEXT_SCREEN = 5;
const perDet_NEXT_SCREEN1 = 13;

// const disAgree_status_SCREEN = 14;

//window.proposal_no='555011';
var count = 0;
var isFaceDetected = false;


//ENGLISH
function trytail_eng_yes()
{
	if(sysLang=='eng')
	if(getSpriteObject('tick1').alpha == 1)
	{
		next_perDet('y','personal_details');
		getTextObject('Please Wait').alpha = 1;
			console.log('yes inside');
	}
	else
	{
		console.log("y no called");
	}
}

function trytail_eng_no()
{


	if(sysLang=='eng')
	if(getSpriteObject('tick1').alpha == 1)
	{
		window.recallstate="true";
		console.log("failed to TICK");
		next_perDet('n','personal_details');
		getTextObject('Please Wait').alpha = 1;
			console.log('no inside');
	}
	else
	{
		console.log("n no called");
	}
}

//HINDI
function trytail_hin_yes()
{
	if(sysLang=='hin')
	if(getSpriteObject('tick1').alpha == 1)
	{

		next_perDet('y','personal_details');
			getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			console.log('yes inside');
	}
	else
	{
		console.log("y no called hin");
	}
}

function trytail_hin_no()
{

	if(sysLang=='hin')
	if(getSpriteObject('tick1').alpha == 1)
	{
		window.recallstate="true";
		next_perDet('n','personal_details');
		getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			console.log('no inside');
	}
	else
	{
		console.log("n no called hin");
	}
}

//BENGALI
function trytail_ben_yes()
{
	if(sysLang=='ben')
	if(getSpriteObject('tick1').alpha == 1)
	{
		next_perDet('y','personal_details');
		getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
			console.log('yes inside');
	}
	else
	{
		console.log("y no called");
	}
}
function trytail_ben_no()
{
	// window.recallstate="true";
	if(sysLang=='ben')
	if(getSpriteObject('tick1').alpha == 1)
	{
		window.recallstate="true";
		next_perDet('n','personal_details');
		getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
			console.log('no inside');
	}
	else
	{
		console.log("n no called");
	}
}

//PUNJABI
function trytail_pun_yes()
{
	if(sysLang=='pun')
	if(getSpriteObject('tick1').alpha == 1)
	{

		next_perDet('y','personal_details');
		getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha = 1;
			console.log('yes inside');
	}
	else
	{
		console.log("y no called pun");
	}
}

function trytail_pun_no()
{
	window.recallstate="true";
	if(sysLang=='pun')
	if(getSpriteObject('tick1').alpha == 1)
	{
		window.recallstate="true";
		next_perDet('n','personal_details');
		getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha = 1;
			console.log('no inside');
	}
	else
	{
		console.log("n no called pun");
	}
}

async function screenshot_perDet() {
    //getScreenImgDataURL
    var result = await call_IMAGE_SAVE_URL_API(getScreenImgDataURL(), perDet_SCREENSHOT_NAME, window.proposal_no, 'screenshot', window.latitude_value, window.longitude_value, window.sysLang);
    // console.log(status);
}
async function next_perDet(choice1, screen_name) {

// var status = validate_perDet();

	console.log("PERSONAL DETAILS " + choice1 + " " + isFaceDetected);
console.log('stopfaceDetect_eng' + status);


	if (sysLang == 'eng') {
		count++;
		// stopfaceDetect();
		console.log('stopfaceDetect_eng' + status);
		if ((choice1 == 'y') && (combo == 0)) {
			// isFaceDetected=true;

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 0))
		// && (pos==0))
		{
			// getTextObject('Please Wait').alpha = 1;
			// console.log('no inside');

			if (count == 1) {
				drop_land=4;
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
		else if ((choice1 == 'y') && (combo == 1)) {
			// getTextObject('Please Wait').alpha = 1;
			// console.log('yes inside');
			console.log('combo' + " " + combo);
			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(perDet_NEXT_SCREEN1);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 1)) {
			// getTextObject('Please Wait').alpha = 1;
			// console.log('no inside');
			console.log('combo' + " " + combo);
			if (count == 1) {
             drop_land=4;
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);

				count = 0;
			}
		}
	}
	else if (sysLang == 'hin') {
		// isFaceDetected=true;
		count++;
		console.log('stopfaceDetect_hin' + status);
		if ((choice1 == 'y') && (combo == 0))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 0))
		// && (pos==0))
		{
			getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
		else if ((choice1 == 'y') && (combo == 1))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN1);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 1))
		// && (pos==0))
		{
			getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
	} 
	else if (sysLang == 'ben') {
		// isFaceDetected=true;
		count++;
		console.log('stopfaceDetect_ben' + status);
		if ((choice1 == 'y') && (combo == 0))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 0))
		// && (pos==0))
		{
			getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
		else if ((choice1 == 'y') && (combo == 1))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN1);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 1))
		// && (pos==0))
		{
			getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
	}
	else if (sysLang == 'pun') {
		// isFaceDetected=true;
		count++;
		console.log('stopfaceDetect_pun' + status);
		if ((choice1 == 'y') && (combo == 0))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 0))
		// && (pos==0))
		{
			getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
		else if ((choice1 == 'y') && (combo == 1))  {
			// getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha = 1;
			// console.log('yes inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'agreed', screen_name);
				goToPage(perDet_NEXT_SCREEN1);
				count = 0;
			}
		} else if ((choice1 == 'n') && (combo == 1))
		// && (pos==0))
		{
			getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha = 1;
			console.log('no inside');

			if (count == 1) {
				var result = await screenshot_perDet();
				var result1 = await userAgree_perDet(window.proposal_no, 'disagreed', screen_name);
				goToPage(14);
				count = 0;
			}
		}
	}

}
async function userAgree_perDet(proposal, choice, screen) {
    //getScreenImgDataURL
    //var result = await call_AGREE_STATUS_URL_API(window.proposal_no,'agreed','personal_ss');
    var result = await call_AGREE_STATUS_URL_API(proposal, choice, screen);
}
// async function next_perDet()
// {
//   var status = validate_perDet();
//   if(status)
//   {
//     var result = await userAgree_perDet();
//     goToPage(perDet_NEXT_SCREEN);
//   }

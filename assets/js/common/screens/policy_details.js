

const polDet_SCREENSHOT_NAME = 'policy_details_ss';
var polDet_NEXT_SCREEN;


var agree_count =0;
var image_count =0;
// window.proposal_no='555011';



async function screenshot_polDet()
{

  //getScreenImgDataURL

  var result = await call_IMAGE_SAVE_URL_API(getScreenImgDataURL(),polDet_SCREENSHOT_NAME,window.proposal_no,'screenshot',window.latitude_value,window.longitude_value,window.sysLang);

}

async function next_polDet_policy(choice1,screen_name)
{
image_count++;

 // var status = validate_perDet();
if((sysLang=='eng') && (cur_scr==5))
{
  if(image_count==1){
getTextObject('Please Wait').alpha=1;

    // var result = await screenshot_polDet();
  }

   if(choice1=='y')
    {
 agree_count++;

       if (window.params.rider_details != null && window.params.rider_details != "null") {

    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1){
console.log('yes inside');
var result = await screenshot_polDet();
		var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(6);
           image_count=0;
           agree_count=0;

}
}
    else if(agree_count==1){
      console.log('yes inside1');
 var result = await screenshot_polDet();
		var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
         image_count=0;
           agree_count=0;

  }
}
  else if(agree_count==1){
    var result = await screenshot_polDet();
	  var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
            //goToPage(7);
             image_count=0;
           agree_count=0;
    }
  }
    else if(choice1=='n')
    {
      image_count++;
  agree_count++;
       getTextObject('Please Wait').alpha=1;
      console.log('no inside');

        if (window.params.rider_details != null && window.params.rider_details != "null") {
    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1)
      {

var result = await screenshot_polDet();

		var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(14);
            image_count=0;
           agree_count=0;
    }
}
    else  if(agree_count==1){

var result = await screenshot_polDet();

		var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        //polDet_NEXT_SCREEN = 7;
        goToPage(14);
         image_count=0;
           agree_count=0;
    }
  }
  else  if(agree_count==1){
    var result = await screenshot_polDet();
	  var result1=await  userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(14);
         image_count=0;
           agree_count=0;
  }

        //goToPage(7);
    }
}
    // goToPage(perDet_NEXT_SCREEN);


//HINDI

if((sysLang=='hin') && (cur_scr==5))
{
  if(image_count==1){
getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha=1;

    // var result = await screenshot_polDet();
}
   if(choice1=='y')
    {

agree_count++;
       if (window.params.rider_details != null && window.params.rider_details != "null") {

    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1){
        var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(6);
           image_count=0;
           agree_count=0;
    }
}
    else if(agree_count==1){
      var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
image_count=0;
           agree_count=0;
    }
  }
  else if(agree_count==1){
    var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
        image_count=0;
           agree_count=0;
  }
}
            //goToPage(7);
    else if(choice1=='n')
    {
       image_count++;
  agree_count++;
       getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha=1;
      console.log('no inside');

        if (window.params.rider_details != null && window.params.rider_details != "null") {
    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1){
         var result = await screenshot_polDet();
    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(14);
           image_count=0;
           agree_count=0;
    }

    else if(agree_count==1){
      var result = await screenshot_polDet();
    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        //polDet_NEXT_SCREEN = 7;
        goToPage(14);
        image_count=0;
           agree_count=0;
    }
  }
  else if(agree_count==1){
    var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(14);
        image_count=0;
           agree_count=0;
  }

        //goToPage(7);
    }
}
}

//BENGALI
if((sysLang=='ben') && (cur_scr==5))
{
  if(image_count==1){
getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha=1;

    // var result = await screenshot_polDet();
}
   if(choice1=='y')
    {

agree_count++;
       if (window.params.rider_details != null && window.params.rider_details != "null") {

    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1){
        var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(6);
           image_count=0;
           agree_count=0;
    }
}
    else if(agree_count==1){
      var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
image_count=0;
           agree_count=0;
    }
  }
  else if(agree_count==1){
    var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(7);
        image_count=0;
           agree_count=0;
  }
}
            //goToPage(7);
    else if(choice1=='n')
    {
       image_count++;
  agree_count++;
       getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha=1;
      console.log('no inside');

        if (window.params.rider_details != null && window.params.rider_details != "null") {
    if(Object.keys(window.params.rider_details).length >0)
    {
      if(agree_count==1){
         var result = await screenshot_polDet();
    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
           //polDet_NEXT_SCREEN = 6;
           goToPage(14);
           image_count=0;
           agree_count=0;
    }

    else if(agree_count==1){
      var result = await screenshot_polDet();
    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        //polDet_NEXT_SCREEN = 7;
        goToPage(14);
        image_count=0;
           agree_count=0;
    }
  }
  else if(agree_count==1){
    var result = await screenshot_polDet();
    var result1=await  userAgree_polDet(window.proposal_no,'disagreed',screen_name);
        // polDet_NEXT_SCREEN = 7;
        goToPage(14);
        image_count=0;
           agree_count=0;
  }

        //goToPage(7);
    }
}
}



//Punjabi
    if((sysLang=='pun') && (cur_scr==5))
    {
      if(image_count==1)
      {
        getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha=1;

        // var result = await screenshot_polDet();
      }
      if(choice1=='y')
      {

        agree_count++;
        if (window.params.rider_details != null && window.params.rider_details != "null") 
        {

            if(Object.keys(window.params.rider_details).length >0)
            {
                if(agree_count==1)
                {
                    var result = await screenshot_polDet();
                    var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
                   //polDet_NEXT_SCREEN = 6;
                   goToPage(6);
                   image_count=0;
                   agree_count=0;
                }
            }
            else if(agree_count==1)
            {
                var result = await screenshot_polDet();
                var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
                // polDet_NEXT_SCREEN = 7;
                goToPage(7);
                image_count=0;
                agree_count=0;
            }
        }
        else if(agree_count==1)
        {
            var result = await screenshot_polDet();
            var result1=await  userAgree_polDet(window.proposal_no,'agreed',screen_name);
            // polDet_NEXT_SCREEN = 7;
            goToPage(7);
            image_count=0;
            agree_count=0;
        }
    }
    //goToPage(7);
    else if(choice1=='n')
    {
       image_count++;
       agree_count++;
       getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha=1;
       console.log('no inside');

       if (window.params.rider_details != null && window.params.rider_details != "null") 
       {
            if(Object.keys(window.params.rider_details).length >0)
            {
                if(agree_count==1)
                {
                    var result = await screenshot_polDet();
                    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
                    //polDet_NEXT_SCREEN = 6;
                    goToPage(14);
                    image_count=0;
                    agree_count=0;
                }
                else if(agree_count==1)
                {
                    var result = await screenshot_polDet();
                    var result1=await userAgree_polDet(window.proposal_no,'disagreed',screen_name);
                    //polDet_NEXT_SCREEN = 7;
                    goToPage(14);
                    image_count=0;
                    agree_count=0;
                }
            }
            else if(agree_count==1)
            {
                var result = await screenshot_polDet();
                var result1=await  userAgree_polDet(window.proposal_no,'disagreed',screen_name);
                // polDet_NEXT_SCREEN = 7;
                goToPage(14);
                image_count=0;
                agree_count=0;
            }

            //goToPage(7);
        }
    }
}


}
async function userAgree_polDet(proposal, choice, screen)
{
  //var result = await call_AGREE_STATUS_URL_API(window.proposal_no,'agreed','personal_ss');
  var result = await call_AGREE_STATUS_URL_API(proposal, choice, screen);

}







const cusDet_SCREENSHOT_NAME = 'terms_and_conditions_1_ss';
var cusDet_NEXT_SCREEN = 8;

// window.proposal_no='555011';

var count=0;

async function screenshot_cusDet()
{
  //getScreenImgDataURL

  var result = await call_IMAGE_SAVE_URL_API(getScreenImgDataURL(),cusDet_SCREENSHOT_NAME,window.proposal_no,'screenshot',window.latitude_value,window.longitude_value,window.sysLang);

}

async function next_cusDet(choice1,screen_name)
{

 // var status = validate_perDet();
if(sysLang=='eng')
{
  count++;
 getTextObject('Please Wait').alpha=1;
   // var result = await screenshot_cusDet();

   if(choice1=='y')
    {

      console.log('yes inside');

 if(count==1){
  var result = await screenshot_cusDet();
        var result1=await  userAgree_cusDet(window.proposal_no,'agreed',screen_name);
            goToPage(cusDet_NEXT_SCREEN);
            count=0;
    }
}
    else if(choice1=='n')
    {
       getTextObject('Please Wait').alpha=1;
      console.log('no inside');

 if(count==1){
var result = await screenshot_cusDet();
       var result1=await userAgree_cusDet(window.proposal_no,'disagreed',screen_name);
        goToPage(14);
        count=0;
    }

}
}
    // goToPage(perDet_NEXT_SCREEN);
if(sysLang=='hin')
{
   count++;
 getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha=1;
    // var result = await screenshot_cusDet();

   if(choice1=='y')
    {

      console.log('yes inside');

  if(count==1){
  var result = await screenshot_cusDet();
        var result1=await  userAgree_cusDet(window.proposal_no,'agreed',screen_name);
            goToPage(cusDet_NEXT_SCREEN);
             count=0;
    }
}
    else if(choice1=='n')
    {
       getTextObject('\nकृपया प्रतीक्षा कीजिये').alpha=1;
      console.log('no inside');

  if(count==1){
  var result = await screenshot_cusDet();
       var result1=await userAgree_cusDet(window.proposal_no,'disagreed',screen_name);
        goToPage(14);
         count=0;
    }
  }
}
//BENGALI
if(sysLang=='ben')
{
   count++;
 getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha=1;
    // var result = await screenshot_cusDet();

   if(choice1=='y')
    {

      console.log('yes inside');

  if(count==1){
  var result = await screenshot_cusDet();
        var result1=await  userAgree_cusDet(window.proposal_no,'agreed',screen_name);
            goToPage(cusDet_NEXT_SCREEN);
             count=0;
    }
}
    else if(choice1=='n')
    {
       getTextObject('\nঅনুগ্রহ করে অপেক্ষা করুন').alpha=1;
      console.log('no inside');

  if(count==1){
  var result = await screenshot_cusDet();
       var result1=await userAgree_cusDet(window.proposal_no,'disagreed',screen_name);
        goToPage(14);
         count=0;
    }
  }
}

    //Punjabi
    if(sysLang=='pun')
    {
        count++;
        getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha=1;
        // var result = await screenshot_cusDet();

        if(choice1=='y')
        {
            console.log('yes inside');

            if(count==1)
            {
                var result = await screenshot_cusDet();
                var result1=await  userAgree_cusDet(window.proposal_no,'agreed',screen_name);
                goToPage(cusDet_NEXT_SCREEN);
                count=0;
            }
        }
        else if(choice1=='n')
        {
            getTextObject('\nਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜਾਰ ਕਰੋ').alpha=1;
            console.log('no inside');

            if(count==1)
            {
                var result = await screenshot_cusDet();
                var result1=await userAgree_cusDet(window.proposal_no,'disagreed',screen_name);
                goToPage(14);
                count=0;
            }
        }
    }

}
async function userAgree_cusDet(proposal, choice, screen)
{
  //var result = await call_AGREE_STATUS_URL_API(window.proposal_no,'agreed','personal_ss');
  var result = await call_AGREE_STATUS_URL_API(proposal, choice, screen);

}





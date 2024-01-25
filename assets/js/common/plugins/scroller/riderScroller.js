var productList=new Array();
productList.push('./assets/images/common/product/1.jpeg');
productList.push('./assets/images/common/product/2.jpeg');
productList.push('./assets/images/common/product/3.jpeg');
productList.push('./assets/images/common/product/4.jpeg');

//Accident_Death_Benefit_Rider
//Accident_Diability_Benefit_Rider
//Critical_illness_Rider
//Serious_illness_rider


function addRidersScroller(x_pos,y_pos,width,height,COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_details)
{
var scroll_img = game.add.sprite(1030, 820, 'scroller_icon1');
                 scroll_img.setScale(0.8);
                  groupToTop(scroll_img,2);


	var scroller_panel = game.rexUI.add.scrollablePanel({

		x: x_pos,//540
        y: y_pos,//1000
        width: width,//950
        height: height,//1400

        scrollMode: 0,


        background: game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY),

		slider: {
            //track: game.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK), original
             track: game.rexUI.add.roundRectangle(0, 0, 20, 10, 13, COLOR_DARK),
            // thumb: game.rexUI.add.roundRectangle(0, 0, 0, 0, 8, COLOR_LIGHT),


            // thumb: game.rexUI.add.roundRectangle(0, 0, 0, 20, 35, COLOR_LIGHT), original
                   thumb:scroll_img,



            //thumb: display_product_image(1030,820,'scroll_thumb'),
        },

		panel: {
        child: createRidersPanel(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_details),
		},

		space: {
            left: -30,
            right: 8,
            top: 10,
            bottom: 10,

            panel: -50,
        }

	}).layout();

	obj_list.push(scroller_panel);

	return scroller_panel;
}

function createRidersPanel(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_details)
{

    console.log(Object.keys(window.params.rider_details).length);

	var sizer = game.rexUI.add.sizer({
        orientation: 'y',
        space: {
            left: -50,
            right: 40,
            top: 20,
            bottom: 20,
            item: 300 }
    });

    for(var i=0;i<Object.keys(window.params.rider_details).length;i++)
    {
      if(rider_details[i].rider_name=='PNB MetLife Serious Illness Rider')
      {
          if(sysLang=='eng')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Serious_illness_rider_eng',rider_details[i].rider_sum_assured));
          else if(sysLang=='hin')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Serious-Illness-Rider_hin',rider_details[i].rider_sum_assured));
          else if(sysLang=='ben')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Serious_illness_rider_bengali',rider_details[i].rider_sum_assured));
          else if(sysLang=='pun')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Serious_illness_rider_punjabi',rider_details[i].rider_sum_assured));  
      }
      else if(rider_details[i].rider_name=='PNB MetLife Accidental Death Benefit Rider Plus')
      {
        if(sysLang=='eng')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Death_Benefit_Rider_eng',rider_details[i].rider_sum_assured));
        if(sysLang=='hin')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accidental_Death_Benefit_Rider_hin',rider_details[i].rider_sum_assured));
        if(sysLang=='ben')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Death_Benefit_Rider_bengali',rider_details[i].rider_sum_assured));
        if(sysLang=='pun')
          sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Death_Benefit_Rider_punjabi',rider_details[i].rider_sum_assured));
      }
      else if(rider_details[i].rider_name=='PNB MetLife Accidental Disability Benefit Rider')
      {
        if(sysLang=='eng')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Diability_Benefit_Rider_eng',rider_details[i].rider_sum_assured));
        if(sysLang=='hin')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Disability-Benefit-Rider_hin',rider_details[i].rider_sum_assured));
        if(sysLang=='ben')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Diability_Benefit_Rider_bengali',rider_details[i].rider_sum_assured));
        if(sysLang=='pun')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Accident_Diability_Benefit_Rider_punjabi',rider_details[i].rider_sum_assured));
      }
      else if(rider_details[i].rider_name=='PNB MetLife Critical Illness Rider')
      {
        if(sysLang=='eng')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Critical_illness_Rider_eng',rider_details[i].rider_sum_assured));
        if(sysLang=='hin')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Critical-Illness-Rider_hin',rider_details[i].rider_sum_assured));
        if(sysLang=='ben')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Critical_illness_Rider_bengali',rider_details[i].rider_sum_assured));
        if(sysLang=='pun')
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,'Critical_illness_Rider_punjabi',rider_details[i].rider_sum_assured));
      }
    }
      sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));



    return sizer;
}

function createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_sprite,rider_value)
{
	var rider_image = game.add.sprite(0,0,rider_sprite);
    rider_image.setDepth(3);

    var rider_text=addTextToGame(rider_value, 0, 0, fontFamilyLangArr[sysLang], 30, "#FFFFFF", "center", 0, 0.5, 0, false);
    rider_text.setDepth(3);

  	var sizer = game.rexUI.add.sizer({
        orientation: 'y',
        space: { item: 0 }
    })
    .add(rider_image, { align: 'center',padding: {left: 30, right: 30, top: 30, bottom: 30} })

    if(sysLang=='eng'){
     sizer.add(rider_text, { align: 'center',padding: {left: 155, right: 30, top: -352, bottom: 0} })
    }
else if((sysLang=='hin') && (rider_sprite == 'Serious-Illness-Rider_hin')){
   sizer.add(rider_text, { align: 'center',padding: {left: 86, right: 30, top: -360, bottom: 0} })
}
else if((sysLang=='hin') && (rider_sprite == 'Critical-Illness-Rider_hin')){
   sizer.add(rider_text, { align: 'center',padding: {left: 86, right: 30, top: -360, bottom: 0} })
}
else if((sysLang=='hin') && (rider_sprite == 'Accidental_Death_Benefit_Rider_hin')){
   sizer.add(rider_text, { align: 'center',padding: {left: 86, right: 30, top: -351, bottom: 0} })
}
else if((sysLang=='hin') && (rider_sprite == 'Disability-Benefit-Rider_hin')){
   sizer.add(rider_text, { align: 'center',padding: {left: 86, right: 30, top: -353, bottom: 0} })
}
//BENGALI
else if((sysLang=='ben') && (rider_sprite == 'Serious_illness_rider_bengali')){
   sizer.add(rider_text, { align: 'center',padding: {left: 216, right: 30, top: -353, bottom: 0} })
}
else if((sysLang=='ben') && (rider_sprite == 'Critical_illness_Rider_bengali')){
   sizer.add(rider_text, { align: 'center',padding: {left: 216, right: 30, top: -355, bottom: 0} })
}
else if((sysLang=='ben') && (rider_sprite == 'Accident_Death_Benefit_Rider_bengali')){
   sizer.add(rider_text, { align: 'center',padding: {left: 216, right: 30, top: -353, bottom: 0} })
}
else if((sysLang=='ben') && (rider_sprite == 'Accident_Diability_Benefit_Rider_bengali')){
   sizer.add(rider_text, { align: 'center',padding: {left: 216, right: 30, top: -353, bottom: 0} })
}
//Punjabi
else if((sysLang=='pun') && (rider_sprite == 'Serious_illness_rider_punjabi')){
   sizer.add(rider_text, { align: 'center',padding: {left: 46, right: 30, top: -353, bottom: 0} })
}
else if((sysLang=='pun') && (rider_sprite == 'Critical_illness_Rider_punjabi')){
   sizer.add(rider_text, { align: 'center',padding: {left: 46, right: 30, top: -355, bottom: 0} })
}
else if((sysLang=='pun') && (rider_sprite == 'Accident_Death_Benefit_Rider_punjabi')){
   sizer.add(rider_text, { align: 'center',padding: {left: 46, right: 30, top: -353, bottom: 0} })
}
else if((sysLang=='pun') && (rider_sprite == 'Accident_Diability_Benefit_Rider_punjabi')){
   sizer.add(rider_text, { align: 'center',padding: {left: 46, right: 30, top: -353, bottom: 0} })
}
    return sizer;
}


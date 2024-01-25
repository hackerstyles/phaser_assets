// function ss(param)
// {
// var x;
// if(sysLang=="hin")
// {
// x=document.getElementById('record_image').src="assets/product_assets/active_assure_diamond/images/eng/btn.png";

// }
// else {
// x=document.getElementById('record_image').src="assets/images/common/record.jpg";

// }

// }

$(document).ready(function(){
    $("#loading_div").show();
    window.cur_url = window.location.href.trim();
   //window.cur_url = "https://dev.anoorcloud.in/pnb-metlife-new/welcome/index.html?NTU1MDAz";
   //  window.cur_url = "https://dev.anoorcloud.in/pnb-metlife-new/welcome/index.html?NjgyMjAyMTYz";

    window.kfd_api_url = 'https://dev.anurcloud.com/pnb-metlife-new/portal-withoutenc/'; //portal-new

// window.kfd_api_url = 'https://uat-online.pnbmetlife.com/pivc/portal/';
    // window.kfd_api_url = 'https://facenet.pnbmetlife.com/pivc/portal/';
 
    var searchValue=window.location.search;
    window.plan_type_id=searchValue.replace("?","");
    let kfd_validate_url_api = window.kfd_api_url+'api/validatePIVCLink';

  //  console.log('URL = ',window.location.search.substring(1));


    // window.geo_latitude = 0;
    // window.geo_longitude = 0;
    // window.geo_location = '';

    window.app_view = false;


    var scene1='./assets/js/common/scenes/start_scene.js';
    var scene2='./assets/js/common/scenes/second_scene.js';


    function load_game_js(slug)
    {
        //scripts_loader.js
        const scripts_loader_fpath =
            './assets/js/common/anoor/scripts_loader.js';

      //  alert(window.flow_slug);
        $.getScript("./assets/product_assets/" + window.flow_slug + "/js/flow_assets_init.js",  function(){
            // Load card workflow js
            $.getScript( "./assets/product_assets/" + window.flow_slug + "/js/flow_init.js",  function(){

                $.getScript(scene1,function(){
                  $.getScript(scene2,function(){
                    // $("#loading_div").hide();
                    $.getScript( "./assets/js/common/anoor/game.js?v=1", function(){
                        $.getScript(scripts_loader_fpath, function() {
                                    loadScripts();
                                    // checkIfFaceModelsLoaded();
                                });
                     } );
                  });
                });


            });
        });

        


        

    }


    function setInitProductParams() 
    {
        console.log("inside product_video");
        if (window.flow_slug == "product_video") {
            console.log("inside product_video after if");
            let pms = window.params;
            //let pms=window.params;


            window.rider_details = pms.rider_details;
            //  window.rider_name=window.rider_details.rider_name;
            //  window.params.proposal_no
            window.proposal_no = pms.proposal_no;
            window.product_name = pms.product_name;
            window.policy_insured_name = pms.policy_insured;
            window.policy_type = pms.policy_type;
            window.name = pms.name;
            window.occupation = pms.occupation;
            window.dob = pms.dob;
            window.nominee_name = pms.nominee;
            window.education = pms.education;
            window.address = pms.address;
            window.bi_value = pms.bi;
            window.mobile = pms.mobile;

            window.pincode = pms.pincode;
            window.gender = pms.gender;
            window.declare_income = pms.declare_income;

            if (pms.email == "" || pms.email == "null" || pms.email == "NULL") {
                window.email = "Not Provided";
            } else {
                window.email = (pms.email).toLowerCase();
            }
            window.changed_mobile = "";
            window.changed_email = "";

            window.sum_assured = pms.sum_assured;
            window.premium_amount = pms.premium_amount;
            window.payment_frequency = pms.payment_frequency;
            window.policy_term = pms.policy_term;
            window.premium_payment_term = pms.premium_payment_term;

            //Screen-12
            window.solution_id = pms.solution_id;
            window.combo_name = pms.combo_name;

            window.combo_product_name = pms.combo_product_name;

            window.combo_policy_type = pms.combo_policy_type;
            window.combo_sum_assured = pms.combo_sum_assured;
            window.combo_income_benefit = pms.combo_income_benefit;
            window.combo_maturity_benefit = pms.combo_maturity_benefit;
            window.combo_payment_frequency = pms.combo_payment_frequency;
            window.combo_policy_term = pms.combo_policy_term;
            window.combo_premium_payment_term = pms.combo_premium_payment_term;
            window.combo_premium_amount = pms.combo_premium_amount;
            window.income_benefit = pms.income_benefit;
            window.maturity_benefit = pms.maturity_benefit;

            window.combo = pms.combo;

            window.pos = pms.pos;
            window.pos_type = pms.pos_type;

            window.currency = 'rupees';

        }
    }


  // window.product ="product_1";
  // window.product_slug = "product_1";
  // window.flow_slug = "product_1";
  // load_game_js("product_1");
  //
  //
    // $.post(kfd_validate_url_api, {'sbil_pivc_url':cur_url},function(data) {}, 'json').done(function(data) {
    //     if(data == 404)
    //     {
    //         window.product = "404";
    //      //   window.product_slug = GetFriendlyName(window.product);
    //       //  window.flow_slug = GetFriendlyName(window.product);
    //          window.product_slug = "404";
    //            window.flow_slug = "404";
    //         load_game_js("404");

    //     }
    //     else if(data.status)
    //     {
    //         console.log("enter : main");
    //         if(data.expired)
    //         {
    //             window.product = "expiry";
    //             window.product_slug = GetFriendlyName(window.product);
    //             window.flow_slug = GetFriendlyName(window.product);
    //             load_game_js(window.flow_slug);
    //         }
    //         else if(data.completed)
    //         {
    //          //  alert("completed true");
    //             window.product_slug = "completed";
    //            window.product_slug = "completed";
    //            window.flow_slug = "completed";
    //             load_game_js("completed");
    //         }
    //         else
    //         {
    //            // window.base_url = getBaseURL();
    //             window.product_slug = "product_video";
    //             window.flow_slug = "product_video";

    //             window.params = data.output;

    //             //Added by Kumaran
    //             setInitProductParams();
    //             load_game_js(window.flow_slug);
    //             //alert("sss");

    //         }
    //     }
    //     else
    //     {
    //         window.product = "404";
    //         window.product_slug = "404";
    //         window.flow_slug = "404";
    //         load_game_js("404");

    //     }
    // }).fail(function() {
    //             window.product = "404";
    //             window.product_slug = "404";
    //             window.flow_slug = "404";
    //             load_game_js("404");

    // });

//  window.base_url = getBaseURL();
                window.product_slug = "product_video";
                window.flow_slug = "product_video";

               
                //Added by Kumaran
                // setInitProductParams();
                load_game_js(window.flow_slug);
                //alert("sss");

            

});

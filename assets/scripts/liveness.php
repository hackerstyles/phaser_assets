<?php error_reporting(0);
$data=$_REQUEST['image'];
$proposal_no=$_REQUEST['proposal_no'];

if($data!='')
{
 $curl = curl_init();

 $myObj->image_base64 = $data;
 $myObj->proposal_no = $proposal_no;

 $myJSON = json_encode($myObj); 

curl_setopt_array($curl, array(
    // CURLOPT_URL => 'http://10.168.50.35:5000/', //UAT Server
  // CURLOPT_URL => 'http://10.168.2.226:5000/', //Production Server
CURLOPT_URL => 'http://65.1.226.48:5000/',  //Dev Server                              // CURLOPT_URL => 'http://65.1.226.48:5000/',
                                                                               // CURLOPT_URL => 'http://15.206.55.100:5001/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>$myJSON,
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
}
else {
  echo 'data missing';
}

?>

<?php




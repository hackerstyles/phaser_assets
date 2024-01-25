
<?php

// if (isset($_REQUEST['image']))
// {
//
//
// print_r($data);exit;
// // Instructions if $_POST['value'] exist
// }
// else{
//   echo 'hi';
// }

$data=$_REQUEST['dataURL'];


$data = (preg_replace('#^data:image/\w+;base64,#i', '', $data));

//print_r($data);

// file_put_contents('test.jpg',$data);
//
// $img=base64_decode(file_get_contents('test.jpg'));



$url = "http://34.93.59.173:5000/Parser";
$headers  = ['Content-Type: application/json'];
$post=array(
  "clientid"=> "bf5b1aed102d7cf52323891a8d3f88e9f168b29c",
      "userid"=>"Mithra",
      "token"=> "0dc9efd9da9930380155ad59a540a5f1a244cac2",
      "data"=>$data
);
$json=json_encode($post);
//print_r($post);exit;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,$json);  //Post Fields
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$result = curl_exec($ch);
echo $result;
?>

<?php 
session_start();

if(isset($_POST['active'])){
	require_once('config.php');

	$sql  = "SELECT id from played;";
	$stmt = connect()->prepare($sql);
	$stmt->execute();
	$totalRow = $stmt->rowCount();
	if($totalRow>0){
			echo json_encode(["status"=>true,'data'=>$totalRow, "message"=> "fetch data successfully!"]);
	}else{
			echo json_encode(["status"=>true,'data'=>0, "message"=> "fetch data successfully!"]);	
	}
	
	
}else{
	//header('location: http://localhost/learnjs/pigdice/');
	echo 'silence is golden!';
}
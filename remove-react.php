<?php 
session_start();

if(isset($_POST['active'])){
	require_once('config.php');
	if(isset($_SESSION['isReact'])){
			$sql  = "DELETE FROM reaction ORDER BY id DESC LIMIT 1";
			$stmt = connect()->prepare($sql);
			if($stmt->execute()){
					$_SESSION['isReact']= false;
					echo json_encode(["status"=>true,'session'=>$_SESSION['isReact'], "message"=> "Deleted Successfully"]);
	
			}
	}else{
		echo json_encode(["status"=>false, 'session'=>$_SESSION['isReact'],"message"=> "its fetch and added data successfully!"]);
	}
	

	
}else{
	//header('location: http://localhost/learnjs/pigdice/');
	echo 'silence is golden!';
}
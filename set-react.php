<?php 
session_start();
if(isset($_POST['active'])){
	if($_POST['active']){
		require_once('config.php');
		$sql  = "INSERT INTO reaction(react) VALUES('loved');";
		$stmt = connect()->prepare($sql);
		if($stmt->execute()){
			$sql  = "SELECT react from reaction WHERE react='loved';";
			$stmt = connect()->prepare($sql);
			$stmt->execute();
			$totalRow = $stmt->rowCount();
			if($totalRow>0){
				$_SESSION['isReact'] = true;
				echo json_encode(["status"=>true,'session'=>$_SESSION['isReact'], "message"=> "value grater then 0 successfully!"]);
			}else{
					$_SESSION['isReact'] = true;
					echo json_encode(["status"=>true,'session'=>$_SESSION['isReact'],"message"=> "from when only value 0 successfully!"]);	
			}	
		}
	}
}else{
	//header('location: http://localhost/learnjs/pigdice/');
	echo json_encode(["status"=>false, "message"=> "silence is golden!"]);
}
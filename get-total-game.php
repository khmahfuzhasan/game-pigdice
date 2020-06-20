<?php 
session_start();

if(isset($_POST['active'])){
	function connect(){
		try{
			//CREATE NEW PDO
			$pdo = NEW PDO("mysql:host=localhost;dbname=piggame;", "root",""); 
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			return $pdo;
		}catch(PDOException $e) {echo "Connection failed: " . $e->getMessage();}
	}

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
	header('location: http://localhost/learnjs/pigdice/');
}
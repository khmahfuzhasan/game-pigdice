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

	if(!isset($_SESSION['isReact'])){
			$sql  = "INSERT INTO reaction(react) VALUES('loved');";
			$stmt = connect()->prepare($sql);
			if($stmt->execute()){
				$sql  = "SELECT react from reaction WHERE react='loved';";
				$stmt = connect()->prepare($sql);
				$stmt->execute();
				$totalRow = $stmt->rowCount();
				if($totalRow>0){
					$_SESSION['isReact'] = true;
					echo json_encode(["status"=>true, "message"=> "value grater then 0 successfully!"]);
				}else{
						$_SESSION['isReact'] = true;
						echo json_encode(["status"=>true,"message"=> "from when only value 0 successfully!"]);	
				}	
			}
	}else{
		echo json_encode(["status"=>false, "message"=> "its fetch and added data successfully!"]);
	}
	

	
}else{
	header('location: http://localhost/learnjs/pigdice/');
}
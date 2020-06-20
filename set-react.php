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
					$_SESSION['totalReacts'] = $totalRow;
					echo json_encode(["status"=>true,'data'=>$totalRow, "message"=> "fetch and added data successfully!"]);
				}else{
					$_SESSION['isReact'] = true;
					$_SESSION['totalReacts'] = 0;
					echo json_encode(["status"=>true,'data'=>$totalRow, "message"=> "fetch and added data successfully!"]);	
				}
			}	
	}else{
		$sql  = "SELECT react from reaction WHERE react='loved';";
		$stmt = connect()->prepare($sql);
		$stmt->execute();
		$totalRow = $stmt->rowCount();
		if($totalRow>0){
			$_SESSION['isReact'] = true;
			$_SESSION['totalReacts'] = $totalRow;
			echo json_encode(["status"=>true,'data'=>$totalRow, "message"=> "fetch data successfully!"]);
		}else{
			$_SESSION['isReact'] = true;
			$_SESSION['totalReacts'] = 0;
			echo json_encode(["status"=>true,'data'=>$totalRow, "message"=> "fetch data successfully!"]);	
		}
	}
	
}else{
	header('location: http://localhost/learnjs/pigdice/');
}
<?php 
session_start();
if(isset($_POST['active'])){
	if($_POST['active']){
		function connect(){
			try{
				//CREATE NEW PDO
				$pdo = NEW PDO("mysql:host=localhost;dbname=piggame;", "root",""); 
				$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
				return $pdo;
			}catch(PDOException $e) {echo "Connection failed: " . $e->getMessage();}
		}
		$sql  = "SELECT * from reaction WHERE react='loved';";
		$stmt = connect()->prepare($sql);
		$stmt->execute();
		$totalRow = $stmt->rowCount();
		if($totalRow>0){
			if(isset($_SESSION['isReact'])){
				if($_SESSION['isReact']){
					echo json_encode(["status"=>true,'data'=>$totalRow,'session'=>true, "message"=> "get data successfully"]);
				}
			}else{
				echo json_encode(["status"=>true,'data'=>$totalRow,'session'=>false, "message"=> "get data successfully"]);
			}
			
		}else{
			if(isset($_SESSION['isReact'])){
				if($_SESSION['isReact']){
					echo json_encode(["status"=>true,'data'=>0,'session'=>true, "message"=> "get data successfully"]);
				}
			}else{
				echo json_encode(["status"=>true,'data'=>0,'session'=>false, "message"=> "get data successfully"]);
			}
		}	
	}
		
}else{
	header('location: http://localhost/learnjs/pigdice/');
}
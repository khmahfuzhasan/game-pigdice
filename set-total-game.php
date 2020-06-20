<?php 

if(isset($_POST['active'])){
	$playerOne = $_POST['player1'];
	$playerTwo = $_POST['player2'];
	$playerPoints = $_POST['pointsToltal'];
	function connect(){
		try{
			//CREATE NEW PDO
			$pdo = NEW PDO("mysql:host=localhost;dbname=piggame;", "root",""); 
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			return $pdo;
		}catch(PDOException $e) {echo "Connection failed: " . $e->getMessage();}
	}
	
	$sql  = "INSERT INTO played(playerOne,playerTwo,gamePoints) VALUES(?,?,?);";
			$stmt = connect()->prepare($sql);
			if($stmt->execute([$playerOne,$playerTwo,$playerPoints])){
					echo json_encode(["status"=>true,'data'=>[$playerOne,$playerTwo,$playerPoints], "message"=> "fetch and added data successfully!"]);
			}
				
	
	
}else{
	header('location: http://localhost/learnjs/pigdice/');
}
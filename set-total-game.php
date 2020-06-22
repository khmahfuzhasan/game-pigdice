<?php 
session_start();
if(isset($_POST['active'])){
	$playerOne = $_POST['player1'];
	$playerTwo = $_POST['player2'];
	$playerPoints = $_POST['pointsToltal'];
	$winnerPlayer = $_POST['winnerID'];
	require_once('config.php');
	
	$sql  = "INSERT INTO played(playerOne,playerTwo,gamePoints) VALUES(?,?,?);";
			$stmt = connect()->prepare($sql);
			if($stmt->execute([$playerOne,$playerTwo,$playerPoints])){
				if($winnerPlayer==0){
					$_SESSION['winning-score-0']++;
				}else{
					$_SESSION['winning-score-1']++;
				}
					echo json_encode(["status"=>true,'data'=>[$playerOne,$playerTwo,$playerPoints],'PlayersScore'=>[$_SESSION['winning-score-0'],$_SESSION['winning-score-1'],$winnerPlayer], "message"=> "fetch and added data successfully!"]);
			}
				
	
	
}else{
	//header('location: http://localhost/learnjs/pigdice/');
	echo 'silence is golden!';
}
<?php 

if(isset($_POST['firstPlayer']) && isset($_POST['secondPlayer']) && isset($_POST['gameScores'])){
	session_start();
	$_SESSION['player_one'] =$_POST['firstPlayer'];
	$_SESSION['player_two'] =$_POST['secondPlayer'];
	if($_POST['gameScores'] <= 50){
		$_SESSION['points'] = 50;
	}else{
		$_SESSION['points'] =$_POST['gameScores'];
	}
	
	echo json_encode(["player_one"=>$_POST['firstPlayer'],"player_two"=>$_POST['secondPlayer'],"points"=>$_SESSION['points'],'status'=>true]);

}

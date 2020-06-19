<?php 

if(isset($_POST['firstPlayer']) && isset($_POST['secondPlayer']) && isset($_POST['gameScores'])){
	session_start();
	if(empty($_POST['firstPlayer']) && empty($_POST['secondPlayer']) && empty($_POST['gameScores'])){
		$_SESSION['player_one'] = "Player 1";
		$_SESSION['player_two'] = "Player 2";
		$_SESSION['points'] = 50;
		echo json_encode(["player_one"=>$_SESSION['player_one'],"player_two"=>$_SESSION['player_two'],"points"=>$_SESSION['points'],'status'=>true,'isEmpty'=>true]);
	}else{
		if(!empty($_POST['firstPlayer'])){
		$_SESSION['player_one'] =$_POST['firstPlayer'];
			$isFirstEmpty = false;
		}else{
			$_SESSION['player_one'] = "Player 1";
			$isFirstEmpty = true;
		}

		if(!empty($_POST['secondPlayer'])){
			$isSecondEmpty = false;
			$_SESSION['player_two'] =$_POST['secondPlayer'];
		}else{
			$isSecondEmpty = true;
			$_SESSION['player_two'] = "Player 2";
		}

		if($_POST['gameScores'] < 50){
			$isSecondLess = true;
			$_SESSION['points'] = 50;
		}else{
			$isSecondLess = false;
			$_SESSION['points'] =$_POST['gameScores'];
		}

		echo json_encode(["player_one"=>$_SESSION['player_one'],"player_two"=>$_SESSION['player_two'],"points"=>$_SESSION['points'],'status'=>true,'isFirstEmpty'=>$isFirstEmpty,'isSecondEmpty'=>$isSecondEmpty,'isSecondLess'=>$isSecondLess]);
	}

}

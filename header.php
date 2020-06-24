<?php 
session_start();
// Player one
if(isset($_SESSION['player_one'])){
    $Player_one = $_SESSION['player_one'];
}else{
    $Player_one = "Player 1";
}

// Player two
if(isset($_SESSION['player_two'])){
    $Player_two = $_SESSION['player_two'];
}else{
    $Player_two = "Player 2";
}

// Ponts
if(isset($_SESSION['points'])){
    $points = $_SESSION['points'];
}else{
    $points = 100;
}

//Reacts
if(isset($_SESSION['isReact'])){
    $isReact = $_SESSION['isReact'];
}else{
    $isReact = false;
}
// Lavel
if(isset($_SESSION['lavel'])){
    $lavel =$_SESSION['lavel'];
}else{
    $lavel = 'standard'; 
}

//winning score for player 0
if(isset($_SESSION['winning-score-0'])){
    $winningScore0 = $_SESSION['winning-score-0'];
}else{
    $winningScore0 = $_SESSION['winning-score-0'] = 0;
}
//winning score for player 1
if(isset($_SESSION['winning-score-1'])){
    $winningScore1 = $_SESSION['winning-score-1'];
}else{
    $winningScore1 = $_SESSION['winning-score-1'] = 0;
}

 ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,600" rel="stylesheet" type="text/css">
        <link href="assets/css/ionicons.min.css" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" href="assets/css/style.css">
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/loved.png">
        <title>Pig Dice || Game</title>
        <link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet"> 
    </head>
<body>


   <div class="load-images"> <img src="assets/images/dice-1.png"><img src="assets/images/dice-2.png"><img src="assets/images/dice-3.png"><img src="assets/images/dice-4.png"><img src="assets/images/dice-5.png"><img src="assets/images/dice-6.png"></div>
<?php 
session_start();
//session_destroy();
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
        
        <title>Pig Game</title>
    </head>
<body>
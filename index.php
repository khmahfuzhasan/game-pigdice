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



 ?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,600" rel="stylesheet" type="text/css">
        <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" href="assets/css/style.css">
        
        <title>Pig Game</title>
    </head>

    <body>
        
        <audio id="startGame" src="assets/audio/initialize.mp3"></audio>
        <audio id="rollDice" src="assets/audio/initialize.mp3"></audio>
        <audio id="globalPoint" src="assets/audio/initialize.mp3"></audio>
        <audio id="lostPoint" src="assets/audio/initialize.mp3"></audio>
        <audio id="countGameAudio" src="assets/audio/initialize.mp3"></audio>
        <audio id="winner" src="assets/audio/initialize.mp3"></audio>
        <div class="count-reaction"></div>
        <div class="count-game"></div>
        <div class="wrapper clearfix">
            <div class="add-ballons"></div>
            <div class="gamespoints"><strong>Game Over:</strong> <?php echo $points ?></div>
            <div class="game-settings"> 
                <button class="btn-settings"><img src="assets/images/settings-outline.svg" alt=""></button>
                <div class="blurEffect"></div>
                <div class="setting-inputs">
                    <form>
                        <label for="firstPlayer">Player 1</label>
                        <input id="firstPlayer" type="text" value="<?php echo $Player_one; ?>">
                        <label for="secondPlayer">Player 2</label>
                        <input id="secondPlayer" type="text" value="<?php echo $Player_two; ?>">
                        <label for="gameScores">Game Points</label>
                        <input id="gameScores" type="number" value="<?php echo $points; ?>" min='50' title="Minimum Points 50">
                        <input id="settingUpdate" type="submit" value="Submit">
                    </form>
                </div>
            </div>

            <div class="player-0-panel active">
                <div class="winner-update" id="update-0"></div>
                <div class="player-name" id="name-0"><?php echo $Player_one; ?></div>
                <div class="player-score" id="score-0">0</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-0">0</div>
                </div>
            </div>
            
            <div class="player-1-panel">
                <div class="winner-update" id="update-1"></div>
                <div class="player-name" id="name-1"><?php echo $Player_two; ?></div>
                <div class="player-score" id="score-1">0</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-1">0</div>
                </div>
            </div>
            
            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
            
            <img src="assets/images/new-game.png" alt="Dice" class="dice">
        </div>
        
        <script src="assets/js/jquery.min.js"></script>
        <script src="app.js"></script>
    </body>
</html>
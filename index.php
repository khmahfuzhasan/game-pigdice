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
        <div class="wrapper clearfix">
            <div class="player-0-panel active">
                <div class="player-name" id="name-0">Player 1</div>
                <div class="player-score" id="score-0">43</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-0">11</div>
                </div>
            </div>
            
            <div class="player-1-panel">
                <div class="player-name" id="name-1">Player 2</div>
                <div class="player-score" id="score-1">72</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-1">0</div>
                </div>
            </div>
            
            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
            
            <img src="/assets/images/dice-5.png" alt="Dice" class="dice">
        </div>
        
        <script src="app.js"></script>
    </body>
</html>
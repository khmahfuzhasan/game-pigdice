<?php require_once('header.php'); ?>
<?php require_once('audio.php'); ?>

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
        <div id="player-0-winning-score" class="winning-score"><?php echo $winningScore0; ?></div>
        <div class="winner-update" id="update-0"></div>
        <div class="player-name" id="name-0"><?php echo $Player_one; ?></div>
        <div class="player-score" id="score-0">0</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-0">0</div>
        </div>
    </div>
    
    <div class="player-1-panel">
        <div id="player-1-winning-score" class="winning-score"><?php echo $winningScore1; ?></div>
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
        
<?php require_once('footer.php') ?>
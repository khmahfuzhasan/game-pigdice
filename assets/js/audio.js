// function audios
function startGameDice(){
	startGame.src='assets/audio/start-game.mp3';
	startGame.play();
}
function rollingDice(){
	rollDice.src='assets/audio/roll-dice-spin.mp3';
	rollDice.play();
}

function globalPointDice(){
	globalPoint.src='assets/audio/global-point.mp3';
	globalPoint.play();
}
function lostPointDice(){
	lostPoint.src='assets/audio/lost-hand.mp3';
	lostPoint.play();
}

function winnerDice(){
	rollDice.src='assets/audio/initialize.mp3';
	countGameAudio.src='assets/audio/initialize.mp3';
	winner.src='assets/audio/winner-2.mp3';
	setTimeout(()=>{
		winner.play();
	},150);
}
function countTotalGameAudio(){
	countGameAudio.src='assets/audio/kiss-me-close-you.mp3';
	countGameAudio.play();
}

function initAudio(){
	rollDice.src='assets/audio/initialize.mp3';
	globalPoint.src='assets/audio/initialize.mp3';
	lostPoint.src='assets/audio/initialize.mp3';
	countGameAudio.src='assets/audio/initialize.mp3';
	winner.src='assets/audio/initialize.mp3';
}

//Event Listener Of Count Game
countGame.addEventListener('click',()=>{
	countTotalGameAudio();
});

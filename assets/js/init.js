let score, roundScore, activePlayer,sameDice,diceCount,gamePlaying,setPoints,winnerID,lavel;
let diceDOM 	= document.querySelector('.dice');
let diceDOM2 	= document.querySelector('#dice2');
let btnRollDOM 	= document.querySelector('.btn-roll');
let btnHoldDOM 	= document.querySelector('.btn-hold');
let btnNewDOM 	= document.querySelector('.btn-new');
let blurEffect 		= document.querySelector('.blurEffect');
let settingInputs 	= document.querySelector('.setting-inputs');
let countReaction 	= document.querySelector('.count-reaction');
let winningScore0 	= document.querySelector('#player-0-winning-score');
let winningScore1 	= document.querySelector('#player-1-winning-score');
let countLavel 		= document.querySelector('.count-lavel');
let gameRole 		= document.querySelector('.game-role');
//settings info
let firstPlayer		= document.querySelector('#firstPlayer');
let secondPlayer	= document.querySelector('#secondPlayer');
let btnSettings		= document.querySelector('.btn-settings');
let settingUpdate	= document.querySelector('#settingUpdate');
let gameScores		= document.querySelector('#gameScores');
let addBallons 		= document.querySelector('.add-ballons');
let countGame 		= document.querySelector('.count-game');
let settinglavel 	= document.querySelector('#settinglavel');
	lavel 		= settinglavel.value.trim();
    setPoints 	= gameScores.value.trim();
    setPoints 	= 100;
	if(lavel ==='standard'){
		diceDOM2.style.display='none';
	}else{
		diceDOM2.style.display='block';
	}
//Audio Select

let startGame = document.getElementById('startGame');
let rollDice = document.getElementById('rollDice');
let globalPoint = document.getElementById('globalPoint');
let lostPoint = document.getElementById('lostPoint');
let countGameAudio = document.getElementById('countGameAudio');
let winner = document.getElementById('winner');



//initialize the application
function init(){
	initAudio();
	addBallons.innerHTML = "";
	gamePlaying		= true;
	score 			= [0,0];
	roundScore 		= 0;
	activePlayer 	= 0;
	sameDice 		= 0;
	diceCount 		=1;
	document.getElementById('score-0').textContent 	=0;
	document.getElementById('score-1').textContent 	=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;
	document.getElementById('update-0').textContent = "";
	document.getElementById('update-1').textContent = "";
	document.getElementById('name-0').classList.remove('activePoint');
	document.getElementById('name-1').classList.remove('activePoint');

}




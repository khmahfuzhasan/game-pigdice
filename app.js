let score, roundScore, activePlayer,sameDice,diceCount,gamePlaying;


let diceDOM 	= document.querySelector('.dice');
let btnRollDOM 	= document.querySelector('.btn-roll');
let btnHoldDOM 	= document.querySelector('.btn-hold');
let btnNewDOM 	= document.querySelector('.btn-new');

//Audio Select

let startGame = document.getElementById('startGame');
let rollDice = document.getElementById('rollDice');
let globalPoint = document.getElementById('globalPoint');
let lostPoint = document.getElementById('lostPoint');
let winner = document.getElementById('winner');

// initalization game
init();

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
	winner.src='assets/audio/winner.mp3';
	setTimeout(()=>{
		winner.play();
	},150);
}
function initAudio(){
	rollDice.src='assets/audio/initialize.mp3';
	globalPoint.src='assets/audio/initialize.mp3';
	lostPoint.src='assets/audio/initialize.mp3';
	winner.src='assets/audio/initialize.mp3';
}

//Event handler for btn-roll
btnRollDOM.addEventListener('click',()=>{

	if(gamePlaying){
			rollingDice();
			btnHoldDOM.removeAttribute('disabled');
			btnHoldDOM.style.opacity=1;
			//1. Random number of dice
			let dice 		= Math.floor(Math.random()*6)+1;
			//let dice 		= 6;

			//spinning dice
			spinningDice();

			//display the dice number/result
			setTimeout(()=>{
				diceDOM.style.display='block';
				diceDOM.src = `assets/images/dice-${dice}.png`;
				diceDOM.classList.remove('spinning');
			},500);

			//3. update the result when only the result/ rolled number was not 1
			if(dice !==1){
				
				//check same Dice
				if(dice !==sameDice){

					//count roundScore
					roundScore +=dice;
					document.getElementById('current-'+activePlayer).textContent=roundScore;
					sameDice=dice;
					diceCount=1;

				}else{
					diceCount++;
					if(diceCount !==3){
						//count roundScore
						roundScore +=dice;
						document.getElementById('current-'+activePlayer).textContent=roundScore;
						sameDice=dice;

					}else{
						//console.log("same three");
						//change to next player
						nextPlayer();
						lostPointDice();
					}
				}

			}else{
				//change to next player
				nextPlayer();
				lostPointDice();

			}
			//console.log(dice, sameDice,diceCount);
	}// close gamePlaying
});

// add another Event Listener for btn-hold
btnHoldDOM.addEventListener('click',()=>{

	if(gamePlaying){
			//add audio
			globalPointDice();
			//1. add current current Score to Global Score
			score[activePlayer] +=roundScore;
			document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

			//2. Update UI


			//3. check if the player won the game
			if(score[activePlayer] >=10){
				winnerDice();
				diceDOM.setAttribute('src','assets/images/end-game.png');
				diceDOM.style.border 	= '3px solid rgba(111, 206, 112, 0.74)';
				btnRollDOM.setAttribute('disabled', 'disabled');
				btnRollDOM.style.opacity=0.5;
				btnHoldDOM.setAttribute('disabled', 'disabled');
				btnHoldDOM.style.opacity=0.5;
				document.getElementById('name-'+activePlayer).classList.add('activePoint');
				document.getElementById('update-'+activePlayer).textContent = "Winner!";
				gamePlaying = false;
			}else{
				//4. change player
				nextPlayer();

			}
	}// close gamePlaying



});

//Event Listener for btn-new
btnNewDOM.addEventListener('click',()=>{
	init();
	if(gamePlaying){
		startGameDice();
		diceDOM.style.display 	='block';
		diceDOM.classList.add('animation');
		btnRollDOM.setAttribute('disabled','disabled');
		btnRollDOM.style.opacity=0.5;
		btnHoldDOM.setAttribute('disabled', 'disabled');
		btnHoldDOM.style.opacity=0.5;
		diceDOM.setAttribute('src','assets/images/start-game.png');
		setTimeout(()=>{
			diceDOM.style.display 	='none';
			diceDOM.classList.remove('animation');
			btnRollDOM.removeAttribute('disabled','disabled');
			btnRollDOM.style.opacity=1;
			btnHoldDOM.removeAttribute('disabled', 'disabled');
			btnHoldDOM.style.opacity=1;
		},1500);
		document.querySelector('.player-0-panel').classList.add('active');
		document.querySelector('.player-1-panel').classList.remove('active');

	}// close gamePlaying
});


// Next Player function

function nextPlayer(){
	
	roundScore=0;
	document.getElementById('current-'+activePlayer).textContent=roundScore;
	activePlayer ===0 ? activePlayer= 1: activePlayer= 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	btnRollDOM.setAttribute('disabled','disabled');
	btnRollDOM.style.opacity=0.5;
	btnHoldDOM.setAttribute('disabled', 'disabled');
	diceDOM.src = `assets/images/next-player.png`;
	setTimeout(()=>{
		diceDOM.src = `assets/images/next-player.png`;
	},600);
	setTimeout(()=>{
		btnRollDOM.removeAttribute('disabled', 'disabled');
		btnRollDOM.style.opacity=1;
	},1000);
	btnHoldDOM.style.opacity=0.5;
	diceCount = 0;
}

// spinning dice

function spinningDice(){
	diceDOM.classList.add('spinning');
	let dice 		= Math.floor(Math.random()*5)+2;
	//console.log(`spin key= ${dice}`);
	for(let i =1;i<=6;i++){
		setTimeout(()=>{
			diceDOM.style.display='block';
			diceDOM.src = `assets/images/dice-${dice}.png`;
		},100);
	}
}

//initialize the application
function init(){
	initAudio();
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
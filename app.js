/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 or same rolled number three times then all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, activePlayer,sameDice,diceCount;
init();

let diceDOM 	= document.querySelector('.dice');
let btnRollDOM 	= document.querySelector('.btn-roll');
let btnHoldDOM 	= document.querySelector('.btn-hold');
let btnNewDOM 	= document.querySelector('.btn-new');
//Event handler for btn-roll
btnRollDOM.addEventListener('click',()=>{
	btnHoldDOM.removeAttribute('disabled');
	btnHoldDOM.style.opacity=1;
	//1. Random number of dice
	let dice 		= Math.floor(Math.random()*6)+1;;
	//let dice 		= 6;
	
	//display the dice number/result
	diceDOM.style.display='block';
	diceDOM.src = `assets/images/dice-${dice}.png`;
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
				console.log("same three");
				//change to next player
				nextPlayer();
			}
		}

	}else{
		//change to next player
		nextPlayer();

	}
	console.log(dice, sameDice,diceCount);
});

// add another Event Listener for btn-hold
btnHoldDOM.addEventListener('click',()=>{
	//1. add current current Score to Global Score
	score[activePlayer] +=roundScore;
	document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

	//2. Update UI


	//3. check if the player won the game
	if(score[activePlayer] >=10){
		diceDOM.setAttribute('src','assets/images/end-game.png');
		diceDOM.style.border 	= '3px solid rgba(111, 206, 112, 0.74)';
		btnRollDOM.setAttribute('disabled', 'disabled');
		btnRollDOM.style.opacity=0.5;
		btnHoldDOM.setAttribute('disabled', 'disabled');
		btnHoldDOM.style.opacity=0.5;
		document.getElementById('name-'+activePlayer).classList.add('activePoint');
		document.getElementById('update-'+activePlayer).textContent = "Winner!";
	}else{
		//4. change player
		nextPlayer();

	}

});

//Event Listener for btn-new
btnNewDOM.addEventListener('click',()=>{
	init();
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
});


// Next Player function

function nextPlayer(){
	roundScore=0;
	document.getElementById('current-'+activePlayer).textContent=roundScore;
	activePlayer ===0 ? activePlayer= 1: activePlayer= 0;
	diceDOM.src = `assets/images/next-player.png`;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	btnHoldDOM.setAttribute('disabled', 'disabled');
	btnHoldDOM.style.opacity=0.5;
	diceCount = 0;
}

//initialize the application
function init(){
	score 			= [0,0];
	roundScore 		= 0;
	activePlayer 	= 0;
	sameDice 		= 0;
	diceCount 		=1;
	document.getElementById('score-0').textContent 	=0;
	document.getElementById('score-1').textContent 	=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;
	document.getElementById('update-'+activePlayer).textContent = "";
	document.getElementById('name-'+activePlayer).classList.remove('activePoint');
}
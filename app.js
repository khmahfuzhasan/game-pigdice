/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 or same rolls same number again then all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, activePlayer,sameDice;
score 		= [0,0];
roundScore 	= activePlayer = sameDice = 0;




document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
let diceDOM 	= document.querySelector('.dice');
let btnRollDOM 	= document.querySelector('.btn-roll');
let btnHoldDOM 	= document.querySelector('.btn-hold');

//Event handler for btn-roll
btnRollDOM.addEventListener('click',()=>{
	btnHoldDOM.removeAttribute('disabled');
	btnHoldDOM.style.opacity=1;
	//1. Random number of dice
	let dice 		= Math.floor(Math.random()*6)+1;
	console.log(dice, sameDice);
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

		}else{
			//change to next player
			nextPlayer();
		}

	}else{
		//change to next player
		nextPlayer();

	}
});

// add another Event Listener for btn-hold
btnHoldDOM.addEventListener('click',()=>{
	//1. add current current Score to Global Score
	score[activePlayer] +=roundScore;
	document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

	//2. Update UI


	//3. check if the player won the game
	if(score[activePlayer] >=100){
		diceDOM.setAttribute('src','assets/images/end-game.png');
		diceDOM.style.border= '3px solid rgba(111, 206, 112, 0.74)';
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
}
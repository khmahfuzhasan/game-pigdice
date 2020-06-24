// initalization game
init();

//Event handler for btn-roll
btnRollDOM.addEventListener('click',()=>{

	if(gamePlaying){
			//each click roll dice button wait 1second
			disabledBtn(850);
			rollingDice();
			btnHoldDOM.removeAttribute('disabled');
			btnHoldDOM.style.opacity=1;
			//1. Random number of dice
			let dice 		= Math.floor(Math.random()*6)+1;
			let dice2 		= Math.floor(Math.random()*6)+1;
			//let dice 		= 6;

			//spinning dice
			spinningDice();
			//display the dice number/result
			setTimeout(()=>{
				diceDOM.style.display='block';
				diceDOM.src = `assets/images/dice-${dice}.png`;
				diceDOM.classList.remove('spinning');
				if(lavel==='hard'){
					diceDOM2.style.display='block';
					diceDOM2.src = `assets/images/dice-${dice2}.png`;
					diceDOM2.classList.remove('spinning');				
				}

			},500);

			//3. update the result when only the result/ rolled number was not 1
			if(lavel==='standard'){
				diceDOM2.style.display='none';
				if(dice !==1){
					
					//check same Dice
					if(dice !==sameDice){

						//count roundScore
						roundScore +=dice;
						document.getElementById('current-'+activePlayer).textContent=roundScore;
						sameDice=dice;
						diceCount=1;
						rollDiceEmoji();

					}else{
						diceCount++;
						if(diceCount !==3){
							//count roundScore
							roundScore +=dice;
							document.getElementById('current-'+activePlayer).textContent=roundScore;
							sameDice=dice;
							rollDiceEmoji();
						}else{
							//change to next player
							nextPlayer();
							lostPointDice();
							rollDiceFailedmoji();
						}
					}

				}else{
					//change to next player
					nextPlayer();
					lostPointDice();
					rollDiceFailedmoji();
				}
			}
			//for level hard
			else{
				diceDOM2.style.display='block';
				if(dice !==1 && dice2 !==1){

					//check same Dice
					if(dice !==dice2){
						//count roundScore
						roundScore +=dice+dice2;
						document.getElementById('current-'+activePlayer).textContent=roundScore;
						sameDice=dice;
						rollDiceEmoji();
					}else{
						if(dice==6 && dice2 ==6){
							score[activePlayer] = 0;
							//change to next player
							document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
							document.getElementById('current-'+activePlayer).textContent=0;
							nextPlayer();
							lostPointDice();
							rollDiceFailedmoji();	
						}else{
							//change to next player
							nextPlayer();
							lostPointDice();
							rollDiceFailedmoji();
						}
					}
				}else{
						//change to next player
						nextPlayer();
						lostPointDice();
						rollDiceFailedmoji();
						btnHoldDOM.setAttribute('disabled', 'disabled');
				}
			}
			
			//console.log(dice, sameDice,diceCount);
	}// close gamePlaying
});

// add another Event Listener for btn-hold
btnHoldDOM.addEventListener('click',()=>{

	if(gamePlaying){
			//removeEmoji
			addBallons.innerHTML = "";
			//add audio
			globalPointDice();
			//1. add current current Score to Global Score
			score[activePlayer] +=roundScore;
			document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

			//2. Update UI

			//3. check if the player won the game setPoints
			if(score[activePlayer] >=setPoints){
				winnerID = activePlayer;
				winnerDice();
				diceDOM.setAttribute('src','assets/images/end-game.png');
				diceDOM.style.border 	= '3px solid rgba(111, 206, 112, 0.74)';				
				if(lavel==='hard'){
					diceDOM2.setAttribute('src','assets/images/end-game.png');
					diceDOM2.style.border 	= '3px solid rgba(111, 206, 112, 0.74)';
				}
				btnRollDOM.setAttribute('disabled', 'disabled');
				btnRollDOM.style.opacity=0.5;
				btnHoldDOM.setAttribute('disabled', 'disabled');
				btnHoldDOM.style.opacity=0.5;
				document.getElementById('name-'+activePlayer).classList.add('activePoint');
				document.getElementById('update-'+activePlayer).textContent = "Winner!";
				winnerBallons();
				countTotalPlayed();
				gamePlaying = false;
			}else{
				//4. change player
				nextPlayer();

			}
	}// close gamePlaying
}); 

//Event Listener for btn-new
btnNewDOM.addEventListener('click',newGameStart);

	function newGameStart(){
		init();
		if(gamePlaying){
			startGameDice();
			diceDOM.style.display 	='block';
			diceDOM.classList.add('animation');
			if(lavel==='hard'){
				diceDOM2.style.display 	='block';
				diceDOM2.classList.add('animation');
			}
			disabledBtn(1500);
			document.querySelector('.player-0-panel').classList.add('active');
			document.querySelector('.player-1-panel').classList.remove('active');
	}// close gamePlaying
}

// function roll dice and hold button disabled for 1second

function disabledBtn(time){
			btnRollDOM.setAttribute('disabled','disabled');
			btnRollDOM.style.opacity=0.5;
			btnHoldDOM.setAttribute('disabled', 'disabled');
			btnHoldDOM.style.opacity=0.5;
			diceDOM.setAttribute('src','assets/images/start-game.png');
			if(lavel==='hard'){
				diceDOM2.setAttribute('src','assets/images/start-game.png');
			}
			setTimeout(()=>{
				//diceDOM.style.display 	='none';
				diceDOM.classList.remove('animation');
				if(lavel==='hard'){
					//diceDOM2.style.display 	='none';
					diceDOM2.classList.remove('animation');	
				}
				btnRollDOM.removeAttribute('disabled','disabled');
				btnRollDOM.style.opacity=1;
				//btnHoldDOM.removeAttribute('disabled', 'disabled');
				//btnHoldDOM.style.opacity=1;
			},time);
}

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
	if(lavel==='hard'){
		diceDOM2.src = `assets/images/next-player.png`;
	}
	setTimeout(()=>{
		diceDOM.src = `assets/images/next-player.png`;
		if(lavel==='hard'){
				diceDOM2.src = `assets/images/next-player.png`;
		}
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
	if(lavel==='hard'){
		diceDOM2.classList.add('spinning');
	}
	
	let image 		= Math.floor(Math.random()*5)+2;
	//console.log(`spin key= ${dice}`);
	for(let i =1;i<=6;i++){
		setTimeout(()=>{
			diceDOM.style.display='block';
			diceDOM.src = `assets/images/dice-${image}.png`;
			if(lavel==='hard'){
				diceDOM2.style.display='block';
				diceDOM2.src = `assets/images/dice-${image}.png`;
			}
		},100);
	}
}
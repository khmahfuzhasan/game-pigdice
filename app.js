let score, roundScore, activePlayer,sameDice,diceCount,gamePlaying,setPoints;


let diceDOM 	= document.querySelector('.dice');
let btnRollDOM 	= document.querySelector('.btn-roll');
let btnHoldDOM 	= document.querySelector('.btn-hold');
let btnNewDOM 	= document.querySelector('.btn-new');
let blurEffect 		= document.querySelector('.blurEffect');
let settingInputs 	= document.querySelector('.setting-inputs');
//settings info
let firstPlayer	= document.querySelector('#firstPlayer');
let secondPlayer= document.querySelector('#secondPlayer');
let btnSettings	= document.querySelector('.btn-settings');
let settingUpdate= document.querySelector('#settingUpdate');
let gameScores= document.querySelector('#gameScores');
let addBallons= document.querySelector('.add-ballons');
    setPoints = gameScores.value.trim();

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
	winner.src='assets/audio/winner-2.mp3';
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
						//console.log("same three");
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

			//3. check if the player won the game
			if(score[activePlayer] >=setPoints){
				winnerDice();
				diceDOM.setAttribute('src','assets/images/end-game.png');
				diceDOM.style.border 	= '3px solid rgba(111, 206, 112, 0.74)';
				btnRollDOM.setAttribute('disabled', 'disabled');
				btnRollDOM.style.opacity=0.5;
				btnHoldDOM.setAttribute('disabled', 'disabled');
				btnHoldDOM.style.opacity=0.5;
				document.getElementById('name-'+activePlayer).classList.add('activePoint');
				document.getElementById('update-'+activePlayer).textContent = "Winner!";
				winnerBallons();
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




// settings popup
btnSettings.addEventListener('click',settingspoUp);
function settingspoUp(){
	blurEffect.classList.toggle('popup');
	settingInputs.classList.toggle('popup');
	btnSettings.classList.toggle('popover');	
}

settingUpdate.addEventListener('click',(event)=>{
	event.preventDefault();
	let valueOfFirst 	= firstPlayer.value.trim();
	let valueOfSecond 	= secondPlayer.value.trim();
	let valueOfPoints 	= gameScores.value.trim();
	let player0	= document.querySelector('#name-0');
	let player1	= document.querySelector('#name-1');
	let updateGamePoints	= document.querySelector('.gamespoints');

		jQuery.ajax({
		url: 'game-sessions.php',
		type:'POST',
		data:{'firstPlayer':valueOfFirst,'secondPlayer':valueOfSecond,'gameScores':valueOfPoints},
		success:(response)=>{
			const res = JSON.parse(response);
			if(res.status){
				player0.textContent = firstPlayer.value = res.player_one;
				player1.textContent = secondPlayer.value = res.player_two;
				setPoints  = gameScores.value = res.points;
				updateGamePoints.innerHTML = `<strong>Game Over:</strong> ${res.points}`;
				if(!res.isEmpty && !res.isFirstEmpty && !res.isSecondEmpty && !res.isSecondLess){
					settingspoUp();
					newGameStart();
				}else if(res.isFirstEmpty){
					borderWarn(firstPlayer,'red');
					borderWarn(secondPlayer,'#000');
					borderWarn(gameScores,'#000');
				}else if(res.isSecondEmpty){
					borderWarn(firstPlayer,'#000');
					borderWarn(secondPlayer,'red');
					borderWarn(gameScores,'#000');

				}else if(res.settingspoUp){
					borderWarn(firstPlayer,'#000');
					borderWarn(secondPlayer,'#000');
					borderWarn(gameScores,'red');				
				}else{
					borderWarn(firstPlayer,'#000');
					borderWarn(secondPlayer,'#000');
					borderWarn(gameScores,'red');
				}
				//console.log(res);
			}
		}
	});
});

// Alert Messages
function borderWarn(inpput,color){
	inpput.style.border=`1px solid ${color}`;
}

// create ballons
function createNewBallons(number,size){
	let x ="";
	for(let i=0;i<number;i++ ){
	let fromLeft 		= Math.floor(Math.random()* 1000)+1;
	let imageNum		= Math.floor(Math.random()*3)+1;
	let animSpeed		= Math.random()*3+1;
	let imagesize		= Math.floor(Math.random()*size)+1;
		x += `<img class="winnerBallons" style="width:${imagesize}px;left:${fromLeft}px;animation: fallDown ${animSpeed}s infinite;" src="assets/images/ballon-${imageNum}.png">`;
	}
	 return x;
}

// winnerBallon poup
function winnerBallons(){
	if(gamePlaying){
		addBallons.innerHTML = createNewBallons(100,200);
		setTimeout(()=>{
			addBallons.innerHTML = "";
		},19000);	
	}
}
//winnerBallons();


// create New Emoji
function createNewEmoji(title,number,size){
	let x ="";
	for(let i=0;i<number;i++ ){
	let fromLeft 		= Math.floor(Math.random()* 900)+1;
	let imageNum		= Math.floor(Math.random()*5)+1;
	let animSpeed		= 1.2;
		x += `<img class="winnerBallons" style="width:${size}px;left:${fromLeft}px;animation: rollUpDown ${animSpeed}s infinite;" src="assets/images/${title}-${imageNum}.png">`;
	}
	 return x;
}


// roll Dice Emoji
function rollDiceEmoji(){
	if(gamePlaying){
		addBallons.innerHTML = createNewEmoji('roll',1,100);
		if(score[0] < setPoints || score[1] < setPoints ){
			setTimeout(()=>{
				addBallons.innerHTML = "";
			},1200);	
		}
	}
}
//rollDiceEmoji();
// roll Dice Emoji when failed
function rollDiceFailedmoji(){
	if(gamePlaying){
		addBallons.innerHTML = createNewEmoji('failed',1,100);
		if(score[0] < setPoints || score[1] < setPoints ){
			setTimeout(()=>{
				addBallons.innerHTML = "";
			},1200);	
		}
	}
}

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



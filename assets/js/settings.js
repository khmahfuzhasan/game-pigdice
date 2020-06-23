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
	let settinglavelVal = settinglavel.value.trim();
	let updateGamePoints	= document.querySelector('.gamespoints');
		alert('New setup will be affected all the current scores! Press \'Ok\' to confirm!');
		jQuery.ajax({
		url: 'game-sessions.php',
		type:'POST',
		data:{
			'firstPlayer':valueOfFirst,
			'secondPlayer':valueOfSecond,
			'gameScores':valueOfPoints,
			'settinglavelVal':settinglavelVal
		},	
		success:(response)=>{
			const res = JSON.parse(response);
			
			if(res.status){
				lavel = res.lavel;
				countLavel.innerHTML = `<img src="assets/images/loved.png" alt=""><span class="lavel lavel-${res.lavel}">${res.lavel}<br>Lavel!</span>`;
					if(res.lavel =='standard'){
						diceDOM2.style.display='none';
						settinglavel.innerHTML = '<option value="standard" selected="selected">Standard</option><option value="hard">Hard</option>';
					}else{
						diceDOM2.style.display='block';
						settinglavel.innerHTML = '<option value="standard">Standard</option><option value="hard" selected="selected">Hard</option>';
					}
				player0.textContent = firstPlayer.value = res.player_one;
				player1.textContent = secondPlayer.value = res.player_two;
				setPoints  = gameScores.value = res.points;
				updateGamePoints.innerHTML = `<strong>Game Over:</strong> ${res.points}`;
				if(res.status){
					winningScore0.textContent=res.PlayersScore[0];
					winningScore1.textContent=res.PlayersScore[1];
				}
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


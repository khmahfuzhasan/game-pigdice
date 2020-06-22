// Count Total Played game
function countTotalPlayed(){
	player1 = firstPlayer.value.trim();
	player2 = secondPlayer.value.trim();
	pointsToltal = gameScores.value.trim();
	jQuery.ajax({
		url: 'set-total-game.php',
		type: 'POST',
		data:{
			'active':true,
			'player1':player1,
			'player2':player2,
			'winnerID':winnerID,
			'pointsToltal':pointsToltal
		},
		success:(res)=>{
			const response = JSON.parse(res);
			//console.log(response);
			if(response.status){
				winningScore0.textContent=response.PlayersScore[0];
				winningScore1.textContent=response.PlayersScore[1];
			}
		}
	});
}
// Get Total Game Played Value
function UpdateGamePlayed(){

	jQuery.ajax({
		url: 'get-total-game.php',
		type: 'POST',
		data:{
			'active':true,
		},
		success:(res)=>{
			const response = JSON.parse(res);

			if(response.status){
				countGame.innerHTML=`<img src="assets/images/loved.png" alt=""><span class="loved">${response.data}<br>Played!</span>`;
			}
		}
	});
}


// Set Interval
setInterval(()=>{
	UpdateGamePlayed();
},500);
// Alert Messages
function borderWarn(inpput,color){
	inpput.style.border=`1px solid ${color}`;
}
countLavel.addEventListener('click',function(){
	if(lavel==='standard'){
		gameRole.classList.toggle('clicked');
		gameRole.innerHTML =`<h3>DESCRIPTIONS:</h3><h5>Lavel: Standard</h5><p>Pig is a simple dice game which in its basic form is playable with just a single die. You win by being the first player to score 100 points. [<strong>Default winning score: 100</strong>]</p><h3>GAME RULES:</h3><ul><li>- The game has 2 players, playing in rounds</li><li>- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score</li><li>- BUT, if the player rolls a 1 or same rolled number three times then all his ROUND score gets lost. After that, it's the next player's turn</li><li>- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn</li><li>- The first player to reach 100 points on GLOBAL score wins the game</li></ul>`;
	}else{
		gameRole.classList.toggle('clicked');
		gameRole.innerHTML =`<h3>DESCRIPTIONS:</h3><h5>Lavel: Hard</h5><p>Pig is a simple dice game which in its basic form is playable with just a single die. You win by being the first player to score 100 points. [<strong>Default winning score: 100</strong>]</p><h3>GAME RULES:</h3><ul><li>- The game has 2 players, playing in rounds</li><li>- In each turn, a player rolls two dices as many times as he whishes. Each result get added to his ROUND score.</li><li>- BUT, if the player rolls a 1 or same rolled number[[4,4] then all his ROUND score gets lost. After that, it's the next player's turn.</li><li>- BUT, if the player rolls two sixes[e.g. 6,6] then Round score gets lost and after that it's the next player's turn.</li><li>- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.</li><li>- The first player to reach 100 points on GLOBAL score wins the game.</li></ul>`;
	}
	
});

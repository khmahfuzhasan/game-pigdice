// create ballons
function createNewBallons(number,size){
	let x ="";
	for(let i=0;i<number;i++ ){
	let fromLeft 	= Math.floor(Math.random()* 1000)+1;
	let imageNum	= Math.floor(Math.random()*5)+1;
	let animSpeed	= Math.random()*3+1;
	let imagesize	= Math.floor(Math.random()*size)+1;
		x += `<img class="winnerBallons" style="width:${imagesize}px;left:${fromLeft}px;animation: fallDown ${animSpeed}s infinite;" src="assets/images/ballon-${imageNum}.png">`;
	}
	 return x;
}

// winnerBallon poup
function winnerBallons(){
	if(gamePlaying){
		if(score[0] >= setPoints || score[1] >= setPoints ){
			addBallons.innerHTML = createNewBallons(100,200);
			setTimeout(()=>{
				addBallons.innerHTML = "";
			},19000);
		}	
	}
}
//winnerBallons();


// create New Emoji
function createNewEmoji(title,number,size){
	let x ="";
	for(let i=0;i<number;i++ ){
	let fromLeft 		= Math.floor(Math.random()* 900)+1;
	let imageNum		= Math.floor(Math.random()*5)+1;
	let animSpeed		= .8;
		x += `<img class="winnerBallons" style="width:${size}px;left:${fromLeft}px;animation: rollUpDown ${animSpeed}s;" src="assets/images/${title}-${imageNum}.png">`;
	}
	 return x;
}


// roll Dice Emoji
function rollDiceEmoji(){
	if(gamePlaying){
		if(score[0] < setPoints || score[1] < setPoints ){
			addBallons.innerHTML = createNewEmoji('roll',1,70);
			setTimeout(()=>{
				addBallons.innerHTML = "";
			},800);	
		}
	}
}
//rollDiceEmoji();
// roll Dice Emoji when failed
function rollDiceFailedmoji(){
	if(gamePlaying){
		if(score[0] < setPoints || score[1] < setPoints ){
			addBallons.innerHTML = createNewEmoji('failed',1,70);
			setTimeout(()=>{
				addBallons.innerHTML = "";
			},800);	
		}
	}
}
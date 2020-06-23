// GET Reacts
function getReact(){
	jQuery.ajax({
		url: 'get-react.php',
		type: 'POST',
		data:{
			'active':true
		},
		success:(res)=>{
			const response = JSON.parse(res);
			if(response.status){
				if(response.session){
					countReaction.classList.add('Has_loved');
					if(response.reactCount<10){
						countReaction.innerHTML = `<img src="assets/images/loved.png" alt=""><span class="loved">0${response.data}<br>loved!</span>`;
					}else{
						countReaction.innerHTML = `<img src="assets/images/loved.png" alt=""><span class="loved">${response.data}<br>loved!</span>`;				
					}	
				}else{
					countReaction.classList.remove('Has_loved');
					if(response.reactCount<10){
						countReaction.innerHTML = `<img src="assets/images/love.png" alt=""><span class="loved">0${response.data}<br>love!</span>`;
					}else{
						countReaction.innerHTML = `<img src="assets/images/love.png" alt=""><span class="loved">${response.data}<br>love!</span>`;				
					}					
				}
			}
		}
	});

}
	


// SET Reacts
countReaction.addEventListener('click',setReact);


// setReact
function setReact(){

	if(!countReaction.classList.contains('Has_loved')){
		jQuery.ajax({
			url: 'set-react.php',
			type: 'POST',
			data:{'active':true},
			success:(res)=>{
				const response = JSON.parse(res);
				if(response.status){
					countReaction.classList.add('Has_loved');
				}else{
					countReaction.classList.remove('Has_loved');
				}
			}
		});
	}else{
		jQuery.ajax({
			url: 'remove-react.php',
			type: 'POST',
			data:{'active':true},
			success:(res)=>{
				const response = JSON.parse(res);
				if(response.status){
					countReaction.classList.remove('Has_loved');
				}
			}
		});
	}
}

// Set Interval
setInterval(()=>{
	getReact();
},1500);
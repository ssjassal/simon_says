//UNCOMMENT SOUND IN INSTANTIATE GAME BEFORE PUSHING
console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');
	var $levelSequence = [];
	var $playerSequence = [];
	var longestArray = [];
	var rounds = 1;
	// playerScore = 0;
	// simonScore = 0;
	var gameInPlay = false;
	var tempArray = [];
	var soundsMuted = false;

//============================================================================================================
//-----------------------------------------------Grab Elements------------------------------------------------
//============================================================================================================
	
	var $levelButton = $('#levelChoice');
	var $longestButton = $('#longestSeq');
	var $startGame = $('#startGame');
	var $restartButton = $('#restartGame');
	var $lastButton = $('#lastSeq');
	var $muteButton = $('#muteSounds');
	var $audio0 = $('.0')[0];
	var $audio1 = $('.1')[0];
	var $audio2 = $('.2')[0];
	var $audio3 = $('.3')[0];
	var $audio4 = $('.4')[0];
	var $audio5 = $('.5')[0];
	var $audio6 = $('.6')[0];
	var $audio7 = $('.7')[0];
	var $audio8 = $('.8')[0];
	var $audio9 = $('.9')[0];
	var $audio10 = $('.10')[0];

//============================================================================================================
//-----------------------------------------DOM Manipulation Functions-----------------------------------------
//============================================================================================================

	var playAudio = function (audio){

			//$('body').append($audio1);
			audio.play();
	}

	var muteSounds = function(){

		
		console.log('In the muteSounds function');
		if(soundsMuted == true)
		{
			soundsMuted = false;
			$muteButton.text('Mute Sounds');

		}else {
			soundsMuted = true;
			$muteButton.text('Unmute Sounds');
		}

		console.log(soundsMuted);

		
	}

	var resetGame = function(){ //NEED TO HAVE RESTART BUTTON AVAIALBLE DURING GAME PLAY AS WELL
		
		$levelSequence = [];
		$playerSequence =[];
		rounds = 1;
		// playerScore = 0;
		// simonScore = 0;
		gameInPlay = false;
		// $('.square').unbind();
		// $levelButton.unbind();
		$levelButton.attr('class','button');
		$displayRound = $('.round');
		$displayRound.text('0');
		$('#content p').text('Game On!');
		$('.square').unbind();
		$longestButton.prop('disabled',true);
		$restartButton.prop('disabled',true);
		$lastButton.prop('disabled',true);
		$startGame.prop('disabled',true);
		instantiateGame();
	}

	var instantiateGame = function(){
		if (soundsMuted == false){
			//playAudio($audio8);
		}
		
		setTimeout(function(){
			var $litSquare = $('.square0');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 400);
		// fadeTo(400, 0.3, function(){//console.log('fading in to .3 opacity')
		// });
		// $litSquare.css({'animation':'blinker 6s linear 1'});
			var $litSquare = $('.square1');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 400);
		// fadeTo(1200, 0.3, function(){//console.log('fading in to .3 opacity')
		// });
		// $litSquare.css({'animation':'blinker 6s linear 1'});
			var $litSquare = $('.square2');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 400);
		// .fadeTo(2000, 0.3, function(){//console.log('fading in to .3 opacity')
		// });
		// $litSquare.css({'animation':'blinker 6s linear 1'});
			var $litSquare = $('.square3');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 400);
		// .fadeTo(3600, 0.3, function(){//console.log('fading in to .3 opacity')
		// });
		// $litSquare.css({'animation':'blinker 6s linear 1'});
			$levelButton.prop('disabled',false);
			$muteButton.prop('disabled',false);
		},4000);
	}

	var createBoard = function(){
		
		for (var i = 0; i < 4; i++) {
			// console.log('in FOR Loop: ' + i);
			var $content = $('#content');
			var $square = $('<div>').attr('class','square' + i).attr('id',+ i);
			$square.css('opacity','0');
			$square.addClass('square');
			//console.log($square);
			$content.append($square);
		}
		instantiateGame();
	}

	var roundWinner = function(){

		console.log('In the roundWinner function');
		console.log('You have won the game');
		$('#startGame').text('Congratulations! You have beaten the level!');
		if (soundsMuted == false){
			playAudio($audio9);
			playAudio($audio10);
		}
		
	}

	var playGame = function(){
		console.log('In playGame functioon');
		var $displayRound = $('.round');
		if($level == 'Easy')
		{
			var roundMax = 5; 
			if(rounds == 1 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 2 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 3 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 4 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 5 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else
			{
				roundWinner();
			}
			
		}
		else if($level == 'Medium')
		{
		
			var roundMax = 6; 
			if(rounds == 1 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 2 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 3 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 4 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 5 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 6 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else
			{
				roundWinner();
			}	
		}
		else if($level == 'Hard')
		{
			var roundMax = 5; 
			if(rounds == 1 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 2 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 3 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 4 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 5 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else
			{
				roundWinner();
			}
		}
		else if($level == 'Extreme')
		{
			var roundMax = 7; 
			if(rounds == 1 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 2 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 3 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 4 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 5 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else if(rounds == 6 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}
			else if(rounds == 7 && rounds <= roundMax)
			{	
				$displayRound.text(rounds).delay(5000);
				//console.log('displayed the current round');
				lightUpBoard();
			}else
			{
				roundWinner();
			}
		}
	}

	var makeLevel	= function()
	{
		
		gameInPlay = true;
		$levelButton.prop('disabled', true);
		$restartButton.prop('disabled', false);
		// $levelButton.unbind();
		console.log('In the makeLevel function');
		$level = $('#content p').text();

		console.log($level);

		if($level == 'Easy')
		{	
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('easy peazy');
			easyLevelObject();
			$longestButton.prop('disabled', false);
			playGame();

			//lightUpBoard();
			//console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('not so bad');
			mediumLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
			//lightUpBoard();

		}
		else if($level == 'Hard')
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('oh em gee');
			hardLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
			//lightUpBoard();

		}else
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('uh-oh');
			extremeLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
			//lightUpBoard();

		}

	}

//====================================================
//Data & App Logic
//====================================================
	var easyLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 5; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 6; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 7; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 8; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		// console.log($levelSequence);
	}

	var mediumLevelObject = function(){

		for (var i = 1; i < 7; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 6; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 8; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 10; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				//console.log('round 6');
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		//console.log($levelSequence);
	}

	var hardLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 8; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 16; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 20; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		// console.log($levelSequence);
	}

	var extremeLevelObject = function(){

		for (var i = 1; i < 8; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 9; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 19; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 24; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				//console.log('round 6');
				for (var j = 0; j < 29; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 7)
			{
				//console.log('round 7');
				for (var j = 0; j < 34; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		//console.log($levelSequence);
	}


	//Help to get blinking squre from http://codepen.io/Vince_Brown/pen/Fzphm
	var lightUpBoard = function (){
		
		console.log('In the lightUpBoard function');
		console.log($levelSequence);
		console.log($levelSequence[rounds - 1]);
		//console.log($lightUp);
		for (var i = 0; i < $levelSequence[rounds - 1].length; i++) {

			console.log('In the lightUpBoard FOR loop');
			var delayTime = i * 600;
			setTimeout(lightUpSquare, delayTime);
		}
	}
	
	//Help to get blinking squre from http://codepen.io/Vince_Brown/pen/Fzphm		
	var lightUpSquare = function() {

		console.log('In the lightUpSquare function');
		var pattern = $levelSequence[rounds - 1].pop();
		console.log(pattern);

		//For loop to play sounds for lighted up square
		// for (var i = 0; i < 4; i++) {

		// 	console.log('In the lightUpSquare FOR loop');
			
		// 	switch(i)
		// 	{
		// 		case 0:
		// 			setTimeout(function(){playAudio($audio0)}, (i * 600));
		// 			break;
		// 		case 1:
		// 			setTimeout(function(){playAudio($audio1)}, (i * 600));
		// 			break;
		// 		case 2:
		// 			setTimeout(function(){playAudio($audio2)}, (i * 600));
		// 			break;
		// 		case 3:
		// 			setTimeout(function(){playAudio($audio3)}, (i * 600));
		// 			break;
		// 		default:
		// 			break;
				
		// 	}
		// }

		$('#' + pattern).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);

	   	$playerSequence.push(pattern);
	   	console.log('playerSequence: ' + $playerSequence);

	   	if ($levelSequence[rounds - 1].length <= 0) {
	   	  // add the click event once cpu is finished showing the pattern
	   	  $('.square').on('click', verifyColor);
	   	}
	}

	var verifyColor = function(){

		console.log('In the verfiyColor function');

		var $clickedSquare = $playerSequence.shift();
		var $squareId = $(this).attr('id');

		$(this).animate({opacity:0.3},200).animate({opacity:1},100);

		// if yes remove from used pattern and add to pattern
		console.log($clickedSquare+' '+' '+$squareId);
		if ($clickedSquare == $squareId) {
		  //adds item back to pattern array
		  $levelSequence[rounds - 1].push($clickedSquare);
		  console.log('$levelSequence if correct: '+$levelSequence[rounds - 1]);

		  if ($playerSequence.length <= 0) {
		    
		    //var score
		    // $('#player').text(rounds);
		    rounds++;
		    if (soundsMuted == false){
		    	playAudio($audio5);
		    }
		    $('.round').text(rounds);
		    $('.square').unbind();

		    setTimeout(playGame, 3000);
		  }

		}else 
		{
		  console.log('if incorrect: '+ $squareId);
		  $('#content p').text('Game Over, Click Restart Game to Play Again');
		  gameInPlay = false;
		  // $levelButton.unbind();
		  //console.log(rounds);
		  // $('#simon').text(rounds);
		  setTimeout(function(){$('.square').css('opacity','.3')},500);
		  $startGame.prop('disabled',true);
		  $longestButton.prop('disabled',true);
		  $lastButton.prop('disabled',true);
		  $muteButton.prop('disabled',true);
	 	  $restartButton.prop('disabled',false);
	 	  $restartButton.on('click', resetGame);
		  
		}
	}

//====================================================
//Event Handlers
//====================================================

	var determineLevel = function(){
		
		console.log('In the determineLevel function');
		//console.log($(this).attr('class'));
		
		if($(this).attr('class') == 'button')
		{
			$('#content p').text('Easy');
			$(this).addClass('clicked1');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);

		}
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
			// $levelButton.on('click', determineLevel);
		}else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');

		}		
	}

		var lastSequence = function (){

		console.log('In the lastSequence function');
		console.log($playerSequence);
		var tempSquare = $playerSequence.shift();
		
		//var tempSquare = $levelSequence[rounds-1].pop();
		console.log(tempSquare);
		$('#' + tempSquare).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);
		
	   	$playerSequence.push(tempSquare);

	}

	var longestSequence = function(sequenceNum){
		// var sequenceArrayOne = [];
		// var tempArray = [];
		// console.log('In the longestSequence function');
		// sequenceArrayOne = sequenceArray;
		// //tempArray = sequenceArray;
		//console.log(sequenceArray);
		// // console.log($longestArray.length);
		//var tempSquare = sequenceArray.pop();
		// console.log(sequenceArrayOne);
		//var tempSquare = $levelSequence[rounds-1].pop();
	

		//var tempmap = sequenceArray.map();
		//console.log(tempmap);

		//console.log('longestSequence function: ' + tempSquare);
		$('#' + sequenceNum).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);
		
	   	//tempArray.push(tempSquare);
	   	// tempArray.reverse();
	   	// var length = $levelSequence.length;
	   	// $levelSequence[length-1] = tempArray;
	   	// console.log(tempArray);
	}

//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);
	//$startGame.on('click', playAudio);
	$startGame.on('click',function() {
	  if(gameInPlay == false){
	    makeLevel();
	  } 
	});

	$lastButton.on('click',function(){
		for (var i = 0; i < $playerSequence.length; i++) 
		{
			setTimeout(lastSequence, (i * 600));
		}
	});

	$longestButton.on('click',function(){
		var length = $levelSequence.length;
		//console.log('length of array: ' + length);
		var longestArray = $levelSequence[length-1];
		console.log('befor FOR Loop Longest Array: ' + longestArray);
		for (var i = 0; i < longestArray.length; i++) 
		{
			var sequence = longestArray[i];
			//console.log('longest array within FOR loop: '+ longestArray);
			//console.log('In Longest Array listener FOR loop-array length: ' + longestArray.length);
			setTimeout(longestSequence(sequence), (i * 600));
		}

	});

	$muteButton.on('click', muteSounds);

	$restartButton.on('click', resetGame);
//====================================================
//Game Play
//====================================================	
	createBoard();
});


//====================================================
//Graveyard Code (Possible Reuse)
//====================================================	
	// switch($lightUp[i]){
	// 	case 0:
	// 		console.log('Lighting up first square');
	// 		$litSquare = $('#square0');
	// 		$litSquare.fadeTo(1000, 1, function(){
	// 			//console.log('fading to 1 opacity');
	// 		});
	// 		$litSquare.fadeTo(1000, .3, function(){
	// 			//console.log('fading to .3 opacity');
	// 		});
	// 		break;
	// 	case 1:
	// 		console.log('Lighting up second square');
	// 		$litSquare = $('#square1');
	// 		// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 		$litSquare.fadeTo(1000, 1, function(){
	// 			//console.log('fading to 1 opacity');
	// 		});
	// 		$litSquare.fadeTo(1000, .3, function(){
	// 			//console.log('fading to .3 opacity');
	// 		});
	// 		break;
	// 	case 2:
	// 		console.log('Lighting up third square');
	// 		$litSquare = $('#square2');
	// 		// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 		$litSquare.fadeTo(1000, 1, function(){
	// 			//console.log('fading to 1 opacity');
	// 		});
	// 		$litSquare.fadeTo(1000, .3, function(){
	// 			//console.log('fading to .3 opacity');
	// 		});
	// 		break;
	// 	case 3:
	// 		console.log('Lighting up fourth square');
	// 		$litSquare = $('#square3');
	// 		// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 		$litSquare.fadeTo(1000, 1, function(){
	// 			//console.log('fading to 1 opacity');
	// 		});
	// 		$litSquare.fadeTo(1000, .3, function(){
	// 			//console.log('fading to .3 opacity');
	// 		});
	// 		break;
	// }
	// if($lightUp[i] == 0)
	// {
	// 	console.log('Lighting up first square');
	// 	$litSquare = $('#square0');
	// 	$litSquare.fadeTo(1000, 1, function(){
	// 		//console.log('fading to 1 opacity');
	// 	});
	// 	$litSquare.fadeTo(1000, .3, function(){
	// 		//console.log('fading to .3 opacity');
	// 	});

	// 	//window.setTimeout(function(){}, 3000);
	// 	// $litSquare.css({'animation':'blinker 6s linear 1'});

	// }else if($lightUp[i] == 1)
	// {
	// 	console.log('Lighting up second square');
	// 	$litSquare = $('#square1');
	// 	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 	$litSquare.fadeTo(1000, 1, function(){
	// 		//console.log('fading to 1 opacity');
	// 	});
	// 	$litSquare.fadeTo(1000, .3, function(){
	// 		//console.log('fading to .3 opacity');
	// 	});

	// 	//window.setTimeout(function(){}, 3000);

	// }else if($lightUp[i] == 2)
	// {
	// 	console.log('Lighting up third square');
	// 	$litSquare = $('#square2');
	// 	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 	$litSquare.fadeTo(1000, 1, function(){
	// 		//console.log('fading to 1 opacity');
	// 	});
	// 	$litSquare.fadeTo(1000, .3, function(){
	// 		//console.log('fading to .3 opacity');
	// 	});

	// 	//window.setTimeout(function(){}, 3000);

	// }else if($lightUp[i] == 3)
	// {
	// 	console.log('Lighting up fourth square');
	// 	$litSquare = $('#square3');
	// 	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// 	$litSquare.fadeTo(1000, 1, function(){
	// 		//console.log('fading to 1 opacity');
	// 	});
	// 	$litSquare.fadeTo(1000, .3, function(){
	// 		//console.log('fading to .3 opacity');
	// 	});

	// 	//window.setTimeout(function(){}, 3000);
	// }
//}
// for (var i = 0; i < $levelSequence.length; i++) {
// 	for (var j = 0; j < $levelSequence[i].length; j++) {
// 		$light = $levelSequence[i][j];

// 		if($light == 0)
// 		{
// 			console.log('Lighting up first square');
// 			$litSquare = $('#square0');
// 			$litSquare.fadeTo(4000, 1, function(){
// 				console.log('fading to 1 opacity');
// 			});
// 			$litSquare.fadeTo(4000, .5, function(){
// 				console.log('fading to .5 opacity');
// 			});
// 			// $litSquare.css({'animation':'blinker 6s linear 1'});

// 		}
// 	}

	// if($lightUp[i] == 0)
	// {
	// 	$litSquare = $('#square0').fadeOut(2000).delay(500);
	// 	//$litSquare.css({'animation':'blinker 2s linear 1'});
	// }
	// if($lightUp[i] == 1)
	// {
	// 	$litSquare = $('#square1').fadeOut(2000).delay(500);
	// 	$litSquare.css({'animation':'blinker 2s linear 1'});
	// }


	// $displayRound.text()
	//console.log($level);
	//$level = $('#content p').text();



// setInterval(function () {
// 		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
// 	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
// 	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
// 	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
// 	    }, 1);

// 	$square.on('click',verifyColor);
// }


// if($('.button.mute') == 'mute')
// {
// 	$audio0.muted = false;
// 	$audio1.muted = false;
// 	$audio2.muted = false;
// 	$audio3.muted = false;
// 	$audio4.muted = false;
// 	$audio5.muted = false;
// 	$audio6.muted = false;
// 	$audio7.muted = false;
// 	$audio8.muted = false;
// 	$audio9.muted = false;
// 	$audio10.muted = false;
// 	$muteButton.removeClass('mute');
// 	$muteButton.text('Unmute Sounds');
	
// }else
// {
// 	$audio0.muted = true;
// 	$audio1.muted = true;
// 	$audio2.muted = true;
// 	$audio3.muted = true;
// 	$audio4.muted = true;
// 	$audio5.muted = true;
// 	$audio6.muted = true;
// 	$audio7.muted = true;
// 	$audio8.muted = true;
// 	$audio9.muted = true;
// 	$audio10.muted = true;
// 	$muteButton.addClass('mute');
// 	$muteButton.text('Unmute Sounds');
// 	//$muteButton = $('.button mute');
// 	$muteButton.on('click', muteSounds);
// }
console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');
<<<<<<< HEAD
	createBoard();
=======
	var $levelSequence = [];
	var $playerSequence = [];
	var longestArray = [];
	var rounds = 1;
	// playerScore = 0;
	// simonScore = 0;
	var gameInPlay = false;
	var tempArray = [];
>>>>>>> master

//====================================================
//Grab Elements
//====================================================
	
<<<<<<< HEAD
	$levelButton = $('#levelChoice');
	$longestButton = $('#longestSeq');
	$startGame = $('#startGame');
	$lastButton = $('#lastSeq');
	$muteButton = $('#muteSounds');
//====================================================
//Data & App Logic
//====================================================
	$levelSequence = [];
	round = 0;
	playerScore = 0;
	simonScore = 0;

		var makeLevel	= function()
	{

=======
	var $levelButton = $('#levelChoice');
	var $longestButton = $('#longestSeq');
	var $startGame = $('#startGame');
	var $restartButton = $('#restartGame');
	var $lastButton = $('#lastSeq');
	var $muteButton = $('#muteSounds');

//====================================================
//DOM Manipulation Functions
//====================================================
	var resetGame = function(){ 
		
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
		// $levelButton.unbind();
>>>>>>> master
		console.log('In the makeLevel function');
		$level = $('#content p').text();

		console.log($level);

		if($level == 'Easy')
		{	
<<<<<<< HEAD
			console.log('easy peazy');
			easyLevelObject();
=======
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('easy peazy');
			easyLevelObject();
			$longestButton.prop('disabled', false);
>>>>>>> master
			playGame();

			//lightUpBoard();
			//console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
<<<<<<< HEAD
			console.log('not so bad');
			mediumLevelObject();
=======
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('not so bad');
			mediumLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
>>>>>>> master
			//lightUpBoard();

		}
		else if($level == 'Hard')
		{
<<<<<<< HEAD
			console.log('oh em gee');
			hardLevelObject();
=======
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('oh em gee');
			hardLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
>>>>>>> master
			//lightUpBoard();

		}else
		{
<<<<<<< HEAD
			console.log('uh-oh');
			extremeLevelObject();
=======
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('uh-oh');
			extremeLevelObject();
			$longestButton.prop('disabled', false);
			playGame();
>>>>>>> master
			//lightUpBoard();

		}

	}

<<<<<<< HEAD
=======
//====================================================
//Data & App Logic
//====================================================
>>>>>>> master
	var easyLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
<<<<<<< HEAD
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
=======
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 2');
=======
				//console.log('round 2');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 3');
=======
				//console.log('round 3');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 4');
=======
				//console.log('round 4');
>>>>>>> master
				for (var j = 0; j < 7; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
<<<<<<< HEAD
				console.log('round 5');
=======
				//console.log('round 5');
>>>>>>> master
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
<<<<<<< HEAD
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
=======
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 2');
=======
				//console.log('round 2');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 3');
=======
				//console.log('round 3');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 4');
=======
				//console.log('round 4');
>>>>>>> master
				for (var j = 0; j < 10; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
<<<<<<< HEAD
				console.log('round 5');
=======
				//console.log('round 5');
>>>>>>> master
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
<<<<<<< HEAD
				console.log('round 6');
=======
				//console.log('round 6');
>>>>>>> master
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
<<<<<<< HEAD
		console.log($levelSequence);
=======
		//console.log($levelSequence);
>>>>>>> master
	}

	var hardLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
<<<<<<< HEAD
			console.log('In the makeLevel FOR loop: ' + i);
=======
			//console.log('In the makeLevel FOR loop: ' + i);
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 2');
=======
				//console.log('round 2');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 3');
=======
				//console.log('round 3');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 4');
=======
				//console.log('round 4');
>>>>>>> master
				for (var j = 0; j < 16; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
<<<<<<< HEAD
				console.log('round 5');
=======
				//console.log('round 5');
>>>>>>> master
				for (var j = 0; j < 20; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
<<<<<<< HEAD
		console.log($levelSequence);
=======
		// console.log($levelSequence);
>>>>>>> master
	}

	var extremeLevelObject = function(){

		for (var i = 1; i < 8; i++) 
		{
			$levelArray = [];
<<<<<<< HEAD
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
=======
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 2');
=======
				//console.log('round 2');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 3');
=======
				//console.log('round 3');
>>>>>>> master
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
<<<<<<< HEAD
				console.log('round 4');
=======
				//console.log('round 4');
>>>>>>> master
				for (var j = 0; j < 19; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
<<<<<<< HEAD
				console.log('round 5');
=======
				//console.log('round 5');
>>>>>>> master
				for (var j = 0; j < 24; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
<<<<<<< HEAD
				console.log('round 6');
=======
				//console.log('round 6');
>>>>>>> master
				for (var j = 0; j < 29; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 7)
			{
<<<<<<< HEAD
				console.log('round 7');
=======
				//console.log('round 7');
>>>>>>> master
				for (var j = 0; j < 34; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
<<<<<<< HEAD
		console.log($levelSequence);
	}
//====================================================
//Event Handlers
//====================================================
=======
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
		    $('.round').text(rounds);
		    $('.square').unbind();

		    setTimeout(playGame, 800);
		  }

		}else 
		{
		  console.log('if incorrect: '+ $squareId);
		  $('#content p').text('Game Over, Click Restart Game to Play Again');
		  gameInPlay = false;
		  // $levelButton.unbind();
		  //console.log(rounds);
		  // $('#simon').text(rounds);
	 	  $restartButton.prop('disabled',false);
	 	  $restartButton.on('click', resetGame);
		  
		}
	}



//====================================================
//Event Handlers
//====================================================

>>>>>>> master
	var determineLevel = function(){
		
		console.log('In the determineLevel function');
		//console.log($(this).attr('class'));
<<<<<<< HEAD

=======
		
>>>>>>> master
		if($(this).attr('class') == 'button')
		{
			$('#content p').text('Easy');
			$(this).addClass('clicked1');
<<<<<<< HEAD
=======
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);

>>>>>>> master
		}
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
<<<<<<< HEAD
=======
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
>>>>>>> master
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
<<<<<<< HEAD
=======
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
>>>>>>> master
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
<<<<<<< HEAD
=======
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
			//$longestButton.prop('disabled', false);
>>>>>>> master
			// $levelButton.on('click', determineLevel);
		}else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');
<<<<<<< HEAD
		}		
	}

=======

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
		// var tempArray = [];
		console.log('In the longestSequence function');

		// console.log($longestArray);
		// console.log($longestArray.length);
		//var tempSquare = longestArray.pop();
		//console.log(tempArray);
		//var tempSquare = $levelSequence[rounds-1].pop();
		console.log(sequenceNum);
		$('#' + sequenceNum).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);
		
	   	//tempArray.push(tempSquare);
	}

>>>>>>> master
//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);
<<<<<<< HEAD
	$startGame.on('click', makeLevel)

});

//====================================================
//DOM Manipulation Functions
//====================================================
var instantiateGame = function(){

	
	$litSquare = $('#square0');
	$litSquare.fadeTo(800, 0.5, function(){console.log('fading in to .5 opacity')});
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	$litSquare = $('#square1');
	$litSquare.fadeTo(1600, 0.5, function(){console.log('fading in to .5 opacity')});
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	$litSquare = $('#square2');
	$litSquare.fadeTo(2400, 0.5, function(){console.log('fading in to .5 opacity')});
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	$litSquare = $('#square3');
	$litSquare.fadeTo(3200, 0.5, function(){console.log('fading in to .5 opacity')});
	// $litSquare.css({'animation':'blinker 6s linear 1'});

}

var createBoard = function(){
	for (var i = 0; i < 4; i++) {
		// console.log('in FOR Loop: ' + i);
		$content = $('#content');
		var $square = $('<div>').attr('class',i).attr('id','square' + i);
		$square.addClass('square');
		$square.css('opacity','0');
		//console.log($square);
		$content.append($square);
	}
	instantiateGame();
}

var lightUpBoard = function (){

	console.log('In the lightUpBoard function');
	console.log($levelSequence);

	for (var i = 0; i < $levelSequence.length; i++) {
		for (var j = 0; j < $levelSequence[i].length; j++) {
			$light = $levelSequence[i][j];

			if($light == 0)
			{
				console.log('Lighting up first square');
				$litSquare = $('#square0');
				$litSquare.fadeTo(4000, 1, function(){
					console.log('fading to 1 opacity');
				});
				$litSquare.fadeTo(4000, .5, function(){
					console.log('fading to .5 opacity');
				});
				// $litSquare.css({'animation':'blinker 6s linear 1'});

			}else if($light == 1)
			{
				console.log('Lighting up second square');
				$litSquare = $('#square1');
				// $litSquare.css({'animation':'blinker 6s linear 1'});
				$litSquare.fadeTo(400, 1, function(){
					console.log('fading to 1 opacity');
				});
				$litSquare.fadeTo(400, .5, function(){
					console.log('fading to .5 opacity');
				});

			}else if($light == 2)
			{
				console.log('Lighting up third square');
				$litSquare = $('#square2');
				// $litSquare.css({'animation':'blinker 6s linear 1'});
				$litSquare.fadeTo(400, 1, function(){
					console.log('fading to 1 opacity');
				});
				$litSquare.fadeTo(400, .5, function(){
					console.log('fading to .5 opacity');
				});

			}else if($light == 3)
			{
				console.log('Lighting up fourth square');
				$litSquare = $('#square3');
				// $litSquare.css({'animation':'blinker 6s linear 1'});
				$litSquare.fadeTo(400, 1, function(){
					console.log('fading to 1 opacity');
				});
				$litSquare.fadeTo(400, .5, function(){
					console.log('fading to .5 opacity');
				});

			}
		}
	}
	
}

// var lightUp = function(litSquare) {

// 	$litSquare = $(litSquare);
// 	window.setTimeout(function() {
// 	$litSquare = $('#square0');
// 	$litSquare.css({'animation':'blinker 6s linear 1'});
// 	}, 300);

// }

var playGame = function(){

	$displayRound = $('.round');
	console.log($level);
	//$level = $('#content p').text();
}


=======
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
		for (var i = 0; i < longestArray.length; i++) 
		{
			var sequence = longestArray[i];
			console.log(sequence);
			setTimeout(longestSequence(sequence), (i * 600));
		}

	});

//====================================================
//Game Play
//====================================================	
	createBoard();
});



//====================================================
//Commented Code Possible Reuse
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
>>>>>>> master

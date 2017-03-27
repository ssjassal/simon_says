console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');
	

//====================================================
//Grab Elements
//====================================================
	
	$levelButton = $('#levelChoice');
	$longestButton = $('#longestSeq');
	$startGame = $('#startGame');
	$lastButton = $('#lastSeq');
	$muteButton = $('#muteSounds');

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
	$levelButton.prop('disabled',false);

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

	var lightUpBoard = function (array1){

		console.log('In the lightUpBoard function');
		//console.log($levelSequence);
		$lightUp = array1;
		console.log($lightUp);

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

		// 		}else if($light == 1)
		// 		{
		// 			console.log('Lighting up second square');
		// 			$litSquare = $('#square1');
		// 			// $litSquare.css({'animation':'blinker 6s linear 1'});
		// 			$litSquare.fadeTo(4000, 1, function(){
		// 				console.log('fading to 1 opacity');
		// 			});
		// 			$litSquare.fadeTo(4000, .5, function(){
		// 				console.log('fading to .5 opacity');
		// 			});

		// 		}else if($light == 2)
		// 		{
		// 			console.log('Lighting up third square');
		// 			$litSquare = $('#square2');
		// 			// $litSquare.css({'animation':'blinker 6s linear 1'});
		// 			$litSquare.fadeTo(4000, 1, function(){
		// 				console.log('fading to 1 opacity');
		// 			});
		// 			$litSquare.fadeTo(4000, .5, function(){
		// 				console.log('fading to .5 opacity');
		// 			});

		// 		}else if($light == 3)
		// 		{
		// 			console.log('Lighting up fourth square');
		// 			$litSquare = $('#square3');
		// 			// $litSquare.css({'animation':'blinker 6s linear 1'});
		// 			$litSquare.fadeTo(4000, 1, function(){
		// 				console.log('fading to 1 opacity');
		// 			});
		// 			$litSquare.fadeTo(4000, .5, function(){
		// 				console.log('fading to .5 opacity');
		// 			});

		// 		}
		// 	}

		// 	$square.on('click',verifyColor);
		// }
		
	}

	// var lightUp = function(litSquare) {

	// 	$litSquare = $(litSquare);
	// 	window.setTimeout(function() {
	// 	$litSquare = $('#square0');
	// 	$litSquare.css({'animation':'blinker 6s linear 1'});
	// 	}, 300);

	// }

	var playGame = function(){
		console.log('In playGame functioon');
		$displayRound = $('.round');
		if($level == 'Easy')
		{
			var roundMax = 5; 
			rounds = 1;
			if(rounds == 1 && rounds <= roundMax)
			{
				$displayRound.text(rounds);
				console.log('displayed the current round');
				lightUpBoard($levelSequence[rounds - 1]);
				rounds++;
			}
			
				
			
		}
		// else if($level == 'Medium')
		// {
		
		// 	rounds = 6; 
		// }
		// else if($level == 'Hard')
		// {
		// 	rounds = 5; 
		// }
		// else if($level == 'Extreme')
		// {
		// 	rounds = 7;
		// }

		// $displayRound.text()
		//console.log($level);
		//$level = $('#content p').text();
	}

//====================================================
//Data & App Logic
//====================================================
	$levelSequence = [];
	rounds = 0;
	playerScore = 0;
	simonScore = 0;

	var makeLevel	= function()
	{

		console.log('In the makeLevel function');
		$level = $('#content p').text();

		console.log($level);

		if($level == 'Easy')
		{	
			console.log('easy peazy');
			easyLevelObject();
			playGame();

			//lightUpBoard();
			//console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
			console.log('not so bad');
			mediumLevelObject();
			playGame();
			//lightUpBoard();

		}
		else if($level == 'Hard')
		{
			console.log('oh em gee');
			hardLevelObject();
			playGame();
			//lightUpBoard();

		}else
		{
			console.log('uh-oh');
			extremeLevelObject();
			playGame();
			//lightUpBoard();

		}

	}

	var easyLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
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
				console.log('round 2');
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
				console.log('round 3');
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
				console.log('round 4');
				for (var j = 0; j < 7; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
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
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
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
				console.log('round 2');
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
				console.log('round 3');
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
				console.log('round 4');
				for (var j = 0; j < 10; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				console.log('round 6');
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}

	var hardLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
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
				console.log('round 2');
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
				console.log('round 3');
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
				console.log('round 4');
				for (var j = 0; j < 16; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 20; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}

	var extremeLevelObject = function(){

		for (var i = 1; i < 8; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
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
				console.log('round 2');
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
				console.log('round 3');
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
				console.log('round 4');
				for (var j = 0; j < 19; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 24; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				console.log('round 6');
				for (var j = 0; j < 29; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 7)
			{
				console.log('round 7');
				for (var j = 0; j < 34; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}

	var verifyColor = function(){
		console.log('In verifyColor function');
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
		}
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
			$startGame.prop('disabled', false);
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
			$startGame.prop('disabled', false);
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
			$startGame.prop('disabled', false);
			// $levelButton.on('click', determineLevel);
		}else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');
	
		}		
	}

//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);
	$startGame.on('click', makeLevel)

//====================================================
//Game Play
//====================================================	
	createBoard();
});




//WDI-Remote Hopper Cohort Soniya Jassal March 31st 2017
//This is the javascript/jquery app supporting the game Simon
//Simon is a game which blinks a sequence of lights to a player.  The player in turn needs to 
//repeat the sequence back to Simon to move on to the next added light.
//Modification to the game is that a new sequence is presented each round with added difficulty
//based on level chosen by the player up to 5 rounds in each level.

//console.log('Simon has been initialized');

//============================================================================================================
//---------------------------------------------Global variables-----------------------------------------------
//============================================================================================================
var $levelSequence = [];
var $playerSequence = [];
var longestArray = [];
var rounds = 1;
var gameInPlay = false; //Lets the program know if the game is in play
var tempArray = [];
var soundsMuted = false;

$(function(){
	//console.log('In the jquery');

//============================================================================================================
//-----------------------------------------------Grab Elements------------------------------------------------
//============================================================================================================
	//Button elements
	var $levelButton = $('#levelChoice');
	var $longestButton = $('#longestSeq');
	var $startGame = $('#startGame');
	var $restartButton = $('#restartGame');
	var $lastButton = $('#lastSeq');
	var $muteButton = $('#muteSounds');

	//Audio Elements
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
	//playAudio function will play audio that is called upon in the game
	var playAudio = function (audio){

		//console.log('In the playAudio function');
		audio.play();
	}

	//muteSounds function will mute all sound in the game by simply toggling a variable from false to true
	//and vice versa, it will also change the text of the button so the player is aware the sounds are muted
	//or not.
	var muteSounds = function(){

		//console.log('In the muteSounds function');
		if(soundsMuted == true)
		{
			soundsMuted = false;
			$muteButton.text('Mute Sounds');

		}else {
			soundsMuted = true;
			$muteButton.text('Unmute Sounds');
		}

		//console.log(soundsMuted);
	}

	//resetGame function will reset the main variables and instantiate a new game
	var resetGame = function(){ 
		
		$levelSequence = [];
		$playerSequence =[];
		rounds = 1;
		gameInPlay = false; //Tells program game is not in play
		
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

	//instatiateGame function turn an inactive square's board into an active board through changing
	//opacity from .3 (partialy invisible-inactive) to opactity of 1 (fully visible-active).
		var instantiateGame = function(){
		if (soundsMuted == false){
			playAudio($audio8);
		}
		//timeout function to delay the visibility of the board
		setTimeout(function(){
			var $litSquare = $('.square0');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 400);
		
			var $litSquare = $('.square1');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 1200);
		
			var $litSquare = $('.square2');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 2000);
	
			var $litSquare = $('.square3');
			$litSquare.animate(
			{
				opacity: 0.3
		   	}, 3600);
			
			//Disable buttons so player can't play ahead
			$levelButton.prop('disabled',false);
			$muteButton.prop('disabled',false);
		},1000);
	}

	//createBoard function sets up the squares in the body by dynamically creating
	//the div's and classes for the 4 squares.
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
		//Calling instantiate game to set the game board and scores to start game
		instantiateGame();
	}

	//roundWinner functions displays the winner message by replacing the startGame button 
	//message in the center of the game and playing audio.  This function is called once the rounds 
	//have maxed for correct player sequences.
	var roundWinner = function(){

		//console.log('In the roundWinner function');
		//console.log('You have won the game');
		$('#startGame').text('Congratulations! You have beaten the level!');
		if (soundsMuted == false){
			playAudio($audio9);
			playAudio($audio10);
		}
	}

	//playGame function updates the round board on the UI based on if the player
	//has passed the next round.  If player has reached roundMax then roundWinner 
	//function is invoked.
	var playGame = function(){
		//console.log('In playGame function');
		var $displayRound = $('.round');

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

	//makeLevel function will create the sequences for each round up to 5 rounds
	//Based on the selected level it will call the level object to create the sequences
	//per round.
	var makeLevel	= function()
	{
		
		gameInPlay = true; //Tells program game is in play
		$levelButton.prop('disabled', true);
		$restartButton.prop('disabled', false);
	
		//console.log('In the makeLevel function');
		$level = $('#content p').text();

		//console.log($level);

		if($level == 'Easy')
		{	
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('easy peazy');
			easyLevelArray();
			$longestButton.prop('disabled', false);
			playGame();
			//console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('not so bad');
			mediumLevelArray();
			$longestButton.prop('disabled', false);
			playGame();
		}
		else if($level == 'Hard')
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('oh em gee');
			hardLevelArray();
			$longestButton.prop('disabled', false);
			playGame();
		}else
		{
			$('.square0').css('opacity','1');
			$('.square1').css('opacity','1');
			$('.square2').css('opacity','1');
			$('.square3').css('opacity','1');
			//console.log('uh-oh');
			extremeLevelArray();
			$longestButton.prop('disabled', false);
			playGame();
		}
	}

//============================================================================================================
//----------------------------------------------Data & App Logic----------------------------------------------
//============================================================================================================
	//The LevelArray(Easy, Medium, Hard, Extreme) functions could have been constructors aside from the fact 
	//that we needed to add a  a different number of squares per round per level and follow the same logic. 
	//will create a set of random numbers between 0 and 4 for each round of the selected level. All levels 
	//start with 4 squares for first round, round two changes based on level. These random numbers are put
	//into an array of arrays (5 arrays for each round in one levelSequence array).

	//Easy Constructor Level = 1 extra square added to new sequence
	var easyLevelArray = function(){
		
		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 5; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 6; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 7; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
						
						//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 8; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}
		}
		// console.log($levelSequence);
	}

	//Medium Constructor Level = 2 extra squares added to new sequence
	var mediumLevelArray = function(){
		
		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 6; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 8; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 10; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);	
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 12; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);		
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}
		}
		//console.log($levelSequence);
	}

	//Hard Constructor Level = 3 extra squares added to new sequence
	var hardLevelArray = function(){
		
		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 7; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 10; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 13; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 17; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}
		}
		// console.log($levelSequence);
	}

	//Extreme Constructor Level = 4 extra squares added to new sequence
	var extremeLevelArray = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			//console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				//console.log('round 2');
				for (var j = 0; j < 8; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				//console.log('round 3');
				for (var j = 0; j < 12; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				//console.log('round 4');
				for (var j = 0; j < 16; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				//console.log('round 5');
				for (var j = 0; j < 20; j++) 
				{
					//Ensuring duplicates are not in array i.e. [1,1,2,2]
					var checkNum = Math.floor(Math.random()*4);
					while (checkNum == $levelArray[j-1])
					{
						checkNum = Math.floor(Math.random()*4);
					}
					$levelArray.push(checkNum);
					
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
			}
		}
		//console.log($levelSequence);
	}

	//lightupBoard function will light set up the time delay for each square being lit up
	//Help to get blinking squre from http://codepen.io/Vince_Brown/pen/Fzphm
	var lightUpBoard = function (){
		
		//console.log('In the lightUpBoard function');
		//console.log($levelSequence);
		//console.log($levelSequence[rounds - 1]);
		//console.log($lightUp);
		for (var i = 0; i < $levelSequence[rounds - 1].length; i++) {
			//console.log('In the lightUpBoard FOR loop');
			var delayTime = i * 600;
			setTimeout(lightUpSquare, delayTime);
		}
	}
	
	//lightUpSquare function will pop a number from the array of the round of levelSequence array. 
	//it will play audio and animate the corresponding square based on matching id number. It them
	//pushes the sequence number into the playerSequence array that will be compared next.
	//Help to get blinking squre from http://codepen.io/Vince_Brown/pen/Fzphm		
	var lightUpSquare = function() {

		//console.log('In the lightUpSquare function');
		var pattern = $levelSequence[rounds - 1].pop();
		//console.log(pattern);
		
		//switch to determine which sounds to play for each square	
		switch(pattern)
		{
			case 0:
				if (soundsMuted == false){
					playAudio($audio0);
				}
				break;
			case 1:
				if (soundsMuted == false){
					playAudio($audio1);
				}
				break;
			case 2:
				if (soundsMuted == false){
					playAudio($audio2);
				}
				break;
			case 3:
				if (soundsMuted == false){
					playAudio($audio3);
				}
				break;
			default:
				break;
		}

		//Create the blink effect for the square through animate function
		$('#' + pattern).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);

	   	//Pushing to playerSequence array for comparing in verifyColor function
	   	$playerSequence.push(pattern);

	   	//console.log('playerSequence: ' + $playerSequence);
	   	if ($levelSequence[rounds - 1].length <= 0) {
	   	  //Ensuring the listener is added to verify the player's color once player's turn
	   	  $('.square').on('click', verifyColor);
	   	}
	}

	//verifyColor function shifts the sequence number from the playerSequence array and 
	//grabs the id of the current square which was clicked animates the clicked square for 
	//the player and then compares the square id with the sequence number, if correct 
	// the round is updated, if not the game is over.
	var verifyColor = function(){

		//console.log('In the verfiyColor function');
		var $clickedSquare = $playerSequence.shift();
		var $squareId = $(this).attr('id');
		//console.log($squareId);
		
		//Sounds for square for player clicks **Note** Not working as planned
		switch($squareId)
		{
			case 0:
				if (soundsMuted == false){
					playAudio($audio0);
				}
				break;
			case 1:
				if (soundsMuted == false){
					playAudio($audio1);
				}
				break;
			case 2:
				if (soundsMuted == false){
					playAudio($audio2);
				}
				break;
			case 3:
				if (soundsMuted == false){
					playAudio($audio3);
				}
				break;
			default:
				break;
		}
		$(this).animate({opacity:0.3},200).animate({opacity:1},100);
		//console.log($clickedSquare+' '+' '+$squareId);
		if ($clickedSquare == $squareId) {
		  //Adds sequence number back to pattern array to keep it stored
		  $levelSequence[rounds - 1].push($clickedSquare);
		  //console.log('$levelSequence if correct: '+$levelSequence[rounds - 1]);

		  //Player has clicked correctly for all sequence numbers
		  if ($playerSequence.length <= 0) {
		    rounds++;
		    if (soundsMuted == false){
		    	playAudio($audio5);
		    }
		    $('.round').text(rounds);
		    $('.square').unbind();

		    setTimeout(playGame, 3000);
		  }
		}else //Game Over
		{
		  //console.log('if incorrect: '+ $squareId);
		  if (soundsMuted == false){
		  	playAudio($audio6);
		  }
		  $('#content p').text('Game Over, Click Restart Game to Play Again');
		  gameInPlay = false; //Tells program game is not in play

		  //Disabling board and buttons for game over restart
		  setTimeout(function(){$('.square').css('opacity','.3')},500);
		  $startGame.prop('disabled',true);
		  $longestButton.prop('disabled',true);
		  $lastButton.prop('disabled',true);
		  $muteButton.prop('disabled',true);
	 	  $restartButton.prop('disabled',false);
	 	  $restartButton.on('click', resetGame);
		}
	}
//============================================================================================================
//-----------------------------------------------Event Handlers-----------------------------------------------
//============================================================================================================
	//determineLevel function is an event handler that is called by the Level button to set the level of the
	//game that the player wishes to play.  This function updates the UI to tell the player what level they are
	//selecting based on the number of clicks to the button. This text is later pulled by makeLevel function.
	var determineLevel = function(){
		
		//console.log('In the determineLevel function');
		//console.log($(this).attr('class'));
		
		//Easy level text
		if($(this).attr('class') == 'button')
		{
			$('#content p').text('Easy');
			$(this).addClass('clicked1');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
		}//Medium level text
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
		}//Hard level text
		else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
		}//Extreme level text
		else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
			$startGame.prop('disabled', false);
			$lastButton.prop('disabled', false);
		
		}//Restarts the level at Easy
		else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');
		}		
	}

	//lastSequence function will provide the last sequence given to the player.  It is a 
	//repeat function of lightUpSquare with the change that the we are lighting up the 
	//playerSequence array, since we moved the sequence numbers to this array
	var lastSequence = function (){

		//console.log('In the lastSequence function');
		//console.log($playerSequence);
		var tempSquare = $playerSequence.shift();
		
		//switch to determine which sounds to play for each square	
		switch(tempSquare)
		{
			case 0:
				if (soundsMuted == false){
					playAudio($audio0);
				}
				break;
			case 1:
				if (soundsMuted == false){
					playAudio($audio1);
				}
				break;
			case 2:
				if (soundsMuted == false){
					playAudio($audio2);
				}
				break;
			case 3:
				if (soundsMuted == false){
					playAudio($audio3);
				}
				break;
			default:
				break;
		}
		$('#' + tempSquare).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);
		
	   	$playerSequence.push(tempSquare);
	   	console.log($playerSequence);
	}

	//longestSequence function will pull the last array of the round which is the 
	//longest array for a player and light up the squares for this array.  This function
	//is also based on lightUpSquare and lastSequence functions however, this function
	//leverages an array that has not been shown to the player in the levelSequence 
	//array.  **NOTE** this function is not currently working correctly, it will display 
	//all blinks at once and sounds at once. It's button has been renamed "Simon on Roids" 
	//as a fun function.
	var longestSequence = function(longSeq){

		//console.log('In the longestSequence function');
		//console.log(longSeq);
		var tempSquare = longSeq;
		//console.log(tempSquare);
		
		//switch to determine which sounds to play for each square	
		switch(tempSquare)
		{
			case 0:
				if (soundsMuted == false){
					playAudio($audio0);
				}
				break;
			case 1:
				if (soundsMuted == false){
					playAudio($audio1);
				}
				break;
			case 2:
				if (soundsMuted == false){
					playAudio($audio2);
				}
				break;
			case 3:
				if (soundsMuted == false){
					playAudio($audio3);
				}
				break;
			default:
				break;
			
		}
		$('#' + tempSquare).animate(
		{
		     opacity: 0.3
	   	}, 200).animate(
	   	{
		     opacity: 1
	   	}, 100);
	}

//============================================================================================================
//----------------------------------------------Event Listeners-----------------------------------------------
//============================================================================================================
	//Event listener for mute sounds button
	$muteButton.on('click', muteSounds);

	//Event listener for restart game button
	$restartButton.on('click', resetGame);

	//Event listener for the level button
	$levelButton.on('click', determineLevel);
	
	//Event listener for start game button
	$startGame.on('click',function() {
	  if(gameInPlay == false){ //Tells program game is not in play
	    makeLevel();
	  } 
	});

	//Event listener for last sequence button
	$lastButton.on('click',function(){
		for (var i = 0; i < $playerSequence.length; i++) 
		{
			setTimeout(lastSequence, (i * 600));
		}
	});

	//Event listener for longest sequence button (Simon on Roids)
	$longestButton.on('click',function(){
		//console.log($levelSequence);
		var arrayLength = $levelSequence.length;
		var $longSeq = $levelSequence[arrayLength-1];
		//console.log($longSeq);
		//console.log('before FOR Loop Longest Array: ');
		for (var i = 0; i < $longSeq.length; i++) 
		{	
			//console.log(i);
			
			(function(i){
			  setTimeout(longestSequence($longSeq[i]), (i * 600));
			})(i)
		}

	});
//============================================================================================================
//-------------------------------------------------Game Play--------------------------------------------------
//============================================================================================================
	//Starts the game by creating the board at onload
	createBoard();
});

//============================================================================================================
//--------------------------------------Graveyard Code (Possible Reuse)---------------------------------------
//============================================================================================================

// playerScore = 0;
// simonScore = 0;
// playerScore = 0;
// simonScore = 0;

//$('body').append($audio1);

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

//tempArray.push(tempSquare);
// tempArray.reverse();
// var length = $levelSequence.length;
// $levelSequence[length-1] = tempArray;
// console.log(tempArray);

	// $longestArray.push(tempSquare);
	// console.log('After push: ' + $longestArray);
	//$longestArray.reverse();
	//console.log($longestArray);
// $levelSequence[length-1].push($longestArray);
// console.log($levelSequence[length-1]);


// fadeTo(400, 0.3, function(){//console.log('fading in to .3 opacity')
// });
// $litSquare.css({'animation':'blinker 6s linear 1'});

// fadeTo(1200, 0.3, function(){//console.log('fading in to .3 opacity')
// });
// $litSquare.css({'animation':'blinker 6s linear 1'});

// .fadeTo(2000, 0.3, function(){//console.log('fading in to .3 opacity')
// });
// $litSquare.css({'animation':'blinker 6s linear 1'});

// .fadeTo(3600, 0.3, function(){//console.log('fading in to .3 opacity')
// });
// $litSquare.css({'animation':'blinker 6s linear 1'});

// if($level == 'Easy')
// {
// }
// else if($level == 'Medium')
// {

// 	var roundMax = 6; 
// 	if(rounds == 1 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 2 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 3 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 4 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 5 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 6 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else
// 	{
// 		roundWinner();
// 	}	
// }
// else if($level == 'Hard')
// {
// 	var roundMax = 5; 
// 	if(rounds == 1 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 2 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 3 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 4 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 5 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else
// 	{
// 		roundWinner();
// 	}
// }
// else if($level == 'Extreme')
// {
// 	var roundMax = 7; 
// 	if(rounds == 1 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 2 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 3 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 4 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 5 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else if(rounds == 6 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}
// 	else if(rounds == 7 && rounds <= roundMax)
// 	{	
// 		$displayRound.text(rounds).delay(5000);
// 		//console.log('displayed the current round');
// 		lightUpBoard();
// 	}else
// 	{
// 		roundWinner();
// 	}
// }
//lightUpBoard();
// $levelButton.unbind();

// $levelArray.push(Math.floor(Math.random()*4));
// $levelSequence['round'+ i] = $levelArray;

// $levelSequence['round'+ i] = $levelArray;

// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// else if(i == 6)
// {
// 	//console.log('round 6');
// 	for (var j = 0; j < 14; j++) 
// 	{
// 		$levelArray.push(Math.floor(Math.random()*4));
// 		// $levelSequence['round'+ i] = $levelArray;
// 	}
// 	$levelSequence.push($levelArray);
// }
// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// $levelSequence['round'+ i] = $levelArray;
// else if(i == 6)
// {
// 	//console.log('round 6');
// 	for (var j = 0; j < 29; j++) 
// 	{
// 		$levelArray.push(Math.floor(Math.random()*4));
// 		// $levelSequence['round'+ i] = $levelArray;
// 	}
// 	$levelSequence.push($levelArray);
// }
// else if(i == 7)
// {
// 	//console.log('round 7');
// 	for (var j = 0; j < 34; j++) 
// 	{
// 		$levelArray.push(Math.floor(Math.random()*4));
// 		// $levelSequence['round'+ i] = $levelArray;
// 	}
// 	$levelSequence.push($levelArray);
// }


//For loop to play sounds for lighted up square
// for (var i = 0; i < 4; i++) {

// 	console.log('In the lightUpSquare FOR loop');
// }

//var score
// $('#player').text(rounds);

// $levelButton.unbind();
//console.log(rounds);
// $('#simon').text(rounds);


//$longestButton.prop('disabled', false);
//$longestButton.prop('disabled', false);
// $levelButton.on('click', determineLevel);
//$longestButton.prop('disabled', false);
// $levelButton.on('click', determineLevel);
//$longestButton.prop('disabled', false);
// $levelButton.on('click', determineLevel);

//var tempSquare = $levelSequence[rounds-1].pop();
//console.log(tempSquare);

// var $longestArray = longSeq;

// var length = $levelSequence.length;
// var tempSquare = $longestArray.pop();
// console.log('After pop: '+ $longestArray)

//$startGame.on('click', playAudio);
// setTimeout(longestSequence($longSeq), (i * 600));


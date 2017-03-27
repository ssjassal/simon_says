console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');

//====================================================
//Grab Elements
//====================================================
	createBoard();
	$levelButton = $('#levelChoice');
	$longestButton = $('#longestSeq');
	$startGame = $('#startGame');
	$lastButton = $('#lastSeq');
	$muteButton = $('#muteSounds');
//====================================================
//Data & App Logic
//====================================================
	$levelSequence = [];
	$round = 0;
	$playerScore = 0;
	$simonScore = 0;

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
					console.log(j);
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
					console.log(j);
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
					console.log(j);
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
					console.log(j);
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
		}
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
			// $levelButton.on('click', determineLevel);
		}else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');
		}		
	}

	var makeLevel	= function()
	{

		console.log('In the makeLevel function');
		$level = $('#content p').text();

		console.log($level);

		if($level == 'Easy')
		{	
			console.log('easy peazy');
			easyLevelObject();
			console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
			console.log('not so bad');
			mediumLevelObject();
		}
		else if($level == 'Hard')
		{
			console.log('oh em gee');
			hardLevelObject();
		}else
		{
			console.log('uh-oh');
			extremeLevelObject();
		}

	}
//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);
	$startGame.on('click', makeLevel)

});

//====================================================
//DOM Manipulation Functions
//====================================================

var createBoard = function(){
	for (var i = 0; i < 4; i++) {
		// console.log('in FOR Loop: ' + i);
		$content = $('#content');
		var $square = $('<div>').attr('class',i).attr('id','button' + i);
		$square.addClass('square');
		$square.css('opacity','.5');
		//console.log($square);
		$content.append($square);
	}
}



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

//====================================================
//Event Handlers
//====================================================
	var determineLevel = function(){
		
		console.log($(this).attr('class'));

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

		} else if($(this).attr('class') == 'button clicked3')
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
//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);

});

//====================================================
//DOM Manipulation Functions
//====================================================

var createBoard = function(){
	for (var i = 0; i < 4; i++) {
		// console.log('in FOR Loop: ' + i);
		$content = $('#content');
		var $square = $('<div>').addClass('square').attr('id','button' + i);
		$square.css('opacity','.5');
		// console.log($square);
		$content.append($square);
	}
}



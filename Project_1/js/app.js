console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');

//====================================================
//Grab Elements
//====================================================
	createBoard();
//====================================================
//Data & App Logic
//====================================================

//====================================================
//Event Handlers
//====================================================

//====================================================
//Event Listeners
//====================================================	

	console.log('outside FOR Loop');
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



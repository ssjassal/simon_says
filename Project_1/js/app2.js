console.log('app2.js is connected');
$(function(){
	console.log('In the jquery');

	$main = $('<main>').attr('id', 'game');
	

	$('body').append($main);


	for (var i = 0; i < 4; i++) {
		console.log('in FOR Loop: ' + i);

		var $square = $('<div>').addClass('square');
		console.log($square);
		$main.append($square)
	}

	console.log('outside FOR Loop');
});
# Simon - The Game

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope, The device creates a series of tones and lights and requires a user to repeat the series. If the user succeeds the series becomes progressively longer and more complex. Once the user fails, the game is over. The original version was manufactured and distributed by Milton Bradley but after they went out of business, the product was taken over by Hasbro. This version of Simon expands the basic game play to have a 4 levels a player can choose from and each level provind 5 rounds.  Each round in a level is set with a new sequence with an added sequence after the first round.

## Getting Started

These instructions will help you play the game should you not wish to download a copy of the project. **You can access the game on my live site here: [Soniya Jassal (SSJassal) Live Site](https://ssjassal.github.io/wdir-projects/Project_1/index.html)**


Should you want to see the code and modify, these instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Please clone my repository for Project_1 from there you will find the index.html file which you can open in your browser and launch the game.  To make modifications of your own, the app.js file is located in the js folder with Project_1. **You can access the respository here: [SSJassal WDIR Projects Repository](https://github.com/ssjassal/wdir-projects)**


### Prerequisites

For normal game play without a copy of the project you will need the following:

```
1. Working Browser(IE, Chrome, Mozilla, Firefox)
```

For game play while having a copy of the project for development you will the following:
```
1. Sublime Text or Atom (A text editor)
2. Github repository
3. Terminal prompt to work with Github 
4. Working Browser(IE, Chrome, Mozilla, Firefox)
5. Some knowledge of JavaScript, Jquery, HTML, CSS
```
### Installing

Here are the steps to get a development environment up and running


1. Create a local development folder on your computer.
2. Go to github.com to create a Github profile and repository.
   Instructions can be found here: [Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
3. Configure your github profile in Terminal. 
   Instructions can be found here: [Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
4. Clone the wdir-projects repository above
5. Pull the wdir-projects folder into your local folder.
6. Open wdir-projects folder with your text editor
7. Open the index.html and open in browser
8. Open app.js and style.css to make further modifications
9. Save and add, commit, and push to your Github repository
   Instructions can be found here: [Recording Changes to a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

## Unsolved Problems

This game had two unsolved problems

* Sounds
* Longest Sequence


The sounds were not as difficult as the longest sequence being played.  The sounds worked for most everything, except for the player when they clicked a square to hear the sound. Even using the same code for Simon (the computer) to play the sounds that to the player, which worked, they would not play when the player needed to repeat the sequence.  The sounds also would not play for Simon if the numbers in the sequence repeated for the second repeated number i.e.([1,1,2,2]). This was fixed to ensure no sequence has a repeated number in sequential order.

The longest sequence is a function which was to obtain the last round sequence and show it to the player.  It was just for the player to see what was up ahead.  The problem with this function, while using the same functionality that is there for Simon to light up normal rounds, will display (blink) all the squares at once and play all the sounds at once. No matter what has been tried it breaks.  As of now the longest sequence has been turned into a "Fun Button" called "Simon on Roids", to bring some laughter to the player.

### Longest Sequence Code

```
//Function
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

//Event Listener for Button
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
```

## Built With

* [JavaScript](https://www.javascript.com/) - Language Used
* [JQuery](https://jquery.com/) - Language Used
* [Sublime Text](https://www.sublimetext.com/) - Text Editor
* [Apple Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) - Access to the Github Repository
* [Google Chrome](https://www.google.com/chrome/) - Used to display game
* [Github](https://github.com/) - Repository

## Authors

* **Soniya Jassal** - *Initial work* - [SSJassal](https://github.com/ssjassal)

## Acknowledgments

* Hat tip to Vince Brown, who aided in the blinking of my squares and control flow in his example:[Vince Brown Code Pen Simon](http://codepen.io/Vince_Brown/pen/Fzphm)
* Hasbro, Milton Bradley

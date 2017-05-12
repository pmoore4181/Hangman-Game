var words = ["puck", "goalie", "stick", "goal", "mask", "rink", "net", "zambonie"];
var answer = "";
var rightGuesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var length;

$(document).ready(function() {

	function start () {

		//pick a word from the list
		var pickWord = function createAnswer() {
				answer = words[Math.floor(Math.random() * words.length)];
				length = answer.length;
				console.log(answer);

				// //replace word with dashes
				// for (var i = 0; i <= answer.length; i++) {
				// 	var answerDiv = $("<div>");
				// 	$(answerDiv).text("_");
				// 	$("#correctAnswer").html(answerDiv[i]);				
				// }

		}
		pickWord();



		//replace word with dashes
		for (var i = 0; i <= answer.length; i++) {
			var answerDiv = $("<div>");
			answerDiv.attr("class", "rightLetter");
			$(answerDiv).html(" _ ");
			$("#correctAnswer").append(answerDiv);				
		}




			// record which key was pressed
			function press() {
				// When the user presses a key, it will run the following function...
				document.onkeyup = function (event) {

					// Determine which key was pressed
					var userGuess = event.key;
					console.log(userGuess);


					//check correct userGuess against answer and replace letter with user guess
					var test = answer.indexOf(userGuess);
					console.log(test)

					for (var k = 0; k < answer.length; k++) {
						if (test == k) {
							answerDiv.html(userGuess);
						}
					}



					//if you guess the letter

					if (length == 0) {
						wins++
						document.getElementById("Wins").innerHTML = wins;
						start();
					}


						// for (var i = 0; i < answer.length; i++) {
						// 	rightLetter = answer.charAt[i];
						// 	if (test == rightLetter) {



						// 		console.log(dispayDashes.repace(rightLetter.charAt[i]));


						// 		rightGuesses.push(rightLetter);
						// 		document.getElementById("correctAnswer").innerHTML = rightGuesses;

						// 	}
						// }
						
					

		//  ================= Incorrect Guess ======================

					else {
						console.log("Try again");
						wrongGuesses.push(userGuess);
						document.getElementById("yourGuesses").innerHTML = wrongGuesses;
						guessesLeft-=1;
						if (guessesLeft == 0) {
							start();
						}
					}





				}

			}

			press();










	}
	start();



})
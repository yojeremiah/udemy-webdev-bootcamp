//creat secret number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));


// non-looping guessing game
// //check guess
// if (guess === secretNumber) {
// 	alert("You got it right!");
// }

// else if (guess < secretNumber) {
// 	alert("Too low. Guess again!");
// }

// else {
// 	alert("Too high. Guess again!");
// }


// while-loop continuous attempt
while (guess != secretNumber) {
	if (guess === secretNumber) {
		alert("You got it right!");
	}

	else if (guess < secretNumber) {
		alert("Too low. Guess again!");
		var guess = Number(prompt("Guess a number"));
	}

	else {
		alert("Too high. Guess again!");
		var guess = Number(prompt("Guess a number"));
	}
}
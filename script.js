const choices = ["rock", "paper", "scissors"];
let displayer = document.querySelector(".displayer");
let userScore = 0;
let compScore = 0;

function computerPlay() {
	let randomNum = Math.floor(Math.random() * 3);
	let compChoice = choices[randomNum];
	console.log(`Computer\'s choice is ${compChoice}!`);
	return compChoice;
}

function round(comp, user) {
	if (comp - user == 0) displayer.textContent = "It's a tie!";
	else if ((comp - user > 0 && comp - user != 2) || comp - user == -2) {
		displayer.textContent = "You lost!";
		compScore++;;
	}
	else {
		displayer.textContent = "You won!";
		userScore++;
	}
}

function game(userChoice) {
	let compChoice = computerPlay();
	let comp = choices.indexOf(compChoice);
	let user = choices.indexOf(userChoice);
	let textNodes = Array.from(document.querySelectorAll(".text"));
	textNodes[1].textContent = compChoice;
	textNodes[3].textContent = userChoice;
	round(comp, user);
	textNodes[5].textContent = compScore;
	textNodes[7].textContent = userScore;
}

const buttons = document.querySelectorAll(".buttonCont button ");
buttons.forEach( button => {
	button.addEventListener("click", () => {
		let userChoice;
		if (button.textContent == "R") userChoice = "rock";
		else if (button.textContent == "P") userChoice = "paper";
		else userChoice = "scissors";
		game(userChoice);
		if (compScore == 5) {
			displayer.textContent = "Computer won the game!";
			compScore = 0;
			userScore = 0;
		}
		else if (userScore == 5) {
			displayer.textContent = "You won the game!";
			userScore = 0;
			compScore = 0;
		}
	});
})
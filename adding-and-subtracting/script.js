const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;

for(let i = 0; i < 9; i++) {
	let problemHeading = document.querySelectorAll("h2")[i];
	let problemParagraph = document.querySelectorAll("p")[i];
	let solutionListItem = document.querySelectorAll("li")[i];
	let num1 = Math.floor(Math.random() * 100) + 1;
	let num2 = Math.floor(Math.random() * 100) + 1;
	let problemTypeChoice = Math.floor(Math.random() * 2);

	problemHeading.innerText = `Problem ${i + 1}`;
	if (problemTypeChoice === 0) {
		problemParagraph.innerText = `${num1} + ${num2} = `;
		solutionListItem.innerText = `${add(num1, num2)}`;
	} else {
		problemParagraph.innerText = `${num1} - ${num2} = `;
		solutionListItem.innerText = `${subtract(num1, num2)}`;
	}
}

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
var num1 = parseInt(prompt("Please enter your first number: "));

// 3. Prompts the user for the second number.
var num2 = parseInt(prompt("Please enter your Second number: "));  

// 4. stores that number and responds with the SUM by using an alert.
var option = prompt("Please enter: add, sub, mult, div: ");

switch (option){
	case 'add':
		console.log(num1 + num2);
		break;
	case 'sub':
		console.log(num1 - num2);
		break;
	case 'mult':
		console.log(num1 * num2);
		break;
	case 'div':
		console.log(num1 / num2);
		break;
	default:
		console.log('Sorry, you need to enter one of the above options.');
}

// BONUS: Make a program that can subtract, multiply, and also divide!


// ternary operator
// condition ? expr1 : expr2;

function isUserValid(bool){
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
	"Your account # is " + ( isUserValid(false) ? "1234" : "not available"); 

console.log(automatedAnswer)


// Switch statement
function moveCommand(direction){
	var whatHappens;
	switch (direction){
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You arrived home";
			break;
		case "right":
			whatHappens = "You found a river";
			break;
		case "left":
			whatHappens = "You ran into a slime";
			break;
		default:
			whatHappens = "Please enter a valid direction";
	}
	return whatHappens;
}
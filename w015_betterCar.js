// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// 
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// var age = prompt("What is your age?");

function checkDriverAge(age){
	if (Number(age) < 18) {
		return("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		return("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	}
}



//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function(age){
	if (Number(age) < 18) {
		return("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		return("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	}
}


//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
var age = prompt("What is your age?");
// IF they say they are below 18, respond with:
if(age < 18){
	console.log('Sorry, you are too young to drive this car. Powering off');
}
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
else if(age === 18){
	console.log('Congratulations on your first year of driving. Enjoy the ride!');
}
// "Congratulations on your first year of driving. Enjoy the ride!"
else{
	console.log('Powering on. Enjoy the ride!');
}
// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

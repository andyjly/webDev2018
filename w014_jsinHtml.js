someNum = 5+4;

if (someNum === 9){
	console.log("you're smart!")
}

// Here's how to make a function
function sayHello(){
	console.log("Hello");
}

// Here's a fnction expression
var sayBye = function(){
	console.log("Bye");
}


// It's a pain to keep typing in new console.logs so you can just input 
// vars values into the function
somesong = "Apple pies are lalalada";

function sing(song){
	console.log(song);
}

sing(somesong);

// Here's we use return to give back a value
function multiply(a, b){
	return a*b;
}

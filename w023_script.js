/* Here's a sample how to use dom in js

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("CLICKED!!!")
})

*/


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

// This function creates a new list
function createListElement(){
	// console.log('Click is working!');
		// Here we will create a new list object
		var li = document.createElement("li");
		// here to append child we need to add in some text
		// li.appendChild(document.createTextNode("testing"));
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		// Now we make input empty so it won't keep repeating
		input.value = "";
}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if(inputLength()>0 && event.keyCode === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

/* Old code, our refactored version above!

button.addEventListener("click", function(){
	// This only works if there's a value in the input section
	if (input.value.length > 0){
		// console.log('Click is working!');
		// Here we will create a new list object
		var li = document.createElement("li");
		// here to append child we need to add in some text
		// li.appendChild(document.createTextNode("testing"));
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		// Now we make input empty so it won't keep repeating
		input.value = "";
	}
});


// THIS IS BAD! a lot of repeated code! Need to refactor
input.addEventListener("keypress", function(event){
	// console.log(event.which)
	// This only works if there's a value in the input section
	if (input.value.length > 0 && event.keycode === 13){
		// console.log('Click is working!');
		// Here we will create a new list object
		var li = document.createElement("li");
		// here to append child we need to add in some text
		// li.appendChild(document.createTextNode("testing"));
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		// Now we make input empty so it won't keep repeating
		input.value = "";
	}
});

*/
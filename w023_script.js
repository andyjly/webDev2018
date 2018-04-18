
/* Here's a sample how to use dom in js

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("CLICKED!!!")
})


HERE"S THE ASSIGNMENT
1. If you click on the list item, it toggles the .done class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 

*/


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

var listItem = document.querySelectorAll("li");
var deleteItem = document.querySelectorAll(".delete");

// create a delete button
function createDelete(parent){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.className = "delete";
	parent.appendChild(deleteButton);
}

function deleted(){
	for(var i=0; i<deleteItem.length; i++){
		deleteItem[i].addEventListener("click", function(){
			this.parentNode.remove();
		})
	}
}

function addToggle(){
	this.classList.toggle("done");
}

function inputLength(){
	return input.value.length;
}

// This function creates a new list
function createListElement(){
	// console.log('Click is working!');
		// Here we will create a new list object
		var li = document.createElement("li");
		// // Let's add our delete button here
		// var deleteButton = document.createElement("button");
		// deleteButton.appendChild(document.createTextNode("delete"));

		// here to append child we need to add in some text
		// li.appendChild(document.createTextNode("testing"));
		li.appendChild(document.createTextNode(input.value));
		// li.appendChild(deleteButton);
		ul.appendChild(li);

		li.addEventListener("click", addToggle);
		createDelete(li);
		deleteButton = document.querySelectorAll(".delete");
		deleted()

		// li.addEventListener("click", function changeClass(){
		// 	this.classList.toggle("done");
		// });

		// deleteButton.addEventListener('click', () => {
		// 	ul.removeChild(li);
		// })

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


for ( var i = 0 ; i < listItem.length; i++) {
	listItem[i].addEventListener("click", addToggle);
	createDelete(listItem[i]);
	dlt = document.querySelectorAll(".delete");
}

deleted();



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
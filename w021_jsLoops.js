var todos = [
	"clean room",
	"brush teeth",
	"make food",
	"wash dishes",
	"go sleep"
];

// Here's a simple for loop
// we initialize a var i to use with value of 0
// then while out i value is less than the length of the array todos
// we execute whatever is inside, after we are done we increment i by 1
for (var i=0; i< todos.length; i++){
	// console.log(todos[i]+"!");
	todos[i] = todos[i]+"!"
	// if we want to pop we don't do todos[i].pop()
	// but do: todos.pop()
	// but this will mess up with the todos.length
	// to solve is just to create a var to store the original length
}

console.log(todos)

// here's a foreach method
todos.forEach(function(todo, i){
	console.log(todo, i);
})

// We can even do this with the forEach
function logTodos(todo, i){
	console.log("something " + todo, i);
}

todos.forEach(logTodos);


// Here's a while loop
var counter = 10
while(counter > 0){
	console.log(counter);
	counter--;
}

// Here's a do while loop
// difference is that it runs first then checks the condition
// while the normal while loop checks condition first before running
var counterTwo = 10
do{
	console.log(counterTwo)
	counterTwo--;
}while(counterTwo > 0);



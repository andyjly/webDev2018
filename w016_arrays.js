// here we make an array
var list = ["apple", "pear", "peaches", "pineapples"];
// Here's how we access an array
// NOTE: we start counting from 0, so 1 is actually pear
console.log(list[1]);
// debug(list[1]);

// can have array of nums, boolean, string, even functions
var functionList = [function apple(){
	console.log("apple");
}]

// Can combine with many, but ill advised for performance

// Can also have an array of array
var list = [
	["apple", "pear", "peaches", "pineapples"]
];

console.log(list[0][2]);

// shifts removes from beginning
list.shift();
console.log(list);
// pop grabs from end
list.pop();
console.log(list);
// push adds into
list.push("oranges");
console.log(list);

// can concat, but this actually created a new array we didn't assign to a var
list.concat(["durians", "mangoes"]);

// even if you sort it only sorts the original, so not the one concat above
list.sort()
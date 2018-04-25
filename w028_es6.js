
// let and const
// constant variables always have the same value; cannot be changed
// let if you want to change vcalues
const player = "billy";
let experience = 100;
let warriorLevel = false;

if (experience > 90){
	// let makes it so even inside if statements, the variable is separate from the outside
	let warriorLevel = true;
	console.log('inside', warriorLevel);
}

console.log('outside', warriorLevel);

// You can change the properties of the object still, but you can't reassign the variable
const obj = {
	player: 'billy',
	experience: 100,
	mana: 50,
	warriorLevel: false
}

obj.warriorLevel = true;

console.log("warriorlevel is", obj.warriorLevel)


// DESTRUCTURING
// const player = obj.player;
// const experience = obj.experience;
// const mana = obj.mana;
// let warriorlevel = obj.warriorlevel;

// destructuring allows us to do this instead of typing out one by one like above
const{player2, experience2, mana2} = obj;
let {warriorlevel2} = obj;


// here's some new ways of declaring obj properties
const someName = 'john smith';

const obj2 = {
	[someName]: 'hello',
	['ray' + 'snow']: 'heya'
}


const a = "Simon";
const b = false;
const c = {};

// we can remove the declaration with value if they have same name
// instead of 
// const obj3 = {
// 	a:a,
// 	b:b,
// 	c:c
// }
const obj3 = {
	a,
	b,
	c
}


// TEMPLATE STRINGS: uses backticks for this
const name = "Bill";
const age = 34;
const pet = "dog";
// compared to old method of "something, " + var + "something " + var2 + "something."
// you can have it all within the ` ` without needing the + 
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have. ` 
console.log(greetingBest)


// Default arguments
function greet(name2='', age2=30, pet2='cat'){
	return `Hello ${name2} you seem to be ${age2-10}. What a lovely ${pet2} you have. `
}



// SYMBOL, they create a unique type, so no conflicts
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3);



// ARROW FUNCTIONS

function add0(a,b){
	return a + b;
}

// basically equivalent to 
const add2 = (a,b) => {
	return a+b;
} 

// Exact same thing as above
const add = (a,b) => a + b;

console.log(`Let's try this out ${add(4,2)}`)

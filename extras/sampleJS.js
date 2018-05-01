// if, else
if (x === 1) {
  // do things here
} else if (x === 2) {
  // do some other things here
} else {
  // do this
}

// Loops 
// The $ in the variable name is only part of the name, but the convention is 
// to use it to start variable names when the variable represents a jQuery object.
for (let i = 0; i < 10; i++) {
  console.log(`i is ${i}`);
}

// While loops
let i = 0;

while (i < 10) {
  console.log(`i is: ${i}`);
  i++;
}

// Functions
const message = "Hello World";

function helloWorld(msg) {
  console.log(msg);
}

helloWorld(message);


// Arrays
const myArray = ["apple", "orange", "pear"];
const myArray = [
  "hockey",
  "lacrosse",
  "curling"
];

for (let i = 0; i < myArray.length; i++) {
  console.log(`element ${i}: ${myArray[i]}`);
}

// alternatively, and even better!

myArray.forEach((element, index) => console.log(`element ${index}: ${element}`));



// Objects
const myObj = {
  fruit: "apple",
  drink: "water",
  dessert: "cookie"
};

for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}

// alternatively, and even better
Object.keys(myObj).forEach(key => console.log(`${key}: ${myObj[key]}`));



// Loop through an array of objects, printing out the key / value pairs 
// of each object within the array
const myData = [
  {
    name: "Tom",
    age: 22,
    favoriteFood: "pizza"
  },
  {
    name: "Jane",
    age: 42,
    favoriteFood: "sushi"
  },
  {
    name: "Fred",
    age: 34,
    favoriteFood: "lettuce"
  }
];

myData.forEach((item, index) => {
  Object.keys(item).forEach(key =>
      console.log(`myData[${index}][${key}] is ${myData[index][key]}`));
});



// JQuery
// linking JQuery into html file (usually placed at the end)
// <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>


// Listen for form submission, and print the user-submitted value to the console
function watchSubmit() {
  $('#js-search-form').submit(event => {
      event.preventDefault();
      const query = $(this).find('#zip-code-search').val();
      console.log(query);
   });
};

$(watchSubmit);
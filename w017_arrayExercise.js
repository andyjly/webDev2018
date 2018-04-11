// Note: I'm using debug vs console.log since this works with sublime JSC and the other doesn't

// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift();
debug("1. " + array);

// 2. Sort the array in order.
array.sort();
debug("2. " + array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
debug("3. " + array);

// 4. Remove "Apples" from the array.
applePos = array.indexOf('Apples')
// array.remove("Apples"); // no such thing
array.splice(applePos,1)
debug("4. " + array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
debug("5. " + array);

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
// this will return -1 since it can't access using basic indexOf unless you
// use forloop
orangePos = array2.indexOf("Oranges")
debug("6. " + orangePos)

// since I already know the array I'll just grab directly
debug(array2[1][1][0])
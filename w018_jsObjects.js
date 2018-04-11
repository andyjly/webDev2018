// Objects is good at containing user data and things similar
// compared to a list which is good for something like shopping lists and etc

// Here's a sample of an object
var user = {
	name: "Bob",
	age: 25,
	hobby: "Gaming",
	isMarried: false,
	skills: ["neet", "couchpotatot", "potatoMunch"],
	// functions inside object is called a method
	shout: function(){
		debug("AHhhh?!")
	}
};

// Here's how to access the object
debug(user.name + " likes " + user.hobby + " and is married? " + user.isMarried)

// you can change obj values like this
user.hobby = "idol"
user.isMarried = true
debug(user.name + " likes " + user.hobby + " and is married? " + user.isMarried)

// we can have a list of users
var list = [
	{
		username: "Jack",
		password: "secret"
	},
	{
		username: "bob",
		password: "321"
	}
];

// Here's how to access things within obj -> arrays and vice versa
debug("obj to list: "+user.skills[1])
debug("list to obj: "+list[1].password)
debug("list to obj identical to above: "+list[1]["password"])

// Here we use the shout method from user
user.shout()


// Here's our last data type: null
// means there's nothing in our object
// with emptyObj you can still add things inside.
var emptyObj = {}
// Completely empty
var nullObj = null
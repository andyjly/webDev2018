var database = [
	{
		username: "jan",
		password: "sunner"
	}
];

var newsFeed = [
	{
		username: "bob",
		timeline: "So tired from just studying!"
	},
	{
		usrname: "sue",
		timeline: "Ahh I have a headache"
	}
];

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn(user, pw){
	if (user === database[0].username && 
		pw === database[0].password){
		console.log(newsFeed);
	}else{
		alert("Wrong username and/or password");
	}
}

signIn(userNamePrompt, passwordPrompt);
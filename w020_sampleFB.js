var database = [
	{
		username: "jan",
		password: "sunner"
	},
	{
		username: "feb",
		password: "hearts"
	},
	{
		username: "mar",
		password: "clovers"
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

// This part was made after w021
function isUserValid(user, pw){
	for(var i=0; i<database.length; i++){
		if (user === database[i].username && 
			pw === database[i].password){
			return true;
		}
	}
	return false;
}

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

// This was also editted after w021
function signIn(user, pw){
	if (isUserValid(user, pw)){
		console.log(newsFeed);
	}else{
		alert("Wrong username and/or password");
	}

	console.log(isUserValid(user, pw));
}

signIn(userNamePrompt, passwordPrompt);
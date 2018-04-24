var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// let's try add a 3rd color
var color3 = document.querySelector(".color3");

var body = document.getElementById("gradient")

var randButton = document.createElement("button");
randButton.appendChild(document.createTextNode("randomizer"));
body.appendChild(randButton);

// console.log(css);
// console.log(color1);
// console.log(color2);


function setGradient(){
	body.style.background = "linear-gradient(to right, " 
							+ color1.value 
							+ " ," 
							+ color2.value 
							+ " ,"
							+ color3.value 
							+ ")";
	// This edits our text in our h3 telling us the gradient color
	css.textContent = body.style.background + ";"
}

function randomColor(){
	var clr1 = getRandColor();
	var clr2 = getRandColor();
	var clr3 = getRandColor();
	body.style.background = "linear-gradient(to right, " + clr1 + " , " + clr2 
	+ " , " + clr3 + ")";
	css.textContent = body.style.background + ";";
}

function getRandColor(){
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}


// // This makes the default color be applied 
// color1.addEventListener("load", setGradient());

// color2.addEventListener("load", setGradient());

// Note: we use setGradient and not setGradient() since we want it to be called 
// everytime we enter some input, instead of being called once
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Here's one for the random button
randButton.addEventListener("click", randomColor);

// Applies random color at beginning
randomColor();

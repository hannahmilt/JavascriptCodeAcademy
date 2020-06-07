// if statement

let sale = false;
if (sale) {
	console.log("Time to buy!");
}

//if else statement
else {
	console.log("Time to wait for a sale.")
}
//Comparison Operators
// Less than: <
// Greater than: >
// Less than or equal to: <=
// 	Greater than or equal to: >=
// is equal to: ===
// Is not equal to: !==
let hungerLevel = 7;
if (hungerLevel<=7) {
	console.log("Time to eat!");
}else{
	console.log("We can eat later!");
}

//Logical Operators
	//boolean values true or false
	//the and operator &&
		//both conditions must evaluate to true to execute true other wise it will evaluate false and the else block will execute.
	// the or operator ||
		//Only one of the conditions must evaluate to true for the overall statement to evaluate to true.
	//the not operator, otherwise know as the bang operator !
		//! reverses the value of a boolean. will either take a true value and pass back false or it will take a false value
		// and pass back true.
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood==="sleepy"&&tirednessLevel >8) {
	console.log("time to sleep");
}else{
	console.log("not bed time yet");
}

//Truthy and Falsy
	//Checking if variable exists/assigned a value

let myVariable = "I Exist";
if (myVariable) {
	console.log(myVariable)
}else {
	console.log("The variable does no exist.")
}
	//the code block in the if statement will run because my Variable is not explicitly the value true, it evaluates to true
	// because it has been assigned a non-falsy value
//When values are falsy -- or evaluate to false. List of values includes: 0, empty strings"", null, undefined, NaN (Not a Number)

let numberOfApples = 0;

if (numberOfApples){
	console.log("Let us eat apples!");
}else{}
console.log("No apples left!");

//Example
	//Change the value of wordCount so that it is truthy
let wordCount=61;
if(wordCount){
	console.log("Great! You've started your work!");
}else{
	console.log("Better get to work!");
}

	//change value of favoritePhrase so that it is still a string but falsy
let favoritePhrase="";
if(favoritePhrase){
	console.log("This string doesn't seem to be empty");
}else{
	console.log("This string is definitely empty");
}

//Have website that makes personalized greeting. Sometimes the used does not have an account, making the username variable falsy
//the code below checks if the username is defined and assigns a default string if it is not:
let username = ""; //this line is not included in example put it because it breaks
// let defaultName;
// if (username){
// 	defaultName = username;
// }else{
// 	defaultName = "Stranger";
// }
	//short-hang for the code above
let defaultName = username || "Stranger";
//because || checks the left-hang condition first, the variable defaultName will be assigned the actual value of username if
// it is truthy and with be assigned the value of "Stranger" if user name is falsy
// Also called short-circuit evaluation

//Example
//Use short-circuit evaluation to assign a value to writingUtensil the value of toll and if tool is falsey, assign a default
// value of pen.

let tool ="";
let writingUtensil = tool || "pen";
console.log("The ${writingUtensil} is mightier than the sword");
//for some reason the variable is not being called right in middle of sentence

//Ternary Operator
 //can use ternary operator to simplify an if ...else statement
//if else example
let isNightTime=true;
if (isNightTime){
	console.log("Turn off the lights!");
}else{
	console.log("Turn off the lights!");
}

		//ternary operator example
isNightTime ? console.log("Turn off the lights") : console.log("Turn off the lights!");
		//The condition isNightTime is provided before the ?
		//RTwo expressions follow the ? and are separated by a colon :
		//If the condition evaluates to tur, the first expression executes
		//If the condition evaluated to false, the second expression executes.
		//ternary operators can be used for conditions which evaluate to true of false

		//examples
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase1 = 'Love That!';

favoritePhrase1 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
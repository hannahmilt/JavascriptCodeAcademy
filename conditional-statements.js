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

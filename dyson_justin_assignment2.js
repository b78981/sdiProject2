/*
By Justin Dyson
SDI Assignment 2
Term 1401
Completed 01/16/14
*/


// Global Variables
var userName; // string
var userPokeCount; // number
var wantsPokemon; // boolean
var fullBelt; // boolean that holds the boolean function return
var trainingBattles; // number
var totalExpGained; // number that holds the number function return 
var finalPokeCountString; // string
var finalExpCountString; // string
var pokeAndExpTotals; // string value retuned from getPokeAndExpTotalsString


// Functions

//procedure: based on userPokeCount, announces the next step for Pokemon trainer
var suggestPokeTask = function (pokeCount) {			
	if (pokeCount < 6) {
		console.log("You need to catch some Pokemon!");
	} 
	else {
		console.log("You need to start training your Pokemon!");
		};
	return;
	};
	
//boolean function: returns boolean value of TRUE
var catchPoke = function (addToBelt,pokeCount) { 			
	if (addToBelt) {	
		while (pokeCount < 6){
			pokeCount ++;
			console.log("Great " + userName + " you now have " + pokeCount + " Pokemon!");
			} 
		console.log("Your Poke-belt is full!");
		return true
		};
	};

// number function: returns a number called totalExp
var trainPoke = function (trainingRounds) {
	var rattataExp = 22;	// number of experience points earned 
	var pidgeyExp = 17;	// number of experience points earned 
	var userOpponentPick; // string
	var totalExp = 0; // number
	
	
	for (trainingRounds; trainingRounds > 0; trainingRounds-- ) {
		userOpponentPick = prompt("Who is your opponent.", "Pidgey or Rattata");
		if (userOpponentPick ==="Pidgey") {
			totalExp = totalExp + pidgeyExp;
			console.log("Your Exp increased by " + pidgeyExp + ".");
			} else if (userOpponentPick === "Rattata") {
				totalExp = totalExp + rattataExp;
				console.log("Your Exp increased by " + rattataExp + ".");
				};
		};
	return totalExp;
	};
	
// string function, returns string called 
var getPokeAndExpTotalsString = function (pokeCountString, expCountString) {
	var totalCountsString;
	
	return totalCountsString = "Congratulations " + userName + ", " + pokeCountString + " and " + expCountString;
	};


// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

suggestPokeTask(userPokeCount); 

wantsPokemon = confirm("Alright, " + userName + " do you want to catch more Pokemon?");

if (wantsPokemon){
	fullBelt = catchPoke(wantsPokemon, userPokeCount); 
	userPokeCount = 6;
	trainingBattles = prompt("Now you must train. How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles);
	}
else {
	console.log("Alright, let's start training");
	trainingBattles = prompt("How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles);
	};
	
finalPokeCountString = "you have " + userPokeCount + " Pokemon"
finalExpCountString = "you gained " + totalExpGained + " experience"

pokeAndExpTotals = getPokeAndExpTotalsString(finalPokeCountString, finalExpCountString);

console.log(pokeAndExpTotals);
		





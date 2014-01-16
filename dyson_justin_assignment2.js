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

//procedure: suggests the next step for Pokemon trainer based on the number of Pokemon he/she has
var suggestPokeTask = function (pokeCount) {			
	if (pokeCount < 6) {
		console.log("You need to catch some Pokemon!");
	} 
	else {
		console.log("You need to start training your Pokemon!");
	};
		
	return;
	
};

//boolean function: simulates catching Pokemon, returns boolean value of TRUE	
var catchPoke = function (addToBelt,pokeCount) {
	while (addToBelt) {
		if (pokeCount < 6){
			pokeCount ++;
			console.log("Great, " + userName + " you now have " + pokeCount + " Pokemon!");
			console.log("...searching for more Pokemon...");
		} else {
			console.log("Your Poke-belt is full! Gather some Exp to make your Pokemon stronger.");
			addToBelt = false;
		};
	};
	
	return true;
};

// number function: simulates training Pokemon to gain experience Returns a number called totalExp.
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
	
// string function: concatenates 2 strings that announce the total amount of Pokemon and Exp gained, returns string called totalCountsString
var getPokeAndExpTotalsString = function (pokeCountString, expCountString) {
	var totalCountsString;
	
	return totalCountsString = "Congratulations " + userName + ", " + pokeCountString + " and " + expCountString + ".";
	
};


// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

suggestPokeTask(userPokeCount); // userPokeCount passes the number of Pokemon the user has to the function

wantsPokemon = confirm("Alright, " + userName + " do you want to catch more Pokemon?");

if (wantsPokemon){
	fullBelt = catchPoke(wantsPokemon, userPokeCount); // wantsPokemon passes boolean= true & userPokeCount is number of Pokemon the user has
	userPokeCount = 6;
	trainingBattles = prompt("Gain Exp by training. How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles); // trainingBattles is number passed so loop can run 1-3 times
}
else {
	console.log("Alright, let's start training.");
	trainingBattles = prompt("Gain Exp by training. How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles); // trainingBattles is number passed so loop can run 1-3 times
};
	
finalPokeCountString = "you have " + userPokeCount + " Pokemon"
finalExpCountString = "you gained " + totalExpGained + " experience"

pokeAndExpTotals = getPokeAndExpTotalsString(finalPokeCountString, finalExpCountString);
/* finalPokeCountString is a string passed to provide userPokeCount total & finalExpCountString is a string passed to 
provide totalExpGained total*/

console.log(pokeAndExpTotals);
		





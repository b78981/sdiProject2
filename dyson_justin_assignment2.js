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


// Functions

//procedure: based on userPokeCount, announces the next step for Pokemon trainer
var findPokeTask = function (pokeCount) {		
	var pokeCount;
	
	if (pokeCount < 6) {
		console.log("You need to catch some Pokemon!");
	} 
	else {
		console.log("You need to start training your Pokemon!");
		};
	return;
	};
	
//boolean function: returns TRUE
var catchPoke = function (addToBelt,pokeCount) { 			
	var addToBelt; // boolean
	var pokeCount; // number

	if (addToBelt) {	
		while (pokeCount < 6){
			pokeCount ++;
			console.log("Great " + userName + " you now have " + pokeCount + " Pokemon!");
			} 
		console.log("Your Poke-belt is full!");
		return true
		};
	};

// number function: returns
var trainPoke = function (trainingRounds) {
	var trainingRounds; 	// number value from trainingBattles
	var rattataExp = 22;	// number of experience points earned 
	var pidgeyExp = 17;	// number of experience points earned 
	var userOpponentPick; // string
	var totalExp = 0; // number
	
	for (trainingRounds; trainingRounds > 0; trainingRounds-- ) {
		userOpponentPick = prompt("Choose an opponent.", "Pidgey or Rattata");
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

// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

findPokeTask(userPokeCount); 

wantsPokemon = confirm("Alright, " + userName + " do you want to catch more Pokemon?");

if (wantsPokemon){
	fullBelt = catchPoke(wantsPokemon, userPokeCount); 
	userPokeCount = 6;
	trainingBattles = prompt("Now you must train. How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles);
	}
else {
	trainingBattles = prompt("How many training battles do you want to have?","Choose 1-3");
	totalExpGained = trainPoke(trainingBattles);
	};
	

console.log(userPokeCount);
console.log(fullBelt);		// will not print if not used in the IF statement
console.log(totalExpGained);		// will not print if not used in the IF statement









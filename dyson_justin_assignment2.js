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


// Functions

var findPokeTask = function (pokeCount) {		//procedure: based on pokeCount, announces the next step for Pokemon trainer
	var pokeCount;
	
	if (pokeCount < 6) {
		console.log("You need to catch some Pokemon!");
	} 
	else {
		console.log("You need to start training your Pokemon!");
		};
	return;
	};
	
var catchPoke = function (addToBelt,pokeCount) { 			//boolean function: returns beltIsFull
	var addToBelt; // boolean
	pokeCount; // number

	if (addToBelt) {	
		while (pokeCount < 6){
			pokeCount ++;
			console.log("Great " + userName + " you now have " + pokeCount + " Pokemon!");
			} 
		console.log("Your Poke-belt is full!");
		return beltIsFull
		};
	};


// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

findPokeTask(userPokeCount); 

wantsPokemon = confirm("Alright, " + userName + " do you want to catch more Pokemon?");

if (addToBelt){
	catchPoke(addToBelt, userPokeCount);
	} 
else {
	trainPoke();
	}












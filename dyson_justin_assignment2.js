/*
By Justin Dyson
SDI Assignment 2
Term 1401
Completed 01/16/14
*/


// Global Variables
var userName; // string
var userPokeCount; // number
var isUserReady; // boolean

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
	
var catchPoke = function (userIsReady,pokeCount) { 			//boolean function: returns beltIsFull
	if (userIsReady) {
		while (pokeCount < 6) {
			pokeCount ++;
			console.log("Great " + userName + ", you now have " + pokeCount + " pokemon on your Poke-belt!");
			};
	}
	else {
		console.log("Too bad! The wild Pokemon aren't waiting for you to be ready; here they come!");
		while (pokeCount < 6) {
			pokeCount ++;
			console.log("Great " + userName + ", you now have " + pokeCount + " pokemon on your Poke-belt!");
			}
		};
		return beltIsFull, pokeCount;
	};


// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

findPokeTask(userPokeCount); 

isUserReady = confirm("Alright, " + userName + " are you ready to start exploring?");

catchPoke(isUserReady, userPokeCount);

console.log(catchPoke(pokeCount));









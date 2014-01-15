/*
By Justin Dyson
SDI Assignment 2
Term 1401
Completed 01/16/14
*/


// Global Variables
var userPokeCount;

// Functions

var getPokeCount = function (pokeCount) {
	if (pokeCount < 6) {
		console.log("We need to catch some Pokemon!");
		} else {
			console.log("We don't have anymore room for new Pokemon...");
			};
	};


// Main Code


userPokeCount = prompt("How many Pokemon do you have?", "Enter value 1-6");
getPokeCount(userPokeCount);
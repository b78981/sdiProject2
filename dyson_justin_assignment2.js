/*
By Justin Dyson
SDI Assignment 2
Term 1401
Completed 01/16/14
*/


// Global Variables
var userName;
var userPokeCount;

// Functions

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


// Main Code

userName = prompt("Hi! What's your name?","");

userPokeCount = parseInt(prompt(userName + ", how many Pokemon do you have?", "Enter value 1-6"));

findPokeTask(userPokeCount); 

confirm("Alright, " + userName + " are you ready to start exploring?");










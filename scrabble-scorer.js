// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {

   const wordChoice = input.question('\nWelcome to the Scrabble Score Calculator!\nEnter a word to score: ');
   //let userWord = oldScrabbleScorer(wordChoice);
   //return userWord;
   return wordChoice;
};

//console.log(initialPrompt());



let simpleScore = function(word) {
  let wordScore = word.toUpperCase().length;
  return wordScore;
};
//console.log(simpleScore('wunderbar'));


let vowelBonusScore = function(word) {
  let userAnswer = word.toUpperCase();
  let newArray = userAnswer.split('');
  let vowels = 0;
  let consonants = 0;
  let vowelsArray = ['A', 'E', 'I', 'O', 'U'];

  for (let i=0; i<newArray.length; i++) {
    if (vowelsArray.includes(newArray[i])) {
      vowels += 3;
    } else {
      consonants += 1;
    }
  }

  let wordScore = vowels + consonants;

  return wordScore;
};

//console.log(vowelBonusScore('bar'));

let simple = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
};

let bonus = {
  name: "Bonus Vowels",
  description: "Consonants are worth 1, Vowels worth 3.",
  scorerFunction: vowelBonusScore
};

let scrabble = {
  name: "Scrabble",
  description: "Traditional scrabble scoring algorithm.",
  scorerFunction: oldScrabbleScorer
};


//fix scrabble score!
function scrabbleScore(word){
  word = word.toUpperCase();
  let points = 0;

  for (let i = 0; i < word.length; i++) {
    for (const letter in newPointStructure) {
      if (letter.includes(word[i])) {
        points += Number(newPointStructure[letter]);
      }
    }
  }
  return points;
}

let newScrabbleScorer = {
  name: "Scrabble 2.0",
  description: "OG Scrabble Scoring",
  scorerFunction: scrabbleScore
}

const scoringAlgorithms = [simple, bonus, newScrabbleScorer];


function scorerPrompt() {
  let scoringChoice = input.question(`\nWhich scoring algorithm would you like to use?\n0 - ${simple.description}\n1 - ${bonus.description}\n2 - ${scrabble.description}\nEnter a 0, 1, or 2: `);
  scoringChoice = Number(scoringChoice);
  return scoringAlgorithms[scoringChoice].scorerFunction;
}

let newPointStructure = {
  
};

function transform(oldPointStructure) {
  for (pointValue in oldPointStructure) {
    for (let i=0; i<11 ;i++) {
      newPointStructure[oldPointStructure[pointValue][i]] = Number(pointValue);
    }
  }
  return newPointStructure;
};

//this is where i left on 6/18 @ 11am


function runProgram() {
  transform(oldPointStructure);
  let word = initialPrompt();
  let chosenAlgo = scorerPrompt();

  console.log(`\nScore for '${word}': ${chosenAlgo(word)}`);

}




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


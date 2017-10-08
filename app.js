
// will be used to validate user input and accommodate user enter all-caps answers as well.
// Include usefull and well written console.log() messages
// correctly display to the brower console for each question of the guessing game.
// set the initial values for the variables used later.
'use strict';

var playerScore = 0;

//  Ask the player their name
var playerName = prompt('Greatings player, please tell me your name.');
console.log('Player entered their name as ' + playerName + '.');

// Ask player their first question.
function firstQuestion(){
  var firstQuestion = prompt('Did I drive to school today ' + playerName + '?' + ' Please answer either Yes or No.').toUpperCase();
  console.log('Player entered answer ' + firstQuestion + '.');

  // Evaluate player answer.
  if (firstQuestion === 'NO' || firstQuestion === 'N') {
    console.log('Player entered firstQuestion answer as ' + firstQuestion + '.');
    alert('Great guess ' + playerName + '. Riding the bus saves me a lot of money on gas and parking.' );
    playerScore++;
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  } else {
    alert('Sorry, ' + playerName + '. I actually take the train/bus to work every day, and then take the bus from work to here on school nights.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  }
}
firstQuestion();
// Ask player their second question

function secondQuestion(){

  var secondQuestion = prompt('Do I like to play baseball ' + playerName + '?' + ' Please answer either Yes or No.').toUpperCase();
  console.log('Player entered secondQuestion answer as ' + secondQuestion + '.');

  // Evaluate the answer to the second question.

  if (secondQuestion === 'NO' || secondQuestion === 'N') {
    alert('Great guess ' + playerName + '. I haven\'t played baseball since Highschool.');
    playerScore++;
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  } else {
    alert('Sorry ' + playerName + '. I haven\'t played baseball since Highschool.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  }
}
secondQuestion();
// ask the player thier third question
function thirdQuestion(){
  var thirdQuestion = prompt('Do I like to play the guitar, ' + playerName + '?' + ' Please answer either Yes or No.').toUpperCase();
  console.log('Player entered answer ' + secondQuestion + '.');

  // Evaluate the player answer.

  if (thirdQuestion === 'NO' || thirdQuestion === 'N') {
    alert('Great guess ' + playerName + '. I \(currently anyway\) do not know how to play any musical instrament.');
    playerScore++;
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  } else {
    alert('Sorry, ' + playerName + ' I unfortunately do not \(currently anyway\) know how to play any musical instrament.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  }
}
thirdQuestion();
// Ask fourth question.
function fourthQuestion(){
  var fourthQuestion = prompt('Do I like to SCUBA dive, ' + playerName + '?' + ' Please answer either Yes or No.').toUpperCase();
  console.log('Player entered answer ' + fourthQuestion + '.');

  //  Evaluate their answer.

  if (fourthQuestion === 'YES' || fourthQuestion === 'Y') {
    playerScore++;
    alert('Great Guess ' + playerName + '! I love SCUBA diving. Unfortunately it has has been a long time since I have last been diving. I hope to do so again soon.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  } else {
    alert('Sorry, wrong answer, ' + playerName + '. I actually love to go SCUBA diving, it has taken me all over the world.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  }
}
fourthQuestion();
// Ask the player thier fifth question.
function fifthQuestion(){
  var fifthQuestion = prompt('Do I like to read mystery novels ' + playerName + '?' + ' Please answer either Yes or No.').toUpperCase();
  console.log('Player entered answer ' + fifthQuestion + '.');

  // evaluate their answer.

  if (fifthQuestion === 'NO' || fifthQuestion === 'N') {
    alert('Great guess ' + playerName + '! I have read a few mystery novels, but I would much rather read Sci-fi.');
    playerScore++;
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  } else {
    alert('Sorry, wrong answer, ' + playerName + '. I have read a few mystery novels, but I would much rather read Sci-fi.');
    alert('Your score is ' + playerScore + ' ' + playerName + '.');
  }
}
fifthQuestion();
// setup variables for number guess question.

function sixthQuestion(){
  var highValue = 200;
  var lowValue = 1;
  var userGuess = prompt ('Hello, ' + playerName + ' can you guess my number? Please enter a number between ' + lowValue + ' and ' + highValue + '.');
  var userNumberConverted = parseInt(userGuess);
  var guessCount = 0;

  // begin loop. Loop will continue until the user enters the correct number.

  while (userNumberConverted != 42) {
    userNumberConverted = parseInt(userGuess);
    console.log ('Player entered ' + userGuess + '.' );
    guessCount++;
    if (userNumberConverted < 42){
      lowValue = userNumberConverted;
      alert ('You\'re guess was incorrect. Please guess a higher number.');
      userGuess = prompt ('Please guess again, ' + playerName + ' enter a number between ' + lowValue + ' and ' + highValue + '.' );
      userNumberConverted = parseInt(userGuess);
    } else {
      highValue = userNumberConverted;
      alert ('You\'re guess was incorrect. Please guess a lower number.');
      userGuess = prompt ('Please guess again, enter a number between ' + lowValue + ' and ' + highValue + '.' );
      userNumberConverted = parseInt(userGuess);
    }
  }

  if (guessCount === 0 && userNumberConverted === 42) {
    alert ('congratulations,' + playerName + ' you guessed the correct number on the first try!');
  } else {
    alert ('congratulations, ' + playerName + ' you guessed the correct number in ' + guessCount + 'tries.');
  }
}
sixthQuestion();
//  Array question

// States I have been SCUBA diving
// Washington, California, Florida, Virginia, North Carolina, Oregon
function seventhQuestion(){
  var statesBeenDiving = ['WA', 'Washington', 'CA', 'California', 'FL', 'Florida', 'VA', 'Virgina', 'NC', 'North Carolina', 'OR', 'Oregon' ];
  // Five Guesses

  var guesses = 5;
  var guessesMade = [];
  // var enterLoop will force the while loop to run.
  var enterLoop = false;
  var enterLoopTwo = false;
  var seventhQuestion = prompt ('Hello, ' + playerName + ', can you guess a state I have been SCUBA diving in?');

  while (!enterLoop && guesses > 1) {
    var correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
    console.log(correctAnswer);
    if (correctAnswer > -1){
      alert ('That is correct ' + playerName + '! ' + seventhQuestion + ', is a state I have been diving in.');
      playerScore++;
      alert('Your  final score is ' + playerScore + ' ' + playerName + '.');
      enterLoop = true;
    } else {
      guesses--;
      guessesMade.push(seventhQuestion);
      correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
    }
    while (guessesMade.length === 1 && !enterLoopTwo && correctAnswer === -1 ) {
      seventhQuestion = prompt('Sorry ' + playerName + ', ' + guessesMade + ' is not yet a state I have been diving in. You have ' + guesses + ' attempts left to name a state I have been diving in, please try again.');
      guessesMade.push(seventhQuestion);
      correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
      enterLoopTwo = true;
    }
    if (correctAnswer === -1 ){
      seventhQuestion = prompt('Sorry ' + playerName + ', [' + guessesMade + '] are not yet states I have been diving in. You have ' + guesses + ' attempts left to name a state I have been diving in, please try again.');
      correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
    }
  }
  alert ('Sorry ' + playerName + ' you did not guess a state I have been diving in. Please try again. You\'re final score is:' + playerScore + ' ' + playerName + '.');
}
seventhQuestion();

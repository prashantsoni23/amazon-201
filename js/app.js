'use strict';

/*use of arrays*/
var questions = ['Have I visited the United States anytime?',
  'Had I not entered into this profession, I would be a singer. Yes or No?',
  'Am I sad that Peoplesoft is going away?',
  'Do I live in Hyderabad?',
  'Am I crazy about cars?'];
var correctAns, message;
var answersShort = ['Y', 'N', 'N', 'Y', 'Y'];
var answersLong = ['Yes', 'No', 'No', 'Yes', 'Yes'];
var correct = 0;
var yesCriterion = ['y', 'yes'];
var noCriterion = ['n', 'no'];
var initialQuestion = prompt('Shall we play a game - Yes or No');
console.log(initialQuestion);
if (initialQuestion.toLowerCase() === yesCriterion[0] || initialQuestion.toLowerCase() === yesCriterion[1]) {
  do {
    var userName = prompt('Awesome.. Let\'s start with your name.. What do you want to be called as?');
    console.log('User Name:', userName);
  }
  while (userName === null || userName.trim() === '');
  userName = userName.trim();
  alert('Hi ' + userName + '... I\'m going to ask you few questions. You need to answer these questions in either yes or no.');
  for (var i = 0; i < questions.length; i++) {
    do {
      var userAnswer = prompt(questions[i]);
      console.log('Q' + (i + 1) + ' ' + questions[i] + '\n' + 'A' + (i + 1) + ' ' + userAnswer);
    }
    while (userAnswer === null || userAnswer.trim() === '');
    alert(validateYNAnswer(userAnswer, i));
  }
  alert('You guessed ' + correct + ' answers correctly. Now an algebra question coming for you!');

  /*While loop below*/

  var algebraAnswer;
  var counter = -1;
  while (algebraAnswer !== 49) {
    algebraAnswer = parseInt(prompt('What is square of number 7?'));
    alert(validateSquareRoot(algebraAnswer, 49));
    counter++;
  }
  console.log('Number of wrong attempts to get the correct answer of square root of 7:', counter);

  /*For loop below*/

  var flag = false;
  var forCounter;
  var attemptCount = 0;
  var singers = ['Arijit Singh', 'Sonu Nigam', 'Atif Aslam'];

  while (!flag && attemptCount < 6) {
    do {
      var answer = prompt('Which is one of my favorite singer??');
    }
    while (answer === null || answer.trim() === '');
    message = validateFavorite(answer, singers);
    if (flag === true) {
      alert(message);
      break;
    }
    else if (attemptCount<6) {
      alert(message);
      continue;
    }
    else {
      break;
    }
  }
  if (attemptCount >=6) {
    alert ('You exhausted all your chances.. take some rest now!');
  }

  var finalReport = 'So ' + userName + ', here is your report card: ' + '\n'
    + 'Guess Game: ' + correct + ' right answer/s out of 5' + '\n'
    + 'Algebra: ' + counter + ' wrong attempt/s to get square of number 7' + '\n'
    + 'My favorite singer: ' + attemptCount + ' wrong attempt/s to get to tell one of my favorite singer';
  alert(finalReport);

}
else if (initialQuestion.toLowerCase() === noCriterion[0] || initialQuestion.toLowerCase() === noCriterion[1]) {
  alert('Gottcha.. seems like you are busy.. let\'s play it some other time.. bye for now');
}
else {
  alert('Invalid Response... seems like you are sleepy!. We\'ll play this game some other time');
}

function validateYNAnswer(userGuess, n) {
  if (userGuess.toUpperCase() === answersShort[n] || userGuess.toUpperCase() === answersLong[n].toUpperCase()) {
    correct++;
    return 'You guessed it right!';
  }
  else {
    return 'Alas! You guessed it wrong or gave an invalid answer!';
  }
}

function validateSquareRoot(userGuess, square) {
  if (userGuess < square) {
    return 'Sorry you guessed too low';
  } else if (userGuess > square) {
    return 'you guessed too high';
  } else if (isNaN(userGuess) || userGuess === null) {
    return 'please enter an actual number';
  } else if (userGuess === square) {
    return 'You got it right.. One final game to check how well you know about me!'
  }

}

function validateFavorite(userGuess, favorites) {
  for (forCounter = 0; forCounter < favorites.length; forCounter++) {
    console.log('Loop count:', favorites[forCounter]);
    if (userGuess.toLowerCase() === favorites[forCounter].toLowerCase()) {
      flag = true;
      return 'you got it right!';
    }
  }
  if (!flag) {
    attemptCount++;
    if (attemptCount < 6) {
      return 'incorrect guess - Try Again';
    }
    else {
       return 'exhausted all chances';
    }
    }
}
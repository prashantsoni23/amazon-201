'use strict';

/*use of arrays*/
var questions = ['Have I visited the United States anytime?',
  'Had I not entered into this profession, I would be a singer. Yes or No?',
  'Am I sad that Peoplesoft is going away?',
  'Do I live in Hyderabad?',
  'Am I crazy about cars?'];

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
    if (userAnswer.toUpperCase() === answersShort[i] || userAnswer.toUpperCase() === answersLong[i].toUpperCase()) {
      alert('You guessed it right!');
      correct++;
    }
    else {
      alert('Alas! You guessed it wrong or gave an invalid answer!');
    }
  }
  alert('You guessed ' + correct + ' answers correctly. Now an algebra question coming for you!');

  /*While loop below*/

  var algebraAnswer;
  var counter = 0;
  while (algebraAnswer !== 49) {
    algebraAnswer = parseInt(prompt('Do you know what is square of number 7?'));

    if (algebraAnswer < 49) {
      alert('Sorry you guessed too low');
      counter++;
    } else if (algebraAnswer > 49) {
      alert('you guessed too high');
      counter++;
    } else if (isNaN(algebraAnswer) || algebraAnswer === null) {
      alert('please enter an actual number');
      counter++;
    }
  }
  console.log('Number of wrong attempts to get the correct answer of square root of 7:', counter);
  alert('You got it right.. One final game to check how well you know about me!');

  /*For loop below*/

  var flag = false;
  var forCounter;
  var attemptCount = 0;
  var singers = ['Arijit Singh', 'Sonu Nigam', 'Atif Aslam'];

  while (!flag && attemptCount < 6) {
    do {
      var answer = prompt('Which is one of my favorite singers??');
    }
    while (answer === null || answer.trim() === '');

    for (forCounter = 0; forCounter < singers.length; forCounter++) {
      console.log('Loop count:', singers[forCounter]);
      if (answer.toLowerCase() === singers[forCounter].toLowerCase()) {
        alert('you got it right!');
        flag = true;
        break;
      }
    }
    if (!flag) {
      attemptCount++;
      if (attemptCount < 6) {
        alert('incorrect guess - Try Again');
        continue;
      }
      else {
        break;
      }
    }
  }
  if (attemptCount >=6) {
    alert ('You exhausted all your points.. take some rest now!');
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




'use strict';

var questions = ['Have I visited the United States anytime?',
  'Had I not entered into this profession, I would be a singer. Yes or No?',
  'Am I sad that Peoplesoft is going away?',
  'Do I live in Hyderabad?',
  'Am I crazy about cars?'];

var answersShort = ['Y','N','N','Y','Y'];
var answersLong = ['Yes','No','No','Yes','Yes']
var correct = 0;

do {
  var userName = prompt('Awesome.. Let\'s start with your name.. What do you want to be called as?');
  console.log('User Name:', userName);
}
while (userName.trim() === '' || userName === null);
userName = userName.trim();
alert('Hi ' + userName + '... I\'m going to ask you few questions. You need to answer these questions in either yes or no.');

for (var i=0;i<questions.length;i++) {
  do {
    var userAnswer = prompt (questions[i]);
    console.log ('Q: '+ questions[i] + ' A: ' + userAnswer);
  }
  while (userAnswer.trim() === '' || userAnswer === null);
  if (userAnswer.toUpperCase() === answersShort[i] || userAnswer.toUpperCase() === answersLong[i].toUpperCase() ) {
    alert ('You guessed it right!');
    correct++;
  }
  else {
    alert ('Alas!!You guessed it wrong or gave an invalid answer!');
  }
}
alert('You guessed ' + correct + ' answers correctly');



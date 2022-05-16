'use strict';

const defaultScore = 20;
let randomNumber = Math.floor((Math.random() * 20)) + 1;
let highScore = 0;
let tryCounter = 20;

function displayInfoMessage(message) {
  document.querySelector('.info').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess-number').value);
  if(!guess) {
    displayInfoMessage('No number!!! Please give a number!!!');
  } else if (tryCounter <= 0 && guess !== randomNumber) {
    displayInfoMessage('You lose! Click again button to try one more time');
  } else if(guess <= 0 || guess > 20) {
    displayInfoMessage('You number should be between 1 and 20');
  } else {
    if(guess > randomNumber) {
      displayInfoMessage('Too high');
    tryCounter--;
    document.querySelector('.score-number').textContent = tryCounter;
  }
  if(guess < randomNumber) {
    displayInfoMessage('Too low');
    tryCounter--;
    document.querySelector('.score-number').textContent = tryCounter;
  }
  if(guess === randomNumber) {
    tryCounter--;
    document.querySelector('.score-number').textContent = tryCounter;
    displayInfoMessage('You are right!!!');
    document.querySelector('.answer-field').textContent = `${guess}`;
    document.querySelector('body').style.backgroundColor = 'green';
    if(tryCounter > highScore) {
      highScore = tryCounter;
    }
    document.querySelector('.highscore-number').textContent = highScore;
  }
  }
});

document.querySelector('.restart').addEventListener('click', function() {
  document.querySelector('.score-number').textContent = defaultScore;
  displayInfoMessage('Start guessing...');
  document.querySelector('.answer-field').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess-number').value = '';
  randomNumber = Math.floor((Math.random() * 20)) + 1;
  tryCounter = 20;
  console.log(randomNumber);
});

console.log(randomNumber);

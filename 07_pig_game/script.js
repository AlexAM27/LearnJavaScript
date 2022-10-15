'use strict'
let isGameOn = false;
let win = false;

let playerOneMove = true;
let playerOneScore = 0;

// let playerTwoMove = false;
let playerTwoScore = 0;

let currentScore = 0;

const playerOneField = document.querySelector('.first');
const playerTwoField = document.querySelector('.second');
const playerOneScoreField = document.querySelector('.first-score');
const playerTwoScoreField = document.querySelector('.second-score');
const playerOneCurrentScore = document.querySelector('.first-state');
const playerTwoCurrentScore = document.querySelector('.second-state');


// Points
const pointsField = document.querySelector('.points'); 
const topLeftPoint = document.querySelector('.top-left');
const topRightPoint = document.querySelector('.top-right');
const centerLeftPoint = document.querySelector('.center-left');
const centerMiddlePoint = document.querySelector('.center-middle');
const centerRightPoint = document.querySelector('.center-right');
const bottomLeftPoint = document.querySelector('.bottom-left');
const bottomRightPoint = document.querySelector('.bottom-right');

// Buttons
const newGameButton = document.querySelector('.new-game');
const rollDiceButton = document.querySelector('.roll');
const holdButton = document.querySelector('.hold');

// dice number
const getDiceNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// dice

const showOne = function() {
  topLeftPoint.style.visibility = 'hidden';
  topRightPoint.style.visibility = 'hidden';
  centerLeftPoint.style.visibility = 'hidden';
  centerMiddlePoint.style.visibility = 'visible';
  centerRightPoint.style.visibility = 'hidden';
  bottomLeftPoint.style.visibility = 'hidden';
  bottomRightPoint.style.visibility = 'hidden';
}

const showTwo = function() {
  topLeftPoint.style.visibility = 'visible';
  topRightPoint.style.visibility = 'hidden';
  centerLeftPoint.style.visibility = 'hidden';
  centerMiddlePoint.style.visibility = 'hidden';
  centerRightPoint.style.visibility = 'hidden';
  bottomLeftPoint.style.visibility = 'hidden';
  bottomRightPoint.style.visibility = 'visible';
}

const showThree = function() {
  topLeftPoint.style.visibility = 'hidden';
  topRightPoint.style.visibility = 'visible';
  centerLeftPoint.style.visibility = 'hidden';
  centerMiddlePoint.style.visibility = 'visible';
  centerRightPoint.style.visibility = 'hidden';
  bottomLeftPoint.style.visibility = 'visible';
  bottomRightPoint.style.visibility = 'hidden';
}

const showFour = function() {
  topLeftPoint.style.visibility = 'visible';
  topRightPoint.style.visibility = 'visible';
  centerLeftPoint.style.visibility = 'hidden';
  centerMiddlePoint.style.visibility = 'hidden';
  centerRightPoint.style.visibility = 'hidden';
  bottomLeftPoint.style.visibility = 'visible';
  bottomRightPoint.style.visibility = 'visible';
}

const showFive = function() {
  topLeftPoint.style.visibility = 'visible';
  topRightPoint.style.visibility = 'visible';
  centerLeftPoint.style.visibility = 'hidden';
  centerMiddlePoint.style.visibility = 'visible';
  centerRightPoint.style.visibility = 'hidden';
  bottomLeftPoint.style.visibility = 'visible';
  bottomRightPoint.style.visibility = 'visible';
}

const showSix = function() {
  topLeftPoint.style.visibility = 'visible';
  topRightPoint.style.visibility = 'visible';
  centerLeftPoint.style.visibility = 'visible';
  centerMiddlePoint.style.visibility = 'hidden';
  centerRightPoint.style.visibility = 'visible';
  bottomLeftPoint.style.visibility = 'visible';
  bottomRightPoint.style.visibility = 'visible';
}

const changePlayerOneCurrentScore = function(num) {
  console.log(num);
  playerOneCurrentScore.textContent = num;
}

const changePlayerTwoCurrentScore = function(num) {
  playerTwoCurrentScore.textContent = num;
}

const changePlayerCurrentScore = function(num) {
  if(playerOneMove) {
    changePlayerOneCurrentScore(num);
  } else {
    changePlayerTwoCurrentScore(num);
  }
}

const checkWinner = function() {

}

const changePlayer = function() {
  console.log('Player One:', playerOneMove);
  if(playerOneMove) {
    playerOneField.style.opacity = 0.5;
    playerTwoField.style.opacity = 0.7;
    changePlayerCurrentScore(0);
    playerOneMove = false;
    playerOneScore += currentScore;
    playerOneScoreField.textContent = playerOneScore;
    currentScore = 0;
  } else {
    playerOneField.style.opacity = 0.7;
    playerTwoField.style.opacity = 0.5;
    changePlayerCurrentScore(0);
    playerOneMove = true;
    playerTwoScore += currentScore;
    playerTwoScoreField.textContent = playerTwoScore;
    currentScore = 0;
  }
  
}

const rollDice = function(num) {
  currentScore += num;
  switch(num) {
    case 1:
      currentScore = 0;
      changePlayer();
      showOne();
      break;
    case 2:
      changePlayerCurrentScore(currentScore);
      showTwo();
      break;
    case 3:
      changePlayerCurrentScore(currentScore);
      showThree();
      break;
    case 4:
      changePlayerCurrentScore(currentScore);
      showFour();
      break;
    case 5:
      changePlayerCurrentScore(currentScore);
      showFive();
      break;
    case 6:
      changePlayerCurrentScore(currentScore);
      showSix();
      break;
    default:
      console.log('Error');
  }
}

rollDiceButton.addEventListener('click', function() {
  if(!isGameOn) {
    pointsField.classList.remove('hidden');
  }
  isGameOn = true;
  const num = getDiceNumber();
  console.log(num);
  rollDice(num);
});

newGameButton.addEventListener('click', function() {
  pointsField.classList.add('hidden');
  isGameOn = false;
  if(!playerOneMove) {
    changePlayer();
  }
  changePlayerOneCurrentScore(0);
  changePlayerTwoCurrentScore(0);
  playerOneScoreField.textContent = 0;
  playerTwoScoreField.textContent = 0;
});

holdButton.addEventListener('click', function() {

  if(isGameOn && !win) {
    changePlayer();
  }
});


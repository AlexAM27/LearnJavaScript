'use strict';

let maxScore = 20;
let actualScore = document.querySelector('.score-label').textContent;
let guess = false;
let randomNumber = Math.floor(Math.random() * 20) + 1;

function getMaxScore(actual, max) {
    if(actual < max) {
        max = actual;
        return max;
    }
    if(max < actual || max === actual) {
        return max;
    }
};

function guessNumber() {
    let guessNumber = document.querySelector('input');
    while(!guess) {
        if()
    }

}

function again() {
    document.querySelector('.score-label').textContent = '20';
    document.querySelector('.highscore-label').textContent = getMaxScore();
    randomNumber = Math.floor(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', guessNumber();)

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'changed...'

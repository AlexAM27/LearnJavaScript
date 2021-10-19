'use strict';

let guessNumber = Math.floor(Math.random() * 20 + 1);
let userNumber;
let score = 20;
let bestScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    userNumber = Number(document.querySelector('input').value);
    if(userNumber < guessNumber) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = `${score}`;
    }
    if(userNumber > guessNumber) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = `${score}`;
    }
    if(userNumber === guessNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.show-number').textContent = userNumber;
        document.querySelector('body').style.backgroundColor = '#7AEC0D';
        score--;
        document.querySelector('.score').textContent = `${score}`;
        bestScore = score > bestScore ? score : bestScore;
        console.log(bestScore);
        document.querySelector('.highscore').textContent = `${bestScore}`;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = `${score}`;
    document.querySelector('.show-number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('input').value = '';
    guessNumber = Math.floor(Math.random() * 20 + 1);
});



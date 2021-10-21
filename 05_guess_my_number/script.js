'use strict';

function createRandomNumber() {
    return Math.floor(Math.random() * 20 + 1); 
};

function setMessage(message) {
    document.querySelector('.message').textContent = message;
};

function setScore(message) {
    document.querySelector('.score').textContent = message;
};

function setBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
};

function showNumber(message) {
    document.querySelector('.show-number').textContent = message;
};

let guessNumber = createRandomNumber();
let userNumber;
let score = 20;
let bestScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    userNumber = Number(document.querySelector('input').value);
    if (userNumber < 1 || userNumber > 20) {
        setMessage('❌ Use numbers between 1 and 20');
    } else {
        if (score > 1) {
            if (userNumber !== guessNumber) {
                setMessage(userNumber < guessNumber ? 'Too low' : 'Too high');
                score--;
                setScore(score);
            } else {
                setMessage('🎉 Correct number!');
                showNumber(userNumber);
                setBackgroundColor('#029511');
                score--;
                setScore(score);
                bestScore = score > bestScore ? score : bestScore;
                console.log(bestScore);
                document.querySelector('.highscore').textContent = `${bestScore}`;
                document.querySelector('input').readOnly = true;
                document.querySelector('.check').disabled = true;
            };
        } else {
            setMessage('You lost the game! Click "again" to continue');
            score--;
            setScore(score);
        };         
    };
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    setScore(score);
    showNumber('?');
    setMessage('Start guessing...');
    setBackgroundColor('black');
    document.querySelector('input').value = '';
    document.querySelector('input').readOnly = false;
    document.querySelector('.check').disabled = false;
    guessNumber = createRandomNumber();
});



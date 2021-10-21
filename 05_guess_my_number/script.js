'use strict';

let guessNumber = Math.floor(Math.random() * 20 + 1);
let userNumber;
let score = 20;
let bestScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    userNumber = Number(document.querySelector('input').value);
    if (userNumber < 1 || userNumber > 20) {
        document.querySelector('.message').textContent = '❌ Use numbers between 1 and 20';
    } else {
        if (score > 1) {
            if (userNumber < guessNumber) {
                document.querySelector('.message').textContent = 'Too low!';
                score--;
                document.querySelector('.score').textContent = `${score}`;
            };
        
            if (userNumber > guessNumber) {
                document.querySelector('.message').textContent = 'Too high!';
                score--;
                document.querySelector('.score').textContent = `${score}`;
            };
        
            if (userNumber === guessNumber) {
                document.querySelector('.message').textContent = '🎉 Correct number!';
                document.querySelector('.show-number').textContent = userNumber;
                document.querySelector('body').style.backgroundColor = '#029511';
                score--;
                document.querySelector('.score').textContent = `${score}`;
                bestScore = score > bestScore ? score : bestScore;
                console.log(bestScore);
                document.querySelector('.highscore').textContent = `${bestScore}`;
            };
        } else {
            document.querySelector('.message').textContent = 'You lost the game! Click again to continue';
            score--;
            document.querySelector('.score').textContent = `${score}`;
        };         
    };
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



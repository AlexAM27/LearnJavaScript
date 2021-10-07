'use strict';

let guessNumber = Math.floor(Math.random() * 20 + 1);
console.log(guessNumber);
let userNumber;

function equalNumbers(someNumber) {
    document.querySelector('.check').addEventListener('click', function() {
        userNumber = Number(document.querySelector('input').value);
        if(userNumber < someNumber) {
            document.querySelector('.message').textContent = 'Too low!';
        }
        if(userNumber > someNumber) {
            document.querySelector('.message').textContent = 'Too high!';
        }
        if(userNumber === someNumber) {
            document.querySelector('.message').textContent = 'Correct number!';
            document.querySelector('.show-number').textContent = userNumber;
            document.querySelector('body').style.backgroundColor = 'green';
        }
    });
};

equalNumbers(guessNumber);


'use strict';

const windowButton1 = document.querySelector('#left_button');

const windowButton2 = document.querySelector('#middle_button');

const windowButton3 = document.querySelector('#right_button');

const modalWindowAndOverlay = document.querySelectorAll('.hidden');

const closeModalWindowButton = document.querySelector('img');

const overlay = document.querySelector('.overlay');

windowButton1.addEventListener('click', function() {
    modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'visible');
});

windowButton2.addEventListener('click', function() {
    modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'visible');
});

windowButton3.addEventListener('click', function() {
    modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'visible');
});

closeModalWindowButton.addEventListener('click', function() {
    modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'hidden');
});

overlay.addEventListener('click', function() {
    // modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'hidden');

    // or

    for(let elem = 0; elem < modalWindowAndOverlay.length; elem++) {
        modalWindowAndOverlay[elem].style.visibility = 'hidden';
    };
});

document.onkeydown = function(evt) {
    if(evt.key === 'Escape') {
        modalWindowAndOverlay.forEach(elem => elem.style.visibility = 'hidden');
    }
}

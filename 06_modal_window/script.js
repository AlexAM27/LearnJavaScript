'use strict';

const windowButton1 = document.querySelector('.left_button');

const windowButton2 = document.querySelector('.middle_button');

const windowButton3 = document.querySelector('.right_button');

const modalWindow = document.querySelector('.hidden');

const closeModalWindowButton = document.querySelector('img');

windowButton1.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});

windowButton2.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});

windowButton3.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});

closeModalWindowButton.addEventListener('click', function() {
    modalWindow.style.display = 'none';
});

'use strict'

const buttonShowModal = document.querySelectorAll('.btn');
const modalWindow = document.querySelector('.window-container');
const closeButton = document.querySelector('.close-btn');
const overlayLayout = document.querySelector('.overlay');

const showModalWindow = function()  {
  modalWindow.classList.remove('hidden');
  overlayLayout.classList.remove('hidden');
};

const hideModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlayLayout.classList.add('hidden');
};

for(let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener('click', showModalWindow);
};

closeButton.addEventListener('click', hideModalWindow);

overlayLayout.addEventListener('click', hideModalWindow);

document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    hideModalWindow();
  }
})







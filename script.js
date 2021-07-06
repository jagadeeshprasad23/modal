'use strict';

const modelOne = document.querySelector('.modal-one');
const modelTwo = document.querySelector('.modal-two');
const modelThree = document.querySelector('.modal-three');

const showModalBtnOne = document.querySelector('.show-modal-one');
const showModalBtnTwo = document.querySelector('.show-modal-two');
const showModalBtnThree = document.querySelector('.show-modal-three');

const overlay = document.querySelector('.overlay');
const close = document.querySelectorAll('.close-modal');

showModalBtnOne.addEventListener('click', function () {
  modelOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

showModalBtnTwo.addEventListener('click', function () {
  modelTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

showModalBtnThree.addEventListener('click', function () {
  modelThree.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closingFunction = function () {
  modelTwo.classList.add('hidden');
  modelOne.classList.add('hidden');
  modelThree.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < close.length; i++)
  close[i].addEventListener('click', closingFunction);

overlay.addEventListener('click', function () {
  modelTwo.classList.add('hidden');
  modelOne.classList.add('hidden');
  modelThree.classList.add('hidden');
  overlay.classList.add('hidden');
});

'use strict';

const popup = document.querySelector('.popup');
const btnBook = document.querySelectorAll('.btn--book');
const content = document.querySelector('.popup__content');

const closePopup = function () {
  popup.style.opacity = 0;
  popup.style.visibility = 'hidden';
  content.style.opacity = 0;
  content.style.transform = 'translate(-50%, -50%) scale(0.25)';
};

const openPopup = function () {
  popup.style.opacity = 1;
  popup.style.visibility = 'visible';
  content.style.opacity = 1;
  content.style.transform = 'translate(-50%, -50%) scale(1)';
};

popup.addEventListener('click', function () {
  closePopup();
});

btnBook.forEach((btn) =>
  btn.addEventListener('click', function () {
    openPopup();
  })
);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !(popup.style.opacity = 0)) {
    closePopup();
  }
});

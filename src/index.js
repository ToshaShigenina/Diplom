'use strict';

/*import showClubList from 'showClubList.js';

showClubList();*/

const popup = () => {
  const body = document.body;
  let popup;

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.dataset.popup) {
      event.preventDefault();
      popup = document.querySelector(target.dataset.popup);
      popup.style.display = 'block';
      return;
    }

    if (target.closest('.close_icon') || !target.closest('.form-content')) {
      popup.removeAttribute('style');
    }
  });
};

popup();

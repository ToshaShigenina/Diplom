'use strict';

/*import showClubList from 'showClubList.js';

showClubList();*/

const showPopUp = () => {
  const body = document.body;

  body.addEventListener('click', (event) => {
    let target = event.target,
      popup;

    if (target.dataset.popup) {
      event.preventDefault();
      popup = document.querySelector(target.dataset.popup);
      popup.style.display = 'block';
    }


  });
};

showPopUp();

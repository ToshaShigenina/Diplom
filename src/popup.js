const popup = () => {
  const body = document.body;
  let popup = null;

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (!popup) {
      target = target.closest('[data-popup]');
      if (target) {
        event.preventDefault();
        document.querySelector('[data-popup="#gift"]').style.display = 'none';
        popup = document.querySelector(target.dataset.popup);
        popup.style.display = 'block';
      }
      return;
    }

    if (target.closest('.close_icon') || target.closest('.close-btn') || !target.closest('.form-content')) {
      document.querySelector('[data-popup="#gift"]').removeAttribute('style');
      popup.removeAttribute('style');
      popup = null;
    }
  });
};

export default popup;

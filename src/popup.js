const popup = () => {
  const body = document.body;
  let popup = null,
    gift = true;

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (!popup) {
      target = target.closest('[data-popup]');
      if (target) {
        event.preventDefault();
        if (document.querySelector('[data-popup="#gift"]')) {
          document.querySelector('[data-popup="#gift"]').style.display = 'none';
        }
        popup = document.querySelector(target.dataset.popup);
        popup.style.display = 'block';
      }
      return;
    }

    if (target.closest('.close_icon') || target.closest('.close-btn') || !target.closest('.form-content')) {
      if (gift && document.querySelector('[data-popup="#gift"]') && popup !== document.getElementById('gift')) {
        document.querySelector('[data-popup="#gift"]').removeAttribute('style');
      } else if (popup === document.getElementById('gift')) {
        gift = false;
      }
      popup.removeAttribute('style');
      popup = null;
    }
  });
};

export default popup;

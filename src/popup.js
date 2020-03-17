const popup = () => {
  const body = document.body;
  let popup = null;

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (!popup) {
      target = target.closest('[data-popup]');
      if (target) {
        if (target.dataset.popup === '#thanks' && target === document.querySelector('#banner-form button[name="send"]') && !document.getElementById('check1').checked) {
          return;
        }
        if (!target.matches('[type="submit"]')) {
          event.preventDefault();
        }
        if (document.querySelector('[data-popup="#gift"]')) {
          document.querySelector('[data-popup="#gift"]').style.display = 'none';
        }
        popup = document.querySelector(target.dataset.popup);
        popup.style.display = 'block';
      }
      return;
    }

    if (target.closest('.close_icon') || target.closest('.close-btn') || !target.closest('.form-content')) {
      if (document.querySelector('[data-popup="#gift"]') && popup !== document.getElementById('gift')) {
        document.querySelector('[data-popup="#gift"]').style.display = 'block';
      } else if (popup === document.getElementById('gift')) {
        document.querySelector('[data-popup="#gift"]').remove();
      }
      popup.removeAttribute('style');
      popup = null;
    }
  });
};

export default popup;

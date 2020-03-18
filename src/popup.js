const popup = () => {
  const body = document.body;
  let popup = null;

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (!popup) {
      target = target.closest('[data-popup]');
      if (target) {
        if (target.dataset.popup === '#thanks') {
          if (target === document.querySelector('#banner-form button[type="submit"]')) {
            if (!document.getElementById('check1').checked ||
              (document.querySelector('#banner-form [type="tel"]').value === '' ||
                document.querySelector('#banner-form [type="text"]').value === '')) {
              return;
            }
          }
          if (target === document.querySelector('#footer_form button[type="submit"]')) {
            if ((!document.getElementById('footer_leto_mozaika').checked &&
                !document.getElementById('footer_leto_schelkovo').checked) ||
              document.querySelector('#footer_form [type="tel"]').value === '') {
              return;
            }
          }
          if (target === document.querySelector('#card_order button[type="submit"]')) {
            if (!document.getElementById('card_check').checked ||
              (document.querySelector('#card_order [type="tel"]').value === '' ||
                document.querySelector('#card_order [required][type="text"]').value === '')) {
              return;
            }
          }
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

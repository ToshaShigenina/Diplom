const mainForm = () => {
  const bannerForm = document.getElementById('banner-form');

  const error = document.createElement('p');
  error.style.cssText = `color: red; margin-top: 1rem; font-size: 110%; text-align: center`;

  const clearError = () => {
      setTimeout(() => {
        error.remove();
      }, 5000);
    },
    postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    },
    clearInput = (form) => {
      [...form.elements].forEach((elem) => {
        if (elem.matches('input')) {
          elem.value = '';
        }
      });
    },
    readForm = (form, event) => {
      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          const thanks = document.getElementById('thanks'),
            gift = document.querySelector('[data-popup="#gift"]');
          thanks.style.display = 'block';
          if (gift) {
            gift.style.display = 'none';
          }
          if (response !== 200) {
            thanks.querySelector('h4').textContent = 'Сожалеем';
            thanks.querySelector('p').textContent = 'Произошла ошибка при отправке данных';
          }
          thanks.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.close_icon') || target.matches('.close-btn') || !target.matches('.form-content')) {
              thanks.removeAttribute('style');
              if (gift) {
                gift.style.display = 'block';
              }
            }
          });
        });
      clearInput(form);
    };;

  bannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('check1').checked) {
      readForm(bannerForm, event);
    } else {
      error.textContent = 'Необходимо подтвердить согласие на обработку персональных данных!';
      bannerForm.append(error);
    }
  });

  bannerForm.addEventListener('change', (event) => {
    let target = event.target.closest('#check1');
    if (target && target.checked) {
      error.remove();
    }
  })
};

export default mainForm;

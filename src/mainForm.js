const mainForm = () => {
  const bannerForm = document.getElementById('banner-form'),
    thanks = document.getElementById('thanks');

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
          thanks.querySelector('h4').textContent = 'Подождите';
          thanks.querySelector('p').innerHTML = '';
          if (response.status !== 200) {
            thanks.querySelector('h4').textContent = 'Сожалеем';
            thanks.querySelector('p').innerHTML = 'Произошла ошибка при отправке данных';
          } else {
            thanks.querySelector('h4').textContent = 'Спасибо!';
            thanks.querySelector('p').innerHTML = 'Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.';
          }
          thanks.querySelector('button').style.display = 'block';
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

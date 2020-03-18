const mainForm = () => {
  const modalForm = document.getElementById('form2'), // форма
    visit = document.getElementById('free_visit_form'), // элемент для вывода сообщения
    bannerForm = document.getElementById('banner-form'), // форма
    thanks = document.getElementById('thanks'), // элемент для вывода сообщения
    callForm = document.getElementById('form1'), // форма
    callFree = document.getElementById('callback_form'), // элемент для вывода сообщения
    footerForm = document.getElementById('footer_form'), // форма, элемент для вывода сообщения thanks
    cardOrderForm = document.getElementById('card_order'),
    messageSend = 'Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.',
    messageError = 'Произошла ошибка при отправке данных',
    formError = 'Необходимо подтвердить согласие на обработку персональных данных!',
    footerError = 'Необходимо выбрать клуб!';

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
    readForm = (form, event, callback) => {
      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          callback(response);
        });
      clearInput(form);
    },
    personalData = (event, selector) => {
      let target = event.target.closest(selector);
      if (target && target.checked) {
        error.remove();
      }
    };

  bannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('check1').checked) {
      readForm(bannerForm, event, (response) => {
        thanks.querySelector('h4').textContent = 'Подождите';
        thanks.querySelector('p').innerHTML = '';
        if (response.status !== 200) {
          thanks.querySelector('h4').textContent = 'Сожалеем';
          thanks.querySelector('p').innerHTML = messageError;
        } else {
          thanks.querySelector('h4').textContent = 'Спасибо!';
          thanks.querySelector('p').innerHTML = messageSend;
        }
        thanks.querySelector('button').style.display = 'block';
      });
    } else {
      error.textContent = formError;
      bannerForm.append(error);
    }
  });
  footerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('footer_leto_mozaika').checked || document.getElementById('footer_leto_schelkovo').checked) {
      readForm(footerForm, event, (response) => {
        thanks.querySelector('h4').textContent = 'Подождите';
        thanks.querySelector('p').innerHTML = '';
        if (response.status !== 200) {
          thanks.querySelector('h4').textContent = 'Сожалеем';
          thanks.querySelector('p').innerHTML = messageError;
        } else {
          thanks.querySelector('h4').textContent = 'Спасибо!';
          thanks.querySelector('p').innerHTML = messageSend;
        }
        thanks.querySelector('button').style.display = 'block';
      });
    } else {
      error.textContent = footerError;
      footerForm.append(error);
    }
  });
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('check2').checked) {
      readForm(modalForm, event, (response) => {
        visit.querySelector('.form-content').innerHTML = '<h4>Подождите</h4><p></p>';
        if (response.status !== 200) {
          visit.querySelector('h4').textContent = 'Сожалеем';
          visit.querySelector('p').innerHTML = messageError;
        } else {
          visit.querySelector('h4').textContent = 'Спасибо!';
          visit.querySelector('p').innerHTML = messageSend;
        }
      });
    } else {
      error.textContent = formError;
      modalForm.append(error);
    }
  });
  callForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('check').checked) {
      readForm(callForm, event, (response) => {
        callFree.querySelector('.form-content').innerHTML = '<h4>Подождите</h4><p></p>';
        if (response.status !== 200) {
          callFree.querySelector('h4').textContent = 'Сожалеем';
          callFree.querySelector('p').innerHTML = messageError;
        } else {
          callFree.querySelector('h4').textContent = 'Спасибо!';
          callFree.querySelector('p').innerHTML = messageSend;
        }
      });
    } else {
      error.textContent = formError;
      callForm.append(error);
    }
  });

  bannerForm.addEventListener('change', (event) => {
    personalData(event, '#check1')
  });
  footerForm.addEventListener('change', (event) => {
    personalData(event, '#footer_leto_mozaika');
    personalData(event, '#footer_leto_schelkovo');
  });
  modalForm.addEventListener('change', (event) => {
    personalData(event, '#check2')
  });
  callForm.addEventListener('change', (event) => {
    personalData(event, '#check')
  });
};

export default mainForm;

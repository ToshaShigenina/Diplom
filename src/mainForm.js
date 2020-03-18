const mainForm = () => {
  const modalForm = document.getElementById('form2'), // форма
    visit = document.getElementById('free_visit_form'), // элемент для вывода сообщения
    bannerForm = document.getElementById('banner-form'), // форма
    thanks = document.getElementById('thanks'), // элемент для вывода сообщения
    callForm = document.getElementById('form1'), // форма
    callFree = document.getElementById('callback_form'), // элемент для вывода сообщения
    footerForm = document.getElementById('footer_form'), // форма, элемент для вывода сообщения thanks
    cardOrderForm = document.getElementById('card_order'), // форма, элемент для вывода сообщения thanks
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
    },
    popupMessage = (modal, response) => {
      modal.querySelector('.form-content').innerHTML = `<h4>Подождите</h4><p></p><button class="btn close-btn" style="display: none;">OK</button>`;
      if (response.status !== 200) {
        modal.querySelector('h4').textContent = 'Сожалеем';
        modal.querySelector('p').innerHTML = messageError;
      } else {
        modal.querySelector('h4').textContent = 'Спасибо!';
        modal.querySelector('p').innerHTML = messageSend;
      }

      modal.querySelector('button').style.display = 'block';
    };

  bannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('check1').checked) {
      readForm(bannerForm, event, (response) => {
        popupMessage(thanks, response);
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
        popupMessage(thanks, response);
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
        popupMessage(visit, response);
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
        popupMessage(callFree, response);
      });
    } else {
      error.textContent = formError;
      callForm.append(error);
    }
  });
  cardOrderForm.addEventListener('submit', (event) => {
    event.preventDefault();

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

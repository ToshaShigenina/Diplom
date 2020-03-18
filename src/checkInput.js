const checkInput = () => {
  const inputTel = document.querySelectorAll('input[type="tel"]'),
    inputText = document.querySelectorAll('input[type="text"]:not([placeholder="Промокод"])'),
    inputPromo = document.querySelector('input[placeholder="Промокод"]');

  const replaceInput = (elem, reg) => {
    elem.addEventListener('input', () => {
      elem.value = elem.value.replace(reg, '');
    });
  };

  inputTel.forEach((item) => {
    replaceInput(item, /[^\+\d]/);
  });
  inputText.forEach((item) => {
    replaceInput(item, /[^А-Яа-яЁё\ ]/);
  });
  //replaceInput(inputPromo, /[^А-Яа-яЁё\ \d]/);
};

export default checkInput;

const checkInput = () => {
  const inputTel = document.querySelectorAll('input[type="tel"]'),
    inputText = document.querySelectorAll('input[type="text"]');

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
};

export default checkInput;

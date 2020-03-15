const totop = () => {
  const arrow = document.getElementById('totop');
  let topHeader = document.querySelector('.header-main').clientHeight;

  arrow.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    let topMain = window.scrollY;

    if (topMain > (topHeader / 3) * 2) {
      arrow.style.display = 'block';
    } else {
      arrow.removeAttribute('style');
    }
  });
};

export default totop;

const slider = () => {
  const sliderMain = document.querySelector('.main-slider'),
    slides = sliderMain.querySelectorAll('.slide');

  let currentSlide = 0;


  const addDots = () => {
    const ul = document.createElement('ul');
    ul.classList.add('slider-dots');
    for (let i = 0; i < slides.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = `<button></button>`;
      if (i === currentSlide) {
        li.classList.add('slick-active');
      }
      ul.append(li);
    }
    sliderMain.append(ul);
  };
  addDots();

  const dots = document.querySelectorAll('.slider-dots li');

  const prevSlide = (elem, index, classStr) => {
      elem[index].classList.remove(classStr);
    },
    nextSlide = (elem, index, classStr) => {
      elem[index].classList.add(classStr);
    },
    playSlide = () => {
      prevSlide(slides, currentSlide, 'slide-active');
      prevSlide(dots, currentSlide, 'slick-active');
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, 'slide-active');
      nextSlide(dots, currentSlide, 'slick-active');
    },
    startSlider = () => {
      setInterval(playSlide, 2500);
    };

  sliderMain.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target.closest('.slider-dots li');
    if (target) {
      prevSlide(slides, currentSlide, 'slide-active');
      prevSlide(dots, currentSlide, 'slick-active');
      dots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
      nextSlide(slides, currentSlide, 'slide-active');
      nextSlide(dots, currentSlide, 'slick-active');
    }
  });

  startSlider();
};

export default slider;

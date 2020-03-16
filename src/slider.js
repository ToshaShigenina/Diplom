const slider = () => {
  const sliderMain = document.querySelector('.main-slider'),
    slidesMain = sliderMain.querySelectorAll('.slide'),
    sliderGallery = document.querySelector('.gallery-slider'),
    slidesGallery = sliderGallery.querySelectorAll('.slide');

  let currentSlideMain = 0,
    currentSlideGallery = 0;


  const addDots = (slider, slides, currentSlide) => {
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
      slider.append(ul);
    },
    prevSlide = (elem, index, classStr) => {
      elem[index].classList.remove(classStr);
    },
    nextSlide = (elem, index, classStr) => {
      elem[index].classList.add(classStr);
    },
    playSlide = (slides, dots, currentSlide) => {
      prevSlide(slides, currentSlide, 'slide-active');
      prevSlide(dots, currentSlide, 'slick-active');
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, 'slide-active');
      nextSlide(dots, currentSlide, 'slick-active');
      return currentSlide;
    },
    startSlider = (slides, dots, currentSlide) => {
      setInterval(playSlide, 2500, slides, dots, currentSlide);
    },
    changeDots = (event, slides, dots, currentSlide) => {
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
      return currentSlide;
    };

  addDots(sliderMain, slidesMain, currentSlideMain);
  addDots(sliderGallery, slidesGallery, currentSlideGallery);

  const dotsMain = sliderMain.querySelectorAll('.slider-dots li'),
    dotsGallery = sliderGallery.querySelectorAll('.slider-dots li');

  sliderMain.addEventListener('click', (event) => {
    changeDots(event, slidesMain, dotsMain, currentSlideMain);
  });

  sliderGallery.addEventListener('click', (event) => {
    changeDots(event, slidesGallery, dotsGallery, currentSlideGallery);
  });

  startSlider(slidesMain, dotsMain, currentSlideMain);
  startSlider(slidesGallery, dotsGallery, currentSlideGallery);
};

export default slider;

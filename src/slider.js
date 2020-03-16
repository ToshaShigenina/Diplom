const slider = () => {
  const sliderMain = document.querySelector('.main-slider'),
    slidesMain = sliderMain.querySelectorAll('.slide'),
    sliderGallery = document.querySelector('.gallery-slider'),
    slidesGallery = sliderGallery.querySelectorAll('.slide');

  const currentSlide = (slides) => {
      let currentSlide = 0;
      slides.forEach((elem, item) => {
        if (elem.classList.contains('slide-active')) {
          currentSlide = item;
        }
      });
      return currentSlide;
    },
    addDots = (slider, slides) => {
      let indexActive = currentSlide(slides);
      const ul = document.createElement('ul');
      ul.classList.add('slider-dots');
      for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<button></button>`;
        if (i === indexActive) {
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
    playSlide = (slides, dots) => {
      let indexActive = currentSlide(slides);
      prevSlide(slides, indexActive, 'slide-active');
      prevSlide(dots, indexActive, 'slick-active');
      indexActive++;
      if (indexActive >= slides.length) {
        indexActive = 0;
      }
      nextSlide(slides, indexActive, 'slide-active');
      nextSlide(dots, indexActive, 'slick-active');
    },
    startSlider = (slides, dots) => {
      setInterval(playSlide, 2500, slides, dots);
    },
    changeDots = (event, slides, dots) => {
      event.preventDefault();
      let indexActive = currentSlide(slides);
      let target = event.target.closest('.slider-dots li');
      if (target) {
        prevSlide(slides, indexActive, 'slide-active');
        prevSlide(dots, indexActive, 'slick-active');
        dots.forEach((elem, index) => {
          if (elem === target) {
            indexActive = index;
          }
        });
        nextSlide(slides, indexActive, 'slide-active');
        nextSlide(dots, indexActive, 'slick-active');
      }
    };

  addDots(sliderMain, slidesMain);
  addDots(sliderGallery, slidesGallery);

  const dotsMain = sliderMain.querySelectorAll('.slider-dots li'),
    dotsGallery = sliderGallery.querySelectorAll('.slider-dots li');

  sliderMain.addEventListener('click', (event) => {
    changeDots(event, slidesMain, dotsMain);
  });

  sliderGallery.addEventListener('click', (event) => {
    changeDots(event, slidesGallery, dotsGallery);
  });

  startSlider(slidesMain, dotsMain);
  startSlider(slidesGallery, dotsGallery);
};

export default slider;

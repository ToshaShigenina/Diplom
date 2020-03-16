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
    addArrows = (slider) => {
      const arrowNext = document.createElement('div'),
        arrowPrev = document.createElement('div');
      arrowNext.classList.add('slider-arrow', 'next');
      arrowPrev.classList.add('slider-arrow', 'prev');
      arrowNext.innerHTML = `<span><i class="fa fa-chevron-right"></i></span>`;
      arrowPrev.innerHTML = `<span><i class="fa fa-chevron-left"></i></span>`;
      slider.append(arrowNext);
      slider.append(arrowPrev);
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
    changeSlide = (event, slides, dots) => {
      event.preventDefault();
      let indexActive = currentSlide(slides);
      let target = event.target.closest('.slider-dots li') || event.target.closest('.slider-arrow');
      if (target) {
        prevSlide(slides, indexActive, 'slide-active');
        prevSlide(dots, indexActive, 'slick-active');

        if (target.matches('.next')) {
          indexActive++;
        } else if (target.matches('.prev')) {
          indexActive--;
        } else {
          dots.forEach((elem, index) => {
            if (elem === target) {
              indexActive = index;
            }
          });
        }

        if (indexActive >= slides.length) {
          indexActive = 0;
        }
        if (indexActive < 0) {
          indexActive = slides.length - 1;
        }
        nextSlide(slides, indexActive, 'slide-active');
        nextSlide(dots, indexActive, 'slick-active');
      }
    };

  addDots(sliderMain, slidesMain);
  addDots(sliderGallery, slidesGallery);
  addArrows(sliderGallery);

  const dotsMain = sliderMain.querySelectorAll('.slider-dots li'),
    dotsGallery = sliderGallery.querySelectorAll('.slider-dots li');

  sliderMain.addEventListener('click', (event) => {
    changeSlide(event, slidesMain, dotsMain);
  });

  sliderGallery.addEventListener('click', (event) => {
    changeSlide(event, slidesGallery, dotsGallery);
  });

  startSlider(slidesMain, dotsMain);
  startSlider(slidesGallery, dotsGallery);
};

export default slider;

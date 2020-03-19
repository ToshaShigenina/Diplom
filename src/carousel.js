const carousel = () => {
  const carouselSlider = document.querySelector('.services-slider'),
    carouselSliderWrapper = document.querySelector('.services-slider-wrapper'),
    slides = carouselSlider.querySelectorAll('.slide'),
    slideWidth = slides[0].clientWidth,
    widthSlider = (slideWidth + 12) * 10;

  let position = 1;

  const nextSlide = (slider) => {
      position++;
      let currentWidthSlides = (slideWidth + 12) * position,
        diffWidth = currentWidthSlides + slider.clientWidth - widthSlider;
      if (diffWidth > 0) {
        currentWidthSlides = ((slideWidth + 12) * (position - 1)) + (slideWidth - diffWidth);
        position = 0;
      } else if (diffWidth === 0) {
        position = 0;
      }
      slider.style.transform = `translateX(-${currentWidthSlides}px)`;
    },
    prevSlide = (slider) => {
      position--;
      let currentWidthSlides = (slideWidth + 12) * position,
        diffWidth = currentWidthSlides + slider.clientWidth - widthSlider;
      if (position < 0) {
        currentWidthSlides = ((slideWidth + 12) * (position - 1)) + (slideWidth - diffWidth);
        position = 0;
      }
      slider.style.transform = `translateX(-${currentWidthSlides}px)`;
    },
    startSlider = (slider) => {
      setInterval(nextSlider, 1000, slider);
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
    };

  addArrows(carouselSliderWrapper);
  startSlider(carouselSlider);

  carouselSlider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    if (target.matches('.next')) {
      nextSlide(carouselSlider);
    }
    /*if (target.matches('.prev')) {
      prevSlider(carouselSlider);
    }*/
  });
};

export default carousel;

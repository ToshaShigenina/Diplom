const burgerMenu = () => {
  const body = document.body,
    popupMenu = document.querySelector('.popup-menu'),
    menu = document.querySelector('.top-menu'),
    gift = document.querySelector('.fixed-gift');

  let widthWindow = body.clientWidth;

  const doBurger = () => {
    body.addEventListener('click', (event) => {
      let target = event.target;

      if (widthWindow < 768) {
        if (target.matches('.close-menu-btn img') || target.matches('.scroll a')) {
          popupMenu.removeAttribute('style');
          return;
        } else {
          target = target.closest('.menu-button');
          if (target) {
            popupMenu.style.display = 'flex';
          }
        }
      }
    });

    document.addEventListener('scroll', () => {
      const topMenu = document.querySelector('.head').clientHeight;
      let topMain = window.scrollY;

      if (widthWindow < 768) {
        if (topMain > topMenu) {
          menu.style.position = 'fixed';
          menu.style.top = '0';
          menu.style.left = '0';
          if (gift) {
            gift.style.top = '70px';
          }
          return;
        }
      }

      menu.removeAttribute('style');
      if (gift) {
        gift.removeAttribute('style');
      }
    });
  };

  doBurger();

  window.addEventListener('resize', () => {
    widthWindow = body.clientWidth;
    console.log(widthWindow);
    doBurger();
  });

};

export default burgerMenu;

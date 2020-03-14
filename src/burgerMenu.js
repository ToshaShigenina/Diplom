const burgerMenu = () => {
  const body = document.body,
    popupMenu = document.querySelector('.popup-menu');

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.close-menu-btn img') || target.matches('.scroll a')) {
      popupMenu.removeAttribute('style');
      return;
    } else {
      target = target.closest('.menu-button');
      if (target) {
        popupMenu.style.display = 'flex';
      }
    }
  });

  document.documentElement.addEventListener('scroll', () => {

    const menu = document.querySelector('.top-menu');
    let topMain = body.scrollTop,
      topMenu = menu.offsetTop;
    console.log(topMain);
    if (topMain >= topMenu) {
      menu.style.position = 'fixed';
      menu.style.top = '0';
      menu.style.left = '0';
    } else {
      menu.removeAttribute('style');
    }
  });
};

export default burgerMenu;

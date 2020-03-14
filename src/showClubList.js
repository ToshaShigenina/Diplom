const showClubList = () => {
  const body = document.body;

  body.addEventListener('click', (event) => {
    const clubList = document.querySelector('.club-select ul');
    const target = event.target.closest('.club-select');

    if (target) {
      if (clubList.hasAttribute('style')) {
        clubList.removeAttribute('style');
      } else {
        clubList.style.display = 'block';
      }
    } else {
      clubList.removeAttribute('style');
    }
  });
};

export default showClubList;

const calc = () => {
  const price = {
    mozaika: {
      1: 1990,
      6: 9900,
      9: 13900,
      12: 19900
    },
    schelkovo: {
      1: 2990,
      6: 14990,
      9: 21990,
      12: 24990
    }
  };

  const priceTotal = document.getElementById('price-total'),
    cardOrder = document.getElementById('card_order');

  let month = 1,
    club = 'mozaika';

  const calcPrice = (event) => {
    let target = event.target;
    const promo = cardOrder.querySelector('[name="name"]');

    if (priceTotal) {
      if (target.matches('[name="club-name"]')) {
        club = target.value;
      }
      if (target.matches('[name="card-type"]')) {
        month = target.value;
      }
      if (promo.value !== '' || promo === target) {
        if (promo.value === 'ТЕЛО2019') {
          priceTotal.textContent = Math.floor((price[club][month] / 100) * 70);
          return;
        }
      }
      priceTotal.textContent = price[club][month];
    }
  };

  cardOrder.addEventListener('change', calcPrice);
};

export default calc;

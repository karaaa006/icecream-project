  (() => {
    const refs = {
      productItem: document.querySelectorAll('.js-products__item'),
    };
    refs.productItem.forEach(item => {
      item.addEventListener('click', event => {
        const tag = event.target.tagName;
        if (tag === 'BUTTON') {
          event.path[1].children[3].classList.toggle('is-hidden');
        }
      });
    });
  })();
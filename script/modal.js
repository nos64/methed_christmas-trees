const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const order = document.querySelector('.modal__order');

buttonsOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    order.value = buttonOrder.dataset.order; //Добавление в заказ наименования товара (data-order)
  })
});

console.log(buttonsOrder)
console.log('overlayOrder: ', overlayOrder);

overlayOrder.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active')
  }
});
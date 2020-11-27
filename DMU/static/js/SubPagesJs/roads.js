const multiItemSlider = (function () {
  return function (selector, config) {
    const mainElement = document.querySelector('.slider'); // основный элемент блока
    const sliderWrapper = mainElement.querySelector('.slider__wrapper'); // обертка для .slider-item
    const sliderItems = mainElement.querySelectorAll('.slider__item'); // элементы (.slider-item)
    const sliderControls = mainElement.querySelectorAll('.slider__control'); // элементы управления
    const sliderControlLeft = mainElement.querySelector('.slider__control_left'); // кнопка "LEFT"
    const sliderControlRight = mainElement.querySelector('.slider__control_right'); // кнопка "RIGHT"
    const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
    const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента    
    let positionLeftItem = 0; // позиция левого активного элемента
    let transform = 0; // значение транфсофрмации .slider_wrapper
    let step = itemWidth / wrapperWidth * 100; // величина шага (для трансформации)
    let items = []; // массив элементов
    // наполнение массива items
    sliderItems.forEach((item, index) => {
      item.style.zIndex = -10;
      items.push({ item: item, position: index, transform: 0 });
    });

    let position = {
      min: 0,
      max: items.length - 1,
    };

    const transformItem = (direction) => {
      if (direction === 'right') {
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.max) {
          return;
        }
        if (!sliderControlLeft.classList.contains('slider__control_show')) {
          sliderControlLeft.classList.add('slider__control_show');
        }
        if (sliderControlRight.classList.contains('slider__control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.max) {
          sliderControlRight.classList.remove('slider__control_show');
        }
        positionLeftItem++;
        transform -= step;
      }
      if (direction === 'left') {
        if (positionLeftItem <= position.min) {
          return;
        }
        if (!sliderControlRight.classList.contains('slider__control_show')) {
          sliderControlRight.classList.add('slider__control_show');
        }
        if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.min) {
          sliderControlLeft.classList.remove('slider__control_show');
          }
          positionLeftItem--;
          transform += step;
      }
      sliderWrapper.style.transform = `translateX(${transform}%)`;
    }

    // обработчик события click для кнопок "назад" и "вперед"
    const controlClick = (e) => {
      if (e.target.classList.contains('slider__control')) { 
        e.preventDefault();
        let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
        transformItem(direction);
      }
    };

    const setUpListeners = () => {
      // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
      sliderControls.forEach(item => {
        item.addEventListener('click', controlClick);
      });
    };

    // инициализация
    setUpListeners();

    return {
      right: function () { // метод right
        transformItem('right');
      },
      left: function () { // метод left
        transformItem('left');
      }
    };

  }
}());

    const slider = multiItemSlider('.slider');
// добавить под самим слайдером все фото, которые там есть 
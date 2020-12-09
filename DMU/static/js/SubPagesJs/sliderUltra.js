const multiItemSlider = (function () {
    return function (selector, config) {
        const mainElement = document.querySelector('.slider');
        const sliderWrapper = mainElement.querySelector('.slider__wrapper');
        const sliderItems = mainElement.querySelectorAll('.slider__item');
        const sliderControls = mainElement.querySelectorAll('.slider__control');
        const sliderControlLeft = mainElement.querySelector('.slider__control_left');
        const sliderControlRight = mainElement.querySelector('.slider__control_right');
        const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width);
        const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
        let positionLeftItem = 0;
        let transform = 0;
        let step = itemWidth / wrapperWidth * 100;
        let items = [];

        sliderItems.forEach((item, index) => {
            items.push({ item: item, position: index, transform: 0 });
        });

        let position = {
            min: 0,
            max: items.length - 1
        };

        const transformItem = (direction) => {
            if (direction === 'right') {
                if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.max) {
                    return;
                }
                if (!sliderControlLeft.classList.contains('slider__control_show')) {
                    sliderControlLeft.classList.add('slider__control_show');
                }
                if (sliderControlRight.classList.contains('slider__control_show') &&  (positionLeftItem + wrapperWidth / itemWidth) >= position.max) {
                    sliderControlRight.classList.remove('slider__control_show');
                }
                positionLeftItem++;
                transform -= step;
            }
            if(direction === 'left') {
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
        };

        const controlClick = (e) => {
            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                transformItem(direction);
            }
        };

        const setUpListeners = () => {
            sliderControls.forEach(item => {
                item.addEventListener('click', controlClick);
            });
        };

        setUpListeners();

        return {
            right: function () {
                transformItem('right');
            },
            left: function () {
                transformItem('left');
            }
        };
    };
}());

const slider = multiItemSlider('.slider');
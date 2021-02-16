let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const sliderWrapper = document.querySelector('.wrapper');
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('#left-button-control');
const btnNext = document.querySelector('#right-button-control');
const itemsCount = sliderItems.length;
const itemWidth = sliderContainer.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

import '../../styles/SubPagesCss/funcTD.css';
import '../../styles/SubPagesCss/roads.css';

const sliderShow = () => {

    if (sliderItems.length === 0) {
        sliderWrapper.style.display = 'none';
    }

    sliderItems.forEach(item => {
        item.style.minWidth = `${itemWidth}px`;
    });

    const setPosition = () => {
        sliderTrack.style.transform = `translateX(${position}px)`;
        checkButtons();
    };

    const checkButtons = () => {
        position === 0 ? btnPrev.style.opacity = 0.5 : btnPrev.style.opacity = 1;
        position <= -(itemsCount - slidesToShow) * itemWidth ? btnNext.style.opacity = 0.5 : btnNext.style.opacity = 1;
    };
    checkButtons();

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
    });
};
sliderShow();
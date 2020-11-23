'use strict';

const projectsCounter = document.querySelector('.projects-counter');
const yearsCounter = document.querySelector('.years-counter');
const customersCounter = document.querySelector('.customers-counter');
const scrollBtn = document.querySelector('.scroll-button');
const header = document.querySelector('.header');

const selectorLinks = document.querySelector('.selector-links');
const linkAll = document.querySelector('#link_all');
const linkRoads = document.querySelector('#link_roads');
const linkBuildings = document.querySelector('#link_buildings');
const movingCards = document.querySelector('.moving-cards');
const array = [linkAll, linkRoads, linkBuildings];

//  создать анимацию исчезновения и перемещения для элементов movingCards добавлять эту анимацию путём добавления css классов
let cardsArray = [];
for (let i = 1; i < 9; i++) {
    let j = document.querySelector(`.card${i}`);
    cardsArray.push(j);
};

const moveCards = (clickedLink) => {
    if (!clickedLink.classList.contains('holden__underline')) {
        array.forEach(item => {
            item.classList.remove('holden__underline');
        });
        clickedLink.classList.remove('child');
        clickedLink.classList.add('holden__underline');
    }
    if (clickedLink === linkAll) {
        cardsArray.forEach(item => {
            item.style.display = 'block';
        });
    }
    if (clickedLink === linkRoads) {
        cardsArray.forEach(item => {
            if (item.dataset.name === 'road') {
                item.style.display = 'block';

            } else {
                item.style.display = 'none';
            }
        });
    }
    if (clickedLink === linkBuildings) {
        cardsArray.forEach(item => {
            if (item.dataset.name === 'building') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
};

selectorLinks.addEventListener('click', e => {
    moveCards(e.target);
});

//  ФУНКЦИЯ СЧЁТЧИКИ
const getCounters = (begin1, end1, begin2, end2, begin3, end3) => {

    let current1 = begin1;
    let current2 = begin2;
    let current3 = begin3;

    let timerId1 = setInterval(function () {
        if (current1 == end1) {
            clearInterval(timerId1);
        }

        projectsCounter.textContent = `${current1++}`;
    }, 200);

    let timerId2 = setInterval(function () {
        if (current2 === end2) {
            clearInterval(timerId2);
        }

        yearsCounter.textContent = `${current2++}`;
    }, 100);

    let timerId3 = setInterval(function () {
        if (current3 === end3) {
            clearInterval(timerId3);
        }
        customersCounter.textContent = `${current3++}`;
    }, 100);
};

// ОТСЛЕЖИВАНИЕ ПРОКРУТКИ СТРАНИЦИ, ДОБАВЛЕНИЕ КНОПКИ ПРОКРУТКИ, АКТИВИРОВАНИЕ СЧЁТЧИКА И АНИМИРОВАНИЕ ШАПКИ САЙТА 
// вызов счётчиков
let counterOfCounters;
window.window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        
        if (counterOfCounters === undefined) {
            getCounters(0, 279, 0, 1777, 0, 20);
            counterOfCounters = ':(-это пасхалка хехе';
            console.log(counterOfCounters);
        }
    }
});
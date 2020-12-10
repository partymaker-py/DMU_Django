'use strict';

const projectsCounter = document.querySelector('.projects-counter');
const yearsCounter = document.querySelector('.years-counter');
const customersCounter = document.querySelector('.customers-counter');
const scrollBtn = document.querySelector('.scroll-button');
const header = document.querySelector('.header');

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
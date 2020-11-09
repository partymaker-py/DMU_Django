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

// ОТСЛЕЖИВАНИЕ ПРОКРУТКИ СТРАНИЦИ, ДОБАВЛЕНИЕ КНОПКИ ПРОКРУТКИ, АКТИВИРОВАНИЕ СЧЁТЧИКА И АНИМИРОВАНИЕ ШАПКИ САЙТА 
let counterOfCounters;
window.onscroll = function () {
    
    // 1) Анимация шапки сайта !(изменить позиционирование кнопки "Узнать больше", сделать анимацию прилипание плавной и сделать так, чтобы шапка отлипалсь при поднятии страници) 

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        header.classList.add('header-animation');
    } else {
        header.classList.remove('header-animation');
    }

    // 2) Появление кнопки прокрутки страници !(добавить стилей)!
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

        scrollBtn.style.display = 'block';
        scrollBtn.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });        
    } else {
        scrollBtn.style.display = 'none';
    }
    // 3) Вызов счётчиков !(добавить стилей)!
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        
        if (counterOfCounters === undefined) {
            getCounters(0, 279, 0, 1777, 0, 20);
            counterOfCounters = ':(-это пасхалка хехе';
            console.log(counterOfCounters);
        }
    }
 
}; 
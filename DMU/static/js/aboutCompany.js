const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const controlPrev1 = document.querySelectorAll('.btnPrev1');
const controlNext1 = document.querySelectorAll('.btnNext1');
const controlPrev2 = document.querySelectorAll('.btnPrev2');
const controlNext2 = document.querySelectorAll('.btnNext2');
const wrapperOnCenter1 = document.querySelector('.display-center-letter-wrapper1');
const wrapperOnCenter2 = document.querySelector('.display-center-letter-wrapper2');
const wrapperOnCenter3 = document.querySelector('.display-center-letter-wrapper3');
const wrapperOnCenter4 = document.querySelector('.display-center-letter-wrapper4');
const wrapperOnCenter5 = document.querySelector('.display-center-letter-wrapper5');
const wrapperOnCenter6 = document.querySelector('.display-center-letter-wrapper6');
const wrapperOnCenter7 = document.querySelector('.display-center-letter-wrapper7');
const wrapperOnCenter8 = document.querySelector('.display-center-letter-wrapper8');
const lettersInCenter1 = [wrapperOnCenter1, wrapperOnCenter2, wrapperOnCenter3, wrapperOnCenter4];// массив элементов первого слайдера 
const lettersInCenter2 = [wrapperOnCenter5, wrapperOnCenter6, wrapperOnCenter7, wrapperOnCenter8];// Массив элементов второго слайдера ;
let index1;// Индекс для первого слайдера
let index2;// Индекс для второго слайдера 

// TODO ПРИДУМАТЬ КАК ЕЩЁ СИЛЬНЕЕ МОЖНО СКРАТИТЬ КОД И СОТАНОВИТЬ ВСПЛЫТИЕ (или погружение)!!!!!11 

function slideShow() {
    const slider1 = (itemIndex) => {
        document.addEventListener('click', e => {
            if (e.target.closest('.first-line')) {
                for (item of lettersInCenter1) {
                    item.style.display = 'none';
                }
                lettersInCenter1[itemIndex].style.display = 'block';
                console.log('lettersInCenter1[itemIndex]: ', lettersInCenter1[itemIndex]);
            } else {
                lettersInCenter1[itemIndex].style.display = 'none';
            }
        });
    };
    const slider2 = (itemIndex) => {
        document.addEventListener('click', e => {
            if (e.target.closest('.second-line')) {
                for (item of lettersInCenter2) {
                    item.style.display = 'none';
                }
                lettersInCenter2[itemIndex].style.display = 'block';
            } else {
                lettersInCenter2[itemIndex].style.display = 'none';
            }
        });
    };
    controlNext1.forEach(item => {
        item.addEventListener('click', () => {
            if (index1 === lettersInCenter1.length - 1) {
                index1 = 0;
                slider1(index1);
            } else {
                index1++;
                slider1(index1);
            }
        });
    });

    controlPrev1.forEach(item => {
        item.addEventListener('click', () => {
            if (index1 === 0) {
                index1 = 3;
                slider1(index1);
            } else {
                index1--;
                slider1(index1);
            }
        });
    });
    controlNext2.forEach(item => {
        item.addEventListener('click', () => {
            if (index2 === lettersInCenter2.length - 1) {
                index2 = 0;
                slider2(index2);
            } else {
                index2++;
                slider2(index2);
            }
        });
    });
    controlPrev2.forEach(item => {
        item.addEventListener('click', () => {
            if (index2 === 0) {
                index2 = lettersInCenter2.length - 1;
                slider2(index2);
            } else {
                index2--;
                slider2(index2);
            }
        });
    });

    firstLine.addEventListener('click', (e) => {
        lettersInCenter1.forEach(item => {
            if(item === e.target.parentNode.childNodes[3].lastElementChild) {
                index1 = lettersInCenter1.indexOf(item);
                slider1(index1);
            } 
        });
    });

    secondLine.addEventListener('click', (e) => {
        lettersInCenter2.forEach(item => {     
            if(item === e.target.parentNode.childNodes[3].lastElementChild) {
                index2 = lettersInCenter2.indexOf(item);
                slider2(index2);
            }
        });
    });
};

// Поиск в хедере

slideShow();
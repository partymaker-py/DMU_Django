const firstLineLetters = document.querySelector('.first-line');
const secondLineLetters = document.querySelector('.second-line');
const wrapperOnCenter1 = document.querySelector('.display-center-letter-wrapper1');
const wrapperOnCenter2 = document.querySelector('.display-center-letter-wrapper2');
const wrapperOnCenter3 = document.querySelector('.display-center-letter-wrapper3');
const wrapperOnCenter4 = document.querySelector('.display-center-letter-wrapper4');
const wrapperOnCenter5 = document.querySelector('.display-center-letter-wrapper5');
const wrapperOnCenter6 = document.querySelector('.display-center-letter-wrapper6');
const wrapperOnCenter7 = document.querySelector('.display-center-letter-wrapper7');
const wrapperOnCenter8 = document.querySelector('.display-center-letter-wrapper8');
const wrapperLetter1 = document.querySelector('.letter-wrapper1');
const wrapperLetter2 = document.querySelector('.letter-wrapper2');
const wrapperLetter3 = document.querySelector('.letter-wrapper3');
const wrapperLetter4 = document.querySelector('.letter-wrapper4');
const wrapperLetter5 = document.querySelector('.letter-wrapper5');
const wrapperLetter6 = document.querySelector('.letter-wrapper6');
const wrapperLetter7 = document.querySelector('.letter-wrapper7');
const wrapperLetter8 = document.querySelector('.letter-wrapper8');
const btnPrev1 = document.querySelector('.btnPrev1');
const btnNext1 = document.querySelector('.btnNext1');
const btnPrev2 = document.querySelector('.btnPrev2');
const btnNext2 = document.querySelector('.btnNext2');
const btnPrev3 = document.querySelector('.btnPrev3');
const btnNext3 = document.querySelector('.btnNext3');
const btnPrev4 = document.querySelector('.btnPrev4');
const btnNext4 = document.querySelector('.btnNext4');
const btnPrev5 = document.querySelector('.btnPrev5');
const btnNext5 = document.querySelector('.btnNext5');
const btnPrev6 = document.querySelector('.btnPrev6');
const btnNext6 = document.querySelector('.btnNext6');
const btnPrev7 = document.querySelector('.btnPrev7');
const btnNext7 = document.querySelector('.btnNext7');
const btnPrev8 = document.querySelector('.btnPrev8');
const btnNext8 = document.querySelector('.btnNext8');
// Счётчик для переключения элементов первого слайдера (???)
let activeFirstSlide = {    
    first: false,  
    second: false,
    third: false,
    fourth: false       
};
// Счётчик для переключения элементов второго слоайдера(???)
let activeSecondSlide = {
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false
};
// Первый слайд
function showFirstSlide() {
    activeSlide.first = true;
    wrapperOnCenter1.style.display = 'block';
    
    btnPrev1.addEventListener('click', () => {
        wrapperOnCenter1.style.display = 'none';
        wrapperOnCenter4.style.display = 'block';
        activeSlide.first = false;
        activeSlide.fourth = true;
        showFourthSlide();
    });
    btnNext1.addEventListener('click', () => {
        wrapperOnCenter1.style.display = 'none';
        wrapperOnCenter2.style.display = 'block';
        activeSlide.first = false;
        activeSlide.second = true;
        showSecondSlide();
    });
    
}
// Второй слайд
function showSecondSlide() {
    activeSlide.second = true;
    wrapperOnCenter2.style.display = 'block';
    btnPrev2.addEventListener('click', () => {
        wrapperOnCenter2.style.display = 'none';
        wrapperOnCenter1.style.display = 'block';
        activeSlide.second = false;
        activeSlide.first = true;
        showFirstSlide();
    });
    btnNext2.addEventListener('click', () => {
        wrapperOnCenter2.style.display = 'none';
        wrapperOnCenter3.style.display = 'block';
        activeSlide.second = false;
        activeSlide.third = true;
        showThirdSlide();
    });
}
// Третий слайд
function showThirdSlide() {
    activeSlide.third = true;
    wrapperOnCenter3.style.display = 'block';
    btnPrev3.addEventListener('click', () => {
        wrapperOnCenter3.style.display = 'none';
        wrapperOnCenter2.style.display = 'block';
        activeSlide.third = false;
        activeSlide.second = true;
        showSecondSlide();
    });
    btnNext3.addEventListener('click', () => {
        wrapperOnCenter3.style.display = 'none';
        wrapperOnCenter4.style.display = 'block';
        activeSlide.third = false;
        activeSlide.fourth = true;
        showFourthSlide();
    });
}
// Четвёртый слайд
function showFourthSlide() {
    activeSlide.fourth = true;
    wrapperOnCenter4.style.display = 'block';
    btnPrev4.addEventListener('click', () => {
        wrapperOnCenter4.style.display = 'none';
        wrapperOnCenter3.style.display = 'block';
        activeSlide.fourth = false;
        activeSlide.third = true; 
        showThirdSlide();
    });
    btnNext4.addEventListener('click', () => {
        wrapperOnCenter4.style.display = 'none';
        wrapperOnCenter1.style.display = 'block';
        activeSlide.fourth = false;
        activeSlide.first = true;
        showFirstSlide();
    });
}
// Пятый слайд 
function showFifthSlide() {
    activeSlide.first = true;
    wrapperOnCenter5.style.display = 'block';
    
    btnPrev5.addEventListener('click', () => {
        wrapperOnCenter5.style.display = 'none';
        wrapperOnCenter8.style.display = 'block';
        activeSlide.first = false;
        activeSlide.fourth = true;
        showEigthSlide();
    });
    btnNext5.addEventListener('click', () => {
        wrapperOnCenter5.style.display = 'none';
        wrapperOnCenter6.style.display = 'block';
        activeSlide.first = false;
        activeSlide.second = true;
        showSixthSlide();
    });
    
}
// Шестлй слайд 
function showSixthSlide() {
    activeSlide.second = true;
    wrapperOnCenter6.style.display = 'block';
    btnPrev6.addEventListener('click', () => {
        wrapperOnCenter6.style.display = 'none';
        wrapperOnCenter5.style.display = 'block';
        activeSlide.second = false;
        activeSlide.first = true;
        showFifthSlide();
    });
    btnNext6.addEventListener('click', () => {
        wrapperOnCenter6.style.display = 'none';
        wrapperOnCenter7.style.display = 'block';
        activeSlide.second = false;
        activeSlide.third = true;
        showSeventhSlide();
    });
}
// Седьмой слайд
function showSeventhSlide() {
    activeSlide.third = true;
    wrapperOnCenter7.style.display = 'block';
    btnPrev7.addEventListener('click', () => {
        wrapperOnCenter7.style.display = 'none';
        wrapperOnCenter6.style.display = 'block';
        activeSlide.third = false;
        activeSlide.second = true;
        showSixthSlide();
    });
    btnNext7.addEventListener('click', () => {
        wrapperOnCenter7.style.display = 'none';
        wrapperOnCenter8.style.display = 'block';
        activeSlide.third = false;
        activeSlide.fourth = true;
        showEigthSlide();
    });
}
// Восьмой слайд
function showEigthSlide() {
    activeSlide.fourth = true;
    wrapperOnCenter8.style.display = 'block';
    btnPrev8.addEventListener('click', () => {
        wrapperOnCenter8.style.display = 'none';
        wrapperOnCenter7.style.display = 'block';
        activeSlide.fourth = false;
        activeSlide.third = true; 
        showSeventhSlide();
    });
    btnNext8.addEventListener('click', () => {
        wrapperOnCenter8.style.display = 'none';
        wrapperOnCenter5.style.display = 'block';
        activeSlide.fourth = false;
        activeSlide.first = true;
        showFifthSlide();
    });
}

// Обработчик события для старта первого слайдера
firstLineLetters.addEventListener('click', (e) => {
    let targetLetter = e.target.parentNode; 
    if (targetLetter == wrapperLetter1){
        activeSlide.first = true;
        showFirstSlide();
    
    }
    if (targetLetter == wrapperLetter2) {
        activeSlide.second = true;
        showSecondSlide();
        
    } 
    if (targetLetter == wrapperLetter3) {
        activeSlide.third = true;
        showThirdSlide();
    } 
    if (targetLetter == wrapperLetter4) {
        activeSlide.fourth = true;
        showFourthSlide();
    } 
    if (targetLetter == null || undefined){
        console.log('ОШИБКА! targetLetter first-line: ', targetLetter);
    }
});

// Обработчик события для стрста второго слайдера
secondLineLetters.addEventListener('click', (e) => {
    let targetLetter = e.target.parentNode;
    if (targetLetter == wrapperLetter5) {
        showFifthSlide();
    }
    if (targetLetter == wrapperLetter6) {
        showSixthSlide();
    }
    if (targetLetter == wrapperLetter7) {
        showSeventhSlide();
    }
    if (targetLetter == wrapperLetter8) {
        showEigthSlide();
    }
    if (targetLetter == null || undefined) [
        console.log('ОШИБКА! targetLetter second-line: ', targetLetter)
    ]
});


// Функция остановки слайдера по нажатию за пределами блока по центру 


// Функция автоматической прокрутки всех слайдов (по желанию)

// Доделать для вотрой строки тоже самое 
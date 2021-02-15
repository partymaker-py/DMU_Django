const projectsCounter = document.querySelector('.projects-counter');
const yearsCounter = document.querySelector('.years-counter');
const customersCounter = document.querySelector('.customers-counter');
const titleOfPage = document.querySelector('.title-of-page');
const knowMoreLink = document.querySelector('.know-more-link');

// import '../styles/indexStyle.css';

//  ФУНКЦИЯ СЧЁТЧИКИ
const getCounters = (start, end, inner) => {
    let startWith = start;
    let timer = setInterval(() => {
        if (startWith === end) clearInterval(timer);
        inner.textContent = startWith++;
        
    }, 200);
}

// вызов счётчиков
let controller = false;
document.addEventListener('scroll', () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        if (controller) return;
        controller = true;
        getCounters(1, 5, projectsCounter); // кол-во проектов
        getCounters(1480, 1510, customersCounter); // кол-во сотрудников
        getCounters(0, 3, yearsCounter); // кол-во лет
    }
});

// Функция движения заголовка главной страници
const pageTitle = () => {
    let titleHightControl = 0;
    let learnMoreHightControl = 20;
    let opacityForTitleControl = 0;
    let opacityControlForLinkMore = 0;
    setInterval(() => {
        if (titleHightControl !== 10){
            titleHightControl++;
            opacityForTitleControl += 0.1;
            titleOfPage.style.paddingTop = titleHightControl + 'px';
            titleOfPage.style.opacity = opacityForTitleControl;
        } else if (learnMoreHightControl !== 0) {
            learnMoreHightControl--;
            opacityControlForLinkMore += 0.1;
            knowMoreLink.style.marginTop = learnMoreHightControl + 'px';
            knowMoreLink.style.opacity = opacityControlForLinkMore;
        } else {
            clearInterval();
        }
    }, 60);
}
document.addEventListener('load', pageTitle());
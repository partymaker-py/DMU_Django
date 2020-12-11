const selectorLinks = document.querySelector('.selector-links');
const linkAll = document.querySelector('#link_all');
const linkRoads = document.querySelector('#link_roads');
const linkBuildings = document.querySelector('#link_buildings');
const array = [linkAll, linkRoads, linkBuildings];
let cardsArray = [];
for (let i = 1; i < 9; i++) {
    let j = document.querySelector(`.card${i}`);
    cardsArray.push(j);
};
// TODO доработать переключения активного поля 
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
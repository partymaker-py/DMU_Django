const selectorLinks = document.querySelector('.selector-links');
const linkAll = document.querySelector('#link_all');
const linkRoads = document.querySelector('#link_roads');
const linkBridges = document.querySelector('#link_bridges');
const selectorsArray = [linkAll, linkRoads, linkBridges];

const movingCards = (target) => {
    let cardsArray = document.querySelectorAll('.card_moving-cards');

    if (target.id === 'link_all') {
        selectorsArray.forEach(item => {
            item.classList.remove('holden__underline');
        })
        target.classList.add('holden__underline')
        cardsArray.forEach(item => {
            item.style.display = 'block';
        });
    }

    if (target.id === 'link_roads') {
        selectorsArray.forEach(item => {
            item.classList.remove('holden__underline');
        })
        target.classList.add('holden__underline')
        cardsArray.forEach(item => {
            item.dataset.name === 'road' ? item.style.display = 'block' : item.style.display = 'none'; 
        });
    }

    if (target.id === 'link_bridges') {
        selectorsArray.forEach(item => {
            item.classList.remove('holden__underline');
        })
        target.classList.add('holden__underline') 
        cardsArray.forEach(item => {
            item.dataset.name === 'bridge' ? item.style.display = 'block' : item.style.display = 'none';
        });
    }
};

selectorLinks.addEventListener('click', e => movingCards(e.target));
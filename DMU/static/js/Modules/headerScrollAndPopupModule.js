// поиск в header
function headerSearch() {
    const btnOpenSearch = document.querySelector('.search-icon');
    const formSearcHeader = document.querySelector('.form-search-head');
    const searchFieldInput = document.querySelector('.search-field-wrapper');
    const closeSearchForm = document.querySelector('.close-serach-form');

    const disableScroll = () => {
        let pagePosition = window.scrollY;
        document.body.classList.add('disableScroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
        searchFieldInput.style.display = 'block';
            
    };
    const enableScroll = () => {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disableScroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-page-position');
    };
    btnOpenSearch.addEventListener('click', e => {
        e.stopPropagation();
        disableScroll();
        document.addEventListener('click', e => {
            if (!e.target.closest('.form-wrapper')) {
                searchFieldInput.style.display = 'none';
                enableScroll();
            }
        });
    });
    closeSearchForm.addEventListener('click', () => {
    searchFieldInput.style.display = 'none';
        enableScroll();
    });

    formSearcHeader.addEventListener('submit', e => {
        e.preventDefault();
        const inputSearchForHeader = document.querySelector('.input-text-search');
        const regExpValid = /[<>{}]/;
        if (!inputSearchForHeader.value || inputSearchForHeader.value.match(regExpValid)) {
            inputSearchForHeader.value = '';
        } else {
            fetch(location.replace(`http://127.0.0.1:8000/?search=${inputSearchForHeader.value}`)).then(res => console.log(res)).catch(err => console.log(err));
            word = '';
        }
    });
};
// Анимация скрола и хедера
function animationHeaderAndScrollBTN() {
    const scrollBtn = document.querySelector('.scroll-button');
    window.addEventListener('scroll', () => {

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            header.classList.add('header-animation');
        } else {
            header.classList.remove('header-animation');
        }
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

            scrollBtn.style.display = 'block';
            scrollBtn.addEventListener('click', () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });        
        } else {
            scrollBtn.style.display = 'none';
        }
    }); 
};
// Попап меню для маленьких экранов
function showPopup() {
    const popupMenu = document.querySelector('.popup-menu-for-smallScreen');
    document.body.addEventListener('click', e => {
        if (e.target.closest('.popup-menu-for-smallScreen')) {
            popupMenu.querySelector('.small-screen-popup').style.display = 'flex';
        } else {
            popupMenu.querySelector('.small-screen-popup').style.display = 'none';
        }

    });
};

showPopup();
animationHeaderAndScrollBTN();
headerSearch();

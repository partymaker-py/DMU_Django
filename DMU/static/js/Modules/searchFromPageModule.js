const searchForm = document.querySelector('.search-form');
console.log('searchForm: ', searchForm);
searchForm.addEventListener('submit', e => { 
    e.preventDefault();
    const searchWord = document.querySelector('.get-search-from-page');
    const regExp = /[<>{}]/;

    if (!searchWord.value || searchWord.value.match(regExp)){
        searchForm.style.border = '1px solid rgba(255, 0, 0, 1)';
        setTimeout(() => {
            searchForm.style.border = '';
            searchWord.value = '';
        }, 1000);
        return;
    } 
    fetch(location.replace(`http://127.0.0.1:8000/?search=${searchWord.value}`)).then(res => console.log(res)).catch(rej => console.log(rej))
    searchWord.value = '';
});
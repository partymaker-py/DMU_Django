const scrollBtn = document.querySelector('.scroll-button');
const form = document.querySelector('.form');
const searchForm = document.querySelector('.search-form');
const regExpValid = /[<>{}]/;

const validation = () => {
    const nameInput = document.querySelector('.name-input');
    const fatherInput = document.querySelector('.father-input');
    const sernameInput = document.querySelector('.sername-input');
    const phoneInput = document.querySelector('.phone-input');
    const messageInput = document.querySelector('.message-input');
    let errorsArray = [];
    
    if (!nameInput.value || nameInput.value.length < 3 || !isNaN(nameInput.value) || nameInput.value.match(regExpValid)) {
        errorsArray.push(nameInput);
    }
    if (!fatherInput.value || fatherInput.value.length < 3 || !isNaN(fatherInput.value) || fatherInput.value.match(regExpValid)) {
        errorsArray.push(fatherInput);
    }
    if (!sernameInput.value || sernameInput.value.length < 3 || !isNaN(sernameInput.value) || sernameInput.value.match(regExpValid)) {
        errorsArray.push(sernameInput); 
    }
    if (!phoneInput.value || phoneInput.value < 9 || isNaN(phoneInput.value) || phoneInput.value.match(regExpValid)) {
        errorsArray.push(phoneInput);
    }
    if (!messageInput.value || messageInput.value.length < 10 || !isNaN(messageInput.value) || messageInput.value.match(regExpValid)) {
        errorsArray.push(messageInput);
    } 

    if (errorsArray.length > 0) {
        errorsArray.forEach(item => {
            item.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            item.nextElementSibling.style.visibility = 'visible';
            item.value = '';
        });
        document.querySelector('.main-warning').style.visibility = 'visible';
        return;
    } else {
        let name = nameInput.value;
        let patronymic = fatherInput.value; // отчество 
        let surname = sernameInput.value;
        let phone = phoneInput.value;
        let message = messageInput.value;
        return { name, patronymic, surname, phone, message };
    }
    
};

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const serachInput = document.querySelector('.search-in-career');
    let searchVal = serachInput.value;
    if (!searchVal || searchVal.match(regExpValid)){
        searchForm.style.border = '1px solid rgba(255, 0, 0, 1)';
        searchVal = '';
        setTimeout(() => {
            searchForm.style.border = '';
        }, 1000);
        return;
    } 
    fetch(location.replace(`http://127.0.0.1:8000/?search=${searchVal}`)).then(res => console.log(res)).catch(err => console.log(err));
    searchVal = '';
});

//TODO повесить ограничене колличестов запросов в промежуток времени
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let validResult = validation();
    if (validResult !== undefined) {

        let csrftoken = document.formCareer.csrfmiddlewaretoken.value;
        
        fetch('/career', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                name: validResult.name,
                patronymic: validResult.patronymic,
                surname: validResult.surname,
                phone: validResult.phone,
                message: validResult.message,
            })
        }).then(res => res)
            .then(data => {
                console.log('Succes: ', data);
                alert('complite');
            });
    } 
});


const scrollBtn = document.querySelector('.scroll-button');
const form = document.querySelector('.form');

const validation = () => {
    // TODO чтобы отмеслись сразу все места, где есть ошибки
    const nameInput = document.querySelector('.name-input');
    const fatherInput = document.querySelector('.father-input');
    const sernameInput = document.querySelector('.sername-input');
    const phoneInput = document.querySelector('.phone-input');
    const messageInput = document.querySelector('.message-input');
    let errorsArray = [];
    const regExpValid = /[<>{}]/;

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

    return errorsArray;
};


//TODO отпраку данных на сервер когда сервер будет готов 
form.addEventListener('submit', (e) => {
    let validationResult = validation();
    if (validationResult.length > 0) {
        const mainWarnMessage = document.querySelector('.main-warning');
        mainWarnMessage.style.visibility = 'visible';
        e.preventDefault();
        validationResult.forEach(item => {
            item.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
            item.value = '';
            item.nextElementSibling.style.visibility = 'visible';
        });
    } else {
        
    }
});


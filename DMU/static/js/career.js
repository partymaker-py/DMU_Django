const scrollBtn = document.querySelector('.scroll-button');
const form = document.querySelector('.form');

const validation = () => {
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


//TODO отпраку данных на сервер когда сервер будет готов 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let validResult = validation();
    if (validResult !== undefined) {
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                name: validResult.name,
                patronymic: validResult.patronymic,
                surname: validResult.surname,
                phone: validResult.phone,
                message: validResult.message
            })
        }).then(res => {
                console.log('Данные успешно отправленны', res);
            }).catch(rej => {
                console.log(rej);
            });
    }
    
});


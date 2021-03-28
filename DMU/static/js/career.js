const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const fatherInput = document.querySelector('.father-input');
const surnameInput = document.querySelector('.sername-input');
const phoneInput = document.querySelector('.phone-input');
const messageInput = document.querySelector('.message-input');
const mainWarn = document.querySelector('.main-warning');
const regExpValid = /[<>{}]/;

import '../styles/career.css';

let errorsArray = [];
const validation = () => {
    errorsArray.length = 0;
    let phoneWithPlus = ''

    if (!nameInput.value || nameInput.value.length < 3 || !isNaN(nameInput.value) || nameInput.value.match(regExpValid)) {
        errorsArray.push(nameInput);
    }
    if (!fatherInput.value || fatherInput.value.length < 3 || !isNaN(fatherInput.value) || fatherInput.value.match(regExpValid)) {
        errorsArray.push(fatherInput);
    }
    if (!surnameInput.value || surnameInput.value.length < 3 || !isNaN(surnameInput.value) || surnameInput.value.match(regExpValid)) {
        errorsArray.push(surnameInput); 
    }
    if (phoneInput.value.charAt(0) === '+') {
        phoneWithPlus = phoneInput.value.slice(1);
        if (!phoneWithPlus || phoneWithPlus < 9 || isNaN(phoneWithPlus) || phoneWithPlus.match(regExpValid)) {
            errorsArray.push(phoneInput);
        }    
    } else if (!phoneInput.value || phoneInput.value < 9 || isNaN(phoneInput.value) || phoneInput.value.match(regExpValid)) {
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
        mainWarn.style.visibility = 'visible';
        return;
    } else {
        errorsArray.length = 0;
        return { name: nameInput.value, father: fatherInput.value, surname: surnameInput.value, phone: !phoneWithPlus ? phoneInput.value : phoneWithPlus, message: messageInput.value};
    }
    
};
function showThanks(dataSended) {
    if (dataSended) {
        
        const thanksLetter = `
            <div class="background" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: #000000; opacity: 0.5;"></div>
            <div class="wrapper" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; overflow: auto;">
                <div class="letter" style="display: flex; align-items: center; justify-content: space-between; width: 400px; height: 100px; padding: 20px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; background: #f0f0f0;">
                    <p class="text">Спасибо, мы с вами свяжемся</p>
                    <img src="static/images/unnamed.png" alt="" class="class" style="width: 50px; height: 50px;">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', thanksLetter);
        
        setTimeout(() => {
            document.querySelector('.background').remove();
            document.querySelector('.wrapper').remove();
        }, 2000);    
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let validResult = validation();
    if (validResult !== undefined) {
        const { name, father, surname, phone, message } = validResult;
        let csrftoken = document.formCareer.csrfmiddlewaretoken.value;
        
        fetch('/career', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                name,
                patronymic: father,
                surname,
                phone,                
                careerObjective: message,
            })
        }).then(res => {
            if (res.ok) {
                for (let i = 0; i < formCareer.elements.length; i++) {
                    formCareer.elements[i].value = '';
                    formCareer.elements[i].style.backgroundColor = 'initial';
                    
                }
                mainWarn.style.visibility = 'hidden';
                showThanks(true);
            }
        });
            
    } 
});
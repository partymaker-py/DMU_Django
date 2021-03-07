const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const fatherInput = document.querySelector('.father-input');
const sernameInput = document.querySelector('.sername-input');
const phoneInput = document.querySelector('.phone-input');
const messageInput = document.querySelector('.message-input');
const regExpValid = /[<>{}]/;

import '../styles/career.css';

const validation = () => {
    
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
        return { nameInput, fatherInput, sernameInput, phoneInput, messageInput };
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

        let csrftoken = document.formCareer.csrfmiddlewaretoken.value;
        
        fetch('/career', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                name: validResult.nameInput.value,
                patronymic: validResult.fatherInput.value,
                surname: validResult.sernameInput.value,
                phone: validResult.phoneInput.value,                
                careerObjective: validResult.messageInput.value,
            })
        }).then(res => {
            if (res.ok) {
                for (let i = 0; i < formCareer.elements.length; i++) {
                    formCareer.elements[i].value = '';
                }
                showThanks(true);
                for (let value in validResult) {
                    value.value = '';
                }
            }
        });
            
    } 
});
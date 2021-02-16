const letterForm = document.querySelector('.form');
const inputName = document.querySelector('.from__input-name');
const inputPhone = document.querySelector('.form__input-phone');
const inputEmail = document.querySelector('.form__input-email');
const inputMessage = document.querySelector('.from__input-message');
const regExpValid = /[<>{}]/;

import '../styles/contacts.css';

const validation = () => {

    
    let errorsArray = [];
    if (!inputName.value || inputName.value.length < 2 || !isNaN(inputName.value) || inputName.value.match(regExpValid)) {
        errorsArray.push(inputName);
    } else {
        inputName.style.backgroundColor = '#ffffff';
        inputName.nextElementSibling.style.visibility = 'hidden';
    }   
    if (!inputPhone.value || inputPhone.value.length < 10 || isNaN(inputPhone.value) || inputPhone.value.match(regExpValid)) {
        errorsArray.push(inputPhone);
    } else {
        inputPhone.style.backgroundColor = '#ffffff';
        inputPhone.nextElementSibling.style.visibility = 'hidden';
    } 
    if (!inputEmail.value || inputEmail.value.length < 5 || !isNaN(inputEmail.value) || inputEmail.value.match(regExpValid)) {
        errorsArray.push(inputEmail);
    } else {
        inputEmail.style.backgroundColor = '#ffffff';
        inputEmail.nextElementSibling.style.visibility = 'hidden';
    } 
    if (!inputMessage.value || inputMessage.value.length < 10 || !isNaN(inputMessage.value) || inputMessage.value.match(regExpValid)) {
        errorsArray.push(inputMessage);
    } else {
        inputMessage.style.backgroundColor = '#ffffff';
        inputMessage.nextElementSibling.style.visibility = 'hidden';
    } 
    
    if (errorsArray.length > 0) {
        errorsArray.forEach(item => {
            item.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            item.nextElementSibling.style.visibility = 'visible';
            item.value = '';
        });
        document.querySelector('.main-warning-text').style.visibility = 'visible';
        return;
    } else {
        return { inputName, inputPhone, inputEmail, inputMessage };
    }
};
function showThacks(dataSended) {
    if (dataSended) {
        
        const thanksLetter = `
            <div class="background" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: #000000; opacity: 0.5;"></div>
                <div class="wrapper" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; overflow: auto;">
                <div class="letter" style="display: flex; align-items: center; justify-content: space-between; width: 400px; height: 100px; padding: 20px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; background: #f0f0f0;">
                    <p class="text">Спасибо, мы с вами свяжемся</p>
                    <img src="static/images/unnamed.png" alt="" class="class" style="width: 50px; height: 50px;">
                </div>
                
        `;
        document.body.insertAdjacentHTML('beforeend', thanksLetter);
        
        setTimeout(() => {
            document.querySelector('.background').remove();
            document.querySelector('.wrapper').remove();
        }, 2000);    
    }
    
}
letterForm.addEventListener('submit', e => {   
    e.preventDefault()
    const validResult = validation();
    if (validResult !== undefined){

        let csrftoken = document.contactForm.csrfmiddlewaretoken.value;

        fetch('/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                name: validResult.inputName.value,
                phone: validResult.inputPhone.value,
                email: validResult.inputEmail.value,
                message: validResult.inputMessage.value
            })
        }).then(res => {
            if (res.ok) {
                for (let i = 0; i < contactForm.elements.length; i++) {
                    contactForm.elements[i].value = '';
                }
                showThacks(true);
                for (let value in validResult) {
                    value.value = '';
                }
            }
        });
    }            
});
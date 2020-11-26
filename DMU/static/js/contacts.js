const letterForm = document.querySelector('.form');

const validation = () => {

    const inputName = document.querySelector('.from__input-name');
    const inputPhone = document.querySelector('.form__input-phone');
    const inputEmail = document.querySelector('.form__input-email');
    const inputMessage = document.querySelector('.from__input-message');
    const regExpValid = /[<>{}]/;
    let errorsArray = [];
    console.log(regExpValid.test(inputName.value));
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
        let name = inputName.value;
        let phone = inputPhone.value;
        let email = inputEmail.value;
        let message = inputMessage.value;
        return { name, phone, email, message };
    }
};


letterForm.addEventListener('submit', e => {   
    e.preventDefault()
    const validResult = validation();
    console.log('validResult: ', validResult);
    // TODO когла будет готов сервер сделать так, чтобы данные из формы отправлялись на сайт
    if (validResult !== undefined){
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                name: validResult.name,
                phone: validResult.phone,
                email: validResult.email,
                message: validResult.message
            })
        }).then(res => {
                console.log('данные отпраленны', res);
            }).catch(rej => {
                console.log('ОШИЮКА', rej);
            })
    }            
});
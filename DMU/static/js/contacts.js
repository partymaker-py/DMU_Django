const name = document.querySelector('.input-name');
const phoneNumber = document.querySelector('.input-phone');
const email = document.querySelector('.input-email');
const message = document.querySelector('.input-message');
const form = document.querySelector('form');
let errMes = 'Поле обязательно для заполенния.';
// Доделать форму, чтобы она работала корректно!!!
form.addEventListener('submit', (e) => {
    
    if (name.value == '') {
        let nameEr = document.querySelector('.error-name-text');
        let ertext = `
            <span style="color: red;">${errMes}</span>
        `;
        nameEr.innerHTML = ertext;
        name.style.borderColor = 'red';
        e.defaultPrevented();
    } 
    if (phoneNumber.value == '') {
        let phoneEr = document.querySelector('.error-phone-text');
        let erph = `
            <span style="color: red;">${errMes}</span>
        `;
        phoneEr.innerHTML = erph;
        phoneNumber.style.borderColor = 'red';
        e.preventDefault();
    }
    if (email.value == '') {
        let emailEr = document.querySelector('.error-email-text');
        let erem = `
            <span style="color: red;">${errMes}</span>
        `;
        emailEr.innerHTML = erem;
        email.style.borderColor = 'red';
        e.preventDefault();
    }
    if (message.value == '') {
        let mesEr = document.querySelector('.error-message-text');
        let erme = `
            <span style="color: red;">${errMes}</span>
        `;
        mesEr.innerHTML = erme;
        message.style.borderColor = 'red';
        e.preventDefault();
    }
    
});

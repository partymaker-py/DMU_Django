const scrollBtn = document.querySelector('.scroll-button');
const form = document.querySelector('.form');
const searchForm = document.querySelector('.search-form');
const nameInput = document.querySelector('.name-input');
const fatherInput = document.querySelector('.father-input');
const sernameInput = document.querySelector('.sername-input');
const phoneInput = document.querySelector('.phone-input');
const messageInput = document.querySelector('.message-input');
const regExpValid = /[<>{}]/;

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
    if (!serachInput.value || serachInput.value.match(regExpValid)){
        searchForm.style.border = '1px solid rgba(255, 0, 0, 1)';
        setTimeout(() => {
            searchForm.style.border = '';
            serachInput.value = '';
        }, 1000);
        return;
    } 
    fetch(location.replace(`http://127.0.0.1:8000/?search=${searchVal}`)).then(res => console.log(res)).catch(err => console.log(err));
    searchVal = '';
});

// TODO добавить очищение полей после отправки данных и добавить оповещение в случае неупешной отправки 
function showThacks(dataSended) {
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
        console.log(thanksLetter);
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
                name: validResult.name,
                patronymic: validResult.patronymic,
                surname: validResult.surname,
                phone: validResult.phone,
                message: validResult.message,
            })
        }).then(res => {
            if (res.ok) {
                for (let i = 0; i < formCareer.elements.length; i++) {
                    formCareer.elements[i].value = '';
                }
                showThacks(true);
            }
        });
            
    } 
});
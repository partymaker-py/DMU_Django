const scrollBtn = document.querySelector('.scroll-button');
const form = document.querySelector('form');


// Ужесточть проверку 
form.addEventListener('submit', (e) => {
    let name = document.querySelector('.name-input').value;
    if (!name || !isNaN(name) || name.length > 20){
        document.querySelector('.wraning-name-text').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.querySelector('.wraning-name-text').style.visibility = 'hidden';
    }
    let father = document.querySelector('.father-input').value;
    if (!father || !isNaN(name) || father.length > 20){
        document.querySelector('.warning-father-text').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.querySelector('.warning-father-text').style.visibility = 'hidden';
    }
    let sername = document.querySelector('.sername-input').value;
    if (!sername || !isNaN(sername) || sername.length > 30){
        document.querySelector('.warning-sername-text').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.querySelector('.warning-sername-text').style.visibility = 'hidden';
    }
    let phone = document.querySelector('.phone-input').value;
    if (!phone || isNaN(phone) || phone.length > 15){
        document.querySelector('.warning-phone-text').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.querySelector('.warning-phone-text').style.visibility = 'hidden';
    }
    let long = document.querySelector('.long-text-input').value;
    if (!long || !isNaN(long)){
        document.querySelector('.warning-long-text').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.querySelector('.warning-long-text').style.visibility = 'hidden';
    }
    let file = document.querySelector('.file-input').value;
    // if (!file || isNaN(file) === false){}
    return true;
});

if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

    scrollBtn.style.display = 'block';
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}  

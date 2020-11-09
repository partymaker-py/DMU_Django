





// function showFirstSlide() {
//     activeSlide.first = true;
//     wrapperOnCenter1.style.display = 'block';
    
//     btnPrev1.addEventListener('click', () => {
//         wrapperOnCenter1.style.display = 'none';
//         wrapperOnCenter4.style.display = 'block';
//         activeSlide.first = false;
//         activeSlide.fourth = true;
//         showFourthSlide();
//     });
//     btnNext1.addEventListener('click', () => {
//         wrapperOnCenter1.style.display = 'none';
//         wrapperOnCenter2.style.display = 'block';
//         activeSlide.first = false;
//         activeSlide.second = true;
//         showSecondSlide();
//     });
    
// }
// function showSecondSlide() {
//     activeSlide.second = true;
//     wrapperOnCenter2.style.display = 'block';
//     btnPrev2.addEventListener('click', () => {
//         wrapperOnCenter2.style.display = 'none';
//         wrapperOnCenter1.style.display = 'block';
//         activeSlide.second = false;
//         activeSlide.first = true;
//         showFirstSlide();
//     });
//     btnNext2.addEventListener('click', () => {
//         wrapperOnCenter2.style.display = 'none';
//         wrapperOnCenter3.style.display = 'block';
//         activeSlide.second = false;
//         activeSlide.third = true;
//         showThirdSlide();
//     });
// }
// function showThirdSlide() {
//     activeSlide.third = true;
//     wrapperOnCenter3.style.display = 'block';
//     btnPrev3.addEventListener('click', () => {
//         wrapperOnCenter3.style.display = 'none';
//         wrapperOnCenter2.style.display = 'block';
//         activeSlide.third = false;
//         activeSlide.second = true;
//         showSecondSlide();
//     });
//     btnNext3.addEventListener('click', () => {
//         wrapperOnCenter3.style.display = 'none';
//         wrapperOnCenter4.style.display = 'block';
//         activeSlide.third = false;
//         activeSlide.fourth = true;
//         showFourthSlide();
//     });
// }
// function showFourthSlide() {
//     activeSlide.fourth = true;
//     wrapperOnCenter4.style.display = 'block';
//     btnPrev4.addEventListener('click', () => {
//         wrapperOnCenter4.style.display = 'none';
//         wrapperOnCenter3.style.display = 'block';
//         activeSlide.fourth = false;
//         activeSlide.third = true; 
//         showThirdSlide();
//     });
//     btnNext4.addEventListener('click', () => {
//         wrapperOnCenter4.style.display = 'none';
//         wrapperOnCenter1.style.display = 'block';
//         activeSlide.fourth = false;
//         activeSlide.first = true;
//         showFirstSlide();
//     });
// }
// firstLineLetters.addEventListener('click', (e) => {
//     let targetLetter = e.target.parentNode; 
//     if (targetLetter == wrapperLetter1){
//         activeSlide.first = true;
//         showFirstSlide();
    
//     }
//     if (targetLetter == wrapperLetter2) {
//         activeSlide.second = true;
//         showSecondSlide();
        
//     } 
//     if (targetLetter == wrapperLetter3) {
//         activeSlide.third = true;
//         showThirdSlide();
//     } 
//     if (targetLetter == wrapperLetter4) {
//         activeSlide.fourth = true;
//         showFourthSlide();
//     } 
//     if (targetLetter == null || undefined){
//         console.log('ОШИБКА! targetLetter first-line: ', targetLetter);
//     }
// });
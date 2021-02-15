const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const controlPrev = document.querySelectorAll('.btnPrev');
const controlNext = document.querySelectorAll('.btnNext');
const wrapperOnCenter = document.querySelectorAll('.display-center-letter-wrapper');
let lettersInCenter1 = [];
let lettersInCenter2 = [];
for (let i = 0; i < wrapperOnCenter.length; i++) {
    if (i < 4) {
        lettersInCenter1.push(wrapperOnCenter[i]);
    } 
    if (i >= 4) {
        lettersInCenter2.push(wrapperOnCenter[i]);
    }
}
let index1;
let index2;


function thanksgivingPresentation() {

    const sliderPerformance = (array, currentIndex) => {
        
        controlNext.forEach(item => {
            item.addEventListener('click', () => {
                if (currentIndex === array.length - 1) {
                    array[currentIndex].style.display = 'none';
                    array[0].style.display = 'block';
                    currentIndex = 0;
                    
                } else {
                    array[currentIndex].style.display = 'none';
                    array[currentIndex + 1].style.display = 'block';
                    currentIndex++;
                    
                }
            });
        });
        controlPrev.forEach(item => {
            item.addEventListener('click', () => {
                if (currentIndex === 0) {
                    array[currentIndex].style.display = 'none';
                    array[array.length - 1].style.display = 'block';
                    currentIndex = array.length - 1;
                } else {
                    array[currentIndex].style.display = 'none';
                    array[currentIndex - 1].style.display = 'block';
                    currentIndex--;
                }
            });
        });

    };
    document.addEventListener('click', (e) => {
        if (e.target.closest('.first-line')) {
            lettersInCenter1.forEach(item => {
                if(item === e.target.parentNode.childNodes[3].lastElementChild) {
                    index1 = lettersInCenter1.indexOf(item);
                    lettersInCenter1[index1].style.display = 'block';
                    sliderPerformance(lettersInCenter1, index1);
                } 
            });
        } else {
            lettersInCenter1.forEach(item => {
                item.style.display = 'none';
            });
        }
        if (e.target.closest('.second-line')) {
            lettersInCenter2.forEach(item => {
                if(item === e.target.parentNode.childNodes[3].lastElementChild) {
                    index2 = lettersInCenter2.indexOf(item);
                    lettersInCenter2[index2].style.display = 'block';
                    sliderPerformance(lettersInCenter2, index2);
                } 
            });
        } else {
            lettersInCenter2.forEach(item => {
                item.style.display = 'none';
            });
        }
        
    });
};
  
thanksgivingPresentation();
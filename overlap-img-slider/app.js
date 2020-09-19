const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const myImges = document.querySelectorAll('.container img')




nextBtn.addEventListener('click', () => {
    myImges[0].classList.remove('first');
    myImges[0].classList.add('third');

    myImges[2].classList.remove('third');
    myImges[2].classList.add('first');
})
prevBtn.addEventListener('click', () => {
    myImges[0].classList.remove('thirdPos')
})
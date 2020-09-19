const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')

//buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listener

nextBtn.addEventListener('click', () => {

    carouselSlide.style.transition = 'transform 0.4 ease-in-out'
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4 ease-in-out'
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
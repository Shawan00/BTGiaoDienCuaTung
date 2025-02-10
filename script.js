document.addEventListener('DOMContentLoaded', function () {
    const promoModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    promoModal.show();   
});

//timer
const endTime = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);
const dayNum = document.querySelector('.day-num');
const hourNum = document.querySelector('.hour-num');
const minuteNum = document.querySelector('.minute-num');
const secondNum = document.querySelector('.second-num');

function updateCountDown() {
    const now = new Date()  ;
    var timeLeft = endTime - now;

    if (timeLeft <= 0) {
        dayNum.textContent = '0';
        hourNum.textContent = '00';
        minuteNum.textContent = '00';
        secondNum.textContent = '00';
        return;
    }

    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((timeLeft % (1000 * 60)) / 1000);

    dayNum.innerHTML = String(day).padStart(2, '0');
    hourNum.innerHTML = String(hour).padStart(2, '0');
    minuteNum.innerHTML = String(minute).padStart(2, '0');
    secondNum.innerHTML = String(second).padStart(2, '0');

    const nextUpdate = 1000 - (Date.now() % 1000);
    setTimeout(updateCountDown, nextUpdate);

}

updateCountDown();

//swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
});

const swiper2 = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    freeMode: false,
    slidesPerView: 6,
    spaceBetween: 25,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
});

const swiper3 = new Swiper('.swiper-3', {
    direction: 'horizontal',
    loop: true,
    freeMode: false,
    slidesPerView: 5,
    spaceBetween: 30,
});
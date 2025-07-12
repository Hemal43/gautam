const HeroSlider = new Swiper('.hero-slider', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1.8,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
          slidesPerView: 1.5,
        }
    }
});


const SectionSlider = new Swiper('.game-card-slider', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1.8,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        }
    }
});
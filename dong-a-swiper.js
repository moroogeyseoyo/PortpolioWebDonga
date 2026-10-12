var swiper = new Swiper(".mySwiper5", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1600,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

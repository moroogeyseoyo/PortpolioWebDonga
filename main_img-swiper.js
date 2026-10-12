var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

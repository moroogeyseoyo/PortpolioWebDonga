var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
        });
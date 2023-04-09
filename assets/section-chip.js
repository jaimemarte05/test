
var swiper = new Swiper(".myswiperchip", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      /* 640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      }, */
      1024: {
        slidesPerView: 2,
      },
    },
  });
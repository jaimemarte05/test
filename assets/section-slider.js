var swiperrrr = new Swiper(".swiper-aro", {
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
  
    },
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
        slidesPerView: 3,
      },
    },
  });
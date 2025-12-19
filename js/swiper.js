const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  spaceBetween: 10, // відствань між слайдами
});

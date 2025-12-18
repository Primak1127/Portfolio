const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",

  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1280: {
  //     slidesPerView: 3,
  //   },
  // },
  spaceBetween: 20, // відствань між слайдами

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

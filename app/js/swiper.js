$(function () {


  //SWIPER
  const swiper = new Swiper('.nav-container__content.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },

  });



}); // page loaded

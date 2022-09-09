import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiperHome = () => {
  $('.swiper').append(`<div class="swiper-scrollbar"></div>`);
  $('.swiper').append(`<div class="swiper-pagination"></div>`);
  $('.swiper').append(`<div class="swiper-arrow button-prev"></div>`);
  $('.swiper').append(`<div class="swiper-arrow button-next"></div>`);

  const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: {
      forceToAxis: true,
    },
    speed: 300,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 2.8,
        centeredSlides: true,
        slidesPerGroup: 1,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
};

$(document).ready(function () {
  $('.swiper-slides').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="swiper-prev swiper-icon icon-left"></button>',
    nextArrow: '<button type="button" class="swiper-next swiper-icon icon-right"></button>',
    cssEase: 'ease-out',
    dotsClass: 'swiper-dots',
    mobileFirst: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 200,
  });
  $('.header-nav__btn').click(function () {
    $('.header-menu').toggleClass("header-menu__open");
    $('.header-nav__btn').toggleClass("opened");
  });
});
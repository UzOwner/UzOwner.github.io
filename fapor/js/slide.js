$('.header-carousel').slick({
  	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 4000,
	prevArrow: "<button type='button' class='header-slide__arrows header-slide__prev'><i class='icon-left'></i></button>",
	nextArrow: "<button type='button' class='header-slide__arrows header-slide__next'><i class='icon-right'></i></button>",
});
$('.testimonial-carousel').slick({
	infinite: true,
	speed: 500,
	autoplay: true,
	slidesToShow: 1,
	autoplaySpeed: 4000,
	arrows: true,
	responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    },
  ]
});
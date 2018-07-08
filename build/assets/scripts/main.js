$(document).ready(() => {
    $('.header__humburger').on('click', function() {
        $('.header__nav').toggleClass('header__nav--active');
    });
    
    $('.popular__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.popular__prev'),
        nextArrow: $('.popular__next'),
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.hero__prev'),
        nextArrow: $('.hero__next')
    });
});
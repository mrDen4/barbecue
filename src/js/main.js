$(document).ready(() => {

    $('.header__humburger').on('click', function() {
        $('.header__nav').toggleClass('header__nav--active');
    });

    //Корзина
    $('.order__btn').on('click', function() {
        $('.header__modal').toggleClass('header__modal--active');
        $('.bg-basket').css('display', 'initial');
    });

    $('.bg-basket').on('click', function() {
        $('.header__modal').toggleClass('header__modal--active');
        $('.bg-basket').css('display', 'none');
    });

    //карточка товара
    $('.products__item').on('click', function(event) {
        $(event.target).toggleClass('products__item--active');
        $(event.target).find('.products__buy').toggleClass('products__buy--active');
    });

    //Заказать звонок
    $('.contacts__btn').on('click', function() {
        $('.header__call').toggleClass('header__call--active');
        $('.bg-call').css('display', 'initial');
    });

    $('.call__ext').on('click', function() {
        $('.header__call').toggleClass('header__call--active');
        $('.bg-call').css('display', 'none');
    })

    $('.bg-call').on('click', function() {
        $('.header__call').toggleClass('header__call--active');
        $('.bg-call').css('display', 'none');
    })

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

    $('.recommendation__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
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
});
$(document).ready(() => {

    $('.header__humburger').on('click', function() {
        $('.header__nav').toggleClass('header__nav--active');
    });

    $('.order__btn').on('click', function() {
        $('.header__modal').toggleClass('header__modal--active');
    });

    $('.products__item').on('click', function() {
        $(this).toggleClass('products__item--active');
        $(this).find('.products__buy').toggleClass('products__buy--active');
    });

    //Корзина
    $('.add__btn').on('click', function() {
        var items = [
            {
                itemid: 1,
                price: 1900,
                name: 'Булка'
            }
        ];
        items.push({
            itemid: $(this).dataset.id,
            price: $(this).dataset.price,
            name: $(this).dataset.name
        });
        var serialItems = JSON.stringify(items);
        localStorage.setItem("myItem", serialItems);
        var returnItems = JSON.parse(localStorage.getItem("myItem"));
        console.log(returnItems);
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
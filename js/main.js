$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 541,
            settings: {
                dots: true,
                arrows: false,
              }
        }]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle()
    })
});
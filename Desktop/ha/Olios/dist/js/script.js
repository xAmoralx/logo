$('.header__burger').click(function() {
    $('.header__menu').fadeToggle(400);

    if ($('.header__burger').hasClass('header__burger_active')) {
        $('.header__burger').removeClass('header__burger_active');
    } else {
        $('.header__burger').addClass('header__burger_active');
    }
});

//$('.header__burger_active').click(function() {
//        $('.header__burger_active').addClass('header__burger');
//        $('.header__burger_active').removeClass('header__burger_active');
//        $('.burger__wrap_active').addClass('burger__wrap');
//        $('.burger__wrap_active').removeClass('burger__wrap_active');
//        $('.header__burger_active span').addClass('header__burger span');
//        $('.header__burger_active span').removeClass('header__burger_active span');
//        $('.header__burger_active::before').addClass('header__burger::before');
//        $('.header__burger_active::before').removeClass('header__burger_active::before');
//        $('.header__burger_active::after').addClass('header__burger::after');
//        $('.header__burger_active::after').removeClass('header__burger_active::after');
//});

$('h1').hover(function () { 
    $('h1').addClass('animate__animated animate__bounce')
});

$('h1').mouseleave(function () { 
    $('h1').removeClass('animate__animated animate__bounce')
});


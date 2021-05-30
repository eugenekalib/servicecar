$(document).ready(function(){

    if (!(localStorage.getItem('align-policy'))) {
        $('.privacy-policy-block').show();
    }

    $('.slider').slick({        // слайдер
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.sub-nav-ul li').mouseenter(function(event) {
        $('.dropdown').show();
        let nameOfIndex = event.target.id;
        $.each(MainArray[nameOfIndex], function(index, value) {
            $('.dropdown').append('<li class="drop-li"><a href="#" class="sub_sub_menu_link">' + value + '</a></li>');
        });
        console.log(event.target.id);
    });

    let burger = $('.burger');

    burger.on('click', function () {
        console.log('RDGDBFGBFGB');
        $(this).hide();
        $('.main-nav-ul').show();
    });

    $('.main-nav-ul').on('click', function () {
        $(this).hide();
        burger.show();
    });

    let cartButton = $('.btn-cart');

    cartButton.on('click', function () {
        window.location.href = 'http://amt-svc.ru/cart-2/';
    });

    $('.align-policy').on('click', function () {
        $('.privacy-policy-block').hide();
        localStorage.setItem('align-policy', 'accept');
    });
    $('.declibe-policy').on('click', function () {
        window.location.href = "about:blank";
    });
    $('.number-telephone').inputmask("+7 (999) 999-99-99");  //static mask
});
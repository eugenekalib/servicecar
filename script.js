$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
        });


    let subMenuLink = $('.sub_menu_link');
    let subSubNavUl = $('.sub-sub-nav-ul');

    subMenuLink.hover(function() {
        subSubNavUl.empty();
        subSubNavUl.show();

        subSubNavUl.append(['<a href="#" class="sub_sub_menu_link">Подкатегория1</a>']);

        console.log('Действие есть');
    });



});

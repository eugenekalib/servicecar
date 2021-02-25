$(document).ready(function(){

    $('.slider').slick({        // слайдер
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
        });

    let subMenuLink = $('.sub_menu_link');
    let subSubNavUl = $('.sub-sub-nav-ul');


//    subMenuLink.hover(function() {
//        subSubNavUl.empty();
//        subSubNavUl.show();
//
//        subSubNavUl.append(['<li><a href="#" class="sub_sub_menu_link">Подкатегория1</a></li>']);
//
//        console.log('Действие есть');
//    });



//        subMenuLink.each(function () {



        subMenuLink.mouseenter(function() {
        subSubNavUl.empty();
        subSubNavUl.show();
        subSubNavUl.append(['<li><a href="#" class="sub_sub_menu_link">Подкатегория1</a></li>']);
        console.log('ItsWork!');
    });

        subMenuLink.mouseleave(function() {
        subSubNavUl.hide();
    });

//    });







    $('.slick-arrow').on("click", function() {
        console.log('Кнопка нажата!'); // проверяю класс обих стрелок в слайдере
    });

//    $('.slick-prev:before').css('color','yellow');

});

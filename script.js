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

        let nameOfCategorys = ["Подкатегория 1", "Подкатегория 1", "Подкатегория 1"];
        let nameOfCategorysTwo = ["Подкатегория 2", "Подкатегория 2", "Подкатегория 2"];
        let nameOfCategorysThree = ["Подкатегория 3", "Подкатегория 3", "Подкатегория 3"];
        let nameOfCategorysFour = ["Подкатегория 4", "Подкатегория 4", "Подкатегория 4"];



        $('.sub-nav-ul li').mouseenter(function(event) {
            $('.dropdown').show();
            let nameOfIndex = event.target.id;
                $.each(MainArray[nameOfIndex], function(index, value) {
                    $('.dropdown').append('<li><a href="#" class="sub_sub_menu_link">' + value + '</a></li>');
                });
            console.log(event.target.id);
        });


        $('.sub-nav-ul li').mouseleave(function() {
            $('.dropdown').empty();
            $('.dropdown').hide();
        });


        let MainArray = [[nameOfCategorys], [nameOfCategorysTwo], [nameOfCategorysThree], [nameOfCategorysFour]];
        console.log(MainArray);

        let rur = 150 * 0.0110290428;
    console.log(rur);

//        subMenuLink.mouseenter(function() {
//        subSubNavUl.empty();
//        subSubNavUl.show();
//        subSubNavUl.append(['<li><a href="#" class="sub_sub_menu_link">Подкатегория1</a></li>']);
//        console.log('ItsWork!');
//    });
//
//        subMenuLink.mouseleave(function() {
//        subSubNavUl.hide();
//    });


//$('.sub-nav-ul li').on('mouseenter', function() {
//    $('.sub-sub-nav-ul').slideToggle(280);
//});





    $('.slick-arrow').on("click", function() {
        console.log('Кнопка нажата!'); // проверяю класс обих стрелок в слайдере
    });




    $('body').on('click', '.checkboxshowpass', function() {     //показать пароль
        if ($(this).is(':checked')){
            $('#inputpass').attr('type', 'text');
            console.log('IS');
        } else {
            $('#inputpass').attr('type', 'password');
            consol.log('NOT');
        }
    });


});

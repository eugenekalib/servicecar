$(document).ready(function(){

    let priceRub = $('#price-rub');
    let priceEur = $('#inputvalute');

//    console.log(priceRub.text() + ' значение в евро ' + priceEur.text());

    $.ajax('https://api.exchangeratesapi.io/latest?base=RUB', {
        success: function(data) {
            let finalEuro = priceRub.text() * data.rates.EUR;

            $('#inputvalute').append(finalEuro.toFixed(2));
        }
    });


//    let cartParse = JSON.parse(localStorage.getItem('shoppingCartStorage'));
//
//    if (cartParse.find(item => item.id == $('.buy').attr('data-id'))) {
//
//        $('.buy').text('Перейти в корзину!');
//
//    }
//
//
//        let countCart = $('.count-cart');
//        let countOfProducts = $('.count-of-products');
//        let cartButton = $('.shopping-cart-button');
//
//        let findItem = cartParse.find(item => item.id == $('.buy').attr('data-id'));
//
//        if (findItem != 'undefined') {
//            if (findItem.count > 0) {
//                countCart.show();
//                cartButton.css('background-color', 'yellow');
//            }
//                if (findItem.count <= 0) {
//                countOfProducts.remove();
//                } else {
//                countOfProducts.text(findItem.count);
//            }
//        }
    let cartParse = JSON.parse(localStorage.getItem('shoppingCartStorage'));


    let countCart = $('.count-cart');
    let countOfProducts = $('.count-of-products');
    let cartButton = $('.shopping-cart-button');

    let generalCount = 0;

    if (cartParse != null) {

        cartParse.forEach(function(data) {
        console.log(data.count)
        generalCount += +data.count;
        console.log(generalCount);
    });

    }



//    if($('#yourID').css('display') == 'none')

    $('.buy').on("click", function() {

        if ($('.count-product').css('display') == 'none'){
            window.location.href = "cart/cart.html";
            console.log("CSS");
        }

    if ($('.input-form-item').val() > 0) {
        let currentBuy = $(this);
        if (!(localStorage.getItem('shoppingCartStorage'))) {
            let shoppingCart = {
                id: null,
                name: "",
                count: null,
                price: null,
                imgSrc: ""
            };

            let arrayOfCart = [shoppingCart];

            shoppingCart.id = parseInt($('.buy').attr('data-id'));
            shoppingCart.name = $('.decriptionproduct h2').text();
            shoppingCart.count = parseInt($('#count-value').val());
            shoppingCart.price = parseFloat($('#price-rub').text());
            shoppingCart.imgSrc = $('.currentlyproductimg').attr('src');
            localStorage.setItem('shoppingCartStorage', JSON.stringify(arrayOfCart));


            countCart.show();

            cartButton.css('background-color', 'yellow');

            currentBuy.text('Перейти в корзину!');
            currentBuy.addClass('go-to-cart');

            countOfProducts.text(shoppingCart.count);

            return;
        } else {
            let cartParse2 = JSON.parse(localStorage.getItem('shoppingCartStorage'));
            console.log($(this));
            if (cartParse2.find(item => item.id == $(this).attr('data-id'))) {
                console.log('ТАКОЙ ТОВАР УЖЕ ЕСТЬ!');
            } else {
                let shoppingCart2 = {
                id: null,
                name: "",
                count: null,
                price: null,
                imgSrc: ""
            }
            shoppingCart2.id = parseInt($('.buy').attr('data-id'));
            shoppingCart2.name = $('.decriptionproduct h2').text();
            shoppingCart2.count = parseInt($('#count-value').val());
            shoppingCart2.price = parseFloat($('#price-rub').text());
            shoppingCart2.imgSrc = $('.currentlyproductimg').attr('src');

            cartParse2.push(shoppingCart2);

            localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse2));

            countCart.show();

            cartButton.css('background-color', 'yellow');

            currentBuy.text('Перейти в корзину!');

            currentBuy.addClass('go-to-cart');

            let countIfThereIs = generalCount + shoppingCart2.count;
            countOfProducts.text(countIfThereIs);

            $('.count-product').hide();

            return;
            }
        }

    } else {

        alert("Товаров не может быть меньше одного!");

    }

});



        let goToCart = $('.go-to-cart');



        goToCart.on("click", function() {
            if (goToCart.text() == 'Перейти в корзину!') {
                window.location.href = "cart/cart.html";
                console.log("кнопка");
            }

        });





    if (cartParse.find(item => item.id == $('.buy').attr('data-id'))) {
            let countItem = cartParse.find(item => item.id == $('.buy').attr('data-id')).count;
//            console.log(countItem);
            let newCountItem = +countItem + parseInt($('#count-value').val());
//            console.log(newCountItem);
//            cartParse.find(item => item.id == $('.buy').attr('data-id')).count += parseInt($('#count-value').val());
//            localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse));
            $('.buy').text('Перейти в корзину!');
            $('.buy').addClass('go-to-cart');

            $('.count-product').hide();
        }


//            let findItem = cartParse.find(item => item.id == $('.buy').attr('data-id'));
//            if (findItem != 'undefined') {
//                if (findItem.count > 0) {
//                    countCart.show();
//                    cartButton.css('background-color', 'yellow');
//                }
//                    if (findItem.count <= 0) {
//                    countOfProducts.remove();
//                    } else {
//                    countOfProducts.text(findItem.count);
//
//                }
//            }




    if (localStorage.getItem('shoppingCartStorage')) {
        countCart.show();
        cartButton.css('background-color', 'yellow');
        countOfProducts.text(generalCount);
    }



});

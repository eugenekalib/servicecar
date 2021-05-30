$(document).ready(function(){

    let priceRub = $('#price-rub');
    let priceEur = $('#inputvalute');


    $.ajax('https://api.exchangeratesapi.io/latest?base=RUB', {
        success: function(data) {
            let finalEuro = priceRub.text() * data.rates.EUR;

            $('#inputvalute').append(finalEuro.toFixed(2));
        }
    });

    let cartParse = JSON.parse(localStorage.getItem('shoppingCartStorage'));
    let countCart = $('.count-cart');
    let countOfProducts = $('.count-of-products');
    let cartButton = $('.shopping-cart-button');
    let generalCount = 0;

    if (cartParse != null) {
        cartParse.forEach(function(data) {
        generalCount += +data.count;
    });
    }

    $('.buy').on("click", function() {
        if ($('.count-product').css('display') == 'none'){
            window.location.href = "http://amt-svc.ru/cart-2/";
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
                imgSrc: "",
                variation: ""
            };
            let arrayOfCart = [shoppingCart];
            shoppingCart.id = parseInt($('.buy').attr('data-id'));
            shoppingCart.name = $('.decriptionproduct h2').text();
            shoppingCart.count = parseInt($('#count-value').val());
            shoppingCart.price = $('bdi').text();
            shoppingCart.price = shoppingCart.price.slice(0, -1);
            shoppingCart.imgSrc = $('.wp-post-image').attr('src');
            shoppingCart.variation = $('select option').filter(':selected').text();
            localStorage.setItem('shoppingCartStorage', JSON.stringify(arrayOfCart));
            countCart.show();
            cartButton.css('background-color', 'yellow');
            currentBuy.text('Перейти в корзину!');
            currentBuy.addClass('go-to-cart');
            countOfProducts.text(shoppingCart.count);
            $('.variations_form').hide();
            $('.count-product').hide();
            return;
        } else {
            let cartParse2 = JSON.parse(localStorage.getItem('shoppingCartStorage'));
            if (cartParse2.find(item => item.id == $(this).attr('data-id'))) {
            } else {
                let shoppingCart2 = {
                id: null,
                name: "",
                count: null,
                price: null,
                imgSrc: "",
                    variation: ""
            }
            shoppingCart2.id = parseInt($('.buy').attr('data-id'));
            shoppingCart2.name = $('.decriptionproduct h2').text();
            shoppingCart2.count = parseInt($('#count-value').val());
            shoppingCart2.price = $('bdi').text();
            shoppingCart2.price = shoppingCart2.price.slice(0, -1);
            shoppingCart2.imgSrc = $('.wp-post-image').attr('src');
            shoppingCart2.variation = $('select option').filter(':selected').text();
            cartParse2.push(shoppingCart2);
            localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse2));
            countCart.show();
            cartButton.css('background-color', 'yellow');
            currentBuy.text('Перейти в корзину!');
            currentBuy.addClass('go-to-cart');
            let countIfThereIs = generalCount + shoppingCart2.count;
            countOfProducts.text(countIfThereIs);
            $('.variations_form').hide();
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
                window.location.href = "http://amt-svc.ru/cart-2/";
                console.log("кнопка");
            }
        });

    if (cartParse.find(item => item.id == $('.buy').attr('data-id'))) {
            let countItem = cartParse.find(item => item.id == $('.buy').attr('data-id')).count;
            let newCountItem = +countItem + parseInt($('#count-value').val());
            $('.buy').text('Перейти в корзину!');
            $('.buy').addClass('go-to-cart');
            $('.variations_form').hide();
            $('.count-product').hide();
        }
    if (localStorage.getItem('shoppingCartStorage')) {
        countCart.show();
        cartButton.css('background-color', 'yellow');
        countOfProducts.text(generalCount);
    }
});
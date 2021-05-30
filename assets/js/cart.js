$(document).ready(function(){

    let cartList = $('.cart-list');

    let cartParse = JSON.parse(localStorage.getItem('shoppingCartStorage'));
    console.log(cartParse);

    let cartCount = $('.cart-number');




    $.each(cartParse, function (key, value) {

        cartList.append('<div class="cart-item" data-id="' + value.id + '">' + '<div class="cart-img-block"><img src="' + value.imgSrc + '" class="cart-img" alt="IMG"></div>' + '<span class="cart-name">' + value.name + '</span>' + '<div class="count-item">' + '<div class="minus-count-icon" data-id="' + value.id + '"></div>' + '<input class="count-input" value="' + value.count + '" data-id="' + value.id + '">' + '<div class="plus-count-icon" data-id="' + value.id + '"></div></div>' + '<div class="cart-price" data-id="' + value.id + '">' + value.price + ' Руб.</div><div data-id="' + value.id + '" class="delete-button"></div>' + '</div>')
    });


    let cartItem = $('.cart-item');

    let deleteButton = $('.delete-button');


    deleteButton.on("click", function() {

        console.log(currentButton);
        cartItem.each(function() {
            if (currentButton.attr('data-id') == $(this).attr('data-id')) {
                $(this).remove();
                let idObject = currentButton.attr('data-id');
                console.log(idObject);
                let cartParseRemove = cartParse.splice(cartParse.indexOf(cartParse.find(item => item.id == idObject)), 1);
                console.log(JSON.stringify(cartParse) + "новый массив");
                localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse));
            }
        });
    });


//
//    console.log(JSON.stringify(cartParse));
//    console.log(cartParse.indexOf(cartParse.find(item => item.id == 123)) + "индекс");
//
//    let cartParseRemove = cartParse.splice(cartParse.indexOf(cartParse.find(item => item.id == 456)), 1);
//
//    console.log(cartParse);


    let acceptCount = $('.accept-icon');

    let minusCount = $('.minus-count-icon');

    let plusCount = $('.plus-count-icon');

    let countInput = $('.count-input');

//
//    acceptCount.on("click", function() {
//        let currentAccept = $(this);
//        console.log($(this));
//        countInput.each(function() {
//
//        });
//    });




    countInput.on("change", function() {
        console.log($(this));
        console.log(cartParse.find(item => item.id == $(this).attr('data-id')));
        let countInputValue = $(this).val();
        console.log(countInputValue);
        cartParse.find(item => item.id == $(this).attr('data-id')).count = countInputValue;
        localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse));
        $(this).val(countInputValue);
    });


    minusCount.on("click", function() {
        let currentMinus = $(this);
            countInput.each(function() {
                if (currentMinus.attr('data-id') == $(this).attr('data-id')) {
                    let valueCountInt = $(this).attr('value');
                    valueCountInt = +valueCountInt - 1;
                    $(this).attr('value', valueCountInt);
                    console.log(valueCountInt);
                    cartParse.find(item => item.id == $(this).attr('data-id')).count = valueCountInt;
                    localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse));
                }
        });
            totalPrice = 0;
        $.each(cartParse, function (key, val) {
            console.log(val.price + ' ' + val.count);
            let currentPrice = val.price;
            let currentCount = val.count;
            let finalPrice = 0;
            console.log(finalPrice);
            finalPrice = currentPrice * currentCount;
            console.log(finalPrice);
            totalPrice += finalPrice;
            console.log(totalPrice);
        });
        totalInput.text(totalPrice + " Руб.");
    });


    plusCount.on("click", function() {
        let currentPlus = $(this);
            countInput.each(function() {
                if (currentPlus.attr('data-id') == $(this).attr('data-id')) {
                    let valueCountInt = $(this).attr('value');
                    valueCountInt = +valueCountInt + 1;
                    $(this).attr('value', valueCountInt);
                    console.log(valueCountInt);
                    cartParse.find(item => item.id == $(this).attr('data-id')).count = valueCountInt;
                    localStorage.setItem('shoppingCartStorage', JSON.stringify(cartParse));
                }
        });
        totalPrice = 0;
        $.each(cartParse, function (key, val) {
            console.log(val.price + ' ' + val.count);
            let currentPrice = val.price;
            let currentCount = val.count;
            let finalPrice = 0;
            console.log(finalPrice);
            finalPrice = currentPrice * currentCount;
            console.log(finalPrice);
            totalPrice += finalPrice;
            console.log(totalPrice);
        });
        totalInput.text(totalPrice + " Руб.");
    });

    let totalValue = $('.total-val');

    totalValue = 0;



    let totalInput = $('.total-val');

    let totalPrice = 0;

    $.each(cartParse, function (key, val) {
        console.log(val.price + ' ' + val.count);
        let currentPrice = val.price;
        let currentCount = val.count;
        let finalPrice = 0;
        console.log(finalPrice);
        finalPrice = currentPrice * currentCount;
        console.log(finalPrice);
        totalPrice += finalPrice;
        console.log(totalPrice);
    });

    totalInput.append(totalPrice + " Руб.");


    $('.count-input').on('change', function () {
        totalPrice = 0;
        $.each(cartParse, function (key, val) {
            console.log(val.price + ' ' + val.count);
            let currentPrice = val.price;
            let currentCount = val.count;
            let finalPrice = 0;
            console.log(finalPrice);
            finalPrice = currentPrice * currentCount;
            console.log(finalPrice);
            totalPrice += finalPrice;
            console.log(totalPrice);
        });
        totalInput.text(totalPrice + " Руб.");
    });

    let adressShip = $('.adress-ship');

    let submitShip = $('.sumbit-ship');

    let numberPhone = $('.number-telephone');

    submitShip.on('click', function (e) {
        if ($('.align-policy-cart').is(':checked')) {
            e.preventDefault();
            console.log(adressShip.val());
            $.ajax({
                method: "POST",
                data: {'action': 'ship', 'data': [{items:JSON.parse(localStorage.shoppingCartStorage)}, {adress:adressShip.val()}, {number:numberPhone.val()}]},
                datatype: 'html',
                url: "/wp-admin/admin-ajax.php",
                success: function (data){console.log(data)},
            });
        }
    });
    $('.align-policy-cart').on('click', function () {
        if ($(this).is(":checked")) {
            $(".sumbit-ship").removeAttr("disabled");
        } else {
            $(".sumbit-ship").attr("disabled", "disabled");
        }
    });
});

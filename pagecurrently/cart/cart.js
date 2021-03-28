$(document).ready(function(){

    let cartList = $('.cart-list');
//    console.log(cartList);

    let cartParse = JSON.parse(localStorage.getItem('shoppingCartStorage'));
    console.log(cartParse);

    let cartCount = $('.cart-number');




    $.each(cartParse, function (key, value) {
//        console.log( key + ": " + JSON.stringify(value.id) );
//        console.log(JSON.stringify(value.imgSrc) + "ССЫЛКА НА ФОТО");
        cartList.append('<div class="cart-item" data-id="' + value.id + '">' + '<div class="cart-img-block"><img src="' + value.imgSrc + '" class="cart-img" alt="IMG"></div>' + '<span class="cart-name">' + value.name + '</span>' + '<div class="count-item">' + '<div class="minus-count-icon" data-id="' + value.id + '"></div>' + '<input class="count-input" value="' + value.count + '" data-id="' + value.id + '">' + '<div class="plus-count-icon" data-id="' + value.id + '"></div></div>' + '<div data-id="' + value.id + '" class="delete-button"></div>' + '</div>')
    });


//<div class="accept-icon" data-id="' + value.id + '"></div>
    let cartItem = $('.cart-item');

    let deleteButton = $('.delete-button');





    deleteButton.on("click", function() {
        let currentButton = $(this);
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
    });



});

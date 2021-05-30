<?php
/**Template name: Корзина*/

get_header(); ?>
<main>
    <section class="shopping-cart">
        <div class="heading-cart">
            <h2>Корзина</h2>
        </div>

        <div class="cart-list">

        </div>

        <div class="total">
            <h2>Итого</h2>
            <span class="total-val">

            </span>
        </div>
    </section>

    <section class="privacy-policy-cart">
    <h2>Соглашения</h2>
        <p>
            Мы используем cookie-файлы. Вы можете прочитать <a href="/assets/docs/pozlovatelskoesoglashenie.docx">Пользовательское соглашение</a>
            подробнее о cookie-файлах или изменить настройки браузера. Чтобы продолжать пользоваться
            сайтом, вы должны дать согласие на использование ваших cookie-файлов и принять <a href="">Политику конфиденциальности</a>.
        </p>
        <div class="checkbox-block">
            <input type="checkbox" class="align-policy-cart">
            <p>Принять</p>
        </div>
    </section>

    <div class="ship-block">
        <h3>Введите адрес доставки</h3>
        <form class="final-form" action="cartTotal" name="ship-form">
            <input class="number-telephone" type="phone" placeholder="Введите Ваш номер телефона">
            <input class="adress-ship" type="text" placeholder="Введите адрес доставки">
            <input class="sumbit-ship" type="button" value="Оформить заказ!" disabled>
        </form>
    </div>

</main>

<?php get_footer();
<?php
/**Template name: Главная страница*/

get_header(); ?>


    <div class="wrapper">
        <div class="slider">
            <div class="imageslider"><img src="https://al-zapad.ru/upload/medialibrary/4b1/4b151e01375f3423e8be751721df0b2e.jpg" alt=""></div>
            <div class="imageslider"><img src="https://www.openbusiness.ru/upload/iblock/82b/automoyka6.jpg" alt=""></div>
            <div class="imageslider"><img src="http://static.wixstatic.com/media/b30147_5cc46129efe6400d8114891307985cf3.jpg_srz_961_638_85_22_0.50_1.20_0.00_jpg_srz" alt=""></div>

        </div>
    </div>

    <main>

        <section class="categories">
            <?= do_shortcode('[product_categories number="0" parent="0"]'); ?>
        </section>



        <section class="sectionhits">

            <div class="hits-block">
                <div class="h2-hits-block"> <h2 class="hh2">Новые товары</h2></div>
                <?= do_shortcode('[products limit = "8" columns = "4" orderby = "id" order = "DESC" visibility = "visible"]'); ?>

                <div class="showallbutton-block">
                    <a class="show-shop" href="http://amt-svc.ru/shop/">Посмотреть все</a>
                </div>
            </div>
        </section>


        <div class="wetrust">
            <div class="certificate-block"><a data-lightbox="test" href="https://rusintez.ru/upload/iblock/2f7/2f74f64e6af4577b3c241f357927f80b.jpg"><img class="certificate-img" src="https://rusintez.ru/upload/iblock/2f7/2f74f64e6af4577b3c241f357927f80b.jpg" alt=""></a><div class="trustdiv"> </div></div>
            <div class="certificate-block"><a data-lightbox="test" href="https://rusintez.ru/upload/iblock/281/281243b86af9727edf7793ac441492b4.jpg"><img class="certificate-img" src="https://rusintez.ru/upload/iblock/281/281243b86af9727edf7793ac441492b4.jpg" alt=""></a><div class="trustdiv"> </div></div>
            <div class="certificate-block"><a data-lightbox="test" href="https://rusintez.ru/upload/iblock/5a4/5a4029a626b3bb8720153db0dec44ec9.jpg"><img class="certificate-img" src="https://rusintez.ru/upload/iblock/5a4/5a4029a626b3bb8720153db0dec44ec9.jpg" alt=""></a><div class="trustdiv"> </div></div>
        </div>


        <section class="about">

            <div class="h2letusknow">
                <h2>Будем знакомы</h2>
            </div>

            <div class="abouttextblock">

                <h3>О нас</h3>

                <div class="abouttext"><p class="main-about-text">Компания «Русинтез» является одним из крупнейших производителей профессиональной автохимии для бесконтактной и ручной мойки автомобилей, автокосметики, а также профессиональной химии для клининга. Собственные торговые марки выпускаются на рынок под брендом Carwell и Foxy, имеют широкое распространение в дилерской среде по всей территории России. Производимая нами продукция проходит проверку на качество, имеет все необходимые сертификаты соответствия, безопасна для окружающей среды.

                        По сравнению с аналогичными брендами, наша продукция имеет более доступные цены, что делает товар наиболее привлекательным для покупателей, и позволяет существенно экономить на закупках продукции без потери качества.

                        Наша компания использует импортное сырье, а также опыт и технологии известных мировых брендов, производит продукцию в соответствии с европейскими стандартами качества, которая удовлетворит даже самого требовательного клиента. Это обусловлено тем, что перед началом производства технологи нашей компании детально изучили состав продукции крупнейших западных компаний, и на основе лабораторного тестирования разработали принципиально новые формулы химического состава продукции. Сравнительные испытания нашей и конкурирующей продукции показали, что наша профессиональная химия в подавляющем большинстве намного превосходит продукцию известных брендов по эффективности, что гарантирует надежность и уверенность покупателя в качестве товара.</p></div>
            </div>
        </section>
    </main>


<?php get_footer();

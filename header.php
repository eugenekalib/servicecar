<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package amtservice
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <style>
        .burger {
            background-image: url("<?php echo get_stylesheet_directory_uri(); ?>/assets/img/main/iconfinder_list_3325153.svg");
        }
        .shopping-cart-button {
            background-image: url("<?php echo get_stylesheet_directory_uri(); ?>/assets/img/main/iconfinder_shopping-cart_3324948.svg");
        }
        .delete-button {
            background-image: url("<?php echo get_stylesheet_directory_uri(); ?>/assets/img/main/iconfinder_trash-2_2561228.svg");
        }
        .minus-count-icon {
            background-image: url("<?php echo get_stylesheet_directory_uri(); ?>/assets/img/main/iconfinder_minus_3325004.svg");
        }
        .plus-count-icon {
            background-image: url("<?php echo get_stylesheet_directory_uri(); ?>/assets/img/main/iconfinder_plus_3325019.svg");
        }
    </style>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header>
    <div class="header-block">
        <div class="logo-and-nav">
            <a href="http://amt-svc.ru/">
                <img src=" <?php echo get_template_directory_uri() . '/assets/img/main' ?>/FINALROMAN.svg" class="logoimg" alt="LOGO">
            </a>
            <div class="header-navigation-block">
                <nav class="header-navigation">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'menu-1',
                            'menu_id'        => 'primary-menu',
                            'container_class' => 'header-navigation',
                            'menu_class' => 'main-nav-ul',
                        )
                    );
                    ?>
                </nav>
            </div>
            <div class="burger">
            </div>
        </div>
    </div>
    <div class="searchfield">
        <?= do_shortcode('[aws_search_form]'); ?>
    </div>
</header>
<div class="btn-cart">
    <section class="shopping-cart-button"></section>
    <div class="count-cart"><span class="count-of-products"></span></div>
</div>

<div class="privacy-policy-block">
    <p>
        Чтобы использовать этот сайт, Вы должны принять <a href="http://amt-svc.ru/wp-content/uploads/2021/05/pozlovatelskoesoglashenie.docx">условия пользовательского соглашения</a> и
        <a href="http://amt-svc.ru/wp-content/uploads/2021/05/politicalconfident.docx">политику конфиденциальности</a>, а также дать согласие на обработку пользовательских данных.
    </p>
    <button class="align-policy">Ок</button>
    <button class="declibe-policy">Нет</button>
</div>
<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Amtservice
 */

?>

<footer>
    <div class="footerblock">
        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'menu-1',
                'menu_id'        => 'primary-menu1',
                'container_class' => 'footerblock',
                'menu_class' => 'footernav',
            )
        );
        ?>

    </div>

    <div class="copyright">
        <p>© Copyright 2021</p>
    </div>

</footer>

<?php wp_footer(); ?>

</body>
</html>

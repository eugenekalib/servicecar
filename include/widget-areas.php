<?php
/**
 * amtservice functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package amtservice
 */

if ( ! defined( '_S_VERSION' ) ) {
    // Replace the version number of the theme on each release.
    define( '_S_VERSION', '1.0.0' );
}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function amtservice_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Sidebar', 'amtservice' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'amtservice' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action( 'widgets_init', 'amtservice_widgets_init' );


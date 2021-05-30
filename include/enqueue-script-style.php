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
 * Enqueue scripts and styles.
 */
add_action( 'wp_enqueue_scripts', 'amtservice_scripts' );
function amtservice_scripts() {

    wp_enqueue_style( 'amtservice-style', get_stylesheet_uri(), array(), _S_VERSION );

    wp_enqueue_style( 'amtservice-slick.min', get_template_directory_uri() . '/assets/css/slick.min.css', array(), _S_VERSION );
    wp_enqueue_style( 'amtservice-slick-theme.min', get_template_directory_uri() . '/assets/css/slick-theme.min.css', array(), _S_VERSION );
    wp_enqueue_style( 'amtservice-lightbox.min', get_template_directory_uri() . '/assets/css/lightbox.min.css', array(), _S_VERSION );

    wp_enqueue_style( 'amtservice-cart', get_template_directory_uri() . '/assets/css/cart.css', array(), _S_VERSION );
    wp_enqueue_style( 'amtservice-currentlyStyle', get_template_directory_uri() . '/assets/css/currentlyStyle.css', array(), _S_VERSION );
    wp_enqueue_style( 'amtservice-main-style', get_template_directory_uri() . '/assets/css/style.css', array(), _S_VERSION );

    wp_style_add_data( 'amtservice-style', 'rtl', 'replace' );

    wp_enqueue_script( 'amtservice-jquery-3.6.0.min', get_template_directory_uri() . '/assets/js/jquery-3.6.0.min.js', array(), _S_VERSION, false );
    wp_enqueue_script( 'amtservice-script', get_template_directory_uri() . '/assets/js/script.js', array(), _S_VERSION, true );
    wp_enqueue_script( 'amtservice-currentlyScript', get_template_directory_uri() . '/assets/js/currentlyScript.js', array(), _S_VERSION, false );
    wp_enqueue_script( 'amtservice-cart', get_template_directory_uri() . '/assets/js/cart.js', array(), _S_VERSION, true );
    wp_enqueue_script( 'amtservice-slick.min', get_template_directory_uri() . '/assets/js/slick.min.js', array(), _S_VERSION, true );
    wp_enqueue_script( 'amtservice-lightbox-plus-jquery.min', get_template_directory_uri() . '/assets/js/lightbox-plus-jquery.min.js', array(), _S_VERSION, false );
    wp_enqueue_script( 'amtservice-jquery.inputmask', get_template_directory_uri() . '/assets/js/dist/jquery.inputmask.js', array(), _S_VERSION, true );


    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}


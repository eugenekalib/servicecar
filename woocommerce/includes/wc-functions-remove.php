<?php

if ( ! defined( '_S_VERSION' ) ) {
    // Replace the version number of the theme on each release.
    define( '_S_VERSION', '1.0.0' );
}

remove_action('woocommerce_single_variation', 'woocommerce_single_variation_add_to_cart_button', 20);
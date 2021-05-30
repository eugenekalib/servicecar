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

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( 'include/carbon-fields/vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}

add_action( 'carbon_fields_register_fields', 'register_carbon_fields' );
function register_carbon_fields() {
    require_once( 'include/custom-fields-options/metabox.php' );
    require_once( 'include/custom-fields-options/theme-options.php' );
}


/**Include theme file**/
require get_template_directory() . '/include/theme-settings.php';


/**Include widget file**/
require get_template_directory() . '/include/widget-areas.php';

/**Include script and style file**/
require get_template_directory() . '/include/enqueue-script-style.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
    require get_template_directory() . '/woocommerce/includes/wc-functions.php';
    require get_template_directory() . '/woocommerce/includes/wc-functions-remove.php';
}

add_action('wp_ajax_ship', 'say_hello_world');

add_action('wp_ajax_nopriv_ship', 'say_hello_world');

function say_hello_world() {
    $data = $_POST[data][0][items];
    $adress = $_POST[data][1][adress];
    $numberPhone = $_POST[data][2][number];
    $headers = "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $html = 'Вам заказали данные товары: <br />';

    foreach ($data as $key => $val) {
        $variation = $data[$key]["variation"];
        $result = preg_replace("/[^,.0-9]/", '', $variation);
        $html .= "Название - " . $data[$key]["name"] . " в опции - " . $result . " л." . " в количестве - " . $data[$key]["count"] . " по цене - " . $data[$key]["price"] . " итого по товару - " . $data[$key]["count"] * $data[$key]["price"] . "<br />";
    }

    $html .= "<br />" . "Адрес, указанный в заказе:" . "<br />" . $adress . "<br />" . "<br />" . "Номер телефона " . $numberPhone;
    if (mail('rchistov@amt-svc.ru', 'Заказ', $html, $headers)) { echo 'success'; } else { echo 'failed'; };
    die();
}
<?php
/**Template name: Страница товара*/

get_header(); ?>

<?php while ( have_posts() ) : ?>
    <?php the_post(); ?>

    <?php
    global $product;
    $columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
    $post_thumbnail_id = $product->get_image_id();
    $wrapper_classes   = apply_filters(
        'woocommerce_single_product_image_gallery_classes',
        array(
            'woocommerce-product-gallery',
            'woocommerce-product-gallery--' . ( $product->get_image_id() ? 'with-images' : 'without-images' ),
            'woocommerce-product-gallery--columns-' . absint( $columns ),
            'images',
        )
    );
    $attributes = $product->get_variation_attributes();
    $available_variations = $product->get_available_variations();

    $attribute_keys  = array_keys( $attributes );
    $variations_json = wp_json_encode( $available_variations );
    $variations_attr = function_exists( 'wc_esc_json' ) ? wc_esc_json( $variations_json ) : _wp_specialchars( $variations_json, ENT_QUOTES, 'UTF-8', true );

//    echo $variations_attr;

//    echo $product->description;
//    echo json_encode($attributes);
    $short_description = apply_filters( 'woocommerce_short_description', $post->post_excerpt );


    ?>





    <main id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>



        <section class="sectionhits">

            <section class="currently-product">

                <div class="imgprod">
                    <figure class="woocommerce-product-gallery__wrapper">
                        <?php
                        if ( $product->get_image_id() ) {
                            $html = wc_get_gallery_image_html( $post_thumbnail_id, true );
                        } else {
                            $html  = '<div class="woocommerce-product-gallery__image--placeholder">';
                            $html .= sprintf( '<img src="%s" alt="%s" class="currentlyproductimg" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
                            $html .= '</div>';
                        }

                        echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped

                        do_action( 'woocommerce_product_thumbnails' );
                        ?>
                    </figure>
                </div>

                <div class="decriptionproduct">
                    <?php the_title( '<h2 class="name-product">', '</h2>' ); ?>
<!--                    <h2 class="hh2">CARWELL HYDRO WAX</h2>-->
                    <section class="description"><?php echo $product->description; ?></section>
                    <div class="maindesc">
                        <section class="desc-of-item"> <?php echo $short_description; ?></section>
                        <div class="priceconvert">

<!--                            <span id="price-rub" class="price-in-rub">--><?php //echo $product->get_price_html(); ?><!--</span>-->
<!--                            <span class="rub-text">Рублей,</span>-->
<!--                            <output id="inputvalute"> </output><span class="eur-text">Евро</span>-->
                        </div>
                        <div class="count-product">
                            <span>Кол-во</span> <input class="input-form-item" type="number" id="count-value" min="0">
                        </div>
                    </div>


                    <?php
                    do_action( 'woocommerce_before_add_to_cart_form' );
                    ?>

                    <form class="variations_form cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data' data-product_id="<?php echo absint( $product->get_id() ); ?>" data-product_variations="<?php echo $variations_attr; // WPCS: XSS ok. ?>">
                        <?php do_action( 'woocommerce_before_variations_form' ); ?>

                        <?php if ( empty( $available_variations ) && false !== $available_variations ) : ?>
                            <p class="stock out-of-stock"><?php echo esc_html( apply_filters( 'woocommerce_out_of_stock_message', __( 'This product is currently out of stock and unavailable.', 'woocommerce' ) ) ); ?></p>
                        <?php else : ?>

                            <div class="single_variation_wrap">
                                <?php
                                /**
                                 * Hook: woocommerce_before_single_variation.
                                 */
                                do_action( 'woocommerce_before_single_variation' );

                                /**
                                 * Hook: woocommerce_single_variation. Used to output the cart button and placeholder for variation data.
                                 *
                                 * @since 2.4.0
                                 * @hooked woocommerce_single_variation - 10 Empty div for variation data.
                                 * @hooked woocommerce_single_variation_add_to_cart_button - 20 Qty and cart button.
                                 */
                                do_action( 'woocommerce_single_variation' );
                                /**
                                 * Hook: woocommerce_after_single_variation.
                                 */
                                wp_enqueue_script( 'wc-add-to-cart-variation' );

		// Get Available variations?
		$get_variations = count( $product->get_children() ) <= apply_filters( 'woocommerce_ajax_variation_threshold', 30, $product );

		// Load the template.
		wc_get_template(
			'single-product/add-to-cart/variable.php',
			array(
				'available_variations' => $get_variations ? $product->get_available_variations() : false,
				'attributes'           => $product->get_variation_attributes(),
				'selected_attributes'  => $product->get_default_attributes(),
			)
		);

                                do_action( 'woocommerce_after_single_variation' );
                                ?>
                            </div>
                        <?php endif; ?>

                        <?php do_action( 'woocommerce_after_variations_form' ); ?>
                    </form>

                <?php
do_action( 'woocommerce_after_add_to_cart_form' );
    ?>
                    <button class="buy" data-id="<?php the_ID(); ?>" data-name="Генератор">В корзину!</button>
                </div>

            </section>


        </section>

    </main>

<?php endwhile; // end of the loop. ?>

<?php get_footer();
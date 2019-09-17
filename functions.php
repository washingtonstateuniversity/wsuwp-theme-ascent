<?php
/**
 * WSU WP Lodge Child functions and definitions
 *
 * @package WSU_WP_Lodge_Child
 */


/**
 * Classes
 */
require_once 'classes/class-wsuwp-lodge-child.php';

/**
 * Actions
 */
add_action( 'init', 'WSU_WP_Lodge_Child::register_project_post_type' );
add_action( 'add_meta_boxes', 'WSU_WP_Lodge_Child::register_project_meta_box' );
add_action( 'wp_enqueue_scripts', 'WSU_WP_Lodge_Child::enqueue_scripts' );

/**
 * Filters
 */

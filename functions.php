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
require_once 'classes/class-wsuwp-lodge-child-helpers.php';
require_once 'classes/class-wsuwp-lodge-child-sidebars.php';

// Carry over from v0.12.3
require_once 'classes/class-ascent-uc-project.php';

/**
 * Actions
 */
add_action( 'wp_enqueue_scripts', 'WSU_WP_Lodge_Child::enqueue_scripts' );
add_action( 'widgets_init', 'WSU_WP_Lodge_Child_Sidebars::add_sidebars_to_widgets_area');

/**
 * Filters
 */
add_filter( 'widget_categories_args', 'WSU_WP_Lodge_Child::widget_categories_args_filter', 10, 1 );

/**
 * Shorcodes
 */
add_shortcode( 'featured_projects', 'WSU_WP_Lodge_Child::featured_projects' );

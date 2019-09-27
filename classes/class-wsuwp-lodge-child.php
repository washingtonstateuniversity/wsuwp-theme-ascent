<?php
/**
 * Class for theme setup
 *
 * @class WSU_WP_Lodge_Child
 */
final class WSU_WP_Lodge_Child
{
	/**
	 * Enqueues scripts and styles.
	 *
	 * @return void
	 */
	static public function enqueue_scripts()
	{

		wp_enqueue_style( 'wsuwp-lodge-child-webpack-styles', get_stylesheet_directory_uri() . '/assets/dist/child-main.css', array('wsuwp-lodge-basic-styles', 'wsuwp-lodge-webpack-styles'), filemtime(get_stylesheet_directory() . '/assets/dist/child-main.css') );

		wp_enqueue_style( 'wsuwp-lodge-child-google-fonts', 'https://fonts.googleapis.com/css?family=Heebo:400,700,900&display=swap');

		wp_enqueue_script( 'wsuwp-lodge-child-scripts', get_stylesheet_directory_uri() . '/assets/dist/child-scripts.js', array(), filemtime(get_stylesheet_directory() . '/assets/dist/child-scripts.js'), true );

	}

	/**
	 * Filter Widget Category Args
	 */
	static public function widget_categories_args_filter( $cat_args )
	{
		// Filter by Topics
		$cat_args['taxonomy'] = 'wsuwp_uc_topics';

		// Exclude Finished Projects
		$cat_args['exclude'] = '429';

		return $cat_args;
	}
}

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

		$whitelist = array( '127.0.0.1', '::1', '192.168.50.*' );
		$ip = $_SERVER['REMOTE_ADDR'];

		foreach($whitelist as $i){
			$wildcardPos = strpos($i, "*");

			if ( $wildcardPos !== false && substr($ip, 0, $wildcardPos) . "*" == $i ) {
				// wp_enqueue_script( 'wsuwp-lodge-child-livereload', 'http://localhost:35729/livereload.js');
			}
		}
	}

	/**
	 * Register Projects Post Type
	 */
	static public function register_project_post_type()
	{
		$args = array(
			'public'   => true,
			'label'    => 'Projects',
			'supports' => array('title', 'editor', 'thumbnail'),
			'show_in_rest' => true
		);

		register_post_type( 'ascent_projects', $args);
	}

	/**
	 * Register Project Meta Boxes
	 */
	static public function register_project_meta_box()
	{
		add_meta_box('ascent-project-details', __( 'Project Details', 'wsuwp-lodge-child'), 'ascent_display_callback', 'ascent_projects', 'side', 'high');

		function ascent_display_callback($post) {
			echo '
				<div class="components-base-control__field">
					<label class="components-base-control__label" for="project-number" style="margin-bottom: 5px; display: block;">Project Number</label>
					<input val="test" type="text" class="components-text-control__input" placeholder="001" id="project-number" />
				</div>
			';
		}
	}
}

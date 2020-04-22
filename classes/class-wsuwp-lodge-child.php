<?php
/**
 * Class for theme setup
 *
 * @class WSU_WP_Lodge_Child
 */
final class WSU_WP_Lodge_Child
{

	/**
	 * Enqueues scripts and styles for the wp dashboard.
	 *
	 * @return void
	 */
	static public function admin_enqueue_scripts()
	{

		wp_enqueue_script( 'wsuwp-lodge-admin-child-scripts', get_stylesheet_directory_uri() . '/assets/dist/ascent-aero.adminScripts.bundle.js', array(), filemtime(get_stylesheet_directory() . '/assets/dist/ascent-aero.adminScripts.bundle.js'), true );

	}

	/**
	 * Enqueues scripts and styles.
	 *
	 * @return void
	 */
	static public function enqueue_scripts()
	{

		wp_enqueue_style( 'wsuwp-lodge-child-webpack-styles', get_stylesheet_directory_uri() . '/assets/dist/ascent-aero.childStyles.bundle.css', array('wsuwp-lodge-basic-styles', 'wsuwp-lodge-webpack-styles'), filemtime(get_stylesheet_directory() . '/assets/dist/ascent-aero.childStyles.bundle.css') );

		wp_enqueue_style( 'wsuwp-lodge-child-google-fonts', 'https://fonts.googleapis.com/css?family=Heebo:400,700,900&display=swap');

		wp_enqueue_script( 'wsuwp-lodge-child-scripts', get_stylesheet_directory_uri() . '/assets/dist/ascent-aero.childScripts.bundle.js', array(), filemtime(get_stylesheet_directory() . '/assets/dist/ascent-aero.childScripts.bundle.js'), true );

		wp_enqueue_script( 'jquery' );

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

	/**
	 * Featured Projects Shortcode
	 */
	static public function featured_projects( $atts ) {

		// Attributes
		$atts = shortcode_atts(
			array(
				'project_number' => '',
				'limit'          => 2
			),
			$atts,
			'featured_projects'
		);

		// Default Args
		$args = array(
			'post_type'      => 'wsuwp_uc_project',
			'posts_per_page' => $atts['limit'],
			'category_name'  => 'featured',
			'order'          => 'ASC',
			'orderby'        => 'meta_value_num',
			'meta_query' => array(
				array(
					'key' => '_ascent_uc_project_number'
				)
			)
		);

		// Project Number In Args Modification
		$project_number__in = $atts['project_number'];

		if ( !empty($project_number__in) ) {

			$project_number__in = explode(', ', $project_number__in);

			$args['meta_query'] = array(
				'project_number__in' => array(
					'key'     => '_ascent_uc_project_number',
					'value'   => $project_number__in,
					'compare' => 'IN',
				)
			);

			// If manually setting featured projects, don't set a hard limit on how many projects can be displayed
			$args['posts_per_page'] = -1;

			// If manually setting featured projects, don't require featured category taxonomy
			$args['category_name'] = null;
		}

		// Start Query
		$query = new WP_Query( $args );

		ob_start();
		?>

		<?php if ( $query->have_posts() ) : ?>

			<div class="ascent-featured-project--container">

				<?php while ( $query->have_posts() ) : ?>

					<?php $query->the_post(); ?>

					<div class="ascent-featured-project--item">

						<a href="<?php the_permalink(); ?>" class="ascent-featured-project--link">
							<div class="ascent-featured-project--number"><?php echo get_post_meta(get_the_ID(), '_ascent_uc_project_number', true); ?></div>
							<div class="ascent-featured-project--title"><?php echo get_the_title(); ?></div>
						</a>

					</div>

				<?php endwhile; ?>

			</div>

		<?php else : ?>

			// no projects found

		<?php endif; ?>

		<?php
		/* Restore original Post Data */
		wp_reset_postdata();

		return ob_get_clean();
	}

	/**
	 * Custom Password Page Login Form
	 */
	public static function page_login_form($atts) {
		$atts = shortcode_atts(
			array(
				'id' => ''
			),
			$atts,
			'page_login_form'
		);

		$label = 'pwbox-' . ( empty($atts['id']) ? rand() : $atts['id'] );

		ob_start();
		?>

		<form action="<?php echo esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ); ?>" class="post-password-form" method="post">
			<p>
				<label for="<?php echo $label; ?>">
					Password: <input name="post_password" id="<?php $label; ?>" type="password" size="20" />
				</label>
				<input type="submit" name="Submit" value="<?php echo esc_attr_x( 'Enter', 'post password form' ); ?>" />
				<input type="hidden" name="_wp_http_referer" value="<?php echo esc_attr(get_permalink($atts['id'])); ?>" />
			</p>
		</form>

		<?php
		return ob_get_clean();;
	}

	/**
	 * Custom favicon
	 */
	public static function site_favicon() {
		ob_start();
		?>
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/src/img/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/src/img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/src/img/favicon/favicon-16x16.png">
		<link rel="manifest" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/src/img/favicon/site.webmanifest">
		<?php
		echo ob_get_clean();
	}
}

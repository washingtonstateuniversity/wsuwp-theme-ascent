<?php
/**
 * Helper class for theme functions
 *
 * @class WSU_WP_Lodge_Child_Endpoints
 */
final class WSU_WP_Lodge_Child_Endpoints
{
	/**
	 * Get SVG Logo
	 *
	 * @return bool $checked
	 */
	static public function fetch_search_results()
	{
		$args = array(
			'posts_per_page' => -1,
			's' => esc_attr( $_POST['keyword'] ),
		);

		$query = new WP_Query( $args );

		if( $query->have_posts() ) : ?>

			<div class="search-results">

				<?php while( $query->have_posts() ): $query->the_post(); ?>

					<div class="search-results__item">

						<div class="search-results__title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title();?></a></div class="">

						<?php the_excerpt(); ?>

					</div>

				<?php endwhile; ?>

			</div>

			<?php wp_reset_postdata();

		endif;

		die();

		wp_die();
	}
}


function my_ajax_foobar_handler() {
    // Make your response and echo it.

    // Don't forget to stop execution afterward.
    wp_die();
}

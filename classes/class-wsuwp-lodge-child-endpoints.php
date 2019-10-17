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
			'posts_per_page' => 5,
			's' => esc_attr( $_POST['keyword'] ),
		);

		$query = new WP_Query( $args );

		if( $query->have_posts() ) : ?>

			<div class="ajax-search-results">

				<?php while( $query->have_posts() ): $query->the_post(); ?>

					<div class="ajax-search-results__item">

						<a href="<?php echo esc_url( get_permalink() ); ?>">

							<div class="ajax-search-results__title"><?php the_title();?></div>

							<?php the_excerpt(); ?>

						</a>

					</div>

				<?php endwhile; ?>

			</div>

			<?php if ($query->found_posts > 5) : ?>
				<div class="ajax-search-results__more">
					<a href="<?php echo site_url(); ?>?s=<?php echo esc_attr( $_POST['keyword'] ); ?>">Looking for more? We found <?php echo $query->found_posts - 5; ?> more results.</a>
				</div>
			<?php endif; ?>

			<?php wp_reset_postdata();

		else : ?>
			Sorry about that, we can't seem to find what you're looking for.
		<?php endif;

		die();

		wp_die();
	}
}


function my_ajax_foobar_handler() {
    // Make your response and echo it.

    // Don't forget to stop execution afterward.
    wp_die();
}

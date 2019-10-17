<?php
/**
 * The search page template
 *
 * @package WSU_WP_Lodge
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<h1>Search Results</h1>

		<?php
		if ( have_posts() ) :

			/* Start the Loop */
			while ( have_posts() ) :

				the_post(); ?>

				<article>
					<a href="<?php the_permalink();?>">
						<?php the_title( '<h2 class="entry-title">', '</h2>' ); ?>
						<?php the_excerpt(); ?>
					</a>
				</article>

			<?php endwhile;

		else :

			get_template_part( 'template-parts/content/content', 'none' );

		endif;
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

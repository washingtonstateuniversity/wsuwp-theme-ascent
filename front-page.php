<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

get_header();
?>
	<section class="home-page-header">
		<div class="entry-header-featured-image">
				<div class="home-logo-container">
					<?php WSU_WP_Lodge_Child_Helpers::get_the_logo('full'); ?>
				</div>
			<?php the_post_thumbnail( 'full' ); ?>
		</div>
	</section>

	<section class="home-content-area">
		<main class="home-site-main">

		<?php
		while ( have_posts() ) :

			the_post();

			the_title( '<h1 class="entry-title">', '</h1>' );

			the_content( sprintf(
				wp_kses(

					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'wsuwp-lodge' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			) );

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->

		<?php if ( is_active_sidebar( 'sidebar-primary' ) ) : ?>

				<div class="home-sidebar-primary">

					<?php dynamic_sidebar('sidebar-primary'); ?>

				</div>

		<?php endif; ?>

	</section><!-- #primary -->

	<section class="home-photo-separator">

		<?php if ( is_active_sidebar( 'sidebar-separator' ) ) : ?>

			<?php dynamic_sidebar('sidebar-separator'); ?>

		<?php endif; ?>

	</section>

	<section class="home-feeds">

		<div class="home-recent-news">

			<?php $recent_posts = wp_get_recent_posts(); ?>

				<?php foreach( $recent_posts as $recent ) : ?>

					<a href="<?php echo get_permalink($recent['ID']);?>">
						<h3 class="home-recent-news-title"><?php echo $recent['post_title']; ?></h3>
					</a>
					<?php echo $recent['post_content']; ?>

				<?php endforeach; ?>

			<?php wp_reset_query(); ?>

		</div>

		<?php if ( is_active_sidebar( 'sidebar-secondary' ) ) : ?>

				<div class="home-sidebar-secondary">

					<?php dynamic_sidebar('sidebar-secondary'); ?>

				</div>

		<?php endif; ?>

	</section>

<?php
get_footer();

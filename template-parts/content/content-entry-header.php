<?php
/**
 * The template for displaying entry headers on posts & pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

?>


<header class="entry-header">
	<div class="entry-header-featured-image">
		<?php if ( empty( get_the_post_thumbnail() ) ) : ?>
			<img src="https://s3.wp.wsu.edu/uploads/sites/192/2015/04/Clouds-Color0.jpg" alt="Image of clouds">
		<?php else : ?>
			<?php the_post_thumbnail( 'full' ); ?>
		<?php endif; ?>
	</div>

	<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
</header><!-- .entry-header -->

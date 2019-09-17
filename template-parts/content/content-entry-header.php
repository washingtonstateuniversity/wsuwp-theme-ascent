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
		<?php the_post_thumbnail( 'full' ); ?>
	</div>

	<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
</header><!-- .entry-header -->

<?php
/**
 * Template part to serve as the default for displaying projects by number
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">

		<a href="<?php the_permalink(); ?>" class="project-by-number-link">
			<p class="project-by-number-id"><?php echo ascent_get_project_number(); ?></p>
			<h2 class="project-by-number-headline"><?php the_title(); ?></h2>
		</a>

	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->

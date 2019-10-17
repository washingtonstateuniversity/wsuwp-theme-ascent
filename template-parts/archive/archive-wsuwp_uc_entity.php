<?php
/**
 * Template part to serve as wsuwp_uc_entity archive template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="ascent-entity-archive__entry-content">

		<a href="<?php the_permalink(); ?>" class="ascent-entity-archive__link">
			<?php the_post_thumbnail('medium'); ?>
			<h2 class="ascent-entity-archive__heading"><?php the_title(); ?></h2>
		</a>

	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->

<?php
/**
 * Template part to serve as wsuwp_uc_entity single template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<div class="ascent-entity-single__entity-wrapper">

	<div class="ascent-entity-single__entity-logo">

		<?php the_post_thumbnail('medium'); ?>

	</div>

	<div class="ascent-entity-single__entry-content">

			<h1 class="ascent-entity-single__heading"><?php the_title(); ?></h1>

			<?php
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
			?>

	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->

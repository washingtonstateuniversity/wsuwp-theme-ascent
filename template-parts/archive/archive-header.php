<?php
/**
 * The template for displaying archive page headers
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

?>

<header class="archive-header-page-header">

	<div class="entry-header-featured-image">
		<!-- TODO: figure out how to handle images on archive templates -->
		<img src="https://source.unsplash.com/1600x900/?airplanes,sky,airports,aviation,sustainability,jet,clouds">
	</div>

	<h1 class="archive-header-heading">

		<?php if ( is_post_type_archive() ) : ?>

			<?php post_type_archive_title(); ?>

		<?php else : ?>

			<?php single_tag_title(); ?>

		<?php endif; ?>

	</h1>

</header><!-- .page-header -->

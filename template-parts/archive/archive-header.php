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
		<?php echo get_queried_object()->labels->name; ?>
	</h1>

</header><!-- .page-header -->

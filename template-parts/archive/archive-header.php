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

	<!-- Featured Image Header -->

	<?php
	$tax_object = get_queried_object();

	if ($tax_object->taxonomy == "wsuwp_uc_topics") : ?>

		<?php $pod = pods('wsuwp_uc_topics', $tax_object->term_id); ?>
		<?php $featured_image_display = $pod->display( 'featured_image' ); ?>
		<?php $featured_image_field = $pod->field( 'featured_image' ); ?>
		<div class="entry-header-featured-image">
			<img src="<?php echo $featured_image_display; ?>" alt="<?php echo $featured_image_field['post_title']; ?>">
		</div>

	<?php else : ?>

		<div class="entry-header-featured-image">
			<img src="https://s3.wp.wsu.edu/uploads/sites/192/2019/10/brady-bellini-_hpk_92Crhs-unsplash.jpg" alt="white clouds above silhouette of clouds at day">
		</div>

	<?php endif; ?>

	<!-- Archive Header Heading -->

	<h1 class="archive-header-heading">

		<?php if ( is_post_type_archive() ) : ?>

			<?php post_type_archive_title(); ?>

		<?php else : ?>

			<?php single_tag_title(); ?>

		<?php endif; ?>

	</h1>

</header><!-- .page-header -->

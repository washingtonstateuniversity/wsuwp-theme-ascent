<?php
/**
 * The template for the global header
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WSU_WP_Lodge
 */

 ?>

<header id="masthead" class="site-header">
	<div class="site-header-wrapper">
		<div class="site-header-branding">
			<p class="site-header-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?>"><?php WSU_WP_Lodge_Child_Helpers::get_the_logo('default'); ?></a>
			</p>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button
				class="main-navigation-button hamburger hamburger--spin"
				type="button"
				aria-label="Menu"
				aria-controls="navigation"
				data-collapsed="true"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
				<span class="hamburger-label">Menu</span>
			</button>

			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary-nav',
				'menu_id'        => 'primary-nav',
				'menu_class'     => 'main-navigation-menu',
				'container'      => '',
			) );
			?>


		</nav><!-- #site-navigation -->
	</div>
</header><!-- #masthead -->

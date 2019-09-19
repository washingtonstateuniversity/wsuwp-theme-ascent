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

			<?php
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-header-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-header-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			?>

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
				'container'      => ''
			) );
			?>
		</nav><!-- #site-navigation -->
	</div>
</header><!-- #masthead -->

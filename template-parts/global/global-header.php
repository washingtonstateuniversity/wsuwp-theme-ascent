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
				aria-controls="primary-nav"
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
				'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s<div id="closeMenu" class="main-navigation-menu--close">X</div></ul>'
			) );
			?>

		</nav><!-- #site-navigation -->

		<div class="site-header-search">
			<button
				class="site-header-search__button"
				aria-label="Search"
				aria-controls="site-header-search"
				aria-expanded="false"
			>
				<?php WSU_WP_Lodge_Child_Helpers::get_the_logo('search'); ?>
			</button>

			<div class="site-header-search__wrapper" id="site-header-search">
				<div class="site-header-search__content">

					<h2 class="site-header-search__title">Search</h2>

					<form class="site-header-search__form">
						<input
							type="text"
							name="term"
							class="site-header-search__term"
							id="term"
							placeholder="What are you looking for?"
						>
						<?php WSU_WP_Lodge_Child_Helpers::get_the_logo('search'); ?>
					</form>

					<div class="site-header-search__results" id="datafetch">Search results will appear here</div>
				</div>
			</div>
		</div>
	</div>
</header><!-- #masthead -->

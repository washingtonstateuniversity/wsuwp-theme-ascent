<?php
/**
 * Class for theme setup
 *
 * @class WSU_WP_Lodge_Child_Sidebars
 */
final class WSU_WP_Lodge_Child_Sidebars
{
	/**
	 * Register Sidebars
	 *
	 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
	 */
	static public function add_sidebars_to_widgets_area()
	{
		// Homepage - Primary Sidebar
		register_sidebar( array(
			'name'          => esc_html__('Homepage - Primary Sidebar', 'wsuwp-lodge'),
			'id'            => 'sidebar-primary',
			'description'   => esc_html__('Add widgets here.', 'wsuwp-lodge'),
			'before_widget' => '<aside class="widget-area">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );

		// Homepage - Secondary Sidebar
		register_sidebar( array(
			'name'          => esc_html__('Homepage - Secondary Sidebar', 'wsuwp-lodge'),
			'id'            => 'sidebar-secondary',
			'description'   => esc_html__('Add widgets here.', 'wsuwp-lodge'),
			'before_widget' => '<aside class="widget-area">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );

		// Homepage - Secondary Sidebar
		register_sidebar( array(
			'name'          => esc_html__('Homepage - Secondary Sidebar', 'wsuwp-lodge'),
			'id'            => 'sidebar-secondary',
			'description'   => esc_html__('Add widgets here.', 'wsuwp-lodge'),
			'before_widget' => '<aside class="widget-area">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );

		// Homepage - Separator
		register_sidebar( array(
			'name'          => esc_html__('Homepage - Separator', 'wsuwp-lodge'),
			'id'            => 'sidebar-separator',
			'description'   => esc_html__('Add widgets here.', 'wsuwp-lodge'),
			'before_widget' => '<aside class="widget-separator">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );
	}
}

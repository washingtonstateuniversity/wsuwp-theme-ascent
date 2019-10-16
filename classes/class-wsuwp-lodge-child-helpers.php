<?php
/**
 * Helper class for theme functions
 *
 * @class WSU_WP_Lodge_Child_Helpers
 */
final class WSU_WP_Lodge_Child_Helpers
{
	/**
	 * Get SVG Logo
	 *
	 * @return bool $checked
	 */
	static public function get_the_logo($variant)
	{
		switch ($variant) {
			case 'default':
				include get_stylesheet_directory() . '/assets/src/img/ascent-logo-horz.svg';
				break;
			case 'full':
				include get_stylesheet_directory() . '/assets/src/img/ascent-logo-full-white.svg';
				break;
			case 'search':
				include get_stylesheet_directory() . '/assets/src/img/ascent-search-icon.svg';
				break;
			case 'close':
				include get_stylesheet_directory() . '/assets/src/img/ascent-close-icon.svg';
				break;
		}
	}
}

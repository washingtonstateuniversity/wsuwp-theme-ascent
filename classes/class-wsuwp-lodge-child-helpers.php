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
	static public function get_the_logo()
	{
		include get_stylesheet_directory() . '/assets/src/img/ascent-logo-horz.svg';
	}
}


import { collapseSection } from './helper-functions';
import { expandSection } from './helper-functions';
import { isScreenSizeMedium } from './helper-functions';
import { showCollapsedMenuItems } from './helper-functions';
import { hideCollapsedMenuItems } from './helper-functions';

/**
Set Parent Menu Controls
*/

// Add aria-expanded attr to all menu items that have children
document.querySelectorAll('.menu-item-has-children > a').forEach(element => {
	element.setAttribute('aria-expanded', 'false');
});

/**
 * Expand/Collapse Sibling Elements
 *
 * Manually add aria-expanded="true" to any element and its next sibling will collapse
 * or programmatically add attribute.
 */
var parentMenuItem = document.querySelectorAll('[aria-expanded]');

parentMenuItem.forEach(element => {
	element.addEventListener('click', function (e) {
		e.preventDefault();

		var subMenu = element.nextElementSibling;
		var isCollapsed = element.getAttribute('aria-expanded') === 'false';

		if (isCollapsed) {
			expandSection(subMenu);
			element.setAttribute('aria-expanded', 'true');
		} else {
			collapseSection(subMenu);
			element.setAttribute('aria-expanded', 'false');
		}
	})
});

/**
 * Toggle Class on Site-header
 *
 * Only rely on using classes if the targeting has to be done outside of the targeted
 * items DOM structure.
 */
var menuButton = document.querySelectorAll('.main-navigation-button');

menuButton[0].addEventListener('click', function (e) {
	var menuButtonIsCollapsed = menuButton[0].getAttribute('aria-expanded') === "false";

	if (!menuButtonIsCollapsed) {
		// Add is-active class to masthead
		document.getElementById('masthead').classList.add('is-active');
		// Add is-active class to main-navigation-button for close animation
		document.getElementsByClassName('main-navigation-button')[0].classList.add('is-active');
	} else {
		// Remove is-active class on toggle
		document.getElementById('masthead').classList.remove('is-active');
		document.getElementsByClassName('main-navigation-button')[0].classList.remove('is-active');
	}
});

/**
 * Show Collapsed Data on Desktop
 *
 */
// On browser width change
window.addEventListener('resize', function () {

	window.setTimeout(function () {

		if (isScreenSizeMedium()) {
			showCollapsedMenuItems();
		} else {
			hideCollapsedMenuItems();
		}

	}, 500);
});

// On browser init
if (isScreenSizeMedium()) {
	showCollapsedMenuItems();
}

/**
 * Close Main Navigation
 */
document.querySelector('#closeMenu').addEventListener('click', function (e) {
	e.preventDefault();

	// Reset Main Navigation Button
	var mainNavButton = document.querySelector('.main-navigation-button');
	mainNavButton.setAttribute('aria-expanded', 'false');
	mainNavButton.classList.remove('is-active');

	// Reset Masthead
	var mastHead = document.querySelector('#masthead');
	mastHead.classList.remove('is-active');

	// Collapse Navigation
	var primaryNav = document.querySelector('.main-navigation-menu');

	collapseSection(primaryNav);
});

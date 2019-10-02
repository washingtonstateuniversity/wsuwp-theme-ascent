
import { collapseSection } from './helper-functions';
import { expandSection } from './helper-functions';
import { isScreenSizeLarge } from './helper-functions';
import { showCollapsedMenuItems } from './helper-functions';
import { hideCollapsedMenuItems } from './helper-functions';

/**
Set Parent Menu Controls
*/

// Add data-collapsed attr to all menu items that have children
document.querySelectorAll('.menu-item-has-children > a').forEach(element => {
	element.setAttribute('data-collapsed', 'true');
});

/**
 * Expand/Collapse Sibling Elements
 *
 * Manually add data-collapsed="true" to any element and its next sibling will collapse
 * or programmatically add attribute.
 */
var parentMenuItem = document.querySelectorAll('[data-collapsed]');

parentMenuItem.forEach(element => {
	element.addEventListener('click', function (e) {
		e.preventDefault();

		var subMenu = element.nextElementSibling;
		var isCollapsed = element.getAttribute('data-collapsed') === 'true';

		if (isCollapsed) {
			expandSection(subMenu);
			element.setAttribute('data-collapsed', 'false');
		} else {
			collapseSection(subMenu)
			element.setAttribute('data-collapsed', 'true');
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
	var menuButtonIsCollapsed = menuButton[0].getAttribute('data-collapsed') === "true";

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
		console.log("fired");

		if (isScreenSizeLarge()) {
			showCollapsedMenuItems();
		} else {
			hideCollapsedMenuItems();
		}

	}, 500);
});

// Init
if (isScreenSizeLarge()) {
	showCollapsedMenuItems();
}

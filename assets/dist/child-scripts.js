/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_featured_separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/featured-separator */ "./assets/src/js/featured-separator.js");
/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navigation */ "./assets/src/js/navigation.js");
/* harmony import */ var _js_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/search */ "./assets/src/js/search.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ "./assets/src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
// JS




// SCSS



/***/ }),

/***/ "./assets/src/js/featured-separator.js":
/*!*********************************************!*\
  !*** ./assets/src/js/featured-separator.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./assets/src/js/helper-functions.js");


window.addEventListener('scroll', function () {

	window.setTimeout(function () {
		var bars = document.querySelectorAll(".white-bars > div");
		var windowVertOffset = window.scrollY;

		bars.forEach(function (element, index) {
			var thisBarPosition = Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["getPosition"])(element);
			var thisBarPositionY = thisBarPosition["y"];
			var thisBarWindowDiff = thisBarPositionY - windowVertOffset;
			var mlValue = 115;

			if (thisBarWindowDiff <= 200) {
				var marginLeftValue = mlValue * -1
				element.style.marginLeft = marginLeftValue + "px";
			} else {
				var marginLeftValue = (index * 15) * -1;
				element.style.marginLeft = marginLeftValue + "px";
			}
		});
	}, 70);
});


/***/ }),

/***/ "./assets/src/js/helper-functions.js":
/*!*******************************************!*\
  !*** ./assets/src/js/helper-functions.js ***!
  \*******************************************/
/*! exports provided: collapseSection, expandSection, getPosition, isScreenSizeMedium, showCollapsedMenuItems, hideCollapsedMenuItems, fetchResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseSection", function() { return collapseSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSection", function() { return expandSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScreenSizeMedium", function() { return isScreenSizeMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCollapsedMenuItems", function() { return showCollapsedMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCollapsedMenuItems", function() { return hideCollapsedMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResponse", function() { return fetchResponse; });

/*=============================================
=            Helper Functions :)             =
=============================================*/

/**
 *
 * Collapse & Expand Section is based on documentation outlined here:
 * https://css-tricks.com/using-css-transitions-auto-dimensions/
 *
 */

/*----------  Collapse Section  ----------*/
function collapseSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;

	// on the next frame (as soon as the previous style change has taken effect),
	// explicitly set the element's height to its current pixel height, so we
	// aren't transitioning out of 'auto'
	window.requestAnimationFrame(function () {
		element.style.height = sectionHeight + 'px';

		// on the next frame (as soon as the previous style change has taken effect),
		// have the element transition to height: 0
		window.requestAnimationFrame(function () {
			element.style.height = 0 + 'px';
		});
	});

	element.setAttribute('aria-expanded', 'false');
}

/*----------  Expand Section  ----------*/
function expandSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;

	// have the element transition to the height of its inner content
	element.style.height = sectionHeight + 'px';

	// when the next css transition finishes (which should be the one we just triggered)
	element.addEventListener('transitionend', function (e) {
		// remove this event listener so it only gets triggered once
		element.removeEventListener('transitionend', e.callee);

		// remove "height" from the element's inline styles, so it can return to its initial value
		element.style.height = null;

	});

	element.setAttribute('aria-expanded', 'true');
}


/*----------  Get Position of Element  ----------*/
function getPosition(element) {
	var xPosition = 0;
	var yPosition = 0;

	while (element) {
		xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}

	return { x: xPosition, y: yPosition };
}

/*----------  Check if screen size is medium  ----------*/
function isScreenSizeMedium() {
	// Set Pixel Width for Breakpoint
	var thisIsMedium = 1024;
	var windowWidth = window.innerWidth;

	if (windowWidth >= thisIsMedium) {
		return true;
	} else {
		return false;
	}
}

/*----------  Show Collapsed Menu Items  ----------*/
function showCollapsedMenuItems() {
	var menuItemAnchors = document.querySelectorAll('.menu-item > [aria-expanded="false"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('aria-expanded', 'true');
	});
}

/*----------  Hide Collapsed Menu Items  ----------*/
function hideCollapsedMenuItems() {
	var menuItemAnchors = document.querySelectorAll('.menu-item > [aria-expanded="true"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('aria-expanded', 'false');
	});
}


/*----------  Fetch AJAX Response  ----------*/
function fetchResponse(inputValue) {

	jQuery('#datafetch').html('<div class="u-loading"></div>');

	jQuery.ajax({
		url: 'http://ascent-aero.wordpress.test/wp-admin/admin-ajax.php',
		type: 'post',
		data: { action: 'fetch_search_results', keyword: inputValue },
		success: function (data) {
			jQuery('#datafetch').html(data);
		}
	});
}


/*=====  End of Helper Functions :)   ======*/


/***/ }),

/***/ "./assets/src/js/navigation.js":
/*!*************************************!*\
  !*** ./assets/src/js/navigation.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./assets/src/js/helper-functions.js");







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
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["expandSection"])(subMenu);
			element.setAttribute('aria-expanded', 'true');
		} else {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["collapseSection"])(subMenu);
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

		if (Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["isScreenSizeMedium"])()) {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["showCollapsedMenuItems"])();
		} else {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["hideCollapsedMenuItems"])();
		}

	}, 500);
});

// On browser init
if (Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["isScreenSizeMedium"])()) {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["showCollapsedMenuItems"])();
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

	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["collapseSection"])(primaryNav);
});


/***/ }),

/***/ "./assets/src/js/search.js":
/*!*********************************!*\
  !*** ./assets/src/js/search.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./assets/src/js/helper-functions.js");


/*----------  Toggle Search Modal  ----------*/
var searchButton = document.querySelector('.site-header-search__button');

searchButton.addEventListener('click', function (e) {
	e.preventDefault();

	var _this = this;
	var isNotExpanded = _this.getAttribute('aria-expanded') === 'false';

	if (isNotExpanded) {
		_this.setAttribute('aria-expanded', 'false');
		document.querySelector('body').classList.remove('noScroll');
	} else {
		_this.setAttribute('aria-expanded', 'true');
		document.querySelector('.site-header-search__term').focus();
		document.querySelector('body').classList.add('noScroll');
	}
});


/*----------  Close Search Modal  ----------*/
var closeSearchModal = document.querySelector('.site-header-search__close');

closeSearchModal.addEventListener('click', function (e) {
	document.querySelector('.site-header-search__button').setAttribute('aria-expanded', 'false');
});


/*----------  AJAX Search  ----------*/
var searchTerm = document.querySelector('.site-header-search__term');
var searchTimer;
var searchCompletedTimeout = 500;

// If value exsists in search field, show results
if (searchTerm.value != '') {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["fetchResponse"])(searchTerm.value);
}

// If user has typed in field, show results
searchTerm.addEventListener('keyup', function () {
	clearTimeout(searchTimer);
	searchTimer = setTimeout(processSearch, searchCompletedTimeout);
});

searchTerm.addEventListener('keydown', function () {
	clearTimeout(searchTimer);
});

function processSearch() {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["fetchResponse"])(searchTerm.value);
}


/***/ }),

/***/ "./assets/src/scss/main.scss":
/*!***********************************!*\
  !*** ./assets/src/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNpQztBQUNSO0FBQ0o7O0FBRXJCO0FBQzBCOzs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQUE7QUFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7OztBQUdBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ087O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIcUQ7QUFDRjtBQUNLO0FBQ0k7QUFDQTs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLHVFQUFhO0FBQ2hCO0FBQ0EsR0FBRztBQUNILEdBQUcseUVBQWU7QUFDbEI7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU0sNEVBQWtCO0FBQ3hCLEdBQUcsZ0ZBQXNCO0FBQ3pCLEdBQUc7QUFDSCxHQUFHLGdGQUFzQjtBQUN6Qjs7QUFFQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBLElBQUksNEVBQWtCO0FBQ3RCLENBQUMsZ0ZBQXNCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyx5RUFBZTtBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUdEO0FBQUE7QUFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLHVFQUFhO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyx1RUFBYTtBQUNkOzs7Ozs7Ozs7Ozs7QUNwREEsdUMiLCJmaWxlIjoiY2hpbGQtc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEpTXG5pbXBvcnQgJy4vanMvZmVhdHVyZWQtc2VwYXJhdG9yJztcbmltcG9ydCAnLi9qcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9qcy9zZWFyY2gnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuIiwiaW1wb3J0IHsgZ2V0UG9zaXRpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2hpdGUtYmFycyA+IGRpdlwiKTtcblx0XHR2YXIgd2luZG93VmVydE9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xuXG5cdFx0YmFycy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuXHRcdFx0dmFyIHRoaXNCYXJQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGVsZW1lbnQpO1xuXHRcdFx0dmFyIHRoaXNCYXJQb3NpdGlvblkgPSB0aGlzQmFyUG9zaXRpb25bXCJ5XCJdO1xuXHRcdFx0dmFyIHRoaXNCYXJXaW5kb3dEaWZmID0gdGhpc0JhclBvc2l0aW9uWSAtIHdpbmRvd1ZlcnRPZmZzZXQ7XG5cdFx0XHR2YXIgbWxWYWx1ZSA9IDExNTtcblxuXHRcdFx0aWYgKHRoaXNCYXJXaW5kb3dEaWZmIDw9IDIwMCkge1xuXHRcdFx0XHR2YXIgbWFyZ2luTGVmdFZhbHVlID0gbWxWYWx1ZSAqIC0xXG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRWYWx1ZSArIFwicHhcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBtYXJnaW5MZWZ0VmFsdWUgPSAoaW5kZXggKiAxNSkgKiAtMTtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFZhbHVlICsgXCJweFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LCA3MCk7XG59KTtcbiIsIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgICAgICAgICBIZWxwZXIgRnVuY3Rpb25zIDopICAgICAgICAgICAgID1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qKlxuICpcbiAqIENvbGxhcHNlICYgRXhwYW5kIFNlY3Rpb24gaXMgYmFzZWQgb24gZG9jdW1lbnRhdGlvbiBvdXRsaW5lZCBoZXJlOlxuICogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS91c2luZy1jc3MtdHJhbnNpdGlvbnMtYXV0by1kaW1lbnNpb25zL1xuICpcbiAqL1xuXG4vKi0tLS0tLS0tLS0gIENvbGxhcHNlIFNlY3Rpb24gIC0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlU2VjdGlvbihlbGVtZW50KSB7XG5cdC8vIGdldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50J3MgaW5uZXIgY29udGVudCwgcmVnYXJkbGVzcyBvZiBpdHMgYWN0dWFsIHNpemVcblx0dmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHQvLyBvbiB0aGUgbmV4dCBmcmFtZSAoYXMgc29vbiBhcyB0aGUgcHJldmlvdXMgc3R5bGUgY2hhbmdlIGhhcyB0YWtlbiBlZmZlY3QpLFxuXHQvLyBleHBsaWNpdGx5IHNldCB0aGUgZWxlbWVudCdzIGhlaWdodCB0byBpdHMgY3VycmVudCBwaXhlbCBoZWlnaHQsIHNvIHdlXG5cdC8vIGFyZW4ndCB0cmFuc2l0aW9uaW5nIG91dCBvZiAnYXV0bydcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgJ3B4JztcblxuXHRcdC8vIG9uIHRoZSBuZXh0IGZyYW1lIChhcyBzb29uIGFzIHRoZSBwcmV2aW91cyBzdHlsZSBjaGFuZ2UgaGFzIHRha2VuIGVmZmVjdCksXG5cdFx0Ly8gaGF2ZSB0aGUgZWxlbWVudCB0cmFuc2l0aW9uIHRvIGhlaWdodDogMFxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4Jztcblx0XHR9KTtcblx0fSk7XG5cblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbn1cblxuLyotLS0tLS0tLS0tICBFeHBhbmQgU2VjdGlvbiAgLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kU2VjdGlvbihlbGVtZW50KSB7XG5cdC8vIGdldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50J3MgaW5uZXIgY29udGVudCwgcmVnYXJkbGVzcyBvZiBpdHMgYWN0dWFsIHNpemVcblx0dmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHQvLyBoYXZlIHRoZSBlbGVtZW50IHRyYW5zaXRpb24gdG8gdGhlIGhlaWdodCBvZiBpdHMgaW5uZXIgY29udGVudFxuXHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xuXG5cdC8vIHdoZW4gdGhlIG5leHQgY3NzIHRyYW5zaXRpb24gZmluaXNoZXMgKHdoaWNoIHNob3VsZCBiZSB0aGUgb25lIHdlIGp1c3QgdHJpZ2dlcmVkKVxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHNvIGl0IG9ubHkgZ2V0cyB0cmlnZ2VyZWQgb25jZVxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGUuY2FsbGVlKTtcblxuXHRcdC8vIHJlbW92ZSBcImhlaWdodFwiIGZyb20gdGhlIGVsZW1lbnQncyBpbmxpbmUgc3R5bGVzLCBzbyBpdCBjYW4gcmV0dXJuIHRvIGl0cyBpbml0aWFsIHZhbHVlXG5cdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuXG5cdH0pO1xuXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0gIEdldCBQb3NpdGlvbiBvZiBFbGVtZW50ICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG5cdHZhciB4UG9zaXRpb24gPSAwO1xuXHR2YXIgeVBvc2l0aW9uID0gMDtcblxuXHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdHhQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG5cdFx0eVBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcDtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cdH1cblxuXHRyZXR1cm4geyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiB9O1xufVxuXG4vKi0tLS0tLS0tLS0gIENoZWNrIGlmIHNjcmVlbiBzaXplIGlzIG1lZGl1bSAgLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaXNTY3JlZW5TaXplTWVkaXVtKCkge1xuXHQvLyBTZXQgUGl4ZWwgV2lkdGggZm9yIEJyZWFrcG9pbnRcblx0dmFyIHRoaXNJc01lZGl1bSA9IDEwMjQ7XG5cdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdGlmICh3aW5kb3dXaWR0aCA+PSB0aGlzSXNNZWRpdW0pIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tICBTaG93IENvbGxhcHNlZCBNZW51IEl0ZW1zICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCkge1xuXHR2YXIgbWVudUl0ZW1BbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbSA+IFthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl0nKTtcblxuXHRtZW51SXRlbUFuY2hvcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdH0pO1xufVxuXG4vKi0tLS0tLS0tLS0gIEhpZGUgQ29sbGFwc2VkIE1lbnUgSXRlbXMgIC0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb2xsYXBzZWRNZW51SXRlbXMoKSB7XG5cdHZhciBtZW51SXRlbUFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtID4gW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJyk7XG5cblx0bWVudUl0ZW1BbmNob3JzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0fSk7XG59XG5cblxuLyotLS0tLS0tLS0tICBGZXRjaCBBSkFYIFJlc3BvbnNlICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJlc3BvbnNlKGlucHV0VmFsdWUpIHtcblxuXHRqUXVlcnkoJyNkYXRhZmV0Y2gnKS5odG1sKCc8ZGl2IGNsYXNzPVwidS1sb2FkaW5nXCI+PC9kaXY+Jyk7XG5cblx0alF1ZXJ5LmFqYXgoe1xuXHRcdHVybDogJ2h0dHA6Ly9hc2NlbnQtYWVyby53b3JkcHJlc3MudGVzdC93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXG5cdFx0dHlwZTogJ3Bvc3QnLFxuXHRcdGRhdGE6IHsgYWN0aW9uOiAnZmV0Y2hfc2VhcmNoX3Jlc3VsdHMnLCBrZXl3b3JkOiBpbnB1dFZhbHVlIH0sXG5cdFx0c3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdGpRdWVyeSgnI2RhdGFmZXRjaCcpLmh0bWwoZGF0YSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKj09PT09ICBFbmQgb2YgSGVscGVyIEZ1bmN0aW9ucyA6KSAgID09PT09PSovXG4iLCJcbmltcG9ydCB7IGNvbGxhcHNlU2VjdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHBhbmRTZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU2NyZWVuU2l6ZU1lZGl1bSB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBzaG93Q29sbGFwc2VkTWVudUl0ZW1zIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGhpZGVDb2xsYXBzZWRNZW51SXRlbXMgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG4vKipcblNldCBQYXJlbnQgTWVudSBDb250cm9sc1xuKi9cblxuLy8gQWRkIGFyaWEtZXhwYW5kZWQgYXR0ciB0byBhbGwgbWVudSBpdGVtcyB0aGF0IGhhdmUgY2hpbGRyZW5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG59KTtcblxuLyoqXG4gKiBFeHBhbmQvQ29sbGFwc2UgU2libGluZyBFbGVtZW50c1xuICpcbiAqIE1hbnVhbGx5IGFkZCBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIHRvIGFueSBlbGVtZW50IGFuZCBpdHMgbmV4dCBzaWJsaW5nIHdpbGwgY29sbGFwc2VcbiAqIG9yIHByb2dyYW1tYXRpY2FsbHkgYWRkIGF0dHJpYnV0ZS5cbiAqL1xudmFyIHBhcmVudE1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtZXhwYW5kZWRdJyk7XG5cbnBhcmVudE1lbnVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBzdWJNZW51ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0dmFyIGlzQ29sbGFwc2VkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJztcblxuXHRcdGlmIChpc0NvbGxhcHNlZCkge1xuXHRcdFx0ZXhwYW5kU2VjdGlvbihzdWJNZW51KTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGFwc2VTZWN0aW9uKHN1Yk1lbnUpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHR9XG5cdH0pXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgQ2xhc3Mgb24gU2l0ZS1oZWFkZXJcbiAqXG4gKiBPbmx5IHJlbHkgb24gdXNpbmcgY2xhc3NlcyBpZiB0aGUgdGFyZ2V0aW5nIGhhcyB0byBiZSBkb25lIG91dHNpZGUgb2YgdGhlIHRhcmdldGVkXG4gKiBpdGVtcyBET00gc3RydWN0dXJlLlxuICovXG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cbm1lbnVCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHR2YXIgbWVudUJ1dHRvbklzQ29sbGFwc2VkID0gbWVudUJ1dHRvblswXS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gXCJmYWxzZVwiO1xuXG5cdGlmICghbWVudUJ1dHRvbklzQ29sbGFwc2VkKSB7XG5cdFx0Ly8gQWRkIGlzLWFjdGl2ZSBjbGFzcyB0byBtYXN0aGVhZFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0aGVhZCcpLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHRcdC8vIEFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbiBmb3IgY2xvc2UgYW5pbWF0aW9uXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFJlbW92ZSBpcy1hY3RpdmUgY2xhc3Mgb24gdG9nZ2xlXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc3RoZWFkJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBTaG93IENvbGxhcHNlZCBEYXRhIG9uIERlc2t0b3BcbiAqXG4gKi9cbi8vIE9uIGJyb3dzZXIgd2lkdGggY2hhbmdlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmIChpc1NjcmVlblNpemVNZWRpdW0oKSkge1xuXHRcdFx0c2hvd0NvbGxhcHNlZE1lbnVJdGVtcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWRlQ29sbGFwc2VkTWVudUl0ZW1zKCk7XG5cdFx0fVxuXG5cdH0sIDUwMCk7XG59KTtcblxuLy8gT24gYnJvd3NlciBpbml0XG5pZiAoaXNTY3JlZW5TaXplTWVkaXVtKCkpIHtcblx0c2hvd0NvbGxhcHNlZE1lbnVJdGVtcygpO1xufVxuXG4vKipcbiAqIENsb3NlIE1haW4gTmF2aWdhdGlvblxuICovXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VNZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0Ly8gUmVzZXQgTWFpbiBOYXZpZ2F0aW9uIEJ1dHRvblxuXHR2YXIgbWFpbk5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cdG1haW5OYXZCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdG1haW5OYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cblx0Ly8gUmVzZXQgTWFzdGhlYWRcblx0dmFyIG1hc3RIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc3RoZWFkJyk7XG5cdG1hc3RIZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG5cdC8vIENvbGxhcHNlIE5hdmlnYXRpb25cblx0dmFyIHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZpZ2F0aW9uLW1lbnUnKTtcblxuXHRjb2xsYXBzZVNlY3Rpb24ocHJpbWFyeU5hdik7XG59KTtcbiIsImltcG9ydCB7IGZldGNoUmVzcG9uc2UgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG4vKi0tLS0tLS0tLS0gIFRvZ2dsZSBTZWFyY2ggTW9kYWwgIC0tLS0tLS0tLS0qL1xudmFyIHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlci1zZWFyY2hfX2J1dHRvbicpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0dmFyIF90aGlzID0gdGhpcztcblx0dmFyIGlzTm90RXhwYW5kZWQgPSBfdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJztcblxuXHRpZiAoaXNOb3RFeHBhbmRlZCkge1xuXHRcdF90aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdub1Njcm9sbCcpO1xuXHR9IGVsc2Uge1xuXHRcdF90aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLXNlYXJjaF9fdGVybScpLmZvY3VzKCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vU2Nyb2xsJyk7XG5cdH1cbn0pO1xuXG5cbi8qLS0tLS0tLS0tLSAgQ2xvc2UgU2VhcmNoIE1vZGFsICAtLS0tLS0tLS0tKi9cbnZhciBjbG9zZVNlYXJjaE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLXNlYXJjaF9fY2xvc2UnKTtcblxuY2xvc2VTZWFyY2hNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlci1zZWFyY2hfX2J1dHRvbicpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xufSk7XG5cblxuLyotLS0tLS0tLS0tICBBSkFYIFNlYXJjaCAgLS0tLS0tLS0tLSovXG52YXIgc2VhcmNoVGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlci1zZWFyY2hfX3Rlcm0nKTtcbnZhciBzZWFyY2hUaW1lcjtcbnZhciBzZWFyY2hDb21wbGV0ZWRUaW1lb3V0ID0gNTAwO1xuXG4vLyBJZiB2YWx1ZSBleHNpc3RzIGluIHNlYXJjaCBmaWVsZCwgc2hvdyByZXN1bHRzXG5pZiAoc2VhcmNoVGVybS52YWx1ZSAhPSAnJykge1xuXHRmZXRjaFJlc3BvbnNlKHNlYXJjaFRlcm0udmFsdWUpO1xufVxuXG4vLyBJZiB1c2VyIGhhcyB0eXBlZCBpbiBmaWVsZCwgc2hvdyByZXN1bHRzXG5zZWFyY2hUZXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuXHRjbGVhclRpbWVvdXQoc2VhcmNoVGltZXIpO1xuXHRzZWFyY2hUaW1lciA9IHNldFRpbWVvdXQocHJvY2Vzc1NlYXJjaCwgc2VhcmNoQ29tcGxldGVkVGltZW91dCk7XG59KTtcblxuc2VhcmNoVGVybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKCkge1xuXHRjbGVhclRpbWVvdXQoc2VhcmNoVGltZXIpO1xufSk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NTZWFyY2goKSB7XG5cdGZldGNoUmVzcG9uc2Uoc2VhcmNoVGVybS52YWx1ZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
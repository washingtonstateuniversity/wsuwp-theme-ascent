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

	element.setAttribute('data-collapsed', 'true');
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

	// mark the section as "currently not collapsed"
	element.setAttribute('data-collapsed', 'false');
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
	var menuItemAnchors = document.querySelectorAll('.menu-item > [data-collapsed="true"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('data-collapsed', 'false');
	});
}

/*----------  Hide Collapsed Menu Items  ----------*/
function hideCollapsedMenuItems() {
	var menuItemAnchors = document.querySelectorAll('.menu-item > [data-collapsed="false"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('data-collapsed', 'true');
	});
}


/*----------  Fetch AJAX Response  ----------*/
function fetchResponse(inputValue) {

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
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["expandSection"])(subMenu);
			element.setAttribute('data-collapsed', 'false');
		} else {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["collapseSection"])(subMenu);
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

	// debugger

	// Reset Main Navigation Button
	var mainNavButton = document.querySelector('.main-navigation-button');
	mainNavButton.setAttribute('data-collapsed', 'true');
	mainNavButton.classList.remove('is-active');

	// Reset Masthead
	var mastHead = document.querySelector('#masthead');
	mastHead.classList.remove('is-active');

	// Collapse Navigation
	var primaryNav = document.querySelector('.main-navigation-menu');

	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["collapseSection"])(primaryNav);
});


/**
 * Set Class if three levels deep
 */
// var subMenu = document.querySelectorAll('.menu-item-has-children > .sub-menu');

// if

// console.log(wearedeep);


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
	var isExpanded = _this.getAttribute('aria-expanded') === 'true';

	if (isExpanded) {
		_this.setAttribute('aria-expanded', 'false');
	} else {
		_this.setAttribute('aria-expanded', 'true');
	}
});

/*----------  AJAX Search  ----------*/
var searchTerm = document.querySelector('.site-header-search__term');

// If value exsists in search field, show results
if (searchTerm.value != '') {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["fetchResponse"])(searchTerm.value);
}

// If user has typed in field, show results
searchTerm.addEventListener('keyup', function (e) {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["fetchResponse"])(searchTerm.value);
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNpQztBQUNSO0FBQ0o7O0FBRXJCO0FBQzBCOzs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQUE7QUFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFzRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhxRDtBQUNGO0FBQ0s7QUFDSTtBQUNBOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsdUVBQWE7QUFDaEI7QUFDQSxHQUFHO0FBQ0gsR0FBRyx5RUFBZTtBQUNsQjtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSw0RUFBa0I7QUFDeEIsR0FBRyxnRkFBc0I7QUFDekIsR0FBRztBQUNILEdBQUcsZ0ZBQXNCO0FBQ3pCOztBQUVBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0EsSUFBSSw0RUFBa0I7QUFDdEIsQ0FBQyxnRkFBc0I7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDLHlFQUFlO0FBQ2hCLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQUE7QUFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyx1RUFBYTtBQUNkOztBQUVBO0FBQ0E7QUFDQSxDQUFDLHVFQUFhO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0JELHVDIiwiZmlsZSI6ImNoaWxkLXNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBKU1xuaW1wb3J0ICcuL2pzL2ZlYXR1cmVkLXNlcGFyYXRvcic7XG5pbXBvcnQgJy4vanMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vanMvc2VhcmNoJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbiIsImltcG9ydCB7IGdldFBvc2l0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblxuXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndoaXRlLWJhcnMgPiBkaXZcIik7XG5cdFx0dmFyIHdpbmRvd1ZlcnRPZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuXHRcdGJhcnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb24gPSBnZXRQb3NpdGlvbihlbGVtZW50KTtcblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb25ZID0gdGhpc0JhclBvc2l0aW9uW1wieVwiXTtcblx0XHRcdHZhciB0aGlzQmFyV2luZG93RGlmZiA9IHRoaXNCYXJQb3NpdGlvblkgLSB3aW5kb3dWZXJ0T2Zmc2V0O1xuXHRcdFx0dmFyIG1sVmFsdWUgPSAxMTU7XG5cblx0XHRcdGlmICh0aGlzQmFyV2luZG93RGlmZiA8PSAyMDApIHtcblx0XHRcdFx0dmFyIG1hcmdpbkxlZnRWYWx1ZSA9IG1sVmFsdWUgKiAtMVxuXHRcdFx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0VmFsdWUgKyBcInB4XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbWFyZ2luTGVmdFZhbHVlID0gKGluZGV4ICogMTUpICogLTE7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRWYWx1ZSArIFwicHhcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgNzApO1xufSk7XG4iLCJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49ICAgICAgICAgICAgSGVscGVyIEZ1bmN0aW9ucyA6KSAgICAgICAgICAgICA9XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKipcbiAqXG4gKiBDb2xsYXBzZSAmIEV4cGFuZCBTZWN0aW9uIGlzIGJhc2VkIG9uIGRvY3VtZW50YXRpb24gb3V0bGluZWQgaGVyZTpcbiAqIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdXNpbmctY3NzLXRyYW5zaXRpb25zLWF1dG8tZGltZW5zaW9ucy9cbiAqXG4gKi9cblxuLyotLS0tLS0tLS0tICBDb2xsYXBzZSBTZWN0aW9uICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVNlY3Rpb24oZWxlbWVudCkge1xuXHQvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCdzIGlubmVyIGNvbnRlbnQsIHJlZ2FyZGxlc3Mgb2YgaXRzIGFjdHVhbCBzaXplXG5cdHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cblx0Ly8gb24gdGhlIG5leHQgZnJhbWUgKGFzIHNvb24gYXMgdGhlIHByZXZpb3VzIHN0eWxlIGNoYW5nZSBoYXMgdGFrZW4gZWZmZWN0KSxcblx0Ly8gZXhwbGljaXRseSBzZXQgdGhlIGVsZW1lbnQncyBoZWlnaHQgdG8gaXRzIGN1cnJlbnQgcGl4ZWwgaGVpZ2h0LCBzbyB3ZVxuXHQvLyBhcmVuJ3QgdHJhbnNpdGlvbmluZyBvdXQgb2YgJ2F1dG8nXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2VjdGlvbkhlaWdodCArICdweCc7XG5cblx0XHQvLyBvbiB0aGUgbmV4dCBmcmFtZSAoYXMgc29vbiBhcyB0aGUgcHJldmlvdXMgc3R5bGUgY2hhbmdlIGhhcyB0YWtlbiBlZmZlY3QpLFxuXHRcdC8vIGhhdmUgdGhlIGVsZW1lbnQgdHJhbnNpdGlvbiB0byBoZWlnaHQ6IDBcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG59XG5cbi8qLS0tLS0tLS0tLSAgRXhwYW5kIFNlY3Rpb24gIC0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFNlY3Rpb24oZWxlbWVudCkge1xuXHQvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCdzIGlubmVyIGNvbnRlbnQsIHJlZ2FyZGxlc3Mgb2YgaXRzIGFjdHVhbCBzaXplXG5cdHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cblx0Ly8gaGF2ZSB0aGUgZWxlbWVudCB0cmFuc2l0aW9uIHRvIHRoZSBoZWlnaHQgb2YgaXRzIGlubmVyIGNvbnRlbnRcblx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgJ3B4JztcblxuXHQvLyB3aGVuIHRoZSBuZXh0IGNzcyB0cmFuc2l0aW9uIGZpbmlzaGVzICh3aGljaCBzaG91bGQgYmUgdGhlIG9uZSB3ZSBqdXN0IHRyaWdnZXJlZClcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lciBzbyBpdCBvbmx5IGdldHMgdHJpZ2dlcmVkIG9uY2Vcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlLmNhbGxlZSk7XG5cblx0XHQvLyByZW1vdmUgXCJoZWlnaHRcIiBmcm9tIHRoZSBlbGVtZW50J3MgaW5saW5lIHN0eWxlcywgc28gaXQgY2FuIHJldHVybiB0byBpdHMgaW5pdGlhbCB2YWx1ZVxuXHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcblxuXHR9KTtcblxuXHQvLyBtYXJrIHRoZSBzZWN0aW9uIGFzIFwiY3VycmVudGx5IG5vdCBjb2xsYXBzZWRcIlxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAnZmFsc2UnKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0gIEdldCBQb3NpdGlvbiBvZiBFbGVtZW50ICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG5cdHZhciB4UG9zaXRpb24gPSAwO1xuXHR2YXIgeVBvc2l0aW9uID0gMDtcblxuXHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdHhQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG5cdFx0eVBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcDtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cdH1cblxuXHRyZXR1cm4geyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiB9O1xufVxuXG4vKi0tLS0tLS0tLS0gIENoZWNrIGlmIHNjcmVlbiBzaXplIGlzIG1lZGl1bSAgLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaXNTY3JlZW5TaXplTWVkaXVtKCkge1xuXHQvLyBTZXQgUGl4ZWwgV2lkdGggZm9yIEJyZWFrcG9pbnRcblx0dmFyIHRoaXNJc01lZGl1bSA9IDEwMjQ7XG5cdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdGlmICh3aW5kb3dXaWR0aCA+PSB0aGlzSXNNZWRpdW0pIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tICBTaG93IENvbGxhcHNlZCBNZW51IEl0ZW1zICAtLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCkge1xuXHR2YXIgbWVudUl0ZW1BbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbSA+IFtkYXRhLWNvbGxhcHNlZD1cInRydWVcIl0nKTtcblxuXHRtZW51SXRlbUFuY2hvcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAnZmFsc2UnKTtcblx0fSk7XG59XG5cbi8qLS0tLS0tLS0tLSAgSGlkZSBDb2xsYXBzZWQgTWVudSBJdGVtcyAgLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNvbGxhcHNlZE1lbnVJdGVtcygpIHtcblx0dmFyIG1lbnVJdGVtQW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0gPiBbZGF0YS1jb2xsYXBzZWQ9XCJmYWxzZVwiXScpO1xuXG5cdG1lbnVJdGVtQW5jaG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG5cdH0pO1xufVxuXG5cbi8qLS0tLS0tLS0tLSAgRmV0Y2ggQUpBWCBSZXNwb25zZSAgLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSZXNwb25zZShpbnB1dFZhbHVlKSB7XG5cblx0alF1ZXJ5LmFqYXgoe1xuXHRcdHVybDogJ2h0dHA6Ly9hc2NlbnQtYWVyby53b3JkcHJlc3MudGVzdC93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXG5cdFx0dHlwZTogJ3Bvc3QnLFxuXHRcdGRhdGE6IHsgYWN0aW9uOiAnZmV0Y2hfc2VhcmNoX3Jlc3VsdHMnLCBrZXl3b3JkOiBpbnB1dFZhbHVlIH0sXG5cdFx0c3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdGpRdWVyeSgnI2RhdGFmZXRjaCcpLmh0bWwoZGF0YSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKj09PT09ICBFbmQgb2YgSGVscGVyIEZ1bmN0aW9ucyA6KSAgID09PT09PSovXG4iLCJcbmltcG9ydCB7IGNvbGxhcHNlU2VjdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHBhbmRTZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU2NyZWVuU2l6ZU1lZGl1bSB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBzaG93Q29sbGFwc2VkTWVudUl0ZW1zIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGhpZGVDb2xsYXBzZWRNZW51SXRlbXMgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG4vKipcblNldCBQYXJlbnQgTWVudSBDb250cm9sc1xuKi9cblxuLy8gQWRkIGRhdGEtY29sbGFwc2VkIGF0dHIgdG8gYWxsIG1lbnUgaXRlbXMgdGhhdCBoYXZlIGNoaWxkcmVuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xufSk7XG5cbi8qKlxuICogRXhwYW5kL0NvbGxhcHNlIFNpYmxpbmcgRWxlbWVudHNcbiAqXG4gKiBNYW51YWxseSBhZGQgZGF0YS1jb2xsYXBzZWQ9XCJ0cnVlXCIgdG8gYW55IGVsZW1lbnQgYW5kIGl0cyBuZXh0IHNpYmxpbmcgd2lsbCBjb2xsYXBzZVxuICogb3IgcHJvZ3JhbW1hdGljYWxseSBhZGQgYXR0cmlidXRlLlxuICovXG52YXIgcGFyZW50TWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb2xsYXBzZWRdJyk7XG5cbnBhcmVudE1lbnVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBzdWJNZW51ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0dmFyIGlzQ29sbGFwc2VkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJykgPT09ICd0cnVlJztcblxuXHRcdGlmIChpc0NvbGxhcHNlZCkge1xuXHRcdFx0ZXhwYW5kU2VjdGlvbihzdWJNZW51KTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xsYXBzZVNlY3Rpb24oc3ViTWVudSk7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xuXHRcdH1cblx0fSlcbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSBDbGFzcyBvbiBTaXRlLWhlYWRlclxuICpcbiAqIE9ubHkgcmVseSBvbiB1c2luZyBjbGFzc2VzIGlmIHRoZSB0YXJnZXRpbmcgaGFzIHRvIGJlIGRvbmUgb3V0c2lkZSBvZiB0aGUgdGFyZ2V0ZWRcbiAqIGl0ZW1zIERPTSBzdHJ1Y3R1cmUuXG4gKi9cbnZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2aWdhdGlvbi1idXR0b24nKTtcblxubWVudUJ1dHRvblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdHZhciBtZW51QnV0dG9uSXNDb2xsYXBzZWQgPSBtZW51QnV0dG9uWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnKSA9PT0gXCJ0cnVlXCI7XG5cblx0aWYgKCFtZW51QnV0dG9uSXNDb2xsYXBzZWQpIHtcblx0XHQvLyBBZGQgaXMtYWN0aXZlIGNsYXNzIHRvIG1hc3RoZWFkXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc3RoZWFkJykuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cdFx0Ly8gQWRkIGlzLWFjdGl2ZSBjbGFzcyB0byBtYWluLW5hdmlnYXRpb24tYnV0dG9uIGZvciBjbG9zZSBhbmltYXRpb25cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdmlnYXRpb24tYnV0dG9uJylbMF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUmVtb3ZlIGlzLWFjdGl2ZSBjbGFzcyBvbiB0b2dnbGVcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGhlYWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdmlnYXRpb24tYnV0dG9uJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cdH1cbn0pO1xuXG4vKipcbiAqIFNob3cgQ29sbGFwc2VkIERhdGEgb24gRGVza3RvcFxuICpcbiAqL1xuLy8gT24gYnJvd3NlciB3aWR0aCBjaGFuZ2VcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cblx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKGlzU2NyZWVuU2l6ZU1lZGl1bSgpKSB7XG5cdFx0XHRzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGVDb2xsYXBzZWRNZW51SXRlbXMoKTtcblx0XHR9XG5cblx0fSwgNTAwKTtcbn0pO1xuXG4vLyBPbiBicm93c2VyIGluaXRcbmlmIChpc1NjcmVlblNpemVNZWRpdW0oKSkge1xuXHRzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgTWFpbiBOYXZpZ2F0aW9uXG4gKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHQvLyBkZWJ1Z2dlclxuXG5cdC8vIFJlc2V0IE1haW4gTmF2aWdhdGlvbiBCdXR0b25cblx0dmFyIG1haW5OYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpO1xuXHRtYWluTmF2QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xuXHRtYWluTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG5cdC8vIFJlc2V0IE1hc3RoZWFkXG5cdHZhciBtYXN0SGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXN0aGVhZCcpO1xuXHRtYXN0SGVhZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblxuXHQvLyBDb2xsYXBzZSBOYXZpZ2F0aW9uXG5cdHZhciBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2aWdhdGlvbi1tZW51Jyk7XG5cblx0Y29sbGFwc2VTZWN0aW9uKHByaW1hcnlOYXYpO1xufSk7XG5cblxuLyoqXG4gKiBTZXQgQ2xhc3MgaWYgdGhyZWUgbGV2ZWxzIGRlZXBcbiAqL1xuLy8gdmFyIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IC5zdWItbWVudScpO1xuXG4vLyBpZlxuXG4vLyBjb25zb2xlLmxvZyh3ZWFyZWRlZXApO1xuIiwiaW1wb3J0IHsgZmV0Y2hSZXNwb25zZSB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5cbi8qLS0tLS0tLS0tLSAgVG9nZ2xlIFNlYXJjaCBNb2RhbCAgLS0tLS0tLS0tLSovXG52YXIgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLXNlYXJjaF9fYnV0dG9uJyk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHR2YXIgaXNFeHBhbmRlZCA9IF90aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG5cblx0aWYgKGlzRXhwYW5kZWQpIHtcblx0XHRfdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0fSBlbHNlIHtcblx0XHRfdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHR9XG59KTtcblxuLyotLS0tLS0tLS0tICBBSkFYIFNlYXJjaCAgLS0tLS0tLS0tLSovXG52YXIgc2VhcmNoVGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlci1zZWFyY2hfX3Rlcm0nKTtcblxuLy8gSWYgdmFsdWUgZXhzaXN0cyBpbiBzZWFyY2ggZmllbGQsIHNob3cgcmVzdWx0c1xuaWYgKHNlYXJjaFRlcm0udmFsdWUgIT0gJycpIHtcblx0ZmV0Y2hSZXNwb25zZShzZWFyY2hUZXJtLnZhbHVlKTtcbn1cblxuLy8gSWYgdXNlciBoYXMgdHlwZWQgaW4gZmllbGQsIHNob3cgcmVzdWx0c1xuc2VhcmNoVGVybS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG5cdGZldGNoUmVzcG9uc2Uoc2VhcmNoVGVybS52YWx1ZSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
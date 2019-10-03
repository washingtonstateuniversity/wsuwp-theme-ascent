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
/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ "./assets/src/js/navigation.js");
/* harmony import */ var _js_featured_separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/featured-separator */ "./assets/src/js/featured-separator.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ "./assets/src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
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
/*! exports provided: collapseSection, expandSection, getPosition, isScreenSizeLarge, showCollapsedMenuItems, hideCollapsedMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseSection", function() { return collapseSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSection", function() { return expandSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScreenSizeLarge", function() { return isScreenSizeLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCollapsedMenuItems", function() { return showCollapsedMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCollapsedMenuItems", function() { return hideCollapsedMenuItems; });
// Collapse Section
// https://css-tricks.com/using-css-transitions-auto-dimensions/

function collapseSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;

	// temporarily disable all css transitions
	var elementTransition = element.style.transition;
	element.style.transition = '';

	// on the next frame (as soon as the previous style change has taken effect),
	// explicitly set the element's height to its current pixel height, so we
	// aren't transitioning out of 'auto'
	requestAnimationFrame(function () {
		element.style.height = sectionHeight + 'px';
		element.style.transition = elementTransition;

		// on the next frame (as soon as the previous style change has taken effect),
		// have the element transition to height: 0
		requestAnimationFrame(function () {
			element.style.height = 0 + 'px';
		});
	});

	// mark the section as "currently collapsed"
	element.setAttribute('data-collapsed', 'true');
}

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

/**
 * Get Position of Element
 * @param element
 */

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

/**
 * Check if browser is large!
 */
function isScreenSizeLarge() {
	var thisIsLarge = 1440;
	var windowWidth = window.innerWidth;

	if (windowWidth >= thisIsLarge) {
		return true;
	} else {
		return false;
	}
}

/**
 * Show Collapsed Menu Items
 */
function showCollapsedMenuItems() {
	var menuItemAnchors = document.querySelectorAll('.menu-item > [data-collapsed="true"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('data-collapsed', 'false');
	});
}

/**
 * Hide Collapsed Menu Items
 */
function hideCollapsedMenuItems() {
	var menuItemAnchors = document.querySelectorAll('.menu-item > [data-collapsed="false"]');

	menuItemAnchors.forEach(element => {
		element.setAttribute('data-collapsed', 'true');
	});
}


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
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["collapseSection"])(subMenu)
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

		if (Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["isScreenSizeLarge"])()) {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["showCollapsedMenuItems"])();
		} else {
			Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["hideCollapsedMenuItems"])();
		}

	}, 500);
});

// On browser init
if (Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["isScreenSizeLarge"])()) {
	Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__["showCollapsedMenuItems"])();
}

/**
 * Close Main Navigation
 */
document.querySelector('#closeMenu').addEventListener('click', function (e) {
	e.preventDefault();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUI7QUFDUTs7QUFFakM7QUFDMEI7Ozs7Ozs7Ozs7Ozs7QUNMMUI7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFFQUFXO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHcUQ7QUFDRjtBQUNJO0FBQ0s7QUFDQTs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLHVFQUFhO0FBQ2hCO0FBQ0EsR0FBRztBQUNILEdBQUcseUVBQWU7QUFDbEI7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU0sMkVBQWlCO0FBQ3ZCLEdBQUcsZ0ZBQXNCO0FBQ3pCLEdBQUc7QUFDSCxHQUFHLGdGQUFzQjtBQUN6Qjs7QUFFQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBLElBQUksMkVBQWlCO0FBQ3JCLENBQUMsZ0ZBQXNCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLHlFQUFlOztBQUVoQixDQUFDOzs7Ozs7Ozs7Ozs7QUMxR0QsdUMiLCJmaWxlIjoiY2hpbGQtc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEpTXG5pbXBvcnQgJy4vanMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vanMvZmVhdHVyZWQtc2VwYXJhdG9yJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbiIsImltcG9ydCB7IGdldFBvc2l0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblxuXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndoaXRlLWJhcnMgPiBkaXZcIik7XG5cdFx0dmFyIHdpbmRvd1ZlcnRPZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuXHRcdGJhcnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb24gPSBnZXRQb3NpdGlvbihlbGVtZW50KTtcblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb25ZID0gdGhpc0JhclBvc2l0aW9uW1wieVwiXTtcblx0XHRcdHZhciB0aGlzQmFyV2luZG93RGlmZiA9IHRoaXNCYXJQb3NpdGlvblkgLSB3aW5kb3dWZXJ0T2Zmc2V0O1xuXHRcdFx0dmFyIG1sVmFsdWUgPSAxMTU7XG5cblx0XHRcdGlmICh0aGlzQmFyV2luZG93RGlmZiA8PSAyMDApIHtcblx0XHRcdFx0dmFyIG1hcmdpbkxlZnRWYWx1ZSA9IG1sVmFsdWUgKiAtMVxuXHRcdFx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0VmFsdWUgKyBcInB4XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbWFyZ2luTGVmdFZhbHVlID0gKGluZGV4ICogMTUpICogLTE7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRWYWx1ZSArIFwicHhcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgNzApO1xufSk7XG4iLCIvLyBDb2xsYXBzZSBTZWN0aW9uXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVNlY3Rpb24oZWxlbWVudCkge1xuXHQvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCdzIGlubmVyIGNvbnRlbnQsIHJlZ2FyZGxlc3Mgb2YgaXRzIGFjdHVhbCBzaXplXG5cdHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cblx0Ly8gdGVtcG9yYXJpbHkgZGlzYWJsZSBhbGwgY3NzIHRyYW5zaXRpb25zXG5cdHZhciBlbGVtZW50VHJhbnNpdGlvbiA9IGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbjtcblx0ZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cblx0Ly8gb24gdGhlIG5leHQgZnJhbWUgKGFzIHNvb24gYXMgdGhlIHByZXZpb3VzIHN0eWxlIGNoYW5nZSBoYXMgdGFrZW4gZWZmZWN0KSxcblx0Ly8gZXhwbGljaXRseSBzZXQgdGhlIGVsZW1lbnQncyBoZWlnaHQgdG8gaXRzIGN1cnJlbnQgcGl4ZWwgaGVpZ2h0LCBzbyB3ZVxuXHQvLyBhcmVuJ3QgdHJhbnNpdGlvbmluZyBvdXQgb2YgJ2F1dG8nXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgJ3B4Jztcblx0XHRlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBlbGVtZW50VHJhbnNpdGlvbjtcblxuXHRcdC8vIG9uIHRoZSBuZXh0IGZyYW1lIChhcyBzb29uIGFzIHRoZSBwcmV2aW91cyBzdHlsZSBjaGFuZ2UgaGFzIHRha2VuIGVmZmVjdCksXG5cdFx0Ly8gaGF2ZSB0aGUgZWxlbWVudCB0cmFuc2l0aW9uIHRvIGhlaWdodDogMFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IDAgKyAncHgnO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBtYXJrIHRoZSBzZWN0aW9uIGFzIFwiY3VycmVudGx5IGNvbGxhcHNlZFwiXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRTZWN0aW9uKGVsZW1lbnQpIHtcblx0Ly8gZ2V0IHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQncyBpbm5lciBjb250ZW50LCByZWdhcmRsZXNzIG9mIGl0cyBhY3R1YWwgc2l6ZVxuXHR2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG5cdC8vIGhhdmUgdGhlIGVsZW1lbnQgdHJhbnNpdGlvbiB0byB0aGUgaGVpZ2h0IG9mIGl0cyBpbm5lciBjb250ZW50XG5cdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2VjdGlvbkhlaWdodCArICdweCc7XG5cblx0Ly8gd2hlbiB0aGUgbmV4dCBjc3MgdHJhbnNpdGlvbiBmaW5pc2hlcyAod2hpY2ggc2hvdWxkIGJlIHRoZSBvbmUgd2UganVzdCB0cmlnZ2VyZWQpXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXIgc28gaXQgb25seSBnZXRzIHRyaWdnZXJlZCBvbmNlXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZS5jYWxsZWUpO1xuXG5cdFx0Ly8gcmVtb3ZlIFwiaGVpZ2h0XCIgZnJvbSB0aGUgZWxlbWVudCdzIGlubGluZSBzdHlsZXMsIHNvIGl0IGNhbiByZXR1cm4gdG8gaXRzIGluaXRpYWwgdmFsdWVcblx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XG5cblx0fSk7XG5cblx0Ly8gbWFyayB0aGUgc2VjdGlvbiBhcyBcImN1cnJlbnRseSBub3QgY29sbGFwc2VkXCJcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ2ZhbHNlJyk7XG59XG5cbi8qKlxuICogR2V0IFBvc2l0aW9uIG9mIEVsZW1lbnRcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsZW1lbnQpIHtcblx0dmFyIHhQb3NpdGlvbiA9IDA7XG5cdHZhciB5UG9zaXRpb24gPSAwO1xuXG5cdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0eFBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcblx0XHR5UG9zaXRpb24gKz0gZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuXHRcdGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcblx0fVxuXG5cdHJldHVybiB7IHg6IHhQb3NpdGlvbiwgeTogeVBvc2l0aW9uIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYnJvd3NlciBpcyBsYXJnZSFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2NyZWVuU2l6ZUxhcmdlKCkge1xuXHR2YXIgdGhpc0lzTGFyZ2UgPSAxNDQwO1xuXHR2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHRpZiAod2luZG93V2lkdGggPj0gdGhpc0lzTGFyZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLyoqXG4gKiBTaG93IENvbGxhcHNlZCBNZW51IEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCkge1xuXHR2YXIgbWVudUl0ZW1BbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbSA+IFtkYXRhLWNvbGxhcHNlZD1cInRydWVcIl0nKTtcblxuXHRtZW51SXRlbUFuY2hvcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAnZmFsc2UnKTtcblx0fSk7XG59XG5cbi8qKlxuICogSGlkZSBDb2xsYXBzZWQgTWVudSBJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNvbGxhcHNlZE1lbnVJdGVtcygpIHtcblx0dmFyIG1lbnVJdGVtQW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0gPiBbZGF0YS1jb2xsYXBzZWQ9XCJmYWxzZVwiXScpO1xuXG5cdG1lbnVJdGVtQW5jaG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG5cdH0pO1xufVxuIiwiXG5pbXBvcnQgeyBjb2xsYXBzZVNlY3Rpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZXhwYW5kU2VjdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1NjcmVlblNpemVMYXJnZSB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBzaG93Q29sbGFwc2VkTWVudUl0ZW1zIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGhpZGVDb2xsYXBzZWRNZW51SXRlbXMgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG4vKipcblNldCBQYXJlbnQgTWVudSBDb250cm9sc1xuKi9cblxuLy8gQWRkIGRhdGEtY29sbGFwc2VkIGF0dHIgdG8gYWxsIG1lbnUgaXRlbXMgdGhhdCBoYXZlIGNoaWxkcmVuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xufSk7XG5cbi8qKlxuICogRXhwYW5kL0NvbGxhcHNlIFNpYmxpbmcgRWxlbWVudHNcbiAqXG4gKiBNYW51YWxseSBhZGQgZGF0YS1jb2xsYXBzZWQ9XCJ0cnVlXCIgdG8gYW55IGVsZW1lbnQgYW5kIGl0cyBuZXh0IHNpYmxpbmcgd2lsbCBjb2xsYXBzZVxuICogb3IgcHJvZ3JhbW1hdGljYWxseSBhZGQgYXR0cmlidXRlLlxuICovXG52YXIgcGFyZW50TWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb2xsYXBzZWRdJyk7XG5cbnBhcmVudE1lbnVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBzdWJNZW51ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0dmFyIGlzQ29sbGFwc2VkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJykgPT09ICd0cnVlJztcblxuXHRcdGlmIChpc0NvbGxhcHNlZCkge1xuXHRcdFx0ZXhwYW5kU2VjdGlvbihzdWJNZW51KTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xsYXBzZVNlY3Rpb24oc3ViTWVudSlcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG5cdFx0fVxuXHR9KVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIENsYXNzIG9uIFNpdGUtaGVhZGVyXG4gKlxuICogT25seSByZWx5IG9uIHVzaW5nIGNsYXNzZXMgaWYgdGhlIHRhcmdldGluZyBoYXMgdG8gYmUgZG9uZSBvdXRzaWRlIG9mIHRoZSB0YXJnZXRlZFxuICogaXRlbXMgRE9NIHN0cnVjdHVyZS5cbiAqL1xudmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpO1xuXG5tZW51QnV0dG9uWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0dmFyIG1lbnVCdXR0b25Jc0NvbGxhcHNlZCA9IG1lbnVCdXR0b25bMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSBcInRydWVcIjtcblxuXHRpZiAoIW1lbnVCdXR0b25Jc0NvbGxhcHNlZCkge1xuXHRcdC8vIEFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gbWFzdGhlYWRcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGhlYWQnKS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblx0XHQvLyBBZGQgaXMtYWN0aXZlIGNsYXNzIHRvIG1haW4tbmF2aWdhdGlvbi1idXR0b24gZm9yIGNsb3NlIGFuaW1hdGlvblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2aWdhdGlvbi1idXR0b24nKVswXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblx0fSBlbHNlIHtcblx0XHQvLyBSZW1vdmUgaXMtYWN0aXZlIGNsYXNzIG9uIHRvZ2dsZVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0aGVhZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2aWdhdGlvbi1idXR0b24nKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblx0fVxufSk7XG5cbi8qKlxuICogU2hvdyBDb2xsYXBzZWQgRGF0YSBvbiBEZXNrdG9wXG4gKlxuICovXG4vLyBPbiBicm93c2VyIHdpZHRoIGNoYW5nZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblxuXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoaXNTY3JlZW5TaXplTGFyZ2UoKSkge1xuXHRcdFx0c2hvd0NvbGxhcHNlZE1lbnVJdGVtcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWRlQ29sbGFwc2VkTWVudUl0ZW1zKCk7XG5cdFx0fVxuXG5cdH0sIDUwMCk7XG59KTtcblxuLy8gT24gYnJvd3NlciBpbml0XG5pZiAoaXNTY3JlZW5TaXplTGFyZ2UoKSkge1xuXHRzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgTWFpbiBOYXZpZ2F0aW9uXG4gKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHQvLyBSZXNldCBNYWluIE5hdmlnYXRpb24gQnV0dG9uXG5cdHZhciBtYWluTmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2aWdhdGlvbi1idXR0b24nKTtcblx0bWFpbk5hdkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcblx0bWFpbk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblxuXHQvLyBSZXNldCBNYXN0aGVhZFxuXHR2YXIgbWFzdEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzdGhlYWQnKTtcblx0bWFzdEhlYWQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cblx0Ly8gQ29sbGFwc2UgTmF2aWdhdGlvblxuXHR2YXIgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdmlnYXRpb24tbWVudScpO1xuXHRjb2xsYXBzZVNlY3Rpb24ocHJpbWFyeU5hdik7XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
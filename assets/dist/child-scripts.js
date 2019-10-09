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
var wearedeep = document.querySelectorAll('.menu-item-has-children > .sub-menu > .menu-item-has-children > .sub-menu');

console.log(wearedeep);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUI7QUFDUTs7QUFFakM7QUFDMEI7Ozs7Ozs7Ozs7Ozs7QUNMMUI7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFFQUFXO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnFEO0FBQ0Y7QUFDSTtBQUNLO0FBQ0E7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyx1RUFBYTtBQUNoQjtBQUNBLEdBQUc7QUFDSCxHQUFHLHlFQUFlO0FBQ2xCO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLDJFQUFpQjtBQUN2QixHQUFHLGdGQUFzQjtBQUN6QixHQUFHO0FBQ0gsR0FBRyxnRkFBc0I7QUFDekI7O0FBRUEsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDJFQUFpQjtBQUNyQixDQUFDLGdGQUFzQjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMseUVBQWU7QUFDaEIsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BIQSx1QyIsImZpbGUiOiJjaGlsZC1zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSlNcbmltcG9ydCAnLi9qcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9qcy9mZWF0dXJlZC1zZXBhcmF0b3InO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuIiwiaW1wb3J0IHsgZ2V0UG9zaXRpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2hpdGUtYmFycyA+IGRpdlwiKTtcblx0XHR2YXIgd2luZG93VmVydE9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xuXG5cdFx0YmFycy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuXHRcdFx0dmFyIHRoaXNCYXJQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGVsZW1lbnQpO1xuXHRcdFx0dmFyIHRoaXNCYXJQb3NpdGlvblkgPSB0aGlzQmFyUG9zaXRpb25bXCJ5XCJdO1xuXHRcdFx0dmFyIHRoaXNCYXJXaW5kb3dEaWZmID0gdGhpc0JhclBvc2l0aW9uWSAtIHdpbmRvd1ZlcnRPZmZzZXQ7XG5cdFx0XHR2YXIgbWxWYWx1ZSA9IDExNTtcblxuXHRcdFx0aWYgKHRoaXNCYXJXaW5kb3dEaWZmIDw9IDIwMCkge1xuXHRcdFx0XHR2YXIgbWFyZ2luTGVmdFZhbHVlID0gbWxWYWx1ZSAqIC0xXG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRWYWx1ZSArIFwicHhcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBtYXJnaW5MZWZ0VmFsdWUgPSAoaW5kZXggKiAxNSkgKiAtMTtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFZhbHVlICsgXCJweFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LCA3MCk7XG59KTtcbiIsIi8vIENvbGxhcHNlIFNlY3Rpb25cbi8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdXNpbmctY3NzLXRyYW5zaXRpb25zLWF1dG8tZGltZW5zaW9ucy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlU2VjdGlvbihlbGVtZW50KSB7XG5cdC8vIGdldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50J3MgaW5uZXIgY29udGVudCwgcmVnYXJkbGVzcyBvZiBpdHMgYWN0dWFsIHNpemVcblx0dmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHQvLyBvbiB0aGUgbmV4dCBmcmFtZSAoYXMgc29vbiBhcyB0aGUgcHJldmlvdXMgc3R5bGUgY2hhbmdlIGhhcyB0YWtlbiBlZmZlY3QpLFxuXHQvLyBleHBsaWNpdGx5IHNldCB0aGUgZWxlbWVudCdzIGhlaWdodCB0byBpdHMgY3VycmVudCBwaXhlbCBoZWlnaHQsIHNvIHdlXG5cdC8vIGFyZW4ndCB0cmFuc2l0aW9uaW5nIG91dCBvZiAnYXV0bydcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgJ3B4JztcblxuXHRcdC8vIG9uIHRoZSBuZXh0IGZyYW1lIChhcyBzb29uIGFzIHRoZSBwcmV2aW91cyBzdHlsZSBjaGFuZ2UgaGFzIHRha2VuIGVmZmVjdCksXG5cdFx0Ly8gaGF2ZSB0aGUgZWxlbWVudCB0cmFuc2l0aW9uIHRvIGhlaWdodDogMFxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4Jztcblx0XHR9KTtcblx0fSk7XG5cblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFNlY3Rpb24oZWxlbWVudCkge1xuXHQvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCdzIGlubmVyIGNvbnRlbnQsIHJlZ2FyZGxlc3Mgb2YgaXRzIGFjdHVhbCBzaXplXG5cdHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cblx0Ly8gaGF2ZSB0aGUgZWxlbWVudCB0cmFuc2l0aW9uIHRvIHRoZSBoZWlnaHQgb2YgaXRzIGlubmVyIGNvbnRlbnRcblx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgJ3B4JztcblxuXHQvLyB3aGVuIHRoZSBuZXh0IGNzcyB0cmFuc2l0aW9uIGZpbmlzaGVzICh3aGljaCBzaG91bGQgYmUgdGhlIG9uZSB3ZSBqdXN0IHRyaWdnZXJlZClcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lciBzbyBpdCBvbmx5IGdldHMgdHJpZ2dlcmVkIG9uY2Vcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlLmNhbGxlZSk7XG5cblx0XHQvLyByZW1vdmUgXCJoZWlnaHRcIiBmcm9tIHRoZSBlbGVtZW50J3MgaW5saW5lIHN0eWxlcywgc28gaXQgY2FuIHJldHVybiB0byBpdHMgaW5pdGlhbCB2YWx1ZVxuXHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcblxuXHR9KTtcblxuXHQvLyBtYXJrIHRoZSBzZWN0aW9uIGFzIFwiY3VycmVudGx5IG5vdCBjb2xsYXBzZWRcIlxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAnZmFsc2UnKTtcbn1cblxuLyoqXG4gKiBHZXQgUG9zaXRpb24gb2YgRWxlbWVudFxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oZWxlbWVudCkge1xuXHR2YXIgeFBvc2l0aW9uID0gMDtcblx0dmFyIHlQb3NpdGlvbiA9IDA7XG5cblx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHR4UG9zaXRpb24gKz0gZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5zY3JvbGxMZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuXHRcdHlQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG5cdFx0ZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXHR9XG5cblx0cmV0dXJuIHsgeDogeFBvc2l0aW9uLCB5OiB5UG9zaXRpb24gfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBicm93c2VyIGlzIGxhcmdlIVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTY3JlZW5TaXplTGFyZ2UoKSB7XG5cdHZhciB0aGlzSXNMYXJnZSA9IDE0NDA7XG5cdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdGlmICh3aW5kb3dXaWR0aCA+PSB0aGlzSXNMYXJnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vKipcbiAqIFNob3cgQ29sbGFwc2VkIE1lbnUgSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb2xsYXBzZWRNZW51SXRlbXMoKSB7XG5cdHZhciBtZW51SXRlbUFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtID4gW2RhdGEtY29sbGFwc2VkPVwidHJ1ZVwiXScpO1xuXG5cdG1lbnVJdGVtQW5jaG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBIaWRlIENvbGxhcHNlZCBNZW51IEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29sbGFwc2VkTWVudUl0ZW1zKCkge1xuXHR2YXIgbWVudUl0ZW1BbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbSA+IFtkYXRhLWNvbGxhcHNlZD1cImZhbHNlXCJdJyk7XG5cblx0bWVudUl0ZW1BbmNob3JzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcblx0fSk7XG59XG4iLCJcbmltcG9ydCB7IGNvbGxhcHNlU2VjdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHBhbmRTZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU2NyZWVuU2l6ZUxhcmdlIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IHNob3dDb2xsYXBzZWRNZW51SXRlbXMgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgaGlkZUNvbGxhcHNlZE1lbnVJdGVtcyB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5cbi8qKlxuU2V0IFBhcmVudCBNZW51IENvbnRyb2xzXG4qL1xuXG4vLyBBZGQgZGF0YS1jb2xsYXBzZWQgYXR0ciB0byBhbGwgbWVudSBpdGVtcyB0aGF0IGhhdmUgY2hpbGRyZW5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG59KTtcblxuLyoqXG4gKiBFeHBhbmQvQ29sbGFwc2UgU2libGluZyBFbGVtZW50c1xuICpcbiAqIE1hbnVhbGx5IGFkZCBkYXRhLWNvbGxhcHNlZD1cInRydWVcIiB0byBhbnkgZWxlbWVudCBhbmQgaXRzIG5leHQgc2libGluZyB3aWxsIGNvbGxhcHNlXG4gKiBvciBwcm9ncmFtbWF0aWNhbGx5IGFkZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBwYXJlbnRNZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbGxhcHNlZF0nKTtcblxucGFyZW50TWVudUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIHN1Yk1lbnUgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHR2YXIgaXNDb2xsYXBzZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnKSA9PT0gJ3RydWUnO1xuXG5cdFx0aWYgKGlzQ29sbGFwc2VkKSB7XG5cdFx0XHRleHBhbmRTZWN0aW9uKHN1Yk1lbnUpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ2ZhbHNlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxhcHNlU2VjdGlvbihzdWJNZW51KTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG5cdFx0fVxuXHR9KVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIENsYXNzIG9uIFNpdGUtaGVhZGVyXG4gKlxuICogT25seSByZWx5IG9uIHVzaW5nIGNsYXNzZXMgaWYgdGhlIHRhcmdldGluZyBoYXMgdG8gYmUgZG9uZSBvdXRzaWRlIG9mIHRoZSB0YXJnZXRlZFxuICogaXRlbXMgRE9NIHN0cnVjdHVyZS5cbiAqL1xudmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpO1xuXG5tZW51QnV0dG9uWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0dmFyIG1lbnVCdXR0b25Jc0NvbGxhcHNlZCA9IG1lbnVCdXR0b25bMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSBcInRydWVcIjtcblxuXHRpZiAoIW1lbnVCdXR0b25Jc0NvbGxhcHNlZCkge1xuXHRcdC8vIEFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gbWFzdGhlYWRcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGhlYWQnKS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblx0XHQvLyBBZGQgaXMtYWN0aXZlIGNsYXNzIHRvIG1haW4tbmF2aWdhdGlvbi1idXR0b24gZm9yIGNsb3NlIGFuaW1hdGlvblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2aWdhdGlvbi1idXR0b24nKVswXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblx0fSBlbHNlIHtcblx0XHQvLyBSZW1vdmUgaXMtYWN0aXZlIGNsYXNzIG9uIHRvZ2dsZVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0aGVhZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2aWdhdGlvbi1idXR0b24nKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblx0fVxufSk7XG5cbi8qKlxuICogU2hvdyBDb2xsYXBzZWQgRGF0YSBvbiBEZXNrdG9wXG4gKlxuICovXG4vLyBPbiBicm93c2VyIHdpZHRoIGNoYW5nZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblxuXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoaXNTY3JlZW5TaXplTGFyZ2UoKSkge1xuXHRcdFx0c2hvd0NvbGxhcHNlZE1lbnVJdGVtcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWRlQ29sbGFwc2VkTWVudUl0ZW1zKCk7XG5cdFx0fVxuXG5cdH0sIDUwMCk7XG59KTtcblxuLy8gT24gYnJvd3NlciBpbml0XG5pZiAoaXNTY3JlZW5TaXplTGFyZ2UoKSkge1xuXHRzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgTWFpbiBOYXZpZ2F0aW9uXG4gKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHQvLyBkZWJ1Z2dlclxuXG5cdC8vIFJlc2V0IE1haW4gTmF2aWdhdGlvbiBCdXR0b25cblx0dmFyIG1haW5OYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpO1xuXHRtYWluTmF2QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xuXHRtYWluTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG5cdC8vIFJlc2V0IE1hc3RoZWFkXG5cdHZhciBtYXN0SGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXN0aGVhZCcpO1xuXHRtYXN0SGVhZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblxuXHQvLyBDb2xsYXBzZSBOYXZpZ2F0aW9uXG5cdHZhciBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2aWdhdGlvbi1tZW51Jyk7XG5cblx0Y29sbGFwc2VTZWN0aW9uKHByaW1hcnlOYXYpO1xufSk7XG5cblxuLyoqXG4gKiBTZXQgQ2xhc3MgaWYgdGhyZWUgbGV2ZWxzIGRlZXBcbiAqL1xudmFyIHdlYXJlZGVlcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gLnN1Yi1tZW51ID4gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiAuc3ViLW1lbnUnKTtcblxuY29uc29sZS5sb2cod2VhcmVkZWVwKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
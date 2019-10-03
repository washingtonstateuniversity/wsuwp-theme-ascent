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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUI7QUFDUTs7QUFFakM7QUFDMEI7Ozs7Ozs7Ozs7Ozs7QUNMMUI7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFFQUFXO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnFEO0FBQ0Y7QUFDSTtBQUNLO0FBQ0E7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyx1RUFBYTtBQUNoQjtBQUNBLEdBQUc7QUFDSCxHQUFHLHlFQUFlO0FBQ2xCO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLDJFQUFpQjtBQUN2QixHQUFHLGdGQUFzQjtBQUN6QixHQUFHO0FBQ0gsR0FBRyxnRkFBc0I7QUFDekI7O0FBRUEsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDJFQUFpQjtBQUNyQixDQUFDLGdGQUFzQjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMseUVBQWU7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUdELHVDIiwiZmlsZSI6ImNoaWxkLXNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBKU1xuaW1wb3J0ICcuL2pzL25hdmlnYXRpb24nO1xuaW1wb3J0ICcuL2pzL2ZlYXR1cmVkLXNlcGFyYXRvcic7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XG4iLCJpbXBvcnQgeyBnZXRQb3NpdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cblx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBiYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53aGl0ZS1iYXJzID4gZGl2XCIpO1xuXHRcdHZhciB3aW5kb3dWZXJ0T2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG5cblx0XHRiYXJzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG5cdFx0XHR2YXIgdGhpc0JhclBvc2l0aW9uID0gZ2V0UG9zaXRpb24oZWxlbWVudCk7XG5cdFx0XHR2YXIgdGhpc0JhclBvc2l0aW9uWSA9IHRoaXNCYXJQb3NpdGlvbltcInlcIl07XG5cdFx0XHR2YXIgdGhpc0JhcldpbmRvd0RpZmYgPSB0aGlzQmFyUG9zaXRpb25ZIC0gd2luZG93VmVydE9mZnNldDtcblx0XHRcdHZhciBtbFZhbHVlID0gMTE1O1xuXG5cdFx0XHRpZiAodGhpc0JhcldpbmRvd0RpZmYgPD0gMjAwKSB7XG5cdFx0XHRcdHZhciBtYXJnaW5MZWZ0VmFsdWUgPSBtbFZhbHVlICogLTFcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFZhbHVlICsgXCJweFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG1hcmdpbkxlZnRWYWx1ZSA9IChpbmRleCAqIDE1KSAqIC0xO1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0VmFsdWUgKyBcInB4XCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIDcwKTtcbn0pO1xuIiwiLy8gQ29sbGFwc2UgU2VjdGlvblxuLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS91c2luZy1jc3MtdHJhbnNpdGlvbnMtYXV0by1kaW1lbnNpb25zL1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VTZWN0aW9uKGVsZW1lbnQpIHtcblx0Ly8gZ2V0IHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQncyBpbm5lciBjb250ZW50LCByZWdhcmRsZXNzIG9mIGl0cyBhY3R1YWwgc2l6ZVxuXHR2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG5cdC8vIG9uIHRoZSBuZXh0IGZyYW1lIChhcyBzb29uIGFzIHRoZSBwcmV2aW91cyBzdHlsZSBjaGFuZ2UgaGFzIHRha2VuIGVmZmVjdCksXG5cdC8vIGV4cGxpY2l0bHkgc2V0IHRoZSBlbGVtZW50J3MgaGVpZ2h0IHRvIGl0cyBjdXJyZW50IHBpeGVsIGhlaWdodCwgc28gd2Vcblx0Ly8gYXJlbid0IHRyYW5zaXRpb25pbmcgb3V0IG9mICdhdXRvJ1xuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xuXG5cdFx0Ly8gb24gdGhlIG5leHQgZnJhbWUgKGFzIHNvb24gYXMgdGhlIHByZXZpb3VzIHN0eWxlIGNoYW5nZSBoYXMgdGFrZW4gZWZmZWN0KSxcblx0XHQvLyBoYXZlIHRoZSBlbGVtZW50IHRyYW5zaXRpb24gdG8gaGVpZ2h0OiAwXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IDAgKyAncHgnO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kU2VjdGlvbihlbGVtZW50KSB7XG5cdC8vIGdldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50J3MgaW5uZXIgY29udGVudCwgcmVnYXJkbGVzcyBvZiBpdHMgYWN0dWFsIHNpemVcblx0dmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHQvLyBoYXZlIHRoZSBlbGVtZW50IHRyYW5zaXRpb24gdG8gdGhlIGhlaWdodCBvZiBpdHMgaW5uZXIgY29udGVudFxuXHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xuXG5cdC8vIHdoZW4gdGhlIG5leHQgY3NzIHRyYW5zaXRpb24gZmluaXNoZXMgKHdoaWNoIHNob3VsZCBiZSB0aGUgb25lIHdlIGp1c3QgdHJpZ2dlcmVkKVxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHNvIGl0IG9ubHkgZ2V0cyB0cmlnZ2VyZWQgb25jZVxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGUuY2FsbGVlKTtcblxuXHRcdC8vIHJlbW92ZSBcImhlaWdodFwiIGZyb20gdGhlIGVsZW1lbnQncyBpbmxpbmUgc3R5bGVzLCBzbyBpdCBjYW4gcmV0dXJuIHRvIGl0cyBpbml0aWFsIHZhbHVlXG5cdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuXG5cdH0pO1xuXG5cdC8vIG1hcmsgdGhlIHNlY3Rpb24gYXMgXCJjdXJyZW50bHkgbm90IGNvbGxhcHNlZFwiXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xufVxuXG4vKipcbiAqIEdldCBQb3NpdGlvbiBvZiBFbGVtZW50XG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG5cdHZhciB4UG9zaXRpb24gPSAwO1xuXHR2YXIgeVBvc2l0aW9uID0gMDtcblxuXHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdHhQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG5cdFx0eVBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcDtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cdH1cblxuXHRyZXR1cm4geyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGJyb3dzZXIgaXMgbGFyZ2UhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NjcmVlblNpemVMYXJnZSgpIHtcblx0dmFyIHRoaXNJc0xhcmdlID0gMTQ0MDtcblx0dmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0aWYgKHdpbmRvd1dpZHRoID49IHRoaXNJc0xhcmdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyBDb2xsYXBzZWQgTWVudSBJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbGxhcHNlZE1lbnVJdGVtcygpIHtcblx0dmFyIG1lbnVJdGVtQW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0gPiBbZGF0YS1jb2xsYXBzZWQ9XCJ0cnVlXCJdJyk7XG5cblx0bWVudUl0ZW1BbmNob3JzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ2ZhbHNlJyk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEhpZGUgQ29sbGFwc2VkIE1lbnUgSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb2xsYXBzZWRNZW51SXRlbXMoKSB7XG5cdHZhciBtZW51SXRlbUFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtID4gW2RhdGEtY29sbGFwc2VkPVwiZmFsc2VcIl0nKTtcblxuXHRtZW51SXRlbUFuY2hvcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xuXHR9KTtcbn1cbiIsIlxuaW1wb3J0IHsgY29sbGFwc2VTZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGV4cGFuZFNlY3Rpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTY3JlZW5TaXplTGFyZ2UgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgc2hvd0NvbGxhcHNlZE1lbnVJdGVtcyB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBoaWRlQ29sbGFwc2VkTWVudUl0ZW1zIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcblxuLyoqXG5TZXQgUGFyZW50IE1lbnUgQ29udHJvbHNcbiovXG5cbi8vIEFkZCBkYXRhLWNvbGxhcHNlZCBhdHRyIHRvIGFsbCBtZW51IGl0ZW1zIHRoYXQgaGF2ZSBjaGlsZHJlblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJykuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcbn0pO1xuXG4vKipcbiAqIEV4cGFuZC9Db2xsYXBzZSBTaWJsaW5nIEVsZW1lbnRzXG4gKlxuICogTWFudWFsbHkgYWRkIGRhdGEtY29sbGFwc2VkPVwidHJ1ZVwiIHRvIGFueSBlbGVtZW50IGFuZCBpdHMgbmV4dCBzaWJsaW5nIHdpbGwgY29sbGFwc2VcbiAqIG9yIHByb2dyYW1tYXRpY2FsbHkgYWRkIGF0dHJpYnV0ZS5cbiAqL1xudmFyIHBhcmVudE1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29sbGFwc2VkXScpO1xuXG5wYXJlbnRNZW51SXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgc3ViTWVudSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdHZhciBpc0NvbGxhcHNlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSAndHJ1ZSc7XG5cblx0XHRpZiAoaXNDb2xsYXBzZWQpIHtcblx0XHRcdGV4cGFuZFNlY3Rpb24oc3ViTWVudSk7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAnZmFsc2UnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGFwc2VTZWN0aW9uKHN1Yk1lbnUpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcblx0XHR9XG5cdH0pXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgQ2xhc3Mgb24gU2l0ZS1oZWFkZXJcbiAqXG4gKiBPbmx5IHJlbHkgb24gdXNpbmcgY2xhc3NlcyBpZiB0aGUgdGFyZ2V0aW5nIGhhcyB0byBiZSBkb25lIG91dHNpZGUgb2YgdGhlIHRhcmdldGVkXG4gKiBpdGVtcyBET00gc3RydWN0dXJlLlxuICovXG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cbm1lbnVCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHR2YXIgbWVudUJ1dHRvbklzQ29sbGFwc2VkID0gbWVudUJ1dHRvblswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJykgPT09IFwidHJ1ZVwiO1xuXG5cdGlmICghbWVudUJ1dHRvbklzQ29sbGFwc2VkKSB7XG5cdFx0Ly8gQWRkIGlzLWFjdGl2ZSBjbGFzcyB0byBtYXN0aGVhZFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0aGVhZCcpLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHRcdC8vIEFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbiBmb3IgY2xvc2UgYW5pbWF0aW9uXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFJlbW92ZSBpcy1hY3RpdmUgY2xhc3Mgb24gdG9nZ2xlXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc3RoZWFkJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBTaG93IENvbGxhcHNlZCBEYXRhIG9uIERlc2t0b3BcbiAqXG4gKi9cbi8vIE9uIGJyb3dzZXIgd2lkdGggY2hhbmdlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmIChpc1NjcmVlblNpemVMYXJnZSgpKSB7XG5cdFx0XHRzaG93Q29sbGFwc2VkTWVudUl0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGVDb2xsYXBzZWRNZW51SXRlbXMoKTtcblx0XHR9XG5cblx0fSwgNTAwKTtcbn0pO1xuXG4vLyBPbiBicm93c2VyIGluaXRcbmlmIChpc1NjcmVlblNpemVMYXJnZSgpKSB7XG5cdHNob3dDb2xsYXBzZWRNZW51SXRlbXMoKTtcbn1cblxuLyoqXG4gKiBDbG9zZSBNYWluIE5hdmlnYXRpb25cbiAqL1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlTWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdC8vIGRlYnVnZ2VyXG5cblx0Ly8gUmVzZXQgTWFpbiBOYXZpZ2F0aW9uIEJ1dHRvblxuXHR2YXIgbWFpbk5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cdG1haW5OYXZCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG5cdG1haW5OYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cblx0Ly8gUmVzZXQgTWFzdGhlYWRcblx0dmFyIG1hc3RIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc3RoZWFkJyk7XG5cdG1hc3RIZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG5cdC8vIENvbGxhcHNlIE5hdmlnYXRpb25cblx0dmFyIHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZpZ2F0aW9uLW1lbnUnKTtcblxuXHRjb2xsYXBzZVNlY3Rpb24ocHJpbWFyeU5hdik7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
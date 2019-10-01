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


var timer;

window.addEventListener('scroll', function () {
	if (timer) {
		window.clearTimeout(timer);
	}

	var timer = window.setTimeout(function () {
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
		})
	}, 5);
});


/***/ }),

/***/ "./assets/src/js/helper-functions.js":
/*!*******************************************!*\
  !*** ./assets/src/js/helper-functions.js ***!
  \*******************************************/
/*! exports provided: collapseSection, expandSection, getPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseSection", function() { return collapseSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSection", function() { return expandSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
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
		// element.removeEventListener('transitionend', arguments.callee);

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
Show/Hide Items
*/

// Show / Hide Menu Bar
// navButton.addEventListener('click', function () {
// 	if (this.classList.contains('is-active')) {
// 		this.classList.remove('is-active');
// 		masthead.classList.remove('is-active');
// 	} else {
// 		this.classList.add('is-active');
// 		masthead.classList.add('is-active');
// 	}
// });



// parentMenuItem.addEventListener('click', function (e) {
// 	var section = document.querySelector('.section.collapsible');
// 	var isCollapsed = section.getAttribute('data-collapsed') === 'true';

// 	if (isCollapsed) {
// 		expandSection(section)
// 		section.setAttribute('data-collapsed', 'false')
// 	} else {
// 		collapseSection(section)
// 	}
// });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZlYXR1cmVkLXNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUI7QUFDUTs7QUFFakM7QUFDMEI7Ozs7Ozs7Ozs7Ozs7QUNMMUI7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFcUQ7QUFDRjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLHVFQUFhO0FBQ2hCO0FBQ0EsR0FBRztBQUNILEdBQUcseUVBQWU7QUFDbEI7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7OztBQUlKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7OztBQzNGSix1QyIsImZpbGUiOiJjaGlsZC1zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSlNcbmltcG9ydCAnLi9qcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9qcy9mZWF0dXJlZC1zZXBhcmF0b3InO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuIiwiaW1wb3J0IHsgZ2V0UG9zaXRpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuXG52YXIgdGltZXI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aW1lcikge1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuXHR9XG5cblx0dmFyIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBiYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53aGl0ZS1iYXJzID4gZGl2XCIpO1xuXHRcdHZhciB3aW5kb3dWZXJ0T2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG5cblx0XHRiYXJzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG5cblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb24gPSBnZXRQb3NpdGlvbihlbGVtZW50KTtcblx0XHRcdHZhciB0aGlzQmFyUG9zaXRpb25ZID0gdGhpc0JhclBvc2l0aW9uW1wieVwiXTtcblx0XHRcdHZhciB0aGlzQmFyV2luZG93RGlmZiA9IHRoaXNCYXJQb3NpdGlvblkgLSB3aW5kb3dWZXJ0T2Zmc2V0O1xuXHRcdFx0dmFyIG1sVmFsdWUgPSAxMTU7XG5cblx0XHRcdGlmICh0aGlzQmFyV2luZG93RGlmZiA8PSAyMDApIHtcblx0XHRcdFx0dmFyIG1hcmdpbkxlZnRWYWx1ZSA9IG1sVmFsdWUgKiAtMVxuXHRcdFx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0VmFsdWUgKyBcInB4XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbWFyZ2luTGVmdFZhbHVlID0gKGluZGV4ICogMTUpICogLTE7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRWYWx1ZSArIFwicHhcIjtcblx0XHRcdH1cblx0XHR9KVxuXHR9LCA1KTtcbn0pO1xuIiwiLy8gQ29sbGFwc2UgU2VjdGlvblxuLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS91c2luZy1jc3MtdHJhbnNpdGlvbnMtYXV0by1kaW1lbnNpb25zL1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VTZWN0aW9uKGVsZW1lbnQpIHtcblx0Ly8gZ2V0IHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQncyBpbm5lciBjb250ZW50LCByZWdhcmRsZXNzIG9mIGl0cyBhY3R1YWwgc2l6ZVxuXHR2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG5cdC8vIHRlbXBvcmFyaWx5IGRpc2FibGUgYWxsIGNzcyB0cmFuc2l0aW9uc1xuXHR2YXIgZWxlbWVudFRyYW5zaXRpb24gPSBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb247XG5cdGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuXG5cdC8vIG9uIHRoZSBuZXh0IGZyYW1lIChhcyBzb29uIGFzIHRoZSBwcmV2aW91cyBzdHlsZSBjaGFuZ2UgaGFzIHRha2VuIGVmZmVjdCksXG5cdC8vIGV4cGxpY2l0bHkgc2V0IHRoZSBlbGVtZW50J3MgaGVpZ2h0IHRvIGl0cyBjdXJyZW50IHBpeGVsIGhlaWdodCwgc28gd2Vcblx0Ly8gYXJlbid0IHRyYW5zaXRpb25pbmcgb3V0IG9mICdhdXRvJ1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2VjdGlvbkhlaWdodCArICdweCc7XG5cdFx0ZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gZWxlbWVudFRyYW5zaXRpb247XG5cblx0XHQvLyBvbiB0aGUgbmV4dCBmcmFtZSAoYXMgc29vbiBhcyB0aGUgcHJldmlvdXMgc3R5bGUgY2hhbmdlIGhhcyB0YWtlbiBlZmZlY3QpLFxuXHRcdC8vIGhhdmUgdGhlIGVsZW1lbnQgdHJhbnNpdGlvbiB0byBoZWlnaHQ6IDBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4Jztcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gbWFyayB0aGUgc2VjdGlvbiBhcyBcImN1cnJlbnRseSBjb2xsYXBzZWRcIlxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kU2VjdGlvbihlbGVtZW50KSB7XG5cdC8vIGdldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50J3MgaW5uZXIgY29udGVudCwgcmVnYXJkbGVzcyBvZiBpdHMgYWN0dWFsIHNpemVcblx0dmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuXHQvLyBoYXZlIHRoZSBlbGVtZW50IHRyYW5zaXRpb24gdG8gdGhlIGhlaWdodCBvZiBpdHMgaW5uZXIgY29udGVudFxuXHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xuXG5cdC8vIHdoZW4gdGhlIG5leHQgY3NzIHRyYW5zaXRpb24gZmluaXNoZXMgKHdoaWNoIHNob3VsZCBiZSB0aGUgb25lIHdlIGp1c3QgdHJpZ2dlcmVkKVxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHNvIGl0IG9ubHkgZ2V0cyB0cmlnZ2VyZWQgb25jZVxuXHRcdC8vIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuXG5cdFx0Ly8gcmVtb3ZlIFwiaGVpZ2h0XCIgZnJvbSB0aGUgZWxlbWVudCdzIGlubGluZSBzdHlsZXMsIHNvIGl0IGNhbiByZXR1cm4gdG8gaXRzIGluaXRpYWwgdmFsdWVcblx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XG5cdH0pO1xuXG5cdC8vIG1hcmsgdGhlIHNlY3Rpb24gYXMgXCJjdXJyZW50bHkgbm90IGNvbGxhcHNlZFwiXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xufVxuXG4vKipcbiAqIEdldCBQb3NpdGlvbiBvZiBFbGVtZW50XG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG5cdHZhciB4UG9zaXRpb24gPSAwO1xuXHR2YXIgeVBvc2l0aW9uID0gMDtcblxuXHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdHhQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG5cdFx0eVBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcDtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cdH1cblxuXHRyZXR1cm4geyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiB9O1xufVxuIiwiXG5pbXBvcnQgeyBjb2xsYXBzZVNlY3Rpb24gfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZXhwYW5kU2VjdGlvbiB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5cbi8qKlxuU2V0IFBhcmVudCBNZW51IENvbnRyb2xzXG4qL1xuXG4vLyBBZGQgZGF0YS1jb2xsYXBzZWQgYXR0ciB0byBhbGwgbWVudSBpdGVtcyB0aGF0IGhhdmUgY2hpbGRyZW5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICd0cnVlJyk7XG59KTtcblxuLyoqXG4gKiBFeHBhbmQvQ29sbGFwc2UgU2libGluZyBFbGVtZW50c1xuICpcbiAqIE1hbnVhbGx5IGFkZCBkYXRhLWNvbGxhcHNlZD1cInRydWVcIiB0byBhbnkgZWxlbWVudCBhbmQgaXRzIG5leHQgc2libGluZyB3aWxsIGNvbGxhcHNlXG4gKiBvciBwcm9ncmFtbWF0aWNhbGx5IGFkZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBwYXJlbnRNZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbGxhcHNlZF0nKTtcblxucGFyZW50TWVudUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIHN1Yk1lbnUgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHR2YXIgaXNDb2xsYXBzZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnKSA9PT0gJ3RydWUnO1xuXG5cdFx0aWYgKGlzQ29sbGFwc2VkKSB7XG5cdFx0XHRleHBhbmRTZWN0aW9uKHN1Yk1lbnUpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ2ZhbHNlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxhcHNlU2VjdGlvbihzdWJNZW51KVxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJywgJ3RydWUnKTtcblx0XHR9XG5cdH0pXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgQ2xhc3Mgb24gU2l0ZS1oZWFkZXJcbiAqXG4gKiBPbmx5IHJlbHkgb24gdXNpbmcgY2xhc3NlcyBpZiB0aGUgdGFyZ2V0aW5nIGhhcyB0byBiZSBkb25lIG91dHNpZGUgb2YgdGhlIHRhcmdldGVkXG4gKiBpdGVtcyBET00gc3RydWN0dXJlLlxuICovXG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cbm1lbnVCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHR2YXIgbWVudUJ1dHRvbklzQ29sbGFwc2VkID0gbWVudUJ1dHRvblswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGFwc2VkJykgPT09IFwidHJ1ZVwiO1xuXG5cdGlmICghbWVudUJ1dHRvbklzQ29sbGFwc2VkKSB7XG5cdFx0Ly8gQWRkIGlzLWFjdGl2ZSBjbGFzcyB0byBtYXN0aGVhZFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0aGVhZCcpLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHRcdC8vIEFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbiBmb3IgY2xvc2UgYW5pbWF0aW9uXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFJlbW92ZSBpcy1hY3RpdmUgY2xhc3Mgb24gdG9nZ2xlXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc3RoZWFkJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXZpZ2F0aW9uLWJ1dHRvbicpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHR9XG59KTtcblxuXG5cblxuLyoqXG5TaG93L0hpZGUgSXRlbXNcbiovXG5cbi8vIFNob3cgLyBIaWRlIE1lbnUgQmFyXG4vLyBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbi8vIFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuLy8gXHRcdG1hc3RoZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4vLyBcdFx0bWFzdGhlYWQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4vLyBcdH1cbi8vIH0pO1xuXG5cblxuLy8gcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuLy8gXHR2YXIgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLmNvbGxhcHNpYmxlJyk7XG4vLyBcdHZhciBpc0NvbGxhcHNlZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSAndHJ1ZSc7XG5cbi8vIFx0aWYgKGlzQ29sbGFwc2VkKSB7XG4vLyBcdFx0ZXhwYW5kU2VjdGlvbihzZWN0aW9uKVxuLy8gXHRcdHNlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpXG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0Y29sbGFwc2VTZWN0aW9uKHNlY3Rpb24pXG4vLyBcdH1cbi8vIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
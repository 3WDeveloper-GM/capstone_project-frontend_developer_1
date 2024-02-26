/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blur.js":
/*!*********************!*\
  !*** ./src/blur.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ParseFloatsFromString: () => (/* binding */ ParseFloatsFromString),\n/* harmony export */   blur: () => (/* binding */ blur),\n/* harmony export */   onLoadHandler: () => (/* binding */ onLoadHandler),\n/* harmony export */   unBlur: () => (/* binding */ unBlur)\n/* harmony export */ });\nfunction blur() {\n   var background = document.getElementById('background')\n   var scrollHeight = window.scrollY\n   var maximumBlur = 9\n\n   var scrollMax = background.clientHeight\n\n   var opacity = (scrollHeight > scrollMax)\n      ? 0\n      : 1 - (scrollHeight / scrollMax)\n\n   background.style.opacity = opacity;\n\n   var blur = (scrollHeight < scrollMax)\n      ? Math.floor(10 * (scrollHeight / scrollMax))\n      : maximumBlur\n\n   background.style.filter = `blur(${blur}px)`\n}\n\nfunction unBlur(currentBlur, currentOpacity, i = 0) {\n   if (i < 40) {\n      let opacityStep = 0.05\n      let blurStep = 2\n      let newOpacity = (currentOpacity < 1)\n         ? currentOpacity + opacityStep\n         : 1\n      let newBlur = (currentBlur > 0)\n         ? currentBlur - blurStep\n         : 0\n\n      let splash = document.getElementById('background')\n\n      splash.style.opacity = newOpacity\n      splash.style.filter = `blur(${newBlur}px)`\n\n      setTimeout(() => unBlur(newBlur, newOpacity, i + 1), 25)\n   }\n}\n\nfunction onLoadHandler() {\n   var background = document.getElementById('background');\n   var computedStyles = window.getComputedStyle(background);\n\n   var currentOpacity = computedStyles.opacity;\n   var currentBlur = computedStyles.filter;\n\n   var completeString = currentOpacity + \" \" + currentBlur\n   var numbers = ParseFloatsFromString(completeString)\n   unBlur(numbers[1], numbers[0])\n}\n\n\nfunction ParseFloatsFromString(stringArray) {\n   var numbersArray = stringArray.match(/\\d+(\\.\\d+)?/g)\n\n   var numbers = numbersArray.map(function (numberString) {\n      return parseFloat(numberString, 10)\n   })\n\n   return numbers\n}\n\n\n\n//# sourceURL=webpack://personal-website/./src/blur.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blur */ \"./src/blur.js\");\n/* harmony import */ var _textEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textEffects */ \"./src/textEffects.js\");\n\n\n\n\n\n\n// Section that is executed at startup\n\nwindow.addEventListener('load', _blur__WEBPACK_IMPORTED_MODULE_0__.onLoadHandler, { once: true })\n//document.querySelector('blink-element').innerHTML += \"|\"\n\nwindow.addEventListener(\"scroll\", _blur__WEBPACK_IMPORTED_MODULE_0__.blur)\n\nconst element = document.querySelector(\"#hello\")\n\nsetTimeout(() => _textEffects__WEBPACK_IMPORTED_MODULE_1__.textTyping(element, _textEffects__WEBPACK_IMPORTED_MODULE_1__.message), 500)\n\nconst blink = document.getElementsByClassName('hello-there blink-element')\nblink[0].innerHTML += \"|\"\n\n\n//# sourceURL=webpack://personal-website/./src/index.js?");

/***/ }),

/***/ "./src/textEffects.js":
/*!****************************!*\
  !*** ./src/textEffects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   message: () => (/* binding */ message),\n/* harmony export */   textTyping: () => (/* binding */ textTyping)\n/* harmony export */ });\nfunction textTyping(element, text, i = 0) {\n   if (i === 0) {\n      element.textContent = \"\"\n   }\n   element.textContent += text[i]\n\n   if (i === text.length - 1) {\n      return\n   }\n   setTimeout(() => textTyping(element, text, i + 1), 150)\n}\n\nconst message = \"Hello There\"\n\n//# sourceURL=webpack://personal-website/./src/textEffects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
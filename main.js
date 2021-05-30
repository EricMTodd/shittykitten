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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_views_galleryViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/galleryViews */ \"./src/views/galleryViews.js\");\n/* harmony import */ var _src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n\n\n\nconst app = (() => {})();\n\n\n//# sourceURL=webpack://shittykitten/./src/app.js?");

/***/ }),

/***/ "./src/controllers/galleryControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/galleryControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryControllers\": () => (/* binding */ galleryControllers)\n/* harmony export */ });\n/* harmony import */ var _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/galleryViews */ \"./src/views/galleryViews.js\");\n\n\nconst galleryControllers = (() => {\n\tlet imageSources = [];\n\n\tconst createImageSourceList = (() => {\n\t\tfor (let i = 0; i < 35; i++) {\n\t\t\tlet source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;\n\t\t\timageSources.push(source);\n\t\t}\n\t})();\n\n\tconst reverseSlide = () => {\n\t\tlet slider = document.querySelector('#slider');\n\n\t\tlet inTheHole = document.querySelector('#in-the-hole');\n\t\tlet previous = document.querySelector('#previous');\n\t\tlet current = document.querySelector('#current');\n\t\tlet next = document.querySelector('#next');\n\t\tlet onDeck = document.querySelector('#on-deck');\n\n\t\tonDeck.remove();\n\n\t\tlet div = _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__.galleryViews.renderSlide();\n\t\tdiv.dataset.id = Number(inTheHole.dataset.id) - 1;\n\t\tdiv.innerText = div.dataset.id;\n\t\tslider.insertBefore(div, inTheHole);\n\n\t\tdiv.id = 'in-the-hole';\n\t\tnext.id = 'on-deck';\n\t\tcurrent.id = 'next';\n\t\tprevious.id = 'current';\n\t\tinTheHole.id = 'previous';\n\t};\n\n\tconst advanceSlide = () => {\n\t\tlet slider = document.querySelector('#slider');\n\n\t\tlet inTheHole = document.querySelector('#in-the-hole');\n\t\tlet previous = document.querySelector('#previous');\n\t\tlet current = document.querySelector('#current');\n\t\tlet next = document.querySelector('#next');\n\t\tlet onDeck = document.querySelector('#on-deck');\n\n\t\tinTheHole.remove();\n\n\t\tlet div = _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__.galleryViews.renderSlide();\n\t\tdiv.dataset.id = Number(onDeck.dataset.id) + 1;\n\t\tdiv.innerText = div.dataset.id;\n\t\tslider.appendChild(div);\n\n\t\tdiv.id = 'on-deck';\n\t\tprevious.id = 'in-the-hole';\n\t\tcurrent.id = 'previous';\n\t\tnext.id = 'current';\n\t\tonDeck.id = 'next';\n\t};\n\n\treturn {\n\t\timageSources,\n\t\treverseSlide,\n\t\tadvanceSlide,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/controllers/galleryControllers.js?");

/***/ }),

/***/ "./src/views/galleryViews.js":
/*!***********************************!*\
  !*** ./src/views/galleryViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryViews\": () => (/* binding */ galleryViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n\n\nconst galleryViews = (() => {\n\tlet content = document.querySelector('#content');\n\tlet gallery = document.querySelector('#gallery');\n\n\tconst renderSlider = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('container');\n\t\tdiv.id = 'slider';\n\t\tgallery.appendChild(div);\n\t})();\n\n\tconst renderSlide = () => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('slide');\n\t\treturn div;\n\t};\n\n\tconst renderSlides = (() => {\n\t\tfor (let i = 0; i < 5; i++) {\n\t\t\tlet div = renderSlide();\n\t\t\tdiv.dataset.id = `${i + 1}`;\n\t\t\tdiv.innerText = i + 1;\n\n\t\t\tif (i === 0) {\n\t\t\t\tdiv.id = 'in-the-hole';\n\t\t\t}\n\t\t\tif (i === 1) {\n\t\t\t\tdiv.id = 'previous';\n\t\t\t}\n\t\t\tif (i === 2) {\n\t\t\t\tdiv.id = 'current';\n\t\t\t}\n\t\t\tif (i === 3) {\n\t\t\t\tdiv.id = 'next';\n\t\t\t}\n\t\t\tif (i === 4) {\n\t\t\t\tdiv.id = 'on-deck';\n\t\t\t}\n\t\t\tslider.appendChild(div);\n\t\t}\n\t})();\n\n\tconst renderSliderControllersContainer = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('container');\n\t\tdiv.id = 'slider-controllers-container';\n\t\tcontent.appendChild(div);\n\t})();\n\n\tconst renderButtons = (() => {\n\t\tlet sliderControllersContainer = document.querySelector(\n\t\t\t'#slider-controllers-container'\n\t\t);\n\n\t\tconst renderReverseSlideButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = '<';\n\t\t\tbutton.classList.add('slider-controller');\n\t\t\tbutton.id = 'reverse-slide-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.reverseSlide();\n\t\t\t});\n\t\t\tsliderControllersContainer.appendChild(button);\n\t\t})();\n\n\t\tconst advanceSlideButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = '>';\n\t\t\tbutton.classList.add('slider-controller');\n\t\t\tbutton.id = 'advance-slide-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.advanceSlide();\n\t\t\t});\n\t\t\tsliderControllersContainer.appendChild(button);\n\t\t})();\n\t})();\n\n\treturn {\n\t\trenderSlide,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/views/galleryViews.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
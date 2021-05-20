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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_views_galleryViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/galleryViews */ \"./src/views/galleryViews.js\");\n/* harmony import */ var _src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n\n\n\nconst app = (() => {\n\tconst advanceGallery = window.setInterval(() => {\n\t\t_src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__.galleryControllers.nextImage();\n\t}, 6000);\n})();\n\n\n//# sourceURL=webpack://shittykitten/./src/app.js?");

/***/ }),

/***/ "./src/controllers/galleryControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/galleryControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryControllers\": () => (/* binding */ galleryControllers)\n/* harmony export */ });\nconst galleryControllers = (() => {\n\tlet sourceList = [];\n\n\tconst createImageSourceList = (() => {\n\t\tfor (let i = 0; i < 35; i++) {\n\t\t\tlet source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;\n\t\t\tsourceList.push(source);\n\t\t}\n\t})();\n\n\tlet previousIndex = sourceList.length - 1;\n\tlet currentIndex = 0;\n\tlet nextIndex = 1;\n\n\tconst previousImage = () => {\n\t\tif (previousIndex === 0) {\n\t\t\tpreviousIndex = sourceList.length;\n\t\t}\n\t\tif (currentIndex === 0) {\n\t\t\tcurrentIndex = sourceList.length;\n\t\t}\n\t\tif (nextIndex === 0) {\n\t\t\tnextIndex = sourceList.length;\n\t\t}\n\t\tpreviousIndex--;\n\t\tcurrentIndex--;\n\t\tnextIndex--;\n\t\tdocument.querySelector('#previous-image').src = sourceList[previousIndex];\n\t\tdocument.querySelector('#current-image').src = sourceList[currentIndex];\n\t\tdocument.querySelector('#next-image').src = sourceList[nextIndex];\n\t};\n\n\tconst nextImage = () => {\n\t\tif (previousIndex === sourceList.length - 1) {\n\t\t\tpreviousIndex = -1;\n\t\t}\n\t\tif (currentIndex === sourceList.length - 1) {\n\t\t\tcurrentIndex = -1;\n\t\t}\n\t\tif (nextIndex === sourceList.length - 1) {\n\t\t\tnextIndex = -1;\n\t\t}\n\t\tpreviousIndex++;\n\t\tcurrentIndex++;\n\t\tnextIndex++;\n\t\tdocument.querySelector('#previous-image').src = sourceList[previousIndex];\n\t\tdocument.querySelector('#current-image').src = sourceList[currentIndex];\n\t\tdocument.querySelector('#next-image').src = sourceList[nextIndex];\n\t};\n\n\treturn {\n\t\tsourceList,\n\t\tnextImage,\n\t\tpreviousImage,\n\t\tpreviousIndex,\n\t\tcurrentIndex,\n\t\tnextIndex,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/controllers/galleryControllers.js?");

/***/ }),

/***/ "./src/views/galleryViews.js":
/*!***********************************!*\
  !*** ./src/views/galleryViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryViews\": () => (/* binding */ galleryViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n\n\nconst galleryViews = (() => {\n\tlet main = document.querySelector('main');\n\n\tconst renderImageContainers = (() => {\n\t\tconst renderPreviousImageContainer = (() => {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.className = 'image-container';\n\t\t\tdiv.id = 'previous-image-container';\n\n\t\t\tconst renderPreviousImage = (() => {\n\t\t\t\tlet image = document.createElement('img');\n\t\t\t\timage.id = 'previous-image';\n\t\t\t\timage.src =\n\t\t\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.sourceList[_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.previousIndex];\n\t\t\t\tdiv.appendChild(image);\n\t\t\t})();\n\t\t\tmain.appendChild(div);\n\t\t})();\n\t})();\n\n\tconst renderPreviousButton = (() => {\n\t\tlet button = document.createElement('button');\n\t\tbutton.className = 'gallery-controller-button';\n\t\tbutton.id = 'previous-button';\n\t\tbutton.innerText = '<';\n\t\tbutton.addEventListener('click', (e) => {\n\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.previousImage();\n\t\t});\n\t\tmain.appendChild(button);\n\t})();\n\n\tconst renderCurrentImageContainer = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.className = 'image-container';\n\t\tdiv.id = 'current-image-container';\n\n\t\tconst renderPortrait = (() => {\n\t\t\tlet image = document.createElement('img');\n\t\t\timage.id = 'current-image';\n\t\t\timage.src = '../dist/images/markham-self-portrait.png';\n\t\t\tdiv.appendChild(image);\n\t\t})();\n\t\tmain.appendChild(div);\n\t})();\n\n\tconst renderNextButton = (() => {\n\t\tlet button = document.createElement('button');\n\t\tbutton.className = 'gallery-controller-button';\n\t\tbutton.id = 'next-button';\n\t\tbutton.innerText = '>';\n\t\tbutton.addEventListener('click', (e) => {\n\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.nextImage();\n\t\t});\n\t\tmain.appendChild(button);\n\t})();\n\n\tconst renderNextImageContainer = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.className = 'image-container';\n\t\tdiv.id = 'next-image-container';\n\n\t\tconst renderNextImage = (() => {\n\t\t\tlet image = document.createElement('img');\n\t\t\timage.id = 'next-image';\n\t\t\timage.src = _controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.sourceList[_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.nextIndex];\n\t\t\tdiv.appendChild(image);\n\t\t})();\n\t\tmain.appendChild(div);\n\t})();\n\n\treturn {};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/views/galleryViews.js?");

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
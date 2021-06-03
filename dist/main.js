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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _src_views_galleryViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/galleryViews */ \"./src/views/galleryViews.js\");\n/* harmony import */ var _src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n/* harmony import */ var _src_views_aboutViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/views/aboutViews */ \"./src/views/aboutViews.js\");\n/* harmony import */ var _src_views_socialsViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/views/socialsViews */ \"./src/views/socialsViews.js\");\n\n\n\n\n\nconst app = (() => {\n\tconst timer = setInterval(() => {\n\t\t_src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__.galleryControllers.prohibitAbuse();\n\t\t_src_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_1__.galleryControllers.advanceSlide();\n\t}, 6000);\n\n\treturn {\n\t\ttimer,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/app.js?");

/***/ }),

/***/ "./src/controllers/galleryControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/galleryControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryControllers\": () => (/* binding */ galleryControllers)\n/* harmony export */ });\n/* harmony import */ var _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/galleryViews */ \"./src/views/galleryViews.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n\n\n\nconst galleryControllers = (() => {\n\tlet imageSources = [];\n\n\tconst createImageSourceList = (() => {\n\t\tfor (let i = 0; i < 35; i++) {\n\t\t\tlet source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;\n\t\t\timageSources.push(source);\n\t\t}\n\t})();\n\n\tconst prohibitAbuse = () => {\n\t\tclearInterval(_app__WEBPACK_IMPORTED_MODULE_1__.app.timer);\n\t\tlet buttons = document.querySelectorAll('.slider-controller');\n\t\tfor (let i = 0; i < buttons.length; i++) {\n\t\t\tbuttons[i].disabled = true;\n\t\t\tsetTimeout(() => {\n\t\t\t\tbuttons[i].disabled = false;\n\t\t\t}, 1000);\n\t\t}\n\t};\n\n\tconst reverseSlide = () => {\n\t\tlet inTheHole = document.querySelector('#in-the-hole');\n\t\tlet previous = document.querySelector('#previous');\n\t\tlet current = document.querySelector('#current');\n\t\tlet next = document.querySelector('#next');\n\t\tlet onDeck = document.querySelector('#on-deck');\n\t\tlet slider = document.querySelector('#slider');\n\t\tlet slides = document.querySelectorAll('.slide');\n\n\t\tprohibitAbuse();\n\n\t\t_app__WEBPACK_IMPORTED_MODULE_1__.app.timer = setInterval(() => {\n\t\t\tadvanceSlide();\n\t\t}, 6000);\n\n\t\tfor (let i = 0; i < slides.length; i++) {\n\t\t\tslides[i].classList.add('reverse');\n\t\t}\n\n\t\tsetTimeout(() => {\n\t\t\tonDeck.remove();\n\n\t\t\tlet div = _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__.galleryViews.renderSlide();\n\t\t\tlet img = document.createElement('img');\n\t\t\tdiv.dataset.id = Number(inTheHole.dataset.id) - 1;\n\t\t\tif (div.dataset.id == 0) {\n\t\t\t\tdiv.dataset.id = 35;\n\t\t\t}\n\t\t\timg.src = imageSources[div.dataset.id - 1];\n\t\t\tdiv.appendChild(img);\n\t\t\tslider.insertBefore(div, slider.firstChild);\n\t\t\tfor (let i = 0; i < slides.length; i++) {\n\t\t\t\tslides[i].classList.remove('reverse');\n\t\t\t}\n\n\t\t\tdiv.id = 'in-the-hole';\n\t\t\tnext.id = 'on-deck';\n\t\t\tcurrent.id = 'next';\n\t\t\tprevious.id = 'current';\n\t\t\tinTheHole.id = 'previous';\n\t\t}, 1000);\n\t};\n\n\tconst advanceSlide = () => {\n\t\tlet inTheHole = document.querySelector('#in-the-hole');\n\t\tlet previous = document.querySelector('#previous');\n\t\tlet current = document.querySelector('#current');\n\t\tlet next = document.querySelector('#next');\n\t\tlet onDeck = document.querySelector('#on-deck');\n\t\tlet slider = document.querySelector('#slider');\n\t\tlet slides = document.querySelectorAll('.slide');\n\n\t\tprohibitAbuse();\n\n\t\t_app__WEBPACK_IMPORTED_MODULE_1__.app.timer = setInterval(() => {\n\t\t\tadvanceSlide();\n\t\t}, 6000);\n\n\t\tfor (let i = 0; i < slides.length; i++) {\n\t\t\tslides[i].classList.add('advance');\n\t\t}\n\n\t\tsetTimeout(() => {\n\t\t\tinTheHole.remove();\n\n\t\t\tlet div = _views_galleryViews__WEBPACK_IMPORTED_MODULE_0__.galleryViews.renderSlide();\n\t\t\tlet img = document.createElement('img');\n\t\t\tdiv.dataset.id = Number(onDeck.dataset.id) + 1;\n\t\t\tif (div.dataset.id == 36) {\n\t\t\t\tdiv.dataset.id = 1;\n\t\t\t}\n\t\t\timg.src = imageSources[div.dataset.id - 1];\n\t\t\tdiv.appendChild(img);\n\t\t\tslider.appendChild(div);\n\t\t\tfor (let i = 0; i < slides.length; i++) {\n\t\t\t\tslides[i].classList.remove('advance');\n\t\t\t}\n\n\t\t\tdiv.id = 'on-deck';\n\t\t\tprevious.id = 'in-the-hole';\n\t\t\tcurrent.id = 'previous';\n\t\t\tnext.id = 'current';\n\t\t\tonDeck.id = 'next';\n\t\t}, 1000);\n\t};\n\n\treturn {\n\t\timageSources,\n\t\tprohibitAbuse,\n\t\treverseSlide,\n\t\tadvanceSlide,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/controllers/galleryControllers.js?");

/***/ }),

/***/ "./src/views/aboutViews.js":
/*!*********************************!*\
  !*** ./src/views/aboutViews.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutViews\": () => (/* binding */ aboutViews)\n/* harmony export */ });\nconst aboutViews = (() => {\n\tconst about = document.querySelector('#about');\n\n\tconst renderAlphaContainers = (() => {\n\t\tfor (let i = 0; i < 4; i++) {\n\t\t\tconst div = document.createElement('div');\n\n\t\t\tif (i === 0) {\n\t\t\t\tdiv.innerText = 'About';\n\t\t\t}\n\t\t\tdiv.classList.add('about-alpha-container');\n\t\t\tdiv.id = `about-alpha-container-${i + 1}`;\n\t\t\tabout.appendChild(div);\n\t\t}\n\t})();\n\treturn {};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/views/aboutViews.js?");

/***/ }),

/***/ "./src/views/galleryViews.js":
/*!***********************************!*\
  !*** ./src/views/galleryViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryViews\": () => (/* binding */ galleryViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/galleryControllers */ \"./src/controllers/galleryControllers.js\");\n\n\nconst galleryViews = (() => {\n\tlet content = document.querySelector('#content');\n\tlet gallery = document.querySelector('#gallery');\n\n\tconst renderSlider = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('container');\n\t\tdiv.id = 'slider';\n\t\tgallery.appendChild(div);\n\t})();\n\n\tconst renderSlide = () => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('slide');\n\t\treturn div;\n\t};\n\n\tconst renderSlides = (() => {\n\t\tfor (let i = 0; i < 5; i++) {\n\t\t\tlet div = renderSlide();\n\t\t\tlet img = document.createElement('img');\n\t\t\timg.src = _controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.imageSources[i];\n\t\t\tdiv.append(img);\n\n\t\t\tdiv.dataset.id = `${i + 1}`;\n\n\t\t\tif (i === 0) {\n\t\t\t\tdiv.id = 'in-the-hole';\n\t\t\t}\n\t\t\tif (i === 1) {\n\t\t\t\tdiv.id = 'previous';\n\t\t\t}\n\t\t\tif (i === 2) {\n\t\t\t\tdiv.id = 'current';\n\t\t\t}\n\t\t\tif (i === 3) {\n\t\t\t\tdiv.id = 'next';\n\t\t\t}\n\t\t\tif (i === 4) {\n\t\t\t\tdiv.id = 'on-deck';\n\t\t\t}\n\t\t\tslider.appendChild(div);\n\t\t}\n\t})();\n\n\tconst renderSliderControllersContainer = (() => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('container');\n\t\tdiv.id = 'slider-controllers-container';\n\t\tgallery.after(div);\n\t})();\n\n\tconst renderButtons = (() => {\n\t\tlet sliderControllersContainer = document.querySelector(\n\t\t\t'#slider-controllers-container'\n\t\t);\n\n\t\tconst renderReverseSlideButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = '<';\n\t\t\tbutton.classList.add('slider-controller');\n\t\t\tbutton.id = 'reverse-slide-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.reverseSlide();\n\t\t\t});\n\t\t\tsliderControllersContainer.appendChild(button);\n\t\t})();\n\n\t\tconst advanceSlideButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = '>';\n\t\t\tbutton.classList.add('slider-controller');\n\t\t\tbutton.id = 'advance-slide-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_galleryControllers__WEBPACK_IMPORTED_MODULE_0__.galleryControllers.advanceSlide();\n\t\t\t});\n\t\t\tsliderControllersContainer.appendChild(button);\n\t\t})();\n\t})();\n\n\treturn {\n\t\trenderSlide,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/views/galleryViews.js?");

/***/ }),

/***/ "./src/views/socialsViews.js":
/*!***********************************!*\
  !*** ./src/views/socialsViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socialsViews\": () => (/* binding */ socialsViews)\n/* harmony export */ });\nconst socialsViews = (() => {\n\tconst socials = document.querySelector('#socials');\n\n\tconst renderSocialsContainer = (() => {\n\t\tconst renderTitle = (() => {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.id = 'socials-title-container';\n\t\t\tsocials.appendChild(div);\n\n\t\t\tlet title = document.createElement('div');\n\t\t\ttitle.id = 'socials-title';\n\t\t\ttitle.innerText = 'Socials';\n\t\t\tdiv.appendChild(title);\n\t\t})();\n\n\t\tconst renderLinks = (() => {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.classList.add('container');\n\t\t\tdiv.id = 'socials-links-container';\n\t\t\tsocials.appendChild(div);\n\n\t\t\tconst renderInstagramLink = (() => {\n\t\t\t\tlet img = document.createElement('img');\n\t\t\t\timg.id = 'instagram-link';\n\t\t\t\timg.alt = 'insta';\n\t\t\t\timg.src =\n\t\t\t\t\t'https://thedreadnoughts.com/wp-content/uploads/2018/06/instagram-logo-white-on-black.png';\n\t\t\t\tdiv.appendChild(img);\n\t\t\t})();\n\n\t\t\tconst renderFacebookLink = (() => {\n\t\t\t\tlet img = document.createElement('img');\n\t\t\t\timg.id = 'facebook-link';\n\t\t\t\timg.alt = 'facebook';\n\t\t\t\timg.src = 'https://www.bastrucks.com/images/bastrucks/facebook.png';\n\t\t\t\tdiv.appendChild(img);\n\t\t\t})();\n\n\t\t\tconst renderVenmoLogo = (() => {\n\t\t\t\tlet imageContainer = document.createElement('div');\n\t\t\t\timageContainer.id = 'venmo-link';\n\t\t\t\tdiv.appendChild(imageContainer);\n\t\t\t\tlet img = document.createElement('img');\n\t\t\t\timg.alt = 'venmo';\n\t\t\t\timg.src =\n\t\t\t\t\t'https://i2.wp.com/voixnoire.com/wp-content/uploads/2019/01/venmo-black.png?resize=259%2C275&ssl=1';\n\t\t\t\timageContainer.appendChild(img);\n\t\t\t})();\n\t\t})();\n\t})();\n\treturn {};\n})();\n\n\n\n\n//# sourceURL=webpack://shittykitten/./src/views/socialsViews.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = ('Contact');
    mainContent.append(title);


    return mainContent;
}

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignRender: () => (/* binding */ assignRender),
/* harmony export */   "default": () => (/* binding */ header),
/* harmony export */   setCurrentNavBtn: () => (/* binding */ setCurrentNavBtn)
/* harmony export */ });
function header() {
    // render header section
    const header = document.createElement('div');
    header.classList.add('header');
    
    // navbar
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    // creating buttons for nav bar
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    navBar.appendChild(homeBtn);
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Menu';
    navBar.appendChild(menuBtn);
    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact-btn');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'Contact';
    navBar.appendChild(contactBtn);
   
    header.appendChild(navBar);
    return header;
}

// function that will set give button with 'id' the class of 'current'
// will also remove 'current' from all other nav buttons'
function setCurrentNavBtn(id)
{
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('current)'));
    const currentBtn = document.querySelector(`#${id}`);
    currentBtn.classList.add('current');
}

// function that assigns button with 'id' to call 'page' to render a page
function assignRender(id, page){
    const content = document.querySelector('.content');
    const btn = document.querySelector(`#${id}`);
    btn.addEventListener('click', () => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) content.removeChild(mainContent);
        content.appendChild(page());
    });
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/pages/header.js");



function home() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    (0,_header__WEBPACK_IMPORTED_MODULE_1__.setCurrentNavBtn)('home-btn');
    
    const foodImg = new Image();
    foodImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__; 
    mainContent.appendChild(foodImg);
    
    // setting text content
    const summary = document.createElement('p');
    summary.textContent = 
        'Founded in 1996, Murder King started as a local '+
        'franchise of the popular fast food chain B****r K**g. '+
        'Ever since then, Murder King has become an local hotspot '+
        'which has nothing to do with the with the increasing number of '+
        'disappearances in the area';
    mainContent.appendChild(summary);
    
    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    schedule.textContent = 'Every day from 1am to 4am';
    mainContent.appendChild(schedule);

    return mainContent;
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_steve_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/steve.jpg */ "./src/img/steve.jpg");
/* harmony import */ var _img_donna_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/donna.jpg */ "./src/img/donna.jpg");
/* harmony import */ var _img_marco_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/marco.jpg */ "./src/img/marco.jpg");




// factory function for a menuItem
const menuItem = (name, imgSrc, desc, price) => {
    const photo = new Image();
    photo.src = imgSrc;
    return {name, photo, desc, price}
}

function menu() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = ('Menu');
    mainContent.append(title);

    // manually adding menu items
    const items = [
        menuItem(
            'The Steve', _img_steve_jpg__WEBPACK_IMPORTED_MODULE_0__,

            'Sourced from the finest surburb in Wisconsin, the Steve ' +
            'is a well aged cut that loved playing golf on the weekends ' +
            'It is served with your choice of fries or onion rings',

            '$777'
        ),
        menuItem(
            'The Donna', _img_donna_jpg__WEBPACK_IMPORTED_MODULE_1__,

            'Sourced from the lovely town of New Orleans, ' + 
            'the Donna is fried with a light and crispy beer batter' +
            'with a side of tartar sauce. Its happy, family-oriented ' +
            'flavor makes it a fan favorite',

            '$1234'
        ),
        menuItem(
            'The Marco', _img_marco_jpg__WEBPACK_IMPORTED_MODULE_2__,

            'Sourced from the warm region of Southern texas, ' + 
            'the Marco is smoked low and slow over a bed of hickory wood chips'+
            'and is served on a potato bun.' + 
            'Having gone to countless Mavericks games, the Marco truly '+
            'embodies that classic Texas flavor',

            '$1337'
        ),
    ]
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // render each item object
    items.forEach(item => {
        const entry = document.createElement('div');
        const name = document.createElement('h2');
        const desc = document.createElement('p');
        const price = document.createElement('p');
    
        entry.classList.add('menu-item');
        name.classList.add('item-name');
        desc.classList.add('item-desc');
        price.classList.add('item-price');
        
        name.textContent = item.name;
        desc.textContent = item.desc;
        price.textContent = item.price;

        entry.appendChild(name);
        entry.appendChild(item.photo)
        entry.appendChild(desc);
        entry.appendChild(price);
    
        menu.appendChild(entry)
    })

    mainContent.appendChild(menu);
    
    return mainContent;
}

/***/ }),

/***/ "./src/img/donna.jpg":
/*!***************************!*\
  !*** ./src/img/donna.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68b06b6ab7805b026798.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b74797e288fbf0c86cb.png";

/***/ }),

/***/ "./src/img/marco.jpg":
/*!***************************!*\
  !*** ./src/img/marco.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6104a5e9bc88d1c8fd0a.jpg";

/***/ }),

/***/ "./src/img/steve.jpg":
/*!***************************!*\
  !*** ./src/img/steve.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcfe88af4a3ebe0eac71.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/header.js */ "./src/pages/header.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");







console.log('connected');

const content = document.querySelector('.content');
content.appendChild((0,_pages_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
// assigning each page to a nav button
(0,_pages_header_js__WEBPACK_IMPORTED_MODULE_0__.assignRender)('home-btn',  _pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_pages_header_js__WEBPACK_IMPORTED_MODULE_0__.assignRender)('menu-btn', _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,_pages_header_js__WEBPACK_IMPORTED_MODULE_0__.assignRender)('contact-btn', _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
content.appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEdBQUc7QUFDckQ7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUM7QUFDUzs7QUFFN0I7QUFDZjtBQUNBOztBQUVBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0IsMENBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnFDO0FBQ0E7QUFDQTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBSzs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBSzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUFLOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0M7QUFDVTs7QUFFZDtBQUNBO0FBQ007O0FBRXhDOztBQUVBO0FBQ0Esb0JBQW9CLDREQUFNO0FBQzFCO0FBQ0EsOERBQVksY0FBYyxzREFBSTtBQUM5QiwrREFBWSxhQUFhLHNEQUFJO0FBQzdCLDhEQUFZLGdCQUFnQix5REFBTztBQUNuQyxvQkFBb0IsMERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICgnQ29udGFjdCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZCh0aXRsZSk7XG5cblxuICAgIHJldHVybiBtYWluQ29udGVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgLy8gcmVuZGVyIGhlYWRlciBzZWN0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIFxuICAgIC8vIG5hdmJhclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICAvLyBjcmVhdGluZyBidXR0b25zIGZvciBuYXYgYmFyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYnRuJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG4vLyBmdW5jdGlvbiB0aGF0IHdpbGwgc2V0IGdpdmUgYnV0dG9uIHdpdGggJ2lkJyB0aGUgY2xhc3Mgb2YgJ2N1cnJlbnQnXG4vLyB3aWxsIGFsc28gcmVtb3ZlICdjdXJyZW50JyBmcm9tIGFsbCBvdGhlciBuYXYgYnV0dG9ucydcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50TmF2QnRuKGlkKVxue1xuICAgIGNvbnN0IG5hdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuICAgIG5hdkJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQpJykpO1xuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbn1cblxuLy8gZnVuY3Rpb24gdGhhdCBhc3NpZ25zIGJ1dHRvbiB3aXRoICdpZCcgdG8gY2FsbCAncGFnZScgdG8gcmVuZGVyIGEgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblJlbmRlcihpZCwgcGFnZSl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKG1haW5Db250ZW50KSBjb250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKCkpO1xuICAgIH0pO1xufSIsImltcG9ydCBGb29kIGZyb20gJy4uL2ltZy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50TmF2QnRuIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgICBzZXRDdXJyZW50TmF2QnRuKCdob21lLWJ0bicpO1xuICAgIFxuICAgIGNvbnN0IGZvb2RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSW1nLnNyYyA9IEZvb2Q7IFxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb2RJbWcpO1xuICAgIFxuICAgIC8vIHNldHRpbmcgdGV4dCBjb250ZW50XG4gICAgY29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdW1tYXJ5LnRleHRDb250ZW50ID0gXG4gICAgICAgICdGb3VuZGVkIGluIDE5OTYsIE11cmRlciBLaW5nIHN0YXJ0ZWQgYXMgYSBsb2NhbCAnK1xuICAgICAgICAnZnJhbmNoaXNlIG9mIHRoZSBwb3B1bGFyIGZhc3QgZm9vZCBjaGFpbiBCKioqKnIgSyoqZy4gJytcbiAgICAgICAgJ0V2ZXIgc2luY2UgdGhlbiwgTXVyZGVyIEtpbmcgaGFzIGJlY29tZSBhbiBsb2NhbCBob3RzcG90ICcrXG4gICAgICAgICd3aGljaCBoYXMgbm90aGluZyB0byBkbyB3aXRoIHRoZSB3aXRoIHRoZSBpbmNyZWFzaW5nIG51bWJlciBvZiAnK1xuICAgICAgICAnZGlzYXBwZWFyYW5jZXMgaW4gdGhlIGFyZWEnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHN1bW1hcnkpO1xuICAgIFxuICAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWR1bGUuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGUnKTtcbiAgICBzY2hlZHVsZS50ZXh0Q29udGVudCA9ICdFdmVyeSBkYXkgZnJvbSAxYW0gdG8gNGFtJztcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59IiwiaW1wb3J0IFN0ZXZlIGZyb20gJy4uL2ltZy9zdGV2ZS5qcGcnO1xuaW1wb3J0IERvbm5hIGZyb20gJy4uL2ltZy9kb25uYS5qcGcnO1xuaW1wb3J0IE1hcmNvIGZyb20gJy4uL2ltZy9tYXJjby5qcGcnO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIGZvciBhIG1lbnVJdGVtXG5jb25zdCBtZW51SXRlbSA9IChuYW1lLCBpbWdTcmMsIGRlc2MsIHByaWNlKSA9PiB7XG4gICAgY29uc3QgcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBwaG90by5zcmMgPSBpbWdTcmM7XG4gICAgcmV0dXJuIHtuYW1lLCBwaG90bywgZGVzYywgcHJpY2V9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICgnTWVudScpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZCh0aXRsZSk7XG5cbiAgICAvLyBtYW51YWxseSBhZGRpbmcgbWVudSBpdGVtc1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICdUaGUgU3RldmUnLCBTdGV2ZSxcblxuICAgICAgICAgICAgJ1NvdXJjZWQgZnJvbSB0aGUgZmluZXN0IHN1cmJ1cmIgaW4gV2lzY29uc2luLCB0aGUgU3RldmUgJyArXG4gICAgICAgICAgICAnaXMgYSB3ZWxsIGFnZWQgY3V0IHRoYXQgbG92ZWQgcGxheWluZyBnb2xmIG9uIHRoZSB3ZWVrZW5kcyAnICtcbiAgICAgICAgICAgICdJdCBpcyBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBmcmllcyBvciBvbmlvbiByaW5ncycsXG5cbiAgICAgICAgICAgICckNzc3J1xuICAgICAgICApLFxuICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICdUaGUgRG9ubmEnLCBEb25uYSxcblxuICAgICAgICAgICAgJ1NvdXJjZWQgZnJvbSB0aGUgbG92ZWx5IHRvd24gb2YgTmV3IE9ybGVhbnMsICcgKyBcbiAgICAgICAgICAgICd0aGUgRG9ubmEgaXMgZnJpZWQgd2l0aCBhIGxpZ2h0IGFuZCBjcmlzcHkgYmVlciBiYXR0ZXInICtcbiAgICAgICAgICAgICd3aXRoIGEgc2lkZSBvZiB0YXJ0YXIgc2F1Y2UuIEl0cyBoYXBweSwgZmFtaWx5LW9yaWVudGVkICcgK1xuICAgICAgICAgICAgJ2ZsYXZvciBtYWtlcyBpdCBhIGZhbiBmYXZvcml0ZScsXG5cbiAgICAgICAgICAgICckMTIzNCdcbiAgICAgICAgKSxcbiAgICAgICAgbWVudUl0ZW0oXG4gICAgICAgICAgICAnVGhlIE1hcmNvJywgTWFyY28sXG5cbiAgICAgICAgICAgICdTb3VyY2VkIGZyb20gdGhlIHdhcm0gcmVnaW9uIG9mIFNvdXRoZXJuIHRleGFzLCAnICsgXG4gICAgICAgICAgICAndGhlIE1hcmNvIGlzIHNtb2tlZCBsb3cgYW5kIHNsb3cgb3ZlciBhIGJlZCBvZiBoaWNrb3J5IHdvb2QgY2hpcHMnK1xuICAgICAgICAgICAgJ2FuZCBpcyBzZXJ2ZWQgb24gYSBwb3RhdG8gYnVuLicgKyBcbiAgICAgICAgICAgICdIYXZpbmcgZ29uZSB0byBjb3VudGxlc3MgTWF2ZXJpY2tzIGdhbWVzLCB0aGUgTWFyY28gdHJ1bHkgJytcbiAgICAgICAgICAgICdlbWJvZGllcyB0aGF0IGNsYXNzaWMgVGV4YXMgZmxhdm9yJyxcblxuICAgICAgICAgICAgJyQxMzM3J1xuICAgICAgICApLFxuICAgIF1cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAvLyByZW5kZXIgZWFjaCBpdGVtIG9iamVjdFxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAgICAgXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgICAgICBlbnRyeS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgZW50cnkuYXBwZW5kQ2hpbGQoaXRlbS5waG90bylcbiAgICAgICAgZW50cnkuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGVudHJ5LmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChlbnRyeSlcbiAgICB9KVxuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vcGFnZXMvaGVhZGVyLmpzJ1xuaW1wb3J0IHsgYXNzaWduUmVuZGVyIH0gZnJvbSAnLi9wYWdlcy9oZWFkZXIuanMnXG5cbmltcG9ydCBob21lIGZyb20gJy4vcGFnZXMvaG9tZS5qcydcbmltcG9ydCBtZW51IGZyb20gJy4vcGFnZXMvbWVudS5qcydcbmltcG9ydCBjb250YWN0IGZyb20gJy4vcGFnZXMvY29udGFjdC5qcydcblxuY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuLy8gYXNzaWduaW5nIGVhY2ggcGFnZSB0byBhIG5hdiBidXR0b25cbmFzc2lnblJlbmRlcignaG9tZS1idG4nLCAgaG9tZSlcbmFzc2lnblJlbmRlcignbWVudS1idG4nLCBtZW51KTtcbmFzc2lnblJlbmRlcignY29udGFjdC1idG4nLCBjb250YWN0KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
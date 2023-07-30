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
    title.classList.add('')
    return mainContent;

    return container;
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
const menuItem = (name, desc, price) => {
    return {name, desc, price}
}

function menu() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    // array of menu item objects
    const items = [
        menuItem(
            'The Steve',

            'Sourced from the finest surburb in Wisconsin, the Steve ' +
            'is a well aged cut that loved playing golf on the weekends ' +
            'It is served with your choice of fries or onion rings',

            '$777'
        ),
        menuItem(
            'The Donna',

            'Sourced from the lovely town of New Orleans, ' + 
            'the Donna is fried with a light and crispy beer batter' +
            'with a side of tartar sauce. Its happy, family-oriented ' +
            'flavor makes it a fan favorite',

            '$1234'
        ),
        menuItem(
            'The Marco',

            'Sourced from the warm region of Southern texas, ' + 
            'the Marco is smoked low and slow over a bed of hickory wood chips'+
            'and is served on a potato bun.' + 
            'Having gone to countless Mavericks games, the Marco truly '+
            'embodies that classic Texas flavor',

            '$1337'
        ),
    ]
    // adding menuItem object data onto page
    const menu = document.createElement('div');
    menu.classList.add('menu');

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
        entry.appendChild(desc);
        entry.appendChild(price);
    
        menu.appendChild(entry)
    })

    mainContent.appendChild(menu);

    
    
    return mainContent;
}

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b74797e288fbf0c86cb.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEdBQUc7QUFDckQ7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUM7QUFDUzs7QUFFN0I7QUFDZjtBQUNBOztBQUVBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0IsMENBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0EsWUFBWTtBQUNaOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJzQztBQUNVOztBQUVkO0FBQ0E7QUFDTTs7QUFFeEM7O0FBRUE7QUFDQSxvQkFBb0IsNERBQU07QUFDMUI7QUFDQSw4REFBWSxjQUFjLHNEQUFJO0FBQzlCLCtEQUFZLGFBQWEsc0RBQUk7QUFDN0IsOERBQVksZ0JBQWdCLHlEQUFPO0FBQ25DLG9CQUFvQiwwREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJycpXG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgLy8gcmVuZGVyIGhlYWRlciBzZWN0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIFxuICAgIC8vIG5hdmJhclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICAvLyBjcmVhdGluZyBidXR0b25zIGZvciBuYXYgYmFyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYnRuJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG4vLyBmdW5jdGlvbiB0aGF0IHdpbGwgc2V0IGdpdmUgYnV0dG9uIHdpdGggJ2lkJyB0aGUgY2xhc3Mgb2YgJ2N1cnJlbnQnXG4vLyB3aWxsIGFsc28gcmVtb3ZlICdjdXJyZW50JyBmcm9tIGFsbCBvdGhlciBuYXYgYnV0dG9ucydcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50TmF2QnRuKGlkKVxue1xuICAgIGNvbnN0IG5hdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuICAgIG5hdkJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQpJykpO1xuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbn1cblxuLy8gZnVuY3Rpb24gdGhhdCBhc3NpZ25zIGJ1dHRvbiB3aXRoICdpZCcgdG8gY2FsbCAncGFnZScgdG8gcmVuZGVyIGEgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblJlbmRlcihpZCwgcGFnZSl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKG1haW5Db250ZW50KSBjb250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKCkpO1xuICAgIH0pO1xufSIsImltcG9ydCBGb29kIGZyb20gJy4uL2ltZy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50TmF2QnRuIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgICBzZXRDdXJyZW50TmF2QnRuKCdob21lLWJ0bicpO1xuICAgIFxuICAgIGNvbnN0IGZvb2RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSW1nLnNyYyA9IEZvb2Q7IFxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb2RJbWcpO1xuICAgIFxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VtbWFyeS50ZXh0Q29udGVudCA9IFxuICAgICAgICAnRm91bmRlZCBpbiAxOTk2LCBNdXJkZXIgS2luZyBzdGFydGVkIGFzIGEgbG9jYWwgJytcbiAgICAgICAgJ2ZyYW5jaGlzZSBvZiB0aGUgcG9wdWxhciBmYXN0IGZvb2QgY2hhaW4gQioqKipyIEsqKmcuICcrXG4gICAgICAgICdFdmVyIHNpbmNlIHRoZW4sIE11cmRlciBLaW5nIGhhcyBiZWNvbWUgYW4gbG9jYWwgaG90c3BvdCAnK1xuICAgICAgICAnd2hpY2ggaGFzIG5vdGhpbmcgdG8gZG8gd2l0aCB0aGUgd2l0aCB0aGUgaW5jcmVhc2luZyBudW1iZXIgb2YgJytcbiAgICAgICAgJ2Rpc2FwcGVhcmFuY2VzIGluIHRoZSBhcmVhJztcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcbiAgICBcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlJyk7XG4gICAgc2NoZWR1bGUudGV4dENvbnRlbnQgPSAnRXZlcnkgZGF5IGZyb20gMWFtIHRvIDRhbSc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xufSIsImNvbnN0IG1lbnVJdGVtID0gKG5hbWUsIGRlc2MsIHByaWNlKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBkZXNjLCBwcmljZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gICAgLy8gYXJyYXkgb2YgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgbWVudUl0ZW0oXG4gICAgICAgICAgICAnVGhlIFN0ZXZlJyxcblxuICAgICAgICAgICAgJ1NvdXJjZWQgZnJvbSB0aGUgZmluZXN0IHN1cmJ1cmIgaW4gV2lzY29uc2luLCB0aGUgU3RldmUgJyArXG4gICAgICAgICAgICAnaXMgYSB3ZWxsIGFnZWQgY3V0IHRoYXQgbG92ZWQgcGxheWluZyBnb2xmIG9uIHRoZSB3ZWVrZW5kcyAnICtcbiAgICAgICAgICAgICdJdCBpcyBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBmcmllcyBvciBvbmlvbiByaW5ncycsXG5cbiAgICAgICAgICAgICckNzc3J1xuICAgICAgICApLFxuICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICdUaGUgRG9ubmEnLFxuXG4gICAgICAgICAgICAnU291cmNlZCBmcm9tIHRoZSBsb3ZlbHkgdG93biBvZiBOZXcgT3JsZWFucywgJyArIFxuICAgICAgICAgICAgJ3RoZSBEb25uYSBpcyBmcmllZCB3aXRoIGEgbGlnaHQgYW5kIGNyaXNweSBiZWVyIGJhdHRlcicgK1xuICAgICAgICAgICAgJ3dpdGggYSBzaWRlIG9mIHRhcnRhciBzYXVjZS4gSXRzIGhhcHB5LCBmYW1pbHktb3JpZW50ZWQgJyArXG4gICAgICAgICAgICAnZmxhdm9yIG1ha2VzIGl0IGEgZmFuIGZhdm9yaXRlJyxcblxuICAgICAgICAgICAgJyQxMjM0J1xuICAgICAgICApLFxuICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICdUaGUgTWFyY28nLFxuXG4gICAgICAgICAgICAnU291cmNlZCBmcm9tIHRoZSB3YXJtIHJlZ2lvbiBvZiBTb3V0aGVybiB0ZXhhcywgJyArIFxuICAgICAgICAgICAgJ3RoZSBNYXJjbyBpcyBzbW9rZWQgbG93IGFuZCBzbG93IG92ZXIgYSBiZWQgb2YgaGlja29yeSB3b29kIGNoaXBzJytcbiAgICAgICAgICAgICdhbmQgaXMgc2VydmVkIG9uIGEgcG90YXRvIGJ1bi4nICsgXG4gICAgICAgICAgICAnSGF2aW5nIGdvbmUgdG8gY291bnRsZXNzIE1hdmVyaWNrcyBnYW1lcywgdGhlIE1hcmNvIHRydWx5ICcrXG4gICAgICAgICAgICAnZW1ib2RpZXMgdGhhdCBjbGFzc2ljIFRleGFzIGZsYXZvcicsXG5cbiAgICAgICAgICAgICckMTMzNydcbiAgICAgICAgKSxcbiAgICBdXG4gICAgLy8gYWRkaW5nIG1lbnVJdGVtIG9iamVjdCBkYXRhIG9udG8gcGFnZVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAgICAgXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgICAgICBlbnRyeS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgZW50cnkuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGVudHJ5LmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChlbnRyeSlcbiAgICB9KVxuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBcbiAgICBcbiAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBoZWFkZXIgZnJvbSAnLi9wYWdlcy9oZWFkZXIuanMnXG5pbXBvcnQgeyBhc3NpZ25SZW5kZXIgfSBmcm9tICcuL3BhZ2VzL2hlYWRlci5qcydcblxuaW1wb3J0IGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lLmpzJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9wYWdlcy9jb250YWN0LmpzJ1xuXG5jb25zb2xlLmxvZygnY29ubmVjdGVkJyk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4vLyBhc3NpZ25pbmcgZWFjaCBwYWdlIHRvIGEgbmF2IGJ1dHRvblxuYXNzaWduUmVuZGVyKCdob21lLWJ0bicsICBob21lKVxuYXNzaWduUmVuZGVyKCdtZW51LWJ0bicsIG1lbnUpO1xuYXNzaWduUmVuZGVyKCdjb250YWN0LWJ0bicsIGNvbnRhY3QpO1xuY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
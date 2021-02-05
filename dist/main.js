/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/', 'home', function () {
  this.where = 'here';
});
(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/ex1', 'example1', function () {
  this.title = 'Example 1';
});
(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/ex2', 'example2', function () {
  var _this = this;

  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', function () {
    _this.counter += 1;

    _this.$refresh();
  });
});
var obj = {
  a: "alpha",
  b: "bravo"
};

var newObj = _objectSpread(_objectSpread({}, obj), {}, {
  c: 'charlie'
});

console.log(newObj);
console.log(obj);
(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('*', '404', function () {});

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "engine": () => (/* binding */ engine)
/* harmony export */ });
// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
var cache = {};
var engine = function engine(str, data) {
  // Figure out if we're getting a template, or if we need to
  // load the template - and be sure to cache the result.
  var fn = !/\W/.test(str) ? cache[str] = cache[str] || engine(document.getElementById(str).innerHTML) : // Generate a reusable function that will serve as a template
  // generator (and which will be cached).
  new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + // Introduce the data as local variables using with(){}
  "with(obj){p.push('" + // Convert the template into pure JavaScript
  str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"); // Provide some basic currying to the user

  return data ? fn(data) : fn;
};

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
// JavaScript router in 20 lines
// Joakim Carlstein - https://joakim.beng.se/

var el = null;
var events = [];
var routes = {};
var route = function route(path, templateId, controller) {
  var listeners = [];

  controller.prototype.$on = function (selector, evt, handler) {
    return events.push([selector, evt, handler]);
  };

  controller.prototype.$refresh = function () {
    return listeners.forEach(function (fn) {
      return fn();
    });
  };

  routes[path] = {
    templateId: templateId,
    controller: controller,
    onRefresh: listeners.push.bind(listeners)
  };
};

var forEachEvent = function forEachEvent(fnName) {
  for (var i = 0; i < events.length; i++) {
    var els = el.querySelectorAll(events[i][0]);

    for (var j = 0; j < els.length; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
};

var router = function router() {
  // Lazy load view element:
  el = el || document.getElementById('app'); // Remove current event listeners:

  forEachEvent('removeEventListener'); // Clear events, to prepare for next render:

  events = []; // Current route url (getting rid of '#' in hash as well):

  var url = location.hash.slice(1) || '/'; // Get route by url or fallback if it does not exist:

  var route = routes[url] || routes['*'];

  if (route && route.controller) {
    var ctrl = new route.controller(); // Listen on route refreshes:

    route.onRefresh(function () {
      forEachEvent('removeEventListener'); // Render route template with John Resig's template engine:

      el.innerHTML = (0,_engine__WEBPACK_IMPORTED_MODULE_0__.engine)(route.templateId, ctrl);
      forEachEvent('addEventListener');
    }); // Trigger the first refresh:

    ctrl.$refresh();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsicm91dGUiLCJ3aGVyZSIsInRpdGxlIiwiY291bnRlciIsIiRvbiIsIiRyZWZyZXNoIiwib2JqIiwiYSIsImIiLCJuZXdPYmoiLCJjIiwiY29uc29sZSIsImxvZyIsImNhY2hlIiwiZW5naW5lIiwic3RyIiwiZGF0YSIsImZuIiwidGVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJGdW5jdGlvbiIsInJlcGxhY2UiLCJzcGxpdCIsImpvaW4iLCJlbCIsImV2ZW50cyIsInJvdXRlcyIsInBhdGgiLCJ0ZW1wbGF0ZUlkIiwiY29udHJvbGxlciIsImxpc3RlbmVycyIsInByb3RvdHlwZSIsInNlbGVjdG9yIiwiZXZ0IiwiaGFuZGxlciIsInB1c2giLCJmb3JFYWNoIiwib25SZWZyZXNoIiwiYmluZCIsImZvckVhY2hFdmVudCIsImZuTmFtZSIsImkiLCJsZW5ndGgiLCJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaiIsImFwcGx5Iiwic2xpY2UiLCJyb3V0ZXIiLCJ1cmwiLCJsb2NhdGlvbiIsImhhc2giLCJjdHJsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJt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QSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3V0ZSB9IGZyb20gJy4vcm91dGVyJztcblxucm91dGUoJy8nLCAnaG9tZScsIGZ1bmN0aW9uKCkge1xuICB0aGlzLndoZXJlID0gJ2hlcmUnO1xufSk7XG5cbnJvdXRlKCcvZXgxJywgJ2V4YW1wbGUxJywgZnVuY3Rpb24oKSB7XG4gIHRoaXMudGl0bGUgPSAnRXhhbXBsZSAxJztcbn0pO1xuXG5yb3V0ZSgnL2V4MicsICdleGFtcGxlMicsIGZ1bmN0aW9uKCkge1xuICB0aGlzLnRpdGxlID0gJ0V4YW1wbGUgMic7XG4gIHRoaXMuY291bnRlciA9IDA7XG4gIHRoaXMuJG9uKCcubXktYnV0dG9uJywgJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgIHRoaXMuJHJlZnJlc2goKTtcbiAgfSk7XG59KTtcblxuXG5jb25zdCBvYmogPSB7IGE6IFwiYWxwaGFcIiwgYjogXCJicmF2b1wifVxuY29uc3QgbmV3T2JqID0geyAuLi5vYmosIGM6ICdjaGFybGllJ31cbmNvbnNvbGUubG9nKG5ld09iaik7XG5jb25zb2xlLmxvZyhvYmopO1xucm91dGUoJyonLCAnNDA0JywgZnVuY3Rpb24gKCkge30pO1xuIiwiLy8gU2ltcGxlIEphdmFTY3JpcHQgVGVtcGxhdGluZ1xuLy8gSm9obiBSZXNpZyAtIGh0dHBzOi8vam9obnJlc2lnLmNvbS8gLSBNSVQgTGljZW5zZWRcbmNvbnN0IGNhY2hlID0ge307XG5cbmV4cG9ydCBjb25zdCBlbmdpbmUgPSAoc3RyLCBkYXRhKSA9PiB7XG4gIC8vIEZpZ3VyZSBvdXQgaWYgd2UncmUgZ2V0dGluZyBhIHRlbXBsYXRlLCBvciBpZiB3ZSBuZWVkIHRvXG4gIC8vIGxvYWQgdGhlIHRlbXBsYXRlIC0gYW5kIGJlIHN1cmUgdG8gY2FjaGUgdGhlIHJlc3VsdC5cbiAgY29uc3QgZm4gPSAhL1xcVy8udGVzdChzdHIpID8gY2FjaGVbc3RyXSA9IGNhY2hlW3N0cl0gfHwgZW5naW5lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XG4gICAgLy8gR2VuZXJhdGUgYSByZXVzYWJsZSBmdW5jdGlvbiB0aGF0IHdpbGwgc2VydmUgYXMgYSB0ZW1wbGF0ZVxuICAgIC8vIGdlbmVyYXRvciAoYW5kIHdoaWNoIHdpbGwgYmUgY2FjaGVkKS5cbiAgICBuZXcgRnVuY3Rpb24oXCJvYmpcIixcbiAgICAgIFwidmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307XCIgKyAgICAgICAgICAgICBcbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuICAgICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICAgIHN0clxuICAgICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgXCIgXCIpXG4gICAgICAgIC5zcGxpdChcIjwlXCIpLmpvaW4oXCJcXHRcIilcbiAgICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgXCIkMVxcclwiKVxuICAgICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgXCInLCQxLCdcIilcbiAgICAgICAgLnNwbGl0KFwiXFx0XCIpLmpvaW4oXCInKTtcIilcbiAgICAgICAgLnNwbGl0KFwiJT5cIikuam9pbihcInAucHVzaCgnXCIpXG4gICAgICAgIC5zcGxpdChcIlxcclwiKS5qb2luKFwiXFxcXCdcIilcbiAgICArIFwiJyk7fXJldHVybiBwLmpvaW4oJycpO1wiKTtcbiAgIFxuICAvLyBQcm92aWRlIHNvbWUgYmFzaWMgY3VycnlpbmcgdG8gdGhlIHVzZXJcbiAgcmV0dXJuIGRhdGEgPyBmbiggZGF0YSApIDogZm47XG59O1xuIiwiLy8gSmF2YVNjcmlwdCByb3V0ZXIgaW4gMjAgbGluZXNcbi8vIEpvYWtpbSBDYXJsc3RlaW4gLSBodHRwczovL2pvYWtpbS5iZW5nLnNlL1xuaW1wb3J0IHsgZW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xubGV0IGVsID0gbnVsbDtcbmxldCBldmVudHMgPSBbXTtcbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG5leHBvcnQgY29uc3Qgcm91dGUgPSAocGF0aCwgdGVtcGxhdGVJZCwgY29udHJvbGxlcikgPT4ge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29udHJvbGxlci5wcm90b3R5cGUuJG9uID0gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpID0+IGV2ZW50cy5wdXNoKFtzZWxlY3RvciwgZXZ0LCBoYW5kbGVyXSk7XG4gIGNvbnRyb2xsZXIucHJvdG90eXBlLiRyZWZyZXNoID0gKCkgPT4gbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIHJvdXRlc1twYXRoXSA9IHtcbiAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxuICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgb25SZWZyZXNoOiBsaXN0ZW5lcnMucHVzaC5iaW5kKGxpc3RlbmVycylcbiAgfTtcbn07XG5cbmNvbnN0IGZvckVhY2hFdmVudCA9IGZuTmFtZSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxzID0gZWwucXVlcnlTZWxlY3RvckFsbChldmVudHNbaV1bMF0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBlbHNbal1bZm5OYW1lXS5hcHBseShlbHNbal0sIGV2ZW50c1tpXS5zbGljZSgxKSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XG4gIC8vIExhenkgbG9hZCB2aWV3IGVsZW1lbnQ6XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAvLyBSZW1vdmUgY3VycmVudCBldmVudCBsaXN0ZW5lcnM6XG4gIGZvckVhY2hFdmVudCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicpO1xuICAvLyBDbGVhciBldmVudHMsIHRvIHByZXBhcmUgZm9yIG5leHQgcmVuZGVyOlxuICBldmVudHMgPSBbXTtcbiAgLy8gQ3VycmVudCByb3V0ZSB1cmwgKGdldHRpbmcgcmlkIG9mICcjJyBpbiBoYXNoIGFzIHdlbGwpOlxuICBjb25zdCB1cmwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpIHx8ICcvJztcbiAgLy8gR2V0IHJvdXRlIGJ5IHVybCBvciBmYWxsYmFjayBpZiBpdCBkb2VzIG5vdCBleGlzdDpcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXNbdXJsXSB8fCByb3V0ZXNbJyonXTtcbiAgaWYgKHJvdXRlICYmIHJvdXRlLmNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBjdHJsID0gbmV3IHJvdXRlLmNvbnRyb2xsZXIoKTtcbiAgICAvLyBMaXN0ZW4gb24gcm91dGUgcmVmcmVzaGVzOlxuICAgIHJvdXRlLm9uUmVmcmVzaCgoKSA9PiB7XG4gICAgICBmb3JFYWNoRXZlbnQoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKTtcbiAgICAgIC8vIFJlbmRlciByb3V0ZSB0ZW1wbGF0ZSB3aXRoIEpvaG4gUmVzaWcncyB0ZW1wbGF0ZSBlbmdpbmU6XG4gICAgICBlbC5pbm5lckhUTUwgPSBlbmdpbmUocm91dGUudGVtcGxhdGVJZCwgY3RybCk7XG4gICAgICBmb3JFYWNoRXZlbnQoJ2FkZEV2ZW50TGlzdGVuZXInKTtcbiAgICB9KTtcbiAgICAvLyBUcmlnZ2VyIHRoZSBmaXJzdCByZWZyZXNoOlxuICAgIGN0cmwuJHJlZnJlc2goKTtcbiAgfVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCByb3V0ZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByb3V0ZXIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
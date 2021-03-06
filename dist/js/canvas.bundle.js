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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objects_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Circle */ "./src/objects/Circle.js");
/* harmony import */ var _objects_Circle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_objects_Circle__WEBPACK_IMPORTED_MODULE_1__);


var canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: 40,
  y: 40
};
addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("resize", function () {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
});
var ctx = canvas.getContext("2d");
var colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];
var circle;
var circle2;

var init = function init() {
  circle2 = new _objects_Circle__WEBPACK_IMPORTED_MODULE_1___default.a(canvas.width / 2, canvas.height / 2, 0, 0, 100, "blue");
  circle = new _objects_Circle__WEBPACK_IMPORTED_MODULE_1___default.a();
  circle.color = colors[2];
};

var animate = function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle.x = mouse.x;
  circle.y = mouse.y;
  circle2.update(ctx);
  circle.update(ctx);
  if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.distance(circle.x, circle.y, circle2.x, circle2.y) < circle.radius + circle2.radius) circle2.color = colors[0];else circle2.color = colors[3];
};

init();
animate();

/***/ }),

/***/ "./src/objects/Circle.js":
/*!*******************************!*\
  !*** ./src/objects/Circle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
    var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var dy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "black";

    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "update",
    value: function update(ctx) {
      this.x += this.dx;
      this.y += this.dy;
      this.draw(ctx);
    }
  }]);

  return Circle;
}();

module.exports = Circle;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomItemFromList(list) {
  return lists[Math.floor(Math.random() * lists.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomItemFromList: randomItemFromList,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
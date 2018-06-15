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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://dg0hd7uprwj8f.cloudfront.net/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/***/ (function(module, exports) {

module.exports = {
	"client": {
		"js": "https://dg0hd7uprwj8f.cloudfront.net/static/js/bundle.e7fb8bba.js"
	}
};

/***/ }),

/***/ "./build/react-loadable.json":
/***/ (function(module, exports) {

module.exports = {
	"babel-runtime/core-js/get-iterator": [
		{
			"id": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"name": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"name": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"name": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"name": "./node_modules/babel-runtime/core-js/get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../core-js/is-iterable": [
		{
			"id": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"name": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"name": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"name": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"name": "./node_modules/babel-runtime/core-js/is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../core-js/object/define-properties": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-properties.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"babel-runtime/core-js/object/entries": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/entries.js",
			"name": "./node_modules/babel-runtime/core-js/object/entries.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/entries.js",
			"name": "./node_modules/babel-runtime/core-js/object/entries.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/entries.js",
			"name": "./node_modules/babel-runtime/core-js/object/entries.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/entries.js",
			"name": "./node_modules/babel-runtime/core-js/object/entries.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../core-js/object/freeze": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"name": "./node_modules/babel-runtime/core-js/object/freeze.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"babel-runtime/helpers/defineProperty": [
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"name": "./node_modules/babel-runtime/helpers/defineProperty.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"babel-runtime/helpers/objectWithoutProperties": [
		{
			"id": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"name": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"name": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"name": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"name": "./node_modules/babel-runtime/helpers/objectWithoutProperties.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"babel-runtime/helpers/slicedToArray": [
		{
			"id": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"name": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"name": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"name": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"name": "./node_modules/babel-runtime/helpers/slicedToArray.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"babel-runtime/helpers/taggedTemplateLiteral": [
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"name": "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"core-js/library/fn/get-iterator": [
		{
			"id": "./node_modules/core-js/library/fn/get-iterator.js",
			"name": "./node_modules/core-js/library/fn/get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/get-iterator.js",
			"name": "./node_modules/core-js/library/fn/get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/get-iterator.js",
			"name": "./node_modules/core-js/library/fn/get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/get-iterator.js",
			"name": "./node_modules/core-js/library/fn/get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"core-js/library/fn/is-iterable": [
		{
			"id": "./node_modules/core-js/library/fn/is-iterable.js",
			"name": "./node_modules/core-js/library/fn/is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/is-iterable.js",
			"name": "./node_modules/core-js/library/fn/is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/is-iterable.js",
			"name": "./node_modules/core-js/library/fn/is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/is-iterable.js",
			"name": "./node_modules/core-js/library/fn/is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"core-js/library/fn/object/define-properties": [
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-properties.js",
			"name": "./node_modules/core-js/library/fn/object/define-properties.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"core-js/library/fn/object/entries": [
		{
			"id": "./node_modules/core-js/library/fn/object/entries.js",
			"name": "./node_modules/core-js/library/fn/object/entries.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/entries.js",
			"name": "./node_modules/core-js/library/fn/object/entries.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/entries.js",
			"name": "./node_modules/core-js/library/fn/object/entries.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/entries.js",
			"name": "./node_modules/core-js/library/fn/object/entries.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"core-js/library/fn/object/freeze": [
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/freeze.js",
			"name": "./node_modules/core-js/library/fn/object/freeze.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./_classof": [
		{
			"id": "./node_modules/core-js/library/modules/_classof.js",
			"name": "./node_modules/core-js/library/modules/_classof.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_classof.js",
			"name": "./node_modules/core-js/library/modules/_classof.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/_classof.js",
			"name": "./node_modules/core-js/library/modules/_classof.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_classof.js",
			"name": "./node_modules/core-js/library/modules/_classof.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./_object-to-array": [
		{
			"id": "./node_modules/core-js/library/modules/_object-to-array.js",
			"name": "./node_modules/core-js/library/modules/_object-to-array.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-to-array.js",
			"name": "./node_modules/core-js/library/modules/_object-to-array.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-to-array.js",
			"name": "./node_modules/core-js/library/modules/_object-to-array.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-to-array.js",
			"name": "./node_modules/core-js/library/modules/_object-to-array.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./core.get-iterator-method": [
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator-method.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../modules/core.get-iterator": [
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"name": "./node_modules/core-js/library/modules/core.get-iterator.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../modules/core.is-iterable": [
		{
			"id": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"name": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"name": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"name": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"name": "./node_modules/core-js/library/modules/core.is-iterable.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../../modules/es6.object.define-properties": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-properties.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../../modules/es6.object.freeze": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"name": "./node_modules/core-js/library/modules/es6.object.freeze.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../../modules/es7.object.entries": [
		{
			"id": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"name": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"name": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"name": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"name": "./node_modules/core-js/library/modules/es7.object.entries.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"decode-uri-component": [
		{
			"id": "./node_modules/decode-uri-component/index.js",
			"name": "./node_modules/decode-uri-component/index.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/decode-uri-component/index.js",
			"name": "./node_modules/decode-uri-component/index.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/decode-uri-component/index.js",
			"name": "./node_modules/decode-uri-component/index.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/decode-uri-component/index.js",
			"name": "./node_modules/decode-uri-component/index.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"graphql-tag": [
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql-tag/src/index.js",
			"name": "./node_modules/graphql-tag/src/index.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./GraphQLError": [
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/GraphQLError.js",
			"name": "./node_modules/graphql/error/GraphQLError.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./formatError": [
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/formatError.js",
			"name": "./node_modules/graphql/error/formatError.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../error": [
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/index.js",
			"name": "./node_modules/graphql/error/index.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./locatedError": [
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/locatedError.js",
			"name": "./node_modules/graphql/error/locatedError.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./printError": [
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/printError.js",
			"name": "./node_modules/graphql/error/printError.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./syntaxError": [
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/error/syntaxError.js",
			"name": "./node_modules/graphql/error/syntaxError.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../jsutils/invariant": [
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/jsutils/invariant.js",
			"name": "./node_modules/graphql/jsutils/invariant.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./blockStringValue": [
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/blockStringValue.js",
			"name": "./node_modules/graphql/language/blockStringValue.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./directiveLocation": [
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/directiveLocation.js",
			"name": "./node_modules/graphql/language/directiveLocation.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./kinds": [
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/kinds.js",
			"name": "./node_modules/graphql/language/kinds.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./lexer": [
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/lexer.js",
			"name": "./node_modules/graphql/language/lexer.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../language/location": [
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/location.js",
			"name": "./node_modules/graphql/language/location.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"graphql/language/parser": [
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/parser.js",
			"name": "./node_modules/graphql/language/parser.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./source": [
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/graphql/language/source.js",
			"name": "./node_modules/graphql/language/source.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./_Symbol": [
		{
			"id": "./node_modules/lodash/_Symbol.js",
			"name": "./node_modules/lodash/_Symbol.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_Symbol.js",
			"name": "./node_modules/lodash/_Symbol.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./_baseGetTag": [
		{
			"id": "./node_modules/lodash/_baseGetTag.js",
			"name": "./node_modules/lodash/_baseGetTag.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_baseGetTag.js",
			"name": "./node_modules/lodash/_baseGetTag.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./_freeGlobal": [
		{
			"id": "./node_modules/lodash/_freeGlobal.js",
			"name": "./node_modules/lodash/_freeGlobal.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_freeGlobal.js",
			"name": "./node_modules/lodash/_freeGlobal.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./_getRawTag": [
		{
			"id": "./node_modules/lodash/_getRawTag.js",
			"name": "./node_modules/lodash/_getRawTag.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_getRawTag.js",
			"name": "./node_modules/lodash/_getRawTag.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./_objectToString": [
		{
			"id": "./node_modules/lodash/_objectToString.js",
			"name": "./node_modules/lodash/_objectToString.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_objectToString.js",
			"name": "./node_modules/lodash/_objectToString.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./_root": [
		{
			"id": "./node_modules/lodash/_root.js",
			"name": "./node_modules/lodash/_root.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/_root.js",
			"name": "./node_modules/lodash/_root.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"lodash/debounce": [
		{
			"id": "./node_modules/lodash/debounce.js",
			"name": "./node_modules/lodash/debounce.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/debounce.js",
			"name": "./node_modules/lodash/debounce.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./isObject": [
		{
			"id": "./node_modules/lodash/isObject.js",
			"name": "./node_modules/lodash/isObject.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/isObject.js",
			"name": "./node_modules/lodash/isObject.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./isObjectLike": [
		{
			"id": "./node_modules/lodash/isObjectLike.js",
			"name": "./node_modules/lodash/isObjectLike.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/isObjectLike.js",
			"name": "./node_modules/lodash/isObjectLike.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./isSymbol": [
		{
			"id": "./node_modules/lodash/isSymbol.js",
			"name": "./node_modules/lodash/isSymbol.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/isSymbol.js",
			"name": "./node_modules/lodash/isSymbol.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./now": [
		{
			"id": "./node_modules/lodash/now.js",
			"name": "./node_modules/lodash/now.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/now.js",
			"name": "./node_modules/lodash/now.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./toNumber": [
		{
			"id": "./node_modules/lodash/toNumber.js",
			"name": "./node_modules/lodash/toNumber.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/lodash/toNumber.js",
			"name": "./node_modules/lodash/toNumber.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"query-string": [
		{
			"id": "./node_modules/query-string/index.js",
			"name": "./node_modules/query-string/index.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/query-string/index.js",
			"name": "./node_modules/query-string/index.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/query-string/index.js",
			"name": "./node_modules/query-string/index.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/query-string/index.js",
			"name": "./node_modules/query-string/index.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"react-ga": [
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/15.54343386.chunk.js"
		},
		{
			"id": "./node_modules/react-ga/dist/react-ga.js",
			"name": "./node_modules/react-ga/dist/react-ga.js",
			"file": "static/js/15.54343386.chunk.js.map"
		}
	],
	"react-stripe-checkout": [
		{
			"id": "./node_modules/react-stripe-checkout/dist/main.js",
			"name": "./node_modules/react-stripe-checkout/dist/main.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/react-stripe-checkout/dist/main.js",
			"name": "./node_modules/react-stripe-checkout/dist/main.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"strict-uri-encode": [
		{
			"id": "./node_modules/strict-uri-encode/index.js",
			"name": "./node_modules/strict-uri-encode/index.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./node_modules/strict-uri-encode/index.js",
			"name": "./node_modules/strict-uri-encode/index.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./node_modules/strict-uri-encode/index.js",
			"name": "./node_modules/strict-uri-encode/index.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./node_modules/strict-uri-encode/index.js",
			"name": "./node_modules/strict-uri-encode/index.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../components/Box": [
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/Box.js",
			"name": "./src/components/Box.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../components/CleaningFormStep2": [
		{
			"id": "./src/components/CleaningFormStep2.js",
			"name": "./src/components/CleaningFormStep2.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/CleaningFormStep2.js",
			"name": "./src/components/CleaningFormStep2.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"../components/Span": [
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/Span.js",
			"name": "./src/components/Span.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"./StripeForm.js": [
		{
			"id": "./src/components/StripeForm.js",
			"name": "./src/components/StripeForm.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/StripeForm.js",
			"name": "./src/components/StripeForm.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"../components/WithTracker": [
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/15.54343386.chunk.js"
		},
		{
			"id": "./src/components/WithTracker.js",
			"name": "./src/components/WithTracker.js",
			"file": "static/js/15.54343386.chunk.js.map"
		}
	],
	"../components/form/Form.js": [
		{
			"id": "./src/components/form/Form.js",
			"name": "./src/components/form/Form.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/Form.js",
			"name": "./src/components/form/Form.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/Form.js",
			"name": "./src/components/form/Form.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/Form.js",
			"name": "./src/components/form/Form.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsFormError.js": [
		{
			"id": "./src/components/form/FormsFormError.js",
			"name": "./src/components/form/FormsFormError.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsFormError.js",
			"name": "./src/components/form/FormsFormError.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsFormError.js",
			"name": "./src/components/form/FormsFormError.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsFormError.js",
			"name": "./src/components/form/FormsFormError.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputCheckbox.js": [
		{
			"id": "./src/components/form/FormsInputCheckbox.js",
			"name": "./src/components/form/FormsInputCheckbox.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputCheckbox.js",
			"name": "./src/components/form/FormsInputCheckbox.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputCheckbox.js",
			"name": "./src/components/form/FormsInputCheckbox.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputCheckbox.js",
			"name": "./src/components/form/FormsInputCheckbox.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputCheckboxMultiple.js": [
		{
			"id": "./src/components/form/FormsInputCheckboxMultiple.js",
			"name": "./src/components/form/FormsInputCheckboxMultiple.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputCheckboxMultiple.js",
			"name": "./src/components/form/FormsInputCheckboxMultiple.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputCheckboxMultiple.js",
			"name": "./src/components/form/FormsInputCheckboxMultiple.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputCheckboxMultiple.js",
			"name": "./src/components/form/FormsInputCheckboxMultiple.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputRadio.js": [
		{
			"id": "./src/components/form/FormsInputRadio.js",
			"name": "./src/components/form/FormsInputRadio.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputRadio.js",
			"name": "./src/components/form/FormsInputRadio.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputRadio.js",
			"name": "./src/components/form/FormsInputRadio.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputRadio.js",
			"name": "./src/components/form/FormsInputRadio.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputSelect.js": [
		{
			"id": "./src/components/form/FormsInputSelect.js",
			"name": "./src/components/form/FormsInputSelect.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputSelect.js",
			"name": "./src/components/form/FormsInputSelect.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputSelect.js",
			"name": "./src/components/form/FormsInputSelect.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputSelect.js",
			"name": "./src/components/form/FormsInputSelect.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputText.js": [
		{
			"id": "./src/components/form/FormsInputText.js",
			"name": "./src/components/form/FormsInputText.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputText.js",
			"name": "./src/components/form/FormsInputText.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputText.js",
			"name": "./src/components/form/FormsInputText.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputText.js",
			"name": "./src/components/form/FormsInputText.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsInputTextArea.js": [
		{
			"id": "./src/components/form/FormsInputTextArea.js",
			"name": "./src/components/form/FormsInputTextArea.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputTextArea.js",
			"name": "./src/components/form/FormsInputTextArea.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsInputTextArea.js",
			"name": "./src/components/form/FormsInputTextArea.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsInputTextArea.js",
			"name": "./src/components/form/FormsInputTextArea.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./FormsLabel.js": [
		{
			"id": "./src/components/form/FormsLabel.js",
			"name": "./src/components/form/FormsLabel.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/components/form/FormsLabel.js",
			"name": "./src/components/form/FormsLabel.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/components/form/FormsLabel.js",
			"name": "./src/components/form/FormsLabel.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/form/FormsLabel.js",
			"name": "./src/components/form/FormsLabel.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../utils/apollo": [
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/utils/apollo.js",
			"name": "./src/utils/apollo.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../utils/google-analytics.js": [
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/15.54343386.chunk.js"
		},
		{
			"id": "./src/utils/google-analytics.js",
			"name": "./src/utils/google-analytics.js",
			"file": "static/js/15.54343386.chunk.js.map"
		}
	],
	"./views/HomeCleaningViewStep2": [
		{
			"id": "./src/views/HomeCleaningViewStep2.js",
			"name": "./src/views/HomeCleaningViewStep2.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/views/HomeCleaningViewStep2.js",
			"name": "./src/views/HomeCleaningViewStep2.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		}
	],
	"./ServiceDetailViewBase": [
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/0.35f076a3.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/0.35f076a3.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/views/ServiceDetailViewBase.js",
			"name": "./src/views/ServiceDetailViewBase.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../components/CleaningForm": [
		{
			"id": "./src/components/CleaningForm.js",
			"name": "./src/components/CleaningForm.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/components/CleaningForm.js",
			"name": "./src/components/CleaningForm.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"./views/HomeCleaningView": [
		{
			"id": "./src/views/HomeCleaningView.js",
			"name": "./src/views/HomeCleaningView.js",
			"file": "static/js/1.d66ef5be.chunk.js"
		},
		{
			"id": "./src/views/HomeCleaningView.js",
			"name": "./src/views/HomeCleaningView.js",
			"file": "static/js/1.d66ef5be.chunk.js.map"
		}
	],
	"../components/ConciergeItem": [
		{
			"id": "./src/components/ConciergeItem.js",
			"name": "./src/components/ConciergeItem.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/ConciergeItem.js",
			"name": "./src/components/ConciergeItem.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../components/ContactForm": [
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/ContactForm.js",
			"name": "./src/components/ContactForm.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../components/FieldsetSSR": [
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/FieldsetSSR.js",
			"name": "./src/components/FieldsetSSR.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../components/headlines/H3": [
		{
			"id": "./src/components/headlines/H3.js",
			"name": "./src/components/headlines/H3.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/headlines/H3.js",
			"name": "./src/components/headlines/H3.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/components/headlines/H3.js",
			"name": "./src/components/headlines/H3.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/headlines/H3.js",
			"name": "./src/components/headlines/H3.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../components/modals/ModalFadeIn": [
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/components/modals/ModalFadeIn.js",
			"name": "./src/components/modals/ModalFadeIn.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"../static/conciergeBannerJpg.jpg": [
		{
			"id": "./src/static/conciergeBannerJpg.jpg",
			"name": "./src/static/conciergeBannerJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/conciergeBannerJpg.jpg",
			"name": "./src/static/conciergeBannerJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/dishwashJpg.jpg": [
		{
			"id": "./src/static/dishwashJpg.jpg",
			"name": "./src/static/dishwashJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/dishwashJpg.jpg",
			"name": "./src/static/dishwashJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/dryCleaningJpg.jpg": [
		{
			"id": "./src/static/dryCleaningJpg.jpg",
			"name": "./src/static/dryCleaningJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/dryCleaningJpg.jpg",
			"name": "./src/static/dryCleaningJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/groceryJpg.jpg": [
		{
			"id": "./src/static/groceryJpg.jpg",
			"name": "./src/static/groceryJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/groceryJpg.jpg",
			"name": "./src/static/groceryJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/packageJpg.jpg": [
		{
			"id": "./src/static/packageJpg.jpg",
			"name": "./src/static/packageJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/packageJpg.jpg",
			"name": "./src/static/packageJpg.jpg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/bucketSvg.svg": [
		{
			"id": "./src/static/svg/bucketSvg.svg",
			"name": "./src/static/svg/bucketSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/bucketSvg.svg",
			"name": "./src/static/svg/bucketSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/electricalSvg.svg": [
		{
			"id": "./src/static/svg/electricalSvg.svg",
			"name": "./src/static/svg/electricalSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/electricalSvg.svg",
			"name": "./src/static/svg/electricalSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/laundrySvg.svg": [
		{
			"id": "./src/static/svg/laundrySvg.svg",
			"name": "./src/static/svg/laundrySvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/laundrySvg.svg",
			"name": "./src/static/svg/laundrySvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/membershipSvg.svg": [
		{
			"id": "./src/static/svg/membershipSvg.svg",
			"name": "./src/static/svg/membershipSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/membershipSvg.svg",
			"name": "./src/static/svg/membershipSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/personalSvg.svg": [
		{
			"id": "./src/static/svg/personalSvg.svg",
			"name": "./src/static/svg/personalSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/personalSvg.svg",
			"name": "./src/static/svg/personalSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../static/svg/plumbingSvg.svg": [
		{
			"id": "./src/static/svg/plumbingSvg.svg",
			"name": "./src/static/svg/plumbingSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/static/svg/plumbingSvg.svg",
			"name": "./src/static/svg/plumbingSvg.svg",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"./views/ConciergeView": [
		{
			"id": "./src/views/ConciergeView.js",
			"name": "./src/views/ConciergeView.js",
			"file": "static/js/2.e1d15ff6.chunk.js"
		},
		{
			"id": "./src/views/ConciergeView.js",
			"name": "./src/views/ConciergeView.js",
			"file": "static/js/2.e1d15ff6.chunk.js.map"
		}
	],
	"../components/MainCategoryImageLink": [
		{
			"id": "./src/components/MainCategoryImageLink.js",
			"name": "./src/components/MainCategoryImageLink.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/components/MainCategoryImageLink.js",
			"name": "./src/components/MainCategoryImageLink.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/electricalsJpg.jpg": [
		{
			"id": "./src/static/electricalsJpg.jpg",
			"name": "./src/static/electricalsJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/electricalsJpg.jpg",
			"name": "./src/static/electricalsJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/homeCleaningJpg.jpg": [
		{
			"id": "./src/static/homeCleaningJpg.jpg",
			"name": "./src/static/homeCleaningJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/homeCleaningJpg.jpg",
			"name": "./src/static/homeCleaningJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/lightingJpg.jpg": [
		{
			"id": "./src/static/lightingJpg.jpg",
			"name": "./src/static/lightingJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/lightingJpg.jpg",
			"name": "./src/static/lightingJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/plumbingJpg.jpg": [
		{
			"id": "./src/static/plumbingJpg.jpg",
			"name": "./src/static/plumbingJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/plumbingJpg.jpg",
			"name": "./src/static/plumbingJpg.jpg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/svg/availability.svg": [
		{
			"id": "./src/static/svg/availability.svg",
			"name": "./src/static/svg/availability.svg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/svg/availability.svg",
			"name": "./src/static/svg/availability.svg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/svg/ddiy-promise.svg": [
		{
			"id": "./src/static/svg/ddiy-promise.svg",
			"name": "./src/static/svg/ddiy-promise.svg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/svg/ddiy-promise.svg",
			"name": "./src/static/svg/ddiy-promise.svg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"../static/svg/professionals.svg": [
		{
			"id": "./src/static/svg/professionals.svg",
			"name": "./src/static/svg/professionals.svg",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/static/svg/professionals.svg",
			"name": "./src/static/svg/professionals.svg",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"./views/HomeView": [
		{
			"id": "./src/views/HomeView.js",
			"name": "./src/views/HomeView.js",
			"file": "static/js/3.d0a3a13e.chunk.js"
		},
		{
			"id": "./src/views/HomeView.js",
			"name": "./src/views/HomeView.js",
			"file": "static/js/3.d0a3a13e.chunk.js.map"
		}
	],
	"./views/ToiletsView": [
		{
			"id": "./src/views/ToiletsView.js",
			"name": "./src/views/ToiletsView.js",
			"file": "static/js/4.d95ba789.chunk.js"
		},
		{
			"id": "./src/views/ToiletsView.js",
			"name": "./src/views/ToiletsView.js",
			"file": "static/js/4.d95ba789.chunk.js.map"
		}
	],
	"./views/SocketsView": [
		{
			"id": "./src/views/SocketsView.js",
			"name": "./src/views/SocketsView.js",
			"file": "static/js/5.95d507f0.chunk.js"
		},
		{
			"id": "./src/views/SocketsView.js",
			"name": "./src/views/SocketsView.js",
			"file": "static/js/5.95d507f0.chunk.js.map"
		}
	],
	"./views/RentedSpaceCleaningView": [
		{
			"id": "./src/views/RentedSpaceCleaningView.js",
			"name": "./src/views/RentedSpaceCleaningView.js",
			"file": "static/js/6.5ccb61ce.chunk.js"
		},
		{
			"id": "./src/views/RentedSpaceCleaningView.js",
			"name": "./src/views/RentedSpaceCleaningView.js",
			"file": "static/js/6.5ccb61ce.chunk.js.map"
		}
	],
	"./views/PlumbingView": [
		{
			"id": "./src/views/PlumbingView.js",
			"name": "./src/views/PlumbingView.js",
			"file": "static/js/7.b30896ef.chunk.js"
		},
		{
			"id": "./src/views/PlumbingView.js",
			"name": "./src/views/PlumbingView.js",
			"file": "static/js/7.b30896ef.chunk.js.map"
		}
	],
	"./views/OfficeCleaningView": [
		{
			"id": "./src/views/OfficeCleaningView.js",
			"name": "./src/views/OfficeCleaningView.js",
			"file": "static/js/8.a33f8b09.chunk.js"
		},
		{
			"id": "./src/views/OfficeCleaningView.js",
			"name": "./src/views/OfficeCleaningView.js",
			"file": "static/js/8.a33f8b09.chunk.js.map"
		}
	],
	"./views/LightingView": [
		{
			"id": "./src/views/LightingView.js",
			"name": "./src/views/LightingView.js",
			"file": "static/js/9.dcb33fe9.chunk.js"
		},
		{
			"id": "./src/views/LightingView.js",
			"name": "./src/views/LightingView.js",
			"file": "static/js/9.dcb33fe9.chunk.js.map"
		}
	],
	"./views/FaucetsView": [
		{
			"id": "./src/views/FaucetsView.js",
			"name": "./src/views/FaucetsView.js",
			"file": "static/js/10.88d3f852.chunk.js"
		},
		{
			"id": "./src/views/FaucetsView.js",
			"name": "./src/views/FaucetsView.js",
			"file": "static/js/10.88d3f852.chunk.js.map"
		}
	],
	"./views/ElectricalsView": [
		{
			"id": "./src/views/ElectricalsView.js",
			"name": "./src/views/ElectricalsView.js",
			"file": "static/js/11.2519eed5.chunk.js"
		},
		{
			"id": "./src/views/ElectricalsView.js",
			"name": "./src/views/ElectricalsView.js",
			"file": "static/js/11.2519eed5.chunk.js.map"
		}
	],
	"./views/DrainageView": [
		{
			"id": "./src/views/DrainageView.js",
			"name": "./src/views/DrainageView.js",
			"file": "static/js/12.de0e2611.chunk.js"
		},
		{
			"id": "./src/views/DrainageView.js",
			"name": "./src/views/DrainageView.js",
			"file": "static/js/12.de0e2611.chunk.js.map"
		}
	],
	"./views/AirConditioningView": [
		{
			"id": "./src/views/AirConditioningView.js",
			"name": "./src/views/AirConditioningView.js",
			"file": "static/js/13.43db3b71.chunk.js"
		},
		{
			"id": "./src/views/AirConditioningView.js",
			"name": "./src/views/AirConditioningView.js",
			"file": "static/js/13.43db3b71.chunk.js.map"
		}
	],
	"babel-runtime/core-js/object/keys": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/keys.js",
			"name": "./node_modules/babel-runtime/core-js/object/keys.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/keys.js",
			"name": "./node_modules/babel-runtime/core-js/object/keys.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"core-js/library/fn/object/keys": [
		{
			"id": "./node_modules/core-js/library/fn/object/keys.js",
			"name": "./node_modules/core-js/library/fn/object/keys.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/keys.js",
			"name": "./node_modules/core-js/library/fn/object/keys.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"../../modules/es6.object.keys": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.keys.js",
			"name": "./node_modules/core-js/library/modules/es6.object.keys.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.keys.js",
			"name": "./node_modules/core-js/library/modules/es6.object.keys.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./views/HealthCheckView": [
		{
			"id": "./src/views/HealthCheckView.js",
			"name": "./src/views/HealthCheckView.js",
			"file": "static/js/14.5764309c.chunk.js"
		},
		{
			"id": "./src/views/HealthCheckView.js",
			"name": "./src/views/HealthCheckView.js",
			"file": "static/js/14.5764309c.chunk.js.map"
		}
	],
	"./views/AboutView": [
		{
			"id": "./src/views/AboutView.js",
			"name": "./src/views/AboutView.js",
			"file": "static/js/15.54343386.chunk.js"
		},
		{
			"id": "./src/views/AboutView.js",
			"name": "./src/views/AboutView.js",
			"file": "static/js/15.54343386.chunk.js.map"
		}
	],
	"./views/RequestSuccessView": [
		{
			"id": "./src/views/RequestSuccessView.js",
			"name": "./src/views/RequestSuccessView.js",
			"file": "static/js/16.2843b7d5.chunk.js"
		},
		{
			"id": "./src/views/RequestSuccessView.js",
			"name": "./src/views/RequestSuccessView.js",
			"file": "static/js/16.2843b7d5.chunk.js.map"
		}
	],
	"./icons/corner-down-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-down-left.js",
			"name": "./node_modules/react-feather/dist/icons/corner-down-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-down-left.js",
			"name": "./node_modules/react-feather/dist/icons/corner-down-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"undefined": [
		{
			"id": 0,
			"name": null,
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": 0,
			"name": null,
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-client": [
		{
			"id": "./node_modules/apollo-client/index.js",
			"name": "./node_modules/apollo-client/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/index.js",
			"name": "./node_modules/apollo-client/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-apollo": [
		{
			"id": "./node_modules/react-apollo/react-apollo.browser.umd.js",
			"name": "./node_modules/react-apollo/react-apollo.browser.umd.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-apollo/react-apollo.browser.umd.js",
			"name": "./node_modules/react-apollo/react-apollo.browser.umd.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-link-batch-http": [
		{
			"id": "./node_modules/apollo-link-batch-http/lib/index.js",
			"name": "./node_modules/apollo-link-batch-http/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-batch-http/lib/index.js",
			"name": "./node_modules/apollo-link-batch-http/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-fetch": [
		{
			"id": "./node_modules/apollo-fetch/dist/index.js",
			"name": "./node_modules/apollo-fetch/dist/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-fetch/dist/index.js",
			"name": "./node_modules/apollo-fetch/dist/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-dom": [
		{
			"id": "./node_modules/react-dom/index.js",
			"name": "./node_modules/react-dom/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-dom/index.js",
			"name": "./node_modules/react-dom/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-cache-inmemory": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/index.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/index.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-link-error": [
		{
			"id": "./node_modules/apollo-link-error/lib/index.js",
			"name": "./node_modules/apollo-link-error/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-error/lib/index.js",
			"name": "./node_modules/apollo-link-error/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./App": [
		{
			"id": "./src/App.js",
			"name": "./src/App.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/App.js",
			"name": "./src/App.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router-dom/BrowserRouter": [
		{
			"id": "./node_modules/react-router-dom/BrowserRouter.js",
			"name": "./node_modules/react-router-dom/BrowserRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/BrowserRouter.js",
			"name": "./node_modules/react-router-dom/BrowserRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-loadable": [
		{
			"id": "./node_modules/react-loadable/lib/index.js",
			"name": "./node_modules/react-loadable/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-loadable/lib/index.js",
			"name": "./node_modules/react-loadable/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react": [
		{
			"id": "./node_modules/react/index.js",
			"name": "./node_modules/react/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react/index.js",
			"name": "./node_modules/react/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./cjs/react.production.min.js": [
		{
			"id": "./node_modules/react/cjs/react.production.min.js",
			"name": "./node_modules/react/cjs/react.production.min.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react/cjs/react.production.min.js",
			"name": "./node_modules/react/cjs/react.production.min.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"object-assign": [
		{
			"id": "./node_modules/object-assign/index.js",
			"name": "./node_modules/object-assign/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/object-assign/index.js",
			"name": "./node_modules/object-assign/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/emptyObject": [
		{
			"id": "./node_modules/fbjs/lib/emptyObject.js",
			"name": "./node_modules/fbjs/lib/emptyObject.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/emptyObject.js",
			"name": "./node_modules/fbjs/lib/emptyObject.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/emptyFunction": [
		{
			"id": "./node_modules/fbjs/lib/emptyFunction.js",
			"name": "./node_modules/fbjs/lib/emptyFunction.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/emptyFunction.js",
			"name": "./node_modules/fbjs/lib/emptyFunction.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"prop-types": [
		{
			"id": "./node_modules/prop-types/index.js",
			"name": "./node_modules/prop-types/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/prop-types/index.js",
			"name": "./node_modules/prop-types/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./factoryWithThrowingShims": [
		{
			"id": "./node_modules/prop-types/factoryWithThrowingShims.js",
			"name": "./node_modules/prop-types/factoryWithThrowingShims.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/prop-types/factoryWithThrowingShims.js",
			"name": "./node_modules/prop-types/factoryWithThrowingShims.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/invariant": [
		{
			"id": "./node_modules/fbjs/lib/invariant.js",
			"name": "./node_modules/fbjs/lib/invariant.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/invariant.js",
			"name": "./node_modules/fbjs/lib/invariant.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./lib/ReactPropTypesSecret": [
		{
			"id": "./node_modules/prop-types/lib/ReactPropTypesSecret.js",
			"name": "./node_modules/prop-types/lib/ReactPropTypesSecret.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/prop-types/lib/ReactPropTypesSecret.js",
			"name": "./node_modules/prop-types/lib/ReactPropTypesSecret.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"warning": [
		{
			"id": "./node_modules/warning/browser.js",
			"name": "./node_modules/warning/browser.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/warning/browser.js",
			"name": "./node_modules/warning/browser.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"history/createBrowserHistory": [
		{
			"id": "./node_modules/history/createBrowserHistory.js",
			"name": "./node_modules/history/createBrowserHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/createBrowserHistory.js",
			"name": "./node_modules/history/createBrowserHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Router": [
		{
			"id": "./node_modules/react-router-dom/Router.js",
			"name": "./node_modules/react-router-dom/Router.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Router.js",
			"name": "./node_modules/react-router-dom/es/Router.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/Router.js",
			"name": "./node_modules/react-router-dom/Router.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/react-router-dom/es/Router.js",
			"name": "./node_modules/react-router-dom/es/Router.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/Router": [
		{
			"id": "./node_modules/react-router/Router.js",
			"name": "./node_modules/react-router/Router.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/Router.js",
			"name": "./node_modules/react-router/Router.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"invariant": [
		{
			"id": "./node_modules/invariant/browser.js",
			"name": "./node_modules/invariant/browser.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/invariant/browser.js",
			"name": "./node_modules/invariant/browser.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./LocationUtils": [
		{
			"id": "./node_modules/history/LocationUtils.js",
			"name": "./node_modules/history/LocationUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/LocationUtils.js",
			"name": "./node_modules/history/es/LocationUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/LocationUtils.js",
			"name": "./node_modules/history/LocationUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/history/es/LocationUtils.js",
			"name": "./node_modules/history/es/LocationUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./PathUtils": [
		{
			"id": "./node_modules/history/PathUtils.js",
			"name": "./node_modules/history/PathUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/PathUtils.js",
			"name": "./node_modules/history/es/PathUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/PathUtils.js",
			"name": "./node_modules/history/PathUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/history/es/PathUtils.js",
			"name": "./node_modules/history/es/PathUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./createTransitionManager": [
		{
			"id": "./node_modules/history/createTransitionManager.js",
			"name": "./node_modules/history/createTransitionManager.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/createTransitionManager.js",
			"name": "./node_modules/history/es/createTransitionManager.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/createTransitionManager.js",
			"name": "./node_modules/history/createTransitionManager.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/history/es/createTransitionManager.js",
			"name": "./node_modules/history/es/createTransitionManager.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./DOMUtils": [
		{
			"id": "./node_modules/history/DOMUtils.js",
			"name": "./node_modules/history/DOMUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/DOMUtils.js",
			"name": "./node_modules/history/es/DOMUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/DOMUtils.js",
			"name": "./node_modules/history/DOMUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/history/es/DOMUtils.js",
			"name": "./node_modules/history/es/DOMUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"resolve-pathname": [
		{
			"id": "./node_modules/resolve-pathname/index.js",
			"name": "./node_modules/resolve-pathname/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/resolve-pathname/index.js",
			"name": "./node_modules/resolve-pathname/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"value-equal": [
		{
			"id": "./node_modules/value-equal/index.js",
			"name": "./node_modules/value-equal/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/value-equal/index.js",
			"name": "./node_modules/value-equal/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/helpers/extends": [
		{
			"id": "./node_modules/babel-runtime/helpers/extends.js",
			"name": "./node_modules/babel-runtime/helpers/extends.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/extends.js",
			"name": "./node_modules/babel-runtime/helpers/extends.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-helmet": [
		{
			"id": "./node_modules/react-helmet/lib/Helmet.js",
			"name": "./node_modules/react-helmet/lib/Helmet.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-helmet/lib/Helmet.js",
			"name": "./node_modules/react-helmet/lib/Helmet.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./utils/loadable.js": [
		{
			"id": "./src/utils/loadable.js",
			"name": "./src/utils/loadable.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/utils/loadable.js",
			"name": "./src/utils/loadable.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"glamorous": [
		{
			"id": "./node_modules/glamorous/dist/glamorous.esm.js",
			"name": "./node_modules/glamorous/dist/glamorous.esm.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamorous/dist/glamorous.esm.js",
			"name": "./node_modules/glamorous/dist/glamorous.esm.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router-dom/Route": [
		{
			"id": "./node_modules/react-router-dom/Route.js",
			"name": "./node_modules/react-router-dom/Route.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/Route.js",
			"name": "./node_modules/react-router-dom/Route.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router-dom/Switch": [
		{
			"id": "./node_modules/react-router-dom/Switch.js",
			"name": "./node_modules/react-router-dom/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/Switch.js",
			"name": "./node_modules/react-router-dom/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./components/Footer": [
		{
			"id": "./src/components/Footer.js",
			"name": "./src/components/Footer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/Footer.js",
			"name": "./src/components/Footer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./components/MainNavbar": [
		{
			"id": "./src/components/MainNavbar.js",
			"name": "./src/components/MainNavbar.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/MainNavbar.js",
			"name": "./src/components/MainNavbar.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./components/ScrollToTop": [
		{
			"id": "./src/components/ScrollToTop.js",
			"name": "./src/components/ScrollToTop.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/ScrollToTop.js",
			"name": "./src/components/ScrollToTop.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./theme": [
		{
			"id": "./src/theme.js",
			"name": "./src/theme.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/theme.js",
			"name": "./src/theme.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/core-js/object/get-prototype-of": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/get-prototype-of.js",
			"name": "./node_modules/babel-runtime/core-js/object/get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/get-prototype-of.js",
			"name": "./node_modules/babel-runtime/core-js/object/get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/helpers/classCallCheck": [
		{
			"id": "./node_modules/babel-runtime/helpers/classCallCheck.js",
			"name": "./node_modules/babel-runtime/helpers/classCallCheck.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/classCallCheck.js",
			"name": "./node_modules/babel-runtime/helpers/classCallCheck.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/helpers/createClass": [
		{
			"id": "./node_modules/babel-runtime/helpers/createClass.js",
			"name": "./node_modules/babel-runtime/helpers/createClass.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/createClass.js",
			"name": "./node_modules/babel-runtime/helpers/createClass.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/helpers/possibleConstructorReturn": [
		{
			"id": "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js",
			"name": "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js",
			"name": "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"babel-runtime/helpers/inherits": [
		{
			"id": "./node_modules/babel-runtime/helpers/inherits.js",
			"name": "./node_modules/babel-runtime/helpers/inherits.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/inherits.js",
			"name": "./node_modules/babel-runtime/helpers/inherits.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router-dom": [
		{
			"id": "./node_modules/react-router-dom/es/index.js",
			"name": "./node_modules/react-router-dom/es/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/index.js",
			"name": "./node_modules/react-router-dom/es/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./BrowserRouter": [
		{
			"id": "./node_modules/react-router-dom/es/BrowserRouter.js",
			"name": "./node_modules/react-router-dom/es/BrowserRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/BrowserRouter.js",
			"name": "./node_modules/react-router-dom/es/BrowserRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./HashRouter": [
		{
			"id": "./node_modules/react-router-dom/es/HashRouter.js",
			"name": "./node_modules/react-router-dom/es/HashRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/HashRouter.js",
			"name": "./node_modules/react-router-dom/es/HashRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Link": [
		{
			"id": "./node_modules/react-router-dom/es/Link.js",
			"name": "./node_modules/react-router-dom/es/Link.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Link.js",
			"name": "./node_modules/react-router-dom/es/Link.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./MemoryRouter": [
		{
			"id": "./node_modules/react-router-dom/es/MemoryRouter.js",
			"name": "./node_modules/react-router-dom/es/MemoryRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/MemoryRouter.js",
			"name": "./node_modules/react-router-dom/es/MemoryRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./NavLink": [
		{
			"id": "./node_modules/react-router-dom/es/NavLink.js",
			"name": "./node_modules/react-router-dom/es/NavLink.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/NavLink.js",
			"name": "./node_modules/react-router-dom/es/NavLink.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Prompt": [
		{
			"id": "./node_modules/react-router-dom/es/Prompt.js",
			"name": "./node_modules/react-router-dom/es/Prompt.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Prompt.js",
			"name": "./node_modules/react-router-dom/es/Prompt.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Redirect": [
		{
			"id": "./node_modules/react-router-dom/es/Redirect.js",
			"name": "./node_modules/react-router-dom/es/Redirect.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Redirect.js",
			"name": "./node_modules/react-router-dom/es/Redirect.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Route": [
		{
			"id": "./node_modules/react-router-dom/es/Route.js",
			"name": "./node_modules/react-router-dom/es/Route.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Route.js",
			"name": "./node_modules/react-router-dom/es/Route.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./StaticRouter": [
		{
			"id": "./node_modules/react-router-dom/es/StaticRouter.js",
			"name": "./node_modules/react-router-dom/es/StaticRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/StaticRouter.js",
			"name": "./node_modules/react-router-dom/es/StaticRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Switch": [
		{
			"id": "./node_modules/react-router-dom/es/Switch.js",
			"name": "./node_modules/react-router-dom/es/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/Switch.js",
			"name": "./node_modules/react-router-dom/es/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./matchPath": [
		{
			"id": "./node_modules/react-router-dom/es/matchPath.js",
			"name": "./node_modules/react-router-dom/es/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/matchPath.js",
			"name": "./node_modules/react-router/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/matchPath.js",
			"name": "./node_modules/react-router-dom/es/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		},
		{
			"id": "./node_modules/react-router/matchPath.js",
			"name": "./node_modules/react-router/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./withRouter": [
		{
			"id": "./node_modules/react-router-dom/es/withRouter.js",
			"name": "./node_modules/react-router-dom/es/withRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router-dom/es/withRouter.js",
			"name": "./node_modules/react-router-dom/es/withRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/withRouter": [
		{
			"id": "./node_modules/react-router/es/withRouter.js",
			"name": "./node_modules/react-router/es/withRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/withRouter.js",
			"name": "./node_modules/react-router/es/withRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"hoist-non-react-statics": [
		{
			"id": "./node_modules/hoist-non-react-statics/index.js",
			"name": "./node_modules/hoist-non-react-statics/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/hoist-non-react-statics/index.js",
			"name": "./node_modules/hoist-non-react-statics/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/Route": [
		{
			"id": "./node_modules/react-router/es/Route.js",
			"name": "./node_modules/react-router/es/Route.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/Route.js",
			"name": "./node_modules/react-router/es/Route.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/matchPath": [
		{
			"id": "./node_modules/react-router/es/matchPath.js",
			"name": "./node_modules/react-router/es/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/matchPath.js",
			"name": "./node_modules/react-router/es/matchPath.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"path-to-regexp": [
		{
			"id": "./node_modules/react-router/node_modules/path-to-regexp/index.js",
			"name": "./node_modules/react-router/node_modules/path-to-regexp/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/node_modules/path-to-regexp/index.js",
			"name": "./node_modules/react-router/node_modules/path-to-regexp/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"isarray": [
		{
			"id": "./node_modules/react-router/node_modules/isarray/index.js",
			"name": "./node_modules/react-router/node_modules/isarray/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/node_modules/isarray/index.js",
			"name": "./node_modules/react-router/node_modules/isarray/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/Switch": [
		{
			"id": "./node_modules/react-router/es/Switch.js",
			"name": "./node_modules/react-router/es/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/Switch.js",
			"name": "./node_modules/react-router/es/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/StaticRouter": [
		{
			"id": "./node_modules/react-router/es/StaticRouter.js",
			"name": "./node_modules/react-router/es/StaticRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/StaticRouter.js",
			"name": "./node_modules/react-router/es/StaticRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/Router": [
		{
			"id": "./node_modules/react-router/es/Router.js",
			"name": "./node_modules/react-router/es/Router.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/Router.js",
			"name": "./node_modules/react-router/es/Router.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/Redirect": [
		{
			"id": "./node_modules/react-router/es/Redirect.js",
			"name": "./node_modules/react-router/es/Redirect.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/Redirect.js",
			"name": "./node_modules/react-router/es/Redirect.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"history": [
		{
			"id": "./node_modules/history/es/index.js",
			"name": "./node_modules/history/es/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/index.js",
			"name": "./node_modules/history/es/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./createBrowserHistory": [
		{
			"id": "./node_modules/history/es/createBrowserHistory.js",
			"name": "./node_modules/history/es/createBrowserHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/createBrowserHistory.js",
			"name": "./node_modules/history/es/createBrowserHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./createHashHistory": [
		{
			"id": "./node_modules/history/es/createHashHistory.js",
			"name": "./node_modules/history/es/createHashHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/createHashHistory.js",
			"name": "./node_modules/history/es/createHashHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./createMemoryHistory": [
		{
			"id": "./node_modules/history/es/createMemoryHistory.js",
			"name": "./node_modules/history/es/createMemoryHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/es/createMemoryHistory.js",
			"name": "./node_modules/history/es/createMemoryHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/Prompt": [
		{
			"id": "./node_modules/react-router/es/Prompt.js",
			"name": "./node_modules/react-router/es/Prompt.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/Prompt.js",
			"name": "./node_modules/react-router/es/Prompt.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/es/MemoryRouter": [
		{
			"id": "./node_modules/react-router/es/MemoryRouter.js",
			"name": "./node_modules/react-router/es/MemoryRouter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/es/MemoryRouter.js",
			"name": "./node_modules/react-router/es/MemoryRouter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"history/createMemoryHistory": [
		{
			"id": "./node_modules/history/createMemoryHistory.js",
			"name": "./node_modules/history/createMemoryHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/createMemoryHistory.js",
			"name": "./node_modules/history/createMemoryHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"history/createHashHistory": [
		{
			"id": "./node_modules/history/createHashHistory.js",
			"name": "./node_modules/history/createHashHistory.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/history/createHashHistory.js",
			"name": "./node_modules/history/createHashHistory.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/object/set-prototype-of": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/set-prototype-of.js",
			"name": "./node_modules/babel-runtime/core-js/object/set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/set-prototype-of.js",
			"name": "./node_modules/babel-runtime/core-js/object/set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/object/create": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/create.js",
			"name": "./node_modules/babel-runtime/core-js/object/create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/create.js",
			"name": "./node_modules/babel-runtime/core-js/object/create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../helpers/typeof": [
		{
			"id": "./node_modules/babel-runtime/helpers/typeof.js",
			"name": "./node_modules/babel-runtime/helpers/typeof.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/helpers/typeof.js",
			"name": "./node_modules/babel-runtime/helpers/typeof.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/symbol/iterator": [
		{
			"id": "./node_modules/babel-runtime/core-js/symbol/iterator.js",
			"name": "./node_modules/babel-runtime/core-js/symbol/iterator.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/symbol/iterator.js",
			"name": "./node_modules/babel-runtime/core-js/symbol/iterator.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/symbol": [
		{
			"id": "./node_modules/babel-runtime/core-js/symbol.js",
			"name": "./node_modules/babel-runtime/core-js/symbol.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/symbol.js",
			"name": "./node_modules/babel-runtime/core-js/symbol.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/symbol": [
		{
			"id": "./node_modules/core-js/library/fn/symbol/index.js",
			"name": "./node_modules/core-js/library/fn/symbol/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/symbol/index.js",
			"name": "./node_modules/core-js/library/fn/symbol/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.symbol": [
		{
			"id": "./node_modules/core-js/library/modules/es6.symbol.js",
			"name": "./node_modules/core-js/library/modules/es6.symbol.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.symbol.js",
			"name": "./node_modules/core-js/library/modules/es6.symbol.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.to-string": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.to-string.js",
			"name": "./node_modules/core-js/library/modules/es6.object.to-string.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.to-string.js",
			"name": "./node_modules/core-js/library/modules/es6.object.to-string.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es7.symbol.async-iterator": [
		{
			"id": "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js",
			"name": "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js",
			"name": "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es7.symbol.observable": [
		{
			"id": "./node_modules/core-js/library/modules/es7.symbol.observable.js",
			"name": "./node_modules/core-js/library/modules/es7.symbol.observable.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es7.symbol.observable.js",
			"name": "./node_modules/core-js/library/modules/es7.symbol.observable.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/_core": [
		{
			"id": "./node_modules/core-js/library/modules/_core.js",
			"name": "./node_modules/core-js/library/modules/_core.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_core.js",
			"name": "./node_modules/core-js/library/modules/_core.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_wks-define": [
		{
			"id": "./node_modules/core-js/library/modules/_wks-define.js",
			"name": "./node_modules/core-js/library/modules/_wks-define.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_wks-define.js",
			"name": "./node_modules/core-js/library/modules/_wks-define.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_global": [
		{
			"id": "./node_modules/core-js/library/modules/_global.js",
			"name": "./node_modules/core-js/library/modules/_global.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_global.js",
			"name": "./node_modules/core-js/library/modules/_global.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_library": [
		{
			"id": "./node_modules/core-js/library/modules/_library.js",
			"name": "./node_modules/core-js/library/modules/_library.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_library.js",
			"name": "./node_modules/core-js/library/modules/_library.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/_wks-ext": [
		{
			"id": "./node_modules/core-js/library/modules/_wks-ext.js",
			"name": "./node_modules/core-js/library/modules/_wks-ext.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_wks-ext.js",
			"name": "./node_modules/core-js/library/modules/_wks-ext.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-dp": [
		{
			"id": "./node_modules/core-js/library/modules/_object-dp.js",
			"name": "./node_modules/core-js/library/modules/_object-dp.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-dp.js",
			"name": "./node_modules/core-js/library/modules/_object-dp.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_an-object": [
		{
			"id": "./node_modules/core-js/library/modules/_an-object.js",
			"name": "./node_modules/core-js/library/modules/_an-object.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_an-object.js",
			"name": "./node_modules/core-js/library/modules/_an-object.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_ie8-dom-define": [
		{
			"id": "./node_modules/core-js/library/modules/_ie8-dom-define.js",
			"name": "./node_modules/core-js/library/modules/_ie8-dom-define.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_ie8-dom-define.js",
			"name": "./node_modules/core-js/library/modules/_ie8-dom-define.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-primitive": [
		{
			"id": "./node_modules/core-js/library/modules/_to-primitive.js",
			"name": "./node_modules/core-js/library/modules/_to-primitive.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-primitive.js",
			"name": "./node_modules/core-js/library/modules/_to-primitive.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_descriptors": [
		{
			"id": "./node_modules/core-js/library/modules/_descriptors.js",
			"name": "./node_modules/core-js/library/modules/_descriptors.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_descriptors.js",
			"name": "./node_modules/core-js/library/modules/_descriptors.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_fails": [
		{
			"id": "./node_modules/core-js/library/modules/_fails.js",
			"name": "./node_modules/core-js/library/modules/_fails.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_fails.js",
			"name": "./node_modules/core-js/library/modules/_fails.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_is-object": [
		{
			"id": "./node_modules/core-js/library/modules/_is-object.js",
			"name": "./node_modules/core-js/library/modules/_is-object.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_is-object.js",
			"name": "./node_modules/core-js/library/modules/_is-object.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_dom-create": [
		{
			"id": "./node_modules/core-js/library/modules/_dom-create.js",
			"name": "./node_modules/core-js/library/modules/_dom-create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_dom-create.js",
			"name": "./node_modules/core-js/library/modules/_dom-create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_wks": [
		{
			"id": "./node_modules/core-js/library/modules/_wks.js",
			"name": "./node_modules/core-js/library/modules/_wks.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_wks.js",
			"name": "./node_modules/core-js/library/modules/_wks.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_shared": [
		{
			"id": "./node_modules/core-js/library/modules/_shared.js",
			"name": "./node_modules/core-js/library/modules/_shared.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_shared.js",
			"name": "./node_modules/core-js/library/modules/_shared.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_uid": [
		{
			"id": "./node_modules/core-js/library/modules/_uid.js",
			"name": "./node_modules/core-js/library/modules/_uid.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_uid.js",
			"name": "./node_modules/core-js/library/modules/_uid.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_has": [
		{
			"id": "./node_modules/core-js/library/modules/_has.js",
			"name": "./node_modules/core-js/library/modules/_has.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_has.js",
			"name": "./node_modules/core-js/library/modules/_has.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_export": [
		{
			"id": "./node_modules/core-js/library/modules/_export.js",
			"name": "./node_modules/core-js/library/modules/_export.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_export.js",
			"name": "./node_modules/core-js/library/modules/_export.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_redefine": [
		{
			"id": "./node_modules/core-js/library/modules/_redefine.js",
			"name": "./node_modules/core-js/library/modules/_redefine.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_redefine.js",
			"name": "./node_modules/core-js/library/modules/_redefine.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_meta": [
		{
			"id": "./node_modules/core-js/library/modules/_meta.js",
			"name": "./node_modules/core-js/library/modules/_meta.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_meta.js",
			"name": "./node_modules/core-js/library/modules/_meta.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_set-to-string-tag": [
		{
			"id": "./node_modules/core-js/library/modules/_set-to-string-tag.js",
			"name": "./node_modules/core-js/library/modules/_set-to-string-tag.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_set-to-string-tag.js",
			"name": "./node_modules/core-js/library/modules/_set-to-string-tag.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_enum-keys": [
		{
			"id": "./node_modules/core-js/library/modules/_enum-keys.js",
			"name": "./node_modules/core-js/library/modules/_enum-keys.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_enum-keys.js",
			"name": "./node_modules/core-js/library/modules/_enum-keys.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_is-array": [
		{
			"id": "./node_modules/core-js/library/modules/_is-array.js",
			"name": "./node_modules/core-js/library/modules/_is-array.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_is-array.js",
			"name": "./node_modules/core-js/library/modules/_is-array.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-iobject": [
		{
			"id": "./node_modules/core-js/library/modules/_to-iobject.js",
			"name": "./node_modules/core-js/library/modules/_to-iobject.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-iobject.js",
			"name": "./node_modules/core-js/library/modules/_to-iobject.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_property-desc": [
		{
			"id": "./node_modules/core-js/library/modules/_property-desc.js",
			"name": "./node_modules/core-js/library/modules/_property-desc.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_property-desc.js",
			"name": "./node_modules/core-js/library/modules/_property-desc.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-create": [
		{
			"id": "./node_modules/core-js/library/modules/_object-create.js",
			"name": "./node_modules/core-js/library/modules/_object-create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-create.js",
			"name": "./node_modules/core-js/library/modules/_object-create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-gopn-ext": [
		{
			"id": "./node_modules/core-js/library/modules/_object-gopn-ext.js",
			"name": "./node_modules/core-js/library/modules/_object-gopn-ext.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-gopn-ext.js",
			"name": "./node_modules/core-js/library/modules/_object-gopn-ext.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-gopd": [
		{
			"id": "./node_modules/core-js/library/modules/_object-gopd.js",
			"name": "./node_modules/core-js/library/modules/_object-gopd.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-gopd.js",
			"name": "./node_modules/core-js/library/modules/_object-gopd.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-keys": [
		{
			"id": "./node_modules/core-js/library/modules/_object-keys.js",
			"name": "./node_modules/core-js/library/modules/_object-keys.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-keys.js",
			"name": "./node_modules/core-js/library/modules/_object-keys.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-gopn": [
		{
			"id": "./node_modules/core-js/library/modules/_object-gopn.js",
			"name": "./node_modules/core-js/library/modules/_object-gopn.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-gopn.js",
			"name": "./node_modules/core-js/library/modules/_object-gopn.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-pie": [
		{
			"id": "./node_modules/core-js/library/modules/_object-pie.js",
			"name": "./node_modules/core-js/library/modules/_object-pie.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-pie.js",
			"name": "./node_modules/core-js/library/modules/_object-pie.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-gops": [
		{
			"id": "./node_modules/core-js/library/modules/_object-gops.js",
			"name": "./node_modules/core-js/library/modules/_object-gops.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-gops.js",
			"name": "./node_modules/core-js/library/modules/_object-gops.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_hide": [
		{
			"id": "./node_modules/core-js/library/modules/_hide.js",
			"name": "./node_modules/core-js/library/modules/_hide.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_hide.js",
			"name": "./node_modules/core-js/library/modules/_hide.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-keys-internal": [
		{
			"id": "./node_modules/core-js/library/modules/_object-keys-internal.js",
			"name": "./node_modules/core-js/library/modules/_object-keys-internal.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-keys-internal.js",
			"name": "./node_modules/core-js/library/modules/_object-keys-internal.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_enum-bug-keys": [
		{
			"id": "./node_modules/core-js/library/modules/_enum-bug-keys.js",
			"name": "./node_modules/core-js/library/modules/_enum-bug-keys.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_enum-bug-keys.js",
			"name": "./node_modules/core-js/library/modules/_enum-bug-keys.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_array-includes": [
		{
			"id": "./node_modules/core-js/library/modules/_array-includes.js",
			"name": "./node_modules/core-js/library/modules/_array-includes.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_array-includes.js",
			"name": "./node_modules/core-js/library/modules/_array-includes.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_shared-key": [
		{
			"id": "./node_modules/core-js/library/modules/_shared-key.js",
			"name": "./node_modules/core-js/library/modules/_shared-key.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_shared-key.js",
			"name": "./node_modules/core-js/library/modules/_shared-key.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-length": [
		{
			"id": "./node_modules/core-js/library/modules/_to-length.js",
			"name": "./node_modules/core-js/library/modules/_to-length.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-length.js",
			"name": "./node_modules/core-js/library/modules/_to-length.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-absolute-index": [
		{
			"id": "./node_modules/core-js/library/modules/_to-absolute-index.js",
			"name": "./node_modules/core-js/library/modules/_to-absolute-index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-absolute-index.js",
			"name": "./node_modules/core-js/library/modules/_to-absolute-index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-integer": [
		{
			"id": "./node_modules/core-js/library/modules/_to-integer.js",
			"name": "./node_modules/core-js/library/modules/_to-integer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-integer.js",
			"name": "./node_modules/core-js/library/modules/_to-integer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-dps": [
		{
			"id": "./node_modules/core-js/library/modules/_object-dps.js",
			"name": "./node_modules/core-js/library/modules/_object-dps.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-dps.js",
			"name": "./node_modules/core-js/library/modules/_object-dps.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_html": [
		{
			"id": "./node_modules/core-js/library/modules/_html.js",
			"name": "./node_modules/core-js/library/modules/_html.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_html.js",
			"name": "./node_modules/core-js/library/modules/_html.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_iobject": [
		{
			"id": "./node_modules/core-js/library/modules/_iobject.js",
			"name": "./node_modules/core-js/library/modules/_iobject.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_iobject.js",
			"name": "./node_modules/core-js/library/modules/_iobject.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_defined": [
		{
			"id": "./node_modules/core-js/library/modules/_defined.js",
			"name": "./node_modules/core-js/library/modules/_defined.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_defined.js",
			"name": "./node_modules/core-js/library/modules/_defined.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_cof": [
		{
			"id": "./node_modules/core-js/library/modules/_cof.js",
			"name": "./node_modules/core-js/library/modules/_cof.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_cof.js",
			"name": "./node_modules/core-js/library/modules/_cof.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_ctx": [
		{
			"id": "./node_modules/core-js/library/modules/_ctx.js",
			"name": "./node_modules/core-js/library/modules/_ctx.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_ctx.js",
			"name": "./node_modules/core-js/library/modules/_ctx.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_a-function": [
		{
			"id": "./node_modules/core-js/library/modules/_a-function.js",
			"name": "./node_modules/core-js/library/modules/_a-function.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_a-function.js",
			"name": "./node_modules/core-js/library/modules/_a-function.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/symbol/iterator": [
		{
			"id": "./node_modules/core-js/library/fn/symbol/iterator.js",
			"name": "./node_modules/core-js/library/fn/symbol/iterator.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/symbol/iterator.js",
			"name": "./node_modules/core-js/library/fn/symbol/iterator.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../modules/es6.string.iterator": [
		{
			"id": "./node_modules/core-js/library/modules/es6.string.iterator.js",
			"name": "./node_modules/core-js/library/modules/es6.string.iterator.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.string.iterator.js",
			"name": "./node_modules/core-js/library/modules/es6.string.iterator.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../modules/web.dom.iterable": [
		{
			"id": "./node_modules/core-js/library/modules/web.dom.iterable.js",
			"name": "./node_modules/core-js/library/modules/web.dom.iterable.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/web.dom.iterable.js",
			"name": "./node_modules/core-js/library/modules/web.dom.iterable.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./es6.array.iterator": [
		{
			"id": "./node_modules/core-js/library/modules/es6.array.iterator.js",
			"name": "./node_modules/core-js/library/modules/es6.array.iterator.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.array.iterator.js",
			"name": "./node_modules/core-js/library/modules/es6.array.iterator.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_iterators": [
		{
			"id": "./node_modules/core-js/library/modules/_iterators.js",
			"name": "./node_modules/core-js/library/modules/_iterators.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_iterators.js",
			"name": "./node_modules/core-js/library/modules/_iterators.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_add-to-unscopables": [
		{
			"id": "./node_modules/core-js/library/modules/_add-to-unscopables.js",
			"name": "./node_modules/core-js/library/modules/_add-to-unscopables.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_add-to-unscopables.js",
			"name": "./node_modules/core-js/library/modules/_add-to-unscopables.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_iter-step": [
		{
			"id": "./node_modules/core-js/library/modules/_iter-step.js",
			"name": "./node_modules/core-js/library/modules/_iter-step.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_iter-step.js",
			"name": "./node_modules/core-js/library/modules/_iter-step.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_iter-define": [
		{
			"id": "./node_modules/core-js/library/modules/_iter-define.js",
			"name": "./node_modules/core-js/library/modules/_iter-define.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_iter-define.js",
			"name": "./node_modules/core-js/library/modules/_iter-define.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_iter-create": [
		{
			"id": "./node_modules/core-js/library/modules/_iter-create.js",
			"name": "./node_modules/core-js/library/modules/_iter-create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_iter-create.js",
			"name": "./node_modules/core-js/library/modules/_iter-create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-gpo": [
		{
			"id": "./node_modules/core-js/library/modules/_object-gpo.js",
			"name": "./node_modules/core-js/library/modules/_object-gpo.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-gpo.js",
			"name": "./node_modules/core-js/library/modules/_object-gpo.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_to-object": [
		{
			"id": "./node_modules/core-js/library/modules/_to-object.js",
			"name": "./node_modules/core-js/library/modules/_to-object.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_to-object.js",
			"name": "./node_modules/core-js/library/modules/_to-object.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_string-at": [
		{
			"id": "./node_modules/core-js/library/modules/_string-at.js",
			"name": "./node_modules/core-js/library/modules/_string-at.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_string-at.js",
			"name": "./node_modules/core-js/library/modules/_string-at.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/object/create": [
		{
			"id": "./node_modules/core-js/library/fn/object/create.js",
			"name": "./node_modules/core-js/library/fn/object/create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/create.js",
			"name": "./node_modules/core-js/library/fn/object/create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.create": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.create.js",
			"name": "./node_modules/core-js/library/modules/es6.object.create.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.create.js",
			"name": "./node_modules/core-js/library/modules/es6.object.create.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/object/set-prototype-of": [
		{
			"id": "./node_modules/core-js/library/fn/object/set-prototype-of.js",
			"name": "./node_modules/core-js/library/fn/object/set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/set-prototype-of.js",
			"name": "./node_modules/core-js/library/fn/object/set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.set-prototype-of": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js",
			"name": "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js",
			"name": "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_set-proto": [
		{
			"id": "./node_modules/core-js/library/modules/_set-proto.js",
			"name": "./node_modules/core-js/library/modules/_set-proto.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_set-proto.js",
			"name": "./node_modules/core-js/library/modules/_set-proto.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/object/define-property": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-property.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-property.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/define-property.js",
			"name": "./node_modules/babel-runtime/core-js/object/define-property.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/object/define-property": [
		{
			"id": "./node_modules/core-js/library/fn/object/define-property.js",
			"name": "./node_modules/core-js/library/fn/object/define-property.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/define-property.js",
			"name": "./node_modules/core-js/library/fn/object/define-property.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.define-property": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-property.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-property.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.define-property.js",
			"name": "./node_modules/core-js/library/modules/es6.object.define-property.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/object/get-prototype-of": [
		{
			"id": "./node_modules/core-js/library/fn/object/get-prototype-of.js",
			"name": "./node_modules/core-js/library/fn/object/get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/get-prototype-of.js",
			"name": "./node_modules/core-js/library/fn/object/get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.get-prototype-of": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js",
			"name": "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js",
			"name": "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-sap": [
		{
			"id": "./node_modules/core-js/library/modules/_object-sap.js",
			"name": "./node_modules/core-js/library/modules/_object-sap.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-sap.js",
			"name": "./node_modules/core-js/library/modules/_object-sap.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"reactstrap": [
		{
			"id": "./node_modules/reactstrap/dist/reactstrap.es.js",
			"name": "./node_modules/reactstrap/dist/reactstrap.es.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/reactstrap/dist/reactstrap.es.js",
			"name": "./node_modules/reactstrap/dist/reactstrap.es.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../static/svg/ddiy-logo.svg": [
		{
			"id": "./src/static/svg/ddiy-logo.svg",
			"name": "./src/static/svg/ddiy-logo.svg",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/static/svg/ddiy-logo.svg",
			"name": "./src/static/svg/ddiy-logo.svg",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"classnames": [
		{
			"id": "./node_modules/classnames/index.js",
			"name": "./node_modules/classnames/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/classnames/index.js",
			"name": "./node_modules/classnames/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"lodash.isfunction": [
		{
			"id": "./node_modules/lodash.isfunction/index.js",
			"name": "./node_modules/lodash.isfunction/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/lodash.isfunction/index.js",
			"name": "./node_modules/lodash.isfunction/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"lodash.isobject": [
		{
			"id": "./node_modules/lodash.isobject/index.js",
			"name": "./node_modules/lodash.isobject/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/lodash.isobject/index.js",
			"name": "./node_modules/lodash.isobject/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-popper": [
		{
			"id": "./node_modules/react-popper/lib/react-popper.js",
			"name": "./node_modules/react-popper/lib/react-popper.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-popper/lib/react-popper.js",
			"name": "./node_modules/react-popper/lib/react-popper.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"lodash.tonumber": [
		{
			"id": "./node_modules/lodash.tonumber/index.js",
			"name": "./node_modules/lodash.tonumber/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/lodash.tonumber/index.js",
			"name": "./node_modules/lodash.tonumber/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Manager": [
		{
			"id": "./node_modules/react-popper/lib/Manager.js",
			"name": "./node_modules/react-popper/lib/Manager.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-popper/lib/Manager.js",
			"name": "./node_modules/react-popper/lib/Manager.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Target": [
		{
			"id": "./node_modules/react-popper/lib/Target.js",
			"name": "./node_modules/react-popper/lib/Target.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-popper/lib/Target.js",
			"name": "./node_modules/react-popper/lib/Target.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Popper": [
		{
			"id": "./node_modules/react-popper/lib/Popper.js",
			"name": "./node_modules/react-popper/lib/Popper.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-popper/lib/Popper.js",
			"name": "./node_modules/react-popper/lib/Popper.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Arrow": [
		{
			"id": "./node_modules/react-popper/lib/Arrow.js",
			"name": "./node_modules/react-popper/lib/Arrow.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-popper/lib/Arrow.js",
			"name": "./node_modules/react-popper/lib/Arrow.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"popper.js": [
		{
			"id": "./node_modules/popper.js/dist/esm/popper.js",
			"name": "./node_modules/popper.js/dist/esm/popper.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/popper.js/dist/esm/popper.js",
			"name": "./node_modules/popper.js/dist/esm/popper.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./../webpack/buildin/global.js": [
		{
			"id": "./node_modules/webpack/buildin/global.js",
			"name": "./node_modules/webpack/buildin/global.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/webpack/buildin/global.js",
			"name": "./node_modules/webpack/buildin/global.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-feather": [
		{
			"id": "./node_modules/react-feather/dist/index.js",
			"name": "./node_modules/react-feather/dist/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/index.js",
			"name": "./node_modules/react-feather/dist/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"glamor": [
		{
			"id": "./node_modules/glamor/lib/index.js",
			"name": "./node_modules/glamor/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/index.js",
			"name": "./node_modules/glamor/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./P": [
		{
			"id": "./src/components/P.js",
			"name": "./src/components/P.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/P.js",
			"name": "./src/components/P.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./headlines/H1": [
		{
			"id": "./src/components/headlines/H1.js",
			"name": "./src/components/headlines/H1.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/headlines/H1.js",
			"name": "./src/components/headlines/H1.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./headlines/H2": [
		{
			"id": "./src/components/headlines/H2.js",
			"name": "./src/components/headlines/H2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/components/headlines/H2.js",
			"name": "./src/components/headlines/H2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./sheet.js": [
		{
			"id": "./node_modules/glamor/lib/sheet.js",
			"name": "./node_modules/glamor/lib/sheet.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/sheet.js",
			"name": "./node_modules/glamor/lib/sheet.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./CSSPropertyOperations": [
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./clean.js": [
		{
			"id": "./node_modules/glamor/lib/clean.js",
			"name": "./node_modules/glamor/lib/clean.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/clean.js",
			"name": "./node_modules/glamor/lib/clean.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./plugins": [
		{
			"id": "./node_modules/glamor/lib/plugins.js",
			"name": "./node_modules/glamor/lib/plugins.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/plugins.js",
			"name": "./node_modules/glamor/lib/plugins.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./hash": [
		{
			"id": "./node_modules/glamor/lib/hash.js",
			"name": "./node_modules/glamor/lib/hash.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/hash.js",
			"name": "./node_modules/glamor/lib/hash.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./prefixer": [
		{
			"id": "./node_modules/glamor/lib/prefixer.js",
			"name": "./node_modules/glamor/lib/prefixer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/prefixer.js",
			"name": "./node_modules/glamor/lib/prefixer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/staticData": [
		{
			"id": "./node_modules/inline-style-prefixer/static/staticData.js",
			"name": "./node_modules/inline-style-prefixer/static/staticData.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/staticData.js",
			"name": "./node_modules/inline-style-prefixer/static/staticData.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/utils/prefixProperty": [
		{
			"id": "./node_modules/inline-style-prefixer/utils/prefixProperty.js",
			"name": "./node_modules/inline-style-prefixer/utils/prefixProperty.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/utils/prefixProperty.js",
			"name": "./node_modules/inline-style-prefixer/utils/prefixProperty.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/utils/prefixValue": [
		{
			"id": "./node_modules/inline-style-prefixer/utils/prefixValue.js",
			"name": "./node_modules/inline-style-prefixer/utils/prefixValue.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/utils/prefixValue.js",
			"name": "./node_modules/inline-style-prefixer/utils/prefixValue.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/cursor": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/cursor.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/cursor.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/cursor.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/cursor.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/crossFade": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/crossFade.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/crossFade.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/crossFade.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/crossFade.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/filter": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/filter.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/filter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/filter.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/filter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/flex": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/flex.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/flex.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/flex.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/flex.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/flexboxOld": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/gradient": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/gradient.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/gradient.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/gradient.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/gradient.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/imageSet": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/imageSet.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/imageSet.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/imageSet.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/imageSet.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/position": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/position.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/position.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/position.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/position.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/sizing": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/sizing.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/sizing.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/sizing.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/sizing.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"inline-style-prefixer/static/plugins/transition": [
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/transition.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/transition.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/static/plugins/transition.js",
			"name": "./node_modules/inline-style-prefixer/static/plugins/transition.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"css-in-js-utils/lib/hyphenateProperty": [
		{
			"id": "./node_modules/css-in-js-utils/lib/hyphenateProperty.js",
			"name": "./node_modules/css-in-js-utils/lib/hyphenateProperty.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/css-in-js-utils/lib/hyphenateProperty.js",
			"name": "./node_modules/css-in-js-utils/lib/hyphenateProperty.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"css-in-js-utils/lib/isPrefixedValue": [
		{
			"id": "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
			"name": "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
			"name": "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./capitalizeString": [
		{
			"id": "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
			"name": "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
			"name": "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"hyphenate-style-name": [
		{
			"id": "./node_modules/hyphenate-style-name/index.js",
			"name": "./node_modules/hyphenate-style-name/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/hyphenate-style-name/index.js",
			"name": "./node_modules/hyphenate-style-name/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/camelizeStyleName": [
		{
			"id": "./node_modules/fbjs/lib/camelizeStyleName.js",
			"name": "./node_modules/fbjs/lib/camelizeStyleName.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/camelizeStyleName.js",
			"name": "./node_modules/fbjs/lib/camelizeStyleName.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./dangerousStyleValue": [
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/hyphenateStyleName": [
		{
			"id": "./node_modules/fbjs/lib/hyphenateStyleName.js",
			"name": "./node_modules/fbjs/lib/hyphenateStyleName.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/hyphenateStyleName.js",
			"name": "./node_modules/fbjs/lib/hyphenateStyleName.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/memoizeStringOnly": [
		{
			"id": "./node_modules/fbjs/lib/memoizeStringOnly.js",
			"name": "./node_modules/fbjs/lib/memoizeStringOnly.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/memoizeStringOnly.js",
			"name": "./node_modules/fbjs/lib/memoizeStringOnly.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/warning": [
		{
			"id": "./node_modules/fbjs/lib/warning.js",
			"name": "./node_modules/fbjs/lib/warning.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/warning.js",
			"name": "./node_modules/fbjs/lib/warning.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./hyphenate": [
		{
			"id": "./node_modules/fbjs/lib/hyphenate.js",
			"name": "./node_modules/fbjs/lib/hyphenate.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/hyphenate.js",
			"name": "./node_modules/fbjs/lib/hyphenate.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./CSSProperty": [
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js",
			"name": "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./camelize": [
		{
			"id": "./node_modules/fbjs/lib/camelize.js",
			"name": "./node_modules/fbjs/lib/camelize.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/camelize.js",
			"name": "./node_modules/fbjs/lib/camelize.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/activity": [
		{
			"id": "./node_modules/react-feather/dist/icons/activity.js",
			"name": "./node_modules/react-feather/dist/icons/activity.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/activity.js",
			"name": "./node_modules/react-feather/dist/icons/activity.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/airplay": [
		{
			"id": "./node_modules/react-feather/dist/icons/airplay.js",
			"name": "./node_modules/react-feather/dist/icons/airplay.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/airplay.js",
			"name": "./node_modules/react-feather/dist/icons/airplay.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/alert-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/alert-circle.js",
			"name": "./node_modules/react-feather/dist/icons/alert-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/alert-circle.js",
			"name": "./node_modules/react-feather/dist/icons/alert-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/alert-octagon": [
		{
			"id": "./node_modules/react-feather/dist/icons/alert-octagon.js",
			"name": "./node_modules/react-feather/dist/icons/alert-octagon.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/alert-octagon.js",
			"name": "./node_modules/react-feather/dist/icons/alert-octagon.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/alert-triangle": [
		{
			"id": "./node_modules/react-feather/dist/icons/alert-triangle.js",
			"name": "./node_modules/react-feather/dist/icons/alert-triangle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/alert-triangle.js",
			"name": "./node_modules/react-feather/dist/icons/alert-triangle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/align-center": [
		{
			"id": "./node_modules/react-feather/dist/icons/align-center.js",
			"name": "./node_modules/react-feather/dist/icons/align-center.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/align-center.js",
			"name": "./node_modules/react-feather/dist/icons/align-center.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/align-justify": [
		{
			"id": "./node_modules/react-feather/dist/icons/align-justify.js",
			"name": "./node_modules/react-feather/dist/icons/align-justify.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/align-justify.js",
			"name": "./node_modules/react-feather/dist/icons/align-justify.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/align-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/align-left.js",
			"name": "./node_modules/react-feather/dist/icons/align-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/align-left.js",
			"name": "./node_modules/react-feather/dist/icons/align-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/align-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/align-right.js",
			"name": "./node_modules/react-feather/dist/icons/align-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/align-right.js",
			"name": "./node_modules/react-feather/dist/icons/align-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/anchor": [
		{
			"id": "./node_modules/react-feather/dist/icons/anchor.js",
			"name": "./node_modules/react-feather/dist/icons/anchor.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/anchor.js",
			"name": "./node_modules/react-feather/dist/icons/anchor.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/aperture": [
		{
			"id": "./node_modules/react-feather/dist/icons/aperture.js",
			"name": "./node_modules/react-feather/dist/icons/aperture.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/aperture.js",
			"name": "./node_modules/react-feather/dist/icons/aperture.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/archive": [
		{
			"id": "./node_modules/react-feather/dist/icons/archive.js",
			"name": "./node_modules/react-feather/dist/icons/archive.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/archive.js",
			"name": "./node_modules/react-feather/dist/icons/archive.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-down-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-down-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-down-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-down.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-left-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-left-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-left-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-left-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-left-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-right-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-right-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-right-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-right-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-right-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-up-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-circle.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-up-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-left.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-up-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up-right.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/arrow-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/arrow-up.js",
			"name": "./node_modules/react-feather/dist/icons/arrow-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/at-sign": [
		{
			"id": "./node_modules/react-feather/dist/icons/at-sign.js",
			"name": "./node_modules/react-feather/dist/icons/at-sign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/at-sign.js",
			"name": "./node_modules/react-feather/dist/icons/at-sign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/award": [
		{
			"id": "./node_modules/react-feather/dist/icons/award.js",
			"name": "./node_modules/react-feather/dist/icons/award.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/award.js",
			"name": "./node_modules/react-feather/dist/icons/award.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bar-chart-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/bar-chart-2.js",
			"name": "./node_modules/react-feather/dist/icons/bar-chart-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bar-chart-2.js",
			"name": "./node_modules/react-feather/dist/icons/bar-chart-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bar-chart": [
		{
			"id": "./node_modules/react-feather/dist/icons/bar-chart.js",
			"name": "./node_modules/react-feather/dist/icons/bar-chart.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bar-chart.js",
			"name": "./node_modules/react-feather/dist/icons/bar-chart.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/battery-charging": [
		{
			"id": "./node_modules/react-feather/dist/icons/battery-charging.js",
			"name": "./node_modules/react-feather/dist/icons/battery-charging.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/battery-charging.js",
			"name": "./node_modules/react-feather/dist/icons/battery-charging.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/battery": [
		{
			"id": "./node_modules/react-feather/dist/icons/battery.js",
			"name": "./node_modules/react-feather/dist/icons/battery.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/battery.js",
			"name": "./node_modules/react-feather/dist/icons/battery.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bell-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/bell-off.js",
			"name": "./node_modules/react-feather/dist/icons/bell-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bell-off.js",
			"name": "./node_modules/react-feather/dist/icons/bell-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bell": [
		{
			"id": "./node_modules/react-feather/dist/icons/bell.js",
			"name": "./node_modules/react-feather/dist/icons/bell.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bell.js",
			"name": "./node_modules/react-feather/dist/icons/bell.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bluetooth": [
		{
			"id": "./node_modules/react-feather/dist/icons/bluetooth.js",
			"name": "./node_modules/react-feather/dist/icons/bluetooth.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bluetooth.js",
			"name": "./node_modules/react-feather/dist/icons/bluetooth.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bold": [
		{
			"id": "./node_modules/react-feather/dist/icons/bold.js",
			"name": "./node_modules/react-feather/dist/icons/bold.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bold.js",
			"name": "./node_modules/react-feather/dist/icons/bold.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/book-open": [
		{
			"id": "./node_modules/react-feather/dist/icons/book-open.js",
			"name": "./node_modules/react-feather/dist/icons/book-open.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/book-open.js",
			"name": "./node_modules/react-feather/dist/icons/book-open.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/book": [
		{
			"id": "./node_modules/react-feather/dist/icons/book.js",
			"name": "./node_modules/react-feather/dist/icons/book.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/book.js",
			"name": "./node_modules/react-feather/dist/icons/book.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/bookmark": [
		{
			"id": "./node_modules/react-feather/dist/icons/bookmark.js",
			"name": "./node_modules/react-feather/dist/icons/bookmark.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/bookmark.js",
			"name": "./node_modules/react-feather/dist/icons/bookmark.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/box": [
		{
			"id": "./node_modules/react-feather/dist/icons/box.js",
			"name": "./node_modules/react-feather/dist/icons/box.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/box.js",
			"name": "./node_modules/react-feather/dist/icons/box.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/briefcase": [
		{
			"id": "./node_modules/react-feather/dist/icons/briefcase.js",
			"name": "./node_modules/react-feather/dist/icons/briefcase.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/briefcase.js",
			"name": "./node_modules/react-feather/dist/icons/briefcase.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/calendar": [
		{
			"id": "./node_modules/react-feather/dist/icons/calendar.js",
			"name": "./node_modules/react-feather/dist/icons/calendar.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/calendar.js",
			"name": "./node_modules/react-feather/dist/icons/calendar.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/camera-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/camera-off.js",
			"name": "./node_modules/react-feather/dist/icons/camera-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/camera-off.js",
			"name": "./node_modules/react-feather/dist/icons/camera-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/camera": [
		{
			"id": "./node_modules/react-feather/dist/icons/camera.js",
			"name": "./node_modules/react-feather/dist/icons/camera.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/camera.js",
			"name": "./node_modules/react-feather/dist/icons/camera.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cast": [
		{
			"id": "./node_modules/react-feather/dist/icons/cast.js",
			"name": "./node_modules/react-feather/dist/icons/cast.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cast.js",
			"name": "./node_modules/react-feather/dist/icons/cast.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/check-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/check-circle.js",
			"name": "./node_modules/react-feather/dist/icons/check-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/check-circle.js",
			"name": "./node_modules/react-feather/dist/icons/check-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/check-square": [
		{
			"id": "./node_modules/react-feather/dist/icons/check-square.js",
			"name": "./node_modules/react-feather/dist/icons/check-square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/check-square.js",
			"name": "./node_modules/react-feather/dist/icons/check-square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/check": [
		{
			"id": "./node_modules/react-feather/dist/icons/check.js",
			"name": "./node_modules/react-feather/dist/icons/check.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/check.js",
			"name": "./node_modules/react-feather/dist/icons/check.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevron-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-down.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-down.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevron-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-left.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-left.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevron-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-right.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-right.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevron-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-up.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevron-up.js",
			"name": "./node_modules/react-feather/dist/icons/chevron-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevrons-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-down.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-down.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevrons-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-left.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-left.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevrons-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-right.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-right.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chevrons-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-up.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chevrons-up.js",
			"name": "./node_modules/react-feather/dist/icons/chevrons-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/chrome": [
		{
			"id": "./node_modules/react-feather/dist/icons/chrome.js",
			"name": "./node_modules/react-feather/dist/icons/chrome.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/chrome.js",
			"name": "./node_modules/react-feather/dist/icons/chrome.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/circle.js",
			"name": "./node_modules/react-feather/dist/icons/circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/circle.js",
			"name": "./node_modules/react-feather/dist/icons/circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/clipboard": [
		{
			"id": "./node_modules/react-feather/dist/icons/clipboard.js",
			"name": "./node_modules/react-feather/dist/icons/clipboard.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/clipboard.js",
			"name": "./node_modules/react-feather/dist/icons/clipboard.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/clock": [
		{
			"id": "./node_modules/react-feather/dist/icons/clock.js",
			"name": "./node_modules/react-feather/dist/icons/clock.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/clock.js",
			"name": "./node_modules/react-feather/dist/icons/clock.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud-drizzle": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-drizzle.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-drizzle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-drizzle.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-drizzle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud-lightning": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-lightning.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-lightning.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-lightning.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-lightning.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-off.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-off.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud-rain": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-rain.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-rain.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-rain.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-rain.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud-snow": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-snow.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-snow.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud-snow.js",
			"name": "./node_modules/react-feather/dist/icons/cloud-snow.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cloud": [
		{
			"id": "./node_modules/react-feather/dist/icons/cloud.js",
			"name": "./node_modules/react-feather/dist/icons/cloud.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cloud.js",
			"name": "./node_modules/react-feather/dist/icons/cloud.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/code": [
		{
			"id": "./node_modules/react-feather/dist/icons/code.js",
			"name": "./node_modules/react-feather/dist/icons/code.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/code.js",
			"name": "./node_modules/react-feather/dist/icons/code.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/codepen": [
		{
			"id": "./node_modules/react-feather/dist/icons/codepen.js",
			"name": "./node_modules/react-feather/dist/icons/codepen.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/codepen.js",
			"name": "./node_modules/react-feather/dist/icons/codepen.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/command": [
		{
			"id": "./node_modules/react-feather/dist/icons/command.js",
			"name": "./node_modules/react-feather/dist/icons/command.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/command.js",
			"name": "./node_modules/react-feather/dist/icons/command.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/compass": [
		{
			"id": "./node_modules/react-feather/dist/icons/compass.js",
			"name": "./node_modules/react-feather/dist/icons/compass.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/compass.js",
			"name": "./node_modules/react-feather/dist/icons/compass.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/copy": [
		{
			"id": "./node_modules/react-feather/dist/icons/copy.js",
			"name": "./node_modules/react-feather/dist/icons/copy.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/copy.js",
			"name": "./node_modules/react-feather/dist/icons/copy.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"/Users/martin/Projects/ddiy-solutions/src/frontend/src/client": [
		{
			"id": "./src/client.js",
			"name": "./src/client.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./src/client.js",
			"name": "./src/client.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-down-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-down-right.js",
			"name": "./node_modules/react-feather/dist/icons/corner-down-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-down-right.js",
			"name": "./node_modules/react-feather/dist/icons/corner-down-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-left-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-left-down.js",
			"name": "./node_modules/react-feather/dist/icons/corner-left-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-left-down.js",
			"name": "./node_modules/react-feather/dist/icons/corner-left-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-left-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-left-up.js",
			"name": "./node_modules/react-feather/dist/icons/corner-left-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-left-up.js",
			"name": "./node_modules/react-feather/dist/icons/corner-left-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-right-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-right-down.js",
			"name": "./node_modules/react-feather/dist/icons/corner-right-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-right-down.js",
			"name": "./node_modules/react-feather/dist/icons/corner-right-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-right-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-right-up.js",
			"name": "./node_modules/react-feather/dist/icons/corner-right-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-right-up.js",
			"name": "./node_modules/react-feather/dist/icons/corner-right-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-up-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-up-left.js",
			"name": "./node_modules/react-feather/dist/icons/corner-up-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-up-left.js",
			"name": "./node_modules/react-feather/dist/icons/corner-up-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/corner-up-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/corner-up-right.js",
			"name": "./node_modules/react-feather/dist/icons/corner-up-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/corner-up-right.js",
			"name": "./node_modules/react-feather/dist/icons/corner-up-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/cpu": [
		{
			"id": "./node_modules/react-feather/dist/icons/cpu.js",
			"name": "./node_modules/react-feather/dist/icons/cpu.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/cpu.js",
			"name": "./node_modules/react-feather/dist/icons/cpu.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/credit-card": [
		{
			"id": "./node_modules/react-feather/dist/icons/credit-card.js",
			"name": "./node_modules/react-feather/dist/icons/credit-card.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/credit-card.js",
			"name": "./node_modules/react-feather/dist/icons/credit-card.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/crop": [
		{
			"id": "./node_modules/react-feather/dist/icons/crop.js",
			"name": "./node_modules/react-feather/dist/icons/crop.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/crop.js",
			"name": "./node_modules/react-feather/dist/icons/crop.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/crosshair": [
		{
			"id": "./node_modules/react-feather/dist/icons/crosshair.js",
			"name": "./node_modules/react-feather/dist/icons/crosshair.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/crosshair.js",
			"name": "./node_modules/react-feather/dist/icons/crosshair.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/database": [
		{
			"id": "./node_modules/react-feather/dist/icons/database.js",
			"name": "./node_modules/react-feather/dist/icons/database.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/database.js",
			"name": "./node_modules/react-feather/dist/icons/database.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/delete": [
		{
			"id": "./node_modules/react-feather/dist/icons/delete.js",
			"name": "./node_modules/react-feather/dist/icons/delete.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/delete.js",
			"name": "./node_modules/react-feather/dist/icons/delete.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/disc": [
		{
			"id": "./node_modules/react-feather/dist/icons/disc.js",
			"name": "./node_modules/react-feather/dist/icons/disc.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/disc.js",
			"name": "./node_modules/react-feather/dist/icons/disc.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/dollar-sign": [
		{
			"id": "./node_modules/react-feather/dist/icons/dollar-sign.js",
			"name": "./node_modules/react-feather/dist/icons/dollar-sign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/dollar-sign.js",
			"name": "./node_modules/react-feather/dist/icons/dollar-sign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/download-cloud": [
		{
			"id": "./node_modules/react-feather/dist/icons/download-cloud.js",
			"name": "./node_modules/react-feather/dist/icons/download-cloud.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/download-cloud.js",
			"name": "./node_modules/react-feather/dist/icons/download-cloud.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/download": [
		{
			"id": "./node_modules/react-feather/dist/icons/download.js",
			"name": "./node_modules/react-feather/dist/icons/download.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/download.js",
			"name": "./node_modules/react-feather/dist/icons/download.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/droplet": [
		{
			"id": "./node_modules/react-feather/dist/icons/droplet.js",
			"name": "./node_modules/react-feather/dist/icons/droplet.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/droplet.js",
			"name": "./node_modules/react-feather/dist/icons/droplet.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/edit-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/edit-2.js",
			"name": "./node_modules/react-feather/dist/icons/edit-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/edit-2.js",
			"name": "./node_modules/react-feather/dist/icons/edit-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/edit-3": [
		{
			"id": "./node_modules/react-feather/dist/icons/edit-3.js",
			"name": "./node_modules/react-feather/dist/icons/edit-3.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/edit-3.js",
			"name": "./node_modules/react-feather/dist/icons/edit-3.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/edit": [
		{
			"id": "./node_modules/react-feather/dist/icons/edit.js",
			"name": "./node_modules/react-feather/dist/icons/edit.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/edit.js",
			"name": "./node_modules/react-feather/dist/icons/edit.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/external-link": [
		{
			"id": "./node_modules/react-feather/dist/icons/external-link.js",
			"name": "./node_modules/react-feather/dist/icons/external-link.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/external-link.js",
			"name": "./node_modules/react-feather/dist/icons/external-link.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/eye-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/eye-off.js",
			"name": "./node_modules/react-feather/dist/icons/eye-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/eye-off.js",
			"name": "./node_modules/react-feather/dist/icons/eye-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/eye": [
		{
			"id": "./node_modules/react-feather/dist/icons/eye.js",
			"name": "./node_modules/react-feather/dist/icons/eye.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/eye.js",
			"name": "./node_modules/react-feather/dist/icons/eye.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/facebook": [
		{
			"id": "./node_modules/react-feather/dist/icons/facebook.js",
			"name": "./node_modules/react-feather/dist/icons/facebook.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/facebook.js",
			"name": "./node_modules/react-feather/dist/icons/facebook.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/fast-forward": [
		{
			"id": "./node_modules/react-feather/dist/icons/fast-forward.js",
			"name": "./node_modules/react-feather/dist/icons/fast-forward.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/fast-forward.js",
			"name": "./node_modules/react-feather/dist/icons/fast-forward.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/feather": [
		{
			"id": "./node_modules/react-feather/dist/icons/feather.js",
			"name": "./node_modules/react-feather/dist/icons/feather.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/feather.js",
			"name": "./node_modules/react-feather/dist/icons/feather.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/file-minus": [
		{
			"id": "./node_modules/react-feather/dist/icons/file-minus.js",
			"name": "./node_modules/react-feather/dist/icons/file-minus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/file-minus.js",
			"name": "./node_modules/react-feather/dist/icons/file-minus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/file-plus": [
		{
			"id": "./node_modules/react-feather/dist/icons/file-plus.js",
			"name": "./node_modules/react-feather/dist/icons/file-plus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/file-plus.js",
			"name": "./node_modules/react-feather/dist/icons/file-plus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/file-text": [
		{
			"id": "./node_modules/react-feather/dist/icons/file-text.js",
			"name": "./node_modules/react-feather/dist/icons/file-text.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/file-text.js",
			"name": "./node_modules/react-feather/dist/icons/file-text.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/file": [
		{
			"id": "./node_modules/react-feather/dist/icons/file.js",
			"name": "./node_modules/react-feather/dist/icons/file.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/file.js",
			"name": "./node_modules/react-feather/dist/icons/file.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/film": [
		{
			"id": "./node_modules/react-feather/dist/icons/film.js",
			"name": "./node_modules/react-feather/dist/icons/film.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/film.js",
			"name": "./node_modules/react-feather/dist/icons/film.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/filter": [
		{
			"id": "./node_modules/react-feather/dist/icons/filter.js",
			"name": "./node_modules/react-feather/dist/icons/filter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/filter.js",
			"name": "./node_modules/react-feather/dist/icons/filter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/flag": [
		{
			"id": "./node_modules/react-feather/dist/icons/flag.js",
			"name": "./node_modules/react-feather/dist/icons/flag.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/flag.js",
			"name": "./node_modules/react-feather/dist/icons/flag.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/folder-minus": [
		{
			"id": "./node_modules/react-feather/dist/icons/folder-minus.js",
			"name": "./node_modules/react-feather/dist/icons/folder-minus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/folder-minus.js",
			"name": "./node_modules/react-feather/dist/icons/folder-minus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/folder-plus": [
		{
			"id": "./node_modules/react-feather/dist/icons/folder-plus.js",
			"name": "./node_modules/react-feather/dist/icons/folder-plus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/folder-plus.js",
			"name": "./node_modules/react-feather/dist/icons/folder-plus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/folder": [
		{
			"id": "./node_modules/react-feather/dist/icons/folder.js",
			"name": "./node_modules/react-feather/dist/icons/folder.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/folder.js",
			"name": "./node_modules/react-feather/dist/icons/folder.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/gift": [
		{
			"id": "./node_modules/react-feather/dist/icons/gift.js",
			"name": "./node_modules/react-feather/dist/icons/gift.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/gift.js",
			"name": "./node_modules/react-feather/dist/icons/gift.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/git-branch": [
		{
			"id": "./node_modules/react-feather/dist/icons/git-branch.js",
			"name": "./node_modules/react-feather/dist/icons/git-branch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/git-branch.js",
			"name": "./node_modules/react-feather/dist/icons/git-branch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/git-commit": [
		{
			"id": "./node_modules/react-feather/dist/icons/git-commit.js",
			"name": "./node_modules/react-feather/dist/icons/git-commit.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/git-commit.js",
			"name": "./node_modules/react-feather/dist/icons/git-commit.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/git-merge": [
		{
			"id": "./node_modules/react-feather/dist/icons/git-merge.js",
			"name": "./node_modules/react-feather/dist/icons/git-merge.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/git-merge.js",
			"name": "./node_modules/react-feather/dist/icons/git-merge.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/git-pull-request": [
		{
			"id": "./node_modules/react-feather/dist/icons/git-pull-request.js",
			"name": "./node_modules/react-feather/dist/icons/git-pull-request.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/git-pull-request.js",
			"name": "./node_modules/react-feather/dist/icons/git-pull-request.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/github": [
		{
			"id": "./node_modules/react-feather/dist/icons/github.js",
			"name": "./node_modules/react-feather/dist/icons/github.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/github.js",
			"name": "./node_modules/react-feather/dist/icons/github.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/gitlab": [
		{
			"id": "./node_modules/react-feather/dist/icons/gitlab.js",
			"name": "./node_modules/react-feather/dist/icons/gitlab.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/gitlab.js",
			"name": "./node_modules/react-feather/dist/icons/gitlab.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/globe": [
		{
			"id": "./node_modules/react-feather/dist/icons/globe.js",
			"name": "./node_modules/react-feather/dist/icons/globe.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/globe.js",
			"name": "./node_modules/react-feather/dist/icons/globe.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/grid": [
		{
			"id": "./node_modules/react-feather/dist/icons/grid.js",
			"name": "./node_modules/react-feather/dist/icons/grid.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/grid.js",
			"name": "./node_modules/react-feather/dist/icons/grid.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/hard-drive": [
		{
			"id": "./node_modules/react-feather/dist/icons/hard-drive.js",
			"name": "./node_modules/react-feather/dist/icons/hard-drive.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/hard-drive.js",
			"name": "./node_modules/react-feather/dist/icons/hard-drive.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/hash": [
		{
			"id": "./node_modules/react-feather/dist/icons/hash.js",
			"name": "./node_modules/react-feather/dist/icons/hash.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/hash.js",
			"name": "./node_modules/react-feather/dist/icons/hash.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/headphones": [
		{
			"id": "./node_modules/react-feather/dist/icons/headphones.js",
			"name": "./node_modules/react-feather/dist/icons/headphones.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/headphones.js",
			"name": "./node_modules/react-feather/dist/icons/headphones.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/heart": [
		{
			"id": "./node_modules/react-feather/dist/icons/heart.js",
			"name": "./node_modules/react-feather/dist/icons/heart.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/heart.js",
			"name": "./node_modules/react-feather/dist/icons/heart.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/help-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/help-circle.js",
			"name": "./node_modules/react-feather/dist/icons/help-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/help-circle.js",
			"name": "./node_modules/react-feather/dist/icons/help-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/home": [
		{
			"id": "./node_modules/react-feather/dist/icons/home.js",
			"name": "./node_modules/react-feather/dist/icons/home.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/home.js",
			"name": "./node_modules/react-feather/dist/icons/home.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/image": [
		{
			"id": "./node_modules/react-feather/dist/icons/image.js",
			"name": "./node_modules/react-feather/dist/icons/image.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/image.js",
			"name": "./node_modules/react-feather/dist/icons/image.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/inbox": [
		{
			"id": "./node_modules/react-feather/dist/icons/inbox.js",
			"name": "./node_modules/react-feather/dist/icons/inbox.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/inbox.js",
			"name": "./node_modules/react-feather/dist/icons/inbox.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/info": [
		{
			"id": "./node_modules/react-feather/dist/icons/info.js",
			"name": "./node_modules/react-feather/dist/icons/info.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/info.js",
			"name": "./node_modules/react-feather/dist/icons/info.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/instagram": [
		{
			"id": "./node_modules/react-feather/dist/icons/instagram.js",
			"name": "./node_modules/react-feather/dist/icons/instagram.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/instagram.js",
			"name": "./node_modules/react-feather/dist/icons/instagram.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/italic": [
		{
			"id": "./node_modules/react-feather/dist/icons/italic.js",
			"name": "./node_modules/react-feather/dist/icons/italic.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/italic.js",
			"name": "./node_modules/react-feather/dist/icons/italic.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/layers": [
		{
			"id": "./node_modules/react-feather/dist/icons/layers.js",
			"name": "./node_modules/react-feather/dist/icons/layers.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/layers.js",
			"name": "./node_modules/react-feather/dist/icons/layers.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/layout": [
		{
			"id": "./node_modules/react-feather/dist/icons/layout.js",
			"name": "./node_modules/react-feather/dist/icons/layout.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/layout.js",
			"name": "./node_modules/react-feather/dist/icons/layout.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/life-buoy": [
		{
			"id": "./node_modules/react-feather/dist/icons/life-buoy.js",
			"name": "./node_modules/react-feather/dist/icons/life-buoy.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/life-buoy.js",
			"name": "./node_modules/react-feather/dist/icons/life-buoy.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/link-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/link-2.js",
			"name": "./node_modules/react-feather/dist/icons/link-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/link-2.js",
			"name": "./node_modules/react-feather/dist/icons/link-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/link": [
		{
			"id": "./node_modules/react-feather/dist/icons/link.js",
			"name": "./node_modules/react-feather/dist/icons/link.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/link.js",
			"name": "./node_modules/react-feather/dist/icons/link.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/linkedin": [
		{
			"id": "./node_modules/react-feather/dist/icons/linkedin.js",
			"name": "./node_modules/react-feather/dist/icons/linkedin.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/linkedin.js",
			"name": "./node_modules/react-feather/dist/icons/linkedin.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/list": [
		{
			"id": "./node_modules/react-feather/dist/icons/list.js",
			"name": "./node_modules/react-feather/dist/icons/list.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/list.js",
			"name": "./node_modules/react-feather/dist/icons/list.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/loader": [
		{
			"id": "./node_modules/react-feather/dist/icons/loader.js",
			"name": "./node_modules/react-feather/dist/icons/loader.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/loader.js",
			"name": "./node_modules/react-feather/dist/icons/loader.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/lock": [
		{
			"id": "./node_modules/react-feather/dist/icons/lock.js",
			"name": "./node_modules/react-feather/dist/icons/lock.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/lock.js",
			"name": "./node_modules/react-feather/dist/icons/lock.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/log-in": [
		{
			"id": "./node_modules/react-feather/dist/icons/log-in.js",
			"name": "./node_modules/react-feather/dist/icons/log-in.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/log-in.js",
			"name": "./node_modules/react-feather/dist/icons/log-in.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/log-out": [
		{
			"id": "./node_modules/react-feather/dist/icons/log-out.js",
			"name": "./node_modules/react-feather/dist/icons/log-out.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/log-out.js",
			"name": "./node_modules/react-feather/dist/icons/log-out.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/mail": [
		{
			"id": "./node_modules/react-feather/dist/icons/mail.js",
			"name": "./node_modules/react-feather/dist/icons/mail.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/mail.js",
			"name": "./node_modules/react-feather/dist/icons/mail.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/map-pin": [
		{
			"id": "./node_modules/react-feather/dist/icons/map-pin.js",
			"name": "./node_modules/react-feather/dist/icons/map-pin.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/map-pin.js",
			"name": "./node_modules/react-feather/dist/icons/map-pin.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/map": [
		{
			"id": "./node_modules/react-feather/dist/icons/map.js",
			"name": "./node_modules/react-feather/dist/icons/map.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/map.js",
			"name": "./node_modules/react-feather/dist/icons/map.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/maximize-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/maximize-2.js",
			"name": "./node_modules/react-feather/dist/icons/maximize-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/maximize-2.js",
			"name": "./node_modules/react-feather/dist/icons/maximize-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/maximize": [
		{
			"id": "./node_modules/react-feather/dist/icons/maximize.js",
			"name": "./node_modules/react-feather/dist/icons/maximize.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/maximize.js",
			"name": "./node_modules/react-feather/dist/icons/maximize.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/menu": [
		{
			"id": "./node_modules/react-feather/dist/icons/menu.js",
			"name": "./node_modules/react-feather/dist/icons/menu.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/menu.js",
			"name": "./node_modules/react-feather/dist/icons/menu.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/message-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/message-circle.js",
			"name": "./node_modules/react-feather/dist/icons/message-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/message-circle.js",
			"name": "./node_modules/react-feather/dist/icons/message-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/message-square": [
		{
			"id": "./node_modules/react-feather/dist/icons/message-square.js",
			"name": "./node_modules/react-feather/dist/icons/message-square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/message-square.js",
			"name": "./node_modules/react-feather/dist/icons/message-square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/mic-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/mic-off.js",
			"name": "./node_modules/react-feather/dist/icons/mic-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/mic-off.js",
			"name": "./node_modules/react-feather/dist/icons/mic-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/mic": [
		{
			"id": "./node_modules/react-feather/dist/icons/mic.js",
			"name": "./node_modules/react-feather/dist/icons/mic.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/mic.js",
			"name": "./node_modules/react-feather/dist/icons/mic.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/minimize-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/minimize-2.js",
			"name": "./node_modules/react-feather/dist/icons/minimize-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/minimize-2.js",
			"name": "./node_modules/react-feather/dist/icons/minimize-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/minimize": [
		{
			"id": "./node_modules/react-feather/dist/icons/minimize.js",
			"name": "./node_modules/react-feather/dist/icons/minimize.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/minimize.js",
			"name": "./node_modules/react-feather/dist/icons/minimize.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/minus-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/minus-circle.js",
			"name": "./node_modules/react-feather/dist/icons/minus-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/minus-circle.js",
			"name": "./node_modules/react-feather/dist/icons/minus-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/minus-square": [
		{
			"id": "./node_modules/react-feather/dist/icons/minus-square.js",
			"name": "./node_modules/react-feather/dist/icons/minus-square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/minus-square.js",
			"name": "./node_modules/react-feather/dist/icons/minus-square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/minus": [
		{
			"id": "./node_modules/react-feather/dist/icons/minus.js",
			"name": "./node_modules/react-feather/dist/icons/minus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/minus.js",
			"name": "./node_modules/react-feather/dist/icons/minus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/monitor": [
		{
			"id": "./node_modules/react-feather/dist/icons/monitor.js",
			"name": "./node_modules/react-feather/dist/icons/monitor.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/monitor.js",
			"name": "./node_modules/react-feather/dist/icons/monitor.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/moon": [
		{
			"id": "./node_modules/react-feather/dist/icons/moon.js",
			"name": "./node_modules/react-feather/dist/icons/moon.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/moon.js",
			"name": "./node_modules/react-feather/dist/icons/moon.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/more-horizontal": [
		{
			"id": "./node_modules/react-feather/dist/icons/more-horizontal.js",
			"name": "./node_modules/react-feather/dist/icons/more-horizontal.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/more-horizontal.js",
			"name": "./node_modules/react-feather/dist/icons/more-horizontal.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/more-vertical": [
		{
			"id": "./node_modules/react-feather/dist/icons/more-vertical.js",
			"name": "./node_modules/react-feather/dist/icons/more-vertical.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/more-vertical.js",
			"name": "./node_modules/react-feather/dist/icons/more-vertical.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/move": [
		{
			"id": "./node_modules/react-feather/dist/icons/move.js",
			"name": "./node_modules/react-feather/dist/icons/move.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/move.js",
			"name": "./node_modules/react-feather/dist/icons/move.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/music": [
		{
			"id": "./node_modules/react-feather/dist/icons/music.js",
			"name": "./node_modules/react-feather/dist/icons/music.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/music.js",
			"name": "./node_modules/react-feather/dist/icons/music.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/navigation-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/navigation-2.js",
			"name": "./node_modules/react-feather/dist/icons/navigation-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/navigation-2.js",
			"name": "./node_modules/react-feather/dist/icons/navigation-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/navigation": [
		{
			"id": "./node_modules/react-feather/dist/icons/navigation.js",
			"name": "./node_modules/react-feather/dist/icons/navigation.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/navigation.js",
			"name": "./node_modules/react-feather/dist/icons/navigation.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/octagon": [
		{
			"id": "./node_modules/react-feather/dist/icons/octagon.js",
			"name": "./node_modules/react-feather/dist/icons/octagon.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/octagon.js",
			"name": "./node_modules/react-feather/dist/icons/octagon.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/package": [
		{
			"id": "./node_modules/react-feather/dist/icons/package.js",
			"name": "./node_modules/react-feather/dist/icons/package.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/package.js",
			"name": "./node_modules/react-feather/dist/icons/package.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/paperclip": [
		{
			"id": "./node_modules/react-feather/dist/icons/paperclip.js",
			"name": "./node_modules/react-feather/dist/icons/paperclip.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/paperclip.js",
			"name": "./node_modules/react-feather/dist/icons/paperclip.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/pause-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/pause-circle.js",
			"name": "./node_modules/react-feather/dist/icons/pause-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/pause-circle.js",
			"name": "./node_modules/react-feather/dist/icons/pause-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/pause": [
		{
			"id": "./node_modules/react-feather/dist/icons/pause.js",
			"name": "./node_modules/react-feather/dist/icons/pause.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/pause.js",
			"name": "./node_modules/react-feather/dist/icons/pause.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/percent": [
		{
			"id": "./node_modules/react-feather/dist/icons/percent.js",
			"name": "./node_modules/react-feather/dist/icons/percent.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/percent.js",
			"name": "./node_modules/react-feather/dist/icons/percent.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-call": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-call.js",
			"name": "./node_modules/react-feather/dist/icons/phone-call.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-call.js",
			"name": "./node_modules/react-feather/dist/icons/phone-call.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-forwarded": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-forwarded.js",
			"name": "./node_modules/react-feather/dist/icons/phone-forwarded.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-forwarded.js",
			"name": "./node_modules/react-feather/dist/icons/phone-forwarded.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-incoming": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-incoming.js",
			"name": "./node_modules/react-feather/dist/icons/phone-incoming.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-incoming.js",
			"name": "./node_modules/react-feather/dist/icons/phone-incoming.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-missed": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-missed.js",
			"name": "./node_modules/react-feather/dist/icons/phone-missed.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-missed.js",
			"name": "./node_modules/react-feather/dist/icons/phone-missed.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-off.js",
			"name": "./node_modules/react-feather/dist/icons/phone-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-off.js",
			"name": "./node_modules/react-feather/dist/icons/phone-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone-outgoing": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone-outgoing.js",
			"name": "./node_modules/react-feather/dist/icons/phone-outgoing.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone-outgoing.js",
			"name": "./node_modules/react-feather/dist/icons/phone-outgoing.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/phone": [
		{
			"id": "./node_modules/react-feather/dist/icons/phone.js",
			"name": "./node_modules/react-feather/dist/icons/phone.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/phone.js",
			"name": "./node_modules/react-feather/dist/icons/phone.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/pie-chart": [
		{
			"id": "./node_modules/react-feather/dist/icons/pie-chart.js",
			"name": "./node_modules/react-feather/dist/icons/pie-chart.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/pie-chart.js",
			"name": "./node_modules/react-feather/dist/icons/pie-chart.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/play-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/play-circle.js",
			"name": "./node_modules/react-feather/dist/icons/play-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/play-circle.js",
			"name": "./node_modules/react-feather/dist/icons/play-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/play": [
		{
			"id": "./node_modules/react-feather/dist/icons/play.js",
			"name": "./node_modules/react-feather/dist/icons/play.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/play.js",
			"name": "./node_modules/react-feather/dist/icons/play.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/plus-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/plus-circle.js",
			"name": "./node_modules/react-feather/dist/icons/plus-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/plus-circle.js",
			"name": "./node_modules/react-feather/dist/icons/plus-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/plus-square": [
		{
			"id": "./node_modules/react-feather/dist/icons/plus-square.js",
			"name": "./node_modules/react-feather/dist/icons/plus-square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/plus-square.js",
			"name": "./node_modules/react-feather/dist/icons/plus-square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/plus": [
		{
			"id": "./node_modules/react-feather/dist/icons/plus.js",
			"name": "./node_modules/react-feather/dist/icons/plus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/plus.js",
			"name": "./node_modules/react-feather/dist/icons/plus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/pocket": [
		{
			"id": "./node_modules/react-feather/dist/icons/pocket.js",
			"name": "./node_modules/react-feather/dist/icons/pocket.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/pocket.js",
			"name": "./node_modules/react-feather/dist/icons/pocket.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/power": [
		{
			"id": "./node_modules/react-feather/dist/icons/power.js",
			"name": "./node_modules/react-feather/dist/icons/power.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/power.js",
			"name": "./node_modules/react-feather/dist/icons/power.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/printer": [
		{
			"id": "./node_modules/react-feather/dist/icons/printer.js",
			"name": "./node_modules/react-feather/dist/icons/printer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/printer.js",
			"name": "./node_modules/react-feather/dist/icons/printer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/radio": [
		{
			"id": "./node_modules/react-feather/dist/icons/radio.js",
			"name": "./node_modules/react-feather/dist/icons/radio.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/radio.js",
			"name": "./node_modules/react-feather/dist/icons/radio.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/refresh-ccw": [
		{
			"id": "./node_modules/react-feather/dist/icons/refresh-ccw.js",
			"name": "./node_modules/react-feather/dist/icons/refresh-ccw.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/refresh-ccw.js",
			"name": "./node_modules/react-feather/dist/icons/refresh-ccw.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/refresh-cw": [
		{
			"id": "./node_modules/react-feather/dist/icons/refresh-cw.js",
			"name": "./node_modules/react-feather/dist/icons/refresh-cw.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/refresh-cw.js",
			"name": "./node_modules/react-feather/dist/icons/refresh-cw.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/repeat": [
		{
			"id": "./node_modules/react-feather/dist/icons/repeat.js",
			"name": "./node_modules/react-feather/dist/icons/repeat.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/repeat.js",
			"name": "./node_modules/react-feather/dist/icons/repeat.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/rewind": [
		{
			"id": "./node_modules/react-feather/dist/icons/rewind.js",
			"name": "./node_modules/react-feather/dist/icons/rewind.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/rewind.js",
			"name": "./node_modules/react-feather/dist/icons/rewind.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/rotate-ccw": [
		{
			"id": "./node_modules/react-feather/dist/icons/rotate-ccw.js",
			"name": "./node_modules/react-feather/dist/icons/rotate-ccw.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/rotate-ccw.js",
			"name": "./node_modules/react-feather/dist/icons/rotate-ccw.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/rotate-cw": [
		{
			"id": "./node_modules/react-feather/dist/icons/rotate-cw.js",
			"name": "./node_modules/react-feather/dist/icons/rotate-cw.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/rotate-cw.js",
			"name": "./node_modules/react-feather/dist/icons/rotate-cw.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/rss": [
		{
			"id": "./node_modules/react-feather/dist/icons/rss.js",
			"name": "./node_modules/react-feather/dist/icons/rss.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/rss.js",
			"name": "./node_modules/react-feather/dist/icons/rss.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/save": [
		{
			"id": "./node_modules/react-feather/dist/icons/save.js",
			"name": "./node_modules/react-feather/dist/icons/save.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/save.js",
			"name": "./node_modules/react-feather/dist/icons/save.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/scissors": [
		{
			"id": "./node_modules/react-feather/dist/icons/scissors.js",
			"name": "./node_modules/react-feather/dist/icons/scissors.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/scissors.js",
			"name": "./node_modules/react-feather/dist/icons/scissors.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/search": [
		{
			"id": "./node_modules/react-feather/dist/icons/search.js",
			"name": "./node_modules/react-feather/dist/icons/search.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/search.js",
			"name": "./node_modules/react-feather/dist/icons/search.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/send": [
		{
			"id": "./node_modules/react-feather/dist/icons/send.js",
			"name": "./node_modules/react-feather/dist/icons/send.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/send.js",
			"name": "./node_modules/react-feather/dist/icons/send.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/server": [
		{
			"id": "./node_modules/react-feather/dist/icons/server.js",
			"name": "./node_modules/react-feather/dist/icons/server.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/server.js",
			"name": "./node_modules/react-feather/dist/icons/server.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/settings": [
		{
			"id": "./node_modules/react-feather/dist/icons/settings.js",
			"name": "./node_modules/react-feather/dist/icons/settings.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/settings.js",
			"name": "./node_modules/react-feather/dist/icons/settings.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/share-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/share-2.js",
			"name": "./node_modules/react-feather/dist/icons/share-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/share-2.js",
			"name": "./node_modules/react-feather/dist/icons/share-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/share": [
		{
			"id": "./node_modules/react-feather/dist/icons/share.js",
			"name": "./node_modules/react-feather/dist/icons/share.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/share.js",
			"name": "./node_modules/react-feather/dist/icons/share.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/shield-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/shield-off.js",
			"name": "./node_modules/react-feather/dist/icons/shield-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/shield-off.js",
			"name": "./node_modules/react-feather/dist/icons/shield-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/shield": [
		{
			"id": "./node_modules/react-feather/dist/icons/shield.js",
			"name": "./node_modules/react-feather/dist/icons/shield.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/shield.js",
			"name": "./node_modules/react-feather/dist/icons/shield.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/shopping-bag": [
		{
			"id": "./node_modules/react-feather/dist/icons/shopping-bag.js",
			"name": "./node_modules/react-feather/dist/icons/shopping-bag.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/shopping-bag.js",
			"name": "./node_modules/react-feather/dist/icons/shopping-bag.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/shopping-cart": [
		{
			"id": "./node_modules/react-feather/dist/icons/shopping-cart.js",
			"name": "./node_modules/react-feather/dist/icons/shopping-cart.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/shopping-cart.js",
			"name": "./node_modules/react-feather/dist/icons/shopping-cart.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/shuffle": [
		{
			"id": "./node_modules/react-feather/dist/icons/shuffle.js",
			"name": "./node_modules/react-feather/dist/icons/shuffle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/shuffle.js",
			"name": "./node_modules/react-feather/dist/icons/shuffle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/sidebar": [
		{
			"id": "./node_modules/react-feather/dist/icons/sidebar.js",
			"name": "./node_modules/react-feather/dist/icons/sidebar.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/sidebar.js",
			"name": "./node_modules/react-feather/dist/icons/sidebar.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/skip-back": [
		{
			"id": "./node_modules/react-feather/dist/icons/skip-back.js",
			"name": "./node_modules/react-feather/dist/icons/skip-back.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/skip-back.js",
			"name": "./node_modules/react-feather/dist/icons/skip-back.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/skip-forward": [
		{
			"id": "./node_modules/react-feather/dist/icons/skip-forward.js",
			"name": "./node_modules/react-feather/dist/icons/skip-forward.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/skip-forward.js",
			"name": "./node_modules/react-feather/dist/icons/skip-forward.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/slack": [
		{
			"id": "./node_modules/react-feather/dist/icons/slack.js",
			"name": "./node_modules/react-feather/dist/icons/slack.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/slack.js",
			"name": "./node_modules/react-feather/dist/icons/slack.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/slash": [
		{
			"id": "./node_modules/react-feather/dist/icons/slash.js",
			"name": "./node_modules/react-feather/dist/icons/slash.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/slash.js",
			"name": "./node_modules/react-feather/dist/icons/slash.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/sliders": [
		{
			"id": "./node_modules/react-feather/dist/icons/sliders.js",
			"name": "./node_modules/react-feather/dist/icons/sliders.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/sliders.js",
			"name": "./node_modules/react-feather/dist/icons/sliders.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/smartphone": [
		{
			"id": "./node_modules/react-feather/dist/icons/smartphone.js",
			"name": "./node_modules/react-feather/dist/icons/smartphone.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/smartphone.js",
			"name": "./node_modules/react-feather/dist/icons/smartphone.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/speaker": [
		{
			"id": "./node_modules/react-feather/dist/icons/speaker.js",
			"name": "./node_modules/react-feather/dist/icons/speaker.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/speaker.js",
			"name": "./node_modules/react-feather/dist/icons/speaker.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/square": [
		{
			"id": "./node_modules/react-feather/dist/icons/square.js",
			"name": "./node_modules/react-feather/dist/icons/square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/square.js",
			"name": "./node_modules/react-feather/dist/icons/square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/star": [
		{
			"id": "./node_modules/react-feather/dist/icons/star.js",
			"name": "./node_modules/react-feather/dist/icons/star.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/star.js",
			"name": "./node_modules/react-feather/dist/icons/star.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/stop-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/stop-circle.js",
			"name": "./node_modules/react-feather/dist/icons/stop-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/stop-circle.js",
			"name": "./node_modules/react-feather/dist/icons/stop-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/sun": [
		{
			"id": "./node_modules/react-feather/dist/icons/sun.js",
			"name": "./node_modules/react-feather/dist/icons/sun.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/sun.js",
			"name": "./node_modules/react-feather/dist/icons/sun.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/sunrise": [
		{
			"id": "./node_modules/react-feather/dist/icons/sunrise.js",
			"name": "./node_modules/react-feather/dist/icons/sunrise.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/sunrise.js",
			"name": "./node_modules/react-feather/dist/icons/sunrise.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/sunset": [
		{
			"id": "./node_modules/react-feather/dist/icons/sunset.js",
			"name": "./node_modules/react-feather/dist/icons/sunset.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/sunset.js",
			"name": "./node_modules/react-feather/dist/icons/sunset.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/tablet": [
		{
			"id": "./node_modules/react-feather/dist/icons/tablet.js",
			"name": "./node_modules/react-feather/dist/icons/tablet.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/tablet.js",
			"name": "./node_modules/react-feather/dist/icons/tablet.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/tag": [
		{
			"id": "./node_modules/react-feather/dist/icons/tag.js",
			"name": "./node_modules/react-feather/dist/icons/tag.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/tag.js",
			"name": "./node_modules/react-feather/dist/icons/tag.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/target": [
		{
			"id": "./node_modules/react-feather/dist/icons/target.js",
			"name": "./node_modules/react-feather/dist/icons/target.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/target.js",
			"name": "./node_modules/react-feather/dist/icons/target.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/terminal": [
		{
			"id": "./node_modules/react-feather/dist/icons/terminal.js",
			"name": "./node_modules/react-feather/dist/icons/terminal.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/terminal.js",
			"name": "./node_modules/react-feather/dist/icons/terminal.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/thermometer": [
		{
			"id": "./node_modules/react-feather/dist/icons/thermometer.js",
			"name": "./node_modules/react-feather/dist/icons/thermometer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/thermometer.js",
			"name": "./node_modules/react-feather/dist/icons/thermometer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/thumbs-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/thumbs-down.js",
			"name": "./node_modules/react-feather/dist/icons/thumbs-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/thumbs-down.js",
			"name": "./node_modules/react-feather/dist/icons/thumbs-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/thumbs-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/thumbs-up.js",
			"name": "./node_modules/react-feather/dist/icons/thumbs-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/thumbs-up.js",
			"name": "./node_modules/react-feather/dist/icons/thumbs-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/toggle-left": [
		{
			"id": "./node_modules/react-feather/dist/icons/toggle-left.js",
			"name": "./node_modules/react-feather/dist/icons/toggle-left.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/toggle-left.js",
			"name": "./node_modules/react-feather/dist/icons/toggle-left.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/toggle-right": [
		{
			"id": "./node_modules/react-feather/dist/icons/toggle-right.js",
			"name": "./node_modules/react-feather/dist/icons/toggle-right.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/toggle-right.js",
			"name": "./node_modules/react-feather/dist/icons/toggle-right.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/trash-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/trash-2.js",
			"name": "./node_modules/react-feather/dist/icons/trash-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/trash-2.js",
			"name": "./node_modules/react-feather/dist/icons/trash-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/trash": [
		{
			"id": "./node_modules/react-feather/dist/icons/trash.js",
			"name": "./node_modules/react-feather/dist/icons/trash.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/trash.js",
			"name": "./node_modules/react-feather/dist/icons/trash.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/trending-down": [
		{
			"id": "./node_modules/react-feather/dist/icons/trending-down.js",
			"name": "./node_modules/react-feather/dist/icons/trending-down.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/trending-down.js",
			"name": "./node_modules/react-feather/dist/icons/trending-down.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/trending-up": [
		{
			"id": "./node_modules/react-feather/dist/icons/trending-up.js",
			"name": "./node_modules/react-feather/dist/icons/trending-up.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/trending-up.js",
			"name": "./node_modules/react-feather/dist/icons/trending-up.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/triangle": [
		{
			"id": "./node_modules/react-feather/dist/icons/triangle.js",
			"name": "./node_modules/react-feather/dist/icons/triangle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/triangle.js",
			"name": "./node_modules/react-feather/dist/icons/triangle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/truck": [
		{
			"id": "./node_modules/react-feather/dist/icons/truck.js",
			"name": "./node_modules/react-feather/dist/icons/truck.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/truck.js",
			"name": "./node_modules/react-feather/dist/icons/truck.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/tv": [
		{
			"id": "./node_modules/react-feather/dist/icons/tv.js",
			"name": "./node_modules/react-feather/dist/icons/tv.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/tv.js",
			"name": "./node_modules/react-feather/dist/icons/tv.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/twitter": [
		{
			"id": "./node_modules/react-feather/dist/icons/twitter.js",
			"name": "./node_modules/react-feather/dist/icons/twitter.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/twitter.js",
			"name": "./node_modules/react-feather/dist/icons/twitter.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/type": [
		{
			"id": "./node_modules/react-feather/dist/icons/type.js",
			"name": "./node_modules/react-feather/dist/icons/type.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/type.js",
			"name": "./node_modules/react-feather/dist/icons/type.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/umbrella": [
		{
			"id": "./node_modules/react-feather/dist/icons/umbrella.js",
			"name": "./node_modules/react-feather/dist/icons/umbrella.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/umbrella.js",
			"name": "./node_modules/react-feather/dist/icons/umbrella.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/underline": [
		{
			"id": "./node_modules/react-feather/dist/icons/underline.js",
			"name": "./node_modules/react-feather/dist/icons/underline.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/underline.js",
			"name": "./node_modules/react-feather/dist/icons/underline.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/unlock": [
		{
			"id": "./node_modules/react-feather/dist/icons/unlock.js",
			"name": "./node_modules/react-feather/dist/icons/unlock.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/unlock.js",
			"name": "./node_modules/react-feather/dist/icons/unlock.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/upload-cloud": [
		{
			"id": "./node_modules/react-feather/dist/icons/upload-cloud.js",
			"name": "./node_modules/react-feather/dist/icons/upload-cloud.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/upload-cloud.js",
			"name": "./node_modules/react-feather/dist/icons/upload-cloud.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/upload": [
		{
			"id": "./node_modules/react-feather/dist/icons/upload.js",
			"name": "./node_modules/react-feather/dist/icons/upload.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/upload.js",
			"name": "./node_modules/react-feather/dist/icons/upload.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/user-check": [
		{
			"id": "./node_modules/react-feather/dist/icons/user-check.js",
			"name": "./node_modules/react-feather/dist/icons/user-check.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/user-check.js",
			"name": "./node_modules/react-feather/dist/icons/user-check.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/user-minus": [
		{
			"id": "./node_modules/react-feather/dist/icons/user-minus.js",
			"name": "./node_modules/react-feather/dist/icons/user-minus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/user-minus.js",
			"name": "./node_modules/react-feather/dist/icons/user-minus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/user-plus": [
		{
			"id": "./node_modules/react-feather/dist/icons/user-plus.js",
			"name": "./node_modules/react-feather/dist/icons/user-plus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/user-plus.js",
			"name": "./node_modules/react-feather/dist/icons/user-plus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/user-x": [
		{
			"id": "./node_modules/react-feather/dist/icons/user-x.js",
			"name": "./node_modules/react-feather/dist/icons/user-x.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/user-x.js",
			"name": "./node_modules/react-feather/dist/icons/user-x.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/user": [
		{
			"id": "./node_modules/react-feather/dist/icons/user.js",
			"name": "./node_modules/react-feather/dist/icons/user.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/user.js",
			"name": "./node_modules/react-feather/dist/icons/user.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/users": [
		{
			"id": "./node_modules/react-feather/dist/icons/users.js",
			"name": "./node_modules/react-feather/dist/icons/users.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/users.js",
			"name": "./node_modules/react-feather/dist/icons/users.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/video-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/video-off.js",
			"name": "./node_modules/react-feather/dist/icons/video-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/video-off.js",
			"name": "./node_modules/react-feather/dist/icons/video-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/video": [
		{
			"id": "./node_modules/react-feather/dist/icons/video.js",
			"name": "./node_modules/react-feather/dist/icons/video.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/video.js",
			"name": "./node_modules/react-feather/dist/icons/video.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/voicemail": [
		{
			"id": "./node_modules/react-feather/dist/icons/voicemail.js",
			"name": "./node_modules/react-feather/dist/icons/voicemail.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/voicemail.js",
			"name": "./node_modules/react-feather/dist/icons/voicemail.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/volume-1": [
		{
			"id": "./node_modules/react-feather/dist/icons/volume-1.js",
			"name": "./node_modules/react-feather/dist/icons/volume-1.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/volume-1.js",
			"name": "./node_modules/react-feather/dist/icons/volume-1.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/volume-2": [
		{
			"id": "./node_modules/react-feather/dist/icons/volume-2.js",
			"name": "./node_modules/react-feather/dist/icons/volume-2.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/volume-2.js",
			"name": "./node_modules/react-feather/dist/icons/volume-2.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/volume-x": [
		{
			"id": "./node_modules/react-feather/dist/icons/volume-x.js",
			"name": "./node_modules/react-feather/dist/icons/volume-x.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/volume-x.js",
			"name": "./node_modules/react-feather/dist/icons/volume-x.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/volume": [
		{
			"id": "./node_modules/react-feather/dist/icons/volume.js",
			"name": "./node_modules/react-feather/dist/icons/volume.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/volume.js",
			"name": "./node_modules/react-feather/dist/icons/volume.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/watch": [
		{
			"id": "./node_modules/react-feather/dist/icons/watch.js",
			"name": "./node_modules/react-feather/dist/icons/watch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/watch.js",
			"name": "./node_modules/react-feather/dist/icons/watch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/wifi-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/wifi-off.js",
			"name": "./node_modules/react-feather/dist/icons/wifi-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/wifi-off.js",
			"name": "./node_modules/react-feather/dist/icons/wifi-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/wifi": [
		{
			"id": "./node_modules/react-feather/dist/icons/wifi.js",
			"name": "./node_modules/react-feather/dist/icons/wifi.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/wifi.js",
			"name": "./node_modules/react-feather/dist/icons/wifi.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/wind": [
		{
			"id": "./node_modules/react-feather/dist/icons/wind.js",
			"name": "./node_modules/react-feather/dist/icons/wind.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/wind.js",
			"name": "./node_modules/react-feather/dist/icons/wind.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/x-circle": [
		{
			"id": "./node_modules/react-feather/dist/icons/x-circle.js",
			"name": "./node_modules/react-feather/dist/icons/x-circle.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/x-circle.js",
			"name": "./node_modules/react-feather/dist/icons/x-circle.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/x-square": [
		{
			"id": "./node_modules/react-feather/dist/icons/x-square.js",
			"name": "./node_modules/react-feather/dist/icons/x-square.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/x-square.js",
			"name": "./node_modules/react-feather/dist/icons/x-square.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/x": [
		{
			"id": "./node_modules/react-feather/dist/icons/x.js",
			"name": "./node_modules/react-feather/dist/icons/x.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/x.js",
			"name": "./node_modules/react-feather/dist/icons/x.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/youtube": [
		{
			"id": "./node_modules/react-feather/dist/icons/youtube.js",
			"name": "./node_modules/react-feather/dist/icons/youtube.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/youtube.js",
			"name": "./node_modules/react-feather/dist/icons/youtube.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/zap-off": [
		{
			"id": "./node_modules/react-feather/dist/icons/zap-off.js",
			"name": "./node_modules/react-feather/dist/icons/zap-off.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/zap-off.js",
			"name": "./node_modules/react-feather/dist/icons/zap-off.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/zap": [
		{
			"id": "./node_modules/react-feather/dist/icons/zap.js",
			"name": "./node_modules/react-feather/dist/icons/zap.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/zap.js",
			"name": "./node_modules/react-feather/dist/icons/zap.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/zoom-in": [
		{
			"id": "./node_modules/react-feather/dist/icons/zoom-in.js",
			"name": "./node_modules/react-feather/dist/icons/zoom-in.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/zoom-in.js",
			"name": "./node_modules/react-feather/dist/icons/zoom-in.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./icons/zoom-out": [
		{
			"id": "./node_modules/react-feather/dist/icons/zoom-out.js",
			"name": "./node_modules/react-feather/dist/icons/zoom-out.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-feather/dist/icons/zoom-out.js",
			"name": "./node_modules/react-feather/dist/icons/zoom-out.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/Switch": [
		{
			"id": "./node_modules/react-router/Switch.js",
			"name": "./node_modules/react-router/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/Switch.js",
			"name": "./node_modules/react-router/Switch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-router/Route": [
		{
			"id": "./node_modules/react-router/Route.js",
			"name": "./node_modules/react-router/Route.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-router/Route.js",
			"name": "./node_modules/react-router/Route.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"react-side-effect": [
		{
			"id": "./node_modules/react-side-effect/lib/index.js",
			"name": "./node_modules/react-side-effect/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-side-effect/lib/index.js",
			"name": "./node_modules/react-side-effect/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"deep-equal": [
		{
			"id": "./node_modules/deep-equal/index.js",
			"name": "./node_modules/deep-equal/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/deep-equal/index.js",
			"name": "./node_modules/deep-equal/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./HelmetUtils.js": [
		{
			"id": "./node_modules/react-helmet/lib/HelmetUtils.js",
			"name": "./node_modules/react-helmet/lib/HelmetUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-helmet/lib/HelmetUtils.js",
			"name": "./node_modules/react-helmet/lib/HelmetUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./HelmetConstants.js": [
		{
			"id": "./node_modules/react-helmet/lib/HelmetConstants.js",
			"name": "./node_modules/react-helmet/lib/HelmetConstants.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-helmet/lib/HelmetConstants.js",
			"name": "./node_modules/react-helmet/lib/HelmetConstants.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./lib/keys.js": [
		{
			"id": "./node_modules/deep-equal/lib/keys.js",
			"name": "./node_modules/deep-equal/lib/keys.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/deep-equal/lib/keys.js",
			"name": "./node_modules/deep-equal/lib/keys.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./lib/is_arguments.js": [
		{
			"id": "./node_modules/deep-equal/lib/is_arguments.js",
			"name": "./node_modules/deep-equal/lib/is_arguments.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/deep-equal/lib/is_arguments.js",
			"name": "./node_modules/deep-equal/lib/is_arguments.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"exenv": [
		{
			"id": "./node_modules/exenv/index.js",
			"name": "./node_modules/exenv/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/exenv/index.js",
			"name": "./node_modules/exenv/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"shallowequal": [
		{
			"id": "./node_modules/shallowequal/index.js",
			"name": "./node_modules/shallowequal/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/shallowequal/index.js",
			"name": "./node_modules/shallowequal/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../core-js/object/assign": [
		{
			"id": "./node_modules/babel-runtime/core-js/object/assign.js",
			"name": "./node_modules/babel-runtime/core-js/object/assign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/babel-runtime/core-js/object/assign.js",
			"name": "./node_modules/babel-runtime/core-js/object/assign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"core-js/library/fn/object/assign": [
		{
			"id": "./node_modules/core-js/library/fn/object/assign.js",
			"name": "./node_modules/core-js/library/fn/object/assign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/fn/object/assign.js",
			"name": "./node_modules/core-js/library/fn/object/assign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../../modules/es6.object.assign": [
		{
			"id": "./node_modules/core-js/library/modules/es6.object.assign.js",
			"name": "./node_modules/core-js/library/modules/es6.object.assign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/es6.object.assign.js",
			"name": "./node_modules/core-js/library/modules/es6.object.assign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./_object-assign": [
		{
			"id": "./node_modules/core-js/library/modules/_object-assign.js",
			"name": "./node_modules/core-js/library/modules/_object-assign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/core-js/library/modules/_object-assign.js",
			"name": "./node_modules/core-js/library/modules/_object-assign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-link": [
		{
			"id": "./node_modules/apollo-link/lib/index.js",
			"name": "./node_modules/apollo-link/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link/lib/index.js",
			"name": "./node_modules/apollo-link/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./link": [
		{
			"id": "./node_modules/apollo-link/lib/link.js",
			"name": "./node_modules/apollo-link/lib/link.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link/lib/link.js",
			"name": "./node_modules/apollo-link/lib/link.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./linkUtils": [
		{
			"id": "./node_modules/apollo-link/lib/linkUtils.js",
			"name": "./node_modules/apollo-link/lib/linkUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link/lib/linkUtils.js",
			"name": "./node_modules/apollo-link/lib/linkUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"zen-observable": [
		{
			"id": "./node_modules/zen-observable/index.js",
			"name": "./node_modules/zen-observable/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/zen-observable/index.js",
			"name": "./node_modules/zen-observable/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./zen-observable.js": [
		{
			"id": "./node_modules/zen-observable/zen-observable.js",
			"name": "./node_modules/zen-observable/zen-observable.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/zen-observable/zen-observable.js",
			"name": "./node_modules/zen-observable/zen-observable.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./../../webpack/buildin/module.js": [
		{
			"id": "./node_modules/webpack/buildin/module.js",
			"name": "./node_modules/webpack/buildin/module.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/webpack/buildin/module.js",
			"name": "./node_modules/webpack/buildin/module.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-utilities": [
		{
			"id": "./node_modules/apollo-utilities/lib/index.js",
			"name": "./node_modules/apollo-utilities/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/index.js",
			"name": "./node_modules/apollo-utilities/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"graphql/language/printer": [
		{
			"id": "./node_modules/graphql/language/printer.js",
			"name": "./node_modules/graphql/language/printer.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/graphql/language/printer.js",
			"name": "./node_modules/graphql/language/printer.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./visitor": [
		{
			"id": "./node_modules/graphql/language/visitor.js",
			"name": "./node_modules/graphql/language/visitor.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/graphql/language/visitor.js",
			"name": "./node_modules/graphql/language/visitor.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./directives": [
		{
			"id": "./node_modules/apollo-utilities/lib/directives.js",
			"name": "./node_modules/apollo-utilities/lib/directives.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/directives.js",
			"name": "./node_modules/apollo-utilities/lib/directives.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./fragments": [
		{
			"id": "./node_modules/apollo-utilities/lib/fragments.js",
			"name": "./node_modules/apollo-utilities/lib/fragments.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/fragments.js",
			"name": "./node_modules/apollo-utilities/lib/fragments.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./getFromAST": [
		{
			"id": "./node_modules/apollo-utilities/lib/getFromAST.js",
			"name": "./node_modules/apollo-utilities/lib/getFromAST.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/getFromAST.js",
			"name": "./node_modules/apollo-utilities/lib/getFromAST.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./transform": [
		{
			"id": "./node_modules/apollo-utilities/lib/transform.js",
			"name": "./node_modules/apollo-utilities/lib/transform.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/transform.js",
			"name": "./node_modules/apollo-utilities/lib/transform.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./storeUtils": [
		{
			"id": "./node_modules/apollo-utilities/lib/storeUtils.js",
			"name": "./node_modules/apollo-utilities/lib/storeUtils.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/storeUtils.js",
			"name": "./node_modules/apollo-utilities/lib/storeUtils.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/assign": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/assign.js",
			"name": "./node_modules/apollo-utilities/lib/util/assign.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/assign.js",
			"name": "./node_modules/apollo-utilities/lib/util/assign.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/cloneDeep": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/cloneDeep.js",
			"name": "./node_modules/apollo-utilities/lib/util/cloneDeep.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/cloneDeep.js",
			"name": "./node_modules/apollo-utilities/lib/util/cloneDeep.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/environment": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/environment.js",
			"name": "./node_modules/apollo-utilities/lib/util/environment.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/environment.js",
			"name": "./node_modules/apollo-utilities/lib/util/environment.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/errorHandling": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/errorHandling.js",
			"name": "./node_modules/apollo-utilities/lib/util/errorHandling.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/errorHandling.js",
			"name": "./node_modules/apollo-utilities/lib/util/errorHandling.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/isEqual": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/isEqual.js",
			"name": "./node_modules/apollo-utilities/lib/util/isEqual.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/isEqual.js",
			"name": "./node_modules/apollo-utilities/lib/util/isEqual.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/maybeDeepFreeze": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js",
			"name": "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js",
			"name": "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./util/warnOnce": [
		{
			"id": "./node_modules/apollo-utilities/lib/util/warnOnce.js",
			"name": "./node_modules/apollo-utilities/lib/util/warnOnce.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-utilities/lib/util/warnOnce.js",
			"name": "./node_modules/apollo-utilities/lib/util/warnOnce.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./../../../process/browser.js": [
		{
			"id": "./node_modules/process/browser.js",
			"name": "./node_modules/process/browser.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/process/browser.js",
			"name": "./node_modules/process/browser.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./inMemoryCache": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./readFromStore": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/readFromStore.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/readFromStore.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/readFromStore.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/readFromStore.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./writeToStore": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/writeToStore.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/writeToStore.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/writeToStore.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/writeToStore.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./fragmentMatcher": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./objectCache": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/objectCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/objectCache.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/objectCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/objectCache.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./recordingCache": [
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/recordingCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/recordingCache.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache-inmemory/lib/recordingCache.js",
			"name": "./node_modules/apollo-cache-inmemory/lib/recordingCache.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"graphql-anywhere": [
		{
			"id": "./node_modules/graphql-anywhere/lib/index.js",
			"name": "./node_modules/graphql-anywhere/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/graphql-anywhere/lib/index.js",
			"name": "./node_modules/graphql-anywhere/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./utilities": [
		{
			"id": "./node_modules/graphql-anywhere/lib/utilities.js",
			"name": "./node_modules/graphql-anywhere/lib/utilities.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/graphql-anywhere/lib/utilities.js",
			"name": "./node_modules/graphql-anywhere/lib/utilities.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./graphql": [
		{
			"id": "./node_modules/graphql-anywhere/lib/graphql.js",
			"name": "./node_modules/graphql-anywhere/lib/graphql.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/graphql-anywhere/lib/graphql.js",
			"name": "./node_modules/graphql-anywhere/lib/graphql.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-cache": [
		{
			"id": "./node_modules/apollo-cache/lib/index.js",
			"name": "./node_modules/apollo-cache/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache/lib/index.js",
			"name": "./node_modules/apollo-cache/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./cache": [
		{
			"id": "./node_modules/apollo-cache/lib/cache.js",
			"name": "./node_modules/apollo-cache/lib/cache.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache/lib/cache.js",
			"name": "./node_modules/apollo-cache/lib/cache.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./types": [
		{
			"id": "./node_modules/apollo-cache/lib/types/index.js",
			"name": "./node_modules/apollo-cache/lib/types/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache/lib/types/index.js",
			"name": "./node_modules/apollo-cache/lib/types/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./Cache": [
		{
			"id": "./node_modules/apollo-cache/lib/types/Cache.js",
			"name": "./node_modules/apollo-cache/lib/types/Cache.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-cache/lib/types/Cache.js",
			"name": "./node_modules/apollo-cache/lib/types/Cache.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./cjs/react-dom.production.min.js": [
		{
			"id": "./node_modules/react-dom/cjs/react-dom.production.min.js",
			"name": "./node_modules/react-dom/cjs/react-dom.production.min.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/react-dom/cjs/react-dom.production.min.js",
			"name": "./node_modules/react-dom/cjs/react-dom.production.min.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/ExecutionEnvironment": [
		{
			"id": "./node_modules/fbjs/lib/ExecutionEnvironment.js",
			"name": "./node_modules/fbjs/lib/ExecutionEnvironment.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/ExecutionEnvironment.js",
			"name": "./node_modules/fbjs/lib/ExecutionEnvironment.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/EventListener": [
		{
			"id": "./node_modules/fbjs/lib/EventListener.js",
			"name": "./node_modules/fbjs/lib/EventListener.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/EventListener.js",
			"name": "./node_modules/fbjs/lib/EventListener.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/getActiveElement": [
		{
			"id": "./node_modules/fbjs/lib/getActiveElement.js",
			"name": "./node_modules/fbjs/lib/getActiveElement.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/getActiveElement.js",
			"name": "./node_modules/fbjs/lib/getActiveElement.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/shallowEqual": [
		{
			"id": "./node_modules/fbjs/lib/shallowEqual.js",
			"name": "./node_modules/fbjs/lib/shallowEqual.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/shallowEqual.js",
			"name": "./node_modules/fbjs/lib/shallowEqual.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/containsNode": [
		{
			"id": "./node_modules/fbjs/lib/containsNode.js",
			"name": "./node_modules/fbjs/lib/containsNode.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/containsNode.js",
			"name": "./node_modules/fbjs/lib/containsNode.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"fbjs/lib/focusNode": [
		{
			"id": "./node_modules/fbjs/lib/focusNode.js",
			"name": "./node_modules/fbjs/lib/focusNode.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/focusNode.js",
			"name": "./node_modules/fbjs/lib/focusNode.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./isTextNode": [
		{
			"id": "./node_modules/fbjs/lib/isTextNode.js",
			"name": "./node_modules/fbjs/lib/isTextNode.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/isTextNode.js",
			"name": "./node_modules/fbjs/lib/isTextNode.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./isNode": [
		{
			"id": "./node_modules/fbjs/lib/isNode.js",
			"name": "./node_modules/fbjs/lib/isNode.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/fbjs/lib/isNode.js",
			"name": "./node_modules/fbjs/lib/isNode.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./apollo-fetch": [
		{
			"id": "./node_modules/apollo-fetch/dist/apollo-fetch.js",
			"name": "./node_modules/apollo-fetch/dist/apollo-fetch.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-fetch/dist/apollo-fetch.js",
			"name": "./node_modules/apollo-fetch/dist/apollo-fetch.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"cross-fetch/polyfill": [
		{
			"id": "./node_modules/cross-fetch/dist/browser-polyfill.js",
			"name": "./node_modules/cross-fetch/dist/browser-polyfill.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/cross-fetch/dist/browser-polyfill.js",
			"name": "./node_modules/cross-fetch/dist/browser-polyfill.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./batchHttpLink": [
		{
			"id": "./node_modules/apollo-link-batch-http/lib/batchHttpLink.js",
			"name": "./node_modules/apollo-link-batch-http/lib/batchHttpLink.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-batch-http/lib/batchHttpLink.js",
			"name": "./node_modules/apollo-link-batch-http/lib/batchHttpLink.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-link-batch": [
		{
			"id": "./node_modules/apollo-link-batch/lib/index.js",
			"name": "./node_modules/apollo-link-batch/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-batch/lib/index.js",
			"name": "./node_modules/apollo-link-batch/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./batchLink": [
		{
			"id": "./node_modules/apollo-link-batch/lib/batchLink.js",
			"name": "./node_modules/apollo-link-batch/lib/batchLink.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-batch/lib/batchLink.js",
			"name": "./node_modules/apollo-link-batch/lib/batchLink.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./batching": [
		{
			"id": "./node_modules/apollo-link-batch/lib/batching.js",
			"name": "./node_modules/apollo-link-batch/lib/batching.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-batch/lib/batching.js",
			"name": "./node_modules/apollo-link-batch/lib/batching.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"lodash.flowright": [
		{
			"id": "./node_modules/lodash.flowright/index.js",
			"name": "./node_modules/lodash.flowright/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/lodash.flowright/index.js",
			"name": "./node_modules/lodash.flowright/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"lodash.pick": [
		{
			"id": "./node_modules/lodash.pick/index.js",
			"name": "./node_modules/lodash.pick/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/lodash.pick/index.js",
			"name": "./node_modules/lodash.pick/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./core/ObservableQuery": [
		{
			"id": "./node_modules/apollo-client/core/ObservableQuery.js",
			"name": "./node_modules/apollo-client/core/ObservableQuery.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/core/ObservableQuery.js",
			"name": "./node_modules/apollo-client/core/ObservableQuery.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./core/networkStatus": [
		{
			"id": "./node_modules/apollo-client/core/networkStatus.js",
			"name": "./node_modules/apollo-client/core/networkStatus.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/core/networkStatus.js",
			"name": "./node_modules/apollo-client/core/networkStatus.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./core/types": [
		{
			"id": "./node_modules/apollo-client/core/types.js",
			"name": "./node_modules/apollo-client/core/types.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/core/types.js",
			"name": "./node_modules/apollo-client/core/types.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./errors/ApolloError": [
		{
			"id": "./node_modules/apollo-client/errors/ApolloError.js",
			"name": "./node_modules/apollo-client/errors/ApolloError.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/errors/ApolloError.js",
			"name": "./node_modules/apollo-client/errors/ApolloError.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./ApolloClient": [
		{
			"id": "./node_modules/apollo-client/ApolloClient.js",
			"name": "./node_modules/apollo-client/ApolloClient.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/ApolloClient.js",
			"name": "./node_modules/apollo-client/ApolloClient.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./core/QueryManager": [
		{
			"id": "./node_modules/apollo-client/core/QueryManager.js",
			"name": "./node_modules/apollo-client/core/QueryManager.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/core/QueryManager.js",
			"name": "./node_modules/apollo-client/core/QueryManager.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./data/store": [
		{
			"id": "./node_modules/apollo-client/data/store.js",
			"name": "./node_modules/apollo-client/data/store.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/data/store.js",
			"name": "./node_modules/apollo-client/data/store.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./version": [
		{
			"id": "./node_modules/apollo-client/version.js",
			"name": "./node_modules/apollo-client/version.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/version.js",
			"name": "./node_modules/apollo-client/version.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"apollo-link-dedup": [
		{
			"id": "./node_modules/apollo-link-dedup/lib/index.js",
			"name": "./node_modules/apollo-link-dedup/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-dedup/lib/index.js",
			"name": "./node_modules/apollo-link-dedup/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../scheduler/scheduler": [
		{
			"id": "./node_modules/apollo-client/scheduler/scheduler.js",
			"name": "./node_modules/apollo-client/scheduler/scheduler.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/scheduler/scheduler.js",
			"name": "./node_modules/apollo-client/scheduler/scheduler.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../util/Observable": [
		{
			"id": "./node_modules/apollo-client/util/Observable.js",
			"name": "./node_modules/apollo-client/util/Observable.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/util/Observable.js",
			"name": "./node_modules/apollo-client/util/Observable.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../data/mutations": [
		{
			"id": "./node_modules/apollo-client/data/mutations.js",
			"name": "./node_modules/apollo-client/data/mutations.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/data/mutations.js",
			"name": "./node_modules/apollo-client/data/mutations.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"../data/queries": [
		{
			"id": "./node_modules/apollo-client/data/queries.js",
			"name": "./node_modules/apollo-client/data/queries.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-client/data/queries.js",
			"name": "./node_modules/apollo-client/data/queries.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"symbol-observable": [
		{
			"id": "./node_modules/symbol-observable/index.js",
			"name": "./node_modules/symbol-observable/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/symbol-observable/index.js",
			"name": "./node_modules/symbol-observable/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./lib/index": [
		{
			"id": "./node_modules/symbol-observable/lib/index.js",
			"name": "./node_modules/symbol-observable/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/symbol-observable/lib/index.js",
			"name": "./node_modules/symbol-observable/lib/index.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./ponyfill.js": [
		{
			"id": "./node_modules/symbol-observable/lib/ponyfill.js",
			"name": "./node_modules/symbol-observable/lib/ponyfill.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/symbol-observable/lib/ponyfill.js",
			"name": "./node_modules/symbol-observable/lib/ponyfill.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	],
	"./dedupLink": [
		{
			"id": "./node_modules/apollo-link-dedup/lib/dedupLink.js",
			"name": "./node_modules/apollo-link-dedup/lib/dedupLink.js",
			"file": "static/js/bundle.e7fb8bba.js"
		},
		{
			"id": "./node_modules/apollo-link-dedup/lib/dedupLink.js",
			"name": "./node_modules/apollo-link-dedup/lib/dedupLink.js",
			"file": "static/js/bundle.e7fb8bba.js.map"
		}
	]
};

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__ = __webpack_require__("./src/utils/loadable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route__ = __webpack_require__("react-router-dom/Route");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom_Switch__ = __webpack_require__("react-router-dom/Switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__("./src/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_MainNavbar__ = __webpack_require__("./src/components/MainNavbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ScrollToTop__ = __webpack_require__("./src/components/ScrollToTop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme__ = __webpack_require__("./src/theme.js");














var AboutView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/AboutView.js"));
  },
  modules: ['./views/AboutView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/AboutView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var AirConditioningView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/AirConditioningView.js"));
  },
  modules: ['./views/AirConditioningView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/AirConditioningView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var ConciergeView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/ConciergeView.js"));
  },
  modules: ['./views/ConciergeView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/ConciergeView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var DrainageView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/DrainageView.js"));
  },
  modules: ['./views/DrainageView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/DrainageView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var ElectricalsView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/ElectricalsView.js"));
  },
  modules: ['./views/ElectricalsView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/ElectricalsView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var FaucetsView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/FaucetsView.js"));
  },
  modules: ['./views/FaucetsView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/FaucetsView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var HealthCheckView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/HealthCheckView.js"));
  },
  modules: ['./views/HealthCheckView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/HealthCheckView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var HomeView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/HomeView.js"));
  },
  modules: ['./views/HomeView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/HomeView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var HomeCleaningView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/HomeCleaningView.js"));
  },
  modules: ['./views/HomeCleaningView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/HomeCleaningView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var HomeCleaningViewStep2 = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/HomeCleaningViewStep2.js"));
  },
  modules: ['./views/HomeCleaningViewStep2'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/HomeCleaningViewStep2.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var LightingView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/LightingView.js"));
  },
  modules: ['./views/LightingView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/LightingView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var OfficeCleaningView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/OfficeCleaningView.js"));
  },
  modules: ['./views/OfficeCleaningView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/OfficeCleaningView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var PlumbingView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/PlumbingView.js"));
  },
  modules: ['./views/PlumbingView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/PlumbingView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var RentedSpaceCleaningView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/RentedSpaceCleaningView.js"));
  },
  modules: ['./views/RentedSpaceCleaningView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/RentedSpaceCleaningView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var RequestSuccessView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/RequestSuccessView.js"));
  },
  modules: ['./views/RequestSuccessView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/RequestSuccessView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var SocketsView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/SocketsView.js"));
  },
  modules: ['./views/SocketsView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/SocketsView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var ToiletsView = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/views/ToiletsView.js"));
  },
  modules: ['./views/ToiletsView'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/views/ToiletsView.js")];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__utils_loadable_js__["a" /* Loading */]
});

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_glamorous__["ThemeProvider"],
    { theme: __WEBPACK_IMPORTED_MODULE_11__theme__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'div',
      { style: { height: '100%' } },
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ScrollToTop__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"],
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('link', {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
          crossOrigin: 'anonymous'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('link', {
          href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Lora:400,700',
          rel: 'stylesheet',
          type: 'text/css'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_MainNavbar__["a" /* default */], null)
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_react_router_dom_Switch___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/about/', component: AboutView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/air-conditioner/',
              component: AirConditioningView
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/concierge/', component: ConciergeView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/', component: HomeView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/drainage/', component: DrainageView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/electricals/', component: ElectricalsView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/faucets/', component: FaucetsView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/health-check/', component: HealthCheckView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/home-cleaning/concierge/',
              render: function render(props) {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(HomeCleaningView, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ isConcierge: true }, props));
              }
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/home-cleaning/', component: HomeCleaningView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/home-cleaning/payment/:id/',
              component: HomeCleaningViewStep2
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/home-cleaning/success/',
              component: RequestSuccessView
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/lighting/', component: LightingView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/office-cleaning/',
              component: OfficeCleaningView
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/plumbing/', component: PlumbingView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, {
              exact: true,
              path: '/space-cleaning/',
              component: RentedSpaceCleaningView
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/sockets/', component: SocketsView }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom_Route___default.a, { exact: true, path: '/toilets/', component: ToiletsView })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: { marginTop: 'auto' } },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], null)
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/components/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);








var Box = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Box, _Component);

  function Box() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Box);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Box.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Box)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Box, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Card"],
        { body: true, inverse: true, style: { backgroundColor: '#2f2e2e' } },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["CardBody"],
          null,
          this.props.children
        )
      );
    }
  }]);

  return Box;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "./src/components/CleaningForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__("babel-runtime/core-js/object/entries");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_query_string__ = __webpack_require__("query-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_apollo__ = __webpack_require__("./src/utils/apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_form_Form_js__ = __webpack_require__("./src/components/form/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_headlines_H2_js__ = __webpack_require__("./src/components/headlines/H2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_reactstrap__);












var _templateObject = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  query CleaningRequestFormQuery {\n    getCleaningRequestForm\n  }\n'], ['\n  query CleaningRequestFormQuery {\n    getCleaningRequestForm\n  }\n']),
    _templateObject2 = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  mutation CleaningRequest($data: String) {\n    createCleaningRequest(data: $data) {\n      status\n      formErrors\n      form\n      cleaningRequest {\n        id\n      }\n    }\n  }\n'], ['\n  mutation CleaningRequest($data: String) {\n    createCleaningRequest(data: $data) {\n      status\n      formErrors\n      form\n      cleaningRequest {\n        id\n      }\n    }\n  }\n']);













var query = __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default()(_templateObject);

var mutation = __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default()(_templateObject2);

var CleaningForm = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(CleaningForm, _Component);

  function CleaningForm(props) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, CleaningForm);

    var _this = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CleaningForm.__proto__ || __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default()(CleaningForm)).call(this, props));

    _this.getFormValues = function (parsedData) {
      var fields = parsedData.fields;
      var formValues = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(fields)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray___default()(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          if (['CheckboxInput', 'RadioSelect'].includes(value.type)) {
            formValues[key] = value.value;
          } else if (value.type === 'CheckboxSelectMultiple') {
            formValues[key] = value.value ? value.value : [];
          } else {
            formValues[key] = value.value ? value.value.toString() : '';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return formValues;
    };

    _this.handleSubmitSuccess = function (res) {
      var response = res.data.createCleaningRequest;
      var parsedData = JSON.parse(response.form);
      var cleaningRequestId = response.cleaningRequest ? response.cleaningRequest.id : null;
      var formState = _this.getFormValues(parsedData);
      _this.setState({
        formValues: formState
      });
      if (cleaningRequestId) {
        _this.props.history.push('/home-cleaning/payment/' + cleaningRequestId + '/');
      }
    };

    _this.handleSubmitFailure = function (res) {
      var parsedData = JSON.parse(res.data.createCleaningRequest.form);
      var formState = _this.getFormValues(parsedData);
      _this.setState({
        formValues: formState
      });
    };

    _this.handleSubmitError = function (res) {
      var formState = _this.state.formValues;
      _this.setState({
        formValues: formState,
        showPaymentError: true
      });
    };

    _this.handleSubmit = function () {
      var formValues = _this.state.formValues;
      var queryStr = __WEBPACK_IMPORTED_MODULE_15_query_string___default.a.stringify(formValues);
      Object(__WEBPACK_IMPORTED_MODULE_16__utils_apollo__["a" /* mutate */])(_this, { data: queryStr }, _this.props.mutate, 'createCleaningRequest', {
        successHandler: function successHandler(res) {
          return _this.handleSubmitSuccess(res);
        },
        failureHandler: function failureHandler(res) {
          return _this.handleSubmitFailure(res);
        },
        errorHandler: function errorHandler(res) {
          return _this.handleSubmitError(res);
        }
      });
    };

    _this.handleCheckboxMultipleChange = function (name, value, checked) {
      var checkboxMultipleList = _this.state.formValues[name];
      if (checked === true) {
        checkboxMultipleList.push(value);
      } else {
        checkboxMultipleList.pop(value);
      }
      _this.setState(function (state) {
        return {
          formValues: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state.formValues, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, name, checkboxMultipleList))
        };
      });
    };

    _this.handleInputChanged = function (name, value) {
      _this.setState(function (state) {
        return {
          formValues: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state.formValues, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, name, value))
        };
      });
    };

    _this.togglePaymentError = function () {
      _this.setState({
        showPaymentError: false
      });
    };

    _this.state = {
      isPosting: false,
      success: false,
      formValues: {},
      formErrors: {},
      showPaymentError: false,
      formInitialized: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(CleaningForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.formInitialized === false && !nextProps.data.loading) {
        var parsedData = JSON.parse(nextProps.data.getCleaningRequestForm);
        var initialState = this.getFormValues(parsedData);
        this.setState({
          formInitialized: true,
          formValues: initialState
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var _state = this.state,
          formValues = _state.formValues,
          formErrors = _state.formErrors,
          formInitialized = _state.formInitialized,
          isPosting = _state.isPosting,
          showPaymentError = _state.showPaymentError;


      if (data.loading || !formInitialized) {
        return null;
      }
      var parsedData = JSON.parse(data.getCleaningRequestForm);

      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        'div',
        { 'data-test': 'CleaningForm' },
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_18__components_headlines_H2_js__["a" /* default */],
          { className: 'mt-3' },
          'Describe your task'
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          'form',
          { ref: function ref(_ref3) {
              return _this2.form = _ref3;
            } },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_form_Form_js__["a" /* default */], {
            formValues: formValues,
            fieldsets: parsedData.fieldsets,
            fields: parsedData.fields,
            formErrors: formErrors,
            handleSubmitSuccess: this.handleNextSuccess,
            handleCheckboxMultipleChange: this.handleCheckboxMultipleChange,
            handleInputChanged: this.handleInputChanged,
            disabled: isPosting
          }),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_19_reactstrap__["Button"],
            { disabled: isPosting, onClick: function onClick(e) {
                return _this2.handleSubmit();
              } },
            isPosting ? 'Loading...' : 'Get Quote'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_19_reactstrap__["Modal"],
          { isOpen: showPaymentError, toggle: this.togglePaymentError },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_19_reactstrap__["ModalHeader"],
            null,
            'Oops!'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_19_reactstrap__["ModalBody"],
            null,
            'Something went wrong. Please try again!'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_19_reactstrap__["ModalFooter"],
            null,
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_19_reactstrap__["Button"],
              { color: 'secondary', onClick: this.togglePaymentError },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return CleaningForm;
}(__WEBPACK_IMPORTED_MODULE_14_react__["Component"]);

CleaningForm = Object(__WEBPACK_IMPORTED_MODULE_12_react_router_dom__["withRouter"])(CleaningForm);
CleaningForm = Object(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["graphql"])(query)(CleaningForm);
CleaningForm = Object(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["graphql"])(mutation)(CleaningForm);
/* harmony default export */ __webpack_exports__["a"] = (CleaningForm);

/***/ }),

/***/ "./src/components/CleaningFormStep2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__("babel-runtime/core-js/object/entries");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_query_string__ = __webpack_require__("query-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_debounce__ = __webpack_require__("lodash/debounce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_apollo__ = __webpack_require__("./src/utils/apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_form_Form_js__ = __webpack_require__("./src/components/form/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_headlines_H2_js__ = __webpack_require__("./src/components/headlines/H2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__StripeForm_js__ = __webpack_require__("./src/components/StripeForm.js");












var _templateObject = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  query CleaningRequestFormQuery($id: String) {\n    getCleaningRequestPaymentForm(id: $id)\n  }\n'], ['\n  query CleaningRequestFormQuery($id: String) {\n    getCleaningRequestPaymentForm(id: $id)\n  }\n']),
    _templateObject2 = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  mutation CleaningRequestStep2($data: String, $submit: String) {\n    createCleaningRequestPayment(data: $data, submit: $submit) {\n      status\n      formErrors\n      form\n      isPaymentSuccessful\n    }\n  }\n'], ['\n  mutation CleaningRequestStep2($data: String, $submit: String) {\n    createCleaningRequestPayment(data: $data, submit: $submit) {\n      status\n      formErrors\n      form\n      isPaymentSuccessful\n    }\n  }\n']);
















var query = __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default()(_templateObject);

var mutation = __WEBPACK_IMPORTED_MODULE_13_graphql_tag___default()(_templateObject2);

var CleaningFormStep2 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(CleaningFormStep2, _Component);

  function CleaningFormStep2(props) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, CleaningFormStep2);

    var _this = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CleaningFormStep2.__proto__ || __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default()(CleaningFormStep2)).call(this, props));

    _this.getFormValues = function (parsedData) {
      var fields = parsedData.fields;
      var formValues = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(fields)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_slicedToArray___default()(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          if (['CheckboxInput', 'RadioSelect'].includes(value.type)) {
            formValues[key] = value.value;
          } else if (value.type === 'CheckboxSelectMultiple') {
            formValues[key] = value.value ? value.value : [];
          } else {
            formValues[key] = value.value ? value.value.toString() : '';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return formValues;
    };

    _this.handleSubmitSuccess = function (res) {
      var response = res.data.createCleaningRequestPayment;
      var parsedData = JSON.parse(response.form);
      var formState = _this.getFormValues(parsedData);
      _this.setState({
        formValues: formState,
        submitDisabled: false
      });
      if (response.isPaymentSuccessful) {
        _this.props.history.push('/home-cleaning/success/');
      }
    };

    _this.handleSubmitFailure = function (res) {
      var parsedData = JSON.parse(res.data.createCleaningRequestPayment.form);
      var formState = _this.getFormValues(parsedData);
      formState.stripeToken = null;
      var showCardDeclined = _this.state.formErrors.non_field_errors ? true : false;
      _this.setState({
        formValues: formState,
        submitDisabled: true,
        showCardDeclined: showCardDeclined
      });
    };

    _this.handleSubmitError = function (res) {
      var formState = _this.state.formValues;
      formState.stripeToken = null;
      _this.setState({
        formValues: formState,
        submitDisabled: false,
        showPaymentError: true,
        showLoadingSpinner: false
      });
    };

    _this.mutate = function (submit, token) {
      var formValues = _this.state.formValues;
      formValues.id = _this.props.id;
      if (token) {
        formValues.stripeToken = token.id;
        formValues.amount = formValues.calculatedQuote;
        formValues.isReactFrontendRequest = 1;
        formValues.ccy = 'USD';
      }
      var queryStr = __WEBPACK_IMPORTED_MODULE_15_query_string___default.a.stringify(formValues);
      Object(__WEBPACK_IMPORTED_MODULE_17__utils_apollo__["a" /* mutate */])(_this, { data: queryStr, submit: submit }, _this.props.mutate, 'createCleaningRequestPayment', {
        successHandler: function successHandler(res) {
          return _this.handleSubmitSuccess(res);
        },
        failureHandler: function failureHandler(res) {
          return _this.handleSubmitFailure(res);
        },
        errorHandler: function errorHandler(res) {
          return _this.handleSubmitError(res);
        }
      });
    };

    _this.handleChange = __WEBPACK_IMPORTED_MODULE_16_lodash_debounce___default()(function (submit) {
      _this.mutate(submit, null);
    }, 500);

    _this.handleSubmit = function (token) {
      _this.mutate('true', token);
      _this.setState({
        showLoadingSpinner: true
      });
    };

    _this.handlePayByCashSubmit = function () {
      _this.setState({
        showPayByCashConfirmation: true
      });
    };

    _this.handleInputChanged = function (name, value) {
      _this.setState(function (state) {
        return {
          formValues: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state.formValues, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, name, value))
        };
      }, function (e) {
        _this.handleChange('false');
      });
    };

    _this.payByCashToggle = function () {
      _this.setState({
        showPayByCashConfirmation: false
      });
    };

    _this.declinedToggle = function () {
      _this.setState({
        showCardDeclined: false
      });
    };

    _this.paymentErrorToggle = function () {
      _this.setState({
        showPaymentError: false
      });
    };

    _this.state = {
      isPosting: false,
      success: false,
      formValues: {},
      formErrors: {},
      showPayByCashConfirmation: false,
      showLoadingSpinner: false,
      showCardDeclined: false,
      showPaymentError: false,
      submitDisabled: true,
      formInitialized: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(CleaningFormStep2, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.formInitialized === false && !nextProps.data.loading) {
        var parsedData = JSON.parse(nextProps.data.getCleaningRequestPaymentForm);
        var initialState = this.getFormValues(parsedData);
        this.setState({
          formInitialized: true,
          formValues: initialState
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var _state = this.state,
          formValues = _state.formValues,
          formErrors = _state.formErrors,
          formInitialized = _state.formInitialized,
          showPayByCashConfirmation = _state.showPayByCashConfirmation,
          showLoadingSpinner = _state.showLoadingSpinner,
          showCardDeclined = _state.showCardDeclined,
          showPaymentError = _state.showPaymentError,
          submitDisabled = _state.submitDisabled;


      if (data.loading || !formInitialized) {
        return null;
      }
      var parsedData = JSON.parse(data.getCleaningRequestPaymentForm);
      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        'div',
        { 'data-test': 'CleaningFormStep2' },
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_19__components_headlines_H2_js__["a" /* default */],
          { className: 'mt-3' },
          'Complete Your Booking'
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          'form',
          { ref: function ref(_ref3) {
              return _this2.form = _ref3;
            } },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_form_Form_js__["a" /* default */], {
            formValues: formValues,
            fieldsets: parsedData.fieldsets,
            fields: parsedData.fields,
            formErrors: formErrors,
            handleSubmit: this.handleSubmit,
            handleSubmitSuccess: this.handleSubmitSuccess,
            handlePayByCashSubmit: this.handlePayByCashSubmit,
            handleInputChanged: this.handleInputChanged,
            submitDisabled: showCardDeclined ? false : submitDisabled
          }),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            'div',
            { className: 'mt-3 mb-3' },
            formValues.city !== 'Yangon' && __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__StripeForm_js__["a" /* default */], {
              handleToken: this.handleSubmit,
              userEmail: formValues.user_email,
              amount: formValues.calculated_quote,
              currency: formValues.currency_code,
              submitDisabled: submitDisabled
            }),
            formValues.city === 'Yangon' && __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Row"],
                null,
                __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Col"],
                  { xl: '4', lg: '5', md: '4', xs: '12' },
                  __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__StripeForm_js__["a" /* default */], {
                    handleToken: this.handleSubmit,
                    userEmail: formValues.user_email,
                    amount: formValues.calculated_quote,
                    currency: formValues.currency_code,
                    submitDisabled: submitDisabled,
                    isYangon: true
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Col"],
                  { xl: '3', lg: '3', md: '2', xs: '12' },
                  __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Button"],
                    {
                      disabled: submitDisabled,
                      onClick: function onClick(e) {
                        return _this2.handlePayByCashSubmit();
                      }
                    },
                    'Pay Cash'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_reactstrap__["FormText"],
                { color: 'muted' },
                submitDisabled && '* Please fill out all the fields above',
                !submitDisabled && '* When you submit the form, we will get back to you within 48 hours'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Modal"],
          { isOpen: showPaymentError, toggle: this.paymentErrorToggle },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalHeader"],
            null,
            'Oops!'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalBody"],
            null,
            'Something went wrong. Please try again!'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalFooter"],
            null,
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Button"],
              { color: 'secondary', onClick: this.paymentErrorToggle },
              'Close'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Modal"],
          { isOpen: showPayByCashConfirmation, toggle: this.payByCashToggle },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalBody"],
            null,
            'Once you proceed, our team will be notified and get back to you within 48 hours.'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalFooter"],
            null,
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Button"],
              { color: 'primary', onClick: function onClick() {
                  return _this2.handleSubmit(null);
                } },
              'Confirm'
            ),
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Button"],
              { color: 'secondary', onClick: this.payByCashToggle },
              'Close'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Modal"],
          { isOpen: showLoadingSpinner },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalHeader"],
            null,
            'Processing...'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalBody"],
            null,
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20_reactstrap__["Progress"], { animated: true, color: 'danger', value: '100' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Modal"],
          { isOpen: showCardDeclined, toggle: this.declinedToggle },
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalHeader"],
            { toggle: this.toggle },
            'Card Declined'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalBody"],
            null,
            'Your card has been declined. Please try another card.'
          ),
          __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_20_reactstrap__["ModalFooter"],
            null,
            __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_20_reactstrap__["Button"],
              { color: 'secondary', onClick: this.declinedToggle },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return CleaningFormStep2;
}(__WEBPACK_IMPORTED_MODULE_14_react__["Component"]);

var queryOptions = {
  options: function options(props) {
    return {
      variables: {
        id: props.id
      }
    };
  }
};

CleaningFormStep2 = Object(__WEBPACK_IMPORTED_MODULE_12_react_router_dom__["withRouter"])(CleaningFormStep2);
CleaningFormStep2 = Object(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["graphql"])(query, queryOptions)(CleaningFormStep2);
CleaningFormStep2 = Object(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["graphql"])(mutation)(CleaningFormStep2);
/* harmony default export */ __webpack_exports__["a"] = (CleaningFormStep2);

/***/ }),

/***/ "./src/components/ConciergeItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__P__ = __webpack_require__("./src/components/P.js");












var ContentDiv = __WEBPACK_IMPORTED_MODULE_8_glamorous___default.a.div({
  backgroundColor: '#ececec',
  padding: '20px',
  fontSize: '14px',
  '@media(min-width: 768px)': {
    padding: '30px',
    fontSize: '16px'
  }
});
ContentDiv.displayName = 'ConciergeJpgItem.ContentDiv';

var ConciergeItem = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ConciergeItem, _Component);

  function ConciergeItem() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ConciergeItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ConciergeItem.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ConciergeItem)).call.apply(_ref, [this].concat(args))), _this), _this.renderJpg = function () {
      var _this$props = _this.props,
          jpg = _this$props.jpg,
          alt = _this$props.alt;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
        src: jpg,
        alt: alt,
        style: {
          width: '100px',
          height: '100px',
          borderRadius: '25px'
        }
      });
    }, _this.renderSvg = function () {
      var _this$props2 = _this.props,
          svg = _this$props2.svg,
          alt = _this$props2.alt;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          style: {
            display: 'inline-block',
            position: 'relative',
            width: '100px',
            height: '100px',
            background: 'lightgrey',
            borderRadius: '25px'
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
          src: svg,
          alt: alt,
          style: {
            height: '50px',
            margin: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }
        })
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ConciergeItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          jpg = _props.jpg,
          svg = _props.svg,
          title = _props.title,
          chineseTitle = _props.chineseTitle;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Container"],
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          { className: 'mt-3' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', md: '8', className: 'mx-auto' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              ContentDiv,
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                  { xs: '6', sm: '4', className: 'text-center' },
                  !!jpg && this.renderJpg(),
                  !!svg && this.renderSvg()
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                  { xs: '6', sm: '8', className: 'text-left' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_9__P__["a" /* default */],
                    null,
                    title
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_9__P__["a" /* default */],
                    null,
                    chineseTitle
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ConciergeItem;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ConciergeItem.defaultProps = {
  jpg: undefined,
  svg: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (ConciergeItem);

/***/ }),

/***/ "./src/components/ContactForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_apollo__ = __webpack_require__("./src/utils/apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_FieldsetSSR__ = __webpack_require__("./src/components/FieldsetSSR.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_modals_ModalFadeIn__ = __webpack_require__("./src/components/modals/ModalFadeIn.js");









var _templateObject = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  mutation ContactForm(\n    $name: String\n    $email: String\n    $phone: String\n    $message: String\n    $view: String\n  ) {\n    contactForm(\n      name: $name\n      email: $email\n      phone: $phone\n      message: $message\n      view: $view\n    ) {\n      status\n      formErrors\n    }\n  }\n'], ['\n  mutation ContactForm(\n    $name: String\n    $email: String\n    $phone: String\n    $message: String\n    $view: String\n  ) {\n    contactForm(\n      name: $name\n      email: $email\n      phone: $phone\n      message: $message\n      view: $view\n    ) {\n      status\n      formErrors\n    }\n  }\n']);













var mutation = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject);

var ContactForm = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ContactForm, _Component);

  function ContactForm(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ContactForm);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContactForm.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ContactForm)).call(this, props));

    _this.handleChange = function (e) {
      var target = e.target;
      _this.setState(function (state) {
        return {
          formValues: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state.formValues, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, target.name, target.value))
        };
      });
    };

    _this.handleSubmitSuccess = function () {
      _this.setState({ formValues: _this.initialFormValues });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var formValues = _this.state.formValues;
      formValues.view = _this.props.location.pathname;
      Object(__WEBPACK_IMPORTED_MODULE_14__utils_apollo__["a" /* mutate */])(_this, _this.state.formValues, _this.props.mutate, 'contactForm', {
        successHandler: _this.handleSubmitSuccess
      });
    };

    _this.initialFormValues = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    _this.state = {
      isPosting: false,
      success: false,
      formValues: _this.initialFormValues,
      formErrors: {}
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ContactForm, [{
    key: 'render',
    value: function render() {
      var buttonText = this.props.buttonText;
      var _state = this.state,
          formValues = _state.formValues,
          formErrors = _state.formErrors,
          isPosting = _state.isPosting;

      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Form"],
        { method: 'post', onSubmit: this.handleSubmit },
        __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_15__components_FieldsetSSR__["a" /* default */],
          { isPosting: isPosting },
          __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Row"],
            null,
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Col"],
              { xs: '12', md: '6' },
              __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormGroup"],
                null,
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Label"],
                  { 'for': 'idName' },
                  'Name'
                ),
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_reactstrap__["Input"], {
                  id: 'idName',
                  name: 'name',
                  onChange: this.handleChange,
                  placeholder: 'How may we address you?',
                  type: 'text',
                  valid: formErrors.name === undefined ? null : false,
                  value: formValues.name
                }),
                formErrors.name && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormFeedback"],
                  null,
                  formErrors.name[0]
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Row"],
            null,
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Col"],
              { xs: '12', md: '6' },
              __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormGroup"],
                null,
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Label"],
                  { 'for': 'idPhone' },
                  'Phone'
                ),
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_reactstrap__["Input"], {
                  id: 'idPhone',
                  name: 'phone',
                  onChange: this.handleChange,
                  placeholder: 'How can we reach you?',
                  type: 'text',
                  valid: formErrors.phone === undefined ? null : false,
                  value: formValues.phone
                }),
                formErrors.phone && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormFeedback"],
                  null,
                  formErrors.phone[0]
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Col"],
              { xs: '12', md: '6' },
              __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormGroup"],
                null,
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Label"],
                  { 'for': 'idEmail' },
                  'Email'
                ),
                __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_reactstrap__["Input"], {
                  id: 'idEmail',
                  name: 'email',
                  onChange: this.handleChange,
                  placeholder: 'Your email address?',
                  type: 'email',
                  valid: formErrors.email === undefined ? null : false,
                  value: formValues.email
                }),
                formErrors.email && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormFeedback"],
                  null,
                  formErrors.email[0]
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormGroup"],
            null,
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Label"],
              { 'for': 'idMessage' },
              'Message'
            ),
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_reactstrap__["Input"], {
              type: 'textarea',
              name: 'message',
              id: 'idMessage',
              onChange: this.handleChange,
              placeholder: 'How may we help you?',
              valid: formErrors.message === undefined ? null : false,
              value: formValues.message
            }),
            formErrors.message && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13_reactstrap__["FormFeedback"],
              null,
              formErrors.message[0]
            )
          ),
          __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13_reactstrap__["Button"],
            { color: 'primary' },
            buttonText
          ),
          this.state.success && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
            'div',
            { className: 'mt-3' },
            __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_16__components_modals_ModalFadeIn__["a" /* default */],
              { show: this.state.success },
              'Thank you for reaching out! We will reply to your request as soon as possible!'
            )
          )
        )
      );
    }
  }]);

  return ContactForm;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

ContactForm.defaultProps = {
  buttonText: 'Submit Your Request'
};


ContactForm = Object(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__["withRouter"])(ContactForm);
ContactForm = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(mutation)(ContactForm);
/* harmony default export */ __webpack_exports__["a"] = (ContactForm);

/***/ }),

/***/ "./src/components/FieldsetSSR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);








var FieldsetSSR = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FieldsetSSR, _Component);

  function FieldsetSSR(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FieldsetSSR);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FieldsetSSR.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FieldsetSSR)).call(this, props));

    _this.state = {
      didMount: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FieldsetSSR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        didMount: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var didMount = this.state.didMount;
      var _props = this.props,
          children = _props.children,
          isPosting = _props.isPosting;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'fieldset',
        { disabled: !didMount || isPosting },
        children
      );
    }
  }]);

  return FieldsetSSR;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

FieldsetSSR.defaultProps = {
  isPosting: false
};


/* harmony default export */ __webpack_exports__["a"] = (FieldsetSSR);

/***/ }),

/***/ "./src/components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme__ = __webpack_require__("./src/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__P__ = __webpack_require__("./src/components/P.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__headlines_H1__ = __webpack_require__("./src/components/headlines/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__headlines_H2__ = __webpack_require__("./src/components/headlines/H2.js");
















var FooterEl = __WEBPACK_IMPORTED_MODULE_7_glamorous___default.a.footer(function (props) {
  return {
    backgroundColor: props.theme.COLOR_FOOTER_BG,
    color: props.theme.COLOR_TEXT_INVERTED,
    padding: '2em 0px'
  };
});
FooterEl.displayName = 'Footer.FooterEl';

var socialIconLink = Object(__WEBPACK_IMPORTED_MODULE_8_glamor__["css"])({
  display: 'inline-block',
  marginRight: '1em',
  color: __WEBPACK_IMPORTED_MODULE_10__theme__["a" /* default */].COLOR_FOOTER_TEXT_MUTED,
  ':hover': {
    color: __WEBPACK_IMPORTED_MODULE_10__theme__["a" /* default */].COLOR_TEXT_INVERTED
  }
});

var socialIcon = Object(__WEBPACK_IMPORTED_MODULE_8_glamor__["css"])({
  width: '30px'
});

var Footer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Footer, _React$Component);

  function Footer() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Footer);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Footer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Footer)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Footer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        FooterEl,
        { className: 'mt-3' },
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Container"],
          null,
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"],
            null,
            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              {
                xs: '12',
                sm: '12',
                lg: '3',
                className: 'd-flex flex-column justify-content-end'
              },
              __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__headlines_H1__["a" /* default */],
                { inverted: true },
                'Be In',
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('br', { className: 'd-xs-none' }),
                ' Touch'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              {
                xs: '12',
                sm: '12',
                lg: '6',
                className: 'mt-3 mt-sm-0 d-flex flex-column justify-content-end'
              },
              __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11__P__["a" /* default */],
                { footerMuted: true },
                '14A Lorong Telok',
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('br', null),
                'Singapore 049027',
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('br', null),
                '\xA9 2017 DDIY Solutions Pte. Ltd. All rights reserved.'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              {
                xs: '12',
                sm: '12',
                lg: '3',
                className: 'mt-3 mt-sm-0 d-flex flex-column justify-content-end'
              },
              __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                'div',
                { style: { paddingBottom: '10px' } },
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                  'a',
                  {
                    className: socialIconLink,
                    href: 'https://www.facebook.com/DDIY-Solutions-1517574435000239/'
                  },
                  __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_feather__["Facebook"], { className: socialIcon, alt: 'Facebook' })
                ),
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                  'a',
                  {
                    className: socialIconLink,
                    href: 'https://www.instagram.com/ddiy.studio/'
                  },
                  __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_feather__["Instagram"], { className: socialIcon, alt: 'Instagram' })
                ),
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                  'a',
                  {
                    className: socialIconLink,
                    href: 'mailto:info@ddiy-solutions.com'
                  },
                  __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_feather__["Mail"], { className: socialIcon, alt: 'Email' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/components/MainCategoryImageLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);











var TitleStyles = Object(__WEBPACK_IMPORTED_MODULE_7_glamor__["css"])({
  '@media(min-width: 460px)': {
    fontSize: '16px'
  },
  '@media(min-width: 768px)': {
    fontSize: '10px'
  },
  '@media(min-width: 992px)': {
    fontSize: '16px'
  }
});

var ImageDiv = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div(function () {
  return {
    position: 'relative',
    cursor: 'pointer',
    border: '2px solid white',
    transition: 'border 0.2s ease-in-out'
  };
}, function (props) {
  return props.isHover === true && {
    border: '2px solid ' + props.theme.COLOR_PRIMARY
  };
});

var Image = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.img(function () {
  return {
    width: '100%'
  };
});

var ImageOverlay = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div(function (props) {
  return {
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    left: 0,
    opacity: 0.3,
    transition: 'all 0.5s ease-in-out',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%'
  };
}, function (props) {
  return props.isHover === true && {
    opacity: 0.7
  };
});

var Title = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div(function (props) {
  return {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    fontFamily: props.theme.FONT_SERIF,
    color: props.theme.COLOR_TEXT,
    fontWeight: 'bold',
    fontSize: '10px',
    justifyContent: 'center',
    opacity: 100,
    left: props.textAlign ? '5%' : 0,
    right: props.textAlign ? 0 : '5%',
    textAlign: props.textAlign ? props.textAlign : 'right',
    top: '90%',
    transition: 'color 0.5s ease-in-out'
  };
}, function (props) {
  return props.isHover === true && {
    color: props.theme.COLOR_PRIMARY
  };
});

var MainCategoryImageLink = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MainCategoryImageLink, _React$Component);

  function MainCategoryImageLink(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MainCategoryImageLink);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MainCategoryImageLink.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MainCategoryImageLink)).call(this, props));

    _this.handleMouseEnter = function () {
      _this.setState({ isHover: true });
    };

    _this.handleMouseOut = function () {
      _this.setState({ isHover: false });
    };

    _this.state = {
      isHover: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MainCategoryImageLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          srcAlt = _props.srcAlt,
          title = _props.title,
          chineseTitle = _props.chineseTitle,
          to = _props.to;

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["Link"],
        { to: to },
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          ImageDiv,
          {
            onMouseEnter: this.handleMouseEnter,
            onMouseOut: this.handleMouseOut,
            isHover: this.state.isHover
          },
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Image, { src: src, alt: srcAlt }),
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ImageOverlay, { isHover: this.state.isHover }),
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
            Title,
            { isHover: this.state.isHover, className: '' + TitleStyles },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
            Title,
            {
              isHover: this.state.isHover,
              className: '' + TitleStyles,
              textAlign: 'left'
            },
            chineseTitle
          )
        )
      );
    }
  }]);

  return MainCategoryImageLink;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainCategoryImageLink);

/***/ }),

/***/ "./src/components/MainNavbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_svg_ddiy_logo_svg__ = __webpack_require__("./src/static/svg/ddiy-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_svg_ddiy_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_svg_ddiy_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_js__ = __webpack_require__("./src/theme.js");













var LogoImg = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.img({
  width: '30px',
  '@media(min-width: 768px)': {
    width: '50px'
  }
});

var LogoSpan = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.span({
  marginLeft: '0.5em',
  fontFamily: __WEBPACK_IMPORTED_MODULE_10__theme_js__["a" /* default */].FONT_SERIF,
  fontSize: '14px',
  '@media(min-width: 768px)': {
    fontSize: '18px'
  }
});

var MainNavbar = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MainNavbar, _React$Component);

  function MainNavbar(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MainNavbar);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MainNavbar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MainNavbar)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.getActiveView = function () {
      var pathname = _this.props.location.pathname;
      if (pathname.indexOf('/about/') >= 0) {
        return 'AboutView';
      }
      return 'HomeView';
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MainNavbar, [{
    key: 'render',
    value: function render() {
      var activeView = this.getActiveView();
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Container"],
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Navbar"],
              { light: true, expand: 'md' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavbarBrand"],
                { href: '/' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(LogoImg, { src: __WEBPACK_IMPORTED_MODULE_9__static_svg_ddiy_logo_svg___default.a, alt: 'Logo of DDIY Solutions' }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  LogoSpan,
                  null,
                  'DDIY | \u6253\u9EDE\u4E00\u4E00'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavbarToggler"], { onClick: this.toggle }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Collapse"],
                { isOpen: this.state.isOpen, navbar: true },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Nav"],
                  { className: 'ml-auto', navbar: true },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavItem"],
                    { active: activeView === 'HomeView' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
                      { className: 'nav-link', to: '/' },
                      'Repair & Install'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavItem"],
                    { active: activeView === 'ConciergeView' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
                      { className: 'nav-link', to: '/concierge/' },
                      'Concierge'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'a',
                      {
                        className: 'nav-link',
                        href: 'https://medium.com/@ddiy.studio/latest/'
                      },
                      'DDIY Studio'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_reactstrap__["NavItem"],
                    { active: activeView === 'AboutView' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
                      { className: 'nav-link', to: '/about/' },
                      'About'
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('hr', null)
      );
    }
  }]);

  return MainNavbar;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MainNavbar = Object(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["withRouter"])(MainNavbar);
/* harmony default export */ __webpack_exports__["a"] = (MainNavbar);

/***/ }),

/***/ "./src/components/P.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var P = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.p(function (props) {
  return {
    fontFamily: props.theme.FONT_SANS_SERIF,
    color: props.primary ? props.theme.COLOR_PRIMARY : props.theme.COLOR_TEXT,
    textTransform: props.textTransform
  };
}, function (props) {
  return props.footerMuted && {
    color: props.theme.COLOR_FOOTER_TEXT_MUTED
  };
}, function (props) {
  return props.inverted && {
    color: props.theme.COLOR_TEXT_INVERTED
  };
});
P.displayName = 'P';

/* harmony default export */ __webpack_exports__["a"] = (P);

/***/ }),

/***/ "./src/components/ScrollToTop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);








var ScrollToTop = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollToTop, _Component);

  function ScrollToTop() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollToTop);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollToTop.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollToTop)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollToTop, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ScrollToTop;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ScrollToTop = Object(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["withRouter"])(ScrollToTop);
/* harmony default export */ __webpack_exports__["a"] = (ScrollToTop);

/***/ }),

/***/ "./src/components/Span.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var SPAN = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.span(function (props) {
  return {
    textTransform: props.textTransform
  };
}, function (props) {
  return props.primary && {
    color: props.theme.COLOR_PRIMARY
  };
}, function (props) {
  return props.inverted && {
    color: props.theme.COLOR_TEXT_INVERTED
  };
});
SPAN.displayName = 'SPAN';

/* harmony default export */ __webpack_exports__["a"] = (SPAN);

/***/ }),

/***/ "./src/components/StripeForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_stripe_checkout__ = __webpack_require__("react-stripe-checkout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_stripe_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_stripe_checkout__);











var StripeForm = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(StripeForm, _Component);

  function StripeForm() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, StripeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = StripeForm.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(StripeForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleToken = function (token) {
      _this.props.handleToken(token);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(StripeForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          userEmail = _props.userEmail,
          amount = _props.amount,
          currency = _props.currency,
          submitDisabled = _props.submitDisabled,
          isYangon = _props.isYangon;

      var actualAmount = parseInt(amount * 100, 10);
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_stripe_checkout___default.a,
          {
            email: userEmail,
            token: this.handleToken,
            stripeKey: "pk_live_j9dnPU6TD95ZDuAlBpJaqGAt",
            amount: actualAmount,
            name: 'DDIY Solutions',
            description: 'Credit Card Payment to DDIY Solutions',
            currency: currency,
            locale: 'auto'
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
            { disabled: submitDisabled, onClick: function onClick(e) {
                return e.preventDefault();
              } },
            'Pay Now with Credit Card'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["FormText"],
          { color: 'muted' },
          !isYangon && submitDisabled && '* Please fill out all the fields above',
          !isYangon && !submitDisabled && '* When you submit the form, we will get back to you within 48 hours'
        )
      );
    }
  }]);

  return StripeForm;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

StripeForm.defaultProps = {
  submitDisabled: true,
  amount: null,
  currency: 'USD',
  isYangon: false
};


/* harmony default export */ __webpack_exports__["a"] = (StripeForm);

/***/ }),

/***/ "./src/components/WithTracker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_google_analytics_js__ = __webpack_require__("./src/utils/google-analytics.js");










var withTracker = function withTracker(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var trackPage = function trackPage(props) {
    var page = props.location.pathname;
    var search = props.location.search;
    var fullPath = '' + page + (search || '');
    var ga = Object(__WEBPACK_IMPORTED_MODULE_7__utils_google_analytics_js__["a" /* getGA */])();
    if (ga) {
      ga.set(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()({
        fullPath: fullPath
      }, options));
      ga.pageview(fullPath);
    }
  };

  var HOC = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HOC, _Component);

    function HOC() {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HOC);

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HOC.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HOC)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        trackPage(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var currentPage = this.props.location.pathname;
        var nextPage = nextProps.location.pathname;
        var currentSearch = this.props.location.search;
        var nextSearch = nextProps.location.search;

        if (currentPage !== nextPage || currentSearch !== nextSearch) {
          trackPage(nextProps);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(WrappedComponent, this.props);
      }
    }]);

    return HOC;
  }(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

  return HOC;
};

/* harmony default export */ __webpack_exports__["a"] = (withTracker);

/***/ }),

/***/ "./src/components/form/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormsInputCheckbox_js__ = __webpack_require__("./src/components/form/FormsInputCheckbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormsInputCheckboxMultiple_js__ = __webpack_require__("./src/components/form/FormsInputCheckboxMultiple.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FormsInputRadio_js__ = __webpack_require__("./src/components/form/FormsInputRadio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormsInputSelect_js__ = __webpack_require__("./src/components/form/FormsInputSelect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FormsInputText_js__ = __webpack_require__("./src/components/form/FormsInputText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FormsInputTextArea_js__ = __webpack_require__("./src/components/form/FormsInputTextArea.js");










// import FormsInputFileUpload from './FormsInputFileUpload.js'





var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Form)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckboxMultipleChange = function (name, value, checked) {
      _this.props.handleCheckboxMultipleChange(name, value, checked);
    }, _this.handleInputChanged = function (name, value) {
      _this.props.handleInputChanged(name, value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'renderText',
    value: function renderText(fieldName, inputField, formErrors, formValues) {
      var _this2 = this;

      var value = formValues[fieldName];

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__FormsInputText_js__["a" /* default */], {
        key: fieldName,
        errors: formErrors[fieldName],
        label: inputField.label,
        placeholder: inputField.placeholder,
        name: fieldName,
        onChange: function onChange(val) {
          return _this2.handleInputChanged(fieldName, val);
        },
        value: value,
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderTextArea',
    value: function renderTextArea(fieldName, inputField, formErrors, formValues) {
      var _this3 = this;

      var value = formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__FormsInputTextArea_js__["a" /* default */], {
        key: fieldName,
        label: inputField.label,
        placeholder: inputField.placeholder,
        name: fieldName,
        value: value,
        errors: formErrors[fieldName],
        onChange: function onChange(val) {
          return _this3.handleInputChanged(fieldName, val);
        },
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect(fieldName, inputField, formErrors, formValues) {
      var _this4 = this;

      var value = formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__FormsInputSelect_js__["a" /* default */], {
        key: fieldName,
        choices: inputField.choices,
        errors: formErrors[fieldName],
        label: inputField.label,
        name: fieldName,
        onChange: function onChange(val) {
          return _this4.handleInputChanged(fieldName, val);
        },
        value: value,
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(fieldName, inputField, formErrors, formValues) {
      var _this5 = this;

      var value = '' + formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FormsInputCheckbox_js__["a" /* default */], {
        key: fieldName,
        label: inputField.label,
        name: fieldName,
        value: value,
        errors: formErrors[fieldName],
        onChange: function onChange(val) {
          return _this5.handleInputChanged(fieldName, val);
        },
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderCheckboxMultiple',
    value: function renderCheckboxMultiple(fieldName, inputField, formErrors, formValues) {
      var _this6 = this;

      var activeChoices = formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__FormsInputCheckboxMultiple_js__["a" /* default */], {
        key: fieldName,
        choices: inputField.choices,
        activeChoices: activeChoices,
        label: inputField.label,
        name: fieldName,
        errors: formErrors[fieldName],
        onChange: function onChange(val, checked) {
          return _this6.handleCheckboxMultipleChange(fieldName, val, checked);
        },
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderRadio',
    value: function renderRadio(fieldName, inputField, formErrors, formValues) {
      var _this7 = this;

      var value = formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__FormsInputRadio_js__["a" /* default */], {
        key: fieldName,
        label: inputField.label,
        name: fieldName,
        value: value,
        errors: formErrors[fieldName],
        choices: inputField.choices,
        onChange: function onChange(val) {
          return _this7.handleInputChanged(fieldName, val);
        },
        disabled: inputField.disabled
      });
    }
  }, {
    key: 'renderDateTime',
    value: function renderDateTime(fieldName, inputField, formErrors, formValues) {
      var _this8 = this;

      var value = formValues[fieldName];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__FormsInputText_js__["a" /* default */], {
        key: fieldName,
        errors: formErrors[fieldName],
        label: inputField.label,
        placeholder: inputField.placeholder,
        name: fieldName,
        onChange: function onChange(val) {
          return _this8.handleInputChanged(fieldName, val);
        },
        value: value,
        disabled: inputField.disabled
      });
    }

    /*renderImage(fieldName, inputField, formErrors, formValues) {
      return (
        <FormsInputFileUpload
          key={fieldName}
          dest="marketplace_product"
          errors={formErrors[fieldName]}
          initialValue={inputField.value}
          inline={inputField.inline}
          displayValue={inputField.displayValue}
          isMandatory
          label={inputField.label}
          name={fieldName}
          onChange={val => this.handleInputChanged(fieldName, val)}
        />
      )
    }*/

  }, {
    key: 'renderForm',
    value: function renderForm(fieldName, fields, formErrors, formValues) {
      var inputField = fields[fieldName];
      if (['NumberInput', 'TextInput', 'EmailInput'].includes(inputField.type)) {
        return this.renderText(fieldName, inputField, formErrors, formValues);
      }

      if (inputField.type === 'Textarea') {
        return this.renderTextArea(fieldName, inputField, formErrors, formValues);
      }

      if (['LazySelect', 'Select'].includes(inputField.type)) {
        return this.renderSelect(fieldName, inputField, formErrors, formValues);
      }
      if (inputField.type === 'CheckboxInput') {
        return this.renderCheckbox(fieldName, inputField, formErrors, formValues);
      }
      if (inputField.type === 'CheckboxSelectMultiple') {
        return this.renderCheckboxMultiple(fieldName, inputField, formErrors, formValues);
      }
      if (inputField.type === 'RadioSelect') {
        return this.renderRadio(fieldName, inputField, formErrors, formValues);
      }
      if (inputField.type === 'DateTimeInput') {
        return this.renderDateTime(fieldName, inputField, formErrors, formValues);
      }
      /*
      if (inputField.type.indexOf('CustomS3DirectWidget') >= 0) {
        return this.renderImage(fieldName, inputField, formErrors)
      }
      if (inputField.type === 'ClearableFileInput') {
        return this.renderFileField(item)
      }
      if (inputField.type === 'TagWidget') {
        return this.renderTagField(item)
      }
      */
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var _props = this.props,
          disabled = _props.disabled,
          fieldsets = _props.fieldsets,
          fields = _props.fields,
          formErrors = _props.formErrors,
          formValues = _props.formValues;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'fieldset',
        { disabled: disabled },
        fieldsets.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: item.title, className: index === 0 ? '' : 'mt-3' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'h3',
              null,
              item.title
            ),
            item.fields.map(function (fieldName) {
              return _this9.renderForm(fieldName, fields, formErrors, formValues);
            })
          );
        })
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Form.defaultProps = {
  disabled: false
};


/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./src/components/form/FormsFormError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var FormsFormError = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div(function (props) {
  return {
    color: props.theme.colorDanger,
    fontFamily: props.theme.fontPrimary,
    fontSize: props.theme.fontSizeP
  };
}, function (props) {
  return props.noPointer && { cursor: 'text' };
});

FormsFormError.displayName = 'core.forms.FormsFormError';

/* harmony default export */ __webpack_exports__["a"] = (FormsFormError);

/***/ }),

/***/ "./src/components/form/FormsInputCheckbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormsFormError_js__ = __webpack_require__("./src/components/form/FormsFormError.js");











var Container = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div({
  display: 'flex',
  flex: '0 0 auto',
  position: 'relative'
});

var Checkbox = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div(function (props) {
  return {
    display: 'inline-block',
    flex: '0 0 auto',
    backgroundColor: 'inherit',
    backgroundImage: 'none',
    backgroundSize: 'contain',
    borderColor: props.theme.colorPrimary,
    borderRadius: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: '20px',
    marginRight: '0.5em',
    marginTop: '0',
    width: '20px'
  };
}, function (props) {
  return props.isHidden && {
    display: 'none'
  };
}, function (props) {
  return props.isCircle && {
    borderRadius: '20px',
    marginTop: '0.2em'
  };
}, function (props) {
  return props.isChecked && {
    backgroundColor: 'grey'
  };
}, function (props) {
  if (props.isChecked && props.usesBackgroundImage) {
    return {
      backgroundImage: 'url(' + props.activeColorOverride + ')'
    };
  }
});

Checkbox.displayName = 'core.forms.Checkbox';

var InputCheckboxOrRadioLabel = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.label(function (props) {
  return {
    display: 'inline-block',
    color: 'black',
    fontFamily: props.theme.fontSansSerif,
    fontSize: props.theme.fontSizeInput
  };
}, function (props) {
  return props.isHidden && {
    display: 'none'
  };
}, function (props) {
  return props.disabled && {
    color: props.theme.colorGray
  };
});

InputCheckboxOrRadioLabel.displayName = 'core.forms.InputCheckboxOrRadioLabel';

var FormsInputCheckbox = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FormsInputCheckbox, _Component);

  function FormsInputCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FormsInputCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = FormsInputCheckbox.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      if (_this.props.value === undefined) {
        console.error('InputCheckbox ' + _this.props.name + ' has no value!');
        return '';
      }
      return _this.props.value;
    }, _this.handleChange = function (e) {
      _this.props.onChange(e.target.checked);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FormsInputCheckbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          className = _props.className,
          disabled = _props.disabled,
          errors = _props.errors,
          label = _props.label,
          name = _props.name,
          value = _props.value;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: className ? className : 'mt-3' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          Container,
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Checkbox, { isChecked: checked, disabled: disabled }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            InputCheckboxOrRadioLabel,
            { htmlFor: 'id_' + name, disabled: disabled },
            label
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', {
            disabled: disabled,
            id: 'id_' + name,
            onChange: this.handleChange,
            checked: checked,
            type: 'checkbox',
            value: value,
            style: {
              cursor: disabled ? 'not-allowed' : 'pointer',
              height: '100%',
              left: 0,
              opacity: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: 1
            }
          }),
          errors && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__FormsFormError_js__["a" /* default */],
            { id: 'id_' + name + '_error' },
            errors[0]
          )
        )
      );
    }
  }]);

  return FormsInputCheckbox;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

FormsInputCheckbox.displayName = 'core.forms.FormsInputCheckbox';
FormsInputCheckbox.defaultProps = {
  checked: false,
  className: undefined,
  disabled: undefined,
  errors: undefined,
  isFocused: undefined,
  isHidden: undefined,
  label: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputCheckbox);

/***/ }),

/***/ "./src/components/form/FormsInputCheckboxMultiple.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormsLabel_js__ = __webpack_require__("./src/components/form/FormsLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FormsInputCheckbox_js__ = __webpack_require__("./src/components/form/FormsInputCheckbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormsFormError_js__ = __webpack_require__("./src/components/form/FormsFormError.js");













var CheckboxesDiv = __WEBPACK_IMPORTED_MODULE_7_glamorous___default.a.div({
  maxHeight: '300px',
  overflow: 'scroll'
});
CheckboxesDiv.displayName = 'forms.FormsInputCheckboxMultiple.CheckboxesDiv';

var FormsInputCheckboxMultipleWithFilter = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FormsInputCheckboxMultipleWithFilter, _Component);

  function FormsInputCheckboxMultipleWithFilter() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FormsInputCheckboxMultipleWithFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = FormsInputCheckboxMultipleWithFilter.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputCheckboxMultipleWithFilter)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (val, checked) {
      _this.props.onChange(val, checked);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FormsInputCheckboxMultipleWithFilter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          choices = _props.choices,
          errors = _props.errors,
          label = _props.label,
          name = _props.name;

      var activeChoices = this.props.activeChoices;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        label && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__FormsLabel_js__["a" /* default */],
          { htmlFor: 'id_' + name },
          label
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          CheckboxesDiv,
          null,
          choices.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__FormsInputCheckbox_js__["a" /* default */], {
              key: item[0],
              name: name,
              label: item[1],
              value: item[0],
              onChange: function onChange(checked) {
                return _this2.handleChange(item[0], checked);
              },
              checked: activeChoices.includes(item[0])
            });
          })
        ),
        errors && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__FormsFormError_js__["a" /* default */],
          { id: 'id_' + name + '_error' },
          errors[0]
        )
      );
    }
  }]);

  return FormsInputCheckboxMultipleWithFilter;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

FormsInputCheckboxMultipleWithFilter.displayName = 'forms.FormsInputCheckboxMultiple';
FormsInputCheckboxMultipleWithFilter.defaultProps = {
  activeChoices: [],
  disabled: undefined,
  choices: [],
  errors: undefined,
  label: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputCheckboxMultipleWithFilter);

/***/ }),

/***/ "./src/components/form/FormsInputRadio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormsFormError_js__ = __webpack_require__("./src/components/form/FormsFormError.js");











var Radio = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.div(function (props) {
  return {
    display: 'inline-block',
    flex: '0 0 auto',
    backgroundColor: 'inherit',
    backgroundImage: 'none',
    backgroundSize: 'contain',
    borderColor: props.theme.colorPrimary,
    borderRadius: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: '20px',
    marginRight: '0.5em',
    marginTop: '0',
    width: '20px'
  };
}, function (props) {
  return props.isHidden && {
    display: 'none'
  };
}, function (props) {
  return props.isCircle && {
    borderRadius: '20px',
    marginTop: '0.2em'
  };
}, function (props) {
  return props.isChecked && {
    backgroundColor: props.theme.colorPrimary
  };
}, function (props) {
  if (props.isChecked && props.usesBackgroundImage) {
    return {
      backgroundImage: 'url(' + props.activeColorOverride + ')'
    };
  }
});

Radio.displayName = 'core.forms.Radio';

var InputCheckboxOrRadioLabel = __WEBPACK_IMPORTED_MODULE_6_glamorous___default.a.label(function (props) {
  return {
    display: 'inline-block',
    color: 'black',
    fontFamily: props.theme.fontSansSerif,
    fontSize: props.theme.fontSizeInput
  };
}, function (props) {
  return props.isHidden && {
    display: 'none'
  };
}, function (props) {
  return props.disabled && {
    color: props.theme.colorGray
  };
});

InputCheckboxOrRadioLabel.displayName = 'core.forms.InputCheckboxOrRadioLabel';

var FormsInputRadio = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FormsInputRadio, _Component);

  function FormsInputRadio() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FormsInputRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = FormsInputRadio.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputRadio)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      if (_this.props.value === undefined) {
        console.error('InputRadio ' + _this.props.name + ' has no value!');
        return '';
      }
      return _this.props.value;
    }, _this.handleChange = function (e) {
      var value = false;
      if (e.target.value === 'true') {
        value = true;
      }
      _this.props.onChange(value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FormsInputRadio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          choices = _props.choices,
          name = _props.name,
          value = _props.value,
          label = _props.label,
          errors = _props.errors;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        label,
        choices.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '' + item[1] },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', {
              name: name,
              disabled: disabled,
              id: 'id_' + item[1],
              onChange: function onChange(e) {
                return _this2.handleChange(e);
              },
              type: 'radio',
              value: item[0],
              checked: item[0] === value
            }),
            item[1]
          );
        }),
        errors && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__FormsFormError_js__["a" /* default */],
          { id: 'id_' + name + '_error' },
          errors[0]
        )
      );
    }
  }]);

  return FormsInputRadio;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

FormsInputRadio.displayName = 'core.forms.FormsInputRadio';
FormsInputRadio.defaultProps = {
  isHidden: undefined,
  isFocused: undefined,
  disabled: undefined,
  errors: undefined,
  label: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputRadio);

/***/ }),

/***/ "./src/components/form/FormsInputSelect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);












var FormsInputSelect = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(FormsInputSelect, _Component);

  function FormsInputSelect() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FormsInputSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = FormsInputSelect.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputSelect)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      if (_this.props.value === undefined) {
        console.error('InputSelect ' + _this.props.name + ' has no value!');
        return '';
      }
      return _this.props.value;
    }, _this.handleChange = function (e) {
      _this.props.onChange(e.target.value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(FormsInputSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          choices = _props.choices,
          className = _props.className,
          errors = _props.errors,
          label = _props.label,
          name = _props.name,
          onChange = _props.onChange,
          small = _props.small,
          selectProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['choices', 'className', 'errors', 'label', 'name', 'onChange', 'small']);

      var displayValue = this.getValue();
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: className ? className : 'mt-3' },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormGroup"],
          null,
          label && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Label"],
            { 'for': 'id_' + name },
            label
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Input"],
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              type: 'select',
              id: 'id_' + name,
              name: name,
              onChange: function onChange(e) {
                return _this2.handleChange(e);
              },
              value: displayValue,
              valid: errors ? false : null
            }, selectProps),
            choices.map(function (item) {
              return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'option',
                { key: item[0], value: item[0] },
                item[1]
              );
            })
          ),
          errors && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormFeedback"],
            null,
            errors[0]
          )
        )
      );
    }
  }]);

  return FormsInputSelect;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

FormsInputSelect.displayName = 'core.forms.FormsInputSelect';
FormsInputSelect.defaultProps = {
  choices: [],
  className: undefined,
  disabled: undefined,
  errors: undefined,
  label: undefined,
  small: false
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputSelect);

/***/ }),

/***/ "./src/components/form/FormsInputText.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);












__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Input"].displayName = 'core.forms.Input';

var FormsInputText = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(FormsInputText, _Component);

  function FormsInputText() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FormsInputText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = FormsInputText.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputText)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      if (_this.props.value === undefined) {
        console.error('InputText ' + _this.props.name + ' has no value!');
        return '';
      }
      return _this.props.value;
    }, _this.handleChange = function (e) {
      _this.props.onChange(e.target.value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(FormsInputText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          errors = _props.errors,
          label = _props.label,
          placeholder = _props.placeholder,
          name = _props.name,
          inputProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['value', 'onChange', 'errors', 'label', 'placeholder', 'name']);

      var displayValue = this.getValue();

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'mt-3' },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormGroup"],
          null,
          label && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Label"],
            { 'for': 'id_' + name },
            label
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Input"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            id: 'id_' + name,
            onChange: this.handleChange,
            value: displayValue,
            placeholder: placeholder,
            valid: errors ? false : null
          }, inputProps)),
          errors && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormFeedback"],
            { id: 'id_' + name + '_error' },
            errors[0]
          )
        )
      );
    }
  }]);

  return FormsInputText;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

FormsInputText.displayName = 'core.forms.FormsInputText';
FormsInputText.defaultProps = {
  backgroundcolor: undefined,
  disabled: undefined,
  errors: undefined,
  label: undefined,
  placeholder: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputText);

/***/ }),

/***/ "./src/components/form/FormsInputTextArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);












var FormsInputTextArea = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(FormsInputTextArea, _Component);

  function FormsInputTextArea(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FormsInputTextArea);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FormsInputTextArea.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(FormsInputTextArea)).call(this, props));

    _this.getValue = function () {
      if (_this.props.value === undefined) {
        console.error('FormInputTextArea ' + _this.props.name + ' has no value!');
        return '';
      }
      return _this.props.value;
    };

    _this.handleChange = function (e) {
      _this.props.onChange(e.target.value);
    };

    _this.minHeight = 120;
    _this.state = { height: _this.minHeight };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(FormsInputTextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.initHeight();
    }
  }, {
    key: 'initHeight',
    value: function initHeight() {
      if (this.state.height === this.textArea.scrollHeight) {
        return;
      }
      if (this.state.height < this.textArea.scrollHeight) {
        return this.setState({ height: this.textArea.scrollHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          errors = _props.errors,
          label = _props.label,
          placeholder = _props.placeholder,
          name = _props.name,
          inputProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['value', 'onChange', 'errors', 'label', 'placeholder', 'name']);

      var displayValue = this.getValue();
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormGroup"],
          null,
          label && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Label"],
            { 'for': 'id_' + name },
            label
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Input"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            type: 'textarea',
            id: 'id_' + name,
            value: displayValue,
            placeholder: placeholder,
            onChange: this.handleChange,
            valid: errors ? false : null,
            height: this.state.height,
            innerRef: function innerRef(textArea) {
              return _this2.textArea = textArea;
            }
          }, inputProps)),
          errors && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["FormFeedback"],
            { id: 'id_' + name + '_error' },
            errors[0]
          )
        )
      );
    }
  }]);

  return FormsInputTextArea;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

FormsInputTextArea.displayName = 'core.forms.FormsInputTextArea';
FormsInputTextArea.defaultProps = {
  disabled: undefined,
  errors: undefined,
  label: undefined,
  placeholder: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (FormsInputTextArea);

/***/ }),

/***/ "./src/components/form/FormsLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var FormsLabel = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.label(function (props) {
  return {
    fontFamily: props.theme.fontPrimary,
    fontSize: props.theme.fontSizeInput,
    color: props.theme.colorTextGray,
    display: 'block',
    margin: '0px'
  };
}, function (props) {
  return props.large && {
    fontSize: props.theme.fontSizeInputLarge
  };
});
FormsLabel.displayName = 'core.forms.FormsLabel';

/* harmony default export */ __webpack_exports__["a"] = (FormsLabel);

/***/ }),

/***/ "./src/components/headlines/H1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var H1 = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.h1(function (props) {
  return {
    fontFamily: props.theme.FONT_SERIF,
    color: props.theme.COLOR_TEXT
  };
}, function (props) {
  return props.smaller && {
    fontSize: props.theme.FONT_SIZE_H1
  };
}, function (props) {
  return props.inverted && {
    color: props.theme.COLOR_TEXT_INVERTED
  };
});
H1.displayName = 'H1';

/* harmony default export */ __webpack_exports__["a"] = (H1);

/***/ }),

/***/ "./src/components/headlines/H2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var H2 = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.h2(function (props) {
  return {
    fontFamily: props.theme.FONT_SERIF,
    color: props.theme.COLOR_TEXT
  };
}, function (props) {
  return props.sansSerif && {
    fontFamily: props.theme.FONT_SANS_SERIF
  };
}, function (props) {
  return props.center && {
    textAlign: 'center'
  };
}, function (props) {
  return props.small && {
    fontSize: props.theme.FONT_SIZE_H2_SMALL
  };
}, function (props) {
  return props.letterSpacing && {
    letterSpacing: '0.25em'
  };
}, function (props) {
  return props.uppercase && {
    textTransform: 'uppercase'
  };
}, function (props) {
  return props.inverted && {
    color: props.theme.COLOR_TEXT_INVERTED
  };
});
H2.displayName = 'H2';

/* harmony default export */ __webpack_exports__["a"] = (H2);

/***/ }),

/***/ "./src/components/headlines/H3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var H3 = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.h3(function (props) {
  return {
    fontFamily: props.theme.FONT_SERIF,
    color: props.theme.COLOR_TEXT
  };
}, function (props) {
  return props.sansSerif && {
    fontFamily: props.theme.FONT_SANS_SERIF
  };
}, function (props) {
  return props.small && {
    fontSize: props.theme.FONT_SIZE_H3_SMALL
  };
}, function (props) {
  return props.italic && {
    fontStyle: 'italic'
  };
});
H3.displayName = 'H3';

/* harmony default export */ __webpack_exports__["a"] = (H3);

/***/ }),

/***/ "./src/components/modals/ModalFadeIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var ModalFadeIn = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div(function (props) {
  return {
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
    display: 'block',
    fontFamily: props.theme.FONT_SERIF,
    fontWeight: '300',
    justifyContent: 'center',
    padding: '0.8em 1em',
    width: '100%'
  };
}, function (props) {
  if (!props.show) {
    return {
      height: '0px',
      opacity: 0,
      overflowY: 'hidden',
      padding: '0px',
      transition: 'opacity 0.2s ease'
    };
  }
  return {
    opacity: 1,
    transition: 'opacity 3s ease'
  };
});
ModalFadeIn.displayName = 'ModalFadeIn';

/* harmony default export */ __webpack_exports__["a"] = (ModalFadeIn);

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);



var server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

var currentApp = __WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */];

server.listen(3000 || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (false) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_batch_http__ = __webpack_require__("apollo-link-batch-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_batch_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link_batch_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch__ = __webpack_require__("apollo-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_glamor_server__ = __webpack_require__("glamor/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_glamor_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_glamor_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_set_cookie_parser__ = __webpack_require__("set-cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_set_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_set_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__build_react_loadable_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_fs__);

/* eslint-disable */



















var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_13_express___default()();
server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_13_express___default.a.static("/Users/martin/Projects/ddiy-solutions/src/frontend/build/public")).post('/*', function (req, res) {
  res.status(200).send('\n<!doctype html>\n<head>\n</head>\n<body>\n  <h1>Error Posting Data</h1>\n  <p>Oh no! Something went wrong. Our engineers have been informed via email.</p>\n</body>\n</html>');
}).get('/*', function (req, res) {
  var apolloMiddleware = function apolloMiddleware(requests, next) {
    // Forward cookies from the original request to Django
    requests.options.headers = {};
    requests.options.headers.cookie = req.headers.cookie;
    next();
  };

  var apolloRespCookies = [];
  var apolloFetchAfterware = function apolloFetchAfterware(_ref, next) {
    var response = _ref.response,
        options = _ref.options;

    // If Django returns Response cookies, save them in the array above
    apolloRespCookies = __WEBPACK_IMPORTED_MODULE_15_set_cookie_parser___default.a.parse(response.headers._headers['set-cookie']);
    next();
  };

  var apolloFetch = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__["createApolloFetch"])({
    uri: "http://localhost:8889/gql/"
  });

  apolloFetch.batchUse(apolloMiddleware);
  apolloFetch.batchUseAfter(apolloFetchAfterware);

  var batchHttpLink = new __WEBPACK_IMPORTED_MODULE_3_apollo_link_batch_http__["BatchHttpLink"]({ fetch: apolloFetch });

  var client = new __WEBPACK_IMPORTED_MODULE_1_apollo_client__["ApolloClient"]({
    cache: new __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__["InMemoryCache"](),
    link: batchHttpLink,
    queryDeduplication: true,
    ssrMode: true
  });

  var context = {};
  var modules = [];
  var app = __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_react_loadable__["Capture"],
    { report: function report(moduleName) {
        return modules.push(moduleName);
      } },
    __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_apollo__["ApolloProvider"],
      { client: client },
      __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_react_router_dom__["StaticRouter"],
        { context: context, location: req.url },
        __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__App__["a" /* default */], null)
      )
    )
  );

  __WEBPACK_IMPORTED_MODULE_4_react_loadable___default.a.preloadAll().then(function () {
    Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["getDataFromTree"])(app).then(function () {
      var glamorResult = Object(__WEBPACK_IMPORTED_MODULE_9_glamor_server__["renderStatic"])(function () {
        return Object(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__["renderToString"])(app);
      });
      var apolloState = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(client.cache.extract());
      var bundles = Object(__WEBPACK_IMPORTED_MODULE_6_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_16__build_react_loadable_json___default.a, modules);
      var chunks = bundles.filter(function (bundle) {
        return bundle.file.endsWith('.js');
      });
      var chunksString = chunks.map(function (chunk) {
        return '<script src="' + "https://dg0hd7uprwj8f.cloudfront.net/" + chunk.file + '"></script>';
      }).join('\n');

      if (context.url) {
        res.redirect(context.url);
      } else {
        var helmet = __WEBPACK_IMPORTED_MODULE_7_react_helmet__["Helmet"].renderStatic();
        var mainJs = assets.client.js;
        if (true) {
          mainJs = '' + mainJs;
        }
        apolloRespCookies.forEach(function (cookie) {
          res.cookie(cookie.name, cookie.value, cookie);
        });
        res.status(200).send('<!doctype html>\n      <html lang="" ' + helmet.htmlAttributes.toString() + ' style="height: 100%;">\n      <head>\n          <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n          <meta charSet=\'utf-8\' />\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <style>' + glamorResult.css + '</style>\n          ' + helmet.title.toString() + '\n          ' + helmet.meta.toString() + '\n          ' + helmet.link.toString() + '\n          ' + helmet.script.toString() + '\n          ' + ( true ? '<script src="' + assets.client.js + '" defer></script>' : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n      </head>\n      <body style="height: 100%;">\n        <div id="root" style="height: 100%;">' + glamorResult.html + '</div>\n        <script>\n          window.__APOLLO_STATE__ = ' + apolloState + ';\n        </script>\n        <script src="' + mainJs + '"></script>\n        ' + chunksString + '\n        <script>\n          window.main();\n        </script>\n      </body>\n  </html>');
      }
    });
  });
});

/* harmony default export */ __webpack_exports__["a"] = (server);

/***/ }),

/***/ "./src/static/conciergeBannerJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/conciergeBannerJpg.87da0bf8.jpg";

/***/ }),

/***/ "./src/static/dishwashJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dishwashJpg.da573d24.jpg";

/***/ }),

/***/ "./src/static/dryCleaningJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dryCleaningJpg.ae98f82b.jpg";

/***/ }),

/***/ "./src/static/electricalsJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/electricalsJpg.b8774cd5.jpg";

/***/ }),

/***/ "./src/static/groceryJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/groceryJpg.f8804084.jpg";

/***/ }),

/***/ "./src/static/homeCleaningJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/homeCleaningJpg.e0ed1180.jpg";

/***/ }),

/***/ "./src/static/lightingJpg.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAF5AZ0DASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAIHAwYBBQgECf/EAE0QAAEDAgMEBAoGCAQCCwAAAAABAgMEEQUGEgcTITFBUWFxCBQiMoGRobGywSMkM0JS0RU1Q2Jjc4KzJTSS4RaiF0ZTZXJ0g4TC8PH/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAgEDBAUG/8QALBEBAAICAAQEBgIDAQAAAAAAAAECAxEEEiExBSIjMhMzUXGBwUFhFUJDsf/aAAwDAQACEQMRAD8A/RMAEOgAAAAAAAAAAAAAAAiXWwEt32jd9pkRLjT2mOqdse77Ru+0yauwauwbNuAAYYATBnQgADAAAAAAAAAxAApYAAIAAAAAIAAAcotjgGJjYictODlpFuzEsUv3P5kX9xpRHggrpyXm+PnozfUtv/7eMvebgjF/iRf3GlD+CCurKmdo7eZnGo9tPGck/Mj7T+myPZP4XsADegAAGIAAdmADoGUAEoYgAUsAAAAAAABlABKAAATABQAAAAAAAAgACQAAAAAYgAUsAAEAAAAAEAAAAAETlpwctNduzEvnqOECr/Ei/uNKM8EGzcCz9H0NzhMvrp2/kXpUf5df5kX9xpRXgkKiYHtHYn3c4y2X/wBBE+Ryf9Y+0/pdfZK+AAbWUAAUhiAAHZgA6BlABKAAAAAAAAGIAFLZQAShMAFAAAAAAAAAAAIAAkAAAAAAAAYgAUsAAEAAAAAEAABE5acHLTXbsxL5cS/V839HxIUX4JK2wzaRH1ZxX2wqXriP+Qn7GovqchRPgn3ZBtNgX9nnFOPXeFxyR86sf1P6XHslfYAN7UgAC1sQAA7MAG0ZQASgAAAAAAAAAAEwAUAAAAAAAAAAAAACAAJAAAAAAAAGIAFLAABAAAAABAAADhpyRImNjBiKWoKj+WvvRfkUR4KS/XdqzLebm2L+zIXviK3oKhLfs1KE8FFFZiu1mO3LNNN/ZlOWa6z1+0/pUdMVrL/ABtakAAWtiAAHcAAtAAAAAAAAAAAAAAmACgAAAAAAAAAAAAAAABAAEgAAAAAAADEAClhAmQAAACAAAiACR8+If5Co/lqUL4K6IzM22CNUvozPStv1/R1BfeIN/wAPqv5D19SX+RQ3gtppzjtm4f8AWOkd6mVJzXmPjV+0/ps74b/hfoALaEAAWtiAAHcAAtAAAAAAAAAAAAAAmACgAAAAAAAAAAAAAAABAAEgAAAAAAADEACloAAAAAIAACJy04BExsYcR/V9V/5eT4VKG8GHyM+7a2dWO0Xw1ZfGIO/w+q4fsJPhUofwbW7raftwj1edjFE63Xd9WcOWJjPT7S3Y49G/4X4QJkDpcwAC1sQAA7gAFoAAAAAAAAAAAAAEwAUAAAAAAAAAAAAAAAAIAAkAAAAAAAAYgAUtAAAAABAAARABI+au/V9V/Ik+FSjPB48na1trj/7ww59+99b+Redd+r6r+RJ8KlF+D1b/AKYttMd7ap8LffukrPzOLP8APp+W/H8i/wCP/V9ECZA2uUABtWxAADswAbRlABKAAAAAAAAAAATABQAAAAAAAAAAAAAAAAgACQAAAAAYgAUsAAEAABAAAACSIljFraGMAGBhrf8AIVSfwJPhUofYE7d7a9s7Pw/op/feSq/P2F8zxySsfDE3U6WN8bU61clk9qlAeD1UUWI7a9smJ4ViNLX0TX4VRPqKWZsjEnR9Q5Wc7303d6E60OPPFpz4+WPq6Mc1jDfc/RfwANzkYgAWsAAHZgA2gAAAAAygAlAAAAAAmACgAAAAAAAAAAEAASAAAAAAAAAAAxAApYAAIECZAAAAIkk5ESSciLsSAHxYpWvpImx07GvqJ10RtdyTrcvd80NSWV+L4TQ1LW12JQwPjc12hVVXcFReKIl05dR5c8C+tpocS2v4rWOZSw4hmygYzVGrbyNolkkuvJXfTtVU4KirxRt7HoPM2RazCMOlxifFGyyVLPKicx6StkdwV2tqrqS10VLIvKyop5PytgGF7IG5hjiglWLMWIOrp5qWolnnn8jRfeTyaILJ0tjc5brxujVTky8b8G3L2dmPhPi1i0PaCSItlTiipdFTkqEl5FB7PtsE9HjUlJjrXNwSveisa1yvbQP5a2vXirFv5adqu67330LxunR29vd1dh0Y8tctdw0ZcXw50xP85Tg5f5ynBuSAADswAbQAAAAAAAAAAGUGIGNMaZQYgNGmUGIDRp9AIAbSnrONdzFvOwbzsHVnqnzABhgAAAAAAAAAAGIAFLAABAAAAABAAACSciJJORF2JckMn4Y7GMXkxqdipBGumFFT7ieb7796ny41LucMmcrdWpEjRO1yonuubhk6kihwOF0LdKSJ7lVDXHWdJns1LbHXfUmYax33HSP71RUb7lPFe1SfGKTKdfU5eo4K3FIoJ3UMDn+RJP8Aca7inBeq6KtrIvE9ZbWK2Suoa+anqHNfM9WQq38LE59tzy7jjI2YcxJFbIiyqiNY7mq2PnvELc2fo9/gK+jpp/g34jmvPeUa5MxrFX12Xm0j5a+Ck8XZI6ZZlWFI08lXRsbAjlbw1SKn3VPWWxvM8uIYbW5SxCfXVYFpWmcvnSUjuDU/oeit7lbysfX4NuWcnu2d4lS0eFsjq/G5lqHPs96I+NFYiOtfTpXgi8uJo9A1Mn7a8Jolu2OpmXCnL0PiqoV3KqnZIjON/eepw1OTHXJ9Xl5rbvai7gcnB6Tn1pEAAfaAChMAAAAAAAAAAAAAAAAAAAABlABKAAAAAAAAAAAAYgZ0rQADLIAAIAAAAAIAACJJORw05NV530Yl1+YX6KBiWvqqGexFX5G8YfMmF5VZVWR/i1I6W/Lkir8its7eOOo8PTCq6npMTdiEbaBatHOpp59D1SnmRvFWyNRzU0+WjtKsRzkRrvmx7bpgeBZaqMI2lYdVZDxKSLcouL8cLlcvJYMTanisiKq8GvdHLbzo2ciJvWkTaf4K0m1ohom0LGqtcHp6Nq2kVzmot+adPvPPmJ1UviSPms9753oqoluaoWXn3NGDVMMVdhWJ4fiNPeZWy0dbFUMW7vxRq5OjrKozJVupsLY2uXdNVz3NklVGMROC31Ktj5fNbmy7fR8P6ddPQ3gv5sSHFcVwaeZPrNJFUN1c1fG5W+7SfLtXg8W2mYDVQKjVfiNI3UieduauORq+hrlT0HnzZHt+yTkjOSVdVmWlr5oo5o3YXhSuxGuqVciK2OOGlbI9Vu1OKojetUNqqdsOI7YM0YVmGuypU5MyvS4jSbmmxKsbLjOLVLpGtip3RxfR0rHLbUzU+Z6MX7NmtT3MGWIwRWzxc+O05ptV7Mmboley99LnJ6lUgc1Pk1MvHhrd8SnB6MdnPKIAMj7QAUAAAAACYAAAACAAAAAAAAAAAmAAMoAJQAADEAClgAAAAAAAIAAAAAIAAADhEuc2Qib6Y2HK8kCcOJ0+Ya7dsbh0a2dOnluTmjOr0+5O0m86hUNdzhXQYtQvw2XBY8aw2VUjq8PciLLXQrzbEqqibxPOZ5TVVyJpcx2lydG/Ec/VOSn12ynaHg2fMsse2nmoszLUUuL0atTS6CWtgY928bZWujrKXeXX6SVyoqrYuWcqxV7Wxvh1sXg9q+arem59GadhGQM4KyoxqgqHV9PGkdLiVPVzUlfTtTkxKqnfHO5n7jnqnBOpDRNLXpOl1msWiZeJs2YPRsxpMTqdiGDZarkgqNeN4fUYZO16LdHtWSBsU13crrH32Ne2rw09Zl1kNVleHMLGQbxMOlWnRsjkc20l6j6NNHncePDhfkXpnfYJnqgdUQ4dnjFsfpt3IyOmxTMENRGiu5K501Kk6Oatl+3dfpVSuM+bLto+PYPPSQYe7CtxCjXVlLj1GyZvlIvkXjkSyo1UvpvZVsfN5cd4yPepaJruFPbOX7UKSHFoMp5ZyplGn8UVKmSWskrFii4300tEyGJ68/OlRqcL35LPYzVYS3HYZ8ExapzXmKNX0jsdmSPxHAo3ubvG0zYrQNnc1Ps4tcnHVLK1jVRZ0+wOeodJT5yngxdq24YtidZiulfxJCroaXUnCyuienZ13TkjKuC5Uw+OHCqRjUbEkSOc1EVGXRVY1Es1jLoi6GI1Ou5247VmsVq5LU5bTZfGy7aZNmNi4BmeS+Lx6/F6hG6W1jGtuqKi8pURFctuDkuvBUVCxkci8+B5YoZ5VrPGYJHQSsVskUrF8uKRq3a9q9CoqHonKWZ2ZtwOLFHbtlXEvi9bFG3S1kyIiqqJ+FyO1J326D0+FyzPknu8/PSInmq70HCcjk7mh9oAKAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAAABAAAAAAAAEAABE5aGnJqtbfRiZAAQlCWZkKK6RbNRFVV7jWaSN9fXPrJUVUVeXYnJPVZDsswTK2lbTNWyzrb0J/+jB4FlmpqL79TJpTsTpX0IYnzdGyekLGy3RNpMMY/RpfKl17E6DDmqrWnw1Y2us6VbJ3dKndtajGo1vBESyIafmyqbJWxQM47pl3dV+orLPJi0nBHPkiZU9nKsqokVNfO5X64jVPoq+LeKmlrG3v1rf5G+bQHbmSGNGXWVyt58itqRi1FRjNOnDd7rj/qPms0zN5fSVtE100LGcQck1RHD+zbrdx6Lol/aWbsPiizDFUYVUPartLnoirYqbMke4zJPAq33tPIiL2qxVanrRDfPB4xf9FZ1pWrPu/G0WJFte6qnD3F8F8+Ilo42nozMPuzTl+TK2YX0T/KZV3lY61k5qiobFs1x2LA8figlW1HiLm09QnU9VtE/wBDlsvY9eo37whcrLDhsOK0cemVr1c23Gy8Vt6UuneqFLYZUMnZrRftWW7lPUtX4OV5UW56PSyLwJHR5UxaTG8u0OKzO1Tvj3VQvXMzyXL/AFcHf1HdNPSidtHZ94IAsTAAAAAAAAAAAAAAAAAAAAATAAAAAQAAAAAAAAAAAAAQAAAk0iSTkRdiUQAaksQAXgx7/wALVdbrsir8hKq92vYpMtXiTomOukKJGi+9TYshs8dzDLOjW7ulYqNVeOpy3S/ZzX1mosmXVNVuS6rx7ze9lELP0bVVFryK9rXO7bXVPaTi63ZyTHLpvidpX2JVTKuvqJGNsiPVO83jE5/FqCefTq0RuW17XKzp5UWHfOW3S4xxdtV5WeGjrtV+06qjZmDB4GJq1OkVV6vNNEy+7e4zmOO33IVRb9r/AMzstpWJb7aFl+K+rTE9178ruX8jpMoTo7EMdl0+e2FOfLynKeDf3PZ3qIaBtJclNmTD5kTVqZyva1n/AO5kyRisuFYxT4hFJoWle1VVON9LkUwbZLMWhqWr5aPkRvZwRfkdflys8Wq2SOXg5ePpNFZmmXbptXnxae/dpUMOO7OplgajpJ6Rk9MqrycjdbV9ljyDh8+4rZKdvBjrSxJ1Mcl0Q9LbOczJjmx3DlkkSSooad1LIl+mFdNvUiHmHGWphuaJ6WNLPp6mWC3XErlez2OU+hzxz1jJ9YfP4el5pK6NlGJfS12FalWN8TKxi3+8iox/DuVnqLKYtk5FGZCxVtFmHDalz9MazpDKqcV3cqKxfUrkX0IXlfrN2C26GSurPuAB0oAAAAAAAAAABMAAAAAAAAAAAAAAAAAAAAABAAAAAAAAHKJc5shE30xtjABllAABAfJisu5w+Z+m/BEtfrVE+Z9Z1OZJEZRsaqXV8iInqVTRbsy1jEpNFC9um+8c2Ne5VuvsQtzZpSSUuV4nS+fK5XqqpZe5UKUxyW0tHHp86ReN+XC3ucp6Cy1Ttp8Co42re0TTOGOsynJ2fDn2sWky/KrZNCyKjL9ilZvrVp8IllR6MWONzk4XvxVfmbhtcm04VSRW5zar91isKqoSPLUqaeVOjOfZz9py8VPndfDU8m1M53xGOfabhivld9FFwvxvwevz9hLKd4p8WffVvYoH8uXlqaxmmd8u1mjR6/YxyNTttE5b+32GyZaks/ErpypYV9Tzx577ehvm1DRdsN5MLhmatnxVHkr3tX8jSqDFFfA2VFvdE9FkRPkbrtN+lwGZV4aZIpPWqpb2lXUVUi00V05MRDXMbtt18/LWIew/BpzGuKZVxig0qrIqpZmeVySWJF96KVhtESWnzhVSq3SsisltfpS6e5EPt8FvGooMZr6RXKnjVKx+nr0K5tvVYx7ak3OYHVKrdjZH3Xquqr8j3ptvh4t9HgTGs8u2wOo3jWqnkK3lxv8A/eg9JRTsrIIa2FfIqYmTN7nNuh5bydVMmpIJFREv0XPR2S5knyhhEjfu0+6XvY9zPc1C+GtzQvLGpbSADtaQAAAAAAAEgAAAJIiWMWtoRBKyHCpYmL7Y24ABbIAAAAAAAAAAAAAAEkRLGLW0MZyiXObIDXN99mNogAtkAAEAAEAAAHSZmcm7p2dbnL6rHdmuZok+mp225NcvPt/2NeSejLTZ3OqcxUkD3fR7xE0npimS1PF/Lb7jzbl9HVOd6Xh5t/en5HpWN6O4IlkQxi67TdU22mq+swwaPsqdzr360VCucZqt3lmXyb6lYnPl5SG87YJP8Tq3afs6f1laZql3eV2ds0Z5PF5N5Zl62DHy44UXV1EdTtPV7F+yp5l9CNsie1TcMFXQ/EVThqpGp/pVFK7iqde0SZ+i16eTp7UQsDDFstUv4oHN9djjmejdHdpuf5d9lysfptdGcL9T0X5FP0kqpTt4cuBZmaJpJ8t1ivdfU17OXLylKvp1RI92vBUuhqpMc2nRf27W74PmI+KZ2o+OlHxSM9tzddtE2rEHLp4u0vui3Tiqcl6SrtkdR4rmmgfo1alVnO3MsLa9Vb2th8iyNVW8+fI9qLb4aYeNkjXEQhkKe9Lu9PmSLxvzPSuzOXe5Ub5Nt3VzsTuujk+O/pPLOQZ1bUzRLxRdDk7OZ6b2RS77DMQpWx2ZDUMc3j+KNE/+JPCX5qr4mNXb+AD1bW04gAE84AAc4mcolzmyAmb77K2iAC2QAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABCAAAAAAazmbhWsTqj+ar8zZjU80qjcVXjb6Nprye1l1OSYEnzvEl7aU963PQ9K9JIUfa1ygNmib3OayL91G+nsTtL/oltTNUY46MXUZtWl+tYtJbk1U9aonzK7zi5f8AhmNqf9o1Te9pb0kdiTVTm5qf8yFf52ajcMhTqci+w+cz23kl79K+nXX0efI3ac9yOT70C+2T/YsihXRHO5OmNStETTnZXfw9P/O4smmX6tK7rYabW3DFd7Vxi15cvVUa8LrJ8SlaTLokThzVSy8SVHYVWInCzpPe4rOoS0dPw5Xb6rGnHbeR12r6ctvyLLHDj1A57rWcvDr5Fj7WJLzwPtzVV9xV+V1/xOg7Zm/MsbaRJGlBTbx2nhwRVRV4J0oi8D3MNt4pq8PNXXEVY8lvtijo+WpqcfSek9keIJSfpTjbeNp3e2VPkeY8pyaMTifa+tUb6y/siTyU/jWhfOjhv/qkNfh9ujZxsavC6gAe284AAEwAAAAAAAAAAAAAAATBABWwABKYIAK2AAJTAAWgAAgAAAAAQAAAAAAAANQzctsUv/DQ2807OT0jxBXu5JGnzNeX2ssey9bZlqbJ0R/CXnFMrKBH24tY53eUXs3VG4nUL+8iexEuvaXHWVcTMHdq4Xp7kYzSjs9y62YhKifaVLUtfrehpmeP1dG3qW3sNizVVNqYpZGXW9dFdP60NczyiuprIi8HfI+Yzz55fSUjdIee3Jpzki/wk+NxYsHCkkX9z5FfTN05ut0IxrvWq/kb/GtqOZP4Lvcc82nSq16q+rWXw6usn7WXp/eUrisYiU9Ov7zvkWdWMV2HVfDmrlK6radfFqfh95fka8dvPDovHk07HBXbuemltfRK1bes3fPMslThFNLJI5OizVt91TR8P+jdAtubkN0zI/e4TS2TzZGqe5gyenLxs1PXhly45Y6illtfy4lt3rYvzKT1h3/k844/ikKBwNdCQyWvodGtu5yF44ZLHTpIsjrI+1uHVc18B7rScfHtX2AD6J5jKAAgAAAAAAAAAAEwQAAAATBAAAABMEABMEABMEAAAAAAAAAAAAAAAYgAFsppudFjbX2k5Pha7339t0Nx1t6zqcfwpuN0W5Y9I6iNVdC9Uul+lqp0tXpTu6jXl9qWvbP7tr5FT8RZuOVMseX5NC2+r8SuMkRSUWIy09XGrJWvXUzpRepOvv7evgWDmN2nLNTw5RWNVZ1XZ/Lz5jkz5aJXvW/1mJUTuen5mLN79UTVtyRfcRxlqpSa+emdnD+tBmxfoU7vkfJ8TOrTL6jB8uFI11LqzM9+u1kRORtzF+pyrbnCqGv1DHLjUyNc5fN85b9F/md2rvq0jeppzTfcN1a6lq6RotBIq81VxoFfAnitPx+87o7iwrp4hJ3uNArXItLT/wDif8SmqLzE7bZjcIQsRI2eo2rFZd5hUN+hWmqNuvA2TE1vhlP2yMPf4W3NimZeRlj14drg32Te9nxIXNR08mJXp6ZWK+najpNTrW1K5E+FSo8p4LiGP1EOE4ZTSz10yoyOnjZd6uXldOGlOtVsiIinrfJGW35Qwt8MksU9dVP3lVMkaOatuDGMVebWpfjzVVcvTZNnh1Zta30Rx+SsxXlbSAD6B5AAAMoACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGIBWgABkAAAEABkupwqXAI0hCFscVUlY2NqyW0uRyXa9vU5PcqWVOvmi5cSZBjOFyUMFY6kmkZpV8qOcxy9aPYiW9KdRiuhFXaeXSaf6WpLNGE5gwGN61VP4xC2ZjnT0b21EbLP+9oVVby6UQ6rMWOYPUqsVPitG9y3sxZka/l+FbKX5UQU1Vp8Yp4pdF7bxiOtfqXmnLoOsxPKGWsYp/FMSw1ssS823RfiRU9h5HEeFWyT5bPWw+IVrXltDyXVUsr8bkfB5bFtZ3Lkh2si/QyJ2Fy4h4O2zStqVqGxYjBe94o5Imx81Xk2NF6es+eHwbtnLpmunkxOdjb3jkqFVjrqq8URUvzt3HH/h+ImNRp1R4lhnvt57bFN4g5XxvZqvbUluZoVTJQRUsDajE6aF2p92Pkaip5S9F78rHslvg4bJF41OAPn/Cjns0tuqqtk0cLqp2mC7EdkGXpWzYZs7wjfJ+0qGPnVO5HuVqJ2WsRXwXiP9tMz4phr/EvFOB4biOZpW0uWMMr8UqJFTSyClfZfSqcupbceJ6LyX4O1dXUUcmfamagZoR7cLonJGrU/jTr9I5bW8iNsKIt/LW56ApGQYdD4vh1NFRw3ukVLG2BiehiIhJVuezg4GMNdWnby83FTlndY06LKmTMr5Koloss4PT0bXtRkj42I1zm/hunJOxOa8XK5bqvegHpRGukdnHt9QANjAAAJggAJg4ugugHIAAygxAMaZQYgDQAAyAAAAAAAAAAAAAAOLoLoByCAAAAAAAAIgAAAAAAXUcwDUhiF1OAYWiADcAACEAAQsAAH1gAsAAAAAC6i6gASAAEwQAAAATBAATBAAAABMEAAAAAEQAuouoAEgRAAAAAQAEwQAAEAGNpggAbAAEpgxALAABAAAAABAAAfWCADG0wQANswMd0F0DLICAAmCAAyghdBdAOQABIEQAAAEgRAEgRAAEABMEAAAAAAAAABAABAAAAAAiAAAAAAALQAAEAAAAAEQAB9AACAAALqLqABIAATBABW3N1F1OAGEwQAZ2mAAyAAAAAAIAMbTBAA2AAJAAAAAAAARAAAAAAAAAAAEAABABaYIAACIAAHC8gIgivM4A//9k="

/***/ }),

/***/ "./src/static/packageJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/packageJpg.7cc66f07.jpg";

/***/ }),

/***/ "./src/static/plumbingJpg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plumbingJpg.0deaf6cb.jpg";

/***/ }),

/***/ "./src/static/svg/availability.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/availability.7157f6f6.svg";

/***/ }),

/***/ "./src/static/svg/bucketSvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bucketSvg.55e05aa9.svg";

/***/ }),

/***/ "./src/static/svg/ddiy-logo.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ddiy-logo.7c7a785e.svg";

/***/ }),

/***/ "./src/static/svg/ddiy-promise.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ddiy-promise.1d2e74f3.svg";

/***/ }),

/***/ "./src/static/svg/electricalSvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/electricalSvg.c2930876.svg";

/***/ }),

/***/ "./src/static/svg/laundrySvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/laundrySvg.5f510430.svg";

/***/ }),

/***/ "./src/static/svg/membershipSvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/membershipSvg.9b793ad7.svg";

/***/ }),

/***/ "./src/static/svg/personalSvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/personalSvg.e51e81f5.svg";

/***/ }),

/***/ "./src/static/svg/plumbingSvg.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plumbingSvg.199d9c53.svg";

/***/ }),

/***/ "./src/static/svg/professionals.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/professionals.85e53010.svg";

/***/ }),

/***/ "./src/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var theme = {
  COLOR_FOOTER_BG: '#2f2e2e',
  COLOR_TEXT: '#2f2e2e',
  COLOR_TEXT_INVERTED: '#ffffff',
  COLOR_FOOTER_TEXT_MUTED: '#A0A09F',
  COLOR_SUCCESS: '#94c576',
  COLOR_PRIMARY: '#918132',
  FONT_SERIF: '"libre baskerville", serif',
  FONT_SANS_SERIF: '"open sans", sans-serif',
  HEIGHT_INPUT: '34px',
  FONT_SIZE_H2_SMALL: '25px',
  FONT_SIZE_H3_SMALL: '20px'
};

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "./src/utils/apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mutate;
function mutate(cls, formValues, mutateFunc, mutationName) {
  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref$errorHandler = _ref.errorHandler,
      errorHandler = _ref$errorHandler === undefined ? undefined : _ref$errorHandler,
      _ref$failureHandler = _ref.failureHandler,
      failureHandler = _ref$failureHandler === undefined ? undefined : _ref$failureHandler,
      _ref$refetchQueries = _ref.refetchQueries,
      refetchQueries = _ref$refetchQueries === undefined ? undefined : _ref$refetchQueries,
      _ref$setStateOnSucces = _ref.setStateOnSuccess,
      setStateOnSuccess = _ref$setStateOnSucces === undefined ? true : _ref$setStateOnSucces,
      _ref$successHandler = _ref.successHandler,
      successHandler = _ref$successHandler === undefined ? undefined : _ref$successHandler;

  cls.setState({ isPosting: true, success: false });
  var mutateOptions = { variables: formValues };
  if (refetchQueries) {
    mutateOptions.refetchQueries = refetchQueries;
  }
  mutateFunc(mutateOptions).then(function (res) {
    var data = res.data[mutationName];
    if (data.status === 400) {
      if (cls) {
        cls.setState({
          formErrors: JSON.parse(data.formErrors),
          isPosting: false,
          success: false
        });
      }
    } else if (data.status === 200) {
      if (setStateOnSuccess) {
        cls.setState({ formErrors: {}, isPosting: false, success: true });
      }
      if (successHandler) {
        successHandler(res);
      }
    }
    if (data.status !== 200 && failureHandler) {
      failureHandler(res);
    }
  }).catch(function (err) {
    cls.setState({ isPosting: false, success: false });
    if (errorHandler) {
      errorHandler(err);
    }
    console.log(err);
  });
}

/***/ }),

/***/ "./src/utils/google-analytics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGA;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga__ = __webpack_require__("react-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_ga__);


function getGA() {
  if (false) {
    // during local development we never want to track anything:
    return undefined;
  }

  if (false) {
    // if no analytics code has been provided, we don't even try to initialize
    // GoogleAnalytics:
    return undefined;
  }

  if (typeof window !== 'undefined') {
    // if window is defined, we are in a browser environment and we can try
    // to initialize GoogleAnalytics:
    __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.initialize("UA-114358496-1");
    return __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a;
  }

  // We should never end up here:
  return undefined;
}

/***/ }),

/***/ "./src/utils/loadable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function Loading(props) {
  if (props.error) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "mt-3" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h1",
        null,
        "Error loading page."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        "Oh no! We were unable to load this page. This usually means that you lost your internet connection. Please refresh this page when your internet connection is back up."
      )
    );
  } else if (props.pastDelay) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      "Loading Chunk"
    );
  } else {
    return null;
  }
}

/***/ }),

/***/ "./src/views/AboutView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_P__ = __webpack_require__("./src/components/P.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_headlines_H1__ = __webpack_require__("./src/components/headlines/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");













var AboutView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AboutView, _Component);

  function AboutView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AboutView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AboutView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AboutView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AboutView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Container"],
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'title',
            { 'data-test': 'title-about' },
            'About'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"], { md: '2' }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"],
            { xs: '12', md: '3' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9__components_headlines_H1__["a" /* default */],
              null,
              'About'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'DDIY is a boutique home concierge platform that combines technology with top-rated home assistants to manage a suite of in-home services.'
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'From home-cleaning to troubleshooting to house party planning, DDIY completes your to-do lists so that you can spend more time living life.'
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'Since DDIY\u2019s inception, we have maintained a meticulous form of dedication in building a community of service professionals to provide quality home services. The foundation of DDIY is innovation and sincerity, focusing on restoring and inspiring home spaces all over Southeast Asia.'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"], { md: '2' }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"],
            { xs: '12', md: '3' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9__components_headlines_H1__["a" /* default */],
              null,
              'Our Team'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'Jeanette Wu, Chief Executive Officer'
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'Yue Jun, Chief Creative Officer'
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_P__["a" /* default */],
              null,
              'Hilary Tseng, Chief Social Officer'
            )
          )
        )
      );
    }
  }]);

  return AboutView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

AboutView = Object(__WEBPACK_IMPORTED_MODULE_10__components_WithTracker__["a" /* default */])(AboutView);
/* harmony default export */ __webpack_exports__["default"] = (AboutView);

/***/ }),

/***/ "./src/views/AirConditioningView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var AirConditioningView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AirConditioningView, _Component);

  function AirConditioningView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AirConditioningView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AirConditioningView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AirConditioningView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AirConditioningView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix your air-conditioner'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our electrical experts provide quality service to install or repair your air-conditioner. All of our electrical professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals.', 'Backed by DDIY Promise.', 'Secure online payment.', 'Dedicated customer service.']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return AirConditioningView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

AirConditioningView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(AirConditioningView);
/* harmony default export */ __webpack_exports__["default"] = (AirConditioningView);

/***/ }),

/***/ "./src/views/ConciergeView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_headlines_H1__ = __webpack_require__("./src/components/headlines/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__ = __webpack_require__("./src/components/headlines/H2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__ = __webpack_require__("./src/components/headlines/H3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_P__ = __webpack_require__("./src/components/P.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__ = __webpack_require__("./src/components/ConciergeItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_conciergeBannerJpg_jpg__ = __webpack_require__("./src/static/conciergeBannerJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_conciergeBannerJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__static_conciergeBannerJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_dryCleaningJpg_jpg__ = __webpack_require__("./src/static/dryCleaningJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_dryCleaningJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__static_dryCleaningJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__static_groceryJpg_jpg__ = __webpack_require__("./src/static/groceryJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__static_groceryJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__static_groceryJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__static_packageJpg_jpg__ = __webpack_require__("./src/static/packageJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__static_packageJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__static_packageJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__static_dishwashJpg_jpg__ = __webpack_require__("./src/static/dishwashJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__static_dishwashJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__static_dishwashJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_svg_membershipSvg_svg__ = __webpack_require__("./src/static/svg/membershipSvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_svg_membershipSvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__static_svg_membershipSvg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__static_svg_personalSvg_svg__ = __webpack_require__("./src/static/svg/personalSvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__static_svg_personalSvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__static_svg_personalSvg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__static_svg_bucketSvg_svg__ = __webpack_require__("./src/static/svg/bucketSvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__static_svg_bucketSvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__static_svg_bucketSvg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__static_svg_laundrySvg_svg__ = __webpack_require__("./src/static/svg/laundrySvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__static_svg_laundrySvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__static_svg_laundrySvg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__static_svg_plumbingSvg_svg__ = __webpack_require__("./src/static/svg/plumbingSvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__static_svg_plumbingSvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__static_svg_plumbingSvg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__static_svg_electricalSvg_svg__ = __webpack_require__("./src/static/svg/electricalSvg.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__static_svg_electricalSvg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__static_svg_electricalSvg_svg__);

































var boxCss = Object(__WEBPACK_IMPORTED_MODULE_8_glamor__["css"])({
  border: '1px solid black',
  padding: '15px',
  height: '200px',
  '@media(min-width: 768px)': {
    height: '280px'
  },
  '@media(min-width: 992px)': {
    height: '250px'
  }
});

var Image = __WEBPACK_IMPORTED_MODULE_9_glamorous___default.a.img(function () {
  return {
    width: '100%'
  };
});

var ConciergeView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ConciergeView, _Component);

  function ConciergeView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ConciergeView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConciergeView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ConciergeView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ConciergeView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Container"],
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'title',
            { 'data-test': 'ConciergeView' },
            'DDIY Concierge | ddiy-solutions.com'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__components_headlines_H1__["a" /* default */],
          null,
          'DDIY',
          ' ',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_15__components_Span__["a" /* default */],
            { primary: true, textTransform: 'uppercase' },
            'Concierge'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          { className: 'mt-3' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Image, {
              src: __WEBPACK_IMPORTED_MODULE_17__static_conciergeBannerJpg_jpg___default.a,
              alt: 'Sofa, cushions, carpet and round tables.'
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { className: 'mt-4', xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
              { xs: '12', className: '' + boxCss },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Image, {
                src: __WEBPACK_IMPORTED_MODULE_22__static_svg_membershipSvg_svg___default.a,
                alt: 'Membership Card',
                style: { height: '30px' }
              }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'mt-3 text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  { primary: true, textTransform: 'uppercase' },
                  'Concierge Member'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'mt-3 text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  null,
                  'Our 12-month membership lets you settle house needs the way you want and get the most from dedicated support from our service experts.'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { className: 'mt-4', xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
              { xs: '12', className: '' + boxCss },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Image, {
                src: __WEBPACK_IMPORTED_MODULE_23__static_svg_personalSvg_svg___default.a,
                alt: 'Circle with head and shoulders inside it',
                style: { height: '30px' }
              }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'mt-3 text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  { primary: true, textTransform: 'uppercase' },
                  'Personal Home Manager'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'mt-3 mb-7 text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  null,
                  'Our dedicated Home Manager will coordinate and take care of your errands to make sure your home runs smoothly.'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { className: 'mt-4', xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
              { xs: '12', className: '' + boxCss },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'text-center', style: { fontSize: '30px' } },
                '\u5BB6'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  { primary: true, textTransform: 'uppercase' },
                  'Start a Whole New Way of Life Now'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'mt-3 text-center' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_P__["a" /* default */],
                  null,
                  'At an additional US$50 to any existing 12-month home-cleaning plan.'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', md: '8', className: 'mt-3 mb-3 mx-auto' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__["a" /* default */],
              { center: true },
              'Register Interest'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ContactForm__["a" /* default */], { buttonText: 'Register Interest' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { className: 'mt-3 text-center' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
              null,
              'Services Included In Our Concierge Package'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          svg: __WEBPACK_IMPORTED_MODULE_24__static_svg_bucketSvg_svg___default.a,
          alt: 'Bucket',
          title: 'Regular weekly cleaning service at your selected frequency',
          chineseTitle: '\u65E5\u5E38\u6253\u6383'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          jpg: __WEBPACK_IMPORTED_MODULE_18__static_dryCleaningJpg_jpg___default.a,
          alt: 'Hangar with white shirts',
          title: 'Dry Cleaning Pickup',
          chineseTitle: '\u5BC4\u9001\u200B\u4E7E\u6D17'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          svg: __WEBPACK_IMPORTED_MODULE_25__static_svg_laundrySvg_svg___default.a,
          alt: 'Water at 30 degree celsius in a container',
          title: 'Regular weekly laundry service at your selected frequency',
          chineseTitle: '\u6D17\u8863\u71A8\u71D9'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          jpg: __WEBPACK_IMPORTED_MODULE_19__static_groceryJpg_jpg___default.a,
          alt: 'Shelf with bottles and egg cartons',
          title: 'Grocery shopping',
          chineseTitle: '\u96DC\u8CA8\u8CFC\u7269'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          svg: __WEBPACK_IMPORTED_MODULE_26__static_svg_plumbingSvg_svg___default.a,
          alt: 'Water drop falling from a tap',
          title: 'Coordination of plumbing troubleshooting and repair works',
          chineseTitle: '\u6C34\u6696\u670D\u52D9'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          jpg: __WEBPACK_IMPORTED_MODULE_20__static_packageJpg_jpg___default.a,
          alt: 'Box tied up with thread',
          title: 'Package pickup',
          chineseTitle: '\u63A5\u6536\u200B\u90F5\u5305'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          svg: __WEBPACK_IMPORTED_MODULE_27__static_svg_electricalSvg_svg___default.a,
          alt: 'Plug',
          title: 'Coordination of electrical troubleshooting and repair works',
          chineseTitle: '\u96FB\u5DE5\u670D\u52D9'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ConciergeItem__["a" /* default */], {
          jpg: __WEBPACK_IMPORTED_MODULE_21__static_dishwashJpg_jpg___default.a,
          alt: 'Multiple trays with numerous cutlery',
          title: 'Regular dishwashing service',
          chineseTitle: '\u6D17\u789F\u670D\u52D9'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', md: '8', className: 'mt-3 mb-3 mx-auto' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__["a" /* default */],
              { center: true },
              'Register Interest'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ContactForm__["a" /* default */], { buttonText: 'Register Interest' })
          )
        )
      );
    }
  }]);

  return ConciergeView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConciergeView);

/***/ }),

/***/ "./src/views/DrainageView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var DrainageView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DrainageView, _Component);

  function DrainageView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DrainageView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DrainageView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(DrainageView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(DrainageView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'unclog your drains'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our plubming professionals provide quality service to remove blockages and solve your drainage issues with your sinks and showers. All of our plumbers are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return DrainageView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

DrainageView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(DrainageView);
/* harmony default export */ __webpack_exports__["default"] = (DrainageView);

/***/ }),

/***/ "./src/views/ElectricalsView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var ElectricalsView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ElectricalsView, _Component);

  function ElectricalsView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ElectricalsView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ElectricalsView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ElectricalsView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ElectricalsView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix it'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our electrical experts provide quality service to troubleshoot and solve your electrical issues. All of our electrical professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return ElectricalsView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ElectricalsView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(ElectricalsView);
/* harmony default export */ __webpack_exports__["default"] = (ElectricalsView);

/***/ }),

/***/ "./src/views/FaucetsView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var FaucetsView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FaucetsView, _Component);

  function FaucetsView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FaucetsView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FaucetsView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FaucetsView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FaucetsView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix your faucets'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our plumbing professionals provide quality service to install or repair taps and shower fixtures. All of our plumbers are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return FaucetsView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

FaucetsView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(FaucetsView);
/* harmony default export */ __webpack_exports__["default"] = (FaucetsView);

/***/ }),

/***/ "./src/views/HealthCheckView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);








var _templateObject = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n  {\n    getHealthCheckReport\n  }\n'], ['\n  {\n    getHealthCheckReport\n  }\n']);






var query = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject);

var HealthCheckView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(HealthCheckView, _Component);

  function HealthCheckView() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, HealthCheckView);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HealthCheckView.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(HealthCheckView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(HealthCheckView, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      if (data.loading) {
        return null;
      }
      var parsedJson = JSON.parse(data.getHealthCheckReport);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'mt-3' },
        parsedJson.status === 'EVERYTHING IS GOOD' && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Container"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Row"],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Col"],
              null,
              parsedJson.status
            )
          )
        ),
        parsedJson.status === 'ERRORS FOUND!' && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Container"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Row"],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Col"],
              null,
              parsedJson.status
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(parsedJson).map(function (key) {
            return key !== 'status' && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Row"],
              { key: key, className: 'mt-5' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_reactstrap__["Col"],
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  null,
                  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'strong',
                    null,
                    'Country: ',
                    key
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  null,
                  'Missing months:',
                  ' ',
                  parsedJson[key].missing_months.join(',')
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  null,
                  'Missing sessions:',
                  ' ',
                  parsedJson[key].missing_sessions.join(',')
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  null,
                  'Missing combinations:',
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    { className: 'mt-3' },
                    'Month, Sessions'
                  ),
                  parsedJson[key].missing_combinations.map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                      'div',
                      { key: item },
                      item.join(',')
                    );
                  })
                )
              )
            );
          })
        )
      );
    }
  }]);

  return HealthCheckView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

HealthCheckView = Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(query)(HealthCheckView);
/* harmony default export */ __webpack_exports__["default"] = (HealthCheckView);

/***/ }),

/***/ "./src/views/HomeCleaningView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CleaningForm__ = __webpack_require__("./src/components/CleaningForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var HomeCleaningView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HomeCleaningView, _Component);

  function HomeCleaningView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HomeCleaningView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HomeCleaningView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HomeCleaningView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HomeCleaningView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          dataTest: 'HomeCleaningView',
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'clean your home'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our cleaning partners provide quality service to clean your home. All of our cleaning professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal cleaners', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CleaningForm__["a" /* default */], { concierge: this.props.isConcierge })
      );
    }
  }]);

  return HomeCleaningView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

HomeCleaningView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(HomeCleaningView);
/* harmony default export */ __webpack_exports__["default"] = (HomeCleaningView);

/***/ }),

/***/ "./src/views/HomeCleaningViewStep2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CleaningFormStep2__ = __webpack_require__("./src/components/CleaningFormStep2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var HomeCleaningViewStep2 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HomeCleaningViewStep2, _Component);

  function HomeCleaningViewStep2() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HomeCleaningViewStep2);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HomeCleaningViewStep2.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HomeCleaningViewStep2)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HomeCleaningViewStep2, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          dataTest: 'HomeCleaningViewStep2',
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'clean your home'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our cleaning partners provide quality service to clean your home. All of our cleaning professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal cleaners', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CleaningFormStep2__["a" /* default */], { id: this.props.match.params.id })
      );
    }
  }]);

  return HomeCleaningViewStep2;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

HomeCleaningViewStep2 = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(HomeCleaningViewStep2);
/* harmony default export */ __webpack_exports__["default"] = (HomeCleaningViewStep2);

/***/ }),

/***/ "./src/views/HomeView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_headlines_H1__ = __webpack_require__("./src/components/headlines/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__ = __webpack_require__("./src/components/headlines/H2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__ = __webpack_require__("./src/components/headlines/H3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_MainCategoryImageLink__ = __webpack_require__("./src/components/MainCategoryImageLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_P__ = __webpack_require__("./src/components/P.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_svg_availability_svg__ = __webpack_require__("./src/static/svg/availability.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_svg_availability_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__static_svg_availability_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__static_svg_ddiy_promise_svg__ = __webpack_require__("./src/static/svg/ddiy-promise.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__static_svg_ddiy_promise_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__static_svg_ddiy_promise_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__static_electricalsJpg_jpg__ = __webpack_require__("./src/static/electricalsJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__static_electricalsJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__static_electricalsJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__static_homeCleaningJpg_jpg__ = __webpack_require__("./src/static/homeCleaningJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__static_homeCleaningJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__static_homeCleaningJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_lightingJpg_jpg__ = __webpack_require__("./src/static/lightingJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_lightingJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__static_lightingJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__static_plumbingJpg_jpg__ = __webpack_require__("./src/static/plumbingJpg.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__static_plumbingJpg_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__static_plumbingJpg_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__static_svg_professionals_svg__ = __webpack_require__("./src/static/svg/professionals.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__static_svg_professionals_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__static_svg_professionals_svg__);




























var Image = __WEBPACK_IMPORTED_MODULE_8_glamorous___default.a.img(function () {
  return {
    width: '100%'
  };
});

var HomeView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HomeView, _Component);

  function HomeView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HomeView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HomeView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HomeView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HomeView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Container"],
        { className: 'pb-3', 'data-test': 'HomeView' },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'title',
            null,
            'We\'ll do it for you | ddiy-solutions.com'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__components_headlines_H1__["a" /* default */],
          null,
          'We\'ll ',
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_16__components_Span__["a" /* default */],
            { primary: true },
            'do it for you'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '6', md: '3', lg: '4' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_MainCategoryImageLink__["a" /* default */], {
              src: __WEBPACK_IMPORTED_MODULE_21__static_homeCleaningJpg_jpg___default.a,
              srcAlt: 'Bright and clean room with modern furnishing',
              title: 'Home Cleaning',
              chineseTitle: '打掃',
              to: '/home-cleaning/'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '6', md: '3', lg: '4' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_MainCategoryImageLink__["a" /* default */], {
              src: __WEBPACK_IMPORTED_MODULE_23__static_plumbingJpg_jpg___default.a,
              srcAlt: 'Bathroom sink',
              title: 'Plumbing',
              chineseTitle: '水管工',
              to: '/plumbing/'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '6', md: '3', lg: '4', className: 'mt-4 mt-md-0' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_MainCategoryImageLink__["a" /* default */], {
              src: __WEBPACK_IMPORTED_MODULE_20__static_electricalsJpg_jpg___default.a,
              srcAlt: 'Person holding a screw driver to the fuse box',
              title: 'Electrical Outlets',
              chineseTitle: '電工',
              to: '/sockets/'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '6', md: '3', lg: '4', className: 'mt-4 mt-md-0 mt-lg-4' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_MainCategoryImageLink__["a" /* default */], {
              src: __WEBPACK_IMPORTED_MODULE_22__static_lightingJpg_jpg___default.a,
              srcAlt: 'Brushed steel lamp',
              title: 'Lighting',
              chineseTitle: '電工',
              to: '/lighting/'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '12', md: '12', lg: '8', className: 'mt-4' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__["a" /* default */],
              null,
              'Describe your task'
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ContactForm__["a" /* default */], null)
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            style: { backgroundColor: '#D3D3D3', padding: '3em' },
            className: 'mt-3'
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"],
            { className: 'text-center' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { xs: '12', md: '4' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Image, { src: __WEBPACK_IMPORTED_MODULE_24__static_svg_professionals_svg___default.a, style: { height: '50px' } }),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { italic: true, className: 'mt-3' },
                'Vetted Professionals'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_15__components_P__["a" /* default */],
                null,
                'Professionals on DDIY are experienced and background-checked thoroughly.'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { xs: '12', md: '4' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Image, { src: __WEBPACK_IMPORTED_MODULE_18__static_svg_availability_svg___default.a, style: { height: '50px' } }),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { italic: true, className: 'mt-3' },
                'Flexible Availability'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_15__components_P__["a" /* default */],
                null,
                'Select the day and time you would like your professional to show up. You can reschedule anytime online as well.'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { xs: '12', md: '4' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Image, { src: __WEBPACK_IMPORTED_MODULE_19__static_svg_ddiy_promise_svg___default.a, style: { height: '50px' } }),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { italic: true, className: 'mt-3' },
                'DDIY Promise'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_15__components_P__["a" /* default */],
                null,
                'Your trust and satisfaction are our top priority. If you are dissatisfied with anything, we promise to make it right.'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            style: {
              backgroundColor: 'white',
              padding: '2em',
              color: '#2f2e2e',
              border: '1px solid black'
            },
            className: 'mt-3'
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"],
            { className: 'text-center' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { sm: '12' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__components_headlines_H2__["a" /* default */],
                { sansSerif: true, letterSpacing: true, uppercase: true, small: true },
                'Housekeeping Services'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { className: 'mt-3' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { sansSerif: true, small: true },
                'Cleaning'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    to: '/home-cleaning/',
                    style: {
                      color: 'inherit'
                    }
                  },
                  'Home'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/office-cleaning/'
                  },
                  'Office'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/space-cleaning/'
                  },
                  'End of Tenancy'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { className: 'mt-3' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { sansSerif: true, small: true },
                'Plumbing'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/toilets/'
                  },
                  'Toilet'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/drainage/'
                  },
                  'Drainage'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/faucets/'
                  },
                  'Taps & Shower Heads'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/plumbing/'
                  },
                  'Other Plumbing Service'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
              { className: 'mt-3' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__components_headlines_H3__["a" /* default */],
                { sansSerif: true, small: true },
                'Electrical'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/lighting/'
                  },
                  'Lighting'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/air-conditioner/'
                  },
                  'Air Conditioner'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/sockets/'
                  },
                  'Sockets & Switches'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
                  {
                    style: {
                      color: 'inherit'
                    },
                    to: '/electricals/'
                  },
                  'Other Electrical Service'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomeView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

HomeView = Object(__WEBPACK_IMPORTED_MODULE_17__components_WithTracker__["a" /* default */])(HomeView);
/* harmony default export */ __webpack_exports__["default"] = (HomeView);

/***/ }),

/***/ "./src/views/LightingView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var LightingView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(LightingView, _Component);

  function LightingView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LightingView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LightingView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(LightingView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LightingView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          dataTest: 'LightingView',
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'find the light'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our electrical experts provide quality service to install all types of light fixtures. All of our electrical professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return LightingView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

LightingView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(LightingView);
/* harmony default export */ __webpack_exports__["default"] = (LightingView);

/***/ }),

/***/ "./src/views/OfficeCleaningView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var OfficeCleaningView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(OfficeCleaningView, _Component);

  function OfficeCleaningView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, OfficeCleaningView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OfficeCleaningView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(OfficeCleaningView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(OfficeCleaningView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'clean your office'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our cleaning partners provide quality service to clean your office. All of our cleaning professionals are experienced and vetted thoroughly.\u200B',
          bulletPoints: ['Trusted & legal cleaners', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return OfficeCleaningView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

OfficeCleaningView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(OfficeCleaningView);
/* harmony default export */ __webpack_exports__["default"] = (OfficeCleaningView);

/***/ }),

/***/ "./src/views/PlumbingView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var PlumbingView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PlumbingView, _Component);

  function PlumbingView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PlumbingView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PlumbingView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(PlumbingView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PlumbingView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          dataTest: 'PlumbingView',
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix it'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our plumbing professionals provide quality service to troubleshoot and solve your plumbing issues. All of our plumbers are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return PlumbingView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

PlumbingView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(PlumbingView);
/* harmony default export */ __webpack_exports__["default"] = (PlumbingView);

/***/ }),

/***/ "./src/views/RentedSpaceCleaningView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var RentedSpaceCleaningView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(RentedSpaceCleaningView, _Component);

  function RentedSpaceCleaningView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, RentedSpaceCleaningView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RentedSpaceCleaningView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(RentedSpaceCleaningView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(RentedSpaceCleaningView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'clean your rented space'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our cleaning partners provide quality service to clean thoroughly so that you get your full deposit back. All of our cleaning professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal cleaners', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return RentedSpaceCleaningView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

RentedSpaceCleaningView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(RentedSpaceCleaningView);
/* harmony default export */ __webpack_exports__["default"] = (RentedSpaceCleaningView);

/***/ }),

/***/ "./src/views/RequestSuccessView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);









var RequestSuccessView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(RequestSuccessView, _Component);

  function RequestSuccessView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, RequestSuccessView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RequestSuccessView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(RequestSuccessView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(RequestSuccessView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Container"],
        { className: 'mt-3', 'data-test': 'RequestSuccessView' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_reactstrap__["CardBody"],
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["CardTitle"],
                  null,
                  'We have recieved your Request!'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["CardText"],
                  null,
                  'Thank you for your request. We will get back to you within 48 hours.'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Button"],
                  { onClick: function onClick() {
                      return _this2.props.history.push('/');
                    } },
                  'Back to Home'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return RequestSuccessView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestSuccessView);

/***/ }),

/***/ "./src/views/ServiceDetailViewBase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Box__ = __webpack_require__("./src/components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_P__ = __webpack_require__("./src/components/P.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_headlines_H1__ = __webpack_require__("./src/components/headlines/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Span__ = __webpack_require__("./src/components/Span.js");














var ServiceDetailViewBase = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ServiceDetailViewBase, _Component);

  function ServiceDetailViewBase() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ServiceDetailViewBase);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ServiceDetailViewBase.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ServiceDetailViewBase)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ServiceDetailViewBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dataTest = _props.dataTest,
          title = _props.title,
          text = _props.text,
          bulletPoints = _props.bulletPoints;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Container"],
        { 'data-test': dataTest },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '12', sm: '12', md: '12', lg: '5' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Box__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10__components_headlines_H1__["a" /* default */],
                { inverted: true },
                title
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__components_P__["a" /* default */],
                { inverted: true, className: 'mt-5' },
                text
              ),
              '\u200B',
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'ul',
                null,
                bulletPoints.map(function (item, index) {
                  return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'li',
                    { key: 'bullet_' + index },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_11__components_Span__["a" /* default */],
                      { inverted: true },
                      item
                    )
                  );
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Col"],
            { xs: '12', sm: '12', md: '12', lg: '7' },
            this.props.children
          )
        )
      );
    }
  }]);

  return ServiceDetailViewBase;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ServiceDetailViewBase);

/***/ }),

/***/ "./src/views/SocketsView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var SocketsView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SocketsView, _Component);

  function SocketsView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SocketsView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SocketsView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SocketsView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SocketsView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          dataTest: 'SocketsView',
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix your sockets'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our electrical experts provide quality service to install or repair your sockets and switches. All of our electrical professionals are experienced and vetted thoroughly.',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return SocketsView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

SocketsView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(SocketsView);
/* harmony default export */ __webpack_exports__["default"] = (SocketsView);

/***/ }),

/***/ "./src/views/ToiletsView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactForm__ = __webpack_require__("./src/components/ContactForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__ = __webpack_require__("./src/views/ServiceDetailViewBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Span__ = __webpack_require__("./src/components/Span.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_WithTracker__ = __webpack_require__("./src/components/WithTracker.js");












var ToiletsView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ToiletsView, _Component);

  function ToiletsView() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ToiletsView);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ToiletsView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ToiletsView)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ToiletsView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__ServiceDetailViewBase__["a" /* default */],
        {
          title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
            null,
            'We\'ll ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_Span__["a" /* default */],
              { primary: true },
              'fix your washrooms'
            ),
            ' for you.'
          ),
          text: 'Don\'t do it yourself - because our plumbing professionals provide quality service to solve your washroom problems. All of our plumbers are experienced and vetted thoroughly.\u200B',
          bulletPoints: ['Trusted & legal professionals', 'Backed by DDIY Promise', 'Affordable pricing', 'Dedicated customer service']
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContactForm__["a" /* default */], null)
      );
    }
  }]);

  return ToiletsView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ToiletsView = Object(__WEBPACK_IMPORTED_MODULE_9__components_WithTracker__["a" /* default */])(ToiletsView);
/* harmony default export */ __webpack_exports__["default"] = (ToiletsView);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-fetch":
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),

/***/ "apollo-link-batch-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-batch-http");

/***/ }),

/***/ "babel-runtime/core-js/get-iterator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/entries":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "glamor/server":
/***/ (function(module, exports) {

module.exports = require("glamor/server");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "lodash/debounce":
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-feather":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-loadable":
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/Route":
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),

/***/ "react-router-dom/Switch":
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),

/***/ "react-stripe-checkout":
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "set-cookie-parser":
/***/ (function(module, exports) {

module.exports = require("set-cookie-parser");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map
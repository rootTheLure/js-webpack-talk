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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actors.js":
/*!***********************!*\
  !*** ./src/actors.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        'name': 'Chris Evans',\n        'characterName': 'Steve Rogers',\n        'pseudonym': 'Captain America',\n        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-action-figure-4.png',\n    },\n    {\n        'name': 'Robert Downey, Jr.',\n        'characterName': 'Tony Stark',\n        'pseudonym': 'Iron Man',\n        'picture': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dd5ir4m-233e3300-0639-4a8a-9a89-27da8d7bc8ce.png/v1/fill/w_1280,h_2053,strp/avengers_endgame_iron_man_mark_85_png_by_metropolis_hero1125_dd5ir4m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA1MyIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGQ1aXI0bS0yMzNlMzMwMC0wNjM5LTRhOGEtOWE4OS0yN2RhOGQ3YmM4Y2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZcaofR1HfKXGKRxThr7NQB3TqU-hkixUTC0dylCyOPA',\n    },\n    {\n        'name': 'Scarlett Johansson',\n        'characterName': 'Natalia Romanov',\n        'pseudonym': 'Black Widow',\n        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-action-figure-11.png',\n    },\n    {\n        'name': 'Chris Hemsworth',\n        'characterName': 'Thor',\n        'pseudonym': 'Thor',\n        'picture': 'https://www.sideshow.com/storage/product-images/903422/thor_marvel_silo.png',\n    },\n    {\n        'name': 'Mark Ruffalo',\n        'characterName': 'Bruce Banner',\n        'pseudonym': 'Halk',\n        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-incredible-hulk-9.png',\n    },\n    {\n        'name': 'Jeremy Renner',\n        'characterName': 'Clint Barton',\n        'pseudonym': 'Hawkeye/Ronin',\n        'picture': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22a34331-0581-445c-aa7f-54c2d0af35ba/d8lx8w1-adba57e7-2f95-47bc-935c-51e1eef9e36a.png/v1/fill/w_712,h_1123,strp/avengers_age_of_ultron___hawkeye_by_steeven7620_d8lx8w1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA4NyIsInBhdGgiOiJcL2ZcLzIyYTM0MzMxLTA1ODEtNDQ1Yy1hYTdmLTU0YzJkMGFmMzViYVwvZDhseDh3MS1hZGJhNTdlNy0yZjk1LTQ3YmMtOTM1Yy01MWUxZWVmOWUzNmEucG5nIiwid2lkdGgiOiI8PTQ0OTMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LuWrDroalTyzfURq1C3XiQsPHLC29YfJFcS9WYkG9Yw',\n    },\n]);\n\n//# sourceURL=webpack:///./src/actors.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _actors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actors.js */ \"./src/actors.js\");\n\n\n// import $ from 'jquery';\n\n\nconst actorsEL = $('.actors');\n\n_.forEach(_actors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (actor) => {\n    const actorRenderData = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"getActorRenderData\"])(actor);\n\n    actorsEL.append(`<li>${actorRenderData}</li>`);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getCharacter, getPicture, getActorRenderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCharacter\", function() { return getCharacter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPicture\", function() { return getPicture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActorRenderData\", function() { return getActorRenderData; });\nconst defaultPictureURI = 'https://via.placeholder.com/200x350';\n\nfunction getCharacter(actor) {\n    const {\n        characterName,\n        pseudonym,\n    } = actor;\n\n    let result = '';\n\n    if (characterName !== pseudonym) {\n        result = `${characterName} - ${pseudonym}`;\n    } else {\n        result = characterName ? characterName : pseudonym;\n    }\n\n    return result;\n}\n\nfunction getPicture(actor) {\n    return actor && actor.picture ? actor.picture : defaultPictureURI;\n}\n\nfunction getActorRenderData(actor) {\n    const character = getCharacter(actor);\n    const picture = getPicture(actor);\n\n    return `<span class=\"actor\"><img class=\"actor-picture\" src=\"${picture}\"/><div class=\"actor-name\">Actor: ${actor.name}</div><div class=\"actor-character\">${character}</div></span>`\n}\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
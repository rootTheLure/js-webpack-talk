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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _actors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


// import $ from 'jquery';


const actorsEL = $('.actors');

_.forEach(_actors_js__WEBPACK_IMPORTED_MODULE_1__["default"], (actor) => {
    const actorRenderData = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getActorRenderData"])(actor);

    actorsEL.append(`<li>${actorRenderData}</li>`);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPicture", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActorRenderData", function() { return getActorRenderData; });
const defaultPictureURI = 'https://via.placeholder.com/200x350';

function getCharacter(actor) {
    const {
        characterName,
        pseudonym,
    } = actor;

    let result = '';

    if (characterName !== pseudonym) {
        result = `${characterName} - ${pseudonym}`;
    } else {
        result = characterName ? characterName : pseudonym;
    }

    return result;
}

function getPicture(actor) {
    return actor && actor.picture ? actor.picture : defaultPictureURI;
}

function getActorRenderData(actor) {
    const character = getCharacter(actor);
    const picture = getPicture(actor);

    return `<span class="actor"><img class="actor-picture" src="${picture}"/><div class="actor-name">Actor: ${actor.name}</div><div class="actor-character">${character}</div></span>`
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        'name': 'Chris Evans',
        'characterName': 'Steve Rogers',
        'pseudonym': 'Captain America',
        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-action-figure-4.png',
    },
    {
        'name': 'Robert Downey, Jr.',
        'characterName': 'Tony Stark',
        'pseudonym': 'Iron Man',
        'picture': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dd5ir4m-233e3300-0639-4a8a-9a89-27da8d7bc8ce.png/v1/fill/w_1280,h_2053,strp/avengers_endgame_iron_man_mark_85_png_by_metropolis_hero1125_dd5ir4m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA1MyIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGQ1aXI0bS0yMzNlMzMwMC0wNjM5LTRhOGEtOWE4OS0yN2RhOGQ3YmM4Y2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZcaofR1HfKXGKRxThr7NQB3TqU-hkixUTC0dylCyOPA',
    },
    {
        'name': 'Scarlett Johansson',
        'characterName': 'Natalia Romanov',
        'pseudonym': 'Black Widow',
        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-action-figure-11.png',
    },
    {
        'name': 'Chris Hemsworth',
        'characterName': 'Thor',
        'pseudonym': 'Thor',
        'picture': 'https://www.sideshow.com/storage/product-images/903422/thor_marvel_silo.png',
    },
    {
        'name': 'Mark Ruffalo',
        'characterName': 'Bruce Banner',
        'pseudonym': 'Halk',
        'picture': 'https://cognigen-cellular.com/images/avengers-clipart-incredible-hulk-9.png',
    },
    {
        'name': 'Jeremy Renner',
        'characterName': 'Clint Barton',
        'pseudonym': 'Hawkeye/Ronin',
        'picture': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22a34331-0581-445c-aa7f-54c2d0af35ba/d8lx8w1-adba57e7-2f95-47bc-935c-51e1eef9e36a.png/v1/fill/w_712,h_1123,strp/avengers_age_of_ultron___hawkeye_by_steeven7620_d8lx8w1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA4NyIsInBhdGgiOiJcL2ZcLzIyYTM0MzMxLTA1ODEtNDQ1Yy1hYTdmLTU0YzJkMGFmMzViYVwvZDhseDh3MS1hZGJhNTdlNy0yZjk1LTQ3YmMtOTM1Yy01MWUxZWVmOWUzNmEucG5nIiwid2lkdGgiOiI8PTQ0OTMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LuWrDroalTyzfURq1C3XiQsPHLC29YfJFcS9WYkG9Yw',
    },
]);

/***/ })
/******/ ]);
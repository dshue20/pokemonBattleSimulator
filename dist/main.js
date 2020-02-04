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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/pokemonData.js":
/*!*****************************!*\
  !*** ./data/pokemonData.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pokemonData = {\r\n    // frontPikachu: {\r\n    //     animationFrames: 33,\r\n    //     delay: \"0.04s\",\r\n    //     x: 350,\r\n    //     y: 85,\r\n    //     width: 75,\r\n    //     height: 75\r\n    // },\r\n    // backPikachu: {\r\n    //     animationFrames: 35,\r\n    //     delay: \"0.03s\",\r\n    //     x: 100,\r\n    //     y: 220,\r\n    //     width: 90,\r\n    //     height: 90\r\n    // },\r\n    // frontBulbasaur: {\r\n    //     animationFrames: 41,\r\n    //     delay: \"0.03s\",\r\n    //     x: 350,\r\n    //     y: 100,\r\n    //     width: 60,\r\n    //     height: 60\r\n    // },\r\n    // backBulbasaur: {\r\n    //     animationFrames: 45,\r\n    //     delay: \"0.03s\",\r\n    //     x: 100,\r\n    //     y: 220,\r\n    //     width: 90,\r\n    //     height: 90\r\n    // },\r\n    // frontVenusaur: {\r\n    //     animationFrames: 60,\r\n    //     delay: \"0.03s\",\r\n    //     x: 300,\r\n    //     y: 45,\r\n    //     width: 140,\r\n    //     height: 110\r\n    // },\r\n    // backVenusaur: {\r\n    //     animationFrames: 63,\r\n    //     delay: \"0.03s\",\r\n    //     x: 90,\r\n    //     y: 180,\r\n    //     width: 180,\r\n    //     height: 150\r\n    // },\r\n    // frontCharmander: {\r\n    //     animationFrames: 69,\r\n    //     delay: \"0.03s\",\r\n    //     x: 350,\r\n    //     y: 85,\r\n    //     width: 75,\r\n    //     height: 75\r\n    // },\r\n    // backCharmander: {\r\n    //     animationFrames: 36,\r\n    //     delay: \"0.03s\",\r\n    //     x: 100,\r\n    //     y: 220,\r\n    //     width: 110,\r\n    //     height: 90\r\n    // },\r\n    // frontCharizard: {\r\n    //     animationFrames: 47,\r\n    //     delay: \"0.04s\",\r\n    //     x: 290,\r\n    //     y: 5,\r\n    //     width: 180,\r\n    //     height: 160\r\n    // },\r\n    // backCharizard: {\r\n    //     animationFrames: 49,\r\n    //     delay: \"0.03s\",\r\n    //     x: 0,\r\n    //     y: 100,\r\n    //     width: 260,\r\n    //     height: 260\r\n    // },\r\n    // frontSquirtle: {\r\n    //     animationFrames: 29,\r\n    //     delay: \"0.04s\",\r\n    //     x: 345,\r\n    //     y: 85,\r\n    //     width: 70,\r\n    //     height: 75\r\n    // },\r\n    // backSquirtle: {\r\n    //     animationFrames: 30,\r\n    //     delay: \"0.03s\",\r\n    //     x: 100,\r\n    //     y: 220,\r\n    //     width: 100,\r\n    //     height: 90\r\n    // },\r\n    // frontBlastoise: {\r\n    //     animationFrames: 79,\r\n    //     delay: \"0.03s\",\r\n    //     x: 300,\r\n    //     y: 60,\r\n    //     width: 110,\r\n    //     height: 100\r\n    // },\r\n    // backBlastoise: {\r\n    //     animationFrames: 83,\r\n    //     delay: \"0.03s\",\r\n    //     x: 65,\r\n    //     y: 180,\r\n    //     width: 165,\r\n    //     height: 130\r\n    // },\r\n    frontPidgeot: {\r\n        animationFrames: 53,\r\n        delay: \"0.03s\",\r\n        x: 280,\r\n        y: 5,\r\n        width: 160,\r\n        height: 145\r\n    },\r\n    backPidgeot: {\r\n        animationFrames: 54,\r\n        delay: \"0.03s\",\r\n        x: 55,\r\n        y: 100,\r\n        width: 220,\r\n        height: 230\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pokemonData);\n\n//# sourceURL=webpack:///./data/pokemonData.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PokemonBattle; });\n/* harmony import */ var _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/pokemonData */ \"./data/pokemonData.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nclass PokemonBattle {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.currentLoopIndex1 = 0;\n    this.currentLoopIndex2 = 0;\n    this.frameCount = 0;\n    this.getAnimationInfo();\n    this.background = this.setBackground();\n    this.drawBackground(this.background);\n    // this.drawFrontPokemon(\"pikachu-front\");\n    // this.drawBackPokemon(\"pikachu-back\");\n    this.drawPokemon();\n  }\n\n  getAnimationInfo(){\n    const firstPoke1 = this.player1.party[0]\n    const firstPoke2 = this.player2.party[0]\n    this.cycleLoop1 = [...Array(_data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['front' + firstPoke1]['animationFrames']).keys()];\n    this.cycleLoop2 = [...Array(_data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['back' + firstPoke2]['animationFrames']).keys()];\n    this.src1 = this.cycleLoop1.map(num => num < 10 ? \n      \"images/pokemon/\" + firstPoke1.toLowerCase() + \"-front/frame_0\"+ num.toString() + \"_delay-\" + _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['front' + firstPoke1]['delay'] + \".gif\" : \n      \"images/pokemon/\" + firstPoke1.toLowerCase() + \"-front/frame_\"+ num.toString() + \"_delay-\" + _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['front' + firstPoke1]['delay'] + \".gif\");\n    this.src2 = this.cycleLoop2.map(num => num < 10 ? \n      \"images/pokemon/\" + firstPoke2.toLowerCase() + \"-back/frame_0\"+ num.toString() + \"_delay-\" + _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['back' + firstPoke2]['delay'] + \".gif\" : \n      \"images/pokemon/\" + firstPoke2.toLowerCase() + \"-back/frame_\"+ num.toString() + \"_delay-\" + _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['back' + firstPoke2]['delay'] + \".gif\");\n  }\n\n  setBackground(){\n    let arr = [...Array(8).keys()];\n    const src = arr.map(num => \"images/backgrounds/background\" + num.toString() + \".png\");\n    let background = new Image();\n    //background.src = src[Math.floor(Math.random() * src.length)];\n    background.src = \"images/backgrounds/background1.png\";\n    return background;\n  }\n\n  drawBackground(background){\n    this.ctx.drawImage(background, 0, 0, 500, 360);\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillRect(520, 0, 280, 500);\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(521, 1, 278, 498);\n  }\n\n  drawPokemon(){\n    let frontPokemon = new Image();\n    frontPokemon.src = this.src1[this.currentLoopIndex1];\n    let backPokemon = new Image();\n    backPokemon.src = this.src2[this.currentLoopIndex2];\n    backPokemon.onload = () => {\n      this.frameCount++;\n      if (this.frameCount > 2) {\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n        this.drawBackground(this.background);\n        let pokemon1 = 'front' + this.player1.party[0];\n        let pokemon2 = 'back' + this.player2.party[0];\n        this.ctx.drawImage(frontPokemon, _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon1]['x'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon1]['y'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon1]['width'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon1]['height']);\n        this.ctx.drawImage(backPokemon, _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon2]['x'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon2]['y'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon2]['width'], _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pokemon2]['height']);\n        this.currentLoopIndex2++;\n        if (this.currentLoopIndex2 >= this.cycleLoop2.length) {\n          this.currentLoopIndex2 = 0;\n        }\n        this.currentLoopIndex1++;\n        if (this.currentLoopIndex1 >= this.cycleLoop1.length) {\n          this.currentLoopIndex1 = 0;\n        }\n        this.frameCount = 0;\n      }\n      window.requestAnimationFrame(() => this.drawPokemon());\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('board');\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _data_pokemonData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/pokemonData */ \"./data/pokemonData.js\");\n\r\n\r\nclass Player {\r\n    constructor(){\r\n        this.party = this.randomPokemon();\r\n    }\r\n\r\n    randomPokemon(){\r\n        let party = [];\r\n        const pokemonArray = Object.keys(_data_pokemonData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n        while (party.length != 6) {\r\n          let pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];\r\n          if (pokemon.slice(0,5) === 'front'){\r\n            pokemon = pokemon.slice(5);\r\n          }\r\n          else if (pokemon.slice(0,4) === 'back'){\r\n            pokemon = pokemon.slice(4);\r\n          };\r\n          //if (!party.includes(pokemon)) party.push(pokemon);\r\n          party.push(pokemon);\r\n        };\r\n        return party;\r\n      }\r\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/upload.svg */ "./src/images/upload.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/remove_cover.svg */ "./src/images/remove_cover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/close-window.svg */ "./src/images/close-window.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\nbody {\n    background: azure;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n    border-radius: 5px;\n    background: transparent;\n    border: 3px solid black;\n    padding: 5px;\n    font-size: 1rem;\n    letter-spacing: .25rem;\n    text-transform: uppercase;\n    margin: 5px;\n    transition: all .5s, color .5s;\n}\n\nbutton:hover {\n    background-color: black;\n    color: azure\n}\n\nmain {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform {\n    background: transparent;\n    border: 2px solid black;\n    padding: 10px;\n    border-radius: 10px;\n    font-size: 1.25rem;\n}\n\nform input[type=\"text\"] {\n    appearance: none;\n    width: 150px;\n    padding: 5px;\n    border-radius: 5px;\n    border-top: 3px solid black;\n    border-left: 3px solid black;\n    border-bottom: 3px solid rgb(187, 177, 177);\n    border-right: 3px solid rgb(187, 177, 177);\n    background: rgb(222, 235, 243);\n}\n\nform input[type=\"file\"] {\n    width: 0;\n    height: 0;\n}\n\nform label[for=\"cover\"] {\n    display: block;\n    width: 100px;\n    height: 100px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    margin: 10px auto;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\nform label[for=\"cover\"]:hover {\n    filter: contrast(125%);\n}\n\nform label[for=\"cover\"]:active {\n    transform: scale(.99);\n}\n\nform .add-counter-button {\n    display: block;\n    margin: 10px auto;\n    padding: 5px;\n    font-size: 1.35rem;\n}\n\n.counters {\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    gap: 50px;\n}\n\n.counter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    position: relative;\n}\n\n.counter .delete {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    top: 10px;\n    right: 10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\n.counter .delete:hover {\n    background-color: rgb(45, 31, 31, .15);\n}\n\n.counter img {\n    border: 5px solid black;\n    border-radius: 10px;\n    width: 125px;\n    cursor: pointer;\n}\n\n.counter-label {\n    max-width: 350px;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.counter-value {\n    font-size: 3.5rem;\n}\n\n.actual-cover {\n    position: relative;\n    margin: 5px auto;\n    width: 100px;\n    display: none;\n}\n\n.actual-cover img {\n    border-radius: 5px;\n    width: 100px;\n    height: auto;\n}\n\n.actual-cover span {\n    width: 20px;\n    height: 20px;\n    background-color: rgb(235, 249, 249, .75);\n    border-radius: 50%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    cursor: pointer;\n}\n\n.buttons {\n    display: flex;\n}\n\n.modal, .warning {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(129, 126, 181, .5);\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    display: none;\n}\n\n.modal-content, .warning-content {\n    position: relative;\n}\n\n.modal-content {\n    display: flex;\n    justify-content: center;\n}\n\n.modal img {\n    border-radius: 5px;\n    max-width: 90%;\n    max-height: 90%;\n}\n\n.modal button {\n    position: absolute;\n    top: 1%;\n    right: 7%;\n    width: 25px;\n    height: 25px;\n    border: none;\n    background-color: rgb(202, 235, 235, .5);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n}\n\n.modal button:hover {\n    background-color: rgba(155, 183, 183, 0.5);\n}\n\n/* .warning {\n    display: flex;\n} */\n\n.warning-content {\n    background: azure;\n    width: 300px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 10px;\n    border: 3px solid black;\n}\n\n.warning-content p {\n    background: rgb(248, 233, 233);\n    border: 2px solid gray;\n    border-radius: 10px;\n    padding: 10px;\n    width: 90%;\n    margin: 20px;\n}\n\n.warning-content h3 {\n    font-size: 1.25rem;\n    text-transform: uppercase;\n    letter-spacing: .15rem;\n}\n\n.warning-content .buttons {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.warning .delete:hover {\n    background: rgb(220, 94, 100);\n    border-color: rgb(220, 94, 100);\n}\n\n.warning .cancel:hover {\n    background: rgb(5, 143, 143);\n    border-color: rgb(5, 143, 143);\n}\n\n@media screen and (max-width: 500px) {\n    button {\n        font-size: .85rem;\n        letter-spacing: .15rem;\n    }\n\n    .counter-label {\n        font-size: 1.5rem;\n    }\n\n    .counter-value {\n        font-size: 3rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;IAC5B,2CAA2C;IAC3C,0CAA0C;IAC1C,8BAA8B;AAClC;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,yDAA4C;IAC5C,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,WAAW;IACX,yDAA4C;IAC5C,sBAAsB;AAC1B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,yDAAgD;IAChD,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC,yDAAgD;IAChD,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;GAEG;;AAEH;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI;QACI,iBAAiB;QACjB,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\nbody {\n    background: azure;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n    border-radius: 5px;\n    background: transparent;\n    border: 3px solid black;\n    padding: 5px;\n    font-size: 1rem;\n    letter-spacing: .25rem;\n    text-transform: uppercase;\n    margin: 5px;\n    transition: all .5s, color .5s;\n}\n\nbutton:hover {\n    background-color: black;\n    color: azure\n}\n\nmain {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform {\n    background: transparent;\n    border: 2px solid black;\n    padding: 10px;\n    border-radius: 10px;\n    font-size: 1.25rem;\n}\n\nform input[type=\"text\"] {\n    appearance: none;\n    width: 150px;\n    padding: 5px;\n    border-radius: 5px;\n    border-top: 3px solid black;\n    border-left: 3px solid black;\n    border-bottom: 3px solid rgb(187, 177, 177);\n    border-right: 3px solid rgb(187, 177, 177);\n    background: rgb(222, 235, 243);\n}\n\nform input[type=\"file\"] {\n    width: 0;\n    height: 0;\n}\n\nform label[for=\"cover\"] {\n    display: block;\n    width: 100px;\n    height: 100px;\n    background-image: url(\"./images/upload.svg\");\n    background-size: cover;\n    margin: 10px auto;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\nform label[for=\"cover\"]:hover {\n    filter: contrast(125%);\n}\n\nform label[for=\"cover\"]:active {\n    transform: scale(.99);\n}\n\nform .add-counter-button {\n    display: block;\n    margin: 10px auto;\n    padding: 5px;\n    font-size: 1.35rem;\n}\n\n.counters {\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    gap: 50px;\n}\n\n.counter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    position: relative;\n}\n\n.counter .delete {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    top: 10px;\n    right: 10px;\n    background-image: url(\"./images/delete.svg\");\n    background-size: cover;\n}\n\n.counter .delete:hover {\n    background-color: rgb(45, 31, 31, .15);\n}\n\n.counter img {\n    border: 5px solid black;\n    border-radius: 10px;\n    width: 125px;\n    cursor: pointer;\n}\n\n.counter-label {\n    max-width: 350px;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.counter-value {\n    font-size: 3.5rem;\n}\n\n.actual-cover {\n    position: relative;\n    margin: 5px auto;\n    width: 100px;\n    display: none;\n}\n\n.actual-cover img {\n    border-radius: 5px;\n    width: 100px;\n    height: auto;\n}\n\n.actual-cover span {\n    width: 20px;\n    height: 20px;\n    background-color: rgb(235, 249, 249, .75);\n    border-radius: 50%;\n    background-image: url(\"images/remove_cover.svg\");\n    background-size: cover;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    cursor: pointer;\n}\n\n.buttons {\n    display: flex;\n}\n\n.modal, .warning {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(129, 126, 181, .5);\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    display: none;\n}\n\n.modal-content, .warning-content {\n    position: relative;\n}\n\n.modal-content {\n    display: flex;\n    justify-content: center;\n}\n\n.modal img {\n    border-radius: 5px;\n    max-width: 90%;\n    max-height: 90%;\n}\n\n.modal button {\n    position: absolute;\n    top: 1%;\n    right: 7%;\n    width: 25px;\n    height: 25px;\n    border: none;\n    background-color: rgb(202, 235, 235, .5);\n    background-image: url(\"images/close-window.svg\");\n    background-size: cover;\n}\n\n.modal button:hover {\n    background-color: rgba(155, 183, 183, 0.5);\n}\n\n/* .warning {\n    display: flex;\n} */\n\n.warning-content {\n    background: azure;\n    width: 300px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 10px;\n    border: 3px solid black;\n}\n\n.warning-content p {\n    background: rgb(248, 233, 233);\n    border: 2px solid gray;\n    border-radius: 10px;\n    padding: 10px;\n    width: 90%;\n    margin: 20px;\n}\n\n.warning-content h3 {\n    font-size: 1.25rem;\n    text-transform: uppercase;\n    letter-spacing: .15rem;\n}\n\n.warning-content .buttons {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.warning .delete:hover {\n    background: rgb(220, 94, 100);\n    border-color: rgb(220, 94, 100);\n}\n\n.warning .cancel:hover {\n    background: rgb(5, 143, 143);\n    border-color: rgb(5, 143, 143);\n}\n\n@media screen and (max-width: 500px) {\n    button {\n        font-size: .85rem;\n        letter-spacing: .15rem;\n    }\n\n    .counter-label {\n        font-size: 1.5rem;\n    }\n\n    .counter-value {\n        font-size: 3rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lz-string/libs/lz-string.js":
/*!**************************************************!*\
  !*** ./node_modules/lz-string/libs/lz-string.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_counter": () => (/* binding */ create_counter)
/* harmony export */ });
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_0__);


function create_counter(label, value, imageData, id) {
    imageData = lz_string__WEBPACK_IMPORTED_MODULE_0___default().compressToUTF16(imageData);
    return { value, label, imageData, id }
}

/***/ }),

/***/ "./src/counterdom.js":
/*!***************************!*\
  !*** ./src/counterdom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_counter_dom": () => (/* binding */ create_counter_dom)
/* harmony export */ });
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Function that creates a counter DOM element.
 * @param {object} counterObj A simple js object with value, label, and data properties
 * @param {object} extInterface Object to interface with the rest of the DOM. It has a reference to an array that contains objects similar to counterObj.
 * It also has a reference to a warning modal that is used to guard against accidental clicks of the delete button on the returned element of this function.
 * It has a string property used to store the data in localStorage.
 * @returns A counter DOM element.
 */
function create_counter_dom(counterObj, extInterface) {
    const counter = document.createElement("div");
    const deleteButton = document.createElement("button");
    const cover = document.createElement("img");
    const counterLabel = document.createElement("p");
    const counterValue = document.createElement("h3");
    const buttonsContainer = document.createElement("div");
    const decreaseButton = document.createElement("button");
    const increaseButton = document.createElement("button");
    const resetButton = document.createElement("button");
    let data;

    counter.classList.add("counter");
    deleteButton.classList.add("delete");
    counterLabel.classList.add("counter-label");
    counterValue.classList.add("counter-value");
    buttonsContainer.classList.add("buttons");
    decreaseButton.classList.add("decrease");
    resetButton.classList.add("reset");
    increaseButton.classList.add("increase");

    data = lz_string__WEBPACK_IMPORTED_MODULE_0___default().decompressFromUTF16(counterObj.imageData);
    cover.src = data ? data : "./pepe.jpg";
    counterLabel.innerText = counterObj.label;
    counterValue.innerText = counterObj.value;
    decreaseButton.innerText = "decrease";
    resetButton.innerText = "reset";
    increaseButton.innerText = "increase";

    counter.append(deleteButton)
    counter.append(cover);
    counter.append(counterLabel);
    counter.append(counterValue);
    counter.append(buttonsContainer);
    buttonsContainer.append(decreaseButton);
    buttonsContainer.append(resetButton);
    buttonsContainer.append(increaseButton);

    deleteButton.addEventListener("click", () => {
        let name, deleteWarning, cancelWarning;
        
        name = extInterface.warning.querySelector("p");
        name.innerText = counterObj.label;
        extInterface.warning.style.display = "flex";

        deleteWarning = extInterface.warning.querySelector(".delete");
        cancelWarning = extInterface.warning.querySelector(".cancel");

        deleteWarning.addEventListener("click", remove_counter);
        
        cancelWarning.addEventListener("click", hide);

        function remove_counter() {
            let index;

            index = extInterface.array.findIndex(counter => counter.id == counterObj.id);
            extInterface.array.splice(index, 1);
            counter.parentElement.removeChild(counter);
            localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
            hide();
        }

        function hide() {
            extInterface.warning.style.display = "none";
            deleteWarning.removeEventListener("click", remove_counter);
            cancelWarning.removeEventListener("click", hide);
        }
    });

    decreaseButton.addEventListener("click", () => {
        counterObj.value--;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    resetButton.addEventListener("click", () => {
        counterObj.value = 0;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    increaseButton.addEventListener("click", () => {
        counterObj.value++;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    cover.addEventListener("click", () => {
        let modalImage, modalClose;

        modalImage = extInterface.modal.querySelector("img");
        modalClose = extInterface.modal.querySelector("button");
        modalImage.src = data ? data : "./pepe.jpg";
        extInterface.modal.style.display = "flex";

        modalClose.addEventListener("click", close_modal);

        function close_modal() {
            modalImage.src = '';
            extInterface.modal.style.display = "none";
            modalClose.removeEventListener("click", close_modal);
        }
    });

    return counter;
}

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_abacus_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/abacus.ico */ "./src/images/abacus.ico");
/* harmony import */ var _images_close_window_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/close-window.svg */ "./src/images/close-window.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_pepe_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pepe.jpg */ "./src/images/pepe.jpg");
/* harmony import */ var _images_remove_cover_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/remove_cover.svg */ "./src/images/remove_cover.svg");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/upload.svg */ "./src/images/upload.svg");








/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "background_size_cover": () => (/* binding */ background_size_cover),
/* harmony export */   "blur_image": () => (/* binding */ blur_image),
/* harmony export */   "center_image": () => (/* binding */ center_image),
/* harmony export */   "create_id": () => (/* binding */ create_id),
/* harmony export */   "make_cover": () => (/* binding */ make_cover)
/* harmony export */ });
function create_id(size) {
    let id;

    id = '';
    for (let i = 0; i < size; i++) {
        let number;

        do
            number = Math.floor(Math.random() * 94) + 33;
        while (number == 34 || number == 39 || number == 96 || number == 92);
        id += String.fromCharCode(number);
    }
    return id;
}

function background_size_cover(image, canvas) {
    let bgWidth, bgHeight, imageRatio, canvasRatio;
    let context;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgHeight = canvas.height;
        bgWidth = canvas.height * imageRatio;
    }
    else {
        bgWidth = canvas.width;
        bgHeight = canvas.width / imageRatio;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

function center_image(image, canvas) {
    let context, bgWidth, bgHeight, imageRatio, canvasRatio;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgWidth = canvas.width;
        bgHeight = bgWidth / imageRatio;
    }
    else {
        bgHeight = canvas.height;
        bgWidth = bgHeight * imageRatio;
    }
    context.drawImage(image, 0, 0, image.width, image.height, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

function blur_image(imageData, kWidth, canvas) {
    let context, blurred, scanned, demon;

    context = canvas.getContext("2d");
    blurred = new Uint8ClampedArray(canvas.width * canvas.height * 4);
    scanned = imageData.data;
    demon = Math.floor(kWidth / 2);

    for (let x = 0; x < canvas.width; x++)
        for (let y = 0; y < canvas.height; y++) {
            let avgRed, avgGreen, avgBlue, index;

            avgRed = 0;
            avgGreen = 0;
            avgBlue = 0;
            for (let kx = -demon; kx <= demon; kx++)
                for (let ky = -demon; ky <= demon; ky++) {
                    let dx, dy;

                    dx = 4 * (x + kx);
                    dy = 4 * (y + ky);

                    let index = dy * canvas.width + dx;
                    if (0 <= index && index < scanned.length) {
                        avgRed += scanned[index];
                        avgGreen += scanned[index + 1];
                        avgBlue += scanned[index + 2];
                    }
                }
            avgRed /= kWidth * kWidth;
            avgGreen /= kWidth * kWidth;
            avgBlue /= kWidth * kWidth;

            index = 4 * (canvas.width * y + x);
            blurred[index] = avgRed;
            blurred[index + 1] = avgGreen;
            blurred[index + 2] = avgBlue;
            blurred[index + 3] = scanned[index + 3];
        }

    for (let i = 0; i < blurred.length; i++) //...
        scanned[i] = blurred[i];

    context.putImageData(imageData, 0, 0);
}

function make_cover(source, width, height) {
    let canvas, context;

    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    return new Promise((resolve, _) => {
        let image;

        image = new Image();
        image.src = source;
        image.addEventListener("load", () => {
            background_size_cover(image, canvas);
            blur_image(context.getImageData(0, 0, canvas.width, canvas.height), 10, canvas);
            center_image(image, canvas);
            resolve(canvas.toDataURL());
        });
    });
}


/***/ }),

/***/ "./src/images/abacus.ico":
/*!*******************************!*\
  !*** ./src/images/abacus.ico ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abacus.ico";

/***/ }),

/***/ "./src/images/close-window.svg":
/*!*************************************!*\
  !*** ./src/images/close-window.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "close-window.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "delete.svg";

/***/ }),

/***/ "./src/images/pepe.jpg":
/*!*****************************!*\
  !*** ./src/images/pepe.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pepe.jpg";

/***/ }),

/***/ "./src/images/remove_cover.svg":
/*!*************************************!*\
  !*** ./src/images/remove_cover.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "remove_cover.svg";

/***/ }),

/***/ "./src/images/upload.svg":
/*!*******************************!*\
  !*** ./src/images/upload.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "upload.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");
/* harmony import */ var _counterdom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterdom.js */ "./src/counterdom.js");
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imports.js */ "./src/imports.js");






const form = document.querySelector("form");
const coverDiv = document.querySelector(".cover-input");
const actualCover = document.querySelector(".actual-cover");
const coverImg = actualCover.querySelector("img");
const beelete = actualCover.querySelector("span");
const coverInput = document.getElementById("cover");
const modal = document.querySelector(".modal");
const warning = document.querySelector(".warning");
const counters = document.querySelector(".counters");
const userDataString = "_user_data_";
const countersArray = localStorage.getItem(userDataString) ? JSON.parse(localStorage.getItem(userDataString)) : [];
const extInterface = {
    array : countersArray,
    warning,
    userDataString,
    modal
};
let imageData;

for (let counter of countersArray)
    counters.append((0,_counterdom_js__WEBPACK_IMPORTED_MODULE_2__.create_counter_dom)(counter, extInterface));

coverInput.addEventListener("change", () => {
    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.make_cover)(URL.createObjectURL(coverInput.files[0]), 500, 750).then(res => {
        imageData = res;
        coverImg.src = imageData;
        coverDiv.style.display = "none";
        actualCover.style.display = "block";
    });
});

beelete.addEventListener("click", () => {
    imageData = '';
    coverImg.src = '';
    actualCover.style.display = "none";
    coverDiv.style.display = "block";
});

form.addEventListener("submit", event => {
    event.preventDefault();

    let counter, id;

    id = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.create_id)(10);
    counter = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.create_counter)(form["counter-label"].value, 0, imageData, id);
    countersArray.push(counter);
    counters.append((0,_counterdom_js__WEBPACK_IMPORTED_MODULE_2__.create_counter_dom)(counter, extInterface));
    localStorage.setItem(userDataString, JSON.stringify(countersArray));
    imageData = '';
    coverImg.src = '';
    coverDiv.style.display = "block";
    actualCover.style.display = "none";
    form.reset();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
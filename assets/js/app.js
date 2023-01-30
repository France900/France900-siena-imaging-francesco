/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

// carica documento html prima
$(document).ready(function () {
  console.log("test link succesfull");

  // funzione + per aggiungere elementi
  $('.pluss').click(function () {
    var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
    if (refertChoice == "referto_1") {
      var slider = '';
      for (var i = 0; i < referto_1.length; i++) {
        slider += '<div class="mySlides fade">' + '<div class="numbertext">' + (i + 1) + '/' + (referto_1.length - 1) + '</div>' + '<img src="' + referto_1[i] + '"' + '</div>';
      }
      $('main').append(slider);
    } else if (refertChoice == "referto_2") {
      var slider = '';
      for (var _i = 0; _i < referto_2.length; _i++) {
        slider += '<div class="mySlides fade">' + '<div class="numbertext">' + (_i + 1) + '/' + (referto_2.length - 1) + '</div>' + '<img src="' + referto_2[_i] + '"' + '</div>';
      }
      $('main').append(slider);
    } else if (refertChoice == "referto_3") {
      var slider = '';
      for (var _i2 = 0; _i2 < referto_3.length; _i2++) {
        slider += '<div class="mySlides fade">' + '<div class="numbertext">' + (_i2 + 1) + '/' + (referto_3.length - 1) + '</div>' + '<img src="' + referto_3[_i2] + '"' + '</div>';
      }
      $('main').append(slider);
    } else if (refertChoice == "referto_4") {
      var slider = '';
      for (var _i3 = 0; _i3 < referto_4.length; _i3++) {
        slider += '<div class="mySlides fade">' + '<div class="numbertext">' + (_i3 + 1) + '/' + (referto_4.length - 1) + '</div>' + '<img src="' + referto_4[_i3] + '"' + '</div>';
      }
      $('main').append(slider);
    } else {
      alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto 2)");
    }
  });

  //funzione - per cancellare elementi
  $('.minus').click(function () {
    var elements = $('main .element');
    if (elements.length > 0) {
      elements.last().remove();
    }
  });

  //#region archivio immagini
  var referto_1 = ['assets/img/carosello1/img1.jpg', 'assets/img/carosello1/img2.jpg', 'assets/img/carosello1/img3.jpg'];
  var referto_2 = ['assets/img/carosello2/img4.jpg', 'assets/img/carosello2/img5.jpg', 'assets/img/carosello2/img6.jpg', 'assets/img/carosello2/img7.jpg', 'assets/img/carosello2/img8.jpg'];
  var referto_3 = ['assets/img/carosello3/img9.jpg', 'assets/img/carosello3/img10.jpg', 'assets/img/carosello3/img11.jpg', 'assets/img/carosello3/img12.jpg'];
  var referto_4 = ['assets/img/carosello4/img13.jpg', 'assets/img/carosello4/img14.jpg', 'assets/img/carosello4/img15.jpg', 'assets/img/carosello4/img16.jpg', 'assets/img/carosello4/img17.jpg', 'assets/img/carosello4/img18.jpg'];
  //#endregion
});

/*
$('.pluss').click(function() {
  var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
  console.log(refertChoice[3]);
  if (
    refertChoice == "referto_1" || 
    refertChoice == "referto_2" || 
    refertChoice == "referto_3" || 
    refertChoice == "referto_4"
    ) {
      var slider = ''
      for (let i = 0; i < refertChoice.length; i++) {
        slider +=
        '<div class="mySlides fade">' +
          '<div class="numbertext">' + (i+1) + '/' + (refertChoice.length-1) + '</div>' +
          '<img src="'+ refertChoice[i] +'" style="width:100%">' +
        '</div>';
        console.log(refertChoice[i]);
      }
      $('main').append(slider);
  } else {
    alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto_2)")
  }  
});
*/

// funzione + per aggiungere elementi
// $('.pluss').click(function() {
//   var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
//   if (refertChoice == "referto_1") {
//     $('main').append(
//       '<div class="element1">Element1</div>'
//     );
//   } else if (refertChoice == "referto_2") {
//     $('main').append(
//       '<div class="element2">Element2</div>'
//     );
//   } else if (refertChoice == "referto_3") {
//     $('main').append(
//       '<div class="element3">Element3</div>'
//     );
//   } else if (refertChoice == "referto_4") {
//     $('main').append(
//       '<div class="element4">Element4</div>'
//     );
//   } else {
//     alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto 2)")
//   }  
// });

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrance900_siena_imaging_francesco"] = self["webpackChunkfrance900_siena_imaging_francesco"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
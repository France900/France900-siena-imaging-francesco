/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

//#region archivio immagini
var referto = {
  mario: ['assets/img/carosello1/img1.jpg', 'assets/img/carosello1/img2.jpg', 'assets/img/carosello1/img3.jpg'],
  pippo: ['assets/img/carosello2/img4.jpg', 'assets/img/carosello2/img5.jpg', 'assets/img/carosello2/img6.jpg', 'assets/img/carosello2/img7.jpg', 'assets/img/carosello2/img8.jpg'],
  gino: ['assets/img/carosello3/img9.jpg', 'assets/img/carosello3/img10.jpg', 'assets/img/carosello3/img11.jpg', 'assets/img/carosello3/img12.jpg'],
  pino: ['assets/img/carosello4/img13.jpg', 'assets/img/carosello4/img14.jpg', 'assets/img/carosello4/img15.jpg', 'assets/img/carosello4/img16.jpg', 'assets/img/carosello4/img17.jpg', 'assets/img/carosello4/img18.jpg']
};
// array nomi referti
var nomiReferti = Object.keys(referto);
//#endregion

// definisco l'indice di controllo per le slide
var currentSlide = 1;

// CANCELLAZIONE elementi
$('.minus').click(function () {
  var elements = $('main section');
  if (elements.length > 0) {
    elements.last().remove();
  }
});

// SCELGO e GENERO referto
$('.pluss').click(function () {
  choseReferto = prompt("Sono disponibili i referti di: " + nomiReferti + ". Digitare il nome interessato in minuscolo (es. giacomo)");
  if (nomiReferti.includes(choseReferto)) {
    var section = "\n    <section class=\"".concat(choseReferto, "\">\n      <div class=\"mySlides fade ").concat(choseReferto, "\"></div>\n      <div class=\"slideControls\">\n        <div class=\"prev\" onclick=\"sliderMover('retreat')\">&#10094;</div>\n        <div class=\"dots ").concat(choseReferto, "\" style=\"text-align:center\"></div>\n        <div class=\"next\" onclick=\"sliderMover('advance')\">&#10095;</div>\n      </div>\n    </section>");

    // QUI IL TAG PRINCIPALE IN CUI SI APPENDE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    $('main').append(section);
    $(".mySlides.".concat(choseReferto)).empty();
    var element = "\n      <div class=\"numbertext\">".concat(currentSlide, "/").concat(referto[choseReferto].length, "</div>\n      <img src=\"").concat(referto[choseReferto][currentSlide - 1], "\">");
    $(".mySlides.".concat(choseReferto)).append(element);

    // genero i dot in numero uguale alla lunghezza dell'array desiderato
    for (var index = 0; index < referto[choseReferto].length; index++) {
      var dotsDeploy = "\n        <span class=\"dot\" onclick=\"dotSelect(".concat(index, ")\"></span>");
      if ($(".dots.".concat(choseReferto))) {
        $(".dots.".concat(choseReferto)).append(dotsDeploy);
      }
    }
    // raggruppo tutti i dot in un array. non vuole ne var ne let per uscire dallo scope
    dots = $(".dot");
    aggiornaDot();
  } else {
    alert("il fascicolo di " + choseReferto + " non è incluso, perfavore scegliere fra " + nomiReferti);
  }
});

// FRECCE SCORRI IMMAGINE
function sliderMover(direction) {
  // va messo fuori: var currentSlide = 1; // contatore di posizione
  if (direction == 'advance') {
    if (currentSlide == referto[choseReferto].length) {
      currentSlide = 1;
    } else {
      currentSlide = currentSlide + 1;
    }
    aggiornaImmagine();
    aggiornaDot();
  } else if (direction == 'retreat') {
    if (currentSlide == 1) {
      currentSlide = referto[choseReferto].length;
    } else {
      currentSlide = currentSlide - 1;
    }
    aggiornaImmagine();
    aggiornaDot();
  }
}

// cambio immagine al click sul dot e il colore del dot
function dotSelect(parametro) {
  currentSlide = parametro + 1;
  aggiornaImmagine();
  aggiornaDot();
}

// creazione e l'aggiornamento delle immagini nell'html
function aggiornaImmagine() {
  $('.mySlides').empty();
  var element = '<div class="numbertext">' + currentSlide + '/' + referto[choseReferto].length + '</div>' + '<img src="' + referto[choseReferto][currentSlide - 1] + '">';
  $('.mySlides').append(element);
}

// aggiungo il colore del dot selezionato
function aggiornaDot() {
  for (var index = 0; index < referto[choseReferto].length; index++) {
    dots[index].classList.remove("active");
  }
  var dotPoition = currentSlide - 1;
  dots[dotPoition].classList.add("active");
}

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
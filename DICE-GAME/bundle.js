/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./DICE-GAME/SUMM/scripts/APP.JS":
/*!***************************************!*\
  !*** ./DICE-GAME/SUMM/scripts/APP.JS ***!
  \***************************************/
/***/ (() => {

eval("// toglogcin eljig hadgalah huwisagch , first player - 0 second player - 1\r\nvar activePlayer = 0;\r\n\r\n//toglogcdin tsuglulsan onog tusglulah huwisagch\r\nvar scores = [0, 0];\r\n\r\n//toglogcin eljinde tsuglulj baiga onog hadgalah huwisagch\r\nvar roundScore = 0;\r\n\r\n//shoni ali talara busnig hadgalah huwisagch,  1-6 gesen utgig ene huwisagchid sanamsaguiger uusgej ugnu\r\n\r\ndocument.getElementById(\"score-0\").textContent = \"0\";\r\ndocument.getElementById(\"score-1\").textContent = \"0\";\r\ndocument.getElementById(\"current-0\").textContent = \"0\";\r\ndocument.getElementById(\"current-1\").textContent = \"0\";\r\n\r\nvar diceDom = document.querySelector(\".dice\");\r\ndiceDom.style.display = \"none\";\r\n\r\n//Shoog shideh event listener\r\ndocument.querySelector(\".btn-roll\").addEventListener(\"click\", function () {\r\n  //1 -- 6 dotorh sanamsargui neg toog gargan awna.\r\n  var diceNumber = Math.floor(Math.random() * 6) + 1;\r\n  //shoonii zurgig webder gargaj irne\r\n  diceDom.style.display = \"block\";\r\n  //dice-2,png zuragnii urgutlur shud zurgig gargaj ireh.\r\n  diceDom.src = \"./SUMM/images/dice-\" + diceNumber + \".png\";\r\n  //Buusan too ni 1es ylgatai bol idewhtei toglogcin eljin tog nemegdulne.\r\n  if (diceNumber !== 1) {\r\n    //1-es ylgatai to bulaa , buusan toog toglogcid nemj ugn\r\n    roundScore = roundScore + diceNumber;\r\n    document.getElementById(\"current-\" + activePlayer).textContent = roundScore;\r\n  } else {\r\n    roundScore = 0;\r\n    document.getElementById(\"current-\" + activePlayer).textContent = 0;\r\n    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);\r\n    // ulaaj tsegiig shiljuleh kod\r\n    document.querySelector(\".player-0-panel\").classList.toggle(\"active\");\r\n    document.querySelector(\".player-1-panel\").classList.toggle(\"active\");\r\n    // shog tur alga bolgoh\r\n    diceDom.style.display = \"none\";\r\n  }\r\n});\r\n// Hold towchnii event listener\r\ndocument.querySelector(\".btn-hold\").addEventListener(\"click\", function () {\r\n  //ug toglogcin tsuglulsan onog global onoon der ni nemj ugn.\r\n  roundScore;\r\n  //eeljin onoog ni 0 bolgono.\r\n\r\n  //toglogcin eeljig songono.\r\n});\r\n\n\n//# sourceURL=webpack://dice-game/./DICE-GAME/SUMM/scripts/APP.JS?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./DICE-GAME/SUMM/scripts/APP.JS"]();
/******/ 	
/******/ })()
;
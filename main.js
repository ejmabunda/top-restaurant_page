/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _content_about_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/about.json */ \"./src/content/about.json\");\n\n\nfunction about() {\n    let h1 = document.createElement(\"h1\");\n    h1.textContent = _content_about_json__WEBPACK_IMPORTED_MODULE_0__.title;\n\n    let h2 = document.createElement(\"h2\");\n    h2.textContent = _content_about_json__WEBPACK_IMPORTED_MODULE_0__.subtitle;\n\n    let p = document.createElement(\"p\");\n    p.textContent = _content_about_json__WEBPACK_IMPORTED_MODULE_0__.description;\n\n    let team = document.createElement(\"div\");\n    _content_about_json__WEBPACK_IMPORTED_MODULE_0__.team.forEach((data, index) => {\n        let person = document.createElement(\"div\");\n\n        let name = document.createElement(\"p\");\n        name.textContent = data.name;\n\n        let role = document.createElement(\"p\");\n        role.textContent = data.role;\n\n        let bio = document.createElement(\"p\");\n        bio.textContent = data.bio;\n\n        person.append(name, role, bio);\n        team.append(person);\n    });\n\n    let heroImage = document.createElement(\"img\");\n    heroImage.src = _content_about_json__WEBPACK_IMPORTED_MODULE_0__.img;\n    document.querySelector(\"#content\").append(h1, heroImage, h2, p, team);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7O0FBRW5DO0FBQ1A7QUFDQSxxQkFBcUIsc0RBQWE7O0FBRWxDO0FBQ0EscUJBQXFCLHlEQUFnQjs7QUFFckM7QUFDQSxvQkFBb0IsNERBQW1COztBQUV2QztBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxvQkFBb0Isb0RBQVc7QUFDL0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hYm91dC5qcz81ODY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250ZW50IGZyb20gXCIuL2NvbnRlbnQvYWJvdXQuanNvblwiXG5cbmV4cG9ydCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBjb250ZW50LnRpdGxlO1xuXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLnRleHRDb250ZW50ID0gY29udGVudC5zdWJ0aXRsZTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQuZGVzY3JpcHRpb247XG5cbiAgICBsZXQgdGVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC50ZWFtLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwZXJzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG5cbiAgICAgICAgbGV0IHJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcm9sZS50ZXh0Q29udGVudCA9IGRhdGEucm9sZTtcblxuICAgICAgICBsZXQgYmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGJpby50ZXh0Q29udGVudCA9IGRhdGEuYmlvO1xuXG4gICAgICAgIHBlcnNvbi5hcHBlbmQobmFtZSwgcm9sZSwgYmlvKTtcbiAgICAgICAgdGVhbS5hcHBlbmQocGVyc29uKTtcbiAgICB9KTtcblxuICAgIGxldCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBjb250ZW50LmltZztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGgxLCBoZXJvSW1hZ2UsIGgyLCBwLCB0ZWFtKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/content/about.json":
/*!********************************!*\
  !*** ./src/content/about.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"About The Ember Spoon","img":"https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","subtitle":"Our Story & Philosophy","description":"Founded in 2022, The Ember Spoon was born from a passion for celebrating South Africa’s rich culinary heritage in a modern, welcoming setting. Our team is dedicated to sourcing the freshest local ingredients and reimagining traditional recipes with creativity and care. Whether you’re a lifelong local or a first-time visitor, we invite you to experience the warmth, flavors, and hospitality that make our restaurant unique.","team":[{"name":"Chef Lindiwe Mokoena","role":"Executive Chef","bio":"With over 15 years of experience, Chef Lindiwe brings a contemporary flair to classic South African dishes, blending innovation with tradition."},{"name":"Sipho Dlamini","role":"General Manager","bio":"Sipho’s commitment to exceptional service ensures every guest feels at home from the moment they arrive."}],"values":["Locally sourced, seasonal ingredients","Sustainable and ethical practices","Celebrating South African culture","Warm, attentive hospitality"]}');

/***/ }),

/***/ "./src/content/home.json":
/*!*******************************!*\
  !*** ./src/content/home.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"Welcome to The Ember Spoon","subtitle":"A Modern Taste of South African Cuisine","description":"Tucked in the heart of Johannesburg, The Ember Spoon brings a fresh, elegant take on beloved South African classics. From our signature rooibos-braised lamb shank to our spicy chakalaka arancini, each dish is thoughtfully crafted using seasonal, locally-sourced ingredients. Whether you\'re here for a quiet dinner or a celebratory meal, our warm ambiance and passionate team will make you feel right at home. Join us and rediscover the soul of South African cuisine—one bite at a time.","heroImage":{"src":"/images/hero.jpg","alt":"A warm, rustic photo of a plated South African dish or a cozy dining table setting with soft lighting and wine glasses."}}');

/***/ }),

/***/ "./src/content/menu.json":
/*!*******************************!*\
  !*** ./src/content/menu.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"sections":[{"title":"Starters","items":[{"name":"Chakalaka Arancini","description":"Crispy risotto balls filled with spicy chakalaka, served with a cooling yogurt dip.","price":"R65"},{"name":"Biltong Carpaccio","description":"Thinly sliced cured beef with rocket, parmesan, and a drizzle of olive oil.","price":"R80"}]},{"title":"Mains","items":[{"name":"Rooibos-Braised Lamb Shank","description":"Slow-cooked lamb shank in a rooibos and tomato gravy, served with creamy pap.","price":"R195"},{"name":"Cape Malay Chicken Curry","description":"Tender chicken in a fragrant Cape Malay curry sauce, served with yellow rice and sambals.","price":"R160"},{"name":"Grilled Kingklip","description":"Fresh kingklip fillet grilled and served with lemon butter sauce and seasonal vegetables.","price":"R180"}]},{"title":"Desserts","items":[{"name":"Malva Pudding","description":"Classic South African sponge pudding with apricot jam, served warm with custard.","price":"R60"},{"name":"Milk Tart","description":"Traditional creamy milk tart with a dusting of cinnamon.","price":"R55"}]}]}');

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/home.json */ \"./src/content/home.json\");\n\n\nfunction home() {\n    let h1 = document.createElement(\"h1\");\n    h1.textContent = _content_home_json__WEBPACK_IMPORTED_MODULE_0__.title;\n    let h2 = document.createElement(\"h2\");\n    h2.textContent = _content_home_json__WEBPACK_IMPORTED_MODULE_0__.subtitle;\n    let p = document.createElement(\"p\");\n    p.textContent = _content_home_json__WEBPACK_IMPORTED_MODULE_0__.description;\n\n    document.querySelector(\"#content\").append(h1, h2, p);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQzs7QUFFbkM7QUFDUDtBQUNBLHFCQUFxQixxREFBYTtBQUNsQztBQUNBLHFCQUFxQix3REFBZ0I7QUFDckM7QUFDQSxvQkFBb0IsMkRBQW1COztBQUV2QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGVudCBmcm9tIFwiLi9jb250ZW50L2hvbWUuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBjb250ZW50LnRpdGxlO1xuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGNvbnRlbnQuc3VidGl0bGU7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gY29udGVudC5kZXNjcmlwdGlvbjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoaDEsIGgyLCBwKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nfunction clearContent() {\n    document.querySelector(\"#content\").textContent = \"\";\n}\n\ndocument.querySelector(\"#btn_home\").addEventListener('click', btn => {\n    clearContent();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n});\ndocument.querySelector(\"#btn_menu\").addEventListener('click', btn => {\n    clearContent();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\n});\ndocument.querySelector(\"#btn_about\").addEventListener('click', btn => {\n    clearContent();\n    (0,_about__WEBPACK_IMPORTED_MODULE_3__.about)();\n});\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFDVDtBQUNEO0FBQ0U7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBSTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwyQ0FBSTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSw2Q0FBSztBQUNULENBQUM7O0FBRUQsb0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIlxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5faG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0biA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgaG9tZSgpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bl9tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBtZW51KCk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuX2Fib3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBhYm91dCgpO1xufSk7XG5cbnBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _content_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/menu.json */ \"./src/content/menu.json\");\n\n\nfunction menu() {\n    for (let i = 0; i < _content_menu_json__WEBPACK_IMPORTED_MODULE_0__.sections.length; i++) {\n        let section = _content_menu_json__WEBPACK_IMPORTED_MODULE_0__.sections[i];\n        let category = document.createElement(\"section\");\n        let title = document.createElement(\"h3\");\n        title.textContent = section.title;\n        category.append(title);\n\n        let items = section.items;\n        let div = document.createElement(\"div\");\n        for (let i = 0; i < items.length; i++) {\n            let item = items[i];\n\n            let name = document.createElement(\"h4\");\n            name.textContent = item.name;\n\n            let description = document.createElement(\"p\");\n            description.textContent = item.description;\n\n            let price = document.createElement(\"span\");\n            price.textContent = item.price;\n\n            let item_div = document.createElement(\"div\");\n            item_div.append(name, description, price);\n\n            div.append(item_div);\n        }\n        category.append(div);\n        document.querySelector(\"#content\").append(category);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5Qzs7QUFFbEM7QUFDUCxvQkFBb0IsSUFBSSx3REFBZ0IsU0FBUztBQUNqRCxzQkFBc0Isd0RBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGVudCBmcm9tIFwiLi9jb250ZW50L21lbnUuanNvblwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGNvbnRlbnQuc2VjdGlvbnNbaV07XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc2VjdGlvbi50aXRsZTtcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kKHRpdGxlKTtcblxuICAgICAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLml0ZW1zO1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXTtcblxuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgICAgICAgICAgIGxldCBpdGVtX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpdGVtX2Rpdi5hcHBlbmQobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZChpdGVtX2Rpdik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kKGRpdik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoY2F0ZWdvcnkpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction pageLoad() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDOztBQUUxQjtBQUNQLElBQUksOENBQUk7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlLWxvYWQuanM/YmVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGhvbWUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
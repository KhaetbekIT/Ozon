/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/card */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n/* harmony import */ var _modules_render_goods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render-goods */ \"./src/modules/render-goods.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\n\n\n\n\n\n\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n;(0,_modules_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data =>{\n    ;(0,_modules_render_goods__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data)\n})\n\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n;(0,_modules_price__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteDataFunc: () => (/* binding */ DeleteDataFunc),\n/* harmony export */   GetDataFunc: () => (/* binding */ GetDataFunc),\n/* harmony export */   PostDataFunc: () => (/* binding */ PostDataFunc)\n/* harmony export */ });\nconst GetDataFunc = (path = \"\") => {\n    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}`)\n        .then(response => response.json())\n\n}\n\nconst PostDataFunc = (path = \"\", data = {}) => {\n    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}`, {\n        method: \"POST\",\n        body: JSON.stringify(data),\n        headers: {\n            \"Context-type\": \"application/json\"\n        }\n    })\n}\n\nconst DeleteDataFunc = (path = \"\", id = 0) => {\n    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}/${id}`)\n}\n\n\n\n//# sourceURL=webpack://ozon/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _render_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-cart */ \"./src/modules/render-cart.js\");\n\n\n\nconst CartInit = () => {\n    const cart = document.querySelector(\"#cart\")\n    const cartModal = document.querySelector(\"#cart-js\")\n    const cartModalClose = cartModal.querySelector(\".cart-close\")\n    const cartTotal = cartModal.querySelector(\".cart-total > span\")\n    const goodsWrapper = document.querySelector(\".goods\")\n    const cartWrapper = document.querySelector(\".cart-wrapper\")\n    const cartSend = cartModal.querySelector(\".cart-confirm\")\n\n    cart.addEventListener(\"click\", () => {\n        const cart = localStorage.getItem(\"cart\") ? JSON.parse(localStorage.getItem(\"cart\")) : [];\n        cartModal.classList.add(\"d-flex\")\n        ;(0,_render_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart)\n\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\n            return sum + goodItem.price\n        }, 0)\n    })\n\n    cartModalClose.addEventListener(\"click\", () => {\n        cartModal.classList.remove(\"d-flex\")\n    })\n\n    goodsWrapper.addEventListener(\"click\", e => {\n        if (e.target.classList.contains(`btn-primary`)) {\n            const card = e.target.closest(\".card\")\n            const key = card.dataset.key\n            const goods = JSON.parse(localStorage.getItem(\"goods\"))\n            const cart = localStorage.getItem(\"cart\") ? JSON.parse(localStorage.getItem(\"cart\")) : []\n\n            const goodItem = goods.find(item => {\n                return item.id === +key\n            })\n\n            cart.push(goodItem)\n\n            localStorage.setItem('cart', JSON.stringify(cart))\n        }\n    })\n\n    cartWrapper.addEventListener(\"click\", e => {\n        if (e.target.classList.contains(`btn-primary`)) {\n            const card = e.target.closest(\".card\")\n            const key = card.dataset.key\n            const cart = localStorage.getItem(\"cart\") ? JSON.parse(localStorage.getItem(\"cart\")) : []\n\n            const index = cart.findIndex(item => {\n                return item.id === +key\n            })\n\n            cart.splice(index, 1)\n\n            localStorage.setItem('cart', JSON.stringify(cart))\n\n            ;(0,_render_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart)\n\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\n                return sum + goodItem.price\n            }, 0)\n        }\n    })\n\n    cartSend.addEventListener(\"click\", () => {\n        const cart = localStorage.getItem(\"cart\") ? JSON.parse(localStorage.getItem(\"cart\")) : []\n\n        ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.PostDataFunc)(\"\", cart).then(() => {\n            localStorage.removeItem(\"cart\")\n            ;(0,_render_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([])\n\n            cartTotal.textContent = 0\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartInit);\n\n//# sourceURL=webpack://ozon/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-goods */ \"./src/modules/render-goods.js\");\n\n\n\n\nconst CatalogInit = () => {\n    const catalogButton = document.querySelector(\".catalog-button > button\")\n    const catalogModal = document.querySelector(\".catalog\")\n    const catalogModalItems = document.querySelectorAll(\".catalog-list > li\")\n\n    let isOpen = false\n\n    catalogButton.addEventListener(\"click\", () => {\n        isOpen = !isOpen\n\n        isOpen ? catalogModal.classList.add(\"d-block\") : catalogModal.classList.remove(\"d-block\")\n    })\n\n    catalogModalItems.forEach(catalogModalItem => {\n        catalogModalItem.addEventListener(\"click\", ()=>{\n            const textContent = catalogModalItem.textContent;\n\n            (0,_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data =>{\n                (0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_1__.CategoryFilterFunc)(data, textContent))\n            })\n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogInit);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryFilterFunc: () => (/* binding */ CategoryFilterFunc),\n/* harmony export */   HotSaleFilterFunc: () => (/* binding */ HotSaleFilterFunc),\n/* harmony export */   PriceFilterFunc: () => (/* binding */ PriceFilterFunc),\n/* harmony export */   SearchFilterFunc: () => (/* binding */ SearchFilterFunc)\n/* harmony export */ });\nconst SearchFilterFunc = (goods = [], value) => {\n    return goods.filter(goodsItem => {\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\n    })\n}\n\nconst CategoryFilterFunc = (goods = [], value) => {\n    return goods.filter(goodsItem => {\n        return goodsItem.category === value\n    })\n}\n\nconst PriceFilterFunc = (goods = [], min, max) => {\n    return goods.filter(goodsItem => {\n        if (min === \"\" && max === \"\") {\n            return goodsItem\n        } else if (min !== \"\" && max !== \"\") {\n\n            return goodsItem.price > +min && goodsItem.price < +max\n        } else if (min !== \"\" && max === \"\") {\n\n            return goodsItem.price > +min\n        } else if (min === \"\" && max !== \"\") {\n\n            return goodsItem.price < +max\n        }\n    })\n}\n\nconst HotSaleFilterFunc = (goods = [], value) => {\n    return goods.filter(goodsItem => {\n        if (value) {\n            return goodsItem.sale === true\n        } else {\n            return goodsItem\n        }\n    })\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-goods */ \"./src/modules/render-goods.js\");\n\n\n\n\nconst PriceInit = () => {\n\n    const minPrice = document.querySelector(\"#min\")\n    const maxPrice = document.querySelector(\"#max\")\n    const checkeboxDiscount = document.querySelector(\"#discount-checkbox\")\n    const checkboxSpan = document.querySelector(\".filter-check_checkmark\")\n\n    minPrice.addEventListener(\"input\", () => {\n        ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data => {\n            ;(0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_1__.PriceFilterFunc)((0,_filter__WEBPACK_IMPORTED_MODULE_1__.HotSaleFilterFunc)(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))\n        })\n    })\n\n    maxPrice.addEventListener(\"input\", () => {\n        ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data => {\n            ;(0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_1__.PriceFilterFunc)((0,_filter__WEBPACK_IMPORTED_MODULE_1__.HotSaleFilterFunc)(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))\n        })\n    })\n\n    checkeboxDiscount.addEventListener(\"change\", () => {\n\n        checkeboxDiscount.checked ? checkboxSpan.classList.add(\"checked\") : checkboxSpan.classList.remove(\"checked\")\n\n        ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data => {\n            ;(0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_1__.PriceFilterFunc)((0,_filter__WEBPACK_IMPORTED_MODULE_1__.HotSaleFilterFunc)(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceInit);\n\n//# sourceURL=webpack://ozon/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/render-cart.js":
/*!************************************!*\
  !*** ./src/modules/render-cart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst RenderCart = (goods = []) => {\n\n    const cartWrapper = document.querySelector(\".cart-wrapper\")\n    // @todo\n    goods.length === 0 ? (\n        cartWrapper.insertAdjacentHTML(\"beforeend\", `\n            <div id=\"cart-empty\"> Ваша корзина пока пуста </div>\n        `)\n    ) : (\n        goods.forEach(goodsItem => {\n            cartWrapper.insertAdjacentHTML(\"beforeend\", `\n                <!-- КАРТОЧКА ТОВАРА -->\n                    <div class=\"card\" data-key=\"${goodsItem.id}\">\n                        ${goodsItem.sale ? (`<div class=\"card-sale\">🔥Hot Sale🔥</div>`) : (\"\")}\n                        <div class=\"card-img-wrapper\">\n                            <span class=\"card-img-top\"\n                                style=\"background-image: url('${goodsItem.img}')\"></span>\n                        </div>\n                        <div class=\"card-body justify-content-between\">\n                            <div class=\"card-price\">${goodsItem.price} ₽</div>\n                            <h5 class=\"card-title\">${goodsItem.title} </h5>\n                            <button class=\"btn btn-primary\">Удалить</button>\n                        </div>\n                    </div>\n                <!-- END КАРТОЧКА ТОВАРА -->\n            `)\n        })\n    )\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/render-cart.js?");

/***/ }),

/***/ "./src/modules/render-goods.js":
/*!*************************************!*\
  !*** ./src/modules/render-goods.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst RenderGoodsInit = (goods = []) => {\n\n    const goodsContainer = document.querySelector(\".goods\")\n\n    localStorage.setItem(\"goods\", JSON.stringify(goods))\n\n    goodsContainer.innerHTML = ''\n\n    goods.forEach(goodsItem => {\n        if (goodsItem) {\n            goodsContainer.insertAdjacentHTML(\"beforeend\", `\n            <!-- КАРТОЧКА ТОВАРА -->\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\n                    ${goodsItem.sale ? (\n                    `<div class=\"card-sale\">🔥Hot Sale🔥</div>`\n                ) : (\"\")\n                }\n                    <div class=\"card-img-wrapper\">\n                        <span class=\"card-img-top\"\n                            style=\"background-image: url('${goodsItem.img}')\"></span>\n                    </div>\n                    <div class=\"card-body justify-content-between\">\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\n                        <h5 class=\"card-title\">${goodsItem.title} </h5>\n                        <button class=\"btn btn-primary\">В корзину</button>\n                    </div>\n                </div>\n            </div>\n            <!-- END КАРТОЧКА ТОВАРА -->\n        `)\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderGoodsInit);\n\n//# sourceURL=webpack://ozon/./src/modules/render-goods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-goods */ \"./src/modules/render-goods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\n\n\n\nconst Search = () => {\n    const search = document.querySelector(\".search-wrapper_input\")\n\n    search.addEventListener(\"input\", e => {\n        const value = e.target.value\n\n        ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.GetDataFunc)().then(data => {\n            ;(0,_render_goods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.SearchFilterFunc)(data, value))\n        })\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
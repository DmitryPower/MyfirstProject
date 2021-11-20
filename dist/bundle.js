/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/blog_cards.js":
/*!***********************************!*\
  !*** ./src/modules/blog_cards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
    class Blog {
        constructor(date, name, id) {
            this.date = date;
            this.name = name;
            this.id = id;
        }
        render() {
            let dates = document.querySelectorAll(".blog__date");
            let names = document.querySelectorAll(".blog__text h3");
            dates[this.id - 1].textContent = this.date;
            names[this.id - 1].textContent = this.name;
        }
    }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forms() {
    // форма загрузки файла
    let select_file = document.querySelector("#select_file");
    let cancel = document.querySelector(".cancel");

    select_file.addEventListener("change", function (e) {
        if (this.files && this.files.length >= 1) {
            document.querySelector(".file__status").textContent = `${this.files[0].name}`;
            document.querySelector(".input__wrapper__buttons").classList.add("cancel__active");
        }
        else {
            document.querySelector(".input__wrapper__buttons").classList.remove("cancel__active");
        }
    })
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        select_file.value = "";
        document.querySelector(".input__wrapper__buttons").classList.remove("cancel__active");
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/modules/modalwindow.js":
/*!************************************!*\
  !*** ./src/modules/modalwindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
function closeModal() {
    setTimeout(() => {
        document.querySelector(".modal").classList.remove("modal__active")
    }, 2000)
}
function modalWindow() {
    ///Обработчик на модальное окно
    document.querySelector(".submit").addEventListener("click", () => {
        let form = document.forms[0];
        if (form.name.value && form.email.value && form.project.value != '') {
            document.querySelector(".modal").classList.toggle("modal__active");
            document.querySelector(".modal__buttons").style.display = "none";
        }
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);


/***/ }),

/***/ "./src/modules/navbtn.js":
/*!*******************************!*\
  !*** ./src/modules/navbtn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navBtn() {
    let navBtn = document.querySelector(".nav_btn");//событие на кнопку
    navBtn.addEventListener('click', () => {
        let nav = document.querySelector("nav ul")
        if (window.getComputedStyle(nav).display == "none") {
            navBtn.classList.toggle('btn_active');
            if (document.querySelector('.nav__menu__wrapper').style.display == "block") {
                document.querySelector('.nav__menu__wrapper').style.display = "none";
            }
            else {
                document.querySelector('.nav__menu__wrapper').style.display = "block";
            }
        }
    })
    window.addEventListener('resize', () => {
        if (window.getComputedStyle(document.querySelector("nav ul")).display == "flex") {
            navBtn.classList.remove('btn_active');
            document.querySelector('.nav__menu__wrapper').style.display = "none";
        }
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBtn);

/***/ }),

/***/ "./src/modules/services.js":
/*!*********************************!*\
  !*** ./src/modules/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindPostData": () => (/* binding */ bindPostData),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _modalwindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalwindow */ "./src/modules/modalwindow.js");

    
function bindPostData(form) {
        const postData = async (url, data) => {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: data,
            });
            if (!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }
            return await result.json();
        }
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            document.querySelector(".modal__content").textContent = "Loading...";
    
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    document.querySelector(".modal__content").textContent = "Thanks for your appeal!We will contact you!";
                    (0,_modalwindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
                    console.log(data);
    
                }).catch(() => {
                    document.querySelector(".modal__content").textContent = "Error!Try latter!";
    
    
                }).finally(() => {
                    form.reset();
                    (0,_modalwindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
                })
        })
    }
    let getData = async (url) => {
        let result = await fetch(url, {
            method: "GET",
        })
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return await result.json();
    }


    


    

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(slides, slidesWrapper, slidesFiled, slideIndicators, ActiveSelectorIndicator,SelectorIndicator) {
    let width = window.getComputedStyle(slidesWrapper).width,
        offset = 0,
        slideIndex = 0;

    window.addEventListener("resize", (e) => {
        width = window.getComputedStyle(slidesWrapper).width;
    });
    function OffsetTo() {
        offset = parseInt(width) * (slideIndex - 1);
        slidesFiled.style.transform = `translateX(-${offset}px)`;
    };
    slides.forEach(slide => {
        slide.style.width = width;
    })
    let timeSlider = setInterval(() => {
        if (slideIndex == slides.length) {
            slideIndex = 0;
        }
        slideIndex++;
        OffsetTo();
        document.querySelector(`.${ActiveSelectorIndicator}`).classList.remove(`${ActiveSelectorIndicator}`);
        slideIndicators[slideIndex - 1].classList.add(`${ActiveSelectorIndicator}`);
    }, 3000)// перелистывание слайдов

    document.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide");
        slideIndex = slideTo;
        OffsetTo();
        if (e.target.id == `${SelectorIndicator}`) {
            document.querySelector(`.${ActiveSelectorIndicator}`).classList.remove(`${ActiveSelectorIndicator}`);
            e.target.classList.add(`${ActiveSelectorIndicator}`);
        }
    })//перелистывание на клик
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_modules_blog_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/blog_cards */ "./src/modules/blog_cards.js");
/* harmony import */ var _src_modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/form */ "./src/modules/form.js");
/* harmony import */ var _src_modules_modalwindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/modalwindow */ "./src/modules/modalwindow.js");
/* harmony import */ var _src_modules_navbtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/navbtn */ "./src/modules/navbtn.js");
/* harmony import */ var _src_modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _modules_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/services */ "./src/modules/services.js");







window.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll(".commentator__card"),
        slidesWrapper = document.querySelector(".commentator__card__wrapper"),
        slidesFiled = document.querySelector(".commentator__card-inner"),
        slideIndicators = document.querySelectorAll("#circle"),
        ActiveSelectorIndicator = 'selected',
        SelectorIndicator = 'circle';
    (0,_src_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_src_modules_modalwindow__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_src_modules_navbtn__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_src_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])(slides, slidesWrapper, slidesFiled, slideIndicators, ActiveSelectorIndicator, SelectorIndicator);
    (0,_modules_services__WEBPACK_IMPORTED_MODULE_5__.bindPostData)(document.forms[0]);
    (0,_modules_services__WEBPACK_IMPORTED_MODULE_5__.getData)('http://localhost:3000/news')
        .then(data => data.forEach(obj => {
            new _src_modules_blog_cards__WEBPACK_IMPORTED_MODULE_0__["default"](obj.date, obj.name, obj.id).render();
        }))
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
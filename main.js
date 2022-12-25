(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._handleCardClick=o,this._cardSelector=n,this._getTemplate()}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){this.cardTemplate=document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){return this.elementCardTitle=this.cardTemplate.querySelector(".elements__text"),this.elementCardTitle.textContent=this._name,this.elementCardImg=this.cardTemplate.querySelector(".elements__image"),this.elementCardImg.src=this._link,this.elementCardImg.alt=this._name,this.deleteBtn=this.cardTemplate.querySelector(".elements__remove-button"),this.likeBtn=this.cardTemplate.querySelector(".elements__like-button"),this._setListeners(),this.cardTemplate}},{key:"_removeCard",value:function(){this.cardTemplate.remove()}},{key:"_likeCard",value:function(){this.likeBtn.classList.toggle("elements__like-button_active")}},{key:"_setListeners",value:function(){var e=this;this.deleteBtn.addEventListener("click",(function(){e._removeCard()})),this.likeBtn.addEventListener("click",(function(){e._likeCard()})),this.elementCardImg.addEventListener("click",(function(){e._handleCardClick(e._item)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitBtnSelector,this._disabledBtnClass=t.disabledBtnClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._btnElement=this._formElement.querySelector(this._submitBtnSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_toggleInputErrorState",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disabledBtn",value:function(){this._btnElement.classList.add(this._disabledBtnClass),this._btnElement.disabled=!0}},{key:"enableBtn",value:function(){this._btnElement.classList.remove(this._disabledBtnClass),this._btnElement.disabled=!1}},{key:"_toggleBtnState",value:function(){this._hasInvalidInput(this._inputList)?this.disabledBtn():this.enableBtn()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputErrorState(t),e._toggleBtnState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){e._hideInputError(t)})),this._formElement.addEventListener("submit",(function(){e._hasInvalidInput()&&e.disabledBtn()}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this.resetValidation()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_active")&&this.close(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e))._popupFullPhoto=document.querySelector(".popup__full-photo"),t._popupFullPhotoDescription=document.querySelector(".popup__full-photo-description"),t}return t=l,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;m(b(l.prototype),"open",this).call(this),this._popupFullPhoto.src=n,this._popupFullPhoto.alt=t,this._popupFullPhotoDescription.textContent=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(p);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function l(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e))._handleSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__text"),n}return t=l,(n=[{key:"_getInputValues",value:function(){var e=this;return this._newValues={},this._inputList.forEach((function(t){e._newValues[t.name]=t.value})),this._newValues}},{key:"close",value:function(){E(P(l.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()})),E(P(l.prototype),"setEventListeners",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(p);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(t.name),this._descriptionProfile=document.querySelector(t.info)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,info:this._descriptionProfile.textContent}}},{key:"setUserInfo",value:function(e){this._nameProfile.textContent=e.name,this._descriptionProfile.textContent=e.info}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],B=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup__text_type_name"),x=document.querySelector(".popup__text_type_description"),R=document.querySelector(".elements__container"),F=document.querySelector(".profile__add-button"),V=function(e){return new n(e,"#tempalate-card",{handleCardClick:function(){A.open(e)}}).generateCard()},D=new a({items:I,renderer:function(e){var t=V(e);D.addItem(t)}},R);D.renderItems(I);var A=new _(".popup_type_img");A.setEventListeners();var U=new j(".popup_type_add",{handleSubmit:function(e){var t={name:e.place,link:e.link},n=V(t);D.addItem(n),U.close()}});U.setEventListeners();var M,z=new T({name:".profile__name",info:".profile__description"}),N=new j(".popup_type_edit",{handleSubmit:function(e){z.setUserInfo(e)}});N.setEventListeners(),F.addEventListener("click",(function(){U.open()})),B.addEventListener("click",(function(){N.open();var e=z.getUserInfo();q.value=e.name,x.value=e.info})),M={formSelector:".popup__form",inputSelector:".popup__text",submitBtnSelector:".popup__save-button",disabledBtnClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(M.formSelector)).forEach((function(e){new i(M,e).enableValidation()}))})();
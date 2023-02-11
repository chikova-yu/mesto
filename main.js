(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i){var u=this,a=i.handleCardClick,l=i.handleLikeCard,c=i.handleDislikeCard,s=i.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_getLikeInfo",(function(){return u._data.likes.some((function(e){return e._id===u._myID}))})),n(this,"_changeLikeState",(function(){u._getLikeInfo()?u._handleDislikeCard(u._data):u._handleLikeCard(u._data)})),this._data=t,this._name=t.name,this._link=t.link,this._myID=o,this._creatorID=t.owner._id,this._handleCardClick=a,this._handleLikeCard=l,this._handleDislikeCard=c,this._handleDeleteCard=s,this._cardSelector=r}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_updateLikeState",value:function(e){this._data.likes=e.likes,this.likeNumber.textContent=String(this._data.likes.length)}},{key:"likeCard",value:function(e){this.likeBtn.classList.add("elements__like-button_active"),this._updateLikeState(e)}},{key:"dislikeCard",value:function(e){this.likeBtn.classList.remove("elements__like-button_active"),this._updateLikeState(e)}},{key:"_setEventListeners",value:function(){var e=this;this.deleteBtn.addEventListener("click",(function(){e._handleDeleteCard(e)})),this.likeBtn.addEventListener("click",this._changeLikeState),this.elementCardImg.addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"_chekCardOwner",value:function(){this._myID!==this._creatorID&&this.deleteBtn.remove()}},{key:"_checkLikeOwner",value:function(){this._getLikeInfo()&&this.likeCard(this._data)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.elementCardTitle=this._element.querySelector(".elements__text"),this.elementCardTitle.textContent=this._name,this.elementCardImg=this._element.querySelector(".elements__image"),this.elementCardImg.src=this._link,this.elementCardImg.alt=this._name,this.deleteBtn=this._element.querySelector(".elements__remove-button"),this.likeBtn=this._element.querySelector(".elements__like-button"),this.likeNumber=this._element.querySelector(".elements__like-number"),this._checkLikeOwner(),this._chekCardOwner(),this._updateLikeState(this._data),this._setEventListeners(),this._element}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitBtnSelector,this._disabledBtnClass=t.disabledBtnClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._btnElement=this._formElement.querySelector(this._submitBtnSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_toggleInputErrorState",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disabledBtn",value:function(){this._btnElement.classList.add(this._disabledBtnClass),this._btnElement.disabled=!0}},{key:"enableBtn",value:function(){this._btnElement.classList.remove(this._disabledBtnClass),this._btnElement.disabled=!1}},{key:"_toggleBtnState",value:function(){this._hasInvalidInput(this._inputList)?this.disabledBtn():this.enableBtn()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputErrorState(t),e._toggleBtnState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){e._hideInputError(t)})),this._formElement.addEventListener("submit",(function(){e._hasInvalidInput()||e.disabledBtn()}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this.resetValidation()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_active")&&this.close(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupFullPhoto=t._popup.querySelector(".popup__full-photo"),t._popupFullPhotoDescription=t._popup.querySelector(".popup__full-photo-description"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;v(S(u.prototype),"open",this).call(this),this._popupFullPhoto.src=n,this._popupFullPhoto.alt=t,this._popupFullPhotoDescription.textContent=t}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function O(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__text"),n._popupSaveBtn=n._popupForm.querySelector(".popup__save-button"),n._popupSaveBtnTextContent=n._popupSaveBtn.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._newValues={},this._inputList.forEach((function(t){e._newValues[t.name]=t.value})),this._newValues}},{key:"close",value:function(){E(j(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())})),E(j(u.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(e){this._popupSaveBtn.textContent=e?"Сохранение...":this._popupSaveBtnTextContent}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(t.name),this._descriptionProfile=document.querySelector(t.info),this._avatarProfile=document.querySelector(t.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,info:this._descriptionProfile.textContent,avatar:this._avatarProfile.src}}},{key:"setUserInfo",value:function(e){this._nameProfile.textContent=e.name,this._descriptionProfile.textContent=e.about,this._avatarProfile.src=e.avatar}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(this._checkResponse)}},{key:"getInfoProfile",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e._data._id),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch(this._url+"/cards/".concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch(this._url+"/cards/".concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function N(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),F(J(u.prototype),"setEventListeners",this).call(this)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),G=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup__text_type_name"),z=document.querySelector(".popup__text_type_description"),$=document.querySelector(".elements__container"),K=document.querySelector(".profile__add-button"),Q=(document.querySelector(".popup_type_delete-approve"),document.querySelector(".popup_type_avatar"),document.querySelector(".profile__avatar-edit-button"));function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=null,Y=new x({url:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"a88d88e2-8099-4329-b331-cfa0f8f3f7b5","Content-Type":"application/json"}});Promise.all([Y.getInfoProfile(),Y.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,oe.setUserInfo(o),te.renderItems(i)})).catch((function(e){return console.log(e)}));var Z=function(e){var t=new o(e,"#tempalate-card",X,{handleCardClick:function(){re.open(e)},handleLikeCard:function(){Y.likeCard(e).then((function(e){return t.likeCard(e)})).catch((function(e){return console.log(e)}))},handleDislikeCard:function(e){Y.dislikeCard(e).then((function(e){return t.dislikeCard(e)})).catch((function(e){return console.log(e)}))},handleDeleteCard:function(e){ee.open(),ee.setSubmitAction((function(){Y.deleteCard(e).then((function(){t.removeCard(),ee.close()})).catch((function(e){return console.log(e)}))}))}});return t.generateCard()},ee=new M(".popup_type_delete-approve");ee.setEventListeners();var te=new s({renderer:function(e){var t=Z(e);te.addItem(t)}},$),ne=new L(".popup_type_add",{handleSubmit:function(e){ne.renderLoading(!0,"Создать"),Y.addCard(e).then((function(e){var t=Z(e);te.addItem(t),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1,"Создать")}))}});ne.setEventListeners();var re=new g(".popup_type_img");re.setEventListeners();var oe=new R({name:".profile__name",info:".profile__description",avatar:".profile__avatar"}),ie=new L(".popup_type_avatar",{handleSubmit:function(e){ie.renderLoading(!0),Y.editAvatar(e).then((function(e){oe.setUserInfo(e),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.renderLoading(!1)}))}});ie.setEventListeners();var ue,ae=new L(".popup_type_edit",{handleSubmit:function(e){ae.renderLoading(!0),Y.editProfile(e).then((function(e){oe.setUserInfo(e),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){ae.renderLoading(!1)}))}});ae.setEventListeners(),Q.addEventListener("click",(function(){ie.open()})),K.addEventListener("click",(function(){ne.open()})),G.addEventListener("click",(function(){ae.open();var e=oe.getUserInfo();H.value=e.name,z.value=e.info})),ue={formSelector:".popup__form",inputSelector:".popup__text",submitBtnSelector:".popup__save-button",disabledBtnClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(ue.formSelector)).forEach((function(e){new a(ue,e).enableValidation()}))})();
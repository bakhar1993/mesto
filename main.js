(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){var c=u.handleConfirm;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorTemplate=n,this._src=e.link,this._name=e.name,this._likes=e.likes,this._handleConfirm=c,this._dataCard=e,this._api=o,this._userId=e.owner._id,this._cardId=e._id,this._id=i,this._handleCardClick=r}var n,r;return n=t,r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"_setEventListener",value:function(){var e=this;this._pictureCards.addEventListener("click",(function(){e._handleCardClick(e._name,e._src)})),this._deleteButton.addEventListener("click",(function(){e._handleConfirm()})),this._likeButton.addEventListener("click",(function(){e._clickLike()}))}},{key:"deleteCards",value:function(){this._element.closest(".photo-grid__item").remove()}},{key:"_clickLike",value:function(){var e=this._likeCount,t=this._likeButton;this._likeButton.classList.contains("photo-grid__like_active")?this._api.deleteLike(this._cardId).then((function(n){e.textContent=n.likes.length,t.classList.remove("photo-grid__like_active")})).catch((function(e){return console.log(e)})):this._api.putLike(this._cardId).then((function(n){e.textContent=n.likes.length,t.classList.add("photo-grid__like_active")})).catch((function(e){return console.log(e)}))}},{key:"generateCards",value:function(){var e=this;return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".photo-grid__like"),this._deleteButton=this._element.querySelector(".photo-grid__delete"),this._likeCount=this._element.querySelector(".photo-grid__like-count"),this._element.querySelector(".photo-grid__title").textContent=this._name,this._pictureCards=this._element.querySelector(".photo-grid__picture"),this._pictureCards.src=this._src,this._pictureCards.alt=this._name,this._likeCount.textContent=this._likes.length,this._likes.find((function(t){return e._id===t._id}))&&this._likeButton.classList.add("photo-grid__like_active"),this._id===this._userId&&this._deleteButton.classList.add("photo-grid__delete_opened"),this._setEventListener(),this._element}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(t.submitButtonSelector),this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass}var t,r;return t=e,(r=[{key:"_isValid",value:function(e){e.validity.valid?this._hideImputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){e.classList.add(this._inputErrorClass),this._formElement.querySelector(".".concat(e.id,"-error")).textContent=t}},{key:"_hideImputError",value:function(e){e.classList.remove(this._inputErrorClass),this._formElement.querySelector(".".concat(e.id,"-error")).textContent=""}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","true")):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetFormError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideImputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.userNameSelector,r=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._user={},this._userAvatar=document.querySelector(o),this._userName=document.querySelector(n),this._userJob=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this._user.userName=this._userName.textContent,this._user.userJob=this._userJob.textContent,this._user}},{key:"setUserInfo",value:function(e){var t=e.userData;this._userName.textContent=t.name,this._userJob.textContent=t.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}],n&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeOvarlay",value:function(e){e.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("mousedown",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){e._closeOvarlay(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._pictureOpen=t._popup.querySelector(".popup__pic_type_open-pic"),t._titlePictureOpen=t._popup.querySelector(".popup__title_type_open-pic"),t}return t=u,(n=[{key:"open",value:function(e,t){this._pictureOpen.src=e,this._pictureOpen.alt=t,this._titlePictureOpen.textContent=t,f(y(u.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._popupButton=n._popup.querySelector(".popup__submit"),n._buttonText=n._popupButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._data={},this._inputList=this._form.querySelectorAll(".popup__input"),this._inputList.forEach((function(t){e._data[t.name]=t.value})),this._data}},{key:"setEventListeners",value:function(){var e=this;g(E(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._buttonText}},{key:"close",value:function(){g(E(u.prototype),"close",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._popupButton=t._popup.querySelector(".popup__submit"),t._buttonText=t._popupButton.textContent,t}return t=u,n=[{key:"setEventListeners",value:function(){var e=this;j(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitConfirm()}))}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":"Да"}},{key:"setSubmitForm",value:function(e){this._submitConfirm=e}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._chekingResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._chekingResponse)}},{key:"setUserInfo",value:function(e){var t=e.userData;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._chekingResponse)}},{key:"addCards",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._chekingResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._chekingResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._chekingResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._chekingResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._chekingResponse)}},{key:"_chekingResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}],n&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),U=document.querySelector(".popup_type_profile-edit"),A=document.querySelector(".profile__edit-Button"),D=(document.querySelector(".popup__close_type_profile-edit"),document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".popup__form_type_profile-edit")),F=document.querySelector(".popup__input_type-name"),N=document.querySelector(".popup__input_type-job"),J=document.querySelector(".popup__form_type_avatar-edit"),V=document.querySelector(".popup_type_add-card"),H=document.querySelector(".popup_type_add-card"),M=V.querySelector(".popup__close_type_add-card"),z=H.querySelector(".popup__form_type_add-card"),$=(V.querySelector(".popup__submit_type_add-card"),U.querySelector(".popup__submit_type_profile-edit"),Array.from(document.querySelectorAll(".popup__input")),z.querySelector(".popup__input_type-place"),z.querySelector(".popup__input_type-link"),document.querySelector(".profile__add-Button")),G=(document.querySelector(".photo-grid"),document.querySelector("#photo-grid__card").content,document.querySelector(".popup_type_open-pic"),document.querySelector(".popup__close_type_open-pic"),document.querySelector(".popup__pic_type_open-pic"),document.querySelector(".popup__title_type_open-pic"),document.querySelector(".profile__avatar-edit-button")),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function Q(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",X),document.removeEventListener("mousedown",W)}function W(e){var t=document.querySelector(".popup_opened");e.target===t&&Q(t)}function X(e){27===e.keyCode&&Q(document.querySelector(".popup_opened"))}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"9d821a34-237a-4eb7-aba2-4697d5f65cd4","Content-Type":"application/json"}}),ee=new I(".popup_type_delete-card");ee.setEventListeners();var te=new r(K,D);te.enableValidation();var ne=new r(K,z);ne.enableValidation();var re=new r(K,J);re.enableValidation();var oe=new c({userNameSelector:".profile__name",userJobSelector:".profile__job",userAvatarSelector:".profile__avatar"}),ie=new v(".popup_type_open-pic");ie.setEventListeners();var ue=new O(".popup_type_add-card",{submitForm:function(e){ue.renderLoading(!0),Z.addCards(e).then((function(e){var t=le(e);fe.addItem(t),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){ue.renderLoading(!1)}))}});ue.setEventListeners();var ce=new O(".popup_type_profile-edit",{submitForm:function(e){ce.renderLoading(!0),Z.setUserInfo({userData:e}).then((function(){oe.setUserInfo({userData:e}),ce.close()})).catch((function(e){return console.log(e)})).finally((function(){ce.renderLoading(!1)}))}});ce.setEventListeners();var ae,se=new O(".popup_type_avatar-edit",{submitForm:function(e){se.renderLoading(!0),Z.editAvatar(e).then((function(e){oe.setUserAvatar(e),se.close()})).catch((function(e){return console.log(e)})).finally((function(){se.renderLoading(!1)})),re.toggleButtonState()}});function le(e){var n=new t(e,"#photo-grid__card",pe,Z,ae,{handleConfirm:function(){ee.open(),ee.setSubmitForm((function(){ee.renderLoading(!0),Z.deleteCard(e._id).then((function(){n.deleteCards(),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){ee.renderLoading(!1)}))}))}});return n.generateCards()}function pe(e,t){ie.open(t,e)}se.setEventListeners(),Promise.all([Z.getUserInfo(),Z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae=o._id,oe.setUserInfo({userData:o}),oe.setUserAvatar(o),fe.renderItems(i)})).catch((function(e){return console.log(e)}));var fe=new i({renderer:function(e){var t=le(e);fe.addItem(t)}},".photo-grid");A.addEventListener("click",(function(){var e=oe.getUserInfo();F.value=e.userName,N.value=e.userJob,te.resetFormError(),ce.open()})),$.addEventListener("click",(function(){ne.resetFormError(),ne.toggleButtonState(),ue.open()})),M.addEventListener("click",(function(){Q(V)})),G.addEventListener("click",(function(){se.open(),re.resetFormError()}))})();
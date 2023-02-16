(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}function n(e){var r=e.target,n=document.querySelector(".popup_opened");(r.classList.contains("popup__container")||r.classList.contains("popup__close-btn"))&&t(n)}Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("mousedown",n)}));var o=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__edit-button-avatar"),u=document.querySelector(".popup_avatar"),i=document.querySelector(".popup_new-place"),l=document.querySelector(".popup_profile"),s=document.querySelector(".popup_element"),d=s.querySelector(".popup__photo");function f(e,t,r){e.querySelector(".form__submit-button").textContent=t?"Сохранение...":r}function m(e){var t=e.querySelector(".form__submit-button");t.classList.remove("form__submit-button_active"),t.setAttribute("disabled",!0)}Array.from(document.querySelectorAll("#opened-popup"));var p={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-3",headers:{authorization:"b58fa111-da90-4832-8974-76658f993edf","Content-Type":"application/json"}};function v(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var y=document.querySelector(".elements"),_=document.querySelector("#element-template").content;function h(t,r){var n=_.cloneNode(!0).querySelector(".element"),o=n.querySelector(".element__image"),a=n.querySelector(".element__like"),c=n.querySelector(".element__trash"),u=n.querySelector(".element__title"),i=n.querySelector(".element__like-number");function l(e,t){return e.some((function(e){return e._id===t}))}function f(e,t){l(e,t)?(a.classList.add("element__like_active"),i.textContent=e.length):(a.classList.remove("element__like_active"),i.textContent=e.length)}return o.src=t.link,o.alt=t.name,u.textContent=t.name,t.owner._id===r&&c.classList.add("element__trash_active"),c.addEventListener("click",(function(){var e;t.owner._id===r&&(e=t._id,fetch("".concat(p.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:p.headers}).then(v)).then((function(e){n.remove()})).catch((function(e){console.log(e)}))})),f(t.likes,r),a.addEventListener("click",(function(){var e,n;(e=t._id,n=l(t.likes,r),fetch("".concat(p.baseUrl,"/cards/likes/").concat(e),{method:n?"DELETE":"PUT",headers:p.headers}).then(v)).then((function(e){t.likes=e.likes,f(t.likes,r)})).catch((function(e){console.log(e)}))})),o.addEventListener("click",(function(){!function(t,r){e(s),d.src=t.src,d.alt=r.textContent,s.querySelector(".popup__title").textContent=r.textContent}(o,u)})),n}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append",r=arguments.length>2?arguments[2]:void 0,n=h(e,r);"append"===t?y.append(n):"prepend"===t&&y.prepend(n)}function b(e,t,r){var n=r.activeButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.add(n),t.removeAttribute("disabled",!0)):(t.classList.remove(n),t.setAttribute("disabled",!0))}function C(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E,A,L,g,k,x,w,B=document.querySelector(".profile__name"),U=document.querySelector(".profile__description"),j=document.querySelector(".form__places-name"),T=document.querySelector(".form__src"),O=document.querySelector(".form_new-place"),P=document.querySelector(".form_profile-info"),D=document.querySelector(".form_create-avatar"),I=document.querySelector(".form__user-name"),N=document.querySelector(".form__user-description"),J=document.querySelector(".profile__name"),H=document.querySelector(".profile__description"),M=document.querySelector(".form__avatar-src"),z=document.querySelector(".profile__avatar"),$=null;o.addEventListener("click",(function(t){e(l)})),c.addEventListener("click",(function(t){e(u),m(D)})),a.addEventListener("click",(function(t){e(i),m(O)})),Promise.all([fetch("".concat(p.baseUrl,"/users/me"),{headers:p.headers}).then(v),fetch("".concat(p.baseUrl,"/cards"),{headers:p.headers}).then(v)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,u=[],i=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,r)||C(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];B.textContent=o.name,U.textContent=o.about,z.src=o.avatar,z.alt=o.name,I.value=J.textContent,N.value=H.textContent,$=o._id;var c,u=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=C(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(a);try{for(u.s();!(c=u.n()).done;)S(c.value,"append",$)}catch(e){u.e(e)}finally{u.f()}})).catch((function(e){console.log(e)})),P.addEventListener("submit",(function(e){e.preventDefault(),f(P,!0,"Сохранить"),function(e,t){return fetch("".concat(p.baseUrl,"/users/me"),{method:"PATCH",headers:p.headers,body:JSON.stringify({name:e,about:t})}).then(v)}(I.value,N.value).then((function(e){J.textContent=e.name,H.textContent=e.about,t(l)})).catch((function(e){console.log(e)})).finally((function(){f(P,!1,"Сохранить")}))})),D.addEventListener("submit",(function(e){var r;e.preventDefault(),f(D,!0,"Сохранить"),(r=M.value,fetch("".concat(p.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:p.headers,body:JSON.stringify({avatar:r})}).then(v)).then((function(e){z.src=e.avatar,t(u),M.value=""})).catch((function(e){console.log(e)})).finally((function(){f(D,!1,"Сохранить")}))})),O.addEventListener("submit",(function(e){var r,n;e.preventDefault(),f(O,!0,"Создать"),(r=j.value,n=T.value,fetch("".concat(p.baseUrl,"/cards"),{method:"POST",headers:p.headers,body:JSON.stringify({name:r,link:n})}).then(v)).then((function(e){S(e,"prepend",$),t(i),T.value="",j.value=""})).catch((function(e){console.log(e)})).finally((function(){f(O,!1,"Создать")}))})),A=(E={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",activeButtonClass:"form__submit-button_active",inputErrorClass:"form__input_type-error",errorClassActive:"form__input-error_active"}).formSelector,L=E.inputSelector,g=E.submitButtonSelector,k=E.activeButtonClass,x=E.inputErrorClass,w=E.errorClassActive,Array.from(document.querySelectorAll(A)).forEach((function(e){!function(e,t){var r=t.inputSelector,n=t.inputErrorClass,o=t.activeButtonClass,a=t.errorClassActive,c=t.submitButtonSelector,u=Array.from(e.querySelectorAll(r)),i=e.querySelector(c);b(u,i,{activeButtonClass:o}),u.forEach((function(t){t.addEventListener("input",(function(){b(u,i,{activeButtonClass:o}),function(e,t,r){var n=r.inputErrorClass,o=r.errorClassActive;t.validity.valid?function(e,t,r){var n=r.inputErrorClass,o=r.errorClassActive,a=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),a.classList.remove(o),a.textContent=""}(e,t,{inputErrorClass:n,errorClassActive:o}):function(e,t,r,n){var o=n.inputErrorClass,a=n.errorClassActive,c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.textContent=r,c.classList.add(a)}(e,t,t.validationMessage,{inputErrorClass:n,errorClassActive:o})}(e,t,{inputErrorClass:n,errorClassActive:a})}))}))}(e,{inputSelector:L,inputErrorClass:x,activeButtonClass:k,errorClassActive:w,submitButtonSelector:g})}))})();
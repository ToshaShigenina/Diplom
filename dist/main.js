!function(e){var t={};function l(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var r=()=>{const e=document.body;let t=null;e.addEventListener("click",e=>{let l=e.target;if(!t)return l=l.closest("[data-popup]"),void(l&&(e.preventDefault(),document.querySelector('[data-popup="#gift"]')&&(document.querySelector('[data-popup="#gift"]').style.display="none"),t=document.querySelector(l.dataset.popup),t.style.display="block"));(l.closest(".close_icon")||l.closest(".close-btn")||!l.closest(".form-content"))&&(document.querySelector('[data-popup="#gift"]')&&document.querySelector('[data-popup="#gift"]').removeAttribute("style"),t.removeAttribute("style"),t=null)})};var o=()=>{const e=document.body,t=document.querySelector(".popup-menu"),l=document.querySelector(".top-menu"),r=document.querySelector(".fixed-gift");let o=e.clientWidth;const n=()=>{e.addEventListener("click",e=>{let l=e.target;if(o<768){if(l.matches(".close-menu-btn img")||l.matches(".scroll a"))return void t.removeAttribute("style");l=l.closest(".menu-button"),l&&(t.style.display="flex")}}),document.addEventListener("scroll",()=>{const e=document.querySelector(".head").clientHeight;let t=window.scrollY;if(o<768&&t>e)return l.style.position="fixed",l.style.top="0",l.style.left="0",void(r.style.top="70px");l.removeAttribute("style"),r.removeAttribute("style")})};n(),window.addEventListener("resize",()=>{o=e.clientWidth,console.log(o),n()})};var n=()=>{const e=document.getElementById("totop");let t=document.querySelector(".header-main").clientHeight;e.addEventListener("click",e=>{e.preventDefault(),document.body.scrollIntoView({block:"start",behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>t/3*2?e.style.display="block":e.removeAttribute("style")})};var c=()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),l=document.querySelector(".gallery-slider"),r=l.querySelectorAll(".slide"),o=e=>{let t=0;return e.forEach((e,l)=>{e.classList.contains("slide-active")&&(t=l)}),t},n=(e,t)=>{let l=o(t);const r=document.createElement("ul");r.classList.add("slider-dots");for(let e=0;e<t.length;e++){const t=document.createElement("li");t.innerHTML="<button></button>",e===l&&t.classList.add("slick-active"),r.append(t)}e.append(r)},c=(e,t,l)=>{e[t].classList.remove(l)},s=(e,t,l)=>{e[t].classList.add(l)},i=(e,t)=>{let l=o(e);c(e,l,"slide-active"),c(t,l,"slick-active"),l++,l>=e.length&&(l=0),s(e,l,"slide-active"),s(t,l,"slick-active")},d=(e,t)=>{setInterval(i,2500,e,t)},a=(e,t,l)=>{e.preventDefault();let r=o(t),n=e.target.closest(".slider-dots li")||e.target.closest(".slider-arrow");n&&(c(t,r,"slide-active"),c(l,r,"slick-active"),n.matches(".next")?r++:n.matches(".prev")?r--:l.forEach((e,t)=>{e===n&&(r=t)}),r>=t.length&&(r=0),r<0&&(r=t.length-1),s(t,r,"slide-active"),s(l,r,"slick-active"))};n(e,t),n(l,r),(e=>{const t=document.createElement("div"),l=document.createElement("div");t.classList.add("slider-arrow","next"),l.classList.add("slider-arrow","prev"),t.innerHTML='<span><i class="fa fa-chevron-right"></i></span>',l.innerHTML='<span><i class="fa fa-chevron-left"></i></span>',e.append(t),e.append(l)})(l);const u=e.querySelectorAll(".slider-dots li"),p=l.querySelectorAll(".slider-dots li");e.addEventListener("click",e=>{a(e,t,u)}),l.addEventListener("click",e=>{a(e,r,p)}),d(t,u),d(r,p)};(()=>{document.body.addEventListener("click",e=>{const t=document.querySelector(".club-select ul");e.target.closest(".club-select")?t.hasAttribute("style")?t.removeAttribute("style"):t.style.display="block":t.removeAttribute("style")})})(),r(),o(),n(),c()}]);
!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.body;let t=null;e.addEventListener("click",e=>{let o=e.target;if(!t)return o=o.closest("[data-popup]"),void(o&&(e.preventDefault(),document.querySelector('[data-popup="#gift"]').style.display="none",t=document.querySelector(o.dataset.popup),t.style.display="block"));(o.closest(".close_icon")||o.closest(".close-btn")||!o.closest(".form-content"))&&(document.querySelector('[data-popup="#gift"]').removeAttribute("style"),t.removeAttribute("style"),t=null)})};var n=()=>{const e=document.body,t=document.querySelector(".popup-menu"),o=document.querySelector(".top-menu"),r=document.querySelector(".fixed-gift");let n=e.clientWidth;const l=()=>{e.addEventListener("click",e=>{let o=e.target;if(n<768){if(o.matches(".close-menu-btn img")||o.matches(".scroll a"))return void t.removeAttribute("style");o=o.closest(".menu-button"),o&&(t.style.display="flex")}}),document.addEventListener("scroll",()=>{const e=document.querySelector(".head").clientHeight;let t=window.scrollY;if(n<768&&t>e)return o.style.position="fixed",o.style.top="0",o.style.left="0",void(r.style.top="70px");o.removeAttribute("style"),r.removeAttribute("style")})};l(),window.addEventListener("resize",()=>{n=e.clientWidth,console.log(n),l()})};(()=>{document.body.addEventListener("click",e=>{const t=document.querySelector(".club-select ul");e.target.closest(".club-select")?t.hasAttribute("style")?t.removeAttribute("style"):t.style.display="block":t.removeAttribute("style")})})(),r(),n()}]);
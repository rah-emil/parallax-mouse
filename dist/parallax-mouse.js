parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IvXu":[function(require,module,exports) {
"use strict";function e(e){var n,t,o,r,a,i=null!==(n=document.querySelectorAll(e.elements))&&void 0!==n?n:console.warn("parallaxMouse: Elements is empty!"),c=null!==(t=e.moveFactor)&&void 0!==t?t:5,l=null!==(o=e.wrap)&&void 0!==o?o:".container",d=(r=e.animate,null!==(a=e.perspective)&&void 0!==a&&a);i.forEach(function(e){d&&(e.style.transformStyle="preserve-3d")}),document.querySelector(l).addEventListener("mousemove",function(e){var n=(0-e.pageX/window.innerWidth*c-c/2+c)/2,t=(0-e.pageY/window.innerHeight*c-c/2+c)/2;i.forEach(function(o){if(o.style.transform="translate(".concat(n,"%, ").concat(t,"%)"),d){var r=(e.pageX-window.pageYOffset-window.innerWidth/2)/window.innerWidth,a=(e.pageY-window.pageXOffset-window.innerHeight/2)/window.innerWidth;o.style.transform+="rotateX(".concat(30*r,"deg) rotateY(").concat(-30*a,"deg) perspective(").concat(d,")")}})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parallaxMouse=e;
},{}]},{},["IvXu"], null)
//# sourceMappingURL=/parallax-mouse.js.map
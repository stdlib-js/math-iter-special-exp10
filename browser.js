// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).iterExp10=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t};var c=n;function l(t,n,r){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&d.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var n,r,e;if(null==t)return s.call(t);r=t[w],n=m(t,w);try{t[w]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[w]=r:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof E?E:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,N=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function G(t){return null!==t&&"object"==typeof t}function H(t){var n,r,e,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!V(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof N||"function"==typeof I?function(t){return H(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?H(t).toLowerCase():n};function L(t){return"function"===B(t)}function M(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),J(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}function Z(t,n){return Q(n)?(m(n,"invalid")&&(t.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(t,n,r){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,r)))throw u;return l(o={},"next",a),l(o,"return",f),q&&L(t[q])&&l(o,q,c),o;function a(){var r;return i?{done:!0}:(r=t.next()).done?(i=!0,r):{value:W(r.value)?n(r.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[q](),n,e)}}var tt=Math.floor,nt=Number.POSITIVE_INFINITY,rt=k.NEGATIVE_INFINITY;function et(t){return t!=t}function ot(t){return t===nt||t===rt}var ut="function"==typeof Uint32Array;var it="function"==typeof Uint32Array?Uint32Array:null;var at,ft="function"==typeof Uint32Array?Uint32Array:void 0;at=function(){var t,n,r;if("function"!=typeof it)return!1;try{n=new it(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(ut&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?ft:function(){throw new Error("not implemented")};var ct=at,lt="function"==typeof Float64Array;var yt="function"==typeof Float64Array?Float64Array:null;var pt,vt="function"==typeof Float64Array?Float64Array:void 0;pt=function(){var t,n,r;if("function"!=typeof yt)return!1;try{n=new yt([1,3.14,-3.14,NaN]),r=n,t=(lt&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint8Array;var dt="function"==typeof Uint8Array?Uint8Array:null;var mt,wt="function"==typeof Uint8Array?Uint8Array:void 0;mt=function(){var t,n,r;if("function"!=typeof dt)return!1;try{n=new dt(n=[1,3.14,-3.14,256,257]),r=n,t=(st&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt=mt,gt="function"==typeof Uint16Array;var At="function"==typeof Uint16Array?Uint16Array:null;var _t,ht="function"==typeof Uint16Array?Uint16Array:void 0;_t=function(){var t,n,r;if("function"!=typeof At)return!1;try{n=new At(n=[1,3.14,-3.14,65536,65537]),r=n,t=(gt&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?ht:function(){throw new Error("not implemented")};var Ot,Ut={uint16:_t,uint8:jt};(Ot=new Ut.uint16(1))[0]=4660;var St,Et,Tt=52===new Ut.uint8(Ot.buffer)[0];!0===Tt?(St=1,Et=0):(St=0,Et=1);var Ft={HIGH:St,LOW:Et},It=new bt(1),Nt=new ct(It.buffer),Pt=Ft.HIGH,xt=Ft.LOW;function Vt(t,n,r,e){return It[0]=t,n[e]=Nt[Pt],n[e+r]=Nt[xt],n}function Gt(t){return Vt(t,[0,0],1,0)}l(Gt,"assign",Vt);var Ht,Bt,Lt=!0===Tt?1:0,Mt=new bt(1),Wt=new ct(Mt.buffer);function kt(t){return Mt[0]=t,Wt[Lt]}!0===Tt?(Ht=1,Bt=0):(Ht=0,Bt=1);var Ct={HIGH:Ht,LOW:Bt},Yt=new bt(1),Rt=new ct(Yt.buffer),Xt=Ct.HIGH,qt=Ct.LOW;function zt(t,n){return Rt[Xt]=t,Rt[qt]=n,Yt[0]}var Dt=[0,0];function Jt(t,n,r,e){return et(t)||ot(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}l((function(t){return Jt(t,[0,0],1,0)}),"assign",Jt);var Kt=[0,0],Qt=[0,0];function Zt(t,n){var r,e,o,u,i,a;return 0===n||0===t||et(t)||ot(t)?t:(Jt(t,Kt,1,0),n+=Kt[1],n+=function(t){var n=kt(t);return(n=(2146435072&n)>>>20)-1023|0}(t=Kt[0]),n<-1074?(o=0,u=t,Gt.assign(o,Dt,1,0),i=Dt[0],i&=2147483647,a=kt(u),zt(i|=a&=2147483648,Dt[1])):n>1023?t<0?rt:nt:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Gt.assign(t,Qt,1,0),r=Qt[0],r&=2148532223,e*zt(r|=n+1023<<20,Qt[1])))}function $t(t){var n,r,e;return et(t)?t:t>308?nt:t<-308?0:(e=n=tt(3.321928094887362*t+.5),t-=.301025390625*n,n=(t-=4605038981195214e-21*n)*function(t){return 0===t?2394.2374120738828:2394.2374120738828+t*(406.7172899368727+t*(11.745273255434405+.040996251979858706*t))}(r=t*t),t=1+Zt(t=n/(function(t){return 0===t?2079.608192860019:2079.608192860019+t*(1272.0927117834513+t*(85.09361608493066+1*t))}(r)-n),1),Zt(t,e))}return function(t){return $(t,$t)}}));
//# sourceMappingURL=browser.js.map

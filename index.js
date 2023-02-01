// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterExp10=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(N,"REGEXP",P);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=P.exec(e.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!x(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(V));var H="function"==typeof y||"object"==typeof I||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function B(t){return"function"===H(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&B(t.next)}function M(t){return"number"==typeof t}var W=Number,k=W.prototype.toString;var C=b();function Y(t){return"object"==typeof t&&(t instanceof W||(C?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function R(t){return M(t)||Y(t)}l(R,"isPrimitive",M),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=B(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),X&&B(t[X])&&l(o,X,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[X](),r,e)}}var $=Math.floor,tt=Number.POSITIVE_INFINITY,rt=W.NEGATIVE_INFINITY;function nt(t){return t!=t}function et(t){return t===tt||t===rt}var ot="function"==typeof Uint32Array;var ut="function"==typeof Uint32Array?Uint32Array:null;var it,at="function"==typeof Uint32Array?Uint32Array:void 0;it=function(){var t,r,n;if("function"!=typeof ut)return!1;try{r=new ut(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(ot&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?at:function(){throw new Error("not implemented")};var ct=it,ft="function"==typeof Float64Array;var lt="function"==typeof Float64Array?Float64Array:null;var yt,pt="function"==typeof Float64Array?Float64Array:void 0;yt=function(){var t,r,n;if("function"!=typeof lt)return!1;try{r=new lt([1,3.14,-3.14,NaN]),n=r,t=(ft&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?pt:function(){throw new Error("not implemented")};var vt=yt,bt="function"==typeof Uint8Array;var st="function"==typeof Uint8Array?Uint8Array:null;var dt,mt="function"==typeof Uint8Array?Uint8Array:void 0;dt=function(){var t,r,n;if("function"!=typeof st)return!1;try{r=new st(r=[1,3.14,-3.14,256,257]),n=r,t=(bt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?mt:function(){throw new Error("not implemented")};var wt=dt,jt="function"==typeof Uint16Array;var gt="function"==typeof Uint16Array?Uint16Array:null;var At,_t="function"==typeof Uint16Array?Uint16Array:void 0;At=function(){var t,r,n;if("function"!=typeof gt)return!1;try{r=new gt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(jt&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?_t:function(){throw new Error("not implemented")};var ht,Ot={uint16:At,uint8:wt};(ht=new Ot.uint16(1))[0]=4660;var Ut,St,Et=52===new Ot.uint8(ht.buffer)[0];!0===Et?(Ut=1,St=0):(Ut=0,St=1);var Tt={HIGH:Ut,LOW:St},Ft=new vt(1),It=new ct(Ft.buffer),Nt=Tt.HIGH,Pt=Tt.LOW;function xt(t,r,n,e){return Ft[0]=t,r[e]=It[Nt],r[e+n]=It[Pt],r}function Vt(t){return xt(t,[0,0],1,0)}l(Vt,"assign",xt);var Gt,Ht,Bt=!0===Et?1:0,Lt=new vt(1),Mt=new ct(Lt.buffer);function Wt(t){return Lt[0]=t,Mt[Bt]}!0===Et?(Gt=1,Ht=0):(Gt=0,Ht=1);var kt={HIGH:Gt,LOW:Ht},Ct=new vt(1),Yt=new ct(Ct.buffer),Rt=kt.HIGH,Xt=kt.LOW;function qt(t,r){return Yt[Rt]=t,Yt[Xt]=r,Ct[0]}var zt=[0,0];function Dt(t,r,n,e){return nt(t)||et(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return Dt(t,[0,0],1,0)}),"assign",Dt);var Jt=[0,0],Kt=[0,0];function Qt(t,r){var n,e,o,u,i,a;return 0===r||0===t||nt(t)||et(t)?t:(Dt(t,Jt,1,0),r+=Jt[1],r+=function(t){var r=Wt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Jt[0]),r<-1074?(o=0,u=t,Vt.assign(o,zt,1,0),i=zt[0],i&=2147483647,a=Wt(u),qt(i|=a&=2147483648,zt[1])):r>1023?t<0?rt:tt:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Vt.assign(t,Kt,1,0),n=Kt[0],n&=2148532223,e*qt(n|=r+1023<<20,Kt[1])))}function Zt(t){var r,n,e;return nt(t)?t:t>308?tt:t<-308?0:(e=r=$(3.321928094887362*t+.5),t-=.301025390625*r,r=(t-=4605038981195214e-21*r)*function(t){return 0===t?2394.2374120738828:2394.2374120738828+t*(406.7172899368727+t*(11.745273255434405+.040996251979858706*t))}(n=t*t),t=1+Qt(t=r/(function(t){return 0===t?2079.608192860019:2079.608192860019+t*(1272.0927117834513+t*(85.09361608493066+1*t))}(n)-r),1),Qt(t,e))}return function(t){return Z(t,Zt)}}));
//# sourceMappingURL=index.js.map

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function o(d,m,l){var p,h,j,f,a;if(!t(d)||r(d))throw new TypeError(i("0P749,Hq",d));if(!t(m)||r(m))throw new TypeError(i("0P74A,Hr",m));if(arguments.length>2){if(!t(l)||r(l))throw new TypeError(i("0P74B,Hu",l));h=l}else h=1;return f=n((m-d)/h),a=-1,e(p={},"next",u),e(p,"return",v),s&&e(p,s,c),p;function u(){return a+=1,j||a>=f?{done:!0}:{value:d+a*h,done:!1}}function v(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return o(d,m,h)}}export{o as default};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function m(d,o,a){var l,u,h,p,j;if(!t(d)||r(d))throw new TypeError(i("invalid argument. First argument must be a number. Value: `%s`.",d));if(!t(o)||r(o))throw new TypeError(i("invalid argument. Second argument must be a number. Value: `%s`.",o));if(arguments.length>2){if(!t(a)||r(a))throw new TypeError(i("invalid argument. Third argument must be a number. Value: `%s`.",a));u=a}else u=1;return p=s((o-d)/u),j=-1,e(l={},"next",b),e(l,"return",f),n&&e(l,n,g),l;function b(){return j+=1,h||j>=p?{done:!0}:{value:d+j*u,done:!1}}function f(e){return h=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return m(d,o,u)}}export{m as default};
//# sourceMappingURL=index.mjs.map

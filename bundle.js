// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterIncrspace=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=P,S=_,x=y;var O=E,V=function(r){var e,t,n;if(null==r)return x.call(r);t=r[S],e=T(r,S);try{r[S]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[S]=t:delete r[S],n},k=b()?V:O,I=Number,A=I.prototype.toString;var F=k,R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=b();var C=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},N=m,B=C;var G=d,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L;var X=function(r){return r!=r},z=P;var U=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&z(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Y=Math.ceil;var D=function(r){return"string"==typeof r},q=String.prototype.valueOf;var H=k,J=function(r){try{return q.call(r),!0}catch(r){return!1}},K=b();var Q=function(r){return"object"==typeof r&&(r instanceof String||(K?J(r):"[object String]"===H(r)))},rr=D,er=Q;var tr=d,nr=function(r){return rr(r)||er(r)},ir=Q;tr(nr,"isPrimitive",D),tr(nr,"isObject",ir);var ar=nr,or=Math.floor;var ur=function(r){return or(r)===r},cr=ur;var fr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&cr(r.length)&&r.length>=0&&r.length<=9007199254740991},sr=Number.POSITIVE_INFINITY,lr=I.NEGATIVE_INFINITY,pr=sr,vr=lr,gr=ur;var dr=function(r){return r<pr&&r>vr&&gr(r)},mr=W.isPrimitive,hr=dr;var br=function(r){return mr(r)&&hr(r)},yr=W.isObject,wr=dr;var Er=function(r){return yr(r)&&wr(r.valueOf())},jr=br,Pr=Er;var _r=d,Tr=function(r){return jr(r)||Pr(r)},Sr=Er;_r(Tr,"isPrimitive",br),_r(Tr,"isObject",Sr);var xr=Tr,Or=W.isPrimitive,Vr=X;var kr=function(r){return Or(r)&&Vr(r)},Ir=W.isObject,Ar=X;var Fr=function(r){return Ir(r)&&Ar(r.valueOf())},Rr=kr,$r=Fr;var Mr=d,Cr=function(r){return Rr(r)||$r(r)},Nr=Fr;Mr(Cr,"isPrimitive",kr),Mr(Cr,"isObject",Nr);var Br=fr,Gr=xr.isPrimitive,Lr=ar.isPrimitive,Zr=Cr.isPrimitive;var Wr=function(r,e,t){var n,i,a;if(!Br(r)&&!Lr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Gr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Lr(r)){if(!Lr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Zr(e)){for(a=i;a<n;a++)if(Zr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Xr=Wr,zr=ar.isPrimitive;var Ur=function(r){if(!zr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Yr=ar.isPrimitive;var Dr=function(r){if(!Yr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},qr=Ur,Hr=Dr,Jr=ar.isPrimitive;var Kr=function(r){return Jr(r)&&r===Hr(r)&&r!==qr(r)},Qr=sr,re=lr;var ee=function(r){return r==r&&r>re&&r<Qr},te=xr.isPrimitive;var ne=function(r){return te(r)&&r>=0},ie=xr.isObject;var ae=function(r){return ie(r)&&r.valueOf()>=0},oe=ne,ue=ae;var ce=d,fe=function(r){return oe(r)||ue(r)},se=ae;ce(fe,"isPrimitive",ne),ce(fe,"isObject",se);var le=fe.isPrimitive,pe=ar.isPrimitive;var ve=function(r,e){var t,n;if(!pe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!le(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ge=xr.isPrimitive,de=ar.isPrimitive;var me=function(r,e,t){var n,i;if(!de(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!de(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ge(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},he=ve,be=me;var ye=function(r,e,t){var n=!1,i=e-r.length;return i<0||(be(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+he("0",i):he("0",i)+r,n&&(r="-"+r)),r},we=Kr,Ee=Dr,je=Ur,Pe=ee,_e=W.isPrimitive,Te=ye;var Se=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Pe(n)){if(!_e(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Te(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Te(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=we(r.specifier)?Ee(t):je(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},xe=ar.isPrimitive,Oe=/[-\/\\^$*+?.()|[\]{}]/g;var Ve=function(r){var e,t;if(!xe(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Oe,"\\$&"):(e=(e=r.substring(1,t)).replace(Oe,"\\$&"),r=r[0]+e+r.substring(t))},ke=/./;var Ie=function(r){return"boolean"==typeof r},Ae=Boolean.prototype.toString;var Fe=k,Re=function(r){try{return Ae.call(r),!0}catch(r){return!1}},$e=b();var Me=function(r){return"object"==typeof r&&(r instanceof Boolean||($e?Re(r):"[object Boolean]"===Fe(r)))},Ce=Ie,Ne=Me;var Be=d,Ge=function(r){return Ce(r)||Ne(r)},Le=Me;Be(Ge,"isPrimitive",Ie),Be(Ge,"isObject",Le);var Ze=Ge;var We=function(){return new Function("return this;")()},Xe="object"==typeof self?self:null,ze="object"==typeof window?window:null,Ue="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ye="object"==typeof Ue?Ue:null;module.exports=Ye;var De=Ze.isPrimitive,qe=We,He=Xe,Je=ze,Ke=r(Object.freeze({__proto__:null}));var Qe=function(r){if(arguments.length){if(!De(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return qe()}if(He)return He;if(Je)return Je;if(Ke)return Ke;throw new Error("unexpected error. Unable to resolve global object.")},rt=Qe(),et=rt.document&&rt.document.childNodes,tt=Int8Array,nt=ke,it=et,at=tt;var ot=function(){return"function"==typeof nt||"object"==typeof at||"function"==typeof it};var ut=function(){return/^\s*function\s*([^(]*)/i},ct=ut;d(ct,"REGEXP",ut());var ft=ct,st=k;var lt=Array.isArray?Array.isArray:function(r){return"[object Array]"===st(r)};var pt=function(r){return null!==r&&"object"==typeof r};d(pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pt));var vt=pt;var gt=k,dt=ft.REGEXP,mt=function(r){return vt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ht=function(r){var e,t,n;if(("Object"===(t=gt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dt.exec(n.toString()))return e[1]}return mt(r)?"Buffer":t},bt=ht;var yt=ht;var wt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?bt(r).toLowerCase():e},Et=function(r){return yt(r).toLowerCase()},jt=ot()?Et:wt;var Pt=function(r){return"function"===jt(r)},_t=RegExp.prototype.exec;var Tt=k,St=function(r){try{return _t.call(r),!0}catch(r){return!1}},xt=b();var Ot=Ve,Vt=Pt,kt=ar.isPrimitive,It=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?St(r):"[object RegExp]"===Tt(r)))};var At=Kr,Ft=Dr,Rt=Ur,$t=function(r,e,t){if(!kt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(kt(e))e=Ot(e),e=new RegExp(e,"g");else if(!It(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!kt(t)&&!Vt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Mt=ee,Ct=W.isPrimitive,Nt=function(r){return Math.abs(r)},Bt=/e\+(\d)$/,Gt=/e-(\d)$/,Lt=/^(\d+)$/,Zt=/^(\d+)e/,Wt=/\.0$/,Xt=/\.0*e/,zt=/(\..*[^0])0*e/;var Ut=function(r){var e,t,n=parseFloat(r.arg);if(!Mt(n)){if(!Ct(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Nt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$t(t,zt,"$1e"),t=$t(t,Xt,"e"),t=$t(t,Wt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Bt,"e+0$1"),t=$t(t,Gt,"e-0$1"),r.alternate&&(t=$t(t,Lt,"$1."),t=$t(t,Zt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=At(r.specifier)?Ft(t):Rt(t)},Yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Dt=ve;var qt=ar.isPrimitive,Ht=Xr,Jt=X,Kt=Se,Qt=Ut,rn=function(r){var e,t,n,i,a;for(e=0,n=[],a=Yt.exec(r);a;)(t=r.slice(e,Yt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Yt.lastIndex,a=Yt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},en=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Dt(" ",n):Dt(" ",n)+r},tn=ye,nn=String.fromCharCode;var an=function(r){var e,t,n,i,a,o,u,c,f;if(!qt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=rn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],qt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ht(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Jt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Jt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Kt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Jt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Jt(a)?String(n.arg):nn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=tn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=en(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},on=d,un=W.isPrimitive,cn=X,fn=U,sn=Y,ln=an;var pn=function r(e,t,n){var i,a,o,u,c;if(!un(e)||cn(e))throw new TypeError(ln("invalid argument. First argument must be a number. Value: `%s`.",e));if(!un(t)||cn(t))throw new TypeError(ln("invalid argument. Second argument must be a number. Value: `%s`.",t));if(arguments.length>2){if(!un(n)||cn(n))throw new TypeError(ln("invalid argument. Third argument must be a number. Value: `%s`.",n));a=n}else a=1;return u=sn((t-e)/a),c=-1,on(i={},"next",f),on(i,"return",s),fn&&on(i,fn,l),i;function f(){return c+=1,o||c>=u?{done:!0}:{value:e+c*a,done:!1}}function s(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(e,t,a)}};return pn}));
//# sourceMappingURL=bundle.js.map

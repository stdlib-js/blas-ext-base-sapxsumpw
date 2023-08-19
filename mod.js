// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var f=t;var c="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var b,v="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,o,n,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(n=r)&&_.call(n,a);try{r[v]=void 0}catch(t){return p.call(r)}return o=p.call(r),t?r[v]=e:delete r[v],o}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null;var j,w="function"==typeof Float32Array?Float32Array:void 0;j=function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h=new j(1);var S="function"==typeof c?c:function(r){return h[0]=r,h[0]},A=Math.floor;function F(r,t,e,o,n){var a,l,u,i,f,c,y,p,_,b,v,d,m;if(r<=0)return 0;if(1===r||0===o)return S(t+e[n]);if(a=n,r<8){for(v=0,m=0;m<r;m++)v=S(v+S(t+e[a])),a+=o;return v}if(r<=128){for(l=S(t+e[a]),u=S(t+e[a+o]),i=S(t+e[a+2*o]),f=S(t+e[a+3*o]),c=S(t+e[a+4*o]),y=S(t+e[a+5*o]),p=S(t+e[a+6*o]),_=S(t+e[a+7*o]),a+=8*o,b=r%8,m=8;m<r-b;m+=8)l=S(l+S(t+e[a])),u=S(u+S(t+e[a+o])),i=S(i+S(t+e[a+2*o])),f=S(f+S(t+e[a+3*o])),c=S(c+S(t+e[a+4*o])),y=S(y+S(t+e[a+5*o])),p=S(p+S(t+e[a+6*o])),_=S(_+S(t+e[a+7*o])),a+=8*o;for(v=S(S(S(l+u)+S(i+f))+S(S(c+y)+S(p+_)));m<r;m++)v=S(v+S(t+e[a])),a+=o;return v}return d=A(r/2),S(F(d-=d%8,t,e,o,a)+F(r-d,t,e,o,a+d*o))}function O(r,t,e,o){var n,a,l;if(r<=0)return 0;if(1===r||0===o)return S(t+e[0]);if(n=o<0?(1-r)*o:0,r<8){for(a=0,l=0;l<r;l++)a=S(a+S(t+e[n])),n+=o;return a}return F(r,t,e,o,n)}f(O,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:F});export{O as default,F as ndarray};
//# sourceMappingURL=mod.js.map

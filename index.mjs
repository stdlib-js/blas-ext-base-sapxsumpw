// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function n(r,i,s,f,o){var a,d,m,u,l,p,j,b,h,c,v,x,y;if(r<=0)return 0;if(1===r||0===f)return e(i+s[o]);if(a=o,r<8){for(v=0,y=0;y<r;y++)v=e(v+e(i+s[a])),a+=f;return v}if(r<=128){for(d=e(i+s[a]),m=e(i+s[a+f]),u=e(i+s[a+2*f]),l=e(i+s[a+3*f]),p=e(i+s[a+4*f]),j=e(i+s[a+5*f]),b=e(i+s[a+6*f]),h=e(i+s[a+7*f]),a+=8*f,c=r%8,y=8;y<r-c;y+=8)d=e(d+e(i+s[a])),m=e(m+e(i+s[a+f])),u=e(u+e(i+s[a+2*f])),l=e(l+e(i+s[a+3*f])),p=e(p+e(i+s[a+4*f])),j=e(j+e(i+s[a+5*f])),b=e(b+e(i+s[a+6*f])),h=e(h+e(i+s[a+7*f])),a+=8*f;for(v=e(e(e(d+m)+e(u+l))+e(e(p+j)+e(b+h)));y<r;y++)v=e(v+e(i+s[a])),a+=f;return v}return x=t(r/2),e(n(x-=x%8,i,s,f,a)+n(r-x,i,s,f,a+x*f))}function i(r,t,i,s){var f,o,a;if(r<=0)return 0;if(1===r||0===s)return e(t+i[0]);if(f=s<0?(1-r)*s:0,r<8){for(o=0,a=0;a<r;a++)o=e(o+e(t+i[f])),f+=s;return o}return n(r,t,i,s,f)}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map

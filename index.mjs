// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function i(r,s,f,o,a){var d,m,u,l,p,j,v,b,h,c,x,y,g;if(r<=0)return 0;if(1===r||0===o)return e(s+f[a]);if(d=a,r<8){for(x=0,g=0;g<r;g++)x=e(x+e(s+f[d])),d+=o;return x}if(r<=n){for(m=e(s+f[d]),u=e(s+f[d+o]),l=e(s+f[d+2*o]),p=e(s+f[d+3*o]),j=e(s+f[d+4*o]),v=e(s+f[d+5*o]),b=e(s+f[d+6*o]),h=e(s+f[d+7*o]),d+=8*o,c=r%8,g=8;g<r-c;g+=8)m=e(m+e(s+f[d])),u=e(u+e(s+f[d+o])),l=e(l+e(s+f[d+2*o])),p=e(p+e(s+f[d+3*o])),j=e(j+e(s+f[d+4*o])),v=e(v+e(s+f[d+5*o])),b=e(b+e(s+f[d+6*o])),h=e(h+e(s+f[d+7*o])),d+=8*o;for(x=e(e(e(m+u)+e(l+p))+e(e(j+v)+e(b+h)));g<r;g++)x=e(x+e(s+f[d])),d+=o;return x}return y=t(r/2),e(i(y-=y%8,s,f,o,d)+i(r-y,s,f,o,d+y*o))}function s(r,t,n,s){var f,o,a;if(r<=0)return 0;if(1===r||0===s)return e(t+n[0]);if(f=s<0?(1-r)*s:0,r<8){for(o=0,a=0;a<r;a++)o=e(o+e(t+n[f])),f+=s;return o}return i(r,t,n,s,f)}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map

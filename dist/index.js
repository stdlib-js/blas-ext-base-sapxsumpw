"use strict";var F=function(o,u){return function(){return u||o((u={exports:{}}).exports,u),u.exports}};var R=F(function(U,C){
var r=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-floor/dist'),g=128;function O(o,u,n,e,i){var v,q,c,t,w,y,j,a,E,B,s,m,f;if(o<=0)return 0;if(o===1||e===0)return r(u+n[i]);if(v=i,o<8){for(s=0,f=0;f<o;f++)s=r(s+r(u+n[v])),v+=e;return s}if(o<=g){for(q=r(u+n[v]),c=r(u+n[v+e]),t=r(u+n[v+2*e]),w=r(u+n[v+3*e]),y=r(u+n[v+4*e]),j=r(u+n[v+5*e]),a=r(u+n[v+6*e]),E=r(u+n[v+7*e]),v+=8*e,B=o%8,f=8;f<o-B;f+=8)q=r(q+r(u+n[v])),c=r(c+r(u+n[v+e])),t=r(t+r(u+n[v+2*e])),w=r(w+r(u+n[v+3*e])),y=r(y+r(u+n[v+4*e])),j=r(j+r(u+n[v+5*e])),a=r(a+r(u+n[v+6*e])),E=r(E+r(u+n[v+7*e])),v+=8*e;for(s=r(r(r(q+c)+r(t+w))+r(r(y+j)+r(a+E))),f;f<o;f++)s=r(s+r(u+n[v])),v+=e;return s}return m=b(o/2),m-=m%8,r(O(m,u,n,e,v)+O(o-m,u,n,e,v+m*e))}C.exports=O
});var K=F(function(V,I){
var T=require('@stdlib/number-float64-base-to-float32/dist'),k=R();function z(o,u,n,e){var i,v,q;if(o<=0)return 0;if(o===1||e===0)return T(u+n[0]);if(e<0?i=(1-o)*e:i=0,o<8){for(v=0,q=0;q<o;q++)v=T(v+T(u+n[i])),i+=e;return v}return k(o,u,n,e,i)}I.exports=z
});var S=F(function(W,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=K(),D=R();A(L,"ndarray",D);M.exports=L
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=S(),_,Z=H(G(__dirname,"./native.js"));J(Z)?_=P:_=Z;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

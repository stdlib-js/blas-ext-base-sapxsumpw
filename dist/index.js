"use strict";var E=function(o,u){return function(){return u||o((u={exports:{}}).exports,u),u.exports}};var R=E(function(U,C){
var r=require('@stdlib/number-float64-base-to-float32/dist'),Z=require('@stdlib/math-base-special-floor/dist'),b=128;function O(o,u,n,e,T){var v,i,m,c,t,y,w,a,j,B,s,q,f;if(o<=0)return 0;if(v=T,e===0)return r(o*r(u+n[v]));if(o<8){for(s=0,f=0;f<o;f++)s=r(s+r(u+n[v])),v+=e;return s}if(o<=b){for(i=r(u+n[v]),m=r(u+n[v+e]),c=r(u+n[v+2*e]),t=r(u+n[v+3*e]),y=r(u+n[v+4*e]),w=r(u+n[v+5*e]),a=r(u+n[v+6*e]),j=r(u+n[v+7*e]),v+=8*e,B=o%8,f=8;f<o-B;f+=8)i=r(i+r(u+n[v])),m=r(m+r(u+n[v+e])),c=r(c+r(u+n[v+2*e])),t=r(t+r(u+n[v+3*e])),y=r(y+r(u+n[v+4*e])),w=r(w+r(u+n[v+5*e])),a=r(a+r(u+n[v+6*e])),j=r(j+r(u+n[v+7*e])),v+=8*e;for(s=r(r(r(i+m)+r(c+t))+r(r(y+w)+r(a+j))),f;f<o;f++)s=r(s+r(u+n[v])),v+=e;return s}return q=Z(o/2),q-=q%8,r(O(q,u,n,e,v)+O(o-q,u,n,e,v+q*e))}C.exports=O
});var I=E(function(V,F){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=R();function z(o,u,n,e){return k(o,u,n,e,g(o,e))}F.exports=z
});var M=E(function(W,L){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),D=R();A(K,"ndarray",D);L.exports=K
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=M(),_,S=H(G(__dirname,"./native.js"));J(S)?_=P:_=S;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=i(function(k,p){
var n=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function y(e,r,a,s,c){return e<=0?0:n(n(e*r)+d(e,a,s,c))}p.exports=y
});var q=i(function(z,v){
var w=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,a,s){return j(e,r,a,s,w(e,s))}v.exports=l
});var x=i(function(A,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),_=u();R(o,"ndarray",_);m.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),t,f=O(E(__dirname,"./native.js"));b(f)?t=g:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

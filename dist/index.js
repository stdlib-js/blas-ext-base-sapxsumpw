"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(k,p){
var n=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function y(r,e,s,a,c){return r<=0?0:n(n(r*e)+d(r,s,a,c))}p.exports=y
});var q=i(function(z,v){
var w=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(r,e,s,a){return j(r,e,s,a,w(r,a))}v.exports=l
});var x=i(function(A,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),_=u();R(o,"ndarray",_);m.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),t,f=O(E(__dirname,"./native.js"));b(f)?t=g:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

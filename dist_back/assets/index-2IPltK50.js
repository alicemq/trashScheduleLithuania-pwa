const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=['assets/AboutView-D9EsP4K4.js','assets/AboutView-CSIvawM9.css','assets/Changelog-CpP-1omu.js','assets/Changelog-tn0RQdqM.css'])))=>i.map(i=>d[i]);
(function(){
const t=document.createElement('link').relList;if(t&&t.supports&&t.supports('modulepreload')){
return
}for(const i of document.querySelectorAll('link[rel="modulepreload"]')){
s(i)
}new MutationObserver(i=>{
for(const o of i){
if(o.type==='childList'){
for(const a of o.addedNodes){
a.tagName==='LINK'&&a.rel==='modulepreload'&&s(a)
}
}
}
}).observe(document,{childList:!0,subtree:!0});function n(i){
const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==='use-credentials'?o.credentials='include':i.crossOrigin==='anonymous'?o.credentials='omit':o.credentials='same-origin',o
}function s(i){
if(i.ep){
return
}i.ep=!0;const o=n(i);fetch(i.href,o)
}
})()/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Il(e){
const t=Object.create(null);for(const n of e.split(',')){
t[n]=1
}return n=>n in t
}const Nt={},Js=[],on=()=>{},eb=()=>!1,yo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Pl=e=>e.startsWith('onUpdate:'),oe=Object.assign,Ml=(e,t)=>{
const n=e.indexOf(t);n>-1&&e.splice(n,1)
},nb=Object.prototype.hasOwnProperty,Tt=(e,t)=>nb.call(e,t),st=Array.isArray,Zs=e=>Ao(e)==='[object Map]',Fd=e=>Ao(e)==='[object Set]',ot=e=>typeof e==='function',jt=e=>typeof e==='string',Vn=e=>typeof e==='symbol',xt=e=>e!==null&&typeof e==='object',jd=e=>(xt(e)||ot(e))&&ot(e.then)&&ot(e.catch),Bd=Object.prototype.toString,Ao=e=>Bd.call(e),sb=e=>Ao(e).slice(8,-1),Wd=e=>Ao(e)==='[object Object]',kl=e=>jt(e)&&e!=='NaN'&&e[0]!=='-'&&''+parseInt(e,10)===e,Mi=Il(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),To=e=>{
const t=Object.create(null);return n=>t[n]||(t[n]=e(n))
},ib=/-(\w)/g,Ve=To(e=>e.replace(ib,(t,n)=>n?n.toUpperCase():'')),rb=/\B([A-Z])/g,As=To(e=>e.replace(rb,'-$1').toLowerCase()),wo=To(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ca=To(e=>e?`on${wo(e)}`:''),In=(e,t)=>!Object.is(e,t),qr=(e,...t)=>{
for(let n=0;n<e.length;n++){
e[n](...t)
}
},Ud=(e,t,n,s=!1)=>{
Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})
},rl=e=>{
const t=parseFloat(e);return isNaN(t)?e:t
};let Xu;const So=()=>Xu||(Xu=typeof globalThis<'u'?globalThis:typeof self<'u'?self:typeof window<'u'?window:typeof global<'u'?global:{});function Vl(e){
if(st(e)){
const t={};for(let n=0;n<e.length;n++){
const s=e[n],i=jt(s)?cb(s):Vl(s);if(i){
for(const o in i){
t[o]=i[o]
}
}
}return t
}else if(jt(e)||xt(e)){
return e
}
}const ob=/;(?![^(]*\))/g,ab=/:([^]+)/,lb=/\/\*[^]*?\*\//g;function cb(e){
const t={};return e.replace(lb,'').split(ob).forEach(n=>{
if(n){
const s=n.split(ab);s.length>1&&(t[s[0].trim()]=s[1].trim())
}
}),t
}function Hl(e){
let t='';if(jt(e)){
t=e
}else if(st(e)){
for(let n=0;n<e.length;n++){
const s=Hl(e[n]);s&&(t+=s+' ')
}
}else if(xt(e)){
for(const n in e){
e[n]&&(t+=n+' ')
}
}return t.trim()
}const ub='itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',fb=Il(ub);function Kd(e){
return!!e||e===''
}const qd=e=>!!(e&&e.__v_isRef===!0),db=e=>jt(e)?e:e==null?'':st(e)||xt(e)&&(e.toString===Bd||!ot(e.toString))?qd(e)?db(e.value):JSON.stringify(e,Yd,2):String(e),Yd=(e,t)=>qd(t)?Yd(e,t.value):Zs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[Na(s,o)+' =>']=i,n),{})}:Fd(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Na(n))}:Vn(t)?Na(t):xt(t)&&!st(t)&&!Wd(t)?String(t):t,Na=(e,t='')=>{
let n;return Vn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e
}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class hb{
constructor(t=!1){
this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)
}get active(){
return this._active
}pause(){
if(this._active){
this._isPaused=!0;let t,n;if(this.scopes){
for(t=0,n=this.scopes.length;t<n;t++){
this.scopes[t].pause()
}
}for(t=0,n=this.effects.length;t<n;t++){
this.effects[t].pause()
}
}
}resume(){
if(this._active&&this._isPaused){
this._isPaused=!1;let t,n;if(this.scopes){
for(t=0,n=this.scopes.length;t<n;t++){
this.scopes[t].resume()
}
}for(t=0,n=this.effects.length;t<n;t++){
this.effects[t].resume()
}
}
}run(t){
if(this._active){
const n=Oe;try{
return Oe=this,t()
}finally{
Oe=n
}
}
}on(){
Oe=this
}off(){
Oe=this.parent
}stop(t){
if(this._active){
this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++){
this.effects[n].stop()
}for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++){
this.cleanups[n]()
}if(this.cleanups.length=0,this.scopes){
for(n=0,s=this.scopes.length;n<s;n++){
this.scopes[n].stop(!0)
}this.scopes.length=0
}if(!this.detached&&this.parent&&!t){
const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)
}this.parent=void 0
}
}
}function pb(){
return Oe
}let Rt;const Da=new WeakSet;class zd{
constructor(t){
this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)
}pause(){
this.flags|=64
}resume(){
this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))
}notify(){
this.flags&2&&!(this.flags&32)||this.flags&8||Xd(this)
}run(){
if(!(this.flags&1)){
return this.fn()
}this.flags|=2,Qu(this),Qd(this);const t=Rt,n=qe;Rt=this,qe=!0;try{
return this.fn()
}finally{
Jd(this),Rt=t,qe=n,this.flags&=-3
}
}stop(){
if(this.flags&1){
for(let t=this.deps;t;t=t.nextDep){
Bl(t)
}this.deps=this.depsTail=void 0,Qu(this),this.onStop&&this.onStop(),this.flags&=-2
}
}trigger(){
this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()
}runIfDirty(){
ol(this)&&this.run()
}get dirty(){
return ol(this)
}
}let Gd=0,ki,Vi;function Xd(e,t=!1){
if(e.flags|=8,t){
e.next=Vi,Vi=e;return
}e.next=ki,ki=e
}function Fl(){
Gd++
}function jl(){
if(--Gd>0){
return
}if(Vi){
let t=Vi;for(Vi=void 0;t;){
const n=t.next;t.next=void 0,t.flags&=-9,t=n
}
}let e;for(;ki;){
let t=ki;for(ki=void 0;t;){
const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1){
try{
t.trigger()
}catch(s){
e||(e=s)
}
}t=n
}
}if(e){
throw e
}
}function Qd(e){
for(let t=e.deps;t;t=t.nextDep){
t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t
}
}function Jd(e){
let t,n=e.depsTail,s=n;for(;s;){
const i=s.prevDep;s.version===-1?(s===n&&(n=i),Bl(s),mb(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i
}e.deps=t,e.depsTail=n
}function ol(e){
for(let t=e.deps;t;t=t.nextDep){
if(t.dep.version!==t.version||t.dep.computed&&(Zd(t.dep.computed)||t.dep.version!==t.version)){
return!0
}
}return!!e._dirty
}function Zd(e){
if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qi)){
return
}e.globalVersion=qi;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ol(e)){
e.flags&=-3;return
}const n=Rt,s=qe;Rt=e,qe=!0;try{
Qd(e);const i=e.fn(e._value);(t.version===0||In(i,e._value))&&(e._value=i,t.version++)
}catch(i){
throw t.version++,i
}finally{
Rt=n,qe=s,Jd(e),e.flags&=-3
}
}function Bl(e,t=!1){
const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){
n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep){
Bl(o,!0)
}
}!t&&!--n.sc&&n.map&&n.map.delete(n.key)
}function mb(e){
const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)
}let qe=!0;const th=[];function Hn(){
th.push(qe),qe=!1
}function Fn(){
const e=th.pop();qe=e===void 0?!0:e
}function Qu(e){
const{cleanup:t}=e;if(e.cleanup=void 0,t){
const n=Rt;Rt=void 0;try{
t()
}finally{
Rt=n
}
}
}let qi=0;class _b{
constructor(t,n){
this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0
}
}class Wl{
constructor(t){
this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0
}track(t){
if(!Rt||!qe||Rt===this.computed){
return
}let n=this.activeLink;if(n===void 0||n.sub!==Rt){
n=this.activeLink=new _b(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,eh(n)
}else if(n.version===-1&&(n.version=this.version,n.nextDep)){
const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=s)
}return n
}trigger(t){
this.version++,qi++,this.notify(t)
}notify(t){
Fl();try{
for(let n=this.subs;n;n=n.prevSub){
n.sub.notify()&&n.sub.dep.notify()
}
}finally{
jl()
}
}
}function eh(e){
if(e.dep.sc++,e.sub.flags&4){
const t=e.dep.computed;if(t&&!e.dep.subs){
t.flags|=20;for(let s=t.deps;s;s=s.nextDep){
eh(s)
}
}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e
}
}const al=new WeakMap,ds=Symbol(''),ll=Symbol(''),Yi=Symbol('');function ee(e,t,n){
if(qe&&Rt){
let s=al.get(e);s||al.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Wl),i.map=s,i.key=n),i.track()
}
}function _n(e,t,n,s,i,o){
const a=al.get(e);if(!a){
qi++;return
}const c=f=>{
f&&f.trigger()
};if(Fl(),t==='clear'){
a.forEach(c)
}else{
const f=st(e),h=f&&kl(n);if(f&&n==='length'){
const d=Number(s);a.forEach((m,v)=>{
(v==='length'||v===Yi||!Vn(v)&&v>=d)&&c(m)
})
}else {
switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(Yi)),t){
case'add':f?h&&c(a.get('length')):(c(a.get(ds)),Zs(e)&&c(a.get(ll)));break;case'delete':f||(c(a.get(ds)),Zs(e)&&c(a.get(ll)));break;case'set':Zs(e)&&c(a.get(ds));break
}
}
}jl()
}function js(e){
const t=At(e);return t===e?t:(ee(t,'iterate',Yi),Me(e)?t:t.map(ne))
}function Oo(e){
return ee(e=At(e),'iterate',Yi),e
}const gb={__proto__:null,[Symbol.iterator](){
return Ra(this,Symbol.iterator,ne)
},concat(...e){
return js(this).concat(...e.map(t=>st(t)?js(t):t))
},entries(){
return Ra(this,'entries',e=>(e[1]=ne(e[1]),e))
},every(e,t){
return hn(this,'every',e,t,void 0,arguments)
},filter(e,t){
return hn(this,'filter',e,t,n=>n.map(ne),arguments)
},find(e,t){
return hn(this,'find',e,t,ne,arguments)
},findIndex(e,t){
return hn(this,'findIndex',e,t,void 0,arguments)
},findLast(e,t){
return hn(this,'findLast',e,t,ne,arguments)
},findLastIndex(e,t){
return hn(this,'findLastIndex',e,t,void 0,arguments)
},forEach(e,t){
return hn(this,'forEach',e,t,void 0,arguments)
},includes(...e){
return La(this,'includes',e)
},indexOf(...e){
return La(this,'indexOf',e)
},join(e){
return js(this).join(e)
},lastIndexOf(...e){
return La(this,'lastIndexOf',e)
},map(e,t){
return hn(this,'map',e,t,void 0,arguments)
},pop(){
return Ni(this,'pop')
},push(...e){
return Ni(this,'push',e)
},reduce(e,...t){
return Ju(this,'reduce',e,t)
},reduceRight(e,...t){
return Ju(this,'reduceRight',e,t)
},shift(){
return Ni(this,'shift')
},some(e,t){
return hn(this,'some',e,t,void 0,arguments)
},splice(...e){
return Ni(this,'splice',e)
},toReversed(){
return js(this).toReversed()
},toSorted(e){
return js(this).toSorted(e)
},toSpliced(...e){
return js(this).toSpliced(...e)
},unshift(...e){
return Ni(this,'unshift',e)
},values(){
return Ra(this,'values',ne)
}};function Ra(e,t,n){
const s=Oo(e),i=s[t]();return s!==e&&!Me(e)&&(i._next=i.next,i.next=()=>{
const o=i._next();return o.value&&(o.value=n(o.value)),o
}),i
}const Eb=Array.prototype;function hn(e,t,n,s,i,o){
const a=Oo(e),c=a!==e&&!Me(e),f=a[t];if(f!==Eb[t]){
const m=f.apply(e,o);return c?ne(m):m
}let h=n;a!==e&&(c?h=function(m,v){
return n.call(this,ne(m),v,e)
}:n.length>2&&(h=function(m,v){
return n.call(this,m,v,e)
}));const d=f.call(a,h,s);return c&&i?i(d):d
}function Ju(e,t,n,s){
const i=Oo(e);let o=n;return i!==e&&(Me(e)?n.length>3&&(o=function(a,c,f){
return n.call(this,a,c,f,e)
}):o=function(a,c,f){
return n.call(this,a,ne(c),f,e)
}),i[t](o,...s)
}function La(e,t,n){
const s=At(e);ee(s,'iterate',Yi);const i=s[t](...n);return(i===-1||i===!1)&&ql(n[0])?(n[0]=At(n[0]),s[t](...n)):i
}function Ni(e,t,n=[]){
Hn(),Fl();const s=At(e)[t].apply(e,n);return jl(),Fn(),s
}const vb=Il('__proto__,__v_isRef,__isVue'),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=='arguments'&&e!=='caller').map(e=>Symbol[e]).filter(Vn));function bb(e){
Vn(e)||(e=String(e));const t=At(this);return ee(t,'has',e),t.hasOwnProperty(e)
}class sh{
constructor(t=!1,n=!1){
this._isReadonly=t,this._isShallow=n
}get(t,n,s){
if(n==='__v_skip'){
return t.__v_skip
}const i=this._isReadonly,o=this._isShallow;if(n==='__v_isReactive'){
return!i
}if(n==='__v_isReadonly'){
return i
}if(n==='__v_isShallow'){
return o
}if(n==='__v_raw'){
return s===(i?o?Rb:ah:o?oh:rh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0
}const a=st(t);if(!i){
let f;if(a&&(f=gb[n])){
return f
}if(n==='hasOwnProperty'){
return bb
}
}const c=Reflect.get(t,n,re(t)?t:s);return(Vn(n)?nh.has(n):vb(n))||(i||ee(t,'get',n),o)?c:re(c)?a&&kl(n)?c:c.value:xt(c)?i?ch(c):Co(c):c
}
}class ih extends sh{
constructor(t=!1){
super(!1,t)
}set(t,n,s,i){
let o=t[n];if(!this._isShallow){
const f=ms(o);if(!Me(s)&&!ms(s)&&(o=At(o),s=At(s)),!st(t)&&re(o)&&!re(s)){
return f?!1:(o.value=s,!0)
}
}const a=st(t)&&kl(n)?Number(n)<t.length:Tt(t,n),c=Reflect.set(t,n,s,re(t)?t:i);return t===At(i)&&(a?In(s,o)&&_n(t,'set',n,s):_n(t,'add',n,s)),c
}deleteProperty(t,n){
const s=Tt(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&_n(t,'delete',n,void 0),i
}has(t,n){
const s=Reflect.has(t,n);return(!Vn(n)||!nh.has(n))&&ee(t,'has',n),s
}ownKeys(t){
return ee(t,'iterate',st(t)?'length':ds),Reflect.ownKeys(t)
}
}class yb extends sh{
constructor(t=!1){
super(!0,t)
}set(t,n){
return!0
}deleteProperty(t,n){
return!0
}
}const Ab=new ih,Tb=new yb,wb=new ih(!0);const cl=e=>e,Pr=e=>Reflect.getPrototypeOf(e);function Sb(e,t,n){
return function(...s){
const i=this.__v_raw,o=At(i),a=Zs(o),c=e==='entries'||e===Symbol.iterator&&a,f=e==='keys'&&a,h=i[e](...s),d=n?cl:t?ul:ne;return!t&&ee(o,'iterate',f?ll:ds),{next(){
const{value:m,done:v}=h.next();return v?{value:m,done:v}:{value:c?[d(m[0]),d(m[1])]:d(m),done:v}
},[Symbol.iterator](){
return this
}}
}
}function Mr(e){
return function(...t){
return e==='delete'?!1:e==='clear'?void 0:this
}
}function Ob(e,t){
const n={get(i){
const o=this.__v_raw,a=At(o),c=At(i);e||(In(i,c)&&ee(a,'get',i),ee(a,'get',c));const{has:f}=Pr(a),h=t?cl:e?ul:ne;if(f.call(a,i)){
return h(o.get(i))
}if(f.call(a,c)){
return h(o.get(c))
}o!==a&&o.get(i)
},get size(){
const i=this.__v_raw;return!e&&ee(At(i),'iterate',ds),Reflect.get(i,'size',i)
},has(i){
const o=this.__v_raw,a=At(o),c=At(i);return e||(In(i,c)&&ee(a,'has',i),ee(a,'has',c)),i===c?o.has(i):o.has(i)||o.has(c)
},forEach(i,o){
const a=this,c=a.__v_raw,f=At(c),h=t?cl:e?ul:ne;return!e&&ee(f,'iterate',ds),c.forEach((d,m)=>i.call(o,h(d),h(m),a))
}};return oe(n,e?{add:Mr('add'),set:Mr('set'),delete:Mr('delete'),clear:Mr('clear')}:{add(i){
!t&&!Me(i)&&!ms(i)&&(i=At(i));const o=At(this);return Pr(o).has.call(o,i)||(o.add(i),_n(o,'add',i,i)),this
},set(i,o){
!t&&!Me(o)&&!ms(o)&&(o=At(o));const a=At(this),{has:c,get:f}=Pr(a);let h=c.call(a,i);h||(i=At(i),h=c.call(a,i));const d=f.call(a,i);return a.set(i,o),h?In(o,d)&&_n(a,'set',i,o):_n(a,'add',i,o),this
},delete(i){
const o=At(this),{has:a,get:c}=Pr(o);let f=a.call(o,i);f||(i=At(i),f=a.call(o,i)),c&&c.call(o,i);const h=o.delete(i);return f&&_n(o,'delete',i,void 0),h
},clear(){
const i=At(this),o=i.size!==0,a=i.clear();return o&&_n(i,'clear',void 0,void 0),a
}}),['keys','values','entries',Symbol.iterator].forEach(i=>{
n[i]=Sb(i,e,t)
}),n
}function Ul(e,t){
const n=Ob(e,t);return(s,i,o)=>i==='__v_isReactive'?!e:i==='__v_isReadonly'?e:i==='__v_raw'?s:Reflect.get(Tt(n,i)&&i in s?n:s,i,o)
}const Cb={get:Ul(!1,!1)},Nb={get:Ul(!1,!0)},Db={get:Ul(!0,!1)};const rh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Rb=new WeakMap;function Lb(e){
switch(e){
case'Object':case'Array':return 1;case'Map':case'Set':case'WeakMap':case'WeakSet':return 2;default:return 0
}
}function $b(e){
return e.__v_skip||!Object.isExtensible(e)?0:Lb(sb(e))
}function Co(e){
return ms(e)?e:Kl(e,!1,Ab,Cb,rh)
}function lh(e){
return Kl(e,!1,wb,Nb,oh)
}function ch(e){
return Kl(e,!0,Tb,Db,ah)
}function Kl(e,t,n,s,i){
if(!xt(e)||e.__v_raw&&!(t&&e.__v_isReactive)){
return e
}const o=i.get(e);if(o){
return o
}const a=$b(e);if(a===0){
return e
}const c=new Proxy(e,a===2?s:n);return i.set(e,c),c
}function ti(e){
return ms(e)?ti(e.__v_raw):!!(e&&e.__v_isReactive)
}function ms(e){
return!!(e&&e.__v_isReadonly)
}function Me(e){
return!!(e&&e.__v_isShallow)
}function ql(e){
return e?!!e.__v_raw:!1
}function At(e){
const t=e&&e.__v_raw;return t?At(t):e
}function xb(e){
return!Tt(e,'__v_skip')&&Object.isExtensible(e)&&Ud(e,'__v_skip',!0),e
}const ne=e=>xt(e)?Co(e):e,ul=e=>xt(e)?ch(e):e;function re(e){
return e?e.__v_isRef===!0:!1
}function Ib(e){
return uh(e,!1)
}function Pb(e){
return uh(e,!0)
}function uh(e,t){
return re(e)?e:new Mb(e,t)
}class Mb{
constructor(t,n){
this.dep=new Wl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:At(t),this._value=n?t:ne(t),this.__v_isShallow=n
}get value(){
return this.dep.track(),this._value
}set value(t){
const n=this._rawValue,s=this.__v_isShallow||Me(t)||ms(t);t=s?t:At(t),In(t,n)&&(this._rawValue=t,this._value=s?t:ne(t),this.dep.trigger())
}
}function Pn(e){
return re(e)?e.value:e
}const kb={get:(e,t,n)=>t==='__v_raw'?e:Pn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{
const i=e[t];return re(i)&&!re(n)?(i.value=n,!0):Reflect.set(e,t,n,s)
}};function fh(e){
return ti(e)?e:new Proxy(e,kb)
}class Vb{
constructor(t,n,s){
this.fn=t,this.setter=n,this._value=void 0,this.dep=new Wl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s
}notify(){
if(this.flags|=16,!(this.flags&8)&&Rt!==this){
return Xd(this,!0),!0
}
}get value(){
const t=this.dep.track();return Zd(this),t&&(t.version=this.dep.version),this._value
}set value(t){
this.setter&&this.setter(t)
}
}function Hb(e,t,n=!1){
let s,i;return ot(e)?s=e:(s=e.get,i=e.set),new Vb(s,i,n)
}const kr={},ro=new WeakMap;let ls;function Fb(e,t=!1,n=ls){
if(n){
let s=ro.get(n);s||ro.set(n,s=[]),s.push(e)
}
}function jb(e,t,n=Nt){
const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:c,call:f}=n,h=I=>i?I:Me(I)||i===!1||i===0?gn(I,1):gn(I);let d,m,v,b,S=!1,O=!1;if(re(e)?(m=()=>e.value,S=Me(e)):ti(e)?(m=()=>h(e),S=!0):st(e)?(O=!0,S=e.some(I=>ti(I)||Me(I)),m=()=>e.map(I=>{
if(re(I)){
return I.value
}if(ti(I)){
return h(I)
}if(ot(I)){
return f?f(I,2):I()
}
})):ot(e)?t?m=f?()=>f(e,2):e:m=()=>{
if(v){
Hn();try{
v()
}finally{
Fn()
}
}const I=ls;ls=d;try{
return f?f(e,3,[b]):e(b)
}finally{
ls=I
}
}:m=on,t&&i){
const I=m,Y=i===!0?1/0:i;m=()=>gn(I(),Y)
}const D=pb(),P=()=>{
d.stop(),D&&D.active&&Ml(D.effects,d)
};if(o&&t){
const I=t;t=(...Y)=>{
I(...Y),P()
}
}let M=O?new Array(e.length).fill(kr):kr;const F=I=>{
if(!(!(d.flags&1)||!d.dirty&&!I)){
if(t){
const Y=d.run();if(i||S||(O?Y.some((z,G)=>In(z,M[G])):In(Y,M))){
v&&v();const z=ls;ls=d;try{
const G=[Y,M===kr?void 0:O&&M[0]===kr?[]:M,b];f?f(t,3,G):t(...G),M=Y
}finally{
ls=z
}
}
}else {
d.run()
}
}
};return c&&c(F),d=new zd(m),d.scheduler=a?()=>a(F,!1):F,b=I=>Fb(I,!1,d),v=d.onStop=()=>{
const I=ro.get(d);if(I){
if(f){
f(I,4)
}else {
for(const Y of I){
Y()
}
}ro.delete(d)
}
},t?s?F(!0):M=d.run():a?a(F.bind(null,!0),!0):d.run(),P.pause=d.pause.bind(d),P.resume=d.resume.bind(d),P.stop=P,P
}function gn(e,t=1/0,n){
if(t<=0||!xt(e)||e.__v_skip||(n=n||new Set,n.has(e))){
return e
}if(n.add(e),t--,re(e)){
gn(e.value,t,n)
}else if(st(e)){
for(let s=0;s<e.length;s++){
gn(e[s],t,n)
}
}else if(Fd(e)||Zs(e)){
e.forEach(s=>{
gn(s,t,n)
})
}else if(Wd(e)){
for(const s in e){
gn(e[s],t,n)
}for(const s of Object.getOwnPropertySymbols(e)){
Object.prototype.propertyIsEnumerable.call(e,s)&&gn(e[s],t,n)
}
}return e
}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(e,t,n,s){
try{
return s?e(...s):e()
}catch(i){
No(i,t,n)
}
}function ln(e,t,n,s){
if(ot(e)){
const i=tr(e,t,n,s);return i&&jd(i)&&i.catch(o=>{
No(o,t,n)
}),i
}if(st(e)){
const i=[];for(let o=0;o<e.length;o++){
i.push(ln(e[o],t,n,s))
}return i
}
}function No(e,t,n,s=!0){
const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Nt;if(t){
let c=t.parent;const f=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){
const d=c.ec;if(d){
for(let m=0;m<d.length;m++){
if(d[m](e,f,h)===!1){
return
}
}
}c=c.parent
}if(o){
Hn(),tr(o,null,10,[e,f,h]),Fn();return
}
}Bb(e,n,i,s,a)
}function Bb(e,t,n,s=!0,i=!1){
if(i){
throw e
}console.error(e)
}const pe=[];let nn=-1;const ei=[];let Ln=null,Ks=0;const dh=Promise.resolve();let oo=null;function hh(e){
const t=oo||dh;return e?t.then(this?e.bind(this):e):t
}function Wb(e){
let t=nn+1,n=pe.length;for(;t<n;){
const s=t+n>>>1,i=pe[s],o=zi(i);o<e||o===e&&i.flags&2?t=s+1:n=s
}return t
}function Yl(e){
if(!(e.flags&1)){
const t=zi(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=zi(n)?pe.push(e):pe.splice(Wb(t),0,e),e.flags|=1,ph()
}
}function ph(){
oo||(oo=dh.then(_h))
}function Ub(e){
st(e)?ei.push(...e):Ln&&e.id===-1?Ln.splice(Ks+1,0,e):e.flags&1||(ei.push(e),e.flags|=1),ph()
}function Zu(e,t,n=nn+1){
for(;n<pe.length;n++){
const s=pe[n];if(s&&s.flags&2){
if(e&&s.id!==e.uid){
continue
}pe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)
}
}
}function mh(e){
if(ei.length){
const t=[...new Set(ei)].sort((n,s)=>zi(n)-zi(s));if(ei.length=0,Ln){
Ln.push(...t);return
}for(Ln=t,Ks=0;Ks<Ln.length;Ks++){
const n=Ln[Ks];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2
}Ln=null,Ks=0
}
}const zi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _h(e){
try{
for(nn=0;nn<pe.length;nn++){
const t=pe[nn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),tr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))
}
}finally{
for(;nn<pe.length;nn++){
const t=pe[nn];t&&(t.flags&=-2)
}nn=-1,pe.length=0,mh(),oo=null,(pe.length||ei.length)&&_h()
}
}let Ce=null,gh=null;function ao(e){
const t=Ce;return Ce=e,gh=e&&e.type.__scopeId||null,t
}function zl(e,t=Ce,n){
if(!t||e._n){
return e
}const s=(...i)=>{
s._d&&uf(-1);const o=ao(t);let a;try{
a=e(...i)
}finally{
ao(o),s._d&&uf(1)
}return a
};return s._n=!0,s._c=!0,s._d=!0,s
}function HR(e,t){
if(Ce===null){
return e
}const n=xo(Ce),s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){
let[o,a,c,f=Nt]=t[i];o&&(ot(o)&&(o={mounted:o,updated:o}),o.deep&&gn(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:f}))
}return e
}function os(e,t,n,s){
const i=e.dirs,o=t&&t.dirs;for(let a=0;a<i.length;a++){
const c=i[a];o&&(c.oldValue=o[a].value);const f=c.dir[s];f&&(Hn(),ln(f,n,8,[e.el,c,e,t]),Fn())
}
}const Kb=Symbol('_vte'),qb=e=>e.__isTeleport;function Gl(e,t){
e.shapeFlag&6&&e.component?(e.transition=t,Gl(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t
}/*! #__NO_SIDE_EFFECTS__ */function Eh(e,t){
return ot(e)?oe({name:e.name},t,{setup:e}):e
}function vh(e){
e.ids=[e.ids[0]+e.ids[2]+++'-',0,0]
}function lo(e,t,n,s,i=!1){
if(st(e)){
e.forEach((S,O)=>lo(S,t&&(st(t)?t[O]:t),n,s,i));return
}if(Hi(s)&&!i){
s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&lo(e,t,n,s.component.subTree);return
}const o=s.shapeFlag&4?xo(s.component):s.el,a=i?null:o,{i:c,r:f}=e,h=t&&t.r,d=c.refs===Nt?c.refs={}:c.refs,m=c.setupState,v=At(m),b=m===Nt?()=>!1:S=>Tt(v,S);if(h!=null&&h!==f&&(jt(h)?(d[h]=null,b(h)&&(m[h]=null)):re(h)&&(h.value=null)),ot(f)){
tr(f,c,12,[a,d])
}else{
const S=jt(f),O=re(f);if(S||O){
const D=()=>{
if(e.f){
const P=S?b(f)?m[f]:d[f]:f.value;i?st(P)&&Ml(P,o):st(P)?P.includes(o)||P.push(o):S?(d[f]=[o],b(f)&&(m[f]=d[f])):(f.value=[o],e.k&&(d[e.k]=f.value))
}else {
S?(d[f]=a,b(f)&&(m[f]=a)):O&&(f.value=a,e.k&&(d[e.k]=a))
}
};a?(D.id=-1,Se(D,n)):D()
}
}
}So().requestIdleCallback;So().cancelIdleCallback;const Hi=e=>!!e.type.__asyncLoader,bh=e=>e.type.__isKeepAlive;function Yb(e,t){
yh(e,'a',t)
}function zb(e,t){
yh(e,'da',t)
}function yh(e,t,n=se){
const s=e.__wdc||(e.__wdc=()=>{
let i=n;for(;i;){
if(i.isDeactivated){
return
}i=i.parent
}return e()
});if(Do(t,s,n),n){
let i=n.parent;for(;i&&i.parent;){
bh(i.parent.vnode)&&Gb(s,t,n,i),i=i.parent
}
}
}function Gb(e,t,n,s){
const i=Do(t,e,s,!0);Th(()=>{
Ml(s[t],i)
},n)
}function Do(e,t,n=se,s=!1){
if(n){
const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{
Hn();const c=er(n),f=ln(t,n,e,a);return c(),Fn(),f
});return s?i.unshift(o):i.push(o),o
}
}const An=e=>(t,n=se)=>{
(!Xi||e==='sp')&&Do(e,(...s)=>t(...s),n)
},Xb=An('bm'),Ah=An('m'),Qb=An('bu'),Jb=An('u'),Zb=An('bum'),Th=An('um'),ty=An('sp'),ey=An('rtg'),ny=An('rtc');function sy(e,t=se){
Do('ec',e,t)
}const iy='components';function ry(e,t){
return ay(iy,e,!0,t)||e
}const oy=Symbol.for('v-ndc');function ay(e,t,n=!0,s=!1){
const i=Ce||se;if(i){
const o=i.type;{const c=zy(o,!1);if(c&&(c===t||c===Ve(t)||c===wo(Ve(t)))){
return o
}}const a=tf(i[e]||o[e],t)||tf(i.appContext[e],t);return!a&&s?o:a
}
}function tf(e,t){
return e&&(e[t]||e[Ve(t)]||e[wo(Ve(t))])
}function FR(e,t,n,s){
let i;const o=n,a=st(e);if(a||jt(e)){
const c=a&&ti(e);let f=!1;c&&(f=!Me(e),e=Oo(e)),i=new Array(e.length);for(let h=0,d=e.length;h<d;h++){
i[h]=t(f?ne(e[h]):e[h],h,void 0,o)
}
}else if(typeof e==='number'){
i=new Array(e);for(let c=0;c<e;c++){
i[c]=t(c+1,c,void 0,o)
}
}else if(xt(e)){
if(e[Symbol.iterator]){
i=Array.from(e,(c,f)=>t(c,f,void 0,o))
}else{
const c=Object.keys(e);i=new Array(c.length);for(let f=0,h=c.length;f<h;f++){
const d=c[f];i[f]=t(e[d],d,f,o)
}
}
}else {
i=[]
}return i
}const fl=e=>e?Uh(e)?xo(e):fl(e.parent):null,Fi=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fl(e.parent),$root:e=>fl(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sh(e),$forceUpdate:e=>e.f||(e.f=()=>{
Yl(e.update)
}),$nextTick:e=>e.n||(e.n=hh.bind(e.proxy)),$watch:e=>Ny.bind(e)}),$a=(e,t)=>e!==Nt&&!e.__isScriptSetup&&Tt(e,t),ly={get({_:e},t){
if(t==='__v_skip'){
return!0
}const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:f}=e;let h;if(t[0]!=='$'){
const b=a[t];if(b!==void 0){
switch(b){
case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]
}
}else{
if($a(s,t)){
return a[t]=1,s[t]
}if(i!==Nt&&Tt(i,t)){
return a[t]=2,i[t]
}if((h=e.propsOptions[0])&&Tt(h,t)){
return a[t]=3,o[t]
}if(n!==Nt&&Tt(n,t)){
return a[t]=4,n[t]
}dl&&(a[t]=0)
}
}const d=Fi[t];let m,v;if(d){
return t==='$attrs'&&ee(e.attrs,'get',''),d(e)
}if((m=c.__cssModules)&&(m=m[t])){
return m
}if(n!==Nt&&Tt(n,t)){
return a[t]=4,n[t]
}if(v=f.config.globalProperties,Tt(v,t)){
return v[t]
}
},set({_:e},t,n){
const{data:s,setupState:i,ctx:o}=e;return $a(i,t)?(i[t]=n,!0):s!==Nt&&Tt(s,t)?(s[t]=n,!0):Tt(e.props,t)||t[0]==='$'&&t.slice(1)in e?!1:(o[t]=n,!0)
},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){
let c;return!!n[a]||e!==Nt&&Tt(e,a)||$a(t,a)||(c=o[0])&&Tt(c,a)||Tt(s,a)||Tt(Fi,a)||Tt(i.config.globalProperties,a)
},defineProperty(e,t,n){
return n.get!=null?e._.accessCache[t]=0:Tt(n,'value')&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)
}};function ef(e){
return st(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e
}let dl=!0;function cy(e){
const t=Sh(e),n=e.proxy,s=e.ctx;dl=!1,t.beforeCreate&&nf(t.beforeCreate,e,'bc');const{data:i,computed:o,methods:a,watch:c,provide:f,inject:h,created:d,beforeMount:m,mounted:v,beforeUpdate:b,updated:S,activated:O,deactivated:D,beforeDestroy:P,beforeUnmount:M,destroyed:F,unmounted:I,render:Y,renderTracked:z,renderTriggered:G,errorCaptured:nt,serverPrefetch:gt,expose:_t,inheritAttrs:Ct,components:Mt,directives:wt,filters:Ut}=t;if(h&&uy(h,s,null),a){
for(const at in a){
const ut=a[at];ot(ut)&&(s[at]=ut.bind(n))
}
}if(i){
const at=i.call(n,n);xt(at)&&(e.data=Co(at))
}if(dl=!0,o){
for(const at in o){
const ut=o[at],Ht=ot(ut)?ut.bind(n,n):ot(ut.get)?ut.get.bind(n,n):on,ae=!ot(ut)&&ot(ut.set)?ut.set.bind(n):on,Xt=Ke({get:Ht,set:ae});Object.defineProperty(s,at,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:It=>Xt.value=It})
}
}if(c){
for(const at in c){
wh(c[at],s,n,at)
}
}if(f){
const at=ot(f)?f.call(n):f;Reflect.ownKeys(at).forEach(ut=>{
Yr(ut,at[ut])
})
}d&&nf(d,e,'c');function pt(at,ut){
st(ut)?ut.forEach(Ht=>at(Ht.bind(n))):ut&&at(ut.bind(n))
}if(pt(Xb,m),pt(Ah,v),pt(Qb,b),pt(Jb,S),pt(Yb,O),pt(zb,D),pt(sy,nt),pt(ny,z),pt(ey,G),pt(Zb,M),pt(Th,I),pt(ty,gt),st(_t)){
if(_t.length){
const at=e.exposed||(e.exposed={});_t.forEach(ut=>{
Object.defineProperty(at,ut,{get:()=>n[ut],set:Ht=>n[ut]=Ht})
})
}else {
e.exposed||(e.exposed={})
}
}Y&&e.render===on&&(e.render=Y),Ct!=null&&(e.inheritAttrs=Ct),Mt&&(e.components=Mt),wt&&(e.directives=wt),gt&&vh(e)
}function uy(e,t,n=on){
st(e)&&(e=hl(e));for(const s in e){
const i=e[s];let o;xt(i)?'default'in i?o=Ye(i.from||s,i.default,!0):o=Ye(i.from||s):o=Ye(i),re(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o
}
}function nf(e,t,n){
ln(st(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)
}function wh(e,t,n,s){
const i=s.includes('.')?Hh(n,s):()=>n[s];if(jt(e)){
const o=t[e];ot(o)&&zr(i,o)
}else if(ot(e)){
zr(i,e.bind(n))
}else if(xt(e)){
if(st(e)){
e.forEach(o=>wh(o,t,n,s))
}else{
const o=ot(e.handler)?e.handler.bind(n):t[e.handler];ot(o)&&zr(i,o,e)
}
}
}function Sh(e){
const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let f;return c?f=c:!i.length&&!n&&!s?f=t:(f={},i.length&&i.forEach(h=>co(f,h,a,!0)),co(f,t,a)),xt(t)&&o.set(t,f),f
}function co(e,t,n,s=!1){
const{mixins:i,extends:o}=t;o&&co(e,o,n,!0),i&&i.forEach(a=>co(e,a,n,!0));for(const a in t){
if(!(s&&a==='expose')){
const c=fy[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]
}
}return e
}const fy={data:sf,props:rf,emits:rf,methods:Pi,computed:Pi,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Pi,directives:Pi,watch:hy,provide:sf,inject:dy};function sf(e,t){
return t?e?function(){
return oe(ot(e)?e.call(this,this):e,ot(t)?t.call(this,this):t)
}:t:e
}function dy(e,t){
return Pi(hl(e),hl(t))
}function hl(e){
if(st(e)){
const t={};for(let n=0;n<e.length;n++){
t[e[n]]=e[n]
}return t
}return e
}function he(e,t){
return e?[...new Set([].concat(e,t))]:t
}function Pi(e,t){
return e?oe(Object.create(null),e,t):t
}function rf(e,t){
return e?st(e)&&st(t)?[...new Set([...e,...t])]:oe(Object.create(null),ef(e),ef(t??{})):t
}function hy(e,t){
if(!e){
return t
}if(!t){
return e
}const n=oe(Object.create(null),e);for(const s in t){
n[s]=he(e[s],t[s])
}return n
}function Oh(){
return{app:null,config:{isNativeTag:eb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}
}let py=0;function my(e,t){
return function(s,i=null){
ot(s)||(s=oe({},s)),i!=null&&!xt(i)&&(i=null);const o=Oh(),a=new WeakSet,c=[];let f=!1;const h=o.app={_uid:py++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Xy,get config(){
return o.config
},set config(d){},use(d,...m){
return a.has(d)||(d&&ot(d.install)?(a.add(d),d.install(h,...m)):ot(d)&&(a.add(d),d(h,...m))),h
},mixin(d){
return o.mixins.includes(d)||o.mixins.push(d),h
},component(d,m){
return m?(o.components[d]=m,h):o.components[d]
},directive(d,m){
return m?(o.directives[d]=m,h):o.directives[d]
},mount(d,m,v){
if(!f){
const b=h._ceVNode||Gt(s,i);return b.appContext=o,v===!0?v='svg':v===!1&&(v=void 0),e(b,d,v),f=!0,h._container=d,d.__vue_app__=h,xo(b.component)
}
},onUnmount(d){
c.push(d)
},unmount(){
f&&(ln(c,h._instance,16),e(null,h._container),delete h._container.__vue_app__)
},provide(d,m){
return o.provides[d]=m,h
},runWithContext(d){
const m=ni;ni=h;try{
return d()
}finally{
ni=m
}
}};return h
}
}let ni=null;function Yr(e,t){
if(se){
let n=se.provides;const s=se.parent&&se.parent.provides;s===n&&(n=se.provides=Object.create(s)),n[e]=t
}
}function Ye(e,t,n=!1){
const s=se||Ce;if(s||ni){
const i=ni?ni._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i){
return i[e]
}if(arguments.length>1){
return n&&ot(t)?t.call(s&&s.proxy):t
}
}
}const Ch={},Nh=()=>Object.create(Ch),Dh=e=>Object.getPrototypeOf(e)===Ch;function _y(e,t,n,s=!1){
const i={},o=Nh();e.propsDefaults=Object.create(null),Rh(e,t,i,o);for(const a in e.propsOptions[0]){
a in i||(i[a]=void 0)
}n?e.props=s?i:lh(i):e.type.props?e.props=i:e.props=o,e.attrs=o
}function gy(e,t,n,s){
const{props:i,attrs:o,vnode:{patchFlag:a}}=e,c=At(i),[f]=e.propsOptions;let h=!1;if((s||a>0)&&!(a&16)){
if(a&8){
const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){
const v=d[m];if(Ro(e.emitsOptions,v)){
continue
}const b=t[v];if(f){
if(Tt(o,v)){
b!==o[v]&&(o[v]=b,h=!0)
}else{
const S=Ve(v);i[S]=pl(f,c,S,b,e,!1)
}
}else {
b!==o[v]&&(o[v]=b,h=!0)
}
}
}
}else{
Rh(e,t,i,o)&&(h=!0);let d;for(const m in c){
(!t||!Tt(t,m)&&((d=As(m))===m||!Tt(t,d)))&&(f?n&&(n[m]!==void 0||n[d]!==void 0)&&(i[m]=pl(f,c,m,void 0,e,!0)):delete i[m])
}if(o!==c){
for(const m in o){
(!t||!Tt(t,m))&&(delete o[m],h=!0)
}
}
}h&&_n(e.attrs,'set','')
}function Rh(e,t,n,s){
const[i,o]=e.propsOptions;let a=!1,c;if(t){
for(const f in t){
if(Mi(f)){
continue
}const h=t[f];let d;i&&Tt(i,d=Ve(f))?!o||!o.includes(d)?n[d]=h:(c||(c={}))[d]=h:Ro(e.emitsOptions,f)||(!(f in s)||h!==s[f])&&(s[f]=h,a=!0)
}
}if(o){
const f=At(n),h=c||Nt;for(let d=0;d<o.length;d++){
const m=o[d];n[m]=pl(i,f,m,h[m],e,!Tt(h,m))
}
}return a
}function pl(e,t,n,s,i,o){
const a=e[n];if(a!=null){
const c=Tt(a,'default');if(c&&s===void 0){
const f=a.default;if(a.type!==Function&&!a.skipFactory&&ot(f)){
const{propsDefaults:h}=i;if(n in h){
s=h[n]
}else{
const d=er(i);s=h[n]=f.call(null,t),d()
}
}else {
s=f
}i.ce&&i.ce._setProp(n,s)
}a[0]&&(o&&!c?s=!1:a[1]&&(s===''||s===As(n))&&(s=!0))
}return s
}const Ey=new WeakMap;function Lh(e,t,n=!1){
const s=n?Ey:t.propsCache,i=s.get(e);if(i){
return i
}const o=e.props,a={},c=[];let f=!1;if(!ot(e)){
const d=m=>{
f=!0;const[v,b]=Lh(m,t,!0);oe(a,v),b&&c.push(...b)
};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)
}if(!o&&!f){
return xt(e)&&s.set(e,Js),Js
}if(st(o)){
for(let d=0;d<o.length;d++){
const m=Ve(o[d]);of(m)&&(a[m]=Nt)
}
}else if(o){
for(const d in o){
const m=Ve(d);if(of(m)){
const v=o[d],b=a[m]=st(v)||ot(v)?{type:v}:oe({},v),S=b.type;let O=!1,D=!0;if(st(S)){
for(let P=0;P<S.length;++P){
const M=S[P],F=ot(M)&&M.name;if(F==='Boolean'){
O=!0;break
}else {
F==='String'&&(D=!1)
}
}
}else {
O=ot(S)&&S.name==='Boolean'
}b[0]=O,b[1]=D,(O||Tt(b,'default'))&&c.push(m)
}
}
}const h=[a,c];return xt(e)&&s.set(e,h),h
}function of(e){
return e[0]!=='$'&&!Mi(e)
}const $h=e=>e[0]==='_'||e==='$stable',Xl=e=>st(e)?e.map(rn):[rn(e)],vy=(e,t,n)=>{
if(t._n){
return t
}const s=zl((...i)=>Xl(t(...i)),n);return s._c=!1,s
},xh=(e,t,n)=>{
const s=e._ctx;for(const i in e){
if($h(i)){
continue
}const o=e[i];if(ot(o)){
t[i]=vy(i,o,s)
}else if(o!=null){
const a=Xl(o);t[i]=()=>a
}
}
},Ih=(e,t)=>{
const n=Xl(t);e.slots.default=()=>n
},Ph=(e,t,n)=>{
for(const s in t){
(n||s!=='_')&&(e[s]=t[s])
}
},by=(e,t,n)=>{
const s=e.slots=Nh();if(e.vnode.shapeFlag&32){
const i=t._;i?(Ph(s,t,n),n&&Ud(s,'_',i,!0)):xh(t,s)
}else {
t&&Ih(e,t)
}
},yy=(e,t,n)=>{
const{vnode:s,slots:i}=e;let o=!0,a=Nt;if(s.shapeFlag&32){
const c=t._;c?n&&c===1?o=!1:Ph(i,t,n):(o=!t.$stable,xh(t,i)),a=t
}else {
t&&(Ih(e,t),a={default:1})
}if(o){
for(const c in i){
!$h(c)&&a[c]==null&&delete i[c]
}
}
},Se=Py;function Ay(e){
return Ty(e)
}function Ty(e,t){
const n=So();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:f,setText:h,setElementText:d,parentNode:m,nextSibling:v,setScopeId:b=on,insertStaticContent:S}=e,O=(_,E,A,R=null,x=null,T=null,K=void 0,W=null,j=!!E.dynamicChildren)=>{
if(_===E){
return
}_&&!Di(_,E)&&(R=L(_),It(_,x,T,!0),_=null),E.patchFlag===-2&&(j=!1,E.dynamicChildren=null);const{type:k,ref:Z,shapeFlag:q}=E;switch(k){
case Lo:D(_,E,A,R);break;case _s:P(_,E,A,R);break;case Gr:_==null&&M(E,A,R,K);break;case sn:Mt(_,E,A,R,x,T,K,W,j);break;default:q&1?Y(_,E,A,R,x,T,K,W,j):q&6?wt(_,E,A,R,x,T,K,W,j):(q&64||q&128)&&k.process(_,E,A,R,x,T,K,W,j,X)
}Z!=null&&x&&lo(Z,_&&_.ref,T,E||_,!E)
},D=(_,E,A,R)=>{
if(_==null){
s(E.el=c(E.children),A,R)
}else{
const x=E.el=_.el;E.children!==_.children&&h(x,E.children)
}
},P=(_,E,A,R)=>{
_==null?s(E.el=f(E.children||''),A,R):E.el=_.el
},M=(_,E,A,R)=>{
[_.el,_.anchor]=S(_.children,E,A,R,_.el,_.anchor)
},F=({el:_,anchor:E},A,R)=>{
let x;for(;_&&_!==E;){
x=v(_),s(_,A,R),_=x
}s(E,A,R)
},I=({el:_,anchor:E})=>{
let A;for(;_&&_!==E;){
A=v(_),i(_),_=A
}i(E)
},Y=(_,E,A,R,x,T,K,W,j)=>{
E.type==='svg'?K='svg':E.type==='math'&&(K='mathml'),_==null?z(E,A,R,x,T,K,W,j):gt(_,E,x,T,K,W,j)
},z=(_,E,A,R,x,T,K,W)=>{
let j,k;const{props:Z,shapeFlag:q,transition:J,dirs:et}=_;if(j=_.el=a(_.type,T,Z&&Z.is,Z),q&8?d(j,_.children):q&16&&nt(_.children,j,null,R,x,xa(_,T),K,W),et&&os(_,null,R,'created'),G(j,_,_.scopeId,K,R),Z){
for(const bt in Z){
bt!=='value'&&!Mi(bt)&&o(j,bt,null,Z[bt],T,R)
}'value'in Z&&o(j,'value',null,Z.value,T),(k=Z.onVnodeBeforeMount)&&tn(k,R,_)
}et&&os(_,null,R,'beforeMount');const rt=wy(x,J);rt&&J.beforeEnter(j),s(j,E,A),((k=Z&&Z.onVnodeMounted)||rt||et)&&Se(()=>{
k&&tn(k,R,_),rt&&J.enter(j),et&&os(_,null,R,'mounted')
},x)
},G=(_,E,A,R,x)=>{
if(A&&b(_,A),R){
for(let T=0;T<R.length;T++){
b(_,R[T])
}
}if(x){
const T=x.subTree;if(E===T||jh(T.type)&&(T.ssContent===E||T.ssFallback===E)){
const K=x.vnode;G(_,K,K.scopeId,K.slotScopeIds,x.parent)
}
}
},nt=(_,E,A,R,x,T,K,W,j=0)=>{
for(let k=j;k<_.length;k++){
const Z=_[k]=W?$n(_[k]):rn(_[k]);O(null,Z,E,A,R,x,T,K,W)
}
},gt=(_,E,A,R,x,T,K)=>{
const W=E.el=_.el;let{patchFlag:j,dynamicChildren:k,dirs:Z}=E;j|=_.patchFlag&16;const q=_.props||Nt,J=E.props||Nt;let et;if(A&&as(A,!1),(et=J.onVnodeBeforeUpdate)&&tn(et,A,E,_),Z&&os(E,_,A,'beforeUpdate'),A&&as(A,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(W,''),k?_t(_.dynamicChildren,k,W,A,R,xa(E,x),T):K||ut(_,E,W,null,A,R,xa(E,x),T,!1),j>0){
if(j&16){
Ct(W,q,J,A,x)
}else if(j&2&&q.class!==J.class&&o(W,'class',null,J.class,x),j&4&&o(W,'style',q.style,J.style,x),j&8){
const rt=E.dynamicProps;for(let bt=0;bt<rt.length;bt++){
const Et=rt[bt],le=q[Et],Jt=J[Et];(Jt!==le||Et==='value')&&o(W,Et,le,Jt,x,A)
}
}j&1&&_.children!==E.children&&d(W,E.children)
}else{
!K&&k==null&&Ct(W,q,J,A,x)
}((et=J.onVnodeUpdated)||Z)&&Se(()=>{
et&&tn(et,A,E,_),Z&&os(E,_,A,'updated')
},R)
},_t=(_,E,A,R,x,T,K)=>{
for(let W=0;W<E.length;W++){
const j=_[W],k=E[W],Z=j.el&&(j.type===sn||!Di(j,k)||j.shapeFlag&70)?m(j.el):A;O(j,k,Z,null,R,x,T,K,!0)
}
},Ct=(_,E,A,R,x)=>{
if(E!==A){
if(E!==Nt){
for(const T in E){
!Mi(T)&&!(T in A)&&o(_,T,E[T],null,x,R)
}
}for(const T in A){
if(Mi(T)){
continue
}const K=A[T],W=E[T];K!==W&&T!=='value'&&o(_,T,W,K,x,R)
}'value'in A&&o(_,'value',E.value,A.value,x)
}
},Mt=(_,E,A,R,x,T,K,W,j)=>{
const k=E.el=_?_.el:c(''),Z=E.anchor=_?_.anchor:c('');const{patchFlag:q,dynamicChildren:J,slotScopeIds:et}=E;et&&(W=W?W.concat(et):et),_==null?(s(k,A,R),s(Z,A,R),nt(E.children||[],A,Z,x,T,K,W,j)):q>0&&q&64&&J&&_.dynamicChildren?(_t(_.dynamicChildren,J,A,x,T,K,W),(E.key!=null||x&&E===x.subTree)&&Mh(_,E,!0)):ut(_,E,A,Z,x,T,K,W,j)
},wt=(_,E,A,R,x,T,K,W,j)=>{
E.slotScopeIds=W,_==null?E.shapeFlag&512?x.ctx.activate(E,A,R,K,j):Ut(E,A,R,x,T,K,j):Kt(_,E,j)
},Ut=(_,E,A,R,x,T,K)=>{
const W=_.component=Wy(_,R,x);if(bh(_)&&(W.ctx.renderer=X),Uy(W,!1,K),W.asyncDep){
if(x&&x.registerDep(W,pt,K),!_.el){
const j=W.subTree=Gt(_s);P(null,j,E,A)
}
}else {
pt(W,_,E,A,x,T,K)
}
},Kt=(_,E,A)=>{
const R=E.component=_.component;if(xy(_,E,A)){
if(R.asyncDep&&!R.asyncResolved){
at(R,E,A);return
}else {
R.next=E,R.update()
}
}else {
E.el=_.el,R.vnode=E
}
},pt=(_,E,A,R,x,T,K)=>{
const W=()=>{
if(_.isMounted){
let{next:q,bu:J,u:et,parent:rt,vnode:bt}=_;{const be=kh(_);if(be){
q&&(q.el=bt.el,at(_,q,K)),be.asyncDep.then(()=>{
_.isUnmounted||W()
});return
}}let Et=q,le;as(_,!1),q?(q.el=bt.el,at(_,q,K)):q=bt,J&&qr(J),(le=q.props&&q.props.onVnodeBeforeUpdate)&&tn(le,rt,q,bt),as(_,!0);const Jt=lf(_),xe=_.subTree;_.subTree=Jt,O(xe,Jt,m(xe.el),L(xe),_,x,T),q.el=Jt.el,Et===null&&Iy(_,Jt.el),et&&Se(et,x),(le=q.props&&q.props.onVnodeUpdated)&&Se(()=>tn(le,rt,q,bt),x)
}else{
let q;const{el:J,props:et}=E,{bm:rt,m:bt,parent:Et,root:le,type:Jt}=_,xe=Hi(E);as(_,!1),rt&&qr(rt),!xe&&(q=et&&et.onVnodeBeforeMount)&&tn(q,Et,E),as(_,!0);{le.ce&&le.ce._injectChildStyle(Jt);const be=_.subTree=lf(_);O(null,be,A,R,_,x,T),E.el=be.el}if(bt&&Se(bt,x),!xe&&(q=et&&et.onVnodeMounted)){
const be=E;Se(()=>tn(q,Et,be),x)
}(E.shapeFlag&256||Et&&Hi(Et.vnode)&&Et.vnode.shapeFlag&256)&&_.a&&Se(_.a,x),_.isMounted=!0,E=A=R=null
}
};_.scope.on();const j=_.effect=new zd(W);_.scope.off();const k=_.update=j.run.bind(j),Z=_.job=j.runIfDirty.bind(j);Z.i=_,Z.id=_.uid,j.scheduler=()=>Yl(Z),as(_,!0),k()
},at=(_,E,A)=>{
E.component=_;const R=_.vnode.props;_.vnode=E,_.next=null,gy(_,E.props,R,A),yy(_,E.children,A),Hn(),Zu(_),Fn()
},ut=(_,E,A,R,x,T,K,W,j=!1)=>{
const k=_&&_.children,Z=_?_.shapeFlag:0,q=E.children,{patchFlag:J,shapeFlag:et}=E;if(J>0){
if(J&128){
ae(k,q,A,R,x,T,K,W,j);return
}else if(J&256){
Ht(k,q,A,R,x,T,K,W,j);return
}
}et&8?(Z&16&&Ft(k,x,T),q!==k&&d(A,q)):Z&16?et&16?ae(k,q,A,R,x,T,K,W,j):Ft(k,x,T,!0):(Z&8&&d(A,''),et&16&&nt(q,A,R,x,T,K,W,j))
},Ht=(_,E,A,R,x,T,K,W,j)=>{
_=_||Js,E=E||Js;const k=_.length,Z=E.length,q=Math.min(k,Z);let J;for(J=0;J<q;J++){
const et=E[J]=j?$n(E[J]):rn(E[J]);O(_[J],et,A,null,x,T,K,W,j)
}k>Z?Ft(_,x,T,!0,!1,q):nt(E,A,R,x,T,K,W,j,q)
},ae=(_,E,A,R,x,T,K,W,j)=>{
let k=0;const Z=E.length;let q=_.length-1,J=Z-1;for(;k<=q&&k<=J;){
const et=_[k],rt=E[k]=j?$n(E[k]):rn(E[k]);if(Di(et,rt)){
O(et,rt,A,null,x,T,K,W,j)
}else {
break
}k++
}for(;k<=q&&k<=J;){
const et=_[q],rt=E[J]=j?$n(E[J]):rn(E[J]);if(Di(et,rt)){
O(et,rt,A,null,x,T,K,W,j)
}else {
break
}q--,J--
}if(k>q){
if(k<=J){
const et=J+1,rt=et<Z?E[et].el:R;for(;k<=J;){
O(null,E[k]=j?$n(E[k]):rn(E[k]),A,rt,x,T,K,W,j),k++
}
}
}else if(k>J){
for(;k<=q;){
It(_[k],x,T,!0),k++
}
}else{
const et=k,rt=k,bt=new Map;for(k=rt;k<=J;k++){
const ce=E[k]=j?$n(E[k]):rn(E[k]);ce.key!=null&&bt.set(ce.key,k)
}let Et,le=0;const Jt=J-rt+1;let xe=!1,be=0;const Un=new Array(Jt);for(k=0;k<Jt;k++){
Un[k]=0
}for(k=et;k<=q;k++){
const ce=_[k];if(le>=Jt){
It(ce,x,T,!0);continue
}let Yt;if(ce.key!=null){
Yt=bt.get(ce.key)
}else {
for(Et=rt;Et<=J;Et++){
if(Un[Et-rt]===0&&Di(ce,E[Et])){
Yt=Et;break
}
}
}Yt===void 0?It(ce,x,T,!0):(Un[Yt-rt]=k+1,Yt>=be?be=Yt:xe=!0,O(ce,E[Yt],A,null,x,T,K,W,j),le++)
}const wn=xe?Sy(Un):Js;for(Et=wn.length-1,k=Jt-1;k>=0;k--){
const ce=rt+k,Yt=E[ce],dr=ce+1<Z?E[ce+1].el:R;Un[k]===0?O(null,Yt,A,dr,x,T,K,W,j):xe&&(Et<0||k!==wn[Et]?Xt(Yt,A,dr,2):Et--)
}
}
},Xt=(_,E,A,R,x=null)=>{
const{el:T,type:K,transition:W,children:j,shapeFlag:k}=_;if(k&6){
Xt(_.component.subTree,E,A,R);return
}if(k&128){
_.suspense.move(E,A,R);return
}if(k&64){
K.move(_,E,A,X);return
}if(K===sn){
s(T,E,A);for(let q=0;q<j.length;q++){
Xt(j[q],E,A,R)
}s(_.anchor,E,A);return
}if(K===Gr){
F(_,E,A);return
}if(R!==2&&k&1&&W){
if(R===0){
W.beforeEnter(T),s(T,E,A),Se(()=>W.enter(T),x)
}else{
const{leave:q,delayLeave:J,afterLeave:et}=W,rt=()=>s(T,E,A),bt=()=>{
q(T,()=>{
rt(),et&&et()
})
};J?J(T,rt,bt):bt()
}
}else {
s(T,E,A)
}
},It=(_,E,A,R=!1,x=!1)=>{
const{type:T,props:K,ref:W,children:j,dynamicChildren:k,shapeFlag:Z,patchFlag:q,dirs:J,cacheIndex:et}=_;if(q===-2&&(x=!1),W!=null&&lo(W,null,A,_,!0),et!=null&&(E.renderCache[et]=void 0),Z&256){
E.ctx.deactivate(_);return
}const rt=Z&1&&J,bt=!Hi(_);let Et;if(bt&&(Et=K&&K.onVnodeBeforeUnmount)&&tn(Et,E,_),Z&6){
qt(_.component,A,R)
}else{
if(Z&128){
_.suspense.unmount(A,R);return
}rt&&os(_,null,E,'beforeUnmount'),Z&64?_.type.remove(_,E,A,X,R):k&&!k.hasOnce&&(T!==sn||q>0&&q&64)?Ft(k,E,A,!1,!0):(T===sn&&q&384||!x&&Z&16)&&Ft(j,E,A),R&&ge(_)
}(bt&&(Et=K&&K.onVnodeUnmounted)||rt)&&Se(()=>{
Et&&tn(Et,E,_),rt&&os(_,null,E,'unmounted')
},A)
},ge=_=>{
const{type:E,el:A,anchor:R,transition:x}=_;if(E===sn){
Qt(A,R);return
}if(E===Gr){
I(_);return
}const T=()=>{
i(A),x&&!x.persisted&&x.afterLeave&&x.afterLeave()
};if(_.shapeFlag&1&&x&&!x.persisted){
const{leave:K,delayLeave:W}=x,j=()=>K(A,T);W?W(_.el,T,j):j()
}else {
T()
}
},Qt=(_,E)=>{
let A;for(;_!==E;){
A=v(_),i(_),_=A
}i(E)
},qt=(_,E,A)=>{
const{bum:R,scope:x,job:T,subTree:K,um:W,m:j,a:k}=_;af(j),af(k),R&&qr(R),x.stop(),T&&(T.flags|=8,It(K,_,E,A)),W&&Se(W,E),Se(()=>{
_.isUnmounted=!0
},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())
},Ft=(_,E,A,R=!1,x=!1,T=0)=>{
for(let K=T;K<_.length;K++){
It(_[K],E,A,R,x)
}
},L=_=>{
if(_.shapeFlag&6){
return L(_.component.subTree)
}if(_.shapeFlag&128){
return _.suspense.next()
}const E=v(_.anchor||_.el),A=E&&E[Kb];return A?v(A):E
};let y=!1;const U=(_,E,A)=>{
_==null?E._vnode&&It(E._vnode,null,null,!0):O(E._vnode||null,_,E,null,null,null,A),E._vnode=_,y||(y=!0,Zu(),mh(),y=!1)
},X={p:O,um:It,m:Xt,r:ge,mt:Ut,mc:nt,pc:ut,pbc:_t,n:L,o:e};return{render:U,hydrate:void 0,createApp:my(U)}
}function xa({type:e,props:t},n){
return n==='svg'&&e==='foreignObject'||n==='mathml'&&e==='annotation-xml'&&t&&t.encoding&&t.encoding.includes('html')?void 0:n
}function as({effect:e,job:t},n){
n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)
}function wy(e,t){
return(!e||e&&!e.pendingBranch)&&t&&!t.persisted
}function Mh(e,t,n=!1){
const s=e.children,i=t.children;if(st(s)&&st(i)){
for(let o=0;o<s.length;o++){
const a=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=$n(i[o]),c.el=a.el),!n&&c.patchFlag!==-2&&Mh(a,c)),c.type===Lo&&(c.el=a.el)
}
}
}function Sy(e){
const t=e.slice(),n=[0];let s,i,o,a,c;const f=e.length;for(s=0;s<f;s++){
const h=e[s];if(h!==0){
if(i=n[n.length-1],e[i]<h){
t[s]=i,n.push(s);continue
}for(o=0,a=n.length-1;o<a;){
c=o+a>>1,e[n[c]]<h?o=c+1:a=c
}h<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)
}
}for(o=n.length,a=n[o-1];o-- >0;){
n[o]=a,a=t[a]
}return n
}function kh(e){
const t=e.subTree.component;if(t){
return t.asyncDep&&!t.asyncResolved?t:kh(t)
}
}function af(e){
if(e){
for(let t=0;t<e.length;t++){
e[t].flags|=8
}
}
}const Oy=Symbol.for('v-scx'),Cy=()=>Ye(Oy);function zr(e,t,n){
return Vh(e,t,n)
}function Vh(e,t,n=Nt){
const{immediate:s,deep:i,flush:o,once:a}=n,c=oe({},n),f=t&&s||!t&&o!=='post';let h;if(Xi){
if(o==='sync'){
const b=Cy();h=b.__watcherHandles||(b.__watcherHandles=[])
}else if(!f){
const b=()=>{};return b.stop=on,b.resume=on,b.pause=on,b
}
}const d=se;c.call=(b,S,O)=>ln(b,d,S,O);let m=!1;o==='post'?c.scheduler=b=>{
Se(b,d&&d.suspense)
}:o!=='sync'&&(m=!0,c.scheduler=(b,S)=>{
S?b():Yl(b)
}),c.augmentJob=b=>{
t&&(b.flags|=4),m&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))
};const v=jb(e,t,c);return Xi&&(h?h.push(v):f&&v()),v
}function Ny(e,t,n){
const s=this.proxy,i=jt(e)?e.includes('.')?Hh(s,e):()=>s[e]:e.bind(s,s);let o;ot(t)?o=t:(o=t.handler,n=t);const a=er(this),c=Vh(i,o.bind(s),n);return a(),c
}function Hh(e,t){
const n=t.split('.');return()=>{
let s=e;for(let i=0;i<n.length&&s;i++){
s=s[n[i]]
}return s
}
}const Dy=(e,t)=>t==='modelValue'||t==='model-value'?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${As(t)}Modifiers`];function Ry(e,t,...n){
if(e.isUnmounted){
return
}const s=e.vnode.props||Nt;let i=n;const o=t.startsWith('update:'),a=o&&Dy(s,t.slice(7));a&&(a.trim&&(i=n.map(d=>jt(d)?d.trim():d)),a.number&&(i=n.map(rl)));let c,f=s[c=Ca(t)]||s[c=Ca(Ve(t))];!f&&o&&(f=s[c=Ca(As(t))]),f&&ln(f,e,6,i);const h=s[c+'Once'];if(h){
if(!e.emitted){
e.emitted={}
}else if(e.emitted[c]){
return
}e.emitted[c]=!0,ln(h,e,6,i)
}
}function Fh(e,t,n=!1){
const s=t.emitsCache,i=s.get(e);if(i!==void 0){
return i
}const o=e.emits;let a={},c=!1;if(!ot(e)){
const f=h=>{
const d=Fh(h,t,!0);d&&(c=!0,oe(a,d))
};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)
}return!o&&!c?(xt(e)&&s.set(e,null),null):(st(o)?o.forEach(f=>a[f]=null):oe(a,o),xt(e)&&s.set(e,a),a)
}function Ro(e,t){
return!e||!yo(t)?!1:(t=t.slice(2).replace(/Once$/,''),Tt(e,t[0].toLowerCase()+t.slice(1))||Tt(e,As(t))||Tt(e,t))
}function lf(e){
const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:h,renderCache:d,props:m,data:v,setupState:b,ctx:S,inheritAttrs:O}=e,D=ao(e);let P,M;try{
if(n.shapeFlag&4){
const I=i||s,Y=I;P=rn(h.call(Y,I,d,m,b,v,S)),M=c
}else{
const I=t;P=rn(I.length>1?I(m,{attrs:c,slots:a,emit:f}):I(m,null)),M=t.props?c:Ly(c)
}
}catch(I){
ji.length=0,No(I,e,1),P=Gt(_s)
}let F=P;if(M&&O!==!1){
const I=Object.keys(M),{shapeFlag:Y}=F;I.length&&Y&7&&(o&&I.some(Pl)&&(M=$y(M,o)),F=si(F,M,!1,!0))
}return n.dirs&&(F=si(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Gl(F,n.transition),P=F,ao(D),P
}const Ly=e=>{
let t;for(const n in e){
(n==='class'||n==='style'||yo(n))&&((t||(t={}))[n]=e[n])
}return t
},$y=(e,t)=>{
const n={};for(const s in e){
(!Pl(s)||!(s.slice(9)in t))&&(n[s]=e[s])
}return n
};function xy(e,t,n){
const{props:s,children:i,component:o}=e,{props:a,children:c,patchFlag:f}=t,h=o.emitsOptions;if(t.dirs||t.transition){
return!0
}if(n&&f>=0){
if(f&1024){
return!0
}if(f&16){
return s?cf(s,a,h):!!a
}if(f&8){
const d=t.dynamicProps;for(let m=0;m<d.length;m++){
const v=d[m];if(a[v]!==s[v]&&!Ro(h,v)){
return!0
}
}
}
}else {
return(i||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?cf(s,a,h):!0:!!a
}return!1
}function cf(e,t,n){
const s=Object.keys(t);if(s.length!==Object.keys(e).length){
return!0
}for(let i=0;i<s.length;i++){
const o=s[i];if(t[o]!==e[o]&&!Ro(n,o)){
return!0
}
}return!1
}function Iy({vnode:e,parent:t},n){
for(;t;){
const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e){
(e=t.vnode).el=n,t=t.parent
}else {
break
}
}
}const jh=e=>e.__isSuspense;function Py(e,t){
t&&t.pendingBranch?st(e)?t.effects.push(...e):t.effects.push(e):Ub(e)
}const sn=Symbol.for('v-fgt'),Lo=Symbol.for('v-txt'),_s=Symbol.for('v-cmt'),Gr=Symbol.for('v-stc'),ji=[];let Ne=null;function $o(e=!1){
ji.push(Ne=e?null:[])
}function My(){
ji.pop(),Ne=ji[ji.length-1]||null
}let Gi=1;function uf(e,t=!1){
Gi+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)
}function Bh(e){
return e.dynamicChildren=Gi>0?Ne||Js:null,My(),Gi>0&&Ne&&Ne.push(e),e
}function Ql(e,t,n,s,i,o){
return Bh(te(e,t,n,s,i,o,!0))
}function ky(e,t,n,s,i){
return Bh(Gt(e,t,n,s,i,!0))
}function uo(e){
return e?e.__v_isVNode===!0:!1
}function Di(e,t){
return e.type===t.type&&e.key===t.key
}const Wh=({key:e})=>e??null,Xr=({ref:e,ref_key:t,ref_for:n})=>(typeof e==='number'&&(e=''+e),e!=null?jt(e)||re(e)||ot(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function te(e,t=null,n=null,s=0,i=null,o=e===sn?0:1,a=!1,c=!1){
const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wh(t),ref:t&&Xr(t),scopeId:gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ce};return c?(Jl(f,n),o&128&&e.normalize(f)):n&&(f.shapeFlag|=jt(n)?8:16),Gi>0&&!a&&Ne&&(f.patchFlag>0||o&6)&&f.patchFlag!==32&&Ne.push(f),f
}const Gt=Vy;function Vy(e,t=null,n=null,s=0,i=null,o=!1){
if((!e||e===oy)&&(e=_s),uo(e)){
const c=si(e,t,!0);return n&&Jl(c,n),Gi>0&&!o&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(e)]=c:Ne.push(c)),c.patchFlag=-2,c
}if(Gy(e)&&(e=e.__vccOpts),t){
t=Hy(t);let{class:c,style:f}=t;c&&!jt(c)&&(t.class=Hl(c)),xt(f)&&(ql(f)&&!st(f)&&(f=oe({},f)),t.style=Vl(f))
}const a=jt(e)?1:jh(e)?128:qb(e)?64:xt(e)?4:ot(e)?2:0;return te(e,t,n,s,i,a,o,!0)
}function Hy(e){
return e?ql(e)||Dh(e)?oe({},e):e:null
}function si(e,t,n=!1,s=!1){
const{props:i,ref:o,patchFlag:a,children:c,transition:f}=e,h=t?Fy(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Wh(h),ref:t&&t.ref?n&&o?st(o)?o.concat(Xr(t)):[o,Xr(t)]:Xr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==sn?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&si(e.ssContent),ssFallback:e.ssFallback&&si(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&Gl(d,f.clone(d)),d
}function fo(e=' ',t=0){
return Gt(Lo,null,e,t)
}function ml(e,t){
const n=Gt(Gr,null,e);return n.staticCount=t,n
}function jR(e='',t=!1){
return t?($o(),ky(_s,null,e)):Gt(_s,null,e)
}function rn(e){
return e==null||typeof e==='boolean'?Gt(_s):st(e)?Gt(sn,null,e.slice()):uo(e)?$n(e):Gt(Lo,null,String(e))
}function $n(e){
return e.el===null&&e.patchFlag!==-1||e.memo?e:si(e)
}function Jl(e,t){
let n=0;const{shapeFlag:s}=e;if(t==null){
t=null
}else if(st(t)){
n=16
}else if(typeof t==='object'){
if(s&65){
const i=t.default;i&&(i._c&&(i._d=!1),Jl(e,i()),i._c&&(i._d=!0));return
}else{
n=32;const i=t._;!i&&!Dh(t)?t._ctx=Ce:i===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))
}
}else {
ot(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),s&64?(n=16,t=[fo(t)]):n=8)
}e.children=t,e.shapeFlag|=n
}function Fy(...e){
const t={};for(let n=0;n<e.length;n++){
const s=e[n];for(const i in s){
if(i==='class'){
t.class!==s.class&&(t.class=Hl([t.class,s.class]))
}else if(i==='style'){
t.style=Vl([t.style,s.style])
}else if(yo(i)){
const o=t[i],a=s[i];a&&o!==a&&!(st(o)&&o.includes(a))&&(t[i]=o?[].concat(o,a):a)
}else {
i!==''&&(t[i]=s[i])
}
}
}return t
}function tn(e,t,n,s=null){
ln(e,t,7,[n,s])
}const jy=Oh();let By=0;function Wy(e,t,n){
const s=e.type,i=(t?t.appContext:e.appContext)||jy,o={uid:By++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:['',0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(s,i),emitsOptions:Fh(s,i),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:s.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Ry.bind(null,o),e.ce&&e.ce(o),o
}let se=null,ho,_l;{const e=So(),t=(n,s)=>{
let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{
i.length>1?i.forEach(a=>a(o)):i[0](o)
}
};ho=t('__VUE_INSTANCE_SETTERS__',n=>se=n),_l=t('__VUE_SSR_SETTERS__',n=>Xi=n)}const er=e=>{
const t=se;return ho(e),e.scope.on(),()=>{
e.scope.off(),ho(t)
}
},ff=()=>{
se&&se.scope.off(),ho(null)
};function Uh(e){
return e.vnode.shapeFlag&4
}let Xi=!1;function Uy(e,t=!1,n=!1){
t&&_l(t);const{props:s,children:i}=e.vnode,o=Uh(e);_y(e,s,o,t),by(e,i,n);const a=o?Ky(e,t):void 0;return t&&_l(!1),a
}function Ky(e,t){
const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ly);const{setup:s}=n;if(s){
Hn();const i=e.setupContext=s.length>1?Yy(e):null,o=er(e),a=tr(s,e,0,[e.props,i]),c=jd(a);if(Fn(),o(),(c||e.sp)&&!Hi(e)&&vh(e),c){
if(a.then(ff,ff),t){
return a.then(f=>{
df(e,f)
}).catch(f=>{
No(f,e,0)
})
}e.asyncDep=a
}else {
df(e,a)
}
}else {
Kh(e)
}
}function df(e,t,n){
ot(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xt(t)&&(e.setupState=fh(t)),Kh(e)
}function Kh(e,t,n){
const s=e.type;e.render||(e.render=s.render||on);{const i=er(e);Hn();try{
cy(e)
}finally{
Fn(),i()
}}
}const qy={get(e,t){
return ee(e,'get',''),e[t]
}};function Yy(e){
const t=n=>{
e.exposed=n||{}
};return{attrs:new Proxy(e.attrs,qy),slots:e.slots,emit:e.emit,expose:t}
}function xo(e){
return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fh(xb(e.exposed)),{get(t,n){
if(n in t){
return t[n]
}if(n in Fi){
return Fi[n](e)
}
},has(t,n){
return n in t||n in Fi
}})):e.proxy
}function zy(e,t=!0){
return ot(e)?e.displayName||e.name:e.name||t&&e.__name
}function Gy(e){
return ot(e)&&'__vccOpts'in e
}const Ke=(e,t)=>Hb(e,t,Xi);function qh(e,t,n){
const s=arguments.length;return s===2?xt(t)&&!st(t)?uo(t)?Gt(e,null,[t]):Gt(e,t):Gt(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&uo(n)&&(n=[n]),Gt(e,t,n))
}const Xy='3.5.13'/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gl;const hf=typeof window<'u'&&window.trustedTypes;if(hf){
try{
gl=hf.createPolicy('vue',{createHTML:e=>e})
}catch{}
}const Yh=gl?e=>gl.createHTML(e):e=>e,Qy='http://www.w3.org/2000/svg',Jy='http://www.w3.org/1998/Math/MathML',mn=typeof document<'u'?document:null,pf=mn&&mn.createElement('template'),Zy={insert:(e,t,n)=>{
t.insertBefore(e,n||null)
},remove:e=>{
const t=e.parentNode;t&&t.removeChild(e)
},createElement:(e,t,n,s)=>{
const i=t==='svg'?mn.createElementNS(Qy,e):t==='mathml'?mn.createElementNS(Jy,e):n?mn.createElement(e,{is:n}):mn.createElement(e);return e==='select'&&s&&s.multiple!=null&&i.setAttribute('multiple',s.multiple),i
},createText:e=>mn.createTextNode(e),createComment:e=>mn.createComment(e),setText:(e,t)=>{
e.nodeValue=t
},setElementText:(e,t)=>{
e.textContent=t
},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mn.querySelector(e),setScopeId(e,t){
e.setAttribute(t,'')
},insertStaticContent(e,t,n,s,i,o){
const a=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){
for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling));){
;
}
}else{
pf.innerHTML=Yh(s==='svg'?`<svg>${e}</svg>`:s==='mathml'?`<math>${e}</math>`:e);const c=pf.content;if(s==='svg'||s==='mathml'){
const f=c.firstChild;for(;f.firstChild;){
c.appendChild(f.firstChild)
}c.removeChild(f)
}t.insertBefore(c,n)
}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]
}},tA=Symbol('_vtc');function eA(e,t,n){
const s=e[tA];s&&(t=(t?[t,...s]:[...s]).join(' ')),t==null?e.removeAttribute('class'):n?e.setAttribute('class',t):e.className=t
}const po=Symbol('_vod'),zh=Symbol('_vsh'),BR={beforeMount(e,{value:t},{transition:n}){
e[po]=e.style.display==='none'?'':e.style.display,n&&t?n.beforeEnter(e):Ri(e,t)
},mounted(e,{value:t},{transition:n}){
n&&t&&n.enter(e)
},updated(e,{value:t,oldValue:n},{transition:s}){
!t!=!n&&(s?t?(s.beforeEnter(e),Ri(e,!0),s.enter(e)):s.leave(e,()=>{
Ri(e,!1)
}):Ri(e,t))
},beforeUnmount(e,{value:t}){
Ri(e,t)
}};function Ri(e,t){
e.style.display=t?e[po]:'none',e[zh]=!t
}const nA=Symbol(''),sA=/(^|;)\s*display\s*:/;function iA(e,t,n){
const s=e.style,i=jt(n);let o=!1;if(n&&!i){
if(t){
if(jt(t)){
for(const a of t.split(';')){
const c=a.slice(0,a.indexOf(':')).trim();n[c]==null&&Qr(s,c,'')
}
}else {
for(const a in t){
n[a]==null&&Qr(s,a,'')
}
}
}for(const a in n){
a==='display'&&(o=!0),Qr(s,a,n[a])
}
}else if(i){
if(t!==n){
const a=s[nA];a&&(n+=';'+a),s.cssText=n,o=sA.test(n)
}
}else {
t&&e.removeAttribute('style')
}po in e&&(e[po]=o?s.display:'',e[zh]&&(s.display='none'))
}const mf=/\s*!important$/;function Qr(e,t,n){
if(st(n)){
n.forEach(s=>Qr(e,t,s))
}else if(n==null&&(n=''),t.startsWith('--')){
e.setProperty(t,n)
}else{
const s=rA(e,t);mf.test(n)?e.setProperty(As(s),n.replace(mf,''),'important'):e[s]=n
}
}const _f=['Webkit','Moz','ms'],Ia={};function rA(e,t){
const n=Ia[t];if(n){
return n
}let s=Ve(t);if(s!=='filter'&&s in e){
return Ia[t]=s
}s=wo(s);for(let i=0;i<_f.length;i++){
const o=_f[i]+s;if(o in e){
return Ia[t]=o
}
}return t
}const gf='http://www.w3.org/1999/xlink';function Ef(e,t,n,s,i,o=fb(t)){
s&&t.startsWith('xlink:')?n==null?e.removeAttributeNS(gf,t.slice(6,t.length)):e.setAttributeNS(gf,t,n):n==null||o&&!Kd(n)?e.removeAttribute(t):e.setAttribute(t,o?'':Vn(n)?String(n):n)
}function vf(e,t,n,s,i){
if(t==='innerHTML'||t==='textContent'){
n!=null&&(e[t]=t==='innerHTML'?Yh(n):n);return
}const o=e.tagName;if(t==='value'&&o!=='PROGRESS'&&!o.includes('-')){
const c=o==='OPTION'?e.getAttribute('value')||'':e.value,f=n==null?e.type==='checkbox'?'on':'':String(n);(c!==f||!('_value'in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return
}let a=!1;if(n===''||n==null){
const c=typeof e[t];c==='boolean'?n=Kd(n):n==null&&c==='string'?(n='',a=!0):c==='number'&&(n=0,a=!0)
}try{
e[t]=n
}catch{}a&&e.removeAttribute(i||t)
}function qs(e,t,n,s){
e.addEventListener(t,n,s)
}function oA(e,t,n,s){
e.removeEventListener(t,n,s)
}const bf=Symbol('_vei');function aA(e,t,n,s,i=null){
const o=e[bf]||(e[bf]={}),a=o[t];if(s&&a){
a.value=s
}else{
const[c,f]=lA(t);if(s){
const h=o[t]=fA(s,i);qs(e,c,h,f)
}else {
a&&(oA(e,c,a,f),o[t]=void 0)
}
}
}const yf=/(?:Once|Passive|Capture)$/;function lA(e){
let t;if(yf.test(e)){
t={};let s;for(;s=e.match(yf);){
e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0
}
}return[e[2]===':'?e.slice(3):As(e.slice(2)),t]
}let Pa=0;const cA=Promise.resolve(),uA=()=>Pa||(cA.then(()=>Pa=0),Pa=Date.now());function fA(e,t){
const n=s=>{
if(!s._vts){
s._vts=Date.now()
}else if(s._vts<=n.attached){
return
}ln(dA(s,n.value),t,5,[s])
};return n.value=e,n.attached=uA(),n
}function dA(e,t){
if(st(t)){
const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{
n.call(e),e._stopped=!0
},t.map(s=>i=>!i._stopped&&s&&s(i))
}else {
return t
}
}const Af=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,hA=(e,t,n,s,i,o)=>{
const a=i==='svg';t==='class'?eA(e,s,a):t==='style'?iA(e,n,s):yo(t)?Pl(t)||aA(e,t,n,s,o):(t[0]==='.'?(t=t.slice(1),!0):t[0]==='^'?(t=t.slice(1),!1):pA(e,t,s,a))?(vf(e,t,s),!e.tagName.includes('-')&&(t==='value'||t==='checked'||t==='selected')&&Ef(e,t,s,a,o,t!=='value')):e._isVueCE&&(/[A-Z]/.test(t)||!jt(s))?vf(e,Ve(t),s,o,t):(t==='true-value'?e._trueValue=s:t==='false-value'&&(e._falseValue=s),Ef(e,t,s,a))
};function pA(e,t,n,s){
if(s){
return!!(t==='innerHTML'||t==='textContent'||t in e&&Af(t)&&ot(n))
}if(t==='spellcheck'||t==='draggable'||t==='translate'||t==='form'||t==='list'&&e.tagName==='INPUT'||t==='type'&&e.tagName==='TEXTAREA'){
return!1
}if(t==='width'||t==='height'){
const i=e.tagName;if(i==='IMG'||i==='VIDEO'||i==='CANVAS'||i==='SOURCE'){
return!1
}
}return Af(t)&&jt(n)?!1:t in e
}const Tf=e=>{
const t=e.props['onUpdate:modelValue']||!1;return st(t)?n=>qr(t,n):t
};function mA(e){
e.target.composing=!0
}function wf(e){
const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event('input')))
}const Ma=Symbol('_assign'),WR={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){
e[Ma]=Tf(i);const o=s||i.props&&i.props.type==='number';qs(e,t?'change':'input',a=>{
if(a.target.composing){
return
}let c=e.value;n&&(c=c.trim()),o&&(c=rl(c)),e[Ma](c)
}),n&&qs(e,'change',()=>{
e.value=e.value.trim()
}),t||(qs(e,'compositionstart',mA),qs(e,'compositionend',wf),qs(e,'change',wf))
},mounted(e,{value:t}){
e.value=t??''
},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:i,number:o}},a){
if(e[Ma]=Tf(a),e.composing){
return
}const c=(o||e.type==='number')&&!/^0\d/.test(e.value)?rl(e.value):e.value,f=t??'';c!==f&&(document.activeElement===e&&e.type!=='range'&&(s&&t===n||i&&e.value.trim()===f)||(e.value=f))
}},_A=['ctrl','shift','alt','meta'],gA={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>'button'in e&&e.button!==0,middle:e=>'button'in e&&e.button!==1,right:e=>'button'in e&&e.button!==2,exact:(e,t)=>_A.some(n=>e[`${n}Key`]&&!t.includes(n))},UR=(e,t)=>{
const n=e._withMods||(e._withMods={}),s=t.join('.');return n[s]||(n[s]=(i,...o)=>{
for(let a=0;a<t.length;a++){
const c=gA[t[a]];if(c&&c(i,t)){
return
}
}return e(i,...o)
})
},EA=oe({patchProp:hA},Zy);let Sf;function vA(){
return Sf||(Sf=Ay(EA))
}const bA=(...e)=>{
const t=vA().createApp(...e),{mount:n}=t;return t.mount=s=>{
const i=AA(s);if(!i){
return
}const o=t._component;!ot(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent='');const a=n(i,!1,yA(i));return i instanceof Element&&(i.removeAttribute('v-cloak'),i.setAttribute('data-v-app','')),a
},t
};function yA(e){
if(e instanceof SVGElement){
return'svg'
}if(typeof MathMLElement==='function'&&e instanceof MathMLElement){
return'mathml'
}
}function AA(e){
return jt(e)?document.querySelector(e):e
}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ys=typeof document<'u';function Gh(e){
return typeof e==='object'||'displayName'in e||'props'in e||'__vccOpts'in e
}function TA(e){
return e.__esModule||e[Symbol.toStringTag]==='Module'||e.default&&Gh(e.default)
}const yt=Object.assign;function ka(e,t){
const n={};for(const s in t){
const i=t[s];n[s]=Ge(i)?i.map(e):e(i)
}return n
}const Bi=()=>{},Ge=Array.isArray,Xh=/#/g,wA=/&/g,SA=/\//g,OA=/=/g,CA=/\?/g,Qh=/\+/g,NA=/%5B/g,DA=/%5D/g,Jh=/%5E/g,RA=/%60/g,Zh=/%7B/g,LA=/%7C/g,tp=/%7D/g,$A=/%20/g;function Zl(e){
return encodeURI(''+e).replace(LA,'|').replace(NA,'[').replace(DA,']')
}function xA(e){
return Zl(e).replace(Zh,'{').replace(tp,'}').replace(Jh,'^')
}function El(e){
return Zl(e).replace(Qh,'%2B').replace($A,'+').replace(Xh,'%23').replace(wA,'%26').replace(RA,'`').replace(Zh,'{').replace(tp,'}').replace(Jh,'^')
}function IA(e){
return El(e).replace(OA,'%3D')
}function PA(e){
return Zl(e).replace(Xh,'%23').replace(CA,'%3F')
}function MA(e){
return e==null?'':PA(e).replace(SA,'%2F')
}function Qi(e){
try{
return decodeURIComponent(''+e)
}catch{}return''+e
}const kA=/\/$/,VA=e=>e.replace(kA,'');function Va(e,t,n='/'){
let s,i={},o='',a='';const c=t.indexOf('#');let f=t.indexOf('?');return c<f&&c>=0&&(f=-1),f>-1&&(s=t.slice(0,f),o=t.slice(f+1,c>-1?c:t.length),i=e(o)),c>-1&&(s=s||t.slice(0,c),a=t.slice(c,t.length)),s=BA(s??t,n),{fullPath:s+(o&&'?')+o+a,path:s,query:i,hash:Qi(a)}
}function HA(e,t){
const n=t.query?e(t.query):'';return t.path+(n&&'?')+n+(t.hash||'')
}function Of(e,t){
return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||'/'
}function FA(e,t,n){
const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ii(t.matched[s],n.matched[i])&&ep(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash
}function ii(e,t){
return(e.aliasOf||e)===(t.aliasOf||t)
}function ep(e,t){
if(Object.keys(e).length!==Object.keys(t).length){
return!1
}for(const n in e){
if(!jA(e[n],t[n])){
return!1
}
}return!0
}function jA(e,t){
return Ge(e)?Cf(e,t):Ge(t)?Cf(t,e):e===t
}function Cf(e,t){
return Ge(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t
}function BA(e,t){
if(e.startsWith('/')){
return e
}if(!e){
return t
}const n=t.split('/'),s=e.split('/'),i=s[s.length-1];(i==='..'||i==='.')&&s.push('');let o=n.length-1,a,c;for(a=0;a<s.length;a++){
if(c=s[a],c!=='.'){
if(c==='..'){
o>1&&o--
}else {
break
}
}
}return n.slice(0,o).join('/')+'/'+s.slice(a).join('/')
}const Dn={path:'/',name:void 0,params:{},query:{},hash:'',fullPath:'/',matched:[],meta:{},redirectedFrom:void 0};let Ji;(function(e){
e.pop='pop',e.push='push'
})(Ji||(Ji={}));let Wi;(function(e){
e.back='back',e.forward='forward',e.unknown=''
})(Wi||(Wi={}));function WA(e){
if(!e){
if(Ys){
const t=document.querySelector('base');e=t&&t.getAttribute('href')||'/',e=e.replace(/^\w+:\/\/[^\/]+/,'')
}else {
e='/'
}
}return e[0]!=='/'&&e[0]!=='#'&&(e='/'+e),VA(e)
}const UA=/^[^#]+#/;function KA(e,t){
return e.replace(UA,'#')+t
}function qA(e,t){
const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}
}const Io=()=>({left:window.scrollX,top:window.scrollY});function YA(e){
let t;if('el'in e){
const n=e.el,s=typeof n==='string'&&n.startsWith('#'),i=typeof n==='string'?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){
return
}t=qA(i,e)
}else {
t=e
}'scrollBehavior'in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)
}function Nf(e,t){
return(history.state?history.state.position-t:-1)+e
}const vl=new Map;function zA(e,t){
vl.set(e,t)
}function GA(e){
const t=vl.get(e);return vl.delete(e),t
}const XA=()=>location.protocol+'//'+location.host;function np(e,t){
const{pathname:n,search:s,hash:i}=t,o=e.indexOf('#');if(o>-1){
let c=i.includes(e.slice(o))?e.slice(o).length:1,f=i.slice(c);return f[0]!=='/'&&(f='/'+f),Of(f,'')
}return Of(n,e)+s+i
}function QA(e,t,n,s){
let i=[],o=[],a=null;const c=({state:v})=>{
const b=np(e,location),S=n.value,O=t.value;let D=0;if(v){
if(n.value=b,t.value=v,a&&a===S){
a=null;return
}D=O?v.position-O.position:0
}else {
s(b)
}i.forEach(P=>{
P(n.value,S,{delta:D,type:Ji.pop,direction:D?D>0?Wi.forward:Wi.back:Wi.unknown})
})
};function f(){
a=n.value
}function h(v){
i.push(v);const b=()=>{
const S=i.indexOf(v);S>-1&&i.splice(S,1)
};return o.push(b),b
}function d(){
const{history:v}=window;v.state&&v.replaceState(yt({},v.state,{scroll:Io()}),'')
}function m(){
for(const v of o){
v()
}o=[],window.removeEventListener('popstate',c),window.removeEventListener('beforeunload',d)
}return window.addEventListener('popstate',c),window.addEventListener('beforeunload',d,{passive:!0}),{pauseListeners:f,listen:h,destroy:m}
}function Df(e,t,n,s=!1,i=!1){
return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Io():null}
}function JA(e){
const{history:t,location:n}=window,s={value:np(e,n)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(f,h,d){
const m=e.indexOf('#'),v=m>-1?(n.host&&document.querySelector('base')?e:e.slice(m))+f:XA()+e+f;try{
t[d?'replaceState':'pushState'](h,'',v),i.value=h
}catch(b){
console.error(b),n[d?'replace':'assign'](v)
}
}function a(f,h){
const d=yt({},t.state,Df(i.value.back,f,i.value.forward,!0),h,{position:i.value.position});o(f,d,!0),s.value=f
}function c(f,h){
const d=yt({},i.value,t.state,{forward:f,scroll:Io()});o(d.current,d,!0);const m=yt({},Df(s.value,f,null),{position:d.position+1},h);o(f,m,!1),s.value=f
}return{location:s,state:i,push:c,replace:a}
}function ZA(e){
e=WA(e);const t=JA(e),n=QA(e,t.state,t.location,t.replace);function s(o,a=!0){
a||n.pauseListeners(),history.go(o)
}const i=yt({location:'',base:e,go:s,createHref:KA.bind(null,e)},t,n);return Object.defineProperty(i,'location',{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,'state',{enumerable:!0,get:()=>t.state.value}),i
}function tT(e){
return typeof e==='string'||e&&typeof e==='object'
}function sp(e){
return typeof e==='string'||typeof e==='symbol'
}const ip=Symbol('');let Rf;(function(e){
e[e.aborted=4]='aborted',e[e.cancelled=8]='cancelled',e[e.duplicated=16]='duplicated'
})(Rf||(Rf={}));function ri(e,t){
return yt(new Error,{type:e,[ip]:!0},t)
}function pn(e,t){
return e instanceof Error&&ip in e&&(t==null||!!(e.type&t))
}const Lf='[^/]+?',eT={sensitive:!1,strict:!1,start:!0,end:!0},nT=/[.+*?^${}()[\]/\\]/g;function sT(e,t){
const n=yt({},eT,t),s=[];let i=n.start?'^':'';const o=[];for(const h of e){
const d=h.length?[]:[90];n.strict&&!h.length&&(i+='/');for(let m=0;m<h.length;m++){
const v=h[m];let b=40+(n.sensitive?.25:0);if(v.type===0){
m||(i+='/'),i+=v.value.replace(nT,'\\$&'),b+=40
}else if(v.type===1){
const{value:S,repeatable:O,optional:D,regexp:P}=v;o.push({name:S,repeatable:O,optional:D});const M=P||Lf;if(M!==Lf){
b+=10;try{
new RegExp(`(${M})`)
}catch(I){
throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+I.message)
}
}let F=O?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;m||(F=D&&h.length<2?`(?:/${F})`:'/'+F),D&&(F+='?'),i+=F,b+=20,D&&(b+=-8),O&&(b+=-20),M==='.*'&&(b+=-50)
}d.push(b)
}s.push(d)
}if(n.strict&&n.end){
const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001
}n.strict||(i+='/?'),n.end?i+='$':n.strict&&!i.endsWith('/')&&(i+='(?:/|$)');const a=new RegExp(i,n.sensitive?'':'i');function c(h){
const d=h.match(a),m={};if(!d){
return null
}for(let v=1;v<d.length;v++){
const b=d[v]||'',S=o[v-1];m[S.name]=b&&S.repeatable?b.split('/'):b
}return m
}function f(h){
let d='',m=!1;for(const v of e){
(!m||!d.endsWith('/'))&&(d+='/'),m=!1;for(const b of v){
if(b.type===0){
d+=b.value
}else if(b.type===1){
const{value:S,repeatable:O,optional:D}=b,P=S in h?h[S]:'';if(Ge(P)&&!O){
throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`)
}const M=Ge(P)?P.join('/'):P;if(!M){
if(D){
v.length<2&&(d.endsWith('/')?d=d.slice(0,-1):m=!0)
}else {
throw new Error(`Missing required param "${S}"`)
}
}d+=M
}
}
}return d||'/'
}return{re:a,score:s,keys:o,parse:c,stringify:f}
}function iT(e,t){
let n=0;for(;n<e.length&&n<t.length;){
const s=t[n]-e[n];if(s){
return s
}n++
}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0
}function rp(e,t){
let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){
const o=iT(s[n],i[n]);if(o){
return o
}n++
}if(Math.abs(i.length-s.length)===1){
if($f(s)){
return 1
}if($f(i)){
return-1
}
}return i.length-s.length
}function $f(e){
const t=e[e.length-1];return e.length>0&&t[t.length-1]<0
}const rT={type:0,value:''},oT=/[a-zA-Z0-9_]/;function aT(e){
if(!e){
return[[]]
}if(e==='/'){
return[[rT]]
}if(!e.startsWith('/')){
throw new Error(`Invalid path "${e}"`)
}function t(b){
throw new Error(`ERR (${n})/"${h}": ${b}`)
}let n=0,s=n;const i=[];let o;function a(){
o&&i.push(o),o=[]
}let c=0,f,h='',d='';function m(){
h&&(n===0?o.push({type:0,value:h}):n===1||n===2||n===3?(o.length>1&&(f==='*'||f==='+')&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:h,regexp:d,repeatable:f==='*'||f==='+',optional:f==='*'||f==='?'})):t('Invalid state to consume buffer'),h='')
}function v(){
h+=f
}for(;c<e.length;){
if(f=e[c++],f==='\\'&&n!==2){
s=n,n=4;continue
}switch(n){
case 0:f==='/'?(h&&m(),a()):f===':'?(m(),n=1):v();break;case 4:v(),n=s;break;case 1:f==='('?n=2:oT.test(f)?v():(m(),n=0,f!=='*'&&f!=='?'&&f!=='+'&&c--);break;case 2:f===')'?d[d.length-1]=='\\'?d=d.slice(0,-1)+f:n=3:d+=f;break;case 3:m(),n=0,f!=='*'&&f!=='?'&&f!=='+'&&c--,d='';break;default:t('Unknown state');break
}
}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),m(),a(),i
}function lT(e,t,n){
const s=sT(aT(e.path),n),i=yt(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i
}function cT(e,t){
const n=[],s=new Map;t=Mf({strict:!1,end:!0,sensitive:!1},t);function i(m){
return s.get(m)
}function o(m,v,b){
const S=!b,O=If(m);O.aliasOf=b&&b.record;const D=Mf(t,m),P=[O];if('alias'in m){
const I=typeof m.alias==='string'?[m.alias]:m.alias;for(const Y of I){
P.push(If(yt({},O,{components:b?b.record.components:O.components,path:Y,aliasOf:b?b.record:O})))
}
}let M,F;for(const I of P){
const{path:Y}=I;if(v&&Y[0]!=='/'){
const z=v.record.path,G=z[z.length-1]==='/'?'':'/';I.path=v.record.path+(Y&&G+Y)
}if(M=lT(I,v,D),b?b.alias.push(M):(F=F||M,F!==M&&F.alias.push(M),S&&m.name&&!Pf(M)&&a(m.name)),op(M)&&f(M),O.children){
const z=O.children;for(let G=0;G<z.length;G++){
o(z[G],M,b&&b.children[G])
}
}b=b||M
}return F?()=>{
a(F)
}:Bi
}function a(m){
if(sp(m)){
const v=s.get(m);v&&(s.delete(m),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))
}else{
const v=n.indexOf(m);v>-1&&(n.splice(v,1),m.record.name&&s.delete(m.record.name),m.children.forEach(a),m.alias.forEach(a))
}
}function c(){
return n
}function f(m){
const v=dT(m,n);n.splice(v,0,m),m.record.name&&!Pf(m)&&s.set(m.record.name,m)
}function h(m,v){
let b,S={},O,D;if('name'in m&&m.name){
if(b=s.get(m.name),!b){
throw ri(1,{location:m})
}D=b.record.name,S=yt(xf(v.params,b.keys.filter(F=>!F.optional).concat(b.parent?b.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),m.params&&xf(m.params,b.keys.map(F=>F.name))),O=b.stringify(S)
}else if(m.path!=null){
O=m.path,b=n.find(F=>F.re.test(O)),b&&(S=b.parse(O),D=b.record.name)
}else{
if(b=v.name?s.get(v.name):n.find(F=>F.re.test(v.path)),!b){
throw ri(1,{location:m,currentLocation:v})
}D=b.record.name,S=yt({},v.params,m.params),O=b.stringify(S)
}const P=[];let M=b;for(;M;){
P.unshift(M.record),M=M.parent
}return{name:D,path:O,params:S,matched:P,meta:fT(P)}
}e.forEach(m=>o(m));function d(){
n.length=0,s.clear()
}return{addRoute:o,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:i}
}function xf(e,t){
const n={};for(const s of t){
s in e&&(n[s]=e[s])
}return n
}function If(e){
const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:uT(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:'components'in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,'mods',{value:{}}),t
}function uT(e){
const t={},n=e.props||!1;if('component'in e){
t.default=n
}else {
for(const s in e.components){
t[s]=typeof n==='object'?n[s]:n
}
}return t
}function Pf(e){
for(;e;){
if(e.record.aliasOf){
return!0
}e=e.parent
}return!1
}function fT(e){
return e.reduce((t,n)=>yt(t,n.meta),{})
}function Mf(e,t){
const n={};for(const s in e){
n[s]=s in t?t[s]:e[s]
}return n
}function dT(e,t){
let n=0,s=t.length;for(;n!==s;){
const o=n+s>>1;rp(e,t[o])<0?s=o:n=o+1
}const i=hT(e);return i&&(s=t.lastIndexOf(i,s-1)),s
}function hT(e){
let t=e;for(;t=t.parent;){
if(op(t)&&rp(e,t)===0){
return t
}
}
}function op({record:e}){
return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)
}function pT(e){
const t={};if(e===''||e==='?'){
return t
}const s=(e[0]==='?'?e.slice(1):e).split('&');for(let i=0;i<s.length;++i){
const o=s[i].replace(Qh,' '),a=o.indexOf('='),c=Qi(a<0?o:o.slice(0,a)),f=a<0?null:Qi(o.slice(a+1));if(c in t){
let h=t[c];Ge(h)||(h=t[c]=[h]),h.push(f)
}else {
t[c]=f
}
}return t
}function kf(e){
let t='';for(let n in e){
const s=e[n];if(n=IA(n),s==null){
s!==void 0&&(t+=(t.length?'&':'')+n);continue
}(Ge(s)?s.map(o=>o&&El(o)):[s&&El(s)]).forEach(o=>{
o!==void 0&&(t+=(t.length?'&':'')+n,o!=null&&(t+='='+o))
})
}return t
}function mT(e){
const t={};for(const n in e){
const s=e[n];s!==void 0&&(t[n]=Ge(s)?s.map(i=>i==null?null:''+i):s==null?s:''+s)
}return t
}const _T=Symbol(''),Vf=Symbol(''),Po=Symbol(''),tc=Symbol(''),bl=Symbol('');function Li(){
let e=[];function t(s){
return e.push(s),()=>{
const i=e.indexOf(s);i>-1&&e.splice(i,1)
}
}function n(){
e=[]
}return{add:t,list:()=>e.slice(),reset:n}
}function xn(e,t,n,s,i,o=a=>a()){
const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((c,f)=>{
const h=v=>{
v===!1?f(ri(4,{from:n,to:t})):v instanceof Error?f(v):tT(v)?f(ri(2,{from:t,to:v})):(a&&s.enterCallbacks[i]===a&&typeof v==='function'&&a.push(v),c())
},d=o(()=>e.call(s&&s.instances[i],t,n,h));let m=Promise.resolve(d);e.length<3&&(m=m.then(h)),m.catch(v=>f(v))
})
}function Ha(e,t,n,s,i=o=>o()){
const o=[];for(const a of e){
for(const c in a.components){
const f=a.components[c];if(!(t!=='beforeRouteEnter'&&!a.instances[c])){
if(Gh(f)){
const d=(f.__vccOpts||f)[t];d&&o.push(xn(d,n,s,a,c,i))
}else{
const h=f();o.push(()=>h.then(d=>{
if(!d){
throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`)
}const m=TA(d)?d.default:d;a.mods[c]=d,a.components[c]=m;const b=(m.__vccOpts||m)[t];return b&&xn(b,n,s,a,c,i)()
}))
}
}
}
}return o
}function Hf(e){
const t=Ye(Po),n=Ye(tc),s=Ke(()=>{
const f=Pn(e.to);return t.resolve(f)
}),i=Ke(()=>{
const{matched:f}=s.value,{length:h}=f,d=f[h-1],m=n.matched;if(!d||!m.length){
return-1
}const v=m.findIndex(ii.bind(null,d));if(v>-1){
return v
}const b=Ff(f[h-2]);return h>1&&Ff(d)===b&&m[m.length-1].path!==b?m.findIndex(ii.bind(null,f[h-2])):v
}),o=Ke(()=>i.value>-1&&bT(n.params,s.value.params)),a=Ke(()=>i.value>-1&&i.value===n.matched.length-1&&ep(n.params,s.value.params));function c(f={}){
if(vT(f)){
const h=t[Pn(e.replace)?'replace':'push'](Pn(e.to)).catch(Bi);return e.viewTransition&&typeof document<'u'&&'startViewTransition'in document&&document.startViewTransition(()=>h),h
}return Promise.resolve()
}return{route:s,href:Ke(()=>s.value.href),isActive:o,isExactActive:a,navigate:c}
}function gT(e){
return e.length===1?e[0]:e
}const ET=Eh({name:'RouterLink',compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:'page'}},useLink:Hf,setup(e,{slots:t}){
const n=Co(Hf(e)),{options:s}=Ye(Po),i=Ke(()=>({[jf(e.activeClass,s.linkActiveClass,'router-link-active')]:n.isActive,[jf(e.exactActiveClass,s.linkExactActiveClass,'router-link-exact-active')]:n.isExactActive}));return()=>{
const o=t.default&&gT(t.default(n));return e.custom?o:qh('a',{'aria-current':n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)
}
}}),ap=ET;function vT(e){
if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){
if(e.currentTarget&&e.currentTarget.getAttribute){
const t=e.currentTarget.getAttribute('target');if(/\b_blank\b/i.test(t)){
return
}
}return e.preventDefault&&e.preventDefault(),!0
}
}function bT(e,t){
for(const n in t){
const s=t[n],i=e[n];if(typeof s==='string'){
if(s!==i){
return!1
}
}else if(!Ge(i)||i.length!==s.length||s.some((o,a)=>o!==i[a])){
return!1
}
}return!0
}function Ff(e){
return e?e.aliasOf?e.aliasOf.path:e.path:''
}const jf=(e,t,n)=>e??t??n,yT=Eh({name:'RouterView',inheritAttrs:!1,props:{name:{type:String,default:'default'},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){
const s=Ye(bl),i=Ke(()=>e.route||s.value),o=Ye(Vf,0),a=Ke(()=>{
let h=Pn(o);const{matched:d}=i.value;let m;for(;(m=d[h])&&!m.components;){
h++
}return h
}),c=Ke(()=>i.value.matched[a.value]);Yr(Vf,Ke(()=>a.value+1)),Yr(_T,c),Yr(bl,i);const f=Ib();return zr(()=>[f.value,c.value,e.name],([h,d,m],[v,b,S])=>{
d&&(d.instances[m]=h,b&&b!==d&&h&&h===v&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),h&&d&&(!b||!ii(d,b)||!v)&&(d.enterCallbacks[m]||[]).forEach(O=>O(h))
},{flush:'post'}),()=>{
const h=i.value,d=e.name,m=c.value,v=m&&m.components[d];if(!v){
return Bf(n.default,{Component:v,route:h})
}const b=m.props[d],S=b?b===!0?h.params:typeof b==='function'?b(h):b:null,D=qh(v,yt({},S,t,{onVnodeUnmounted:P=>{
P.component.isUnmounted&&(m.instances[d]=null)
},ref:f}));return Bf(n.default,{Component:D,route:h})||D
}
}});function Bf(e,t){
if(!e){
return null
}const n=e(t);return n.length===1?n[0]:n
}const lp=yT;function AT(e){
const t=cT(e.routes,e),n=e.parseQuery||pT,s=e.stringifyQuery||kf,i=e.history,o=Li(),a=Li(),c=Li(),f=Pb(Dn);let h=Dn;Ys&&e.scrollBehavior&&'scrollRestoration'in history&&(history.scrollRestoration='manual');const d=ka.bind(null,L=>''+L),m=ka.bind(null,MA),v=ka.bind(null,Qi);function b(L,y){
let U,X;return sp(L)?(U=t.getRecordMatcher(L),X=y):X=L,t.addRoute(X,U)
}function S(L){
const y=t.getRecordMatcher(L);y&&t.removeRoute(y)
}function O(){
return t.getRoutes().map(L=>L.record)
}function D(L){
return!!t.getRecordMatcher(L)
}function P(L,y){
if(y=yt({},y||f.value),typeof L==='string'){
const A=Va(n,L,y.path),R=t.resolve({path:A.path},y),x=i.createHref(A.fullPath);return yt(A,R,{params:v(R.params),hash:Qi(A.hash),redirectedFrom:void 0,href:x})
}let U;if(L.path!=null){
U=yt({},L,{path:Va(n,L.path,y.path).path})
}else{
const A=yt({},L.params);for(const R in A){
A[R]==null&&delete A[R]
}U=yt({},L,{params:m(A)}),y.params=m(y.params)
}const X=t.resolve(U,y),mt=L.hash||'';X.params=d(v(X.params));const _=HA(s,yt({},L,{hash:xA(mt),path:X.path})),E=i.createHref(_);return yt({fullPath:_,hash:mt,query:s===kf?mT(L.query):L.query||{}},X,{redirectedFrom:void 0,href:E})
}function M(L){
return typeof L==='string'?Va(n,L,f.value.path):yt({},L)
}function F(L,y){
if(h!==L){
return ri(8,{from:y,to:L})
}
}function I(L){
return G(L)
}function Y(L){
return I(yt(M(L),{replace:!0}))
}function z(L){
const y=L.matched[L.matched.length-1];if(y&&y.redirect){
const{redirect:U}=y;let X=typeof U==='function'?U(L):U;return typeof X==='string'&&(X=X.includes('?')||X.includes('#')?X=M(X):{path:X},X.params={}),yt({query:L.query,hash:L.hash,params:X.path!=null?{}:L.params},X)
}
}function G(L,y){
const U=h=P(L),X=f.value,mt=L.state,_=L.force,E=L.replace===!0,A=z(U);if(A){
return G(yt(M(A),{state:typeof A==='object'?yt({},mt,A.state):mt,force:_,replace:E}),y||U)
}const R=U;R.redirectedFrom=y;let x;return!_&&FA(s,X,U)&&(x=ri(16,{to:R,from:X}),Xt(X,X,!0,!1)),(x?Promise.resolve(x):_t(R,X)).catch(T=>pn(T)?pn(T,2)?T:ae(T):ut(T,R,X)).then(T=>{
if(T){
if(pn(T,2)){
return G(yt({replace:E},M(T.to),{state:typeof T.to==='object'?yt({},mt,T.to.state):mt,force:_}),y||R)
}
}else {
T=Mt(R,X,!0,E,mt)
}return Ct(R,X,T),T
})
}function nt(L,y){
const U=F(L,y);return U?Promise.reject(U):Promise.resolve()
}function gt(L){
const y=Qt.values().next().value;return y&&typeof y.runWithContext==='function'?y.runWithContext(L):L()
}function _t(L,y){
let U;const[X,mt,_]=TT(L,y);U=Ha(X.reverse(),'beforeRouteLeave',L,y);for(const A of X){
A.leaveGuards.forEach(R=>{
U.push(xn(R,L,y))
})
}const E=nt.bind(null,L,y);return U.push(E),Ft(U).then(()=>{
U=[];for(const A of o.list()){
U.push(xn(A,L,y))
}return U.push(E),Ft(U)
}).then(()=>{
U=Ha(mt,'beforeRouteUpdate',L,y);for(const A of mt){
A.updateGuards.forEach(R=>{
U.push(xn(R,L,y))
})
}return U.push(E),Ft(U)
}).then(()=>{
U=[];for(const A of _){
if(A.beforeEnter){
if(Ge(A.beforeEnter)){
for(const R of A.beforeEnter){
U.push(xn(R,L,y))
}
}else {
U.push(xn(A.beforeEnter,L,y))
}
}
}return U.push(E),Ft(U)
}).then(()=>(L.matched.forEach(A=>A.enterCallbacks={}),U=Ha(_,'beforeRouteEnter',L,y,gt),U.push(E),Ft(U))).then(()=>{
U=[];for(const A of a.list()){
U.push(xn(A,L,y))
}return U.push(E),Ft(U)
}).catch(A=>pn(A,8)?A:Promise.reject(A))
}function Ct(L,y,U){
c.list().forEach(X=>gt(()=>X(L,y,U)))
}function Mt(L,y,U,X,mt){
const _=F(L,y);if(_){
return _
}const E=y===Dn,A=Ys?history.state:{};U&&(X||E?i.replace(L.fullPath,yt({scroll:E&&A&&A.scroll},mt)):i.push(L.fullPath,mt)),f.value=L,Xt(L,y,U,E),ae()
}let wt;function Ut(){
wt||(wt=i.listen((L,y,U)=>{
if(!qt.listening){
return
}const X=P(L),mt=z(X);if(mt){
G(yt(mt,{replace:!0,force:!0}),X).catch(Bi);return
}h=X;const _=f.value;Ys&&zA(Nf(_.fullPath,U.delta),Io()),_t(X,_).catch(E=>pn(E,12)?E:pn(E,2)?(G(yt(M(E.to),{force:!0}),X).then(A=>{
pn(A,20)&&!U.delta&&U.type===Ji.pop&&i.go(-1,!1)
}).catch(Bi),Promise.reject()):(U.delta&&i.go(-U.delta,!1),ut(E,X,_))).then(E=>{
E=E||Mt(X,_,!1),E&&(U.delta&&!pn(E,8)?i.go(-U.delta,!1):U.type===Ji.pop&&pn(E,20)&&i.go(-1,!1)),Ct(X,_,E)
}).catch(Bi)
}))
}let Kt=Li(),pt=Li(),at;function ut(L,y,U){
ae(L);const X=pt.list();return X.length?X.forEach(mt=>mt(L,y,U)):console.error(L),Promise.reject(L)
}function Ht(){
return at&&f.value!==Dn?Promise.resolve():new Promise((L,y)=>{
Kt.add([L,y])
})
}function ae(L){
return at||(at=!L,Ut(),Kt.list().forEach(([y,U])=>L?U(L):y()),Kt.reset()),L
}function Xt(L,y,U,X){
const{scrollBehavior:mt}=e;if(!Ys||!mt){
return Promise.resolve()
}const _=!U&&GA(Nf(L.fullPath,0))||(X||!U)&&history.state&&history.state.scroll||null;return hh().then(()=>mt(L,y,_)).then(E=>E&&YA(E)).catch(E=>ut(E,L,y))
}const It=L=>i.go(L);let ge;const Qt=new Set,qt={currentRoute:f,listening:!0,addRoute:b,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:D,getRoutes:O,resolve:P,options:e,push:I,replace:Y,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:pt.add,isReady:Ht,install(L){
const y=this;L.component('RouterLink',ap),L.component('RouterView',lp),L.config.globalProperties.$router=y,Object.defineProperty(L.config.globalProperties,'$route',{enumerable:!0,get:()=>Pn(f)}),Ys&&!ge&&f.value===Dn&&(ge=!0,I(i.location).catch(mt=>{}));const U={};for(const mt in Dn){
Object.defineProperty(U,mt,{get:()=>f.value[mt],enumerable:!0})
}L.provide(Po,y),L.provide(tc,lh(U)),L.provide(bl,f);const X=L.unmount;Qt.add(L),L.unmount=function(){
Qt.delete(L),Qt.size<1&&(h=Dn,wt&&wt(),wt=null,f.value=Dn,ge=!1,at=!1),X()
}
}};function Ft(L){
return L.reduce((y,U)=>y.then(()=>gt(U)),Promise.resolve())
}return qt
}function TT(e,t){
const n=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){
const c=t.matched[a];c&&(e.matched.find(h=>ii(h,c))?s.push(c):n.push(c));const f=e.matched[a];f&&(t.matched.find(h=>ii(h,f))||i.push(f))
}return[n,s,i]
}function wT(){
return Ye(Po)
}function ST(e){
return Ye(tc)
}const OT=(e,t)=>{
const n=e.__vccOpts||e;for(const[s,i]of t){
n[s]=i
}return n
},CT={class:'bg-light py-3 mt-auto'},NT={class:'container'},DT={class:'row'},RT={class:'col-md-6 text-center text-md-end'},LT={class:'mb-0'},$T={__name:'App',setup(e){
return(t,n)=>($o(),Ql(sn,null,[n[3]||(n[3]=ml('<header class="bg-primary py-3" data-v-75995141><div class="container" data-v-75995141><div class="d-flex justify-content-between align-items-center" data-v-75995141><a href="/" class="text-white text-decoration-none" data-v-75995141><h1 class="h4 m-0" data-v-75995141>Atliekų Išvežimo Grafikai Lietuva</h1></a></div></div></header>',1)),te('main',null,[Gt(Pn(lp))]),te('footer',CT,[te('div',NT,[te('div',DT,[n[2]||(n[2]=te('div',{class:'col-md-6 text-center text-md-start'},[te('p',{class:'mb-0'},'© 2025 Atliekų išvežimo grafikai')],-1)),te('div',RT,[te('p',LT,[n[1]||(n[1]=te('a',{href:'https://github.com/alicemq/trashScheduleLithuania',target:'_blank',class:'text-decoration-none me-2'},[te('i',{class:'bi bi-github'}),fo(' GitHub ')],-1)),Gt(Pn(ap),{to:'/changelog',class:'text-decoration-none'},{default:zl(()=>n[0]||(n[0]=[fo('Pakeitimų žurnalas')])),_:1})])])])])])],64))
}},xT=OT($T,[['__scopeId','data-v-75995141']]),IT='modulepreload',PT=function(e){
return'/'+e
},Wf={},Fa=function(t,n,s){
let i=Promise.resolve();if(n&&n.length>0){
document.getElementsByTagName('link');const a=document.querySelector('meta[property=csp-nonce]'),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute('nonce'));i=Promise.allSettled(n.map(f=>{
if(f=PT(f),f in Wf){
return
}Wf[f]=!0;const h=f.endsWith('.css'),d=h?'[rel="stylesheet"]':'';if(document.querySelector(`link[href="${f}"]${d}`)){
return
}const m=document.createElement('link');if(m.rel=h?'stylesheet':IT,h||(m.as='script'),m.crossOrigin='',m.href=f,c&&m.setAttribute('nonce',c),document.head.appendChild(m),h){
return new Promise((v,b)=>{
m.addEventListener('load',v),m.addEventListener('error',()=>b(new Error(`Unable to preload CSS for ${f}`)))
})
}
}))
}function o(a){
const c=new Event('vite:preloadError',{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented){
throw a
}
}return i.then(a=>{
for(const c of a||[]){
c.status==='rejected'&&o(c.reason)
}return t().catch(o)
})
},MT={class:'container py-4'},kT={class:'row justify-content-center'},VT={class:'col-md-8'},HT={class:'text-center mb-4'},FT={__name:'HomeView',setup(e){
return wT(),(t,n)=>{
const s=ry('router-link');return $o(),Ql('div',MT,[te('div',kT,[te('div',VT,[n[1]||(n[1]=ml('<h1 class="mb-4">Atliekų Išvežimo Grafikai Lietuva</h1><div class="card mb-4"><div class="card-header"><h2 class="h5 mb-0">Kaip naudotis?</h2></div><div class="card-body"><ol class="mb-0"><li>Įveskite savo adresą</li><li>Pasirinkite priminimų nustatymus</li><li>Pridėkite kalendorių vienu paspaudimu į: <ul><li>Google Calendar</li><li>Outlook</li><li>Apple Calendar</li></ul></li></ol></div></div>',2)),te('div',HT,[Gt(s,{to:'/generate',class:'btn btn-primary btn-lg px-5'},{default:zl(()=>n[0]||(n[0]=[te('i',{class:'bi bi-calendar-plus me-2'},null,-1),fo('Pradėti kurti kalendorių ')])),_:1})]),n[2]||(n[2]=ml('<div class="card mb-4"><div class="card-body"><p>Ši svetainė – puikus įrankis Kauno Švaros klientams, leidžiantis patogiai sekti atliekų išvežimo grafikus tiesiai telefone ar kompiuteryje. Naudodamiesi svetaine galite susikurti specialią kalendoriaus nuorodą (iCal formato), kuri automatiškai pridės atliekų išvežimo datas į jūsų mėgstamą kalendoriaus programėlę („Google Calendar&quot;, „Outlook&quot; ar kt.). Taip pat svetainė leidžia nustatyti priminimus, todėl visada laiku gausite pranešimą, kada išstumti atliekų konteinerius.</p><p>Pamiršote, kada išvežamos šiukšlės? Nebereikės skambinti į atliekų surinkimo įmones ar kaimynams! Su mūsų kalendoriumi visada žinosite tikslų datą. Jokių praleistų šiukšlių išvežimo dienų ir jokių nemalonių kvapų!</p><p class="mb-0">Tai padeda išvengti situacijų, kai pamirštama išstumti konteinerius laiku, užtikrina tvarkingą gyvenamąją aplinką ir sumažina stresą dėl praleistų išvežimų. Patogu, paprasta ir naudinga – nereikės daugiau rūpintis popieriniais grafikais ar ieškoti informacijos kituose šaltiniuose.</p></div></div><div class="card mb-4"><div class="card-header"><h2 class="h5 mb-0">Dažniausiai užduodami klausimai</h2></div><div class="card-body"><div class="accordion" id="faqAccordion"><div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"> Kokius kalendorius palaiko sistema? </button></h3><div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body"> Sistema palaiko visas populiariausias kalendorių programas: <ul><li>Google Calendar</li><li>Microsoft Outlook</li><li>Apple Calendar</li><li>Bet kurią kitą programą, palaikančią .ics failus</li></ul></div></div></div><div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"> Kaip veikia priminimai? </button></h3><div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body"><p>Galite nustatyti:</p><ul><li>Dienų skaičių prieš išvežimą</li><li>Priminimo laiką</li><li>Priminimai veiks visose kalendoriaus programose</li></ul></div></div></div><div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3"> Ar kalendorius atsinaujina automatiškai? </button></h3><div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body"> Taip, naudojant kalendoriaus URL prenumeratą, tvarkaraštis atsinaujins automatiškai. Parsisiųstą .ics failą reikės atnaujinti rankiniu būdu. </div></div></div><div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4"> Kaip nustatyti numatytuosius priminimus kalendoriuje? </button></h3><div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body"><p>Papildomi priminimai pagal kalendoriaus programą:</p><ul><li><strong>Google Calendar:</strong><ol><li>Eikite į kalendoriaus nustatymus (3 taškai prie kalendoriaus pavadinimo)</li><li>Pasirinkite &quot;Notifications&quot;</li><li>Nustatykite numatytuosius priminimus visiems įvykiams</li></ol></li><li><strong>Outlook:</strong><ol><li>Atidarykite kalendoriaus nustatymus</li><li>Pasirinkite &quot;Calendar options&quot;</li><li>Nustatykite &quot;Default reminders&quot;</li></ol></li><li><strong>Apple Calendar:</strong><ol><li>Eikite į Calendar nustatymus</li><li>Pasirinkite &quot;Alerts&quot;</li><li>Nustatykite numatytuosius priminimus</li></ol></li></ul></div></div></div></div></div></div>',2))])])])
}
}};function cp(e,t){
return function(){
return e.apply(t,arguments)
}
}const{toString:jT}=Object.prototype,{getPrototypeOf:ec}=Object,Mo=(e=>t=>{
const n=jT.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())
})(Object.create(null)),Xe=e=>(e=e.toLowerCase(),t=>Mo(t)===e),ko=e=>t=>typeof t===e,{isArray:di}=Array,Zi=ko('undefined');function BT(e){
return e!==null&&!Zi(e)&&e.constructor!==null&&!Zi(e.constructor)&&De(e.constructor.isBuffer)&&e.constructor.isBuffer(e)
}const up=Xe('ArrayBuffer');function WT(e){
let t;return typeof ArrayBuffer<'u'&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&up(e.buffer),t
}const UT=ko('string'),De=ko('function'),fp=ko('number'),Vo=e=>e!==null&&typeof e==='object',KT=e=>e===!0||e===!1,Jr=e=>{
if(Mo(e)!=='object'){
return!1
}const t=ec(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)
},qT=Xe('Date'),YT=Xe('File'),zT=Xe('Blob'),GT=Xe('FileList'),XT=e=>Vo(e)&&De(e.pipe),QT=e=>{
let t;return e&&(typeof FormData==='function'&&e instanceof FormData||De(e.append)&&((t=Mo(e))==='formdata'||t==='object'&&De(e.toString)&&e.toString()==='[object FormData]'))
},JT=Xe('URLSearchParams'),[ZT,tw,ew,nw]=['ReadableStream','Request','Response','Headers'].map(Xe),sw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');function nr(e,t,{allOwnKeys:n=!1}={}){
if(e===null||typeof e>'u'){
return
}let s,i;if(typeof e!=='object'&&(e=[e]),di(e)){
for(s=0,i=e.length;s<i;s++){
t.call(null,e[s],s,e)
}
}else{
const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let c;for(s=0;s<a;s++){
c=o[s],t.call(null,e[c],c,e)
}
}
}function dp(e,t){
t=t.toLowerCase();const n=Object.keys(e);let s=n.length,i;for(;s-- >0;){
if(i=n[s],t===i.toLowerCase()){
return i
}
}return null
}const cs=typeof globalThis<'u'?globalThis:typeof self<'u'?self:typeof window<'u'?window:global,hp=e=>!Zi(e)&&e!==cs;function yl(){
const{caseless:e}=hp(this)&&this||{},t={},n=(s,i)=>{
const o=e&&dp(t,i)||i;Jr(t[o])&&Jr(s)?t[o]=yl(t[o],s):Jr(s)?t[o]=yl({},s):di(s)?t[o]=s.slice():t[o]=s
};for(let s=0,i=arguments.length;s<i;s++){
arguments[s]&&nr(arguments[s],n)
}return t
}const iw=(e,t,n,{allOwnKeys:s}={})=>(nr(t,(i,o)=>{
n&&De(i)?e[o]=cp(i,n):e[o]=i
},{allOwnKeys:s}),e),rw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ow=(e,t,n,s)=>{
e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,'super',{value:t.prototype}),n&&Object.assign(e.prototype,n)
},aw=(e,t,n,s)=>{
let i,o,a;const c={};if(t=t||{},e==null){
return t
}do{
for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;){
a=i[o],(!s||s(a,e,t))&&!c[a]&&(t[a]=e[a],c[a]=!0)
}e=n!==!1&&ec(e)
}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t
},lw=(e,t,n)=>{
e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n
},cw=e=>{
if(!e){
return null
}if(di(e)){
return e
}let t=e.length;if(!fp(t)){
return null
}const n=new Array(t);for(;t-- >0;){
n[t]=e[t]
}return n
},uw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<'u'&&ec(Uint8Array)),fw=(e,t)=>{
const s=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=s.next())&&!i.done;){
const o=i.value;t.call(e,o[0],o[1])
}
},dw=(e,t)=>{
let n;const s=[];for(;(n=e.exec(t))!==null;){
s.push(n)
}return s
},hw=Xe('HTMLFormElement'),pw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,i){
return s.toUpperCase()+i
}),Uf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mw=Xe('RegExp'),pp=(e,t)=>{
const n=Object.getOwnPropertyDescriptors(e),s={};nr(n,(i,o)=>{
let a;(a=t(i,o,e))!==!1&&(s[o]=a||i)
}),Object.defineProperties(e,s)
},_w=e=>{
pp(e,(t,n)=>{
if(De(e)&&['arguments','caller','callee'].indexOf(n)!==-1){
return!1
}const s=e[n];if(De(s)){
if(t.enumerable=!1,'writable'in t){
t.writable=!1;return
}t.set||(t.set=()=>{
throw Error("Can not rewrite read-only method '"+n+"'")
})
}
})
},gw=(e,t)=>{
const n={},s=i=>{
i.forEach(o=>{
n[o]=!0
})
};return di(e)?s(e):s(String(e).split(t)),n
},Ew=()=>{},vw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function bw(e){
return!!(e&&De(e.append)&&e[Symbol.toStringTag]==='FormData'&&e[Symbol.iterator])
}const yw=e=>{
const t=new Array(10),n=(s,i)=>{
if(Vo(s)){
if(t.indexOf(s)>=0){
return
}if(!('toJSON'in s)){
t[i]=s;const o=di(s)?[]:{};return nr(s,(a,c)=>{
const f=n(a,i+1);!Zi(f)&&(o[c]=f)
}),t[i]=void 0,o
}
}return s
};return n(e,0)
},Aw=Xe('AsyncFunction'),Tw=e=>e&&(Vo(e)||De(e))&&De(e.then)&&De(e.catch),mp=((e,t)=>e?setImmediate:t?((n,s)=>(cs.addEventListener('message',({source:i,data:o})=>{
i===cs&&o===n&&s.length&&s.shift()()
},!1),i=>{
s.push(i),cs.postMessage(n,'*')
}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate==='function',De(cs.postMessage)),ww=typeof queueMicrotask<'u'?queueMicrotask.bind(cs):typeof process<'u'&&process.nextTick||mp,N={isArray:di,isArrayBuffer:up,isBuffer:BT,isFormData:QT,isArrayBufferView:WT,isString:UT,isNumber:fp,isBoolean:KT,isObject:Vo,isPlainObject:Jr,isReadableStream:ZT,isRequest:tw,isResponse:ew,isHeaders:nw,isUndefined:Zi,isDate:qT,isFile:YT,isBlob:zT,isRegExp:mw,isFunction:De,isStream:XT,isURLSearchParams:JT,isTypedArray:uw,isFileList:GT,forEach:nr,merge:yl,extend:iw,trim:sw,stripBOM:rw,inherits:ow,toFlatObject:aw,kindOf:Mo,kindOfTest:Xe,endsWith:lw,toArray:cw,forEachEntry:fw,matchAll:dw,isHTMLForm:hw,hasOwnProperty:Uf,hasOwnProp:Uf,reduceDescriptors:pp,freezeMethods:_w,toObjectSet:gw,toCamelCase:pw,noop:Ew,toFiniteNumber:vw,findKey:dp,global:cs,isContextDefined:hp,isSpecCompliantForm:bw,toJSONObject:yw,isAsyncFn:Aw,isThenable:Tw,setImmediate:mp,asap:ww};function lt(e,t,n,s,i){
Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name='AxiosError',t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i,this.status=i.status?i.status:null)
}N.inherits(lt,Error,{toJSON:function(){
return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}
}});const _p=lt.prototype,gp={};['ERR_BAD_OPTION_VALUE','ERR_BAD_OPTION','ECONNABORTED','ETIMEDOUT','ERR_NETWORK','ERR_FR_TOO_MANY_REDIRECTS','ERR_DEPRECATED','ERR_BAD_RESPONSE','ERR_BAD_REQUEST','ERR_CANCELED','ERR_NOT_SUPPORT','ERR_INVALID_URL'].forEach(e=>{
gp[e]={value:e}
});Object.defineProperties(lt,gp);Object.defineProperty(_p,'isAxiosError',{value:!0});lt.from=(e,t,n,s,i,o)=>{
const a=Object.create(_p);return N.toFlatObject(e,a,function(f){
return f!==Error.prototype
},c=>c!=='isAxiosError'),lt.call(a,e.message,t,n,s,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a
};const Sw=null;function Al(e){
return N.isPlainObject(e)||N.isArray(e)
}function Ep(e){
return N.endsWith(e,'[]')?e.slice(0,-2):e
}function Kf(e,t,n){
return e?e.concat(t).map(function(i,o){
return i=Ep(i),!n&&o?'['+i+']':i
}).join(n?'.':''):t
}function Ow(e){
return N.isArray(e)&&!e.some(Al)
}const Cw=N.toFlatObject(N,{},null,function(t){
return/^is[A-Z]/.test(t)
});function Ho(e,t,n){
if(!N.isObject(e)){
throw new TypeError('target must be an object')
}t=t||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,D){
return!N.isUndefined(D[O])
});const s=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,f=(n.Blob||typeof Blob<'u'&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(i)){
throw new TypeError('visitor must be a function')
}function h(S){
if(S===null){
return''
}if(N.isDate(S)){
return S.toISOString()
}if(!f&&N.isBlob(S)){
throw new lt('Blob is not supported. Use a Buffer instead.')
}return N.isArrayBuffer(S)||N.isTypedArray(S)?f&&typeof Blob==='function'?new Blob([S]):Buffer.from(S):S
}function d(S,O,D){
let P=S;if(S&&!D&&typeof S==='object'){
if(N.endsWith(O,'{}')){
O=s?O:O.slice(0,-2),S=JSON.stringify(S)
}else if(N.isArray(S)&&Ow(S)||(N.isFileList(S)||N.endsWith(O,'[]'))&&(P=N.toArray(S))){
return O=Ep(O),P.forEach(function(F,I){
!(N.isUndefined(F)||F===null)&&t.append(a===!0?Kf([O],I,o):a===null?O:O+'[]',h(F))
}),!1
}
}return Al(S)?!0:(t.append(Kf(D,O,o),h(S)),!1)
}const m=[],v=Object.assign(Cw,{defaultVisitor:d,convertValue:h,isVisitable:Al});function b(S,O){
if(!N.isUndefined(S)){
if(m.indexOf(S)!==-1){
throw Error('Circular reference detected in '+O.join('.'))
}m.push(S),N.forEach(S,function(P,M){
(!(N.isUndefined(P)||P===null)&&i.call(t,P,N.isString(M)?M.trim():M,O,v))===!0&&b(P,O?O.concat(M):[M])
}),m.pop()
}
}if(!N.isObject(e)){
throw new TypeError('data must be an object')
}return b(e),t
}function qf(e){
const t={'!':'%21',"'":'%27','(':'%28',')':'%29','~':'%7E','%20':'+','%00':'\0'};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){
return t[s]
})
}function nc(e,t){
this._pairs=[],e&&Ho(e,this,t)
}const vp=nc.prototype;vp.append=function(t,n){
this._pairs.push([t,n])
};vp.toString=function(t){
const n=t?function(s){
return t.call(this,s,qf)
}:qf;return this._pairs.map(function(i){
return n(i[0])+'='+n(i[1])
},'').join('&')
};function Nw(e){
return encodeURIComponent(e).replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']')
}function bp(e,t,n){
if(!t){
return e
}const s=n&&n.encode||Nw;N.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(t,n):o=N.isURLSearchParams(t)?t.toString():new nc(t,n).toString(s),o){
const a=e.indexOf('#');a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf('?')===-1?'?':'&')+o
}return e
}class Yf{
constructor(){
this.handlers=[]
}use(t,n,s){
return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1
}eject(t){
this.handlers[t]&&(this.handlers[t]=null)
}clear(){
this.handlers&&(this.handlers=[])
}forEach(t){
N.forEach(this.handlers,function(s){
s!==null&&t(s)
})
}
}const yp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dw=typeof URLSearchParams<'u'?URLSearchParams:nc,Rw=typeof FormData<'u'?FormData:null,Lw=typeof Blob<'u'?Blob:null,$w={isBrowser:!0,classes:{URLSearchParams:Dw,FormData:Rw,Blob:Lw},protocols:['http','https','file','blob','url','data']},sc=typeof window<'u'&&typeof document<'u',Tl=typeof navigator==='object'&&navigator||void 0,xw=sc&&(!Tl||['ReactNative','NativeScript','NS'].indexOf(Tl.product)<0),Iw=typeof WorkerGlobalScope<'u'&&self instanceof WorkerGlobalScope&&typeof self.importScripts==='function',Pw=sc&&window.location.href||'http://localhost',Mw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sc,hasStandardBrowserEnv:xw,hasStandardBrowserWebWorkerEnv:Iw,navigator:Tl,origin:Pw},Symbol.toStringTag,{value:'Module'})),ie={...Mw,...$w};function kw(e,t){
return Ho(e,new ie.classes.URLSearchParams,Object.assign({visitor:function(n,s,i,o){
return ie.isNode&&N.isBuffer(n)?(this.append(s,n.toString('base64')),!1):o.defaultVisitor.apply(this,arguments)
}},t))
}function Vw(e){
return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==='[]'?'':t[1]||t[0])
}function Hw(e){
const t={},n=Object.keys(e);let s;const i=n.length;let o;for(s=0;s<i;s++){
o=n[s],t[o]=e[o]
}return t
}function Ap(e){
function t(n,s,i,o){
let a=n[o++];if(a==='__proto__'){
return!0
}const c=Number.isFinite(+a),f=o>=n.length;return a=!a&&N.isArray(i)?i.length:a,f?(N.hasOwnProp(i,a)?i[a]=[i[a],s]:i[a]=s,!c):((!i[a]||!N.isObject(i[a]))&&(i[a]=[]),t(n,s,i[a],o)&&N.isArray(i[a])&&(i[a]=Hw(i[a])),!c)
}if(N.isFormData(e)&&N.isFunction(e.entries)){
const n={};return N.forEachEntry(e,(s,i)=>{
t(Vw(s),i,n,0)
}),n
}return null
}function Fw(e,t,n){
if(N.isString(e)){
try{
return(t||JSON.parse)(e),N.trim(e)
}catch(s){
if(s.name!=='SyntaxError'){
throw s
}
}
}return(n||JSON.stringify)(e)
}const sr={transitional:yp,adapter:['xhr','http','fetch'],transformRequest:[function(t,n){
const s=n.getContentType()||'',i=s.indexOf('application/json')>-1,o=N.isObject(t);if(o&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t)){
return i?JSON.stringify(Ap(t)):t
}if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t)||N.isReadableStream(t)){
return t
}if(N.isArrayBufferView(t)){
return t.buffer
}if(N.isURLSearchParams(t)){
return n.setContentType('application/x-www-form-urlencoded;charset=utf-8',!1),t.toString()
}let c;if(o){
if(s.indexOf('application/x-www-form-urlencoded')>-1){
return kw(t,this.formSerializer).toString()
}if((c=N.isFileList(t))||s.indexOf('multipart/form-data')>-1){
const f=this.env&&this.env.FormData;return Ho(c?{'files[]':t}:t,f&&new f,this.formSerializer)
}
}return o||i?(n.setContentType('application/json',!1),Fw(t)):t
}],transformResponse:[function(t){
const n=this.transitional||sr.transitional,s=n&&n.forcedJSONParsing,i=this.responseType==='json';if(N.isResponse(t)||N.isReadableStream(t)){
return t
}if(t&&N.isString(t)&&(s&&!this.responseType||i)){
const a=!(n&&n.silentJSONParsing)&&i;try{
return JSON.parse(t)
}catch(c){
if(a){
throw c.name==='SyntaxError'?lt.from(c,lt.ERR_BAD_RESPONSE,this,null,this.response):c
}
}
}return t
}],timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(t){
return t>=200&&t<300
},headers:{common:{Accept:'application/json, text/plain, */*','Content-Type':void 0}}};N.forEach(['delete','get','head','post','put','patch'],e=>{
sr.headers[e]={}
});const jw=N.toObjectSet(['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent']),Bw=e=>{
const t={};let n,s,i;return e&&e.split(`
`).forEach(function(a){
i=a.indexOf(':'),n=a.substring(0,i).trim().toLowerCase(),s=a.substring(i+1).trim(),!(!n||t[n]&&jw[n])&&(n==='set-cookie'?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+', '+s:s)
}),t
},zf=Symbol('internals');function $i(e){
return e&&String(e).trim().toLowerCase()
}function Zr(e){
return e===!1||e==null?e:N.isArray(e)?e.map(Zr):String(e)
}function Ww(e){
const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);){
t[s[1]]=s[2]
}return t
}const Uw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ja(e,t,n,s,i){
if(N.isFunction(s)){
return s.call(this,t,n)
}if(i&&(t=n),!!N.isString(t)){
if(N.isString(s)){
return t.indexOf(s)!==-1
}if(N.isRegExp(s)){
return s.test(t)
}
}
}function Kw(e){
return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)
}function qw(e,t){
const n=N.toCamelCase(' '+t);['get','set','has'].forEach(s=>{
Object.defineProperty(e,s+n,{value:function(i,o,a){
return this[s].call(this,t,i,o,a)
},configurable:!0})
})
}const ve=class{
constructor(t){
t&&this.set(t)
}set(t,n,s){
const i=this;function o(c,f,h){
const d=$i(f);if(!d){
throw new Error('header name must be a non-empty string')
}const m=N.findKey(i,d);(!m||i[m]===void 0||h===!0||h===void 0&&i[m]!==!1)&&(i[m||f]=Zr(c))
}const a=(c,f)=>N.forEach(c,(h,d)=>o(h,d,f));if(N.isPlainObject(t)||t instanceof this.constructor){
a(t,n)
}else if(N.isString(t)&&(t=t.trim())&&!Uw(t)){
a(Bw(t),n)
}else if(N.isHeaders(t)){
for(const[c,f]of t.entries()){
o(f,c,s)
}
}else {
t!=null&&o(n,t,s)
}return this
}get(t,n){
if(t=$i(t),t){
const s=N.findKey(this,t);if(s){
const i=this[s];if(!n){
return i
}if(n===!0){
return Ww(i)
}if(N.isFunction(n)){
return n.call(this,i,s)
}if(N.isRegExp(n)){
return n.exec(i)
}throw new TypeError('parser must be boolean|regexp|function')
}
}
}has(t,n){
if(t=$i(t),t){
const s=N.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||ja(this,this[s],s,n)))
}return!1
}delete(t,n){
const s=this;let i=!1;function o(a){
if(a=$i(a),a){
const c=N.findKey(s,a);c&&(!n||ja(s,s[c],c,n))&&(delete s[c],i=!0)
}
}return N.isArray(t)?t.forEach(o):o(t),i
}clear(t){
const n=Object.keys(this);let s=n.length,i=!1;for(;s--;){
const o=n[s];(!t||ja(this,this[o],o,t,!0))&&(delete this[o],i=!0)
}return i
}normalize(t){
const n=this,s={};return N.forEach(this,(i,o)=>{
const a=N.findKey(s,o);if(a){
n[a]=Zr(i),delete n[o];return
}const c=t?Kw(o):String(o).trim();c!==o&&delete n[o],n[c]=Zr(i),s[c]=!0
}),this
}concat(...t){
return this.constructor.concat(this,...t)
}toJSON(t){
const n=Object.create(null);return N.forEach(this,(s,i)=>{
s!=null&&s!==!1&&(n[i]=t&&N.isArray(s)?s.join(', '):s)
}),n
}[Symbol.iterator](){
return Object.entries(this.toJSON())[Symbol.iterator]()
}toString(){
return Object.entries(this.toJSON()).map(([t,n])=>t+': '+n).join(`
`)
}get[Symbol.toStringTag](){
return'AxiosHeaders'
}static from(t){
return t instanceof this?t:new this(t)
}static concat(t,...n){
const s=new this(t);return n.forEach(i=>s.set(i)),s
}static accessor(t){
const s=(this[zf]=this[zf]={accessors:{}}).accessors,i=this.prototype;function o(a){
const c=$i(a);s[c]||(qw(i,a),s[c]=!0)
}return N.isArray(t)?t.forEach(o):o(t),this
}
};ve.accessor(['Content-Type','Content-Length','Accept','Accept-Encoding','User-Agent','Authorization']);N.reduceDescriptors(ve.prototype,({value:e},t)=>{
const n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){
this[n]=s
}}
});N.freezeMethods(ve);function Ba(e,t){
const n=this||sr,s=t||n,i=ve.from(s.headers);let o=s.data;return N.forEach(e,function(c){
o=c.call(n,o,i.normalize(),t?t.status:void 0)
}),i.normalize(),o
}function Tp(e){
return!!(e&&e.__CANCEL__)
}function hi(e,t,n){
lt.call(this,e??'canceled',lt.ERR_CANCELED,t,n),this.name='CanceledError'
}N.inherits(hi,lt,{__CANCEL__:!0});function wp(e,t,n){
const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new lt('Request failed with status code '+n.status,[lt.ERR_BAD_REQUEST,lt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))
}function Yw(e){
const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||''
}function zw(e,t){
e=e||10;const n=new Array(e),s=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(f){
const h=Date.now(),d=s[o];a||(a=h),n[i]=f,s[i]=h;let m=o,v=0;for(;m!==i;){
v+=n[m++],m=m%e
}if(i=(i+1)%e,i===o&&(o=(o+1)%e),h-a<t){
return
}const b=d&&h-d;return b?Math.round(v*1e3/b):void 0
}
}function Gw(e,t){
let n=0,s=1e3/t,i,o;const a=(h,d=Date.now())=>{
n=d,i=null,o&&(clearTimeout(o),o=null),e.apply(null,h)
};return[(...h)=>{
const d=Date.now(),m=d-n;m>=s?a(h,d):(i=h,o||(o=setTimeout(()=>{
o=null,a(i)
},s-m)))
},()=>i&&a(i)]
}const mo=(e,t,n=3)=>{
let s=0;const i=zw(50,250);return Gw(o=>{
const a=o.loaded,c=o.lengthComputable?o.total:void 0,f=a-s,h=i(f),d=a<=c;s=a;const m={loaded:a,total:c,progress:c?a/c:void 0,bytes:f,rate:h||void 0,estimated:h&&c&&d?(c-a)/h:void 0,event:o,lengthComputable:c!=null,[t?'download':'upload']:!0};e(m)
},n)
},Gf=(e,t)=>{
const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]
},Xf=e=>(...t)=>N.asap(()=>e(...t)),Xw=ie.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ie.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ie.origin),ie.navigator&&/(msie|trident)/i.test(ie.navigator.userAgent)):()=>!0,Qw=ie.hasStandardBrowserEnv?{write(e,t,n,s,i,o){
const a=[e+'='+encodeURIComponent(t)];N.isNumber(n)&&a.push('expires='+new Date(n).toGMTString()),N.isString(s)&&a.push('path='+s),N.isString(i)&&a.push('domain='+i),o===!0&&a.push('secure'),document.cookie=a.join('; ')
},read(e){
const t=document.cookie.match(new RegExp('(^|;\\s*)('+e+')=([^;]*)'));return t?decodeURIComponent(t[3]):null
},remove(e){
this.write(e,'',Date.now()-864e5)
}}:{write(){},read(){
return null
},remove(){}};function Jw(e){
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}function Zw(e,t){
return t?e.replace(/\/?\/$/,'')+'/'+t.replace(/^\/+/,''):e
}function Sp(e,t,n){
const s=!Jw(t);return e&&s||n==!1?Zw(e,t):t
}const Qf=e=>e instanceof ve?{...e}:e;function gs(e,t){
t=t||{};const n={};function s(h,d,m,v){
return N.isPlainObject(h)&&N.isPlainObject(d)?N.merge.call({caseless:v},h,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d
}function i(h,d,m,v){
if(N.isUndefined(d)){
if(!N.isUndefined(h)){
return s(void 0,h,m,v)
}
}else {
return s(h,d,m,v)
}
}function o(h,d){
if(!N.isUndefined(d)){
return s(void 0,d)
}
}function a(h,d){
if(N.isUndefined(d)){
if(!N.isUndefined(h)){
return s(void 0,h)
}
}else {
return s(void 0,d)
}
}function c(h,d,m){
if(m in t){
return s(h,d)
}if(m in e){
return s(void 0,h)
}
}const f={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(h,d,m)=>i(Qf(h),Qf(d),m,!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(d){
const m=f[d]||i,v=m(e[d],t[d],d);N.isUndefined(v)&&m!==c||(n[d]=v)
}),n
}const Op=e=>{
const t=gs({},e);let{data:n,withXSRFToken:s,xsrfHeaderName:i,xsrfCookieName:o,headers:a,auth:c}=t;t.headers=a=ve.from(a),t.url=bp(Sp(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&a.set('Authorization','Basic '+btoa((c.username||'')+':'+(c.password?unescape(encodeURIComponent(c.password)):'')));let f;if(N.isFormData(n)){
if(ie.hasStandardBrowserEnv||ie.hasStandardBrowserWebWorkerEnv){
a.setContentType(void 0)
}else if((f=a.getContentType())!==!1){
const[h,...d]=f?f.split(';').map(m=>m.trim()).filter(Boolean):[];a.setContentType([h||'multipart/form-data',...d].join('; '))
}
}if(ie.hasStandardBrowserEnv&&(s&&N.isFunction(s)&&(s=s(t)),s||s!==!1&&Xw(t.url))){
const h=i&&o&&Qw.read(o);h&&a.set(i,h)
}return t
},tS=typeof XMLHttpRequest<'u',eS=tS&&function(e){
return new Promise(function(n,s){
const i=Op(e);const o=i.data;const a=ve.from(i.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:h}=i,d,m,v,b,S;function O(){
b&&b(),S&&S(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener('abort',d)
}let D=new XMLHttpRequest;D.open(i.method.toUpperCase(),i.url,!0),D.timeout=i.timeout;function P(){
if(!D){
return
}const F=ve.from('getAllResponseHeaders'in D&&D.getAllResponseHeaders()),Y={data:!c||c==='text'||c==='json'?D.responseText:D.response,status:D.status,statusText:D.statusText,headers:F,config:e,request:D};wp(function(G){
n(G),O()
},function(G){
s(G),O()
},Y),D=null
}'onloadend'in D?D.onloadend=P:D.onreadystatechange=function(){
!D||D.readyState!==4||D.status===0&&!(D.responseURL&&D.responseURL.indexOf('file:')===0)||setTimeout(P)
},D.onabort=function(){
D&&(s(new lt('Request aborted',lt.ECONNABORTED,e,D)),D=null)
},D.onerror=function(){
s(new lt('Network Error',lt.ERR_NETWORK,e,D)),D=null
},D.ontimeout=function(){
let I=i.timeout?'timeout of '+i.timeout+'ms exceeded':'timeout exceeded';const Y=i.transitional||yp;i.timeoutErrorMessage&&(I=i.timeoutErrorMessage),s(new lt(I,Y.clarifyTimeoutError?lt.ETIMEDOUT:lt.ECONNABORTED,e,D)),D=null
},o===void 0&&a.setContentType(null),'setRequestHeader'in D&&N.forEach(a.toJSON(),function(I,Y){
D.setRequestHeader(Y,I)
}),N.isUndefined(i.withCredentials)||(D.withCredentials=!!i.withCredentials),c&&c!=='json'&&(D.responseType=i.responseType),h&&([v,S]=mo(h,!0),D.addEventListener('progress',v)),f&&D.upload&&([m,b]=mo(f),D.upload.addEventListener('progress',m),D.upload.addEventListener('loadend',b)),(i.cancelToken||i.signal)&&(d=F=>{
D&&(s(!F||F.type?new hi(null,e,D):F),D.abort(),D=null)
},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener('abort',d)));const M=Yw(i.url);if(M&&ie.protocols.indexOf(M)===-1){
s(new lt('Unsupported protocol '+M+':',lt.ERR_BAD_REQUEST,e));return
}D.send(o||null)
})
},nS=(e,t)=>{
const{length:n}=e=e?e.filter(Boolean):[];if(t||n){
let s=new AbortController,i;const o=function(h){
if(!i){
i=!0,c();const d=h instanceof Error?h:this.reason;s.abort(d instanceof lt?d:new hi(d instanceof Error?d.message:d))
}
};let a=t&&setTimeout(()=>{
a=null,o(new lt(`timeout ${t} of ms exceeded`,lt.ETIMEDOUT))
},t);const c=()=>{
e&&(a&&clearTimeout(a),a=null,e.forEach(h=>{
h.unsubscribe?h.unsubscribe(o):h.removeEventListener('abort',o)
}),e=null)
};e.forEach(h=>h.addEventListener('abort',o));const{signal:f}=s;return f.unsubscribe=()=>N.asap(c),f
}
},sS=function*(e,t){
const n=e.byteLength;if(n<t){
yield e;return
}let s=0,i;for(;s<n;){
i=s+t,yield e.slice(s,i),s=i
}
},iS=async function*(e,t){
for await(const n of rS(e)){
yield*sS(n,t)
}
},rS=async function*(e){
if(e[Symbol.asyncIterator]){
yield*e;return
}const t=e.getReader();try{
for(;;){
const{done:n,value:s}=await t.read();if(n){
break
}yield s
}
}finally{
await t.cancel()
}
},Jf=(e,t,n,s)=>{
const i=iS(e,t);let o=0,a,c=f=>{
a||(a=!0,s&&s(f))
};return new ReadableStream({async pull(f){
try{
const{done:h,value:d}=await i.next();if(h){
c(),f.close();return
}const m=d.byteLength;if(n){
const v=o+=m;n(v)
}f.enqueue(new Uint8Array(d))
}catch(h){
throw c(h),h
}
},cancel(f){
return c(f),i.return()
}},{highWaterMark:2})
},Fo=typeof fetch==='function'&&typeof Request==='function'&&typeof Response==='function',Cp=Fo&&typeof ReadableStream==='function',oS=Fo&&(typeof TextEncoder==='function'?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Np=(e,...t)=>{
try{
return!!e(...t)
}catch{
return!1
}
},aS=Cp&&Np(()=>{
let e=!1;const t=new Request(ie.origin,{body:new ReadableStream,method:'POST',get duplex(){
return e=!0,'half'
}}).headers.has('Content-Type');return e&&!t
}),Zf=64*1024,wl=Cp&&Np(()=>N.isReadableStream(new Response('').body)),_o={stream:wl&&(e=>e.body)};Fo&&(e=>{
['text','arrayBuffer','blob','formData','stream'].forEach(t=>{
!_o[t]&&(_o[t]=N.isFunction(e[t])?n=>n[t]():(n,s)=>{
throw new lt(`Response type '${t}' is not supported`,lt.ERR_NOT_SUPPORT,s)
})
})
})(new Response);const lS=async e=>{
if(e==null){
return 0
}if(N.isBlob(e)){
return e.size
}if(N.isSpecCompliantForm(e)){
return(await new Request(ie.origin,{method:'POST',body:e}).arrayBuffer()).byteLength
}if(N.isArrayBufferView(e)||N.isArrayBuffer(e)){
return e.byteLength
}if(N.isURLSearchParams(e)&&(e=e+''),N.isString(e)){
return(await oS(e)).byteLength
}
},cS=async(e,t)=>{
const n=N.toFiniteNumber(e.getContentLength());return n??lS(t)
},uS=Fo&&(async e=>{
let{url:t,method:n,data:s,signal:i,cancelToken:o,timeout:a,onDownloadProgress:c,onUploadProgress:f,responseType:h,headers:d,withCredentials:m='same-origin',fetchOptions:v}=Op(e);h=h?(h+'').toLowerCase():'text';let b=nS([i,o&&o.toAbortSignal()],a),S;const O=b&&b.unsubscribe&&(()=>{
b.unsubscribe()
});let D;try{
if(f&&aS&&n!=='get'&&n!=='head'&&(D=await cS(d,s))!==0){
let Y=new Request(t,{method:'POST',body:s,duplex:'half'}),z;if(N.isFormData(s)&&(z=Y.headers.get('content-type'))&&d.setContentType(z),Y.body){
const[G,nt]=Gf(D,mo(Xf(f)));s=Jf(Y.body,Zf,G,nt)
}
}N.isString(m)||(m=m?'include':'omit');const P='credentials'in Request.prototype;S=new Request(t,{...v,signal:b,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:s,duplex:'half',credentials:P?m:void 0});let M=await fetch(S);const F=wl&&(h==='stream'||h==='response');if(wl&&(c||F&&O)){
const Y={};['status','statusText','headers'].forEach(gt=>{
Y[gt]=M[gt]
});const z=N.toFiniteNumber(M.headers.get('content-length')),[G,nt]=c&&Gf(z,mo(Xf(c),!0))||[];M=new Response(Jf(M.body,Zf,G,()=>{
nt&&nt(),O&&O()
}),Y)
}h=h||'text';const I=await _o[N.findKey(_o,h)||'text'](M,e);return!F&&O&&O(),await new Promise((Y,z)=>{
wp(Y,z,{data:I,headers:ve.from(M.headers),status:M.status,statusText:M.statusText,config:e,request:S})
})
}catch(P){
throw O&&O(),P&&P.name==='TypeError'&&/fetch/i.test(P.message)?Object.assign(new lt('Network Error',lt.ERR_NETWORK,e,S),{cause:P.cause||P}):lt.from(P,P&&P.code,e,S)
}
}),Sl={http:Sw,xhr:eS,fetch:uS};N.forEach(Sl,(e,t)=>{
if(e){
try{
Object.defineProperty(e,'name',{value:t})
}catch{}Object.defineProperty(e,'adapterName',{value:t})
}
});const td=e=>`- ${e}`,fS=e=>N.isFunction(e)||e===null||e===!1,Dp={getAdapter:e=>{
e=N.isArray(e)?e:[e];const{length:t}=e;let n,s;const i={};for(let o=0;o<t;o++){
n=e[o];let a;if(s=n,!fS(n)&&(s=Sl[(a=String(n)).toLowerCase()],s===void 0)){
throw new lt(`Unknown adapter '${a}'`)
}if(s){
break
}i[a||'#'+o]=s
}if(!s){
const o=Object.entries(i).map(([c,f])=>`adapter ${c} `+(f===!1?'is not supported by the environment':'is not available in the build'));const a=t?o.length>1?`since :
`+o.map(td).join(`
`):' '+td(o[0]):'as no adapter specified';throw new lt('There is no suitable adapter to dispatch the request '+a,'ERR_NOT_SUPPORT')
}return s
},adapters:Sl};function Wa(e){
if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted){
throw new hi(null,e)
}
}function ed(e){
return Wa(e),e.headers=ve.from(e.headers),e.data=Ba.call(e,e.transformRequest),['post','put','patch'].indexOf(e.method)!==-1&&e.headers.setContentType('application/x-www-form-urlencoded',!1),Dp.getAdapter(e.adapter||sr.adapter)(e).then(function(s){
return Wa(e),s.data=Ba.call(e,e.transformResponse,s),s.headers=ve.from(s.headers),s
},function(s){
return Tp(s)||(Wa(e),s&&s.response&&(s.response.data=Ba.call(e,e.transformResponse,s.response),s.response.headers=ve.from(s.response.headers))),Promise.reject(s)
})
}const Rp='1.8.3',jo={};['object','boolean','number','function','string','symbol'].forEach((e,t)=>{
jo[e]=function(s){
return typeof s===e||'a'+(t<1?'n ':' ')+e
}
});const nd={};jo.transitional=function(t,n,s){
function i(o,a){
return'[Axios v'+Rp+"] Transitional option '"+o+"'"+a+(s?'. '+s:'')
}return(o,a,c)=>{
if(t===!1){
throw new lt(i(a,' has been removed'+(n?' in '+n:'')),lt.ERR_DEPRECATED)
}return n&&!nd[a]&&(nd[a]=!0,console.warn(i(a,' has been deprecated since v'+n+' and will be removed in the near future'))),t?t(o,a,c):!0
}
};jo.spelling=function(t){
return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)
};function dS(e,t,n){
if(typeof e!=='object'){
throw new lt('options must be an object',lt.ERR_BAD_OPTION_VALUE)
}const s=Object.keys(e);let i=s.length;for(;i-- >0;){
const o=s[i],a=t[o];if(a){
const c=e[o],f=c===void 0||a(c,o,e);if(f!==!0){
throw new lt('option '+o+' must be '+f,lt.ERR_BAD_OPTION_VALUE)
}continue
}if(n!==!0){
throw new lt('Unknown option '+o,lt.ERR_BAD_OPTION)
}
}
}const to={assertOptions:dS,validators:jo},en=to.validators;const hs=class{
constructor(t){
this.defaults=t,this.interceptors={request:new Yf,response:new Yf}
}async request(t,n){
try{
return await this._request(t,n)
}catch(s){
if(s instanceof Error){
let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,''):'';try{
s.stack?o&&!String(s.stack).endsWith(o.replace(/^.+\n.+\n/,''))&&(s.stack+=`
`+o):s.stack=o
}catch{}
}throw s
}
}_request(t,n){
typeof t==='string'?(n=n||{},n.url=t):n=t||{},n=gs(this.defaults,n);const{transitional:s,paramsSerializer:i,headers:o}=n;s!==void 0&&to.assertOptions(s,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1),i!=null&&(N.isFunction(i)?n.paramsSerializer={serialize:i}:to.assertOptions(i,{encode:en.function,serialize:en.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),to.assertOptions(n,{baseUrl:en.spelling('baseURL'),withXsrfToken:en.spelling('withXSRFToken')},!0),n.method=(n.method||this.defaults.method||'get').toLowerCase();const a=o&&N.merge(o.common,o[n.method]);o&&N.forEach(['delete','get','head','post','put','patch','common'],S=>{
delete o[S]
}),n.headers=ve.concat(a,o);const c=[];let f=!0;this.interceptors.request.forEach(function(O){
typeof O.runWhen==='function'&&O.runWhen(n)===!1||(f=f&&O.synchronous,c.unshift(O.fulfilled,O.rejected))
});const h=[];this.interceptors.response.forEach(function(O){
h.push(O.fulfilled,O.rejected)
});let d,m=0,v;if(!f){
const S=[ed.bind(this),void 0];for(S.unshift.apply(S,c),S.push.apply(S,h),v=S.length,d=Promise.resolve(n);m<v;){
d=d.then(S[m++],S[m++])
}return d
}v=c.length;let b=n;for(m=0;m<v;){
const S=c[m++],O=c[m++];try{
b=S(b)
}catch(D){
O.call(this,D);break
}
}try{
d=ed.call(this,b)
}catch(S){
return Promise.reject(S)
}for(m=0,v=h.length;m<v;){
d=d.then(h[m++],h[m++])
}return d
}getUri(t){
t=gs(this.defaults,t);const n=Sp(t.baseURL,t.url,t.allowAbsoluteUrls);return bp(n,t.params,t.paramsSerializer)
}
};N.forEach(['delete','get','head','options'],function(t){
hs.prototype[t]=function(n,s){
return this.request(gs(s||{},{method:t,url:n,data:(s||{}).data}))
}
});N.forEach(['post','put','patch'],function(t){
function n(s){
return function(o,a,c){
return this.request(gs(c||{},{method:t,headers:s?{'Content-Type':'multipart/form-data'}:{},url:o,data:a}))
}
}hs.prototype[t]=n(),hs.prototype[t+'Form']=n(!0)
});const hS=class Lp{
constructor(t){
if(typeof t!=='function'){
throw new TypeError('executor must be a function.')
}let n;this.promise=new Promise(function(o){
n=o
});const s=this;this.promise.then(i=>{
if(!s._listeners){
return
}let o=s._listeners.length;for(;o-- >0;){
s._listeners[o](i)
}s._listeners=null
}),this.promise.then=i=>{
let o;const a=new Promise(c=>{
s.subscribe(c),o=c
}).then(i);return a.cancel=function(){
s.unsubscribe(o)
},a
},t(function(o,a,c){
s.reason||(s.reason=new hi(o,a,c),n(s.reason))
})
}throwIfRequested(){
if(this.reason){
throw this.reason
}
}subscribe(t){
if(this.reason){
t(this.reason);return
}this._listeners?this._listeners.push(t):this._listeners=[t]
}unsubscribe(t){
if(!this._listeners){
return
}const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)
}toAbortSignal(){
const t=new AbortController,n=s=>{
t.abort(s)
};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal
}static source(){
let t;return{token:new Lp(function(i){
t=i
}),cancel:t}
}
};function pS(e){
return function(n){
return e.apply(null,n)
}
}function mS(e){
return N.isObject(e)&&e.isAxiosError===!0
}const Ol={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ol).forEach(([e,t])=>{
Ol[t]=e
});function $p(e){
const t=new hs(e),n=cp(hs.prototype.request,t);return N.extend(n,hs.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){
return $p(gs(e,i))
},n
}const Lt=$p(sr);Lt.Axios=hs;Lt.CanceledError=hi;Lt.CancelToken=hS;Lt.isCancel=Tp;Lt.VERSION=Rp;Lt.toFormData=Ho;Lt.AxiosError=lt;Lt.Cancel=Lt.CanceledError;Lt.all=function(t){
return Promise.all(t)
};Lt.spread=pS;Lt.isAxiosError=mS;Lt.mergeConfig=gs;Lt.AxiosHeaders=ve;Lt.formToJSON=e=>Ap(N.isHTMLForm(e)?new FormData(e):e);Lt.getAdapter=Dp.getAdapter;Lt.HttpStatusCode=Ol;Lt.default=Lt;const{Axios:YR,AxiosError:zR,CanceledError:GR,isCancel:XR,CancelToken:QR,VERSION:JR,all:ZR,Cancel:tL,isAxiosError:eL,spread:nL,toFormData:sL,AxiosHeaders:iL,HttpStatusCode:rL,formToJSON:oL,getAdapter:aL,mergeConfig:lL}=Lt,Bs='https://grafikai.svara.lt/api',xp={async getStreets(e,t,n,s){
try{
const i=encodeURIComponent(s),o=encodeURIComponent(e),a=encodeURIComponent(t||''),c=encodeURIComponent(n||'');return(await Lt.get(`${Bs}/address/streets?district=${o}&subDistrict=${a}&city=${c}&address=${i}`)).data
}catch(i){
throw console.error('API Error: getStreets',i),i
}
},async getTrashBins(e){
try{
const t=new URLSearchParams({pageSize:'10',pageIndex:'0',address:e.street,region:e.municipality,houseNumber:e.houseNumber,subDistrict:e.subDistrict||'',city:e.city||'',matchHouseNumber:'true'});return(await Lt.get(`${Bs}/contracts?${t}`)).data
}catch(t){
throw console.error('API Error: getTrashBins',t),t
}
},async getCollections(e){
try{
const t=new URLSearchParams({pageSize:'100',pageIndex:'0',address:e.street,region:e.municipality,houseNumber:e.houseNumber,subDistrict:e.subDistrict||'',city:e.city||'',matchHouseNumber:'true'});return(await Lt.get(`${Bs}/contracts?${t}`)).data.data||[]
}catch(t){
throw console.error('API Error: getCollections',t),t
}
},async getSchedule(e){
try{
return(await Lt.get(`${Bs}/schedule?wasteObjectId=${e}`)).data
}catch(t){
throw console.error('API Error: getSchedule',t),t
}
},async generateCalendar(e){
return console.log('Generating calendar with params:',e),new Promise(t=>{
setTimeout(()=>{
const n=Date.now();t(`https://yourserver.com/api/calendar/${n}.ics`)
},1e3)
})
},async getSubDistricts(e){
try{
const t=encodeURIComponent(e);return(await Lt.get(`${Bs}/address/subdistricts?region=${t}`)).data
}catch(t){
throw console.error('API Error: getSubDistricts',t),t
}
},async getCities(e,t){
try{
const n=encodeURIComponent(e),s=encodeURIComponent(t||'');return(await Lt.get(`${Bs}/address/subdistricts?region=${n}&subDistrict=${s}`)).data
}catch(n){
throw console.error('API Error: getCities',n),n
}
}},_S=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Atliekų Išvežimo Grafikai//LT','CALSCALE:GREGORIAN','X-WR-CALNAME:Atliekų Išvežimo Grafikas','X-WR-TIMEZONE:Europe/Vilnius'].join(`\r
`),gS='END:VCALENDAR';class ES{
static foldLine(t){
if(t.length<=75){
return t
}let n='',s=0;for(;s<t.length;){
s>0&&(n+=`\r
 `),n+=t.substr(s,s===0?75:74),s+=s===0?75:74
}return n
}static formatDate(t){
const n=new Date(t);if(isNaN(n.getTime())){
throw new Error(`Invalid date: ${t}`)
}return n.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z'
}static createEvent(t,n,s,i){
try{
const a=`trash-${`${Date.now()}-${i}-${Math.random().toString(36).substr(2,9)}`}@trash-schedule.lt`;let c='Nepamiršk išnešti konteinerio!';if(s.street){
const h=[`${s.street} ${s.houseNumber}`];s.city&&h.push(s.city),s.subDistrict&&h.push(s.subDistrict),s.municipality&&h.push(s.municipality),c+=`
Adresas: ${h.join(', ')}`
}t.containerFormats&&(c+=`
Konteineris: ${t.containerFormats}`),t.contractNumbers&&(c+=`
Sutarties Nr.: ${t.contractNumbers}`),c+=`

Sugeneravo: https://trash.teletigras.lt`;const f=['BEGIN:VEVENT',this.foldLine(`UID:${a}`),this.foldLine(`DTSTAMP:${this.formatDate(new Date)}`),this.foldLine(`DTSTART;VALUE=DATE:${t.date.replace(/-/g,'')}`),this.foldLine(`SUMMARY:${t.type}`),this.foldLine(`DESCRIPTION:${c}`),this.foldLine('TRANSP:TRANSPARENT')];if(n!=null&&n.enabled){
const h=Number(n.time)*24+Number(n.hour);f.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Nepamiršk išnešti konteinerio!',`TRIGGER:-PT${h}H`,'END:VALARM')
}return f.push('END:VEVENT'),f.join(`\r
`)
}catch(o){
return console.error('Failed to create event:',o),''
}
}static generateCalendar(t,n,s){
const i=[_S];return t.forEach((o,a)=>{
const c=this.createEvent(o,n,s,a);c&&i.push(c)
}),i.push(gS),i.join(`\r
`)
}
}async function vS(e){
try{
const t=e.collections;if(!Array.isArray(t)){
throw new Error('Invalid collections data')
}const n=new Date(e.startDate),s=new Date(e.endDate),i=[];for(const f of t){
if(f.wasteObjectId){
try{
const h=await xp.getSchedule(f.wasteObjectId);for(const d of h){
const m=new Date(d.date);m>=n&&m<=s&&i.push({date:d.dateFmt,type:f.descriptionFmt,weekDay:d.weekDay,containerFmt:f.containerFmt,contractNumber:f.inventoryNumber})
}
}catch(h){
console.error(`Failed to fetch schedule for wasteObjectId ${f.wasteObjectId}:`,h)
}
}
}const o=new Map;i.forEach(f=>{
const h=`${f.date}-${f.type}`;o.has(h)||o.set(h,{date:f.date,type:f.type,weekDay:f.weekDay,containerFormats:new Set,contractNumbers:new Set}),o.get(h).containerFormats.add(f.containerFmt),f.contractNumber&&o.get(h).contractNumbers.add(f.contractNumber)
});const a=Array.from(o.values()).map(f=>({...f,containerFormats:Array.from(f.containerFormats).join(', '),contractNumbers:Array.from(f.contractNumbers).join(', ')}));a.sort((f,h)=>new Date(f.date)-new Date(h.date));const c=e.reminderEnabled?{enabled:!0,time:e.reminderTime,hour:e.notificationHour}:null;return ES.generateCalendar(a,c,e)
}catch(t){
throw console.error('Failed to generate calendar:',t),new Error('Nepavyko sugeneruoti kalendoriaus. Prašome bandyti vėliau.')
}
}function cL(e){
const t=new Blob([e],{type:'text/calendar;charset=utf-8'}),n=document.createElement('a');n.href=window.URL.createObjectURL(t),n.setAttribute('download','atliekos.ics'),document.body.appendChild(n),n.click(),document.body.removeChild(n)
}const bS={ą:'01',č:'02',ę:'03',ė:'04',į:'05',š:'06',ų:'07',ū:'08',ž:'09',Ą:'11',Č:'12',Ę:'13',Ė:'14',Į:'15',Š:'16',Ų:'17',Ū:'18',Ž:'19'};function Vr(e){
return e.replace(/[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/g,t=>`__${bS[t]}__`)
}function uL(e){
return`https://trash.teletigras.lt/calendar.ics?${new URLSearchParams({r:Vr(e.municipality),sd:e.subDistrict?Vr(e.subDistrict):'',c:e.city?Vr(e.city):'',s:Vr(e.street),n:e.houseNumber,a:e.reminderEnabled?'1':'0',t:e.reminderTime,h:e.notificationHour,_t:Date.now()}).toString()}`
}function fL(e){
const t='Atliekų išvežimas',n=e.replace('https://','webcal://');return{google:`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(n)}`,outlook:`https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(e)}&name=${encodeURIComponent(t)}`,apple:`webcal://${e.replace('https://','')}`}
}const yS={__name:'ICalFeed',setup(e){
const t=ST();return Ah(async()=>{
try{
const n={municipality:t.query.m,street:t.query.s,houseNumber:t.query.h,startDate:new Date().toISOString().split('T')[0],endDate:new Date(Date.now()+31536e6).toISOString().split('T')[0],reminderEnabled:t.query.r==='1',reminderTime:t.query.rt||'1',notificationHour:t.query.rh||'18'},s=await xp.getCollections(n);if(!s||s.length===0){
throw new Error('No collections found for this address')
}const i=await vS({...n,collections:s});document.body.innerHTML='';const o=document.createElement('pre');o.style.whiteSpace='pre-wrap',o.textContent=i,document.body.appendChild(o);const a=document.createElement('meta');a.httpEquiv='Content-Type',a.content='text/calendar; charset=utf-8',document.head.appendChild(a)
}catch(n){
console.error('Failed to generate feed:',n),document.body.innerHTML=`<div class="alert alert-danger">Failed to generate calendar: ${n.message}</div>`
}
}),(n,s)=>($o(),Ql('pre',null,'Generating calendar...'))
}},AS=AT({history:ZA(),routes:[{path:'/',name:'home',component:FT},{path:'/generate',name:'generate',component:()=>Fa(()=>import('./GenerateView-2bBMIz7X.js'),[])},{path:'/about',name:'about',component:()=>Fa(()=>import('./AboutView-D9EsP4K4.js'),__vite__mapDeps([0,1]))},{path:'/changelog',name:'changelog',component:()=>Fa(()=>import('./Changelog-CpP-1omu.js'),__vite__mapDeps([2,3]))},{path:'/feed/ical',name:'ical-feed',component:yS}]});const eo={exports:{}}/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */let TS=eo.exports,sd;function wS(){
return sd||(sd=1,function(e,t){
(function(n,s){
e.exports=s()
})(TS,function(){
const n=new Map,s={set(u,r,l){
n.has(u)||n.set(u,new Map);const p=n.get(u);if(!p.has(r)&&p.size!==0){
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`);return
}p.set(r,l)
},get(u,r){
return n.has(u)&&n.get(u).get(r)||null
},remove(u,r){
if(!n.has(u)){
return
}const l=n.get(u);l.delete(r),l.size===0&&n.delete(u)
}},i=1e6,o=1e3,a='transitionend',c=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(r,l)=>`#${CSS.escape(l)}`)),u),f=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),h=u=>{
do {
u+=Math.floor(Math.random()*i)
}while(document.getElementById(u));return u
},d=u=>{
if(!u){
return 0
}let{transitionDuration:r,transitionDelay:l}=window.getComputedStyle(u);const p=Number.parseFloat(r),g=Number.parseFloat(l);return!p&&!g?0:(r=r.split(',')[0],l=l.split(',')[0],(Number.parseFloat(r)+Number.parseFloat(l))*o)
},m=u=>{
u.dispatchEvent(new Event(a))
},v=u=>!u||typeof u!=='object'?!1:(typeof u.jquery<'u'&&(u=u[0]),typeof u.nodeType<'u'),b=u=>v(u)?u.jquery?u[0]:u:typeof u==='string'&&u.length>0?document.querySelector(c(u)):null,S=u=>{
if(!v(u)||u.getClientRects().length===0){
return!1
}const r=getComputedStyle(u).getPropertyValue('visibility')==='visible',l=u.closest('details:not([open])');if(!l){
return r
}if(l!==u){
const p=u.closest('summary');if(p&&p.parentNode!==l||p===null){
return!1
}
}return r
},O=u=>!u||u.nodeType!==Node.ELEMENT_NODE||u.classList.contains('disabled')?!0:typeof u.disabled<'u'?u.disabled:u.hasAttribute('disabled')&&u.getAttribute('disabled')!=='false',D=u=>{
if(!document.documentElement.attachShadow){
return null
}if(typeof u.getRootNode==='function'){
const r=u.getRootNode();return r instanceof ShadowRoot?r:null
}return u instanceof ShadowRoot?u:u.parentNode?D(u.parentNode):null
},P=()=>{},M=u=>{
u.offsetHeight
},F=()=>window.jQuery&&!document.body.hasAttribute('data-bs-no-jquery')?window.jQuery:null,I=[],Y=u=>{
document.readyState==='loading'?(I.length||document.addEventListener('DOMContentLoaded',()=>{
for(const r of I){
r()
}
}),I.push(u)):u()
},z=()=>document.documentElement.dir==='rtl',G=u=>{
Y(()=>{
const r=F();if(r){
const l=u.NAME,p=r.fn[l];r.fn[l]=u.jQueryInterface,r.fn[l].Constructor=u,r.fn[l].noConflict=()=>(r.fn[l]=p,u.jQueryInterface)
}
})
},nt=(u,r=[],l=u)=>typeof u==='function'?u(...r):l,gt=(u,r,l=!0)=>{
if(!l){
nt(u);return
}const g=d(r)+5;let w=!1;const C=({target:$})=>{
$===r&&(w=!0,r.removeEventListener(a,C),nt(u))
};r.addEventListener(a,C),setTimeout(()=>{
w||m(r)
},g)
},_t=(u,r,l,p)=>{
const g=u.length;let w=u.indexOf(r);return w===-1?!l&&p?u[g-1]:u[0]:(w+=l?1:-1,p&&(w=(w+g)%g),u[Math.max(0,Math.min(w,g-1))])
},Ct=/[^.]*(?=\..*)\.|.*/,Mt=/\..*/,wt=/::\d+$/,Ut={};let Kt=1;const pt={mouseenter:'mouseover',mouseleave:'mouseout'},at=new Set(['click','dblclick','mouseup','mousedown','contextmenu','mousewheel','DOMMouseScroll','mouseover','mouseout','mousemove','selectstart','selectend','keydown','keypress','keyup','orientationchange','touchstart','touchmove','touchend','touchcancel','pointerdown','pointermove','pointerup','pointerleave','pointercancel','gesturestart','gesturechange','gestureend','focus','blur','change','reset','select','submit','focusin','focusout','load','unload','beforeunload','resize','move','DOMContentLoaded','readystatechange','error','abort','scroll']);function ut(u,r){
return r&&`${r}::${Kt++}`||u.uidEvent||Kt++
}function Ht(u){
const r=ut(u);return u.uidEvent=r,Ut[r]=Ut[r]||{},Ut[r]
}function ae(u,r){
return function l(p){
return U(p,{delegateTarget:u}),l.oneOff&&y.off(u,p.type,r),r.apply(u,[p])
}
}function Xt(u,r,l){
return function p(g){
const w=u.querySelectorAll(r);for(let{target:C}=g;C&&C!==this;C=C.parentNode){
for(const $ of w){
if($===C){
return U(g,{delegateTarget:C}),p.oneOff&&y.off(u,g.type,r,l),l.apply(C,[g])
}
}
}
}
}function It(u,r,l=null){
return Object.values(u).find(p=>p.callable===r&&p.delegationSelector===l)
}function ge(u,r,l){
const p=typeof r==='string',g=p?l:r||l;let w=L(u);return at.has(w)||(w=u),[p,g,w]
}function Qt(u,r,l,p,g){
if(typeof r!=='string'||!u){
return
}let[w,C,$]=ge(r,l,p);r in pt&&(C=(Dt=>function(dt){
if(!dt.relatedTarget||dt.relatedTarget!==dt.delegateTarget&&!dt.delegateTarget.contains(dt.relatedTarget)){
return Dt.call(this,dt)
}
})(C));const H=Ht(u),Q=H[$]||(H[$]={}),B=It(Q,C,w?l:null);if(B){
B.oneOff=B.oneOff&&g;return
}const ct=ut(C,r.replace(Ct,'')),ft=w?Xt(u,l,C):ae(u,C);ft.delegationSelector=w?l:null,ft.callable=C,ft.oneOff=g,ft.uidEvent=ct,Q[ct]=ft,u.addEventListener($,ft,w)
}function qt(u,r,l,p,g){
const w=It(r[l],p,g);w&&(u.removeEventListener(l,w,!!g),delete r[l][w.uidEvent])
}function Ft(u,r,l,p){
const g=r[l]||{};for(const[w,C]of Object.entries(g)){
w.includes(p)&&qt(u,r,l,C.callable,C.delegationSelector)
}
}function L(u){
return u=u.replace(Mt,''),pt[u]||u
}const y={on(u,r,l,p){
Qt(u,r,l,p,!1)
},one(u,r,l,p){
Qt(u,r,l,p,!0)
},off(u,r,l,p){
if(typeof r!=='string'||!u){
return
}const[g,w,C]=ge(r,l,p),$=C!==r,H=Ht(u),Q=H[C]||{},B=r.startsWith('.');if(typeof w<'u'){
if(!Object.keys(Q).length){
return
}qt(u,H,C,w,g?l:null);return
}if(B){
for(const ct of Object.keys(H)){
Ft(u,H,ct,r.slice(1))
}
}for(const[ct,ft]of Object.entries(Q)){
const it=ct.replace(wt,'');(!$||r.includes(it))&&qt(u,H,C,ft.callable,ft.delegationSelector)
}
},trigger(u,r,l){
if(typeof r!=='string'||!u){
return null
}const p=F(),g=L(r),w=r!==g;let C=null,$=!0,H=!0,Q=!1;w&&p&&(C=p.Event(r,l),p(u).trigger(C),$=!C.isPropagationStopped(),H=!C.isImmediatePropagationStopped(),Q=C.isDefaultPrevented());const B=U(new Event(r,{bubbles:$,cancelable:!0}),l);return Q&&B.preventDefault(),H&&u.dispatchEvent(B),B.defaultPrevented&&C&&C.preventDefault(),B
}};function U(u,r={}){
for(const[l,p]of Object.entries(r)){
try{
u[l]=p
}catch{
Object.defineProperty(u,l,{configurable:!0,get(){
return p
}})
}
}return u
}function X(u){
if(u==='true'){
return!0
}if(u==='false'){
return!1
}if(u===Number(u).toString()){
return Number(u)
}if(u===''||u==='null'){
return null
}if(typeof u!=='string'){
return u
}try{
return JSON.parse(decodeURIComponent(u))
}catch{
return u
}
}function mt(u){
return u.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)
}const _={setDataAttribute(u,r,l){
u.setAttribute(`data-bs-${mt(r)}`,l)
},removeDataAttribute(u,r){
u.removeAttribute(`data-bs-${mt(r)}`)
},getDataAttributes(u){
if(!u){
return{}
}const r={},l=Object.keys(u.dataset).filter(p=>p.startsWith('bs')&&!p.startsWith('bsConfig'));for(const p of l){
let g=p.replace(/^bs/,'');g=g.charAt(0).toLowerCase()+g.slice(1,g.length),r[g]=X(u.dataset[p])
}return r
},getDataAttribute(u,r){
return X(u.getAttribute(`data-bs-${mt(r)}`))
}};class E{
static get Default(){
return{}
}static get DefaultType(){
return{}
}static get NAME(){
throw new Error('You have to implement the static method "NAME", for each component!')
}_getConfig(r){
return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r
}_configAfterMerge(r){
return r
}_mergeConfigObj(r,l){
const p=v(l)?_.getDataAttribute(l,'config'):{};return{...this.constructor.Default,...typeof p==='object'?p:{},...v(l)?_.getDataAttributes(l):{},...typeof r==='object'?r:{}}
}_typeCheckConfig(r,l=this.constructor.DefaultType){
for(const[p,g]of Object.entries(l)){
const w=r[p],C=v(w)?'element':f(w);if(!new RegExp(g).test(C)){
throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${C}" but expected type "${g}".`)
}
}
}
}const A='5.3.3';class R extends E{
constructor(r,l){
super(),r=b(r),r&&(this._element=r,this._config=this._getConfig(l),s.set(this._element,this.constructor.DATA_KEY,this))
}dispose(){
s.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const r of Object.getOwnPropertyNames(this)){
this[r]=null
}
}_queueCallback(r,l,p=!0){
gt(r,l,p)
}_getConfig(r){
return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r
}static getInstance(r){
return s.get(b(r),this.DATA_KEY)
}static getOrCreateInstance(r,l={}){
return this.getInstance(r)||new this(r,typeof l==='object'?l:null)
}static get VERSION(){
return A
}static get DATA_KEY(){
return`bs.${this.NAME}`
}static get EVENT_KEY(){
return`.${this.DATA_KEY}`
}static eventName(r){
return`${r}${this.EVENT_KEY}`
}
}const x=u=>{
let r=u.getAttribute('data-bs-target');if(!r||r==='#'){
let l=u.getAttribute('href');if(!l||!l.includes('#')&&!l.startsWith('.')){
return null
}l.includes('#')&&!l.startsWith('#')&&(l=`#${l.split('#')[1]}`),r=l&&l!=='#'?l.trim():null
}return r?r.split(',').map(l=>c(l)).join(','):null
},T={find(u,r=document.documentElement){
return[].concat(...Element.prototype.querySelectorAll.call(r,u))
},findOne(u,r=document.documentElement){
return Element.prototype.querySelector.call(r,u)
},children(u,r){
return[].concat(...u.children).filter(l=>l.matches(r))
},parents(u,r){
const l=[];let p=u.parentNode.closest(r);for(;p;){
l.push(p),p=p.parentNode.closest(r)
}return l
},prev(u,r){
let l=u.previousElementSibling;for(;l;){
if(l.matches(r)){
return[l]
}l=l.previousElementSibling
}return[]
},next(u,r){
let l=u.nextElementSibling;for(;l;){
if(l.matches(r)){
return[l]
}l=l.nextElementSibling
}return[]
},focusableChildren(u){
const r=['a','button','input','textarea','select','details','[tabindex]','[contenteditable="true"]'].map(l=>`${l}:not([tabindex^="-"])`).join(',');return this.find(r,u).filter(l=>!O(l)&&S(l))
},getSelectorFromElement(u){
const r=x(u);return r&&T.findOne(r)?r:null
},getElementFromSelector(u){
const r=x(u);return r?T.findOne(r):null
},getMultipleElementsFromSelector(u){
const r=x(u);return r?T.find(r):[]
}},K=(u,r='hide')=>{
const l=`click.dismiss${u.EVENT_KEY}`,p=u.NAME;y.on(document,l,`[data-bs-dismiss="${p}"]`,function(g){
if(['A','AREA'].includes(this.tagName)&&g.preventDefault(),O(this)){
return
}const w=T.getElementFromSelector(this)||this.closest(`.${p}`);u.getOrCreateInstance(w)[r]()
})
},W='alert',k='.bs.alert',Z=`close${k}`,q=`closed${k}`,J='fade',et='show';class rt extends R{
static get NAME(){
return W
}close(){
if(y.trigger(this._element,Z).defaultPrevented){
return
}this._element.classList.remove(et);const l=this._element.classList.contains(J);this._queueCallback(()=>this._destroyElement(),this._element,l)
}_destroyElement(){
this._element.remove(),y.trigger(this._element,q),this.dispose()
}static jQueryInterface(r){
return this.each(function(){
const l=rt.getOrCreateInstance(this);if(typeof r==='string'){
if(l[r]===void 0||r.startsWith('_')||r==='constructor'){
throw new TypeError(`No method named "${r}"`)
}l[r](this)
}
})
}
}K(rt,'close'),G(rt);const bt='button',le='.bs.button',Jt='.data-api',xe='active',be='[data-bs-toggle="button"]',Un=`click${le}${Jt}`;class wn extends R{
static get NAME(){
return bt
}toggle(){
this._element.setAttribute('aria-pressed',this._element.classList.toggle(xe))
}static jQueryInterface(r){
return this.each(function(){
const l=wn.getOrCreateInstance(this);r==='toggle'&&l[r]()
})
}
}y.on(document,Un,be,u=>{
u.preventDefault();const r=u.target.closest(be);wn.getOrCreateInstance(r).toggle()
}),G(wn);const ce='swipe',Yt='.bs.swipe',dr=`touchstart${Yt}`,Pm=`touchmove${Yt}`,Mm=`touchend${Yt}`,km=`pointerdown${Yt}`,Vm=`pointerup${Yt}`,Hm='touch',Fm='pen',jm='pointer-event',Bm=40,Wm={endCallback:null,leftCallback:null,rightCallback:null},Um={endCallback:'(function|null)',leftCallback:'(function|null)',rightCallback:'(function|null)'};class hr extends E{
constructor(r,l){
super(),this._element=r,!(!r||!hr.isSupported())&&(this._config=this._getConfig(l),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())
}static get Default(){
return Wm
}static get DefaultType(){
return Um
}static get NAME(){
return ce
}dispose(){
y.off(this._element,Yt)
}_start(r){
if(!this._supportPointerEvents){
this._deltaX=r.touches[0].clientX;return
}this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX)
}_end(r){
this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),nt(this._config.endCallback)
}_move(r){
this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX
}_handleSwipe(){
const r=Math.abs(this._deltaX);if(r<=Bm){
return
}const l=r/this._deltaX;this._deltaX=0,l&&nt(l>0?this._config.rightCallback:this._config.leftCallback)
}_initEvents(){
this._supportPointerEvents?(y.on(this._element,km,r=>this._start(r)),y.on(this._element,Vm,r=>this._end(r)),this._element.classList.add(jm)):(y.on(this._element,dr,r=>this._start(r)),y.on(this._element,Pm,r=>this._move(r)),y.on(this._element,Mm,r=>this._end(r)))
}_eventIsPointerPenTouch(r){
return this._supportPointerEvents&&(r.pointerType===Fm||r.pointerType===Hm)
}static isSupported(){
return'ontouchstart'in document.documentElement||navigator.maxTouchPoints>0
}
}const Km='carousel',Sn='.bs.carousel',yc='.data-api',qm='ArrowLeft',Ym='ArrowRight',zm=500,Ei='next',Os='prev',Cs='left',pr='right',Gm=`slide${Sn}`,Yo=`slid${Sn}`,Xm=`keydown${Sn}`,Qm=`mouseenter${Sn}`,Jm=`mouseleave${Sn}`,Zm=`dragstart${Sn}`,t_=`load${Sn}${yc}`,e_=`click${Sn}${yc}`,Ac='carousel',mr='active',n_='slide',s_='carousel-item-end',i_='carousel-item-start',r_='carousel-item-next',o_='carousel-item-prev',Tc='.active',wc='.carousel-item',a_=Tc+wc,l_='.carousel-item img',c_='.carousel-indicators',u_='[data-bs-slide], [data-bs-slide-to]',f_='[data-bs-ride="carousel"]',d_={[qm]:pr,[Ym]:Cs},h_={interval:5e3,keyboard:!0,pause:'hover',ride:!1,touch:!0,wrap:!0},p_={interval:'(number|boolean)',keyboard:'boolean',pause:'(string|boolean)',ride:'(boolean|string)',touch:'boolean',wrap:'boolean'};class Ns extends R{
constructor(r,l){
super(r,l),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=T.findOne(c_,this._element),this._addEventListeners(),this._config.ride===Ac&&this.cycle()
}static get Default(){
return h_
}static get DefaultType(){
return p_
}static get NAME(){
return Km
}next(){
this._slide(Ei)
}nextWhenVisible(){
!document.hidden&&S(this._element)&&this.next()
}prev(){
this._slide(Os)
}pause(){
this._isSliding&&m(this._element),this._clearInterval()
}cycle(){
this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)
}_maybeEnableCycle(){
if(this._config.ride){
if(this._isSliding){
y.one(this._element,Yo,()=>this.cycle());return
}this.cycle()
}
}to(r){
const l=this._getItems();if(r>l.length-1||r<0){
return
}if(this._isSliding){
y.one(this._element,Yo,()=>this.to(r));return
}const p=this._getItemIndex(this._getActive());if(p===r){
return
}const g=r>p?Ei:Os;this._slide(g,l[r])
}dispose(){
this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()
}_configAfterMerge(r){
return r.defaultInterval=r.interval,r
}_addEventListeners(){
this._config.keyboard&&y.on(this._element,Xm,r=>this._keydown(r)),this._config.pause==='hover'&&(y.on(this._element,Qm,()=>this.pause()),y.on(this._element,Jm,()=>this._maybeEnableCycle())),this._config.touch&&hr.isSupported()&&this._addTouchEventListeners()
}_addTouchEventListeners(){
for(const p of T.find(l_,this._element)){
y.on(p,Zm,g=>g.preventDefault())
}const l={leftCallback:()=>this._slide(this._directionToOrder(Cs)),rightCallback:()=>this._slide(this._directionToOrder(pr)),endCallback:()=>{
this._config.pause==='hover'&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),zm+this._config.interval))
}};this._swipeHelper=new hr(this._element,l)
}_keydown(r){
if(/input|textarea/i.test(r.target.tagName)){
return
}const l=d_[r.key];l&&(r.preventDefault(),this._slide(this._directionToOrder(l)))
}_getItemIndex(r){
return this._getItems().indexOf(r)
}_setActiveIndicatorElement(r){
if(!this._indicatorsElement){
return
}const l=T.findOne(Tc,this._indicatorsElement);l.classList.remove(mr),l.removeAttribute('aria-current');const p=T.findOne(`[data-bs-slide-to="${r}"]`,this._indicatorsElement);p&&(p.classList.add(mr),p.setAttribute('aria-current','true'))
}_updateInterval(){
const r=this._activeElement||this._getActive();if(!r){
return
}const l=Number.parseInt(r.getAttribute('data-bs-interval'),10);this._config.interval=l||this._config.defaultInterval
}_slide(r,l=null){
if(this._isSliding){
return
}const p=this._getActive(),g=r===Ei,w=l||_t(this._getItems(),p,g,this._config.wrap);if(w===p){
return
}const C=this._getItemIndex(w),$=it=>y.trigger(this._element,it,{relatedTarget:w,direction:this._orderToDirection(r),from:this._getItemIndex(p),to:C});if($(Gm).defaultPrevented||!p||!w){
return
}const Q=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(C),this._activeElement=w;const B=g?i_:s_,ct=g?r_:o_;w.classList.add(ct),M(w),p.classList.add(B),w.classList.add(B);const ft=()=>{
w.classList.remove(B,ct),w.classList.add(mr),p.classList.remove(mr,ct,B),this._isSliding=!1,$(Yo)
};this._queueCallback(ft,p,this._isAnimated()),Q&&this.cycle()
}_isAnimated(){
return this._element.classList.contains(n_)
}_getActive(){
return T.findOne(a_,this._element)
}_getItems(){
return T.find(wc,this._element)
}_clearInterval(){
this._interval&&(clearInterval(this._interval),this._interval=null)
}_directionToOrder(r){
return z()?r===Cs?Os:Ei:r===Cs?Ei:Os
}_orderToDirection(r){
return z()?r===Os?Cs:pr:r===Os?pr:Cs
}static jQueryInterface(r){
return this.each(function(){
const l=Ns.getOrCreateInstance(this,r);if(typeof r==='number'){
l.to(r);return
}if(typeof r==='string'){
if(l[r]===void 0||r.startsWith('_')||r==='constructor'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}
}y.on(document,e_,u_,function(u){
const r=T.getElementFromSelector(this);if(!r||!r.classList.contains(Ac)){
return
}u.preventDefault();const l=Ns.getOrCreateInstance(r),p=this.getAttribute('data-bs-slide-to');if(p){
l.to(p),l._maybeEnableCycle();return
}if(_.getDataAttribute(this,'slide')==='next'){
l.next(),l._maybeEnableCycle();return
}l.prev(),l._maybeEnableCycle()
}),y.on(window,t_,()=>{
const u=T.find(f_);for(const r of u){
Ns.getOrCreateInstance(r)
}
}),G(Ns);const m_='collapse',vi='.bs.collapse',__='.data-api',g_=`show${vi}`,E_=`shown${vi}`,v_=`hide${vi}`,b_=`hidden${vi}`,y_=`click${vi}${__}`,zo='show',Ds='collapse',_r='collapsing',A_='collapsed',T_=`:scope .${Ds} .${Ds}`,w_='collapse-horizontal',S_='width',O_='height',C_='.collapse.show, .collapse.collapsing',Go='[data-bs-toggle="collapse"]',N_={parent:null,toggle:!0},D_={parent:'(null|element)',toggle:'boolean'};class Rs extends R{
constructor(r,l){
super(r,l),this._isTransitioning=!1,this._triggerArray=[];const p=T.find(Go);for(const g of p){
const w=T.getSelectorFromElement(g),C=T.find(w).filter($=>$===this._element);w!==null&&C.length&&this._triggerArray.push(g)
}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()
}static get Default(){
return N_
}static get DefaultType(){
return D_
}static get NAME(){
return m_
}toggle(){
this._isShown()?this.hide():this.show()
}show(){
if(this._isTransitioning||this._isShown()){
return
}let r=[];if(this._config.parent&&(r=this._getFirstLevelChildren(C_).filter($=>$!==this._element).map($=>Rs.getOrCreateInstance($,{toggle:!1}))),r.length&&r[0]._isTransitioning||y.trigger(this._element,g_).defaultPrevented){
return
}for(const $ of r){
$.hide()
}const p=this._getDimension();this._element.classList.remove(Ds),this._element.classList.add(_r),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const g=()=>{
this._isTransitioning=!1,this._element.classList.remove(_r),this._element.classList.add(Ds,zo),this._element.style[p]='',y.trigger(this._element,E_)
},C=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(g,this._element,!0),this._element.style[p]=`${this._element[C]}px`
}hide(){
if(this._isTransitioning||!this._isShown()||y.trigger(this._element,v_).defaultPrevented){
return
}const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,M(this._element),this._element.classList.add(_r),this._element.classList.remove(Ds,zo);for(const g of this._triggerArray){
const w=T.getElementFromSelector(g);w&&!this._isShown(w)&&this._addAriaAndCollapsedClass([g],!1)
}this._isTransitioning=!0;const p=()=>{
this._isTransitioning=!1,this._element.classList.remove(_r),this._element.classList.add(Ds),y.trigger(this._element,b_)
};this._element.style[l]='',this._queueCallback(p,this._element,!0)
}_isShown(r=this._element){
return r.classList.contains(zo)
}_configAfterMerge(r){
return r.toggle=!!r.toggle,r.parent=b(r.parent),r
}_getDimension(){
return this._element.classList.contains(w_)?S_:O_
}_initializeChildren(){
if(!this._config.parent){
return
}const r=this._getFirstLevelChildren(Go);for(const l of r){
const p=T.getElementFromSelector(l);p&&this._addAriaAndCollapsedClass([l],this._isShown(p))
}
}_getFirstLevelChildren(r){
const l=T.find(T_,this._config.parent);return T.find(r,this._config.parent).filter(p=>!l.includes(p))
}_addAriaAndCollapsedClass(r,l){
if(r.length){
for(const p of r){
p.classList.toggle(A_,!l),p.setAttribute('aria-expanded',l)
}
}
}static jQueryInterface(r){
const l={};return typeof r==='string'&&/show|hide/.test(r)&&(l.toggle=!1),this.each(function(){
const p=Rs.getOrCreateInstance(this,l);if(typeof r==='string'){
if(typeof p[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}p[r]()
}
})
}
}y.on(document,y_,Go,function(u){
(u.target.tagName==='A'||u.delegateTarget&&u.delegateTarget.tagName==='A')&&u.preventDefault();for(const r of T.getMultipleElementsFromSelector(this)){
Rs.getOrCreateInstance(r,{toggle:!1}).toggle()
}
}),G(Rs);const ue='top',ye='bottom',Ae='right',fe='left',gr='auto',Ls=[ue,ye,Ae,fe],Kn='start',$s='end',Sc='clippingParents',Xo='viewport',xs='popper',Oc='reference',Qo=Ls.reduce(function(u,r){
return u.concat([r+'-'+Kn,r+'-'+$s])
},[]),Jo=[].concat(Ls,[gr]).reduce(function(u,r){
return u.concat([r,r+'-'+Kn,r+'-'+$s])
},[]),Cc='beforeRead',Nc='read',Dc='afterRead',Rc='beforeMain',Lc='main',$c='afterMain',xc='beforeWrite',Ic='write',Pc='afterWrite',Mc=[Cc,Nc,Dc,Rc,Lc,$c,xc,Ic,Pc];function Je(u){
return u?(u.nodeName||'').toLowerCase():null
}function Te(u){
if(u==null){
return window
}if(u.toString()!=='[object Window]'){
const r=u.ownerDocument;return r&&r.defaultView||window
}return u
}function qn(u){
const r=Te(u).Element;return u instanceof r||u instanceof Element
}function Ie(u){
const r=Te(u).HTMLElement;return u instanceof r||u instanceof HTMLElement
}function Zo(u){
if(typeof ShadowRoot>'u'){
return!1
}const r=Te(u).ShadowRoot;return u instanceof r||u instanceof ShadowRoot
}function R_(u){
const r=u.state;Object.keys(r.elements).forEach(function(l){
const p=r.styles[l]||{},g=r.attributes[l]||{},w=r.elements[l];!Ie(w)||!Je(w)||(Object.assign(w.style,p),Object.keys(g).forEach(function(C){
const $=g[C];$===!1?w.removeAttribute(C):w.setAttribute(C,$===!0?'':$)
}))
})
}function L_(u){
const r=u.state,l={popper:{position:r.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};return Object.assign(r.elements.popper.style,l.popper),r.styles=l,r.elements.arrow&&Object.assign(r.elements.arrow.style,l.arrow),function(){
Object.keys(r.elements).forEach(function(p){
const g=r.elements[p],w=r.attributes[p]||{},C=Object.keys(r.styles.hasOwnProperty(p)?r.styles[p]:l[p]),$=C.reduce(function(H,Q){
return H[Q]='',H
},{});!Ie(g)||!Je(g)||(Object.assign(g.style,$),Object.keys(w).forEach(function(H){
g.removeAttribute(H)
}))
})
}
}const ta={name:'applyStyles',enabled:!0,phase:'write',fn:R_,effect:L_,requires:['computeStyles']};function Ze(u){
return u.split('-')[0]
}const Yn=Math.max,Er=Math.min,Is=Math.round;function ea(){
const u=navigator.userAgentData;return u!=null&&u.brands&&Array.isArray(u.brands)?u.brands.map(function(r){
return r.brand+'/'+r.version
}).join(' '):navigator.userAgent
}function kc(){
return!/^((?!chrome|android).)*safari/i.test(ea())
}function Ps(u,r,l){
r===void 0&&(r=!1),l===void 0&&(l=!1);let p=u.getBoundingClientRect(),g=1,w=1;r&&Ie(u)&&(g=u.offsetWidth>0&&Is(p.width)/u.offsetWidth||1,w=u.offsetHeight>0&&Is(p.height)/u.offsetHeight||1);const C=qn(u)?Te(u):window,$=C.visualViewport,H=!kc()&&l,Q=(p.left+(H&&$?$.offsetLeft:0))/g,B=(p.top+(H&&$?$.offsetTop:0))/w,ct=p.width/g,ft=p.height/w;return{width:ct,height:ft,top:B,right:Q+ct,bottom:B+ft,left:Q,x:Q,y:B}
}function na(u){
let r=Ps(u),l=u.offsetWidth,p=u.offsetHeight;return Math.abs(r.width-l)<=1&&(l=r.width),Math.abs(r.height-p)<=1&&(p=r.height),{x:u.offsetLeft,y:u.offsetTop,width:l,height:p}
}function Vc(u,r){
const l=r.getRootNode&&r.getRootNode();if(u.contains(r)){
return!0
}if(l&&Zo(l)){
let p=r;do{
if(p&&u.isSameNode(p)){
return!0
}p=p.parentNode||p.host
}while(p)
}return!1
}function un(u){
return Te(u).getComputedStyle(u)
}function $_(u){
return['table','td','th'].indexOf(Je(u))>=0
}function On(u){
return((qn(u)?u.ownerDocument:u.document)||window.document).documentElement
}function vr(u){
return Je(u)==='html'?u:u.assignedSlot||u.parentNode||(Zo(u)?u.host:null)||On(u)
}function Hc(u){
return!Ie(u)||un(u).position==='fixed'?null:u.offsetParent
}function x_(u){
const r=/firefox/i.test(ea()),l=/Trident/i.test(ea());if(l&&Ie(u)){
const p=un(u);if(p.position==='fixed'){
return null
}
}let g=vr(u);for(Zo(g)&&(g=g.host);Ie(g)&&['html','body'].indexOf(Je(g))<0;){
const w=un(g);if(w.transform!=='none'||w.perspective!=='none'||w.contain==='paint'||['transform','perspective'].indexOf(w.willChange)!==-1||r&&w.willChange==='filter'||r&&w.filter&&w.filter!=='none'){
return g
}g=g.parentNode
}return null
}function bi(u){
for(var r=Te(u),l=Hc(u);l&&$_(l)&&un(l).position==='static';){
l=Hc(l)
}return l&&(Je(l)==='html'||Je(l)==='body'&&un(l).position==='static')?r:l||x_(u)||r
}function sa(u){
return['top','bottom'].indexOf(u)>=0?'x':'y'
}function yi(u,r,l){
return Yn(u,Er(r,l))
}function I_(u,r,l){
const p=yi(u,r,l);return p>l?l:p
}function Fc(){
return{top:0,right:0,bottom:0,left:0}
}function jc(u){
return Object.assign({},Fc(),u)
}function Bc(u,r){
return r.reduce(function(l,p){
return l[p]=u,l
},{})
}const P_=function(r,l){
return r=typeof r==='function'?r(Object.assign({},l.rects,{placement:l.placement})):r,jc(typeof r!=='number'?r:Bc(r,Ls))
};function M_(u){
let r,l=u.state,p=u.name,g=u.options,w=l.elements.arrow,C=l.modifiersData.popperOffsets,$=Ze(l.placement),H=sa($),Q=[fe,Ae].indexOf($)>=0,B=Q?'height':'width';if(!(!w||!C)){
const ct=P_(g.padding,l),ft=na(w),it=H==='y'?ue:fe,Dt=H==='y'?ye:Ae,dt=l.rects.reference[B]+l.rects.reference[H]-C[H]-l.rects.popper[B],vt=C[H]-l.rects.reference[H],$t=bi(w),kt=$t?H==='y'?$t.clientHeight||0:$t.clientWidth||0:0,Vt=dt/2-vt/2,ht=ct[it],St=kt-ft[B]-ct[Dt],Ot=kt/2-ft[B]/2+Vt,Pt=yi(ht,Ot,St),zt=H;l.modifiersData[p]=(r={},r[zt]=Pt,r.centerOffset=Pt-Ot,r)
}
}function k_(u){
let r=u.state,l=u.options,p=l.element,g=p===void 0?'[data-popper-arrow]':p;g!=null&&(typeof g==='string'&&(g=r.elements.popper.querySelector(g),!g)||Vc(r.elements.popper,g)&&(r.elements.arrow=g))
}const Wc={name:'arrow',enabled:!0,phase:'main',fn:M_,effect:k_,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function Ms(u){
return u.split('-')[1]
}const V_={top:'auto',right:'auto',bottom:'auto',left:'auto'};function H_(u,r){
const l=u.x,p=u.y,g=r.devicePixelRatio||1;return{x:Is(l*g)/g||0,y:Is(p*g)/g||0}
}function Uc(u){
let r,l=u.popper,p=u.popperRect,g=u.placement,w=u.variation,C=u.offsets,$=u.position,H=u.gpuAcceleration,Q=u.adaptive,B=u.roundOffsets,ct=u.isFixed,ft=C.x,it=ft===void 0?0:ft,Dt=C.y,dt=Dt===void 0?0:Dt,vt=typeof B==='function'?B({x:it,y:dt}):{x:it,y:dt};it=vt.x,dt=vt.y;let $t=C.hasOwnProperty('x'),kt=C.hasOwnProperty('y'),Vt=fe,ht=ue,St=window;if(Q){
let Ot=bi(l),Pt='clientHeight',zt='clientWidth';if(Ot===Te(l)&&(Ot=On(l),un(Ot).position!=='static'&&$==='absolute'&&(Pt='scrollHeight',zt='scrollWidth')),Ot=Ot,g===ue||(g===fe||g===Ae)&&w===$s){
ht=ye;const Wt=ct&&Ot===St&&St.visualViewport?St.visualViewport.height:Ot[Pt];dt-=Wt-p.height,dt*=H?1:-1
}if(g===fe||(g===ue||g===ye)&&w===$s){
Vt=Ae;const Bt=ct&&Ot===St&&St.visualViewport?St.visualViewport.width:Ot[zt];it-=Bt-p.width,it*=H?1:-1
}
}const Zt=Object.assign({position:$},Q&&V_),We=B===!0?H_({x:it,y:dt},Te(l)):{x:it,y:dt};if(it=We.x,dt=We.y,H){
let de;return Object.assign({},Zt,(de={},de[ht]=kt?'0':'',de[Vt]=$t?'0':'',de.transform=(St.devicePixelRatio||1)<=1?'translate('+it+'px, '+dt+'px)':'translate3d('+it+'px, '+dt+'px, 0)',de))
}return Object.assign({},Zt,(r={},r[ht]=kt?dt+'px':'',r[Vt]=$t?it+'px':'',r.transform='',r))
}function F_(u){
const r=u.state,l=u.options,p=l.gpuAcceleration,g=p===void 0?!0:p,w=l.adaptive,C=w===void 0?!0:w,$=l.roundOffsets,H=$===void 0?!0:$,Q={placement:Ze(r.placement),variation:Ms(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:g,isFixed:r.options.strategy==='fixed'};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,Uc(Object.assign({},Q,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:C,roundOffsets:H})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,Uc(Object.assign({},Q,{offsets:r.modifiersData.arrow,position:'absolute',adaptive:!1,roundOffsets:H})))),r.attributes.popper=Object.assign({},r.attributes.popper,{'data-popper-placement':r.placement})
}const ia={name:'computeStyles',enabled:!0,phase:'beforeWrite',fn:F_,data:{}};const br={passive:!0};function j_(u){
const r=u.state,l=u.instance,p=u.options,g=p.scroll,w=g===void 0?!0:g,C=p.resize,$=C===void 0?!0:C,H=Te(r.elements.popper),Q=[].concat(r.scrollParents.reference,r.scrollParents.popper);return w&&Q.forEach(function(B){
B.addEventListener('scroll',l.update,br)
}),$&&H.addEventListener('resize',l.update,br),function(){
w&&Q.forEach(function(B){
B.removeEventListener('scroll',l.update,br)
}),$&&H.removeEventListener('resize',l.update,br)
}
}const ra={name:'eventListeners',enabled:!0,phase:'write',fn:function(){},effect:j_,data:{}};const B_={left:'right',right:'left',bottom:'top',top:'bottom'};function yr(u){
return u.replace(/left|right|bottom|top/g,function(r){
return B_[r]
})
}const W_={start:'end',end:'start'};function Kc(u){
return u.replace(/start|end/g,function(r){
return W_[r]
})
}function oa(u){
const r=Te(u),l=r.pageXOffset,p=r.pageYOffset;return{scrollLeft:l,scrollTop:p}
}function aa(u){
return Ps(On(u)).left+oa(u).scrollLeft
}function U_(u,r){
let l=Te(u),p=On(u),g=l.visualViewport,w=p.clientWidth,C=p.clientHeight,$=0,H=0;if(g){
w=g.width,C=g.height;const Q=kc();(Q||!Q&&r==='fixed')&&($=g.offsetLeft,H=g.offsetTop)
}return{width:w,height:C,x:$+aa(u),y:H}
}function K_(u){
let r,l=On(u),p=oa(u),g=(r=u.ownerDocument)==null?void 0:r.body,w=Yn(l.scrollWidth,l.clientWidth,g?g.scrollWidth:0,g?g.clientWidth:0),C=Yn(l.scrollHeight,l.clientHeight,g?g.scrollHeight:0,g?g.clientHeight:0),$=-p.scrollLeft+aa(u),H=-p.scrollTop;return un(g||l).direction==='rtl'&&($+=Yn(l.clientWidth,g?g.clientWidth:0)-w),{width:w,height:C,x:$,y:H}
}function la(u){
const r=un(u),l=r.overflow,p=r.overflowX,g=r.overflowY;return/auto|scroll|overlay|hidden/.test(l+g+p)
}function qc(u){
return['html','body','#document'].indexOf(Je(u))>=0?u.ownerDocument.body:Ie(u)&&la(u)?u:qc(vr(u))
}function Ai(u,r){
let l;r===void 0&&(r=[]);const p=qc(u),g=p===((l=u.ownerDocument)==null?void 0:l.body),w=Te(p),C=g?[w].concat(w.visualViewport||[],la(p)?p:[]):p,$=r.concat(C);return g?$:$.concat(Ai(vr(C)))
}function ca(u){
return Object.assign({},u,{left:u.x,top:u.y,right:u.x+u.width,bottom:u.y+u.height})
}function q_(u,r){
const l=Ps(u,!1,r==='fixed');return l.top=l.top+u.clientTop,l.left=l.left+u.clientLeft,l.bottom=l.top+u.clientHeight,l.right=l.left+u.clientWidth,l.width=u.clientWidth,l.height=u.clientHeight,l.x=l.left,l.y=l.top,l
}function Yc(u,r,l){
return r===Xo?ca(U_(u,l)):qn(r)?q_(r,l):ca(K_(On(u)))
}function Y_(u){
const r=Ai(vr(u)),l=['absolute','fixed'].indexOf(un(u).position)>=0,p=l&&Ie(u)?bi(u):u;return qn(p)?r.filter(function(g){
return qn(g)&&Vc(g,p)&&Je(g)!=='body'
}):[]
}function z_(u,r,l,p){
const g=r==='clippingParents'?Y_(u):[].concat(r),w=[].concat(g,[l]),C=w[0],$=w.reduce(function(H,Q){
const B=Yc(u,Q,p);return H.top=Yn(B.top,H.top),H.right=Er(B.right,H.right),H.bottom=Er(B.bottom,H.bottom),H.left=Yn(B.left,H.left),H
},Yc(u,C,p));return $.width=$.right-$.left,$.height=$.bottom-$.top,$.x=$.left,$.y=$.top,$
}function zc(u){
let r=u.reference,l=u.element,p=u.placement,g=p?Ze(p):null,w=p?Ms(p):null,C=r.x+r.width/2-l.width/2,$=r.y+r.height/2-l.height/2,H;switch(g){
case ue:H={x:C,y:r.y-l.height};break;case ye:H={x:C,y:r.y+r.height};break;case Ae:H={x:r.x+r.width,y:$};break;case fe:H={x:r.x-l.width,y:$};break;default:H={x:r.x,y:r.y}
}const Q=g?sa(g):null;if(Q!=null){
const B=Q==='y'?'height':'width';switch(w){
case Kn:H[Q]=H[Q]-(r[B]/2-l[B]/2);break;case $s:H[Q]=H[Q]+(r[B]/2-l[B]/2);break
}
}return H
}function ks(u,r){
r===void 0&&(r={});const l=r,p=l.placement,g=p===void 0?u.placement:p,w=l.strategy,C=w===void 0?u.strategy:w,$=l.boundary,H=$===void 0?Sc:$,Q=l.rootBoundary,B=Q===void 0?Xo:Q,ct=l.elementContext,ft=ct===void 0?xs:ct,it=l.altBoundary,Dt=it===void 0?!1:it,dt=l.padding,vt=dt===void 0?0:dt,$t=jc(typeof vt!=='number'?vt:Bc(vt,Ls)),kt=ft===xs?Oc:xs,Vt=u.rects.popper,ht=u.elements[Dt?kt:ft],St=z_(qn(ht)?ht:ht.contextElement||On(u.elements.popper),H,B,C),Ot=Ps(u.elements.reference),Pt=zc({reference:Ot,element:Vt,placement:g}),zt=ca(Object.assign({},Vt,Pt)),Wt=ft===xs?zt:Ot,Bt={top:St.top-Wt.top+$t.top,bottom:Wt.bottom-St.bottom+$t.bottom,left:St.left-Wt.left+$t.left,right:Wt.right-St.right+$t.right},Zt=u.modifiersData.offset;if(ft===xs&&Zt){
const We=Zt[g];Object.keys(Bt).forEach(function(de){
const es=[Ae,ye].indexOf(de)>=0?1:-1,ns=[ue,ye].indexOf(de)>=0?'y':'x';Bt[de]+=We[ns]*es
})
}return Bt
}function G_(u,r){
r===void 0&&(r={});let l=r,p=l.placement,g=l.boundary,w=l.rootBoundary,C=l.padding,$=l.flipVariations,H=l.allowedAutoPlacements,Q=H===void 0?Jo:H,B=Ms(p),ct=B?$?Qo:Qo.filter(function(Dt){
return Ms(Dt)===B
}):Ls,ft=ct.filter(function(Dt){
return Q.indexOf(Dt)>=0
});ft.length===0&&(ft=ct);const it=ft.reduce(function(Dt,dt){
return Dt[dt]=ks(u,{placement:dt,boundary:g,rootBoundary:w,padding:C})[Ze(dt)],Dt
},{});return Object.keys(it).sort(function(Dt,dt){
return it[Dt]-it[dt]
})
}function X_(u){
if(Ze(u)===gr){
return[]
}const r=yr(u);return[Kc(u),r,Kc(r)]
}function Q_(u){
const r=u.state,l=u.options,p=u.name;if(!r.modifiersData[p]._skip){
for(var g=l.mainAxis,w=g===void 0?!0:g,C=l.altAxis,$=C===void 0?!0:C,H=l.fallbackPlacements,Q=l.padding,B=l.boundary,ct=l.rootBoundary,ft=l.altBoundary,it=l.flipVariations,Dt=it===void 0?!0:it,dt=l.allowedAutoPlacements,vt=r.options.placement,$t=Ze(vt),kt=$t===vt,Vt=H||(kt||!Dt?[yr(vt)]:X_(vt)),ht=[vt].concat(Vt).reduce(function(Fs,Nn){
return Fs.concat(Ze(Nn)===gr?G_(r,{placement:Nn,boundary:B,rootBoundary:ct,padding:Q,flipVariations:Dt,allowedAutoPlacements:dt}):Nn)
},[]),St=r.rects.reference,Ot=r.rects.popper,Pt=new Map,zt=!0,Wt=ht[0],Bt=0;Bt<ht.length;Bt++){
let Zt=ht[Bt],We=Ze(Zt),de=Ms(Zt)===Kn,es=[ue,ye].indexOf(We)>=0,ns=es?'width':'height',we=ks(r,{placement:Zt,boundary:B,rootBoundary:ct,altBoundary:ft,padding:Q}),Ue=es?de?Ae:fe:de?ye:ue;St[ns]>Ot[ns]&&(Ue=yr(Ue));const Rr=yr(Ue),ss=[];if(w&&ss.push(we[We]<=0),$&&ss.push(we[Ue]<=0,we[Rr]<=0),ss.every(function(Fs){
return Fs
})){
Wt=Zt,zt=!1;break
}Pt.set(Zt,ss)
}if(zt){
for(let Lr=Dt?3:1,Ta=function(Nn){
const Ci=ht.find(function(xr){
const is=Pt.get(xr);if(is){
return is.slice(0,Nn).every(function(wa){
return wa
})
}
});if(Ci){
return Wt=Ci,'break'
}
},Oi=Lr;Oi>0;Oi--){
const $r=Ta(Oi);if($r==='break'){
break
}
}
}r.placement!==Wt&&(r.modifiersData[p]._skip=!0,r.placement=Wt,r.reset=!0)
}
}const Gc={name:'flip',enabled:!0,phase:'main',fn:Q_,requiresIfExists:['offset'],data:{_skip:!1}};function Xc(u,r,l){
return l===void 0&&(l={x:0,y:0}),{top:u.top-r.height-l.y,right:u.right-r.width+l.x,bottom:u.bottom-r.height+l.y,left:u.left-r.width-l.x}
}function Qc(u){
return[ue,Ae,ye,fe].some(function(r){
return u[r]>=0
})
}function J_(u){
const r=u.state,l=u.name,p=r.rects.reference,g=r.rects.popper,w=r.modifiersData.preventOverflow,C=ks(r,{elementContext:'reference'}),$=ks(r,{altBoundary:!0}),H=Xc(C,p),Q=Xc($,g,w),B=Qc(H),ct=Qc(Q);r.modifiersData[l]={referenceClippingOffsets:H,popperEscapeOffsets:Q,isReferenceHidden:B,hasPopperEscaped:ct},r.attributes.popper=Object.assign({},r.attributes.popper,{'data-popper-reference-hidden':B,'data-popper-escaped':ct})
}const Jc={name:'hide',enabled:!0,phase:'main',requiresIfExists:['preventOverflow'],fn:J_};function Z_(u,r,l){
let p=Ze(u),g=[fe,ue].indexOf(p)>=0?-1:1,w=typeof l==='function'?l(Object.assign({},r,{placement:u})):l,C=w[0],$=w[1];return C=C||0,$=($||0)*g,[fe,Ae].indexOf(p)>=0?{x:$,y:C}:{x:C,y:$}
}function tg(u){
const r=u.state,l=u.options,p=u.name,g=l.offset,w=g===void 0?[0,0]:g,C=Jo.reduce(function(B,ct){
return B[ct]=Z_(ct,r.rects,w),B
},{}),$=C[r.placement],H=$.x,Q=$.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=H,r.modifiersData.popperOffsets.y+=Q),r.modifiersData[p]=C
}const Zc={name:'offset',enabled:!0,phase:'main',requires:['popperOffsets'],fn:tg};function eg(u){
const r=u.state,l=u.name;r.modifiersData[l]=zc({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})
}const ua={name:'popperOffsets',enabled:!0,phase:'read',fn:eg,data:{}};function ng(u){
return u==='x'?'y':'x'
}function sg(u){
const r=u.state,l=u.options,p=u.name,g=l.mainAxis,w=g===void 0?!0:g,C=l.altAxis,$=C===void 0?!1:C,H=l.boundary,Q=l.rootBoundary,B=l.altBoundary,ct=l.padding,ft=l.tether,it=ft===void 0?!0:ft,Dt=l.tetherOffset,dt=Dt===void 0?0:Dt,vt=ks(r,{boundary:H,rootBoundary:Q,padding:ct,altBoundary:B}),$t=Ze(r.placement),kt=Ms(r.placement),Vt=!kt,ht=sa($t),St=ng(ht),Ot=r.modifiersData.popperOffsets,Pt=r.rects.reference,zt=r.rects.popper,Wt=typeof dt==='function'?dt(Object.assign({},r.rects,{placement:r.placement})):dt,Bt=typeof Wt==='number'?{mainAxis:Wt,altAxis:Wt}:Object.assign({mainAxis:0,altAxis:0},Wt),Zt=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,We={x:0,y:0};if(Ot){
if(w){
let de,es=ht==='y'?ue:fe,ns=ht==='y'?ye:Ae,we=ht==='y'?'height':'width',Ue=Ot[ht],Rr=Ue+vt[es],ss=Ue-vt[ns],Lr=it?-zt[we]/2:0,Ta=kt===Kn?Pt[we]:zt[we],Oi=kt===Kn?-zt[we]:-Pt[we],$r=r.elements.arrow,Fs=it&&$r?na($r):{width:0,height:0},Nn=r.modifiersData['arrow#persistent']?r.modifiersData['arrow#persistent'].padding:Fc(),Ci=Nn[es],xr=Nn[ns],is=yi(0,Pt[we],Fs[we]),wa=Vt?Pt[we]/2-Lr-is-Ci-Bt.mainAxis:Ta-is-Ci-Bt.mainAxis,Gv=Vt?-Pt[we]/2+Lr+is+xr+Bt.mainAxis:Oi+is+xr+Bt.mainAxis,Sa=r.elements.arrow&&bi(r.elements.arrow),Xv=Sa?ht==='y'?Sa.clientTop||0:Sa.clientLeft||0:0,ju=(de=Zt==null?void 0:Zt[ht])!=null?de:0,Qv=Ue+wa-ju-Xv,Jv=Ue+Gv-ju,Bu=yi(it?Er(Rr,Qv):Rr,Ue,it?Yn(ss,Jv):ss);Ot[ht]=Bu,We[ht]=Bu-Ue
}if($){
let Wu,Zv=ht==='x'?ue:fe,tb=ht==='x'?ye:Ae,rs=Ot[St],Ir=St==='y'?'height':'width',Uu=rs+vt[Zv],Ku=rs-vt[tb],Oa=[ue,fe].indexOf($t)!==-1,qu=(Wu=Zt==null?void 0:Zt[St])!=null?Wu:0,Yu=Oa?Uu:rs-Pt[Ir]-zt[Ir]-qu+Bt.altAxis,zu=Oa?rs+Pt[Ir]+zt[Ir]-qu-Bt.altAxis:Ku,Gu=it&&Oa?I_(Yu,rs,zu):yi(it?Yu:Uu,rs,it?zu:Ku);Ot[St]=Gu,We[St]=Gu-rs
}r.modifiersData[p]=We
}
}const tu={name:'preventOverflow',enabled:!0,phase:'main',fn:sg,requiresIfExists:['offset']};function ig(u){
return{scrollLeft:u.scrollLeft,scrollTop:u.scrollTop}
}function rg(u){
return u===Te(u)||!Ie(u)?oa(u):ig(u)
}function og(u){
const r=u.getBoundingClientRect(),l=Is(r.width)/u.offsetWidth||1,p=Is(r.height)/u.offsetHeight||1;return l!==1||p!==1
}function ag(u,r,l){
l===void 0&&(l=!1);let p=Ie(r),g=Ie(r)&&og(r),w=On(r),C=Ps(u,g,l),$={scrollLeft:0,scrollTop:0},H={x:0,y:0};return(p||!p&&!l)&&((Je(r)!=='body'||la(w))&&($=rg(r)),Ie(r)?(H=Ps(r,!0),H.x+=r.clientLeft,H.y+=r.clientTop):w&&(H.x=aa(w))),{x:C.left+$.scrollLeft-H.x,y:C.top+$.scrollTop-H.y,width:C.width,height:C.height}
}function lg(u){
const r=new Map,l=new Set,p=[];u.forEach(function(w){
r.set(w.name,w)
});function g(w){
l.add(w.name);const C=[].concat(w.requires||[],w.requiresIfExists||[]);C.forEach(function($){
if(!l.has($)){
const H=r.get($);H&&g(H)
}
}),p.push(w)
}return u.forEach(function(w){
l.has(w.name)||g(w)
}),p
}function cg(u){
const r=lg(u);return Mc.reduce(function(l,p){
return l.concat(r.filter(function(g){
return g.phase===p
}))
},[])
}function ug(u){
let r;return function(){
return r||(r=new Promise(function(l){
Promise.resolve().then(function(){
r=void 0,l(u())
})
})),r
}
}function fg(u){
const r=u.reduce(function(l,p){
const g=l[p.name];return l[p.name]=g?Object.assign({},g,p,{options:Object.assign({},g.options,p.options),data:Object.assign({},g.data,p.data)}):p,l
},{});return Object.keys(r).map(function(l){
return r[l]
})
}const eu={placement:'bottom',modifiers:[],strategy:'absolute'};function nu(){
for(var u=arguments.length,r=new Array(u),l=0;l<u;l++){
r[l]=arguments[l]
}return!r.some(function(p){
return!(p&&typeof p.getBoundingClientRect==='function')
})
}function Ar(u){
u===void 0&&(u={});const r=u,l=r.defaultModifiers,p=l===void 0?[]:l,g=r.defaultOptions,w=g===void 0?eu:g;return function($,H,Q){
Q===void 0&&(Q=w);var B={placement:'bottom',orderedModifiers:[],options:Object.assign({},eu,w),modifiersData:{},elements:{reference:$,popper:H},attributes:{},styles:{}},ct=[],ft=!1,it={state:B,setOptions:function($t){
const kt=typeof $t==='function'?$t(B.options):$t;dt(),B.options=Object.assign({},w,B.options,kt),B.scrollParents={reference:qn($)?Ai($):$.contextElement?Ai($.contextElement):[],popper:Ai(H)};const Vt=cg(fg([].concat(p,B.options.modifiers)));return B.orderedModifiers=Vt.filter(function(ht){
return ht.enabled
}),Dt(),it.update()
},forceUpdate:function(){
if(!ft){
const $t=B.elements,kt=$t.reference,Vt=$t.popper;if(nu(kt,Vt)){
B.rects={reference:ag(kt,bi(Vt),B.options.strategy==='fixed'),popper:na(Vt)},B.reset=!1,B.placement=B.options.placement,B.orderedModifiers.forEach(function(Bt){
return B.modifiersData[Bt.name]=Object.assign({},Bt.data)
});for(let ht=0;ht<B.orderedModifiers.length;ht++){
if(B.reset===!0){
B.reset=!1,ht=-1;continue
}const St=B.orderedModifiers[ht],Ot=St.fn,Pt=St.options,zt=Pt===void 0?{}:Pt,Wt=St.name;typeof Ot==='function'&&(B=Ot({state:B,options:zt,name:Wt,instance:it})||B)
}
}
}
},update:ug(function(){
return new Promise(function(vt){
it.forceUpdate(),vt(B)
})
}),destroy:function(){
dt(),ft=!0
}};if(!nu($,H)){
return it
}it.setOptions(Q).then(function(vt){
!ft&&Q.onFirstUpdate&&Q.onFirstUpdate(vt)
});function Dt(){
B.orderedModifiers.forEach(function(vt){
const $t=vt.name,kt=vt.options,Vt=kt===void 0?{}:kt,ht=vt.effect;if(typeof ht==='function'){
const St=ht({state:B,name:$t,instance:it,options:Vt}),Ot=function(){};ct.push(St||Ot)
}
})
}function dt(){
ct.forEach(function(vt){
return vt()
}),ct=[]
}return it
}
}const dg=Ar(),hg=[ra,ua,ia,ta],pg=Ar({defaultModifiers:hg}),mg=[ra,ua,ia,ta,Zc,Gc,tu,Wc,Jc],fa=Ar({defaultModifiers:mg});const su=Object.freeze(Object.defineProperty({__proto__:null,afterMain:$c,afterRead:Dc,afterWrite:Pc,applyStyles:ta,arrow:Wc,auto:gr,basePlacements:Ls,beforeMain:Rc,beforeRead:Cc,beforeWrite:xc,bottom:ye,clippingParents:Sc,computeStyles:ia,createPopper:fa,createPopperBase:dg,createPopperLite:pg,detectOverflow:ks,end:$s,eventListeners:ra,flip:Gc,hide:Jc,left:fe,main:Lc,modifierPhases:Mc,offset:Zc,placements:Jo,popper:xs,popperGenerator:Ar,popperOffsets:ua,preventOverflow:tu,read:Nc,reference:Oc,right:Ae,start:Kn,top:ue,variationPlacements:Qo,viewport:Xo,write:Ic},Symbol.toStringTag,{value:'Module'})),iu='dropdown',zn='.bs.dropdown',da='.data-api',_g='Escape',ru='Tab',gg='ArrowUp',ou='ArrowDown',Eg=2,vg=`hide${zn}`,bg=`hidden${zn}`,yg=`show${zn}`,Ag=`shown${zn}`,au=`click${zn}${da}`,lu=`keydown${zn}${da}`,Tg=`keyup${zn}${da}`,Vs='show',wg='dropup',Sg='dropend',Og='dropstart',Cg='dropup-center',Ng='dropdown-center',Gn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Dg=`${Gn}.${Vs}`,Tr='.dropdown-menu',Rg='.navbar',Lg='.navbar-nav',$g='.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',xg=z()?'top-end':'top-start',Ig=z()?'top-start':'top-end',Pg=z()?'bottom-end':'bottom-start',Mg=z()?'bottom-start':'bottom-end',kg=z()?'left-start':'right-start',Vg=z()?'right-start':'left-start',Hg='top',Fg='bottom',jg={autoClose:!0,boundary:'clippingParents',display:'dynamic',offset:[0,2],popperConfig:null,reference:'toggle'},Bg={autoClose:'(boolean|string)',boundary:'(string|element)',display:'string',offset:'(array|string|function)',popperConfig:'(null|object|function)',reference:'(string|element|object)'};class Be extends R{
constructor(r,l){
super(r,l),this._popper=null,this._parent=this._element.parentNode,this._menu=T.next(this._element,Tr)[0]||T.prev(this._element,Tr)[0]||T.findOne(Tr,this._parent),this._inNavbar=this._detectNavbar()
}static get Default(){
return jg
}static get DefaultType(){
return Bg
}static get NAME(){
return iu
}toggle(){
return this._isShown()?this.hide():this.show()
}show(){
if(O(this._element)||this._isShown()){
return
}const r={relatedTarget:this._element};if(!y.trigger(this._element,yg,r).defaultPrevented){
if(this._createPopper(),'ontouchstart'in document.documentElement&&!this._parent.closest(Lg)){
for(const p of[].concat(...document.body.children)){
y.on(p,'mouseover',P)
}
}this._element.focus(),this._element.setAttribute('aria-expanded',!0),this._menu.classList.add(Vs),this._element.classList.add(Vs),y.trigger(this._element,Ag,r)
}
}hide(){
if(O(this._element)||!this._isShown()){
return
}const r={relatedTarget:this._element};this._completeHide(r)
}dispose(){
this._popper&&this._popper.destroy(),super.dispose()
}update(){
this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()
}_completeHide(r){
if(!y.trigger(this._element,vg,r).defaultPrevented){
if('ontouchstart'in document.documentElement){
for(const p of[].concat(...document.body.children)){
y.off(p,'mouseover',P)
}
}this._popper&&this._popper.destroy(),this._menu.classList.remove(Vs),this._element.classList.remove(Vs),this._element.setAttribute('aria-expanded','false'),_.removeDataAttribute(this._menu,'popper'),y.trigger(this._element,bg,r)
}
}_getConfig(r){
if(r=super._getConfig(r),typeof r.reference==='object'&&!v(r.reference)&&typeof r.reference.getBoundingClientRect!=='function'){
throw new TypeError(`${iu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
}return r
}_createPopper(){
if(typeof su>'u'){
throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
}let r=this._element;this._config.reference==='parent'?r=this._parent:v(this._config.reference)?r=b(this._config.reference):typeof this._config.reference==='object'&&(r=this._config.reference);const l=this._getPopperConfig();this._popper=fa(r,this._menu,l)
}_isShown(){
return this._menu.classList.contains(Vs)
}_getPlacement(){
const r=this._parent;if(r.classList.contains(Sg)){
return kg
}if(r.classList.contains(Og)){
return Vg
}if(r.classList.contains(Cg)){
return Hg
}if(r.classList.contains(Ng)){
return Fg
}const l=getComputedStyle(this._menu).getPropertyValue('--bs-position').trim()==='end';return r.classList.contains(wg)?l?Ig:xg:l?Mg:Pg
}_detectNavbar(){
return this._element.closest(Rg)!==null
}_getOffset(){
const{offset:r}=this._config;return typeof r==='string'?r.split(',').map(l=>Number.parseInt(l,10)):typeof r==='function'?l=>r(l,this._element):r
}_getPopperConfig(){
const r={placement:this._getPlacement(),modifiers:[{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'offset',options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==='static')&&(_.setDataAttribute(this._menu,'popper','static'),r.modifiers=[{name:'applyStyles',enabled:!1}]),{...r,...nt(this._config.popperConfig,[r])}
}_selectMenuItem({key:r,target:l}){
const p=T.find($g,this._menu).filter(g=>S(g));p.length&&_t(p,l,r===ou,!p.includes(l)).focus()
}static jQueryInterface(r){
return this.each(function(){
const l=Be.getOrCreateInstance(this,r);if(typeof r==='string'){
if(typeof l[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}static clearMenus(r){
if(r.button===Eg||r.type==='keyup'&&r.key!==ru){
return
}const l=T.find(Dg);for(const p of l){
const g=Be.getInstance(p);if(!g||g._config.autoClose===!1){
continue
}const w=r.composedPath(),C=w.includes(g._menu);if(w.includes(g._element)||g._config.autoClose==='inside'&&!C||g._config.autoClose==='outside'&&C||g._menu.contains(r.target)&&(r.type==='keyup'&&r.key===ru||/input|select|option|textarea|form/i.test(r.target.tagName))){
continue
}const $={relatedTarget:g._element};r.type==='click'&&($.clickEvent=r),g._completeHide($)
}
}static dataApiKeydownHandler(r){
const l=/input|textarea/i.test(r.target.tagName),p=r.key===_g,g=[gg,ou].includes(r.key);if(!g&&!p||l&&!p){
return
}r.preventDefault();const w=this.matches(Gn)?this:T.prev(this,Gn)[0]||T.next(this,Gn)[0]||T.findOne(Gn,r.delegateTarget.parentNode),C=Be.getOrCreateInstance(w);if(g){
r.stopPropagation(),C.show(),C._selectMenuItem(r);return
}C._isShown()&&(r.stopPropagation(),C.hide(),w.focus())
}
}y.on(document,lu,Gn,Be.dataApiKeydownHandler),y.on(document,lu,Tr,Be.dataApiKeydownHandler),y.on(document,au,Be.clearMenus),y.on(document,Tg,Be.clearMenus),y.on(document,au,Gn,function(u){
u.preventDefault(),Be.getOrCreateInstance(this).toggle()
}),G(Be);const cu='backdrop',Wg='fade',uu='show',fu=`mousedown.bs.${cu}`,Ug={className:'modal-backdrop',clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:'body'},Kg={className:'string',clickCallback:'(function|null)',isAnimated:'boolean',isVisible:'boolean',rootElement:'(element|string)'};class du extends E{
constructor(r){
super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null
}static get Default(){
return Ug
}static get DefaultType(){
return Kg
}static get NAME(){
return cu
}show(r){
if(!this._config.isVisible){
nt(r);return
}this._append();const l=this._getElement();this._config.isAnimated&&M(l),l.classList.add(uu),this._emulateAnimation(()=>{
nt(r)
})
}hide(r){
if(!this._config.isVisible){
nt(r);return
}this._getElement().classList.remove(uu),this._emulateAnimation(()=>{
this.dispose(),nt(r)
})
}dispose(){
this._isAppended&&(y.off(this._element,fu),this._element.remove(),this._isAppended=!1)
}_getElement(){
if(!this._element){
const r=document.createElement('div');r.className=this._config.className,this._config.isAnimated&&r.classList.add(Wg),this._element=r
}return this._element
}_configAfterMerge(r){
return r.rootElement=b(r.rootElement),r
}_append(){
if(this._isAppended){
return
}const r=this._getElement();this._config.rootElement.append(r),y.on(r,fu,()=>{
nt(this._config.clickCallback)
}),this._isAppended=!0
}_emulateAnimation(r){
gt(r,this._getElement(),this._config.isAnimated)
}
}const qg='focustrap',wr='.bs.focustrap',Yg=`focusin${wr}`,zg=`keydown.tab${wr}`,Gg='Tab',Xg='forward',hu='backward',Qg={autofocus:!0,trapElement:null},Jg={autofocus:'boolean',trapElement:'element'};class pu extends E{
constructor(r){
super(),this._config=this._getConfig(r),this._isActive=!1,this._lastTabNavDirection=null
}static get Default(){
return Qg
}static get DefaultType(){
return Jg
}static get NAME(){
return qg
}activate(){
this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,wr),y.on(document,Yg,r=>this._handleFocusin(r)),y.on(document,zg,r=>this._handleKeydown(r)),this._isActive=!0)
}deactivate(){
this._isActive&&(this._isActive=!1,y.off(document,wr))
}_handleFocusin(r){
const{trapElement:l}=this._config;if(r.target===document||r.target===l||l.contains(r.target)){
return
}const p=T.focusableChildren(l);p.length===0?l.focus():this._lastTabNavDirection===hu?p[p.length-1].focus():p[0].focus()
}_handleKeydown(r){
r.key===Gg&&(this._lastTabNavDirection=r.shiftKey?hu:Xg)
}
}const mu='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',_u='.sticky-top',Sr='padding-right',gu='margin-right';class ha{
constructor(){
this._element=document.body
}getWidth(){
const r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)
}hide(){
const r=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Sr,l=>l+r),this._setElementAttributes(mu,Sr,l=>l+r),this._setElementAttributes(_u,gu,l=>l-r)
}reset(){
this._resetElementAttributes(this._element,'overflow'),this._resetElementAttributes(this._element,Sr),this._resetElementAttributes(mu,Sr),this._resetElementAttributes(_u,gu)
}isOverflowing(){
return this.getWidth()>0
}_disableOverFlow(){
this._saveInitialAttribute(this._element,'overflow'),this._element.style.overflow='hidden'
}_setElementAttributes(r,l,p){
const g=this.getWidth(),w=C=>{
if(C!==this._element&&window.innerWidth>C.clientWidth+g){
return
}this._saveInitialAttribute(C,l);const $=window.getComputedStyle(C).getPropertyValue(l);C.style.setProperty(l,`${p(Number.parseFloat($))}px`)
};this._applyManipulationCallback(r,w)
}_saveInitialAttribute(r,l){
const p=r.style.getPropertyValue(l);p&&_.setDataAttribute(r,l,p)
}_resetElementAttributes(r,l){
const p=g=>{
const w=_.getDataAttribute(g,l);if(w===null){
g.style.removeProperty(l);return
}_.removeDataAttribute(g,l),g.style.setProperty(l,w)
};this._applyManipulationCallback(r,p)
}_applyManipulationCallback(r,l){
if(v(r)){
l(r);return
}for(const p of T.find(r,this._element)){
l(p)
}
}
}const Zg='modal',Pe='.bs.modal',tE='.data-api',eE='Escape',nE=`hide${Pe}`,sE=`hidePrevented${Pe}`,Eu=`hidden${Pe}`,vu=`show${Pe}`,iE=`shown${Pe}`,rE=`resize${Pe}`,oE=`click.dismiss${Pe}`,aE=`mousedown.dismiss${Pe}`,lE=`keydown.dismiss${Pe}`,cE=`click${Pe}${tE}`,bu='modal-open',uE='fade',yu='show',pa='modal-static',fE='.modal.show',dE='.modal-dialog',hE='.modal-body',pE='[data-bs-toggle="modal"]',mE={backdrop:!0,focus:!0,keyboard:!0},_E={backdrop:'(boolean|string)',focus:'boolean',keyboard:'boolean'};class Xn extends R{
constructor(r,l){
super(r,l),this._dialog=T.findOne(dE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ha,this._addEventListeners()
}static get Default(){
return mE
}static get DefaultType(){
return _E
}static get NAME(){
return Zg
}toggle(r){
return this._isShown?this.hide():this.show(r)
}show(r){
this._isShown||this._isTransitioning||y.trigger(this._element,vu,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(bu),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))
}hide(){
!this._isShown||this._isTransitioning||y.trigger(this._element,nE).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(yu),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))
}dispose(){
y.off(window,Pe),y.off(this._dialog,Pe),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()
}handleUpdate(){
this._adjustDialog()
}_initializeBackDrop(){
return new du({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})
}_initializeFocusTrap(){
return new pu({trapElement:this._element})
}_showElement(r){
document.body.contains(this._element)||document.body.append(this._element),this._element.style.display='block',this._element.removeAttribute('aria-hidden'),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.scrollTop=0;const l=T.findOne(hE,this._dialog);l&&(l.scrollTop=0),M(this._element),this._element.classList.add(yu);const p=()=>{
this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,iE,{relatedTarget:r})
};this._queueCallback(p,this._dialog,this._isAnimated())
}_addEventListeners(){
y.on(this._element,lE,r=>{
if(r.key===eE){
if(this._config.keyboard){
this.hide();return
}this._triggerBackdropTransition()
}
}),y.on(window,rE,()=>{
this._isShown&&!this._isTransitioning&&this._adjustDialog()
}),y.on(this._element,aE,r=>{
y.one(this._element,oE,l=>{
if(!(this._element!==r.target||this._element!==l.target)){
if(this._config.backdrop==='static'){
this._triggerBackdropTransition();return
}this._config.backdrop&&this.hide()
}
})
})
}_hideModal(){
this._element.style.display='none',this._element.setAttribute('aria-hidden',!0),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._isTransitioning=!1,this._backdrop.hide(()=>{
document.body.classList.remove(bu),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,Eu)
})
}_isAnimated(){
return this._element.classList.contains(uE)
}_triggerBackdropTransition(){
if(y.trigger(this._element,sE).defaultPrevented){
return
}const l=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==='hidden'||this._element.classList.contains(pa)||(l||(this._element.style.overflowY='hidden'),this._element.classList.add(pa),this._queueCallback(()=>{
this._element.classList.remove(pa),this._queueCallback(()=>{
this._element.style.overflowY=p
},this._dialog)
},this._dialog),this._element.focus())
}_adjustDialog(){
const r=this._element.scrollHeight>document.documentElement.clientHeight,l=this._scrollBar.getWidth(),p=l>0;if(p&&!r){
const g=z()?'paddingLeft':'paddingRight';this._element.style[g]=`${l}px`
}if(!p&&r){
const g=z()?'paddingRight':'paddingLeft';this._element.style[g]=`${l}px`
}
}_resetAdjustments(){
this._element.style.paddingLeft='',this._element.style.paddingRight=''
}static jQueryInterface(r,l){
return this.each(function(){
const p=Xn.getOrCreateInstance(this,r);if(typeof r==='string'){
if(typeof p[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}p[r](l)
}
})
}
}y.on(document,cE,pE,function(u){
const r=T.getElementFromSelector(this);['A','AREA'].includes(this.tagName)&&u.preventDefault(),y.one(r,vu,g=>{
g.defaultPrevented||y.one(r,Eu,()=>{
S(this)&&this.focus()
})
});const l=T.findOne(fE);l&&Xn.getInstance(l).hide(),Xn.getOrCreateInstance(r).toggle(this)
}),K(Xn),G(Xn);const gE='offcanvas',fn='.bs.offcanvas',Au='.data-api',EE=`load${fn}${Au}`,vE='Escape',Tu='show',wu='showing',Su='hiding',bE='offcanvas-backdrop',Ou='.offcanvas.show',yE=`show${fn}`,AE=`shown${fn}`,TE=`hide${fn}`,Cu=`hidePrevented${fn}`,Nu=`hidden${fn}`,wE=`resize${fn}`,SE=`click${fn}${Au}`,OE=`keydown.dismiss${fn}`,CE='[data-bs-toggle="offcanvas"]',NE={backdrop:!0,keyboard:!0,scroll:!1},DE={backdrop:'(boolean|string)',keyboard:'boolean',scroll:'boolean'};class dn extends R{
constructor(r,l){
super(r,l),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()
}static get Default(){
return NE
}static get DefaultType(){
return DE
}static get NAME(){
return gE
}toggle(r){
return this._isShown?this.hide():this.show(r)
}show(r){
if(this._isShown||y.trigger(this._element,yE,{relatedTarget:r}).defaultPrevented){
return
}this._isShown=!0,this._backdrop.show(),this._config.scroll||new ha().hide(),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.classList.add(wu);const p=()=>{
(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Tu),this._element.classList.remove(wu),y.trigger(this._element,AE,{relatedTarget:r})
};this._queueCallback(p,this._element,!0)
}hide(){
if(!this._isShown||y.trigger(this._element,TE).defaultPrevented){
return
}this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Su),this._backdrop.hide();const l=()=>{
this._element.classList.remove(Tu,Su),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._config.scroll||new ha().reset(),y.trigger(this._element,Nu)
};this._queueCallback(l,this._element,!0)
}dispose(){
this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()
}_initializeBackDrop(){
const r=()=>{
if(this._config.backdrop==='static'){
y.trigger(this._element,Cu);return
}this.hide()
},l=!!this._config.backdrop;return new du({className:bE,isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?r:null})
}_initializeFocusTrap(){
return new pu({trapElement:this._element})
}_addEventListeners(){
y.on(this._element,OE,r=>{
if(r.key===vE){
if(this._config.keyboard){
this.hide();return
}y.trigger(this._element,Cu)
}
})
}static jQueryInterface(r){
return this.each(function(){
const l=dn.getOrCreateInstance(this,r);if(typeof r==='string'){
if(l[r]===void 0||r.startsWith('_')||r==='constructor'){
throw new TypeError(`No method named "${r}"`)
}l[r](this)
}
})
}
}y.on(document,SE,CE,function(u){
const r=T.getElementFromSelector(this);if(['A','AREA'].includes(this.tagName)&&u.preventDefault(),O(this)){
return
}y.one(r,Nu,()=>{
S(this)&&this.focus()
});const l=T.findOne(Ou);l&&l!==r&&dn.getInstance(l).hide(),dn.getOrCreateInstance(r).toggle(this)
}),y.on(window,EE,()=>{
for(const u of T.find(Ou)){
dn.getOrCreateInstance(u).show()
}
}),y.on(window,wE,()=>{
for(const u of T.find('[aria-modal][class*=show][class*=offcanvas-]')){
getComputedStyle(u).position!=='fixed'&&dn.getOrCreateInstance(u).hide()
}
}),K(dn),G(dn);const Du={'*':['class','dir','id','lang','role',/^aria-[\w-]*$/i],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','srcset','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},RE=new Set(['background','cite','href','itemtype','longdesc','poster','src','xlink:href']),LE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,$E=(u,r)=>{
const l=u.nodeName.toLowerCase();return r.includes(l)?RE.has(l)?!!LE.test(u.nodeValue):!0:r.filter(p=>p instanceof RegExp).some(p=>p.test(l))
};function xE(u,r,l){
if(!u.length){
return u
}if(l&&typeof l==='function'){
return l(u)
}const g=new window.DOMParser().parseFromString(u,'text/html'),w=[].concat(...g.body.querySelectorAll('*'));for(const C of w){
const $=C.nodeName.toLowerCase();if(!Object.keys(r).includes($)){
C.remove();continue
}const H=[].concat(...C.attributes),Q=[].concat(r['*']||[],r[$]||[]);for(const B of H){
$E(B,Q)||C.removeAttribute(B.nodeName)
}
}return g.body.innerHTML
}const IE='TemplateFactory',PE={allowList:Du,content:{},extraClass:'',html:!1,sanitize:!0,sanitizeFn:null,template:'<div></div>'},ME={allowList:'object',content:'object',extraClass:'(string|function)',html:'boolean',sanitize:'boolean',sanitizeFn:'(null|function)',template:'string'},kE={entry:'(string|element|function|null)',selector:'(string|element)'};class VE extends E{
constructor(r){
super(),this._config=this._getConfig(r)
}static get Default(){
return PE
}static get DefaultType(){
return ME
}static get NAME(){
return IE
}getContent(){
return Object.values(this._config.content).map(r=>this._resolvePossibleFunction(r)).filter(Boolean)
}hasContent(){
return this.getContent().length>0
}changeContent(r){
return this._checkContent(r),this._config.content={...this._config.content,...r},this
}toHtml(){
const r=document.createElement('div');r.innerHTML=this._maybeSanitize(this._config.template);for(const[g,w]of Object.entries(this._config.content)){
this._setContent(r,w,g)
}const l=r.children[0],p=this._resolvePossibleFunction(this._config.extraClass);return p&&l.classList.add(...p.split(' ')),l
}_typeCheckConfig(r){
super._typeCheckConfig(r),this._checkContent(r.content)
}_checkContent(r){
for(const[l,p]of Object.entries(r)){
super._typeCheckConfig({selector:l,entry:p},kE)
}
}_setContent(r,l,p){
const g=T.findOne(p,r);if(g){
if(l=this._resolvePossibleFunction(l),!l){
g.remove();return
}if(v(l)){
this._putElementInTemplate(b(l),g);return
}if(this._config.html){
g.innerHTML=this._maybeSanitize(l);return
}g.textContent=l
}
}_maybeSanitize(r){
return this._config.sanitize?xE(r,this._config.allowList,this._config.sanitizeFn):r
}_resolvePossibleFunction(r){
return nt(r,[this])
}_putElementInTemplate(r,l){
if(this._config.html){
l.innerHTML='',l.append(r);return
}l.textContent=r.textContent
}
}const HE='tooltip',FE=new Set(['sanitize','allowList','sanitizeFn']),ma='fade',jE='modal',Or='show',BE='.tooltip-inner',Ru=`.${jE}`,Lu='hide.bs.modal',Ti='hover',_a='focus',WE='click',UE='manual',KE='hide',qE='hidden',YE='show',zE='shown',GE='inserted',XE='click',QE='focusin',JE='focusout',ZE='mouseenter',tv='mouseleave',ev={AUTO:'auto',TOP:'top',RIGHT:z()?'left':'right',BOTTOM:'bottom',LEFT:z()?'right':'left'},nv={allowList:Du,animation:!0,boundary:'clippingParents',container:!1,customClass:'',delay:0,fallbackPlacements:['top','right','bottom','left'],html:!1,offset:[0,6],placement:'top',popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:'',trigger:'hover focus'},sv={allowList:'object',animation:'boolean',boundary:'(string|element)',container:'(string|element|boolean)',customClass:'(string|function)',delay:'(number|object)',fallbackPlacements:'array',html:'boolean',offset:'(array|string|function)',placement:'(string|function)',popperConfig:'(null|object|function)',sanitize:'boolean',sanitizeFn:'(null|function)',selector:'(string|boolean)',template:'string',title:'(string|element|function)',trigger:'string'};class Qn extends R{
constructor(r,l){
if(typeof su>'u'){
throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
}super(r,l),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()
}static get Default(){
return nv
}static get DefaultType(){
return sv
}static get NAME(){
return HE
}enable(){
this._isEnabled=!0
}disable(){
this._isEnabled=!1
}toggleEnabled(){
this._isEnabled=!this._isEnabled
}toggle(){
if(this._isEnabled){
if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){
this._leave();return
}this._enter()
}
}dispose(){
clearTimeout(this._timeout),y.off(this._element.closest(Ru),Lu,this._hideModalHandler),this._element.getAttribute('data-bs-original-title')&&this._element.setAttribute('title',this._element.getAttribute('data-bs-original-title')),this._disposePopper(),super.dispose()
}show(){
if(this._element.style.display==='none'){
throw new Error('Please use show on visible elements')
}if(!(this._isWithContent()&&this._isEnabled)){
return
}const r=y.trigger(this._element,this.constructor.eventName(YE)),p=(D(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(r.defaultPrevented||!p){
return
}this._disposePopper();const g=this._getTipElement();this._element.setAttribute('aria-describedby',g.getAttribute('id'));const{container:w}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(w.append(g),y.trigger(this._element,this.constructor.eventName(GE))),this._popper=this._createPopper(g),g.classList.add(Or),'ontouchstart'in document.documentElement){
for(const $ of[].concat(...document.body.children)){
y.on($,'mouseover',P)
}
}const C=()=>{
y.trigger(this._element,this.constructor.eventName(zE)),this._isHovered===!1&&this._leave(),this._isHovered=!1
};this._queueCallback(C,this.tip,this._isAnimated())
}hide(){
if(!this._isShown()||y.trigger(this._element,this.constructor.eventName(KE)).defaultPrevented){
return
}if(this._getTipElement().classList.remove(Or),'ontouchstart'in document.documentElement){
for(const g of[].concat(...document.body.children)){
y.off(g,'mouseover',P)
}
}this._activeTrigger[WE]=!1,this._activeTrigger[_a]=!1,this._activeTrigger[Ti]=!1,this._isHovered=null;const p=()=>{
this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute('aria-describedby'),y.trigger(this._element,this.constructor.eventName(qE)))
};this._queueCallback(p,this.tip,this._isAnimated())
}update(){
this._popper&&this._popper.update()
}_isWithContent(){
return!!this._getTitle()
}_getTipElement(){
return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip
}_createTipElement(r){
const l=this._getTemplateFactory(r).toHtml();if(!l){
return null
}l.classList.remove(ma,Or),l.classList.add(`bs-${this.constructor.NAME}-auto`);const p=h(this.constructor.NAME).toString();return l.setAttribute('id',p),this._isAnimated()&&l.classList.add(ma),l
}setContent(r){
this._newContent=r,this._isShown()&&(this._disposePopper(),this.show())
}_getTemplateFactory(r){
return this._templateFactory?this._templateFactory.changeContent(r):this._templateFactory=new VE({...this._config,content:r,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory
}_getContentForTemplate(){
return{[BE]:this._getTitle()}
}_getTitle(){
return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute('data-bs-original-title')
}_initializeOnDelegatedTarget(r){
return this.constructor.getOrCreateInstance(r.delegateTarget,this._getDelegateConfig())
}_isAnimated(){
return this._config.animation||this.tip&&this.tip.classList.contains(ma)
}_isShown(){
return this.tip&&this.tip.classList.contains(Or)
}_createPopper(r){
const l=nt(this._config.placement,[this,r,this._element]),p=ev[l.toUpperCase()];return fa(this._element,r,this._getPopperConfig(p))
}_getOffset(){
const{offset:r}=this._config;return typeof r==='string'?r.split(',').map(l=>Number.parseInt(l,10)):typeof r==='function'?l=>r(l,this._element):r
}_resolvePossibleFunction(r){
return nt(r,[this._element])
}_getPopperConfig(r){
const l={placement:r,modifiers:[{name:'flip',options:{fallbackPlacements:this._config.fallbackPlacements}},{name:'offset',options:{offset:this._getOffset()}},{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'arrow',options:{element:`.${this.constructor.NAME}-arrow`}},{name:'preSetPlacement',enabled:!0,phase:'beforeMain',fn:p=>{
this._getTipElement().setAttribute('data-popper-placement',p.state.placement)
}}]};return{...l,...nt(this._config.popperConfig,[l])}
}_setListeners(){
const r=this._config.trigger.split(' ');for(const l of r){
if(l==='click'){
y.on(this._element,this.constructor.eventName(XE),this._config.selector,p=>{
this._initializeOnDelegatedTarget(p).toggle()
})
}else if(l!==UE){
const p=l===Ti?this.constructor.eventName(ZE):this.constructor.eventName(QE),g=l===Ti?this.constructor.eventName(tv):this.constructor.eventName(JE);y.on(this._element,p,this._config.selector,w=>{
const C=this._initializeOnDelegatedTarget(w);C._activeTrigger[w.type==='focusin'?_a:Ti]=!0,C._enter()
}),y.on(this._element,g,this._config.selector,w=>{
const C=this._initializeOnDelegatedTarget(w);C._activeTrigger[w.type==='focusout'?_a:Ti]=C._element.contains(w.relatedTarget),C._leave()
})
}
}this._hideModalHandler=()=>{
this._element&&this.hide()
},y.on(this._element.closest(Ru),Lu,this._hideModalHandler)
}_fixTitle(){
const r=this._element.getAttribute('title');r&&(!this._element.getAttribute('aria-label')&&!this._element.textContent.trim()&&this._element.setAttribute('aria-label',r),this._element.setAttribute('data-bs-original-title',r),this._element.removeAttribute('title'))
}_enter(){
if(this._isShown()||this._isHovered){
this._isHovered=!0;return
}this._isHovered=!0,this._setTimeout(()=>{
this._isHovered&&this.show()
},this._config.delay.show)
}_leave(){
this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{
this._isHovered||this.hide()
},this._config.delay.hide))
}_setTimeout(r,l){
clearTimeout(this._timeout),this._timeout=setTimeout(r,l)
}_isWithActiveTrigger(){
return Object.values(this._activeTrigger).includes(!0)
}_getConfig(r){
const l=_.getDataAttributes(this._element);for(const p of Object.keys(l)){
FE.has(p)&&delete l[p]
}return r={...l,...typeof r==='object'&&r?r:{}},r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r
}_configAfterMerge(r){
return r.container=r.container===!1?document.body:b(r.container),typeof r.delay==='number'&&(r.delay={show:r.delay,hide:r.delay}),typeof r.title==='number'&&(r.title=r.title.toString()),typeof r.content==='number'&&(r.content=r.content.toString()),r
}_getDelegateConfig(){
const r={};for(const[l,p]of Object.entries(this._config)){
this.constructor.Default[l]!==p&&(r[l]=p)
}return r.selector=!1,r.trigger='manual',r
}_disposePopper(){
this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)
}static jQueryInterface(r){
return this.each(function(){
const l=Qn.getOrCreateInstance(this,r);if(typeof r==='string'){
if(typeof l[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}
}G(Qn);const iv='popover',rv='.popover-header',ov='.popover-body',av={...Qn.Default,content:'',offset:[0,8],placement:'right',template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:'click'},lv={...Qn.DefaultType,content:'(null|string|element|function)'};class Cr extends Qn{
static get Default(){
return av
}static get DefaultType(){
return lv
}static get NAME(){
return iv
}_isWithContent(){
return this._getTitle()||this._getContent()
}_getContentForTemplate(){
return{[rv]:this._getTitle(),[ov]:this._getContent()}
}_getContent(){
return this._resolvePossibleFunction(this._config.content)
}static jQueryInterface(r){
return this.each(function(){
const l=Cr.getOrCreateInstance(this,r);if(typeof r==='string'){
if(typeof l[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}
}G(Cr);const cv='scrollspy',ga='.bs.scrollspy',uv='.data-api',fv=`activate${ga}`,$u=`click${ga}`,dv=`load${ga}${uv}`,hv='dropdown-item',Hs='active',pv='[data-bs-spy="scroll"]',Ea='[href]',mv='.nav, .list-group',xu='.nav-link',_v=`${xu}, .nav-item > ${xu}, .list-group-item`,gv='.dropdown',Ev='.dropdown-toggle',vv={offset:null,rootMargin:'0px 0px -25%',smoothScroll:!1,target:null,threshold:[.1,.5,1]},bv={offset:'(number|null)',rootMargin:'string',smoothScroll:'boolean',target:'element',threshold:'array'};class wi extends R{
constructor(r,l){
super(r,l),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==='visible'?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()
}static get Default(){
return vv
}static get DefaultType(){
return bv
}static get NAME(){
return cv
}refresh(){
this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const r of this._observableSections.values()){
this._observer.observe(r)
}
}dispose(){
this._observer.disconnect(),super.dispose()
}_configAfterMerge(r){
return r.target=b(r.target)||document.body,r.rootMargin=r.offset?`${r.offset}px 0px -30%`:r.rootMargin,typeof r.threshold==='string'&&(r.threshold=r.threshold.split(',').map(l=>Number.parseFloat(l))),r
}_maybeEnableSmoothScroll(){
this._config.smoothScroll&&(y.off(this._config.target,$u),y.on(this._config.target,$u,Ea,r=>{
const l=this._observableSections.get(r.target.hash);if(l){
r.preventDefault();const p=this._rootElement||window,g=l.offsetTop-this._element.offsetTop;if(p.scrollTo){
p.scrollTo({top:g,behavior:'smooth'});return
}p.scrollTop=g
}
}))
}_getNewObserver(){
const r={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(l=>this._observerCallback(l),r)
}_observerCallback(r){
const l=C=>this._targetLinks.get(`#${C.target.id}`),p=C=>{
this._previousScrollData.visibleEntryTop=C.target.offsetTop,this._process(l(C))
},g=(this._rootElement||document.documentElement).scrollTop,w=g>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=g;for(const C of r){
if(!C.isIntersecting){
this._activeTarget=null,this._clearActiveClass(l(C));continue
}const $=C.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(w&&$){
if(p(C),!g){
return
}continue
}!w&&!$&&p(C)
}
}_initializeTargetsAndObservables(){
this._targetLinks=new Map,this._observableSections=new Map;const r=T.find(Ea,this._config.target);for(const l of r){
if(!l.hash||O(l)){
continue
}const p=T.findOne(decodeURI(l.hash),this._element);S(p)&&(this._targetLinks.set(decodeURI(l.hash),l),this._observableSections.set(l.hash,p))
}
}_process(r){
this._activeTarget!==r&&(this._clearActiveClass(this._config.target),this._activeTarget=r,r.classList.add(Hs),this._activateParents(r),y.trigger(this._element,fv,{relatedTarget:r}))
}_activateParents(r){
if(r.classList.contains(hv)){
T.findOne(Ev,r.closest(gv)).classList.add(Hs);return
}for(const l of T.parents(r,mv)){
for(const p of T.prev(l,_v)){
p.classList.add(Hs)
}
}
}_clearActiveClass(r){
r.classList.remove(Hs);const l=T.find(`${Ea}.${Hs}`,r);for(const p of l){
p.classList.remove(Hs)
}
}static jQueryInterface(r){
return this.each(function(){
const l=wi.getOrCreateInstance(this,r);if(typeof r==='string'){
if(l[r]===void 0||r.startsWith('_')||r==='constructor'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}
}y.on(window,dv,()=>{
for(const u of T.find(pv)){
wi.getOrCreateInstance(u)
}
}),G(wi);const yv='tab',Jn='.bs.tab',Av=`hide${Jn}`,Tv=`hidden${Jn}`,wv=`show${Jn}`,Sv=`shown${Jn}`,Ov=`click${Jn}`,Cv=`keydown${Jn}`,Nv=`load${Jn}`,Dv='ArrowLeft',Iu='ArrowRight',Rv='ArrowUp',Pu='ArrowDown',va='Home',Mu='End',Zn='active',ku='fade',ba='show',Lv='dropdown',Vu='.dropdown-toggle',$v='.dropdown-menu',ya=`:not(${Vu})`,xv='.list-group, .nav, [role="tablist"]',Iv='.nav-item, .list-group-item',Pv=`.nav-link${ya}, .list-group-item${ya}, [role="tab"]${ya}`,Hu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Aa=`${Pv}, ${Hu}`,Mv=`.${Zn}[data-bs-toggle="tab"], .${Zn}[data-bs-toggle="pill"], .${Zn}[data-bs-toggle="list"]`;class ts extends R{
constructor(r){
super(r),this._parent=this._element.closest(xv),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,Cv,l=>this._keydown(l)))
}static get NAME(){
return yv
}show(){
const r=this._element;if(this._elemIsActive(r)){
return
}const l=this._getActiveElem(),p=l?y.trigger(l,Av,{relatedTarget:r}):null;y.trigger(r,wv,{relatedTarget:l}).defaultPrevented||p&&p.defaultPrevented||(this._deactivate(l,r),this._activate(r,l))
}_activate(r,l){
if(!r){
return
}r.classList.add(Zn),this._activate(T.getElementFromSelector(r));const p=()=>{
if(r.getAttribute('role')!=='tab'){
r.classList.add(ba);return
}r.removeAttribute('tabindex'),r.setAttribute('aria-selected',!0),this._toggleDropDown(r,!0),y.trigger(r,Sv,{relatedTarget:l})
};this._queueCallback(p,r,r.classList.contains(ku))
}_deactivate(r,l){
if(!r){
return
}r.classList.remove(Zn),r.blur(),this._deactivate(T.getElementFromSelector(r));const p=()=>{
if(r.getAttribute('role')!=='tab'){
r.classList.remove(ba);return
}r.setAttribute('aria-selected',!1),r.setAttribute('tabindex','-1'),this._toggleDropDown(r,!1),y.trigger(r,Tv,{relatedTarget:l})
};this._queueCallback(p,r,r.classList.contains(ku))
}_keydown(r){
if(![Dv,Iu,Rv,Pu,va,Mu].includes(r.key)){
return
}r.stopPropagation(),r.preventDefault();const l=this._getChildren().filter(g=>!O(g));let p;if([va,Mu].includes(r.key)){
p=l[r.key===va?0:l.length-1]
}else{
const g=[Iu,Pu].includes(r.key);p=_t(l,r.target,g,!0)
}p&&(p.focus({preventScroll:!0}),ts.getOrCreateInstance(p).show())
}_getChildren(){
return T.find(Aa,this._parent)
}_getActiveElem(){
return this._getChildren().find(r=>this._elemIsActive(r))||null
}_setInitialAttributes(r,l){
this._setAttributeIfNotExists(r,'role','tablist');for(const p of l){
this._setInitialAttributesOnChild(p)
}
}_setInitialAttributesOnChild(r){
r=this._getInnerElement(r);const l=this._elemIsActive(r),p=this._getOuterElement(r);r.setAttribute('aria-selected',l),p!==r&&this._setAttributeIfNotExists(p,'role','presentation'),l||r.setAttribute('tabindex','-1'),this._setAttributeIfNotExists(r,'role','tab'),this._setInitialAttributesOnTargetPanel(r)
}_setInitialAttributesOnTargetPanel(r){
const l=T.getElementFromSelector(r);l&&(this._setAttributeIfNotExists(l,'role','tabpanel'),r.id&&this._setAttributeIfNotExists(l,'aria-labelledby',`${r.id}`))
}_toggleDropDown(r,l){
const p=this._getOuterElement(r);if(!p.classList.contains(Lv)){
return
}const g=(w,C)=>{
const $=T.findOne(w,p);$&&$.classList.toggle(C,l)
};g(Vu,Zn),g($v,ba),p.setAttribute('aria-expanded',l)
}_setAttributeIfNotExists(r,l,p){
r.hasAttribute(l)||r.setAttribute(l,p)
}_elemIsActive(r){
return r.classList.contains(Zn)
}_getInnerElement(r){
return r.matches(Aa)?r:T.findOne(Aa,r)
}_getOuterElement(r){
return r.closest(Iv)||r
}static jQueryInterface(r){
return this.each(function(){
const l=ts.getOrCreateInstance(this);if(typeof r==='string'){
if(l[r]===void 0||r.startsWith('_')||r==='constructor'){
throw new TypeError(`No method named "${r}"`)
}l[r]()
}
})
}
}y.on(document,Ov,Hu,function(u){
['A','AREA'].includes(this.tagName)&&u.preventDefault(),!O(this)&&ts.getOrCreateInstance(this).show()
}),y.on(window,Nv,()=>{
for(const u of T.find(Mv)){
ts.getOrCreateInstance(u)
}
}),G(ts);const kv='toast',Cn='.bs.toast',Vv=`mouseover${Cn}`,Hv=`mouseout${Cn}`,Fv=`focusin${Cn}`,jv=`focusout${Cn}`,Bv=`hide${Cn}`,Wv=`hidden${Cn}`,Uv=`show${Cn}`,Kv=`shown${Cn}`,qv='fade',Fu='hide',Nr='show',Dr='showing',Yv={animation:'boolean',autohide:'boolean',delay:'number'},zv={animation:!0,autohide:!0,delay:5e3};class Si extends R{
constructor(r,l){
super(r,l),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()
}static get Default(){
return zv
}static get DefaultType(){
return Yv
}static get NAME(){
return kv
}show(){
if(y.trigger(this._element,Uv).defaultPrevented){
return
}this._clearTimeout(),this._config.animation&&this._element.classList.add(qv);const l=()=>{
this._element.classList.remove(Dr),y.trigger(this._element,Kv),this._maybeScheduleHide()
};this._element.classList.remove(Fu),M(this._element),this._element.classList.add(Nr,Dr),this._queueCallback(l,this._element,this._config.animation)
}hide(){
if(!this.isShown()||y.trigger(this._element,Bv).defaultPrevented){
return
}const l=()=>{
this._element.classList.add(Fu),this._element.classList.remove(Dr,Nr),y.trigger(this._element,Wv)
};this._element.classList.add(Dr),this._queueCallback(l,this._element,this._config.animation)
}dispose(){
this._clearTimeout(),this.isShown()&&this._element.classList.remove(Nr),super.dispose()
}isShown(){
return this._element.classList.contains(Nr)
}_maybeScheduleHide(){
this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{
this.hide()
},this._config.delay)))
}_onInteraction(r,l){
switch(r.type){
case'mouseover':case'mouseout':{this._hasMouseInteraction=l;break}case'focusin':case'focusout':{this._hasKeyboardInteraction=l;break}
}if(l){
this._clearTimeout();return
}const p=r.relatedTarget;this._element===p||this._element.contains(p)||this._maybeScheduleHide()
}_setListeners(){
y.on(this._element,Vv,r=>this._onInteraction(r,!0)),y.on(this._element,Hv,r=>this._onInteraction(r,!1)),y.on(this._element,Fv,r=>this._onInteraction(r,!0)),y.on(this._element,jv,r=>this._onInteraction(r,!1))
}_clearTimeout(){
clearTimeout(this._timeout),this._timeout=null
}static jQueryInterface(r){
return this.each(function(){
const l=Si.getOrCreateInstance(this,r);if(typeof r==='string'){
if(typeof l[r]>'u'){
throw new TypeError(`No method named "${r}"`)
}l[r](this)
}
})
}
}return K(Si),G(Si),{Alert:rt,Button:wn,Carousel:Ns,Collapse:Rs,Dropdown:Be,Modal:Xn,Offcanvas:dn,Popover:Cr,ScrollSpy:wi,Tab:ts,Toast:Si,Tooltip:Qn}
})
}(eo)),eo.exports
}wS();const me='top',Re='bottom',Le='right',_e='left',Bo='auto',pi=[me,Re,Le,_e],Es='start',oi='end',Ip='clippingParents',ic='viewport',zs='popper',Pp='reference',Cl=pi.reduce(function(e,t){
return e.concat([t+'-'+Es,t+'-'+oi])
},[]),rc=[].concat(pi,[Bo]).reduce(function(e,t){
return e.concat([t,t+'-'+Es,t+'-'+oi])
},[]),Mp='beforeRead',kp='read',Vp='afterRead',Hp='beforeMain',Fp='main',jp='afterMain',Bp='beforeWrite',Wp='write',Up='afterWrite',Kp=[Mp,kp,Vp,Hp,Fp,jp,Bp,Wp,Up];function cn(e){
return e?(e.nodeName||'').toLowerCase():null
}function $e(e){
if(e==null){
return window
}if(e.toString()!=='[object Window]'){
const t=e.ownerDocument;return t&&t.defaultView||window
}return e
}function vs(e){
const t=$e(e).Element;return e instanceof t||e instanceof Element
}function ke(e){
const t=$e(e).HTMLElement;return e instanceof t||e instanceof HTMLElement
}function oc(e){
if(typeof ShadowRoot>'u'){
return!1
}const t=$e(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot
}function SS(e){
const t=e.state;Object.keys(t.elements).forEach(function(n){
const s=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!ke(o)||!cn(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(a){
const c=i[a];c===!1?o.removeAttribute(a):o.setAttribute(a,c===!0?'':c)
}))
})
}function OS(e){
const t=e.state,n={popper:{position:t.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){
Object.keys(t.elements).forEach(function(s){
const i=t.elements[s],o=t.attributes[s]||{},a=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),c=a.reduce(function(f,h){
return f[h]='',f
},{});!ke(i)||!cn(i)||(Object.assign(i.style,c),Object.keys(o).forEach(function(f){
i.removeAttribute(f)
}))
})
}
}const ac={name:'applyStyles',enabled:!0,phase:'write',fn:SS,effect:OS,requires:['computeStyles']};function an(e){
return e.split('-')[0]
}const ps=Math.max,go=Math.min,ai=Math.round;function Nl(){
const e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){
return t.brand+'/'+t.version
}).join(' '):navigator.userAgent
}function qp(){
return!/^((?!chrome|android).)*safari/i.test(Nl())
}function li(e,t,n){
t===void 0&&(t=!1),n===void 0&&(n=!1);let s=e.getBoundingClientRect(),i=1,o=1;t&&ke(e)&&(i=e.offsetWidth>0&&ai(s.width)/e.offsetWidth||1,o=e.offsetHeight>0&&ai(s.height)/e.offsetHeight||1);const a=vs(e)?$e(e):window,c=a.visualViewport,f=!qp()&&n,h=(s.left+(f&&c?c.offsetLeft:0))/i,d=(s.top+(f&&c?c.offsetTop:0))/o,m=s.width/i,v=s.height/o;return{width:m,height:v,top:d,right:h+m,bottom:d+v,left:h,x:h,y:d}
}function lc(e){
let t=li(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}
}function Yp(e,t){
const n=t.getRootNode&&t.getRootNode();if(e.contains(t)){
return!0
}if(n&&oc(n)){
let s=t;do{
if(s&&e.isSameNode(s)){
return!0
}s=s.parentNode||s.host
}while(s)
}return!1
}function bn(e){
return $e(e).getComputedStyle(e)
}function CS(e){
return['table','td','th'].indexOf(cn(e))>=0
}function jn(e){
return((vs(e)?e.ownerDocument:e.document)||window.document).documentElement
}function Wo(e){
return cn(e)==='html'?e:e.assignedSlot||e.parentNode||(oc(e)?e.host:null)||jn(e)
}function id(e){
return!ke(e)||bn(e).position==='fixed'?null:e.offsetParent
}function NS(e){
const t=/firefox/i.test(Nl()),n=/Trident/i.test(Nl());if(n&&ke(e)){
const s=bn(e);if(s.position==='fixed'){
return null
}
}let i=Wo(e);for(oc(i)&&(i=i.host);ke(i)&&['html','body'].indexOf(cn(i))<0;){
const o=bn(i);if(o.transform!=='none'||o.perspective!=='none'||o.contain==='paint'||['transform','perspective'].indexOf(o.willChange)!==-1||t&&o.willChange==='filter'||t&&o.filter&&o.filter!=='none'){
return i
}i=i.parentNode
}return null
}function ir(e){
for(var t=$e(e),n=id(e);n&&CS(n)&&bn(n).position==='static';){
n=id(n)
}return n&&(cn(n)==='html'||cn(n)==='body'&&bn(n).position==='static')?t:n||NS(e)||t
}function cc(e){
return['top','bottom'].indexOf(e)>=0?'x':'y'
}function Ui(e,t,n){
return ps(e,go(t,n))
}function DS(e,t,n){
const s=Ui(e,t,n);return s>n?n:s
}function zp(){
return{top:0,right:0,bottom:0,left:0}
}function Gp(e){
return Object.assign({},zp(),e)
}function Xp(e,t){
return t.reduce(function(n,s){
return n[s]=e,n
},{})
}const RS=function(t,n){
return t=typeof t==='function'?t(Object.assign({},n.rects,{placement:n.placement})):t,Gp(typeof t!=='number'?t:Xp(t,pi))
};function LS(e){
let t,n=e.state,s=e.name,i=e.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,c=an(n.placement),f=cc(c),h=[_e,Le].indexOf(c)>=0,d=h?'height':'width';if(!(!o||!a)){
const m=RS(i.padding,n),v=lc(o),b=f==='y'?me:_e,S=f==='y'?Re:Le,O=n.rects.reference[d]+n.rects.reference[f]-a[f]-n.rects.popper[d],D=a[f]-n.rects.reference[f],P=ir(o),M=P?f==='y'?P.clientHeight||0:P.clientWidth||0:0,F=O/2-D/2,I=m[b],Y=M-v[d]-m[S],z=M/2-v[d]/2+F,G=Ui(I,z,Y),nt=f;n.modifiersData[s]=(t={},t[nt]=G,t.centerOffset=G-z,t)
}
}function $S(e){
let t=e.state,n=e.options,s=n.element,i=s===void 0?'[data-popper-arrow]':s;i!=null&&(typeof i==='string'&&(i=t.elements.popper.querySelector(i),!i)||Yp(t.elements.popper,i)&&(t.elements.arrow=i))
}const Qp={name:'arrow',enabled:!0,phase:'main',fn:LS,effect:$S,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function ci(e){
return e.split('-')[1]
}const xS={top:'auto',right:'auto',bottom:'auto',left:'auto'};function IS(e,t){
const n=e.x,s=e.y,i=t.devicePixelRatio||1;return{x:ai(n*i)/i||0,y:ai(s*i)/i||0}
}function rd(e){
let t,n=e.popper,s=e.popperRect,i=e.placement,o=e.variation,a=e.offsets,c=e.position,f=e.gpuAcceleration,h=e.adaptive,d=e.roundOffsets,m=e.isFixed,v=a.x,b=v===void 0?0:v,S=a.y,O=S===void 0?0:S,D=typeof d==='function'?d({x:b,y:O}):{x:b,y:O};b=D.x,O=D.y;let P=a.hasOwnProperty('x'),M=a.hasOwnProperty('y'),F=_e,I=me,Y=window;if(h){
let z=ir(n),G='clientHeight',nt='clientWidth';if(z===$e(n)&&(z=jn(n),bn(z).position!=='static'&&c==='absolute'&&(G='scrollHeight',nt='scrollWidth')),z=z,i===me||(i===_e||i===Le)&&o===oi){
I=Re;const gt=m&&z===Y&&Y.visualViewport?Y.visualViewport.height:z[G];O-=gt-s.height,O*=f?1:-1
}if(i===_e||(i===me||i===Re)&&o===oi){
F=Le;const _t=m&&z===Y&&Y.visualViewport?Y.visualViewport.width:z[nt];b-=_t-s.width,b*=f?1:-1
}
}const Ct=Object.assign({position:c},h&&xS),Mt=d===!0?IS({x:b,y:O},$e(n)):{x:b,y:O};if(b=Mt.x,O=Mt.y,f){
let wt;return Object.assign({},Ct,(wt={},wt[I]=M?'0':'',wt[F]=P?'0':'',wt.transform=(Y.devicePixelRatio||1)<=1?'translate('+b+'px, '+O+'px)':'translate3d('+b+'px, '+O+'px, 0)',wt))
}return Object.assign({},Ct,(t={},t[I]=M?O+'px':'',t[F]=P?b+'px':'',t.transform='',t))
}function PS(e){
const t=e.state,n=e.options,s=n.gpuAcceleration,i=s===void 0?!0:s,o=n.adaptive,a=o===void 0?!0:o,c=n.roundOffsets,f=c===void 0?!0:c,h={placement:an(t.placement),variation:ci(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==='fixed'};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,rd(Object.assign({},h,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,rd(Object.assign({},h,{offsets:t.modifiersData.arrow,position:'absolute',adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{'data-popper-placement':t.placement})
}const uc={name:'computeStyles',enabled:!0,phase:'beforeWrite',fn:PS,data:{}};const Hr={passive:!0};function MS(e){
const t=e.state,n=e.instance,s=e.options,i=s.scroll,o=i===void 0?!0:i,a=s.resize,c=a===void 0?!0:a,f=$e(t.elements.popper),h=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&h.forEach(function(d){
d.addEventListener('scroll',n.update,Hr)
}),c&&f.addEventListener('resize',n.update,Hr),function(){
o&&h.forEach(function(d){
d.removeEventListener('scroll',n.update,Hr)
}),c&&f.removeEventListener('resize',n.update,Hr)
}
}const fc={name:'eventListeners',enabled:!0,phase:'write',fn:function(){},effect:MS,data:{}};const kS={left:'right',right:'left',bottom:'top',top:'bottom'};function no(e){
return e.replace(/left|right|bottom|top/g,function(t){
return kS[t]
})
}const VS={start:'end',end:'start'};function od(e){
return e.replace(/start|end/g,function(t){
return VS[t]
})
}function dc(e){
const t=$e(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}
}function hc(e){
return li(jn(e)).left+dc(e).scrollLeft
}function HS(e,t){
let n=$e(e),s=jn(e),i=n.visualViewport,o=s.clientWidth,a=s.clientHeight,c=0,f=0;if(i){
o=i.width,a=i.height;const h=qp();(h||!h&&t==='fixed')&&(c=i.offsetLeft,f=i.offsetTop)
}return{width:o,height:a,x:c+hc(e),y:f}
}function FS(e){
let t,n=jn(e),s=dc(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=ps(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=ps(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-s.scrollLeft+hc(e),f=-s.scrollTop;return bn(i||n).direction==='rtl'&&(c+=ps(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:c,y:f}
}function pc(e){
const t=bn(e),n=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)
}function Jp(e){
return['html','body','#document'].indexOf(cn(e))>=0?e.ownerDocument.body:ke(e)&&pc(e)?e:Jp(Wo(e))
}function Ki(e,t){
let n;t===void 0&&(t=[]);const s=Jp(e),i=s===((n=e.ownerDocument)==null?void 0:n.body),o=$e(s),a=i?[o].concat(o.visualViewport||[],pc(s)?s:[]):s,c=t.concat(a);return i?c:c.concat(Ki(Wo(a)))
}function Dl(e){
return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})
}function jS(e,t){
const n=li(e,!1,t==='fixed');return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n
}function ad(e,t,n){
return t===ic?Dl(HS(e,n)):vs(t)?jS(t,n):Dl(FS(jn(e)))
}function BS(e){
const t=Ki(Wo(e)),n=['absolute','fixed'].indexOf(bn(e).position)>=0,s=n&&ke(e)?ir(e):e;return vs(s)?t.filter(function(i){
return vs(i)&&Yp(i,s)&&cn(i)!=='body'
}):[]
}function WS(e,t,n,s){
const i=t==='clippingParents'?BS(e):[].concat(t),o=[].concat(i,[n]),a=o[0],c=o.reduce(function(f,h){
const d=ad(e,h,s);return f.top=ps(d.top,f.top),f.right=go(d.right,f.right),f.bottom=go(d.bottom,f.bottom),f.left=ps(d.left,f.left),f
},ad(e,a,s));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c
}function Zp(e){
let t=e.reference,n=e.element,s=e.placement,i=s?an(s):null,o=s?ci(s):null,a=t.x+t.width/2-n.width/2,c=t.y+t.height/2-n.height/2,f;switch(i){
case me:f={x:a,y:t.y-n.height};break;case Re:f={x:a,y:t.y+t.height};break;case Le:f={x:t.x+t.width,y:c};break;case _e:f={x:t.x-n.width,y:c};break;default:f={x:t.x,y:t.y}
}const h=i?cc(i):null;if(h!=null){
const d=h==='y'?'height':'width';switch(o){
case Es:f[h]=f[h]-(t[d]/2-n[d]/2);break;case oi:f[h]=f[h]+(t[d]/2-n[d]/2);break
}
}return f
}function ui(e,t){
t===void 0&&(t={});const n=t,s=n.placement,i=s===void 0?e.placement:s,o=n.strategy,a=o===void 0?e.strategy:o,c=n.boundary,f=c===void 0?Ip:c,h=n.rootBoundary,d=h===void 0?ic:h,m=n.elementContext,v=m===void 0?zs:m,b=n.altBoundary,S=b===void 0?!1:b,O=n.padding,D=O===void 0?0:O,P=Gp(typeof D!=='number'?D:Xp(D,pi)),M=v===zs?Pp:zs,F=e.rects.popper,I=e.elements[S?M:v],Y=WS(vs(I)?I:I.contextElement||jn(e.elements.popper),f,d,a),z=li(e.elements.reference),G=Zp({reference:z,element:F,placement:i}),nt=Dl(Object.assign({},F,G)),gt=v===zs?nt:z,_t={top:Y.top-gt.top+P.top,bottom:gt.bottom-Y.bottom+P.bottom,left:Y.left-gt.left+P.left,right:gt.right-Y.right+P.right},Ct=e.modifiersData.offset;if(v===zs&&Ct){
const Mt=Ct[i];Object.keys(_t).forEach(function(wt){
const Ut=[Le,Re].indexOf(wt)>=0?1:-1,Kt=[me,Re].indexOf(wt)>=0?'y':'x';_t[wt]+=Mt[Kt]*Ut
})
}return _t
}function US(e,t){
t===void 0&&(t={});let n=t,s=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,c=n.flipVariations,f=n.allowedAutoPlacements,h=f===void 0?rc:f,d=ci(s),m=d?c?Cl:Cl.filter(function(S){
return ci(S)===d
}):pi,v=m.filter(function(S){
return h.indexOf(S)>=0
});v.length===0&&(v=m);const b=v.reduce(function(S,O){
return S[O]=ui(e,{placement:O,boundary:i,rootBoundary:o,padding:a})[an(O)],S
},{});return Object.keys(b).sort(function(S,O){
return b[S]-b[O]
})
}function KS(e){
if(an(e)===Bo){
return[]
}const t=no(e);return[od(e),t,od(t)]
}function qS(e){
const t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){
for(var i=n.mainAxis,o=i===void 0?!0:i,a=n.altAxis,c=a===void 0?!0:a,f=n.fallbackPlacements,h=n.padding,d=n.boundary,m=n.rootBoundary,v=n.altBoundary,b=n.flipVariations,S=b===void 0?!0:b,O=n.allowedAutoPlacements,D=t.options.placement,P=an(D),M=P===D,F=f||(M||!S?[no(D)]:KS(D)),I=[D].concat(F).reduce(function(Qt,qt){
return Qt.concat(an(qt)===Bo?US(t,{placement:qt,boundary:d,rootBoundary:m,padding:h,flipVariations:S,allowedAutoPlacements:O}):qt)
},[]),Y=t.rects.reference,z=t.rects.popper,G=new Map,nt=!0,gt=I[0],_t=0;_t<I.length;_t++){
let Ct=I[_t],Mt=an(Ct),wt=ci(Ct)===Es,Ut=[me,Re].indexOf(Mt)>=0,Kt=Ut?'width':'height',pt=ui(t,{placement:Ct,boundary:d,rootBoundary:m,altBoundary:v,padding:h}),at=Ut?wt?Le:_e:wt?Re:me;Y[Kt]>z[Kt]&&(at=no(at));const ut=no(at),Ht=[];if(o&&Ht.push(pt[Mt]<=0),c&&Ht.push(pt[at]<=0,pt[ut]<=0),Ht.every(function(Qt){
return Qt
})){
gt=Ct,nt=!1;break
}G.set(Ct,Ht)
}if(nt){
for(let ae=S?3:1,Xt=function(qt){
const Ft=I.find(function(L){
const y=G.get(L);if(y){
return y.slice(0,qt).every(function(U){
return U
})
}
});if(Ft){
return gt=Ft,'break'
}
},It=ae;It>0;It--){
const ge=Xt(It);if(ge==='break'){
break
}
}
}t.placement!==gt&&(t.modifiersData[s]._skip=!0,t.placement=gt,t.reset=!0)
}
}const tm={name:'flip',enabled:!0,phase:'main',fn:qS,requiresIfExists:['offset'],data:{_skip:!1}};function ld(e,t,n){
return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}
}function cd(e){
return[me,Le,Re,_e].some(function(t){
return e[t]>=0
})
}function YS(e){
const t=e.state,n=e.name,s=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=ui(t,{elementContext:'reference'}),c=ui(t,{altBoundary:!0}),f=ld(a,s),h=ld(c,i,o),d=cd(f),m=cd(h);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:h,isReferenceHidden:d,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{'data-popper-reference-hidden':d,'data-popper-escaped':m})
}const em={name:'hide',enabled:!0,phase:'main',requiresIfExists:['preventOverflow'],fn:YS};function zS(e,t,n){
let s=an(e),i=[_e,me].indexOf(s)>=0?-1:1,o=typeof n==='function'?n(Object.assign({},t,{placement:e})):n,a=o[0],c=o[1];return a=a||0,c=(c||0)*i,[_e,Le].indexOf(s)>=0?{x:c,y:a}:{x:a,y:c}
}function GS(e){
const t=e.state,n=e.options,s=e.name,i=n.offset,o=i===void 0?[0,0]:i,a=rc.reduce(function(d,m){
return d[m]=zS(m,t.rects,o),d
},{}),c=a[t.placement],f=c.x,h=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=h),t.modifiersData[s]=a
}const nm={name:'offset',enabled:!0,phase:'main',requires:['popperOffsets'],fn:GS};function XS(e){
const t=e.state,n=e.name;t.modifiersData[n]=Zp({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})
}const mc={name:'popperOffsets',enabled:!0,phase:'read',fn:XS,data:{}};function QS(e){
return e==='x'?'y':'x'
}function JS(e){
const t=e.state,n=e.options,s=e.name,i=n.mainAxis,o=i===void 0?!0:i,a=n.altAxis,c=a===void 0?!1:a,f=n.boundary,h=n.rootBoundary,d=n.altBoundary,m=n.padding,v=n.tether,b=v===void 0?!0:v,S=n.tetherOffset,O=S===void 0?0:S,D=ui(t,{boundary:f,rootBoundary:h,padding:m,altBoundary:d}),P=an(t.placement),M=ci(t.placement),F=!M,I=cc(P),Y=QS(I),z=t.modifiersData.popperOffsets,G=t.rects.reference,nt=t.rects.popper,gt=typeof O==='function'?O(Object.assign({},t.rects,{placement:t.placement})):O,_t=typeof gt==='number'?{mainAxis:gt,altAxis:gt}:Object.assign({mainAxis:0,altAxis:0},gt),Ct=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Mt={x:0,y:0};if(z){
if(o){
let wt,Ut=I==='y'?me:_e,Kt=I==='y'?Re:Le,pt=I==='y'?'height':'width',at=z[I],ut=at+D[Ut],Ht=at-D[Kt],ae=b?-nt[pt]/2:0,Xt=M===Es?G[pt]:nt[pt],It=M===Es?-nt[pt]:-G[pt],ge=t.elements.arrow,Qt=b&&ge?lc(ge):{width:0,height:0},qt=t.modifiersData['arrow#persistent']?t.modifiersData['arrow#persistent'].padding:zp(),Ft=qt[Ut],L=qt[Kt],y=Ui(0,G[pt],Qt[pt]),U=F?G[pt]/2-ae-y-Ft-_t.mainAxis:Xt-y-Ft-_t.mainAxis,X=F?-G[pt]/2+ae+y+L+_t.mainAxis:It+y+L+_t.mainAxis,mt=t.elements.arrow&&ir(t.elements.arrow),_=mt?I==='y'?mt.clientTop||0:mt.clientLeft||0:0,E=(wt=Ct==null?void 0:Ct[I])!=null?wt:0,A=at+U-E-_,R=at+X-E,x=Ui(b?go(ut,A):ut,at,b?ps(Ht,R):Ht);z[I]=x,Mt[I]=x-at
}if(c){
let T,K=I==='x'?me:_e,W=I==='x'?Re:Le,j=z[Y],k=Y==='y'?'height':'width',Z=j+D[K],q=j-D[W],J=[me,_e].indexOf(P)!==-1,et=(T=Ct==null?void 0:Ct[Y])!=null?T:0,rt=J?Z:j-G[k]-nt[k]-et+_t.altAxis,bt=J?j+G[k]+nt[k]-et-_t.altAxis:q,Et=b&&J?DS(rt,j,bt):Ui(b?rt:Z,j,b?bt:q);z[Y]=Et,Mt[Y]=Et-j
}t.modifiersData[s]=Mt
}
}const sm={name:'preventOverflow',enabled:!0,phase:'main',fn:JS,requiresIfExists:['offset']};function ZS(e){
return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}
}function tO(e){
return e===$e(e)||!ke(e)?dc(e):ZS(e)
}function eO(e){
const t=e.getBoundingClientRect(),n=ai(t.width)/e.offsetWidth||1,s=ai(t.height)/e.offsetHeight||1;return n!==1||s!==1
}function nO(e,t,n){
n===void 0&&(n=!1);let s=ke(t),i=ke(t)&&eO(t),o=jn(t),a=li(e,i,n),c={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(s||!s&&!n)&&((cn(t)!=='body'||pc(o))&&(c=tO(t)),ke(t)?(f=li(t,!0),f.x+=t.clientLeft,f.y+=t.clientTop):o&&(f.x=hc(o))),{x:a.left+c.scrollLeft-f.x,y:a.top+c.scrollTop-f.y,width:a.width,height:a.height}
}function sO(e){
const t=new Map,n=new Set,s=[];e.forEach(function(o){
t.set(o.name,o)
});function i(o){
n.add(o.name);const a=[].concat(o.requires||[],o.requiresIfExists||[]);a.forEach(function(c){
if(!n.has(c)){
const f=t.get(c);f&&i(f)
}
}),s.push(o)
}return e.forEach(function(o){
n.has(o.name)||i(o)
}),s
}function iO(e){
const t=sO(e);return Kp.reduce(function(n,s){
return n.concat(t.filter(function(i){
return i.phase===s
}))
},[])
}function rO(e){
let t;return function(){
return t||(t=new Promise(function(n){
Promise.resolve().then(function(){
t=void 0,n(e())
})
})),t
}
}function oO(e){
const t=e.reduce(function(n,s){
const i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n
},{});return Object.keys(t).map(function(n){
return t[n]
})
}const ud={placement:'bottom',modifiers:[],strategy:'absolute'};function fd(){
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){
t[n]=arguments[n]
}return!t.some(function(s){
return!(s&&typeof s.getBoundingClientRect==='function')
})
}function Uo(e){
e===void 0&&(e={});const t=e,n=t.defaultModifiers,s=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?ud:i;return function(c,f,h){
h===void 0&&(h=o);var d={placement:'bottom',orderedModifiers:[],options:Object.assign({},ud,o),modifiersData:{},elements:{reference:c,popper:f},attributes:{},styles:{}},m=[],v=!1,b={state:d,setOptions:function(P){
const M=typeof P==='function'?P(d.options):P;O(),d.options=Object.assign({},o,d.options,M),d.scrollParents={reference:vs(c)?Ki(c):c.contextElement?Ki(c.contextElement):[],popper:Ki(f)};const F=iO(oO([].concat(s,d.options.modifiers)));return d.orderedModifiers=F.filter(function(I){
return I.enabled
}),S(),b.update()
},forceUpdate:function(){
if(!v){
const P=d.elements,M=P.reference,F=P.popper;if(fd(M,F)){
d.rects={reference:nO(M,ir(F),d.options.strategy==='fixed'),popper:lc(F)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(_t){
return d.modifiersData[_t.name]=Object.assign({},_t.data)
});for(let I=0;I<d.orderedModifiers.length;I++){
if(d.reset===!0){
d.reset=!1,I=-1;continue
}const Y=d.orderedModifiers[I],z=Y.fn,G=Y.options,nt=G===void 0?{}:G,gt=Y.name;typeof z==='function'&&(d=z({state:d,options:nt,name:gt,instance:b})||d)
}
}
}
},update:rO(function(){
return new Promise(function(D){
b.forceUpdate(),D(d)
})
}),destroy:function(){
O(),v=!0
}};if(!fd(c,f)){
return b
}b.setOptions(h).then(function(D){
!v&&h.onFirstUpdate&&h.onFirstUpdate(D)
});function S(){
d.orderedModifiers.forEach(function(D){
const P=D.name,M=D.options,F=M===void 0?{}:M,I=D.effect;if(typeof I==='function'){
const Y=I({state:d,name:P,instance:b,options:F}),z=function(){};m.push(Y||z)
}
})
}function O(){
m.forEach(function(D){
return D()
}),m=[]
}return b
}
}const aO=Uo(),lO=[fc,mc,uc,ac],cO=Uo({defaultModifiers:lO}),uO=[fc,mc,uc,ac,nm,tm,sm,Qp,em],_c=Uo({defaultModifiers:uO});const im=Object.freeze(Object.defineProperty({__proto__:null,afterMain:jp,afterRead:Vp,afterWrite:Up,applyStyles:ac,arrow:Qp,auto:Bo,basePlacements:pi,beforeMain:Hp,beforeRead:Mp,beforeWrite:Bp,bottom:Re,clippingParents:Ip,computeStyles:uc,createPopper:_c,createPopperBase:aO,createPopperLite:cO,detectOverflow:ui,end:oi,eventListeners:fc,flip:tm,hide:em,left:_e,main:Fp,modifierPhases:Kp,offset:nm,placements:rc,popper:zs,popperGenerator:Uo,popperOffsets:mc,preventOverflow:sm,read:kp,reference:Pp,right:Le,start:Es,top:me,variationPlacements:Cl,viewport:ic,write:Wp},Symbol.toStringTag,{value:'Module'}))/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Rn=new Map,Ua={set(e,t,n){
Rn.has(e)||Rn.set(e,new Map);const s=Rn.get(e);if(!s.has(t)&&s.size!==0){
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return
}s.set(t,n)
},get(e,t){
return Rn.has(e)&&Rn.get(e).get(t)||null
},remove(e,t){
if(!Rn.has(e)){
return
}const n=Rn.get(e);n.delete(t),n.size===0&&Rn.delete(e)
}},fO=1e6,dO=1e3,Rl='transitionend',rm=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),hO=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),pO=e=>{
do {
e+=Math.floor(Math.random()*fO)
}while(document.getElementById(e));return e
},mO=e=>{
if(!e){
return 0
}let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),i=Number.parseFloat(n);return!s&&!i?0:(t=t.split(',')[0],n=n.split(',')[0],(Number.parseFloat(t)+Number.parseFloat(n))*dO)
},om=e=>{
e.dispatchEvent(new Event(Rl))
},En=e=>!e||typeof e!=='object'?!1:(typeof e.jquery<'u'&&(e=e[0]),typeof e.nodeType<'u'),Mn=e=>En(e)?e.jquery?e[0]:e:typeof e==='string'&&e.length>0?document.querySelector(rm(e)):null,mi=e=>{
if(!En(e)||e.getClientRects().length===0){
return!1
}const t=getComputedStyle(e).getPropertyValue('visibility')==='visible',n=e.closest('details:not([open])');if(!n){
return t
}if(n!==e){
const s=e.closest('summary');if(s&&s.parentNode!==n||s===null){
return!1
}
}return t
},kn=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains('disabled')?!0:typeof e.disabled<'u'?e.disabled:e.hasAttribute('disabled')&&e.getAttribute('disabled')!=='false',am=e=>{
if(!document.documentElement.attachShadow){
return null
}if(typeof e.getRootNode==='function'){
const t=e.getRootNode();return t instanceof ShadowRoot?t:null
}return e instanceof ShadowRoot?e:e.parentNode?am(e.parentNode):null
},Eo=()=>{},rr=e=>{
e.offsetHeight
},lm=()=>window.jQuery&&!document.body.hasAttribute('data-bs-no-jquery')?window.jQuery:null,Ka=[],_O=e=>{
document.readyState==='loading'?(Ka.length||document.addEventListener('DOMContentLoaded',()=>{
for(const t of Ka){
t()
}
}),Ka.push(e)):e()
},He=()=>document.documentElement.dir==='rtl',je=e=>{
_O(()=>{
const t=lm();if(t){
const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)
}
})
},Ee=(e,t=[],n=e)=>typeof e==='function'?e(...t):n,cm=(e,t,n=!0)=>{
if(!n){
Ee(e);return
}const i=mO(t)+5;let o=!1;const a=({target:c})=>{
c===t&&(o=!0,t.removeEventListener(Rl,a),Ee(e))
};t.addEventListener(Rl,a),setTimeout(()=>{
o||om(t)
},i)
},gc=(e,t,n,s)=>{
const i=e.length;let o=e.indexOf(t);return o===-1?!n&&s?e[i-1]:e[0]:(o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])
},gO=/[^.]*(?=\..*)\.|.*/,EO=/\..*/,vO=/::\d+$/,qa={};let dd=1;const um={mouseenter:'mouseover',mouseleave:'mouseout'},bO=new Set(['click','dblclick','mouseup','mousedown','contextmenu','mousewheel','DOMMouseScroll','mouseover','mouseout','mousemove','selectstart','selectend','keydown','keypress','keyup','orientationchange','touchstart','touchmove','touchend','touchcancel','pointerdown','pointermove','pointerup','pointerleave','pointercancel','gesturestart','gesturechange','gestureend','focus','blur','change','reset','select','submit','focusin','focusout','load','unload','beforeunload','resize','move','DOMContentLoaded','readystatechange','error','abort','scroll']);function fm(e,t){
return t&&`${t}::${dd++}`||e.uidEvent||dd++
}function dm(e){
const t=fm(e);return e.uidEvent=t,qa[t]=qa[t]||{},qa[t]
}function yO(e,t){
return function n(s){
return Ec(s,{delegateTarget:e}),n.oneOff&&V.off(e,s.type,t),t.apply(e,[s])
}
}function AO(e,t,n){
return function s(i){
const o=e.querySelectorAll(t);for(let{target:a}=i;a&&a!==this;a=a.parentNode){
for(const c of o){
if(c===a){
return Ec(i,{delegateTarget:a}),s.oneOff&&V.off(e,i.type,t,n),n.apply(a,[i])
}
}
}
}
}function hm(e,t,n=null){
return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)
}function pm(e,t,n){
const s=typeof t==='string',i=s?n:t||n;let o=mm(e);return bO.has(o)||(o=e),[s,i,o]
}function hd(e,t,n,s,i){
if(typeof t!=='string'||!e){
return
}let[o,a,c]=pm(t,n,s);t in um&&(a=(S=>function(O){
if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget)){
return S.call(this,O)
}
})(a));const f=dm(e),h=f[c]||(f[c]={}),d=hm(h,a,o?n:null);if(d){
d.oneOff=d.oneOff&&i;return
}const m=fm(a,t.replace(gO,'')),v=o?AO(e,n,a):yO(e,a);v.delegationSelector=o?n:null,v.callable=a,v.oneOff=i,v.uidEvent=m,h[m]=v,e.addEventListener(c,v,o)
}function Ll(e,t,n,s,i){
const o=hm(t[n],s,i);o&&(e.removeEventListener(n,o,!!i),delete t[n][o.uidEvent])
}function TO(e,t,n,s){
const i=t[n]||{};for(const[o,a]of Object.entries(i)){
o.includes(s)&&Ll(e,t,n,a.callable,a.delegationSelector)
}
}function mm(e){
return e=e.replace(EO,''),um[e]||e
}const V={on(e,t,n,s){
hd(e,t,n,s,!1)
},one(e,t,n,s){
hd(e,t,n,s,!0)
},off(e,t,n,s){
if(typeof t!=='string'||!e){
return
}const[i,o,a]=pm(t,n,s),c=a!==t,f=dm(e),h=f[a]||{},d=t.startsWith('.');if(typeof o<'u'){
if(!Object.keys(h).length){
return
}Ll(e,f,a,o,i?n:null);return
}if(d){
for(const m of Object.keys(f)){
TO(e,f,m,t.slice(1))
}
}for(const[m,v]of Object.entries(h)){
const b=m.replace(vO,'');(!c||t.includes(b))&&Ll(e,f,a,v.callable,v.delegationSelector)
}
},trigger(e,t,n){
if(typeof t!=='string'||!e){
return null
}const s=lm(),i=mm(t),o=t!==i;let a=null,c=!0,f=!0,h=!1;o&&s&&(a=s.Event(t,n),s(e).trigger(a),c=!a.isPropagationStopped(),f=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented());const d=Ec(new Event(t,{bubbles:c,cancelable:!0}),n);return h&&d.preventDefault(),f&&e.dispatchEvent(d),d.defaultPrevented&&a&&a.preventDefault(),d
}};function Ec(e,t={}){
for(const[n,s]of Object.entries(t)){
try{
e[n]=s
}catch{
Object.defineProperty(e,n,{configurable:!0,get(){
return s
}})
}
}return e
}function pd(e){
if(e==='true'){
return!0
}if(e==='false'){
return!1
}if(e===Number(e).toString()){
return Number(e)
}if(e===''||e==='null'){
return null
}if(typeof e!=='string'){
return e
}try{
return JSON.parse(decodeURIComponent(e))
}catch{
return e
}
}function Ya(e){
return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)
}const vn={setDataAttribute(e,t,n){
e.setAttribute(`data-bs-${Ya(t)}`,n)
},removeDataAttribute(e,t){
e.removeAttribute(`data-bs-${Ya(t)}`)
},getDataAttributes(e){
if(!e){
return{}
}const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith('bs')&&!s.startsWith('bsConfig'));for(const s of n){
let i=s.replace(/^bs/,'');i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=pd(e.dataset[s])
}return t
},getDataAttribute(e,t){
return pd(e.getAttribute(`data-bs-${Ya(t)}`))
}};class or{
static get Default(){
return{}
}static get DefaultType(){
return{}
}static get NAME(){
throw new Error('You have to implement the static method "NAME", for each component!')
}_getConfig(t){
return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t
}_configAfterMerge(t){
return t
}_mergeConfigObj(t,n){
const s=En(n)?vn.getDataAttribute(n,'config'):{};return{...this.constructor.Default,...typeof s==='object'?s:{},...En(n)?vn.getDataAttributes(n):{},...typeof t==='object'?t:{}}
}_typeCheckConfig(t,n=this.constructor.DefaultType){
for(const[s,i]of Object.entries(n)){
const o=t[s],a=En(o)?'element':hO(o);if(!new RegExp(i).test(a)){
throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)
}
}
}
}const wO='5.3.3';class Qe extends or{
constructor(t,n){
super(),t=Mn(t),t&&(this._element=t,this._config=this._getConfig(n),Ua.set(this._element,this.constructor.DATA_KEY,this))
}dispose(){
Ua.remove(this._element,this.constructor.DATA_KEY),V.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this)){
this[t]=null
}
}_queueCallback(t,n,s=!0){
cm(t,n,s)
}_getConfig(t){
return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t
}static getInstance(t){
return Ua.get(Mn(t),this.DATA_KEY)
}static getOrCreateInstance(t,n={}){
return this.getInstance(t)||new this(t,typeof n==='object'?n:null)
}static get VERSION(){
return wO
}static get DATA_KEY(){
return`bs.${this.NAME}`
}static get EVENT_KEY(){
return`.${this.DATA_KEY}`
}static eventName(t){
return`${t}${this.EVENT_KEY}`
}
}const za=e=>{
let t=e.getAttribute('data-bs-target');if(!t||t==='#'){
let n=e.getAttribute('href');if(!n||!n.includes('#')&&!n.startsWith('.')){
return null
}n.includes('#')&&!n.startsWith('#')&&(n=`#${n.split('#')[1]}`),t=n&&n!=='#'?n.trim():null
}return t?t.split(',').map(n=>rm(n)).join(','):null
},tt={find(e,t=document.documentElement){
return[].concat(...Element.prototype.querySelectorAll.call(t,e))
},findOne(e,t=document.documentElement){
return Element.prototype.querySelector.call(t,e)
},children(e,t){
return[].concat(...e.children).filter(n=>n.matches(t))
},parents(e,t){
const n=[];let s=e.parentNode.closest(t);for(;s;){
n.push(s),s=s.parentNode.closest(t)
}return n
},prev(e,t){
let n=e.previousElementSibling;for(;n;){
if(n.matches(t)){
return[n]
}n=n.previousElementSibling
}return[]
},next(e,t){
let n=e.nextElementSibling;for(;n;){
if(n.matches(t)){
return[n]
}n=n.nextElementSibling
}return[]
},focusableChildren(e){
const t=['a','button','input','textarea','select','details','[tabindex]','[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(',');return this.find(t,e).filter(n=>!kn(n)&&mi(n))
},getSelectorFromElement(e){
const t=za(e);return t&&tt.findOne(t)?t:null
},getElementFromSelector(e){
const t=za(e);return t?tt.findOne(t):null
},getMultipleElementsFromSelector(e){
const t=za(e);return t?tt.find(t):[]
}},Ko=(e,t='hide')=>{
const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;V.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){
if(['A','AREA'].includes(this.tagName)&&i.preventDefault(),kn(this)){
return
}const o=tt.getElementFromSelector(this)||this.closest(`.${s}`);e.getOrCreateInstance(o)[t]()
})
},SO='alert',OO='bs.alert',_m=`.${OO}`,CO=`close${_m}`,NO=`closed${_m}`,DO='fade',RO='show';class ar extends Qe{
static get NAME(){
return SO
}close(){
if(V.trigger(this._element,CO).defaultPrevented){
return
}this._element.classList.remove(RO);const n=this._element.classList.contains(DO);this._queueCallback(()=>this._destroyElement(),this._element,n)
}_destroyElement(){
this._element.remove(),V.trigger(this._element,NO),this.dispose()
}static jQueryInterface(t){
return this.each(function(){
const n=ar.getOrCreateInstance(this);if(typeof t==='string'){
if(n[t]===void 0||t.startsWith('_')||t==='constructor'){
throw new TypeError(`No method named "${t}"`)
}n[t](this)
}
})
}
}Ko(ar,'close');je(ar);const LO='button',$O='bs.button',xO=`.${$O}`,IO='.data-api',PO='active',md='[data-bs-toggle="button"]',MO=`click${xO}${IO}`;class lr extends Qe{
static get NAME(){
return LO
}toggle(){
this._element.setAttribute('aria-pressed',this._element.classList.toggle(PO))
}static jQueryInterface(t){
return this.each(function(){
const n=lr.getOrCreateInstance(this);t==='toggle'&&n[t]()
})
}
}V.on(document,MO,md,e=>{
e.preventDefault();const t=e.target.closest(md);lr.getOrCreateInstance(t).toggle()
});je(lr);const kO='swipe',_i='.bs.swipe',VO=`touchstart${_i}`,HO=`touchmove${_i}`,FO=`touchend${_i}`,jO=`pointerdown${_i}`,BO=`pointerup${_i}`,WO='touch',UO='pen',KO='pointer-event',qO=40,YO={endCallback:null,leftCallback:null,rightCallback:null},zO={endCallback:'(function|null)',leftCallback:'(function|null)',rightCallback:'(function|null)'};class vo extends or{
constructor(t,n){
super(),this._element=t,!(!t||!vo.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())
}static get Default(){
return YO
}static get DefaultType(){
return zO
}static get NAME(){
return kO
}dispose(){
V.off(this._element,_i)
}_start(t){
if(!this._supportPointerEvents){
this._deltaX=t.touches[0].clientX;return
}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)
}_end(t){
this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Ee(this._config.endCallback)
}_move(t){
this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX
}_handleSwipe(){
const t=Math.abs(this._deltaX);if(t<=qO){
return
}const n=t/this._deltaX;this._deltaX=0,n&&Ee(n>0?this._config.rightCallback:this._config.leftCallback)
}_initEvents(){
this._supportPointerEvents?(V.on(this._element,jO,t=>this._start(t)),V.on(this._element,BO,t=>this._end(t)),this._element.classList.add(KO)):(V.on(this._element,VO,t=>this._start(t)),V.on(this._element,HO,t=>this._move(t)),V.on(this._element,FO,t=>this._end(t)))
}_eventIsPointerPenTouch(t){
return this._supportPointerEvents&&(t.pointerType===UO||t.pointerType===WO)
}static isSupported(){
return'ontouchstart'in document.documentElement||navigator.maxTouchPoints>0
}
}const GO='carousel',XO='bs.carousel',Bn=`.${XO}`,gm='.data-api',QO='ArrowLeft',JO='ArrowRight',ZO=500,xi='next',Ws='prev',Gs='left',so='right',tC=`slide${Bn}`,Ga=`slid${Bn}`,eC=`keydown${Bn}`,nC=`mouseenter${Bn}`,sC=`mouseleave${Bn}`,iC=`dragstart${Bn}`,rC=`load${Bn}${gm}`,oC=`click${Bn}${gm}`,Em='carousel',Fr='active',aC='slide',lC='carousel-item-end',cC='carousel-item-start',uC='carousel-item-next',fC='carousel-item-prev',vm='.active',bm='.carousel-item',dC=vm+bm,hC='.carousel-item img',pC='.carousel-indicators',mC='[data-bs-slide], [data-bs-slide-to]',_C='[data-bs-ride="carousel"]',gC={[QO]:so,[JO]:Gs},EC={interval:5e3,keyboard:!0,pause:'hover',ride:!1,touch:!0,wrap:!0},vC={interval:'(number|boolean)',keyboard:'boolean',pause:'(string|boolean)',ride:'(boolean|string)',touch:'boolean',wrap:'boolean'};class gi extends Qe{
constructor(t,n){
super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=tt.findOne(pC,this._element),this._addEventListeners(),this._config.ride===Em&&this.cycle()
}static get Default(){
return EC
}static get DefaultType(){
return vC
}static get NAME(){
return GO
}next(){
this._slide(xi)
}nextWhenVisible(){
!document.hidden&&mi(this._element)&&this.next()
}prev(){
this._slide(Ws)
}pause(){
this._isSliding&&om(this._element),this._clearInterval()
}cycle(){
this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)
}_maybeEnableCycle(){
if(this._config.ride){
if(this._isSliding){
V.one(this._element,Ga,()=>this.cycle());return
}this.cycle()
}
}to(t){
const n=this._getItems();if(t>n.length-1||t<0){
return
}if(this._isSliding){
V.one(this._element,Ga,()=>this.to(t));return
}const s=this._getItemIndex(this._getActive());if(s===t){
return
}const i=t>s?xi:Ws;this._slide(i,n[t])
}dispose(){
this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()
}_configAfterMerge(t){
return t.defaultInterval=t.interval,t
}_addEventListeners(){
this._config.keyboard&&V.on(this._element,eC,t=>this._keydown(t)),this._config.pause==='hover'&&(V.on(this._element,nC,()=>this.pause()),V.on(this._element,sC,()=>this._maybeEnableCycle())),this._config.touch&&vo.isSupported()&&this._addTouchEventListeners()
}_addTouchEventListeners(){
for(const s of tt.find(hC,this._element)){
V.on(s,iC,i=>i.preventDefault())
}const n={leftCallback:()=>this._slide(this._directionToOrder(Gs)),rightCallback:()=>this._slide(this._directionToOrder(so)),endCallback:()=>{
this._config.pause==='hover'&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ZO+this._config.interval))
}};this._swipeHelper=new vo(this._element,n)
}_keydown(t){
if(/input|textarea/i.test(t.target.tagName)){
return
}const n=gC[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))
}_getItemIndex(t){
return this._getItems().indexOf(t)
}_setActiveIndicatorElement(t){
if(!this._indicatorsElement){
return
}const n=tt.findOne(vm,this._indicatorsElement);n.classList.remove(Fr),n.removeAttribute('aria-current');const s=tt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(Fr),s.setAttribute('aria-current','true'))
}_updateInterval(){
const t=this._activeElement||this._getActive();if(!t){
return
}const n=Number.parseInt(t.getAttribute('data-bs-interval'),10);this._config.interval=n||this._config.defaultInterval
}_slide(t,n=null){
if(this._isSliding){
return
}const s=this._getActive(),i=t===xi,o=n||gc(this._getItems(),s,i,this._config.wrap);if(o===s){
return
}const a=this._getItemIndex(o),c=b=>V.trigger(this._element,b,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:a});if(c(tC).defaultPrevented||!s||!o){
return
}const h=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=o;const d=i?cC:lC,m=i?uC:fC;o.classList.add(m),rr(o),s.classList.add(d),o.classList.add(d);const v=()=>{
o.classList.remove(d,m),o.classList.add(Fr),s.classList.remove(Fr,m,d),this._isSliding=!1,c(Ga)
};this._queueCallback(v,s,this._isAnimated()),h&&this.cycle()
}_isAnimated(){
return this._element.classList.contains(aC)
}_getActive(){
return tt.findOne(dC,this._element)
}_getItems(){
return tt.find(bm,this._element)
}_clearInterval(){
this._interval&&(clearInterval(this._interval),this._interval=null)
}_directionToOrder(t){
return He()?t===Gs?Ws:xi:t===Gs?xi:Ws
}_orderToDirection(t){
return He()?t===Ws?Gs:so:t===Ws?so:Gs
}static jQueryInterface(t){
return this.each(function(){
const n=gi.getOrCreateInstance(this,t);if(typeof t==='number'){
n.to(t);return
}if(typeof t==='string'){
if(n[t]===void 0||t.startsWith('_')||t==='constructor'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}
}V.on(document,oC,mC,function(e){
const t=tt.getElementFromSelector(this);if(!t||!t.classList.contains(Em)){
return
}e.preventDefault();const n=gi.getOrCreateInstance(t),s=this.getAttribute('data-bs-slide-to');if(s){
n.to(s),n._maybeEnableCycle();return
}if(vn.getDataAttribute(this,'slide')==='next'){
n.next(),n._maybeEnableCycle();return
}n.prev(),n._maybeEnableCycle()
});V.on(window,rC,()=>{
const e=tt.find(_C);for(const t of e){
gi.getOrCreateInstance(t)
}
});je(gi);const bC='collapse',yC='bs.collapse',cr=`.${yC}`,AC='.data-api',TC=`show${cr}`,wC=`shown${cr}`,SC=`hide${cr}`,OC=`hidden${cr}`,CC=`click${cr}${AC}`,Xa='show',Qs='collapse',jr='collapsing',NC='collapsed',DC=`:scope .${Qs} .${Qs}`,RC='collapse-horizontal',LC='width',$C='height',xC='.collapse.show, .collapse.collapsing',$l='[data-bs-toggle="collapse"]',IC={parent:null,toggle:!0},PC={parent:'(null|element)',toggle:'boolean'};class fi extends Qe{
constructor(t,n){
super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=tt.find($l);for(const i of s){
const o=tt.getSelectorFromElement(i),a=tt.find(o).filter(c=>c===this._element);o!==null&&a.length&&this._triggerArray.push(i)
}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()
}static get Default(){
return IC
}static get DefaultType(){
return PC
}static get NAME(){
return bC
}toggle(){
this._isShown()?this.hide():this.show()
}show(){
if(this._isTransitioning||this._isShown()){
return
}let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(xC).filter(c=>c!==this._element).map(c=>fi.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||V.trigger(this._element,TC).defaultPrevented){
return
}for(const c of t){
c.hide()
}const s=this._getDimension();this._element.classList.remove(Qs),this._element.classList.add(jr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{
this._isTransitioning=!1,this._element.classList.remove(jr),this._element.classList.add(Qs,Xa),this._element.style[s]='',V.trigger(this._element,wC)
},a=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[a]}px`
}hide(){
if(this._isTransitioning||!this._isShown()||V.trigger(this._element,SC).defaultPrevented){
return
}const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,rr(this._element),this._element.classList.add(jr),this._element.classList.remove(Qs,Xa);for(const i of this._triggerArray){
const o=tt.getElementFromSelector(i);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([i],!1)
}this._isTransitioning=!0;const s=()=>{
this._isTransitioning=!1,this._element.classList.remove(jr),this._element.classList.add(Qs),V.trigger(this._element,OC)
};this._element.style[n]='',this._queueCallback(s,this._element,!0)
}_isShown(t=this._element){
return t.classList.contains(Xa)
}_configAfterMerge(t){
return t.toggle=!!t.toggle,t.parent=Mn(t.parent),t
}_getDimension(){
return this._element.classList.contains(RC)?LC:$C
}_initializeChildren(){
if(!this._config.parent){
return
}const t=this._getFirstLevelChildren($l);for(const n of t){
const s=tt.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))
}
}_getFirstLevelChildren(t){
const n=tt.find(DC,this._config.parent);return tt.find(t,this._config.parent).filter(s=>!n.includes(s))
}_addAriaAndCollapsedClass(t,n){
if(t.length){
for(const s of t){
s.classList.toggle(NC,!n),s.setAttribute('aria-expanded',n)
}
}
}static jQueryInterface(t){
const n={};return typeof t==='string'&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){
const s=fi.getOrCreateInstance(this,n);if(typeof t==='string'){
if(typeof s[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}s[t]()
}
})
}
}V.on(document,CC,$l,function(e){
(e.target.tagName==='A'||e.delegateTarget&&e.delegateTarget.tagName==='A')&&e.preventDefault();for(const t of tt.getMultipleElementsFromSelector(this)){
fi.getOrCreateInstance(t,{toggle:!1}).toggle()
}
});je(fi);const _d='dropdown',MC='bs.dropdown',Ts=`.${MC}`,vc='.data-api',kC='Escape',gd='Tab',VC='ArrowUp',Ed='ArrowDown',HC=2,FC=`hide${Ts}`,jC=`hidden${Ts}`,BC=`show${Ts}`,WC=`shown${Ts}`,ym=`click${Ts}${vc}`,Am=`keydown${Ts}${vc}`,UC=`keyup${Ts}${vc}`,Xs='show',KC='dropup',qC='dropend',YC='dropstart',zC='dropup-center',GC='dropdown-center',us='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',XC=`${us}.${Xs}`,io='.dropdown-menu',QC='.navbar',JC='.navbar-nav',ZC='.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',tN=He()?'top-end':'top-start',eN=He()?'top-start':'top-end',nN=He()?'bottom-end':'bottom-start',sN=He()?'bottom-start':'bottom-end',iN=He()?'left-start':'right-start',rN=He()?'right-start':'left-start',oN='top',aN='bottom',lN={autoClose:!0,boundary:'clippingParents',display:'dynamic',offset:[0,2],popperConfig:null,reference:'toggle'},cN={autoClose:'(boolean|string)',boundary:'(string|element)',display:'string',offset:'(array|string|function)',popperConfig:'(null|object|function)',reference:'(string|element|object)'};class ze extends Qe{
constructor(t,n){
super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=tt.next(this._element,io)[0]||tt.prev(this._element,io)[0]||tt.findOne(io,this._parent),this._inNavbar=this._detectNavbar()
}static get Default(){
return lN
}static get DefaultType(){
return cN
}static get NAME(){
return _d
}toggle(){
return this._isShown()?this.hide():this.show()
}show(){
if(kn(this._element)||this._isShown()){
return
}const t={relatedTarget:this._element};if(!V.trigger(this._element,BC,t).defaultPrevented){
if(this._createPopper(),'ontouchstart'in document.documentElement&&!this._parent.closest(JC)){
for(const s of[].concat(...document.body.children)){
V.on(s,'mouseover',Eo)
}
}this._element.focus(),this._element.setAttribute('aria-expanded',!0),this._menu.classList.add(Xs),this._element.classList.add(Xs),V.trigger(this._element,WC,t)
}
}hide(){
if(kn(this._element)||!this._isShown()){
return
}const t={relatedTarget:this._element};this._completeHide(t)
}dispose(){
this._popper&&this._popper.destroy(),super.dispose()
}update(){
this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()
}_completeHide(t){
if(!V.trigger(this._element,FC,t).defaultPrevented){
if('ontouchstart'in document.documentElement){
for(const s of[].concat(...document.body.children)){
V.off(s,'mouseover',Eo)
}
}this._popper&&this._popper.destroy(),this._menu.classList.remove(Xs),this._element.classList.remove(Xs),this._element.setAttribute('aria-expanded','false'),vn.removeDataAttribute(this._menu,'popper'),V.trigger(this._element,jC,t)
}
}_getConfig(t){
if(t=super._getConfig(t),typeof t.reference==='object'&&!En(t.reference)&&typeof t.reference.getBoundingClientRect!=='function'){
throw new TypeError(`${_d.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
}return t
}_createPopper(){
if(typeof im>'u'){
throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
}let t=this._element;this._config.reference==='parent'?t=this._parent:En(this._config.reference)?t=Mn(this._config.reference):typeof this._config.reference==='object'&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=_c(t,this._menu,n)
}_isShown(){
return this._menu.classList.contains(Xs)
}_getPlacement(){
const t=this._parent;if(t.classList.contains(qC)){
return iN
}if(t.classList.contains(YC)){
return rN
}if(t.classList.contains(zC)){
return oN
}if(t.classList.contains(GC)){
return aN
}const n=getComputedStyle(this._menu).getPropertyValue('--bs-position').trim()==='end';return t.classList.contains(KC)?n?eN:tN:n?sN:nN
}_detectNavbar(){
return this._element.closest(QC)!==null
}_getOffset(){
const{offset:t}=this._config;return typeof t==='string'?t.split(',').map(n=>Number.parseInt(n,10)):typeof t==='function'?n=>t(n,this._element):t
}_getPopperConfig(){
const t={placement:this._getPlacement(),modifiers:[{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'offset',options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==='static')&&(vn.setDataAttribute(this._menu,'popper','static'),t.modifiers=[{name:'applyStyles',enabled:!1}]),{...t,...Ee(this._config.popperConfig,[t])}
}_selectMenuItem({key:t,target:n}){
const s=tt.find(ZC,this._menu).filter(i=>mi(i));s.length&&gc(s,n,t===Ed,!s.includes(n)).focus()
}static jQueryInterface(t){
return this.each(function(){
const n=ze.getOrCreateInstance(this,t);if(typeof t==='string'){
if(typeof n[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}static clearMenus(t){
if(t.button===HC||t.type==='keyup'&&t.key!==gd){
return
}const n=tt.find(XC);for(const s of n){
const i=ze.getInstance(s);if(!i||i._config.autoClose===!1){
continue
}const o=t.composedPath(),a=o.includes(i._menu);if(o.includes(i._element)||i._config.autoClose==='inside'&&!a||i._config.autoClose==='outside'&&a||i._menu.contains(t.target)&&(t.type==='keyup'&&t.key===gd||/input|select|option|textarea|form/i.test(t.target.tagName))){
continue
}const c={relatedTarget:i._element};t.type==='click'&&(c.clickEvent=t),i._completeHide(c)
}
}static dataApiKeydownHandler(t){
const n=/input|textarea/i.test(t.target.tagName),s=t.key===kC,i=[VC,Ed].includes(t.key);if(!i&&!s||n&&!s){
return
}t.preventDefault();const o=this.matches(us)?this:tt.prev(this,us)[0]||tt.next(this,us)[0]||tt.findOne(us,t.delegateTarget.parentNode),a=ze.getOrCreateInstance(o);if(i){
t.stopPropagation(),a.show(),a._selectMenuItem(t);return
}a._isShown()&&(t.stopPropagation(),a.hide(),o.focus())
}
}V.on(document,Am,us,ze.dataApiKeydownHandler);V.on(document,Am,io,ze.dataApiKeydownHandler);V.on(document,ym,ze.clearMenus);V.on(document,UC,ze.clearMenus);V.on(document,ym,us,function(e){
e.preventDefault(),ze.getOrCreateInstance(this).toggle()
});je(ze);const Tm='backdrop',uN='fade',vd='show',bd=`mousedown.bs.${Tm}`,fN={className:'modal-backdrop',clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:'body'},dN={className:'string',clickCallback:'(function|null)',isAnimated:'boolean',isVisible:'boolean',rootElement:'(element|string)'};class wm extends or{
constructor(t){
super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null
}static get Default(){
return fN
}static get DefaultType(){
return dN
}static get NAME(){
return Tm
}show(t){
if(!this._config.isVisible){
Ee(t);return
}this._append();const n=this._getElement();this._config.isAnimated&&rr(n),n.classList.add(vd),this._emulateAnimation(()=>{
Ee(t)
})
}hide(t){
if(!this._config.isVisible){
Ee(t);return
}this._getElement().classList.remove(vd),this._emulateAnimation(()=>{
this.dispose(),Ee(t)
})
}dispose(){
this._isAppended&&(V.off(this._element,bd),this._element.remove(),this._isAppended=!1)
}_getElement(){
if(!this._element){
const t=document.createElement('div');t.className=this._config.className,this._config.isAnimated&&t.classList.add(uN),this._element=t
}return this._element
}_configAfterMerge(t){
return t.rootElement=Mn(t.rootElement),t
}_append(){
if(this._isAppended){
return
}const t=this._getElement();this._config.rootElement.append(t),V.on(t,bd,()=>{
Ee(this._config.clickCallback)
}),this._isAppended=!0
}_emulateAnimation(t){
cm(t,this._getElement(),this._config.isAnimated)
}
}const hN='focustrap',pN='bs.focustrap',bo=`.${pN}`,mN=`focusin${bo}`,_N=`keydown.tab${bo}`,gN='Tab',EN='forward',yd='backward',vN={autofocus:!0,trapElement:null},bN={autofocus:'boolean',trapElement:'element'};class Sm extends or{
constructor(t){
super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null
}static get Default(){
return vN
}static get DefaultType(){
return bN
}static get NAME(){
return hN
}activate(){
this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),V.off(document,bo),V.on(document,mN,t=>this._handleFocusin(t)),V.on(document,_N,t=>this._handleKeydown(t)),this._isActive=!0)
}deactivate(){
this._isActive&&(this._isActive=!1,V.off(document,bo))
}_handleFocusin(t){
const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target)){
return
}const s=tt.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===yd?s[s.length-1].focus():s[0].focus()
}_handleKeydown(t){
t.key===gN&&(this._lastTabNavDirection=t.shiftKey?yd:EN)
}
}const Ad='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',Td='.sticky-top',Br='padding-right',wd='margin-right';class xl{
constructor(){
this._element=document.body
}getWidth(){
const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)
}hide(){
const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Br,n=>n+t),this._setElementAttributes(Ad,Br,n=>n+t),this._setElementAttributes(Td,wd,n=>n-t)
}reset(){
this._resetElementAttributes(this._element,'overflow'),this._resetElementAttributes(this._element,Br),this._resetElementAttributes(Ad,Br),this._resetElementAttributes(Td,wd)
}isOverflowing(){
return this.getWidth()>0
}_disableOverFlow(){
this._saveInitialAttribute(this._element,'overflow'),this._element.style.overflow='hidden'
}_setElementAttributes(t,n,s){
const i=this.getWidth(),o=a=>{
if(a!==this._element&&window.innerWidth>a.clientWidth+i){
return
}this._saveInitialAttribute(a,n);const c=window.getComputedStyle(a).getPropertyValue(n);a.style.setProperty(n,`${s(Number.parseFloat(c))}px`)
};this._applyManipulationCallback(t,o)
}_saveInitialAttribute(t,n){
const s=t.style.getPropertyValue(n);s&&vn.setDataAttribute(t,n,s)
}_resetElementAttributes(t,n){
const s=i=>{
const o=vn.getDataAttribute(i,n);if(o===null){
i.style.removeProperty(n);return
}vn.removeDataAttribute(i,n),i.style.setProperty(n,o)
};this._applyManipulationCallback(t,s)
}_applyManipulationCallback(t,n){
if(En(t)){
n(t);return
}for(const s of tt.find(t,this._element)){
n(s)
}
}
}const yN='modal',AN='bs.modal',Fe=`.${AN}`,TN='.data-api',wN='Escape',SN=`hide${Fe}`,ON=`hidePrevented${Fe}`,Om=`hidden${Fe}`,Cm=`show${Fe}`,CN=`shown${Fe}`,NN=`resize${Fe}`,DN=`click.dismiss${Fe}`,RN=`mousedown.dismiss${Fe}`,LN=`keydown.dismiss${Fe}`,$N=`click${Fe}${TN}`,Sd='modal-open',xN='fade',Od='show',Qa='modal-static',IN='.modal.show',PN='.modal-dialog',MN='.modal-body',kN='[data-bs-toggle="modal"]',VN={backdrop:!0,focus:!0,keyboard:!0},HN={backdrop:'(boolean|string)',focus:'boolean',keyboard:'boolean'};class bs extends Qe{
constructor(t,n){
super(t,n),this._dialog=tt.findOne(PN,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new xl,this._addEventListeners()
}static get Default(){
return VN
}static get DefaultType(){
return HN
}static get NAME(){
return yN
}toggle(t){
return this._isShown?this.hide():this.show(t)
}show(t){
this._isShown||this._isTransitioning||V.trigger(this._element,Cm,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Sd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))
}hide(){
!this._isShown||this._isTransitioning||V.trigger(this._element,SN).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Od),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))
}dispose(){
V.off(window,Fe),V.off(this._dialog,Fe),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()
}handleUpdate(){
this._adjustDialog()
}_initializeBackDrop(){
return new wm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})
}_initializeFocusTrap(){
return new Sm({trapElement:this._element})
}_showElement(t){
document.body.contains(this._element)||document.body.append(this._element),this._element.style.display='block',this._element.removeAttribute('aria-hidden'),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.scrollTop=0;const n=tt.findOne(MN,this._dialog);n&&(n.scrollTop=0),rr(this._element),this._element.classList.add(Od);const s=()=>{
this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,V.trigger(this._element,CN,{relatedTarget:t})
};this._queueCallback(s,this._dialog,this._isAnimated())
}_addEventListeners(){
V.on(this._element,LN,t=>{
if(t.key===wN){
if(this._config.keyboard){
this.hide();return
}this._triggerBackdropTransition()
}
}),V.on(window,NN,()=>{
this._isShown&&!this._isTransitioning&&this._adjustDialog()
}),V.on(this._element,RN,t=>{
V.one(this._element,DN,n=>{
if(!(this._element!==t.target||this._element!==n.target)){
if(this._config.backdrop==='static'){
this._triggerBackdropTransition();return
}this._config.backdrop&&this.hide()
}
})
})
}_hideModal(){
this._element.style.display='none',this._element.setAttribute('aria-hidden',!0),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._isTransitioning=!1,this._backdrop.hide(()=>{
document.body.classList.remove(Sd),this._resetAdjustments(),this._scrollBar.reset(),V.trigger(this._element,Om)
})
}_isAnimated(){
return this._element.classList.contains(xN)
}_triggerBackdropTransition(){
if(V.trigger(this._element,ON).defaultPrevented){
return
}const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==='hidden'||this._element.classList.contains(Qa)||(n||(this._element.style.overflowY='hidden'),this._element.classList.add(Qa),this._queueCallback(()=>{
this._element.classList.remove(Qa),this._queueCallback(()=>{
this._element.style.overflowY=s
},this._dialog)
},this._dialog),this._element.focus())
}_adjustDialog(){
const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){
const i=He()?'paddingLeft':'paddingRight';this._element.style[i]=`${n}px`
}if(!s&&t){
const i=He()?'paddingRight':'paddingLeft';this._element.style[i]=`${n}px`
}
}_resetAdjustments(){
this._element.style.paddingLeft='',this._element.style.paddingRight=''
}static jQueryInterface(t,n){
return this.each(function(){
const s=bs.getOrCreateInstance(this,t);if(typeof t==='string'){
if(typeof s[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}s[t](n)
}
})
}
}V.on(document,$N,kN,function(e){
const t=tt.getElementFromSelector(this);['A','AREA'].includes(this.tagName)&&e.preventDefault(),V.one(t,Cm,i=>{
i.defaultPrevented||V.one(t,Om,()=>{
mi(this)&&this.focus()
})
});const n=tt.findOne(IN);n&&bs.getInstance(n).hide(),bs.getOrCreateInstance(t).toggle(this)
});Ko(bs);je(bs);const FN='offcanvas',jN='bs.offcanvas',Tn=`.${jN}`,Nm='.data-api',BN=`load${Tn}${Nm}`,WN='Escape',Cd='show',Nd='showing',Dd='hiding',UN='offcanvas-backdrop',Dm='.offcanvas.show',KN=`show${Tn}`,qN=`shown${Tn}`,YN=`hide${Tn}`,Rd=`hidePrevented${Tn}`,Rm=`hidden${Tn}`,zN=`resize${Tn}`,GN=`click${Tn}${Nm}`,XN=`keydown.dismiss${Tn}`,QN='[data-bs-toggle="offcanvas"]',JN={backdrop:!0,keyboard:!0,scroll:!1},ZN={backdrop:'(boolean|string)',keyboard:'boolean',scroll:'boolean'};class yn extends Qe{
constructor(t,n){
super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()
}static get Default(){
return JN
}static get DefaultType(){
return ZN
}static get NAME(){
return FN
}toggle(t){
return this._isShown?this.hide():this.show(t)
}show(t){
if(this._isShown||V.trigger(this._element,KN,{relatedTarget:t}).defaultPrevented){
return
}this._isShown=!0,this._backdrop.show(),this._config.scroll||new xl().hide(),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.classList.add(Nd);const s=()=>{
(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Cd),this._element.classList.remove(Nd),V.trigger(this._element,qN,{relatedTarget:t})
};this._queueCallback(s,this._element,!0)
}hide(){
if(!this._isShown||V.trigger(this._element,YN).defaultPrevented){
return
}this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Dd),this._backdrop.hide();const n=()=>{
this._element.classList.remove(Cd,Dd),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._config.scroll||new xl().reset(),V.trigger(this._element,Rm)
};this._queueCallback(n,this._element,!0)
}dispose(){
this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()
}_initializeBackDrop(){
const t=()=>{
if(this._config.backdrop==='static'){
V.trigger(this._element,Rd);return
}this.hide()
},n=!!this._config.backdrop;return new wm({className:UN,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})
}_initializeFocusTrap(){
return new Sm({trapElement:this._element})
}_addEventListeners(){
V.on(this._element,XN,t=>{
if(t.key===WN){
if(this._config.keyboard){
this.hide();return
}V.trigger(this._element,Rd)
}
})
}static jQueryInterface(t){
return this.each(function(){
const n=yn.getOrCreateInstance(this,t);if(typeof t==='string'){
if(n[t]===void 0||t.startsWith('_')||t==='constructor'){
throw new TypeError(`No method named "${t}"`)
}n[t](this)
}
})
}
}V.on(document,GN,QN,function(e){
const t=tt.getElementFromSelector(this);if(['A','AREA'].includes(this.tagName)&&e.preventDefault(),kn(this)){
return
}V.one(t,Rm,()=>{
mi(this)&&this.focus()
});const n=tt.findOne(Dm);n&&n!==t&&yn.getInstance(n).hide(),yn.getOrCreateInstance(t).toggle(this)
});V.on(window,BN,()=>{
for(const e of tt.find(Dm)){
yn.getOrCreateInstance(e).show()
}
});V.on(window,zN,()=>{
for(const e of tt.find('[aria-modal][class*=show][class*=offcanvas-]')){
getComputedStyle(e).position!=='fixed'&&yn.getOrCreateInstance(e).hide()
}
});Ko(yn);je(yn);const tD=/^aria-[\w-]*$/i,Lm={'*':['class','dir','id','lang','role',tD],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','srcset','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},eD=new Set(['background','cite','href','itemtype','longdesc','poster','src','xlink:href']),nD=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,sD=(e,t)=>{
const n=e.nodeName.toLowerCase();return t.includes(n)?eD.has(n)?!!nD.test(e.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))
};function iD(e,t,n){
if(!e.length){
return e
}if(n&&typeof n==='function'){
return n(e)
}const i=new window.DOMParser().parseFromString(e,'text/html'),o=[].concat(...i.body.querySelectorAll('*'));for(const a of o){
const c=a.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){
a.remove();continue
}const f=[].concat(...a.attributes),h=[].concat(t['*']||[],t[c]||[]);for(const d of f){
sD(d,h)||a.removeAttribute(d.nodeName)
}
}return i.body.innerHTML
}const rD='TemplateFactory',oD={allowList:Lm,content:{},extraClass:'',html:!1,sanitize:!0,sanitizeFn:null,template:'<div></div>'},aD={allowList:'object',content:'object',extraClass:'(string|function)',html:'boolean',sanitize:'boolean',sanitizeFn:'(null|function)',template:'string'},lD={entry:'(string|element|function|null)',selector:'(string|element)'};class cD extends or{
constructor(t){
super(),this._config=this._getConfig(t)
}static get Default(){
return oD
}static get DefaultType(){
return aD
}static get NAME(){
return rD
}getContent(){
return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)
}hasContent(){
return this.getContent().length>0
}changeContent(t){
return this._checkContent(t),this._config.content={...this._config.content,...t},this
}toHtml(){
const t=document.createElement('div');t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,o]of Object.entries(this._config.content)){
this._setContent(t,o,i)
}const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(' ')),n
}_typeCheckConfig(t){
super._typeCheckConfig(t),this._checkContent(t.content)
}_checkContent(t){
for(const[n,s]of Object.entries(t)){
super._typeCheckConfig({selector:n,entry:s},lD)
}
}_setContent(t,n,s){
const i=tt.findOne(s,t);if(i){
if(n=this._resolvePossibleFunction(n),!n){
i.remove();return
}if(En(n)){
this._putElementInTemplate(Mn(n),i);return
}if(this._config.html){
i.innerHTML=this._maybeSanitize(n);return
}i.textContent=n
}
}_maybeSanitize(t){
return this._config.sanitize?iD(t,this._config.allowList,this._config.sanitizeFn):t
}_resolvePossibleFunction(t){
return Ee(t,[this])
}_putElementInTemplate(t,n){
if(this._config.html){
n.innerHTML='',n.append(t);return
}n.textContent=t.textContent
}
}const uD='tooltip',fD=new Set(['sanitize','allowList','sanitizeFn']),Ja='fade',dD='modal',Wr='show',hD='.tooltip-inner',Ld=`.${dD}`,$d='hide.bs.modal',Ii='hover',Za='focus',pD='click',mD='manual',_D='hide',gD='hidden',ED='show',vD='shown',bD='inserted',yD='click',AD='focusin',TD='focusout',wD='mouseenter',SD='mouseleave',OD={AUTO:'auto',TOP:'top',RIGHT:He()?'left':'right',BOTTOM:'bottom',LEFT:He()?'right':'left'},CD={allowList:Lm,animation:!0,boundary:'clippingParents',container:!1,customClass:'',delay:0,fallbackPlacements:['top','right','bottom','left'],html:!1,offset:[0,6],placement:'top',popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:'',trigger:'hover focus'},ND={allowList:'object',animation:'boolean',boundary:'(string|element)',container:'(string|element|boolean)',customClass:'(string|function)',delay:'(number|object)',fallbackPlacements:'array',html:'boolean',offset:'(array|string|function)',placement:'(string|function)',popperConfig:'(null|object|function)',sanitize:'boolean',sanitizeFn:'(null|function)',selector:'(string|boolean)',template:'string',title:'(string|element|function)',trigger:'string'};class ws extends Qe{
constructor(t,n){
if(typeof im>'u'){
throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
}super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()
}static get Default(){
return CD
}static get DefaultType(){
return ND
}static get NAME(){
return uD
}enable(){
this._isEnabled=!0
}disable(){
this._isEnabled=!1
}toggleEnabled(){
this._isEnabled=!this._isEnabled
}toggle(){
if(this._isEnabled){
if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){
this._leave();return
}this._enter()
}
}dispose(){
clearTimeout(this._timeout),V.off(this._element.closest(Ld),$d,this._hideModalHandler),this._element.getAttribute('data-bs-original-title')&&this._element.setAttribute('title',this._element.getAttribute('data-bs-original-title')),this._disposePopper(),super.dispose()
}show(){
if(this._element.style.display==='none'){
throw new Error('Please use show on visible elements')
}if(!(this._isWithContent()&&this._isEnabled)){
return
}const t=V.trigger(this._element,this.constructor.eventName(ED)),s=(am(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s){
return
}this._disposePopper();const i=this._getTipElement();this._element.setAttribute('aria-describedby',i.getAttribute('id'));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),V.trigger(this._element,this.constructor.eventName(bD))),this._popper=this._createPopper(i),i.classList.add(Wr),'ontouchstart'in document.documentElement){
for(const c of[].concat(...document.body.children)){
V.on(c,'mouseover',Eo)
}
}const a=()=>{
V.trigger(this._element,this.constructor.eventName(vD)),this._isHovered===!1&&this._leave(),this._isHovered=!1
};this._queueCallback(a,this.tip,this._isAnimated())
}hide(){
if(!this._isShown()||V.trigger(this._element,this.constructor.eventName(_D)).defaultPrevented){
return
}if(this._getTipElement().classList.remove(Wr),'ontouchstart'in document.documentElement){
for(const i of[].concat(...document.body.children)){
V.off(i,'mouseover',Eo)
}
}this._activeTrigger[pD]=!1,this._activeTrigger[Za]=!1,this._activeTrigger[Ii]=!1,this._isHovered=null;const s=()=>{
this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute('aria-describedby'),V.trigger(this._element,this.constructor.eventName(gD)))
};this._queueCallback(s,this.tip,this._isAnimated())
}update(){
this._popper&&this._popper.update()
}_isWithContent(){
return!!this._getTitle()
}_getTipElement(){
return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip
}_createTipElement(t){
const n=this._getTemplateFactory(t).toHtml();if(!n){
return null
}n.classList.remove(Ja,Wr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=pO(this.constructor.NAME).toString();return n.setAttribute('id',s),this._isAnimated()&&n.classList.add(Ja),n
}setContent(t){
this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())
}_getTemplateFactory(t){
return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new cD({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory
}_getContentForTemplate(){
return{[hD]:this._getTitle()}
}_getTitle(){
return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute('data-bs-original-title')
}_initializeOnDelegatedTarget(t){
return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())
}_isAnimated(){
return this._config.animation||this.tip&&this.tip.classList.contains(Ja)
}_isShown(){
return this.tip&&this.tip.classList.contains(Wr)
}_createPopper(t){
const n=Ee(this._config.placement,[this,t,this._element]),s=OD[n.toUpperCase()];return _c(this._element,t,this._getPopperConfig(s))
}_getOffset(){
const{offset:t}=this._config;return typeof t==='string'?t.split(',').map(n=>Number.parseInt(n,10)):typeof t==='function'?n=>t(n,this._element):t
}_resolvePossibleFunction(t){
return Ee(t,[this._element])
}_getPopperConfig(t){
const n={placement:t,modifiers:[{name:'flip',options:{fallbackPlacements:this._config.fallbackPlacements}},{name:'offset',options:{offset:this._getOffset()}},{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'arrow',options:{element:`.${this.constructor.NAME}-arrow`}},{name:'preSetPlacement',enabled:!0,phase:'beforeMain',fn:s=>{
this._getTipElement().setAttribute('data-popper-placement',s.state.placement)
}}]};return{...n,...Ee(this._config.popperConfig,[n])}
}_setListeners(){
const t=this._config.trigger.split(' ');for(const n of t){
if(n==='click'){
V.on(this._element,this.constructor.eventName(yD),this._config.selector,s=>{
this._initializeOnDelegatedTarget(s).toggle()
})
}else if(n!==mD){
const s=n===Ii?this.constructor.eventName(wD):this.constructor.eventName(AD),i=n===Ii?this.constructor.eventName(SD):this.constructor.eventName(TD);V.on(this._element,s,this._config.selector,o=>{
const a=this._initializeOnDelegatedTarget(o);a._activeTrigger[o.type==='focusin'?Za:Ii]=!0,a._enter()
}),V.on(this._element,i,this._config.selector,o=>{
const a=this._initializeOnDelegatedTarget(o);a._activeTrigger[o.type==='focusout'?Za:Ii]=a._element.contains(o.relatedTarget),a._leave()
})
}
}this._hideModalHandler=()=>{
this._element&&this.hide()
},V.on(this._element.closest(Ld),$d,this._hideModalHandler)
}_fixTitle(){
const t=this._element.getAttribute('title');t&&(!this._element.getAttribute('aria-label')&&!this._element.textContent.trim()&&this._element.setAttribute('aria-label',t),this._element.setAttribute('data-bs-original-title',t),this._element.removeAttribute('title'))
}_enter(){
if(this._isShown()||this._isHovered){
this._isHovered=!0;return
}this._isHovered=!0,this._setTimeout(()=>{
this._isHovered&&this.show()
},this._config.delay.show)
}_leave(){
this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{
this._isHovered||this.hide()
},this._config.delay.hide))
}_setTimeout(t,n){
clearTimeout(this._timeout),this._timeout=setTimeout(t,n)
}_isWithActiveTrigger(){
return Object.values(this._activeTrigger).includes(!0)
}_getConfig(t){
const n=vn.getDataAttributes(this._element);for(const s of Object.keys(n)){
fD.has(s)&&delete n[s]
}return t={...n,...typeof t==='object'&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t
}_configAfterMerge(t){
return t.container=t.container===!1?document.body:Mn(t.container),typeof t.delay==='number'&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title==='number'&&(t.title=t.title.toString()),typeof t.content==='number'&&(t.content=t.content.toString()),t
}_getDelegateConfig(){
const t={};for(const[n,s]of Object.entries(this._config)){
this.constructor.Default[n]!==s&&(t[n]=s)
}return t.selector=!1,t.trigger='manual',t
}_disposePopper(){
this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)
}static jQueryInterface(t){
return this.each(function(){
const n=ws.getOrCreateInstance(this,t);if(typeof t==='string'){
if(typeof n[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}
}je(ws);const DD='popover',RD='.popover-header',LD='.popover-body',$D={...ws.Default,content:'',offset:[0,8],placement:'right',template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:'click'},xD={...ws.DefaultType,content:'(null|string|element|function)'};class qo extends ws{
static get Default(){
return $D
}static get DefaultType(){
return xD
}static get NAME(){
return DD
}_isWithContent(){
return this._getTitle()||this._getContent()
}_getContentForTemplate(){
return{[RD]:this._getTitle(),[LD]:this._getContent()}
}_getContent(){
return this._resolvePossibleFunction(this._config.content)
}static jQueryInterface(t){
return this.each(function(){
const n=qo.getOrCreateInstance(this,t);if(typeof t==='string'){
if(typeof n[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}
}je(qo);const ID='scrollspy',PD='bs.scrollspy',bc=`.${PD}`,MD='.data-api',kD=`activate${bc}`,xd=`click${bc}`,VD=`load${bc}${MD}`,HD='dropdown-item',Us='active',FD='[data-bs-spy="scroll"]',tl='[href]',jD='.nav, .list-group',Id='.nav-link',BD='.nav-item',WD='.list-group-item',UD=`${Id}, ${BD} > ${Id}, ${WD}`,KD='.dropdown',qD='.dropdown-toggle',YD={offset:null,rootMargin:'0px 0px -25%',smoothScroll:!1,target:null,threshold:[.1,.5,1]},zD={offset:'(number|null)',rootMargin:'string',smoothScroll:'boolean',target:'element',threshold:'array'};class ur extends Qe{
constructor(t,n){
super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==='visible'?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()
}static get Default(){
return YD
}static get DefaultType(){
return zD
}static get NAME(){
return ID
}refresh(){
this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values()){
this._observer.observe(t)
}
}dispose(){
this._observer.disconnect(),super.dispose()
}_configAfterMerge(t){
return t.target=Mn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold==='string'&&(t.threshold=t.threshold.split(',').map(n=>Number.parseFloat(n))),t
}_maybeEnableSmoothScroll(){
this._config.smoothScroll&&(V.off(this._config.target,xd),V.on(this._config.target,xd,tl,t=>{
const n=this._observableSections.get(t.target.hash);if(n){
t.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){
s.scrollTo({top:i,behavior:'smooth'});return
}s.scrollTop=i
}
}))
}_getNewObserver(){
const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)
}_observerCallback(t){
const n=a=>this._targetLinks.get(`#${a.target.id}`),s=a=>{
this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(n(a))
},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const a of t){
if(!a.isIntersecting){
this._activeTarget=null,this._clearActiveClass(n(a));continue
}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&c){
if(s(a),!i){
return
}continue
}!o&&!c&&s(a)
}
}_initializeTargetsAndObservables(){
this._targetLinks=new Map,this._observableSections=new Map;const t=tt.find(tl,this._config.target);for(const n of t){
if(!n.hash||kn(n)){
continue
}const s=tt.findOne(decodeURI(n.hash),this._element);mi(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))
}
}_process(t){
this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Us),this._activateParents(t),V.trigger(this._element,kD,{relatedTarget:t}))
}_activateParents(t){
if(t.classList.contains(HD)){
tt.findOne(qD,t.closest(KD)).classList.add(Us);return
}for(const n of tt.parents(t,jD)){
for(const s of tt.prev(n,UD)){
s.classList.add(Us)
}
}
}_clearActiveClass(t){
t.classList.remove(Us);const n=tt.find(`${tl}.${Us}`,t);for(const s of n){
s.classList.remove(Us)
}
}static jQueryInterface(t){
return this.each(function(){
const n=ur.getOrCreateInstance(this,t);if(typeof t==='string'){
if(n[t]===void 0||t.startsWith('_')||t==='constructor'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}
}V.on(window,VD,()=>{
for(const e of tt.find(FD)){
ur.getOrCreateInstance(e)
}
});je(ur);const GD='tab',XD='bs.tab',Ss=`.${XD}`,QD=`hide${Ss}`,JD=`hidden${Ss}`,ZD=`show${Ss}`,tR=`shown${Ss}`,eR=`click${Ss}`,nR=`keydown${Ss}`,sR=`load${Ss}`,iR='ArrowLeft',Pd='ArrowRight',rR='ArrowUp',Md='ArrowDown',el='Home',kd='End',fs='active',Vd='fade',nl='show',oR='dropdown',$m='.dropdown-toggle',aR='.dropdown-menu',sl=`:not(${$m})`,lR='.list-group, .nav, [role="tablist"]',cR='.nav-item, .list-group-item',uR=`.nav-link${sl}, .list-group-item${sl}, [role="tab"]${sl}`,xm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',il=`${uR}, ${xm}`,fR=`.${fs}[data-bs-toggle="tab"], .${fs}[data-bs-toggle="pill"], .${fs}[data-bs-toggle="list"]`;class ys extends Qe{
constructor(t){
super(t),this._parent=this._element.closest(lR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),V.on(this._element,nR,n=>this._keydown(n)))
}static get NAME(){
return GD
}show(){
const t=this._element;if(this._elemIsActive(t)){
return
}const n=this._getActiveElem(),s=n?V.trigger(n,QD,{relatedTarget:t}):null;V.trigger(t,ZD,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))
}_activate(t,n){
if(!t){
return
}t.classList.add(fs),this._activate(tt.getElementFromSelector(t));const s=()=>{
if(t.getAttribute('role')!=='tab'){
t.classList.add(nl);return
}t.removeAttribute('tabindex'),t.setAttribute('aria-selected',!0),this._toggleDropDown(t,!0),V.trigger(t,tR,{relatedTarget:n})
};this._queueCallback(s,t,t.classList.contains(Vd))
}_deactivate(t,n){
if(!t){
return
}t.classList.remove(fs),t.blur(),this._deactivate(tt.getElementFromSelector(t));const s=()=>{
if(t.getAttribute('role')!=='tab'){
t.classList.remove(nl);return
}t.setAttribute('aria-selected',!1),t.setAttribute('tabindex','-1'),this._toggleDropDown(t,!1),V.trigger(t,JD,{relatedTarget:n})
};this._queueCallback(s,t,t.classList.contains(Vd))
}_keydown(t){
if(![iR,Pd,rR,Md,el,kd].includes(t.key)){
return
}t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(i=>!kn(i));let s;if([el,kd].includes(t.key)){
s=n[t.key===el?0:n.length-1]
}else{
const i=[Pd,Md].includes(t.key);s=gc(n,t.target,i,!0)
}s&&(s.focus({preventScroll:!0}),ys.getOrCreateInstance(s).show())
}_getChildren(){
return tt.find(il,this._parent)
}_getActiveElem(){
return this._getChildren().find(t=>this._elemIsActive(t))||null
}_setInitialAttributes(t,n){
this._setAttributeIfNotExists(t,'role','tablist');for(const s of n){
this._setInitialAttributesOnChild(s)
}
}_setInitialAttributesOnChild(t){
t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute('aria-selected',n),s!==t&&this._setAttributeIfNotExists(s,'role','presentation'),n||t.setAttribute('tabindex','-1'),this._setAttributeIfNotExists(t,'role','tab'),this._setInitialAttributesOnTargetPanel(t)
}_setInitialAttributesOnTargetPanel(t){
const n=tt.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,'role','tabpanel'),t.id&&this._setAttributeIfNotExists(n,'aria-labelledby',`${t.id}`))
}_toggleDropDown(t,n){
const s=this._getOuterElement(t);if(!s.classList.contains(oR)){
return
}const i=(o,a)=>{
const c=tt.findOne(o,s);c&&c.classList.toggle(a,n)
};i($m,fs),i(aR,nl),s.setAttribute('aria-expanded',n)
}_setAttributeIfNotExists(t,n,s){
t.hasAttribute(n)||t.setAttribute(n,s)
}_elemIsActive(t){
return t.classList.contains(fs)
}_getInnerElement(t){
return t.matches(il)?t:tt.findOne(il,t)
}_getOuterElement(t){
return t.closest(cR)||t
}static jQueryInterface(t){
return this.each(function(){
const n=ys.getOrCreateInstance(this);if(typeof t==='string'){
if(n[t]===void 0||t.startsWith('_')||t==='constructor'){
throw new TypeError(`No method named "${t}"`)
}n[t]()
}
})
}
}V.on(document,eR,xm,function(e){
['A','AREA'].includes(this.tagName)&&e.preventDefault(),!kn(this)&&ys.getOrCreateInstance(this).show()
});V.on(window,sR,()=>{
for(const e of tt.find(fR)){
ys.getOrCreateInstance(e)
}
});je(ys);const dR='toast',hR='bs.toast',Wn=`.${hR}`,pR=`mouseover${Wn}`,mR=`mouseout${Wn}`,_R=`focusin${Wn}`,gR=`focusout${Wn}`,ER=`hide${Wn}`,vR=`hidden${Wn}`,bR=`show${Wn}`,yR=`shown${Wn}`,AR='fade',Hd='hide',Ur='show',Kr='showing',TR={animation:'boolean',autohide:'boolean',delay:'number'},wR={animation:!0,autohide:!0,delay:5e3};class fr extends Qe{
constructor(t,n){
super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()
}static get Default(){
return wR
}static get DefaultType(){
return TR
}static get NAME(){
return dR
}show(){
if(V.trigger(this._element,bR).defaultPrevented){
return
}this._clearTimeout(),this._config.animation&&this._element.classList.add(AR);const n=()=>{
this._element.classList.remove(Kr),V.trigger(this._element,yR),this._maybeScheduleHide()
};this._element.classList.remove(Hd),rr(this._element),this._element.classList.add(Ur,Kr),this._queueCallback(n,this._element,this._config.animation)
}hide(){
if(!this.isShown()||V.trigger(this._element,ER).defaultPrevented){
return
}const n=()=>{
this._element.classList.add(Hd),this._element.classList.remove(Kr,Ur),V.trigger(this._element,vR)
};this._element.classList.add(Kr),this._queueCallback(n,this._element,this._config.animation)
}dispose(){
this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ur),super.dispose()
}isShown(){
return this._element.classList.contains(Ur)
}_maybeScheduleHide(){
this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{
this.hide()
},this._config.delay)))
}_onInteraction(t,n){
switch(t.type){
case'mouseover':case'mouseout':{this._hasMouseInteraction=n;break}case'focusin':case'focusout':{this._hasKeyboardInteraction=n;break}
}if(n){
this._clearTimeout();return
}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()
}_setListeners(){
V.on(this._element,pR,t=>this._onInteraction(t,!0)),V.on(this._element,mR,t=>this._onInteraction(t,!1)),V.on(this._element,_R,t=>this._onInteraction(t,!0)),V.on(this._element,gR,t=>this._onInteraction(t,!1))
}_clearTimeout(){
clearTimeout(this._timeout),this._timeout=null
}static jQueryInterface(t){
return this.each(function(){
const n=fr.getOrCreateInstance(this,t);if(typeof t==='string'){
if(typeof n[t]>'u'){
throw new TypeError(`No method named "${t}"`)
}n[t](this)
}
})
}
}Ko(fr);je(fr);const SR=Object.freeze(Object.defineProperty({__proto__:null,Alert:ar,Button:lr,Carousel:gi,Collapse:fi,Dropdown:ze,Modal:bs,Offcanvas:yn,Popover:qo,ScrollSpy:ur,Tab:ys,Toast:fr,Tooltip:ws},Symbol.toStringTag,{value:'Module'})),Im=bA(xT);Im.use(AS);Im.mount('#app');window.bootstrap=SR;export{ry as A,sn as F,ap as R,OT as _,te as a,fo as b,Ql as c,Ib as d,Ke as e,HR as f,jR as g,xp as h,Hl as i,fL as j,Gt as k,UR as l,BR as m,Vl as n,$o as o,ml as p,cL as q,FR as r,vS as s,db as t,Pn as u,WR as v,zr as w,uL as x,ky as y,zl as z}

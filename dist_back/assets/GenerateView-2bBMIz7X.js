import{c as o,o as n,a as e,b as m,F as A,r as j,t as h,d as f,w as L,e as E,f as I,g as C,v as z,h as G,u as O,n as Y,i as J,j as Q,k as x,l as W,m as V,p as X,q as Z,s as B,x as ee,y as M,z as te,A as se}from'./index-2IPltK50.js';function ie(r){
const v=document.getElementById(r);if(!v){
return console.error(`Modal element with id ${r} not found`),null
}const l=new window.bootstrap.Modal(v);return l.show(),l
}const ae={class:'mb-4'},le=['value'],ne=['value'],oe={__name:'MunicipalitySelect',props:{modelValue:String},emits:['update:modelValue'],setup(r,{emit:v}){
const l=[{id:'Alytaus m. sav.',name:'Alytaus m. sav.'},{id:'Alytaus r. sav.',name:'Alytaus r. sav.'},{id:'Birštono sav.',name:'Birštono sav.'},{id:'Kaišiadorių r. sav.',name:'Kaišiadorių r. sav.'},{id:'Kauno m. sav.',name:'Kauno m. sav.'},{id:'Kauno r. sav.',name:'Kauno r. sav.'},{id:'Prienų r. sav.',name:'Prienų r. sav.'},{id:'Vilniaus m. sav.',name:'Vilniaus m. sav.'}];return(u,i)=>(n(),o('div',ae,[i[2]||(i[2]=e('label',{for:'municipality',class:'form-label'},[m('Savivaldybė '),e('span',{class:'text-danger'},'*')],-1)),e('select',{id:'municipality',class:'form-select',value:r.modelValue,onInput:i[0]||(i[0]=t=>u.$emit('update:modelValue',t.target.value)),required:''},[i[1]||(i[1]=e('option',{value:''},'Pasirinkite savivaldybę',-1)),(n(),o(A,null,j(l,t=>e('option',{key:t.id,value:t.id},h(t.name),9,ne)),64))],40,le)]))
}};function H(r,v){
let l;return function(...i){
const t=()=>{
clearTimeout(l),r(...i)
};clearTimeout(l),l=setTimeout(t,v)
}
}const re={class:'mb-3 position-relative'},ue=['disabled'],de={key:0,class:'spinner-border spinner-border-sm text-primary position-absolute end-0 me-4 top-50 translate-middle-y',role:'status'},ce={key:1,class:'dropdown-menu d-block w-100 shadow-sm',style:{'max-height':'200px','overflow-y':'auto'}},me=['onClick'],ve={key:2,class:'text-muted'},pe={__name:'CitySelect',props:{municipality:String,subDistrict:String,modelValue:String},emits:['update:modelValue'],setup(r,{emit:v}){
const l=r,u=v,i=f([]),t=f([]),s=f(l.modelValue),k=f(!1),b=f(!1),w=H(async($,_)=>{
if(!$){
i.value=[],t.value=[];return
}b.value=!0;try{
const p=await G.getCities($,_);i.value=p.cities||[],g()
}catch{
i.value=[]
}finally{
b.value=!1
}
},300);L(()=>[l.municipality,l.subDistrict],([$,_])=>{
w($,_),s.value=''
},{immediate:!0}),L(s,()=>{
g()
}),L(()=>l.modelValue,$=>{
if($){
const _=i.value.find(p=>p.value===$);_&&_.label!==s.value&&(s.value=_.label)
}else {
s.value=''
}
});function g(){
if(!s.value){
t.value=i.value
}else{
const $=s.value.toLowerCase();t.value=i.value.filter(_=>_.label.toLowerCase().includes($))
}
}function T($){
s.value=$.label,u('update:modelValue',$.value),k.value=!1
}function D($){
s.value=$.target.value,k.value=!0
}function c(){
g(),k.value=!0
}function S(){
setTimeout(()=>{
k.value=!1
},100)
}const U=E(()=>!l.municipality);return($,_)=>(n(),o('div',re,[_[1]||(_[1]=e('label',{for:'cityInput',class:'form-label'},'Pasirinkite miestą (nebūtina)',-1)),I(e('input',{type:'text',id:'cityInput',class:'form-control','onUpdate:modelValue':_[0]||(_[0]=p=>s.value=p),onInput:D,onFocus:c,onBlur:S,disabled:U.value,placeholder:'Pradėkite rašyti miesto pavadinimą...',autocomplete:'off'},null,40,ue),[[z,s.value]]),b.value?(n(),o('div',de)):C('',!0),k.value&&t.value.length>0?(n(),o('div',ce,[(n(!0),o(A,null,j(t.value,p=>(n(),o('button',{type:'button',class:'dropdown-item',key:p.value,onClick:a=>T(p)},h(p.label),9,me))),128))])):C('',!0),U.value?(n(),o('small',ve,'Prieš ieškant miesto, pasirinkite savivaldybę')):C('',!0)]))
}},be={class:'mb-4 street-search-container'},ye={class:'input-group'},fe=['value','placeholder','disabled','title'],ge={key:0,class:'spinner-border spinner-border-sm text-primary position-absolute end-0 me-4 top-50 translate-middle-y',role:'status'},ke={key:0,class:'dropdown-menu d-block w-100 shadow-sm'},$e={class:'p-2 text-muted small border-bottom'},he={style:{'max-height':'200px','overflow-y':'auto'}},_e=['onClick'],De={key:1,class:'text-muted'},Se={key:2,class:'text-muted'},we={class:'mb-4'},xe={class:'input-group'},Ce=['value'],Ne={__name:'StreetAutocomplete',props:{street:{type:String,default:''},houseNumber:String,municipality:String,subDistrict:String,city:String},emits:['update:street','update:houseNumber'],setup(r,{emit:v}){
const l=r,u=v,i=f([]),t=f(!1),s=f(!1),k=E(()=>!l.municipality),b=E(()=>k.value?'Pirma pasirinkite savivaldybę':'Įveskite gatvės pavadinimą'),w=H(async D=>{
if(!l.municipality||!D||D.length<2){
i.value=[],s.value=!1;return
}try{
t.value=!0;const c=await G.getStreets(l.municipality,l.subDistrict,l.city,D||'');i.value=Array.isArray(c)?c.map(S=>typeof S==='object'?S.value:S):[],s.value=i.value.length>0
}catch(c){
console.error('Error fetching streets:',c),i.value=[]
}finally{
t.value=!1
}
},300);function g(D){
const c=D.target.value;u('update:street',c),c.length>=2?w(c):(i.value=[],s.value=!1)
}function T(D){
u('update:street',D),s.value=!1
}return(D,c)=>(n(),o('div',null,[e('div',be,[c[5]||(c[5]=e('label',{for:'street',class:'form-label'},[m('Gatvė '),e('span',{class:'text-danger'},'*')],-1)),e('div',ye,[c[2]||(c[2]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-signpost'})],-1)),e('input',{type:'text',class:'form-control',id:'street',value:r.street,onInput:g,placeholder:b.value,disabled:k.value,title:k.value?'Pirma pasirinkite savivaldybę':'',autocomplete:'off',required:''},null,40,fe),t.value?(n(),o('div',ge,c[1]||(c[1]=[e('span',{class:'visually-hidden'},'Kraunama...',-1)]))):C('',!0)]),s.value&&i.value.length>0?(n(),o('div',ke,[e('div',$e,[c[3]||(c[3]=e('i',{class:'bi bi-info-circle me-1'},null,-1)),m(' Rasta '+h(i.value.length)+' '+h(i.value.length===1?'gatvė':'gatvės'),1)]),e('div',he,[(n(!0),o(A,null,j(i.value,S=>(n(),o('button',{type:'button',class:'dropdown-item',key:S,onClick:U=>T(S)},h(S),9,_e))),128))])])):C('',!0),k.value?(n(),o('small',Se,c[4]||(c[4]=[e('i',{class:'bi bi-info-circle me-1'},null,-1),m(' Prieš ieškant gatvės, pasirinkite savivaldybę ')]))):(n(),o('small',De,'Pradėkite rašyti ir pasirinkite gatvę iš sąrašo'))]),e('div',we,[c[7]||(c[7]=e('label',{for:'houseNumber',class:'form-label'},[m('Namo numeris '),e('span',{class:'text-danger'},'*')],-1)),e('div',xe,[c[6]||(c[6]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-house'})],-1)),e('input',{type:'text',class:'form-control',id:'houseNumber',value:r.houseNumber,onInput:c[0]||(c[0]=S=>D.$emit('update:houseNumber',S.target.value)),placeholder:'Pvz.: 1, 2A, 15B',required:''},null,40,Ce)])])]))
}},Pe={class:'row'},Ae={class:'col-md-6 mb-4'},Te={class:'input-group'},je=['value'],Ue={class:'col-md-6 mb-4'},Ie={class:'input-group'},Ee=['value'],Ve={__name:'DateRangeSelection',props:{startDate:String,endDate:String},emits:['update:startDate','update:endDate'],setup(r,{emit:v}){
const l=r,u=v;if(!l.startDate){
const i=new Date;u('update:startDate',i.toISOString().split('T')[0]);const t=new Date;t.setFullYear(i.getFullYear()+1),u('update:endDate',t.toISOString().split('T')[0])
}return(i,t)=>(n(),o('div',Pe,[e('div',Ae,[t[3]||(t[3]=e('label',{for:'startDate',class:'form-label'},[m('Pradžios data '),e('span',{class:'text-danger'},'*')],-1)),e('div',Te,[t[2]||(t[2]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-calendar'})],-1)),e('input',{type:'date',class:'form-control',id:'startDate',value:r.startDate,onInput:t[0]||(t[0]=s=>i.$emit('update:startDate',s.target.value)),required:''},null,40,je)])]),e('div',Ue,[t[5]||(t[5]=e('label',{for:'endDate',class:'form-label'},[m('Pabaigos data '),e('span',{class:'text-danger'},'*')],-1)),e('div',Ie,[t[4]||(t[4]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-calendar'})],-1)),e('input',{type:'date',class:'form-control',id:'endDate',value:r.endDate,onInput:t[1]||(t[1]=s=>i.$emit('update:endDate',s.target.value)),required:''},null,40,Ee)])])]))
}},Le={class:'mb-4'},Re={class:'form-check mb-2'},Ge=['checked'],Me={key:0,class:'row g-3'},qe={class:'col-md-6'},Fe={class:'input-group'},Ke=['value'],Oe=['value'],Be={class:'col-md-6'},He={class:'input-group'},ze=['value'],Ye={__name:'ReminderSettings',props:{enabled:Boolean,time:String,notificationHour:{type:String,default:'09'}},emits:['update:enabled','update:time','update:notificationHour'],setup(r,{emit:v}){
const l=Array.from({length:24},(u,i)=>{
const t=i.toString().padStart(2,'0');return{value:t,label:`${t}:00`}
});return(u,i)=>(n(),o('div',Le,[i[8]||(i[8]=e('label',{class:'form-label'},'Priminimo nustatymai',-1)),e('div',Re,[e('input',{class:'form-check-input',type:'checkbox',id:'reminderEnabled',checked:r.enabled,onChange:i[0]||(i[0]=t=>u.$emit('update:enabled',t.target.checked))},null,40,Ge),i[3]||(i[3]=e('label',{class:'form-check-label',for:'reminderEnabled'},' Įjungti priminimą ',-1))]),r.enabled?(n(),o('div',Me,[e('div',qe,[e('div',Fe,[i[4]||(i[4]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-clock'})],-1)),e('select',{class:'form-select',value:r.notificationHour,onChange:i[1]||(i[1]=t=>u.$emit('update:notificationHour',t.target.value))},[(n(!0),o(A,null,j(O(l),t=>(n(),o('option',{key:t.value,value:t.value},h(t.label),9,Oe))),128))],40,Ke),i[5]||(i[5]=e('span',{class:'input-group-text'},'val.',-1))])]),e('div',Be,[e('div',He,[i[7]||(i[7]=e('span',{class:'input-group-text'},[e('i',{class:'bi bi-alarm'})],-1)),e('select',{class:'form-select',value:r.time,onChange:i[2]||(i[2]=t=>u.$emit('update:time',t.target.value))},i[6]||(i[6]=[e('option',{value:'0'},'Tą pačią dieną',-1),e('option',{value:'1'},'1 dieną prieš',-1),e('option',{value:'2'},'2 dienas prieš',-1),e('option',{value:'7'},'1 savaitę prieš',-1)]),40,ze)])])])):C('',!0)]))
}},Je={class:'card shadow-sm mb-4'},Qe={class:'card-body'},We={key:0},Xe={key:1},Ze={class:'list-group'},et={key:0,class:'text-muted d-block'},tt={class:'text-muted d-block'},st=['onClick'],it={__name:'AddressSelection',props:{addresses:{type:Array,required:!0}},emits:['addressSelected'],setup(r,{emit:v}){
const l=v;function u(i){
l('addressSelected',i)
}return(i,t)=>(n(),o('div',Je,[t[0]||(t[0]=e('div',{class:'card-header bg-info text-white'},[e('h3',{class:'h5 m-0'},'Rasti adresai')],-1)),e('div',Qe,[r.addresses.length>1?(n(),o('p',We,'Rasta keli adresai. Pasirinkite tinkamiausią:')):(n(),o('p',Xe,'Rastas adresas. Patvirtinkite pasirinkimą:')),e('ul',Ze,[(n(!0),o(A,null,j(r.addresses,s=>(n(),o('li',{key:s.id,class:'list-group-item d-flex justify-content-between align-items-center'},[e('div',null,[e('strong',null,h(s.street)+' '+h(s.houseNumber),1),m(', '+h(s.city)+' ',1),s.subDistrict?(n(),o('small',et,'Seniūnija: '+h(s.subDistrict),1)):C('',!0),e('small',tt,'Sutarties Nr.: '+h(s.contractNumber),1)]),e('button',{class:'btn btn-primary btn-sm',onClick:k=>u(s)},' Pasirinkti ',8,st)]))),128))])])]))
}},at={class:'steps mb-4'},lt={class:'step-progress'},nt={class:'progress',style:{height:'2px'}},ot={class:'d-flex justify-content-between'},rt={class:'step-number'},ut={class:'step-title'},dt={__name:'StepIndicator',props:{currentStep:{type:Number,required:!0}},setup(r){
const v=[{number:1,title:'Adresas'},{number:2,title:'Nustatymai'},{number:3,title:'Generavimas'}];return(l,u)=>(n(),o('div',at,[e('div',lt,[e('div',nt,[e('div',{class:'progress-bar',style:Y({width:`${(r.currentStep-1)/(v.length-1)*100}%`})},null,4)])]),e('div',ot,[(n(),o(A,null,j(v,i=>e('div',{key:i.number,class:J(['step-item text-center',{active:i.number===r.currentStep,completed:i.number<r.currentStep}])},[e('div',rt,h(i.number),1),e('div',ut,h(i.title),1)],2)),64))])]))
}},ct={class:'card shadow-sm'},mt={class:'card-body'},vt={class:'d-grid mb-4'},pt=['disabled'],bt={key:0,class:'spinner-border spinner-border-sm me-2',role:'status'},yt={key:1,class:'bi bi-search me-2'},ft={class:'d-flex gap-2'},gt=['disabled'],kt={class:'card mb-4'},$t={class:'card-body'},ht={class:'d-grid gap-2 mb-3'},_t=['href'],Dt=['href'],St=['href'],wt={class:'accordion',id:'calendarOptions'},xt={class:'accordion-item'},Ct={id:'downloadOption',class:'accordion-collapse collapse','data-bs-parent':'#calendarOptions'},Nt={class:'accordion-body'},Pt={class:'accordion-item'},At={id:'urlOption',class:'accordion-collapse collapse','data-bs-parent':'#calendarOptions'},Tt={class:'accordion-body'},jt={class:'input-group'},Ut=['value'],It={key:0,class:'card bg-light mb-3'},Et={class:'card-body'},Vt={class:'mb-0',style:{'white-space':'pre-wrap'}},q=1,F=2,R=3,K=4,Lt={__name:'GenerateForm',emits:['submit'],setup(r,{emit:v}){
const l=f([]),u=f(''),i=f(''),t=f(!1),s=f({municipality:'',subDistrict:'',city:'',street:'',houseNumber:'',startDate:'',endDate:'',reminderEnabled:!1,reminderTime:'1',notificationHour:'18'}),k=f([]),b=f(!1),w=f(!1),g=f(1),T=E(()=>g.value===1?s.value.municipality&&s.value.street&&s.value.houseNumber:g.value===2?k.value.length>0:g.value===3?s.value.startDate&&s.value.endDate:!1),D=E(()=>i.value?Q(i.value):null);function c(){
g.value>q&&g.value--
}async function S(){
if(!(!s.value.municipality||!s.value.street||!s.value.houseNumber)){
try{
w.value=!0;const a=(await G.getTrashBins({street:s.value.street,municipality:s.value.municipality,houseNumber:s.value.houseNumber,subDistrict:s.value.subDistrict,city:s.value.city})).data||[],N=new Map;a.forEach(d=>{
const y=`${d.street}-${d.house}-${d.region}-${d.subDistrict||''}-${d.city||''}`;N.has(y)||N.set(y,{street:d.street,houseNumber:d.house,municipality:d.region,subDistrict:d.subDistrict,city:d.city,relatedCollections:[]}),N.get(y).relatedCollections.push(d)
});const P=Array.from(N.values());if(P.length>1){
k.value=P.map(d=>({id:`${d.street}-${d.houseNumber}-${d.municipality}-${d.subDistrict||''}-${d.city||''}`,street:d.street,houseNumber:d.houseNumber,municipality:d.municipality,subDistrict:d.subDistrict,city:d.city,relatedCollections:d.relatedCollections})),g.value=F
}else if(P.length===1){
const d=P[0];s.value.street=d.street,s.value.houseNumber=d.houseNumber,s.value.municipality=d.municipality,s.value.subDistrict=d.subDistrict,s.value.city=d.city,l.value=d.relatedCollections,b.value=l.value.length>0,b.value?g.value=R:alert('Nerasta atliekų išvežimo grafikų šiuo adresu. Prašome patikrinti adresą ir bandyti dar kartą.')
}else {
b.value=!1,l.value=[],alert('Nerasta atliekų išvežimo grafikų šiuo adresu. Prašome patikrinti adresą ir bandyti dar kartą.')
}
}catch(p){
console.error('Error validating address:',p),b.value=!1,l.value=[],alert('Įvyko klaida tikrinant adresą. Prašome bandyti vėliau.')
}finally{
w.value=!1
}
}
}async function U(p){
s.value.street=p.street,s.value.houseNumber=p.houseNumber,s.value.municipality=p.municipality,s.value.subDistrict=p.subDistrict,s.value.city=p.city,l.value=p.relatedCollections,b.value=l.value.length>0,b.value?g.value=R:alert('Nerasta atliekų išvežimo grafikų šiuo adresu. Prašome patikrinti adresą ir bandyti dar kartą.')
}async function $(){
if(T.value){
try{
g.value=K;const p=await B({...s.value,collections:l.value});u.value=p,console.log('GenerateForm: FormData city before generateFeedUrl:',s.value.city),i.value=ee({...s.value,collections:l.value})
}catch(p){
console.error('Failed to generate calendar:',p),alert('Įvyko klaida generuojant kalendorių. Prašome bandyti vėliau.')
}
}
}function _(){
navigator.clipboard.writeText(i.value).then(()=>alert('Nuoroda nukopijuota!')).catch(()=>alert('Nepavyko nukopijuoti nuorodos'))
}return(p,a)=>{
let N,P,d;return n(),o('div',ct,[a[27]||(a[27]=e('div',{class:'card-header bg-primary text-white'},[e('h2',{class:'h5 m-0'},'Asmeninio Atliekų Išvežimo Grafiko Generavimas Lietuvoje')],-1)),e('div',mt,[x(dt,{'current-step':g.value},null,8,['current-step']),e('form',{onSubmit:W($,['prevent'])},[I(e('div',null,[x(oe,{modelValue:s.value.municipality,'onUpdate:modelValue':a[0]||(a[0]=y=>s.value.municipality=y)},null,8,['modelValue']),x(pe,{modelValue:s.value.city,'onUpdate:modelValue':a[1]||(a[1]=y=>s.value.city=y),municipality:s.value.municipality,subDistrict:s.value.subDistrict},null,8,['modelValue','municipality','subDistrict']),x(Ne,{street:s.value.street,'onUpdate:street':a[2]||(a[2]=y=>s.value.street=y),houseNumber:s.value.houseNumber,'onUpdate:houseNumber':a[3]||(a[3]=y=>s.value.houseNumber=y),municipality:s.value.municipality,subDistrict:s.value.subDistrict,city:s.value.city},null,8,['street','houseNumber','municipality','subDistrict','city']),e('div',vt,[e('button',{type:'button',class:'btn btn-primary',onClick:S,disabled:!s.value.municipality||!s.value.street||!s.value.houseNumber||w.value},[w.value?(n(),o('span',bt)):(n(),o('i',yt)),m(' '+h(w.value?'Tikrinama...':'Tęsti'),1)],8,pt)])],512),[[V,g.value===q]]),I(e('div',null,[x(it,{addresses:k.value,onAddressSelected:U},null,8,['addresses']),e('div',{class:'d-flex gap-2'},[e('button',{type:'button',class:'btn btn-outline-secondary',onClick:c},a[10]||(a[10]=[e('i',{class:'bi bi-arrow-left me-2'},null,-1),m('Atgal ')]))])],512),[[V,g.value===F]]),I(e('div',null,[x(Ve,{startDate:s.value.startDate,'onUpdate:startDate':a[4]||(a[4]=y=>s.value.startDate=y),endDate:s.value.endDate,'onUpdate:endDate':a[5]||(a[5]=y=>s.value.endDate=y)},null,8,['startDate','endDate']),x(Ye,{enabled:s.value.reminderEnabled,'onUpdate:enabled':a[6]||(a[6]=y=>s.value.reminderEnabled=y),time:s.value.reminderTime,'onUpdate:time':a[7]||(a[7]=y=>s.value.reminderTime=y),notificationHour:s.value.notificationHour,'onUpdate:notificationHour':a[8]||(a[8]=y=>s.value.notificationHour=y)},null,8,['enabled','time','notificationHour']),a[13]||(a[13]=X('<div class="alert alert-info"><h5 class="alert-heading"><i class="bi bi-info-circle me-2"></i>Papildomi priminimai</h5><p class="mb-2">Galite nustatyti papildomus priminimus savo kalendoriaus programoje:</p><div class="ms-3"><strong>Google Calendar:</strong><ol class="mb-2 small"><li>Eikite į kalendoriaus nustatymus (3 taškai prie kalendoriaus pavadinimo)</li><li>Pasirinkite &quot;Notifications&quot;</li><li>Nustatykite numatytuosius priminimus visiems įvykiams</li></ol><strong>Outlook:</strong><ol class="mb-2 small"><li>Atidarykite kalendoriaus nustatymus</li><li>Pasirinkite &quot;Calendar options&quot;</li><li>Nustatykite &quot;Default reminders&quot;</li></ol><strong>Apple Calendar:</strong><ol class="mb-2 small"><li>Eikite į Calendar nustatymus</li><li>Pasirinkite &quot;Alerts&quot;</li><li>Nustatykite numatytuosius priminimus</li></ol></div></div>',1)),e('div',ft,[e('button',{type:'button',class:'btn btn-outline-secondary',onClick:c},a[11]||(a[11]=[e('i',{class:'bi bi-arrow-left me-2'},null,-1),m('Atgal ')])),e('button',{type:'submit',class:'btn btn-primary flex-grow-1',disabled:!T.value},a[12]||(a[12]=[e('i',{class:'bi bi-calendar-check me-2'},null,-1),m('Generuoti kalendorių ')]),8,gt)])],512),[[V,g.value===R]]),I(e('div',null,[a[26]||(a[26]=e('div',{class:'text-center mb-4'},[e('i',{class:'bi bi-calendar2-check display-1 text-success'}),e('h3',{class:'mt-3'},'Kalendorius sugeneruotas!')],-1)),e('div',kt,[a[23]||(a[23]=e('div',{class:'card-header'},[e('h4',{class:'h6 mb-0'},'Kalendoriaus pridėjimo būdai')],-1)),e('div',$t,[e('div',ht,[e('a',{href:(N=D.value)==null?void 0:N.google,target:'_blank',class:'btn btn-lg btn-outline-primary'},a[14]||(a[14]=[e('i',{class:'bi bi-google me-2'},null,-1),m('Pridėti į Google Calendar ')]),8,_t),e('a',{href:(P=D.value)==null?void 0:P.outlook,target:'_blank',class:'btn btn-lg btn-outline-primary'},a[15]||(a[15]=[e('i',{class:'bi bi-microsoft me-2'},null,-1),m('Pridėti į Outlook ')]),8,Dt),e('a',{href:(d=D.value)==null?void 0:d.apple,class:'btn btn-lg btn-outline-primary'},a[16]||(a[16]=[e('i',{class:'bi bi-apple me-2'},null,-1),m('Pridėti į Apple Calendar ')]),8,St)]),e('div',wt,[e('div',xt,[a[19]||(a[19]=e('h2',{class:'accordion-header'},[e('button',{class:'accordion-button collapsed',type:'button','data-bs-toggle':'collapse','data-bs-target':'#downloadOption'},' Alternatyva 1: Parsisiųsti .ics failą ')],-1)),e('div',Ct,[e('div',Nt,[a[18]||(a[18]=e('p',null,'Parsisiųskite .ics failą ir importuokite į savo kalendoriaus programą.',-1)),e('button',{class:'btn btn-primary',onClick:a[9]||(a[9]=y=>O(Z)(u.value))},a[17]||(a[17]=[e('i',{class:'bi bi-download me-2'},null,-1),m('Atsisiųsti .ics failą ')]))])])]),e('div',Pt,[a[22]||(a[22]=e('h2',{class:'accordion-header'},[e('button',{class:'accordion-button collapsed',type:'button','data-bs-toggle':'collapse','data-bs-target':'#urlOption'},' Alternatyva 2: Kalendoriaus URL ')],-1)),e('div',At,[e('div',Tt,[a[21]||(a[21]=e('p',null,'Nukopijuokite kalendoriaus URL ir naudokite savo programoje:',-1)),e('div',jt,[e('input',{type:'text',class:'form-control',readonly:'',value:i.value},null,8,Ut),e('button',{class:'btn btn-outline-secondary',type:'button',onClick:_},a[20]||(a[20]=[e('i',{class:'bi bi-clipboard me-2'},null,-1),m('Kopijuoti ')]))])])])])])])]),t.value?(n(),o('div',It,[a[24]||(a[24]=e('div',{class:'card-header'},'Debug: Generated iCal Data',-1)),e('div',Et,[e('pre',Vt,h(u.value),1)])])):C('',!0),e('div',{class:'text-center'},[e('button',{type:'button',class:'btn btn-outline-primary',onClick:c},a[25]||(a[25]=[e('i',{class:'bi bi-arrow-left me-2'},null,-1),m('Generuoti kitą kalendorių ')]))])],512),[[V,g.value===K]])],32)])])
}
}},Rt={class:'modal fade',id:'deviceInstructionsModal',tabindex:'-1','aria-labelledby':'deviceInstructionsModalLabel','aria-hidden':'true'},Gt={class:'modal-dialog'},Mt={class:'modal-content'},qt={class:'modal-header'},Ft={class:'modal-title',id:'deviceInstructionsModalLabel'},Kt=['innerHTML'],Ot={__name:'InstructionsModal',setup(r){
const v={};return(l,u)=>(n(),o('div',Rt,[e('div',Gt,[e('div',Mt,[e('div',qt,[e('h5',Ft,h(v.title),1),u[0]||(u[0]=e('button',{type:'button',class:'btn-close','data-bs-dismiss':'modal','aria-label':'Close'},null,-1))]),e('div',{class:'modal-body',innerHTML:v.content},null,8,Kt),u[1]||(u[1]=e('div',{class:'modal-footer'},[e('button',{type:'button',class:'btn btn-primary','data-bs-dismiss':'modal'},'Supratau')],-1))])])]))
}},Bt={class:'card shadow-sm mb-4'},Ht={class:'card-body'},zt={class:'d-flex flex-column'},Yt={class:'mb-4'},Jt=['href'],Qt={class:'mb-4'},Wt={class:'input-group mb-3'},Xt=['value'],Zt={class:'mb-4'},es={class:'d-flex flex-wrap gap-2'},ts={class:'text-center'},ss={__name:'SuccessView',props:{calendarUrl:String,calendarDownloadUrl:String},emits:['reset'],setup(r,{emit:v}){
function l(i){
navigator.clipboard.writeText(i).then(()=>{
alert('URL nukopijuotas į iškarpinę!')
}).catch(t=>{
console.error('Nepavyko nukopijuoti teksto:',t)
})
}function u(i){
ie('deviceInstructionsModal')
}return(i,t)=>(n(),o(A,null,[e('div',Bt,[t[18]||(t[18]=e('div',{class:'card-header bg-success text-white'},[e('h2',{class:'h5 m-0'},[e('i',{class:'bi bi-check-circle me-2'}),m('Atliekų išvežimo grafikas Lietuvoje sėkmingai sugeneruotas')])],-1)),e('div',Ht,[t[17]||(t[17]=e('div',{class:'alert alert-info'},[e('p',null,[e('strong',null,'Sveikiname!'),m(' Jūsų atliekų išvežimo kalendorius paruoštas.')]),e('p',null,'Pasirinkite vieną iš žemiau pateiktų būdų, kad pridėtumėte jį į savo mobilųjį įrenginį ar kompiuterį.')],-1)),e('div',zt,[e('div',Yt,[t[6]||(t[6]=e('h5',{class:'mb-3'},'1. Atsisiųskite .ics failą',-1)),t[7]||(t[7]=e('p',null,'Atsisiųskite kalendoriaus failą ir importuokite jį į savo kalendoriaus programą.',-1)),e('a',{href:r.calendarDownloadUrl,download:'atlieku-grafikas.ics',class:'btn btn-primary'},t[5]||(t[5]=[e('i',{class:'bi bi-download me-2'},null,-1),m('Atsisiųsti .ics failą ')]),8,Jt)]),e('div',Qt,[t[9]||(t[9]=e('h5',{class:'mb-3'},'2. Naudokite kalendoriaus URL',-1)),t[10]||(t[10]=e('p',null,'Nukopijuokite URL ir pridėkite jį kaip prenumeruojamą kalendorių savo įrenginyje.',-1)),e('div',Wt,[e('input',{type:'text',class:'form-control',value:r.calendarUrl,readonly:''},null,8,Xt),e('button',{class:'btn btn-outline-secondary',type:'button',onClick:t[0]||(t[0]=s=>l(r.calendarUrl))},t[8]||(t[8]=[e('i',{class:'bi bi-clipboard me-1'},null,-1),m('Kopijuoti ')]))])]),e('div',Zt,[t[14]||(t[14]=e('h5',{class:'mb-3'},'Kaip importuoti kalendorių?',-1)),e('div',es,[e('button',{class:'btn btn-outline-secondary',onClick:t[1]||(t[1]=s=>u())},t[11]||(t[11]=[e('i',{class:'bi bi-apple me-2'},null,-1),m('iOS / iPhone ')])),e('button',{class:'btn btn-outline-secondary',onClick:t[2]||(t[2]=s=>u())},t[12]||(t[12]=[e('i',{class:'bi bi-android2 me-2'},null,-1),m('Android ')])),e('button',{class:'btn btn-outline-secondary',onClick:t[3]||(t[3]=s=>u())},t[13]||(t[13]=[e('i',{class:'bi bi-google me-2'},null,-1),m('Google Calendar ')]))])]),t[16]||(t[16]=e('hr',{class:'my-4'},null,-1)),e('div',ts,[e('button',{class:'btn btn-outline-primary',onClick:t[4]||(t[4]=s=>i.$emit('reset'))},t[15]||(t[15]=[e('i',{class:'bi bi-arrow-left me-2'},null,-1),m('Grįžti ir sukurti naują kalendorių ')]))])])])]),x(Ot)],64))
}},is={class:'container'},as={class:'row justify-content-center'},ls={class:'col-lg-8 col-md-10'},ns={'aria-label':'breadcrumb',class:'mb-4'},os={class:'breadcrumb'},rs={class:'breadcrumb-item'},us={key:0,class:'alert alert-danger mb-4'},cs={__name:'GenerateView',setup(r){
const v=f(!1),l=f(''),u=f(''),i=f('');async function t(k){
try{
const b=await B(k);l.value=b.calendarUrl,u.value=b.downloadUrl,v.value=!0
}catch(b){
i.value='Įvyko klaida generuojant kalendorių. Prašome bandyti vėliau.',console.error('Error:',b)
}
}function s(){
v.value=!1,l.value='',u.value='',i.value=''
}return(k,b)=>{
const w=se('RouterLink');return n(),o('div',is,[e('div',as,[e('div',ls,[e('nav',ns,[e('ol',os,[e('li',rs,[x(w,{to:'/'},{default:te(()=>b[0]||(b[0]=[m('Pradžia')])),_:1})]),b[1]||(b[1]=e('li',{class:'breadcrumb-item active','aria-current':'page'},'Kalendoriaus generavimas',-1))])]),i.value?(n(),o('div',us,[b[2]||(b[2]=e('i',{class:'bi bi-exclamation-triangle me-2'},null,-1)),m(h(i.value),1)])):C('',!0),v.value?(n(),M(ss,{key:1,'calendar-url':l.value,'calendar-download-url':u.value,onReset:s},null,8,['calendar-url','calendar-download-url'])):(n(),M(Lt,{key:2,onSubmit:t}))])])])
}
}};export{cs as default}

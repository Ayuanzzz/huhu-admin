var w=Object.defineProperty;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(a,e,s)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,d=(a,e)=>{for(var s in e||(e={}))x.call(e,s)&&_(a,s,e[s]);if(i)for(var s of i(e))F.call(e,s)&&_(a,s,e[s]);return a};import{_ as C}from"./index.1650542013096.js";import{m as g,t as E,q as o,D as u,F as f,r as y,aa as $,I as l,x as t,a0 as v,$ as h,w as p,C as m}from"./vendor.1650542013096.js";const k={name:"pagesWaterfall",setup(){const a=g({});return d({},E(a))}},D={class:"waterfall-container"},B={class:"waterfall-first"},I={class:"w100 h100 flex"},N={class:"flex-margin"},V={class:"waterfall-last"},b={class:"w100 h100 flex"},q={class:"flex-margin"};function L(a,e,s,R,S,W){const c=y("el-card"),n=$("waves");return l(),o("div",D,[u(c,{shadow:"hover",header:"\u7011\u5E03\u5C4F\uFF08\u5E03\u5C40\u4E00\uFF09",class:"mb15"},{default:f(()=>[t("div",B,[(l(),o(v,null,h(30,r=>p(t("div",{class:"waterfall-first-item",key:r},[t("div",I,[t("span",N,m(r),1)])]),[[n]])),64))])]),_:1}),u(c,{shadow:"hover",header:"\u7011\u5E03\u5C4F\uFF08\u5E03\u5C40\u4E8C\uFF09"},{default:f(()=>[t("div",V,[(l(),o(v,null,h(30,r=>p(t("div",{class:"waterfall-last-item",key:r},[t("div",b,[t("span",q,m(r),1)])]),[[n,"light"]])),64))])]),_:1})])}var G=C(k,[["render",L],["__scopeId","data-v-705c308c"]]);export{G as default};
var f=Object.defineProperty;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(e,o,t)=>o in e?f(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&m(e,t,o[t]);if(u)for(var t of u(o))v.call(o,t)&&m(e,t,o[t]);return e};import{i as y,m as C,L as h,o as k,p as S,t as b,S as I,F as L,T as $,I as a,w as g,v as B,q as r,x as i,a0 as E,$ as M,y as F,C as w,M as z,G as T,H as j}from"./vendor.1650541145390.js";import{_ as D}from"./index.1650541145390.js";const O=y({name:"pagesWorkflowContextmenu",props:{dropdown:{type:Object}},setup(e,{emit:o}){const t=C({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"\u5220\u9664",icon:"el-icon-delete"},{contextMenuClickId:1,txt:"\u7F16\u8F91",icon:"el-icon-edit-outline"}],item:{type:"node"},conn:{}}),d=h(()=>e.dropdown),c=s=>{o("current",Object.assign({},{contextMenuClickId:s},t.item),t.conn)},l=(s,p={})=>{t.item=s,t.conn=p,n(),setTimeout(()=>{t.isShow=!0},10)},n=()=>{t.isShow=!1};return k(()=>{document.body.addEventListener("click",n),document.body.addEventListener("contextmenu",n)}),S(()=>{document.body.removeEventListener("click",n),document.body.removeEventListener("contextmenu",n)}),_({dropdowns:d,openContextmenu:l,closeContextmenu:n,onCurrentClick:c},b(t))}}),q=e=>(T("data-v-0c7aff63"),e=e(),j(),e),G={class:"el-dropdown-menu"},H=["onClick"],N=q(()=>i("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1));function R(e,o,t,d,c,l){return a(),I($,{name:"el-zoom-in-center"},{default:L(()=>[g((a(),r("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:z(`top: ${e.dropdowns.y+5}px;left: ${e.dropdowns.x}px;`),key:Math.random()},[i("ul",G,[(a(!0),r(E,null,M(e.dropdownList,(n,s)=>(a(),r("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:s,onClick:p=>e.onCurrentClick(n.contextMenuClickId)},[i("i",{class:F(n.icon)},null,2),i("span",null,w(n.txt)+w(e.item.type==="line"?"\u7EBF":"\u8282\u70B9"),1)],8,H))),128))]),N],4)),[[B,e.isShow]])]),_:1})}var A=D(O,[["render",R],["__scopeId","data-v-0c7aff63"]]);export{A as default};

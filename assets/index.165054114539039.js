var u=Object.defineProperty;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))d.call(t,s)&&c(e,s,t[s]);if(r)for(var s of r(t))h.call(t,s)&&c(e,s,t[s]);return e};import{_ as l}from"./index.1650541145390.js";import{m,t as _,q as f,D as p,F as g,r as a,I as v}from"./vendor.1650541145390.js";const F={name:"pagesPreview",setup(){const e=m({url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",srcList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]});return o({},_(e))}},x={class:"preview-container"};function b(e,t,s,w,j,k){const i=a("el-image"),n=a("el-card");return v(),f("div",x,[p(n,{shadow:"hover",header:"element-plus \u5927\u56FE\u9884\u89C8"},{default:g(()=>[p(i,{style:{width:"100px",height:"100px","border-radius":"5px"},src:e.url,"preview-src-list":e.srcList,title:"\u70B9\u51FB\u67E5\u770B\u5927\u56FE\u9884\u89C8"},null,8,["src","preview-src-list"])]),_:1})])}var C=l(F,[["render",b]]);export{C as default};

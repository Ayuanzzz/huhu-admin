var E=Object.defineProperty;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var L=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))T.call(n,t)&&L(e,t,n[t]);if(k)for(var t of k(n))z.call(n,t)&&L(e,t,n[t]);return e};import{l as B,m as D,L as O,o as R,R as W,t as N,r as d,I as f,q as y,D as h,F as u,S as g,y as p,T as M,w as U,v as q,x as s,C as j,O as _,a0 as A,$ as G,n as H}from"./vendor.1650541145390.js";import{i as b}from"./getStyleSheets.1650541145390.js";import{_ as J}from"./index.1650541145390.js";const K={name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"elementPointer"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"small"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(e,{emit:n}){const t=B(),i=B(),o=D({fontIconPrefix:"",fontIconVisible:!1,fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconPlaceholder:"",fontIconType:"ali",fontIconShow:!0}),P=()=>{if(!e.modelValue)return!1;o.fontIconSearch="",o.fontIconPlaceholder=e.modelValue},S=()=>{setTimeout(()=>{o.fontIconSheetsList.filter(c=>c===o.fontIconSearch).length<=0&&(o.fontIconSearch="")},300)},w=()=>{if(e.modelValue==="")return!1;o.fontIconPlaceholder=e.modelValue,o.fontIconPrefix=e.modelValue},C=O(()=>{if(!o.fontIconSearch)return o.fontIconSheetsList;let l=o.fontIconSearch.trim().toLowerCase();return o.fontIconSheetsList.filter(c=>{if(c.toLowerCase().indexOf(l)!==-1)return c})}),v=()=>{H(()=>{o.fontIconWidth=t.value.$el.offsetWidth})},V=()=>{window.addEventListener("resize",()=>{v()})},F=async l=>{o.fontIconSheetsList=[],l==="ali"?await b.ali().then(c=>{o.fontIconSheetsList=c.map(m=>`iconfont ${m}`)}):l==="ele"?await b.ele().then(c=>{o.fontIconSheetsList=c}):l==="awe"&&await b.awe().then(c=>{o.fontIconSheetsList=c.map(m=>`fa ${m}`)}),o.fontIconPlaceholder=e.placeholder,w(),i.value.wrap$.scrollTop=0},r=l=>{o.fontIconType=l,F(l)},a=l=>{o.fontIconPlaceholder=l,o.fontIconVisible=!1,o.fontIconPrefix=l,n("get",o.fontIconPrefix),n("update:modelValue",o.fontIconPrefix)},I=()=>{o.fontIconPrefix="",n("clear",o.fontIconPrefix),n("update:modelValue",o.fontIconPrefix)};return R(()=>{var l,c,m;e.type==="all"?((l=e.modelValue)==null?void 0:l.indexOf("iconfont"))>-1?r("ali"):((c=e.modelValue)==null?void 0:c.indexOf("element"))>-1?r("ele"):((m=e.modelValue)==null?void 0:m.indexOf("fa"))>-1?r("awe"):r("ali"):r(e.type),V(),v()}),W(()=>e.modelValue,()=>{w()}),x({inputWidthRef:t,selectorScrollbarRef:i,fontIconSheetsFilterList:C,onColClick:a,onIconChange:r,onClearFontIcon:I,onIconFocus:P,onIconBlur:S},N(o))}},Q={class:"icon-selector"},X={class:"icon-selector-warp"},Y={class:"icon-selector-warp-title flex"},Z={class:"flex-auto"},$={key:0,class:"icon-selector-warp-title-tab"},ee={class:"icon-selector-warp-row"},oe={class:"flex-margin"},ne={class:"icon-selector-warp-item-value"};function te(e,n,t,i,o,P){const S=d("SvgIcon"),w=d("el-input"),C=d("el-col"),v=d("el-row"),V=d("el-empty"),F=d("el-scrollbar"),r=d("el-popover");return f(),y("div",Q,[h(r,{placement:"bottom",width:e.fontIconWidth,visible:e.fontIconVisible,"onUpdate:visible":n[4]||(n[4]=a=>e.fontIconVisible=a),"popper-class":"icon-selector-popper"},{reference:u(()=>[h(w,{modelValue:e.fontIconSearch,"onUpdate:modelValue":n[0]||(n[0]=a=>e.fontIconSearch=a),placeholder:e.fontIconPlaceholder,clearable:t.clearable,disabled:t.disabled,size:t.size,ref:"inputWidthRef",onClear:i.onClearFontIcon,onFocus:i.onIconFocus,onBlur:i.onIconBlur},{prepend:u(()=>{var a,I;return[(e.fontIconPrefix===""?((a=t.prepend)==null?void 0:a.indexOf("element"))>-1:((I=e.fontIconPrefix)==null?void 0:I.indexOf("element"))>-1)?(f(),g(S,{key:0,name:e.fontIconPrefix===""?t.prepend:e.fontIconPrefix,class:"font14"},null,8,["name"])):(f(),y("i",{key:1,class:p([e.fontIconPrefix===""?t.prepend:e.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:u(()=>[h(M,{name:"el-zoom-in-top"},{default:u(()=>[U(s("div",X,[s("div",Y,[s("div",Z,j(t.title),1),t.type==="all"?(f(),y("div",$,[s("span",{class:p([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:n[1]||(n[1]=a=>i.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),s("span",{class:p([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:n[2]||(n[2]=a=>i.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),s("span",{class:p([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:n[3]||(n[3]=a=>i.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])):_("",!0)]),s("div",ee,[h(F,{ref:"selectorScrollbarRef"},{default:u(()=>[i.fontIconSheetsFilterList.length>0?(f(),g(v,{key:0,gutter:10},{default:u(()=>[(f(!0),y(A,null,G(i.fontIconSheetsFilterList,(a,I)=>(f(),g(C,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:l=>i.onColClick(a),key:I},{default:u(()=>[s("div",{class:p(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===a}])},[s("div",oe,[s("div",ne,[h(S,{name:a},null,8,["name"])])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):_("",!0),i.fontIconSheetsFilterList.length<=0?(f(),g(V,{key:1,"image-size":100,description:t.emptyDescription},null,8,["description"])):_("",!0)]),_:1},512)])],512),[[q,e.fontIconVisible]])]),_:1})]),_:1},8,["width","visible"])])}var se=J(K,[["render",te]]);export{se as I};

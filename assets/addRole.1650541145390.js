var S=Object.defineProperty;var _=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(e,l,a)=>l in e?S(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,F=(e,l)=>{for(var a in l||(l={}))x.call(l,a)&&b(e,a,l[a]);if(_)for(var a of _(l))v.call(l,a)&&b(e,a,l[a]);return e};import{_ as A}from"./index.1650541145390.js";import{m as k,t as y,q as N,D as u,F as o,r as d,I as U,x as f,G as I,H as R,B as D}from"./vendor.1650541145390.js";const z={name:"systemAddRole",setup(){const e=k({isShowDialog:!1,ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"}}),l=()=>{e.isShowDialog=!0,p()},a=()=>{e.isShowDialog=!1},r=()=>{a()},i=()=>{a()},p=()=>{e.menuData=[{id:1,label:"\u7CFB\u7EDF\u7BA1\u7406",children:[{id:11,label:"\u83DC\u5355\u7BA1\u7406",children:[{id:111,label:"\u83DC\u5355\u65B0\u589E"},{id:112,label:"\u83DC\u5355\u4FEE\u6539"},{id:113,label:"\u83DC\u5355\u5220\u9664"},{id:114,label:"\u83DC\u5355\u67E5\u8BE2"}]},{id:12,label:"\u89D2\u8272\u7BA1\u7406",children:[{id:121,label:"\u89D2\u8272\u65B0\u589E"},{id:122,label:"\u89D2\u8272\u4FEE\u6539"},{id:123,label:"\u89D2\u8272\u5220\u9664"},{id:124,label:"\u89D2\u8272\u67E5\u8BE2"}]},{id:13,label:"\u7528\u6237\u7BA1\u7406",children:[{id:131,label:"\u7528\u6237\u65B0\u589E"},{id:132,label:"\u7528\u6237\u4FEE\u6539"},{id:133,label:"\u7528\u6237\u5220\u9664"},{id:134,label:"\u7528\u6237\u67E5\u8BE2"}]}]},{id:2,label:"\u6743\u9650\u7BA1\u7406",children:[{id:21,label:"\u524D\u7AEF\u63A7\u5236",children:[{id:211,label:"\u9875\u9762\u6743\u9650"},{id:212,label:"\u9875\u9762\u6743\u9650"}]},{id:22,label:"\u540E\u7AEF\u63A7\u5236",children:[{id:221,label:"\u9875\u9762\u6743\u9650"}]}]}]};return F({openDialog:l,closeDialog:a,onCancel:r,onSubmit:i},y(e))}},P=e=>(I("data-v-d0fdde7e"),e=e(),R(),e),$={class:"system-add-role-container"},q=P(()=>f("span",null,"\u89D2\u8272\u6807\u8BC6",-1)),G={class:"dialog-footer"},H=D("\u53D6 \u6D88"),M=D("\u65B0 \u589E");function T(e,l,a,r,i,p){const m=d("el-input"),s=d("el-form-item"),n=d("el-col"),B=d("el-tooltip"),E=d("el-input-number"),g=d("el-switch"),h=d("el-tree"),V=d("el-row"),C=d("el-form"),c=d("el-button"),w=d("el-dialog");return U(),N("div",$,[u(w,{title:"\u65B0\u589E\u89D2\u8272",modelValue:e.isShowDialog,"onUpdate:modelValue":l[5]||(l[5]=t=>e.isShowDialog=t),width:"769px"},{footer:o(()=>[f("span",G,[u(c,{onClick:r.onCancel,size:"small"},{default:o(()=>[H]),_:1},8,["onClick"]),u(c,{type:"primary",onClick:r.onSubmit,size:"small"},{default:o(()=>[M]),_:1},8,["onClick"])])]),default:o(()=>[u(C,{model:e.ruleForm,size:"small","label-width":"90px"},{default:o(()=>[u(V,{gutter:35},{default:o(()=>[u(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[u(s,{label:"\u89D2\u8272\u540D\u79F0"},{default:o(()=>[u(m,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":l[0]||(l[0]=t=>e.ruleForm.roleName=t),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[u(s,{label:"\u89D2\u8272\u6807\u8BC6"},{label:o(()=>[u(B,{effect:"dark",content:"\u7528\u4E8E `router/route.ts` meta.roles",placement:"top-start"},{default:o(()=>[q]),_:1})]),default:o(()=>[u(m,{modelValue:e.ruleForm.roleSign,"onUpdate:modelValue":l[1]||(l[1]=t=>e.ruleForm.roleSign=t),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[u(s,{label:"\u6392\u5E8F"},{default:o(()=>[u(E,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":l[2]||(l[2]=t=>e.ruleForm.sort=t),min:0,max:999,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[u(s,{label:"\u89D2\u8272\u72B6\u6001"},{default:o(()=>[u(g,{modelValue:e.ruleForm.status,"onUpdate:modelValue":l[3]||(l[3]=t=>e.ruleForm.status=t),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[u(s,{label:"\u89D2\u8272\u63CF\u8FF0"},{default:o(()=>[u(m,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":l[4]||(l[4]=t=>e.ruleForm.describe=t),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[u(s,{label:"\u83DC\u5355\u6743\u9650"},{default:o(()=>[u(h,{data:e.menuData,props:e.menuProps,"show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var L=A(z,[["render",T],["__scopeId","data-v-d0fdde7e"]]);export{L as default};

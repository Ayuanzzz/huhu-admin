var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))v.call(t,o)&&C(e,o,t[o]);if(f)for(var o of f(t))E.call(t,o)&&C(e,o,t[o]);return e};import{b as B,c as F}from"./items.1650581300530.js";import{f as N}from"./items.16505813005302.js";import{_ as k}from"./index.1650581300530.js";import{m as x,o as H,t as T,q as V,D as a,F as n,r as l,I as j,x as A,B as _,C as I}from"./vendor.1650581300530.js";const U={name:"doing",setup(){const e=x(new B),t=()=>{e.pageNum=0,e.pageSize=10},o=(i,r)=>{e.doneDatas.splice(r,1)},d=i=>{e.pageSize=i},h=i=>{e.pageNum=i};return H(()=>{t(),F({}).then(i=>{const r=i.doneData;for(let u in r)e.doneDatas[u]=m({},r[u]),e.doneDatas[u].employeeStr=N(r[u].employeeData),e.total=r.length,console.log(e.total)})}),m({initData:t,delData:o,onHandleSizeChange:d,onHandleCurrentChange:h},T(e))}},$={class:"system-menu-container"},q={class:"system-menu-search mb15"},M=_(" \u67E5\u8BE2 "),R=_("\u5220\u9664");function G(e,t,o,d,h,i){const r=l("el-input"),u=l("elementSearch"),D=l("el-icon"),c=l("el-button"),p=l("el-table-column"),g=l("el-table"),w=l("el-popover"),b=l("el-pagination"),y=l("el-card");return j(),V("div",$,[a(y,{shadow:"hover"},{default:n(()=>[A("div",q,[a(r,{size:"small",placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",style:{"max-width":"180px"}}),a(c,{size:"small",type:"primary",class:"ml10"},{default:n(()=>[a(D,null,{default:n(()=>[a(u)]),_:1}),M]),_:1})]),a(g,{data:e.doneDatas,style:{width:"100%"},"row-key":"path",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:n(()=>[a(p,{prop:"itemName",label:"\u9879\u76EE","show-overflow-tooltip":""}),a(p,{label:"\u4EBA\u5458",width:"120",height:"70"},{default:n(s=>[a(w,{placement:"right",width:260,height:500,trigger:"click"},{reference:n(()=>[a(c,{color:"#626aef",plain:"",size:"small"},{default:n(()=>[_(I(s.row.employeeStr),1)]),_:2},1024)]),default:n(()=>[a(g,{data:s.row.employeeData},{default:n(()=>[a(p,{width:"150",property:"joinTime",label:"\u52A0\u5165\u65F6\u95F4"}),a(p,{width:"100",property:"name",label:"\u59D3\u540D"})]),_:2},1032,["data"])]),_:2},1024)]),_:1}),a(p,{prop:"endTime",label:"\u5B8C\u6210\u65E5\u671F",width:"180"}),a(p,{prop:"startTime",label:"\u8D77\u59CB\u65E5\u671F",width:"180"}),a(p,{label:"\u64CD\u4F5C","show-overflow-tooltip":"",width:"70"},{default:n(({row:s,$index:z})=>[a(c,{size:"mini",type:"text",onClick:J=>d.delData(s,z)},{default:n(()=>[R]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(b,{onSizeChange:d.onHandleSizeChange,onCurrentChange:d.onHandleCurrentChange,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":e.pageNum,"onUpdate:current-page":t[0]||(t[0]=s=>e.pageNum=s),background:"","page-size":e.pageSize,"onUpdate:page-size":t[1]||(t[1]=s=>e.pageSize=s),layout:"total, sizes, prev, pager, next, jumper",total:e.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),_:1})])}var W=k(U,[["render",G]]);export{W as default};
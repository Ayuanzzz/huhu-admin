var A=Object.defineProperty;var F=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(i,o,t)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,y=(i,o)=>{for(var t in o||(o={}))N.call(o,t)&&g(i,t,o[t]);if(F)for(var t of F(o))w.call(o,t)&&g(i,t,o[t]);return i};import{i as x}from"./index.16505411453904.js";import{C as m}from"./countUp.min.1650541145390.js";import{_ as I,u as L,f as R}from"./index.1650541145390.js";import{m as O,L as D,o as k,a8 as z,R as M,t as U,q as B,D as a,F as u,n as v,r as p,I as f,x as e,C as h,a0 as S,$ as T,S as G,y as H,M as b,k as V}from"./vendor.1650541145390.js";const $=[{title:"\u4ECA\u65E5\u5F85\u63D0\u4EA4\u9879\u76EE",titleNum:"3",tip:"\u5DF2\u63D0\u4EA4",tipNum:"1",color:"#F95959",iconColor:"#F86C6B",icon:"iconfont icon-jinridaiban"},{title:"\u9879\u76EE\u603B\u6570",titleNum:"12",tip:"\u5DF2\u5B8C\u6210",tipNum:"5",color:"#FEBB50",iconColor:"#FDC566",icon:"iconfont icon-shenqingkaiban"},{title:"\u5458\u5DE5\u603B\u6570",titleNum:"51",tip:"\u5DE5\u4F5C\u4E2D",tipNum:"49",color:"#8595F4",iconColor:"#92A1F4",icon:"iconfont icon-AIshiyanshi"}],q=[{icon:"iconfont icon-yangan",label:"\u70DF\u611F",value:"2.1%OBS/M",iconColor:"#F72B3F"},{icon:"iconfont icon-wendu",label:"\u6E29\u5EA6",value:"30\u2103",iconColor:"#91BFF8"},{icon:"iconfont icon-shidu",label:"\u6E7F\u5EA6",value:"57%RH",iconColor:"#88D565"},{icon:"iconfont icon-zaosheng",label:"\u566A\u58F0",value:"57DB",iconColor:"#FBD4A0"}],P=[{time1:"\u4ECA\u5929",time2:"12:20:30",title:"\u66F4\u540D",label:"\u6B63\u5F0F\u66F4\u540D\u4E3A vue-next-admin"},{time1:"02-17",time2:"12:20:30",title:"\u9875\u9762",label:"\u5B8C\u6210\u5BF9\u9996\u9875\u7684\u5F00\u53D1"},{time1:"02-14",time2:"12:20:30",title:"\u9875\u9762",label:"\u65B0\u589E\u4E2A\u4EBA\u4E2D\u5FC3"}];const j={name:"home",setup(){const{proxy:i}=V(),o=L(),t=O({topCardItemList:$,environmentList:q,activitiesList:P,tableData:{data:[{date:"2016-05-02",name:"\u547C\u547C\u4E4B\u5BB6",address:"\u70DF\u611F2.1%OBS/M"},{date:"2016-05-04",name:"\u86D9\u86D9\u4E4B\u5BB6",address:"\u6E29\u5EA630\u2103"},{date:"2016-05-01",name:"\u9E21\u9E21\u4E4B\u5BB6",address:"\u6E7F\u5EA657%RH"}]},myCharts:[]}),n=D(()=>o.state.userInfos.userInfos),E=D(()=>R(new Date)),C=()=>{v(()=>{new m("titleNum1",3).start(),new m("titleNum2",12).start(),new m("titleNum3",51).start(),new m("tipNum1",1).start(),new m("tipNum2",6).start(),new m("tipNum3",49).start()})},l=()=>{const s=x(i.$refs.homeLaboratoryRef),_={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]}],yAxis:[{type:"value",name:"\u9879\u76EE\u6570\u91CF",min:0,max:35,position:"left"},{type:"value",name:"\u5728\u804C\u4EBA\u6570",min:0,max:70,position:"right"}],series:[{name:"\u9879\u76EE\u6570\u91CF",type:"bar",yAxisIndex:0,data:[12,15,11,7,5,15,17,14,14,18,9,12]},{name:"\u5728\u804C\u4EBA\u6570",type:"line",smooth:!0,yAxisIndex:1,data:[50,51,51,50,52,52,53,50,45,47,50,50]}]};s.setOption(_),t.myCharts.push(s)},d=()=>{const s=x(i.$refs.homeOvertimeRef),_={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["\u91CD\u5E86DEM","\u6500\u679D\u82B1DOM","\u5408\u5DDDDLG","\u4E0A\u865EDOM","\u5DDD\u4E1CDLG","\u94C1\u95E8\u5173DLG"]},series:[{type:"bar",data:[36,5,15,13,2,5]}]};s.setOption(_),t.myCharts.push(s)},c=()=>{v(()=>{for(let s=0;s<t.myCharts.length;s++)t.myCharts[s].resize()})},r=()=>{window.addEventListener("resize",c)};return k(()=>{C(),l(),d(),r()}),z(()=>{c()}),M(()=>o.state.tagsViewRoutes.isTagsViewCurrenFull,()=>{c()}),y({getUserInfos:n,currentTime:E},U(t))}},W={class:"home-container"},J={class:"home-card-item home-card-first"},K={class:"flex-margin flex"},Q=["src"],X={class:"home-card-first-right ml15"},Y={class:"flex-margin"},Z={class:"home-card-first-right-title"},tt={class:"home-card-first-right-msg mt5"},et={class:"home-card-item-flex"},ot={class:"home-card-item-title pb3"},st=["id"],it={class:"home-card-item-tip pb3"},ut=["id"],at={style:{height:"200px"},ref:"homeOvertimeRef"},nt={style:{height:"200px"},ref:"homeLaboratoryRef"};function rt(i,o,t,n,E,C){const l=p("el-col"),d=p("el-row"),c=p("el-card");return f(),B("div",W,[a(d,{gutter:15},{default:u(()=>[a(l,{sm:6,class:"mb15"},{default:u(()=>[e("div",J,[e("div",K,[e("img",{src:n.getUserInfos.photo},null,8,Q),e("div",X,[e("div",Y,[e("div",Z,h(n.currentTime)+"\uFF0C"+h(n.getUserInfos.userName===""?"test":n.getUserInfos.userName)+"\uFF01 ",1),e("div",tt,h(n.getUserInfos.userName==="admin"?"\u7BA1\u7406\u5458":"\u5458\u5DE5"),1)])])])])]),_:1}),(f(!0),B(S,null,T(i.topCardItemList,(r,s)=>(f(),G(l,{sm:6,class:"mb15",key:s},{default:u(()=>[e("div",{class:"home-card-item home-card-item-box",style:b({background:r.color})},[e("div",et,[e("div",ot,h(r.title),1),e("div",{class:"home-card-item-title-num pb6",id:`titleNum${s+1}`},null,8,st),e("div",it,h(r.tip),1),e("div",{class:"home-card-item-tip-num",id:`tipNum${s+1}`},null,8,ut)]),e("i",{class:H(r.icon),style:b({color:r.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),a(d,null,{default:u(()=>[a(l,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mt15"},{default:u(()=>[a(c,{shadow:"hover",header:"\u9879\u76EE\u5269\u4F59\u5DE5\u671F"},{default:u(()=>[e("div",at,null,512)]),_:1})]),_:1})]),_:1}),a(d,null,{default:u(()=>[a(l,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb15"},{default:u(()=>[a(c,{shadow:"hover",header:"\u9879\u76EE\u5B8C\u6210\u60C5\u51B5"},{default:u(()=>[e("div",nt,null,512)]),_:1})]),_:1})]),_:1})])}var _t=I(j,[["render",rt],["__scopeId","data-v-a32207ea"]]);export{_t as default};

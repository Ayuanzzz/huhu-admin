var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))F.call(t,n)&&b(e,n,t[n]);if(y)for(var n of y(t))B.call(t,n)&&b(e,n,t[n]);return e};import{i as N,K as R,P as $,a3 as v,m as A,L as P,t as V,S as z,F as o,b as T,r as u,I as U,D as s,x as S,y as q,C as L,k as x}from"./vendor.1650581300530.js";import{_ as D,u as E,f as M,S as C,b as O,c as j}from"./index.1650581300530.js";const J=N({name:"loginAccount",setup(){const{t:e}=R(),{proxy:t}=x(),n=E(),d=$(),_=v(),i=A({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456"},loading:{signIn:!1}}),f=P(()=>M(new Date)),g=async()=>{i.loading.signIn=!0;let a=[],r=[],m=["admin"],c=["btn.add","btn.del","btn.edit","btn.link"],l=["common"],h=["btn.add","btn.link"];i.ruleForm.userName==="admin"?(a=m,r=c):(a=l,r=h);const w={userName:i.ruleForm.userName,photo:i.ruleForm.userName==="admin"?"https://raw.githubusercontent.com/Ayuanzzz/images/main/bear.gif":"https://raw.githubusercontent.com/Ayuanzzz/images/main/rabbit.gif",time:new Date().getTime(),roles:a,authBtnList:r};C.set("token",Math.random().toString(36).substr(0)),C.set("userInfo",w),n.dispatch("userInfos/setUserInfos",w),n.state.themeConfig.themeConfig.isRequestRoutes?(await j(),p()):(await O(),p())},p=()=>{var r,m,c,l;let a=f.value;((r=d.query)==null?void 0:r.redirect)?_.push({path:(m=d.query)==null?void 0:m.redirect,query:Object.keys((c=d.query)==null?void 0:c.params).length>0?JSON.parse((l=d.query)==null?void 0:l.params):""}):_.push("/"),setTimeout(()=>{i.loading.signIn=!0;const h=e("message.signInText");T.success(`${a}\uFF0C${h}`),t.mittBus.emit("onSignInClick")},300)};return I({currentTime:f,onSignIn:g},V(i))}});function K(e,t,n,d,_,i){const f=u("elementUser"),g=u("el-icon"),p=u("el-input"),a=u("el-form-item"),r=u("elementUnlock"),m=u("el-button"),c=u("el-form");return U(),z(c,{class:"login-content-form"},{default:o(()=>[s(a,{class:"login-animation-one"},{default:o(()=>[s(p,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),modelValue:e.ruleForm.userName,"onUpdate:modelValue":t[0]||(t[0]=l=>e.ruleForm.userName=l),clearable:"",autocomplete:"off"},{prefix:o(()=>[s(g,{class:"el-input__icon"},{default:o(()=>[s(f)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),s(a,{class:"login-animation-two"},{default:o(()=>[s(p,{type:e.isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder2"),modelValue:e.ruleForm.password,"onUpdate:modelValue":t[2]||(t[2]=l=>e.ruleForm.password=l),autocomplete:"off"},{prefix:o(()=>[s(g,{class:"el-input__icon"},{default:o(()=>[s(r)]),_:1})]),suffix:o(()=>[S("i",{class:q(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:t[1]||(t[1]=l=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),s(a,{class:"login-animation-four"},{default:o(()=>[s(m,{type:"primary",class:"login-content-submit",round:"",onClick:e.onSignIn,loading:e.loading.signIn},{default:o(()=>[S("span",null,L(e.$t("message.account.accountBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})}var W=D(J,[["render",K],["__scopeId","data-v-117d6425"]]);export{W as default};

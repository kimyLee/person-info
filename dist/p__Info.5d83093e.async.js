"use strict";(self.webpackChunkcubyfun_template_web=self.webpackChunkcubyfun_template_web||[]).push([[563],{49464:function(Ee,Z,r){r.r(Z),r.d(Z,{default:function(){return oe}});var X=r(90967),p=r.n(X),Y=r(30577),u=r.n(Y),H=r(47368),l=r(87074),h=r(76380),w=r(94165),S=r(53957),o=r(50959),C={remainMoney:"remainMoney___ZPhun",taskList:"taskList___nLtgG",finishTaskList:"finishTaskList___oKmJR"},$=r(73537),q=r.n($);function j(){return"5"}function _(){return"2"}function ee(){return atob("ekZ5dA==")+j()+atob("b1FqTnRCVw==")}var ne=new(q())({accessKeyId:atob("TFRBSTV0NlNz")+"LPS"+ee(),accessKeySecret:atob("UlZoR0Zn")+j()+"sQ"+j()+atob("cmhi")+_()+atob("Q1BzWU92YXFCZUtDSVFJTw=="),endpoint:"https://oss-cn-shenzhen.aliyuncs.com",bucket:"kimmy-info"}),k=ne,te=r(9669),ae=r.n(te),a=r(11527),se=function(){var re=(0,o.useState)(0),P=u()(re,2),d=P[0],y=P[1],ie=(0,o.useState)(!1),A=u()(ie,2),B=A[0],ce=A[1],le=(0,o.useState)([]),F=u()(le,2),c=F[0],g=F[1],ue=(0,o.useState)([]),N=u()(ue,2),m=N[0],b=N[1],de=(0,o.useState)([]),D=u()(de,2),v=D[0],R=D[1],fe=(0,o.useState)(""),I=u()(fe,2),J=I[0],he=I[1],ve=(0,o.useState)(0),O=u()(ve,2),E=O[0],me=O[1],pe=(0,o.useState)(""),z=u()(pe,2),M=z[0],Te=z[1],ke=(0,o.useState)(0),G=u()(ke,2),L=G[0],Ce=G[1],ye=(0,o.useCallback)(function(){console.log("handleGetTaskList");var t="https://kimmy-info.oss-cn-shenzhen.aliyuncs.com/info.json";return ae().get(t+"?t="+Date.now()).then(function(n){console.log(n,"response");var e=n.data;return Array.isArray(e.finishTaskList)&&b(e.finishTaskList),Array.isArray(e.taskList)&&g(e.taskList),Array.isArray(e.recordList)&&R(e.recordList),e.money&&y(e.money-0),n}).catch(function(n){l.ZP.error("\u83B7\u53D6"),console.log(n)})},[]);(0,o.useEffect)(function(){ye()},[]);var ge=function(){if(!(!E||!J)){console.log("handleAddTask");var n={title:J,reward:E,createTime:Date.now()},e=p()(c);e.push(n),g(e);var s=JSON.stringify({recordList:v,taskList:e,finishTaskList:m,money:d}),i=new Blob([s]);k.put("info.json",i,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(f){console.log(f),l.ZP.success("\u53D1\u5E03\u6210\u529F")}).catch(function(){l.ZP.error("\u53D1\u5E03\u5931\u8D25")})}},Se=function(n){if(console.log("handleRemoveTask"),window.confirm("\u786E\u8BA4\u5220\u9664?")){for(var e=0;e<c.length;e++)if(n===c[e].createTime){var s=p()(c);s.splice(e,1),g(s);break}var i=JSON.stringify({recordList:v,taskList:c,finishTaskList:m,money:d}),f=new Blob([i]);k.put("info.json",f,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(T){console.log(T),l.ZP.success("\u5220\u9664\u6210\u529F")}).catch(function(){l.ZP.error("\u53D1\u5E03\u5931\u8D25")})}},Le=function(n){for(var e=p()(c),s=0;s<m.length;s++)if(n.createTime===m[s].createTime&&n.title===m[s].title){e.splice(s,1),b(e);break}var i=p()(c);i.push(n),g(i);var f=JSON.stringify({recordList:v,taskList:i,finishTaskList:e,money:d-n.reward}),T=new Blob([f]);k.put("info.json",T,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(x){console.log(x),l.ZP.success("\u64A4\u9500\u6210\u529F\uFF01"),y(d-n.reward)}).catch(function(){l.ZP.error("\u53D1\u5E03\u5931\u8D25")})},je=function(n){for(var e=p()(c),s=0;s<c.length;s++)if(n.createTime===c[s].createTime&&n.title===c[s].title){e.splice(s,1);break}g(e),console.log(m,"finishTaskList");var i=p()(m);i.push(n),b(i);var f=JSON.stringify({recordList:v,taskList:e,finishTaskList:i,money:d-0+(n.reward-0)}),T=new Blob([f]);k.put("info.json",T,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(x){console.log(x),y(d-0+(n.reward-0)),l.ZP.success("\u5B8C\u6210\u4EFB\u52A1\uFF01")}).catch(function(){l.ZP.error("\u4FEE\u6539\u5931\u8D25")})},be=function(n){for(var e=p()(v),s=0;s<v.length;s++)if(n.createTime===v[s].createTime&&n.title===v[s].title){e.splice(s,1),R(e);break}var i=JSON.stringify({recordList:e,taskList:c,finishTaskList:e,money:d-0+(n.cost-0)}),f=new Blob([i]);k.put("info.json",f,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(T){console.log(T),l.ZP.success("\u64A4\u9500\u6210\u529F\uFF01"),y(d-0+(n.cost-0))}).catch(function(){l.ZP.error("\u64A4\u9500\u5931\u8D25")})},Re=function(){if(!(!M||!L)){console.log("handleAddRecord");var n={title:M,cost:L,createTime:Date.now()},e=p()(v);e.push(n),R(e);var s=JSON.stringify({recordList:e,taskList:c,finishTaskList:m,money:d-L}),i=new Blob([s]);k.put("info.json",i,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(f){console.log(f),l.ZP.success("\u8BB0\u5F55\u6210\u529F"),y(d-L)}).catch(function(){l.ZP.error("\u8BB0\u5F55\u6210\u529F")})}},K=function(){ce(!B)},xe=(0,o.useState)(!1),U=u()(xe,2),Ze=U[0],V=U[1],we=(0,o.useState)(!1),W=u()(we,2),Pe=W[0],Q=W[1],Ae=(0,o.useCallback)(function(){V(!0)},[]),Be=(0,o.useCallback)(function(){Q(!0)},[]),Fe=(0,o.useCallback)(function(){V(!1)},[]),Ne=(0,o.useCallback)(function(t){me(t.target.value)},[]),De=(0,o.useCallback)(function(t){he(t.target.value)},[]),Ie=(0,o.useCallback)(function(t){Te(t.target.value)},[]),Je=(0,o.useCallback)(function(t){Ce(t.target.value)},[]),Oe=(0,o.useCallback)(function(){Q(!1)},[]);return(0,a.jsxs)(H._z,{className:C.taskPage,children:[(0,a.jsx)("div",{className:C.remainMoney,children:d}),B?(0,a.jsxs)("div",{children:[(0,a.jsx)(h.ZP,{onClick:K,children:"\u8BB0\u5F55"}),(0,a.jsx)("div",{className:C.taskList,children:v.map(function(t,n){return(0,a.jsxs)("li",{children:[t.title,"-",t.cost,(0,a.jsx)(h.ZP,{onClick:function(){return be(t)},children:"\u6DFB\u52A0"})]},n)})}),(0,a.jsx)(h.ZP,{onClick:Be,children:"\u6DFB\u52A0"}),(0,a.jsxs)(w.Z,{title:"AddRecord",placement:"bottom",closable:!1,onClose:Oe,open:Pe,children:[(0,a.jsx)(S.Z,{placeholder:"\u8BB0\u5F55",onChange:Ie}),(0,a.jsx)(S.Z,{placeholder:"Cost",onChange:Je}),(0,a.jsx)(h.ZP,{onClick:Re,children:"\u786E\u8BA4\u8BB0\u5F55"})]})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)(h.ZP,{onClick:K,children:"\u4EFB\u52A1"}),(0,a.jsx)("div",{className:C.taskList,children:c.map(function(t,n){return(0,a.jsxs)("li",{children:[t.title,"-\u5956\u52B1",t.reward,(0,a.jsx)(h.ZP,{type:"primary",shape:"circle",onClick:function(){return Se(t.createTime)},children:"Del"}),(0,a.jsx)(h.ZP,{type:"primary",shape:"circle",onClick:function(){return je(t)},children:"Do"})]},n)})}),(0,a.jsx)("div",{className:C.finishTaskList,children:m.map(function(t,n){return(0,a.jsxs)("li",{children:[t.title,"-\u5956\u52B1",t.reward,(0,a.jsx)(h.ZP,{type:"primary",shape:"circle",onClick:function(){return Le(t)},children:"Re"})]},n)})}),(0,a.jsx)(h.ZP,{onClick:Ae,children:"\u6DFB\u52A0"}),(0,a.jsxs)(w.Z,{title:"AddTask",placement:"bottom",closable:!1,onClose:Fe,open:Ze,children:[(0,a.jsx)(S.Z,{placeholder:"\u4EFB\u52A1",onChange:De}),(0,a.jsx)(S.Z,{placeholder:"Reward",onChange:Ne}),(0,a.jsx)(h.ZP,{onClick:ge,children:"\u786E\u8BA4\u53D1\u5E03"})]})]})]})},oe=se}}]);

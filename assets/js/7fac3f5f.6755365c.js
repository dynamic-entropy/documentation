"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"1.24.2.post1"},l=void 0,c={unversionedId:"release-notes/1.24.2.post1",id:"release-notes/1.24.2.post1",title:"1.24.2.post1",description:"Important notice",source:"@site/../docs/release-notes/1.24.2.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.2.post1",permalink:"/documentation/release-notes/1.24.2.post1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.2.post1.md",tags:[],version:"current",frontMatter:{title:"1.24.2.post1"}},p={},u=[{value:"Important notice",id:"important-notice",level:2},{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"important-notice"},"Important notice"),(0,a.kt)("p",null,"Due to a regression in the ",(0,a.kt)("inlineCode",{parentName:"p"},"1.24")," release, subscriptions with ",(0,a.kt)("inlineCode",{parentName:"p"},"did_type")," filters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"did_type = ['DATASET']")," were not correctly processed by the subscription daemon (transmogrifier) and thus no rules were created.\nIf your Rucio instance had active subscriptions with ",(0,a.kt)("inlineCode",{parentName:"p"},"did_type")," filters, these rules need to be recreated by re-evaluating the subscriptions. You need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"is_new")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dids")," table to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for all affected dids (e.g. dids created since running 1.24). For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE dids SET is_new=1 WHERE (did_type='D' or did_type='C') and created_at \\> X;")),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Database: Recent sqlalchemy change broke subscription evaluation ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4283"},"#4283"))))}f.isMDXComponent=!0}}]);
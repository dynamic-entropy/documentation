"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={title:"Accounting and quota"},s=void 0,u={unversionedId:"started/concepts/accounting_and_quota",id:"started/concepts/accounting_and_quota",title:"Accounting and quota",description:"Accounting is the measure of how much resource, e.g. storage, an account",source:"@site/../docs/started/concepts/accounting_and_quota.md",sourceDirName:"started/concepts",slug:"/started/concepts/accounting_and_quota",permalink:"/documentation/started/concepts/accounting_and_quota",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/accounting_and_quota.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1686756129,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"Accounting and quota"},sidebar:"docs",previous:{title:"RSE Expressions",permalink:"/documentation/started/concepts/rse_expressions"},next:{title:"Notifications",permalink:"/documentation/started/concepts/notifications"}},p={},l=[],d={toc:l},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Accounting is the measure of how much resource, e.g. storage, an account\nhas used as a consequence of its actions. Quota is a policy limit which\nthe system applies to an account."),(0,a.kt)("p",null,"Rucio accounts are only accounted for the files they set replication\nrules on. The accounting is based on the replicas an account requested,\nnot on the actual amount of physical replicas in the system. Thus if two\ndifferent users set a replication rule for the same file on the same RSE\nboth users are accounted for this file, although there is only one\nphysical copy of it."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),o=["components"],a={title:"FileClient"},c=void 0,p={unversionedId:"client_api/fileclient",id:"client_api/fileclient",title:"FileClient",description:"list\\file\\replicas",source:"@site/../docs/client_api/fileclient.md",sourceDirName:"client_api",slug:"/client_api/fileclient",permalink:"/documentation/client_api/fileclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/fileclient.md",tags:[],version:"current",frontMatter:{title:"FileClient"},sidebar:"docs",previous:{title:"ExportClient",permalink:"/documentation/client_api/exportclient"},next:{title:"ImportClient",permalink:"/documentation/client_api/importclient"}},s={},u=[{value:"list_file_replicas",id:"list_file_replicas",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"list_file_replicas"},"list","_","file","_","replicas"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"List file replicas."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope"),": the scope."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lfn"),": the lfn."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,l.kt)("p",null,"  List of replicas.")))))))}m.isMDXComponent=!0}}]);
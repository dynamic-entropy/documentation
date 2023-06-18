"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"1.30.7"},s=void 0,c={unversionedId:"release-notes/1.30.7",id:"release-notes/1.30.7",title:"1.30.7",description:"General",source:"@site/../docs/release-notes/1.30.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.30.7",permalink:"/documentation/release-notes/1.30.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.30.7.md",tags:[],version:"current",frontMatter:{title:"1.30.7"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deletion: protection of last available replica with pendng requests doesn't work ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6124"},"#6124")),(0,o.kt)("li",{parentName:"ul"},"Protocols: Propagate the timeout parameter to gfal ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6125"},"#6125")),(0,o.kt)("li",{parentName:"ul"},"Transfers: Support ",(0,o.kt)("inlineCode",{parentName:"li"},"ignore_availability")," in preparer ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5893"},"#5893"))),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transfers: receiver marks ARCHIVING requests as done ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5532"},"#5532"))))}d.isMDXComponent=!0}}]);
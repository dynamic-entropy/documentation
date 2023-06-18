"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"1.23.3"},s=void 0,c={unversionedId:"release-notes/1.23.3",id:"release-notes/1.23.3",title:"1.23.3",description:"Clients",source:"@site/../docs/release-notes/1.23.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.3",permalink:"/documentation/release-notes/1.23.3",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.3.md",tags:[],version:"current",frontMatter:{title:"1.23.3"}},u={},p=[{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: ca_cert should not be mandatory ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3744"},"#3744")),(0,i.kt)("li",{parentName:"ul"},"RSE Manager: GFAL implementation with CLI instead of API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3537"},"#3537"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: do not skip CA check on retry ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3702"},"#3702")),(0,i.kt)("li",{parentName:"ul"},"Clients: Infinte loop in retries ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3923"},"#3923")),(0,i.kt)("li",{parentName:"ul"},"Clients: Upload fails on some sites due to wrong Filesize mismatch ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3927"},"#3927")),(0,i.kt)("li",{parentName:"ul"},"Clients: Upload fails on Google storage ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3928"},"#3928"))))}d.isMDXComponent=!0}}]);
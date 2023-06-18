"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},70723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"1.27.7"},u=void 0,l={unversionedId:"release-notes/1.27.7",id:"release-notes/1.27.7",title:"1.27.7",description:"General",source:"@site/../docs/release-notes/1.27.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.7",permalink:"/documentation/release-notes/1.27.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.7.md",tags:[],version:"current",frontMatter:{title:"1.27.7"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},h="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Remove hard coded value for GCS storage elements ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5222"},"#5222")),(0,i.kt)("li",{parentName:"ul"},"Database: Add query hints to three queries ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5271"},"#5271")),(0,i.kt)("li",{parentName:"ul"},"REST & API: Add a Rest Api Documentation linter ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5209"},"#5209")),(0,i.kt)("li",{parentName:"ul"},"Recovery: Minos/Bad replicas database inefficiency ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5266"},"#5266")),(0,i.kt)("li",{parentName:"ul"},"Replicas: Provide the possibility to specify PFNs or DIDs in declare_bad_file_replicas ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5033"},"#5033")),(0,i.kt)("li",{parentName:"ul"},"Testing: disable test_conveyor in integration tests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5243"},"#5243")),(0,i.kt)("li",{parentName:"ul"},"Testing: Print the integration test server logs in the actions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5253"},"#5253")),(0,i.kt)("li",{parentName:"ul"},"Testing: Use LTS base containers for integration tests in release branches. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5256"},"#5256")),(0,i.kt)("li",{parentName:"ul"},"Traces: bulk updates for trace schemas ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5265"},"#5265"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi VO: Objectstore uploads are broken in multi VO Rucio ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5235"},"#5235")),(0,i.kt)("li",{parentName:"ul"},"Release management: Flask fails after itsdangerous module\u2019s update ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5258"},"#5258"))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebUI: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4556"},"#4556")," introduced a syntax error ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5278"},"#5278"))))}f.isMDXComponent=!0}}]);
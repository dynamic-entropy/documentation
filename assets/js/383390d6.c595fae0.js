"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},28127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"1.25.1"},l=void 0,u={unversionedId:"release-notes/1.25.1",id:"release-notes/1.25.1",title:"1.25.1",description:"General",source:"@site/../docs/release-notes/1.25.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.1",permalink:"/documentation/release-notes/1.25.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.1.md",tags:[],version:"current",frontMatter:{title:"1.25.1"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},h="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: Add an option to export_data not to export distance ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4411"},"#4411")),(0,a.kt)("li",{parentName:"ul"},"Consistency checks: The Dark Reaper should run continuously instead of exiting early when there\u2019s nothing to do ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4377"},"#4377")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Fix broken link in Readme ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4407"},"#4407")),(0,a.kt)("li",{parentName:"ul"},"Rules: update_requests_priority() does not actually update the request priority in Rucio ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4320"},"#4320")),(0,a.kt)("li",{parentName:"ul"},"Testing: Parallelise unit tests ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4134"},"#4134")),(0,a.kt)("li",{parentName:"ul"},"Testing: Unregistered test markers ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4432"},"#4432"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: list-dids-extended with new metadata plugin currently fails ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4360"},"#4360")),(0,a.kt)("li",{parentName:"ul"},"Testing: TestBinRucio.test_create_rule on master fails ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4438"},"#4438")),(0,a.kt)("li",{parentName:"ul"},"Testing: Fix github workflow for py3 default Dockerfile ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4464"},"#4464"))),(0,a.kt)("h2",{id:"clients"},"Clients"),(0,a.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: Base client should retry when receiving a 502 error ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4444"},"#4444"))))}d.isMDXComponent=!0}}]);
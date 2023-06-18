"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},28960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"1.18.4"},l=void 0,c={unversionedId:"release-notes/1.18.4",id:"release-notes/1.18.4",title:"1.18.4",description:"General",source:"@site/../docs/release-notes/1.18.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.4",permalink:"/documentation/release-notes/1.18.4",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.4.md",tags:[],version:"current",frontMatter:{title:"1.18.4"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},h="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Cannot specify rse_type in add_rse ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1647"},"#1647")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Outdated flask api doc string ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1686"},"#1686")),(0,a.kt)("li",{parentName:"ul"},"Probes & Alarms: Rucio user account synchronization improvements (python paged search) ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1664"},"#1664")),(0,a.kt)("li",{parentName:"ul"},"Rebalancing: Rebalancing breaks in decomissioning mode ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/312"},"#312")),(0,a.kt)("li",{parentName:"ul"},"Release management: Force urllib3 version to 1.23 to unblock tests ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1682"},"#1682")),(0,a.kt)("li",{parentName:"ul"},"Rules: Rule forward from constituent to archive should be enforced if there is only a constituent-tape-replica available ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1663"},"#1663")),(0,a.kt)("li",{parentName:"ul"},"Testing: Python3 compatibility test ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1505"},"#1505")),(0,a.kt)("li",{parentName:"ul"},"Traces: Extract the suspicious files from the traces ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1623"},"#1623")),(0,a.kt)("li",{parentName:"ul"},"Transfers: Fix options for rucio-conveyor-finisher ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1701"},"#1701"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Exception not catched for PostgreSQL when attaching DIDs twice. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1668"},"#1668")),(0,a.kt)("li",{parentName:"ul"},"Recovery: list_bad_replicas_status implicitely uses SRM ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1635"},"#1635")),(0,a.kt)("li",{parentName:"ul"},"Release management: Requests 2.20.0 not Python 2.6 compatible ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1698"},"#1698"))),(0,a.kt)("h2",{id:"clients"},"Clients"),(0,a.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: Change list-dids to type collection, only ALL if --filter is given ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1422"},"#1422")),(0,a.kt)("li",{parentName:"ul"},"Clients: Output of list-rse-usage --show-accounts should be one line per account ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1672"},"#1672")),(0,a.kt)("li",{parentName:"ul"},"Clients: Rucio attach should chunk the DIDSs array up accordingly to the 1000 server limits ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/30"},"#30"))))}f.isMDXComponent=!0}}]);
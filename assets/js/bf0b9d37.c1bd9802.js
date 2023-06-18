"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},49781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"1.26.1"},l=void 0,u={unversionedId:"release-notes/1.26.1",id:"release-notes/1.26.1",title:"1.26.1",description:"General",source:"@site/../docs/release-notes/1.26.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.1",permalink:"/documentation/release-notes/1.26.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.1.md",tags:[],version:"current",frontMatter:{title:"1.26.1"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},h="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Policies: Registering lfn2pfn algorithm in policy package causes import loop ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4624"},"#4624")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Configurable archive-timeout override in submitter ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4641"},"#4641"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database: Core : Insert did in deleted_did table when deleted_did is called ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4229"},"#4229")),(0,i.kt)("li",{parentName:"ul"},"Database: Database optimizations ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4744"},"#4744")),(0,i.kt)("li",{parentName:"ul"},"Dataset deletion: Add an option to force the deletion of files when they are detached from a dataset ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4636"},"#4636")),(0,i.kt)("li",{parentName:"ul"},"Deletion: The Reaper should not have a hard dependency on any RSE limits ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4705"},"#4705")),(0,i.kt)("li",{parentName:"ul"},"Testing: Use new GH container registry for autotest images ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4154"},"#4154"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database: tools/reset_database.py should remove postgres types ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4212"},"#4212")),(0,i.kt)("li",{parentName:"ul"},"Documentation: Incorrect documentation on passing the dynamic parameter to /dids/(scope)/(name) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3761"},"#3761")),(0,i.kt)("li",{parentName:"ul"},"Transfers: The Poller doesn\u2019t correctly process multi-hop transfers where the first leg has failed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4633"},"#4633"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Allow to disable checksum for download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4719"},"#4719"))),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Logged exceptions could contain much more useful information ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3911"},"#3911")),(0,i.kt)("li",{parentName:"ul"},"Clients: No timeout for calls to rucio auth server ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4012"},"#4012")),(0,i.kt)("li",{parentName:"ul"},"Clients: Expose the RSE limits through rucio-admin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4073"},"#4073"))))}d.isMDXComponent=!0}}]);
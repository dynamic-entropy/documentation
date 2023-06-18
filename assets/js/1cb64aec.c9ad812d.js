"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"TouchClient"},c=void 0,p={unversionedId:"client_api/touchclient",id:"client_api/touchclient",title:"TouchClient",description:"touch",source:"@site/../docs/client_api/touchclient.md",sourceDirName:"client_api",slug:"/client_api/touchclient",permalink:"/documentation/client_api/touchclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/touchclient.md",tags:[],version:"current",frontMatter:{title:"TouchClient"},sidebar:"docs",previous:{title:"SubscriptionClient",permalink:"/documentation/client_api/subscriptionclient"},next:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"}},u={},s=[{value:"touch",id:"touch",level:2}],d={toc:s},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"touch"},"touch"),(0,i.kt)("span",{style:{"white-space":"pre"}},(0,i.kt)("p",null,"Sends a touch trace for a given file or dataset."),(0,i.kt)("table",{style:{border:"none"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scope"),": the scope of the file/dataset to update."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name"),": the name of file/dataset to update."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rse"),": optional parameter if a specific replica should be touched."))),(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DataIdentifierNotFound"),": if given dids does not exist."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RSENotFound"),": if rse is not None and given rse does not exist."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UnsupportedDIDType"),": if type of the given DID is not FILE or DATASET."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RucioException"),": if trace could not be sent successfully.")))))))}m.isMDXComponent=!0}}]);
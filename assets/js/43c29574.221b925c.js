"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7926],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?t.createElement(y,c(c({ref:r},l),{},{components:n})):t.createElement(y,c({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"rucio-conveyor-finisher"},s=void 0,u={unversionedId:"bin/rucio-conveyor-finisher",id:"bin/rucio-conveyor-finisher",title:"rucio-conveyor-finisher",description:"",source:"@site/../docs/bin/rucio-conveyor-finisher.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-finisher",permalink:"/documentation/bin/rucio-conveyor-finisher",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-finisher.md",tags:[],version:"current",frontMatter:{title:"rucio-conveyor-finisher"},sidebar:"docs",previous:{title:"rucio-cache-consumer",permalink:"/documentation/bin/rucio-cache-consumer"},next:{title:"rucio-conveyor-poller",permalink:"/documentation/bin/rucio-conveyor-poller"}},l={},p=[],f={toc:p},m="wrapper";function y(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)(m,(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-conveyor-finisher [-h] [--run-once]\n                               [--total-threads TOTAL_THREADS]\n                               [--db-bulk DB_BULK] [--bulk BULK]\n                               [--sleep-time SLEEP_TIME]\n                               [--activities ACTIVITIES [ACTIVITIES ...]]\n\nConveyor is a group of daemons to manage file transfers. The conveyor-finisher\nis the resposible to update Rucio internal state after the transfer has\nfinished.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --db-bulk DB_BULK     Bulk control: number of transfers per db query\n  --bulk BULK           Bulk control: number of requests\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n")))}y.isMDXComponent=!0}}]);
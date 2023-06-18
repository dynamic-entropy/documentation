"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[310],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),a=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=a(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=a(t),y=o,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=y;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=t[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},61023:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],s={title:"rucio-conveyor-stager"},u=void 0,a={unversionedId:"bin/rucio-conveyor-stager",id:"bin/rucio-conveyor-stager",title:"rucio-conveyor-stager",description:"",source:"@site/../docs/bin/rucio-conveyor-stager.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-stager",permalink:"/documentation/bin/rucio-conveyor-stager",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-stager.md",tags:[],version:"current",frontMatter:{title:"rucio-conveyor-stager"},sidebar:"docs",previous:{title:"rucio-conveyor-receiver",permalink:"/documentation/bin/rucio-conveyor-receiver"},next:{title:"rucio-conveyor-submitter",permalink:"/documentation/bin/rucio-conveyor-submitter"}},l={},p=[],d={toc:p},y="wrapper";function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)(y,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-conveyor-stager [-h] [--run-once] [--total-threads TOTAL_THREADS]\n                             [--bulk BULK] [--group-bulk GROUP_BULK]\n                             [--group-policy GROUP_POLICY]\n                             [--source-strategy SOURCE_STRATEGY]\n                             [--exclude-rses EXCLUDE_RSES]\n                             [--include-rses INCLUDE_RSES]\n                             [--rses RSES [RSES ...]] [--vos VOS [VOS ...]]\n                             [--activities ACTIVITIES [ACTIVITIES ...]]\n                             [--sleep-time SLEEP_TIME]\n\nThe conveyor-stager is responsible for issuing staging requests to the tape\nsystem.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --bulk BULK           Bulk control: number of requests\n  --group-bulk GROUP_BULK\n                        Group control: number of requests per group\n  --group-policy GROUP_POLICY\n                        Group control: policy used to group. enum{rule, dest,\n                        src_dest, rule_src_dest}\n  --source-strategy SOURCE_STRATEGY\n                        Source strategy. Overload the strategy defined in\n                        config DB.\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n")))}f.isMDXComponent=!0}}]);
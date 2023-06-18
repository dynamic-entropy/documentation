"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[829],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||i;return n?t.createElement(d,c(c({ref:r},l),{},{components:n})):t.createElement(d,c({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16699:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"rucio-bb8"},s=void 0,u={unversionedId:"bin/rucio-bb8",id:"bin/rucio-bb8",title:"rucio-bb8",description:"",source:"@site/../docs/bin/rucio-bb8.md",sourceDirName:"bin",slug:"/bin/rucio-bb8",permalink:"/documentation/bin/rucio-bb8",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-bb8.md",tags:[],version:"current",frontMatter:{title:"rucio-bb8"},sidebar:"docs",previous:{title:"rucio-automatix",permalink:"/documentation/bin/rucio-automatix"},next:{title:"rucio-c3po",permalink:"/documentation/bin/rucio-c3po"}},l={},p=[],b={toc:p},m="wrapper";function d(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)(m,(0,t.Z)({},b,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-bb8 [-h] [--rse RSE] [--bytes BYTES] [--run-once]\n                 [--sleep-time SLEEP_TIME] [--threads THREADS] [--dry-run]\n                 [--exclude-expression EXCLUDE_EXPRESSION] [--comment COMMENT]\n                 [--force-expression FORCE_EXPRESSION] [--decommission]\n                 [--priority PRIORITY]\n                 [--source-replica-expression SOURCE_REPLICA_EXPRESSION]\n\nThe BB8 daemon is responsible for rebalancing data between RSEs.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --rse RSE             RSE to rebalance. Can be either a RSE or RSE\n                        expression.\n  --bytes BYTES         Number of bytes to expected to be rebalanced. It is a\n                        goal without guarantees\n  --run-once            One iteration only\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --dry-run             Only run in dry-run mode\n  --exclude-expression EXCLUDE_EXPRESSION\n                        Exclude these rse_expression from being destinations\n  --comment COMMENT     Add a comment to the new rules\n  --force-expression FORCE_EXPRESSION\n                        For this rse_expression for rebalanced rules instead\n                        of letting BB8 decide\n  --decommission        Run BB8 in decommission mode\n  --priority PRIORITY   Priority for the newly created rules\n  --source-replica-expression SOURCE_REPLICA_EXPRESSION\n                        Source replica expression for the newly created rules\n")))}d.isMDXComponent=!0}}]);
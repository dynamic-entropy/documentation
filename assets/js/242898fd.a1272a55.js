"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=i,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||n;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),o=["components"],s={title:"1.26.0"},l=void 0,u={unversionedId:"release-notes/1.26.0",id:"release-notes/1.26.0",title:"1.26.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.26.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.0",permalink:"/documentation/release-notes/1.26.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.0.md",tags:[],version:"current",frontMatter:{title:"1.26.0"}},p={},c=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:c},h="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),(0,n.kt)("p",null,"This release marks the start of the 1.26 ",(0,n.kt)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",(0,n.kt)("strong",{parentName:"p"},"July 2023"),"."),(0,n.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,n.kt)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,n.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,n.kt)("p",null,"The following changes are necessary and are covered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Extending columns for filter and replication rules in ",(0,n.kt)("inlineCode",{parentName:"p"},"subscriptions"),". (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"e138c364ebd0"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add index and adapt column colum length in ",(0,n.kt)("inlineCode",{parentName:"p"},"messages")," table. (Alembic revision `30fa38b6434e)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add index on ",(0,n.kt)("inlineCode",{parentName:"p"},"replicas")," table. (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"52153819589c"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add column and index on ",(0,n.kt)("inlineCode",{parentName:"p"},"did_meta")," table. (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"ccdbcd48206e"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove PK in ",(0,n.kt)("inlineCode",{parentName:"p"},"configs_history")," table. (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"739064d31565"),")"))),(0,n.kt)("h2",{id:"important-changes"},"Important changes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This release removed the deprecated ",(0,n.kt)("inlineCode",{parentName:"p"},"RSEBlacklisted")," exception and replaced it by ",(0,n.kt)("inlineCode",{parentName:"p"},"RSEWriteBlocked"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"reaper2")," daemon was renamed to ",(0,n.kt)("inlineCode",{parentName:"p"},"reaper"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This release drops the support of mysql version 5."))),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clients: Develop a lightweight client for Rucio ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4097"},"#4097")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Versioned (History) Tables should be defined explicitly ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2063"},"#2063")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Core & Internal : Add did_type column + index on did_meta table ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4668"},"#4668")),(0,n.kt)("li",{parentName:"ul"},"Database: Add new index on messages.services ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4647"},"#4647")),(0,n.kt)("li",{parentName:"ul"},"Multi VO: Supporting longer VO names in multi-VO rucio? ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4548"},"#4548")),(0,n.kt)("li",{parentName:"ul"},"Release management: pyflakes, flake8, pylint, pycodestyle dependency upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4162"},"#4162")),(0,n.kt)("li",{parentName:"ul"},"Replicas: replica sorting by GeoIP improvements ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4661"},"#4661")),(0,n.kt)("li",{parentName:"ul"},"Rules: Possibility to inject rules delayed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2639"},"#2639")),(0,n.kt)("li",{parentName:"ul"},"Subscriptions: Subscriptions columns for filter and replication_rules need to be extended ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4298"},"#4298")),(0,n.kt)("li",{parentName:"ul"},"Testing: Testing TPC transfers with Rucio  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4190"},"#4190")),(0,n.kt)("li",{parentName:"ul"},"Transfers: Rework transfers workflow ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4499"},"#4499"))),(0,n.kt)("h3",{id:"enhancements"},"Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clients: Inconsistency in command-line options to specify RSEs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1839"},"#1839")),(0,n.kt)("li",{parentName:"ul"},"Clients: Further list_replicas changes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4603"},"#4603")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Follow-up for moving EXTRA_MODULES importing to util function ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4168"},"#4168")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Replace FTSState ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4241"},"#4241")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Remove further sensitive language ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4677"},"#4677")),(0,n.kt)("li",{parentName:"ul"},"Database: Add an rse_id index for the replicas table ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4627"},"#4627")),(0,n.kt)("li",{parentName:"ul"},"Deletion: Make the time before tombstone is set configurable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4436"},"#4436")),(0,n.kt)("li",{parentName:"ul"},"Deletion: Rename reaper2 to reaper ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4462"},"#4462")),(0,n.kt)("li",{parentName:"ul"},"REST & API: Remove webpy endpoints and dependency ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4044"},"#4044")),(0,n.kt)("li",{parentName:"ul"},"Release management: setup.py and requirements.txt overhaul ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4456"},"#4456")),(0,n.kt)("li",{parentName:"ul"},"Release management: Update PyYAML for tests due to CVE-2020-14343 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4501"},"#4501")),(0,n.kt)("li",{parentName:"ul"},"Release management: Python 3.9 support ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4670"},"#4670")),(0,n.kt)("li",{parentName:"ul"},"Replicas: Allow specification of a default tombstone when registering replicas ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4491"},"#4491")),(0,n.kt)("li",{parentName:"ul"},"Testing: Python 3.8(/3.9) in Testing ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4453"},"#4453")),(0,n.kt)("li",{parentName:"ul"},"Transfers: Multihop intermediate replica tombstone ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4188"},"#4188")),(0,n.kt)("li",{parentName:"ul"},"WebUI: Error message for unregistered users in webui is ATLAS specific ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1109"},"#1109"))),(0,n.kt)("h3",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Fix FTSCompleteState capitalisation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4562"},"#4562")),(0,n.kt)("li",{parentName:"ul"},"Database: SQLAlchemy changed the Enum create_constraint default ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4737"},"#4737")),(0,n.kt)("li",{parentName:"ul"},"Release management: Upgrade urllib due to CVE-2021-33503 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4680"},"#4680")),(0,n.kt)("li",{parentName:"ul"},"Testing: timeouts in integration_tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4674"},"#4674"))))}d.isMDXComponent=!0}}]);
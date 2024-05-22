"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8418],{4137:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=i.createContext({}),c=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(l.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=c(t),g=a,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return t?i.createElement(f,o(o({ref:e},p),{},{components:t})):i.createElement(f,o({ref:e},p))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[d]="string"==typeof n?n:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9341:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(4137));const r={},o="Signal Definition",s={unversionedId:"administration/settings/signal/definition",id:"administration/settings/signal/definition",title:"Signal Definition",description:"Signal Defintions are your starting point for onboarding a new Signal into Dispatch and allow a number of different configuration options.",source:"@site/docs/administration/settings/signal/definition.mdx",sourceDirName:"administration/settings/signal",slug:"/administration/settings/signal/definition",permalink:"/dispatch/docs/administration/settings/signal/definition",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/signal/definition.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Signal",permalink:"/dispatch/docs/administration/settings/signal/"},next:{title:"Engagement Filter",permalink:"/dispatch/docs/administration/settings/signal/engagement-filter"}},l={},c=[{value:"Sending Signals to Dispatch",id:"sending-signals-to-dispatch",level:2},{value:"Creating a Signal Definition",id:"creating-a-signal-definition",level:2}],p={toc:c},d="wrapper";function u(n){let{components:e,...r}=n;return(0,a.kt)(d,(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signal-definition"},"Signal Definition"),(0,a.kt)("p",null,"Signal Defintions are your starting point for onboarding a new Signal into Dispatch and allow a number of different configuration options."),(0,a.kt)("h2",{id:"sending-signals-to-dispatch"},"Sending Signals to Dispatch"),(0,a.kt)("p",null,"You can send a signal to Dispatch by making a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/{organization}/signals/instances")," API endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nAPI_TOKEN = ""\nAPI_ENDPOINT = "http://localhost:8080/api/v1/default/signals/instances"\n\nsignal_instance = {\n  "project": "Test",\n  "raw": {\n    "name": "process_events",\n    "externalId": "someExternalValue",\n    "id": "<uuid>", # this will be used as the instance\'s uuid if provided\n    "variant": "A" , # an additional indicator for signal subtypes\n    "hostIdentifier": "host1",\n    "calendarTime": "2022-10-19T10:35:01Z",\n    "time": 1618698901,\n    "columns": {\n      "pid": 888,\n      "path": "/usr/bin/security",\n      "cmdline": "/usr/bin/security dump-keychain",\n      "state": "running",\n      "parent": 555,\n      "created_at": 1918698901,\n      "updated_at": 2118698901\n    }\n  }\n}\n\nrequests.Session()\nr = session.post(\n    API_ENDPOINT,\n    json=signal_instance,\n    headers={\n        "Content-Type": "application/json",\n        "Authorization": f"Bearer {API_TOKEN}",\n    },\n)\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can view the full API documentation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"/instances")," endpoint in the ",(0,a.kt)("a",{parentName:"p",href:"https://netflix.github.io/dispatch/docs/api#tag/signals/operation/create_signal_instance__organization__signals_instances_post"},"API Reference"),".")),(0,a.kt)("h2",{id:"creating-a-signal-definition"},"Creating a Signal Definition"),(0,a.kt)("p",null,"At a high level, you'll need to configure some basic metadata about your ",(0,a.kt)("inlineCode",{parentName:"p"},"signal")," such as the name, description, and variant.\nYou can also configure whether a ",(0,a.kt)("inlineCode",{parentName:"p"},"signal")," should create a case or not. Choosing not to create a case can be useful for contextual signals that\ndon't necessarily warrant triage and investigation on their own. But, you can still use these signals to enrich other signals and cases."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9579).Z,width:"470",height:"749"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Variant"),": The same signal can have multiple varitants with different defintions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Owner"),": Typically the team or owner that produces the Siganl."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"External ID"),": This ID will be used to correctly associate incoming signals to this definition. This ID should be unique across all Signal Definitions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Conversation Target"),": Defines the channel name where the Case for the Signal will be created."))}u.isMDXComponent=!0},9579:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/admin-ui-signal-definition-0b4679725dc59830cf8740b30800c94b.png"}}]);
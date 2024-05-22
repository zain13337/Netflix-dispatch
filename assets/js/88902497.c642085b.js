"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3917],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=i,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(4137));const a={},o="Case Priority",s={unversionedId:"administration/settings/case/case-priority",id:"administration/settings/case/case-priority",title:"Case Priority",description:"In addition to case types, Dispatch allows you to specify the case's priority.",source:"@site/docs/administration/settings/case/case-priority.mdx",sourceDirName:"administration/settings/case",slug:"/administration/settings/case/case-priority",permalink:"/dispatch/docs/administration/settings/case/case-priority",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/case/case-priority.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Case",permalink:"/dispatch/docs/administration/settings/case/"},next:{title:"Case Severity",permalink:"/dispatch/docs/administration/settings/case/case-severity"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"case-priority"},"Case Priority"),(0,i.kt)("p",null,"In addition to case types, Dispatch allows you to specify the case's priority."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8608).Z,width:"780",height:"1078"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name:")," The name of the case priority presented to the user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," The description of the case priority presented to the user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"View Order:")," The order in which the priority will be listed in menus and dropdowns."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Color:")," The color used for the case priority in the UI."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default Case Priority:")," If the reporter of a case does not provide a priority, a default will be used. Enable the setting to make this case priority the default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enabled:")," Whether this case priority is enabled or not."))}u.isMDXComponent=!0},8608:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/admin-ui-case-priorities-0faeaf083e3c2d4f191f99258c5c694b.png"}}]);
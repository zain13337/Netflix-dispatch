"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4655],{4137:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?i.createElement(d,o(o({ref:t},g),{},{components:n})):i.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(4137));const r={},o="Engagement Filter",s={unversionedId:"administration/settings/signal/engagement-filter",id:"administration/settings/signal/engagement-filter",title:"Engagement Filter",description:"Engagement Filters are used to automate the process of reaching out to a user invovled in a specific Signal Instance. Engagement Filters make use of Entity Types that match email addresses for users in your environment and custom message you configure to be sent to those users. Engagement Filters also support multi-factor authentication when validating suspicious behavior. This feature is useful when you want to be confident the user you engaged is actually who they say they are and not a malicious actor.",source:"@site/docs/administration/settings/signal/engagement-filter.mdx",sourceDirName:"administration/settings/signal",slug:"/administration/settings/signal/engagement-filter",permalink:"/dispatch/docs/administration/settings/signal/engagement-filter",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/signal/engagement-filter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Signal Definition",permalink:"/dispatch/docs/administration/settings/signal/definition"},next:{title:"Entity Type",permalink:"/dispatch/docs/administration/settings/signal/entity-type"}},l={},c=[{value:"Creating an Engagement Filter",id:"creating-an-engagement-filter",level:3}],g={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"engagement-filter"},"Engagement Filter"),(0,a.kt)("p",null,"Engagement Filters are used to automate the process of reaching out to a user invovled in a specific Signal Instance. Engagement Filters make use of Entity Types that match email addresses for users in your environment and custom message you configure to be sent to those users. Engagement Filters also support multi-factor authentication when validating suspicious behavior. This feature is useful when you want to be confident the user you engaged is actually who they say they are and not a malicious actor."),(0,a.kt)("h3",{id:"creating-an-engagement-filter"},"Creating an Engagement Filter"),(0,a.kt)("p",null,"To create an Engagement Filter, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to a Signal Definition edit page."),(0,a.kt)("li",{parentName:"ol"},"Click on the '+' icon adjacent to the 'Engagement Filter(s)' dropdown menu.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1640).Z,width:"805",height:"642"})))}m.isMDXComponent=!0},1640:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-signal-engagement-filter-dfbb37226ef0a7f5de6af470605c88db.png"}}]);
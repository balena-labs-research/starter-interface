"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[44],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"/",breadcrumbs:!0,title:"Introduction"},o="Balena Starter Interface",c={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"A community-built device interface for using balena devices. It can be used to interact with your device, or as a starter project to create your own interface.",source:"@site/docs/00-Introduction.md",sourceDirName:".",slug:"/",permalink:"/starter-interface/",draft:!1,editUrl:"https://github.com/balena-labs-research/starter-interface/edit/main/docs/00-Introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",breadcrumbs:!0,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/starter-interface/Quick Start"}},l={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"balena-starter-interface"},"Balena Starter Interface"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/64841595/191008762-ea97f42c-a7bb-4ecb-abe8-5d57874da9b3.png",alt:"wifi",width:"500"}),(0,a.kt)("p",null,"A community-built device interface for using balena devices. It can be used to interact with your device, or as a starter project to create your own interface."),(0,a.kt)("p",null,"See the ",(0,a.kt)("em",{parentName:"p"},"Quick Start")," guide in the sidebar for details on how to add this project as an interface to your existing projects, or the ",(0,a.kt)("em",{parentName:"p"},"Developing Locally")," guide on how to develop your own interface."),(0,a.kt)("p",null,"Core features include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to customise the visible components and add directly to your existing projects"),(0,a.kt)("li",{parentName:"ul"},"Online and offline compatibility"),(0,a.kt)("li",{parentName:"ul"},"Customisable Electron and Progressive Web applications for interaction with your devices"),(0,a.kt)("li",{parentName:"ul"},"Pre-built endpoints for interacting with the Balena SDK or Supervisor"),(0,a.kt)("li",{parentName:"ul"},"Connect your device to nearby Wi-Fi networks"),(0,a.kt)("li",{parentName:"ul"},"Container manager (list, stop, start, restart)"),(0,a.kt)("li",{parentName:"ul"},"File manager (create folders, upload, delete, etc...)"),(0,a.kt)("li",{parentName:"ul"},"Set, edit and remove environment variables on the device"),(0,a.kt)("li",{parentName:"ul"},"Configure the device hostname"),(0,a.kt)("li",{parentName:"ul"},"Configure the device SSID and password"),(0,a.kt)("li",{parentName:"ul"},"Captive portal"),(0,a.kt)("li",{parentName:"ul"},"Automatic mounting of USB devices into the File Manager"),(0,a.kt)("li",{parentName:"ul"},"System info and stats"),(0,a.kt)("li",{parentName:"ul"},"I18n language translations")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Electron App:")),(0,a.kt)("img",{width:"500",alt:"electron",src:"https://user-images.githubusercontent.com/64841595/213165616-73bc762b-0073-4407-a10d-52c8daa21333.png"}))}p.isMDXComponent=!0}}]);
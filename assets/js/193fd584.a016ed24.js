"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={},a=void 0,l={unversionedId:"Continuous Integration",id:"Continuous Integration",title:"Continuous Integration",description:"GitHub Workflows",source:"@site/docs/03-Continuous Integration.md",sourceDirName:".",slug:"/Continuous Integration",permalink:"/starter-interface/Continuous Integration",draft:!1,editUrl:"https://github.com/balena-labs-research/starter-interface/edit/main/docs/03-Continuous Integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developing Locally",permalink:"/starter-interface/Developing Locally"},next:{title:"Backend Endpoints",permalink:"/starter-interface/Built-in components/Backend Endpoints"}},s={},p=[{value:"GitHub Workflows",id:"github-workflows",level:2},{value:"Required GitHub Secrets",id:"required-github-secrets",level:3},{value:"Balena secrets:",id:"balena-secrets",level:4},{value:"Apple and Windows signing secrets:",id:"apple-and-windows-signing-secrets",level:4},{value:"Test Builds and Deploys",id:"test-builds-and-deploys",level:3},{value:"Production Builds and Deploys",id:"production-builds-and-deploys",level:3},{value:"Linting and Code Security",id:"linting-and-code-security",level:3},{value:"Documentation",id:"documentation",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"github-workflows"},"GitHub Workflows"),(0,i.kt)("p",null,"GitHub workflow files can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," and are triggered automatically based on their configuration."),(0,i.kt)("p",null,"Secrets are required in your GitHub repository for the workflows."),(0,i.kt)("h3",{id:"required-github-secrets"},"Required GitHub Secrets"),(0,i.kt)("h4",{id:"balena-secrets"},"Balena secrets:"),(0,i.kt)("p",null,"A balenaCloud API token with access to the application. Refer to the docs ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/balena-community/community-cli-action"},"here")," for more info."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BALENA_TOKEN")),(0,i.kt)("h4",{id:"apple-and-windows-signing-secrets"},"Apple and Windows signing secrets:"),(0,i.kt)("p",null,"More information on how to generate these can be found ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/maggie0002/a689fc01737f6a5fd72868f0f07e3d3e"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Apple:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BUILD_CERTIFICATE_BASE64\nBUILD_PROVISION_PROFILE_BASE64\nKEYCHAIN_PASSWORD\nP12_PASSWORD\nXCODE_APP_LOADER_EMAIL\nXCODE_APP_LOADER_PASSWORD\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Windows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CSC_LINK\nCSC_KEY_PASSWORD\n")),(0,i.kt)("h3",{id:"test-builds-and-deploys"},"Test Builds and Deploys"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deploy-testing.yml")," triggers when a pull request is raised against the branch ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". It deploys the code to the fleets specified in the file. It is recommended to use the same fleet names (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"bdi-rpi"),") as code deployed to these fleet names for testing will automatically provide verbose logging for debugging."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"electron-test-build.yml")," builds the Electron apps on each pull request and attaches them as assets to the workflow action found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," tab of the repository."),(0,i.kt)("p",null,"They will not be signed, and the Mac ARM app will not work as unsigned apps for that platform will not open your system. It is kept to test the build process. To test the app on Mac ARM, you will need to build it locally."),(0,i.kt)("h3",{id:"production-builds-and-deploys"},"Production Builds and Deploys"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deploy-production.yml")," triggers when ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags"},"a tag is pushed")," and performs the following functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Updates the balena Hub README to match the GitHub README."),(0,i.kt)("li",{parentName:"ol"},"Deploys the code to the production fleet specified in the file."),(0,i.kt)("li",{parentName:"ol"},"Preloads the specified balenaOS images with the application."),(0,i.kt)("li",{parentName:"ol"},"Builds and signs the Electron app for Linux, Windows, Mac AMD64 and ARM."),(0,i.kt)("li",{parentName:"ol"},"Signs the Mac and Windows apps with the Apple Developer and Microsoft Developer certificates. To override signing, you can pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"ELECTRON_SKIP_NOTARIZATION=true")," environment variable to the build. You can skip Electron app build by removing the section from the workflow file."),(0,i.kt)("li",{parentName:"ol"},"Deploys the app as Docker images to GitHub container registry."),(0,i.kt)("li",{parentName:"ol"},"Creates a release on GitHub with the images and Electron apps attached.")),(0,i.kt)("h3",{id:"linting-and-code-security"},"Linting and Code Security"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"codeql-analysis.yml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint.yml")," are triggered on each pull request and merge. They perform code security and linting checks. Ensure ",(0,i.kt)("inlineCode",{parentName:"p"},'node-version: "x.x.x"')," matches the version in your Dockerfiles to ensure it lints with the correct version."),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deploy-docs.yml")," is used to build and deploy the documentation you are viewing. It is also free to use for your own projects by editing the documentation in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./docs")," folder. More info including how to use hot-reload can be found in the documentation for the docs project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/balena-io-experimental/labs-docs-builder"},"here"),"."))}u.isMDXComponent=!0}}]);
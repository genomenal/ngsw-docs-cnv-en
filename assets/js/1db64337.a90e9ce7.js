"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),f=o,h=g["".concat(c,".").concat(f)]||g[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,sidebar_label:"Getting to know the service"},c="Getting to know the service",l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Getting to know the service",description:"When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/ngsw-docs-cnv-en/overview",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Getting to know the service"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ngsw-docs-cnv-en/"},next:{title:"Uploading genomic data",permalink:"/ngsw-docs-cnv-en/uploading-data/uploading"}},p=[],u={toc:p};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-to-know-the-service"},"Getting to know the service"),(0,a.kt)("p",null,"When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up."),(0,a.kt)("p",null,"Next you will see the main page listing the patients. If you have not previously used the service, the page will be empty. There is a search bar at the top to help you navigate through the patient pages."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"All patients page",src:n(7391).Z})),(0,a.kt)("p",null,"You can see the various sections of the service in the navigation bar on the left. The bar contains the ",(0,a.kt)("strong",{parentName:"p"},"\u201cIn process\u201d")," section, where there will be only those patients with samples being currently processed; the ",(0,a.kt)("strong",{parentName:"p"},"\u201cProblems\u201d")," section, where there will be only those patients with problems during data processing. You can transfer irrelevant data or data for later deletion to the ",(0,a.kt)("strong",{parentName:"p"},"\u201cArchive\u201d")," section."),(0,a.kt)("p",null,"Patients can be grouped into ",(0,a.kt)("strong",{parentName:"p"},"cohorts"),", for example, by type of pathology or data source. By selecting a cohort in the navigation bar on the left, you can only see patients belonging to that cohort."),(0,a.kt)("p",null,"Various global configuration options can be accessed in the ",(0,a.kt)("strong",{parentName:"p"},"\u201cSettings\u201d")," section. Here you can add sets of genes, which you can later use to filter the analysis results (",(0,a.kt)("strong",{parentName:"p"},"\u201cGene panels\u201d")," section). When creating a panel, you can select genes from a list of all genes, or import the prepared gene list as text (for example TP53, BRCA1, EGFR). Alternatively, you can select a panel from a library of the most common clinical panels and the genes will be imported from there automatically. This can significantly speed up further data interpretation if you are only interested in a narrow range of genes within a specific pathology or group of pathologies."),(0,a.kt)("p",null,"If you are analyzing the data obtained by targeted sequencing with the enrichment of certain regions based on one of the common capture kits, the service will automatically detect which kit was used. However, to speed up the processing or in the case of using a custom kit, you can upload sequenced regions in BED format in the ",(0,a.kt)("strong",{parentName:"p"},"\u201cCapture kits\u201d")," section (make sure that you have correctly specified the assembly of the reference genome when uploading the BED file)."))}g.isMDXComponent=!0},7391:function(e,t,n){t.Z=n.p+"assets/images/1-all-patients-page-783def9280a41b6da5269fb02c285e13.png"}}]);
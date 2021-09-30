"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7588:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return A},default:function(){return w},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return v}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),l=n(9443);var c=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,a=e.block,r=e.defaultValue,i=e.values,l=e.groupId,d=e.className,m=o.Children.toArray(e.children),g=null!=i?i:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=r?r:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,A=c(),h=A.tabGroupChoices,v=A.setTabGroupChoices,b=(0,o.useState)(f),w=b[0],B=b[1],k=[];if(null!=l){var y=h[l];null!=y&&y!==w&&g.some((function(e){return e.value===y}))&&B(y)}var I=function(e){var t=e.currentTarget,n=k.indexOf(t),a=g[n].value;B(a),null!=l&&(v(l,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case"ArrowLeft":var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},d)},g.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var m=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},g=["components"],f={sidebar_position:2,sidebar_label:"Upload Files"},A="Upload Files",h={unversionedId:"uploading-data/uploading-multiple-groups-of-samples/upload-sample",id:"uploading-data/uploading-multiple-groups-of-samples/upload-sample",isDocsHomePage:!1,title:"Upload Files",description:"First, select the files which you want to perform analysis for. Genomenal supports FASTQ and BAM formats in this pipeline.",source:"@site/docs/uploading-data/uploading-multiple-groups-of-samples/upload-sample.md",sourceDirName:"uploading-data/uploading-multiple-groups-of-samples",slug:"/uploading-data/uploading-multiple-groups-of-samples/upload-sample",permalink:"/ngsw-docs-cnv-en/uploading-data/uploading-multiple-groups-of-samples/upload-sample",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upload Files"},sidebar:"tutorialSidebar",previous:{title:"Uploading multiple groups of samples for different patients",permalink:"/ngsw-docs-cnv-en/uploading-data/uploading-multiple-groups-of-samples/uploading-multiple-groups-of-samples"},next:{title:"Compose Sample Set",permalink:"/ngsw-docs-cnv-en/uploading-data/uploading-multiple-groups-of-samples/compose-sample-set"}},v=[{value:"Recognizing paired files",id:"recognizing-paired-files",children:[]}],b={toc:v};function w(e){var t=e.components,o=(0,r.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upload-files"},"Upload Files"),(0,i.kt)("p",null,"First, select the files which you want to perform analysis for. Genomenal supports FASTQ and BAM formats in this pipeline."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The files can be uploaded:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(d,{defaultValue:"pc",values:[{label:"From computer",value:"pc"},{label:"From FTP, HTTP or Yandex Disk servers",value:"url"},{label:"From the NCBI SRA database",value:"sra"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"pc",mdxType:"TabItem"},"To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:",(0,i.kt)("br",null),(0,i.kt)("img",{src:"../../img/eng/9-drag-drop-box.png"})),(0,i.kt)(m,{value:"url",mdxType:"TabItem"},"To upload, paste the link to the file on the server into the placeholder:",(0,i.kt)("br",null),(0,i.kt)("img",{src:"../../img/eng/10-12-url-box.png"}),(0,i.kt)("br",null),"and click on the button:",(0,i.kt)("br",null),(0,i.kt)("img",{src:"../../img/eng/11-13-url_active.png"})),(0,i.kt)(m,{value:"sra",mdxType:"TabItem"},"To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:",(0,i.kt)("br",null),(0,i.kt)("img",{src:"../../img/eng/10-12-url-box.png"}),(0,i.kt)("br",null),"and click on the button:",(0,i.kt)("br",null),(0,i.kt)("img",{src:"../../img/eng/11-13-url_active.png"}),(0,i.kt)("br",null))))),(0,i.kt)("h2",{id:"recognizing-paired-files"},"Recognizing paired files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If your sequencing is paired-end and a pair of FASTQ files of the same sample is named in an ",(0,i.kt)("a",{parentName:"li",href:"https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm"},"Illumina convention")," (or even by some other common read naming scheme), the files will be automatically recognized as a pair when added:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pair",src:n(3162).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the pair is not recognized correctly, you can manually unlink files by clicking on the corresponding button highlighted below:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unpair",src:n(6618).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the automatic pair recognition didn\u2019t succeed, you can manually pair the files by clicking and dragging the same element:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Force pair",src:n(3239).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While you fill in the rest of the fields, the files are already being uploaded to the system. Even if the files were not uploaded completely, you can start analyzing the samples."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Attention!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device."))),(0,i.kt)("p",null,"Drag the sample card to the adjacent placeholder in the ",(0,i.kt)("strong",{parentName:"p"},"\u201cCompose Sample Set\u201d")," section."))}w.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},3162:function(e,t){t.Z="data:image/png;base64,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"},6618:function(e,t){t.Z="data:image/png;base64,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"},3239:function(e,t,n){t.Z=n.p+"assets/images/6-16-force-pair-a02b4dbef0aeacb420e551bc10e11f0f.png"}}]);
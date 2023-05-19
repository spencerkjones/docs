"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="6.9.1",l={unversionedId:"unraid-os/release-notes/6.9.1",id:"unraid-os/release-notes/6.9.1",title:"6.9.1",description:"Bug fixes and minor improvements.",source:"@site/docs/unraid-os/release-notes/6.9.1.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.9.1",permalink:"/zh/unraid-os/release-notes/6.9.1",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.9.1.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.9.2",permalink:"/zh/unraid-os/release-notes/6.9.2"},next:{title:"6.9.0",permalink:"/zh/unraid-os/release-notes/6.9.0"}},s={},p=[{value:"Notable Bug Fixes and Improvements",id:"notable_bug_fixes_and_improvements",level:2},{value:"Driver Updates",id:"driver_updates",level:3},{value:"Change Log",id:"change_log",level:2},{value:"Version 6.9.1 2021-03-08",id:"version_6.9.1_2021_03_08",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"691"},"6.9.1"),(0,i.kt)("p",null,"Bug fixes and minor improvements."),(0,i.kt)("h2",{id:"notable_bug_fixes_and_improvements"},"Notable Bug Fixes and Improvements"),(0,i.kt)("p",null,"Fixed issue where code outside the Unraid OS Management Utility calling\n",(0,i.kt)("inlineCode",{parentName:"p"},"smartctl")," would set up conditions where devices would never spin down.\nNote: you still need\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/profile/8006-doron/"},"\\@doron"),"\\'s ",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/97351-plugin-spin-down-sas-drives/"},"SAS\nSpindown\nplugin"),"\nto properly support SAS device spindown."),(0,i.kt)("p",null,"For Docker: if an in-tree GPU driver is loaded which results in creating\n",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/dri/*")," device nodes, we set permissions for these nodes to ",(0,i.kt)("inlineCode",{parentName:"p"},"0777"),"\nin order to ease integration of containers using GPU for transcoding."),(0,i.kt)("p",null,"Typing \\'exit\\' in a Terminal window will now close the window (yay!)."),(0,i.kt)("p",null,"We added a \\'no-cache\\' header to NoVNC web access so that future Unraid\nOS releases will no longer have stale web components."),(0,i.kt)("p",null,"Updated the openssl package to version 1.1.1j which has security\nupdates."),(0,i.kt)("p",null,"Updated the Linux kernel to 5.10.21, a patch release to 5.10 LTS kernel."),(0,i.kt)("p",null,"Included kernel config settings necessary to include certain hardware\nmonitoring devices and added support for new devices."),(0,i.kt)("h3",{id:"driver_updates"},"Driver Updates"),(0,i.kt)("p",null,"The Nvidia GPU driver has been updated to 460.56 and should work with\nthis kernel 5.10.21. Please install\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/profile/72388-ich777/"},"\\@ich777"),"\\'s\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/98978-plugin-nvidia-driver/"},"Nvidia-Driver\nplugin")," to\ndownload and install this driver."),(0,i.kt)("h2",{id:"change_log"},"Change Log"),(0,i.kt)("h3",{id:"version_6.9.1_2021_03_08"},"Version 6.9.1 2021-03-08"),(0,i.kt)("p",null,"Base distro:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"openssl: version 1.1.1j (CVE-2021-23841 CVE-2021-23840)"),(0,i.kt)("li",{parentName:"ul"},"openssl-solibs: version 1.1.1j"),(0,i.kt)("li",{parentName:"ul"},"ttyd: version 1.6.3")),(0,i.kt)("p",null,"Linux kernel:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"version 5.10.21"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_WATCHDOG: Watchdog Timer Support"),(0,i.kt)("li",{parentName:"ul"},"added several new hwmon drivers")),(0,i.kt)("p",null,"Management:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"emhttp: monitor partition statistics instead of device statistics in\nspindown/spinup logic"),(0,i.kt)("li",{parentName:"ul"},"rc.local: ensure required directories exist on USB flash boot device"),(0,i.kt)("li",{parentName:"ul"},"rc.local: for Docker containers: grant access to graphics device\nnodes /dev/dri/","*"),(0,i.kt)("li",{parentName:"ul"},"rc.nginx: add Cache-Control:nocache header to novnc"),(0,i.kt)("li",{parentName:"ul"},"webgui: Increase syslog buffer from 1000 to 3000 lines"),(0,i.kt)("li",{parentName:"ul"},"webgui: SysDevs fix display aberration"),(0,i.kt)("li",{parentName:"ul"},"webgui: Diagnostics: include modprobe.d files"),(0,i.kt)("li",{parentName:"ul"},"webgui: Diagnostics: include go as go.txt"),(0,i.kt)("li",{parentName:"ul"},"webgui: Update share security helptext"),(0,i.kt)("li",{parentName:"ul"},"webgui: Deprecate donation links in templates in lieu of links in CA\nprofiles"),(0,i.kt)("li",{parentName:"ul"},"webgui: Protect GUI from invalid .page files"),(0,i.kt)("li",{parentName:"ul"},"webgui: Suppress ipv6 multicast entries in route table display"),(0,i.kt)("li",{parentName:"ul"},"webgui: synchronize helptext.txt with lang-en_US repo"),(0,i.kt)("li",{parentName:"ul"},"webgui: user management - disable password autocomplete"),(0,i.kt)("li",{parentName:"ul"},"webgui: Dashboard: Fix color for utilization of disks")))}c.isMDXComponent=!0}}]);
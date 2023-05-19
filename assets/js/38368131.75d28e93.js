"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},l=void 0,o={unversionedId:"legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",id:"legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",title:"Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",description:"\\",source:"@site/docs/legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",permalink:"/legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Parity",permalink:"/legacy/FAQ/Parity"},next:{title:"Replacing_a_Data_Drive",permalink:"/legacy/FAQ/Replacing_a_Data_Drive"}},s={},p=[{value:"Faster Method",id:"faster_method",level:2},{value:"Safer Method",id:"safer_method",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\\\n",(0,n.kt)("strong",{parentName:"p"},"Problem: You want to consolidate several smaller drives onto a new and\nlarger drive.")),(0,n.kt)("p",null,"An example: you have two 2TB data drives and you want to replace them\nwith a single 4TB drive."),(0,n.kt)("p",null,"Some notes before you start:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IMPORTANT!!! Any time you remove drives from the array, parity\nmust be rebuilt. In the example above, there will be one less drive\nat the end, so there will HAVE to be a parity rebuild.")),(0,n.kt)("li",{parentName:"ul"},"Parity drive must be at least as large as the largest single data\ndrive. For the example above, parity would have to be at least 4TB."),(0,n.kt)("li",{parentName:"ul"},"You should be reasonably confident in the health of all drives\nbefore attempting a change to your array configuration. A recent\nparity check and SMART reports for all drives would be a good idea."),(0,n.kt)("li",{parentName:"ul"},"It is recommended that any time a new drive is put in the array, the\nlatest version of the preclear script is used on the drive to test\nthat it can be trusted in the array. A problem with one disk can\nprevent other disks from being recovered if they have a problem."),(0,n.kt)("li",{parentName:"ul"},"Writing the large amount of data that may be involved with very\nlarge drives can take many hours. When using a\n",(0,n.kt)("a",{parentName:"li",href:"telnet",title:"wikilink"},"telnet")," session to transfer data, it is\nrecommended that the linux ",(0,n.kt)("strong",{parentName:"li"},"screen")," command be used, so the\nsession can be resumed if there is any disconnect or timeout. In\nunRAID v6, install the\n",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://lime-technology.com/forum/index.php?topic=37541"},"NerdPack")),"\nto obtain ",(0,n.kt)("strong",{parentName:"li"},"screen")," (see the NerdPack notes\n",(0,n.kt)("a",{parentName:"li",href:"http://lime-technology.com/wiki/index.php/Upgrading_to_UnRAID_v6#Plugins"},"here"),").\nIn unRAID v5, you can use ",(0,n.kt)("a",{parentName:"li",href:"UnRAID_Add_Ons#UnMENU",title:"wikilink"},"UnMENU"),"\nto install ",(0,n.kt)("strong",{parentName:"li"},"screen"),"."),(0,n.kt)("li",{parentName:"ul"},"Ensure that no new files will be written to the affected drives\nduring this process. If user shares and caching might involve the\ndrives, don\\'t write to the user shares, and run Mover before\nstarting to make sure all writes to the drives are finished."),(0,n.kt)("li",{parentName:"ul"},"Any time you change your array configuration, be very careful when\nassigning the parity drive. If you accidentally assign a data drive\nto the parity slot and start the array, that drive will be\noverwritten with parity and the data will be lost!")),(0,n.kt)("p",null,"\\\n","-","-","-","- There are two methods you can use to replace multiple drives\nwith a single larger drive, the faster method, and the safer method.\nEither of these methods can be easily adapted to replace 3 or more\ndrives with a larger drive."),(0,n.kt)("h2",{id:"faster_method"},"Faster Method"),(0,n.kt)("p",null,"This method disables the parity drive while transferring data from the\nsmaller drives to the larger drive, and then rebuilds parity at the end.\nNot having parity allows faster writing to the larger drive."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop array and power down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add new larger drive and power up.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop array and use Tools - New Config.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign new larger drive to new slot, unassign parity drive, and\nstart array.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy all files from the smaller drives to the larger drive. For\nexample, if the smaller drives are Disk 1 and Disk 2, and the larger\ndrive is Disk 3, then you could use these commands in console or\ntelnet:"),(0,n.kt)("p",{parentName:"li"},":   ",(0,n.kt)("strong",{parentName:"p"},"rsync -avX /mnt/disk1/ /mnt/disk3"),"\n:   ",(0,n.kt)("strong",{parentName:"p"},"rsync -avX /mnt/disk2/ /mnt/disk3"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop array and power down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove smaller drives and power up.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use New Config to unassign removed drives and assign parity. You can\nalso change the slot assignment of the new drive or any other drives\nat this point.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start array and let parity rebuild."))),(0,n.kt)("h2",{id:"safer_method"},"Safer Method"),(0,n.kt)("p",null,"This method rebuilds one of the smaller drives onto the new larger drive\nthen copies the data from the other smaller drives. This will maintain\nparity during the data transfer then rebuild parity after the last of\nthe smaller drives have been removed."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop array and power down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace one of the smaller drives with the new larger drive and\npower up.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign new larger drive to replace missing smaller drive, and start\nthe array, to let unRAID rebuild onto it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy all files from the other smaller drive(s) to the larger drive.\nFor example, if a smaller drive is Disk 2 and the larger drive is\nDisk 3, then you could use this command in console or telnet:"),(0,n.kt)("p",{parentName:"li"},":   ",(0,n.kt)("strong",{parentName:"p"},"rsync -avX /mnt/disk2/ /mnt/disk3"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop array and power down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the remaining smaller drive(s) and power up.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use New Config to unassign removed drive(s). You can also change the\nslot assignments of the new drive or any other drives at this point.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start array and let parity rebuild."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important! If any user shares are set to include/exclude specific\ndisks, don\\'t forget to update these settings to reflect the new drive\nnumbering."),"\\\n\\"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")," ",(0,n.kt)("a",{parentName:"p",href:"Category:_Hard_drives",title:"wikilink"},"Category: Hard\ndrives")))}h.isMDXComponent=!0}}]);
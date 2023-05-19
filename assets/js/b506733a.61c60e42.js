"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",id:"legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",title:"Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",description:"The following are my notes for setting up my unRAID server to sleep to",source:"@site/docs/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL).md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",permalink:"/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL).md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Setting_up_CPU_and_board_temperature_sensing",permalink:"/legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing"},next:{title:"Shrink_array",permalink:"/legacy/FAQ/Shrink_array"}},p={},s=[{value:"Additional Information",id:"additional_information",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following are my notes for setting up my unRAID server to sleep to\nS3 state and then wake up to Magic Packet. This is a \\'For Beginners, By\nBeginners\\' effort - there\\'s very little original work here. I just\ntried to piece together whatever I needed from various threads on the\nunRAID forums. My server uses a Foxconn A7GM-S AMD 780G/SB700 based\nmotherboard, and I am running unRAID 4.4.2. In general, I think the\nbelow is procedurally correct - although different motherboards will\nhave different capabilities and driver concerns. Also - all computers\nwith access to my unRAID server are Windows machines, I do not know how\nany of this would change if accessing from a machine with a different\nOS. The following assumes the use of a Windows machine."),(0,o.kt)("p",null,"1","."," BIOS settings for S1 / S3 sleep state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Review BIOS settings on unRAID server for allowable sleep states."),(0,o.kt)("li",{parentName:"ul"},'On my motherboard, the setting is "ACPI Suspend Type" and provides\noption to either suspend to S1 or S3 sleep state. Select S3.')),(0,o.kt)("p",null,"2","."," BIOS settings for WOL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Review BIOS settings on unRAID server for "Resume by" options.'),(0,o.kt)("li",{parentName:"ul"},'My motherboard has a setting for "Resume by LAN". It can be enabled\nor disabled. You need to enable "Resume by LAN".')),(0,o.kt)("p",null,"3","."," Double check NIC WOL settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Boot unRAID server."),(0,o.kt)("li",{parentName:"ul"},"Use the Terminal on the WebUI (present in v6, one of the buttons in\nthe upper right corner, or fall-back to ",(0,o.kt)("a",{parentName:"li",href:"SSH",title:"wikilink"},"SSH")," or if\nabsolutely neccesary ",(0,o.kt)("a",{parentName:"li",href:"Telnet",title:"wikilink"},"Telnet"),") and type ",(0,o.kt)("strong",{parentName:"li"},"ethtool\neth0")," from the command line"),(0,o.kt)("li",{parentName:"ul"},"You\\'re looking to confirm that the setting for \"Wake-on\" includes\n\\'g\\' . . . which is the option for allowing Wake on Magic Packet.\nWe're essentially confirming the BIOS settings from Step 2 above."),(0,o.kt)("li",{parentName:"ul"},"The results of my ",(0,o.kt)("strong",{parentName:"li"},"ethtool eth0")," command are as follows:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0root@Tower:~#\xa0ethtool\xa0eth0"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0Settings\xa0for\xa0eth0:"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Supported\xa0ports:\xa0[\xa0TP\xa0MII\xa0]"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Supported\xa0link\xa0modes:\xa0\xa0\xa010baseT/Half\xa010baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0100baseT/Half\xa0100baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa01000baseT/Half\xa01000baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Supports\xa0auto-negotiation:\xa0Yes"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Advertised\xa0link\xa0modes:\xa0\xa010baseT/Half\xa010baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0100baseT/Half\xa0100baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa01000baseT/Half\xa01000baseT/Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Advertised\xa0auto-negotiation:\xa0Yes"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Speed:\xa01000Mb/s"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Duplex:\xa0Full"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Port:\xa0MII"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0PHYAD:\xa00"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Transceiver:\xa0internal"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Auto-negotiation:\xa0on"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Supports\xa0Wake-on:\xa0pumbg"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Wake-on: g")),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Current\xa0message\xa0level:\xa00x00000033\xa0(51)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Link\xa0detected:\xa0yes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the wake-on setting does not include \\'g\\', you can set it\nmanually by typing the following at the server command line:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ethtool -s eth0 wol g"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If necessary, you can add the above line to your \\'go\\' script, but\nI\\'ve not had a problem with my machine keeping the setting once it\nis set and the appropriate Wake on LAN setting is enabled in BIOS.")),(0,o.kt)("p",null,"4","."," Download ",(0,o.kt)("strong",{parentName:"p"},"wolcmd")," executable"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"http://www.depicus.com/wake-on-lan/wake-on-lan-cmd.aspx"},"Depicus \\'Wake on\nLan\\'"),"\npage, select ",(0,o.kt)("strong",{parentName:"li"},"Download")," button near the bottom"),(0,o.kt)("li",{parentName:"ul"},"I placed the file in ",(0,o.kt)("em",{parentName:"li"},"C:","\\","Program Files","\\","WOLcmd")," (location becomes\nimportant in next step)"),(0,o.kt)("li",{parentName:"ul"},"There are other Magic Packet tools available, this is just one that\nI found simple to deal with.")),(0,o.kt)("p",null,"5","."," Generate ",(0,o.kt)("strong",{parentName:"p"},"Wakeup.bat")," batch file (or download mine from\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=3657.msg39076#msg39076"},"here"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"My batch file is simply two lines",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Change folder directory as necessary depending on where you\nsaved wolcmd.exe."),(0,o.kt)("li",{parentName:"ul"},"Enter the MAC address of your unRAID server in the second line\ninstead of \\'MAC\\'")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0"),(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cd c:\\program files\\wolcmd")),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0\xa0"),(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"wolcmd MAC 255.255.255.255 255.255.255.255"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Place the batch file on your desktop for easy access."),(0,o.kt)("li",{parentName:"ul"},"Copy of my batch file attached to ",(0,o.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=3657.msg39076#msg39076"},"this unRAID forum\npost"))),(0,o.kt)("p",null,"6","."," Manually test sleep and WOL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spin-down drives (I\\'m not certain that this is required. I did\nforce sleep from the active state (spinning) once before and got a\nparity check on wake-up. I\\'ll test some more.)"),(0,o.kt)("li",{parentName:"ul"},"Telnet to server and enter ",(0,o.kt)("strong",{parentName:"li"},"echo 3 ",">","/proc/acpi/sleep"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure server sleeps"))),(0,o.kt)("li",{parentName:"ul"},"Execute ",(0,o.kt)("strong",{parentName:"li"},"Wakeup.bat")," file",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure server wakes up"))),(0,o.kt)("li",{parentName:"ul"},"Repeat / test until comfortable")),(0,o.kt)("p",null,"Note: Some people have reported that their system misbehaves on the\nsecond or later sleep, so you should test sleep and wake-up for a while\nand make sure everything is correct. In fact, I just noticed that waking\nup from S3 sleep, my system does not negotiate a gigabit connection and\nI go from 1000Mb/s to 100Mb/s after the initial sleep. So I have a\nlittle more work to do -- I'm guessing a Linux driver issue?"),(0,o.kt)("p",null,"7","."," Record hard drive references (sda, sdb, etc)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From unRAID 'Devices' page, make note of the hard drive references\nin your system. You're building a list of hard drives in the system\nfor use in the sleep script.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I am currently only using two SATA drives, so my drive\nreferences are: ",(0,o.kt)("strong",{parentName:"li"},"sda")," and ",(0,o.kt)("strong",{parentName:"li"},"sdb"))))),(0,o.kt)("p",null,"8","."," Generate sleep script, or download mine from\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=3657.msg39076#msg39076"},"here")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I copied OMV\\'s sleep script verbatim from ",(0,o.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=3657"},"this unRAID forum\nthread"),", and\nthen edited the lines shown below in bold:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#!/bin/bash"),"\\\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},'drives="/dev/sda /dev/sdb"')),"\\\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"timeout=5")),"\\\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"count=5")),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"while\xa0[\xa01\xa0]"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"do"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0hdparm\xa0-C\xa0$drives\xa0|\xa0grep\xa0-q\xa0active"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0if\xa0[\xa0$?\xa0-eq\xa01\xa0]"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0then"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0count=$[$count-1]"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0else"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0count=$timeout"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0fi"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0if\xa0[\xa0$count\xa0-le\xa00\xa0]"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0then"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0Do\xa0pre-sleep\xa0activities"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0sleep\xa05"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0Go\xa0to\xa0sleep"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0echo\xa03\xa0>\xa0/proc/acpi/sleep"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0Do\xa0post-sleep\xa0activities"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0Force\xa0NIC\xa0into\xa0gigabit\xa0mode"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0(might\xa0be\xa0needed\xa0forgets\xa0about\xa0gigabit\xa0when\xa0it\xa0wakes\xa0up)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0ethtool\xa0-s\xa0eth0\xa0speed\xa01000"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0#\xa0Force\xa0a\xa0DHCP\xa0renewal\xa0(shouldn't\xa0be\xa0used\xa0for\xa0static-ip\xa0boxes)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0/sbin/dhcpcd\xa0-n"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0sleep\xa05"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0count=$timeout"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fi"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0#\xa0Wait\xa0a\xa0minute"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0echo\xa0COUNT\xa0$count"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0sleep\xa060"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"done")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"timeout=5 and count=5 are programmable timers to set the delay from\nspin-down until sleep. This sets the delay to five minutes after\nspin down, OMV\\'s original script was 15 minutes."),(0,o.kt)("li",{parentName:"ul"},"drives= line needs to be edited to reflect the drives that you want\nto be checked for status (idle or spinning). Again, my server only\nhas two drives (",(0,o.kt)("strong",{parentName:"li"},"sda")," and ",(0,o.kt)("strong",{parentName:"li"},"sdb"),"), so I edited accordingly. Be\naware that this drive list can change when upgrading unRAID or\nmodifying your hardware. It can even change from one boot to the\nnext. For example, your flash drive may be assigned ",(0,o.kt)("strong",{parentName:"li"},"sdc")," on one\nboot, but ",(0,o.kt)("strong",{parentName:"li"},"sdd")," on the next boot, with one of your hard drives\nassigned to ",(0,o.kt)("strong",{parentName:"li"},"sdd")," the first time, and ",(0,o.kt)("strong",{parentName:"li"},"sdc")," the next time."),(0,o.kt)("li",{parentName:"ul"},"Copy of my ",(0,o.kt)("strong",{parentName:"li"},"s3.sh")," sleep script attached to ",(0,o.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=3657.msg39076#msg39076"},"this unRAID forum\npost"))),(0,o.kt)("p",null,"9","."," Save script onto flash drive in specified location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I titled my sleep script ",(0,o.kt)("strong",{parentName:"li"},"s3.sh")," and saved in ",(0,o.kt)("strong",{parentName:"li"},"/boot/custom/bin"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:"),' \\"boot\\" is ',(0,o.kt)("em",{parentName:"p"},"already")," the name of the root directory of\nyour flash device. So, if you save your script as per this example, do\n",(0,o.kt)("strong",{parentName:"p"},"not"),' create another \\"boot\\" directory. Doing so will cause unRAID to\nlose track of your config directory and your entire configuration will\nbe lost (unless previously backed up elsewhere.)'),(0,o.kt)("p",null,"10","."," Edit 'go' file to call script"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I added the following lines to my go script to initiate the sleep\nscript during boot:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0Execute\xa0s3.sh\xa0sleep\xa0script"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fromdos\xa0<\xa0/boot/custom/bin/s3.sh\xa0|\xa0at\xa0now\xa0+\xa01\xa0minute")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you adjust file directory structure as necessary depending\nupon where you saved your ",(0,o.kt)("strong",{parentName:"li"},"s3.sh")," script.")),(0,o.kt)("p",null,"11","."," Re-boot / test"),(0,o.kt)("p",null,"Good luck!"),(0,o.kt)("h3",{id:"additional_information"},"Additional Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"UnRAID_Topical_Index#Wake_On_LAN",title:"wikilink"},"Wake On LAN"),"\ntopic for many links to related discussions")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Category:_Customising_unRAID",title:"wikilink"},"Category: Customising unRAID"),"\n",(0,o.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")))}u.isMDXComponent=!0}}]);
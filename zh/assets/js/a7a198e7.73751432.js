"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),c=o,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,p={unversionedId:"legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing",id:"legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing",title:"Setting_up_CPU_and_board_temperature_sensing",description:"\\",source:"@site/docs/legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing",permalink:"/zh/legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Setting_up_CPU_and_board_temperature_sensing.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Replacing_a_Data_Drive",permalink:"/zh/legacy/FAQ/Replacing_a_Data_Drive"},next:{title:"Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",permalink:"/zh/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)"}},s={},l=[{value:"Setting up sensing for v6",id:"setting_up_sensing_for_v6",level:2},{value:"Setting up sensing for older versions",id:"setting_up_sensing_for_older_versions",level:2}],m={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\\\n",(0,o.kt)("strong",{parentName:"p"},"This page is designed to help you obtain your CPU and motherboard\ntemperatures, and hopefully keep them current and visible. If you\naren\\'t using unRAID v6 with the Dynamix System Temp plugin, then skip\ndown to the \\'older versions\\' section."),"\\\n\\"),(0,o.kt)("h2",{id:"setting_up_sensing_for_v6"},"Setting up sensing for v6"),(0,o.kt)("p",null,":   ",(0,o.kt)("em",{parentName:"p"},"This section is only for unRAID v6 with the Dynamix System Temp\nplugin installed. These instructions are lifted directly from the\nauthor\\'s words\n",(0,o.kt)("a",{parentName:"em",href:"http://lime-technology.com/forum/index.php?topic=31172.msg473847#msg473847"},"here"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Preparation"),(0,o.kt)("p",{parentName:"li"},":   Install the perl package, easiest done by installing the\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=37541.0"},"NerdPack\nplugin"),',\nthen in the plugin enabling perl to install. Perl is only needed\nby the script \\"sensors-detect\\", which will be run in the\nbackground by the Detect function of Step 2. Once you have\ncompleted System Temp setup, perl is no longer needed and can be\ndisabled, uninstalled.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Detection"),(0,o.kt)("p",{parentName:"li"},":   Press the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Detect>"),"{=html} button to search and automatically\nfill in the required drivers, or alternatively - if you know the\nname of the driver(s) - you can fill them in manually.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Saving and activation"),(0,o.kt)("p",{parentName:"li"},":   Press the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Save>"),"{=html} button to save and activate (load) the\ndriver(s). ",(0,o.kt)("em",{parentName:"p"},"This will create the file\n",(0,o.kt)("strong",{parentName:"em"},"/config/plugins/dynamix.system.temp/drivers.conf")," on your\nflash device."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sensor assignment and display"),(0,o.kt)("p",{parentName:"li"},":   Use the dropdown menus under sensors to assign the appropriate\nsensor for CPU and motherboard readings. You may need to consult\nthe user guide of your motherboard to find out which sensor\nneeds to be selected here. Once a sensor selection is done, the\ncorresponding item will be displayed at the right side of the\nfooter. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Apply>"),"{=html} button to confirm your\nselection. ",(0,o.kt)("em",{parentName:"p"},"This will create the file\n",(0,o.kt)("strong",{parentName:"em"},"/config/plugins/dynamix.system.temp/sensors.conf")," on your\nflash device."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You are done! You no longer need perl installed, and can remove it."))),(0,o.kt)("p",null,"\\\n: ",(0,o.kt)("strong",{parentName:"p"},"Last but not least: see also the online Help for System Temp!")),(0,o.kt)("p",null,":   ",(0,o.kt)("em",{parentName:"p"},"Note: to unassign or remove a sensor just unselect it from the\ndropdown menu. This will also allow you to make new assignments (for\nexample when the wrong sensor was chosen).")),(0,o.kt)("p",null,"\\"),(0,o.kt)("h2",{id:"setting_up_sensing_for_older_versions"},"Setting up sensing for older versions"),(0,o.kt)("p",null,"To pass system sensor data (such as temps, voltages, and fan speeds) to\n3rd-party addons such as\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=30939"},"Dynamix")," (using\nits ",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=31172"},"System Temp\nplugin"),") or\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=12698.2685"},"SimpleFeatures"),",\nyou need to load the required drivers and setup your sensor\nconfiguration file ",(0,o.kt)("strong",{parentName:"p"},"sensors.conf"),"."),(0,o.kt)("p",null,"The following steps should work for most motherboards. ",(0,o.kt)("em",{parentName:"p"},"(tested on a\nSuperMicro C2SEE/C2SEA)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Open a console"),"\\\nYou can either use the command console on the UnRAID server itself (if\nyou have a keyboard and monitor attached), or you can login from another\ncomputer and use ",(0,o.kt)("a",{parentName:"p",href:"Terminal_Access",title:"wikilink"},"SSH or Telnet"),". On\nWindows, the ",(0,o.kt)("a",{parentName:"p",href:"Terminal_Access#PuTTY",title:"wikilink"},"PuTTY")," client for SSH\nand Telnet is preferred, because it allows you to use cut and paste, to\nsave generated lines for your own sensors configuration file.\\\n",(0,o.kt)("strong",{parentName:"p"},"Step 2: Run sensors"),"\\\nAt the command prompt, run ",(0,o.kt)("strong",{parentName:"p"},"sensors"),". Even without loading drivers,\nyou will probably see a sensor or two, with temps and other info. The\noutput should appear similar to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"root@Skynet:~#\xa0sensors"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"coretemp-isa-0000"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Adapter:\xa0ISA\xa0adapter"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Core\xa00:\xa0\xa0\xa0\xa0\xa0\xa0\xa0+37.0\xa0C\xa0\xa0(high\xa0=\xa0+78.0\xa0C,\xa0crit\xa0=\xa0+100.0\xa0C)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Core\xa01:\xa0\xa0\xa0\xa0\xa0\xa0\xa0+37.0\xa0C\xa0\xa0(high\xa0=\xa0+78.0\xa0C,\xa0crit\xa0=\xa0+100.0\xa0C)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"w83627dhg-isa-0290"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Adapter:\xa0ISA\xa0adapter"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Vcore:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+0.92\xa0V\xa0\xa0(min\xa0=\xa0\xa0+0.92\xa0V,\xa0max\xa0=\xa0\xa0+1.48\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"in1:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+1.86\xa0V\xa0\xa0(min\xa0=\xa0\xa0+1.65\xa0V,\xa0max\xa0=\xa0\xa0+1.99\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AVCC:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+3.38\xa0V\xa0\xa0(min\xa0=\xa0\xa0+2.96\xa0V,\xa0max\xa0=\xa0\xa0+3.63\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"+3.3V:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+3.38\xa0V\xa0\xa0(min\xa0=\xa0\xa0+2.61\xa0V,\xa0max\xa0=\xa0\xa0+0.11\xa0V)\xa0\xa0ALARM"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"in4:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+1.57\xa0V\xa0\xa0(min\xa0=\xa0\xa0+1.35\xa0V,\xa0max\xa0=\xa0\xa0+1.65\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"in5:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+1.30\xa0V\xa0\xa0(min\xa0=\xa0\xa0+1.13\xa0V,\xa0max\xa0=\xa0\xa0+1.38\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"in6:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+1.46\xa0V\xa0\xa0(min\xa0=\xa0\xa0+1.42\xa0V,\xa0max\xa0=\xa0\xa0+1.52\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"3VSB:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+3.33\xa0V\xa0\xa0(min\xa0=\xa0\xa0+2.96\xa0V,\xa0max\xa0=\xa0\xa0+3.63\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Vbat:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+3.26\xa0V\xa0\xa0(min\xa0=\xa0\xa0+2.96\xa0V,\xa0max\xa0=\xa0\xa0+3.63\xa0V)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fan1:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00\xa0RPM\xa0\xa0(min\xa0=\xa0\xa0715\xa0RPM,\xa0div\xa0=\xa016)\xa0\xa0ALARM"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fan2:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa02678\xa0RPM\xa0\xa0(min\xa0=\xa0\xa0712\xa0RPM,\xa0div\xa0=\xa08)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fan3:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00\xa0RPM\xa0\xa0(min\xa0=\xa0\xa0715\xa0RPM,\xa0div\xa0=\xa016)\xa0\xa0ALARM"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fan4:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00\xa0RPM\xa0\xa0(min\xa0=\xa0\xa0\xa044\xa0RPM,\xa0div\xa0=\xa0128)\xa0\xa0ALARM"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"fan5:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00\xa0RPM\xa0\xa0(min\xa0=\xa0\xa0715\xa0RPM,\xa0div\xa0=\xa016)\xa0\xa0ALARM"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"temp1:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+35.0\xa0C\xa0\xa0(high\xa0=\xa0+60.0\xa0C,\xa0hyst\xa0=\xa0+55.0\xa0C)\xa0\xa0sensor\xa0=\xa0thermistor"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"temp2:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+37.0\xa0C\xa0\xa0(high\xa0=\xa0+80.0\xa0C,\xa0hyst\xa0=\xa0+75.0\xa0C)\xa0\xa0sensor\xa0=\xa0CPU\xa0diode"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"temp3:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+0.0\xa0C\xa0\xa0(high\xa0=\xa0+80.0\xa0C,\xa0hyst\xa0=\xa0+75.0\xa0C)\xa0\xa0sensor\xa0=\xa0CPU\xa0diode"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"cpu0_vid:\xa0\xa0\xa0\xa0+1.513\xa0V"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"intrusion0:\xa0\xa0ALARM")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Note the devices"),"\\\nMake note of the sensor device(s). In the above example, they are\n",(0,o.kt)("strong",{parentName:"p"},"w83627dhg-isa-0290")," and ",(0,o.kt)("strong",{parentName:"p"},"coretemp-isa-0000"),". (",(0,o.kt)("strong",{parentName:"p"},"Note:")," for\ncoretemp you should run ",(0,o.kt)("strong",{parentName:"p"},"sensors -u coretemp-isa-0000")," again to see\nthe actual temperature labels. If they are called something like\ntemp1_input, just use temp1 as a label for your sensors.conf - see\nbelow)\\\n",(0,o.kt)("strong",{parentName:"p"},"Step 4: Note the sensors"),"\\\nMake note of the specific sensors you wish to display. In the above\nexample, ",(0,o.kt)("strong",{parentName:"p"},"temp1")," is the motherboard and ",(0,o.kt)("strong",{parentName:"p"},"temp2")," is the CPU.\\\n",(0,o.kt)("strong",{parentName:"p"},"Step 5: Create sensors.conf"),"\\\nCreate your ",(0,o.kt)("strong",{parentName:"p"},"sensors.conf")," file. This will contain the sensor\ndevice(s) and labels (optional) for the temperatures you wish to\nmonitor. For Dynamix and Simple Features, it must establish the 2 labels\n\\'MB Temp\\' and \\'CPU Temp\\'."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To be used by Dynamix, save this file to your flash drive, in the\npath ",(0,o.kt)("strong",{parentName:"li"},"/boot/config/plugins/dynamix"),". In Windows, this path would\nbe something like ",(0,o.kt)("strong",{parentName:"li"},"\\","\\","tower","\\","flash","\\","config","\\","plugins","\\","dynamix"),"."),(0,o.kt)("li",{parentName:"ul"},"If not for Dynamix, save this file into a persistent location on the\nflash drive, e.g. ",(0,o.kt)("strong",{parentName:"li"},"/boot/config")," or ",(0,o.kt)("strong",{parentName:"li"},"/boot/custom"),". Later, you\nwill probably need a copy command in your \\'go\\' file, to copy it to\nits correct location in the UnRAID system.")),(0,o.kt)("p",null,"In the sample ",(0,o.kt)("strong",{parentName:"p"},"sensors.conf")," file below, I\\'m only using data from the\n2nd sensor device."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'#\xa0lines\xa0starting\xa0with\xa0"#"\xa0are\xa0comments\xa0and\xa0ignored'),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0sensor\xa0configuration"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},'chip\xa0"w83627dhg-isa-0290"'),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},'label\xa0temp1\xa0"MB\xa0Temp"'),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},'label\xa0temp2\xa0"CPU\xa0Temp"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6: Prepare sensors-detect"),"\\\nThe ",(0,o.kt)("strong",{parentName:"p"},"sensors-detect")," tool is a long script that should detect all of\nyour sensors, and help you get the right sensor driver names. A copy is\nincluded with UnRAID, but it\\'s not the latest, and if you have a new\nmotherboard (recent manufacture), you will want to use the latest\nversion, as it is occasionally updated with the newest drivers and\nsensors. ",(0,o.kt)("del",{parentName:"p"},"Go to the ",(0,o.kt)("a",{parentName:"del",href:"http://www.lm-sensors.org/wiki/Devices"},"lm-sensors\nDevices"),' page, and look for the\nlink \\"',(0,o.kt)("strong",{parentName:"del"},"latest version of sensors-detect"),'\\", in the 3rd paragraph\ncurrently.')," ",(0,o.kt)("em",{parentName:"p"},"The lm-sensors site is down currently!")," Download and copy\nit to your flash drive. To run it (assuming it\\'s in the root folder of\nthe flash), you will need to either change to the flash drive (",(0,o.kt)("strong",{parentName:"p"},"cd\n/boot"),"), or run the command as ",(0,o.kt)("strong",{parentName:"p"},"/boot/sensors-detect"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"sensors-detect")," tool requires ",(0,o.kt)("a",{parentName:"p",href:"http://www.perl.org/"},"Perl")," to be\ninstalled, at least temporarily.\\\n","*"," If it isn\\'t already installed, you will need to download an\nappropriate version for your UnRAID release:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For UnRAID v4 series, get it from\n",(0,o.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware-12.2/slackware/d/perl-5.10.0-i486-1.tgz"},"here")),(0,o.kt)("li",{parentName:"ul"},"For UnRAID v5 series, get it from\n",(0,o.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware-13.1/slackware/d/perl-5.10.1-i486-1.txz"},"here"),(0,o.kt)("em",{parentName:"li"},"May need updated/corrected perl links.")),(0,o.kt)("li",{parentName:"ul"},"For UnRAID v6 series, get it from\n",(0,o.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware64-14.1/slackware64/d/perl-5.18.1-x86_64-1.txz"},"here")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy it to the ",(0,o.kt)("strong",{parentName:"p"},"packages")," folder on your flash drive, creating\nthat folder if it does not already exist (",(0,o.kt)("strong",{parentName:"p"},"md /boot/packages"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then use ",(0,o.kt)("strong",{parentName:"p"},"installpkg")," and the perl package name to install it (eg.\n",(0,o.kt)("strong",{parentName:"p"},"installpkg /boot/packages/perl-5.18.1-x86_64-1.txz"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Or you can use\n",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=27051"},"UnMENU")," to\ndownload and install Perl. It does not need to be set for\nre-install.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Or for Dynamix, you can modify the Dynamix System Temp plugin itself\n(currently for v5 it\\'s\n",(0,o.kt)("strong",{parentName:"p"},"/boot/config/plugins/dynamix.system.temp-2.1.0-noarch-bergware.plg"),'),\nby locating the line ending with \\"# perl scripting\\" and replacing\n\\"no-install\\" with \\"do-install\\". Then re-install the plugin or\nreboot. Change it back to \\"no-install\\" when you are done with this\nwhole procedure.'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7: Run sensors-detect"),"\\\nRun ",(0,o.kt)("strong",{parentName:"p"},"sensors-detect"),". Enter ","[","YES","]"," for the various scans. Enter\n","[","NO","]"," to automatically generate the config file (last prompt). The\noutput should be similar to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"root@Skynet:~#\xa0sensors-detect"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0sensors-detect\xa0revision\xa06031\xa0(2012-03-07\xa017:14:01\xa0+0100)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0System:\xa0Supermicro\xa0C2SEA\xa0[1234567890]"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"This\xa0program\xa0will\xa0help\xa0you\xa0determine\xa0which\xa0kernel\xa0modules\xa0you\xa0need"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"to\xa0load\xa0to\xa0use\xa0lm_sensors\xa0most\xa0effectively.\xa0It\xa0is\xa0generally\xa0safe"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"and\xa0recommended\xa0to\xa0accept\xa0the\xa0default\xa0answers\xa0to\xa0all\xa0questions,"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"unless\xa0you\xa0know\xa0what\xa0you're\xa0doing."),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Some\xa0south\xa0bridges,\xa0CPUs\xa0or\xa0memory\xa0controllers\xa0contain\xa0embedded\xa0sensors."),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Do\xa0you\xa0want\xa0to\xa0scan\xa0for\xa0them?\xa0This\xa0is\xa0totally\xa0safe.\xa0(YES/no):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Silicon\xa0Integrated\xa0Systems\xa0SIS5595...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"VIA\xa0VT82C686\xa0Integrated\xa0Sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"VIA\xa0VT8231\xa0Integrated\xa0Sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0K8\xa0thermal\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0Family\xa010h\xa0thermal\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0Family\xa011h\xa0thermal\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0Family\xa012h\xa0and\xa014h\xa0thermal\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0Family\xa015h\xa0thermal\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"AMD\xa0Family\xa015h\xa0power\xa0sensors...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Intel\xa0digital\xa0thermal\xa0sensor...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Success!"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0(driver\xa0`coretemp')"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Intel\xa0AMB\xa0FB-DIMM\xa0thermal\xa0sensor...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"VIA\xa0C7\xa0thermal\xa0sensor...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"VIA\xa0Nano\xa0thermal\xa0sensor...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Some\xa0Super\xa0I/O\xa0chips\xa0contain\xa0embedded\xa0sensors.\xa0We\xa0have\xa0to\xa0write\xa0to"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"standard\xa0I/O\xa0ports\xa0to\xa0probe\xa0them.\xa0This\xa0is\xa0usually\xa0safe."),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Do\xa0you\xa0want\xa0to\xa0scan\xa0for\xa0Super\xa0I/O\xa0sensors?\xa0(YES/no):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0Super-I/O\xa0at\xa00x2e/0x2f"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`National\xa0Semiconductor/ITE'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`SMSC'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`VIA/Winbond/Nuvoton/Fintek'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Yes"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Found\xa0`Winbond\xa0W83627DHG-P/W83527HG\xa0Super\xa0IO\xa0Sensors'\xa0\xa0\xa0\xa0\xa0\xa0\xa0Success!"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0(address\xa00x290,\xa0driver\xa0`w83627ehf')"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0Super-I/O\xa0at\xa00x4e/0x4f"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`National\xa0Semiconductor/ITE'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`SMSC'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`VIA/Winbond/Nuvoton/Fintek'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Trying\xa0family\xa0`ITE'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Some\xa0systems\xa0(mainly\xa0servers)\xa0implement\xa0IPMI,\xa0a\xa0set\xa0of\xa0common\xa0interfaces"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"through\xa0which\xa0system\xa0health\xa0data\xa0may\xa0be\xa0retrieved,\xa0amongst\xa0other\xa0things."),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"We\xa0first\xa0try\xa0to\xa0get\xa0the\xa0information\xa0from\xa0SMBIOS.\xa0If\xa0we\xa0don't\xa0find\xa0it"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"there,\xa0we\xa0have\xa0to\xa0read\xa0from\xa0arbitrary\xa0I/O\xa0ports\xa0to\xa0probe\xa0for\xa0such"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"interfaces.\xa0This\xa0is\xa0normally\xa0safe.\xa0Do\xa0you\xa0want\xa0to\xa0scan\xa0for\xa0IPMI"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"interfaces?\xa0(YES/no):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`IPMI\xa0BMC\xa0KCS'\xa0at\xa00xca0...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`IPMI\xa0BMC\xa0SMIC'\xa0at\xa00xca8...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Some\xa0hardware\xa0monitoring\xa0chips\xa0are\xa0accessible\xa0through\xa0the\xa0ISA\xa0I/O\xa0ports."),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"We\xa0have\xa0to\xa0write\xa0to\xa0arbitrary\xa0I/O\xa0ports\xa0to\xa0probe\xa0them.\xa0This\xa0is\xa0usually"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"safe\xa0though.\xa0Yes,\xa0you\xa0do\xa0have\xa0ISA\xa0I/O\xa0ports\xa0even\xa0if\xa0you\xa0do\xa0not\xa0have\xa0any"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"ISA\xa0slots!\xa0Do\xa0you\xa0want\xa0to\xa0scan\xa0the\xa0ISA\xa0I/O\xa0ports?\xa0(yes/NO):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`National\xa0Semiconductor\xa0LM78'\xa0at\xa00x290...\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`National\xa0Semiconductor\xa0LM79'\xa0at\xa00x290...\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Winbond\xa0W83781D'\xa0at\xa00x290...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Winbond\xa0W83782D'\xa0at\xa00x290...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Lastly,\xa0we\xa0can\xa0probe\xa0the\xa0I2C/SMBus\xa0adapters\xa0for\xa0connected\xa0hardware"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring\xa0devices.\xa0This\xa0is\xa0the\xa0most\xa0risky\xa0part,\xa0and\xa0while\xa0it\xa0works"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"reasonably\xa0well\xa0on\xa0most\xa0systems,\xa0it\xa0has\xa0been\xa0reported\xa0to\xa0cause\xa0trouble"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"on\xa0some\xa0systems."),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Do\xa0you\xa0want\xa0to\xa0probe\xa0the\xa0I2C/SMBus\xa0adapters\xa0now?\xa0(YES/no):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Using\xa0driver\xa0`i2c-i801'\xa0for\xa0device\xa00000:00:1f.3:\xa0Intel\xa0ICH10\xa0"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Module\xa0i2c-dev\xa0loaded\xa0successfully."),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Next\xa0adapter:\xa0SMBus\xa0I801\xa0adapter\xa0at\xa00400\xa0(i2c-0)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Do\xa0you\xa0want\xa0to\xa0scan\xa0it?\xa0(YES/no/selectively):\xa0YES"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Client\xa0found\xa0at\xa0address\xa00x50"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Analog\xa0Devices\xa0ADM1033'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Analog\xa0Devices\xa0ADM1034'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`SPD\xa0EEPROM'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Yes"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0(confidence\xa08,\xa0not\xa0a\xa0hardware\xa0monitoring\xa0chip)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`EDID\xa0EEPROM'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Client\xa0found\xa0at\xa0address\xa00x52"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Analog\xa0Devices\xa0ADM1033'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`Analog\xa0Devices\xa0ADM1034'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0No"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Probing\xa0for\xa0`SPD\xa0EEPROM'...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Yes"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0(confidence\xa08,\xa0not\xa0a\xa0hardware\xa0monitoring\xa0chip)"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Now\xa0follows\xa0a\xa0summary\xa0of\xa0the\xa0probes\xa0I\xa0have\xa0just\xa0done."),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Just\xa0press\xa0ENTER\xa0to\xa0continue:"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Driver\xa0`w83627ehf':"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0*\xa0ISA\xa0bus,\xa0address\xa00x290"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0\xa0\xa0Chip\xa0`Winbond\xa0W83627DHG-P/W83527HG\xa0Super\xa0IO\xa0Sensors'\xa0(confidence:\xa09)"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Driver\xa0`coretemp':"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"\xa0*\xa0Chip\xa0`Intel\xa0digital\xa0thermal\xa0sensor'\xa0(confidence:\xa09)"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Do\xa0you\xa0want\xa0to\xa0generate\xa0/etc/sysconfig/lm_sensors?\xa0(yes/NO):\xa0NO"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"To\xa0load\xa0everything\xa0that\xa0is\xa0needed,\xa0add\xa0this\xa0to\xa0one\xa0of\xa0the\xa0system"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"initialization\xa0scripts\xa0(e.g.\xa0/etc/rc.d/rc.local):"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#----cut\xa0here----"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0Chip\xa0drivers"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe\xa0coretemp"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe\xa0w83627ehf"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/bin/sensors\xa0-s"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"#----cut\xa0here----"),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"If\xa0you\xa0have\xa0some\xa0drivers\xa0built\xa0into\xa0your\xa0kernel,\xa0the\xa0list\xa0above\xa0will"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"contain\xa0too\xa0many\xa0modules.\xa0Skip\xa0the\xa0appropriate\xa0ones!\xa0You\xa0really"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"should\xa0try\xa0these\xa0commands\xa0right\xa0now\xa0to\xa0make\xa0sure\xa0everything\xa0is"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"working\xa0properly.\xa0Monitoring\xa0programs\xa0won't\xa0work\xa0until\xa0the\xa0needed"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modules\xa0are\xa0loaded."),"\\\n\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"Unloading\xa0i2c-dev...\xa0OK")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8: Note the drivers"),"\\\nMake note of the driver name(s) listed in the summary. In the above\nexample, they are ",(0,o.kt)("strong",{parentName:"p"},"w83627ehf")," and ",(0,o.kt)("strong",{parentName:"p"},"coretemp"),".\\\n",(0,o.kt)("strong",{parentName:"p"},"Step 9: Add modprobes to go"),"\\\nEdit your \\'go\\' file and add in the ",(0,o.kt)("strong",{parentName:"p"},"modprobe")," command for each\nsensor driver that is required."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0modprobe\xa0for\xa0each\xa0sensor"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe\xa0w83627ehf"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe\xa0``<sensor2>"),"{=html}\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe\xa0``<sensor3>"),"{=html}"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 10: Add the copy instruction to go"),"\\\nIf you are configuring for Dynamix, this step is not needed, so skip to\nStep 11. Otherwise, add another line in your \\'go\\' file to copy your\npersistent sensors.conf file (from where you created/saved it in Step 5)\ninto the appropriate location on each boot."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#\xa0copy\xa0the\xa0sensor.conf\xa0file\xa0for\xa0use"),"\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"cp\xa0/boot/config/sensors.conf\xa0/etc/sensors.d")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 11: Reboot and check"),"\\\nReboot to load up the changes, and check whether the temps are correct.\nIf wrong, you may have to select different sensors or\n",(0,o.kt)("a",{parentName:"p",href:"http://linux.die.net/man/5/sensors.conf"},"customize")," the\n",(0,o.kt)("strong",{parentName:"p"},"sensors.conf")," file."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Category:_Customising_unRAID",title:"wikilink"},"Category: Customising unRAID"),"\n",(0,o.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")))}u.isMDXComponent=!0}}]);
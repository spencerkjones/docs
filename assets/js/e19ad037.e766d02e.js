"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,c=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(c,i(i({ref:t},h),{},{components:r})):n.createElement(c,i({ref:t},h))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"legacy/FAQ/Shrink_array",id:"legacy/FAQ/Shrink_array",title:"Shrink_array",description:"``{=html}Note: this page has been tested for v6,",source:"@site/docs/legacy/FAQ/Shrink_array.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Shrink_array",permalink:"/legacy/FAQ/Shrink_array",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Shrink_array.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)",permalink:"/legacy/FAQ/Setup_Sleep_(S3)_and_Wake_on_Lan_(WOL)"},next:{title:"Terminal Access",permalink:"/legacy/FAQ/Terminal_Access"}},s={},d=[{value:"For Unraid v6.2 and later",id:"for_unraid_v6.2_and_later",level:2},{value:"The &quot;Remove Drives Then Rebuild Parity&quot; Method",id:"the_remove_drives_then_rebuild_parity_method",level:3},{value:"Procedure",id:"procedure",level:5},{value:"The &quot;Clear Drive Then Remove Drive&quot; Method",id:"the_clear_drive_then_remove_drive_method",level:3},{value:"Procedure",id:"procedure_1",level:5},{value:"Alternate Procedure for Linux proficient users",id:"alternate_procedure_for_linux_proficient_users",level:5},{value:"For Unraid v6.0 and 6.1 and possibly 5.0",id:"for_unraid_v6.0_and_6.1_and_possibly_5.0",level:2},{value:"Procedure",id:"procedure_2",level:5},{value:"Alternate procedure that maintains parity protection",id:"alternate_procedure_that_maintains_parity_protection",level:5}],h={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'<font color="blue">'),"{=html}",(0,a.kt)("strong",{parentName:"p"},"Note: this page has been tested for v6,\nbut is still fairly new."),(0,a.kt)("inlineCode",{parentName:"p"},"</font>"),"{=html}"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why would you want to shrink your array?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maybe you have recently found a red ball on one of your drives, and\nyou want to take it out of the array. You\\'ve got enough extra\nspace, and don\\'t need to replace the drive."),(0,a.kt)("li",{parentName:"ul"},"Or you are consolidating drives, replacing multiple smaller drives\nwith new and larger ones."),(0,a.kt)("li",{parentName:"ul"},"Or you have an array drive that you no longer want in the array, for\nwhatever reason, and you don\\'t want to replace it."),(0,a.kt)("li",{parentName:"ul"},"Or you are out of SATA ports, and have emptied a smaller drive so\nyou can remove it, and reuse the SATA port."),(0,a.kt)("li",{parentName:"ul"},"Or you wish to take one or more data drives to a new or different\narray, intact with all its data.")),(0,a.kt)("p",null,"\\\nIn general, the best choice is to replace an unwanted or disabled drive\nby assigning a replacement drive, and allowing unRAID to rebuild it.\nThis way, parity protection for the array is maintained. The following\nmethods are for those who do not want to replace the drive, and are OK\nwith a temporary loss of parity protection. (There is a method below\nthat preserves parity!) ",(0,a.kt)("em",{parentName:"p"},"Update: a procedure to remove one or more\ndrives without invalidating parity protection is discussed\n",(0,a.kt)("a",{parentName:"em",href:"https://forums.unraid.net/topic/48707-additional-scripts-for-userscripts-plugin/#comment-490808"},"here"),".\nIt involves a dangerous command at a command prompt, so command line\nexperience is desirable.")),(0,a.kt)("p",null,"Here are the procedures and methods for shrinking the array without\nlosing any data. Note: these procedures work exactly the same whether\nyour drive is disabled or not."),(0,a.kt)("h2",{id:"for_unraid_v6.2_and_later"},"For Unraid v6.2 and later"),(0,a.kt)("p",null,"There are 2 methods here for removing drives from an unRAID v6.2 array.\nCheck the conditions and comments at the top of each method, to know\nwhich one will work best for your situation."),(0,a.kt)("h3",{id:"the_remove_drives_then_rebuild_parity_method"},'The \\"Remove Drives Then Rebuild Parity\\" Method'),(0,a.kt)("p",null,":   ",(0,a.kt)("em",{parentName:"p"},"For removing one or more drives from an unRAID array - this is the\ntried and true method"),"\n:   ",(0,a.kt)("em",{parentName:"p"},"Note: this section has been tested for 6.2, but is still fairly\nnew")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This method ",(0,a.kt)("inlineCode",{parentName:"li"},'<font color="red">'),"{=html}does not keep the drive\\'s\ndata within the array",(0,a.kt)("inlineCode",{parentName:"li"},"</font>"),"{=html}. If the drive to be removed\nhas data you want to stay in the array, you must move it yourself to\nthe other data drives. Parity will be built based entirely and only\non the remaining drives and their contents."),(0,a.kt)("li",{parentName:"ul"},"This method is best if you are removing more than one drive."),(0,a.kt)("li",{parentName:"ul"},"This method should be used if you need to preserve the contents of\nthe data drive you are removing from the array."),(0,a.kt)("li",{parentName:"ul"},"This method MUST be used if the drive cannot be cleared, that is, it\nis missing, disabled, or has bad sectors."),(0,a.kt)("li",{parentName:"ul"},"This method does NOT preserve parity, so parity will have to be\nrebuilt once the array assignments have been adjusted.")),(0,a.kt)("h5",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Make sure that the drive or drives you are removing have been\nremoved from any inclusions or exclusions for all shares, including\nin the global share settings. Shares should be changed from the\ndefault of \\"All\\" to \\"Include\\". This include list should contain\nonly the drives that will be retained.'),(0,a.kt)("li",{parentName:"ol"},'Make sure you have a copy of your array assignments, especially the\nparity drive. You may need this list if the \\"Retain current\nconfiguration\\" option doesn\\\'t work correctly'),(0,a.kt)("li",{parentName:"ol"},"Stop the array (if it is started)"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Tools")," then ",(0,a.kt)("strong",{parentName:"li"},"New Config")),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Retain current configuration")," box (says ",(0,a.kt)("strong",{parentName:"li"},"None")," at\nfirst), click on the box for ",(0,a.kt)("strong",{parentName:"li"},"All"),", then click on ",(0,a.kt)("strong",{parentName:"li"},"close")),(0,a.kt)("li",{parentName:"ol"},"Click on the box for ",(0,a.kt)("strong",{parentName:"li"},"Yes I want to do this"),", then click ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\nthen ",(0,a.kt)("strong",{parentName:"li"},"Done")),(0,a.kt)("li",{parentName:"ol"},"Return to the Main page, and check all assignments. If any are\nmissing, correct them. Unassign the drive(s) you are removing.\n",(0,a.kt)("strong",{parentName:"li"},"Double check all of the assignments, especially the parity\ndrive(s)!")),(0,a.kt)("li",{parentName:"ol"},"Do not click the check box for ",(0,a.kt)("strong",{parentName:"li"},"Parity is already valid"),"; make\nsure it is NOT checked; parity is not valid now and won\\'t be until\nthe parity build completes"),(0,a.kt)("li",{parentName:"ol"},"Start the array to commit the changes; system is usable now, but it\nwill take a long time rebuilding parity")),(0,a.kt)("p",null,"\\"),(0,a.kt)("h3",{id:"the_clear_drive_then_remove_drive_method"},'The \\"Clear Drive Then Remove Drive\\" Method'),(0,a.kt)("p",null,":   ",(0,a.kt)("em",{parentName:"p"},"For removing a drive from an unRAID array, while maintaining the\nparity protection - this is a new method"),"\n:   ",(0,a.kt)("em",{parentName:"p"},"Note: this section has been tested but is still fairly new")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This method preserves parity protection at all times."),(0,a.kt)("li",{parentName:"ul"},"This method can only be used if it\\'s a good drive that is\ncompletely empty, is mounted in the array, and can be completely\ncleared."),(0,a.kt)("li",{parentName:"ul"},"This method is limited to removing only one drive at a time."),(0,a.kt)("li",{parentName:"ul"},"As stated above, the drive must be completely empty. If there are\nstill any files on it (including hidden ones), they must be moved to\nanother drive, or deleted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"One quick way to clean a drive is reformat it! To format an array\ndrive, you stop the array and then on the Main page click on the\nlink for the drive and change the file system type to something\ndifferent than it currently is, then restart the array. You will\nthen be presented with an option to format it. Formatting a drive\nremoves all of its data, and the parity drive is updated\naccordingly, so the data cannot be easily recovered.")),(0,a.kt)("li",{parentName:"ul"},'Explanatory note: \\"',(0,a.kt)("em",{parentName:"li"},"Since you are going to clear the drive anyway,\nwhy do I have to empty it? And what is the purpose of this\nstrange"),"clear-me",(0,a.kt)("em",{parentName:"li"},"folder?"),"\\\" Yes it seems a bit draconian to require\nthe drive to be empty since we\\'re about to clear and empty it in\nthe script, but we\\'re trying to be absolutely certain we don\\'t\ncause data loss. In the past, some users misunderstood the\nprocedure, and somehow thought we would preserve their data while\nclearing the drive! This way, by requiring the user to remove all\ndata, and then add an odd marker, there ",(0,a.kt)("strong",{parentName:"li"},"cannot")," be any accidents\nor misunderstandings and data loss.")),(0,a.kt)("h5",{id:"procedure_1"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that the drive you are removing has been removed from any\ninclusions or exclusions for all shares, including in the global\nshare settings."),(0,a.kt)("li",{parentName:"ol"},"Make sure the array is started, with the drive assigned and mounted."),(0,a.kt)("li",{parentName:"ol"},'Make sure you have a copy of your array assignments, especially the\nparity drive. You may need this list if the \\"Retain current\nconfiguration\\" option doesn\\\'t work correctly.'),(0,a.kt)("li",{parentName:"ol"},"It is ",(0,a.kt)("strong",{parentName:"li"},"highly recommended")," to turn on ",(0,a.kt)("strong",{parentName:"li"},"reconstruct write"),", as\nthe write method (sometimes called \\'Turbo write\\'). With it on, the\nscript can run 2 to 3 times as fast, saving hours!\nIn ",(0,a.kt)("strong",{parentName:"li"},"Settings")," -",">"," ",(0,a.kt)("strong",{parentName:"li"},"Disk Settings"),", change ",(0,a.kt)("strong",{parentName:"li"},"Tunable\n(md_write_method)")," to ",(0,a.kt)("strong",{parentName:"li"},"reconstruct write"),"."),(0,a.kt)("li",{parentName:"ol"},"Make sure ALL data has been copied off the drive; drive MUST be\ncompletely empty for the clearing script to work."),(0,a.kt)("li",{parentName:"ol"},"Double check that there are no files or folders left on the drive.\n",(0,a.kt)("em",{parentName:"li"},"Note: one quick way to clean a drive is reformat it! (once you\\'re\nsure nothing of importance is left of course!)")),(0,a.kt)("li",{parentName:"ol"},"Create a single folder on the drive with the name ",(0,a.kt)("strong",{parentName:"li"},"clear-me")," -\nexactly 7 lowercase letters and one hyphen"),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://forums.unraid.net/topic/48707-additional-scripts-for-userscripts-plugin/#comment-490808"},"clear an array\ndrive")),"\nscript from the ",(0,a.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/48286-plugin-ca-user-scripts/"},"User\nScripts"),"\nplugin (or run it standalone, at a command prompt).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you prepared the drive correctly, it will completely and\nsafely zero out the drive. If you didn\\'t prepare the drive\ncorrectly, the script will refuse to run, in order to avoid any\nchance of data loss."),(0,a.kt)("li",{parentName:"ul"},"If the script refuses to run, indicating it did not find a\nmarked and empty drive, then very likely there are still files\non your drive. Check for hidden files. ALL files must be\nremoved!"),(0,a.kt)("li",{parentName:"ul"},"Clearing takes a loooong time! Progress info will be displayed,\nin 6.2 or later. Prior to 6.2, nothing will show until it\nfinishes."),(0,a.kt)("li",{parentName:"ul"},"If running in User Scripts, the browser tab will hang for the\nentire clearing process."),(0,a.kt)("li",{parentName:"ul"},"While the script is running, the Main screen may show invalid\nnumbers for the drive, ignore them. ",(0,a.kt)("strong",{parentName:"li"},"Important! Do not try to\naccess the drive, at all!")))),(0,a.kt)("li",{parentName:"ol"},"When the clearing is complete, click done and stop the array - do\nnot remove the cleared disk yet."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Tools")," then ",(0,a.kt)("strong",{parentName:"li"},"New Config")),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Retain current configuration")," box (says ",(0,a.kt)("strong",{parentName:"li"},"None")," at\nfirst), click on the box for ",(0,a.kt)("strong",{parentName:"li"},"All"),", then click on ",(0,a.kt)("strong",{parentName:"li"},"close")),(0,a.kt)("li",{parentName:"ol"},"Click on the box for ",(0,a.kt)("strong",{parentName:"li"},"Yes I want to do this"),", then click ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\nthen ",(0,a.kt)("strong",{parentName:"li"},"Done")),(0,a.kt)("li",{parentName:"ol"},"Return to the Main page, and check all assignments. If any are\nmissing, correct them. ",(0,a.kt)("strong",{parentName:"li"},"Unassign the drive(s) you are removing."),(0,a.kt)("strong",{parentName:"li"},"Double check all of the assignments, especially the parity\ndrive(s)!"),' If the cleared drive is \\"hot-swappable\\" you may now\nremove the cleared drive and follow the steps below. If it is not,\nfollow the steps below.'),(0,a.kt)("li",{parentName:"ol"},"Click the check box for ",(0,a.kt)("strong",{parentName:"li"},"Parity is already valid"),", make sure it is\nchecked!"),(0,a.kt)("li",{parentName:"ol"},"Start the array! Click the ",(0,a.kt)("strong",{parentName:"li"},"Start")," button then the ",(0,a.kt)("strong",{parentName:"li"},"Proceed"),"\nbutton (on the warning popup that will pop up)"),(0,a.kt)("li",{parentName:"ol"},"Parity should still be valid, however it\\'s highly recommended to do\na Parity Check"),(0,a.kt)("li",{parentName:"ol"},"If you do not have hot swappable drives, you may now safely shutdown\nyour server and remove the cleared drive.")),(0,a.kt)("h5",{id:"alternate_procedure_for_linux_proficient_users"},"Alternate Procedure for Linux proficient users"),(0,a.kt)("p",null,":   It\\'s actually the same procedure as above, except that you can\nreplace steps 7 and 8 by performing the clearing commands yourself\nat a command prompt. (Clearing takes just as long though!) If you\nwould rather do that, than run the script in steps 7 and 8, then\nhere are the 2 commands to perform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":   **umount /mnt/diskX**\n:   **dd bs=1M if=/dev/zero of=/dev/mdX status=progress**\n:   *(where X in both lines is the number of the data drive being\n    removed)*\n")),(0,a.kt)("p",null,":   ",(0,a.kt)("strong",{parentName:"p"},"Important!!! It is VITAL you use the correct drive number, or you\nwill wipe clean the wrong drive!")," That\\'s why using the script is\nrecommended, because it\\'s designed to protect you from accidentally\nclearing the wrong drive."),(0,a.kt)("p",null,"\\"),(0,a.kt)("h2",{id:"for_unraid_v6.0_and_6.1_and_possibly_5.0"},"For Unraid v6.0 and 6.1 and possibly 5.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notice: This section has been partially rewritten, is not well\ntested yet. But it\\'s based on the old tried and true method for\nremoving drives")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"These instructions assume you are using unRAID v6, but may work for\nunRAID v5 also.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"This procedure starts by removing all drive assignments. You will\nthen need to reenter all of them from your notes, making any changes\nyou desire."))),(0,a.kt)("h5",{id:"procedure_2"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Take a screenshot of your current array assignments, or make good\nnotes of them"),(0,a.kt)("li",{parentName:"ol"},"Make sure that the drive or drives you are removing have been\nremoved from any inclusions or exclusions for all shares, including\nin the global share settings."),(0,a.kt)("li",{parentName:"ol"},"Stop the array (if it is started)"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"<Tools>"),"{=html} and click ",(0,a.kt)("inlineCode",{parentName:"li"},"<New config>"),"{=html}, then\n",(0,a.kt)("inlineCode",{parentName:"li"},"<Apply>"),"{=html}, then ",(0,a.kt)("inlineCode",{parentName:"li"},"<Done>"),"{=html}"),(0,a.kt)("li",{parentName:"ol"},"Reassign all disks except the ones you are removing, using your\nnotes or screen shot"),(0,a.kt)("li",{parentName:"ol"},"Double check that your Parity disk(s) are assigned correctly!"),(0,a.kt)("li",{parentName:"ol"},'Do not click the check box for \\"Parity is already valid\\"; make\nsure it is NOT checked; parity is not valid now and won\\\'t be until\nthe parity build completes'),(0,a.kt)("li",{parentName:"ol"},"Start the array - will take a long time while it rebuilds parity")),(0,a.kt)("h5",{id:"alternate_procedure_that_maintains_parity_protection"},"Alternate procedure that maintains parity protection"),(0,a.kt)("p",null,':   If you wish, the \\"Clear Drive Then Remove Drive\\" method in the 6.2\nsection above can be carefully adapted for use. You won\\\'t have the\n\\"Retain\\" option, or the \\"reconstruct write\\" tunable option, or\nthe User Scripts plugin. v5 users may have to use the \\"Trust\nParity\\" method rather than the \\"Parity is already valid\\" option.\nAnd you won\\\'t have any progress info at all during the clearing! It\nwill be finished when it finishes!\n:   In unRAID v6.0 and v6.1 (not v5), you can turn on \\"reconstruct\nwrite\\" (sometimes known as \\"turbo write\\" because it runs\nsignificantly faster) with the following command at the command line\n',"*","after","*"," the array is started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":   **mdcmd set md_write_method 1**\n")),(0,a.kt)("p",null,"\\"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=i,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},o="Applications",s={unversionedId:"legacy/Manual/Applications",id:"legacy/Manual/Applications",title:"Applications",description:"This section discusses running applications on an Unraid server or",source:"@site/docs/legacy/Manual/Applications.md",sourceDirName:"legacy/Manual",slug:"/legacy/Manual/Applications",permalink:"/legacy/Manual/Applications",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/Manual/Applications.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Additional Settings",permalink:"/legacy/Manual/Additional_Settings"},next:{title:"Changing the Flash Device",permalink:"/legacy/Manual/Changing_The_Flash_Device"}},l={},p=[{value:"Overview",id:"overview_1",level:2},{value:"Community Applications (CA)",id:"community_applications_ca",level:2},{value:"Finding applications",id:"finding_applications",level:3},{value:"Installing Applications",id:"installing_applications",level:3},{value:"Removing Applications / Showing Installed Applications",id:"removing_applications_showing_installed_applications",level:3},{value:"Re-Installing Applications",id:"re_installing_applications",level:3},{value:"Support for applications",id:"support_for_applications",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Docker Containers",id:"docker_containers",level:2},{value:"Virtual Machines",id:"virtual_machines",level:2},{value:"Technology Stack",id:"technology_stack",level:3}],u={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"applications"},"Applications"),(0,i.kt)("p",null,"This section discusses running applications on an Unraid server or\nextending the base capabilities. One of the great strengths of Unraid is\nthe ability for it to easily be made to function as more than a basic\nNAS system."),(0,i.kt)("h2",{id:"overview_1"},"Overview"),(0,i.kt)("p",null,"A number of mechanisms are provided by which the capability of an Unraid\nserver can be extended."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins"),(0,i.kt)("li",{parentName:"ul"},"Docker containers"),(0,i.kt)("li",{parentName:"ul"},"Virtual Machines")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,i.kt)("em",{parentName:"p"},"Limetech does not supply the applications or\nfunctionality that can be implemented using these Mechanisms. it is up\nto the end-user to satisfy themselves to the suitability of any\nparticular application.")),(0,i.kt)("h2",{id:"community_applications_ca"},"Community Applications (CA)"),(0,i.kt)("p",null,"Although it is not part of the standard Unraid distribution the\nCommunity Applications (CA) plugin has become the recommended way for\ninstalling applications on an Unraid server whenever the application is\nimplemented via a plugin or as a docker container. This does not stop\nusers from installing applications that are not handled by CA, but using\nCA provides a useful level of curation that is of particular value to\nnew Unraid users."),(0,i.kt)("p",null,"Install Community Applications by visiting this page on the forum:\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/38582-plug-in-community-applications/"},"https://forums.unraid.net/topic/38582-plug-in-community-applications/")),(0,i.kt)("h3",{id:"finding_applications"},"Finding applications"),(0,i.kt)("p",null,"NOTE: CA only provides a way of installing applications that are\navailable as plugins or Docker containers - it does not provide any\nsupport for installing VMs."),(0,i.kt)("h3",{id:"installing_applications"},"Installing Applications"),(0,i.kt)("p",null,"From any given app\\'s tile, click the download icon\n",(0,i.kt)("img",{src:a(6995).Z,title:"CA_Tile1.png",width:"446",height:"321"})),(0,i.kt)("h3",{id:"removing_applications_showing_installed_applications"},"Removing Applications / Showing Installed Applications"),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Installed Applications"),' Category, you will see all of your\ninstalled applications. Click the \\"x\\" to uninstall them.'),(0,i.kt)("h3",{id:"re_installing_applications"},"Re-Installing Applications"),(0,i.kt)("p",null,"If you ever need to re-install any plugins or docker container then this\ncan be easily achieved via Community applications."),(0,i.kt)("p",null,"A common reason for wanting to re-install applications is the case where\nthe docker.img file has been corrupted for some reason. In such a case\nthe docker containers can be re-installed with all their settings intact\nin just a few minutes."),(0,i.kt)("p",null,"CA stores an XML template for each application that it installs at\n/boot/config/plugins/dockerMan/templates-user If You go to the ",(0,i.kt)("strong",{parentName:"p"},"Apps"),"\ntab in the Unraid GUI then there is a ",(0,i.kt)("strong",{parentName:"p"},"Previous Apps")," section and this\ncan be used to reinstall applications using their saved settings. These\nare retrieved automatically from the saved XML templates so it is a\nrelatively painless process."),(0,i.kt)("h3",{id:"support_for_applications"},"Support for applications"),(0,i.kt)("p",null,"It is normal for each Plugin or docker container to have a forum thread\nthat is dedicated to proving support and answering questions from\nend-users. It is normal for the developer responsible for each of these\ntypes of applications to create a forum thread that they will monitor.\nThere are a number of easy ways to get to the appropriate support thread\nfrom the Unraid GUI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apps tab"),(0,i.kt)("li",{parentName:"ul"},"Dashboard tab"),(0,i.kt)("li",{parentName:"ul"},"Plugins tab"),(0,i.kt)("li",{parentName:"ul"},"Docker tab")),(0,i.kt)("p",null,"Virtual Machines do not have the same level of targeted support as they\ncan be running almost any OS, and then within that OS any application\nsupported by the OS. Having said that there are several areas within the\nforums that are dedicated places for asking questions about VMs and it\nis likely that you will find appropriate threads for the most common OS."),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"This mechanism allows code to be loaded into the core Unraid OS and run\nat that level. It was the only way to extend Unraid functionality prior\nto Unraid v6."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,i.kt)("em",{parentName:"p"},"Limetech does not supply the applications or\nfunctionality that can be implemented using these Mechanisms. it is up\nto the end-user to satisfy themselves to the suitability of any\nparticular application.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The plugin developer can access any part of the Unraid system\nwithout restriction."),(0,i.kt)("li",{parentName:"ul"},"The plugin can load new code modules into the core Unraid OS"),(0,i.kt)("li",{parentName:"ul"},"The plugin can add/amend the Unraid GUI"),(0,i.kt)("li",{parentName:"ul"},"The plugin can add functionality that many deem important to\nallowing Unraid to function as a NAS."),(0,i.kt)("li",{parentName:"ul"},"Plugins are normally published as Open Source so end-users can check\nthat they do not attempt to do anything malicious. However, the\nplugin mechanism does not enforce this.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Plugins can make an Unraid system unstable"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plugins can load code modules that overwrite the versions\nsupplied as part of a standard Unraid release. Any new Unraid\nrelease can include many upgraded/added modules. This means that\nit is important that if the plugin installs new code modules\nthat the plugin author keeps the plugin up-to-date and aware of\nthe release of Unraid on which it is being installed."),(0,i.kt)("li",{parentName:"ul"},"Unraid has the ability to boot a system in Safe Mode that\nsuppresses plugins loading to help with diagnosing problems\ncaused by plugins. \\'This should be one of the first things to\ntry if a system becomes unstable after installing a new Unraid\nrelease."),(0,i.kt)("li",{parentName:"ul"},"If there is a choice between a plugin and a docker\ncontainer-based solution to add a feature to an Unraid system\nthe docker container approach is always the recommended way to\ngo as it does not introduce the same risk of causing\ninstability."))),(0,i.kt)("li",{parentName:"ul"},"Plugins will have full access to all the data on the Unraid system"),(0,i.kt)("li",{parentName:"ul"},"If a plugin is not maintained by the developer or the Unraid user\ndoes not keep the plugin up-to-date then when a new Unraid release\nis installed the plugin may make that release misbehave in\nunexpected ways.")),(0,i.kt)("p",null,"Plugins are installed as part of the Unraid boot process after loading\nLinux completes and before the GUI and/or array is started."),(0,i.kt)("p",null,"The current recommendation is that plugins should only be used for\nfunctionality that cannot be added using a Docker container. This helps\nmaintain system stability across Unraid releases. Plugins should\ntherefore be adding system-level services and not end-user applications."),(0,i.kt)("p",null,"Thu Unraid GUI has a Plugins tab that can show what plugins are\ninstalled and provides capabilities for upgrading the installed plugins\nto new releases. It also provides the ability to install plugins from\nthis tab, but it is recommended that if the plugin is known to Community\napplications that plugins are instead installed from the ",(0,i.kt)("strong",{parentName:"p"},"Apps")," tab."),(0,i.kt)("p",null,"As part of improving core sometimes a plugin\\'s functionality gets\nincorporated into a new Unraid release making the plugin superfluous\n(and possibly even harmful to system stability). If you are using\nCommunity Applications to install plugins (recommended) then CA will\nonly offer to install plugins that are believed to be compatible with\nthat release. It will not, however, remove plugins that are already\ninstalled but are n/ longer known to be compatible with the current\nrelease."),(0,i.kt)("h2",{id:"docker_containers"},"Docker Containers"),(0,i.kt)("p",null,"Unraid includes support for the technology known as\n",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," for allowing Linux-based applications."),(0,i.kt)("p",null,"Docker provides a mechanism for running Linux applications in a manner\nthat allows them to be isolated both from the host system (Unraid) and\nalso from each other. This means that docker application are independent\nof the release of Unraid that is hosting them. The user can also\nconfigure which resources on the host system any particular Docker\ncontainer can access."),(0,i.kt)("p",null,"Key points of the Unraid implementation are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The files that make up a Docker container are stored within a\nvirtual disk image (i.e. a single file at the Unraid level).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The average user does not need to understand how this type of\ndetail but it can help with troubleshooting and making sense of\nlog messages."),(0,i.kt)("li",{parentName:"ul"},"The default name of the virtual disk images is ",(0,i.kt)("strong",{parentName:"li"},"docker.img"),".\nUsers can over-ride this but it is rarely done as no advantage\nis gained by doing this."),(0,i.kt)("li",{parentName:"ul"},"Internally the ",(0,i.kt)("em",{parentName:"li"},"docker.img")," file is formatted using the\n",(0,i.kt)("strong",{parentName:"li"},"BTRFS")," filing system and is mounted at the Unraid level as\n",(0,i.kt)("strong",{parentName:"li"},"/dev/loop2")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"docker.img")," file will internally contain the binaries\nassociated with each installed docker container."))),(0,i.kt)("li",{parentName:"ul"},"Unraid provides a GUI-based method for easily installing and\nconfiguring Docker containers. This acts as a front-end to the\n",(0,i.kt)("strong",{parentName:"li"},"docker run")," command-line tool.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When a docker container is installed the parameters provided by\nthe user (which are then used to build up the docker run command\nfor a container) are stored on the flash drive as an XML file so\nit is easy to re-install a container without having to re-create\nits settings from scratch."),(0,i.kt)("li",{parentName:"ul"},"Unraid users can provide prepopulated templates for common\napplications that minimize (or even completely eliminate) the\namount of configuration the average user will have to do to get\nany particular container running."))),(0,i.kt)("li",{parentName:"ul"},"The default location for the ",(0,i.kt)("em",{parentName:"li"},"docker.img")," file is within the\n",(0,i.kt)("em",{parentName:"li"},"system")," share. The ",(0,i.kt)("em",{parentName:"li"},"system")," share is set up with the ",(0,i.kt)("em",{parentName:"li"},"Use\nCache=Prefer")," setting as having the ",(0,i.kt)("em",{parentName:"li"},"docker.img")," file on the cache\n((f the user has one) helps with maximizing the performance of\nDocker containers."),(0,i.kt)("li",{parentName:"ul"},"Unraid does ",(0,i.kt)("strong",{parentName:"li"},"not")," have built in support for the ",(0,i.kt)("strong",{parentName:"li"},"docker compose"),"\ncommand line utility.")),(0,i.kt)("h2",{id:"virtual_machines"},"Virtual Machines"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"THIS SECTION IS STILL BEING WORKED ON AND MORE DETAIL NEEDS ADDING")),(0,i.kt)("p",null,"Virtual Machine (VM) support allows you to run other Operating Systems\nas guests on an Unraid server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pro:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can use applications that are not available natively under\nUnraid."),(0,i.kt)("li",{parentName:"ul"},"You can experiment with other OS without needing separate hardware.\nThis can be done purely as a learning exercise or because you need\naccess to features of the guest OS."),(0,i.kt)("li",{parentName:"ul"},"Multiple guest OS can be run in parallel on the same hardware.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Con:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to know how to use the ",(0,i.kt)("em",{parentName:"li"},"guest")," OS."),(0,i.kt)("li",{parentName:"ul"},"The VM will need dedicated resources to run that are in addition to\nthose required by Unraid itself."),(0,i.kt)("li",{parentName:"ul"},"VMs are far more resource-heavy than a docker container as they\nrequire much more in the way of dedicated resources to run.")),(0,i.kt)("h3",{id:"technology_stack"},"Technology Stack"),(0,i.kt)("p",null,"Unraid 6 features a number of key technologies to simplify the creation\nand management of localized VMs running on an Unraid host:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"KVM")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Main_Page"},"KVM")," is a hypervisor\nresponsible for monitoring and managing the resources allocated\nto virtual machines.")),(0,i.kt)("p",{parentName:"li"},":   KVM is a component in the Linux kernel that allows it to act as\na hypervisor. Simply put, hypervisors are responsible for\nmonitoring and managing the resources allocated to virtual\nmachines. Virtual machines are emulated computers that run on\ntop of a physical computer. Ever wanted to run three operating\nsystems on one computer all at the same time? Hypervisors make\nthis possible. Examples of other hypervisors include Xen, VMWare\n(ESX/ESXi), VirtualBox, and Microsoft Hyper-V"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unlike other hypervisors, KVM is the only one that is built\ndirectly into and supported by the Linux kernel itself.")),(0,i.kt)("p",{parentName:"li"},":   All other type-1 hypervisors out there will load before Linux\ndoes, and then Linux runs in an underprivileged state to that\nhypervisor.\n:   By leveraging a hypervisor that is part of the Linux kernel\nitself, it means better support, less complexity, and more room\nfor optimization improvements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"QEMU")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.qemu.org/"},"QEMU")," is the component in the kernel\nthat manages / monitors resources allocated to virtual machines."),(0,i.kt)("li",{parentName:"ul"},"QEMU is responsible for the emulation of hardware components\nsuch as a motherboard, CPU, and various controllers that make up\na virtual machine."),(0,i.kt)("li",{parentName:"ul"},"KVM can\\'t work without QEMU, so you\\'ll often times see KVM\nreferred to as KVM/QEMU."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"HVM")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When virtual machine technology was first starting to grow in\nadoption, it wasn\\'t directly supported by the chipset\nmanufacturers directly. As such, there was a significant amount\nof overhead associated with virtual machines due to software\nemulation. Later, Intel and AMD built support for virtualization\ndirectly into their hardware (Intel VT-x and AMD-v), reducing\noverhead for emulation, monitoring, and security. These\ntechnologies allow for the creation of hardware-assisted virtual\nmachines (referred to as HVMs)."),(0,i.kt)("li",{parentName:"ul"},"While Xen offers a way to eliminate the overhead associated with\ntraditional emulation without the need for VT-x, this\nparavirtualization method only works with Linux-based guests,\nand for that, Docker Containers are a better solution anyway. As\nsuch, HVMs are best suited for virtual machines where more than\njust basic Linux applications are needed."),(0,i.kt)("li",{parentName:"ul"},"HVM is required to be able to run a VM on Unraid. Most modern\nsystems will have HVM support. You can see if your Unraid server\nhas HVM support by clicking on the ",(0,i.kt)("em",{parentName:"li"},"info")," button at the top\nright of the Unraid GUI. If it shows as disabled then you might\nwant to check your motherboard\\'s BIOS to see if it needs to be\nenabled there."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VFIO")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/images/b/b4/2012-forum-VFIO.pdf"},"VFIO"),"\n(",(0,i.kt)("strong",{parentName:"li"},"V"),"irtual ",(0,i.kt)("strong",{parentName:"li"},"F"),"unction ",(0,i.kt)("strong",{parentName:"li"},"IO"),") allows us to assign a physical\ndevice, such as a graphics card, directly to a virtual machine\nthat in turn will provide driver support for the device\ndirectly.")),(0,i.kt)("p",{parentName:"li"},":   We can also prevent the device from accessing spaces in memory\nthat are outside of that VM. This means that if something goes\nwrong with the device or its driver, the impact of such an event\nis limited to the virtual machine and not the host."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VFIO prevents assigned devices from accessing spaces in memory\nthat are outside of the VM to which they are assigned. This\nlimits the impact of issues pertaining to device drivers and\nmemory space, shielding Unraid OS from being exposed to\nunnecessary risk."),(0,i.kt)("li",{parentName:"ul"},"VFIO usage requires ",(0,i.kt)("strong",{parentName:"li"},"IOMMU")," capable hardware (your CPU must\nhave Intel VT-d or AMD-Vi\nsupport)",(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/vfio.txt"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"IOMMU is required to be able to pass through hardware to a VM on\nUnraid. You can see if your Unraid server has IOMMU support by\nclicking on the ",(0,i.kt)("em",{parentName:"li"},"info")," button at the top right of the Unraid\nGUI. If it shows as disabled then you might want to check your\nmotherboard\\'s BIOS to see if it needs to be enabled there.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IOMMU support requires support in the CPU, motherboard, and\nBIOS to all be present."),(0,i.kt)("li",{parentName:"ul"},"IOMMU is often referred to as ",(0,i.kt)("em",{parentName:"li"},"hardware pass-through")," in the\ncontext of a VM."),(0,i.kt)("li",{parentName:"ul"},"IOMMU allows a VM to get direct access to hardware and thus\ntends to give better performance in using that hardware and\nalso may allow capabilities of the hardware to be accessed\nby the VM that is not possible in the host OS."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VirtIO")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Virtio"},"VirtIO"),' is a\nvirtualization standard for network and disk device drivers\nwhere just the guest\\\'s device driver \\"knows\\" it is running in\na virtual environment and cooperates with the hypervisor.'),(0,i.kt)("li",{parentName:"ul"},"This enables guests to get high-performance network and disk\noperations, and gives most of the performance benefits of\nparavirtualization",(0,i.kt)("a",{parentName:"li",href:"http://wiki.libvirt.org/page/Virtio"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},"Using VirtIO in a guest OS requires that guest OS have virtIO\ndrivers installed for the devices specified to use VirtIO in the\nVM definition."),(0,i.kt)("li",{parentName:"ul"},"If the guest does not haveVirtIO drivers then the VM will have\nto be specified to emulate a device for which the guest OS\n",(0,i.kt)("strong",{parentName:"li"},"does")," have drivers. This will be less efficient but does\nallow OS that are not VirtIO aware to be run in a VM. Examples\nmight be to emulate SCSI or SATA for disk drives and e1000 for\nnetwork adapters."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VirtFS")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Also referred to as the 9p filesystem,\n",(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/ols/2010/ols2010-pages-109-120.pdf"},"VirtFS"),"\nallows us to easily pass through file system access from a\nvirtualization host to a guest."),(0,i.kt)("li",{parentName:"ul"},"VirtFS is the equivalent of Docker Volumes for KVM, but requires\na mount command to be issued from within the\nguest",(0,i.kt)("a",{parentName:"li",href:"http://wiki.qemu.org/Documentation/9psetup"},"3"),". VirtFS\nworks with Linux-based virtual machines ",(0,i.kt)("em",{parentName:"li"},"only"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Libvirt")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://libvirt.org/"},"Libvirt")," is a collection of software that\nprovides a convenient way to manage virtual machines and other\nvirtualization functionality, such as storage and network\ninterface management."),(0,i.kt)("li",{parentName:"ul"},"These software pieces include an API library, a daemon\n(libvirtd), and a command-line utility\n(virsh)",(0,i.kt)("a",{parentName:"li",href:"http://wiki.libvirt.org/page/FAQ#What_is_libvirt.3F"},"4"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VNC")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Virtual_Network_Computing"},"VNC"),"\nis a method that allows the screen/mouse/keyboard of a VM to be\nvisible across the network from another device."),(0,i.kt)("li",{parentName:"ul"},"VNC clients are available for most OS"),(0,i.kt)("li",{parentName:"ul"},"VNC can be used to view ",(0,i.kt)("em",{parentName:"li"},"emulated")," GPUs."),(0,i.kt)("li",{parentName:"ul"},"VNC does ",(0,i.kt)("strong",{parentName:"li"},"not")," support sound emulation."),(0,i.kt)("li",{parentName:"ul"},"One can get better performance emulating a GPU by having\nappropriate software installed directly into a guest OS. Such\nsoftware also often provides sound emulation as well.")))),(0,i.kt)("p",null,"It is worth understanding what technologies are being used for\nvirtualization by Unraid as documentation on these technologies will not\nbe Unraid specific. Also, many issues relating to these technology\ncomponents can be common across all Linux systems using s particular\ntechnology component so often answers can be found in places other than\nthe ","`","Unraid forums."),(0,i.kt)("p",null,"Particulars of the Unraid implementation of VM support are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"KVM"),": Unraid makes use of the Linux\n",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine"},"KVM"),"\n(",(0,i.kt)("strong",{parentName:"li"},"K"),"ernel ",(0,i.kt)("strong",{parentName:"li"},"V"),"irtual ",(0,i.kt)("strong",{parentName:"li"},"M"),"achine) facility to allow other\noperating system to run as guests on an Unraid system.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"QEMU"))),(0,i.kt)("li",{parentName:"ul"},"Unraid provides GUI support for managing VMs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Libvirt:")," The XML definitions needed by libvirt are stored as a\ndisk image file (typically called ",(0,i.kt)("em",{parentName:"li"},"libvirt.img")," although the user\ncan change this name)"),(0,i.kt)("li",{parentName:"ul"},"Unraid sets up some standard shares to provide a level of\nconsistency to users:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"domains"),": This the default location for storing VM vdisk\nimages associated with a VM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isos"),": This is the default location for storing iso images\nfor use with VMs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"system"),": This is the default location for storing the\nlibvirt.img file (that contains the XML definitions for VMs.")))),(0,i.kt)("p",null,":   The users can over-ride any of these settings if so desired when\ncreating individual VMs but for most users, the defaults are a good\noption.\n:   All these shares have a default ",(0,i.kt)("strong",{parentName:"p"},"Use Cache")," setting of ",(0,i.kt)("em",{parentName:"p"},"prefer"),".\nHaving VM files (particularly disk images) on the cache will give\nmuch better performance than having them on an array drive."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VNC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unraid has the NoVNC web-based client built into its GUI and it\ncan be used to access all VMs without the need to install\nspecialist software into the guest OS."),(0,i.kt)("li",{parentName:"ul"},"Alternative VNC clients can be used to access the VMs hosted by\nUnraid. The port to be used for such clients is displayed in the\nUnraid GUI on the VM tab when a VM is running. Using such an\nalternative client can work in cases where the NoVNC client does\nnot work correctly for some reason.")))),(0,i.kt)("p",null,"\\"))}c.isMDXComponent=!0},6995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CA_Tile1-a97ac1274c35f1c175b82daa23095ff9.png"}}]);
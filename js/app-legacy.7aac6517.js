(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"dbf5fd3c","chunk-2d229ba9":"58312367","chunk-341ba7da":"a5cad959","chunk-0ab35df2":"367bdb44","chunk-71e4118f":"21de8bce","chunk-48f2a4ac":"adf8bf80"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-341ba7da":1,"chunk-0ab35df2":1,"chunk-71e4118f":1,"chunk-48f2a4ac":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"50626368","chunk-2d229ba9":"31d6cfe0","chunk-341ba7da":"f0222215","chunk-0ab35df2":"48ad83f6","chunk-71e4118f":"05d0c91c","chunk-48f2a4ac":"d9944597"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],v.parentNode.removeChild(v),n(o)},v.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("1080")},1080:function(t,e,n){},"435e":function(t,e,n){"use strict";n("502f")},"502f":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("9531"),n("26d3"),n("2007"),n("41ab");var a=n("9869"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"light-green",dark:"",src:"https://mo4koma.iranika.info/top/top.jpg","shrink-on-scroll":"",prominent:"",dense:"","collapse-on-scroll":"","clipped-right":""},scopedSlots:t._u([{key:"img",fn:function(e){var a=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(0,100,160,.8), rgba(0,160,100,.2)"}},"v-img",a,!1))]}},{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),n("v-tab",{attrs:{to:"/?page=latest"}},[t._v("latest")]),n("v-tab",{attrs:{to:"/charactor"}},[t._v("Charactor")])],1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),n("v-toolbar-title",[t._v("みちくさびゅあー")]),n("v-spacer"),n("title-list-menu",{attrs:{items:t.pageData}})],1),n("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("みちくさびゅあー")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("ホーム")])],1),n("v-list-item",{attrs:{to:"/?page=latest"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("最新話")])],1),n("v-list-item",{attrs:{to:"/charactor"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("登場人物の紹介")])],1),n("v-list-item",{attrs:{to:"/search"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("びゅあー検索くんα")])],1),n("v-list-item",{attrs:{to:"/products"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("道草屋の作品一覧")])],1),n("v-list-item",{attrs:{to:"/timeline"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("タイムライン")])],1),n("v-list-item",{attrs:{to:"/About"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("このアプリについて")])],1),n("v-list-item",{attrs:{to:"/mypage"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("マイページ")])],1),n("v-spacer")],1)],1),n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("外部リンク")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[n("v-list-item",{attrs:{href:"https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("DLsiteのページ")])],1),n("v-list-item",{attrs:{href:"https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("BOOTHのページ")])],1),n("v-list-item",{attrs:{href:"https://momotori.booth.pm/item_lists/rBkTe4Bm"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("お土産売り場(booth)")])],1),n("v-list-item",{attrs:{href:"http://momoirocode.web.fc2.com/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("桃色CODE")])],1),n("v-list-item",{attrs:{href:"http://blog.livedoor.jp/kai_tyou/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("雑記的な（ブログ）")])],1),n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[n("div",{staticClass:"text-center"},[t._v(" ご予約でんわ ")])]),n("v-expansion-panel-content",[n("YoyakuList",{attrs:{items:t.goyoyaku}})],1)],1)],1)],1)],1),n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("いらにかの何か")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[n("v-list-item",{attrs:{href:"https://michikusa-renka.glideapp.io/",target:"new"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-apps")])],1),n("v-list-item-title",[t._v("道草恋歌")])],1),n("v-list-item",{attrs:{href:"https://stamp.iranika.info/#/",target:"new"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-apps")])],1),n("v-list-item-title",[t._v("Nikaスタンプβ")])],1)],1)],1)],1),n("v-main",{staticClass:"bg"},[n("router-view")],1),n("v-snackbar",{attrs:{bottom:"",right:"",value:t.updateExists,timeout:-1}},[t._v(" びゅあーのアップデートがあります "),n("v-btn",{attrs:{text:""},on:{click:t.refreshApp}},[t._v(" 更新する ")])],1)],1)},r=[],o=n("8206"),s=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"overflow-y-auto",attrs:{bottom:"",left:"","max-height":"100%","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),a),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-list",[n("v-list-item",{attrs:{to:"search"},on:{click:function(e){e.stopPropagation(),t.menu=!1}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("詳細検索をひらく"),n("v-icon",[t._v("mdi-magnify")])],1)],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"タイトル検索"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),t._l(t.items,(function(e,a){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.isFiltered(e,a),expression:"isFiltered(item, i)"}],key:a,attrs:{href:t.getPageUrl(a+1)},on:{click:function(e){e.stopPropagation(),t.menu=!1}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(a+1)+"."+t._s(e.Title))])],1)],1)})),n("v-list-item-action")],2)],1)},l=[],u=(n("ef1f"),n("0d9f"),n("d86f"),{props:{items:{}},data:function(){return{menu:!1,searchText:""}},methods:{getPageUrl:function(t){return"#/?page=".concat(t.toString())},isFiltered:function(t,e){var n=e+1,a=t.Title;return-1!=="".concat(n,".").concat(a).toString().indexOf(this.searchText)}}}),d=u,v=n("2be6"),p=n("16aa"),m=n.n(p),f=n("7265"),h=n("213b"),g=n("a5fe"),b=n("ecef"),w=n("2099"),_=n("d963"),x=n("fbe1"),k=n("2370"),y=Object(v["a"])(d,c,l,!1,null,null,null),C=y.exports;m()(y,{VBtn:f["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMenu:x["a"],VTextField:k["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.reverseItems,(function(e,a){return n("v-list-item",{key:a,attrs:{href:e.href}},[n("v-list-item-title",[t._v(t._s(t.getText(a,e.text)))])],1)})),n("v-list-item-action")],2)},V=[],S=(n("33ef"),{props:{items:{}},methods:{getText:function(t,e){return 0==t?"".concat(e," New!"):e}},computed:{reverseItems:function(){return console.log(this.items),this.items.slice().reverse()}}}),T=S,j=Object(v["a"])(T,E,V,!1,null,null,null),F=j.exports;m()(j,{VListItem:b["a"],VListItemAction:w["a"],VListItemTitle:_["b"]});var D={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var t=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){t.refreshing||(t.refreshing=!0,window.location.reload())}))},methods:{updateAvailable:function(t){this.registration=t.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},O={name:"App",components:{TitleListMenu:C,YoyakuList:F},data:function(){return{drawer:!1,group:null,isTabShow:!0,pageData:window.pageData,goyoyaku:window.goyoyaku}},mounted:function(){var t=this;this.$route.params.lang&&"en"==this.$route.params.lang&&s.a.get("https://mo4koma.iranika.info/4komaData.en.json").then((function(e){e.data[0]&&(t.pageData=e.data)}))},mixins:[D]},B=O,I=(n("034f"),n("9293")),L=n("542d"),A=n("4318"),P=n("5b19"),N=n("bea9"),M=n("0ef4"),K=n("dc36"),U=n("9f6c"),$=n("afd2"),q=n("6c4c"),H=n("06b6"),Y=n("c3ed"),J=n("2f63"),z=n("7b27"),G=n("651a"),R=n("b66c"),W=n("eb73"),X=n("abc0"),Q=Object(v["a"])(B,i,r,!1,null,null,null),Z=Q.exports;m()(Q,{VApp:I["a"],VAppBar:L["a"],VAppBarNavIcon:A["a"],VBtn:f["a"],VExpansionPanel:P["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:M["a"],VExpansionPanels:K["a"],VIcon:h["a"],VImg:U["a"],VList:g["a"],VListItem:b["a"],VListItemGroup:$["a"],VListItemIcon:q["a"],VListItemTitle:_["b"],VMain:H["a"],VNavigationDrawer:Y["a"],VSnackbar:J["a"],VSpacer:z["a"],VSubheader:G["a"],VTab:R["a"],VTabs:W["a"],VToolbarTitle:X["a"]});var tt=n("1f29");Object(tt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){self.ServiceWorker,console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),self.addEventListener("install",(function(t){t.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(function(t){t.waitUntil(self.clients.claim())}));n("f3b8"),n("918c"),n("868d");var et=n("5f2b"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Infomation"),n("ViewerContent",{attrs:{page:t.page,lang:t.lang}}),n("Footer")],1)},at=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[Math.min.apply(null,t.show)>0?n("div",{staticStyle:{"text-align":"center",padding:"10px"},attrs:{centered:""}},[n("v-btn",{attrs:{small:"",rounded:""},on:{click:function(e){return t.BeforeContent()}}},[t._v("▲前のお話▲")])],1):t._e(),t._l(t.show,(function(e){return n("div",{key:e,attrs:{id:"page-"+e}},[t._l(t.pages[e].ImagesUrl,(function(a,i){return n("img",{key:i,attrs:{src:t.pages[e].ImagesUrl[i].replace("/ja/","/ja/webp/").replace(".jpg",".webp"),alt:"",width:"100%"}})})),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("ShareTwitterButton",{attrs:{link:t.CreateShareLinkTwitter(e+1,t.pages[e].Title)}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{rounded:"","x-small":"",depressed:""},on:{click:function(e){return t.scrollTop()}}},[t._v("トップに戻る")]),t.memos[e]&&null!=t.memos[e]?n("v-btn",{staticStyle:{color:"white"},attrs:{rounded:"","x-small":"",depressed:"",color:"orange"},on:{click:function(n){t.memo=t.memos[e],t.dialog=!t.dialog}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-book")]),t._v(" Memo ")],1):t._e()],1)],1)],2)})),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" ひとくちメモ"),n("v-icon",[t._v("mdi-book")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("とじる")])],1),n("v-card-text",{staticClass:"memo-content",domProps:{innerHTML:t._s(t.memo)}})],1)],1),n("div",{staticStyle:{"text-align":"center",padding:"10px"},attrs:{centered:""}},[t.pages.length-1>Math.max.apply(null,t.show)?n("v-btn",{attrs:{rounded:"",small:""},on:{click:function(e){return t.addContent()}}},[t._v("▼続きを表示▼")]):t._e()],1)],2)},rt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{color:"primary",rounded:"","x-small":"",depressed:"",href:t.link}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-twitter")]),t._v(" シェア ")],1)],1)},st=[],ct={props:{link:{type:String}}},lt=ct,ut=Object(v["a"])(lt,ot,st,!1,null,null,null),dt=ut.exports;m()(ut,{VBtn:f["a"],VIcon:h["a"]});var vt={components:{ShareTwitterButton:dt},props:{page:{type:String,default:"1"},lang:{type:String,default:"ja"}},data:function(){return{show:[],pages:window.pageData,memos:[""],memo:"",bottom:!1,dialog:!1}},methods:{bottomVisible:function(){var t=window.scrollY,e=window.innerHeight,n=document.documentElement.scrollHeight,a=e+t+2>=n;return a||n<e},addContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pages.length-1>Math.max.apply(null,this.show)?this.show.push(Math.max.apply(null,this.show)+t):console.log("viewerContent info: show.length is over pages.length")},BeforeContent:function(){Math.min.apply(null,this.show)>0?this.show.unshift(Math.min.apply(null,this.show)-1):console.log("viewerContent info: can not show page under 0")},scrollTop:function(){scrollTo(0,0)},onScroll:function(){this.bottom=this.bottomVisible()},setShow:function(){var t=parseInt(this.page);console.log(t),"latest"===this.page?this.show.push(this.pages.length-1):t>0&&t<=this.pages.length?this.show.push(t-1):t<=0?this.show.push(0):(this.show.push(0),console.log("?page query is unknown value"))},InitShow:function(){this.show=[],this.setShow()},CreateShareLinkTwitter:function(t,e){var n=encodeURI("第".concat(t,"話「").concat(e,"」"));return"https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=".concat(n,"&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D").concat(t)}},watch:{bottom:function(){this.bottom&&this.addContent()},page:function(){this.InitShow()}},mounted:function(){var t=this;"en"==this.lang?s.a.get("https://mo4koma.iranika.info/4komaData.en.json").then((function(e){e.data[0]&&(t.pages=e.data)})):"zh-tw"==this.lang&&s.a.get("https://mo4koma.iranika.info/4komaData.zh.json").then((function(e){e.data[0]&&(t.pages=e.data)}))},created:function(){var t=this;window.addEventListener("scroll",this.onScroll),this.setShow(),this.addContent(),s.a.post("https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec").then((function(e){e.data[0]&&(t.memos=e.data)})).catch((function(t){console.log("cannot get memos.",t)}))},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}},pt=vt,mt=n("8467"),ft=n("05d9"),ht=n("3ee1"),gt=Object(v["a"])(pt,it,rt,!1,null,"9a207e96",null),bt=gt.exports;m()(gt,{VBtn:f["a"],VCard:mt["a"],VCardText:ft["c"],VCardTitle:ft["d"],VDialog:ht["a"],VIcon:h["a"],VSpacer:z["a"]});var wt=n("fd2d"),_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",{staticStyle:{"background-color":"#f7f7f7"}},[n("v-expansion-panel-header",[n("div",{staticClass:"text-center"},[t._v("お知らせ情報＠2021-08-13")])]),n("v-expansion-panel-content",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("8月13日 なぞ")]),t._v(" フッターに今週のおすすめ作品の掲載をはじめました。"),n("br"),t._v(" 飽きるまではオススメ作品のピックアップでもしようと思います。"),n("br"),t._v(" 他にも色々と改善したりしました。webpがイチオシの改善ポイントです。"),n("br"),n("ol",[n("li",[t._v(" 数こまの画像をjpgからwebpに変更しました。画像の読み込みが大幅に改善されると思います。 ")]),n("li",[t._v(" マイページのデザインを修正しました。スマホでも見やすくなったと思います。 ")]),n("li",[t._v(" アップデートの際に削除された古いjsが、ブラウザ側がキャッシュしていたindex.htmlによって呼ばれることで画面が真っ白のままになるトラブルを検知しました。"),n("br"),t._v(" 対策は検討評価中ですが、とりあえずindex.htmlのキャッシュを除外しました。これで完全に治るのかは経過観察になります。"),n("br"),t._v(" もし、発生した場合はキャッシュをクリアするかページを閉じることで事象が改善されます。"),n("br")])])])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("8月09日 晴れ")]),t._v(" 作品情報一覧ページにブックマーク機能を追加しました。"),n("br"),t._v(" →"),n("a",{attrs:{href:"#/products"}},[t._v("道草屋の作品一覧")]),n("br"),t._v(" ログインボタンからTwitter認証するとLink欄のBOOTH,DLSITEそれぞれの横に☆のチェックボックスが表示されます。"),n("br"),t._v(" どこで買ったかメモするのに役立つかも。好きに使ってください。"),n("br"),t._v(" 需要があれば購入作品一覧のマイページも作ろうかなとか思いました（思っただけ）"),n("br"),t._v(" 08/10追記→マイページ作りました。 ")])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("7月18日 晴れ")]),t._v(" 関東は梅雨が明けました。"),n("br"),t._v(" 道草屋では新しい予約電話が公開されましたね。"),n("br"),t._v(" びゅあーは色々と機能を追加しました。"),n("br"),n("ol",[n("li",[t._v(" 左メニューにキャラクター紹介ページが追加されました。 ")]),n("li",[t._v(" 左メニューに道草屋の作品一覧ページを追加しました。登場声優さん等で検索できるちょっと便利なやつです。 ")]),n("li",[t._v(" 左メニューにNikaスタンプのリンクを追加しました。 ")]),n("li",[t._v(" アプリの更新があるときに更新ボタンが表示されるようになりました。 ")])])])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("6月7日 曇り")]),t._v(" 各話にひとくちMEMOを実装しました。 MEMOがある場合にのみ、オレンジ色のMEMOボタンが表示されます。 あと、びゅあー検索くん㌁がひっそりとリリースされました。 ")])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("4月7日 曇り")]),t._v(" 左上のサイドメニューに道草恋歌へのリンクを追加しました。 道草恋歌は道草屋への想いを俳句や短歌で綴るためのアプリです。 七草への想いが歌になって、見知らぬ他の旦那様の心を揺らし、もっと道草屋が好きになれたら…。 そんな想いで作ったアプリです。よければご愛顧ください。 ")])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("3月10日 晴れ時々曇り")]),t._v(" 試験的にいくつかの機能を解放しました。 "),n("ol",[n("li",[t._v("お知らせ情報（これ）の追加")]),n("li",[t._v(" 左上のサイドメニューに予約電話へのリンクを追加（いつか自動更新にする予定） ")]),n("li",[t._v(" PWAアプリとしてインストールした際の名前をmo-vueからみちくさびゅあー（びゅあー）に変更 ")])]),t._v(" アプリ名の更新は勝手にされるのか分かりません。再インストールしたら更新されたのは確認済みです。 ")])],1)],1)],1)],1)],1)},xt=[],kt={},yt=kt,Ct=Object(v["a"])(yt,_t,xt,!1,null,"1222eb21",null),Et=Ct.exports;m()(Ct,{VCard:mt["a"],VCardText:ft["c"],VExpansionPanel:P["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:M["a"],VExpansionPanels:K["a"]});var Vt={name:"Home",props:{page:String,lang:String},data:function(){return{}},components:{ViewerContent:bt,Footer:wt["a"],Infomation:Et}},St=Vt,Tt=Object(v["a"])(St,nt,at,!1,null,null,null),jt=Tt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-center"},[n("v-card",{staticClass:"ma-4",attrs:{width:"90%","max-width":"900px"}},[n("v-card-title",[t._v(" びゅあー検索くん㌁ver0.5 "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"検索する文字を入力してね","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"",headers:t.headers,items:t.searchDB,search:t.search,"custom-filter":t.filter,"item-key":"No","pagination.sync":"pagination",loading:"true",dense:""},scopedSlots:t._u([{key:"item.No",fn:function(e){var n=e.item;return[t._v(" "+t._s(Number(n.No))+" ")]}},{key:"item.Charactors",fn:function(e){var a=e.item;return[n("v-edit-dialog",{attrs:{"return-value":a.Charactors},on:{"update:returnValue":function(e){return t.$set(a,"Charactors",e)},"update:return-value":function(e){return t.$set(a,"Charactors",e)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:""},model:{value:a.Charactors,callback:function(e){t.$set(a,"Charactors",e)},expression:"item.Charactors"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(null==a.Charactors?"-":a.Charactors.toString())+" ")])]}},{key:"item.Keyword",fn:function(e){var a=e.item;return[n("v-edit-dialog",{attrs:{"return-value":a.Keyword},on:{"update:returnValue":function(e){return t.$set(a,"Keyword",e)},"update:return-value":function(e){return t.$set(a,"Keyword",e)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:""},model:{value:a.Keyword,callback:function(e){t.$set(a,"Keyword",e)},expression:"item.Keyword"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(null==a.Keyword?"-":a.Keyword.toString())+" ")])]}},{key:"item.Comment",fn:function(e){var n=e.item;return[t._v(" "+t._s(null==n.Comment?"-":n.Comment.toString())+" ")]}},{key:"item.PageLink",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{href:t.getPageLink(a),target:"__blank",small:"",color:"white",depressed:""}},[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!0),model:{value:t.selecteds,callback:function(e){t.selecteds=e},expression:"selecteds"}})],1)],1),n("div",{staticClass:"content-center"},[n("v-switch",{attrs:{label:"チェックした話を一覧表示する"},model:{value:t.isShowViewerContent,callback:function(e){t.isShowViewerContent=e},expression:"isShowViewerContent"}})],1),n("div",{staticClass:"content-center"},[n("viewer-images",{directives:[{name:"show",rawName:"v-show",value:t.isShowViewerContent,expression:"isShowViewerContent"}],attrs:{pageList:t.selecteds.map((function(t){return t.No-1}))}})],1)])},Dt=[],Ot=n("f5f2"),Bt=n("30c6"),It=n("f0ad"),Lt=n("02a5"),At=(n("2aa5"),n("2c93"),n("cfce"),n("2d6d"),n("62c8"),n("b55a"),n("0f9e")),Pt=n("7e44"),Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.show,(function(e){return n("div",{key:e},[t._l(t.pages[e].ImagesUrl,(function(a,i){return n("img",{key:i,attrs:{src:t.pages[e].ImagesUrl[i],alt:"",width:"100%"}})})),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("ShareTwitterButton",{attrs:{link:t.CreateShareLinkTwitter(e+1,t.pages[e].Title)}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{rounded:"","x-small":"",depressed:""},on:{click:function(e){return t.scrollTop()}}},[t._v("トップに戻る")])],1)],1)],2)})),0)},Mt=[],Kt={props:{pageList:{type:Array,default:function(){return[]}}},data:function(){return{show:[],enableBack:!1,pages:window.pageData,bottom:!1}},methods:{CreateShareLinkTwitter:function(t,e){var n=encodeURI("第".concat(t,"話「").concat(e,"」"));return"https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=".concat(n,"&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D").concat(t)},scrollTop:function(){scrollTo(0,0)}},components:{ShareTwitterButton:dt},watch:{pageList:function(){console.log(this.pageList),this.show=this.pageList}}},Ut=Kt,$t=Object(v["a"])(Ut,Nt,Mt,!1,null,null,null),qt=$t.exports;m()($t,{VBtn:f["a"]});var Ht=function(t){Object(It["a"])(n,t);var e=Object(Lt["a"])(n);function n(){var t;return Object(Ot["a"])(this,n),t=e.apply(this,arguments),t.selecteds=[],t.isShowViewerContent=!0,t.pagination={sortBy:"No",descending:!0,rowsPerPage:-1},t.searchDBurl="https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec",t.searchDB=[{No:"0",Title:"都会派",ImagesUrl:["https://mo4koma.iranika.info/4koma/ja/1.jpg"],Charactors:["せり","すずな"],Keyword:["きっぷ"],Comment:"きっぷが買えるなんてずなちゃんは都会派だね！"}],t.exDB="",t.pageData="",t.search="",t.headers=[{text:"＃",value:"No"},{text:"タイトル",value:"Title"},{text:"登場キャラ",value:"Charactors"},{text:"キーワード",value:"Keyword"},{text:"コメント",value:"Comment"},{text:"Link",value:"PageLink"}],t.snack=!1,t}return Object(Bt["a"])(n,[{key:"created",value:function(){var t=this;s.a.get(this.searchDBurl).then((function(e){t.pageData=window.pageData||{},t.exDB=e.data,t.searchDB=t.pageData.map((function(e,n){return t.exDB[n]?Object.assign(Object.assign(e,{No:n+1}),t.exDB[n][n]):Object.assign(Object.assign(e,{No:n+1}),{No:n+1,Title:"",ImagesUrl:[],Charactors:[],Keyword:[],Comment:"※検索DBに情報が追記されていません"})})),console.log(t.searchDB)}))}},{key:"filter",value:function(t,e){if(null==t||"boolean"===typeof t)return!1;var n=e.split(/,|、/).map((function(t){return t.trim()})).filter((function(t){return t}));return n.filter((function(e){return Array.isArray(t)?t.filter((function(t){return-1!==t.indexOf(e)})).length>0:-1!==t.toString().indexOf(e)})).length==n.length}},{key:"getPageLink",value:function(t){var e=this.searchDB.map((function(t){return t.Title})).indexOf(t.Title)+1;return"#/?page="+e}},{key:"save",value:function(){console.log("save is ok")}},{key:"cancel",value:function(){console.log("cancel is ok")}},{key:"open",value:function(){console.log("open is ok")}},{key:"close",value:function(){console.log("close is ok")}}]),n}(Pt["b"]);Ht=Object(At["c"])([Object(Pt["a"])({components:{ViewerImages:qt}})],Ht);var Yt=Ht,Jt=Yt,zt=(n("435e"),n("8b60")),Gt=n("5c9f"),Rt=n("3b28"),Wt=Object(v["a"])(Jt,Ft,Dt,!1,null,"51fc472e",null),Xt=Wt.exports;m()(Wt,{VBtn:f["a"],VCard:mt["a"],VCardTitle:ft["d"],VDataTable:zt["a"],VEditDialog:Gt["a"],VIcon:h["a"],VSpacer:z["a"],VSwitch:Rt["a"],VTextField:k["a"]}),a["default"].use(et["a"]);var Qt=[{path:"/",name:"home",component:jt,props:function(t){return{page:t.query.page}}},{path:"/timeline",name:"timeline",component:function(){return n.e("chunk-48f2a4ac").then(n.bind(null,"f67a"))}},{path:"/charactor",redirect:"/charactor/seri"},{path:"/charactor/:name",name:"charactor",props:function(t){return{name:t.params.name}},component:function(){return n.e("about").then(n.bind(null,"68b8d"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/search",name:"search",component:Xt,props:function(t){return{page:t.query.page}}},{path:"/products",name:"products",component:function(){return Promise.all([n.e("chunk-341ba7da"),n.e("chunk-0ab35df2")]).then(n.bind(null,"e6dc"))}},{path:"/mypage",name:"mypage",component:function(){return Promise.all([n.e("chunk-341ba7da"),n.e("chunk-71e4118f")]).then(n.bind(null,"bd34"))}},{path:"/dlsite",name:"dlsite",component:function(){return n.e("chunk-2d229ba9").then(n.bind(null,"df4e"))}},{path:"/:lang/",component:jt,props:function(t){return{page:t.query.page,lang:t.params.lang}}}],Zt=new et["a"]({mode:"hash",base:"",routes:Qt}),te=Zt,ee=n("4afd"),ne=n.n(ee);n("de2a");a["default"].use(ne.a);var ae={},ie=new ne.a(ae);a["default"].config.productionTip=!1,new a["default"]({router:te,vuetify:ie,render:function(t){return t(Z)}}).$mount("#app")},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticStyle:{"padding-top":"10px"},attrs:{padless:""}},[n("v-card-text",{staticClass:"pt-0 text-center"},[n("br"),n("p",[t._v(" 画像等の著作権は桃鳥さんにあり、アプリの著作権はいらにかにあります。"),n("br"),t._v(" アプリに関するお問い合わせは"),n("a",{attrs:{href:"https://twitter.com/happy_packet"}},[t._v("いらにか(twitter)")]),t._v("までお願いします。 ")]),n("p",[t._v(" もしこのアプリを気に入って支援したい人がいたら"),n("a",{attrs:{href:"https://www.amazon.co.jp/hz/wishlist/genericItemsPage"}},[t._v("いらにかの欲しいものリスト")]),t._v("でプレゼントを送ってあげてください。"),n("br"),t._v(" コーヒーとか喜びます。 ")])]),n("v-divider"),n("v-card-text",{staticClass:"text-center"},[t._v(" みちくさびゅーあー ©2019 iranika(@happy_packet) ")])],1)},i=[],r=n("f5f2"),o=n("f0ad"),s=n("02a5"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-0",staticStyle:{margin:"0 auto"}},[n("v-card",{attrs:{width:"98%","max-width":"300px"}},[n("v-card-title",{staticClass:"text-center text-body-1"},[t._v("今週のオススメ作品")]),n("v-card-subtitle",{staticClass:"text-body-1"},[n("a",{attrs:{href:t.db.osusume.dalf}},[t._v(t._s(t.db.osusume.title))])]),n("v-card-text",[n("div",{staticClass:"text-caption"},[t._v("サークル： "+t._s(t.db.osusume.circle))]),n("div",{staticClass:"text-caption"},[t._v("声優さん： "+t._s(t.db.osusume.acts.join(",")))]),n("div",{staticClass:"text-caption"},[t._v("絵師さん： "+t._s(t.db.osusume.ilust))]),n("div",[t._v(t._s(t.db.osusume.comment))])])],1)],1)},l=[],u=n("0f9e"),d=n("7e44"),v=n("30c6"),p=n("9869"),m=n("8206"),f=n.n(m),h="https://script.google.com/macros/s/AKfycbxsZtN8gOaTLcMc3o2KNU0BY9Ufxkd57Nqo8KaxmQBlJEG_1kGjTgxtSKvU9IWNBL7X/exec",g=function(){function t(e){if(Object(r["a"])(this,t),this.db=new p["default"]({data:{osusume:{no:0,title:"",circle:"",acts:[],ilust:"",link:"",comment:"",dalf:"",banner:"",img:"",timestamp:""}}}),e!=t.getInstance)throw t.instance?new Error("Already created instance of OsusumeStore. You should use OsusumeStore.getInstance()."):new Error("Constractor args valided illegal. You should use OsusumeStore.getInstance()");console.info("create instance of OsusumeStore"),this.syncSpreadSheetDB()}return Object(v["a"])(t,[{key:"syncSpreadSheetDB",value:function(){var t=this;f.a.get(h).then((function(e){t.db.osusume=e.data}))}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new t(t.getInstance)),this.instance}}]),t}(),b=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.db=g.getInstance().db,t}return n}(d["b"]);b=Object(u["c"])([Object(d["a"])({components:{}})],b);var w,_,x=b,k=x,y=n("2be6"),C=n("16aa"),E=n.n(C),V=n("8467"),S=n("05d9"),T=Object(y["a"])(k,c,l,!1,null,null,null),j=T.exports;E()(T,{VCard:V["a"],VCardSubtitle:S["b"],VCardText:S["c"],VCardTitle:S["d"]});var F=(w=Object(d["a"])({components:{Osusume:j}}),w(_=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return n}(d["b"]))||_),D=F,O=n("29d0"),B=n("69f3"),I=Object(y["a"])(D,a,i,!1,null,null,null);e["a"]=I.exports;E()(I,{VCardText:S["c"],VDivider:O["a"],VFooter:B["a"]})}});
//# sourceMappingURL=app-legacy.7aac6517.js.map
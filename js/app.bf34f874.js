(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"824b6147","chunk-78b6fe84":"0293f0e0"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1,"chunk-78b6fe84":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"c8140e10","chunk-78b6fe84":"2fdc3848"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],d.parentNode.removeChild(d),n(r)},d.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}i[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"435e":function(t,e,n){"use strict";n("616e")},"616e":function(t,e,n){},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"light-green",dark:"",src:"https://mo4koma.iranika.info/top/top.jpg","shrink-on-scroll":"",prominent:"",dense:"","collapse-on-scroll":"","clipped-right":""},scopedSlots:t._u([{key:"img",fn:function(e){var a=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(0,100,160,.8), rgba(0,160,100,.2)"}},"v-img",a,!1))]}},{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),n("v-tab",{attrs:{to:"/?page=latest"}},[t._v("latest")]),n("v-tab",{attrs:{to:"/charactor"}},[t._v("Charactor")])],1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),n("v-toolbar-title",[t._v("みちくさびゅあー")]),n("v-spacer"),n("title-list-menu",{attrs:{items:t.pageData}})],1),n("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("みちくさびゅあー")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("ホーム")])],1),n("v-list-item",{attrs:{to:"/?page=latest"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("最新話")])],1),n("v-list-item",{attrs:{to:"/charactor"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("登場人物の紹介")])],1),n("v-list-item",{attrs:{to:"/search"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("びゅあー検索くんα")])],1),n("v-list-item",{attrs:{to:"/products"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("道草屋の作品一覧")])],1),n("v-list-item",{attrs:{to:"/About"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("このアプリについて")])],1),n("v-spacer")],1)],1),n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("外部リンク")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[n("v-list-item",{attrs:{href:"https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("DLsiteのページ")])],1),n("v-list-item",{attrs:{href:"https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("BOOTHのページ")])],1),n("v-list-item",{attrs:{href:"https://momotori.booth.pm/item_lists/rBkTe4Bm"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("お土産売り場(booth)")])],1),n("v-list-item",{attrs:{href:"http://momoirocode.web.fc2.com/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("桃色CODE")])],1),n("v-list-item",{attrs:{href:"http://blog.livedoor.jp/kai_tyou/"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("雑記的な（ブログ）")])],1),n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[n("div",{staticClass:"text-center"},[t._v(" ご予約でんわ ")])]),n("v-expansion-panel-content",[n("YoyakuList",{attrs:{items:t.goyoyaku}})],1)],1)],1)],1)],1),n("v-list",{attrs:{nav:"",dense:""}},[n("v-subheader",[t._v("いらにかの何か")]),n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[n("v-list-item",{attrs:{href:"https://michikusa-renka.glideapp.io/",target:"new"}},[n("v-list-item-icon",[n("v-icon",{attrs:{dense:""}},[t._v("mdi-apps")])],1),n("v-list-item-title",[t._v("道草恋歌")])],1)],1)],1)],1),n("v-main",{staticClass:"bg"},[n("router-view")],1)],1)},i=[],r=n("bc3a"),s=n.n(r),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"overflow-y-auto",attrs:{bottom:"",left:"","max-height":"100%","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-list",[n("v-list-item",{attrs:{to:"search"},on:{click:function(e){e.stopPropagation(),t.menu=!1}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("詳細検索をひらく"),n("v-icon",[t._v("mdi-magnify")])],1)],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"タイトル検索"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),t._l(t.items,(function(e,a){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.isFiltered(e,a),expression:"isFiltered(item, i)"}],key:a,attrs:{href:t.getPageUrl(a+1)},on:{click:function(e){e.stopPropagation(),t.menu=!1}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(a+1)+"."+t._s(e.Title))])],1)],1)})),n("v-list-item-action")],2)],1)},c=[],u=(n("d3b7"),n("25f0"),n("99af"),{props:{items:{}},data:function(){return{menu:!1,searchText:""}},methods:{getPageUrl:function(t){return"#/?page=".concat(t.toString())},isFiltered:function(t,e){var n=e+1,a=t.Title;return-1!=="".concat(n,".").concat(a).toString().indexOf(this.searchText)}}}),p=u,d=n("2877"),v=n("6544"),m=n.n(v),h=n("8336"),f=n("132d"),g=n("8860"),w=n("da13"),b=n("1800"),_=n("5d23"),x=n("e449"),y=n("8654"),k=Object(d["a"])(p,l,c,!1,null,null,null),C=k.exports;m()(k,{VBtn:h["a"],VIcon:f["a"],VList:g["a"],VListItem:w["a"],VListItemAction:b["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMenu:x["a"],VTextField:y["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.reverseItems,(function(e,a){return n("v-list-item",{key:a,attrs:{href:e.href}},[n("v-list-item-title",[t._v(t._s(t.getText(a,e.text)))])],1)})),n("v-list-item-action")],2)},V=[],F=(n("fb6a"),{props:{items:{}},methods:{getText:function(t,e){return 0==t?"".concat(e," New!"):e}},computed:{reverseItems:function(){return console.log(this.items),this.items.slice().reverse()}}}),S=F,T=Object(d["a"])(S,E,V,!1,null,null,null),D=T.exports;m()(T,{VListItem:w["a"],VListItemAction:b["a"],VListItemTitle:_["b"]});var B={name:"App",components:{TitleListMenu:C,YoyakuList:D},data:function(){return{drawer:!1,group:null,isTabShow:!0,pageData:window.pageData,goyoyaku:window.goyoyaku}},mounted:function(){var t=this;this.$route.params.lang&&"en"==this.$route.params.lang&&s.a.get("https://mo4koma.iranika.info/4komaData.en.json").then((function(e){e.data[0]&&(t.pageData=e.data)}))}},j=B,L=(n("034f"),n("7496")),I=n("40dc"),O=n("5bc1"),P=n("cd55"),A=n("49e2"),N=n("c865"),M=n("0393"),$=n("adda"),K=n("1baa"),U=n("34c3"),q=n("f6c4"),H=n("f774"),z=n("2fa4"),J=n("e0c7"),R=n("71a3"),Y=n("fe57"),G=n("2a7f"),W=Object(d["a"])(j,o,i,!1,null,null,null),X=W.exports;m()(W,{VApp:L["a"],VAppBar:I["a"],VAppBarNavIcon:O["a"],VExpansionPanel:P["a"],VExpansionPanelContent:A["a"],VExpansionPanelHeader:N["a"],VExpansionPanels:M["a"],VIcon:f["a"],VImg:$["a"],VList:g["a"],VListItem:w["a"],VListItemGroup:K["a"],VListItemIcon:U["a"],VListItemTitle:_["b"],VMain:q["a"],VNavigationDrawer:H["a"],VSpacer:z["a"],VSubheader:J["a"],VTab:R["a"],VTabs:Y["a"],VToolbarTitle:G["a"]});var Q=n("9483");Object(Q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){navigator.serviceWorker.ready.then((function(t){t.active.postMessage({type:"SKIP_WAITING"})})),console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),self.addEventListener("install",(function(t){t.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(function(t){t.waitUntil(self.clients.claim())}));n("b0c0"),n("3ca3"),n("ddb0");var Z=n("8c4f"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Infomation"),n("ViewerContent",{attrs:{page:t.page,lang:t.lang}}),n("Footer")],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[Math.min.apply(null,t.show)>0?n("div",{staticStyle:{"text-align":"center",padding:"10px"},attrs:{centered:""}},[n("v-btn",{attrs:{small:"",rounded:""},on:{click:function(e){return t.BeforeContent()}}},[t._v("▲前のお話▲")])],1):t._e(),t._l(t.show,(function(e){return n("div",{key:e,attrs:{id:"page-"+e}},[t._l(t.pages[e].ImagesUrl,(function(a,o){return n("img",{key:o,attrs:{src:t.pages[e].ImagesUrl[o],alt:"",width:"100%"}})})),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("ShareTwitterButton",{attrs:{link:t.CreateShareLinkTwitter(e+1,t.pages[e].Title)}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{rounded:"","x-small":"",depressed:""},on:{click:function(e){return t.scrollTop()}}},[t._v("トップに戻る")]),t.memos[e]&&null!=t.memos[e]?n("v-btn",{staticStyle:{color:"white"},attrs:{rounded:"","x-small":"",depressed:"",color:"orange"},on:{click:function(n){t.memo=t.memos[e],t.dialog=!t.dialog}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-book")]),t._v(" Memo ")],1):t._e()],1)],1)],2)})),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" ひとくちメモ"),n("v-icon",[t._v("mdi-book")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("とじる")])],1),n("v-card-text",{staticClass:"memo-content",domProps:{innerHTML:t._s(t.memo)}})],1)],1),n("div",{staticStyle:{"text-align":"center",padding:"10px"},attrs:{centered:""}},[t.pages.length-1>Math.max.apply(null,t.show)?n("v-btn",{attrs:{rounded:"",small:""},on:{click:function(e){return t.addContent()}}},[t._v("▼続きを表示▼")]):t._e()],1)],2)},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{color:"primary",rounded:"","x-small":"",depressed:"",href:t.link}},[n("v-icon",{attrs:{"x-small":""}},[t._v("mdi-twitter")]),t._v(" シェア ")],1)],1)},it=[],rt={props:{link:{type:String}}},st=rt,lt=Object(d["a"])(st,ot,it,!1,null,null,null),ct=lt.exports;m()(lt,{VBtn:h["a"],VIcon:f["a"]});var ut={components:{ShareTwitterButton:ct},props:{page:{type:String,default:"1"},lang:{type:String,default:"ja"}},data:function(){return{show:[],enableBack:!1,pages:window.pageData,memos:[""],memo:"",bottom:!1,dialog:!1}},methods:{bottomVisible:function(){var t=window.scrollY,e=window.innerHeight,n=document.documentElement.scrollHeight,a=e+t+2>=n;return a||n<e},addContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pages.length-1>Math.max.apply(null,this.show)?this.show.push(Math.max.apply(null,this.show)+t):console.log("viewerContent info: show.length is over pages.length")},BeforeContent:function(){Math.min.apply(null,this.show)>0?this.show.unshift(Math.min.apply(null,this.show)-1):console.log("viewerContent info: can not show page under 0")},scrollTop:function(){scrollTo(0,0)},onScroll:function(){this.bottom=this.bottomVisible()},setShow:function(){var t=parseInt(this.page);console.log(t),"latest"===this.page?this.show.push(this.pages.length-1):t>0&&t<=this.pages.length?this.show.push(t-1):t<=0?this.show.push(0):(this.show.push(0),console.log("?page query is unknown value"))},InitShow:function(){this.show=[],this.setShow()},CreateShareLinkTwitter:function(t,e){var n=encodeURI("第".concat(t,"話「").concat(e,"」"));return"https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=".concat(n,"&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D").concat(t)}},watch:{bottom:function(){this.bottom&&this.addContent()},page:function(){this.InitShow()}},mounted:function(){var t=this;"en"==this.lang?s.a.get("https://mo4koma.iranika.info/4komaData.en.json").then((function(e){e.data[0]&&(t.pages=e.data)})):"zh-tw"==this.lang&&s.a.get("https://mo4koma.iranika.info/4komaData.zh.json").then((function(e){e.data[0]&&(t.pages=e.data)}))},created:function(){var t=this;window.addEventListener("scroll",this.onScroll),this.setShow(),this.addContent(),s.a.post("https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec").then((function(e){e.data[0]&&(t.memos=e.data)})).catch((function(t){console.log("cannot get memos.",t)}))},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}},pt=ut,dt=n("b0af"),vt=n("99d9"),mt=n("169a"),ht=Object(d["a"])(pt,nt,at,!1,null,"53e2f590",null),ft=ht.exports;m()(ht,{VBtn:h["a"],VCard:dt["a"],VCardText:vt["b"],VCardTitle:vt["c"],VDialog:mt["a"],VIcon:f["a"],VSpacer:z["a"]});var gt=n("fd2d"),wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",{staticStyle:{"background-color":"#f7f7f7"}},[n("v-expansion-panel-header",[n("div",{staticClass:"text-center"},[t._v("お知らせ情報＠2021-04-07")])]),n("v-expansion-panel-content",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("6月7日 曇り")]),t._v(" 各話にひとくちMEMOを実装しました。 MEMOがある場合にのみ、オレンジ色のMEMOボタンが表示されます。 あと、びゅあー検索くん㌁がひっそりとリリースされました。 ")])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("4月7日 曇り")]),t._v(" 左上のサイドメニューに道草恋歌へのリンクを追加しました。 道草恋歌は道草屋への想いを俳句や短歌で綴るためのアプリです。 七草への想いが歌になって、見知らぬ他の旦那様の心を揺らし、もっと道草屋が好きになれたら…。 そんな想いで作ったアプリです。よければご愛顧ください。 ")])],1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("h4",[t._v("3月10日 晴れ時々曇り")]),t._v(" 試験的にいくつかの機能を解放しました。 "),n("ol",[n("li",[t._v("お知らせ情報（これ）の追加")]),n("li",[t._v(" 左上のサイドメニューに予約電話へのリンクを追加（いつか自動更新にする予定） ")]),n("li",[t._v(" PWAアプリとしてインストールした際の名前をmo-vueからみちくさびゅあー（びゅあー）に変更 ")])]),t._v(" アプリ名の更新は勝手にされるのか分かりません。再インストールしたら更新されたのは確認済みです。 ")])],1)],1)],1)],1)],1)},bt=[],_t={},xt=_t,yt=Object(d["a"])(xt,wt,bt,!1,null,"f7ed1118",null),kt=yt.exports;m()(yt,{VCard:dt["a"],VCardText:vt["b"],VExpansionPanel:P["a"],VExpansionPanelContent:A["a"],VExpansionPanelHeader:N["a"],VExpansionPanels:M["a"]});var Ct={name:"Home",props:{page:String,lang:String},data:function(){return{}},components:{ViewerContent:ft,Footer:gt["a"],Infomation:kt}},Et=Ct,Vt=Object(d["a"])(Et,tt,et,!1,null,null,null),Ft=Vt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-center"},[n("v-card",{staticClass:"ma-4",attrs:{width:"90%","max-width":"900px"}},[n("v-card-title",[t._v(" びゅあー検索くん㌁ver0.5 "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"検索する文字を入力してね","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"",headers:t.headers,items:t.searchDB,search:t.search,"custom-filter":t.filter,"item-key":"No","pagination.sync":"pagination",loading:"true",dense:""},scopedSlots:t._u([{key:"item.No",fn:function(e){var n=e.item;return[t._v(" "+t._s(Number(n.No))+" ")]}},{key:"item.Charactors",fn:function(e){var a=e.item;return[n("v-edit-dialog",{attrs:{"return-value":a.Charactors},on:{"update:returnValue":function(e){return t.$set(a,"Charactors",e)},"update:return-value":function(e){return t.$set(a,"Charactors",e)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:""},model:{value:a.Charactors,callback:function(e){t.$set(a,"Charactors",e)},expression:"item.Charactors"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(null==a.Charactors?"-":a.Charactors.toString())+" ")])]}},{key:"item.Keyword",fn:function(e){var a=e.item;return[n("v-edit-dialog",{attrs:{"return-value":a.Keyword},on:{"update:returnValue":function(e){return t.$set(a,"Keyword",e)},"update:return-value":function(e){return t.$set(a,"Keyword",e)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:""},model:{value:a.Keyword,callback:function(e){t.$set(a,"Keyword",e)},expression:"item.Keyword"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(null==a.Keyword?"-":a.Keyword.toString())+" ")])]}},{key:"item.Comment",fn:function(e){var n=e.item;return[t._v(" "+t._s(null==n.Comment?"-":n.Comment.toString())+" ")]}},{key:"item.PageLink",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{href:t.getPageLink(a),target:"__blank",small:"",color:"white",depressed:""}},[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!0),model:{value:t.selecteds,callback:function(e){t.selecteds=e},expression:"selecteds"}})],1)],1),n("div",{staticClass:"content-center"},[n("v-switch",{attrs:{label:"チェックした話を一覧表示する"},model:{value:t.isShowViewerContent,callback:function(e){t.isShowViewerContent=e},expression:"isShowViewerContent"}})],1),n("div",{staticClass:"content-center"},[n("viewer-images",{directives:[{name:"show",rawName:"v-show",value:t.isShowViewerContent,expression:"isShowViewerContent"}],attrs:{pageList:t.selecteds.map((function(t){return t.No-1}))}})],1)])},Tt=[],Dt=n("d4ec"),Bt=n("bee2"),jt=n("262e"),Lt=n("2caf"),It=(n("ac1f"),n("841c"),n("d81d"),n("4de4"),n("1276"),n("498a"),n("9ab4")),Ot=n("1b40"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.show,(function(e){return n("div",{key:e},[t._l(t.pages[e].ImagesUrl,(function(a,o){return n("img",{key:o,attrs:{src:t.pages[e].ImagesUrl[o],alt:"",width:"100%"}})})),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("ShareTwitterButton",{attrs:{link:t.CreateShareLinkTwitter(e+1,t.pages[e].Title)}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{rounded:"","x-small":"",depressed:""},on:{click:function(e){return t.scrollTop()}}},[t._v("トップに戻る")])],1)],1)],2)})),0)},At=[],Nt={props:{pageList:{type:Array,default:function(){return[]}}},data:function(){return{show:[],enableBack:!1,pages:window.pageData,bottom:!1}},methods:{CreateShareLinkTwitter:function(t,e){var n=encodeURI("第".concat(t,"話「").concat(e,"」"));return"https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=".concat(n,"&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D").concat(t)},scrollTop:function(){scrollTo(0,0)}},components:{ShareTwitterButton:ct},watch:{pageList:function(){console.log(this.pageList),this.show=this.pageList}}},Mt=Nt,$t=Object(d["a"])(Mt,Pt,At,!1,null,null,null),Kt=$t.exports;m()($t,{VBtn:h["a"]});var Ut=function(t){Object(jt["a"])(n,t);var e=Object(Lt["a"])(n);function n(){var t;return Object(Dt["a"])(this,n),t=e.apply(this,arguments),t.selecteds=[],t.isShowViewerContent=!0,t.pagination={sortBy:"No",descending:!0,rowsPerPage:-1},t.searchDBurl="https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec",t.searchDB=[{No:"0",Title:"都会派",ImagesUrl:["https://mo4koma.iranika.info/4koma/ja/1.jpg"],Charactors:["せり","すずな"],Keyword:["きっぷ"],Comment:"きっぷが買えるなんてずなちゃんは都会派だね！"}],t.exDB="",t.pageData="",t.search="",t.headers=[{text:"＃",value:"No"},{text:"タイトル",value:"Title"},{text:"登場キャラ",value:"Charactors"},{text:"キーワード",value:"Keyword"},{text:"コメント",value:"Comment"},{text:"Link",value:"PageLink"}],t.snack=!1,t}return Object(Bt["a"])(n,[{key:"created",value:function(){var t=this;s.a.get(this.searchDBurl).then((function(e){t.pageData=window.pageData||{},t.exDB=e.data,t.searchDB=t.pageData.map((function(e,n){return t.exDB[n]?Object.assign(Object.assign(e,{No:n+1}),t.exDB[n][n]):Object.assign(Object.assign(e,{No:n+1}),{No:n+1,Title:"",ImagesUrl:[],Charactors:[],Keyword:[],Comment:"※検索DBに情報が追記されていません"})})),console.log(t.searchDB)}))}},{key:"filter",value:function(t,e){if(null==t||"boolean"===typeof t)return!1;var n=e.split(/,|、/).map((function(t){return t.trim()})).filter((function(t){return t}));return n.filter((function(e){return Array.isArray(t)?t.filter((function(t){return-1!==t.indexOf(e)})).length>0:-1!==t.toString().indexOf(e)})).length==n.length}},{key:"getPageLink",value:function(t){var e=this.searchDB.map((function(t){return t.Title})).indexOf(t.Title)+1;return"#/?page="+e}},{key:"save",value:function(){console.log("save is ok")}},{key:"cancel",value:function(){console.log("cancel is ok")}},{key:"open",value:function(){console.log("open is ok")}},{key:"close",value:function(){console.log("close is ok")}}]),n}(Ot["b"]);Ut=Object(It["a"])([Object(Ot["a"])({components:{ViewerImages:Kt}})],Ut);var qt=Ut,Ht=qt,zt=(n("435e"),n("8fea")),Jt=n("7679"),Rt=n("b73d"),Yt=Object(d["a"])(Ht,St,Tt,!1,null,"51fc472e",null),Gt=Yt.exports;m()(Yt,{VBtn:h["a"],VCard:dt["a"],VCardTitle:vt["c"],VDataTable:zt["a"],VEditDialog:Jt["a"],VIcon:f["a"],VSpacer:z["a"],VSwitch:Rt["a"],VTextField:y["a"]}),a["a"].use(Z["a"]);var Wt=[{path:"/",name:"home",component:Ft,props:function(t){return{page:t.query.page}}},{path:"/charactor",redirect:"/charactor/seri"},{path:"/charactor/:name",name:"charactor",props:function(t){return{name:t.params.name}},component:function(){return n.e("about").then(n.bind(null,"68b8"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/search",name:"search",component:Gt,props:function(t){return{page:t.query.page}}},{path:"/products",name:"products",component:function(){return n.e("chunk-78b6fe84").then(n.bind(null,"e6dc"))}},{path:"/:lang/",component:Ft,props:function(t){return{page:t.query.page,lang:t.params.lang}}}],Xt=new Z["a"]({mode:"hash",base:"",routes:Wt}),Qt=Xt,Zt=n("f309");a["a"].use(Zt["a"]);var te=new Zt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Qt,vuetify:te,render:function(t){return t(X)}}).$mount("#app")},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticStyle:{"padding-top":"10px"},attrs:{padless:""}},[n("v-card-text",{staticClass:"pt-0 text-center"},[n("p",[t._v(" 画像等の著作権は桃鳥さんにあり、アプリの著作権はいらにかにあります。アプリに関するお問い合わせは"),n("a",{attrs:{href:"https://twitter.com/happy_packet"}},[t._v("いらにか(twitter)")]),t._v("までお願いします。 ")]),n("p",[t._v(" もしこのアプリを気に入って支援したい人がいたら"),n("a",{attrs:{href:"https://www.amazon.co.jp/hz/wishlist/genericItemsPage"}},[t._v("いらにかの欲しいものリスト")]),t._v("でプレゼントを送ってあげてください。コーヒーとか喜びます。 ")])]),n("v-divider"),n("v-card-text",{staticClass:"text-center"},[t._v(" みちくさびゅーあー ©2019 iranika(@happy_packet) ")])],1)},o=[],i={},r=i,s=n("2877"),l=n("6544"),c=n.n(l),u=n("99d9"),p=n("ce7e"),d=n("553a"),v=Object(s["a"])(r,a,o,!1,null,null,null);e["a"]=v.exports;c()(v,{VCardText:u["b"],VDivider:p["a"],VFooter:d["a"]})}});
//# sourceMappingURL=app.bf34f874.js.map
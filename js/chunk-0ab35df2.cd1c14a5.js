(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ab35df2"],{"326e":function(t,e,s){},"60df":function(t,e,s){"use strict";s("326e")},e6dc:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content-center"},[s("v-card",{staticClass:"ma-4",attrs:{width:"98%","max-width":"900px"}},[s("v-card-title",[t._v(" 道草屋の作品情報 "),s("v-spacer"),s("v-switch",{attrs:{label:"声優表示"},model:{value:t.showActor,callback:function(e){t.showActor=e},expression:"showActor"}}),s("v-spacer"),t.authstore.user.isLogin?s("div",[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",icon:""}},"v-btn",o,!1),i),[s("v-avatar",[s("img",{attrs:{src:t.authstore.user.photoUrl}})])],1)]}}],null,!1,3997126316)},[s("v-list",[s("v-list-item",[s("v-list-item-title",{on:{click:function(e){return t.signOut()}}},[t._v("ログアウト")])],1)],1)],1)],1):s("div",[s("v-btn",{attrs:{color:"light-blue"},on:{click:function(e){return t.signIn()}}},[t._v("ログイン"),s("v-icon",[t._v("mdi-twitter")])],1)],1),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"検索する文字を入力してね","multi-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-card-subtitle",[t._v(" ※出演は声優名でのみフィルタできます。"),s("br"),t._v(" ※BOOTHのリンクは作品名で検索しているだけなので精度はご容赦ください。"),s("br")]),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.db.products,search:t.search,"custom-filter":t.filter,"item-key":"No","pagination.sync":"pagination",loading:"true",dense:""},scopedSlots:t._u([{key:"item.No",fn:function(e){var s=e.item;return[t._v(" "+t._s(Number(s.No))+" ")]}},{key:"item.mainAct",fn:function(e){var s=e.item;return[t._v(" "+t._s(t.showActor?s.mainAct.join(","):t.toCharactor(s.mainAct).join(","))+" ")]}},{key:"item.subAct",fn:function(e){var s=e.item;return[t._v(" "+t._s(t.showActor?s.subAct.join(","):t.toCharactor(s.subAct).join(","))+" ")]}},{key:"item.link",fn:function(e){var i=e.item;return[s("div",{staticClass:"linkbox"},[s("v-btn",{attrs:{href:t.getBoothLink(i.title),target:"__blank","x-small":"",color:"red",depressed:""}},[t._v("BOOTH ")]),t.authstore.user.isLogin?s("v-btn",{attrs:{icon:"",color:t.isBought(i.No,"booth")?"yellow":"gray"},on:{click:function(e){return t.clickStar(i.No,"booth")}}},[s("v-icon",[t._v("mdi-star")])],1):t._e()],1),s("div",{staticClass:"linkbox"},[s("v-btn",{attrs:{href:i.dalf,target:"__blank","x-small":"",color:"primary",depressed:""}},[t._v("DLSITE ")]),t.authstore.user.isLogin?s("v-btn",{attrs:{icon:"",color:t.isBought(i.No,"dlsite")?"yellow":"gray"},on:{click:function(e){return t.clickStar(i.No,"dlsite")}}},[s("v-icon",[t._v("mdi-star")])],1):t._e()],1)]}}],null,!0),model:{value:t.selecteds,callback:function(e){t.selecteds=e},expression:"selecteds"}})],1)],1),s("div",{staticClass:"content-center"},[s("v-switch",{attrs:{label:"ジャケットを一覧表示する"},model:{value:t.showBannerAll,callback:function(e){t.showBannerAll=e},expression:"showBannerAll"}})],1),s("div",{staticStyle:{width:"98%","max-width":"980px","text-align":"center",margin:"0 auto"}},[t.showBannerAll?s("v-container",{attrs:{"justify-center":""}},t._l(t.db.products,(function(e,i){return s("div",{key:i,staticStyle:{display:"inline",justify:"center","margin-right":"5px"}},[s("div",{staticClass:"banner",staticStyle:{display:"inline"},domProps:{innerHTML:t._s(t.db.products[i].banner)}})])})),0):t._e()],1),s("Footer")],1)},o=[],n=s("0f9e"),a=s("7e44"),r=s("fd2d"),l=s("1237"),c=s("3bcd");let u=class extends a["b"]{constructor(){super(...arguments),this.authstore=l["a"].getInstance(),this.selecteds=[],this.movue=l["a"].getInstance().movue,this.showBannerAll=!1,this.showActor=!1,this.db=c["a"].getInstance().db,this.headers=[{text:"＃",value:"No"},{text:"リリース日",value:"release"},{text:"タイトル",value:"title"},{text:"メイン出演",value:"mainAct"},{text:"サブ出演",value:"subAct"},{text:"Link",value:"link"}],this.exDB="",this.pageData="",this.search="",this.c2a={"餅よもぎ":"すずしろ","御崎ひより":"すずしろ","雁庵うずめ":"せり","藤堂れんげ":"すずな","真宮ひいろ\t":"いね","愛枝今日子":"たびらこ","藤村咲樹":"はこべら","琴香":"はこべら","箱河ノア":"いのこ","丹羽うさぎ":"なつな"},this.snack=!1}isBought(t,e){let s=t+"-"+e;if(void 0!=this.movue.users.possessions)return this.movue.users.possessions.includes(s)}clickStar(t,e){var s;const i=t+"-"+e,o=null===(s=this.movue.users.possessions)||void 0===s?void 0:s.indexOf(i);console.log("index",o),console.log("click possession",this.movue.users.possessions),-1==o?(this.authstore.setPossessionStar(i),console.log("setPossession",i)):(void 0!=o&&this.authstore.removePossessionStar(o),console.log("removePossession",i))}filter(t,e){if(null==t||"boolean"===typeof t)return!1;let s=e.split(/,|、/).map(t=>t.trim()).filter(t=>t);return s.filter(e=>Array.isArray(t)?t.filter(t=>-1!==t.indexOf(e)).length>0:-1!==t.toString().indexOf(e)).length==s.length}toCharactor(t){return t.map(t=>this.c2a[t])}getBoothLink(t){let e="https://booth.pm/ja/search/"+t;return e}signIn(){this.authstore.signin()}signOut(){this.authstore.signout()}save(){console.log("save is ok")}cancel(){console.log("cancel is ok")}open(){console.log("open is ok")}close(){console.log("close is ok")}};u=Object(n["c"])([Object(a["a"])({components:{Footer:r["a"]}})],u);var d=u,v=d,h=(s("60df"),s("2be6")),b=s("16aa"),m=s.n(b),f=s("c123"),p=s("7265"),g=s("8467"),k=s("05d9"),_=s("39d5"),x=s("8b60"),w=s("213b"),y=s("a5fe"),A=s("ecef"),S=s("d963"),V=s("fbe1"),B=s("7b27"),C=s("3b28"),O=s("2370"),L=Object(h["a"])(v,i,o,!1,null,null,null);e["default"]=L.exports;m()(L,{VAvatar:f["a"],VBtn:p["a"],VCard:g["a"],VCardSubtitle:k["b"],VCardTitle:k["d"],VContainer:_["a"],VDataTable:x["a"],VIcon:w["a"],VList:y["a"],VListItem:A["a"],VListItemTitle:S["b"],VMenu:V["a"],VSpacer:B["a"],VSwitch:C["a"],VTextField:O["a"]})}}]);
//# sourceMappingURL=chunk-0ab35df2.cd1c14a5.js.map
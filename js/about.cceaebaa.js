(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"39d5":function(t,a,e){"use strict";e("2d6d"),e("f8a5"),e("defa"),e("d86f"),e("e439"),e("4a81"),e("b55a"),e("ef14");var r=e("9869");function n(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var r=e.props,n=e.data,i=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));c.length&&(n.staticClass+=" ".concat(c.join(" ")))}return r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),a(r.tag,n,i)}})}var i=e("0011");a["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,r=a.props,n=a.data,o=a.children,c=n.attrs;return c&&(n.attrs={},e=Object.keys(c).filter((function(t){if("slot"===t)return!1;var a=c[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}))),r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),t(r.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},"3d99":function(t,a,e){},"4a81":function(t,a,e){},"532e":function(t,a,e){"use strict";e("d0f0")},"60e3":function(t,a,e){"use strict";e("3d99")},"68b8d":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("v-card",{staticClass:"mx-auto my-10",attrs:{width:"96%","max-width":"700px"}},[e("v-card-title",[t._v("登場人物の紹介")]),e("v-card-subtitle",[t._v("※いらにかの主観で書かれています")]),e("v-container",{attrs:{"justify-center":""}},[e("v-btn",{attrs:{fab:"",to:"/charactor/seri"}},[e("v-avatar",[e("v-img",{attrs:{src:t.chara.seri.icon,alt:t.chara.seri.name,title:t.chara.seri.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/suzusiro"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.suzusiro.icon,alt:t.chara.suzusiro.name,title:t.chara.suzusiro.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/suzuna"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.suzuna.icon,alt:t.chara.suzuna.name,title:t.chara.suzuna.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/hakobera"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.hakobera.icon,alt:t.chara.hakobera.name,title:t.chara.hakobera.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/ine"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.ine.icon,alt:t.chara.ine.name,title:t.chara.ine.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/tabirako"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.tabirako.icon,alt:t.chara.tabirako.name,title:t.chara.tabirako.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/inoko"}},[e("v-avatar",[e("v-img",{attrs:{width:"100%",src:t.chara.inoko.icon,alt:t.chara.inoko.name,title:t.chara.inoko.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/natuna"}},[e("v-avatar",[e("v-img",{attrs:{src:t.chara.natuna.icon,alt:t.chara.natuna.name,title:t.chara.natuna.name}})],1)],1),e("v-btn",{attrs:{fab:"",to:"/charactor/all"}},[e("v-avatar",[t._v("All")])],1)],1),t._l(Object.keys(t.chara),(function(a){return e("div",{key:a,attrs:{width:"100%"}},[t.name==a||"all"==t.name?e("v-card",{attrs:{flat:"","max-width":"100%"}},[e("v-card-title",[t._v(t._s(t.chara[a].name))]),e("v-card-subtitle",[t._v("CV:"),e("label",{domProps:{innerHTML:t._s(t.chara[a].cv)}})]),e("v-card-text",{staticStyle:{"white-space":"pre-wrap"},domProps:{textContent:t._s(t.chara[a].text)}}),e("v-expansion-panels",{attrs:{flat:"",width:"100%"}},[e("v-expansion-panel",{staticStyle:{"background-color":"#f7f7f7"}},[e("v-expansion-panel-header",[e("div",{staticClass:"text-center"},[t._v("関連作品")])]),e("v-expansion-panel-content",[e("p",[t._v("クリックすると作品ページに飛べます")])]),t._l(t.chara[a].contents,(function(a){return e("v-expansion-panel-content",{key:a,staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",{staticClass:"panel",domProps:{innerHTML:t._s(a)}})])})),e("v-expansion-panel-content",{staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",[t._v("メイン出演")])]),t._l(t.getProductsBanner(t.chara[a].cvArray,"mainAct"),(function(a){return e("v-expansion-panel-content",{key:a,staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",{staticClass:"panel",domProps:{innerHTML:t._s(a)}})])})),e("v-expansion-panel-content",{staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",[t._v("ちょこっと出演")])]),t._l(t.getProductsBanner(t.chara[a].cvArray,"subAct"),(function(a){return e("v-expansion-panel-content",{key:a,staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",{staticClass:"panel",domProps:{innerHTML:t._s(a)}})])}))],2)],1)],1):t._e()],1)})),"tubakiti"==t.name||"tsubakichi"==t.name?e("v-card",{attrs:{flat:"","max-width":"100%"}},[e("v-card-title",[t._v("つば吉")]),e("v-card-subtitle",[t._v("CV:つば吉（本物）")]),e("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[e("p",[t._v("可愛い可愛い燕の子。雛だった頃に巣から落ちて骨折していたところをたびらこさんに拾われる。")]),e("p",[t._v("たびらこお母さんとせりお祖母ちゃんetc...から沢山の愛と餌をもらってスクスクと育ち、無事に巣立っていった。")]),e("p",[t._v("つば吉が帰省してきても問題無いように、つば吉と書かれた紙製の巣箱が道草屋の軒下に作られた（せりお祖母ちゃん作）。")]),e("p",[t._v("それから一年が経ち、嫁を連れて帰省したつば吉（推定）は、せりお祖母ちゃんが用意した部屋で子育てを始めて立派なお父さんになりましたとさ。")]),e("p",[t._v("※つば吉（推定）は、はこお爺さんによってつば吉であることが証明されました。")])]),e("v-expansion-panels",{attrs:{flat:"",width:"100%"}},[e("v-expansion-panel",{staticStyle:{"background-color":"#f7f7f7"}},[e("v-expansion-panel-header",[e("div",{staticClass:"text-center"},[t._v("関連作品")])]),e("v-expansion-panel-content",[e("p",[t._v("クリックすると作品ページに飛べます")])]),e("v-expansion-panel-content",{staticStyle:{"mergin-bottom":"4px"},attrs:{width:"100%"}},[e("div",{staticClass:"panel"},[e("v-btn",{attrs:{to:"/?page=213"}},[t._v("213.決意")]),e("v-btn",{attrs:{to:"/?page=219"}},[t._v("219.つば吉")]),e("v-btn",{attrs:{to:"/?page=239"}},[t._v("239.証明")])],1)])],1)],1)],1):t._e()],2),e("Footer")],1)},n=[],i=(e("2d6d"),e("8d0d"),e("c78b"),e("cfce"),e("8206")),o=e.n(i),c=e("fd2d"),s={name:"About",components:{Footer:c["a"]},props:{name:String},data:function(){return{products:[],showAll:!1,chara:{seri:{name:"せり/せりさん",cv:"雁庵うずめ",cvArray:["雁庵うずめ"],icon:"/img/charactor/seri-205.jpg",text:"道草屋の女将。\nお母さんのような存在。お茶目で乙女。\nおしゃべり好きでトークスキルが高く、怪談話が得意。\nお酒好きで、酔うと絡んでくる。\n耳飾りは着脱式。住み込みのしろさん・ずなちゃんと一緒に道草屋で暮らしている。\n芹は春の七草のひとつ。",contents:["せりさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2ydtFT3cSDbvJX75Fmgpb3K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},suzusiro:{name:"すずしろ/しろさん",icon:"/img/charactor/suzusiro-241.jpg",cv:'餅よもぎ→<a href="https://twitter.com/hiyori_voice">御崎ひより</a>',cvArray:["餅よもぎ","御崎ひより"],text:"せりさんの世話係。\n三番目に道草屋歴が長い。道草屋の働き者。\nせりさん、ずなちゃんと一緒に暮らしている。\n湿気で癖毛の髪がもじゃるのが悩み。梅雨は大敵。\n花粉も大敵。あとお腹のお肉も大敵…\n春の七草のすずしろは、大根の別名。",contents:["しろさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yeRJUxBt4Ea-pXXL8L8TUQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},suzuna:{name:"すずな/ずなちゃん",cv:'<a href="https://twitter.com/toudourenge">藤堂れんげ</a>',cvArray:["藤堂れんげ"],icon:"/img/charactor/suzuna-177.jpg",text:"道草屋の可愛い代表。私服がちょっとダサ可愛いのも魅力のひとつ。\n真面目な良い子で沢山の人から愛されている。\n出身は北海道。祖母の伝手で道草屋で働きはじめた。今はせりさん、しろさんと一緒に暮らしている。\n最年少ゆえ世間知らずな一面もあるが、田舎における生活スキルが高く無人販売所を使いこなす田舎暮らしのプロ。\n実は能力保持者で、霊感だけでなく優位性アピール無力化（ドヤ顔キャンセル）など稀有な能力を持っている可能性がある[要出典]。\n春の七草の菘(すずな)は、カブの別名",contents:["ずなさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yexGT79Qa4g0J450CKGuvtz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},hakobera:{name:"はこべら/はこさん",icon:"/img/charactor/hako-256.jpg",cv:'藤村咲樹→<a href="https://twitter.com/kotoka_11_28">琴香</a>',cvArray:['藤村咲樹","琴香"'],text:"道草屋のエッチなお姉さん。\nせりさんと幼馴染で二番目に道草屋歴が長い。\n丁寧な言葉遣いとは裏腹に悪戯好き。ずなちゃんと旦那様がよく悪戯の被害を受けている。\nバイク乗りで愛車を褒めると心を開く（ちょろい）。",contents:["はこさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yedk4HUf0oUOPVuhfeXirnm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},ine:{name:"いね/いねさん",cv:'<a href="https://twitter.com/hinyanm">真宮ひいろ</a>',cvArray:["真宮ひいろ"],icon:"/img/charactor/ine-177.jpg",text:"いつも眠そうでこちらまで眠くなる（癒し）\nたびさんとは同級生。\nめんどくさがりだけど根は真面目でしっかり働く。\nおせち大会で何度も優勝する強者だが料理は得意ではない。審査員の心をつかむテクニックが成せる技だ。\n実はツッコミが上手。サボテンとアロエ（名はルサンチマン）を育てている。\nイネ科イネ属の稲は現代の七草に数えられないが、七草粥にはお米として入っている。",contents:["いねさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2ydScUTbTcXcQqzZwuQn88TG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},tabirako:{name:"たびらこ/たびさん",cv:'<a href="https://twitter.com/aiedakyoko">愛枝今日子</a>',cvArray:["愛枝今日子"],icon:"/img/charactor/tabirako-185.jpg",text:"いねさんとは同級生。\nいねさんのお世話が大好きで、まるで保護者。\n溢れ出る母性のせいか奥様と間違われたことがある。\n道草屋と実家のうどん屋を掛け持ちしているワーカーホリックで、うどんへの信頼と情熱がすごい。\n鉄瓶を育てるのが上手。私服がちょっとダサ可愛いのも魅力の一つ。\n春の七草のほとけのざの別名がオニタビラコ。",contents:["たびさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yc-mFTjtErv4DF9YO0rj665" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},inoko:{name:"いのこ/うりちゃん",cv:'<a href="https://twitter.com/hako_noah">箱河ノア</a>',cvArray:["箱河ノア"],icon:"/img/charactor/inoko-251.jpg",text:"名はいのこだが通称うりちゃん。\n独特な敬語を使う。活発だが圧倒的に運がない。\nずる賢いが、おかげで痛い目にもあっている。\n欲しいものを買うために道草屋で働き始めて、一度は退職したがとある理由で再就職したバイト戦士。\nはこさんから譲り受けたチョイノリ（原付）に乗っていたが、祖父の伝手でトリッカー（普通二輪）を譲り受けて乗り回している。\n夏の七草の猪子槌（いのこづち）に由来。",contents:["いのこさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yfRdhG6DHOxA-MG2Ziduz8j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']},natuna:{name:"なつな/なっちゃん",icon:"/img/charactor/natuna-250.jpg",cv:'<a target="_blank" href="https://twitter.com/tanba_usa">丹羽うさぎ</a>',cvArray:["丹羽うさぎ"],text:"道草屋のお客さん。苗字は橘。元社畜。\nいねさん・たびさんと同級生で、小学三年生に転校してから約15年ぶり？に村に帰ってきた。\n生粋のカフェインジャンキー。好きな珈琲豆はそこにあるやつ（なんでもいい）。\nいねさんのおかげで道草屋の電話番ができるが、彼女は従業員ではなく客だということを忘れてはならない。\n春の七草のなずなは夏には枯れることから「夏無（なつな）」から変化した説がある[要出典]。",contents:["なっちゃんさんぷる",'<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yd2ErdrZWRF2eKj4uoR500x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']}}}},computed:{getProductsBanner:function(){var t=this;return function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mainAct",r=t.products.filter((function(t){return a.some((function(a){return t[e].includes(a)}))}));return r.map((function(t){return t.banner}))}}},beforeMount:function(){var t=this;o.a.get("https://script.google.com/macros/s/AKfycbzXYMhKrkOm3NtwqeQMBOJYc4uTz8kIbKMYOAdP0cb_lHB1BhTG8B9yc1CTyDAe_drT/exec").then((function(a){t.products=a.data,console.log("success get product data.",t.products)})).catch((function(t){console.log("Cannt get Michikusaya sakuhin.",t)}))}},l=s,d=(e("60e3"),e("2be6")),p=e("16aa"),u=e.n(p),v=e("c123"),m=e("7265"),h=e("8467"),f=e("05d9"),b=e("39d5"),w=e("5b19"),y=e("bea9"),g=e("0ef4"),_=e("dc36"),x=e("9f6c"),k=Object(d["a"])(l,r,n,!1,null,null,null);a["default"]=k.exports;u()(k,{VAvatar:v["a"],VBtn:m["a"],VCard:h["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VContainer:b["a"],VExpansionPanel:w["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:g["a"],VExpansionPanels:_["a"],VImg:x["a"]})},d0f0:function(t,a,e){},f820:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("v-card",{staticClass:"mx-auto my-10",attrs:{"max-width":"90%","align-center":""}},[e("v-card-title",[t._v("みちくさびゅあーについて")]),e("v-card-text",[e("div",[e("p",[t._v(" 桃鳥さんが描いている「"),e("a",{attrs:{href:"http://momoirocode.web.fc2.com/"}},[t._v("ばっくやーど数コマ")]),t._v("」をスマホで読みやすくするアプリです。 ")]),e("p",[t._v(" 桃鳥さんの許諾を得て、"),e("a",{attrs:{href:"https://twitter.com/happy_packet"}},[t._v("いらにか")]),t._v("がアプリを公開・メンテしています。画像等の著作権は桃鳥さんにあり、アプリの著作権はいらにかにあります。 アプリに関するお問い合わせは"),e("a",{attrs:{href:"https://twitter.com/happy_packet"}},[t._v("いらにか(twitter)")]),t._v("までお願いします。 ")]),e("p",[t._v(" 漫画の更新情報はTwitterのハッシュタグ『"),e("a",{attrs:{href:"https://twitter.com/hashtag/%E6%A1%83%E8%89%B2CODE%E6%9B%B4%E6%96%B0%E6%83%85%E5%A0%B1"}},[t._v("#桃色CODE更新情報")]),t._v("』でつぶやいています。 "),e("a",{attrs:{href:"https://mo4koma.iranika.info/feed.atom"}},[t._v("RSS/Atom")]),t._v("でも配信しています。 ")])])]),e("v-divider"),e("v-card-title",[t._v("いろいろな機能")]),e("v-card-text",[e("ol",[e("li",[t._v(" スクロールして読み進めると自動で次の話をロードしてくれます。とっても便利！！ ")]),e("li",[t._v(" シェアボタンでボタンの上にある話数をTwitterでシェアできます。布教しやすい便利設計‼ ")]),e("li",[t._v(" 右上のメニューボタンから好きな話数にジャンプできます。話数表示で便利！！ ")]),e("li",[t._v("トップのLATESTタブで最新話にジャンプできます。地味に便利！！")]),e("li",[t._v(" URLで指定話数にジャンプできます。数字の代わりにlatestと記載すると最新話にジャンプできます。こいつのおかげで、好きな話数をシェアできる！！ ")]),t._v(" https://movue.iranika.info/#/?page=100"),e("br"),t._v(" https://movue.iranika.info/#/?page=latest"),e("br"),e("li",[t._v("PWAに対応しているのでアプリのようにインストールできます。")])])]),e("v-divider"),e("v-card-title",[t._v("ちょっとしたツール")]),e("v-card-title",[t._v("DLsiteで購入済みの作品ページから直接ギフトページを開くブックマークレット")]),e("v-card-text",[t._v(" このリンクをブックマークバーにドラッグ&ドロップしてお使いください↓"),e("br"),e("a",{attrs:{href:'javascript:(function(e){window.location.href="https://www.dlsite.com/home/mypage/buy/dlgift/product/=/product_id/"+e(location.href.replace(/.*\\//, "").replace(/\\.html.*$/, ""))+"/";})(encodeURIComponent);'}},[t._v("現在のタブで開くやつ")]),e("br"),t._v(" ドラッグアンドドロップできないブラウザは、以下のURLをブックマークバーに登録してください。"),e("br"),e("pre",{staticStyle:{overflow:"auto"}},[t._v('javascript:(function(e){window.location.href="https://www.dlsite.com/home/mypage/buy/dlgift/product/=/product_id/"+e(location.href.replace(/.*\\//, "").replace(/\\.html.*$/, ""))+"/";})(encodeURIComponent);')]),t._v(" 新規ウィンドウで開きたい場合は↓"),e("br"),e("a",{attrs:{href:'javascript:(function(e){window.open("https://www.dlsite.com/home/mypage/buy/dlgift/product/=/product_id/"+e(location.href.replace(/.*\\//, "").replace(/\\.html.*$/, ""))+"/",null,"width=520,height=500");})(encodeURIComponent);'}},[t._v("新規Windowで開くやつ")]),e("br"),t._v(" ドラッグアンドドロップできないブラウザは、以下のURLをブックマークバーに登録してください。"),e("br"),e("pre",{staticStyle:{overflow:"auto"}},[t._v('javascript:(function(e){window.open("https://www.dlsite.com/home/mypage/buy/dlgift/product/=/product_id/"+e(location.href.replace(/.*\\//, "").replace(/\\.html.*$/, ""))+"/",null,"width=520,height=500");})(encodeURIComponent);')])])],1),e("Footer")],1)},n=[],i=e("fd2d"),o={name:"About",data:function(){return{}},components:{Footer:i["a"]}},c=o,s=(e("532e"),e("2be6")),l=e("16aa"),d=e.n(l),p=e("8467"),u=e("05d9"),v=e("29d0"),m=Object(s["a"])(c,r,n,!1,null,"56adbd6f",null);a["default"]=m.exports;d()(m,{VCard:p["a"],VCardText:u["c"],VCardTitle:u["d"],VDivider:v["a"]})}}]);
//# sourceMappingURL=about.cceaebaa.js.map
<template>
  <div class="about">
    <v-card width="96%" max-width="700px" class="mx-auto my-10">
      <v-card-title>登場人物の紹介</v-card-title>
      <v-card-subtitle>※いらにかの主観で書かれています</v-card-subtitle>
      <v-container justify-center>
        <v-btn fab to="/charactor/seri">
          <v-avatar><v-img :src="chara.seri.icon" :alt="chara.seri.name" :title="chara.seri.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/suzusiro">
          <v-avatar><v-img width="100%" :src="chara.suzusiro.icon" :alt="chara.suzusiro.name" :title="chara.suzusiro.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/suzuna">
          <v-avatar><v-img width="100%" :src="chara.suzuna.icon" :alt="chara.suzuna.name" :title="chara.suzuna.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/hakobera">
          <v-avatar><v-img width="100%" :src="chara.hakobera.icon" :alt="chara.hakobera.name" :title="chara.hakobera.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/ine">
          <v-avatar><v-img width="100%" :src="chara.ine.icon" :alt="chara.ine.name" :title="chara.ine.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/tabirako">
          <v-avatar><v-img width="100%" :src="chara.tabirako.icon" :alt="chara.tabirako.name" :title="chara.tabirako.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/inoko">
          <v-avatar><v-img width="100%" :src="chara.inoko.icon" :alt="chara.inoko.name" :title="chara.inoko.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/natuna">
          <v-avatar><v-img :src="chara.natuna.icon" :alt="chara.natuna.name" :title="chara.natuna.name"></v-img></v-avatar>
        </v-btn>
        <v-btn fab to="/charactor/all">
          <v-avatar>All</v-avatar>
        </v-btn>
      </v-container>
      <div v-for="k in Object.keys(chara)" :key="k" width="100%">
        <v-card flat max-width="100%" v-if="name == k || name == 'all'">
          <v-card-title>{{chara[k].name}}</v-card-title>
          <v-card-subtitle>CV:<label v-html="chara[k].cv"></label></v-card-subtitle>
          <v-card-text style="white-space:pre-wrap;" v-text="chara[k].text"></v-card-text>
          <v-expansion-panels flat width="100%">
            <v-expansion-panel style="background-color:#f7f7f7;">
              <v-expansion-panel-header>
                <div class="text-center">関連作品</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>クリックすると作品ページに飛べます</p>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-for="content in chara[k].contents" :key="content" style="mergin-bottom:4px;" width="100%">
                <div v-html="content" class="panel"></div>
              </v-expansion-panel-content>
              <v-expansion-panel-content style="mergin-bottom:4px;" width="100%">
                <div>メイン出演</div>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-for="mainProd in getProductsBanner(chara[k].cvArray, 'mainAct')" :key="mainProd" style="mergin-bottom:4px;" width="100%">
                <div v-html="mainProd" class="panel"></div>
              </v-expansion-panel-content>
              <v-expansion-panel-content style="mergin-bottom:4px;" width="100%">
                <div>ちょこっと出演</div>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-for="subProd in getProductsBanner(chara[k].cvArray, 'subAct')" :key="subProd" style="mergin-bottom:4px;" width="100%">
                <div v-html="subProd" class="panel"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>

    </v-card>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Footer,
  },
  props: {
    name: String
  },
  data: () => ({
    products: [],
    showAll: false,
    chara: {
      seri: {
        name: "せり/せりさん",
        cv: "雁庵うずめ",
        cvArray: ["雁庵うずめ"],
        icon: "/img/charactor/seri-205.jpg",
        text: "道草屋の女将。\nお母さんのような存在。お茶目で乙女。\nおしゃべり好きでトークスキルが高く、怪談話が得意。\nお酒好きで、酔うと絡んでくる。\n耳飾りは着脱式。住み込みのしろさん・ずなちゃんと一緒に道草屋で暮らしている。\n芹は春の七草のひとつ。",
        contents: [
          'せりさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2ydtFT3cSDbvJX75Fmgpb3K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ]
      },
      suzusiro: {
        name: "すずしろ/しろさん",
        icon: "/img/charactor/suzusiro-241.jpg",
        cv: '餅よもぎ→<a href="https://twitter.com/hiyori_voice">御崎ひより</a>',
        cvArray: ["餅よもぎ","御崎ひより"],
        text: "せりさんの世話係。\n三番目に道草屋歴が長い。道草屋の働き者。\nせりさん、ずなちゃんと一緒に暮らしている。\n湿気で癖毛の髪がもじゃるのが悩み。梅雨は大敵。\n花粉も大敵。あとお腹のお肉も大敵…\n春の七草のすずしろは、大根の別名。",
        contents: [
          'しろさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yeRJUxBt4Ea-pXXL8L8TUQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      },
      suzuna: {
        name: "すずな/ずなちゃん",
        cv: '<a href="https://twitter.com/toudourenge">藤堂れんげ</a>',
        cvArray: ["藤堂れんげ"],
        icon: "/img/charactor/suzuna-177.jpg",
        text: "道草屋の可愛い代表。私服がちょっとダサ可愛いのも魅力のひとつ。\n真面目な良い子で沢山の人から愛されている。\n出身は北海道。祖母の伝手で道草屋で働きはじめた。今はせりさん、しろさんと一緒に暮らしている。\n最年少ゆえ世間知らずな一面もあるが、田舎における生活スキルが高く無人販売所を使いこなす田舎暮らしのプロ。\n実は能力保持者で、霊感だけでなく優位性アピール無力化（ドヤ顔キャンセル）など稀有な能力を持っている可能性がある[要出典]。\n春の七草の菘(すずな)は、カブの別名",
        contents: [
          'ずなさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yexGT79Qa4g0J450CKGuvtz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ]
      },
      hakobera: {
        name: "はこべら/はこさん",
        icon: "/img/charactor/hako-256.jpg",
        cv: '藤村咲樹→<a href="https://twitter.com/kotoka_11_28">琴香</a>',
        cvArray: ['藤村咲樹","琴香"'],
        text: "道草屋のエッチなお姉さん。\nせりさんと幼馴染で二番目に道草屋歴が長い。\n丁寧な言葉遣いとは裏腹に悪戯好き。ずなちゃんと旦那様がよく悪戯の被害を受けている。\nバイク乗りで愛車を褒めると心を開く（ちょろい）。",
        contents: [
          'はこさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yedk4HUf0oUOPVuhfeXirnm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      },
      ine: {
        name: "いね/いねさん",
        cv: '<a href="https://twitter.com/hinyanm">真宮ひいろ</a>',
        cvArray: ['真宮ひいろ'],
        icon: "/img/charactor/ine-177.jpg",
        text: "いつも眠そうでこちらまで眠くなる（癒し）\nたびさんとは同級生。\nめんどくさがりだけど根は真面目でしっかり働く。\nおせち大会で何度も優勝する強者だが料理は得意ではない。審査員の心をつかむテクニックが成せる技だ。\n実はツッコミが上手。サボテンとアロエ（名はルサンチマン）を育てている。\nイネ科イネ属の稲は現代の七草に数えられないが、七草粥にはお米として入っている。",
        contents: [
          'いねさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2ydScUTbTcXcQqzZwuQn88TG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      },
      tabirako: {
        name: "たびらこ/たびさん",
        cv: '<a href="https://twitter.com/aiedakyoko">愛枝今日子</a>',
        cvArray: ['愛枝今日子'],
        icon: "/img/charactor/tabirako-185.jpg",
        text: "いねさんとは同級生。\nいねさんのお世話が大好きで、まるで保護者。\n溢れ出る母性のせいか奥様と間違われたことがある。\n道草屋と実家のうどん屋を掛け持ちしているワーカーホリックで、うどんへの信頼と情熱がすごい。\n鉄瓶を育てるのが上手。私服がちょっとダサ可愛いのも魅力の一つ。\n春の七草のほとけのざの別名がオニタビラコ。",
        contents: [
          'たびさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yc-mFTjtErv4DF9YO0rj665" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      },
      inoko: {
        name: "いのこ/うりちゃん",
        cv: '<a href="https://twitter.com/hako_noah">箱河ノア</a>',
        cvArray: ['箱河ノア'],
        icon: "/img/charactor/inoko-251.jpg",
        text: "名はいのこだが通称うりちゃん。\n独特な敬語を使う。活発だが圧倒的に運がない。\nずる賢いが、おかげで痛い目にもあっている。\n欲しいものを買うために道草屋で働き始めて、一度は退職したがとある理由で再就職したバイト戦士。\nはこさんから譲り受けたチョイノリ（原付）に乗っていたが、祖父の伝手でトリッカー（普通二輪）を譲り受けて乗り回している。\n夏の七草の猪子槌（いのこづち）に由来。",
        contents: [
          'いのこさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yfRdhG6DHOxA-MG2Ziduz8j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      },
      natuna: {
        name: "なつな/なっちゃん",
        icon: "/img/charactor/natuna-250.jpg",
        cv: '<a target="_blank" href="https://twitter.com/tanba_usa">丹羽うさぎ</a>',
        cvArray: ['丹羽うさぎ'],
        text: "道草屋のお客さん。苗字は橘。元社畜。\nいねさん・たびさんと同級生で、小学三年生に転校してから約15年ぶり？に村に帰ってきた。\n生粋のカフェインジャンキー。好きな珈琲豆はそこにあるやつ（なんでもいい）。\nいねさんのおかげで道草屋の電話番ができるが、彼女は従業員ではなく客だということを忘れてはならない。\n春の七草のなずなは夏には枯れることから「夏無（なつな）」から変化した説がある[要出典]。",
        contents: [
          'なっちゃんさんぷる',
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSY2NdJVC2yd2ErdrZWRF2eKj4uoR500x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
      }
    },
  }),
  computed:{
    getProductsBanner(){
      const self = this;
      return function(cvArray, prodType="mainAct"){
        let charaProducts = self.products.filter(v => cvArray.some(cv => v[prodType].includes(cv)))
        console.log("charaProducts", charaProducts)
        return charaProducts.map(v => v.banner)
      }
    }
  },
  beforeMount(){
    axios.get("https://script.google.com/macros/s/AKfycbzXYMhKrkOm3NtwqeQMBOJYc4uTz8kIbKMYOAdP0cb_lHB1BhTG8B9yc1CTyDAe_drT/exec").then((res)=>{
      this.products = res.data;
      console.log("success get product data.", this.products);
    }).catch((e)=>{
      console.log("Cannt get Michikusaya sakuhin.", e)
    })
  }
};
</script>

<style>
p {
  text-indent: 1em;
}

.panel a img {
  width: 100%;
}

</style>

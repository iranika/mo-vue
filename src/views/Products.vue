<template>
  <div>
    <div class="content-center">
      <v-card width="98%" max-width="900px" class="ma-4">
        <v-card-title>
          道草屋の作品情報
          <v-spacer></v-spacer>
          <v-switch v-model="showActor" label="声優表示"></v-switch>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="検索する文字を入力してね"
            multi-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-card-subtitle>
          ※出演は声優名でのみフィルタできます。<br>
          ※BOOTHのリンクは作品名で検索しているだけなので精度はご容赦ください。<br>
          ※WIP:豆知識には作中の重要情報を追加する予定です（ネタバレ情報は追加しない可能性が高いです）。<br>
        </v-card-subtitle>
        <v-data-table
          v-model="selecteds"
          :headers="headers"
          :items="productDB"
          :search="search"
          :custom-filter="filter"
          item-key="No"
          class="elevation-1"
          pagination.sync="pagination"
          loading="true"
          dense
        >
          <template v-slot:[`item.No`]="{ item }">
            {{ Number(item.No)}}
          </template>
          <template v-slot:[`item.mainAct`]="{ item }">
            {{ showActor ? item.mainAct.join(",") : toCharactor(item.mainAct).join(",") }}
          </template>
          <template v-slot:[`item.subAct`]="{ item }">
            {{ showActor ? item.subAct.join(",") : toCharactor(item.subAct).join(",") }}
          </template>
          <template v-slot:[`item.link`]="{ item }">
            <v-btn
              :href="getBoothLink(item.title)"
              target="__blank"
              x-small
              color="red"
              depressed
            >BOOTH
            </v-btn>
            <v-btn
              :href="getBoothLink(item.title)"
              target="__blank"
              x-small
              color="primary"
              depressed
            >DLSITE
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div class="content-center">
      <v-switch
        v-model="showBannerAll"
        label="ジャケットを一覧表示する"
      ></v-switch>
    </div>

    <div style="width:98%; max-width: 980px; text-align:center; margin:0 auto;">
      <v-container
        justify-center
        v-if="showBannerAll"
      >
        <div
          style="display:inline; justify:center; margin-right:5px;"
          v-for="(product, i) in productDB"
          :key="i"
        >
          <div class="banner" style="display:inline;" v-html="productDB[i].banner"></div>
        </div>
      </v-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Footer from "../components/Footer.vue";

interface productInfo {
  No: Number,
  title: String,
  release: Date,
  mainAct: Array<String>,
  subAct: Array<String>,
  link: String,
  dalf: String,
  banner: String,
  hints: Array<String>
}

class productInfo implements productInfo{
  constructor(No = -1, title = "",mainAct=[""], subAct=[""], link="", dalf="", banner="", hints=[""],){
    this.No = No;
    this.title = title;
    this.mainAct = mainAct;
    this.subAct = subAct;
    this.link = link;
    this.dalf = dalf;
    this.banner = banner;
    this.hints = hints;
  }
}

@Component({
  components: { Footer },
})
export default class Products extends Vue {
  private selecteds = [];
  private showBannerAll = false;
  private showActor = false;
  public productDBurl: string = "https://script.google.com/macros/s/AKfycbzXYMhKrkOm3NtwqeQMBOJYc4uTz8kIbKMYOAdP0cb_lHB1BhTG8B9yc1CTyDAe_drT/exec";
  public productDB: Array<productInfo> = new Array(new productInfo());
  private headers: any = [
    { text: "＃", value: "No" },
    { text: "リリース日", value: "release" },
    { text: "タイトル", value: "title" },
    { text: "メイン出演", value: "mainAct" },
    { text: "サブ出演", value: "subAct" },
    { text: "Link", value: "link" },
    { text: "豆知識", value: "hints" },
  ];
  public exDB: any = "";
  public pageData: any = "";

  created() {
    //console.log(this.pageData)
    axios.get<Array<productInfo>>(this.productDBurl).then((res) => {
      this.productDB = res.data;
    });
  }

  public search = "";
  public filter(items: any, search: string) {
    if (items == null || typeof items === "boolean") return false;
    let words = search
      .split(/,|、/)
      .map((w: string) => {
        return w.trim();
      })
      .filter((x) => x);
    return (
      words.filter((w) => {
        if (Array.isArray(items)) {
          return items.filter((x: string) => x.indexOf(w) !== -1).length > 0;
        }else if(typeof items == "number"){
          return items.toString().indexOf(w) !== -1;
        }else {
          return items.toString().indexOf(w) !== -1;
        }
      }).length == words.length
    );
  }
  private c2a: any = {
      "餅よもぎ":"すずしろ",
      "御崎ひより":"すずしろ",
      "雁庵うずめ":"せり",
      "藤堂れんげ":"すずな",
      "真宮ひいろ	":"いね",
      "愛枝今日子":"たびらこ",
      "藤村咲樹":"はこべら",
      "琴香":"はこべら",
      "箱河ノア":"いのこ",
      "丹羽うさぎ":"なつな",
    }
  public toCharactor(actors: Array<string>){
    return actors.map(a => this.c2a[a] )
  }
  public getBoothLink(Title: string): string {
    let link: string = `https://booth.pm/ja/search/${Title}`;
    return link;
  }

  /* */
  public snack = false;
  public save() {
    console.log("save is ok");
  }
  public cancel() {
    console.log("cancel is ok");
  }
  public open() {
    console.log("open is ok");
  }
  public close() {
    console.log("close is ok");
  }
}
</script>

<style>

.content-center {
  display: flex;
  justify-content: center;
}

.carousel a img{
  width: 100%;
  max-width: 600px;
  height: 100%;
}

.banner a img{
  width: 100%;
  max-width: 300px;
}

</style>

<template>
  <div>
    <div class="content-center">
      <v-card width="98%" max-width="900px" class="ma-4">
        <v-card-title>
          道草屋の作品情報
          <v-spacer></v-spacer>
          <v-switch v-model="showActor" label="声優表示"></v-switch>
          <v-spacer></v-spacer>
          <div v-if="authstore.user.isLogin">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar>
                    <img :src="authstore.user.photoUrl" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title @click="signOut()">ログアウト</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div v-else>
            <v-btn color="light-blue" @click="signIn()">ログイン<v-icon>mdi-twitter</v-icon></v-btn>
          </div>
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
        </v-card-subtitle>
        <v-data-table
          v-model="selecteds"
          :headers="headers"
          :items="db.products"
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
            <div class="linkbox">
              <v-btn
                :href="getBoothLink(item.title)"
                target="__blank"
                x-small
                color="red"
                depressed
              >BOOTH
              </v-btn>
              <v-btn icon v-if="authstore.user.isLogin" :color="isBought(item.No, 'booth') ? 'yellow' : 'gray'" @click="clickStar(item.No, 'booth')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </div>
            <div class="linkbox">
              <v-btn
                :href="item.dalf"
                target="__blank"
                x-small
                color="primary"
                depressed
              >DLSITE
              </v-btn>
              <v-btn icon v-if="authstore.user.isLogin" :color="isBought(item.No, 'dlsite') ? 'yellow' : 'gray'" @click="clickStar(item.No, 'dlsite')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </div>
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
          v-for="(product, i) in db.products"
          :key="i"
        >
          <div class="banner" style="display:inline;" v-html="db.products[i].banner"></div>
        </div>
      </v-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "../components/Footer.vue";
import { AuthStore } from "@/stores/auth";
import { ProductsStore } from "@/stores/products";

@Component({
  components: { Footer },
})
export default class Products extends Vue {
  public authstore = AuthStore.getInstance();
  private selecteds = [];
  private movue = AuthStore.getInstance().movue;
  private showBannerAll = false;
  private showActor = false;
  private db = ProductsStore.getInstance().db;
  private headers: any = [
    { text: "＃", value: "No" },
    { text: "リリース日", value: "release" },
    { text: "タイトル", value: "title" },
    { text: "メイン出演", value: "mainAct" },
    { text: "サブ出演", value: "subAct" },
    { text: "Link", value: "link" },
  ];
  public exDB: any = "";
  public pageData: any = "";

  public isBought(itemNo:number, site:any){
    let possessionId = itemNo + "-" + site;
    if (this.movue.users.possessions != undefined) return this.movue.users.possessions.includes(possessionId);
  }

  public clickStar(itemNo:number, site:any){
    const possessionId = itemNo + "-" + site;
    const index = this.movue.users.possessions?.indexOf(possessionId)
    console.log("index",index)
    console.log("click possession", this.movue.users.possessions)
    if (index == -1){
      this.authstore.setPossessionStar(possessionId);
      console.log("setPossession", possessionId)
    }else{
      if (index != undefined) this.authstore.removePossessionStar(index);
      console.log("removePossession", possessionId)
    }
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


  public signIn(){
    this.authstore.signin();
  }
  public signOut(){
    this.authstore.signout();
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

.linkbox{
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center;     /*上下中央揃え*/
  margin: 0px;
}

</style>

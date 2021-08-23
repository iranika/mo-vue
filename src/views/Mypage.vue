<template>
  <div>
    <div class="content-center">
      <v-card width="98%" max-width="900px" class="ma-4">
        <v-card-title>
          マイページ(㌁)
          <v-spacer></v-spacer>
          <v-switch label="編集モード" v-model="isEditerMode"></v-switch>
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
            label="タイトル検索"
            multi-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-card-subtitle>
          ※編集モードを有効にするとブックマークの編集が出来ます。<br />
          ※ブックマークした販売サイトのボタンは色が付きます。<br />
          ※BOOTHのリンクは作品名で検索しているだけなので精度はご容赦ください。<br />
        </v-card-subtitle>

      </v-card>
    </div>
    <v-container
      justify-center
      v-if="authstore.user.isLogin"
    >
      <v-row justify="center" align-content="center" dense>
        <v-col
          style="display: inline; justify: center; margin-right: 5px"
          v-for="(product, i) in db.products"
          :key="i"
          cols="7" xs="2" sm="3" md="2" lg="2" xl="2"
          dense
          v-show="isFilter(db.products[i].title)"
        >
          
          <div class="banner" style="display: inline">
            <v-card width="200px">
              <v-img :src="db.products[i].img"></v-img>
              <v-card-title class="text-caption">{{ db.products[i].title }}</v-card-title>
              <v-card-actions v-if="!isEditerMode">
                <v-btn
                  x-small
                  :color="isBought(i+1,'booth') ? 'red' : 'gray'"
                  :href="getBoothLink(db.products[i].title)"
                >BOOTH</v-btn>
                <v-btn
                  x-small
                  :color="isBought(i+1, 'dlsite') ? 'primary' : 'gray'"
                  :href="db.products[i].dalf"
                >DLSITE</v-btn>
              </v-card-actions>
              <v-card-actions v-else>
                <v-btn x-small text @click="clickStar(i+1, 'booth')">
                  <v-icon :color="isBought(i+1, 'booth') ? 'yellow' : 'gray'" >mdi-star</v-icon>BOOTH
                </v-btn>
                <v-btn x-small text @click="clickStar(i+1, 'dlsite')">
                  <v-icon :color="isBought(i+1, 'dlsite') ? 'yellow' : 'gray'">mdi-star</v-icon>DLSITE
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else justify-center>
      <v-card style="margin: 0 auto; text-align:center;" width="98%" max-width="900px">
        <v-container>
          現在、ログインしていません。<br>
          マイページの利用にはTwitterアカウントでログインが必要です。
        </v-container>
      </v-card>
    </v-container>
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
  private isEditerMode = false;
  private movue = AuthStore.getInstance().movue;
  private db = ProductsStore.getInstance().db;
  public search = "";

  public isBought(itemNo: number, site: any) {
    let possessionId = itemNo + "-" + site;
    if (this.movue.users.possessions != undefined)
      return this.movue.users.possessions.includes(possessionId);
  }

  public isFilter(title: string){
    return title.indexOf(this.search) == -1 ? false : true
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
        } else if (typeof items == "number") {
          return items.toString().indexOf(w) !== -1;
        } else {
          return items.toString().indexOf(w) !== -1;
        }
      }).length == words.length
    );
  }
  private c2a: any = {
    餅よもぎ: "すずしろ",
    御崎ひより: "すずしろ",
    雁庵うずめ: "せり",
    藤堂れんげ: "すずな",
    "真宮ひいろ	": "いね",
    愛枝今日子: "たびらこ",
    藤村咲樹: "はこべら",
    琴香: "はこべら",
    箱河ノア: "いのこ",
    丹羽うさぎ: "なつな",
  };
  public toCharactor(actors: Array<string>) {
    return actors.map((a) => this.c2a[a]);
  }
  public getBoothLink(Title: string): string {
    let link: string = `https://booth.pm/ja/search/${Title}`;
    return link;
  }

  public signIn() {
    this.authstore.signin();
  }
  public signOut() {
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

.carousel a img {
  width: 100%;
  max-width: 600px;
  height: 100%;
}

.banner a img {
  width: 100%;
  max-width: 200px;
}

.linkbox {
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center; /*上下中央揃え*/
  margin: 0px;
}
</style>

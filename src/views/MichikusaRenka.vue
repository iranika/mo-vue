<template>
  <div>
    <div class="content-center">
      <v-card width="98%" max-width="900px" class="ma-4">
        <v-card-title>
          道草恋歌（閲覧専用）β
        </v-card-title>
        <v-card-subtitle class="text-caption">
          ※開発β版。現在は閲覧のみ可能です@2021-11-07<br />
          ※作品を投稿したい人は道草恋歌アプリをご利用ください。<br />
          <a href="https://michikusa-renka.glideapp.io/">https://michikusa-renka.glideapp.io</a><br />
        </v-card-subtitle>
      </v-card>
    </div>
    <v-container
      class="d-flex flex-wrap justify-center"
      width="98%"
    >
      <v-card
        width="95%"
        max-width="340px"
        v-for="(renka,i) in db.renkaShu"
        :key="i"
        style="margin:0 5px 10px 5px;"
      >
        <v-card-text class="renka-liric">{{ db.renkaShu[i].Lyric}}</v-card-text>
        <v-card-text class="text-caption renka-auther">{{ db.renkaShu[i].TimeStamp.split("T")[0] }}<br />{{ getAutherName(db.renkaShu[i].NameOrTwitterID) }}<br />
        </v-card-text>
      </v-card>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Footer from "../components/Footer.vue";
//import { AuthStore } from "@/stores/auth";
import { RenkaStore } from "@/stores/renka";

@Component({
  components: { Footer },
})
export default class MichikusaRenka extends Vue {
  private db = RenkaStore.getInstance().db;

  @Prop({ type: String, default: "" })
  private query: string = "";

  public getAutherName(auther: String): String {
    if (auther == ""){
      return "名無しのお客様";
    }else{
      return auther;
    }
  }
  public mounted(){
    console.log(this.db.renkaShu)
  }
}
</script>

<style>
.content-center {
  display: flex;
  justify-content: center;
}
.renka-auther {
  text-align: right;
  color: grey;
  opacity: 0.7;
}
.renka-liric {
  padding-bottom: 0px;
  padding-top: 32px;
}
.renka-timestamp {
  padding-right: 16px;
}
</style>

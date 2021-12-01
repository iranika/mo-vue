<template>
  <v-app>
    <v-app-bar
      app
      color="light-green"
      dark
      src="https://mo4koma.iranika.info/top/top.webp"
      shrink-on-scroll
      prominent
      dense
      collapse-on-scroll
      clipped-right
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,100,160,.8), rgba(0,160,100,.2)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>みちくさびゅあー</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/?page=latest">latest</v-tab>
          <v-tab to="/charactor">Charactor</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <title-list-menu v-bind:titles="pageData.map(p => p.Title)"></title-list-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-subheader>みちくさびゅあー</v-subheader>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
          <v-list-item to="/?page=latest">
            <v-list-item-icon>
              <v-icon dense>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>最新話</v-list-item-title>
          </v-list-item>
          <v-list-item to="/charactor">
            <v-list-item-icon>
              <v-icon dense>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登場人物の紹介</v-list-item-title>
          </v-list-item>
          <v-list-item to="/renka">
            <v-list-item-icon>
              <v-icon dense>mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>道草恋歌(閲覧専用)</v-list-item-title>
          </v-list-item>
          <v-list-item to="/search">
            <v-list-item-icon>
              <v-icon dense>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>びゅあー検索くんα</v-list-item-title>
          </v-list-item>
          <v-list-item to="/products">
            <v-list-item-icon>
              <v-icon dense>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>道草屋の作品一覧</v-list-item-title>
          </v-list-item>
          <v-list-item to="/timeline">
            <v-list-item-icon>
              <v-icon dense>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>タイムライン</v-list-item-title>
          </v-list-item>
          <v-list-item to="/About">
            <v-list-item-icon>
              <v-icon dense>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>このアプリについて</v-list-item-title>
          </v-list-item>
          <v-list-item to="/mypage">
            <v-list-item-icon>
              <v-icon dense>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>マイページ</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list-item-group>
      </v-list>
      <v-list nav dense>
        <v-subheader>外部リンク</v-subheader>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            href="https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"
          >
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>DLsiteのページ</v-list-item-title>
          </v-list-item>

          <v-list-item
            href="https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"
          >
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>BOOTHのページ</v-list-item-title>
          </v-list-item>

          <v-list-item
            href="https://momotori.booth.pm/item_lists/rBkTe4Bm"
          >
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>お土産売り場(booth)</v-list-item-title>
          </v-list-item>
          
          <v-list-item href="http://momoirocode.web.fc2.com/">
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>桃色CODE</v-list-item-title>
          </v-list-item>

          <v-list-item href="http://blog.livedoor.jp/kai_tyou/">
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>雑記的な（ブログ）</v-list-item-title>
          </v-list-item>

          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header
                ><div class="text-center">
                  ご予約でんわ
                </div></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <YoyakuList v-bind:items="goyoyaku"></YoyakuList>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-group>
      </v-list>
      <v-list nav dense>
        <v-subheader>いらにかの何か</v-subheader>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="https://michikusa-renka.glideapp.io/" target="new">
            <v-list-item-icon>
              <v-icon dense>mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>道草恋歌</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://stamp.iranika.info/#/" target="new">
            <v-list-item-icon>
              <v-icon dense>mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Nikaスタンプβ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg">
      <router-view> </router-view>
    </v-main>
    <v-snackbar bottom right :value="updateExists" :timeout="-1">
      びゅあーのアップデートがあります
      <v-btn text @click="refreshApp">
        更新する
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';
import TitleListMenu from "./components/TitleListMenu.vue";
import YoyakuList from "./components/YoyakuList.vue";
import Update from "@/mixins/update";

export default {
  name: "App",

  components: {
    TitleListMenu,
    YoyakuList
  },
  data: () => ({
    drawer: false,
    group: null,
    isTabShow: true,
    pageData: window.pageData,
    goyoyaku: window.goyoyaku
  }),
  mounted(){
    if (this.$route.params.lang && this.$route.params.lang == "en"){
      axios.get("https://mo4koma.iranika.info/4komaData.en.json").then((res)=>{
        if (res.data[0]){
          this.pageData = res.data;
        }
      })
    }
  },
  mixins:[Update],
};
</script>

<style>
.bg {
  background-image: url("./assets/bg.jpg");
  background-repeat: repeat;
  background-size: 100%;
}
</style>

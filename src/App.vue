<template>
  <v-app>
    <v-app-bar
      app
      color="light-green"
      dark
      src="https://mo4koma.iranika.info/top/top.jpg"
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
      <template v-slot:extension v-show="isTabShow">
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/?page=latest">latest</v-tab>
          <v-tab to="/About">About</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <title-list-menu
        v-bind:items="pageData"
      ></title-list-menu>
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
          <v-list-item to="/About">
            <v-list-item-icon>
              <v-icon dense>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>このアプリについて</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list-item-group>
      </v-list>
      <v-list nav dense>
        <v-subheader>外部リンク</v-subheader>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="https://www.dlsite.com/home/dlaf/=/aid/iranica/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext">
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>DLsiteのページ</v-list-item-title>
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
              <v-expansion-panel-header><div class="text-center">ご予約でんわ</div></v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item href="https://drive.google.com/file/d/1J5SxzMVJqG7Uz9Fi4bQPUWQryKQj61dm/view?usp=sharing">
                  <v-list-item-title>スマホでご予約(3月) New!</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://drive.google.com/file/d/1QUCJdqzNTbRU5xePPyUhzhUBkbTrtdvN/view?usp=sharing">
                  <v-list-item-title>スマホでご予約(12月)</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://drive.google.com/file/d/1mSLIY7be7dW8illnkGmOicHNHjwq_YsP/view?usp=sharing">
                  <v-list-item-title>スマホでご予約(7月)</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://drive.google.com/file/d/1ThgXkrvkUEPnbup1uR-1ubiJgS2p_f6-/view?usp=sharing">
                  <v-list-item-title>スマホでご予約(3月)</v-list-item-title>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="bg"
    >
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import TitleListMenu from "./components/TitleListMenu.vue";

export default {
  name: "App",

  components: {
    TitleListMenu
  },
  data: () => ({
    drawer: false,
    group: null,
    isTabShow: true,
    pageData: window.pageData
  })
};
</script>

<style>
.bg {
  background-image: url("./assets/bg.jpg");
  background-repeat: repeat;
  background-size: 100%;
}
</style>
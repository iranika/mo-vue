<template>
  <v-app>
    <v-app-bar
      app
      color="light-green"
      dark
      src="https://iranika.github.io/mo-code/img/backtatami2.jpg"
      shrink-on-scroll
      prominent
      dense
      collapse-on-scroll
      clipped-right
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,100,160,.7), rgba(0,160,100,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>みちくさびゅあー</v-toolbar-title>
      <template v-slot:extension v-show="isTabShow">
        <v-tabs align-with-title>
          <v-tab to="/">Top</v-tab>
          <v-tab to="/?page=latest">latest</v-tab>
          <v-tab to="/info">info</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <title-list-menu
        v-bind:items="pageData"
      ></title-list-menu>
    </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Top</v-list-item-title>
          </v-list-item>
          <v-list-item to="/?page=latest">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Latest</v-list-item-title>
          </v-list-item>
          <v-list-item to="/info">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>News</v-list-item-title>
          </v-list-item>

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
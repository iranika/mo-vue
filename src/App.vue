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
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>News</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view> </router-view>
    </v-main>
        <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: ["AAAAAAAAAAAAA", "BBBBBBBBBBBBBBBBBBBBBBBBB", "CCCCCCCCCCCCCCCCCCCCCCCCC"],
    drawer: false,
    group: null,
    isTabShow: true
  })
};
</script>

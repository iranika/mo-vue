<template>
  <v-menu bottom left class="overflow-y-auto" max-height="100%"
    :close-on-content-click="false"
    v-model="menu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list height="100%">
      <v-list-item to="search" @click.stop="menu = false">
        <v-list-item-content>
          <v-list-item-title >詳細検索をひらく<v-icon>mdi-magnify</v-icon></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="searchText"
            label="タイトル検索"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      
      <v-list-item
        v-for="(title, i) in titles"
        :key="i"
        :href="getPageUrl(i + 1)"
        @click.stop="menu = false"
        v-show="isFiltered(title, i)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ i + 1 }}.{{ title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-action> </v-list-item-action>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    titles: {},
  },
  data: ()=>({
    menu: false,
    searchText: ""
  }),
  methods: {
    getPageUrl(index) {
      return `#/?page=${index.toString()}`;
    },
    isFiltered(title, i){
      let num = i + 1;
      if (`${ num }.${ title }`.toString().indexOf(this.searchText) !== -1){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<style></style>

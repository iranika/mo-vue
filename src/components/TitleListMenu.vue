<template>
  <v-menu bottom left class="overflow-y-auto" max-height="100%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item to="search">
        <v-list-item-content>
          <v-list-item-title>詳細検索をひらく</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :href="getPageUrl(i + 1)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ i + 1 }}.{{ item.Title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-action> </v-list-item-action>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    items: {}
  },
  methods: {
    getPageUrl(index) {
      return `#/?page=${index.toString()}`;
    }
  }
};
</script>

<style></style>

<template>
  <div>
    <v-list-item v-for="(item, i) in reverseItems" :key="i" :href="item.href">
      <v-list-item-title>{{ getText(i, item.text) }}</v-list-item-title>
    </v-list-item>
    <v-list-item-action> </v-list-item-action>
  </div>
</template>

<script>
export default {
  props: {
    items: {}
  },
  methods: {
    getText(i, text) {
      if (i == 0) {
        return `${text} New!`;
      } else {
        return text;
      }
    }
  },
  computed: {
    reverseItems() {
      console.log(this.items);
      return this.items.slice().reverse();
    }
  }
};
</script>

<style></style>

<template>
  <div class="pt-0" style="margin: 0 auto;">
    <v-card width="98%" max-width="300px">
      <v-card-title class="text-center text-body-1">今週のオススメ作品</v-card-title>
      <!--
      <a :href="db.osusume.dalf">
        <v-img :src="db.osusume.img" width="100%"></v-img>
      </a>
      -->
      <v-card-subtitle class="text-body-1"><a :href="db.osusume.dalf">{{ db.osusume.title }}</a></v-card-subtitle>
      <v-card-text>
        <div class="text-caption">サークル： {{ db.osusume.circle }}</div>
        <div class="text-caption">声優さん： {{ db.osusume.acts.join(",") }}</div>
        <div class="text-caption">絵師さん： {{ db.osusume.ilust }}</div>
        <div>{{ db.osusume.comment }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OsusumeStore } from "@/stores/osusume";

@Component({
  components: { },
})
export default class Osusue extends Vue {
  private db = OsusumeStore.getInstance().db;

}
</script>

<style>

</style>
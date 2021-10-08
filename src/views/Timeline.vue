/* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="content-center">
      <v-timeline dense>
        <v-timeline-item v-for="(item, i) in db.products" :key="i" small right>
          <v-card
            width="95%"
            max-width="500px"
            dense
            color="rgba(255, 255, 255, 1.0)"
          >
            <v-card-title class="body-2">{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.release }}</v-card-subtitle>
            <v-container>
              <img :src="item.img" width="100%" />
              <!--
              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    ><div class="text-center">
                      あらすじ
                    </div></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    WIP: write text...
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              -->
            </v-container>
            <v-card-actions>
              <v-btn color="blue" text :href="item.dalf" target="_blank"
                >DLSiteの作品ページ</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-timeline-item>
        <v-timeline-item small>
          <div class="py-4">
            <h2 :class="`headline font-weight-light`">
              {{ now }} Now waiting next...
            </h2>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "../components/Footer.vue";
import { ProductsStore } from "@/stores/products";

@Component({
  components: { Footer },
})
export default class Products extends Vue {
  private db = ProductsStore.getInstance().db;
  private now = new Date().toISOString().split("T")[0];
}
</script>

<style scoped>
.content-center {
  display: flex;
  justify-content: center;
}
</style>

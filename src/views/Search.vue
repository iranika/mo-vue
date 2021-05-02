<template>
  <div style="display:flex; justify-content:center;">
    <v-card width="90%" max-width="700px" class="ma-4">
      <v-card-title>
        びゅあー検索くんβ
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="searchDB"
        single-line
        hide-details
      ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="searchDB"
        item-key="Title"
        class="elevation-1"
        pagination.sync="pagination"
        loading="true"
      >
      <template
          v-slot:[`item.No`]="{ item }"
        >
          {{ searchDB.map((x)=>{ return x.Title }).indexOf(item.Title) + 1 }}
      </template>

      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import exAttribute from "@/assets/exAttribute.json";

@Component({})
export default class SearchEngine extends Vue {
  private pageData: any = [
    {"Title": "都会派", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/1.jpg"]}
    ,{"Title": "隣町より遠く/手渡し", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/2.jpg", "https://mo4koma.iranika.info/4koma/ja/3.jpg"]}
    ,{"Title": "呼称", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/4.jpg"]}
    ,{"Title": "さしいれ", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/5.jpg"]}
    ,{"Title": "しょうじょ", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/6.jpg"]}
    ,{"Title": "扱い", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/7.jpg"]}
    ,{"Title": "ろうじん", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/8.jpg"]},
  ];
  private exAttribute: any = exAttribute;
  private search: string = "";
  public searchDB: any = [
    {"Title": "都会派", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/1.jpg"]}
    ,{"Title": "隣町より遠く/手渡し", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/2.jpg", "https://mo4koma.iranika.info/4koma/ja/3.jpg"]}
    ,{"Title": "呼称", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/4.jpg"]}
    ,{"Title": "さしいれ", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/5.jpg"]}
    ,{"Title": "しょうじょ", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/6.jpg"]}
    ,{"Title": "扱い", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/7.jpg"]}
    ,{"Title": "ろうじん", "ImagesUrl": ["https://mo4koma.iranika.info/4koma/ja/8.jpg"]},
  ];

  private headers: any = [
    {
      text: "No",
      value: "No"
    },
    {
      text: "タイトル",
      value: "Title",
    },
    {
      text: "登場キャラ",
      value: "Charactor",
    },
    /*
    {
      text: "imageLinks",
      value: "ImagesUrl",
    }*/
  ]

};
</script>

<style></style>

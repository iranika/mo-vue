<template>
  <div style="display:flex; justify-content:center;">
    <v-card width="90%" max-width="900px" class="ma-4">
      <v-card-title>
        びゅあー検索くんα
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="検索する文字を選んでね"
        single-line
        hide-details
      ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="searchDB"
        :search="search"
        item-key="No"
        class="elevation-1"
        pagination.sync="pagination"
        loading="true"
        dense
        
      >
        <template
            v-slot:[`item.No`]="{ item }"
          >
            {{ searchDB.map((x)=>{ return x.Title }).indexOf(item.Title) + 1 }}
        </template>
        <template
          v-slot:[`item.Charactors`]="{ item }"
        >
          <v-edit-dialog
            :return-value.sync="item.Charactors"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ item.Charactors == null ? "-" : item.Charactors.toString() }}
            <template v-slot:input>
              <v-text-field
                v-model="item.Charactors"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>


        </template>
        <template
          v-slot:[`item.Keyword`]="{ item }"
        >
          <v-edit-dialog
            :return-value.sync="item.Keyword"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ item.Keyword == null ? "-" : item.Keyword.toString() }}
            <template v-slot:input>
              <v-text-field
                v-model="item.Keyword"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template
          v-slot:[`item.Comment`]="{ item }"
        >
          {{ item.Comment == null ? "-" : item.Comment.toString() }}
        </template>

        <template
            v-slot:[`item.PageLink`]="{ item }"
          >
            <v-btn
              :href="getPageLink(item)"
              target="__blank"
              shaped
              small
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </template>

      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import searchdb from "@/assets/searchdb.json";

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
  public searchDB: any = searchdb;
  public search = "";
  private headers: any = [
    { text: "No", value: "No"},
    { text: "タイトル", value: "Title",},
    { text: "登場キャラ", value: "Charactors", },
    { text: "キーワード", value: "Keyword", },
    { text: "コメント", value: "Comment", },
    { text: "Link", value: "PageLink" },
  ];

  public getPageLink(item: any): string {
    let pageNum: Number = this.searchDB.map((x: any)=>{ return x.Title }).indexOf(item.Title) + 1

    return "/?page=" + pageNum
  }

  /* */
  public snack = false;
  public save(){
    console.log("save is ok")
  }
  public cancel(){
    console.log("cancel is ok")
  }
  public open(){
    console.log("open is ok")
  }
  public close(){
    console.log("close is ok")
  }

};
</script>

<style></style>

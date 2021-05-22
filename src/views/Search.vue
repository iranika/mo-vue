<template>
  <div>
    <div class="content-center">
      <v-card width="90%" max-width="900px" class="ma-4">
        <v-card-title>
          びゅあー検索くん㌁ver0.5
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="検索する文字を入力してね"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selecteds"
          show-select
          :headers="headers"
          :items="searchDB"
          :search="search"
          :custom-filter="filter"
          item-key="No"
          class="elevation-1"
          pagination.sync="pagination"
          loading="true"
          dense
        >
          <template v-slot:[`item.No`]="{ item }">
            {{ Number(item.No)}}
          </template>
          <template v-slot:[`item.Charactors`]="{ item }">
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
          <template v-slot:[`item.Keyword`]="{ item }">
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
          <template v-slot:[`item.Comment`]="{ item }">
            {{ item.Comment == null ? "-" : item.Comment.toString() }}
          </template>

          <template v-slot:[`item.PageLink`]="{ item }">
            <v-btn
              :href="getPageLink(item)"
              target="__blank"
              small
              color="white"
              depressed
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <div class="content-center">
      <v-switch
        v-model="isShowViewerContent"
        label="チェックした話を一覧表示する"
      ></v-switch>
    </div>

    <div class="content-center">
      <viewer-images
        v-show="isShowViewerContent"
        v-bind:pageList="selecteds.map(x => x.No - 1)"
      ></viewer-images>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewerImages from "@/components/ViewerImages.vue";
//import ViewerContent from "@/components/ViewerContent.vue";
//import searchdb from "@/assets/searchdb.json";
import axios from "axios";

declare global {
  interface Window {
    pageData: any;
  }
}

@Component({
  components: { ViewerImages },
})
export default class SearchEngine extends Vue {
  private selecteds = [];
  private isShowViewerContent = true;
  private pagination = { sortBy: "No", descending: true, rowsPerPage: -1 };
  public searchDBurl: string = "https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec";
  public searchDB: any = [
    {
      No: "0",
      Title: "都会派",
      ImagesUrl: ["https://mo4koma.iranika.info/4koma/ja/1.jpg"],
      Charactors: ["せり", "すずな"],
      Keyword: ["きっぷ"],
      Comment: "きっぷが買えるなんてずなちゃんは都会派だね！",
    },
  ];
  public exDB: any = "";
  public pageData: any = "";

  created() {
    //console.log(this.pageData)
    axios.get(this.searchDBurl).then((res) => {
      this.pageData = window.pageData || {};
      this.exDB = res.data;
      this.searchDB = this.pageData.map((v: any, i: number) => {
        if (this.exDB[i]){
          return Object.assign(Object.assign(v, { No: i + 1 }), this.exDB[i][i]);
        }else{
          return Object.assign(Object.assign(v, { No: i + 1 }), {
            No: i + 1,
            Title: "",
            ImagesUrl: [],
            Charactors: [],
            Keyword: [],
            Comment: "※検索DBに情報が追記されていません"
          })
        }
      });
      console.log(this.searchDB);
    });
  }

  public search = "";
  public filter(items: any, search: string) {
    if (items == null || typeof items === "boolean") return false;
    let words = search
      .split(/,|、/)
      .map((w: string) => {
        return w.trim();
      })
      .filter((x) => x);
    return (
      words.filter((w) => {
        if (Array.isArray(items)) {
          return items.filter((x: string) => x.indexOf(w) !== -1).length > 0;
        }else if(typeof items == "number"){
          return items.toString().indexOf(w) !== -1;
        }else {
          return items.toString().indexOf(w) !== -1;
        }
      }).length == words.length
    );
  }
  private headers: any = [
    { text: "＃", value: "No" },
    { text: "タイトル", value: "Title" },
    { text: "登場キャラ", value: "Charactors" },
    { text: "キーワード", value: "Keyword" },
    { text: "コメント", value: "Comment" },
    { text: "Link", value: "PageLink" },
  ];

  public getPageLink(item: any): string {
    let pageNum: Number =
      this.searchDB
        .map((x: any) => {
          return x.Title;
        })
        .indexOf(item.Title) + 1;
    return "#/?page=" + pageNum;
  }

  /* */
  public snack = false;
  public save() {
    console.log("save is ok");
  }
  public cancel() {
    console.log("cancel is ok");
  }
  public open() {
    console.log("open is ok");
  }
  public close() {
    console.log("close is ok");
  }
}
</script>

<style scoped>

.content-center {
  display: flex;
  justify-content: center;
}

</style>

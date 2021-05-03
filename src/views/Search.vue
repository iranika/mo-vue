<template>
  <div style="display:flex; justify-content:center;">
    <v-card width="90%" max-width="900px" class="ma-4">
      <v-card-title>
        びゅあー検索くん㌁
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
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import searchdb from "@/assets/searchdb.json";

@Component({})
export default class SearchEngine extends Vue {
  public searchDB: any = searchdb;
  public search = "";
  public filter(items: any, search: string){
    if (items == null || typeof items === "boolean") return false;
    let words = search.split(",").map((w: string) => { return w.trim() }).filter(x => x)
    return (words.filter(w => {
      if (Array.isArray(items)){
        return items.filter((x: string) => x.indexOf(w) !== -1).length > 0;
      }else{
        return items.indexOf(w) !== -1;
      }
      }).length == words.length)
  }
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

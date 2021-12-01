/*
osusumeはGoogleスプレッドシート上のおすすめ作品情報を取得するためのものです。
*/

import Vue from "vue";
import axios from "axios";

const spreadSheetUrl =
  "https://script.google.com/macros/s/AKfycbxsZtN8gOaTLcMc3o2KNU0BY9Ufxkd57Nqo8KaxmQBlJEG_1kGjTgxtSKvU9IWNBL7X/exec";

export interface OsusumeInfo {
  no: Number;
  title: String;
  circle: String;
  acts: Array<String>;
  ilust: String;
  link: String;
  comment: String;
  dalf: String;
  banner: String;
  img: String;
  timestamp: String;
}

export class OsusumeStore {
  public static instance: OsusumeStore;

  public db = new Vue({
    data: {
      osusume: <OsusumeInfo>{
        no: 0,
        title: "",
        circle: "",
        acts: [],
        ilust: "",
        link: "",
        comment: "",
        dalf: "",
        banner: "",
        img: "",
        timestamp: ""
      }
    }
  });

  public static getInstance(): OsusumeStore {
    if (!this.instance) {
      this.instance = new OsusumeStore(OsusumeStore.getInstance);
    }
    return this.instance;
  }
  public syncSpreadSheetDB() {
    axios.get<OsusumeInfo>(spreadSheetUrl).then(res => {
      this.db.osusume = res.data;
      //console.log(this.db.osusume)
    });
  }
  constructor(caller: () => OsusumeStore) {
    if (caller == OsusumeStore.getInstance) {
      console.info("create instance of OsusumeStore");
      this.syncSpreadSheetDB();
    } else if (OsusumeStore.instance) {
      throw new Error(
        "Already created instance of OsusumeStore. You should use OsusumeStore.getInstance()."
      );
    } else {
      throw new Error(
        "Constractor args valided illegal. You should use OsusumeStore.getInstance()"
      );
    }
  }
}

/*
productsはGoogleスプレッドシート上の道草屋作品DBを取得するためのものです。
https://docs.google.com/spreadsheets/d/1naQXZKxTK0NyHuJK0juqCurruwj3tMqgO5dGUM2LO0w/edit?usp=sharing
*/

import Vue from "vue";
import axios from "axios";

const AppsScriptUrl =
  "https://script.google.com/macros/s/AKfycbzqTF9VeWIKMXJ_PYod-9szeTeBvc5RGNspl7aUAzyjV1UGmgCnpwkOK-6M6eSMQBsd/exec";

export interface SpreadSheetInfo {
  TimeStamp: String;
  Category: String;
  Lyric: String;
  Description: String;
  NameOrTwitterID: String;
}

export class RenkaStore {
  public static instance: RenkaStore;

  public db = new Vue({
    data: {
      renkaShu: <Array<SpreadSheetInfo>>[]
    }
  });

  public static getInstance(): RenkaStore {
    if (!this.instance) {
      this.instance = new RenkaStore(RenkaStore.getInstance);
    }
    return this.instance;
  }
  public syncSpreadSheet() {
    axios.get<Array<SpreadSheetInfo>>(AppsScriptUrl).then(res => {
      this.db.renkaShu = res.data.reverse();
    });
  }
  constructor(caller: () => RenkaStore) {
    if (caller == RenkaStore.getInstance) {
      console.info("create instance of RenkaStore");
      this.syncSpreadSheet();
    } else if (RenkaStore.instance) {
      throw new Error(
        "Already created instance of AuthStore. You should use AuthStore.getInstance()."
      );
    } else {
      throw new Error(
        "Constractor args valided illegal. You should use AuthStore.getInstance()"
      );
    }
  }
}

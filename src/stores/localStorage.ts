/*
productsはGoogleスプレッドシート上の道草屋作品DBを取得するためのものです。
https://docs.google.com/spreadsheets/d/1naQXZKxTK0NyHuJK0juqCurruwj3tMqgO5dGUM2LO0w/edit?usp=sharing
*/

import Vue from "vue";

export class LocalStorageStore {
  public static instance: LocalStorageStore;

  public db = new Vue({
    data: {
      bookmark: this.getBookmark()
    }
  });

  private getBookmark(){
    var bookmarks = window.localStorage.getItem("bookmarks") ?? ""
    if (bookmarks != ""){
        return <Array<String>>bookmarks.split(",")
    }else{
        return []
    }
  }

  public static getInstance(): LocalStorageStore {
    if (!this.instance) {
      this.instance = new LocalStorageStore(LocalStorageStore.getInstance);
    }
    return this.instance;
  }

  public addBookmark(p: Number) {
    if (!this.db.bookmark.includes(String(p))){
      this.db.bookmark.push(String(p));
    }
    this.setBookmark();
  }
  public removeBookmark(p: Number) {
    var index = this.db.bookmark.indexOf(String(p));
    if (index != -1) {
      this.db.bookmark.splice(index, 1);
    }
    this.setBookmark();
  }
  private setBookmark() {
    window.localStorage.setItem("bookmarks", this.db.bookmark.join(","));
  }
  public isIncludeBookmark(p: Number) {
    return this.db.bookmark.includes(String(p));
  }
  constructor(caller: () => LocalStorageStore) {
    if (caller == LocalStorageStore.getInstance) {
      console.info("create instance of LocalStorageStore");
    } else if (LocalStorageStore.instance) {
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

/*
productsはGoogleスプレッドシート上の道草屋作品DBを取得するためのものです。
https://docs.google.com/spreadsheets/d/1naQXZKxTK0NyHuJK0juqCurruwj3tMqgO5dGUM2LO0w/edit?usp=sharing
*/

import Vue from "vue";
import firebase, { firestoreSimple } from "../firebase/firebase";
import axios from "axios";


const ProductDBurl = "https://script.google.com/macros/s/AKfycbzXYMhKrkOm3NtwqeQMBOJYc4uTz8kIbKMYOAdP0cb_lHB1BhTG8B9yc1CTyDAe_drT/exec";


export interface ProductInfo {
    No: Number,
    title: String,
    release: Date,
    mainAct: Array<String>,
    subAct: Array<String>,
    link: String,
    dalf: String,
    banner: String,
    hints: Array<String>
    img: String,
}

export class ProductInfo implements ProductInfo {
    constructor(No = -1, title = "", mainAct = [""], subAct = [""], link = "", dalf = "", banner = "", hints = [""], img = "") {
        this.No = No;
        this.title = title;
        this.mainAct = mainAct;
        this.subAct = subAct;
        this.link = link;
        this.dalf = dalf;
        this.banner = banner;
        this.img = img;
        this.hints = hints;
    }
}

export class ProductsStore{
    public static instance: ProductsStore;

    public db = new Vue({
        data:{
            products:<Array<ProductInfo>>[]
        }
    })

    public static getInstance():ProductsStore{
        if (!this.instance){
            this.instance = new ProductsStore(ProductsStore.getInstance);
        }
        return this.instance;
    }
    public syncProductDB(){
        axios.get<Array<ProductInfo>>(ProductDBurl).then((res) => {
            this.db.products = res.data;
        });
    }
    constructor(caller: ()=>ProductsStore){
        if (caller == ProductsStore.getInstance){
            console.info("create instance of ProductsStore");
            this.syncProductDB();
        }
        else if (ProductsStore.instance){
            throw new Error("Already created instance of AuthStore. You should use AuthStore.getInstance().")
        }else{
            throw new Error("Constractor args valided illegal. You should use AuthStore.getInstance()")
        }
    }
}

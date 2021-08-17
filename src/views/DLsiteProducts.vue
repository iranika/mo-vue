<template>
  <div>
    result:{{result}}
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import Footer from "../components/Footer.vue";
import axios from "axios";

@Component({
  components: { Footer },
})
export default class DLsiteProducts extends Vue {
  private result = "";
  mounted(){
    const url = "https://script.google.com/macros/s/AKfycbzfu6uBPQPDJwZlDt1Qpa_9GCzOT58t6tlF_vLoQI3IeISx_CaudS05RlaB7AUIOu9QOA/exec";
    axios.get(url + "?ids=RJ3333,RJ4444,RJ5555").then(res=>{
      console.log(res.data);
      this.result = res.data;
    })
  }
}
</script>

<style>

</style>
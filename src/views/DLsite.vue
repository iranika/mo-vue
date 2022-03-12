<template>
  <div class="about">
    <v-card max-width="90%" align-center class="mx-auto my-10">
      <v-card-text>
        DLsiteのページに遷移します。<br>
        数秒経っても移動しない場合は<a :href="href">このリンク</a>からアクセスしてください。
      </v-card-text>
    </v-card>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "dlsite",
  data: () => ({
    href:"https://www.dlsite.com/home/dlaf/=/aid/movue/url/https%3A%2F%2Fwww.dlsite.com%2Fmaniax%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG24350.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"
  }),
  components: {
    Footer
  },
  mounted(){
    //location.href = this.href;
    window.open(this.href, '_blank')
  }
};
</script>

<style scoped>
p {
  text-indent: 1em;
}
</style>

<template>
  <div class="home">
    <div class="content-center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdGDim-yNqk33GifLSD2q2rrpN6eq2Nb5wCMDs0gTF0atyD7g/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.content-center {
  display: flex;
  justify-content: center;
}
</style>
<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  props: {
    page: String,
    lang: String,
  },
  data: () => ({}),
  components: {
    Footer,
  }
};
</script>

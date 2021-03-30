<template>
  <div class="home">
    <Infomation></Infomation>
    <ViewerContent
      :page=page
    ></ViewerContent>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewerContent from "../components/ViewerContent.vue";
import Footer from "../components/Footer.vue";
import Infomation from "../components/Infomation.vue";

export default {
  name: "Home",
  props: {
    page: String
  },
  data: () => ({
  }),
  components: {
    ViewerContent,
    Footer,
    Infomation
  }
};
</script>

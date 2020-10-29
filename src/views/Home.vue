<template>
  <div class="home">
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

export default {
  name: "Home",
  props: {
    page: String
  },
  data: () => ({
  }),
  components: {
    ViewerContent,
    Footer
  }
};
</script>

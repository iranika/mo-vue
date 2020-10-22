<template>
  <div class="home">
    <ViewerContent></ViewerContent>
    <div >Todo: footerコンポーネントを実装する </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewerContent from "../components/ViewerContent.vue";

export default {
  name: "Home",
  data: () => ({
    show: [0,1,2,3,4],
    pages : window.pageData.slice(0,5)
  }),
  components: {
    ViewerContent
  }
};
</script>

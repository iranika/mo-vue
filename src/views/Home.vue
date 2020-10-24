<template>
  <div class="home">
    <ViewerContent></ViewerContent>
    <div>Todo: Footerの実装</div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewerContent from "../components/ViewerContent.vue";

export default {
  name: "Home",
  data: () => ({
  }),
  components: {
    ViewerContent
  }
};
</script>

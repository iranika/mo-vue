<template>
  <div class="home">
    <div 
      v-for="i in show" :key=i
    >
      <img v-for="(_, j) in pages[i].ImagesUrl" :key=j :src="pages[i].ImagesUrl[j]" alt="" width="100%">
    </div>
    <div >Todo: footerコンポーネントを実装する </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    show: [0,1,2,3,4],
    pages : window.pageData.slice(0,5)
  }),
  components: {
  }
};
</script>

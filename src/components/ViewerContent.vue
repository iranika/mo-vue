<template>
<div>
  <div v-for="i in show" :key="i">
    <img
      v-for="(_, j) in pages[i].ImagesUrl"
      :key="j"
      :src="pages[i].ImagesUrl[j]"
      alt=""
      width="100%"
    />
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    show: [0],
    pages : window.pageData,
    bottom: false
  }),
  methods: {
    bottomVisible(){
      const scrollY = window.scrollY;
      const visible = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY + 2 >= pageHeight; // +2 is margin
      //console.log("bottomVisible is fired", {scrollY, visible, pageHeight, bottomOfPage})
      return bottomOfPage || pageHeight < visible
    },
    addContent(addnum = 1){
      if (this.pages.length > this.show.length){
        this.show.push(
          Math.max.apply(null, this.show) + addnum
        )
        if (this.bottomVisible()){
          //this.addContent()
        }
      }else{
        console.log("viewerContent info: show.length is over pages.length")
      }
    },
    onScroll(){
      this.bottom = this.bottomVisible();

    }
  },
  watch:{
    bottom(bottom){
      if (bottom){
        this.addContent()
      }
    }
  },
  created(){
    window.addEventListener('scroll', this.onScroll)
    this.addContent()
  },
  destroyed(){
    window.removeEventListener('scroll', this.onScroll)
  }

};
</script>

<style>
</style>
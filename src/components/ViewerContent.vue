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
  props:{
    page: {
      type: String,
      default: "1",
    }
  },
  data: () => ({
    show : [],
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
      if (this.pages.length -1 > Math.max.apply(null, this.show)){
        this.show.push(
          Math.max.apply(null, this.show) + addnum
        )
      }else{
        console.log("viewerContent info: show.length is over pages.length")
      }
    },
    onScroll(){
      this.bottom = this.bottomVisible();
    },
    setShow(){
      const pageInt = parseInt(this.page)
      console.log(pageInt)
      if (this.page === "latest") {
        this.show.push(this.pages.length - 1)
      }else if (pageInt > 0 && pageInt <= this.pages.length){
        this.show.push(pageInt - 1)
      } else if (pageInt <= 0){
        this.show.push(0)
      } else{
        this.show.push(0)
        console.log("?page query is unknown value")
      }
    },
    InitShow(){
      this.show = []
      this.setShow()
      this.addContent()
    }
  },
  watch:{
    bottom(){
      if (this.bottom){
        this.addContent()
      }
    },
    page(){
      this.InitShow()
    }
  },
  created(){
    window.addEventListener('scroll', this.onScroll)
    this.setShow()
    this.addContent()
  },
  destroyed(){
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>

<style>
</style>
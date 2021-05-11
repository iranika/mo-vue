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
    <div style="display: flex; justify-content: center;">
      <ShareTwitterButton
        :link="CreateShareLinkTwitter(i + 1, pages[i].Title)"
      ></ShareTwitterButton>
      <div style="text-align: center">
        <v-btn rounded x-small v-on:click="scrollTop()" depressed
          >トップに戻る</v-btn
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ShareTwitterButton from "@/components/ShareTwitterButton.vue";

export default {
  props: {
    pageList: {
      type: Array,
      default: ()=> { return [] }
    }
  },
  data: () => ({
    show: [],
    enableBack: false,
    pages: window.pageData,
    bottom: false
  }),
  methods:{
    CreateShareLinkTwitter(num, title) {
      const tw_text = encodeURI(`第${num}話「${title}」`);
      return `https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=${tw_text}&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D${num}`;
      //`<a class="tweetbtn hidden-image" href="https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252Fmo-code%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=${tw_text}&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2Fmo-code%2F%23${pageNum +1}"><span class="label">ツイートする</span></a>`
    },
    scrollTop() {
      scrollTo(0, 0);
    }
  },
  components:{
    ShareTwitterButton
  },
  watch:{
    pageList(){
      console.log(this.pageList)
      this.show = this.pageList;
    }
  }
}
</script>

<style>

</style>
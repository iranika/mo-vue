<template>
  <div>
    <v-card min-height="100" width="95%" style="margin:0 auto;" class="justify-space-between">
      <v-avatar
        v-bind:class="[
          avaterPosition === 'left' ? 'float-left' : 'float-right'
        ]"
        class="avater"
        size="82"
        rounded
      >
        <v-img :src="avater"></v-img>
      </v-avatar>
      <v-card-text style="font-family: niconne" class="text-area">{{name}}<br>{{text}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props:{
    avater: {
      type: String,
      default: "https://pbs.twimg.com/profile_images/1384742457477238784/R_eEQtFX_400x400.jpg"
    },
    avaterPosition: {
      type: String,
      default: "left"
    },
    text: {
      type: String,
      default: "これはさんぷるです\nこれはさんぷるですこれはさんぷるです<br>これはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるですこれはさんぷるです"
    },
    name:{
      type: String,
      default: "せりさん"
    }
  },
  data:()=>({    
  })
};
</script>

<style scoped>

.avater {
  margin: 16px 16px 0px 16px;
}
.text-area {
  white-space: pre-wrap;
  word-wrap: break-word;
}

</style>
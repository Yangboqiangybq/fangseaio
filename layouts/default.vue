<template>
  <div>
    <head-nav/>
    <nuxt/>
  </div>
</template>

<script>
  import HeadNav from '~/components/HeadNav.vue';
  export default {
    components: {
      HeadNav
    }
  }
</script>

<style lang="scss">
  @import "~/assets/tools.scss";
  /*html,body {*/
    /*font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;*/
    /*font-size: 16px;*/
    /*word-spacing: 1px;*/
    /*-ms-text-size-adjust: 100%;*/
    /*-webkit-text-size-adjust: 100%;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*box-sizing: border-box;*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
</style>


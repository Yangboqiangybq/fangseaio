<template>
  <div class="main_item">
    <h1 class="item_title">合作媒体</h1>
    <div class="index_media row">
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
      <div class="item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="img_box">
          <img src="~/static/icon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexMedia"
    }
</script>

<style scoped lang="scss">
  @import "~/assets/tools.scss";
  @include desktop{
    @import "~/assets/index_pc.scss";
  }
  @include tablet{
    @import "~/assets/index_mobile.scss";
  }
</style>

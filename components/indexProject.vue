<template>
  <div class="main_item">
    <h1 class="item_title">{{$t('home.parject_data.title')}}</h1>
    <div class="index_projectmain row">
      <div class="pro_l col-lg-4 col-sm-12 col-md-12 col-xs-12">
        <img src="/project.png" alt="">
      </div>
      <div class="pro_r col-lg-7 col-lg-offset-1 col-sm-12 col-md-12 col-xs-12 row">
        <div class="pro_item col-lg-12 col-sm-12 col-md-12 col-xs-12">
          <!--<p class="item_tt">项目标题</p>-->
          <p class="item_desc" v-html="$t('home.parject_data.desc')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "indexProject",
      data() {
        return {
          parject_data:this.$t('home.parject_data')
        }
      },
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

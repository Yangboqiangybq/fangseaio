<template>
  <div class="banner_box">
    <vue-particles class="particles"
      color="#dedede"
      :particleOpacity="0.7"
        :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <div class="banner_main">
      <img src="~/static/banner_title.png" alt="" class="banner_title">
      <div class="banner_textbox">
        <p class="text_tt">{{ $t('home.banner_data.title').toUpperCase() }}</p>
        <p class="text_desc" v-html="banner_data.desc"></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "indexBanner",
      component:{
        // VueParticles
      },
      data() {
        return {
          banner_data:this.$t('home.banner_data')
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

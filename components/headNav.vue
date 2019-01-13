<template>
  <nav class="head_nav">
    <div class="nav_main">
      <nuxt-link :to="$i18n.path('')" class="Header__Link" exact>
        <img src="~/static/logo.png" alt="" class="logo">
      </nuxt-link>
      <el-select @change="change_lang($route.fullPath)" v-model="lang_" placeholder=" " class="lang_sel">
        <el-option :label="$t('links.english')" :value="$t('links.english')"></el-option>
        <el-option :label="$t('links.chinese')" :value="$t('links.chinese')"></el-option>
      </el-select>
      <!--<nuxt-link v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>-->
        <!--{{ $t('links.english') }}-->
      <!--</nuxt-link>-->
      <!--<nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>-->
        <!--{{ $t('links.chinese') }}-->
      <!--</nuxt-link>-->
    </div>
  </nav>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        lang_:'',
        locale_ : ''
      }
    },
    mounted(){
      if (this.$i18n.locale === 'zh') {
        this.lang_ = this.$t('links.chinese');
      }else {
        this.lang_ = this.$t('links.english');
      }
    },
    methods:{
      change_lang:function (fullpath) {
          if(this.$i18n.locale === 'zh'){
            this.$router.push(`/en${this.$router.fullPath?this.$router.fullPath:''}`)
          }else{
            let url_ = fullpath.replace(/^\/[^\/]+/, '');
            this.$router.push(`/${url_}`)
          }
      }
      //   (locale)=>{
      //   console.log(VueComponent)
      //   // if(locale === 'zh'){
      //   //   this.router.push({path:`/en` + this.$router.fullPath})
      //   // }else{
      //   //   this.router.push({path:this.router.fullPath.replace(/^\/[^\/]+/, '')})
      //   // }
      // }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/tools.scss";
  @include desktop{
    @import "~/assets/head_pc.scss";
  }
  @include tablet{
    @import "~/assets/head_mobile.scss";
  }
</style>
<style lang="scss">

  .lang_sel{
    width: 137px;
    height: 28px;
    float: right;
    margin-top: 18px;
    border-radius: 100px;
    overflow: hidden;
    margin-right: 30px;
    .el-input--suffix{
      height: 28px;
      line-height: 28px;
      .el-input__inner{
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 12px;
        color: #2C717F;
      }
      .el-input__suffix{
        top: -5px;
        color: #2C717F;
        .el-input__icon{
          height: auto;
          &:before{
            color: #2C717F;
          }
        }
      }
    }
  }
</style>

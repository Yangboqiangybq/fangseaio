<template>
  <div class="main_item">
    <h1 class="item_title">{{$t("home.business.title")}}</h1>
    <div class="index_business">
      <!--<div class="business_video">-->
        <!--<video controls>-->
          <!--<source src="~/static/4.mp4">-->
        <!--</video>-->
      <!--</div>-->
      <div class="business_main row">
        <div v-for="(item,index) in businese.data"  :key="index" class="business_item col-lg-12 col-sm-12 col-md-4 col-xs-12">
          <h3 class="item_tt">{{item.title}}</h3>
          <p v-if="item.desc != ''" class="item_desc">{{item.desc}}</p>
          <ul class="item_list">
            <li class="list_it" v-for="(item_list,index1) in item.sublist" :key="index1">
              <span v-if="item_list.subtitle != ''" class="it_tt">{{item_list.subtitle}}</span>
              <ul class="sublist">
                <li v-for="(item_sublist,index2) in item_list.subDesclist" :key="index2">{{item_sublist}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "indexBusiness",
      data(){
        return {
          businese:this.$t("home.business")
        }
      }
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

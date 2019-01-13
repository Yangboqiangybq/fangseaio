<template>
  <div class="main_item" style="width: 100%;">
    <h1 class="item_title" style="max-width: 1200px;margin: 0 auto 0.67em;">{{estatedata.title}}</h1>
    <div class="index_estate">
      <div class="time-axis-main">
        <div class=" time-axis-wrapper" id="axis_wrapper" style="">
          <happy-scroll color="rgba(0,0,0,0.5)" size="8" hide-vertical resize v-if="!if12">
            <div class="time-axis-scroll" style="width: 1200px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
              <div class="time-axis">
                <div class="time-axis-line"></div>
                <div class="axis-item" v-for="(item,index) in estatedata.data" :key="index">
                  <i class="axis-dot"></i>
                  <div class="axis-info">
                    <span class="axis-time"><img :src="item.url" alt=""></span>
                    <span class="axis-txt">{{item.desc}}</span>
                  </div>
                </div>
              </div>
            </div>
          </happy-scroll>
          <div v-else class="time-axis-scroll" style="width: 1200px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
            <div class="time-axis">
              <div class="time-axis-line"></div>
              <div class="axis-item" v-for="(item,index) in estatedata.data" :key="index">
                <i class="axis-dot"></i>
                <div class="axis-info">
                  <span class="axis-time"><img :src="item.url" alt=""></span>
                  <span class="axis-txt">{{item.desc}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "indexEstate",
      data(){
        return {
          estatedata:this.$t("home.estate"),
          if12:true,
        }
      },
      mounted(){
        if (document.body.clientWidth >= 1200) {
          this.if12 = true;
        }else {
          this.if12 = false;
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

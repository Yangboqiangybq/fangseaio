<template>
  <div class="main_item">
    <h1 class="item_title">{{fundsdata.title}}</h1>
    <div class="index_funds">
      <div class="chart_box" id="main">

      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
      name: "indexFunds",
      data(){
        return {
          colors:['#393939','#f5b031','#fad797','#59ccf7','#c3b4df'],
          fundsdata:this.$t("home.funds")
        }
      },
      mounted(){
        var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
        myChart.setOption({
          title : {
            text: '',
            subtext: '',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          // },
          color:['#ab959d','#7977a2','#808ca6','#a1a9b2','#dddddd'],
          series : [
            {
              name: this.fundsdata.title,
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:this.fundsdata.data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
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

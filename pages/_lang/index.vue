<template>
  <div class="index_box">
    <index-banner/>
    <div class="index_main">
      <index-project/><!--项目介绍-->
      <index-business/><!--商业模式-->
      <index-timeline/><!--进展规划-->
      <index-estate/><!--房产通证-->
      <index-bulletin/><!--网页公告-->
      <index-team/><!--团队-->
      <index-agency/><!--投资机构-->
      <index-partner/><!--合作伙伴-->
      <index-media/><!--合作媒体-->
      <index-funds/><!--资金分配-->
    </div>
  </div>
</template>

<script>
  import indexBanner from '~/components/indexBanner';
  import indexProject from '~/components/indexProject'
  import indexBusiness from '~/components/indexBusiness'
  import indexBulletin from '~/components/indexBulletin'
  import indexTeam from '~/components/indexTeam'
  import indexAgency from '~/components/indexAgency'
  import indexPartner from '~/components/indexPartner'
  import indexMedia from '~/components/indexMedia'
  import indexFunds from '~/components/indexFunds'
  import indexTimeline from '~/components/indexTimeline'
  import indexEstate from '~/components/indexEstate'
export default {
  head() {
    return {
      title: this.$t('home.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('home.description') }
      ],
    }
  },
  components: {
    indexBanner,
    indexProject,
    indexBusiness,
    indexBulletin,
    indexTeam,
    indexAgency,
    indexPartner,
    indexMedia,
    indexFunds,
    indexTimeline,
    indexEstate
  },
  data(){
    return {
      SEPARATION:100,
      AMOUNTX:30,
      AMOUNTY:30,
      container:'',
      camera:'',
      scene:'',
      renderer:'',
      particles:0,
      particle:0,
      count:0,
      mouseX:85,
      mouseY:-342,
      windowHalfX:0,
      windowHalfY:0,
    }
  },
  mounted() {
    // this.windowHalfX = window.innerWidth / 2;
    // this.windowHalfY = window.innerHeight / 2;
    // this.init();
    // this.animate()
  },
  methods: {
    init() {
      this.container = document.createElement("div");
      document.body.appendChild(this.container);
      this.camera = new THREE.PerspectiveCamera(
        120,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.container.style.cssText = "width:100%;overflow:hidden;position:absolute;top:4000px;left:0;opacity:0.9;z-index:2";
      if(window.innerWidth<990){
        this.container.style.cssText += "top:5000px"
      }
      this.camera.position.z = 1000;

      this.scene =new THREE.Scene();

      this.particles = new Array();

      var PI2 = Math.PI * 2;
      var material =new THREE.ParticleCanvasMaterial({
        color: 0xe1e1e1,
        program: function(context) {
          context.beginPath();
          context.arc(0, 0, 0.6, 0, PI2, true);
          context.fill();
        }
      });

      var i = 0;

      for (var ix = 0; ix < this.AMOUNTX; ix++) {
        for (var iy = 0; iy < this.AMOUNTY; iy++) {
          this.particle = this.particles[i++] = new THREE.Particle(material);
          this.particle.position.x = ix * this.SEPARATION - this.AMOUNTX * this.SEPARATION / 2;
          this.particle.position.z = iy * this.SEPARATION - this.AMOUNTY * this.SEPARATION / 2;
          this.scene.add(this.particle);
        }
      }

      this.renderer =new THREE.CanvasRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.appendChild(this.renderer.domElement);

      document.addEventListener("mousemove", this.onDocumentMouseMove, false);
      document.addEventListener("touchstart", this.onDocumentTouchStart, false);
      document.addEventListener("touchmove",this. onDocumentTouchMove, false);

      //

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize() {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onDocumentMouseMove(event) {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    },
    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      }
    },
    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      }
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.render();
    },
    render() {
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position);

      var i = 0;

      for (var ix = 0; ix < this.AMOUNTX; ix++) {
        for (var iy = 0; iy < this.AMOUNTY; iy++) {
          this.particle = this.particles[i++];
          this.particle.position.y =
            Math.sin((ix + this.count) * 0.3) * 50 +
            Math.sin((iy + this.count) * 0.5) * 50;
          this.particle.scale.x = this.particle.scale.y =
            (Math.sin((ix + this.count) * 0.3) + 1) * 2 +
            (Math.sin((iy + this.count) * 0.5) + 1) * 2;
        }
      }

      this.renderer.render(this.scene, this.camera);

      this.count += 0.1;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/tools.scss";
  @include desktop{
    @import "~/assets/index_pc.scss";
  }
  @include tablet{
    @import "~/assets/index_mobile.scss";
  }
</style>
<style>
  .happy-scroll-strip--horizontal,.happy-scroll-strip--vertical{
    z-index: 999;
  }
</style>

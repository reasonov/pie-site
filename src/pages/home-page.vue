<template>
  <div class="home-page" ref="homePage">

    <div :class="{'home-page-white': changePageAnimate}"></div>

    <home-caption-pie :pageLoaded="pageLoaded" :changePageAnimate="changePageAnimate" />

    <home-pie-image :pageLoaded="pageLoaded" :changePageAnimate="changePageAnimate" />

    <div class="home-page__middle">
      <span class="page__number" :class="{'page__number--loaded': pageLoaded}">01</span>
      <div class="home-page__right-side">
        <p class="home-page__text" :class="{'home-page__text--loaded': pageLoaded}">лучший пирог тот,<br> что приготовлен с любовью</p>
        <button
          @click="pageChange('salesPage')"
          class="to-shop__button home__to-shop"
          :class="[{'to-shop__button--loaded': pageLoaded}, {'home-page-change': changePageAnimate}]"
        >
          <span>в магазин</span>

          <to-shop-icon />

        </button>
      </div>
    </div>

    <div class="social-networks">
      <a href="#">
        <img src="../assets/images/whatsapp.png" alt="whatsapp">
      </a>
      <a href="#">
        <img src="../assets/images/instagram.png" alt="instagram">
      </a>
    </div>

  </div>
</template>

<script>
import homeCaptionPie from '../components/visual-components/home-caption-pie.vue';
import homePieImage from '../components/visual-components/home-pie-image.vue';
import toShopIcon from '../components/icons/to-shop-icon.vue';

export default {
  components: {
    homeCaptionPie,
    homePieImage,
    toShopIcon
  },
  data() {
    return {
      pageLoaded: false,
      changePageAnimate: false
    }
  },
  methods: {
    pageChange(name) {

      this.changePageAnimate = true;

      if(name == 'salesPage') {
        setTimeout(()=> {

          this.$router.push('/sales');
          this.changePageAnimate = false;

        }, 1300);
      }

    }
  },
  mounted() {
    this.pageLoaded = true;
  }
}
</script>

<style src="../assets/css/home/home-animation.css"></style>
<style src="../assets/css/home/home-desktop.css"></style>
<style src="../assets/css/home/home-middle.css"></style>
<style src="../assets/css/home/home-mobile.css"></style>

<template>
  <div class="sales-page">
    <h3 class="sales__caption" :class="{'sales__caption--loaded': pageLoaded}" ref="salesPage">
      Самый вкусный
      <span class="sales__caption-background" :class="{'sales__caption-background--loaded': pageLoaded}">магазин</span>
    </h3>
    <div class="sales__list-slider" ref="sliderWrapper">

      <slider-component
        sliderListClass="sales__list"
        :listLength="sliderListLength"
        :sliderWrapperSize="sliderWrapperSize"
        :slideSize="sliderItemSize"
        :slideChanges="currentSlide"
      >

        <li
          class="sales__item"
          :class="[
            {'item-animate-next': (animationItem >= index && itemStyle < 0)},
            {'item-animate-prev': -animationItem >= index && itemStyle > 0}
           ]"
          :style="'transform: translateX(' + itemStyle + 'px)'"
          :key="index"
          v-for="(item, index) in salesItems"
          ref="sliderItem"
        >

          <router-link :to="'/pie/' + index" class="sales__item__link">
            <img class="sales__image" :src="item.image" alt="pie">
            <span class="sales__item__name" :class="{'sales__item__name--loaded': pageLoaded}">{{ item.name }}</span>
          </router-link>

        </li>

      </slider-component>

    </div>
    <ul class="sales__eclipce-list">
      <li
        class="sales__eclipce-item"
        :class="{'sales__eclipce-item--active': currentSlide == index}"
        v-for="index in numberOfSlides"
        :key="index"
        @click="slideChange(index)"
      >
      </li>

    </ul>
  </div>
</template>

<script>
import sliderComponent from '../components/slider-component.vue';

export default {
  components: {
    sliderComponent
  },
  data() {
    return {
      pageLoaded: false,

      sliderWrapperSize: 0,
      sliderItemSize: 0,
      salesPageSize: 0,
      currentSlide: 1,

      itemStyle: -1300,
      animationItem: 0,
      interval: null
    }
  },
  computed: {
    sliderListLength() {
      return this.salesItems.length;
    },

    salesItems() {
      return this.$store.state.pieList;
    },

    itemsInWrapper() {
      return Math.round(this.sliderWrapperSize / this.sliderItemSize);
    },

    numberOfSlides() {
      if(this.sliderWrapperSize) {
        return Math.ceil(this.salesItems.length / this.itemsInWrapper);
      }
      return 0;
    }
  },
  methods: {
    slideChange(data) {
      if(this.itemStyle == 0) {
        this.currentSlide = data;
      }
      return;
    },
    calcSliderSizes() {
      this.sliderWrapperSize = this.$refs.sliderWrapper.clientWidth;
      this.sliderItemSize = this.$refs.sliderItem[0].clientWidth;
      this.salesPageSize = this.$refs.salesPage.clientWidth;
    },
    nextAnimationItem(data) {
      this.interval = setInterval(()=> {
        this.animationItem += data;
      }, 200);
    },

    newClearInterval() {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  watch: {
    currentSlide(oldVal, newVal) {
      if(newVal < oldVal) {
        this.itemStyle = -this.sliderWrapperSize;
        this.nextAnimationItem(1);
      }
      else {
        this.itemStyle = this.sliderWrapperSize;

        this.nextAnimationItem(-1);
      }

    },
    animationItem() {
      if(this.animationItem >= 8) {
        this.newClearInterval();

        setTimeout(()=> {
          this.itemStyle = 0;
          this.animationItem = 0;
        }, 2000)

        if(this.pageLoaded) {
          setTimeout(()=> {
            this.animationItem = 0;
            this.pageLoaded = false;
          }, 2000)
        }

      }
      else if(this.animationItem < -8) {
        this.newClearInterval();

        setTimeout(()=> {
          this.itemStyle = 0;
          this.animationItem = 0;
        }, 2000)

      }
    }
  },
  mounted() {
    setTimeout(()=> {
      this.calcSliderSizes();
    }, 1000);

    this.nextAnimationItem(1);
    this.pageLoaded = true;
  }
}
</script>

<style src="../assets/css/sales/sales-animation.css"></style>
<style src="../assets/css/sales/sales-desktop.css"></style>
<style src="../assets/css/sales/sales-middle.css"></style>
<style src="../assets/css/sales/sales-mobile.css"></style>

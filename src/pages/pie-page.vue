<template>
  <div class="pie-page">
    <router-link class="pie__go-back" :to="{ name: 'salesPage' }">назад</router-link>
    <div class="pie__image" :style="pieImage" alt="pie"></div>
    <div class="pie__main">
      <h3 class="pie__caption">{{ pieList[pieId].name }}</h3>
      <span class="pie__params">{{ pieList[pieId].price }} Р - {{ pieList[pieId].weight }} г</span>
      <p class="pie__slogan">сделано из натуральных продуктов</p>
      <p class="pie__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
      <p class="pie__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut
      </p>
      <button class="pie__order" @click="newCart">
        заказать
        <to-shop-icon />
      </button>
    </div>

    <transition name="buyPopup">
      <buy-popup v-show="popupAnimate && !alreadyBought" />
    </transition>

    <transition name="buyPopup">
      <already-bought-popup v-show="popupAnimate && alreadyBought" />
    </transition>

  </div>
</template>

<script>
import toShopIcon from '../components/icons/to-shop-icon.vue';
import buyPopup from '../components/visual-components/buy-popup.vue';
import alreadyBoughtPopup from '../components/visual-components/already-bought-popup.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    toShopIcon,
    buyPopup,
    alreadyBoughtPopup
  },
  data() {
    return {
      popupAnimate: false,
      alreadyBought: false
    }
  },
  computed: {
    pieList() {
      return this.$store.state.pieList;
    },
    pieId() {
      return this.$route.params['pieId'];
    },
    pieImage() {
      return 'background-image: url(' + require('../assets/images/pieMain' + this.pieId + '.png') + ')';
    }
  },
  methods: {
    ...mapMutations([
      'selectPie'
    ]),
    newCart() {
      this.popupAnimate = true;
      this.selectPie(this.pieId);

      setTimeout(()=> {
        this.alreadyBought = true;
        this.popupAnimate = false;
      }, 2000);
    }
  }
}
</script>

<style src="../assets/css/pie/pie-desktop.css"></style>
<style src="../assets/css/pie/pie-middle.css"></style>
<style src="../assets/css/pie/pie-mobile.css"></style>

<style lang="css" scoped>
  .buyPopup-enter-active, .buyPopup-leave-active {
    transition: .5s all ease;
  }

  .buyPopup-enter, .buyPopup-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
</style>

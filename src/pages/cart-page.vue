<template lang="html">
  <div class="cart-page">
    <h2 class="cart__caption">Корзина</h2>
    <div class="cart__wrapper">
      <ul class="cart__list">
        <li class="cart__item-wrapper" v-for="(item, index) in cartProduct" :key="index">
          <cart-item :currentItem="item" :currentIndex="index" @sumPrice="takeSumPrice($event)" />
        </li>
      </ul>
      <div class="cart__scroll" v-show="cartProduct.length >= 3">
        <span class="scroll__eclipse"></span>
      </div>
      <div class="cart__request">
        <span class="cart__request__header">Итого:</span>
        <span class="cart__request__price">
          {{ fullSum }} <span class="request__price__valute">РУБ</span>
        </span>
        <form class="cart__request__form" method="post">
          <input class="request__input request__name" type="text" placeholder="Имя" v-if="windowWidth > 600">
          <input class="request__input request__phone" type="text" placeholder="Телефон" v-if="windowWidth > 600">
          <router-link tag="button" to="/details" class="to-shop__button request__submit">Заказать</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from '../components/cart-item.vue';

export default {
  components: {
    cartItem
  },
  data() {
    return {
      pieNumber: 1,
      sumPrice: [],
      fullSum: 0
    }
  },
  computed: {
    pieList() {
      return this.$store.state.pieList;
    },

    cartProduct() {
      return this.$store.getters.cartProduct;
    },

    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    takeSumPrice(data) {

      if(data[1] >= this.sumPrice.length) {
        this.sumPrice.push(data[0]);
      }

      this.sumPrice[data[1]] = data[0];

      this.fullSum = this.sumPrice.reduce((partial_sum, a) => partial_sum + a,0);
    }
  }
}
</script>

<style src="../assets/css/cart/cart-desktop.css"></style>
<style src="../assets/css/cart/cart-middle.css"></style>
<style src="../assets/css/cart/cart-mobile.css"></style>

<style lang="css" scoped>

  @media (min-width: 0px) and (max-width: 1250px) {

    /* .cart-page {
      padding-bottom: 75px;
    }

    .cart__wrapper {
      flex-wrap: wrap;
    }

    .cart__request {
      margin-left: calc(100% - 300px);
    }
  }

  @media (min-width: 750px) and (max-width: 850px) {
    .cart__item {
      width: 550px;
    }
  }

  @media (min-width: 0px) and (max-width: 750px) {
    .cart__item {
      width: 450px;
    } */
  }
</style>

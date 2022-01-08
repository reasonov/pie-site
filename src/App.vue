<template>
  <div id="app">
    <header>
      <router-link class="header__logo" :to="{ name: 'homePage' }">
        <span class="logo__word1">Tasty</span>
        <span class="logo__word2">Pie</span>
      </router-link>

      <ul class="header__nav">
        <li>
          <router-link class="header__nav__item" to="/sales">На заказ</router-link>
        </li>
        <li>
          <router-link class="header__nav__item" to="/sales">Распродажа</router-link>
        </li>
        <li>
          <router-link class="header__nav__item" to="/sales">Магазин</router-link>
        </li>
      </ul>

      <router-link class="header__card" to="/cart">
        <span class="header__card__text">корзина</span>
        <img src="./assets/images/card-icon.png" alt="card">
        <span class="product-number">{{ cartProduct.length }}</span>
      </router-link>

    </header>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    cartProduct() {
      return this.$store.getters.cartProduct;
    }
  },
  methods: {
    ...mapMutations([
      'resizeWindow'
    ])
  },
  mounted() {
    this.resizeWindow(document.documentElement.clientWidth);

    window.addEventListener('resize', ()=> {
      this.resizeWindow(document.documentElement.clientWidth);
    });
  },
  beforeDestroyed() {
    window.removeEventListener('resize');
  }
}
</script>

<style src="./assets/fonts/font.css"></style>
<style src="./assets/css/app/app-desktop.css"></style>
<style src="./assets/css/app/app-middle.css"></style>
<style src="./assets/css/app/app-mobile.css"></style>

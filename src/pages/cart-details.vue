<template lang="html">
  <div class="cart-details">
    <div class="details__wrapper">

      <div class="details__main">

        <input class="request__input request__name" type="text" placeholder="Имя" v-if="windowWidth <= 600">
        <input class="request__input request__phone" type="text" placeholder="Телефон" v-if="windowWidth <= 600">

        <div class="details__delivery">
          <h3 class="details__caption">Доставка</h3>
          <ul class="details__list details__delivery__list">

            <li ckass="details__item details__delivery__item" v-for="(item, index) in deliveryList" :key="index" @click="selectItem('list0', index)">
              <span class="details__item__checkbox" :class="{'details__checkbox--active': activeCheckbox.list0 == index}"></span>
              <div class="delivery__section">
                <span class="details__item__name">{{ item }}</span>
                <input class="delivery__address" type="text" placeholder="Куда" v-if="index == 0">
              </div>
            </li>

          </ul>
        </div>

        <div class="details__delivery">
          <h3 class="details__caption">Оплата</h3>
          <ul class="details__list details__pay__list">

            <li ckass="details__item details__pay__item" v-for="(item, index) in payList" :key="index" @click="selectItem('list1', index)">
              <span class="details__item__checkbox" :class="{'details__checkbox--active': activeCheckbox.list1 == index}"></span>
              <span class="details__item__name">{{ item }}</span>
            </li>

          </ul>
        </div>
      </div>

      <router-link class="details__submit to-shop__button" to="/">Заказать</router-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payList: [
        'Оплата онлайн',
        'Картой при получении',
        'Наличными при получении'
      ],
      deliveryList: [
        'Курьер',
        'Самовывоз'
      ],
      activeCheckbox: {
        list0: 0,
        list1: 0
      },
    }
  },
  methods: {
    selectItem(list, item) {
      this.activeCheckbox.[list] = item;
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
}
</script>

<style src="../assets/css/details/details-desktop.css"></style>
<style src="../assets/css/details/details-middle.css"></style>
<style src="../assets/css/details/details-mobile.css"></style>

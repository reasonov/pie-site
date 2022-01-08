<template lang="html">
  <div class="cart__item">
    <img :src="pieList[currentItem].image" alt="pie">
    <div class="cart__item__center">
      <h4 class="cart__item__name">{{ pieList[currentItem].name }}</h4>
      <span class="cart__item__weight">{{ pieList[currentItem].weight }} Г</span>
      <div class="cart__toggler-wrapper">
        <button class="cart__toggler" @click="pieCounter(-1)">-</button>
        <span class="cart__item__number">{{ pieNumber }} шт</span>
        <button class="cart__toggler" @click="pieCounter(1)">+</button>
      </div>
    </div>
    <span class="cart__item__price">{{ sumPrice }} руб</span>
  </div>
</template>

<script>
export default {
  props: {
    currentItem: {
      type: Number,
      required: false
    },
    currentIndex: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      pieNumber: 1
    }
  },
  computed: {
    pieList() {
      return this.$store.state.pieList;
    },

    cartProduct() {
      return this.$store.getters.cartProduct;
    },

    sumPrice() {
      return this.pieList[this.currentItem].price * this.pieNumber
    }
  },
  methods: {
    pieCounter(data) {
      if(this.pieNumber == 0 && data == -1) {
        return;
      }
      this.pieNumber += data;
    }
  },
  watch: {
    sumPrice() {
      this.$emit('sumPrice', [this.sumPrice, this.currentIndex]);
    }
  },
  created() {
    this.$emit('sumPrice', [this.sumPrice, this.currentIndex]);
  }
}
</script>

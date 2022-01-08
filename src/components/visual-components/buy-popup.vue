<template lang="html">
  <div class="buy-popup">
    <span class="buy-popup__caption">Товар добавлен в корзину</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .buy-popup {
    position: fixed;
    right: 100px;
    bottom: 100px;

    padding: 50px 25px;

    border-radius: 20px;
    border: 2px solid #3db13d;

    background-color: #54de54;
  }

  .buy-popup__caption {
    font-family: 'Lighthaus', serif;
    font-size: 20px;
    color: #fff;
  }
</style>

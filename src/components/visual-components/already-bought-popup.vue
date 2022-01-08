<template lang="html">
  <div class="already-bought-popup">
    <span class="already-bought-popup__caption">Товар уже добавлен</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .already-bought-popup {
    position: fixed;
    right: 100px;
    bottom: 100px;

    padding: 50px 25px;

    border-radius: 20px;
    border: 2px solid #a20707;

    background-color: #ff5959;
  }

  .already-bought-popup__caption {
    font-family: 'Lighthaus', serif;
    font-size: 20px;
    color: #fff;
  }
</style>

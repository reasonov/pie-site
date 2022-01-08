<template lang="html">
  <h1 class="home-page__caption" :class="[{'home-page__caption--loaded': pageLoaded}, {'home-page-change': changePageAnimate}]">Пироги</h1>
</template>

<script>
export default {
  props: {
    pageLoaded: {
      type: Boolean,
      required: false
    },
    changePageAnimate: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
  @media (min-width: 1351px) and (max-width: 1580px) {
    .home-page__caption {
      font-size: 375px;
    }
  }

  @media (min-width: 1051px) and (max-width: 1350px) {
    .home-page__caption {
      font-size: 295px;
    }
  }

  @media (min-width: 826px) and (max-width: 1050px) {
    .home-page__caption {
      font-size: 220px;
    }
  }

  @media (min-width: 651px) and (max-width: 825px) {
    .home-page__caption {
      font-size: 160px;
    }
  }

  @media (min-width: 501px) and (max-width: 650px) {
    .home-page__caption {
      font-size: 110px;
    }
  }

</style>

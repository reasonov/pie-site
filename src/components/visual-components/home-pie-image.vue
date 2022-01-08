<template lang="html">
  <div
    :class="[{'pie-icon--loaded': pageLoaded}, {'home-page-change': changePageAnimate}, 'pie-icon']"
  >
  </div>
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

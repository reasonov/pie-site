<template lang="html">

  <ul
    :class="sliderListClass"
    :style="sliderStyleMove"
  >

    <slot></slot>

  </ul>

</template>

<script>

//В родителе необходимо поместить внутрь компонента тег li,
//задать ему ref, так же создать свойство в data, которое будет содержать this.$refs.name[0].clientWidth вычисляемое в mounted();

export default {
  props: {
    listLength: {           //Количество элементов в слайдере **
      type: Number,
      required: true
    },
    sliderWrapperSize: {
      type: Number,
      required: true
    },
    slideSize: {           //Ширина элемента слайдера **
      type: Number,
      required: true
    },
    sliderListClass: {            //Класс задаваемый ul из родителя
      type: String,
      required: false
    },
    slideChanges: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      margin: 35
    }
  },

  computed: {

    sliderStyleMove() {                                                   //Вычисление стиля для прокрутки слайдера
      return 'transform: translateX(' + this.sliderPosition + 'px)';
    },

    sliderPosition() {                                // Сдвиг слайдера
      return (this.slideChanges - 1) * this.sliderWrapperSize;
    },

    scrollSize() {                      //На сколько нужно прокручивать слайдер
      return (this.slideSize + this.margin) * 4;
    }
  }
}
</script>

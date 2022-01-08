import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: 0,
    pieList: [
      {
        name: 'Грушевый пирог',
        weight: 800,
        price: 1200,
        image: require('@/assets/images/pie1.png'),
        selected: false
      },
      {
        name: 'Ежевичный пирог',
        weight: 1000,
        price: 1600,
        image: require('@/assets/images/pie2.png'),
        selected: false
      },
      {
        name: 'Лимонный пирог',
        weight: 600,
        price: 1100,
        image: require('@/assets/images/pie3.png'),
        selected: false
      },
      {
        name: 'Брусничный пирог',
        weight: 850,
        price: 1000,
        image: require('@/assets/images/pie4.png'),
        selected: false
      },
      {
        name: 'Грушевый пирог',
        weight: 650,
        price: 900,
        image: require('@/assets/images/pie1.png'),
        selected: false
      },
      {
        name: 'Ежевичный пирог',
        weight: 1200,
        price: 2100,
        image: require('@/assets/images/pie2.png'),
        selected: false
      },
      {
        name: 'Лимонный пирог',
        weight: 750,
        price: 1150,
        image: require('@/assets/images/pie3.png'),
        selected: false
      },
      {
        name: 'Брусничный пирог',
        weight: 950,
        price: 1050,
        image: require('@/assets/images/pie4.png'),
        selected: false
      }
    ]
  },
  mutations: {
    resizeWindow(state, data) {
      state.windowWidth = data;
    },
    selectPie(state, data) {
      state.pieList[data].selected = true;
    }
  },
  getters: {
    cartProduct(state) {
      let numberOfSelected = [];

      for(let i = 0; i < state.pieList.length; i++) {
        if(state.pieList[i].selected) {
          numberOfSelected.push(i);
        }
      }

      return numberOfSelected;
    }
  }
})

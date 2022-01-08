import VueRouter from 'vue-router';
import home from './pages/home-page.vue';
import sales from './pages/sales-page.vue';
import pie from './pages/pie-page.vue';
import cartPage from './pages/cart-page.vue';
import cartDetails from './pages/cart-details.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
      name: 'homePage'
    },
    {
      path: '/sales',
      component: sales,
      name: 'salesPage'
    },
    {
      path: '/pie/:pieId',
      component: pie,
      name: 'piePage'
    },
    {
      path: '/cart',
      component: cartPage,
      name: 'cartPage'
    },
    {
      path: '/details',
      component: cartDetails,
      name: 'cartDetails'
    }
  ],
  mode: 'hash',
  base: '/'
})

import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from '@/plugins/vuetify';
import Vue2Filters from 'vue2-filters';
import { store } from './store/index';
import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;
Vue.use(Vue2Filters, VueClipboard);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');

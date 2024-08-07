import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'; // 引入router配置

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

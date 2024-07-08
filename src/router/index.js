import Vue from 'vue';
import Router from 'vue-router';
 
// 引入组件
import Help from '@/view/help';
import Home from '@/view/home';
 
// 使用Vue Router插件
Vue.use(Router);
 
// 创建Router实例并配置路由
export default new Router({
  base: '/',
  mode: 'history', // 使用HTML5 History模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    
    // 添加更多的路由规则...
  ]
});

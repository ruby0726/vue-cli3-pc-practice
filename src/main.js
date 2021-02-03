import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.less";
import localForage from 'localforage/src/localforage'
window.localForage = localForage

// 适配flex，文件放在src/common目录下
import "@/common/flexible.js";

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

// import "./libs/rem.js";

Vue.config.productionTip = false;

// 注册全局指令'v-focus'
Vue.directive("focus", {
  // 当被绑定的元素插入到dom中时
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  }
})

// 注册全局组件
Vue.component('my-slot', {
  render(h) {
    const child = h('div', {
      attrs: {id: '11'},
      domProps: { innerHTML: 'this is child' }
    })
    return h(
      'div',
      [
        child,
        this.$slots.slot1,
        this.$slots.slot2
      ]
    )
  }

})

import Message from '@/components/Message/index.js'
Vue.use(Message)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import footerStatus from "./modules/footerStatus";
import collection from "./modules/collection";
import storagePlugins from "./plugins/storagePlugins"

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [storagePlugins],
  //要设置的全局访问的state对象
  state: {
    // 初始属性值
    showFooter: true,
    changableNum: 0
  },
  //实时监听state值的变化(最新状态)
  getters: {
    isShow: state => state.showFooter
  },
  // 只能执行同步方法
  mutations: {
    show(state) {
      state.showFooter = true;
    },
    hide(state) {
      state.showFooter = false;
    },
    addNum(state, sum) {
      state.changableNum += sum;
    }
  },
  //自定义触发mutations里函数的方法，context与store实例具有相同方法和属性
  // actions可以执行异步方法
  actions: {
    async showFooter(context) {
      await context.commit("show");
      await console.log(111);
    },
    hideFooter(context) {
      context.commit("hide");
    },
    getNewNum(context, num) {
      context.commit("addNum", num);
    }
  },
  modules: {
    footerStatus,
    collection
  }
});

export default store;

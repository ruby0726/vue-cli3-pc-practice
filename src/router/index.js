import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// 他就是把你给他的东西调用了一遍
// 如果你给他的是一个方法，那么他就直接执行这个方法
// 如果有一个install属性，那么他就会执行这个install
Vue.use(VueRouter);

// function a() {
//   console.log(1);
// }
// a.install = function(vue) {
//   console.log(vue.util);
//   // vue里面一系列的api
//   //实际上 :    全局混入vue实例
//   vue.mixin({
//     data() {
//       return {
//         c: "this is mixin in"
//       };
//     },
//     methods: {},
//     // 生命周期注入
//     created: function() {
//       console.log(this);
//     }
//   });
// };
// Vue.use(a);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    props: { newsletterPopup: false },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/coll",
    name: "coll",
    component: () =>
      import(/* webpackChunkName: "coll" */ "../views/coll/index.vue")
  },
  {
    path: "/coll/:type/:id?",
    name: "collInfo",
    props: true,
    component: () =>
      import(/* webpackChunkName: "coll" */ "../views/coll/Info.vue")
  },
  {
    path: "/payment",
    name: "payment",
    component: () =>
      import(/* webpackChunkName: "payment" */ "../views/payment/index.vue")
  },
  {
    path: "/render",
    name: "render",
    component: () =>
      import(/* webpackChunkName: "render" */ "../views/render/index2.vue")
  },
  {
    path: "/key",
    name: "key",
    component: () =>
      import(/* webpackChunkName: "key" */ "../views/key/index.vue")
  },
  {
    path: "/testPub",
    name: "testPub",
    component: () =>
      import(/* webpackChunkName: "testPub" */ "../views/testPub/index.vue")
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/upload&dowload/index.vue")
  },
  {
    path: "/iframe",
    name: "iframe",
    component: () =>
      import(/* webpackChunkName: "iframe" */ "../views/iframeDemo/index.vue")
  },
  {
    path: "/proInje",
    name: "proInje",
    component: () =>
      import(/* webpackChunkName: "proInje" */ "../views/provide&inject/parent.vue")
  },
  {
    path: "/stylus-demo",
    name: "stylusDemo",
    component: () =>
      import(/* webpackChunkName: "stylus-demo" */ "../views/stylus-demo/index.vue")
  },
  {
    path: "/big-screen",
    name: "bigScreen",
    component: () =>
      import(/* webpackChunkName: "big-screen" */ "../views/big-screen.vue")
  },
  {
    path: "/vModelDemo",
    name: "vModelDemo",
    component: () =>
      import(/* webpackChunkName: "vModelDemo" */ "../views/vModelDemo/parent.vue")
  },
  {
    path: "/vDirectiveDemo",
    name: "vDirectiveDemo",
    component: () =>
      import(/* webpackChunkName: "vDirectiveDemo" */ "../views/vDirectiveDemo/index.vue")
  },
  {
    path: "/canvas",
    name: "canvas",
    component: () =>
      import(/* webpackChunkName: "canvas" */ "../views/canvas/index.vue")
  },
  {
    path: "/waterfall",
    name: "waterfall",
    component: () =>
      import(/* webpackChunkName: "waterfall" */ "../views/waterfall/index.vue")
  },
  {
    path: "/lazyList",
    name: "lazyList",
    component: () =>
      import(/* webpackChunkName: "lazyList" */ "../views/lazyList/index.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../components/属性穿透/A.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

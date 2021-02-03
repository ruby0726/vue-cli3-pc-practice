<template>
  <div>
    <button @click="showFooter">显示</button>
    <button @click="hideFooter">隐藏</button>
    <div class="redBox" v-if="isShow">
      我是用来显示隐藏的
    </div>
    <hr />
    <ul v-for="(item, index) in collects" :key="index">
      <li>{{ item }}</li>
    </ul>
    <button class="joinStatus" @click="invokePushItems(1)">加入收藏列</button>
    <button @click="toAdd">跳转到新增页</button>
    <button @click="toEdit">跳转到编辑页</button>
    <Info />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Info from "./Info";
export default {
  name: "coll",
  data() {
    return {};
  },
  components: {
    Info
  },
  computed: {
    //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
    ...mapState({
      //里面定义的showFooter是指footerStatus.js里state的showFooter
      isShow: state => state.footerStatus.showFooter
    }),
    ...mapGetters("collection", {
      collects: "renderCollects"
    }),
    ...mapGetters("footerStatus", {
      isShow: "isShow"
    })
    //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    /*  //footerStatus指的是modules文件夹下的footerStatus.js模块
        //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
        //第二个isShow是对应的footerStatus.js里的getters里的isShow
      */
  },
  methods: {
    // showFooter() {
    //   this.$store.dispatch("footerStatus/showFooter");
    // },
    // hideFooter() {
    //   this.$store.dispatch("footerStatus/hideFooter");
    // },
    ...mapActions("footerStatus", ["showFooter", "hideFooter"]),
    //collection是指modules文件夹下的collection.js
    //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
    ...mapActions("collection", ["invokePushItems"]),
    toAdd() {
      this.$router.push({
        name: "collInfo",
        params: {
          type: "add"
        }
      });
    },
    toEdit() {
      this.$router.push({
        name: "collInfo",
        params: {
          type: "edit"
        }
      });
    }
  }
};
</script>

<style>
.redBox {
  width: 100px;
  height: 100px;
  font-size: 26px;
  background-color: red;
  margin-top: 50px;
  margin-left: 400px;
}
</style>

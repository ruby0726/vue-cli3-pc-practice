<template>
  <div class="about">
    <div class="box1">{{ changableNum }}</div>
    <button @click="addNum(1)">同步增加</button>
    <button style="margin-left:50px;" @click="asyncAddNum(1)">异步增加</button>
    <hr />
    <button @click="showFooter()">显示</button>
    <button style="margin-left:50px;" @click="hideFooter()">隐藏</button>
    <div class="showOrHide" v-if="isShow">
      我是需要显示隐藏的
    </div>
    <hr />
    <h1>This is an about page</h1>
    <hr />
    <click />
    <show />
    <hr />
    <first />

    <div class="duotai"></div>
  </div>
</template>
<script>
import click from "@/components/eventBus/click";
import show from "@/components/eventBus/show";
import first from "@/components/first";

export default {
  name: "About",
  components: {
    click,
    show,
    first
  },
  props: {
    // 路由传过来的
    newsletterPopup: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      $lilu: "2222" // undefined   (以 _ 或 $ 开头的 property 不会被 Vue 实例代理)
    };
  },
  computed: {
    changableNum() {
      return this.$store.state.changableNum;
    },
    isShow() {
      return this.$store.getters.isShow;
    }
  },
  mounted() {
    console.log(this.newsletterPopup);
    console.log(this.$lilu);
  },
  methods: {
    addNum(sum) {
      this.$store.commit("addNum", sum);
    },
    asyncAddNum(sum) {
      this.$store.dispatch("getNewNum", sum);
    },
    showFooter() {
      this.$store.dispatch("showFooter");
    },
    hideFooter() {
      this.$store.dispatch("hideFooter");
    }
  }
};
</script>
<style lang="less" scoped>
.color() {
  color: red;
}
.box1 {
  .color();
}
.triangle(top,@width:20px,@color:#000) {
  border-color: transparent transparent @color transparent;
}
.triangle(right,@width:20px,@color:#000) {
  border-color: transparent @color transparent transparent;
}

.triangle(bottom,@width:20px,@color:#000) {
  border-color: @color transparent transparent transparent;
}
.triangle(left,@width:20px,@color:#000) {
  border-color: transparent transparent transparent @color;
}
.triangle(@_,@width:20px,@color:#000) {
  border-style: solid;
  border-width: @width;
}
.duotai {
  .triangle(left, 50px, #999);
}
.showOrHide {
  background:yellow;
  width:200px;
  height:100px;
  font-size: .2rem /* 16/80 */
}
</style>

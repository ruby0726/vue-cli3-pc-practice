<template>
  <div>
    <button @click="changeDemo">点击子组件改变demo</button>
    <div>{{ demo }}</div>
    <third />
  </div>
</template>

<script>
import third from "./third";

export default {
  name: "second",
  components: {
    third
  },
  inject: ["bus", "obj"],
  data() {
    return {
      demo: this.bus
    };
  },
  mounted() {
    let jubuDemo = this.bus;
    jubuDemo = "demo_2";
    console.log(jubuDemo);
    console.log("父级传过来是啥就是啥===" + this.bus); // 父级传过来是啥就是啥
    console.log(this.obj); // 父级传过来是啥就是啥
  },
  methods: {
    changeDemo() {
      this.demo = "demoCopy";
    }
  }
};
</script>

<style></style>

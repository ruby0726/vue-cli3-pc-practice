<template>
  <div>
    <button @click="changeDemo">点击孙组件改变demo</button>
    <div>{{ demo }}</div>
  </div>
</template>

<script>
export default {
  name: "third",
  inject: ["bus"],
  data() {
    return {
      demo: this.bus
    };
  },
  methods: {
    changeDemo() {
      this.demo = "demoCopy";
    }
  }
};
</script>

<style></style>

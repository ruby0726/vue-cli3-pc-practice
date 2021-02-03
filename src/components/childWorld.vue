<template>
  <div>
    <div>coo: {{ coo }}</div>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>

<script>
export default {
  name: "childWorld",
  inheritAttrs: false,
  props: {
    coo: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    startUpRocket() {
      this.$emit("upRocket");
    }
  }
};
</script>

<style></style>

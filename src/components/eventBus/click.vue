<template>
  <div @click="doClick($event)">点击我</div>
</template>

<script>
import bus from "@/common/bus.js";

export default {
  name: "click",
  data() {
    return {};
  },
  methods: {
    doClick(event) {
      bus.$emit("getTarget", event.target);
    }
  }
};
</script>

<style></style>

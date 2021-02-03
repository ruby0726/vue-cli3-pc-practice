<template>
  <div>show</div>
</template>

<script>
import bus from "@/common/bus.js";

export default {
  name: "show",
  data() {
    return {};
  },
  mounted() {
    bus.$on("getTarget", target => {
      console.log(target);
    });
  }
};
</script>

<style></style>

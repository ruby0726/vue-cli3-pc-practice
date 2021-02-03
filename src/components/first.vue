<template>
  <div>
    {{ bus }}
    <second />
  </div>
</template>

<script>
import second from "./second";

export default {
  name: "first",
  provide: {
    bus: "demo",
    obj: {
      test: "hi"
    }
  },
  data() {
    return {
      bus: this.bus //取不到的
    };
  },
  components: {
    second
  },
  mounted() {
    this.bus = "demo2"; // 改变不起效
    // this.obj.test = "hello"; // 改变不起效
  }
};
</script>

<style></style>

<template>
  <div class="hello">
    <div>foo:{{ foo }}</div>
    <div>attrs:{{ $attrs }}</div>
    <childWorld v-bind="$attrs" v-on="$listeners" />
    <renderDemo color="#7F583F" :level="level">
      我是render出来的strong
    </renderDemo>
  </div>
</template>

<script>
import childWorld from "./childWorld";
import renderDemo from "./renderDemo";

export default {
  name: "HelloWorld",
  inheritAttrs: false,
  data() {
    return {
      level: 3
    };
  },
  props: {
    foo: {
      type: String,
      default: ""
    }
  },
  components: {
    childWorld,
    renderDemo
  },
  mounted() {
    console.log("子组件触发 mounted 钩子函数 ...");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>add</div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {
    $route: {
      handler: function(to, from) {
        console.log(to, from);
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  }
};
</script>

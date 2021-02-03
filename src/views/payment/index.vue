<template>
  <div>
    <div v-if="!id">
      <div>我是列表页</div>
      <button @click="toDetail">点击跳转到详情页</button>
      <button @click="changeName">改名字</button>
      <button @click="reName">还原</button>
      <button @click="reload()">刷新当前组件</button>
      <hr />
      <div>{{ name }}</div>
    </div>
    <detail v-else />
  </div>
</template>

<script>
import detail from "./detail.vue";

export default {
  name: "payment",
  data() {
    return {
      name: "lilu",
      age: 18
    };
  },
  components: {
    detail
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  mounted() {
    console.log(this.$data);
    console.log(this.$options.data());
  },
  methods: {
    toDetail() {
      this.$router.replace({ name: "payment", query: { id: "123" } });
    },
    changeName() {
      this.name = "ruby";
    },
    reName() {
      Object.assign(this.$data, this.$options.data());
    },
    reload() {
      this.$forceUpdate();
    }
  }
};
</script>

<style></style>

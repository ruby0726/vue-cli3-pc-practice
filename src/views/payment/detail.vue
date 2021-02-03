<template>
  <div>
    <div>
      <div>我是详情页</div>
      姓：<input v-model="firstName" v-focus /> 名：<input v-model="lastName" />
      姓名：<input v-model="fullName" />
      <div>{{ fullName }}</div>
    </div>
    <button @click="toIndex">跳转到列表页</button>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      firstName: "zhang",
      lastName: "san"
    };
  },
  computed: {
    fullName: {
      // getter方法
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter方法
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = name[names.length - 1];
        return this.firstName + " " + this.lastName;
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let a = [1, 2, 3, 4];
      let b = [1, 2, 3, 4];
      delete a[0];
      console.log(a); //[empty,2,3,4]
      this.$delete(b, 0);
      console.log(b); //[2,3,4]
    },
    toIndex() {
      this.$router.replace({ name: "payment" });
    }
  }
};
</script>

<style></style>

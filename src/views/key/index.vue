<template>
  <div>
    <span>解释key的作用</span>
    <child
      v-for="(item, i) in array"
      :key="item.id"
      :text="item"
      @delete="remove(i)"
    />
  </div>
</template>
<script>
import child from "./child";

export default {
  name: "key",
  components: {
    child
  },
  data() {
    return {
      // 不绑定Key用
      // array: [1, 2, 3]
      array: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" }
      ]
    };
  },
  methods: {
    remove(i) {
      this.array.splice(i, 1);
    }
  }
};
</script>
<style lang="less" scoped>
// 媒体查询
#main {
  @media screen {
    @media (max-width: 768px) {
      width: 100px;
    }
  }
  @media tv {
    width: 2000px;
  }
}
</style>

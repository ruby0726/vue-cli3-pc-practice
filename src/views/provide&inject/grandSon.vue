
<template functional>
  <div class="border2">
    // 函数式组件取值injections.theme.color(函数式组件没有this)   非函数式组件this.theme.color
    <h3 :style="{ color: injections.theme.color }">F 组件</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  }
}
</script>

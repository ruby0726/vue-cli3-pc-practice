<template>
  <div class="waterfall">
    <div v-for="(item,index) in 20" class="item" :style="{height:heights[Math.floor(Math.random()*4)]+'px',background:colors[Math.floor(Math.random()*12)]}">{{index + 1}}</div>
  </div>
</template>
<script>
export default {
  name: 'Waterfall',
  data() {
    return {
      //模拟随机高度
      heights: [200, 250, 150, 300],
      //颜色尽量随机,区别每个模块
      colors: ['#eccf2c', '#b8232c', '#125d9e', '#367945', '#fca91b', '#26ada7', '#77bfbf', '#ff5c87',
          '#f40', '#ee2061', '#feee39', '#f5a79a', '#ec70d0', '#b4a1cf']
    }
}
}
</script>
<style scoped>
  .waterfall {
    width: 400px;
    margin: 0 auto;
    /* 内容均分三份 */
    column-count: 3; 
    /* 列之间的间距 */
    column-gap: 10px;
  }
  .item {
    /* 保证子元素不会被分割 */
    break-inside: avoid;
  }
</style>
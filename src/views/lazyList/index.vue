<template>
  <div class="lazy-list">
    <div class="lazy-render-list-item" v-for="item in data">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    const count = 40;
    const data = [];
    for(let i = 0; i< count; i++) {
      data.push(i)
    }
    return {
      count,
      data
    }
  },
  mounted() {
    window.onscroll = () => {
      const maxScrollTop = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) - window.innerHeight
      const currentScrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop)

      if(maxScrollTop - currentScrollTop < 20) {
        const count = this.count
        for(let i=count; i<count + 40;i++) {
          this.data.push(i)
        }
        this.count = count + 40
      }
    }
  }
}
</script>
<style>
  .lazy-render-list {
    border: 1px solid #666;
  }
  .lazy-render-list-item {
    padding: 5px;
    color: #666;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
</style>
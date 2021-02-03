<template>
<div>
  <div class="container">
    <div class="border-top logo">logo</div>
  </div>
  <div class="box">
    <div class="item" v-for="item in list" :key="item">
      {{item}}
      <i></i>
      <span>66666</span>
      <p>888888</p>
    </div>
  </div>
  <div class="box">
    <div class="item" v-for="item in list" :key="item">
      {{item}}
      <i></i>
      <span>66666</span>
      <p>888888</p>
    </div>
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5]
    }
  }
}
</script>
<style lang="stylus" scoped>
  styles = 1px solid red
  lists =  (top bottom left)
  for key in lists {
    .border {
      border: styles
    }
    .border-{key} {
      border-{key}: styles
    }
  }
  .logo {
    width: 100px;
    height 100px;
  }
  .box {
    width: 500px;
    height 500px;
    border 1px solid pink;

    :nth-child(1) {
      color: red
    }
    :nth-of-type(2) {
      color: yellow
    }
  }
  .box:nth-child(2) {
    width: 200px;
    height 200px;
    border 1px solid blue;
  }
  .box:last-child{
    border 1px dashed pink;
  }
</style>
<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="logo2">logo2</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  pos() 
    position: arguments 
    width: 100px unless @width
    height : 100px unless @height 
    z-index: 1 unless @z-index
    top: 0
    left 0
  .container
    position relative
    color: blue
    .logo
      background-color @color
      z-index: 20
      pos:absolute
    .logo2
      width: 200px
      height 200px
      background-color pink
      z-index: 30
      pos(absolute)
</style>
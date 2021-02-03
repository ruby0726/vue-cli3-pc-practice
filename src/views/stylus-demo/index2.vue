<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="logo2">logo2</div>
    <div class="logo3">logo3</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  pad(types = padding, n = 5px)
    if padding in types
      padding n
    if margin in types
      margin n

  .logo
    pad()

  .logo2
    pad(margin)

  .logo3
    pad(padding margin, 10px)
</style>
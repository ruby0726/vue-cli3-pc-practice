<template>
  <div>
    <p v-highlight="'yellow'">hhhhhh</p>
  </div>
</template>
<script>
export default {
  name: 'DirectiveDemo',
  data() {
    return {

    }
  },
  /*自定义指令钩子：
    bind-指令绑定到元素后发生，只发生一次。
    inserted - 元素插入父dom后发生。
    update - 当元素更新，但子元素尚未更新时，将调用此钩子
    componentUpdated - 一旦组件和子级被更新，就会调用这个钩子
    unbind - 一旦指令被移除，就会调用这个钩子。也只会调用一次
  */
  directives: {
    highlight: {
      bind(el,binding,vnode) {
        el.style.background = binding.value
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
p {
  width: 100px;
  height 50px
}
</style>
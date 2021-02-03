<template>
  <div id="app">
    <button @click="click">{{isFullscreen?'取消全屏':'全屏'}}</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/coll">Coll</router-link> |
      <router-link to="/payment">payment</router-link>|
      <router-link to="/render">render</router-link> |
      <router-link to="/key">key的作用</router-link>|
      <router-link to="/testPub">公用样式测试</router-link> |
      <router-link to="/upload">上传练习</router-link> |
      <router-link to="/iframe">iframe练习</router-link> |
      <router-link to="/proInje">provide&inject</router-link> |
      <router-link to="/stylus-demo">stylus-demo</router-link> |
      <router-link to="/big-screen">big-screen</router-link> |
      <router-link to="/vModelDemo">vModelDemo</router-link> |
      <router-link to="/vDirectiveDemo">vDirectiveDemo</router-link>|
      <router-link to="/canvas">canvas</router-link> |
      <router-link to="/waterfall">瀑布流布局</router-link> | 
      <router-link to="/lazyList">长列表懒加载</router-link> |
      <router-link to="/test">test</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import screenfull from 'screenfull'
const sf = screenfull

export default {
  name: 'App',
  data() {
    return {
      isFullscreen:  false
    }
  },
  mounted() {
    if (sf.isEnabled) {
      sf.on('change', this.change)
    }
  },
  beforeDestory() {
    if (sf.isEnabled) {
      sf.off('change', this.change)
    }
  },
  methods: {
    change() {
      if (sf.isEnabled) {
        this.isFullscreen = sf.isFullscreen
      }
    },
    click() {
      if (!sf.isEnabled) {
        alert('you browser can not work')
        return false
      }
      sf.toggle()
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

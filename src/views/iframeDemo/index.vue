<template>
  <div>
    <button @click="checkPage('iframeRedict')">iframe跳转</button>
    <button @click="checkPage('iframeProps')">iframe传值</button>
    <br/>
    
    <iframeRedict v-if="type==='iframeRedict'"/>
    <iframeProps v-if="type==='iframeProps'"/>

  </div>
</template>
<script>
import iframeRedict from './iframeRedict'
import iframeProps from './iframeProps'

export default {
  name: 'iframeDemo',
  components: {
    iframeRedict,
    iframeProps
  },
  data() {
    return {
      type: 'iframeRedict'
    }
  },
  methods: {
    checkPage(type) {
      this.type = type
    }
  }
}
</script>
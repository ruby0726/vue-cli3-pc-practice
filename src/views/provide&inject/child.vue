<template>
  <div>
    <h3 :style="{ color: color }">B 组件</h3>
    <slot :myName="myName" :age="age"></slot>
    <!-- <grandSon/> -->
  </div>
</template>
<script>
import grandSon from './grandSon'
export default {
  name: 'child',
  components: {
    grandSon
  },
  props: {
    color: {
      type: String,
      defult: ''
    }
  },
  data() {
    return{
      myName: 'ruby',
      age: '25'
    }
  }
  
}
</script>
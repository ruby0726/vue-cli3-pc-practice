<template>
  <div>
    顶级父组件
    <BComponent v-bind="obj"></BComponent>
  </div>
  
</template>

<script>
import BComponent from './B'
export default {
  name: 'A',
  components: {BComponent},
  data() {
    return {
      obj: {
        name: 'ruby',
        age: 18
      }
    }
  }
}
</script>
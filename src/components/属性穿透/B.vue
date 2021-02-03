<template>
  <div>
    <span>我是{{name}}，我今年{{age}}岁</span>
    <CComponent v-bind="$props"></CComponent>
  </div>
  
</template>

<script>
import CComponent from './C'
export default {
  name: 'B',
  components: {
    CComponent
  },
  props: {
    ...CComponent.props
  },
  mounted() {
    console.log(CComponent)
  }
}
</script>
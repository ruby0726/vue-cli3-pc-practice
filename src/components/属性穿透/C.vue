<template>
  <div>我是{{name}}，我今年{{age}}岁</div>
</template>

<script>
export default {
  name: 'C',
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 15
    }
  }
}
</script>
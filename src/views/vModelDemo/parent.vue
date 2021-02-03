<template>
  <div>
    <child v-model='aa'></child>
    <div>{{aa}}</div>
  </div>
</template>
<script>
import child from './child'

export default {
  name: 'Parent',
  components: {
    child
  },
  data() {
    return {
      aa:true
    }
  }

}
</script>
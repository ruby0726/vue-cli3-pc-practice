<template>
  <div>
    <component :is="type" :type="type" :id="id" />
  </div>
</template>
<script>
import add from "./add";
import edit from "./edit";
export default {
  components: {
    add,
    edit
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  }
};
</script>


<script>
export default {
  name: "renderDemo",
  props: {
    color: {
      type: String,
      default: '#222'
    }
  },
  data() {
    return {
      level: 3
    }
  },
  computed:{
    styleVar() {
      return {
        '--text-color': this.color
      }
    }
  },
  render(h) {
    const tag = ["div", "p", "strong", "h1", "h2", "textarea"][this.level - 1]
    const atr = {
      class: ['item'],
      style: this.styleVar
    }
    return h(tag, atr, this.$slots.default)
  }
}

</script>
<style scoped>
.item {
  color: var(--text-color)
}
</style>


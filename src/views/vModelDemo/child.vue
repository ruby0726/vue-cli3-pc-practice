<template>
  <div>
    <button @click="off">向父组件传值</button>
    <ul>
      <li v-for="(item,index) in steps" :key="index" :ref="item.name"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Child',
  props: {
    value: {
      type: Boolean,
      default: () => true
    }
  },
  // model: {
  //   prop: 'value',
  //   event: 'cvalue'
  // },
  data() {
    return {
      steps:[
        {name:'itemName',title:"step1",id:1,content:"步骤一",orderNumber:1},
        {name:'itemName',title:"step2",id:2,content:"步骤二",orderNumber:2},
        {name:'itemName',title:"step3",id:3,content:"步骤三",orderNumber:3}
      ]
    }
  },
  mounted() {
    console.log(this.$refs.itemName)
  },
  methods: {
    off() {
      this.$emit('input',!this.value)
    }
  }
}
</script>
// 使privide/inject响应式
<template>
  <div>
    <h1>parent组件</h1>
    <button @click="() => changeColor()">改变color</button>
    <child :color="color">
      <template v-slot="{myName,age}">
        <h2>{{myName}}:{{age}}</h2>
      </template>
    </child>
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
    return{
      color: ''
    }
  },
  // provide() {
  //   return {
  //     thenme: {
  //       color: this.color  //这种方式绑定的数据并不是可响应的   
  //       // 即A组件的color变化后，组件D、E、F不会跟着变
  //     }
  //   }
  // },
  provide() {
    return {
      theme: this//方法一：提供祖先组件的实例
    };
  },
  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  // provide() {
  //   this.theme = Vue.observable({
  //     color: "blue"
  //   });
  //   return {
  //     theme: this.theme
  //   };
  // },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
}
</script>
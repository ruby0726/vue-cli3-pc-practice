// 手动挂载组件  Message弹窗

import Vue from 'vue'
import Index from './index.vue'

let messageInstance = null
let MessageConstructor = Vue.extend(Index)

let init = () => {
  messageInstance = new MessageConstructor()
  messageInstance.$mount()
  console.log(messageInstance)
  document.body.appendChild(messageInstance.$el)
}

let caller = (options) => {
  if (!messageInstance) {
    init(options)
  }
  messageInstance.add(options)
}

export default {
  // 返回install 函数用于Vue.use() 注册
  install(Vue) {
    Vue.prototype.$message = caller
  }
}
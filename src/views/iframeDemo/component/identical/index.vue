<template>
  <div>
    <div>在线文档编译组件</div>
    <button @click="getData()">点击获取iframe数据</button>
    <button @click="setData('我是vue数据')">向iframe中发送数据</button>
    <iframe id="mainIframe" ref="mainIframe" name="mainIframe" src="http://localhost:80" frameborder="0" scrolling="auto" @load="loaded" />
  </div>
</template>
<script>
// 工具类
export default {
  name: 'wps-edit',
  props: {
  },
  mounted() {
    // 第一种：使用postMessage
    const mapFrame = this.$refs['mainIframe']
    if (mapFrame.attachEvent) { // 兼容浏览器判断
      mapFrame.attachEvent('onload', function() {
        const iframeWin = mapFrame.contentWindow
        iframeWin.postMessage('初始化值', '*')
        // data传递的参数   *写成子页面的域名或者是ip
      })
    } else {
      mapFrame.onload = function() {
        const iframeWin = mapFrame.contentWindow
        iframeWin.postMessage('初始化值', '*')
      }
    }
  },
  methods: {
    loaded() {
      const vm = this.$refs.mainIframe.contentWindow.vm
      console.log(vm)
      // vm.func1()
    },
    getData() {
      const obj1 = window.frames['mainIframe']// 获得对应iframe的window对象
      alert(obj1.aaaaa)
    },
    getWpsData() {
      return 'wps数据'
    },
    //  第二种：直接操作iframe
    setData(data) {
      const obj1 = window.frames['mainIframe']// 获得对应iframe的window对象
      obj1.wpsData = '设置的数据'
    }
  }
}
</script>
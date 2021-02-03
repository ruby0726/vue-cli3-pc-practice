// 长期存储的解决方法，因为放在state中的数据在刷新时会丢失，这时候使用这个plugin.js插件它会帮你存储起来
const storagePlugins = store => {
  // 当store初始化调用
  console.log('当store初始化调用==', store)
  if (localStorage.getItem('state')) store.replaceState(JSON.parse(localStorage.getItem('state')))
  store.subscribe((mutation, state) => {
    // 每次mutation之后调用， mutation 的格式为 { type, payload }
    console.log('每次mutation之后调用==', mutation, state)
    localStorage.setItem('state',JSON.stringify(state))
  })
}
export default storagePlugins;
<script>
export default {
  props: ['items'],
  data() {
    return {
      isRed: true
    }
  },
   /*
   * 和下边使用template相同
   * <template>
   *   <div :class="{'is-red': isRed}">
   *     <p>Example Text</p>
   *   </div>
   * </template>
   */
  // render(h) {
  //   return h('div',{
  //     'class': {
  //       'is-red': this.isRed
  //     }
  //   },[
  //     h('p','example test'),
  //     h('p', 'hhhh')
  //   ]
  //   )
  // }



/** <ul v-if="items.length">
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
    <p v-else>No items found.</p>
*/
  // render(h) {
  //   if(this.items.length) {
  //     return h('ul',this.items.map(function(item){
  //       return h('li',item.name)
  //     }))
  //   } else {
  //     return h('p','no items found')
  //   }
  // }



//   <template>
//   <ul>
//     <li v-for="item of list">
//         {{item.name}}
//     </li>
//   </ul>
// </template>
  // render(h) {
  //   return h('ul',this.list.map(item => h('li',item.name)))
  // }


//   v-model
// 要记住的一件事是，v-model就是绑定属性为value（还可以是其他属性），只要触发input事件并设置data属性的简写形式。不幸的是，渲染函数没有这么简写。我们必须自己实现它，如下所示。
  render(h) {
    return h('input',{
      domProps: {
        value: this.myBoundProperty
      },
      on: {
        input: e => {
          this.myBoundProperty = e.target.value
        }
      }
    })
  }
  // 等效于
    //   <template>
    //   <input :value="myBoundProperty" @input="myBoundProperty = $event.target.value"/>
    // </template>
  // 或者
    // <template>
    //   <input v-model="myBoundProperty"/>
    // </template>






  

}
</script>
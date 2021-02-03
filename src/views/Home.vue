<template>
  <div class="home">
    <div>点击</div>
    <hr />
    <div>changableNum:{{ changableNum }}</div>
    <hr />
    <router-link to="/about">About</router-link>
    <hr />
    <HelloWorld
      :foo="foo"
      :coo="coo"
      @hook:mounted="doSome"
      @upRocket="reciveRocket"
    />
    <hr/>
    <my-slot>
      <div slot="slot1">this is slot1</div>
      <div slot="slot2">This is slot2 </div>
    </my-slot>
    <div>
      <div>
        <span v-for="(item,index) in arr" :key="index">{{item}}</span>
      </div>
      <button @click="pushItem">push</button>
    </div>
    <hr/>
    <span class="overNone" :title="spanContent">{{spanContent}}</span>
    <h4>localForage测试</h4>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      foo: "hello world",
      coo: "hello rui",
      timer: "",
      arr: ['1'],
      spanContent: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
    }
  },
  computed: {
    changableNum() {
      return this.$store.state.changableNum;
    }
  },
  watch: {
    // 监听数组不需要deep  对象才需要
    arr(newVal,oldVal) {
      console.log(newVal,oldVal)
    }
  },
  mounted() {
    // 就算跳转页面了还是定时器会执行，消耗性能
    this.setTimer();
    this.addUserInfo()
  },
  methods: {
    // 保存用户信息
    addUserInfo() {
      var users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];
      localForage.setItem('users', users, function(result) {
        console.log(result);
      });
    },
    doSome() {
      console.log("父组件监听到 mounted 钩子函数 ..");
    },
    reciveRocket() {
      console.log("我要发射火箭了");
    },
    setTimer() {
      let timer = setInterval(() => {
        console.log(1);
      }, 1000);
      // 程序化的侦听器
          this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    },
    pushItem() {
      this.arr.push('1')
      this.$message({
        type: 'success',
        content: '成功信息提示',
        duration: 3000
      })
    }
  }
}
</script>
<style lang="less" scoped>
.overNone {
  display: inline-block;
  width:300px;
  border: 1px solid red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

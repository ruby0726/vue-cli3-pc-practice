<template>
  <div id="turnBox">
    <ul id="turnUl" :style="{ backgroundImage : 'url(' + activeObj.turntableBgc + ')'}">
      <li
        v-for="(item,index) in activeObj.prizeData"
        :key="index"
        :style="{webkitTransform: 'rotate(' + -item.angle + 'deg)'}"
      >
      </li>
    </ul>
    <img :src="activeObj.turntablebtn" alt=""  @click="startPlay" class="turnBtn">
  </div>
</template>
<script>
  export default {
    props: {
      activeObj: {
        type: Object,
        default: null
      },
    },
    data(){
      return {
        pIndex: 0, // 中奖物品的下标
        rotNum:  0, // 旋转圈数基数
        time: 5000, // 旋转时间
        timer: null, // 定时器
        oTurntable: '', // 旋转圆盘背景图
        type: 0, // 0 图片 1 汉字
      }
    },   
    created() {
      this.activeObj.prizeData = this.autoRotate(this.activeObj.prizeData)
      console.log(this.activeObj.prizeData);
    },
    //渲染完了
    mounted() {
      this.oTurntable = document.querySelector('#turnUl');
      // 过度中属性用时5s
      this.oTurntable.style.webkitTransition = 'transform ' + this.time / 1000 + 's ease';
    },
    methods:{
      //自动生成角度添加到数组上
      autoRotate(arr) {
        if (arr.length) {
          let len = arr.length;
          let base = 360 / len;
          arr.forEach((item, index) => {
            // 指的是某个奖品区域的中间 : base/2
            item.angle = 360 - (base / 2 + index * base);
          });
        }
        return arr;
      },
      // 点击开始,请求接口抽奖
      async startPlay(){
        const a = {
          prize: "50元和包券",
          id: 4
        }
        this.startBtn(a)
      },
      // 开始转动,通过奖项级别进行匹配:id 
      async startBtn(val) {
        const self = this
        self.activeObj.prizeData.forEach((i,d)=>{
          if(i.id == val.id){
            self.pIndex = d
          }
        })
        // 拿到相应的角度调旋转接口
        self.startrotate(self.activeObj.prizeData[self.pIndex].angle, () => {
          self.fulfillHandle(self.activeObj.prizeData[self.pIndex].prize);
        });
      },

      //开始旋转 angle角度  complete回调成功函数
      startrotate(angle, complete) {
        // 相应的角度 + 满圈 只是在原角度多转了几圈 360 * 6
        let rotate = 2160 * (this.rotNum + 1) + angle;
        this.oTurntable.style.webkitTransform = 'rotate(' + rotate + 'deg)';
        clearTimeout(this.timer);
        // 设置5秒后停止旋转,处理接口返回的数据
        this.timer = setTimeout(() => {
          complete();
          this.rotNum++;
        }, this.time);
      },
      //得奖后的处理
      fulfillHandle(prizeName) {
        this.$emit('result',prizeName)
      },
      
      //自动换行
      autoWrap(str) {
        if (str.length > 5 && str.length <= 10) {
          str = str.substring(0, 5) + '<br/>' + str.substring(5, str.length);
        } else if (str.length > 10) {
          str = str.substring(0, 5) + '<br/>' + str.substring(5, 9) + '...';
        }
        return str;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #turnBox {
    width: 545px;
    height: 544px;
    position: relative;
    overflow: hidden;
    margin: 0px auto;
    margin-top: 30px;
    background-position: center center;
    .turnBtn {
      position: absolute;
      width: 1.3rem;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-59%);
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% auto;
      z-index: 3;
    }
    ul {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-repeat: no-repeat;
      background-size: 100% auto;
      li {
        position: absolute;
        box-sizing: border-box;
        // padding-top: 0.5rem;
        color: #7e250d;
        font-size: 0.3rem;
        top: 0pc;
        left: 0px;
        width: 100%;
        height: 100%;
        line-height: 20px;
        transform-origin: 50% 50%;
        img {
          position: absolute;
          top: 0.3rem;
          left: 50%;
          transform: translateX(-50%);
          width: 20%;
        }
      }
    }
  }

</style>
<template>
  <div>
    // 使用form上传
    <form method="post" action="http://localhost:8100" enctype="multipart/form-data">
      选择文件:
        <input type="file" name="f1"/> input 必须设置 name 属性，否则数据无法发送<br/>
    <br/>
      标题：<input type="text" name="title"/><br/><br/><br/>
      <button type="submit" id="btn-0">上 传</button>
    </form>
    <!-- 条形加载条 -->
    <ul class="strip-loading flex-ct-x">
      <li v-for="v in 6" :key="v"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'upload'
}
</script>
<style lang="less" scoped>
  .strip-loading {
    width: 200px;
    height: 200px;
    li {
      border-radius: 3px;
      width: 6px;
      height: 30px;
      background-color: #f66;
      animation: beat 1s ease-in-out infinite;
      & + li {
        margin-left: 5px;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-delay: 600ms;
      }
      &:nth-child(5) {
        animation-delay: 800ms;
      }
      &:nth-child(6) {
        animation-delay: 1s;
      }
    }
}
</style>
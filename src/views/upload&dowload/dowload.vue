// 前端组织内容，csv方式下载

<template>
  <div>
    <div>
      <a href="" download="文件.csv" id="btn">下载</a>
    </div>
    <a href="" download="中文文件.csv" id="btn_chinese">下载中文</a>
  </div>
</template>
<script>
export default {
  name: 'dowload',
  data() {
    return {}
  },
  mounted() {
    // clickDownload(aLink){
    //   var str = "col1,col2,col3\nvalue1,value2,value3";
    //   str =  encodeURIComponent(str);
    //   aLink.href = "data:text/csv;charset=utf-8,"+str;
    //   aLink.click()
    // }
    var dataStr = "col1,col2,col3\nhello,world,english";
    var dataChineseStr = "姓名,年龄!\n张三,34\n王五,32\n李四,25";
    // chrome
    if (navigator.appName == "Netscape") {
      var blob = new Blob([dataStr], {type: "text/csv,charset=utf-8"});
      document.getElementById("btn").href = window.URL.createObjectURL(blob);
      var blobChinese = new Blob(['\ufeff'+dataChineseStr], {type: "text/csv,charset=utf-8"});
      document.getElementById("btn_chinese").href = window.URL.createObjectURL(blobChinese);
    } else {
      document.getElementById("btn").href = "data:text/csv;charset=utf-8," + encodeURIComponent(dataStr);
      document.getElementById("btn_chinese").href = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(dataStr);
    }
  }
}
</script>
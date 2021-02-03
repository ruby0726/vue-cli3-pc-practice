<script>
export default {
  data() {
    return {
      items: [
        { name: "111" },
        { name: "111" },
        { name: "111" },
        { name: "111" }
      ]
    };
  },
  // 这种方式写起来不方便
  // render(h) {
  //   return h(
  //     "ul",
  //     this.items.map(item => {
  //       return h("li", item.name);
  //     })
  //   );
  // },

  // jsx写法
  render() {
    // return (
    //   <ul>
    //     <li>1111</li>
    //     <li>1111</li>
    //     <li>111122</li>
    //   </ul>
    // );
    const inputAttrs = {
      type: "email",
      placeholder: "Enter your email"
    };
    const fn = {
      input: () => {
        console.log(111);
      }
    };

    return <input {...{ attrs: inputAttrs, on: fn }} />;
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  update() {
    console.log("update");
  },
  activated() {
    console.log("activated");
  }
};
</script>

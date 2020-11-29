<template>
  <div class="index-wrap">
    <span @click="user">汽车列表</span>
  </div>
</template>
 
<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router
        .push({
          name: "User",
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
 
<style lang = "scss" scoped>
.index-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 99;
}
</style>
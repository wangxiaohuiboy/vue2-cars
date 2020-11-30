<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="" alt="">
          <span></span>
        </h4>
      </header>
    </section>
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
 
<style lang = "scss">
@import "./index.scss";
</style>
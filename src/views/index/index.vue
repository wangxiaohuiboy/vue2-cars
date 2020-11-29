<template>
  <div>
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <Navbar />
    <!-- dom渲染 -->
    <Cars />
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>
 
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar";
export default {
  name: "Index",
  components: {
    Map,
    Cars,
    Navbar,
  },
  data() {
    return {
      // show: false,
    };
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  watch: {},
};
</script>
 
<style lang = "scss" scoped>
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 410px;
  background: #34393f;
  z-index: 100;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>
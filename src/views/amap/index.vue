<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      :zoom="zoom"
      :events="events"
      class="amap-demo"
    >
    </el-amap>
  </div>
</template>
 
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 18,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [116.404764, 39.918052],
        zoom:this.zoom, //初始化地图层级
      });
    });
  },
};
</script>
 
<style lang = "scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style> 
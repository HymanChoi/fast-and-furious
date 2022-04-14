<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item to="/home" icon="newspaper-o">News</van-tabbar-item>
    <van-tabbar-item to="/schedule" icon="calendar-o">Schedule</van-tabbar-item>
    <van-tabbar-item to="/data" icon="bar-chart-o">Data</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface DataProps {}

export default defineComponent({
  name: "",
  setup() {
    const data: DataProps = reactive({});

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>

<template>
  <van-swipe>
    <van-swipe-item><div class="img"></div></van-swipe-item>
    <van-swipe-item><div class="img"></div></van-swipe-item>
    <van-swipe-item><div class="img"></div></van-swipe-item>
    <van-swipe-item><div class="img"></div></van-swipe-item>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
    </template>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface DataProps {
  active: number;
}

export default defineComponent({
  name: "",
  setup() {
    const data: DataProps = reactive({
      active: 0,
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.img {
  width: 100%;
  height: 200px;
  background-color: skyblue;
}
</style>

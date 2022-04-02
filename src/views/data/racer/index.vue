<template>
  <van-nav-bar
    title="车手详情"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface DataProps {
  onClickLeft: () => void;
}

export default defineComponent({
  name: "",
  setup() {
    const data: DataProps = reactive({
      onClickLeft() {
        history.back();
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>

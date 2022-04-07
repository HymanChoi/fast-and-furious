<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

interface DataProps {
  title: string;
  /**
   *
   */
  onClickLeft: () => void;
}

export default defineComponent({
  name: "",
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      title: "",
      onClickLeft() {
        history.back();
      },
    });

    onBeforeMount(() => {
      data.title = route.query.name as string;
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>

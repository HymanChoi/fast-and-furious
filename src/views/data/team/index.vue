<template>
  <van-nav-bar
    title="Team Info"
    left-text="Back"
    left-arrow
    @click-left="goBack()"
  />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

interface DataProps {
  name: string;
  /**
   *
   */
  goBack: () => void;
}

export default defineComponent({
  name: "",
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      name: "",
      goBack() {
        history.back();
      },
    });

    onBeforeMount(() => {
      data.name = route.query.name as string;
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>

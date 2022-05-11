<template>
  <div class="detail">Detail</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Detail",
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>

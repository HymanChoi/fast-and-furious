<template></template>

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

<style lang="scss" scoped></style>

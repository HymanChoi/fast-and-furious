<template>
  <div class="drivers">
    <div class="driver" v-for="driver of info.drivers">
      <van-image :src="driver.photo" />
      <div class="driver-number">{{ driver.number }}</div>
      <div class="driver-frist-name">{{ driver.name.split(" ")[0] }}</div>
      <div class="driver-last-name">{{ driver.name.split(" ")[1] }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Drivers",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.drivers {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: calc(100vh - 314px);

  .driver {
    display: flex;
    flex-direction: column;
    width: 165px;
    box-shadow: $box-shadow;
    border-radius: 4px;
    overflow: hidden;

    &-number {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 40px;
      font-weight: bold;
    }

    &-frist-name {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 20px;
      color: #646566;
    }

    &-last-name {
      padding-left: 10px;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>

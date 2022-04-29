<template>
  <div class="list">
    <div class="list__item" v-for="(item, index) of list" :key="index + 'list'">
      <van-image
        lazy-load
        width="160"
        height="100"
        fit="cover"
        position="center"
        :src="item.cover"
      />
      <div class="list__item-text">
        <div class="tag">{{ item.tag }}</div>
        <div class="title threelo">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";

export default defineComponent({
  name: "News",
  props: {
    list: {
      type: Array as PropType<Array<any>>,
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
.list {
  height: calc(100vh - 170px);
  overflow: auto;
  padding-bottom: 15px;

  &__item {
    display: flex;
    align-items: center;
    margin: 0 15px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: $box-shadow;

    &-text {
      display: flex;
      flex-direction: column;
      width: 160px;
      padding: 0 15px;

      .tag {
        color: $f1-red;
        font-size: 13px;
      }

      .title {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }
}
</style>

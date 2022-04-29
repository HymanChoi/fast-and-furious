<template>
  <div class="list">
    <div class="list__item" v-for="(item, index) of list" :key="index + 'list'">
      <van-image
        class="list__item-cover"
        lazy-load
        fit="cover"
        height="200"
        :src="item.cover"
      />
      <div class="list__item-mask">
        <span class="twolo">{{ item.title }}</span>
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
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: $box-shadow;

    &-title {
      padding: 15px;
    }

    &-mask {
      position: absolute;
      bottom: 0;
      font-size: 14px;
      line-height: 20px;
      padding: 6px 12px;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }
}
</style>

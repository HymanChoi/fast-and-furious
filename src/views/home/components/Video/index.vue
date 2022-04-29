<template>
  <div class="list">
    <div class="list__item" v-for="(item, index) of list" :key="index + 'list'">
      <video
        controls
        controlslist="nodownload noplaybackrate"
        disablePictureInPicture="true"
        :poster="item.cover"
      >
        <source src="@/assets/media/flower.webm" type="video/webm" />
        <source src="@/assets/media/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
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

    &-mask {
      font-size: 14px;
      line-height: 20px;
      padding: 8px 12px;
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }
}
</style>

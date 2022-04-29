<template>
  <div class="list">
    <div class="list__mini-title">Main media</div>
    <div class="list__main-media">
      <div
        class="list__main-media__item"
        v-for="(item, index) of list"
        :key="index + 'list'"
      >
        <van-image
          lazy-load
          fit="cover"
          width="120"
          height="150"
          :src="item.cover"
        />
        <div class="list__main-media__item-mask">
          <span class="twolo">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div class="list__mini-title">Other media</div>
    <div class="list__other-media">
      <div
        class="list__other-media__item"
        v-for="(item, index) of list"
        :key="index + 'list'"
      >
        <van-image
          lazy-load
          fit="cover"
          width="90"
          height="90"
          :src="item.cover"
        />
        <div class="list__other-media__item-mask">{{ item.title }}</div>
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

  &__mini-title {
    margin: 0 15px 15px;
    font-size: 18px;
  }

  &__main-media {
    display: flex;
    padding: 0 15px 25px;
    overflow: auto;

    &__item {
      position: relative;
      box-shadow: $box-shadow;
      flex-shrink: 0;
      width: 120px;
      height: 150px;
      border-radius: 4px;
      overflow: hidden;

      &-mask {
        position: absolute;
        bottom: 0;
        line-height: 14px;
        font-size: 12px;
        padding: 5px;
        color: #fff;
        border-radius: 0 0 4px 4px;
        background-color: rgba($color: #000000, $alpha: 0.6);
      }
    }

    &__item + &__item {
      margin-left: 15px;
    }
  }

  &__other-media {
    &__item {
      display: flex;
      margin: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: $box-shadow;

      &-mask {
        flex: 1;
        font-size: 14px;
        line-height: 20px;
        padding: 0 15px;
      }
    }

    &__item + &__item {
      margin-top: 15px;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>

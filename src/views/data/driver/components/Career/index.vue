<template>
  <div class="list">
    <div
      class="list__item"
      :class="getClassName(item.team)"
      v-for="item in info.teams"
      :key="item.season + 'teams'"
    >
      <div class="list__item-team">{{ item.team }}</div>
      <div class="list__item-season">{{ item.season }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Career",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = reactive({
      active: 0,
      /**
       *
       * @param team
       */
      getClassName(team: string) {
        return `list__item_${team.replace(/\s/g, "")}`;
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 405px);
  padding: 15px 10px;
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
    font-size: 13px;
    border-radius: 4px;
    box-shadow: $box-shadow;
  }

  &__item + &__item {
    margin-top: 10px;
  }
}
</style>

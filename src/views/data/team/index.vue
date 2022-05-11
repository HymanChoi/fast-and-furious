<template>
  <div class="team">
    <van-icon class="back-icon" name="arrow-left" @click="goBack()" />
    <div class="team__board">
      <div class="team__board-name">{{ info.name }}</div>
      <div class="team__board-full-name">( {{ info.fullName }} )</div>
      <div class="team__board-logo">
        <van-image :src="info.logo" width="40"></van-image>
      </div>
      <div class="team__board-car">
        <van-image :src="info.carImg"></van-image>
      </div>
    </div>
    <van-tabs v-model:active="active" shrink>
      <van-tab title="Basic">
        <Basic v-if="show" :info="info" />
      </van-tab>
      <van-tab title="Drivers">
        <Drivers v-if="show" :info="info" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getTeams } from "@/apis";
import Basic from "./components/Basic/index.vue";
import Drivers from "./components/Drivers/index.vue";

interface DataProps {
  name: string;
  info: any;
  active: number;
  show: boolean;
  /**
   *
   */
  goBack: () => void;
}

export default defineComponent({
  name: "Team",
  components: {
    Basic,
    Drivers,
  },
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      name: "",
      info: {},
      active: 0,
      show: false,
      /**
       *
       */
      goBack() {
        history.back();
      },
    });

    onBeforeMount(async () => {
      data.name = route.query.name as string;
      data.info = await getTeams(data.name).then((res: any) => res[0]);
      data.show = true;
      console.log(data.info);
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.team {
  font-size: 14px;

  .back-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 18px;
    z-index: 999;
  }

  &__board {
    position: relative;
    height: 240px;

    &-name {
      position: absolute;
      top: 60px;
      width: 375px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }

    &-full-name {
      position: absolute;
      top: 100px;
      width: 375px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    &-logo {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    &-car {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 999;
      transform: rotateY(180deg);
    }
  }
}
</style>

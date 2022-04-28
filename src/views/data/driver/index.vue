<template>
  <div class="driver">
    <van-icon class="back-icon" name="arrow-left" @click="goBack()" />
    <div v-if="seasonInfo" class="driver__board">
      <div class="driver__board-avatar">
        <van-image :src="seasonInfo.avatar"></van-image>
      </div>
      <div class="driver__board-driverNumber">
        {{ seasonInfo.driverNumber }}
      </div>
      <div class="driver__board-firstName">
        {{ seasonInfo.firstName }}
      </div>
      <div class="driver__board-lastName">
        {{ seasonInfo.lastName }}
      </div>
      <van-image
        class="driver__board-flag"
        width="40"
        lazy-load
        :show-loading="false"
        :show-error="false"
        :src="seasonInfo.icnFlag"
      />
    </div>
    <div v-else class="driver__board driver__board_none"></div>
    <van-tabs v-model:active="active" shrink>
      <van-tab title="Basic">
        <Basic v-if="show" :info="info" />
      </van-tab>
      <van-tab title="Career">
        <Career v-if="show" :info="info" />
      </van-tab>
      <van-tab title="Wins">
        <Wins v-if="show" :info="info" />
      </van-tab>
      <van-tab title="Pole Positions">
        <PolePositions v-if="show" :info="info" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getDrivers } from "@/apis/index";
import Basic from "./components/Basic/index.vue";
import Career from "./components/Career/index.vue";
import Wins from "./components/Wins/index.vue";
import PolePositions from "./components/PolePositions/index.vue";

interface DataProps {
  name: string;
  info: any;
  seasonInfo: any;
  active: number;
  show: boolean;
  goBack: () => void;
}

export default defineComponent({
  name: "",
  components: {
    Basic,
    Career,
    Wins,
    PolePositions,
  },
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      name: "",
      info: {},
      seasonInfo: {},
      show: false,
      active: 0,
      /**
       *
       */
      goBack() {
        history.back();
      },
    });

    onBeforeMount(async () => {
      data.name = route.query.name as string;
      data.info = await getDrivers(data.name).then((res: any) => res[0]);
      data.seasonInfo = data.info.seasonInfo[0];
      data.show = true;
      console.log(data.info, data.seasonInfo);
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.driver {
  font-size: 14px;
  text-align: left;

  .back-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 18px;
    z-index: 999;
  }

  &__board {
    position: relative;
    height: 280px;

    &-flag {
      position: absolute;
      top: 170px;
      left: 15px;
    }

    &-firstName {
      position: absolute;
      top: 215px;
      left: 15px;
      font-size: 18px;
      color: #646566;
    }

    &-lastName {
      position: absolute;
      top: 240px;
      left: 15px;
      font-size: 24px;
      font-weight: bold;
    }

    &-driverNumber {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c8c9cc;
      font-size: 180px;
      font-family: "Monoton";
    }

    &-avatar {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 999;
    }
  }
}
</style>

<template>
  <div class="driver">
    <van-nav-bar
      :title="info.name"
      left-text="Back"
      left-arrow
      @click-left="goBack()"
    />
    <div
      class="driver__board"
      :style="{ backgroundImage: `url(${info.photo})` }"
    >
      <div class="driver__board-driverNumber">{{ info.driverNumber }}</div>
      <van-image
        class="driver__board-flag"
        width="40"
        lazy-load
        :src="info.icnFlag"
      />
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="Basic">
        <Basic :info="info" />
      </van-tab>
      <van-tab title="Career">
        <Career :info="info" />
      </van-tab>
      <van-tab title="Honor">
        <Honor :info="info" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getDriver, getDriver2 } from "@/apis/index";
import Basic from "./components/Basic/index.vue";
import Career from "./components/Career/index.vue";
import Honor from "./components/Honor/index.vue";

interface DataProps {
  name: string;
  info: any;
  active: number;
  goBack: () => void;
}

export default defineComponent({
  name: "",
  components: {
    Basic,
    Career,
    Honor,
  },
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      name: "",
      info: {},
      active: 1,
      /**
       *
       */
      goBack() {
        history.back();
      },
    });

    onBeforeMount(async () => {
      data.name = route.query.name as string;
      const info = await getDriver({ name: data.name }).then(
        (res: any) => res[0]
      );
      const info2 = await getDriver2({ name: data.name }).then(
        (res: any) => res[0]
      );
      data.info = Object.assign(info, info2);
      console.log(data.info);
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

  &__board {
    position: relative;
    height: 240px;
    color: #fff;
    background-size: 100%;
    background-repeat: no-repeat;

    &-driverNumber {
      position: absolute;
      top: 20px;
      left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      font-family: "Monoton";
    }

    &-flag {
      position: absolute;
      top: 30px;
      right: 30px;
    }
  }
}
</style>

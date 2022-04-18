<template>
  <van-nav-bar title="Schedule" />
  <van-list class="list">
    <div
      class="list__item"
      :style="{ backgroundColor: item.bgc }"
      v-for="item of schedule"
      :key="item.cardTitle"
    >
      <div class="list__item-title">{{ item.cardTitle }}</div>
      <div class="list__item-left">
        <van-image
          class="list__item-flag"
          height="20"
          lazy-load
          :src="item.countryFlagSrc"
        />
        <div class="list__item-place">
          {{ item.eventPlace }}
        </div>
        <div class="list__item-date">
          <span class="list__item-month">{{ item.month }}</span>
          <span class="list__item-day">
            {{ item.startDate }}-{{ item.endDate }}
          </span>
        </div>
        <div class="list__item-desc">{{ item.eventTitle }}</div>
      </div>
      <div class="list__item-right">
        <van-image v-if="item.track" height="80" lazy-load :src="item.track" />
      </div>
    </div>
  </van-list>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { getSchedule } from "@/apis/index";

interface DataProps {
  schedule: Array<any>;
  getList: () => void;
}

export default defineComponent({
  name: "",
  setup() {
    const data: DataProps = reactive({
      schedule: [],
      async getList() {
        data.schedule = await getSchedule().then();
      },
    });

    onBeforeMount(() => {
      data.getList();
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  height: calc(100vh - 96px);
  overflow-y: scroll;

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    margin: 15px 10px;
    padding: 15px 10px 10px;
    border: 4px double #2c3e50;
    border-radius: 10px;
    font-size: 14px;
    text-align: left;

    &-title {
      position: absolute;
      top: -11px;
      left: 30px;
      padding: 0 10px;
      background-color: #fff;
      color: #e10600;
      font-size: 16px;
      font-weight: bold;
    }

    &-left {
      position: relative;
      flex: 1;
    }

    &-place {
      font-size: 18px;
      margin-bottom: 8px;
    }

    &-flag {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid #eee;
    }

    &-date {
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 8px;
    }

    &-month {
      margin-right: 5px;
    }

    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 100px;
      margin-left: 10px;
      background: url(@/assets/img/plus.png) 8px repeat;
    }
  }
}
</style>

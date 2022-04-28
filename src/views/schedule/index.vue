<template>
  <van-nav-bar title="Schedule" />
  <van-list class="list">
    <div v-for="item of schedule" :key="item.cardTitle">
      <div class="list__item" :style="{ backgroundColor: item.bgc }">
        <div class="list__item-title">{{ item.cardTitle }}</div>
        <div class="list__item-left">
          <van-image
            class="list__item-flag"
            height="20"
            lazy-load
            :src="item.countryFlagSrc"
          />
          <div class="list__item-date">
            <span class="list__item-month">{{ item.month }}</span>
            <span class="list__item-day">
              {{ item.startDate }}-{{ item.endDate }}
            </span>
          </div>
          <div class="list__item-place">
            {{ item.eventPlace }}
          </div>
          <div class="list__item-desc">{{ item.eventTitle }}</div>
        </div>
        <div class="list__item-right">
          <van-image
            v-if="item.track"
            height="80"
            lazy-load
            :src="item.track"
          />
        </div>
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
    justify-content: space-between;
    align-items: center;
    margin: 30px 15px;
    padding: 20px 15px 15px;
    border-radius: 4px;
    font-size: 14px;
    box-shadow: $box-shadow;
    background-color: #fff;

    &-title {
      position: absolute;
      top: -14px;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      width: 140px;
      height: 28px;
      line-height: 28px;
      border-radius: 14px 14px 0 0;
      background-color: #fff;
      box-shadow: 0 -0.5px rgba(0, 0, 0, 0.12);
    }

    &-left {
      position: relative;
      width: 150px;
    }

    &-place {
      font-size: 16px;
      margin-bottom: 8px;
    }

    &-flag {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid #eee;
    }

    &-date {
      margin-bottom: 8px;
      color: $f1-red;
    }

    &-month {
      margin-right: 5px;
    }

    &-desc {
      font-size: 13px;
      color: #969799;
    }

    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 100px;
      background: url(@/assets/img/plus.png) 8px repeat;
    }
  }
}
</style>

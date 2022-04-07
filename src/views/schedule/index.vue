<template>
  <van-nav-bar title="Schedule" />
  <van-list class="list">
    <div
      class="list-item"
      :style="{ backgroundColor: item.bgc }"
      v-for="item of schedule"
      :key="item.cardTitle"
    >
      <van-divider
        :style="{
          color: '#e10600',
          borderColor: '#e10600',
          margin: '0',
        }"
        >{{ item.cardTitle }}</van-divider
      >
      <div class="list-item--content">
        <div class="list-item--left">
          <van-image class="flag" height="20" :src="item.countryFlagSrc" />
          <div class="date">
            <span class="month">{{ item.month }}</span>
            <span class="day"> {{ item.startDate }}-{{ item.endDate }} </span>
          </div>
          <div class="place">
            {{ item.eventPlace }}
          </div>
          <div class="desc">{{ item.eventTitle }}</div>
        </div>
        <div class="list-item--right">
          <van-image height="80" :src="item.track" />
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
        data.schedule = await getSchedule();
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

<style scoped>
.list {
  height: calc(100vh - 96px);
  overflow-y: scroll;
}

.list-item--content {
  display: flex;
  align-items: center;
  margin: 0 4px 10px 0;
  padding: 10px;
  font-size: 14px;
  text-align: left;
  border-right: 1px solid #e10600;
  border-bottom: 1px solid #e10600;
  border-radius: 0 0 10px 0;
}

.list-item--left {
  position: relative;
  flex: 1;
}

.flag {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #eee;
}

.date {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 8px;
}

.month {
  margin-right: 5px;
}

.place {
  font-size: 18px;
  margin-bottom: 8px;
}

.list-item--right {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 100px;
  margin-left: 15px;
  background: url(@/assets/img/plus.png) 8px repeat;
}
</style>

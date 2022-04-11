<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="year" :options="years" />
  </van-dropdown-menu>
  <van-tabs v-model:active="active">
    <van-tab title="Driver">
      <van-list class="list">
        <div class="item">
          <div class="item-position">POS</div>
          <div class="item-driver">Driver</div>
          <div class="item-points">PTS</div>
        </div>
        <div
          class="item"
          v-for="item in drivers"
          :key="item.position"
          @click="goToInfo('driver', item.driver)"
        >
          <div class="item-position">{{ item.position }}</div>
          <div class="item-driver">{{ item.driver }}</div>
          <div class="item-points">{{ item.points }}</div>
        </div>
      </van-list>
    </van-tab>
    <van-tab title="Team">
      <van-list class="list">
        <div class="item">
          <div class="item-position">POS</div>
          <div class="item-driver">Team</div>
          <div class="item-points">PTS</div>
        </div>
        <div
          class="item"
          v-for="item in teams"
          :key="item.position"
          @click="goToInfo('team', item.team)"
        >
          <div class="item-position">{{ item.position }}</div>
          <div class="item-driver">{{ item.team }}</div>
          <div class="item-points">{{ item.points }}</div>
        </div>
      </van-list>
    </van-tab>
  </van-tabs>

  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import { getDrivers, getTeams } from "@/apis/index";

interface Drivers {
  id: number;
  position: number;
  driver: string;
  points: number;
}

interface Team {
  id: number;
  position: number;
  team: string;
  points: number;
}

interface DataProps {
  active: number;
  year: number;
  years: Array<any>;
  teams: Array<Team>;
  drivers: Array<Drivers>;
  goToInfo: (where: string, name: string) => void;
  getList: () => void;
}

export default defineComponent({
  name: "",
  setup() {
    const router = useRouter();
    const data: DataProps = reactive({
      year: 2022,
      years: [
        { text: "2022 Standings", value: 2022 },
        { text: "2021 Standings", value: 2021 },
        { text: "2020 Standings", value: 2020 },
        { text: "2019 Standings", value: 2019 },
        { text: "2018 Standings", value: 2018 },
        { text: "2017 Standings", value: 2017 },
        { text: "2016 Standings", value: 2016 },
        { text: "2015 Standings", value: 2015 },
        { text: "2014 Standings", value: 2014 },
        { text: "2013 Standings", value: 2013 },
        { text: "2012 Standings", value: 2012 },
        { text: "2011 Standings", value: 2011 },
        { text: "2010 Standings", value: 2010 },
      ],
      active: 0,
      teams: [],
      drivers: [],
      /**
       *
       * @param where
       * @param name
       */
      goToInfo(where: string, name: string) {
        router.push({ path: `/data/${where}`, query: { name: name } });
      },
      /**
       *
       */
      async getList() {
        data.teams = await getTeams(data.year).then((res: any) => res.list);
        data.drivers = await getDrivers(data.year).then((res: any) => res.list);
      },
    });

    watch(
      () => data.year,
      async (newVal) => {
        data.teams = await getTeams(newVal).then((res: any) => res.list);
        data.drivers = await getDrivers(newVal).then((res: any) => res.list);
      }
    );

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
  height: calc(100vh - 140px);
  overflow-y: scroll;
}
.item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
}
.item-position {
  width: 60px;
}
.item-img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #e10600;
}
.item-driver {
  flex: 1;
}
.item-points {
  width: 80px;
}
</style>

<template>
  <van-nav-bar title="Data" />
  <van-dropdown-menu>
    <van-dropdown-item v-model="year" :options="years" />
    <van-dropdown-item v-model="type" :options="types" />
    <van-dropdown-item
      v-if="type === 'standings'"
      v-model="standingType"
      :options="standingTypes"
    />
  </van-dropdown-menu>

  <van-list v-if="standingType === 'driver'" class="list">
    <div class="list__item">
      <div class="list__item-position">POS</div>
      <div class="list__item-driver">Driver</div>
      <div class="list__item-points">PTS</div>
    </div>
    <div
      class="list__item"
      v-for="item in drivers"
      :key="item.position"
      @click="goToInfo('driver', item.driver)"
    >
      <div class="list__item-position">{{ item.position }}</div>
      <div class="list__item-driver">{{ item.driver }}</div>
      <div class="list__item-points">{{ item.points }}</div>
    </div>
  </van-list>
  <van-list v-else class="list">
    <div class="list__item">
      <div class="list__item-position">POS</div>
      <div class="list__item-driver">Team</div>
      <div class="list__item-points">PTS</div>
    </div>
    <div
      class="list__item"
      v-for="item in teams"
      :key="item.position"
      @click="goToInfo('team', item.team)"
    >
      <div class="list__item-position">{{ item.position }}</div>
      <div class="list__item-driver">{{ item.team }}</div>
      <div class="list__item-points">{{ item.points }}</div>
    </div>
  </van-list>

  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import { getDriverStandings, getTeamStandings } from "@/apis/index";

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
  type: string;
  types: Array<any>;
  year: number;
  years: Array<any>;
  standingType: string;
  standingTypes: Array<any>;
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
      type: "standings",
      types: [
        { text: "Standings", value: "standings" },
        { text: "Teams", value: "teams" },
        { text: "Drivers", value: "drivers" },
      ],
      year: 2022,
      years: [
        { text: "2022", value: 2022 },
        { text: "2021", value: 2021 },
        { text: "2020", value: 2020 },
        { text: "2019", value: 2019 },
        { text: "2018", value: 2018 },
        { text: "2017", value: 2017 },
        { text: "2016", value: 2016 },
        { text: "2015", value: 2015 },
        { text: "2014", value: 2014 },
        { text: "2013", value: 2013 },
        { text: "2012", value: 2012 },
        { text: "2011", value: 2011 },
        { text: "2010", value: 2010 },
      ],
      standingType: "team",
      standingTypes: [
        { text: "Driver", value: "driver" },
        { text: "Team", value: "team" },
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
        data.teams = await getTeamStandings(data.year).then(
          (res: any) => res.list
        );
        data.drivers = await getDriverStandings(data.year).then(
          (res: any) => res.list
        );
      },
    });

    watch(
      () => data.year,
      async (newVal) => {
        data.teams = await getTeamStandings(newVal).then(
          (res: any) => res.list
        );
        data.drivers = await getDriverStandings(newVal).then(
          (res: any) => res.list
        );
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

<style lang="scss" scoped>
.list {
  height: calc(100vh - 144px);
  overflow-y: scroll;

  &__item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    font-size: 14px;
    background-color: #fff;

    &-position {
      width: 60px;
      text-align: center;
    }

    &-driver {
      flex: 1;
      text-align: center;
    }

    &-points {
      width: 80px;
      text-align: center;
    }
  }
}
</style>

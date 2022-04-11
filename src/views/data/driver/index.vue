<template>
  <div class="driver">
    <van-nav-bar
      title="Driver Info"
      left-text="Back"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="avatar-box">
      <van-image
        class="avatar"
        lazy-load
        round
        width="80"
        height="80"
        :src="info.avatar"
      />
      <div class="name">{{ info.name }}</div>
      <div class="main-info">
        <div class="driverNumber">No.{{ info.driverNumber }}</div>
        <div class="age">Age {{ getAge(info.dateOfBirth) }}</div>
        <div class="country">
          {{ info.country }}
          <van-image class="flag" lazy-load width="30" :src="info.icnFlag" />
        </div>
      </div>
    </div>
    <!-- <van-image height="300" :src="info.photo" /> -->
    <div class="info">
      <div class="team">
        <div class="label">Team</div>
        <div class="value">{{ info.team }}</div>
      </div>
      <div class="podiums">
        <div class="label">Podiums</div>
        <div class="value">{{ info.podiums }}</div>
      </div>
      <div class="points">
        <div class="label">Points</div>
        <div class="value">{{ info.points }}</div>
      </div>
      <div class="grandsPrixEntered">
        <div class="label">Grands Prix Entered</div>
        <div class="value">{{ info.grandsPrixEntered }}</div>
      </div>
      <div class="worldChampionships">
        <div class="label">World Championships</div>
        <div class="value">{{ info.worldChampionships }}</div>
      </div>
      <div class="highestRaceFinish">
        <div class="label">Highest Race Finish</div>
        <div class="value">{{ info.highestRaceFinish }}</div>
      </div>
      <div class="highestGridPosition">
        <div class="label">Highest Grid Position</div>
        <div class="value">{{ info.highestGridPosition }}</div>
      </div>
      <div class="dateOfBirth">
        <div class="label">Date of Birth</div>
        <div class="value">{{ info.dateOfBirth }}</div>
      </div>
      <div class="placeOfBirth">
        <div class="label">Place of Birth</div>
        <div class="value">{{ info.placeOfBirth }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getDriver } from "@/apis/index";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface DataProps {
  name: string;
  info: any;
  onClickLeft: () => void;
  getAge: (date: string) => string | undefined;
}

export default defineComponent({
  name: "",
  setup() {
    const route = useRoute();
    const data: DataProps = reactive({
      name: "",
      info: {},
      /**
       *
       */
      onClickLeft() {
        history.back();
      },
      /**
       *
       */
      getAge(date: string) {
        if (date) {
          let formatDate = date.split("/").reverse().join("-");
          let age = dayjs(formatDate).fromNow(true).slice(0, -5);
          console.log(age);
          return age;
        }
      },
    });

    onBeforeMount(async () => {
      data.name = route.query.name as string;
      data.info = await getDriver({ name: data.name }).then(
        (res: any) => res[0]
      );
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
.driver {
  font-size: 14px;
  text-align: left;
}
.avatar-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 15px;
  background-color: #e10600;
  color: #fff;
}
.avatar {
  background-color: #fff;
}
.name {
  margin-top: 15px;
  font-size: 16px;
}
.main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  text-align: center;
}
.age {
  flex: 1;
}
.country {
  position: relative;
  flex: 1;
}
.flag {
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  margin: auto;
  border: 1px solid #fdddca;
}
.driverNumber {
  flex: 1;
}
.info {
  padding: 20px 15px;
}
.info > div {
  line-height: 30px;
  display: flex;
}
.label {
  flex: 1;
  padding: 0 20px;
  font-weight: bold;
}
.value {
  flex: 1;
}
</style>

<template>
  <div class="info-list">
    <div class="info-list__item">
      <div class="info-list__item-label">Age</div>
      <div class="info-list__item-value">
        {{ getAge(info.dateOfBirth) }}
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Date of Birth</div>
      <div class="info-list__item-value">{{ info.dateOfBirth }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Country</div>
      <div class="info-list__item-value">{{ info.country }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Place of Birth</div>
      <div class="info-list__item-value">{{ info.placeOfBirth }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Team</div>
      <div class="info-list__item-value">{{ info.team }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Podiums</div>
      <div class="info-list__item-value">{{ info.podiums }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Points</div>
      <div class="info-list__item-value">{{ info.points }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Grands Prix Entered</div>
      <div class="info-list__item-value">
        {{ info.grandsPrixEntered }}
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">World Championships</div>
      <div class="info-list__item-value">
        {{ info.worldChampionships }}
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Highest Race Finish</div>
      <div class="info-list__item-value">
        {{ info.highestRaceFinish }}
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Highest Grid Position</div>
      <div class="info-list__item-value">
        {{ info.highestGridPosition }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface DataProps {
  getAge: (date: string) => string | undefined;
}

export default defineComponent({
  name: "Basic",
  props: {
    info: Object,
  },
  setup() {
    const data: DataProps = reactive({
      /**
       *
       */
      getAge(date: string) {
        if (date) {
          let formatDate = date.split("/").reverse().join("-");
          let age = dayjs(formatDate).fromNow(true).slice(0, -6);
          return age;
        }
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.info-list {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: calc(100vh - 420px);
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;

    &-label {
      width: 50%;
      font-weight: bold;
    }
    &-value {
      width: 45%;
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }
}
</style>

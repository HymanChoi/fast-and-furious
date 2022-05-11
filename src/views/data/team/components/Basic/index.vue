<template>
  <div class="info-list">
    <div class="info-list__item">
      <div class="info-list__item-label">Base</div>
      <div class="info-list__item-value">{{ info.base }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">First Entry</div>
      <div class="info-list__item-value">{{ info.firstEntry }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Team Chief</div>
      <div class="info-list__item-value">
        <span v-for="(person, index) of info.teamChief">
          {{ person }}
          <span v-show="index + 1 !== info.teamChief.length"> / </span>
        </span>
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Technical Chief</div>
      <div class="info-list__item-value">
        <span v-for="(person, index) of info.technicalChief">
          {{ person }}
          <span v-show="index + 1 !== info.technicalChief.length"> / </span>
        </span>
      </div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Chassis</div>
      <div class="info-list__item-value">{{ info.chassis }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Power Unit</div>
      <div class="info-list__item-value">{{ info.powerUnit }}</div>
    </div>

    <van-divider
      content-position="right"
      :style="{ color: '#969799', borderColor: '#969799' }"
    >
      Statistics
    </van-divider>

    <div class="info-list__totals">
      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ info.worldChampionships }}
        </div>
        <div class="info-list__totals__total-title">World Championships</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ info.polePositions }}
        </div>
        <div class="info-list__totals__total-title">Pole Positions</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ info.fastestLaps }}
        </div>
        <div class="info-list__totals__total-title">Fastest Laps</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ info.highestRaceFinish }}
        </div>
        <div class="info-list__totals__total-title">Highest Race Finish</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Basic",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = reactive({});

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
  padding: 20px 15px;
  height: calc(100vh - 324px);
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;

    &-label {
      width: 120px;
      color: #969799;
    }

    &-value {
      flex: 1;
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }

  &__totals {
    display: flex;
    flex-wrap: wrap;

    &__total {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 145px;
      padding: 10px;
      margin-right: 15px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: $box-shadow;

      &-num {
        font-size: 26px;
        color: $f1-red;
        line-height: 50px;
      }

      &-title {
        font-size: 13px;
        color: #969799;
      }
    }

    &__total:nth-child(n + 3) {
      margin-top: 15px;
    }

    &__total:nth-child(2n) {
      margin-right: 0px;
    }
  }
}
</style>
